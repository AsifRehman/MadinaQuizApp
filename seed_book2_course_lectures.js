import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

async function run() {
  console.log('🚀 Creating Course and Lectures for Madina Arabic Book 2...');

  try {
    // 1. Get the school ID
    const schools = await sql`SELECT id FROM schools LIMIT 1`;
    if (schools.length === 0) {
      throw new Error('No schools found in the database. Run migrations/seeds first.');
    }
    const schoolId = schools[0].id;
    console.log(`Using School ID: ${schoolId}`);

    // 2. Insert or get Course for Book 2
    let courseId;
    const existingCourse = await sql`
      SELECT id FROM courses 
      WHERE name = 'Madina Arabic Book 2' OR name = 'Arabic Insights - Book 2'
      LIMIT 1
    `;
    if (existingCourse.length > 0) {
      courseId = existingCourse[0].id;
      console.log(`Course already exists: ID ${courseId}`);
    } else {
      const [newCourse] = await sql`
        INSERT INTO courses (school_id, name, description)
        VALUES (${schoolId}, 'Madina Arabic Book 2', 'Dr. V. Abdur Rahim - Book 2 Lessons and Exercises')
        RETURNING id
      `;
      courseId = newCourse.id;
      console.log(`Created Course: ID ${courseId}`);
    }

    // 3. Create 31 Lectures & Version 1 Quizzes
    for (let i = 1; i <= 31; i++) {
      const padded = String(i).padStart(2, '0');
      const title = `Book 2 - Lecture ${padded}`;
      
      // Check if lecture already exists
      let lectureId;
      const existingLec = await sql`
        SELECT id FROM lectures 
        WHERE course_id = ${courseId} AND order_index = ${i}
        LIMIT 1
      `;
      if (existingLec.length > 0) {
        lectureId = existingLec[0].id;
        console.log(`  Lecture ${i} already exists: ID ${lectureId}`);
      } else {
        const [newLec] = await sql`
          INSERT INTO lectures (course_id, title, order_index)
          VALUES (${courseId}, ${title}, ${i})
          RETURNING id
        `;
        lectureId = newLec.id;
        console.log(`  Created Lecture ${i}: ID ${lectureId}`);
      }

      // Check if Quiz (Version 1) already exists for this lecture
      const existingQuiz = await sql`
        SELECT id FROM quizzes 
        WHERE lecture_id = ${lectureId} AND version = '1'
        LIMIT 1
      `;
      if (existingQuiz.length > 0) {
        console.log(`    Quiz (v1) already exists: ID ${existingQuiz[0].id}`);
      } else {
        const quizTitle = `${title} Quiz`;
        const [newQuiz] = await sql`
          INSERT INTO quizzes (lecture_id, title, quiz_type, version)
          VALUES (${lectureId}, ${quizTitle}, 'Daily', '1')
          RETURNING id
        `;
        console.log(`    Created Quiz (v1): ID ${newQuiz.id}`);
      }
    }

    console.log('\n🎉 Successfully created course, 31 lectures, and V1 quizzes!');
  } catch (err) {
    console.error('❌ Failed:', err);
  }
}

run();
