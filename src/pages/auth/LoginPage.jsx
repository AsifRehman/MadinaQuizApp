import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GraduationCap, User, Shield, XCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, userRole, login, isLoggingIn, loginError } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // If already logged in, redirect away from /login
  useEffect(() => {
    if (isLoggedIn) {
      const from = location.state?.from?.pathname;
      if (from && from !== '/login') {
        navigate(from, { replace: true });
      } else if (userRole === 'instructor') {
        navigate('/instructor', { replace: true });
      } else if (userRole === 'admin') {
        navigate('/admin', { replace: true });
      } else {
        navigate('/courses', { replace: true });
      }
    }
  }, [isLoggedIn, userRole, navigate, location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(username, password);
    if (user) {
      if (user.role === 'instructor') {
        navigate('/instructor', { replace: true });
      } else if (user.role === 'admin') {
        navigate('/admin', { replace: true });
      } else {
        navigate('/courses', { replace: true });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/30 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-[100px]"></div>

      <div className="bg-white/80 backdrop-blur-xl p-8 sm:p-12 md:p-14 rounded-[3rem] shadow-2xl w-full max-w-xl border border-white relative z-10">
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="p-6 sm:p-8 bg-emerald-600 rounded-[2.5rem] text-white shadow-2xl shadow-emerald-200">
            <GraduationCap size={64} className="sm:w-[72px] sm:h-[72px]" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-center text-slate-900 mb-2 tracking-tight">
          Quran Academy Fsd
        </h1>
        <h2
          dir="rtl"
          className="text-4xl sm:text-5xl font-black text-center text-emerald-700 mb-8 sm:mb-10 font-urdu tracking-wide"
        >
          عربی انسائٹس
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <div className="relative group">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors"
                size={20}
              />
              <input
                type="text"
                required
                placeholder="Username / صارف نام"
                className="w-full pl-12 pr-6 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all shadow-inner"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="relative group">
              <Shield
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors"
                size={20}
              />
              <input
                type="password"
                required
                placeholder="Password / پاس ورڈ"
                className="w-full pl-12 pr-6 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all shadow-inner"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {loginError && (
            <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-center gap-3 text-red-600 font-bold text-sm">
              <XCircle size={20} className="shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoggingIn}
            className={`w-full bg-slate-900 text-white font-black text-lg sm:text-xl py-4 sm:py-5 rounded-2xl shadow-2xl shadow-slate-200 transition-all hover:bg-black active:scale-[0.98] ${
              isLoggingIn ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoggingIn ? 'Authenticating...' : 'Enter Classroom'}
          </button>
        </form>

        <p className="text-center mt-8 sm:mt-10 text-slate-400 font-medium text-xs sm:text-sm">
          Madina Arabic Quiz &amp; LMS Platform v2.0
        </p>
      </div>
    </div>
  );
}
