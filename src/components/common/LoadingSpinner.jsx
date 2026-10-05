import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <GraduationCap className="text-emerald-600" size={32} />
          </div>
        </div>
        <p className="text-slate-500 font-bold text-xl animate-pulse">{message}</p>
      </div>
    </div>
  );
}
