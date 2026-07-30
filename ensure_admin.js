import { neon } from '@neondatabase/serverless';
import 'dotenv/config';

const sql = neon(process.env.VITE_DATABASE_URL);

async function ensureAdmin() {
  console.log("Checking for admin user...");
  try {
    const SCHOOL_ID = 1;
    const [admin] = await sql`
      SELECT * FROM users 
      WHERE school_id = ${SCHOOL_ID} AND role = 'admin'
      LIMIT 1
    `;

    if (!admin) {
      console.log("No admin found. Creating default admin account...");
      await sql`
        INSERT INTO users (school_id, username, password, role)
        VALUES (${SCHOOL_ID}, 'admin', 'admin123', 'admin')
      `;
      console.log("Admin account created: admin / admin123");
    } else {
      console.log(`Admin account exists: ${admin.username}`);
    }
  } catch (err) {
    console.error("Error ensuring admin:", err);
  }
}

ensureAdmin();
