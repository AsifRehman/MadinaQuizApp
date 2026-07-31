import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

async function updateTitles() {
  console.log('🔄 Updating Book 1 lecture and quiz titles...\n');
  try {
    const lectures = await sql`SELECT id, order_index, title FROM lectures ORDER BY order_index`;
    for (const lec of lectures) {
      const paddedNum = String(lec.order_index).padStart(2, '0');
      const newTitle = `Book 1 - Lecture ${paddedNum}`;
      await sql`UPDATE lectures SET title = ${newTitle} WHERE id = ${lec.id}`;

      // Also update quiz titles for this lecture
      const quizzes = await sql`SELECT id, version FROM quizzes WHERE lecture_id = ${lec.id}`;
      for (const quiz of quizzes) {
        const newQuizTitle = `Book 1 - Lecture ${paddedNum} Quiz`;
        await sql`UPDATE quizzes SET title = ${newQuizTitle} WHERE id = ${quiz.id}`;
      }
      console.log(`  ✅ Lecture ${lec.id}: "${lec.title}" → "${newTitle}"`);
    }
    console.log('\n🎉 All Book 1 titles updated successfully!');
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

updateTitles();
