import { neon } from '@neondatabase/serverless';

const databaseUrl = import.meta.env.VITE_DATABASE_URL;

export const sql = databaseUrl
  ? neon(databaseUrl)
  : () => {
      throw new Error(
        "No database connection string was provided to neon(). Please set the VITE_DATABASE_URL environment variable."
      );
    };

export const SCHOOL_ID = 1; // Quran Academy Fsd
export const COURSE_ID = 1; // Arabic Insights
