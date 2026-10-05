import React from 'react';
import { Trophy } from 'lucide-react';
import { useLMS } from '../../context/LMSContext';
import { formatRelativeTime } from '../../utils/formatters';

export default function StudentProgressSummary({ compact = false }) {
  const { userProgress } = useLMS();

  const progressItems = Object.values(userProgress || {});
  const totalAttempts = progressItems.reduce((sum, item) => sum + (item.attemptCount || 0), 0);
  const completedQuizzes = progressItems.length;
  const averageBest = completedQuizzes
    ? Math.round(progressItems.reduce((sum, item) => sum + (item.bestScore || 0), 0) / completedQuizzes)
    : 0;

  const latestAttempt = progressItems
    .flatMap((item) => (item.attempts || []).map((attempt) => ({ ...attempt, quizTitle: item.quizTitle })))
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
        <p className="text-sm text-slate-400 font-bold mt-5">
          No attempts yet. Your scores will appear here after you complete a quiz.
        </p>
      )}
    </div>
  );
}
