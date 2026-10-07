import React, { useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const isAnswerComplete = (answer) => {
  if (answer === null || answer === undefined) return false;
  if (Array.isArray(answer)) return answer.length > 0 && answer.every(isAnswerComplete);
  if (typeof answer === 'number') return Number.isFinite(answer);
  if (typeof answer === 'string') return answer.trim().length > 0;
  if (typeof answer !== 'object') return false;
  if (Array.isArray(answer.selectedOptions)) return answer.selectedOptions.length > 0 && answer.selectedOptions.every(isAnswerComplete);
  if (Array.isArray(answer.originalIdx)) return answer.originalIdx.length > 0 && answer.originalIdx.every((idx) => !Number.isNaN(Number(idx)));
  if (answer.originalIdx !== undefined && !Number.isNaN(Number(answer.originalIdx))) return true;
  return Boolean(
    (typeof answer.en === 'string' && answer.en.trim()) ||
      (typeof answer.ur === 'string' && answer.ur.trim())
  );
};
export default function PartTabs({
  quizParts = [],
  currentPartName = '',
  animatingPart = null,
  currentIndex = 0,
  answers = [],
  isExam = false,
  onSelectPart,
}) {
  const tabsContainerRef = useRef(null);

  // Auto-scroll the active part tab into view
  useEffect(() => {
    if (!currentPartName) return;

    const timer = setTimeout(() => {
      const container = tabsContainerRef.current;
      if (!container) return;

      // When at the very first question, always reset scroll to the start
      if (currentIndex === 0) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }

      const activeTab = container.querySelector('[data-active="true"]');
      if (activeTab) {
        const tabLeft = activeTab.offsetLeft;
        const tabWidth = activeTab.offsetWidth;
        const containerWidth = container.offsetWidth;
        const targetScroll = tabLeft - (containerWidth / 2) + (tabWidth / 2);
        container.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentPartName, currentIndex]);

  if (!quizParts || quizParts.length === 0) return null;

  return (
    <div className="mb-3 flex items-center gap-1 w-full">
      {/* Left scroll arrow */}
      <button
        type="button"
        aria-label="Scroll parts left"
        onClick={() => {
          if (tabsContainerRef.current) {
            tabsContainerRef.current.scrollBy({ left: -160, behavior: 'smooth' });
          }
        }}
        className="shrink-0 h-8 w-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
      >
        <ArrowLeft size={14} />
      </button>

      {/* Tabs row — fixed height so it never expands vertically */}
      <div
        ref={tabsContainerRef}
        className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-2xl flex-1 overflow-x-auto scrollbar-none border border-slate-200/60 shadow-inner h-10 relative scroll-smooth"
        style={{ minHeight: '2.5rem', maxHeight: '2.5rem' }}
      >
        {quizParts.map((part) => {
          const isActive = currentPartName === part.name;
          const answeredInPart = part.indices.filter((idx) => isAnswerComplete(answers[idx])).length;
          const isCompleted = answeredInPart === part.count;
          const hasSkipped = answeredInPart < part.count && part.indices.some((idx) => idx < currentIndex && !isAnswerComplete(answers[idx]));
          const isPartAnimating = animatingPart === part.name;

          return (
            <button
              key={part.name}
              data-active={isActive ? 'true' : 'false'}
              type="button"
              onClick={() => {
                if (part.firstIndex !== currentIndex && onSelectPart) {
                  onSelectPart(part.firstIndex);
                }
              }}
              title={`Go to ${part.name} (Question ${part.firstIndex + 1})${hasSkipped ? ` · ${part.count - answeredInPart} skipped in this section` : ''}`}
              className={`inline-flex items-center gap-1.5 px-3 h-7 rounded-xl text-xs font-bold transition-colors duration-200 shrink-0 select-none cursor-pointer whitespace-nowrap ${
                isActive
                  ? `${
                      isExam
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-2 ring-indigo-400 ring-offset-1'
                        : 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 ring-2 ring-emerald-400 ring-offset-1'
                    } ${
                      isPartAnimating
                        ? isExam
                          ? 'animate-exam-part-active'
                          : 'animate-part-active'
                        : ''
                    }`
                  : isCompleted
                  ? 'bg-white/80 text-emerald-700 hover:bg-white border border-emerald-200/60 shadow-xs'
                  : hasSkipped
                  ? 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-white/50 border border-transparent'
              }`}
            >
              {isActive ? (
                <span className="relative flex h-2 w-2 mr-0.5 shrink-0">
                  {isPartAnimating && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  )}
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
              ) : isCompleted ? (
                <CheckCircle2 size={13} className="text-emerald-600 stroke-[2.5] shrink-0" />
              ) : hasSkipped ? (
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 animate-ping"></span>
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></span>
              )}

              <span className="truncate max-w-[120px] sm:max-w-none">{part.name}</span>

              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold tabular-nums shrink-0 ${
                  isActive
                    ? 'bg-white/25 text-white'
                    : isCompleted
                    ? 'bg-emerald-100/80 text-emerald-800'
                    : hasSkipped
                    ? 'bg-amber-200/80 text-amber-900 font-extrabold'
                    : 'bg-slate-200/70 text-slate-500'
                }`}
              >
                {answeredInPart}/{part.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Right scroll arrow */}
      <button
        type="button"
        aria-label="Scroll parts right"
        onClick={() => {
          if (tabsContainerRef.current) {
            tabsContainerRef.current.scrollBy({ left: 160, behavior: 'smooth' });
          }
        }}
        className="shrink-0 h-8 w-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
      >
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
