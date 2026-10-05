import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LMSProvider } from './context/LMSContext';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  if (!import.meta.env.VITE_DATABASE_URL) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
          <div className="flex items-center justify-center w-16 h-16 bg-red-950 text-red-400 rounded-full mb-6 mx-auto border border-red-800">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-center mb-2">Configuration Error</h1>
          <p className="text-slate-400 text-center text-sm mb-6">
            The database connection string is missing. Please set the{' '}
            <strong className="text-white">VITE_DATABASE_URL</strong> environment variable.
          </p>
          <div className="bg-slate-950 p-4 rounded-lg text-xs font-mono text-slate-300 break-all mb-6">
            Uncaught Error: No database connection string was provided to `neon()`.
          </div>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <LMSProvider>
          <AppRoutes />
        </LMSProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
