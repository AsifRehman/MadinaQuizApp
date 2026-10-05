import React, { createContext, useContext, useState, useEffect } from 'react';
import { sql, SCHOOL_ID } from '../api/db';
import { useAuth } from './AuthContext';

const LMSContext = createContext(null);

export function LMSProvider({ children }) {
  const { studentId, isLoggedIn } = useAuth();

  const [courses, setCourses] = useState([]);
  const [sections, setSections] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [courseQuizzes, setCourseQuizzes] = useState([]);
  const [userProgress, setUserProgress] = useState({});
  const [isLoadingData, setIsLoadingData] = useState(true);

  // Selected navigation items
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const fetchCourses = async () => {
    try {
      const data = await sql`
        SELECT c.* FROM courses c
        WHERE c.school_id = ${SCHOOL_ID}
          AND (EXISTS (SELECT 1 FROM sections s WHERE s.course_id = c.id))
        ORDER BY c.name ASC
      `;
      setCourses(data);
      return data;
    } catch (err) {
      console.error("Fetch courses error:", err);
      return [];
    } finally {
      setIsLoadingData(false);
    }
  };

  const fetchSections = async (courseId, includeHidden = false) => {
    if (!courseId) return [];
    try {
      const data = includeHidden
        ? await sql`SELECT * FROM sections WHERE course_id = ${courseId} ORDER BY order_index ASC`
        : await sql`SELECT * FROM sections WHERE course_id = ${courseId} AND is_hidden = false ORDER BY order_index ASC`;
      setSections(data);
      return data;
    } catch (err) {
      console.error("Fetch sections error:", err);
      return [];
    }
  };

  const fetchLectures = async (courseId) => {
    if (!courseId) return [];
    try {
      const data = await sql`SELECT * FROM lectures WHERE course_id = ${courseId} ORDER BY order_index ASC`;
      setLectures(data);
      return data;
    } catch (err) {
      console.error("Fetch lectures error:", err);
      return [];
    }
  };

  const fetchSectionLectures = async (sectionId) => {
    if (!sectionId) return [];
    try {
      const data = await sql`SELECT * FROM lectures WHERE section_id = ${sectionId} ORDER BY order_index ASC`;
      setLectures(data);
      return data;
    } catch (err) {
      console.error("Fetch section lectures error:", err);
      return [];
    }
  };

  const fetchQuizzes = async (lectureId) => {
    if (!lectureId) return [];
    try {
      const data = await sql`SELECT * FROM quizzes WHERE lecture_id = ${lectureId} ORDER BY version ASC`;
      setQuizzes(data);
      return data;
    } catch (err) {
      console.error("Fetch quizzes error:", err);
      return [];
    }
  };

  const fetchSectionQuizzes = async (sectionId) => {
    if (!sectionId) return [];
    try {
      const data = await sql`SELECT * FROM quizzes WHERE section_id = ${sectionId} ORDER BY version ASC`;
      setQuizzes(data);
      return data;
    } catch (err) {
      console.error("Fetch section quizzes error:", err);
      return [];
    }
  };

  const fetchCourseQuizzes = async (courseId, sectionId = null) => {
    if (!courseId) return [];
    try {
      const data = sectionId
        ? await sql`
            SELECT q.*, l.title as lecture_title, l.order_index as lecture_order, s.title as section_title, s.kind as section_kind
            FROM quizzes q
            LEFT JOIN lectures l ON q.lecture_id = l.id
            LEFT JOIN sections s ON q.section_id = s.id
            LEFT JOIN sections s2 ON l.section_id = s2.id
            WHERE (s.id = ${sectionId} OR s2.id = ${sectionId})
            ORDER BY COALESCE(l.order_index, 0) ASC, q.version ASC
          `
        : await sql`
            SELECT q.*, l.title as lecture_title, l.order_index as lecture_order, s.title as section_title, s.kind as section_kind
            FROM quizzes q
            LEFT JOIN lectures l ON q.lecture_id = l.id
            LEFT JOIN sections s ON q.section_id = s.id
            LEFT JOIN sections s2 ON l.section_id = s2.id
            WHERE s.course_id = ${courseId} OR s2.course_id = ${courseId}
            ORDER BY COALESCE(s2.order_index, s.order_index) ASC, COALESCE(l.order_index, 0) ASC, q.version ASC
          `;
      setCourseQuizzes(data);
      return data;
    } catch (err) {
      console.error("Fetch course quizzes error:", err);
      return [];
    }
  };

  const fetchQuizData = async (quizId) => {
    if (!quizId) return [];
    try {
      const questionRecords = await sql`
        SELECT * FROM questions WHERE quiz_id = ${quizId} ORDER BY id ASC
      `;
      const mapped = questionRecords.map(q => ({
        id: q.id,
        qEn: q.question_en,
        qUr: q.question_ur,
        options: typeof q.options === 'string' ? JSON.parse(q.options) : q.options,
        correct: Number(q.correct_option_index),
        part: q.part || null,
      }));
      return mapped;
    } catch (err) {
      console.error("Fetch quiz data error:", err);
      return [];
    }
  };

  const fetchStudentData = async (uid) => {
    if (!uid) return;
    try {
      const results = await sql`
        SELECT r.*, l.order_index as lecture_num, qz.title as quiz_title, qz.version as quiz_version, s.title as section_title
        FROM results r
        JOIN quizzes qz ON r.quiz_id = qz.id
        LEFT JOIN lectures l ON qz.lecture_id = l.id
        LEFT JOIN sections s ON qz.section_id = s.id
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
          startedAt: r.started_at,
          answers: typeof r.answers === 'string' ? JSON.parse(r.answers) : r.answers,
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
            attempts: [],
          };
        }
        progress[key].attempts.push(attempt);
        progress[key].attemptCount += 1;
        progress[key].bestScore = Math.max(progress[key].bestScore, attempt.score);
      });
      setUserProgress(progress);
    } catch (err) {
      console.error("Fetch student data error:", err);
    }
  };

  const saveProgress = async (quizId, score, answers, startedAt = null, endedAt = null) => {
    if (!studentId) return;
    try {
      await sql`
        INSERT INTO results (user_id, quiz_id, score, answers, started_at, completed_at) 
        VALUES (${studentId}, ${quizId}, ${score}, ${JSON.stringify(answers)}, ${startedAt}, ${endedAt})
      `;
      fetchStudentData(studentId);
    } catch (err) {
      console.error("Save progress error:", err);
    }
  };

  // Initial load when logged in
  useEffect(() => {
    if (isLoggedIn) {
      fetchCourses();
      if (studentId) {
        fetchStudentData(studentId);
      }
    }
  }, [isLoggedIn, studentId]);

  return (
    <LMSContext.Provider
      value={{
        courses,
        setCourses,
        fetchCourses,
        sections,
        setSections,
        fetchSections,
        lectures,
        setLectures,
        fetchLectures,
        fetchSectionLectures,
        quizzes,
        setQuizzes,
        fetchQuizzes,
        fetchSectionQuizzes,
        courseQuizzes,
        fetchCourseQuizzes,
        fetchQuizData,
        userProgress,
        setUserProgress,
        fetchStudentData,
        saveProgress,
        selectedCourse,
        setSelectedCourse,
        selectedSection,
        setSelectedSection,
        selectedLecture,
        setSelectedLecture,
        selectedQuiz,
        setSelectedQuiz,
        isLoadingData,
      }}
    >
      {children}
    </LMSContext.Provider>
  );
}

export const useLMS = () => {
  const context = useContext(LMSContext);
  if (!context) {
    throw new Error('useLMS must be used within an LMSProvider');
  }
  return context;
};
