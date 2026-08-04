import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.VITE_DATABASE_URL);

const updatedUr = "لَنْ تَلْعَبَ الْبَنَاتُ اور الْبَنَاتُ لَنْ يَلْعَبْنَ دونوں درست ہیں";

async function updateQuestion() {
  const rows = await sql`
    SELECT q.id, q.options
    FROM questions q
    JOIN quizzes z ON q.quiz_id = z.id
    JOIN lectures l ON z.lecture_id = l.id
    WHERE l.course_id = 2
      AND l.order_index = 19
      AND z.version = '1'
    ORDER BY q.id ASC
    OFFSET 14
    LIMIT 1
  `;

  if (rows.length === 0) {
    throw new Error('Book 2 Lecture 19 question 15 was not found.');
  }

  const question = rows[0];
  const options = typeof question.options === 'string'
    ? JSON.parse(question.options)
    : question.options;

  const optionIndex = options.findIndex(option =>
    option?.en === "Both 'Lan tal'aba al-banaatu' and 'Al-banaatu lan yal'abna' are correct"
  );

  if (optionIndex === -1) {
    throw new Error('The combined correct option was not found on Book 2 Lecture 19 question 15.');
  }

  options[optionIndex] = {
    ...options[optionIndex],
    ur: updatedUr,
  };

  await sql`
    UPDATE questions
    SET options = ${JSON.stringify(options)}
    WHERE id = ${question.id}
  `;

  console.log(`Updated Book 2 Lecture 19 question 15 option ${optionIndex + 1}.`);
}

updateQuestion().catch(error => {
  console.error(error);
  process.exit(1);
});
