import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  FileText,
  Save,
  ArrowRight,
  CheckCircle2,
  XCircle,
  X,
} from 'lucide-react';
import Header from '../../components/common/Header';
import StudentProgressSummary from '../../components/student/StudentProgressSummary';
import { useAuth } from '../../context/AuthContext';
import { useLMS } from '../../context/LMSContext';
import { formatRelativeTime } from '../../utils/formatters';
import { loadActiveQuizState, clearActiveQuizState } from '../../utils/quizStorage';

export default function QuizzesPage() {
  const { courseId, lectureId, sectionId } = useParams();
  const navigate = useNavigate();
  const { studentId, studentName } = useAuth();
  const {
    quizzes,
    fetchQuizzes,
    fetchSectionQuizzes,
    selectedSection,
    selectedLecture,
    setSelectedQuiz,
    userProgress,
    fetchStudentData,
    fetchQuizData,
  } = useLMS();

  const [reviewModalData, setReviewModalData] = useState(null);
  const [modalQuizQuestions, setModalQuizQuestions] = useState([]);
  const [isLoadingReview, setIsLoadingReview] = useState(false);

  const isExamSection = Boolean(sectionId && (!lectureId || selectedSection?.kind === 'exam'));

  useEffect(() => {
    if (isExamSection && sectionId) {
      fetchSectionQuizzes(sectionId);
    } else if (lectureId) {
      fetchQuizzes(lectureId);
    }
    if (studentId) {
      fetchStudentData(studentId);
    }
  }, [lectureId, sectionId, isExamSection, studentId]);

  const handleStartQuiz = (quiz, forceNew = false) => {
    setSelectedQuiz(quiz);
    if (forceNew) {
      clearActiveQuizState(studentId, quiz.id);
    }
    navigate(`/quiz/${quiz.id}${forceNew ? '?fresh=true' : ''}`);
  };

  const handleOpenReview = async (quiz, attempt, index) => {
    setIsLoadingReview(true);
    setReviewModalData({
      quizTitle: quiz.title,
      studentName,
      attemptNumber: (userProgress[`quiz_${quiz.id}`]?.attemptCount || 1) - index,
      score: attempt.score,
      completedAt: attempt.completedAt,
      startedAt: attempt.startedAt,
      answers: attempt.answers,
    });

    const questions = await fetchQuizData(quiz.id);
    setModalQuizQuestions(questions);
    setIsLoadingReview(false);
  };

  const getStoredAnswerForQuestion = (answers, question, fallbackIndex) => {
    if (!answers || !Array.isArray(answers)) return null;
    const matched = answers.find(
      (answer) =>
        answer &&
        typeof answer === 'object' &&
        ((answer.questionId && answer.questionId === question.id) ||
          (answer.qEn && answer.qEn === question.qEn) ||
          (answer.qUr && answer.qUr === question.qUr))
    );
    return matched ?? answers[fallbackIndex] ?? null;
  };

  const resolveAnswerIdx = (answer, question) => {
    if (answer === null || answer === undefined) return null;
    if (typeof answer === 'number') return Number(answer);
    if (typeof answer === 'object') {
      if (typeof answer.originalIdx === 'number') return answer.originalIdx;
      const match = (question.options || []).findIndex(
        (opt) => (answer.en && opt.en === answer.en) || (answer.ur && opt.ur === answer.ur)
      );
      if (match >= 0) return match;
    }
    return null;
  };

  const pageTitle = isExamSection
    ? `${selectedSection?.title || 'Exam'} Quizzes`
    : `${selectedLecture?.title || 'Lecture'} Quizzes`;

  const backUrl = isExamSection
    ? `/courses/${courseId}/sections`
    : `/courses/${courseId}/sections/${selectedLecture?.section_id || selectedSection?.id}/lectures`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header title={pageTitle} showBack onBack={() => navigate(backUrl)} />

      <main className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 w-full flex-1">
        <StudentProgressSummary compact />

        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-slate-800">
            Select Quiz / کوئز منتخب کریں
          </h2>
          {isExamSection && (
            <span className="bg-indigo-100 text-indigo-700 px-3 sm:px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              Exam Section
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzes.map((quiz) => {
            const result = userProgress[`quiz_${quiz.id}`];
            const inProgress = loadActiveQuizState(studentId, quiz.id);
            const inProgressCount = inProgress?.answers?.filter(Boolean)?.length || 0;

            const palette = isExamSection
              ? {
                  card: 'border-indigo-200 hover:border-indigo-500',
                  icon: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
                  badge: 'bg-indigo-100 text-indigo-700',
                  latest: 'text-indigo-600',
                  start: 'bg-indigo-600 hover:bg-indigo-700',
                  hoverText: 'hover:text-indigo-600 hover:bg-indigo-50',
                }
              : {
                  card: 'border-slate-100 hover:border-emerald-500',
                  icon: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
                  badge: 'bg-slate-50 text-slate-400',
                  latest: 'text-emerald-600',
                  start: 'bg-slate-900 hover:bg-black',
                  hoverText: 'hover:text-emerald-600 hover:bg-emerald-50',
                };

            return (
              <div
                key={quiz.id}
                className={`bg-white p-6 rounded-3xl border-2 shadow-sm hover:shadow-xl text-left transition-all group relative flex flex-col justify-between ${palette.card}`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-2xl transition-colors ${palette.icon}`}>
                      <FileText size={24} />
                    </div>
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg ${palette.badge}`}
                    >
                      Version {quiz.version}
                    </span>
                  </div>

                  <h3 className="font-black text-xl text-slate-800 mb-1">{quiz.title}</h3>
                  <p className="text-slate-500 text-xs mb-4">{quiz.quiz_type} Assessment</p>

                  {result ? (
                    <div className="mt-4 pt-4 border-t border-slate-50 space-y-4">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                          <p className="text-[9px] font-black uppercase text-slate-400">Attempts</p>
                          <p className="text-lg font-black text-slate-700 tabular-nums">
                            {result.attemptCount}
                          </p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                          <p className="text-[9px] font-black uppercase text-slate-400">Latest</p>
                          <p className={`text-lg font-black tabular-nums ${palette.latest}`}>
                            {Math.round(result.latestScore)}%
                          </p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                          <p className="text-[9px] font-black uppercase text-slate-400">Best</p>
                          <p className="text-lg font-black text-slate-800 tabular-nums">
                            {Math.round(result.bestScore)}%
                          </p>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        {result.attempts.slice(0, 3).map((attempt, index) => (
                          <button
                            key={attempt.id || index}
                            onClick={() => handleOpenReview(quiz, attempt, index)}
                            className={`w-full flex items-center justify-between text-xs font-bold text-slate-500 rounded-xl px-3 py-2 transition-all ${palette.hoverText}`}
                          >
                            <span>Review Attempt {result.attemptCount - index}</span>
                            <span className="tabular-nums">
                              {Math.round(attempt.score)}% - {formatRelativeTime(attempt.completedAt)}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="py-6 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 my-4">
                      <p className="text-xs font-bold text-slate-400">Not attempted yet</p>
                    </div>
                  )}
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  {inProgress && inProgressCount > 0 ? (
                    <>
                      <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 flex items-center justify-between text-xs font-bold text-amber-800">
                        <span className="flex items-center gap-1.5">
                          <Save size={13} className="text-amber-600" />
                          <span>
                            In Progress ({inProgressCount} of {inProgress.questions?.length} answered)
                          </span>
                        </span>
                        <span className="text-[10px] uppercase font-mono text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                          Q{inProgress.currentIndex + 1}
                        </span>
                      </div>
                      <button
                        onClick={() => handleStartQuiz(quiz, false)}
                        className={`w-full text-white font-black py-3 rounded-2xl transition-all shadow-md ${palette.start} flex items-center justify-center gap-2 active:scale-95`}
                      >
                        <span>Resume Attempt (Question {inProgress.currentIndex + 1})</span>
                        <ArrowRight size={16} />
                      </button>
                      <button
                        onClick={() => {
                          if (
                            confirm(
                              'Are you sure you want to discard your saved progress and start fresh?'
                            )
                          ) {
                            handleStartQuiz(quiz, true);
                          }
                        }}
                        className="w-full text-slate-400 hover:text-slate-600 text-[11px] font-bold py-1.5 rounded-lg transition-colors text-center"
                      >
                        Discard &amp; Start Fresh Attempt
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleStartQuiz(quiz, true)}
                      className={`w-full text-white font-black py-3.5 rounded-2xl transition-all shadow-md ${palette.start} flex items-center justify-center gap-2 active:scale-95 text-sm`}
                    >
                      <span>{result ? 'Retake Quiz' : 'Start Quiz'}</span>
                      <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          {quizzes.length === 0 && (
            <div className="col-span-full py-12 text-center bg-slate-100 rounded-3xl border-2 border-dashed border-slate-200">
              <p className="text-slate-400 font-bold">No quizzes available here yet.</p>
            </div>
          )}
        </div>
      </main>

      {/* Review Dialog */}
      {reviewModalData && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
            <header className="p-6 md:p-8 border-b flex justify-between items-start bg-slate-50/50 shrink-0">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-slate-800">
                  {reviewModalData.quizTitle}
                </h3>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="bg-emerald-600 text-white px-3 py-0.5 rounded-full text-xs font-black uppercase tabular-nums">
                    {Math.round(reviewModalData.score)}%
                  </span>
                  <span className="text-slate-400 text-xs sm:text-sm font-medium">
                    Attempt #{reviewModalData.attemptNumber}
                  </span>
                </div>
                {reviewModalData.startedAt && (
                  <p className="text-[11px] text-slate-400 font-medium mt-1.5">
                    Started {formatRelativeTime(reviewModalData.startedAt)}
                    {reviewModalData.completedAt && (
                      <> &middot; Finished {formatRelativeTime(reviewModalData.completedAt)}</>
                    )}
                  </p>
                )}
              </div>
              <button
                onClick={() => setReviewModalData(null)}
                className="p-2.5 hover:bg-slate-200 rounded-full transition-colors text-slate-400 shrink-0"
              >
                <X size={24} />
              </button>
            </header>

            <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
              {isLoadingReview ? (
                <div className="py-12 text-center text-slate-400 font-bold animate-pulse">
                  Loading attempt details...
                </div>
              ) : (
                modalQuizQuestions.map((q, idx) => {
                  const storedAnswer = getStoredAnswerForQuestion(
                    reviewModalData.answers,
                    q,
                    idx
                  );
                  const studentAnswer = resolveAnswerIdx(storedAnswer, q);
                  const isCorrect =
                    studentAnswer !== null && Number(studentAnswer) === Number(q.correct);

                  return (
                    <div
                      key={idx}
                      className={`p-6 rounded-2xl border-2 ${
                        isCorrect
                          ? 'border-emerald-100 bg-emerald-50/20'
                          : 'border-red-100 bg-red-50/20'
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
                        {(q.options || []).map((opt, optIdx) => {
                          const isOptionCorrect = optIdx === Number(q.correct);
                          const isSelected =
                            studentAnswer !== null && optIdx === Number(studentAnswer);

                          let style = 'bg-white border-slate-100 text-slate-600';
                          let icon = null;

                          if (isOptionCorrect) {
                            style = 'bg-emerald-600 border-emerald-600 text-white shadow-sm';
                            icon = <CheckCircle2 size={16} />;
                          } else if (isSelected) {
                            style = 'bg-red-500 border-red-500 text-white shadow-sm';
                            icon = <XCircle size={16} />;
                          }

                          return (
                            <div
                              key={optIdx}
                              className={`p-3 rounded-xl border flex items-center justify-between font-bold text-sm ${style}`}
                            >
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <span className="flex-1 truncate">{opt.en}</span>
                                <span
                                  dir="rtl"
                                  className="font-urdu text-base opacity-80 shrink-0"
                                >
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
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
