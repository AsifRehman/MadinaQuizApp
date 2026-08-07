import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

// ============================================================
// MIGRATION: Sections model
// courses ─► sections ─► lectures ─► quizzes   (+ exams on sections)
// ============================================================
async function run() {
  try {
    // 1. Create sections table
    await sql`
      CREATE TABLE IF NOT EXISTS sections (
        id SERIAL PRIMARY KEY,
        course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
        title TEXT NOT NULL,
        order_index INTEGER NOT NULL,
        kind TEXT NOT NULL DEFAULT 'book',   -- 'book' | 'exam'
        is_hidden BOOLEAN NOT NULL DEFAULT false,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('Created sections table.');

    // 2. Add section_id to lectures (if not present)
    await sql`ALTER TABLE lectures ADD COLUMN IF NOT EXISTS section_id INTEGER REFERENCES sections(id) ON DELETE CASCADE`;
    console.log('Added lectures.section_id.');

    // 3. Add section_id to quizzes (if not present) — nullable, for exam quizzes
    await sql`ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS section_id INTEGER REFERENCES sections(id) ON DELETE CASCADE`;
    console.log('Added quizzes.section_id.');

    // 3b. Add is_hidden flag to sections (if not present) — for hiding a section from students
    await sql`ALTER TABLE sections ADD COLUMN IF NOT EXISTS is_hidden BOOLEAN NOT NULL DEFAULT false`;
    console.log('Added sections.is_hidden.');

    // 4. Create the top-level "Madina Books" course
    const [existingMadina] = await sql`
      SELECT id FROM courses WHERE name = 'Madina Books' LIMIT 1
    `;
    let madinaId = existingMadina?.id;
    if (!madinaId) {
      const [madina] = await sql`
        INSERT INTO courses (school_id, name, description)
        VALUES (1, 'Madina Books', 'Dr. V. Abdur Rahim Madina Arabic Curriculum')
        RETURNING id
      `;
      madinaId = madina.id;
    }
    console.log('Madina Books course id:', madinaId);

    // 5. Find existing Book 1 and Book 2 courses
    const [book1Course] = await sql`SELECT id FROM courses WHERE name ILIKE '%Book 1%' OR name ILIKE '%Arabic Insights%' ORDER BY id LIMIT 1`;
    const [book2Course] = await sql`SELECT id FROM courses WHERE name ILIKE '%Book 2%' ORDER BY id LIMIT 1`;
    console.log('Book1 course:', book1Course?.id, 'Book2 course:', book2Course?.id);

    // 6. Create sections under Madina Books
    const getOrCreateSection = async (title, kind, orderIndex) => {
      const [existing] = await sql`
        SELECT id FROM sections WHERE course_id = ${madinaId} AND title = ${title} LIMIT 1
      `;
      if (existing) return existing.id;
      const [s] = await sql`
        INSERT INTO sections (course_id, title, order_index, kind)
        VALUES (${madinaId}, ${title}, ${orderIndex}, ${kind})
        RETURNING id
      `;
      return s.id;
    };

    const book1SectionId = await getOrCreateSection('Book 1', 'book', 1);
    const book2SectionId = await getOrCreateSection('Book 2', 'book', 2);
    const midtermSectionId = await getOrCreateSection('Mid Term Exam', 'exam', 3);
    console.log('sections: Book1=', book1SectionId, 'Book2=', book2SectionId, 'MidTerm=', midtermSectionId);

    // 7. Relink lectures: Book1 lectures -> Book1 section, Book2 -> Book2 section
    if (book1Course) {
      const res = await sql`
        UPDATE lectures SET section_id = ${book1SectionId}, course_id = ${madinaId}
        WHERE course_id = ${book1Course.id}
      `;
      console.log('Relinked Book1 lectures:', res.count);
    }
    if (book2Course) {
      const res = await sql`
        UPDATE lectures SET section_id = ${book2SectionId}, course_id = ${madinaId}
        WHERE course_id = ${book2Course.id}
      `;
      console.log('Relinked Book2 lectures:', res.count);
    }

    // 8. Relink mid-term quiz (id 79) -> Mid Term Exam section, detach from lecture
    const midtermQuiz = await sql`
      SELECT id FROM quizzes WHERE quiz_type = 'Mid Term' LIMIT 1
    `;
    if (midtermQuiz.length > 0) {
      const res = await sql`
        UPDATE quizzes SET section_id = ${midtermSectionId}, lecture_id = NULL
        WHERE id = ${midtermQuiz[0].id}
      `;
      console.log('Relinked mid-term quiz', midtermQuiz[0].id, '-> section', midtermSectionId, 'rows:', res.count);
    }

    // 9. Hide the Mid Term Exam section (reveal later)
    const [midtermSec] = await sql`
      SELECT id FROM sections WHERE id = ${midtermSectionId} LIMIT 1
    `;
    if (midtermSec) {
      await sql`UPDATE sections SET is_hidden = true WHERE id = ${midtermSectionId}`;
      console.log('Hidden Mid Term Exam section id:', midtermSectionId);
    }

    // 10. Summary
    const counts = await sql`
      SELECT (SELECT COUNT(*) FROM courses) AS courses,
             (SELECT COUNT(*) FROM sections) AS sections,
             (SELECT COUNT(*) FROM lectures WHERE section_id IS NOT NULL) AS lectures_linked,
             (SELECT COUNT(*) FROM quizzes WHERE section_id IS NOT NULL) AS quizzes_linked
    `;
    console.log('Summary:', JSON.stringify(counts[0]));
    console.log('\nMigration complete.');
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

run();
