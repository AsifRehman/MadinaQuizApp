import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GraduationCap, ArrowLeft, Shield, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Header({ title, showBack = false, onBack = null }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { studentName, userRole, logout } = useAuth();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const isInstructorOrAdmin = userRole === 'instructor' || userRole === 'admin';
  const isCurrentlyInManagement =
    location.pathname.startsWith('/instructor') || location.pathname.startsWith('/admin');

  return (
    <header className="bg-white h-16 border-b flex items-center justify-between px-4 sm:px-6 sticky top-0 z-10 shadow-sm shrink-0">
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        {showBack && (
          <button
            onClick={handleBack}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 shrink-0"
            title="Go Back"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        <div
          onClick={() => navigate('/courses')}
          className="flex items-center gap-2 cursor-pointer truncate"
        >
          <GraduationCap className="text-emerald-600 shrink-0" size={28} />
          <span className="font-bold text-lg sm:text-xl text-slate-800 tracking-tight truncate">
            {title || 'Quran Academy'}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        {isInstructorOrAdmin && !isCurrentlyInManagement && (
          <button
            onClick={() => navigate(userRole === 'instructor' ? '/instructor' : '/admin')}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl border border-emerald-200 text-xs font-bold transition-colors shadow-xs"
          >
            <Shield size={14} />
            <span className="hidden sm:inline">Instructor Portal</span>
          </button>
        )}

        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100">
          <User size={16} className="text-emerald-600" />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-700 capitalize leading-none">{studentName}</span>
            <span className="text-[10px] text-slate-400 uppercase font-black">{userRole}</span>
          </div>
        </div>

        <button
          onClick={logout}
          className="p-2 text-slate-400 hover:text-red-500 transition-colors"
          title="Sign Out"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}
