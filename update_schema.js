import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

async function updateSchema() {
  console.log('Updating quiz version column...');

  try {
    // 1. Update existing 'v1.0' to '1'
    console.log('Converting v1.0 to 1...');
    await sql`
      UPDATE quizzes 
      SET version = '1' 
      WHERE version = 'v1.0'
    `;

    // 2. Change column type to INTEGER
    console.log('Changing version column type to INTEGER...');
    await sql`
      ALTER TABLE quizzes 
      ALTER COLUMN version TYPE INTEGER USING version::integer
    `;

    // 3. Add check constraint (1-255)
    console.log('Adding version constraint...');
    await sql`
      ALTER TABLE quizzes 
      ADD CONSTRAINT quiz_version_range CHECK (version >= 1 AND version <= 255)
    `;

    console.log('Schema update completed successfully!');
  } catch (error) {
    console.error('Schema update failed:', error);
  }
}

updateSchema();
