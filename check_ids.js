import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.DATABASE_URL);

async function check() {
  const schools = await sql`SELECT id, name FROM schools`;
  const courses = await sql`SELECT id, name FROM courses`;
  console.log('Schools:', schools);
  console.log('Courses:', courses);
}

check();
