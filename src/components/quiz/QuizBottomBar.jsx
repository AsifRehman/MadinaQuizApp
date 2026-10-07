import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function QuizBottomBar({
  currentIndex,
  totalQuestions,
  skippedEarlierCount,
  firstSkippedIndex = -1,
  unansweredCount,
  canFinish,
  isLastQuestion,
  examPalette,
  onPrevious,
  onNext,
  onFinish,
  onJumpToFirstSkipped,
}) {
  const targetSkippedNum = firstSkippedIndex >= 0 ? firstSkippedIndex + 1 : null;
  return (
    <div
      className={`px-4 py-3 md:px-8 md:py-4 border-t bg-white flex items-center justify-between gap-3 shrink-0 ${examPalette.finishBorder}`}
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm transition-colors disabled:opacity-40 disabled:pointer-events-none"
      >
        <ArrowLeft size={16} /> Previous
      </button>

      {/* Center Counter */}
      <div className="text-xs font-black text-slate-400 tabular-nums">
        {currentIndex + 1} / {totalQuestions}
        {skippedEarlierCount > 0 ? (
          <span className="ml-2 text-amber-600 font-bold hidden sm:inline">
            ({skippedEarlierCount} skipped earlier
            {unansweredCount > skippedEarlierCount ? ` · ${unansweredCount} unselected` : ''})
          </span>
        ) : unansweredCount > 0 ? (
          <span className="ml-2 text-amber-600 font-bold hidden sm:inline">
            ({unansweredCount} unselected)
          </span>
        ) : null}
      </div>

      {/* Action Buttons */}
      {canFinish ? (
        <div className="flex items-center gap-2">
          {currentIndex < totalQuestions - 1 && (
            <button
              type="button"
              onClick={onNext}
              className="flex items-center gap-1.5 px-3 md:px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors"
            >
              Next <ArrowRight size={16} />
            </button>
          )}
          <button
            type="button"
            onClick={onFinish}
            className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-xl text-white font-bold text-sm transition-colors shadow-sm ${examPalette.next}`}
          >
            Finish Quiz <ArrowRight size={16} />
          </button>
        </div>
      ) : isLastQuestion ? (
        skippedEarlierCount > 0 ? (
          <button
            type="button"
            onClick={onJumpToFirstSkipped}
            title={`${skippedEarlierCount} question(s) skipped earlier. Click to jump to Question ${targetSkippedNum || 1}.`}
            className="flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-colors shadow-sm animate-pulse"
          >
            <span>
              {targetSkippedNum
                ? `Jump to Skipped Q#${targetSkippedNum}${skippedEarlierCount > 1 ? ` (+${skippedEarlierCount - 1} more)` : ''}`
                : `Complete ${skippedEarlierCount} Skipped Question${skippedEarlierCount > 1 ? 's' : ''}`}
            </span>
            <ArrowRight size={16} />
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-xl bg-slate-100 text-slate-400 border border-slate-200 font-bold text-sm cursor-not-allowed select-none transition-colors"
            title="Please select an answer above to finish the quiz"
          >
            <span>Select an answer to finish</span>
          </button>
        )
      ) : (
        <button
          type="button"
          onClick={onNext}
          className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-xl text-white font-bold text-sm transition-colors shadow-sm ${examPalette.next}`}
        >
          Next <ArrowRight size={16} />
        </button>
      )}
    </div>
  );
}
