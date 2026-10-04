# MadinaQuizApp - Project Reference & Developer Guide

## 1. Overview & Stack
- **Application**: Madina Arabic Quiz Application (Arabic Language & Grammar Learning Platform).
- **Core Stack**:
  - **Framework**: React 18 with Vite (`vite --host 127.0.0.1:5173`).
  - **Styling**: Tailwind CSS (CDN in `index.html` + Tailwind directives in `src/index.css`), Vanilla CSS for typography (`Amiri` font for Urdu/Arabic with `.font-urdu`).
  - **Database**: Neon Serverless PostgreSQL (`@neondatabase/serverless`). Connection string in `VITE_DATABASE_URL` (.env).
  - **Icons**: `lucide-react`.
  - **AI Integration**: Groq SDK (`groq-sdk` via `src/groq.js`) for translations and question generation.

---

## 2. Directory & File Structure
```
MadinaQuizApp/
├── index.html                 # HTML shell, imports CDN Tailwind, Amiri Google Font
├── package.json               # Dependencies and scripts (npm start / npm run build)
├── src/
│   ├── main.jsx               # React DOM root render
│   ├── index.css              # Custom styling, scrollbar utilities, part pulse animations
│   ├── App.jsx                # Core application (routing, auth, student/instructor/admin views, quiz player)
│   ├── QuizContentManager.jsx # Question manager (Excel/TSV import-export, JSON editor, bulk edit, AI)
│   └── groq.js                # Groq API client integration
├── seed_book*.js              # Database seed scripts for Madina Books 2 & 3
├── migrate*.js               # Schema setup and migration scripts
└── PROJECT_REFERENCE.md       # This reference guide
```

---

## 3. Database Schema (Neon Postgres)

### Tables
1. **`users`**:
   - `id`, `username`, `password`, `role` (`'student' | 'instructor' | 'admin'`), `school_id`, `created_at`.
2. **`courses`**:
   - `id`, `name`, `description`, `school_id`.
3. **`course_sections`**:
   - `id`, `course_id`, `title`, `kind` (`'lectures' | 'exam'`), `order_index`.
4. **`lectures`**:
   - `id`, `course_id`, `section_id`, `lecture_num`, `title`, `description`.
5. **`quizzes`**:
   - `id`, `lecture_id`, `section_id`, `title`, `is_exam`, `time_limit_mins`.
6. **`questions`**:
   - `id`, `quiz_id`, `question_en`, `question_ur`, `options` (JSON string or array of `{ en: string, ur: string }`), `correct_option_index` (integer, 0-3), `part` (string label like `"Exercise 1"` or `"Main Content"`).
7. **`results`**:
   - `id`, `user_id`, `quiz_id`, `score` (0-100 percentage), `answers` (JSON array of answer snapshots), `started_at`, `completed_at`.
8. **`instructor_assignments`**:
   - `id`, `user_id`, `course_id`.

---

## 4. Key Application Views (`App.jsx`)
State-driven routing via `view` state (`navigateTo(viewName)`):
- `'login'`: Student / Instructor / Admin login.
- `'student_courses'`: Course selection list.
- `'student_sections'`: Course sections (Lectures vs. Midterm/Final Exams).
- `'student_lectures'`: Lecture list under a section.
- `'student_quizzes'`: Quiz selection under a lecture/section with attempt history and review.
- `'quiz_taking'`: Interactive quiz runner with part tabs, question card, previous/next/finish navigation.
- `'instructor_courses'`, `'instructor_course_detail'`, `'instructor_lecture_detail'`: Instructor question review and management.
- `'admin_dashboard'`, `'admin_manage_courses'`, `'admin_assign_courses'`: Platform administration.

---

## 5. Critical Architecture Rules & Gotchas

### A. Quiz Taking Engine (`QuizTaking` in `App.jsx`)
1. **Option Layout & Styling**:
   - Buttons must use `flex-row items-center justify-between` and `shrink-0` to avoid vertical ballooning.
   - English span has `flex-1 leading-snug`, Urdu span has `dir="rtl" font-urdu shrink-0`.
   - **NEVER** attach global DOM-mutating event listeners (e.g. raw DOM ripple effects with `appendChild` inside button elements). This causes React virtual DOM reconciliation desync, orphan nodes, and layout explosion.
2. **Part Tabs Strip**:
   - Locked to `h-10` with `style={{ minHeight: '2.5rem', maxHeight: '2.5rem' }}` and `overflow-x-auto scrollbar-none`.
   - Left and right scroll arrow buttons (`ArrowLeft` / `ArrowRight`) allow manual horizontal scroll by ±160px.
   - Auto-scroll effect uses `getBoundingClientRect()` relative to container:
     - On Question 1 (`currentIndex === 0`), it unconditionally resets scroll to `0`.
     - On question change, it smoothly centers the active part tab.
3. **Finish Quiz Button**:
   - Condition `canFinish = (unansweredCount === 0)`.
   - As soon as all questions have answers, **Finish Quiz** is displayed immediately on all questions (even if reviewing Question 1). When reviewing earlier questions, both `Next` and `Finish Quiz` are available side-by-side.
4. **Answer State Integrity**:
   - **Do NOT** add `useEffect` dependencies that reset `quizState.answers` when `quizData` changes. `startTakingQuiz` initializes questions and answers directly.
   - `selectAnswer` uses functional state update `setQuizState(prev => ...)` and checks `prev.currentIndex >= prev.questions.length - 1` inside the updater to prevent stale closure bugs.

### B. Font & Direction Rules
- Urdu/Arabic text must have `dir="rtl"` and `.font-urdu` (`font-family: 'Amiri', serif; line-height: 1.6;`).
- English translations stay LTR.

---

## 6. Common Development Commands
- Start dev server: `npm start` (runs `vite --host 127.0.0.1`)
- Build production bundle: `npm run build`
- Run seeds/scripts: `node seed_<name>.js` (uses `.env` with `dotenv`)
