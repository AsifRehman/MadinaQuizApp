import React, { useState, useEffect, useRef } from 'react';
import { neon } from '@neondatabase/serverless';
import { getGroqResponse } from './groq';
import { 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  LogOut, 
  User, 
  ChevronRight,
  GraduationCap,
  Languages,
  Users,
  Search,
  ClipboardList,
  Edit2,
  Save,
  X,
  Plus,
  Book,
  FileText,
  PieChart,
  Settings,
  Shield,
  ArrowLeft,
  ChevronDown
} from 'lucide-react';

// --- STYLING ---
const UrduFontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
    .font-urdu { font-family: 'Amiri', serif; line-height: 1.6; }
  `}</style>
);

// --- NEON INITIALIZATION ---
const databaseUrl = import.meta.env.VITE_DATABASE_URL;
const sql = databaseUrl ? neon(databaseUrl) : () => {
  throw new Error("No database connection string was provided to neon(). Please set the VITE_DATABASE_URL environment variable.");
};

const SCHOOL_ID = 1; // Quran Academy Fsd
const COURSE_ID = 1; // Arabic Insights
const SESSION_KEY = 'madina_quiz_session_v1';

const getSavedSession = () => {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
  } catch {
    return null;
  }
};

const getInitialView = (savedSession) => {
  const routeView = window.location.hash.replace(/^#\/?/, '');
  if (routeView) return routeView;
  if (savedSession?.view) return savedSession.view;
  return 'login';
};

export default function App() {
  const savedSession = getSavedSession();
  const [studentName, setStudentName] = useState(savedSession?.studentName || '');
  const [studentId, setStudentId] = useState(savedSession?.studentId || null);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(savedSession?.studentId && savedSession?.userRole));
  const [currentLecture, setCurrentLecture] = useState(null);
  const [lectures, setLectures] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [quizState, setQuizState] = useState({
    active: false, questions: [], currentIndex: 0, score: 0, showResult: false, answers: []
  });
  const [view, setView] = useState(getInitialView(savedSession)); // login, student_courses, student_lectures, student_quizzes, quiz_taking, instructor_courses, instructor_course_detail, instructor_lecture_detail, admin_dashboard, admin_manage_courses, admin_assign_courses
  const [userRole, setUserRole] = useState(savedSession?.userRole || null);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(savedSession?.selectedCourse || null);
  const [selectedLecture, setSelectedLecture] = useState(savedSession?.selectedLecture || null);
  const [quizzes, setQuizzes] = useState([]);
  const [courseQuizzes, setCourseQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [userProgress, setUserProgress] = useState({});
  const [allStudentsData, setAllStudentsData] = useState({});
  const [viewingDetails, setViewingDetails] = useState(null);
  const [instructorView, setInstructorView] = useState('courses'); // courses, results, lectures
  const [adminView, setAdminView] = useState('courses'); // courses, assign, lectures
  const [newUser, setNewUser] = useState({ username: '', password: '', role: 'student' });
  const [editingUser, setEditingUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loginLogs, setLoginLogs] = useState([]);
  const [selectedQuizTitle, setSelectedQuizTitle] = useState(null);
  const [quizResults, setQuizResults] = useState([]);
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const answerLockRef = useRef(false);

  // --- EDIT QUIZ SYSTEM STATE ---
  const [isEditingQuestion, setIsEditingQuestion] = useState(false);
  const [passwordPromptOpen, setPasswordPromptOpen] = useState(false);
  const [promptPasswordValue, setPromptPasswordValue] = useState('');
  const [promptError, setPromptError] = useState('');
  const [editQuestionEn, setEditQuestionEn] = useState('');
  const [editQuestionUr, setEditQuestionUr] = useState('');
  const [editOptions, setEditOptions] = useState([
    { en: '', ur: '' },
    { en: '', ur: '' },
    { en: '', ur: '' },
    { en: '', ur: '' }
  ]);
  const [editCorrectIndex, setEditCorrectIndex] = useState(0);
  const [isSavingQuestion, setIsSavingQuestion] = useState(false);
  const [editJsonValue, setEditJsonValue] = useState('');
  const [jsonError, setJsonError] = useState('');
  const isJsonFocused = useRef(false);

  const handleEditQuizClick = () => {
    setPromptPasswordValue('');
    setPromptError('');
    setPasswordPromptOpen(true);
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPromptError('');
    try {
      const usersList = await sql`
        SELECT password FROM users 
        WHERE school_id = ${SCHOOL_ID} AND (LOWER(username) = 'instructor' OR role = 'instructor')
      `;
      const isMatch = usersList.some(u => u.password === promptPasswordValue);
      if (isMatch) {
        setPasswordPromptOpen(false);
        startEditingCurrentQuestion();
      } else {
        setPromptError('Incorrect password');
      }
    } catch (err) {
      console.error("Verification error:", err);
      setPromptError('Error checking password');
    }
  };

  const startEditingCurrentQuestion = async () => {
    const q = quizState.questions[quizState.currentIndex];
    if (!q) return;
    try {
      const [dbQ] = await sql`SELECT * FROM questions WHERE id = ${q.id}`;
      if (dbQ) {
        setEditQuestionEn(dbQ.question_en);
        setEditQuestionUr(dbQ.question_ur);
        
        const opts = typeof dbQ.options === 'string' ? JSON.parse(dbQ.options) : dbQ.options;
        const paddedOpts = Array.from({ length: 4 }).map((_, idx) => {
          return opts[idx] || { en: '', ur: '' };
        });
        setEditOptions(paddedOpts);
        setEditCorrectIndex(Number(dbQ.correct_option_index));
        
        const initialJson = JSON.stringify({
          question_en: dbQ.question_en,
          question_ur: dbQ.question_ur,
          options: paddedOpts,
          correct_option_index: Number(dbQ.correct_option_index)
        }, null, 2);
        setEditJsonValue(initialJson);
        setJsonError('');
        setIsEditingQuestion(true);
      }
    } catch (err) {
      console.error("Load question error:", err);
      alert("Failed to load question details for editing.");
    }
  };

  // Sync form inputs -> JSON value (only if user is not currently focusing/typing in the JSON textarea)
  useEffect(() => {
    if (isEditingQuestion && !isJsonFocused.current) {
      try {
        const obj = {
          question_en: editQuestionEn,
          question_ur: editQuestionUr,
          options: editOptions,
          correct_option_index: Number(editCorrectIndex)
        };
        setEditJsonValue(JSON.stringify(obj, null, 2));
        setJsonError('');
      } catch (e) {}
    }
  }, [editQuestionEn, editQuestionUr, editOptions, editCorrectIndex, isEditingQuestion]);

  const handleJsonChange = (val) => {
    setEditJsonValue(val);
    try {
      const parsed = JSON.parse(val);
      if (parsed && typeof parsed === 'object') {
        if (typeof parsed.question_en === 'string') setEditQuestionEn(parsed.question_en);
        if (typeof parsed.question_ur === 'string') setEditQuestionUr(parsed.question_ur);
        if (Array.isArray(parsed.options)) {
          const padded = Array.from({ length: 4 }).map((_, idx) => parsed.options[idx] || { en: '', ur: '' });
          setEditOptions(padded);
        }
        if (typeof parsed.correct_option_index === 'number') {
          setEditCorrectIndex(parsed.correct_option_index);
        }
        setJsonError('');
      } else {
        setJsonError('Must be a JSON object');
      }
    } catch (e) {
      setJsonError('Invalid JSON format: ' + e.message);
    }
  };

  const handleSaveQuestion = async () => {
    const q = quizState.questions[quizState.currentIndex];
    if (!q) return;
    setIsSavingQuestion(true);
    try {
      let finalEn = editQuestionEn;
      let finalUr = editQuestionUr;
      let finalOpts = editOptions;
      let finalCorrect = editCorrectIndex;

      // Try to parse the current JSON text if it was edited
      if (editJsonValue.trim()) {
        try {
          const parsed = JSON.parse(editJsonValue);
          if (parsed && typeof parsed === 'object') {
            if (parsed.question_en) finalEn = parsed.question_en;
            if (parsed.question_ur) finalUr = parsed.question_ur;
            if (Array.isArray(parsed.options)) {
              finalOpts = Array.from({ length: 4 }).map((_, idx) => parsed.options[idx] || { en: '', ur: '' });
            }
            if (typeof parsed.correct_option_index === 'number') {
              finalCorrect = parsed.correct_option_index;
            }
          }
        } catch (e) {
          alert("Warning: JSON has errors. Saving with current form values instead.");
        }
      }

      await sql`
        UPDATE questions 
        SET question_en = ${finalEn}, 
            question_ur = ${finalUr}, 
            options = ${JSON.stringify(finalOpts)}, 
            correct_option_index = ${finalCorrect} 
        WHERE id = ${q.id}
      `;

      setQuizState(prev => {
        const updatedQuestions = prev.questions.map(item => {
          if (item.id === q.id) {
            const optionsWithIdx = finalOpts.map((opt, idx) => ({ ...opt, originalIdx: idx }));
            return {
              ...item,
              qEn: finalEn,
              qUr: finalUr,
              options: optionsWithIdx,
              correct: Number(finalCorrect)
            };
          }
          return item;
        });
        return { ...prev, questions: updatedQuestions };
      });

      setIsEditingQuestion(false);
    } catch (err) {
      console.error("Save question error:", err);
      alert("Failed to save changes. Please try again.");
    } finally {
      setIsSavingQuestion(false);
    }
  };



  const formatRelativeTime = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    if (Number.isNaN(date.getTime())) return '';

    const diffMs = Date.now() - date.getTime();
    const absMs = Math.abs(diffMs);
    const units = [
      { label: 'year', ms: 365 * 24 * 60 * 60 * 1000 },
      { label: 'month', ms: 30 * 24 * 60 * 60 * 1000 },
      { label: 'week', ms: 7 * 24 * 60 * 60 * 1000 },
      { label: 'day', ms: 24 * 60 * 60 * 1000 },
      { label: 'hour', ms: 60 * 60 * 1000 },
      { label: 'minute', ms: 60 * 1000 },
      { label: 'second', ms: 1000 },
    ];

    for (const { label, ms } of units) {
      const value = Math.floor(absMs / ms);
      if (value >= 1) {
        return `${value} ${label}${value > 1 ? 's' : ''} ago`;
      }
    }
    return 'just now';
  };

  const navigateTo = (nextView, { replace = false } = {}) => {
    setView(nextView);
    const nextHash = `#/${nextView}`;
    if (window.location.hash !== nextHash) {
      const method = replace ? 'replaceState' : 'pushState';
      window.history[method](null, '', nextHash);
    }
  };

  useEffect(() => {
    const handleRouteChange = () => {
      const routeView = window.location.hash.replace(/^#\/?/, '');
      if (routeView) setView(routeView);
    };
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;
    localStorage.setItem(SESSION_KEY, JSON.stringify({
      studentId,
      studentName,
      userRole,
      view,
      selectedCourse,
      selectedLecture
    }));
    const nextHash = `#/${view}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, '', nextHash);
    }
  }, [isLoggedIn, studentId, studentName, userRole, view, selectedCourse, selectedLecture]);

  const fetchCourses = async () => {
    try {
      const data = await sql`SELECT * FROM courses WHERE school_id = ${SCHOOL_ID} ORDER BY name ASC`;
      setCourses(data);
    } catch (err) { 
      console.error("Fetch courses error:", err); 
    } finally {
      setIsLoadingData(false);
    }
  };

  const fetchLectures = async (courseId) => {
    if (!courseId) return;
    try {
      const data = await sql`SELECT * FROM lectures WHERE course_id = ${courseId} ORDER BY order_index ASC`;
      setLectures(data);
    } catch (err) { console.error("Fetch lectures error:", err); }
  };

  const fetchQuizzes = async (lectureId) => {
    if (!lectureId) return;
    try {
      const data = await sql`SELECT * FROM quizzes WHERE lecture_id = ${lectureId} ORDER BY version ASC`;
      setQuizzes(data);
    } catch (err) { console.error("Fetch quizzes error:", err); }
  };

  const fetchCourseQuizzes = async (courseId) => {
    if (!courseId) return;
    try {
      const data = await sql`
        SELECT q.*, l.title as lecture_title, l.order_index as lecture_order
        FROM quizzes q
        JOIN lectures l ON q.lecture_id = l.id
        WHERE l.course_id = ${courseId}
        ORDER BY l.order_index ASC, q.version ASC
      `;
      setCourseQuizzes(data);
    } catch (err) { console.error("Fetch course quizzes error:", err); }
  };

  const fetchSpecificQuizResults = async (quizId) => {
    if (!quizId) return;
    try {
      const data = await sql`
        SELECT r.*, u.username
        FROM results r
        JOIN users u ON r.user_id = u.id
        WHERE r.quiz_id = ${quizId}
        ORDER BY r.completed_at DESC
      `;
      setQuizResults(data);
    } catch (err) { console.error("Fetch quiz results error:", err); }
  };

  const handleAiGenerateVersion = async (baseQuiz) => {
    if (!baseQuiz) return;
    setIsGeneratingAi(true);
    try {
      // 1. Fetch current questions
      const currentQuestions = await sql`SELECT * FROM questions WHERE quiz_id = ${baseQuiz.id} ORDER BY id ASC`;
      
      if (currentQuestions.length === 0) {
        alert("No questions found in the base quiz to generate from.");
        return;
      }

      // 2. Prepare prompt
      const prompt = `
        You are a specialized education assistant for a Quran Academy. 
        Your task is to create a NEW VARIATION of an existing quiz.
        
        BASE QUESTIONS (JSON):
        ${JSON.stringify(currentQuestions.map(q => ({
          qEn: q.question_en,
          qUr: q.question_ur,
          options: typeof q.options === 'string' ? JSON.parse(q.options) : q.options,
          correct: q.correct_option_index
        })))}

        INSTRUCTIONS:
        1. Generate exactly ${currentQuestions.length} new questions.
        2. The new questions must cover the same topics/concepts as the base questions but use different examples or phrasing.
        3. Maintain both English and Urdu translations.
        4. The output must be a VALID JSON array of objects.
        5. Each object must have these exact fields:
           - "question_en": string
           - "question_ur": string
           - "options": array of 4 objects, each with {"en": string, "ur": string}
           - "correct_option_index": integer (0-3)

        RETURN ONLY THE JSON ARRAY. NO OTHER TEXT.
      `;

      // 3. Call Groq
      const responseText = await getGroqResponse(prompt);
      const cleanJson = responseText.replace(/```json|```/g, '').trim();
      const newQuestions = JSON.parse(cleanJson);

      // 4. Create new quiz version
      const nextVersion = (parseInt(baseQuiz.version) || 1) + 1;
      const [newQuiz] = await sql`
        INSERT INTO quizzes (lecture_id, title, quiz_type, version) 
        VALUES (${baseQuiz.lecture_id}, ${baseQuiz.title}, ${baseQuiz.quiz_type}, ${nextVersion})
        RETURNING *
      `;

      // 5. Insert new questions
      for (const q of newQuestions) {
        await sql`
          INSERT INTO questions (quiz_id, question_en, question_ur, options, correct_option_index) 
          VALUES (${newQuiz.id}, ${q.question_en}, ${q.question_ur}, ${JSON.stringify(q.options)}, ${q.correct_option_index})
        `;
      }

      alert(`Successfully generated Version ${nextVersion}!`);
      fetchCourseQuizzes(selectedCourse.id);
    } catch (err) {
      console.error("AI Generation error:", err);
      alert("Failed to generate AI version. Check console for details.");
    } finally {
      setIsGeneratingAi(false);
    }
  };

  const fetchQuizData = async (quizId) => {
    if (!quizId) return;
    try {
      const questionRecords = await sql`
        SELECT * FROM questions WHERE quiz_id = ${quizId} ORDER BY id ASC
      `;
      const mappedQuestions = questionRecords.map(q => ({
        id: q.id,
        qEn: q.question_en,
        qUr: q.question_ur,
        options: typeof q.options === 'string' ? JSON.parse(q.options) : q.options,
        correct: Number(q.correct_option_index)
      }));
      setQuizData(mappedQuestions);
      return mappedQuestions;
    } catch (err) { console.error("Fetch quiz data error:", err); }
    return [];
  };

  const normalizeAnswers = (answers) => {
    if (!answers) return [];
    if (Array.isArray(answers)) return answers;
    try {
      return JSON.parse(answers);
    } catch {
      return [];
    }
  };

  const createAnswerSnapshot = (option, question) => ({
    questionId: question.id,
    qEn: question.qEn,
    qUr: question.qUr,
    originalIdx: option.originalIdx,
    en: option.en,
    ur: option.ur
  });

  const getStoredAnswerForQuestion = (answers, question, fallbackIndex) => {
    if (!answers) return null;
    const normalized = normalizeAnswers(answers);
    const matched = normalized.find(answer =>
      answer && typeof answer === 'object' && (
        (answer.questionId && answer.questionId === question.id) ||
        (answer.qEn && answer.qEn === question.qEn) ||
        (answer.qUr && answer.qUr === question.qUr)
      )
    );
    return matched ?? normalized[fallbackIndex] ?? null;
  };

  const resolveStoredAnswerIndex = (answer, question) => {
    if (answer === null || answer === undefined) return null;
    if (typeof answer === 'number') return Number(answer);

    if (typeof answer === 'object') {
      // Prefer the stable original index over text — option wording can collide across choices.
      if (typeof answer.originalIdx === 'number') return answer.originalIdx;
      const textMatch = question.options.findIndex(opt =>
        (answer.en && opt.en === answer.en) || (answer.ur && opt.ur === answer.ur)
      );
      if (textMatch >= 0) return textMatch;
    }

    return null;
  };

  const openResultDetails = async ({ quizId, studentName: detailStudentName, lectureNum, data }) => {
    await fetchQuizData(quizId);
    setViewingDetails({
      studentName: detailStudentName,
      lectureNum,
      data: {
        ...data,
        lastScore: data.lastScore ?? data.score,
        answers: normalizeAnswers(data.answers)
      }
    });
  };

  useEffect(() => {
    fetchCourses();
  }, [isLoggedIn, userRole, studentId]);

  useEffect(() => {
    if (!isLoggedIn || !selectedCourse?.id) return;
    if (view === 'student_lectures') {
      fetchLectures(selectedCourse.id);
      fetchCourseQuizzes(selectedCourse.id);
    }
    if (view === 'student_quizzes' && selectedLecture?.id) {
      fetchQuizzes(selectedLecture.id);
    }
    if (view === 'quiz_taking' && !selectedQuiz?.id) {
      navigateTo(selectedLecture?.id ? 'student_quizzes' : 'student_lectures', { replace: true });
    }
  }, [isLoggedIn, view, selectedCourse?.id, selectedLecture?.id, selectedQuiz?.id]);

  const fetchAssignedCourses = async (uid) => {
    try {
      const data = await sql`
        SELECT c.* FROM courses c
        JOIN instructor_assignments ia ON c.id = ia.course_id
        WHERE ia.user_id = ${uid}
        ORDER BY c.name ASC
      `;
      setCourses(data);
    } catch (err) { 
      console.error("Fetch assigned courses error:", err); 
    } finally {
      setIsLoadingData(false);
    }
  };

  const handleCreateCourse = async (name, description) => {
    try {
      await sql`
        INSERT INTO courses (school_id, name, description) 
        VALUES (${SCHOOL_ID}, ${name}, ${description})
      `;
      fetchCourses();
      setAdminView('courses');
    } catch (err) { console.error("Create course error:", err); }
  };

  const handleAssignCourse = async (courseId, userId) => {
    try {
      await sql`
        INSERT INTO instructor_assignments (user_id, course_id) 
        VALUES (${userId}, ${courseId})
        ON CONFLICT DO NOTHING
      `;
      alert('Course assigned successfully!');
    } catch (err) { console.error("Assign course error:", err); }
  };

  const handleCreateLecture = async (courseId, title, orderIndex) => {
    try {
      await sql`
        INSERT INTO lectures (course_id, title, order_index) 
        VALUES (${courseId}, ${title}, ${orderIndex})
      `;
      fetchLectures(courseId);
    } catch (err) { console.error("Create lecture error:", err); }
  };

  const handleCreateQuiz = async (lectureId, title, type, version) => {
    try {
      await sql`
        INSERT INTO quizzes (lecture_id, title, quiz_type, version) 
        VALUES (${lectureId}, ${title}, ${type}, ${version})
      `;
      fetchQuizzes(lectureId);
    } catch (err) { console.error("Create quiz error:", err); }
  };

  const fetchStudentData = async (uid) => {
    try {
      const results = await sql`
        SELECT r.*, l.order_index as lecture_num, qz.title as quiz_title, qz.version as quiz_version
        FROM results r
        JOIN quizzes qz ON r.quiz_id = qz.id
        JOIN lectures l ON qz.lecture_id = l.id
        WHERE r.user_id = ${uid}
        ORDER BY r.completed_at DESC
      `;
      const progress = {};
      results.forEach(r => {
        const key = `quiz_${r.quiz_id}`;
        const attempt = {
          id: r.id,
          score: parseFloat(r.score),
          completedAt: r.completed_at,
          answers: typeof r.answers === 'string' ? JSON.parse(r.answers) : r.answers
        };
        if (!progress[key]) {
          progress[key] = {
            quizId: r.quiz_id,
            lectureNum: r.lecture_num,
            quizTitle: r.quiz_title,
            quizVersion: r.quiz_version,
            attemptCount: 0,
            latestScore: attempt.score,
            lastScore: attempt.score,
            bestScore: attempt.score,
            completedAt: attempt.completedAt,
            answers: attempt.answers,
            attempts: []
          };
        }
        progress[key].attempts.push(attempt);
        progress[key].attemptCount += 1;
        progress[key].bestScore = Math.max(progress[key].bestScore, attempt.score);
      });
      setUserProgress(progress);
    } catch (err) { console.error("Fetch student data error:", err); }
  };

  const fetchAllStudentsData = async () => {
    try {
      const students = await sql`
        SELECT id, username FROM users 
        WHERE school_id = ${SCHOOL_ID} AND role = 'student'
        ORDER BY username ASC
      `;
      
      const studentIds = students.map(s => s.id);
      if (studentIds.length === 0) {
        setAllStudentsData({});
        return;
      }

      const results = await sql`
        SELECT r.*, u.username, l.order_index as lecture_num, qz.id as quiz_id, qz.title as quiz_title
        FROM results r
        JOIN users u ON r.user_id = u.id
        JOIN quizzes qz ON r.quiz_id = qz.id
        JOIN lectures l ON qz.lecture_id = l.id
        WHERE u.school_id = ${SCHOOL_ID}
        ORDER BY r.completed_at ASC
      `;

      const allData = {};
      students.forEach(s => allData[s.username] = {});
      results.forEach(r => {
        allData[r.username][`lecture_${r.lecture_num}`] = {
          quizId: r.quiz_id,
          quizTitle: r.quiz_title,
          lastScore: parseFloat(r.score),
          completedAt: r.completed_at,
          answers: typeof r.answers === 'string' ? JSON.parse(r.answers) : r.answers
        };
      });
      setAllStudentsData(allData);
    } catch (err) { console.error("Fetch all students error:", err); }
  };

  const fetchUsers = async () => {
    try {
      const data = await sql`
        SELECT id, username, password, role FROM users 
        WHERE school_id = ${SCHOOL_ID}
        ORDER BY role DESC, username ASC
      `;
      setUsers(data);
    } catch (err) { console.error("Fetch users error:", err); }
  };

  const fetchLoginLogs = async () => {
    try {
      const logs = await sql`
        SELECT l.*, u.username 
        FROM login_logs l
        JOIN users u ON l.user_id = u.id
        WHERE u.school_id = ${SCHOOL_ID}
        ORDER BY l.timestamp DESC
        LIMIT 100
      `;
      setLoginLogs(logs);
    } catch (err) { console.error("Fetch logs error:", err); }
  };

  useEffect(() => {
    if (!isLoggedIn) return;
    
    if (userRole === 'instructor' || userRole === 'admin') {
      if (viewingDetails) return;
      fetchAllStudentsData();
      fetchUsers();
      fetchLoginLogs();
      const interval = setInterval(() => {
        fetchAllStudentsData();
        fetchLoginLogs();
      }, 10000);
      return () => clearInterval(interval);
    } else if (userRole === 'student' && studentId) {
      fetchStudentData(studentId);
    }
  }, [userRole, studentId, isLoggedIn, viewingDetails]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    if (studentName.trim().length < 2) return;
    setIsLoggingIn(true);
    
    try {
      const normalizedUsername = studentName.toLowerCase();
      const [user] = await sql`
        SELECT * FROM users 
        WHERE school_id = ${SCHOOL_ID} AND LOWER(username) = ${normalizedUsername}
      `;
      
      if (user && user.password === password) {
        await sql`
          INSERT INTO login_logs (user_id, success) 
          VALUES (${user.id}, true)
        `;
        setStudentId(user.id);
        setStudentName(user.username);
        setUserRole(user.role);
        setIsLoggedIn(true);
        
        const nextView = user.role === 'student' ? 'student_courses' : user.role === 'instructor' ? 'instructor_courses' : 'admin_dashboard';
        localStorage.setItem(SESSION_KEY, JSON.stringify({
          studentId: user.id,
          studentName: user.username,
          userRole: user.role,
          view: nextView,
          selectedCourse: null,
          selectedLecture: null
        }));
        navigateTo(nextView, { replace: true });
      } else {
        if (user) {
          await sql`
            INSERT INTO login_logs (user_id, success) 
            VALUES (${user.id}, false)
          `;
        }
        setLoginError('Invalid username or password');
      }
    } catch (err) {
      console.error("Login error:", err);
      setLoginError('An error occurred during login');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!newUser.username || !newUser.password) return;
    try {
      const normalizedUsername = newUser.username.toLowerCase();
      await sql`
        INSERT INTO users (school_id, username, password, role) 
        VALUES (${SCHOOL_ID}, ${normalizedUsername}, ${newUser.password}, ${newUser.role})
        ON CONFLICT (school_id, username) DO UPDATE SET password = EXCLUDED.password, role = EXCLUDED.role
      `;
      setNewUser({ username: '', password: '', role: 'student' });
      fetchUsers();
    } catch (err) { console.error("Add user error:", err); }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    if (!editingUser.username || !editingUser.password) return;
    try {
      const normalizedUsername = editingUser.username.toLowerCase();
      await sql`
        UPDATE users 
        SET username = ${normalizedUsername}, 
            password = ${editingUser.password}, 
            role = ${editingUser.role}
        WHERE school_id = ${SCHOOL_ID} AND username = ${editingUser.originalUsername}
      `;
      setEditingUser(null);
      fetchUsers();
    } catch (err) { console.error("Update user error:", err); }
  };

  const handleDeleteUser = async (username) => {
    if (username === 'instructor') return;
    if (!confirm(`Are you sure you want to delete user: ${username}?`)) return;
    try {
      await sql`DELETE FROM users WHERE school_id = ${SCHOOL_ID} AND username = ${username}`;
      fetchUsers();
    } catch (err) { console.error("Delete user error:", err); }
  };

  const startQuiz = (lectureNum) => {
    const questions = quizData.filter(q => q.lecture === lectureNum).map(q => {
      const optionsWithIdx = q.options.map((opt, idx) => ({ ...opt, originalIdx: idx }));
      const shuffledOptions = optionsWithIdx
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      return {
        ...q,
        options: shuffledOptions
      };
    });
    setCurrentLecture(lectureNum);
    setQuizState({ active: true, questions, currentIndex: 0, score: 0, showResult: false, answers: [] });
  };

  // Reset click lock whenever the active question changes (or quiz restarts).
  useEffect(() => {
    answerLockRef.current = false;
  }, [quizState.currentIndex, quizState.active, quizState.showResult]);

  const submitQuizAnswer = (option, { persistQuizId } = {}) => {
    // Prevent double-taps / stale clicks from recording a different option.
    if (answerLockRef.current) return;
    answerLockRef.current = true;

    if (!quizState.active || quizState.showResult) {
      answerLockRef.current = false;
      return;
    }
    // Already answered this question (answers length should equal current index).
    if (quizState.answers.length !== quizState.currentIndex) {
      answerLockRef.current = false;
      return;
    }

    const currentQ = quizState.questions[quizState.currentIndex];
    if (!currentQ) {
      answerLockRef.current = false;
      return;
    }

    const isCorrect = Number(option.originalIdx) === Number(currentQ.correct);
    const newScore = isCorrect ? quizState.score + 1 : quizState.score;
    const newAnswers = [...quizState.answers, createAnswerSnapshot(option, currentQ)];
    const nextIndex = quizState.currentIndex + 1;
    const isFinished = nextIndex >= quizState.questions.length;

    setQuizState(prev => {
      // Re-verify inside state updater to be safe
      if (!prev.active || prev.showResult) return prev;
      if (prev.answers.length !== prev.currentIndex) return prev;

      if (isFinished) {
        return { ...prev, score: newScore, showResult: true, answers: newAnswers };
      } else {
        return { ...prev, currentIndex: nextIndex, score: newScore, answers: newAnswers };
      }
    });

    if (isFinished && persistQuizId != null) {
      const finalScore = (newScore / quizState.questions.length) * 100;
      saveProgress(persistQuizId, finalScore, newAnswers);
    }
  };

  const handleAnswer = (optionIndex) => {
    const currentQ = quizState.questions[quizState.currentIndex];
    const clickedOption = currentQ?.options?.[optionIndex];
    if (!clickedOption) return;
    submitQuizAnswer(clickedOption, { persistQuizId: selectedQuiz?.id });
  };

  const saveProgress = async (quizId, score, answers) => {
    if (!studentId || userRole !== 'student') return;
    try {
      await sql`
        INSERT INTO results (user_id, quiz_id, score, answers) 
        VALUES (${studentId}, ${quizId}, ${score}, ${JSON.stringify(answers)})
      `;
      fetchStudentData(studentId);
    } catch (err) { console.error("Save progress error:", err); }
  };

  const resetQuiz = () => setQuizState({ active: false, questions: [], currentIndex: 0, score: 0, showResult: false, answers: [] });

  // --- NAVIGATION HELPERS ---
  const goToStudentLectures = (course) => {
    setSelectedCourse(course);
    fetchLectures(course.id);
    fetchCourseQuizzes(course.id);
    navigateTo('student_lectures');
  };

  const goToStudentQuizzes = (lecture) => {
    setSelectedLecture(lecture);
    fetchQuizzes(lecture.id);
    navigateTo('student_quizzes');
  };

  const startTakingQuiz = async (quiz) => {
    setSelectedQuiz(quiz);
    const questions = await fetchQuizData(quiz.id);
    const shuffledQuestions = questions.map(q => {
      const optionsWithIdx = q.options.map((opt, idx) => ({ ...opt, originalIdx: idx }));
      const shuffledOptions = optionsWithIdx
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      return {
        ...q,
        options: shuffledOptions
      };
    });
    setQuizState({ active: true, questions: shuffledQuestions, currentIndex: 0, score: 0, showResult: false, answers: [] });
    navigateTo('quiz_taking');
  };

  // Sync quizState when quizData changes if taking quiz
  useEffect(() => {
    if (quizState.active && quizData.length > 0 && quizState.questions.length === 0) {
      const shuffledQuestions = quizData.map(q => {
        const optionsWithIdx = q.options.map((opt, idx) => ({ ...opt, originalIdx: idx }));
        const shuffledOptions = optionsWithIdx
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);
        return {
          ...q,
          options: shuffledOptions
        };
      });
      setQuizState(prev => ({ ...prev, questions: shuffledQuestions }));
    }
  }, [quizData, quizState.active]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setStudentName('');
    setStudentId(null);
    setUserRole(null);
    setPassword('');
    localStorage.removeItem(SESSION_KEY);
    setSelectedCourse(null);
    setSelectedLecture(null);
    navigateTo('login', { replace: true });
    setUserProgress({});
  };

  // --- RENDER HELPERS ---
  const Header = ({ title, showBack = false, onBack = null }) => (
    <header className="bg-white h-16 border-b flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-4">
        {showBack && (
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
            <ArrowLeft size={20} />
          </button>
        )}
        <div className="flex items-center gap-2">
          <GraduationCap className="text-emerald-600" size={28} />
          <span className="font-bold text-xl text-slate-800 tracking-tight">{title || 'Quran Academy'}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100">
          <User size={16} className="text-emerald-600" />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-700 capitalize leading-none">{studentName}</span>
            <span className="text-[10px] text-slate-400 uppercase font-black">{userRole}</span>
          </div>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors">
          <LogOut size={22} />
        </button>
      </div>
    </header>
  );

  const StudentProgressSummary = ({ compact = false }) => {
    const progressItems = Object.values(userProgress);
    const totalAttempts = progressItems.reduce((sum, item) => sum + item.attemptCount, 0);
    const completedQuizzes = progressItems.length;
    const averageBest = completedQuizzes
      ? Math.round(progressItems.reduce((sum, item) => sum + item.bestScore, 0) / completedQuizzes)
      : 0;
    const latestAttempt = progressItems
      .flatMap(item => item.attempts.map(attempt => ({ ...attempt, quizTitle: item.quizTitle })))
      .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))[0];

    if (compact && totalAttempts === 0) return null;

    return (
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between gap-4 mb-5">
          <h2 className="font-black text-xl text-slate-800 flex items-center gap-2">
            <Trophy size={22} className="text-emerald-600" /> My Progress
          </h2>
          {latestAttempt && (
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Latest {formatRelativeTime(latestAttempt.completedAt)}
            </span>
          )}
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Quizzes</p>
            <p className="text-2xl font-black text-slate-800 tabular-nums">{completedQuizzes}</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Attempts</p>
            <p className="text-2xl font-black text-slate-800 tabular-nums">{totalAttempts}</p>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100">
            <p className="text-[10px] font-black uppercase text-emerald-600 mb-1">Avg Best</p>
            <p className="text-2xl font-black text-emerald-700 tabular-nums">{averageBest}%</p>
          </div>
        </div>
        {!compact && totalAttempts === 0 && (
          <p className="text-sm text-slate-400 font-bold mt-5">No attempts yet. Your scores will appear here after you complete a quiz.</p>
        )}
      </div>
    );
  };

  const getLectureProgress = (lecture) => {
    const lectureQuizzes = courseQuizzes.filter(q => q.lecture_id === lecture.id);
    const attemptedQuizzes = lectureQuizzes.filter(q => userProgress[`quiz_${q.id}`]);
    const latestAttempt = attemptedQuizzes
      .flatMap(q => userProgress[`quiz_${q.id}`]?.attempts || [])
      .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))[0];

    const total = lectureQuizzes.length;
    const attempted = attemptedQuizzes.length;
    const status = total > 0 && attempted === total ? 'complete' : attempted > 0 ? 'partial' : 'none';

    return { total, attempted, status, latestAttempt };
  };

  const StudentCourses = () => (
    <div className="min-h-screen bg-slate-50">
      <Header title="My Courses" />
      <main className="max-w-5xl mx-auto p-6 md:p-8">
        <StudentProgressSummary />
        <h2 className="text-3xl font-black mb-8 text-slate-800 flex items-center gap-3">
          <Book className="text-emerald-600" size={32} />
          Available Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <button 
              key={course.id} 
              onClick={() => goToStudentLectures(course)}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-400 text-left transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BookOpen size={80} />
              </div>
              <h3 className="font-black text-2xl text-slate-800 mb-2">{course.name}</h3>
              <p className="text-slate-500 text-sm mb-6 line-clamp-2">{course.description}</p>
              <div className="flex items-center text-emerald-600 font-bold gap-1 group-hover:gap-2 transition-all">
                <span>View Lectures</span>
                <ChevronRight size={18} />
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );

  const StudentLectures = () => (
    <div className="min-h-screen bg-slate-50">
      <Header title={selectedCourse?.name} showBack onBack={() => navigateTo('student_courses')} />
      <main className="max-w-4xl mx-auto p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-slate-800">Lectures / لیکچرز</h2>
          <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
            {lectures.length} Lessons
          </span>
        </div>
        <div className="grid gap-4">
          {lectures.map(lec => {
            const progress = getLectureProgress(lec);
            const palette = progress.status === 'complete'
              ? {
                  card: 'bg-emerald-50/70 border-emerald-300 hover:border-emerald-500',
                  number: 'bg-emerald-600 text-white border-emerald-600',
                  badge: 'bg-emerald-600 text-white',
                  icon: 'text-emerald-600',
                  label: 'All Versions Attempted'
                }
              : progress.status === 'partial'
                ? {
                    card: 'bg-amber-50/70 border-amber-300 hover:border-amber-500',
                    number: 'bg-amber-500 text-white border-amber-500',
                    badge: 'bg-amber-500 text-white',
                    icon: 'text-amber-500',
                    label: 'Partially Attempted'
                  }
                : {
                    card: 'bg-red-50/60 border-red-200 hover:border-red-400',
                    number: 'bg-red-500 text-white border-red-500',
                    badge: 'bg-red-500 text-white',
                    icon: 'text-red-500',
                    label: 'Not Attempted'
                  };
            return (
              <button 
                key={lec.id} 
                onClick={() => goToStudentQuizzes(lec)}
                className={`p-5 rounded-2xl border shadow-sm hover:shadow-md text-left transition-all group flex items-center gap-6 ${palette.card}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl transition-all shadow-inner border ${palette.number}`}>
                  {lec.order_index}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-bold text-xl text-slate-800">{lec.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${palette.badge}`}>
                      {palette.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-bold">
                    <span className="text-slate-500">
                      {progress.attempted}/{progress.total || 0} versions attempted
                    </span>
                    <span className={progress.latestAttempt ? 'text-slate-600' : 'text-slate-400'}>
                      {progress.latestAttempt ? `Last attempted ${formatRelativeTime(progress.latestAttempt.completedAt)}` : 'No attempt yet'}
                    </span>
                  </div>
                </div>
                <ChevronRight className={`${palette.icon} transition-colors shrink-0`} />
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );

  const StudentQuizzes = () => (
    <div className="min-h-screen bg-slate-50">
      <Header title={`${selectedLecture?.title} Quizzes`} showBack onBack={() => navigateTo('student_lectures')} />
      <main className="max-w-4xl mx-auto p-6 md:p-8">
        <StudentProgressSummary compact />
        <h2 className="text-2xl font-black mb-8 text-slate-800">Select Quiz / کوئز منتخب کریں</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzes.map(quiz => {
            const result = userProgress[`quiz_${quiz.id}`];
            return (
              <div 
                key={quiz.id} 
                className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-500 text-left transition-all group relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <FileText size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded-lg">
                    Version {quiz.version}
                  </span>
                </div>
                <h3 className="font-black text-xl text-slate-800 mb-1">{quiz.title}</h3>
                <p className="text-slate-500 text-xs mb-4">{quiz.quiz_type} Assessment</p>
                {result ? (
                  <div className="mt-4 pt-4 border-t border-slate-50 space-y-4">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                        <p className="text-[9px] font-black uppercase text-slate-400">Attempts</p>
                        <p className="text-lg font-black text-slate-700 tabular-nums">{result.attemptCount}</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                        <p className="text-[9px] font-black uppercase text-slate-400">Latest</p>
                        <p className="text-lg font-black text-emerald-600 tabular-nums">{Math.round(result.latestScore)}%</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                        <p className="text-[9px] font-black uppercase text-slate-400">Best</p>
                        <p className="text-lg font-black text-slate-800 tabular-nums">{Math.round(result.bestScore)}%</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {result.attempts.slice(0, 3).map((attempt, index) => (
                        <button
                          key={attempt.id || index}
                          onClick={() => openResultDetails({
                            quizId: quiz.id,
                            studentName,
                            lectureNum: selectedLecture?.order_index,
                            data: { ...attempt, lastScore: attempt.score }
                          })}
                          className="w-full flex items-center justify-between text-xs font-bold text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl px-3 py-2 transition-all"
                        >
                          <span>Review Attempt {result.attemptCount - index}</span>
                          <span className="tabular-nums">{Math.round(attempt.score)}% - {formatRelativeTime(attempt.completedAt)}</span>
                        </button>
                      ))}
                      {result.attemptCount > 3 && (
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                          {result.attemptCount - 3} older attempts
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => startTakingQuiz(quiz)}
                      className="w-full bg-slate-900 text-white font-black py-3 rounded-2xl hover:bg-black transition-all"
                    >
                      Start New Attempt
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => startTakingQuiz(quiz)}
                    className="flex items-center gap-2 text-emerald-600 font-bold text-sm mt-4 hover:text-emerald-700 transition-colors"
                  >
                    <Plus size={16} />
                    <span>Start New Attempt</span>
                  </button>
                )}
              </div>
            );
          })}
          {quizzes.length === 0 && (
            <div className="col-span-full py-12 text-center bg-slate-100 rounded-3xl border-2 border-dashed border-slate-200">
              <p className="text-slate-400 font-bold">No quizzes available for this lecture yet.</p>
            </div>
          )}
        </div>
      </main>
      {viewingDetails && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
            <header className="p-8 border-b flex justify-between items-start bg-slate-50/50">
              <div>
                <h3 className="text-2xl font-black text-slate-800">{viewingDetails.studentName}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-black uppercase tabular-nums">{Math.round(viewingDetails.data.lastScore)}%</span>
                  <span className="text-slate-400 text-sm font-medium">Lecture {viewingDetails.lectureNum} Assessment</span>
                </div>
              </div>
              <button onClick={() => setViewingDetails(null)} className="p-3 hover:bg-slate-200 rounded-full transition-colors text-slate-400"><X size={32} /></button>
            </header>
            <div className="p-8 overflow-y-auto space-y-8 flex-1">
              {quizData.map((q, idx) => {
                const storedAnswer = getStoredAnswerForQuestion(viewingDetails.data.answers, q, idx);
                const studentAnswer = resolveStoredAnswerIndex(storedAnswer, q);
                const isCorrect = studentAnswer !== null && Number(studentAnswer) === Number(q.correct);
                return (
                  <div key={idx} className={`p-8 rounded-[2rem] border-2 ${isCorrect ? 'border-emerald-100 bg-emerald-50/20' : 'border-red-100 bg-red-50/20'}`}>
                    <div className="flex justify-between items-start gap-4 mb-6">
                      <span className={`w-8 h-8 rounded-xl shadow-sm flex items-center justify-center font-black text-xs shrink-0 ${isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>{idx + 1}</span>
                      <div className="text-right flex-1">
                        <p className="font-bold text-xl mb-2 text-slate-800">{q.qEn}</p>
                        <p dir="rtl" className="font-urdu text-2xl text-emerald-800">{q.qUr}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {q.options.map((opt, optIdx) => {
                        let style = 'bg-white border-slate-100 text-slate-500'; let icon = null;
                        if (optIdx === Number(q.correct)) { style = 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-100'; icon = <CheckCircle2 size={18} />; }
                        else if (studentAnswer !== null && optIdx === Number(studentAnswer)) { style = 'bg-red-500 border-red-500 text-white shadow-lg shadow-red-100'; icon = <XCircle size={18} />; }
                        return (
                          <div key={optIdx} className={`p-4 rounded-xl border flex items-center justify-between font-bold ${style}`}>
                            <div className="flex items-center gap-4"><span>{opt.en}</span><span dir="rtl" className="font-urdu text-base opacity-70">{opt.ur}</span></div>{icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const QuizTaking = () => {
    const { questions, currentIndex, showResult, score } = quizState;
    
    if (showResult) return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-10 text-center border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
          <div className="inline-flex p-6 bg-emerald-50 rounded-full mb-8 relative">
            <Trophy size={64} className="text-emerald-600" />
            <div className="absolute -top-2 -right-2 bg-amber-400 text-white p-2 rounded-full shadow-lg">
              <CheckCircle2 size={24} />
            </div>
          </div>
          <h2 className="text-3xl font-black text-slate-800 mb-2">Excellent Work!</h2>
          <p className="text-slate-500 mb-8 font-medium">You've successfully completed the assessment.</p>
          
          <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 mb-10">
            <p className="text-slate-400 uppercase text-[11px] font-black tracking-[0.2em] mb-2">Final Performance</p>
            <div className="text-7xl font-black text-emerald-600 tabular-nums">{Math.round((score/questions.length)*100)}%</div>
            <div className="flex items-center justify-center gap-4 mt-6 text-slate-400 text-sm font-bold">
              <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-500" /> {score} Correct</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span className="flex items-center gap-1"><XCircle size={14} className="text-red-400" /> {questions.length - score} Wrong</span>
            </div>
          </div>
          
          <div className="grid gap-3">
            <button 
              onClick={() => {
                openResultDetails({
                  quizId: selectedQuiz.id,
                  studentName,
                  lectureNum: selectedLecture?.order_index,
                  data: {
                    lastScore: (score / questions.length) * 100,
                    answers: quizState.answers
                  }
                });
                navigateTo('student_quizzes');
              }} 
              className="w-full bg-emerald-600 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-emerald-700 transition-all active:scale-95"
            >
              Review Answers
            </button>
            <button 
              onClick={() => startTakingQuiz(selectedQuiz)} 
              className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-black transition-all active:scale-95"
            >
              Retry Quiz
            </button>
            <button 
              onClick={() => {
                setQuizState({ active: false, questions: [], currentIndex: 0, score: 0, showResult: false, answers: [] });
                navigateTo('student_quizzes');
              }} 
              className="w-full bg-white text-slate-500 font-bold py-4 rounded-2xl hover:bg-slate-50 transition-all"
            >
              Back to Lectures
            </button>
          </div>
        </div>
      </div>
    );

    if (questions.length === 0) return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-emerald-200 rounded-full"></div>
          <p className="text-slate-400 font-bold">Preparing questions...</p>
        </div>
      </div>
    );

    if (isEditingQuestion) {
      return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
          <header className="bg-white h-16 border-b flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <span className="font-bold text-slate-800">Edit Question Mode</span>
            </div>
          </header>

          <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 md:p-12">
              <h2 className="text-2xl font-black text-slate-800 mb-8">Edit Question</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* LEFT SIDE: FORM */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Question (English)</label>
                      <input 
                        type="text" 
                        value={editQuestionEn} 
                        onChange={(e) => setEditQuestionEn(e.target.value)} 
                        className="w-full p-4 rounded-xl border bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold" 
                      />
                    </div>
                    
                    <div>
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Question (Urdu)</label>
                      <input 
                        type="text" 
                        dir="rtl"
                        value={editQuestionUr} 
                        onChange={(e) => setEditQuestionUr(e.target.value)} 
                        className="w-full p-4 rounded-xl border bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-urdu font-bold text-xl text-emerald-850" 
                      />
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-black uppercase text-slate-400">Options</span>
                        <span className="text-[10px] font-black uppercase text-slate-400 mr-2">Select Correct Option</span>
                      </div>

                      {editOptions.map((opt, idx) => (
                        <div key={idx} className="flex gap-4 items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <label className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-black text-sm shrink-0">
                            {idx + 1}
                          </label>
                          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                            <input 
                              type="text" 
                              placeholder="Option (English)" 
                              value={opt.en} 
                              onChange={(e) => {
                                const newOpts = [...editOptions];
                                newOpts[idx] = { ...newOpts[idx], en: e.target.value };
                                setEditOptions(newOpts);
                              }} 
                              className="w-full p-3 rounded-xl border bg-white outline-none focus:ring-2 focus:ring-emerald-500 font-bold text-sm" 
                            />
                            <input 
                              type="text" 
                              dir="rtl"
                              placeholder="Option (Urdu)" 
                              value={opt.ur} 
                              onChange={(e) => {
                                const newOpts = [...editOptions];
                                newOpts[idx] = { ...newOpts[idx], ur: e.target.value };
                                setEditOptions(newOpts);
                              }} 
                              className="w-full p-3 rounded-xl border bg-white outline-none focus:ring-2 focus:ring-emerald-500 font-urdu font-bold text-base text-emerald-800" 
                            />
                          </div>
                          <input 
                            type="radio" 
                            name="correct-opt" 
                            checked={Number(editCorrectIndex) === idx}
                            onChange={() => setEditCorrectIndex(idx)}
                            className="w-5 h-5 accent-emerald-600 cursor-pointer shrink-0" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: JSON TEXTAREA */}
                <div className="flex flex-col h-full space-y-2">
                  <div className="flex items-center justify-between ml-2">
                    <label className="text-[10px] font-black uppercase text-slate-400">JSON Editor (Copy / Paste / Edit)</label>
                    {jsonError ? (
                      <span className="text-red-500 text-xs font-bold">{jsonError}</span>
                    ) : (
                      <span className="text-emerald-600 text-xs font-bold">JSON Format Valid</span>
                    )}
                  </div>
                  <textarea
                    className="flex-1 w-full p-4 rounded-xl border bg-slate-900 text-emerald-400 font-mono text-xs outline-none focus:ring-2 focus:ring-emerald-500 min-h-[400px] h-full resize-none leading-relaxed"
                    value={editJsonValue}
                    onFocus={() => { isJsonFocused.current = true; }}
                    onBlur={() => { isJsonFocused.current = false; }}
                    onChange={(e) => handleJsonChange(e.target.value)}
                  />
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-500 leading-normal">
                    <strong>Tip:</strong> You can directly paste or edit the JSON object on the right. Any change is instantly reflected in the form on the left.
                  </div>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex justify-end gap-3 pt-6 border-t mt-8">
                <button 
                  type="button" 
                  disabled={isSavingQuestion}
                  onClick={() => setIsEditingQuestion(false)} 
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-bold text-sm transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  disabled={isSavingQuestion}
                  onClick={handleSaveQuestion} 
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-sm transition-colors flex items-center gap-2"
                >
                  {isSavingQuestion ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save size={16} />
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </main>
        </div>
      );
    }

    const q = questions[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <header className="bg-white h-16 border-b flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('student_quizzes')} className="text-slate-400 hover:text-red-500 transition-colors">
              <X size={24} />
            </button>
            <div className="h-8 w-[1px] bg-slate-100"></div>
            <div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{selectedQuiz?.title}</p>
              <p className="text-sm font-bold text-slate-700">Question {currentIndex + 1} of {questions.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleEditQuizClick} 
              className="flex items-center gap-2 px-3.5 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-xl border border-amber-200 transition-colors font-bold text-xs animate-pulse"
            >
              <Edit2 size={14} />
              <span>Edit Question</span>
            </button>
            <div className="w-48 h-2 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
              <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 md:p-12 text-center border-b border-slate-50">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800 leading-snug">{q.qEn}</h2>
              <h2 dir="rtl" className="text-3xl md:text-4xl font-bold text-emerald-700 font-urdu leading-relaxed">{q.qUr}</h2>
            </div>
            <div className="p-8 md:p-12 bg-slate-50/50 space-y-4">
              {q.options.map((opt) => (
                <button 
                  key={opt.originalIdx ?? opt.en} 
                  type="button"
                  onClick={() => submitQuizAnswer(opt, { persistQuizId: selectedQuiz?.id })} 
                  className="w-full p-6 bg-white border-2 border-slate-100 rounded-2xl text-left flex flex-col md:flex-row md:items-center justify-between group hover:border-emerald-500 hover:shadow-lg transition-colors"
                >
                  <span className="text-lg font-bold text-slate-700 group-hover:text-emerald-700">{opt.en}</span>
                  <span dir="rtl" className="text-xl font-bold text-emerald-600 font-urdu mt-2 md:mt-0">{opt.ur}</span>
                </button>
              ))}
            </div>
          </div>
        </main>

        {passwordPromptOpen && (
          <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-black text-slate-800 mb-2">Instructor Verification</h3>
              <p className="text-slate-500 text-sm mb-6">Please enter the instructor password to edit this question.</p>
              
              <form onSubmit={handlePasswordSubmit}>
                <input 
                  type="password" 
                  placeholder="Password" 
                  required 
                  autoFocus
                  className="w-full p-4 rounded-xl border bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold mb-4"
                  value={promptPasswordValue} 
                  onChange={(e) => setPromptPasswordValue(e.target.value)} 
                />
                {promptError && (
                  <p className="text-red-500 text-sm font-bold mb-4">{promptError}</p>
                )}
                <div className="flex justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setPasswordPromptOpen(false)} 
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-bold text-sm transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-sm transition-colors"
                  >
                    Verify
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };

  const InstructorDashboard = () => (
    <div className="min-h-screen bg-slate-50">
      <Header title="Instructor Portal" />
      <nav className="bg-white border-b px-6 flex items-center gap-8 h-14 overflow-x-auto whitespace-nowrap">
        <button 
          onClick={() => setInstructorView('courses')} 
          className={`h-full px-2 flex items-center gap-2 font-bold text-sm transition-all border-b-2 ${instructorView === 'courses' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
        >
          <Book size={18} /> Courses
        </button>
        <button 
          onClick={() => { 
            setInstructorView('results'); 
            setSelectedQuiz(null); 
            setSelectedQuizTitle(null); 
            fetchAllStudentsData(); 
          }} 
          className={`h-full px-2 flex items-center gap-2 font-bold text-sm transition-all border-b-2 ${instructorView === 'results' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
        >
          <PieChart size={18} /> Student Results
        </button>
        <button 
          onClick={() => setInstructorView('users')} 
          className={`h-full px-2 flex items-center gap-2 font-bold text-sm transition-all border-b-2 ${instructorView === 'users' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
        >
          <Users size={18} /> Manage Users
        </button>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        {instructorView === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(course => (
              <div key={course.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-2">{course.name}</h3>
                <p className="text-slate-500 text-xs mb-6 line-clamp-2">{course.description}</p>
                <div className="grid grid-cols-1 gap-3">
                  <button 
                    onClick={() => { 
                      setSelectedCourse(course); 
                      setInstructorView('course_quizzes'); 
                      fetchCourseQuizzes(course.id); 
                    }}
                    className="flex items-center justify-center gap-2 bg-emerald-600 text-white text-xs font-bold py-3 rounded-xl hover:bg-emerald-700 transition-all w-full"
                  >
                    View Quizzes Section
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {instructorView === 'course_quizzes' && (
          <div className="grid gap-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <button onClick={() => setInstructorView('courses')} className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"><ArrowLeft size={20} /></button>
                <h3 className="font-black text-2xl text-slate-800">Quizzes Section: {selectedCourse?.name}</h3>
              </div>
              <button 
                onClick={() => { setInstructorView('lectures'); fetchLectures(selectedCourse.id); }}
                className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-black transition-all"
              >
                <Settings size={16} /> Manage Content
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from(new Set(courseQuizzes.map(q => q.title))).map(title => {
                const quizGroup = courseQuizzes.find(q => q.title === title);
                const versionsCount = courseQuizzes.filter(q => q.title === title).length;
                return (
                  <button 
                    key={title}
                    onClick={() => { setSelectedQuizTitle(title); setInstructorView('quiz_versions'); }}
                    className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 text-left transition-all group"
                  >
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <ClipboardList size={24} />
                    </div>
                    <h4 className="font-bold text-lg text-slate-800 mb-1">{title}</h4>
                    <p className="text-slate-400 text-xs mb-4">Lecture {quizGroup.lecture_order}: {quizGroup.lecture_title}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                      <span className="text-xs font-bold text-slate-400">{versionsCount} Versions Available</span>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-emerald-500" />
                    </div>
                  </button>
                );
              })}
              {courseQuizzes.length === 0 && (
                <div className="col-span-full py-12 text-center bg-slate-100 rounded-3xl border-2 border-dashed border-slate-200">
                  <p className="text-slate-400 font-bold">No quizzes available for this course.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {instructorView === 'quiz_versions' && (
          <div className="grid gap-4">
            <div className="flex items-center gap-3 mb-6">
              <button onClick={() => setInstructorView('course_quizzes')} className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"><ArrowLeft size={20} /></button>
              <h3 className="font-black text-2xl text-slate-800">Versions for: {selectedQuizTitle}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button 
                onClick={() => {
                  const baseQuiz = courseQuizzes.filter(q => q.title === selectedQuizTitle).sort((a, b) => b.version - a.version)[0];
                  handleAiGenerateVersion(baseQuiz);
                }}
                disabled={isGeneratingAi}
                className="bg-emerald-50 p-6 rounded-3xl border-2 border-dashed border-emerald-200 flex flex-col items-center justify-center gap-3 hover:bg-emerald-100 transition-all group disabled:opacity-50"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition-transform">
                  {isGeneratingAi ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-600"></div> : <Settings size={24} />}
                </div>
                <div className="text-center">
                  <span className="font-black text-emerald-700 block">AI Generate</span>
                  <span className="text-[10px] text-emerald-600 uppercase font-black tracking-widest">New Version</span>
                </div>
              </button>
              {courseQuizzes.filter(q => q.title === selectedQuizTitle).map(quiz => (
                <button 
                  key={quiz.id}
                  onClick={() => { 
                    setSelectedQuiz(quiz); 
                    setInstructorView('results'); 
                    fetchSpecificQuizResults(quiz.id);
                  }}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 text-left transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Version {quiz.version}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-0.5 rounded">{quiz.quiz_type}</span>
                  </div>
                  <h4 className="font-bold text-slate-800">View Results</h4>
                  <p className="text-slate-400 text-[10px] mt-1">Created {formatRelativeTime(quiz.created_at)}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {instructorView === 'results' && (
          <div className="grid gap-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <button onClick={() => setInstructorView(selectedQuiz ? 'quiz_versions' : 'courses')} className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"><ArrowLeft size={20} /></button>
                <h3 className="font-black text-xl text-slate-800">
                  {selectedQuiz ? `Results: ${selectedQuiz.title} (v${selectedQuiz.version})` : 'All Students Results'}
                </h3>
              </div>
              <button onClick={() => selectedQuiz ? fetchSpecificQuizResults(selectedQuiz.id) : fetchAllStudentsData()} className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"><Search size={20} /></button>
            </div>
            
            {selectedQuiz ? (
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 border-b">
                      <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400">Student Name</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400">Score</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400">Date</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {quizResults.map((res, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-700">{res.username}</td>
                        <td className="px-6 py-4">
                          <span className={`font-black ${parseFloat(res.score) >= 70 ? 'text-emerald-600' : parseFloat(res.score) >= 40 ? 'text-amber-500' : 'text-red-500'}`}>
                            {Math.round(res.score)}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-slate-400">{formatRelativeTime(res.completed_at)}</td>
                        <td className="px-6 py-4">
                          <button 
                            onClick={async () => {
                              await openResultDetails({
                                quizId: selectedQuiz.id,
                                studentName: res.username,
                                lectureNum: selectedQuiz.title,
                                data: { ...res, lastScore: res.score }
                              });
                            }}
                            className="text-emerald-600 font-bold text-xs hover:underline"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                    {quizResults.length === 0 && (
                      <tr>
                        <td colSpan="4" className="px-6 py-12 text-center text-slate-400 font-medium italic">No results found for this version.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              Object.keys(allStudentsData).filter(n => n.toLowerCase() !== 'instructor').map(name => (
                <div key={name} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-slate-50 px-6 py-3 font-bold text-slate-700 flex justify-between items-center border-b">
                    <span>{name}</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Student Record</span>
                  </div>
                  <div className="p-4 flex flex-wrap gap-3">
                    {lectures.map(lec => {
                      const d = allStudentsData[name][`lecture_${lec.order_index}`];
                      return (
                        <button 
                          key={lec.id} 
                          onClick={async () => {
                            if (d) {
                              await openResultDetails({
                                quizId: d.quizId,
                                studentName: name,
                                lectureNum: lec.order_index,
                                data: d
                              });
                            }
                          }}
                          className={`min-w-[100px] p-3 rounded-xl border text-center transition-all ${d ? 'bg-emerald-50 border-emerald-200 hover:scale-105' : 'bg-slate-50 border-slate-100 opacity-40 cursor-default'}`}
                        >
                          <div className="text-[9px] font-black uppercase text-slate-400">Lec {lec.order_index}</div>
                          <div className="text-lg font-black text-slate-700">{d ? `${Math.round(d.lastScore)}%` : '--'}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {instructorView === 'lectures' && (
          <div className="grid gap-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-4">
              <h3 className="font-black text-lg text-slate-800 mb-4 flex items-center gap-2"><Plus size={20} className="text-emerald-600" /> New Lecture</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleCreateLecture(selectedCourse.id, e.target.title.value, parseInt(e.target.order.value));
                e.target.reset();
              }} className="flex flex-wrap gap-4 items-end">
                <div className="flex-1 min-w-[200px]">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Lecture Title</label>
                  <input name="title" required className="w-full p-3 rounded-xl border bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold" />
                </div>
                <div className="w-24">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Order</label>
                  <input name="order" type="number" required defaultValue={lectures.length + 1} className="w-full p-3 rounded-xl border bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold" />
                </div>
                <button type="submit" className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">Add</button>
              </form>
            </div>
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="font-black text-xl text-slate-800">Course Content: {selectedCourse?.name}</h3>
            </div>
            {lectures.map(lec => (
              <div key={lec.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center font-black text-slate-400 border border-slate-100">{lec.order_index}</div>
                  <div>
                    <h4 className="font-bold text-slate-800">{lec.title}</h4>
                    <p className="text-slate-400 text-xs">Lecture content and assessments</p>
                  </div>
                </div>
                <button 
                  onClick={() => { setSelectedLecture(lec); setInstructorView('quizzes'); fetchQuizzes(lec.id); }}
                  className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-black transition-all"
                >
                  Manage Quizzes
                </button>
              </div>
            ))}
          </div>
        )}

        {instructorView === 'quizzes' && (
          <div className="grid gap-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-4">
              <h3 className="font-black text-lg text-slate-800 mb-4 flex items-center gap-2"><Plus size={20} className="text-emerald-600" /> New Quiz</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleCreateQuiz(selectedLecture.id, e.target.title.value, e.target.type.value, parseInt(e.target.version.value));
                e.target.reset();
              }} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Quiz Title</label>
                  <input name="title" required className="w-full p-3 rounded-xl border bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Type</label>
                  <select name="type" className="w-full p-3 rounded-xl border bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold">
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Final">Final</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Version</label>
                  <input name="version" type="number" min="1" max="255" required defaultValue={1} className="w-full p-3 rounded-xl border bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold" />
                </div>
                <button type="submit" className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">Create</button>
              </form>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <button onClick={() => setInstructorView('lectures')} className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"><ArrowLeft size={20} /></button>
                <h3 className="font-black text-xl text-slate-800">Quizzes for {selectedLecture?.title}</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quizzes.map(quiz => (
                <div key={quiz.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Version {quiz.version}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-0.5 rounded">{quiz.quiz_type}</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-lg">{quiz.title}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors"><Edit2 size={20} /></button>
                    <button onClick={async () => {
                      if (confirm('Delete quiz?')) {
                        await sql`DELETE FROM quizzes WHERE id = ${quiz.id}`;
                        fetchQuizzes(selectedLecture.id);
                      }
                    }} className="p-2 text-slate-300 hover:text-red-500 transition-colors"><XCircle size={20} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {instructorView === 'users' && (
          <div className="grid gap-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3 text-slate-800"><Plus className="text-emerald-600" /> Create New Account</h3>
              <form onSubmit={handleAddUser} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Username</label>
                  <input type="text" placeholder="e.g. asif_student" className="w-full p-3.5 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium" value={newUser.username} onChange={(e) => setNewUser({...newUser, username: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Password</label>
                  <input type="text" placeholder="Secure code" className="w-full p-3.5 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium" value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Role</label>
                  <select className="w-full p-3.5 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-bold text-slate-700" value={newUser.role} onChange={(e) => setNewUser({...newUser, role: e.target.value})}>
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                  </select>
                </div>
                <div className="pt-5">
                  <button type="submit" className="w-full bg-emerald-600 text-white font-black py-4 rounded-2xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all">Create User</button>
                </div>
              </form>
            </div>
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-8 py-6 bg-slate-50/50 border-b flex justify-between items-center"><h3 className="font-black text-slate-800">Existing Platform Users</h3><span className="text-xs font-bold text-slate-400">{users.length} total</span></div>
              <div className="divide-y divide-slate-50">
                {users.map((u) => (
                  <div key={u.username} className="px-8 py-5 hover:bg-slate-50/50 transition-colors">
                    {editingUser && editingUser.originalUsername === u.username ? (
                      <form onSubmit={handleUpdateUser} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <input type="text" className="p-2.5 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium" value={editingUser.username} onChange={(e) => setEditingUser({...editingUser, username: e.target.value})} />
                        <input type="text" className="p-2.5 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium" value={editingUser.password} onChange={(e) => setEditingUser({...editingUser, password: e.target.value})} />
                        <select className="p-2.5 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold bg-white" value={editingUser.role} onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}>
                          <option value="student">Student</option>
                          <option value="instructor">Instructor</option>
                        </select>
                        <div className="flex items-center gap-2">
                          <button type="submit" className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"><Save size={20} /></button>
                          <button type="button" onClick={() => setEditingUser(null)} className="p-2 text-slate-400 hover:bg-slate-100 rounded-xl transition-all"><X size={20} /></button>
                        </div>
                      </form>
                    ) : (
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-6">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${u.role === 'instructor' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
                            {u.username[0].toUpperCase()}
                          </div>
                          <div>
                            <span className="font-bold text-slate-800 block leading-tight">{u.username}</span>
                            <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{u.role}</span>
                          </div>
                          <div className="h-8 w-[1px] bg-slate-100"></div>
                          <span className="text-xs text-slate-400">Security Key: <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">{u.password}</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => setEditingUser({ ...u, originalUsername: u.username })} className="p-2.5 text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"><Edit2 size={18} /></button>
                          {u.username !== 'instructor' && (<button onClick={() => handleDeleteUser(u.username)} className="p-2.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"><XCircle size={18} /></button>)}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {viewingDetails && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
            <header className="p-8 border-b flex justify-between items-start bg-slate-50/50">
              <div>
                <h3 className="text-2xl font-black text-slate-800">{viewingDetails.studentName}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-black uppercase tabular-nums">{Math.round(viewingDetails.data.lastScore)}%</span>
                  <span className="text-slate-400 text-sm font-medium">Lecture {viewingDetails.lectureNum} Assessment</span>
                </div>
              </div>
              <button onClick={() => setViewingDetails(null)} className="p-3 hover:bg-slate-200 rounded-full transition-colors text-slate-400"><X size={32} /></button>
            </header>
            <div className="p-8 overflow-y-auto space-y-8 flex-1">
              {quizData.map((q, idx) => {
                const storedAnswer = getStoredAnswerForQuestion(viewingDetails.data.answers, q, idx);
                const studentAnswer = resolveStoredAnswerIndex(storedAnswer, q);
                const isCorrect = studentAnswer !== null && Number(studentAnswer) === Number(q.correct);
                return (
                  <div key={idx} className={`p-8 rounded-[2rem] border-2 ${isCorrect ? 'border-emerald-100 bg-emerald-50/20' : 'border-red-100 bg-red-50/20'}`}>
                    <div className="flex justify-between items-start gap-4 mb-6">
                      <span className={`w-8 h-8 rounded-xl shadow-sm flex items-center justify-center font-black text-xs shrink-0 ${isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>{idx + 1}</span>
                      <div className="text-right flex-1">
                        <p className="font-bold text-xl mb-2 text-slate-800">{q.qEn}</p>
                        <p dir="rtl" className="font-urdu text-2xl text-emerald-800">{q.qUr}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {q.options.map((opt, optIdx) => {
                        let style = 'bg-white border-slate-100 text-slate-500'; let icon = null;
                        if (optIdx === Number(q.correct)) { style = 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-100'; icon = <CheckCircle2 size={18} />; }
                        else if (studentAnswer !== null && optIdx === Number(studentAnswer)) { style = 'bg-red-500 border-red-500 text-white shadow-lg shadow-red-100'; icon = <XCircle size={18} />; }
                        return (
                          <div key={optIdx} className={`p-4 rounded-xl border flex items-center justify-between font-bold ${style}`}>
                            <div className="flex items-center gap-4"><span>{opt.en}</span><span dir="rtl" className="font-urdu text-base opacity-70">{opt.ur}</span></div>{icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const AdminDashboard = () => (
    <div className="min-h-screen bg-slate-50">
      <Header title="Administrator Hub" />
      <nav className="bg-slate-900 border-b border-slate-800 px-6 flex items-center gap-8 h-14 overflow-x-auto text-slate-400">
        <button onClick={() => setAdminView('courses')} className={`h-full px-2 flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-all border-b-2 ${adminView === 'courses' ? 'border-emerald-500 text-emerald-500' : 'border-transparent hover:text-white'}`}><Book size={16} /> Manage Courses</button>
        <button onClick={() => setAdminView('assign')} className={`h-full px-2 flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-all border-b-2 ${adminView === 'assign' ? 'border-emerald-500 text-emerald-500' : 'border-transparent hover:text-white'}`}><Users size={16} /> Course Assignments</button>
        <button onClick={() => setAdminView('content')} className={`h-full px-2 flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-all border-b-2 ${adminView === 'content' ? 'border-emerald-500 text-emerald-500' : 'border-transparent hover:text-white'}`}><Shield size={16} /> High-Level Content</button>
        <button onClick={() => setAdminView('users')} className={`h-full px-2 flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-all border-b-2 ${adminView === 'users' ? 'border-emerald-500 text-emerald-500' : 'border-transparent hover:text-white'}`}><Settings size={16} /> Platform Users</button>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        {adminView === 'courses' && (
          <div className="grid gap-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3"><Plus className="text-emerald-600" /> Define New Course</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const desc = e.target.description.value;
                if (name) handleCreateCourse(name, desc);
              }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <input name="name" type="text" placeholder="Course Name" required className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold" />
                  <textarea name="description" placeholder="Brief Description" className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-medium h-32"></textarea>
                  <button type="submit" className="bg-slate-900 text-white font-black py-4 px-8 rounded-2xl hover:bg-black transition-all shadow-xl">Create Course Structure</button>
                </div>
                <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 flex flex-col justify-center">
                  <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 shadow-sm"><Settings size={24} /></div>
                  <h4 className="font-black text-emerald-900 text-lg mb-2">Administrator Tip</h4>
                  <p className="text-emerald-700/70 text-sm font-medium leading-relaxed">Creating a course here builds the foundation. After creation, you'll need to assign an instructor and then start adding lectures and assessments.</p>
                </div>
              </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => (
                <div key={course.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative group">
                  <h3 className="font-black text-xl text-slate-800 mb-2">{course.name}</h3>
                  <p className="text-slate-500 text-xs mb-6">{course.description}</p>
                  <div className="flex items-center gap-2">
                    <button className="flex-1 bg-slate-50 text-slate-600 font-bold py-2 rounded-xl text-xs hover:bg-slate-100 transition-all border border-slate-100">Edit</button>
                    <button onClick={async () => {
                      if (confirm('Delete course?')) {
                        await sql`DELETE FROM courses WHERE id = ${course.id}`;
                        fetchCourses();
                      }
                    }} className="p-2 text-slate-300 hover:text-red-500 transition-colors"><XCircle size={20} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {adminView === 'assign' && (
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black mb-8 flex items-center gap-3"><Users className="text-emerald-600" /> Allocate Course Permissions</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleAssignCourse(e.target.course.value, e.target.instructor.value);
            }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Select Instructor</label>
                <select name="instructor" required className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold">
                  {users.filter(u => u.role === 'instructor').map(u => <option key={u.id} value={u.id}>{u.username}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Select Course</label>
                <select name="course" required className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold">
                  {courses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div className="pt-6">
                <button type="submit" className="w-full bg-emerald-600 text-white font-black py-4 rounded-2xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all">Grant Access</button>
              </div>
            </form>
          </div>
        )}

        {adminView === 'users' && (
          <div className="grid gap-6">
             <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3 text-slate-800"><Shield className="text-emerald-600" /> Create Platform User</h3>
              <form onSubmit={handleAddUser} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Username</label>
                  <input type="text" placeholder="Username" className="w-full p-3.5 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium" value={newUser.username} onChange={(e) => setNewUser({...newUser, username: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Password</label>
                  <input type="text" placeholder="Password" className="w-full p-3.5 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium" value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">System Role</label>
                  <select className="w-full p-3.5 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-bold text-slate-700" value={newUser.role} onChange={(e) => setNewUser({...newUser, role: e.target.value})}>
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>
                <div className="pt-5">
                  <button type="submit" className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl hover:bg-black shadow-xl transition-all">Authorize User</button>
                </div>
              </form>
            </div>
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
               <div className="divide-y divide-slate-50">
                {users.map((u) => (
                  <div key={u.username} className="px-8 py-5 hover:bg-slate-50/50 transition-colors flex justify-between items-center">
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shadow-sm ${u.role === 'admin' ? 'bg-slate-900 text-white' : u.role === 'instructor' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
                        {u.role[0].toUpperCase()}
                      </div>
                      <div>
                        <span className="font-black text-slate-800 block text-lg">{u.username}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${u.role === 'admin' ? 'bg-red-100 text-red-600' : u.role === 'instructor' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>{u.role}</span>
                          <span className="text-[10px] text-slate-300 font-mono">PWD: {u.password}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setEditingUser({ ...u, originalUsername: u.username })} className="p-3 text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 rounded-2xl transition-all"><Edit2 size={20} /></button>
                      {u.username !== studentName && (<button onClick={() => handleDeleteUser(u.username)} className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"><XCircle size={20} /></button>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );

  if (!import.meta.env.VITE_DATABASE_URL) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-slate-800 rounded-xl p-8 shadow-2xl border border-slate-700">
          <div className="flex items-center justify-center w-16 h-16 bg-red-950 text-red-400 rounded-full mb-6 mx-auto border border-red-800">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-center mb-2">Configuration Error</h1>
          <p className="text-slate-400 text-center text-sm mb-6">
            The database connection string is missing. Please set the <strong className="text-white">VITE_DATABASE_URL</strong> environment variable.
          </p>
          <div className="bg-slate-950 p-4 rounded-lg text-xs font-mono text-slate-300 break-all mb-6">
            Uncaught Error: No database connection string was provided to `neon()`.
          </div>
          <div className="space-y-4">
            <h2 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">How to fix in Netlify:</h2>
            <ol className="text-xs text-slate-400 space-y-2 list-decimal list-inside">
              <li>Go to your Netlify Dashboard.</li>
              <li>Navigate to <strong>Site configuration</strong> &gt; <strong>Environment variables</strong>.</li>
              <li>Click <strong>Add a variable</strong> &gt; <strong>Add a single variable</strong>.</li>
              <li>Set the key as <code className="text-emerald-400 font-mono font-bold">VITE_DATABASE_URL</code>.</li>
              <li>Set the value to your Neon PostgreSQL connection string.</li>
              <li>Save the variable.</li>
              <li>Go to <strong>Deploys</strong> and trigger a new deploy (or re-deploy) for the change to take effect.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  if (isLoadingData) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <GraduationCap className="text-emerald-600" size={32} />
          </div>
        </div>
        <p className="text-slate-500 font-bold text-xl animate-pulse">Initializing Platform...</p>
      </div>
    </div>
  );

  if (!isLoggedIn) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 relative overflow-hidden">
      <UrduFontStyles />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/30 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-[100px]"></div>
      
      <div className="bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] shadow-2xl w-full max-w-xl border border-white relative z-10">
        <div className="flex justify-center mb-10">
          <div className="p-8 bg-emerald-600 rounded-[2.5rem] text-white shadow-2xl shadow-emerald-200">
            <GraduationCap size={72} />
          </div>
        </div>
        <h1 className="text-4xl font-black text-center text-slate-900 mb-2 tracking-tight">Quran Academy Fsd</h1>
        <h2 dir="rtl" className="text-5xl font-black text-center text-emerald-700 mb-10 font-urdu tracking-wide">عربی انسائٹس</h2>
        
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-4">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
              <input 
                type="text" required placeholder="Username / صارف نام" 
                className="w-full pl-12 pr-6 py-5 text-lg font-bold rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all shadow-inner" 
                value={studentName} onChange={(e) => setStudentName(e.target.value)} 
              />
            </div>
            <div className="relative group">
              <Shield className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
              <input 
                type="password" required placeholder="Password / پاس ورڈ" 
                className="w-full pl-12 pr-6 py-5 text-lg font-bold rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all shadow-inner" 
                value={password} onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
          </div>
          {loginError && (
            <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-center gap-3 text-red-600 font-bold animate-shake">
              <XCircle size={20} /> {loginError}
            </div>
          )}
          <button 
            type="submit" disabled={isLoggingIn}
            className={`w-full bg-slate-900 text-white font-black text-xl py-5 rounded-2xl shadow-2xl shadow-slate-200 transition-all hover:bg-black active:scale-[0.98] ${isLoggingIn ? 'opacity-70' : ''}`}
          >
            {isLoggingIn ? 'Authenticating...' : 'Enter Classroom'}
          </button>
        </form>
        <p className="text-center mt-10 text-slate-400 font-medium text-sm">Secure Learning Management System v2.0</p>
      </div>
    </div>
  );

  // Main Content Switcher
  switch(view) {
    case 'student_courses': return <StudentCourses />;
    case 'student_lectures': return <StudentLectures />;
    case 'student_quizzes': return <StudentQuizzes />;
    case 'quiz_taking': return <QuizTaking />;
    case 'instructor_courses': return <InstructorDashboard />;
    case 'admin_dashboard': return <AdminDashboard />;
    default: return <StudentCourses />;
  }
}
