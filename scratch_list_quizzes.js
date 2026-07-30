import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

async function check() {
  try {
    const courses = await sql`SELECT id, name FROM courses`;
    console.log('Courses:', courses);

    const lectures = await sql`SELECT id, title, order_index FROM lectures ORDER BY order_index`;
    console.log(`Lectures (total ${lectures.length}):`);
    for (const lec of lectures) {
      console.log(`  Lec ID ${lec.id}: Index ${lec.order_index} - ${lec.title}`);
    }

    const quizzes = await sql`SELECT id, lecture_id, title, quiz_type, version FROM quizzes ORDER BY lecture_id, version`;
    console.log(`Quizzes (total ${quizzes.length}):`);
    for (const q of quizzes) {
      const qCount = await sql`SELECT COUNT(*)::integer as count FROM questions WHERE quiz_id = ${q.id}`;
      console.log(`  Quiz ID ${q.id} (Lec ${q.lecture_id}): ${q.title} | Type: ${q.quiz_type} | Version: ${q.version} | Questions: ${qCount[0].count}`);
    }
  } catch (err) {
    console.error('Error during query:', err);
  }
}

check();
