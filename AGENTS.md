# MadinaQuizApp Rules & Context

This workspace contains the **Madina Arabic Quiz App**, a web platform for Arabic grammar quizzes based on the Madina Arabic book series.

For detailed architecture, schema, and views, refer to [PROJECT_REFERENCE.md](file:///d:/SideProjects/MadinaQuizApp/PROJECT_REFERENCE.md).

## Quick Context
- **Stack**: Vite + React 18, Tailwind CSS, Neon PostgreSQL (`@neondatabase/serverless`), Groq SDK.
- **Main Files**:
  - `src/App.jsx`: Main application container, router, views (Student/Instructor/Admin), and quiz taking runner.
  - `src/QuizContentManager.jsx`: Question table, JSON editor, bulk Excel/TSV import/export.
  - `src/groq.js`: Groq AI helper.
- **Database**:
  - Questions are stored with `question_en`, `question_ur`, `options` (array of `{ en, ur }`), `correct_option_index` (0-3), and `part` (grouping tab label).

## Critical Guidelines
1. **Never inject raw DOM elements** into React buttons or containers (e.g. no manual ripple span appending). Use CSS/Tailwind transitions (`active:scale-[0.99]`).
2. **Options layout**: Keep compact with `flex-row items-center justify-between shrink-0`. English text has `flex-1`, Urdu text has `dir="rtl" font-urdu shrink-0`.
3. **Part tabs strip**: Has fixed height `h-10` (`maxHeight: 2.5rem`), left/right arrow buttons, and auto-scrolls the active tab into view (resets to 0 on Question 1).
4. **Finish Quiz button**: Must remain visible and clickable as soon as all questions are answered (`unansweredCount === 0`), regardless of which question index is currently active.
5. **Answers state**: Do not reset `quizState.answers` on background data fetches or external effects.
