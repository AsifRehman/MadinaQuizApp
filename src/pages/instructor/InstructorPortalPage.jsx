import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Book,
  Table,
  PieChart,
  Users,
  GraduationCap,
  BookOpen,
  ArrowLeft,
  Search,
  Plus,
  Edit2,
  Trash2,
  XCircle,
  FileText,
  X,
  CheckCircle2,
} from 'lucide-react';
import Header from '../../components/common/Header';
import QuizContentManager from '../../QuizContentManager';
import { sql, SCHOOL_ID } from '../../api/db';
import { useAuth } from '../../context/AuthContext';
import { useLMS } from '../../context/LMSContext';
import { formatRelativeTime } from '../../utils/formatters';

export default function InstructorPortalPage() {
  const navigate = useNavigate();
  const { studentName, userRole } = useAuth();
  const {
    courses,
    fetchCourses,
    sections,
    fetchSections,
    lectures,
    fetchLectures,
    fetchSectionLectures,
    quizzes,
    fetchQuizzes,
    fetchSectionQuizzes,
    fetchCourseQuizzes,
    fetchQuizData,
    selectedCourse,
    setSelectedCourse,
    selectedSection,
    setSelectedSection,
    selectedLecture,
    setSelectedLecture,
    selectedQuiz,
    setSelectedQuiz,
  } = useLMS();

  const [activeTab, setActiveTab] = useState('courses');
  const [courseDrillStep, setCourseDrillStep] = useState('courses'); // 'courses' | 'sections' | 'lectures' | 'quizzes'

  // Results Tab State
  const [allStudentsData, setAllStudentsData] = useState({});
  const [quizResults, setQuizResults] = useState([]);
  const [selectedResultQuiz, setSelectedResultQuiz] = useState(null);
  const [viewingResultDetails, setViewingResultDetails] = useState(null);
  const [detailQuestions, setDetailQuestions] = useState([]);

  // User Management State
  const [usersList, setUsersList] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', password: '', role: 'student' });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await sql`
        SELECT id, username, password, role 
        FROM users 
        WHERE school_id = ${SCHOOL_ID} 
        ORDER BY role DESC, username ASC
      `;
      setUsersList(data);
    } catch (err) {
      console.error('Fetch users error:', err);
    }
  };

  const fetchAllStudentsResults = async () => {
    try {
      const students = await sql`
        SELECT id, username FROM users 
        WHERE school_id = ${SCHOOL_ID} AND role = 'student'
        ORDER BY username ASC
      `;

      const studentIds = students.map((s) => s.id);
      if (studentIds.length === 0) {
        setAllStudentsData({});
        return;
      }

      const results = await sql`
        SELECT r.*, u.username, l.order_index as lecture_num, qz.title as quiz_title, s.title as section_title, s.kind as section_kind
        FROM results r
        JOIN users u ON r.user_id = u.id
        JOIN quizzes qz ON r.quiz_id = qz.id
        LEFT JOIN lectures l ON qz.lecture_id = l.id
        LEFT JOIN sections s ON qz.section_id = s.id OR l.section_id = s.id
        WHERE r.user_id = ANY(${studentIds})
        ORDER BY r.completed_at DESC
      `;

      const grouped = {};
      students.forEach((s) => {
        grouped[s.username] = {};
      });

      results.forEach((r) => {
        const username = r.username;
        if (!grouped[username]) grouped[username] = {};
        const key = r.lecture_num ? `lecture_${r.lecture_num}` : `section_${r.quiz_id}`;
        if (!grouped[username][key] || new Date(r.completed_at) > new Date(grouped[username][key].completed_at)) {
          grouped[username][key] = {
            quizId: r.quiz_id,
            quizTitle: r.quiz_title,
            sectionTitle: r.section_title,
            lastScore: parseFloat(r.score),
            completed_at: r.completed_at,
            started_at: r.started_at,
            answers: typeof r.answers === 'string' ? JSON.parse(r.answers) : r.answers,
          };
        }
      });

      setAllStudentsData(grouped);
    } catch (err) {
      console.error('Fetch all student results error:', err);
    }
  };

  const fetchSpecificQuizResults = async (qId) => {
    try {
      const data = await sql`
        SELECT r.*, u.username
        FROM results r
        JOIN users u ON r.user_id = u.id
        WHERE r.quiz_id = ${qId}
        ORDER BY r.completed_at DESC
      `;
      setQuizResults(data);
    } catch (err) {
      console.error('Fetch specific quiz results error:', err);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!newUser.username || !newUser.password) return;
    try {
      const normalized = newUser.username.trim().toLowerCase();
      await sql`
        INSERT INTO users (school_id, username, password, role) 
        VALUES (${SCHOOL_ID}, ${normalized}, ${newUser.password}, ${newUser.role})
        ON CONFLICT (school_id, username) DO UPDATE SET password = EXCLUDED.password, role = EXCLUDED.role
      `;
      setNewUser({ username: '', password: '', role: 'student' });
      fetchUsers();
    } catch (err) {
      console.error('Add user error:', err);
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    if (!editingUser.username || !editingUser.password) return;
    try {
      const normalized = editingUser.username.trim().toLowerCase();
      await sql`
        UPDATE users 
        SET username = ${normalized}, 
            password = ${editingUser.password}, 
            role = ${editingUser.role}
        WHERE school_id = ${SCHOOL_ID} AND username = ${editingUser.originalUsername}
      `;
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      console.error('Update user error:', err);
    }
  };

  const handleDeleteUser = async (uname) => {
    if (uname === 'instructor' || uname === studentName) {
      alert('You cannot delete your own account or the primary instructor.');
      return;
    }
    if (!confirm(`Are you sure you want to delete user: ${uname}?`)) return;
    try {
      await sql`DELETE FROM users WHERE school_id = ${SCHOOL_ID} AND username = ${uname}`;
      fetchUsers();
    } catch (err) {
      console.error('Delete user error:', err);
    }
  };

  const handleOpenDetailModal = async (quizId, uname, data) => {
    const qList = await fetchQuizData(quizId);
    setDetailQuestions(qList);
    setViewingResultDetails({
      studentName: uname,
      quizId,
      data,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header title="Instructor Portal" />

      {/* Tabs Bar */}
      <nav className="bg-white border-b px-6 flex items-center gap-6 sm:gap-8 h-14 overflow-x-auto whitespace-nowrap shrink-0">
        <button
          onClick={() => setActiveTab('courses')}
          className={`h-full px-2 flex items-center gap-2 font-bold text-sm transition-all border-b-2 ${
            activeTab === 'courses'
              ? 'border-emerald-600 text-emerald-600'
              : 'border-transparent text-slate-400 hover:text-slate-600'
          }`}
        >
          <Book size={18} /> Courses
        </button>

        <button
          onClick={() => setActiveTab('quiz_manager')}
          className={`h-full px-2 flex items-center gap-2 font-bold text-sm transition-all border-b-2 ${
            activeTab === 'quiz_manager'
              ? 'border-emerald-600 text-emerald-600'
              : 'border-transparent text-slate-400 hover:text-slate-600'
          }`}
        >
          <Table size={18} /> Quiz Questions (Table &amp; JSON)
        </button>

        <button
          onClick={() => {
            setActiveTab('results');
            setSelectedResultQuiz(null);
            fetchAllStudentsResults();
            if (courses[0]?.id) {
              fetchSections(courses[0].id, true);
              fetchLectures(courses[0].id);
            }
          }}
          className={`h-full px-2 flex items-center gap-2 font-bold text-sm transition-all border-b-2 ${
            activeTab === 'results'
              ? 'border-emerald-600 text-emerald-600'
              : 'border-transparent text-slate-400 hover:text-slate-600'
          }`}
        >
          <PieChart size={18} /> Student Results
        </button>

        <button
          onClick={() => {
            setActiveTab('users');
            fetchUsers();
          }}
          className={`h-full px-2 flex items-center gap-2 font-bold text-sm transition-all border-b-2 ${
            activeTab === 'users'
              ? 'border-emerald-600 text-emerald-600'
              : 'border-transparent text-slate-400 hover:text-slate-600'
          }`}
        >
          <Users size={18} /> Manage Users
        </button>

        <button
          onClick={() => navigate('/courses')}
          className="h-full px-3 flex items-center gap-2 font-bold text-sm transition-all border-b-2 border-transparent text-slate-500 hover:text-emerald-700 ml-auto bg-slate-50 hover:bg-emerald-50 rounded-t-xl"
          title="Browse courses and attempt quizzes in student mode"
        >
          <GraduationCap size={18} className="text-emerald-600" />
          <span className="hidden sm:inline">Student Mode (Attempt Quizzes)</span>
        </button>
      </nav>

      {/* Main Content Area */}
      {activeTab === 'quiz_manager' ? (
        <div className="flex-1">
          <QuizContentManager
            sql={sql}
            initialQuiz={selectedQuiz}
            courses={courses}
            sections={sections}
            lectures={lectures}
            selectedCourse={selectedCourse}
            selectedSection={selectedSection}
            onBack={() => setActiveTab('courses')}
            onQuizUpdated={() => {
              if (selectedCourse?.id) fetchCourseQuizzes(selectedCourse.id);
              if (selectedLecture?.id) fetchQuizzes(selectedLecture.id);
            }}
          />
        </div>
      ) : (
        <main className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 w-full flex-1">
          {/* TAB 1: COURSES / SECTIONS DRILLDOWN */}
          {activeTab === 'courses' && (
            <div>
              {courseDrillStep === 'courses' && (
                <div>
                  <h2 className="text-2xl font-black text-slate-800 mb-6">Course Management</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                      <div
                        key={course.id}
                        className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4">
                            <BookOpen size={24} />
                          </div>
                          <h3 className="font-bold text-xl text-slate-800 mb-2">{course.name}</h3>
                          <p className="text-slate-500 text-xs mb-6 line-clamp-2">
                            {course.description}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedCourse(course);
                            fetchSections(course.id, true);
                            setCourseDrillStep('sections');
                          }}
                          className="flex items-center justify-center gap-2 bg-emerald-600 text-white text-xs font-bold py-3 rounded-xl hover:bg-emerald-700 transition-all w-full"
                        >
                          View Sections &amp; Quizzes
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {courseDrillStep === 'sections' && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <button
                      onClick={() => setCourseDrillStep('courses')}
                      className="p-2 hover:bg-slate-200 rounded-xl transition-colors text-slate-500"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <h2 className="text-2xl font-black text-slate-800">
                      {selectedCourse?.name} - Sections
                    </h2>
                  </div>

                  <div className="grid gap-4">
                    {sections.map((section) => (
                      <div
                        key={section.id}
                        className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-700">
                            {section.order_index}
                          </span>
                          <div>
                            <h3 className="font-bold text-lg text-slate-800">{section.title}</h3>
                            <span className="text-xs font-bold uppercase text-slate-400">
                              {section.kind}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedSection(section);
                            if (section.kind === 'exam') {
                              fetchSectionQuizzes(section.id);
                              setCourseDrillStep('quizzes');
                            } else {
                              fetchSectionLectures(section.id);
                              setCourseDrillStep('lectures');
                            }
                          }}
                          className="px-4 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-xl text-xs font-bold transition-all"
                        >
                          Manage Quizzes
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {courseDrillStep === 'lectures' && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <button
                      onClick={() => setCourseDrillStep('sections')}
                      className="p-2 hover:bg-slate-200 rounded-xl transition-colors text-slate-500"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <h2 className="text-2xl font-black text-slate-800">
                      {selectedSection?.title} - Lectures
                    </h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {lectures.map((lec) => (
                      <div
                        key={lec.id}
                        className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-xs font-black uppercase text-slate-400 mb-1 block">
                            Lesson {lec.order_index}
                          </span>
                          <h3 className="font-bold text-base text-slate-800 mb-4">{lec.title}</h3>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedLecture(lec);
                            fetchQuizzes(lec.id);
                            setCourseDrillStep('quizzes');
                          }}
                          className="px-4 py-2 bg-slate-900 text-white hover:bg-black rounded-xl text-xs font-bold transition-all w-full text-center"
                        >
                          View Versions
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {courseDrillStep === 'quizzes' && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <button
                      onClick={() =>
                        setCourseDrillStep(selectedSection?.kind === 'exam' ? 'sections' : 'lectures')
                      }
                      className="p-2 hover:bg-slate-200 rounded-xl transition-colors text-slate-500"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <h2 className="text-2xl font-black text-slate-800">
                      {selectedLecture?.title || selectedSection?.title} - Quiz Versions
                    </h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {quizzes.map((quiz) => (
                      <div
                        key={quiz.id}
                        className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-xs font-black uppercase text-emerald-600 mb-1 block">
                            Version {quiz.version}
                          </span>
                          <h3 className="font-bold text-xl text-slate-800 mb-2">{quiz.title}</h3>
                          <p className="text-slate-400 text-xs mb-4">{quiz.quiz_type} Assessment</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSelectedQuiz(quiz);
                              setActiveTab('quiz_manager');
                            }}
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all"
                          >
                            <Table size={14} /> Edit Table / JSON
                          </button>
                          <button
                            onClick={() => navigate(`/quiz/${quiz.id}`)}
                            className="px-4 py-2.5 bg-slate-900 hover:bg-black text-white font-bold rounded-xl text-xs transition-all"
                          >
                            Preview Quiz
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: STUDENT RESULTS */}
          {activeTab === 'results' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-800">Student Results Overview</h2>
                <button
                  onClick={fetchAllStudentsResults}
                  className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                  title="Refresh Results"
                >
                  <Search size={20} />
                </button>
              </div>

              {Object.keys(allStudentsData).length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                  <p className="text-slate-400 font-bold">No student results found.</p>
                </div>
              ) : (
                Object.keys(allStudentsData).map((uname) => {
                  const record = allStudentsData[uname];
                  const entries = Object.entries(record);

                  return (
                    <div
                      key={uname}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
                    >
                      <div className="bg-slate-50 px-6 py-3 font-bold text-slate-700 flex justify-between items-center border-b">
                        <span className="text-base">{uname}</span>
                        <span className="text-xs text-slate-400 uppercase font-black">
                          {entries.length} Attempted
                        </span>
                      </div>
                      <div className="p-4 flex flex-wrap gap-3">
                        {entries.length === 0 ? (
                          <p className="text-xs text-slate-400 font-bold">No attempts recorded yet.</p>
                        ) : (
                          entries.map(([key, data]) => (
                            <button
                              key={key}
                              onClick={() => handleOpenDetailModal(data.quizId, uname, data)}
                              className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center hover:scale-105 transition-all min-w-[110px]"
                            >
                              <div className="text-[10px] font-black uppercase text-slate-400">
                                {data.quizTitle || key}
                              </div>
                              <div className="text-xl font-black text-emerald-700">
                                {Math.round(data.lastScore)}%
                              </div>
                              <div className="text-[10px] text-slate-400">
                                {formatRelativeTime(data.completed_at)}
                              </div>
                            </button>
                          ))
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* TAB 3: MANAGE USERS */}
          {activeTab === 'users' && (
            <div className="space-y-8">
              {/* Add User Form */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="font-black text-xl text-slate-800 mb-6">
                  {editingUser ? `Edit User: ${editingUser.originalUsername}` : 'Create New User'}
                </h3>
                <form
                  onSubmit={editingUser ? handleUpdateUser : handleAddUser}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                  <input
                    type="text"
                    required
                    placeholder="Username"
                    value={editingUser ? editingUser.username : newUser.username}
                    onChange={(e) =>
                      editingUser
                        ? setEditingUser({ ...editingUser, username: e.target.value })
                        : setNewUser({ ...newUser, username: e.target.value })
                    }
                    className="p-3.5 rounded-xl border bg-slate-50 font-bold text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Password"
                    value={editingUser ? editingUser.password : newUser.password}
                    onChange={(e) =>
                      editingUser
                        ? setEditingUser({ ...editingUser, password: e.target.value })
                        : setNewUser({ ...newUser, password: e.target.value })
                    }
                    className="p-3.5 rounded-xl border bg-slate-50 font-bold text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <select
                    value={editingUser ? editingUser.role : newUser.role}
                    onChange={(e) =>
                      editingUser
                        ? setEditingUser({ ...editingUser, role: e.target.value })
                        : setNewUser({ ...newUser, role: e.target.value })
                    }
                    className="p-3.5 rounded-xl border bg-slate-50 font-bold text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                    <option value="admin">Administrator</option>
                  </select>

                  <div className="sm:col-span-3 flex justify-end gap-3 pt-2">
                    {editingUser && (
                      <button
                        type="button"
                        onClick={() => setEditingUser(null)}
                        className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      className="px-8 py-3 bg-slate-900 text-white rounded-xl font-black text-sm hover:bg-black transition-all"
                    >
                      {editingUser ? 'Save User' : 'Authorize User'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Users Table */}
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="divide-y divide-slate-100">
                  {usersList.map((u) => (
                    <div
                      key={u.id}
                      className="p-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm text-white ${
                            u.role === 'admin'
                              ? 'bg-slate-900'
                              : u.role === 'instructor'
                              ? 'bg-amber-500'
                              : 'bg-emerald-600'
                          }`}
                        >
                          {u.username[0]?.toUpperCase()}
                        </span>
                        <div>
                          <p className="font-bold text-base text-slate-800">{u.username}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] uppercase font-black text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                              {u.role}
                            </span>
                            <span className="text-xs text-slate-400 font-mono">PWD: {u.password}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditingUser({ ...u, originalUsername: u.username })}
                          className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(u.username)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      )}

      {/* Detail Result Modal */}
      {viewingResultDetails && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col">
            <header className="p-6 border-b flex justify-between items-start bg-slate-50/50 shrink-0">
              <div>
                <h3 className="text-xl font-black text-slate-800">
                  {viewingResultDetails.studentName}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="bg-emerald-600 text-white px-3 py-0.5 rounded-full text-xs font-black">
                    {Math.round(viewingResultDetails.data.lastScore)}%
                  </span>
                  <span className="text-slate-500 text-xs font-bold">
                    {viewingResultDetails.data.quizTitle || 'Quiz Assessment'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setViewingResultDetails(null)}
                className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400"
              >
                <X size={20} />
              </button>
            </header>

            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              {detailQuestions.map((q, idx) => {
                const storedAns = viewingResultDetails.data.answers?.[idx];
                const studentAns = storedAns?.originalIdx ?? storedAns;
                const isCorrect = Number(studentAns) === Number(q.correct);

                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border-2 ${
                      isCorrect ? 'border-emerald-100 bg-emerald-50/20' : 'border-red-100 bg-red-50/20'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <span
                        className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs text-white ${
                          isCorrect ? 'bg-emerald-500' : 'bg-red-500'
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <div className="flex-1 text-right">
                        <p className="font-bold text-base text-slate-800 text-left mb-1">{q.qEn}</p>
                        <p dir="rtl" className="font-urdu text-xl text-emerald-800">
                          {q.qUr}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {q.options.map((opt, optIdx) => {
                        const isOptionCorrect = optIdx === Number(q.correct);
                        const isStudentChoice = Number(studentAns) === optIdx;

                        let style = 'bg-white border-slate-100 text-slate-600';
                        if (isOptionCorrect) {
                          style = 'bg-emerald-600 border-emerald-600 text-white shadow-sm';
                        } else if (isStudentChoice) {
                          style = 'bg-red-500 border-red-500 text-white shadow-sm';
                        }

                        return (
                          <div
                            key={optIdx}
                            className={`p-3 rounded-xl border flex items-center justify-between font-bold text-sm ${style}`}
                          >
                            <span className="flex-1 truncate">{opt.en}</span>
                            <span dir="rtl" className="font-urdu text-base opacity-80 shrink-0">
                              {opt.ur}
                            </span>
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
}
