import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

async function check() {
  const sections = await sql`SELECT id, course_id, title, order_index, kind FROM sections ORDER BY order_index`;
  console.log('Sections:', JSON.stringify(sections, null, 2));
}

check();
