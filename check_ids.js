import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL || process.env.DATABASE_URL);

async function check() {
  const lectures = await sql`
    SELECT l.order_index, l.id as lecture_id, l.title as lecture_title, 
           q.id as quiz_id, q.title as quiz_title, COUNT(qs.id) as question_count
    FROM lectures l
    LEFT JOIN quizzes q ON q.lecture_id = l.id
    LEFT JOIN questions qs ON qs.quiz_id = q.id
    WHERE l.section_id = 4
    GROUP BY l.order_index, l.id, l.title, q.id, q.title
    ORDER BY l.order_index ASC
  `;

  console.log(`\n=== Book 3 (Section 4) Lessons Check: Found ${lectures.length} entries ===\n`);
  console.table(lectures);

  const existingOrders = new Set(lectures.map(l => l.order_index));
  const missing = [];
  for (let i = 1; i <= 34; i++) {
    if (!existingOrders.has(i)) {
      missing.push(i);
    }
  }

  if (missing.length === 0) {
    console.log('✅ ALL lessons from 1 to 34 are PRESENT in database!');
  } else {
    console.log('❌ MISSING lessons:', missing);
  }

  const zeroQuestions = lectures.filter(l => Number(l.question_count) === 0);
  if (zeroQuestions.length > 0) {
    console.log('⚠️ Warning - Lectures with 0 questions:', zeroQuestions);
  } else {
    console.log('✅ Every single lesson has questions seeded successfully!');
  }
  const totalQuestions = lectures.reduce((sum, l) => sum + Number(l.question_count), 0);
  console.log(`\n🎉 Total Questions across all 34 Book 3 lessons: ${totalQuestions}\n`);

  // Check for any duplicate order_indexes
  const orderCounts = {};
  for (const l of lectures) {
    orderCounts[l.order_index] = (orderCounts[l.order_index] || 0) + 1;
  }
  const duplicates = Object.entries(orderCounts).filter(([_, count]) => count > 1);
  if (duplicates.length > 0) {
    console.log('⚠️ Duplicate order indices found:', duplicates);
  } else {
    console.log('✅ No duplicate order indices found!');
  }
}

check();
