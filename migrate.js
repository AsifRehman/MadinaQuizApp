import { Redis } from '@upstash/redis';
import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config();

const redis = new Redis({
  url: process.env.VITE_UPSTASH_REDIS_REST_URL,
  token: process.env.VITE_UPSTASH_REDIS_REST_TOKEN,
});

const sql = neon(process.env.DATABASE_URL);

async function migrate() {
  console.log('Starting migration to Neon PostgreSQL...');

  try {
    // 1. Create Tables
    console.log('Creating tables...');
    await sql`
      CREATE TABLE IF NOT EXISTS schools (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS courses (
        id SERIAL PRIMARY KEY,
        school_id INTEGER REFERENCES schools(id) ON DELETE CASCADE,
        name TEXT NOT NULL,
        description TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS lectures (
        id SERIAL PRIMARY KEY,
        course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
        title TEXT NOT NULL,
        order_index INTEGER NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS quizzes (
        id SERIAL PRIMARY KEY,
        lecture_id INTEGER REFERENCES lectures(id) ON DELETE CASCADE,
        title TEXT NOT NULL,
        quiz_type TEXT NOT NULL,
        version TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS questions (
        id SERIAL PRIMARY KEY,
        quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE,
        question_en TEXT NOT NULL,
        question_ur TEXT NOT NULL,
        options JSONB NOT NULL,
        correct_option_index INTEGER NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        school_id INTEGER REFERENCES schools(id) ON DELETE CASCADE,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'student',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(school_id, username)
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS results (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE,
        score NUMERIC(5, 2) NOT NULL,
        answers JSONB NOT NULL,
        completed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS login_logs (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        success BOOLEAN NOT NULL,
        timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // 2. Initialize School and Course
    console.log('Initializing School and Course...');
    const schools = await sql`
      INSERT INTO schools (name, slug) 
      VALUES ('Quran Academy Fsd', 'quran-academy-fsd') 
      ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name 
      RETURNING id
    `;
    const schoolId = schools[0].id;

    const courses = await sql`
      INSERT INTO courses (school_id, name, description) 
      VALUES (${schoolId}, 'Arabic Insights', 'Madina Book 1 Arabic Course') 
      RETURNING id
    `;
    const courseId = courses[0].id;

    // 3. Migrate Users
    console.log('Migrating Users...');
    const redisUsers = await redis.hgetall('quiz:users');
    const userMap = new Map(); // username -> pgId

    if (redisUsers) {
      for (const [username, password] of Object.entries(redisUsers)) {
        const role = username.toLowerCase() === 'instructor' ? 'instructor' : 'student';
        const pgUsers = await sql`
          INSERT INTO users (school_id, username, password, role) 
          VALUES (${schoolId}, ${username}, ${password}, ${role}) 
          ON CONFLICT (school_id, username) DO UPDATE SET password = EXCLUDED.password, role = EXCLUDED.role
          RETURNING id
        `;
        userMap.set(username, pgUsers[0].id);
      }
    }

    // 4. Migrate Questions and Lectures
    console.log('Migrating Lectures and Questions...');
    const redisQuestionsData = await redis.get('quiz:questions');
    const questions = typeof redisQuestionsData === 'string' ? JSON.parse(redisQuestionsData) : redisQuestionsData;

    const lecturesMap = new Map(); // lectureNum -> pgId
    const quizzesMap = new Map(); // lectureNum -> pgId (quizId)

    // Current app has lectures 1-10
    for (let i = 1; i <= 10; i++) {
      const pgLectures = await sql`
        INSERT INTO lectures (course_id, title, order_index) 
        VALUES (${courseId}, ${'Lecture ' + i}, ${i}) 
        RETURNING id
      `;
      const lectureId = pgLectures[0].id;
      lecturesMap.set(i, lectureId);

      const pgQuizzes = await sql`
        INSERT INTO quizzes (lecture_id, title, quiz_type, version) 
        VALUES (${lectureId}, ${'Lecture ' + i + ' Quiz'}, 'Daily', 'v1.0') 
        RETURNING id
      `;
      quizzesMap.set(i, pgQuizzes[0].id);
    }

    if (questions && Array.isArray(questions)) {
      for (const q of questions) {
        const quizId = quizzesMap.get(q.lecture);
        if (quizId) {
          await sql`
            INSERT INTO questions (quiz_id, question_en, question_ur, options, correct_option_index) 
            VALUES (${quizId}, ${q.qEn}, ${q.qUr}, ${JSON.stringify(q.options)}, ${q.correct})
          `;
        }
      }
    }

    // 5. Migrate Results
    console.log('Migrating Results...');
    const studentNames = await redis.smembers('quiz:students');
    if (studentNames) {
      for (const name of studentNames) {
        const userId = userMap.get(name);
        if (!userId) continue;

        const results = await redis.hgetall(`quiz:results:${name}`);
        if (results) {
          for (const [key, data] of Object.entries(results)) {
            // key is 'lecture_X'
            const lectureNum = parseInt(key.split('_')[1]);
            const quizId = quizzesMap.get(lectureNum);
            
            if (quizId && data) {
              const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
              await sql`
                INSERT INTO results (user_id, quiz_id, score, answers, completed_at) 
                VALUES (${userId}, ${quizId}, ${parsedData.lastScore}, ${JSON.stringify(parsedData.answers)}, ${parsedData.completedAt})
              `;
            }
          }
        }
      }
    }

    // 6. Migrate Login Logs
    console.log('Migrating Login Logs...');
    const logs = await redis.lrange('quiz:login_logs', 0, -1);
    if (logs) {
      for (const log of logs) {
        const parsedLog = typeof log === 'string' ? JSON.parse(log) : log;
        const userId = userMap.get(parsedLog.username);
        if (userId) {
          await sql`
            INSERT INTO login_logs (user_id, success, timestamp) 
            VALUES (${userId}, ${parsedLog.success}, ${parsedLog.timestamp})
          `;
        }
      }
    }

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrate();
