import React, { useState, useEffect } from 'react';
import { Redis } from '@upstash/redis';
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
  ClipboardList
} from 'lucide-react';

// --- STYLING ---
const UrduFontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
    .font-urdu { font-family: 'Amiri', serif; line-height: 1.6; }
  `}</style>
);

// --- REDIS INITIALIZATION ---
const redis = new Redis({ 
  url: "https://exact-llama-77145.upstash.io", 
  token: "gQAAAAAAAS1ZAAIgcDIxZjI3MTkxYzY3ODM0NTFjODJlOGEyYzJiMDJjOTk5Mw", 
}); 

const appId = 'madina-quiz-v1';

const LECTURES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function App() {
  const [studentName, setStudentName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentLecture, setCurrentLecture] = useState(null);
  const [quizData, setQuizData] = useState([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
  const [quizState, setQuizState] = useState({
    active: false, questions: [], currentIndex: 0, score: 0, showResult: false, answers: []
  });
  const [userProgress, setUserProgress] = useState({});
  const [allStudentsData, setAllStudentsData] = useState({});
  const [viewingDetails, setViewingDetails] = useState(null); // { studentName, lectureNum, data }
  const [isManagingUsers, setIsManagingUsers] = useState(false);
  const [newUser, setNewUser] = useState({ username: '', password: '' });
  const [users, setUsers] = useState({});

  const initializeUsers = async () => {
    try {
      const existingUsers = await redis.hgetall('quiz:users');
      if (!existingUsers || !existingUsers.instructor) {
        await redis.hset('quiz:users', { 'instructor': 'ins321' });
      }
    } catch (err) {
      console.error("Initialization error:", err);
    }
  };

  const fetchQuestions = async () => {
    try {
      const data = await redis.get('quiz:questions');
      if (data) {
        setQuizData(typeof data === 'string' ? JSON.parse(data) : data);
      }
    } catch (err) {
      console.error("Redis fetch questions error:", err);
    } finally {
      setIsLoadingQuestions(false);
    }
  };

  useEffect(() => {
    initializeUsers();
    fetchQuestions();
  }, []);

  const fetchStudentData = async (name) => {
    try {
      const data = await redis.hgetall(`quiz:results:${name}`);
      setUserProgress(data || {});
    } catch (err) { console.error("Redis fetch error:", err); }
  };

  const fetchAllStudentsData = async () => {
    try {
      const students = await redis.smembers('quiz:students');
      const allData = {};
      for (const name of students) {
        const data = await redis.hgetall(`quiz:results:${name}`);
        allData[name] = data || {};
      }
      setAllStudentsData(allData);
    } catch (err) { console.error("Redis fetch all error:", err); }
  };

  const fetchUsers = async () => {
    try {
      const data = await redis.hgetall('quiz:users');
      setUsers(data || {});
    } catch (err) { console.error("Redis fetch users error:", err); }
  };

  useEffect(() => {
    if (!isLoggedIn) return;
    
    if (studentName.toLowerCase() === 'instructor') {
      fetchAllStudentsData();
      fetchUsers();
      const interval = setInterval(fetchAllStudentsData, 10000); // Poll every 10s
      return () => clearInterval(interval);
    } else {
      fetchStudentData(studentName);
    }
  }, [studentName, isLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    if (studentName.trim().length < 2) return;
    setIsLoggingIn(true);
    
    try {
      const storedPassword = await redis.hget('quiz:users', studentName);
      if (storedPassword === password) {
        setIsLoggedIn(true);
      } else {
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
      await redis.hset('quiz:users', { [newUser.username]: newUser.password });
      setNewUser({ username: '', password: '' });
      fetchUsers();
    } catch (err) { console.error("Add user error:", err); }
  };

  const handleDeleteUser = async (username) => {
    if (username === 'instructor') return;
    if (!confirm(`Are you sure you want to delete user: ${username}?`)) return;
    try {
      await redis.hdel('quiz:users', username);
      fetchUsers();
    } catch (err) { console.error("Delete user error:", err); }
  };

  const startQuiz = (lectureNum) => {
    const questions = quizData.filter(q => q.lecture === lectureNum);
    setCurrentLecture(lectureNum);
    setQuizState({ active: true, questions, currentIndex: 0, score: 0, showResult: false, answers: [] });
  };

  const handleAnswer = (optionIndex) => {
    const currentQ = quizState.questions[quizState.currentIndex];
    const isCorrect = optionIndex === currentQ.correct;
    const newScore = isCorrect ? quizState.score + 1 : quizState.score;
    const nextIndex = quizState.currentIndex + 1;

    if (nextIndex < quizState.questions.length) {
      setQuizState({ ...quizState, currentIndex: nextIndex, score: newScore, answers: [...quizState.answers, optionIndex] });
    } else {
      const finalScore = (newScore / quizState.questions.length) * 100;
      const finalAnswers = [...quizState.answers, optionIndex];
      setQuizState({ ...quizState, score: newScore, showResult: true, answers: finalAnswers });
      saveProgress(currentLecture, finalScore, finalAnswers);
    }
  };

  const saveProgress = async (lecture, score, answers) => {
    if (!studentName || studentName.toLowerCase() === 'instructor') return;
    try {
      const progressData = { 
        lastScore: score, 
        completedAt: new Date().toISOString(), 
        passed: score >= 60,
        answers: answers // Store the sequence of answers
      };
      await redis.hset(`quiz:results:${studentName}`, { [`lecture_${lecture}`]: progressData });
      await redis.sadd('quiz:students', studentName);
      fetchStudentData(studentName); // Refresh local data
    } catch (err) { console.error("Redis save error:", err); }
  };

  const resetQuiz = () => setQuizState({ active: false, questions: [], currentIndex: 0, score: 0, showResult: false, answers: [] });

  const handleLogout = () => {
    setIsLoggedIn(false);
    setStudentName('');
    setPassword('');
    setLoginError('');
    setUserProgress({});
    setIsManagingUsers(false);
  };

  if (isLoadingQuestions) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
        <p className="text-slate-500 font-medium">Loading Quiz... / لوڈ ہو رہا ہے</p>
      </div>
    </div>
  );

  if (!isLoggedIn) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <UrduFontStyles />
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg border border-slate-100">
        <div className="flex justify-center mb-8"><div className="p-6 bg-emerald-100 rounded-full text-emerald-600"><GraduationCap size={64} /></div></div>
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-2">Madina Book 1 Quiz</h1>
        <h2 dir="rtl" className="text-4xl font-bold text-center text-emerald-700 mb-4 font-urdu">مدینہ عربک بک 1 کوئز</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <input 
              type="text" 
              required 
              placeholder="Username / صارف نام" 
              className="w-full p-4 text-xl rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" 
              value={studentName} 
              onChange={(e) => setStudentName(e.target.value)} 
            />
            <input 
              type="password" 
              required 
              placeholder="Password / پاس ورڈ" 
              className="w-full p-4 text-xl rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          {loginError && <p className="text-red-500 text-center font-bold">{loginError}</p>}
          <button 
            type="submit" 
            disabled={isLoggingIn}
            className={`w-full bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all ${isLoggingIn ? 'opacity-50 cursor-not-allowed' : 'hover:bg-emerald-700'}`}
          >
            {isLoggingIn ? 'Verifying...' : 'Enter Classroom'}
          </button>
        </form>
      </div>
    </div>
  );

  if (studentName.toLowerCase() === 'instructor') return (
    <div className="min-h-screen bg-slate-50">
      <UrduFontStyles />
      <header className="bg-slate-900 h-16 flex items-center justify-between px-6 sticky top-0 z-10 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white"><Users size={18} /></div>
          <span className="text-white font-bold tracking-tight text-lg">Instructor Portal</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsManagingUsers(!isManagingUsers)} 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${isManagingUsers ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            <Users size={18} />
            <span>Manage Users</span>
          </button>
          <button onClick={handleLogout} className="text-slate-400 hover:text-red-400 transition-colors"><LogOut size={24} /></button>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto p-4 md:p-6">
        {isManagingUsers ? (
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                <Users className="text-emerald-600" /> Add New User
              </h3>
              <form onSubmit={handleAddUser} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input 
                  type="text" 
                  placeholder="Username" 
                  className="p-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500"
                  value={newUser.username}
                  onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Password" 
                  className="p-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500"
                  value={newUser.password}
                  onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                />
                <button type="submit" className="bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition-all">
                  Create User
                </button>
              </form>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b">
                <h3 className="font-bold text-slate-700">Existing Users</h3>
              </div>
              <div className="divide-y">
                {Object.entries(users).map(([username, pwd]) => (
                  <div key={username} className="px-6 py-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
                    <div>
                      <span className="font-bold text-slate-800">{username}</span>
                      <span className="ml-4 text-sm text-slate-400">Password: <span className="font-mono">{pwd}</span></span>
                    </div>
                    {username !== 'instructor' && (
                      <button 
                        onClick={() => handleDeleteUser(username)}
                        className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                      >
                        <XCircle size={20} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-4">
            {Object.keys(allStudentsData).filter(n => n.toLowerCase() !== 'instructor').map(name => (
              <div key={name} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-slate-50 px-5 py-3 font-bold text-lg border-b text-slate-700 flex justify-between items-center">
                  <span>{name}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Student Record</span>
                </div>
                <div className="p-4 grid grid-cols-2 md:grid-cols-5 gap-3">
                  {LECTURES.map(num => {
                    const d = allStudentsData[name][`lecture_${num}`];
                    return (
                      <button 
                        key={num} 
                        onClick={() => d && setViewingDetails({ studentName: name, lectureNum: num, data: d })}
                        className={`p-3 rounded-xl border text-center transition-all ${d ? 'bg-emerald-50 border-emerald-200 hover:scale-105 cursor-pointer' : 'bg-slate-50 border-slate-100 opacity-40 cursor-default'}`}
                      >
                        <div className="text-[9px] font-black uppercase text-slate-400 mb-0.5">Lec {num}</div>
                        <div className="text-lg font-black text-slate-700">{d ? `${Math.round(d.lastScore)}%` : '--'}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {viewingDetails && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            <header className="p-6 border-b flex justify-between items-center bg-slate-50">
              <div>
                <h3 className="text-xl font-bold">{viewingDetails.studentName}</h3>
                <p className="text-slate-500 font-medium">Lecture {viewingDetails.lectureNum} - {Math.round(viewingDetails.data.lastScore)}%</p>
              </div>
              <button onClick={() => setViewingDetails(null)} className="p-2 hover:bg-slate-200 rounded-full transition-colors"><XCircle size={32} className="text-slate-400" /></button>
            </header>
            <div className="p-6 overflow-y-auto space-y-6">
              {quizData.filter(q => q.lecture === viewingDetails.lectureNum).map((q, idx) => {
                const studentAnswer = viewingDetails.data.answers ? viewingDetails.data.answers[idx] : null;
                const isCorrect = studentAnswer === q.correct;
                return (
                  <div key={idx} className={`p-5 rounded-2xl border-2 ${isCorrect ? 'border-emerald-100 bg-emerald-50/30' : 'border-red-100 bg-red-50/30'}`}>
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <span className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center font-bold text-slate-500 shrink-0">{idx + 1}</span>
                      <div className="text-right flex-1">
                        <p className="font-bold text-lg mb-1">{q.qEn}</p>
                        <p dir="rtl" className="font-urdu text-xl text-emerald-800">{q.qUr}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 mt-4">
                      {q.options.map((opt, optIdx) => {
                        let bgColor = 'bg-white border-slate-100';
                        let textColor = 'text-slate-600';
                        let icon = null;

                        if (optIdx === q.correct) {
                          bgColor = 'bg-emerald-500 border-emerald-500';
                          textColor = 'text-white';
                          icon = <CheckCircle2 size={18} />;
                        } else if (optIdx === studentAnswer) {
                          bgColor = 'bg-red-500 border-red-500';
                          textColor = 'text-white';
                          icon = <XCircle size={18} />;
                        }

                        return (
                          <div key={optIdx} className={`p-3 rounded-xl border flex items-center justify-between font-medium ${bgColor} ${textColor}`}>
                            <div className="flex items-center gap-3">
                              <span>{opt.en}</span>
                              <span dir="rtl" className="font-urdu text-sm opacity-80">{opt.ur}</span>
                            </div>
                            {icon}
                          </div>
                        );
                      })}
                    </div>
                    {studentAnswer === null && <p className="mt-3 text-sm font-bold text-red-500 italic">No answer recorded</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  if (quizState.active) {
    const { questions, currentIndex, showResult, score } = quizState;
    if (showResult) return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <UrduFontStyles />
        <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 text-center border border-slate-100">
          <div className="inline-flex p-4 bg-emerald-50 rounded-full mb-6">
            <Trophy size={48} className="text-emerald-600" />
          </div>
          <h2 className="text-2xl font-black text-slate-800">Quiz Completed!</h2>
          <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-slate-500 uppercase text-[10px] font-black tracking-widest mb-1">Your Final Score</p>
            <div className="text-5xl font-black text-emerald-600">{Math.round((score/questions.length)*100)}%</div>
            <p className="text-slate-400 text-sm mt-2">{score} correct out of {questions.length}</p>
          </div>
          <div className="mt-8 space-y-3">
            <button onClick={() => startQuiz(currentLecture)} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all">Try Again</button>
            <button onClick={resetQuiz} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-4 rounded-xl transition-all">Back to Dashboard</button>
          </div>
        </div>
      </div>
    );
    const q = questions[currentIndex];
    return (
      <div className="min-h-screen bg-slate-50">
        <UrduFontStyles />
        <header className="bg-white h-12 flex items-center justify-between px-6 border-b">
          <button onClick={resetQuiz} className="text-slate-400 hover:text-red-500 transition-colors"><XCircle size={20} /></button>
          <div className="text-right text-[9px] font-black uppercase text-slate-400 tracking-widest">Question {currentIndex + 1} / {questions.length}</div>
        </header>
        <main className="max-w-3xl mx-auto px-4 py-4 text-center">
          <h2 className="text-xl font-bold mb-2 leading-tight text-slate-800">{q.qEn}</h2>
          <h2 dir="rtl" className="text-2xl font-bold text-emerald-700 font-urdu border-t border-slate-100 pt-2 mt-2 leading-relaxed">{q.qUr}</h2>
          <div className="mt-6 space-y-2.5">
            {q.options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(i)} className="w-full p-3 bg-white border-2 border-slate-200 rounded-xl text-left flex flex-col group hover:border-emerald-500 hover:bg-emerald-50/30 shadow-sm transition-all">
                <span className="text-base font-bold text-slate-700 leading-tight">{opt.en}</span>
                <span dir="rtl" className="text-lg font-bold text-emerald-600 font-urdu border-t border-slate-50 pt-0.5 mt-1 leading-tight">{opt.ur}</span>
              </button>
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <UrduFontStyles />
      <header className="bg-white h-16 border-b flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2"><BookOpen className="text-emerald-600" size={24} /><span className="font-bold text-lg text-slate-800 tracking-tight">Madina Arabic</span></div>
        <button onClick={handleLogout} className="text-slate-400 hover:text-red-500 transition-colors"><LogOut size={24} /></button>
      </header>
      <main className="max-w-4xl mx-auto p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Select Lecture / انتخاب کریں</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LECTURES.map(num => (
            <button key={num} onClick={() => startQuiz(num)} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 text-left transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">{num}</div>
                <div><h3 className="font-bold text-lg text-slate-700">Lecture {num}</h3></div>
                {userProgress[`lecture_${num}`] && <div className="ml-auto text-xl font-black text-emerald-600">{Math.round(userProgress[`lecture_${num}`].lastScore)}%</div>}
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}