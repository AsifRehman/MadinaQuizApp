import React from 'react';

export default function QuestionCard({
  question,
  currentAnswer,
  onSelectOption,
  examPalette,
}) {
  if (!question) return null;

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Question Header */}
      <div className="px-5 py-4 md:px-8 md:py-5 text-center border-b border-slate-50 shrink-0">
        {question.part && (
          <div className="mb-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-xs">
              {question.part}
            </span>
          </div>
        )}
        <h2 className="text-lg sm:text-2xl md:text-[1.7rem] font-bold mb-3 text-slate-800 leading-snug">
          {question.qEn}
        </h2>
        <h2
          dir="rtl"
          className={`text-xl sm:text-2xl md:text-3xl font-bold font-urdu leading-relaxed ${examPalette.qUr}`}
        >
          {question.qUr}
        </h2>
      </div>

      {/* Options List */}
      <div className="px-4 py-4 md:px-8 md:py-6 bg-slate-50/50 space-y-3 flex-1 overflow-y-auto min-h-0">
        {(question.options || []).map((opt, optIdx) => {
          const optOriginalIdx = opt.originalIdx !== undefined && !Number.isNaN(Number(opt.originalIdx))
            ? Number(opt.originalIdx)
            : optIdx;

          const ansOriginalIdx =
            currentAnswer?.originalIdx !== undefined && !Number.isNaN(Number(currentAnswer.originalIdx))
              ? Number(currentAnswer.originalIdx)
              : null;

          const isSelected = Boolean(
            currentAnswer &&
              ((ansOriginalIdx !== null && ansOriginalIdx === optOriginalIdx) ||
                (currentAnswer.en && opt.en && currentAnswer.en.trim() === opt.en.trim()) ||
                (currentAnswer.ur && opt.ur && currentAnswer.ur.trim() === opt.ur.trim()))
          );

          const safeOption = {
            ...opt,
            originalIdx: optOriginalIdx,
          };

          return (
            <button
              key={optOriginalIdx}
              type="button"
              onClick={() => onSelectOption(safeOption)}
              className={`w-full px-4 py-2.5 bg-white border-2 rounded-xl text-left flex flex-row items-center justify-between gap-3 group transition-all shrink-0 active:scale-[0.99] ${
                isSelected
                  ? `${examPalette.selected} shadow-md`
                  : `border-slate-100 ${examPalette.option} hover:shadow-md`
              }`}
            >
              <span
                className={`text-base font-bold leading-snug flex-1 ${
                  isSelected ? examPalette.selectedText : `text-slate-700 ${examPalette.optionText}`
                }`}
              >
                {opt.en}
              </span>
              <span
                dir="rtl"
                className={`text-lg font-bold font-urdu shrink-0 ${examPalette.urText}`}
              >
                {opt.ur}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
