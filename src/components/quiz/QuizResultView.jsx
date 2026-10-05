import React, { useState } from 'react';
import { Trophy, CheckCircle2, XCircle, ArrowLeft, RotateCcw, X, ListFilter } from 'lucide-react';

export default function QuizResultView({
  score,
  questions,
  answers,
  onRetry,
  onBack,
  backLabel = 'Back to Quizzes',
}) {
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const percentage = Math.round((score / questions.length) * 100);
  const wrongCount = questions.length - score;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-8 overflow-y-auto">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 sm:p-10 border border-slate-100 relative overflow-hidden my-auto text-center">
        <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>

        <div className="inline-flex p-5 sm:p-6 bg-emerald-50 rounded-full mb-6 sm:mb-8 relative">
          <Trophy size={56} className="text-emerald-600" />
          <div className="absolute -top-2 -right-2 bg-amber-400 text-white p-2 rounded-full shadow-lg">
            <CheckCircle2 size={20} />
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-2">
          {percentage >= 80 ? 'Outstanding Work!' : percentage >= 50 ? 'Good Effort!' : 'Keep Practicing!'}
        </h2>
        <p className="text-slate-500 mb-6 sm:mb-8 font-medium">
          You've completed the assessment.
        </p>

        {/* Performance Box */}
        <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl sm:rounded-[2rem] border border-slate-100 mb-6 sm:mb-8">
          <p className="text-slate-400 uppercase text-[11px] font-black tracking-[0.2em] mb-2">
            Final Score
          </p>
          <div className="text-6xl sm:text-7xl font-black text-emerald-600 tabular-nums">
            {percentage}%
          </div>
          <div className="flex items-center justify-center gap-4 mt-5 text-slate-500 text-sm font-bold">
            <span className="flex items-center gap-1">
              <CheckCircle2 size={16} className="text-emerald-500" /> {score} Correct
            </span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span className="flex items-center gap-1">
              <XCircle size={16} className="text-red-400" /> {wrongCount} Wrong
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid gap-3">
          <button
            onClick={() => setReviewModalOpen(true)}
            className="w-full bg-emerald-600 text-white font-black py-4 sm:py-5 rounded-2xl shadow-xl hover:bg-emerald-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <ListFilter size={18} />
            <span>Review Answers</span>
          </button>
          <button
            onClick={onRetry}
            className="w-full bg-slate-900 text-white font-black py-4 sm:py-5 rounded-2xl shadow-xl hover:bg-black transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <RotateCcw size={18} />
            <span>Retry Quiz</span>
          </button>
          <button
            onClick={onBack}
            className="w-full bg-white text-slate-500 font-bold py-3.5 rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} />
            <span>{backLabel}</span>
          </button>
        </div>
      </div>

      {/* SEPARATE MODAL DIALOG BOX FOR ANSWER REVIEW */}
      {reviewModalOpen && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col">
            <header className="p-6 md:p-8 border-b flex justify-between items-start bg-slate-50/50 shrink-0">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-slate-800">
                  Review Assessment Answers
                </h3>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="bg-emerald-600 text-white px-3 py-0.5 rounded-full text-xs font-black uppercase tabular-nums">
                    {percentage}%
                  </span>
                  <span className="text-slate-400 text-xs sm:text-sm font-medium">
                    {score} of {questions.length} Correct
                  </span>
                </div>
              </div>
              <button
                onClick={() => setReviewModalOpen(false)}
                className="p-2.5 hover:bg-slate-200 rounded-full transition-colors text-slate-400 shrink-0"
                title="Close Review"
              >
                <X size={24} />
              </button>
            </header>

            <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
              {questions.map((q, idx) => {
                const studentAnswer = answers[idx];
                const studentChoiceIdx =
                  studentAnswer && typeof studentAnswer === 'object'
                    ? studentAnswer.originalIdx
                    : studentAnswer;
                const isCorrect =
                  studentChoiceIdx !== null &&
                  studentChoiceIdx !== undefined &&
                  Number(studentChoiceIdx) === Number(q.correct);

                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl border-2 ${
                      isCorrect ? 'border-emerald-100 bg-emerald-50/20' : 'border-red-100 bg-red-50/20'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <span
                        className={`w-7 h-7 rounded-xl shadow-sm flex items-center justify-center font-black text-xs shrink-0 ${
                          isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <div className="text-right flex-1">
                        {q.part && (
                          <div className="text-left mb-1.5">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800">
                              {q.part}
                            </span>
                          </div>
                        )}
                        <p className="font-bold text-base mb-1 text-slate-800 text-left">{q.qEn}</p>
                        <p dir="rtl" className="font-urdu text-xl text-emerald-800">
                          {q.qUr}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {q.options.map((opt, optIdx) => {
                        const actualIdx = opt.originalIdx ?? optIdx;
                        const isOptionCorrect = Number(actualIdx) === Number(q.correct);
                        const isStudentSelected =
                          studentChoiceIdx !== null &&
                          studentChoiceIdx !== undefined &&
                          Number(studentChoiceIdx) === Number(actualIdx);

                        let style = 'bg-white border-slate-100 text-slate-600';
                        let icon = null;

                        if (isOptionCorrect) {
                          style = 'bg-emerald-600 border-emerald-600 text-white shadow-sm';
                          icon = <CheckCircle2 size={16} />;
                        } else if (isStudentSelected) {
                          style = 'bg-red-500 border-red-500 text-white shadow-sm';
                          icon = <XCircle size={16} />;
                        }

                        return (
                          <div
                            key={actualIdx}
                            className={`p-3 rounded-xl border flex items-center justify-between font-bold text-sm ${style}`}
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <span className="flex-1 truncate">{opt.en}</span>
                              <span dir="rtl" className="font-urdu text-base opacity-80 shrink-0">
                                {opt.ur}
                              </span>
                            </div>
                            {icon && <span className="ml-2 shrink-0">{icon}</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <footer className="p-4 border-t bg-slate-50 flex justify-end shrink-0">
              <button
                onClick={() => setReviewModalOpen(false)}
                className="px-6 py-2.5 bg-slate-900 hover:bg-black text-white rounded-xl font-bold text-sm transition-all"
              >
                Close
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
