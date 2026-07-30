import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

async function addAssignmentTable() {
  console.log('Adding instructor_assignments table...');

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS instructor_assignments (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, course_id)
      )
    `;

    console.log('Table created successfully!');
  } catch (error) {
    console.error('Failed to create table:', error);
  }
}

addAssignmentTable();
