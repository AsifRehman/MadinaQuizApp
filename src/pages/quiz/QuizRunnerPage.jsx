import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { X, Table, Edit2, Save } from 'lucide-react';
import { sql } from '../../api/db';
import { useAuth } from '../../context/AuthContext';
import { useLMS } from '../../context/LMSContext';
import PartTabs from '../../components/quiz/PartTabs';
import QuestionCard from '../../components/quiz/QuestionCard';
import QuizBottomBar from '../../components/quiz/QuizBottomBar';
import QuizResultView from '../../components/quiz/QuizResultView';
import QuestionEditorModal from '../../components/quiz/QuestionEditorModal';
import PasswordModal from '../../components/quiz/../../components/common/PasswordModal';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import {
  loadActiveQuizState,
  saveActiveQuizState,
  clearActiveQuizState,
} from '../../utils/quizStorage';

const normalizeAnswers = (sourceAnswers, questionCount) => {
  const normalized = new Array(questionCount).fill(null);
  if (!Array.isArray(sourceAnswers)) return normalized;

  sourceAnswers.slice(0, questionCount).forEach((answer, index) => {
    normalized[index] = answer ?? null;
  });

  return normalized;
};

const isAnswerComplete = (answer) => {
  if (answer === null || answer === undefined) return false;

  if (Array.isArray(answer)) {
    return answer.length > 0 && answer.every(isAnswerComplete);
  }

  if (typeof answer === 'number') {
    return Number.isFinite(answer);
  }

  if (typeof answer === 'string') {
    return answer.trim().length > 0;
  }

  if (typeof answer === 'object') {
    if (Array.isArray(answer.selectedOptions)) {
      return answer.selectedOptions.length > 0 && answer.selectedOptions.every(isAnswerComplete);
    }

    if (Array.isArray(answer.originalIdx)) {
      return answer.originalIdx.length > 0 && answer.originalIdx.every((idx) => !Number.isNaN(Number(idx)));
    }

    if (answer.originalIdx !== undefined && !Number.isNaN(Number(answer.originalIdx))) {
      return true;
    }

    return Boolean(
      (typeof answer.en === 'string' && answer.en.trim()) ||
        (typeof answer.ur === 'string' && answer.ur.trim())
    );
  }

  return false;
};

const findFirstIncompleteAnswer = (questions, sourceAnswers) =>
  questions.findIndex((_, index) => !isAnswerComplete(sourceAnswers[index]));

const getChoiceIndex = (answer) => {
  if (answer === null || answer === undefined) return null;
  if (typeof answer === 'number') return Number(answer);
  if (typeof answer === 'object' && answer.originalIdx !== undefined) {
    return Number(answer.originalIdx);
  }
  return null;
};

const buildCompletedAnswers = (questions, sourceAnswers) =>
  questions.map((question, index) => {
    const answer = sourceAnswers[index];
    if (answer && typeof answer === 'object' && !Array.isArray(answer)) {
      return {
        ...answer,
        questionId: question.id,
        qEn: question.qEn,
        qUr: question.qUr,
      };
    }

    return answer;
  });

export default function QuizRunnerPage() {
  const { quizId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const forceFresh = searchParams.get('fresh') === 'true';

  const navigate = useNavigate();
  const { studentId, userRole, isTeacherOfCurrentCourse } = useAuth();
  const {
    fetchQuizData,
    saveProgress,
    selectedQuiz,
    setSelectedQuiz,
    selectedSection,
    selectedLecture,
  } = useLMS();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [startedAt, setStartedAt] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Animation & Part tracking
  const [animatingPart, setAnimatingPart] = useState(null);
  const prevPartRef = useRef(null);
  const answersRef = useRef([]);

  // Teacher editing & password prompt
  const [isEditingQuestion, setIsEditingQuestion] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  // Extract unique quiz parts in order
  const quizParts = useMemo(() => {
    if (!questions || questions.length === 0) return [];
    const partsMap = new Map();
    questions.forEach((q, idx) => {
      const partName = (q.part || '').trim();
      if (!partName) return;
      if (!partsMap.has(partName)) {
        partsMap.set(partName, {
          name: partName,
          firstIndex: idx,
          indices: [idx],
          count: 1,
        });
      } else {
        const item = partsMap.get(partName);
        item.indices.push(idx);
        item.count += 1;
      }
    });
    return Array.from(partsMap.values());
  }, [questions]);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  // Load Quiz & Restore State
  useEffect(() => {
    let isMounted = true;

    const initQuiz = async () => {
      if (!quizId) return;
      setIsLoading(true);

      // Check saved active state
      if (!forceFresh) {
        const saved = loadActiveQuizState(studentId, quizId);
        if (saved && Array.isArray(saved.questions) && saved.questions.length > 0) {
          const restoredAnswers = normalizeAnswers(saved.answers, saved.questions.length);
          if (!isMounted) return;
          setQuestions(saved.questions);
          setCurrentIndex(saved.currentIndex || 0);
          answersRef.current = restoredAnswers;
          setAnswers(restoredAnswers);
          setStartedAt(saved.startedAt || new Date().toISOString());
          setIsLoading(false);
          return;
        }
      }

      // Fresh fetch
      clearActiveQuizState(studentId, quizId);
      const rawQuestions = await fetchQuizData(quizId);
      if (!isMounted) return;

      if (!rawQuestions || rawQuestions.length === 0) {
        alert('This quiz currently has no questions.');
        navigate(-1);
        return;
      }

      // Shuffle options and preserve original index
      const preparedQuestions = rawQuestions.map((q) => {
        const optionsWithIdx = (q.options || []).map((opt, idx) => ({ ...opt, originalIdx: idx }));
        const shuffled = optionsWithIdx
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);
        return {
          ...q,
          options: shuffled,
        };
      });

      const initialAnswers = new Array(preparedQuestions.length).fill(null);
      const startTime = new Date().toISOString();

      setQuestions(preparedQuestions);
      setCurrentIndex(0);
      answersRef.current = initialAnswers;
      setAnswers(initialAnswers);
      setStartedAt(startTime);
      setIsLoading(false);

      saveActiveQuizState(studentId, quizId, {
        quizId,
        questions: preparedQuestions,
        currentIndex: 0,
        answers: initialAnswers,
        startedAt: startTime,
      });

      // Remove fresh=true from URL so a page refresh doesn't wipe the progress
      if (forceFresh) {
        searchParams.delete('fresh');
        setSearchParams(searchParams, { replace: true });
      }
    };

    initQuiz();

    return () => {
      isMounted = false;
    };
  }, [quizId, forceFresh]);

  // Part change animation trigger
  const currentPartName = (questions[currentIndex]?.part || '').trim();
  useEffect(() => {
    if (!questions || questions.length === 0) return;
    if (prevPartRef.current !== null && prevPartRef.current !== currentPartName && currentPartName !== '') {
      setAnimatingPart(currentPartName);
      const timer = setTimeout(() => setAnimatingPart(null), 700);
      prevPartRef.current = currentPartName;
      return () => clearTimeout(timer);
    }
    prevPartRef.current = currentPartName;
  }, [currentIndex, currentPartName, questions]);

  // Stealth cue in document title for instructors
  useEffect(() => {
    if (!showResult && isTeacherOfCurrentCourse() && questions.length > 0) {
      const q = questions[currentIndex];
      const correctIdx = Number(q?.correct);
      const optionLetters = ['(A)', '(B)', '(C)', '(D)'];
      const cueLetter = optionLetters[correctIdx] || '';
      document.title = cueLetter ? `${cueLetter} Madina Arabic Quiz` : 'Madina Arabic Quiz';
    } else {
      document.title = 'Madina Arabic Quiz';
    }

    return () => {
      document.title = 'Madina Arabic Quiz';
    };
  }, [currentIndex, showResult, isTeacherOfCurrentCourse, questions]);

  // Select Option
  const handleSelectOption = (option) => {
    const safeIdx =
      option.originalIdx !== undefined && !Number.isNaN(Number(option.originalIdx))
        ? Number(option.originalIdx)
        : 0;

    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = {
      originalIdx: safeIdx,
      en: option.en || '',
      ur: option.ur || '',
    };
    answersRef.current = updatedAnswers;
    setAnswers(updatedAnswers);

    saveActiveQuizState(studentId, quizId, {
      quizId,
      questions,
      currentIndex,
      answers: updatedAnswers,
      startedAt,
    });
  };

  // Navigation handlers
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      const nextIdx = currentIndex + 1;
      const latestAnswers = answersRef.current;
      setCurrentIndex(nextIdx);
      saveActiveQuizState(studentId, quizId, {
        quizId,
        questions,
        currentIndex: nextIdx,
        answers: latestAnswers,
        startedAt,
      });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      const latestAnswers = answersRef.current;
      setCurrentIndex(prevIdx);
      saveActiveQuizState(studentId, quizId, {
        quizId,
        questions,
        currentIndex: prevIdx,
        answers: latestAnswers,
        startedAt,
      });
    }
  };

  const handleJumpToFirstSkipped = () => {
    const latestAnswers = answersRef.current;
    const firstSkipped = questions.findIndex((_, i) => i < currentIndex && !isAnswerComplete(latestAnswers[i]));
    if (firstSkipped !== -1) {
      setCurrentIndex(firstSkipped);
      saveActiveQuizState(studentId, quizId, {
        quizId,
        questions,
        currentIndex: firstSkipped,
        answers: latestAnswers,
        startedAt,
      });
    }
  };

  // Finish Quiz
  const handleFinish = () => {
    const latestAnswers = normalizeAnswers(answersRef.current, questions.length);
    const firstIncompleteIdx = findFirstIncompleteAnswer(questions, latestAnswers);

    if (firstIncompleteIdx !== -1) {
      setCurrentIndex(firstIncompleteIdx);
      answersRef.current = latestAnswers;
      setAnswers(latestAnswers);
      saveActiveQuizState(studentId, quizId, {
        quizId,
        questions,
        currentIndex: firstIncompleteIdx,
        answers: latestAnswers,
        startedAt,
      });
      alert(`Please complete all questions before finishing the quiz. Redirecting to Question ${firstIncompleteIdx + 1}.`);
      return;
    }

    let correctCount = 0;
    questions.forEach((q, i) => {
      const studentChoiceIdx = getChoiceIndex(latestAnswers[i]);
      if (studentChoiceIdx !== null && Number(studentChoiceIdx) === Number(q.correct)) {
        correctCount += 1;
      }
    });

    const finalPercentage = Math.round((correctCount / questions.length) * 100);
    const endedAt = new Date().toISOString();
    const completedAnswers = buildCompletedAnswers(questions, latestAnswers);

    setScore(correctCount);
    answersRef.current = completedAnswers;
    setAnswers(completedAnswers);
    setShowResult(true);
    clearActiveQuizState(studentId, quizId);

    saveProgress(quizId, finalPercentage, completedAnswers, startedAt, endedAt);
  };

  // Instructor Question Edit verification
  const handleEditClick = () => {
    if (userRole === 'instructor' || userRole === 'admin') {
      setIsEditingQuestion(true);
    } else {
      setPasswordError('');
      setPasswordModalOpen(true);
    }
  };

  const handlePasswordVerify = (pwd) => {
    if (pwd === 'admin123' || pwd === 'teacher123') {
      setPasswordModalOpen(false);
      setIsEditingQuestion(true);
    } else {
      setPasswordError('Incorrect instructor password');
    }
  };

  const handleSaveQuestion = async (updatedQ) => {
    // 1. Prepare clean options for Database
    const dbOptions = (updatedQ.options || []).map((o) => ({
      en: o.en || '',
      ur: o.ur || '',
    }));

    await sql`
      UPDATE questions 
      SET question_en = ${updatedQ.qEn},
          question_ur = ${updatedQ.qUr},
          options = ${JSON.stringify(dbOptions)},
          correct_option_index = ${updatedQ.correct},
          part = ${updatedQ.part}
      WHERE id = ${updatedQ.id}
    `;

    // 2. Ensure each option in local state has valid originalIdx
    const localOptions = (updatedQ.options || []).map((opt, idx) => ({
      en: opt.en || '',
      ur: opt.ur || '',
      originalIdx:
        opt.originalIdx !== undefined && !Number.isNaN(Number(opt.originalIdx))
          ? Number(opt.originalIdx)
          : idx,
    }));

    const normalizedQ = {
      ...updatedQ,
      options: localOptions,
      correct: Number(updatedQ.correct),
    };

    // Update in local questions list
    const updatedList = questions.map((q) => (q.id === updatedQ.id ? normalizedQ : q));
    setQuestions(updatedList);

    // 3. Keep or match current answer if already chosen
    const updatedAnswers = [...answers];
    const currentAns = answers[currentIndex];
    if (questions[currentIndex]?.id === updatedQ.id && currentAns) {
      const match = localOptions.find(
        (o) =>
          o.originalIdx === currentAns.originalIdx ||
          (o.en && currentAns.en && o.en.trim() === currentAns.en.trim()) ||
          (o.ur && currentAns.ur && o.ur.trim() === currentAns.ur.trim())
      );
      if (match) {
        updatedAnswers[currentIndex] = {
          originalIdx: match.originalIdx,
          en: match.en,
          ur: match.ur,
        };
      }
      answersRef.current = updatedAnswers;
      setAnswers(updatedAnswers);
    }

    saveActiveQuizState(studentId, quizId, {
      quizId,
      questions: updatedList,
      currentIndex,
      answers: updatedAnswers,
      startedAt,
    });
  };

  if (isLoading) {
    return <LoadingSpinner message="Preparing questions..." />;
  }

  if (showResult) {
    return (
      <QuizResultView
        score={score}
        questions={questions}
        answers={answers}
        onRetry={() => {
          const resetAnswers = new Array(questions.length).fill(null);
          const resetStartedAt = new Date().toISOString();
          setShowResult(false);
          setCurrentIndex(0);
          answersRef.current = resetAnswers;
          setAnswers(resetAnswers);
          setStartedAt(resetStartedAt);
          saveActiveQuizState(studentId, quizId, {
            quizId,
            questions,
            currentIndex: 0,
            answers: resetAnswers,
            startedAt: resetStartedAt,
          });
        }}
        onBack={() => {
          if (userRole === 'instructor') {
            navigate('/instructor');
          } else if (userRole === 'admin') {
            navigate('/admin');
          } else {
            navigate(-1);
          }
        }}
        backLabel={userRole === 'student' ? 'Back to Quizzes' : 'Exit to Dashboard'}
      />
    );
  }

  const currentQ = questions[currentIndex];
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;
  const isExam = selectedSection?.kind === 'exam';

  const unansweredCount = questions.filter((_, i) => !isAnswerComplete(answers[i])).length;
  const skippedEarlierCount = questions.filter((_, i) => i < currentIndex && !isAnswerComplete(answers[i])).length;
  const firstSkippedIndex = questions.findIndex((_, i) => i < currentIndex && !isAnswerComplete(answers[i]));
  const canFinish = unansweredCount === 0;
  const isLastQuestion = currentIndex >= questions.length - 1;

  const examPalette = isExam
    ? {
        qUr: 'text-indigo-700',
        progress: 'bg-indigo-500',
        next: 'bg-indigo-600 hover:bg-indigo-700',
        selected: 'border-indigo-500 bg-indigo-50',
        option: 'hover:border-indigo-500',
        selectedText: 'text-indigo-700',
        optionText: 'group-hover:text-indigo-700',
        urText: 'text-indigo-600',
        finishBorder: 'border-indigo-200',
      }
    : {
        qUr: 'text-emerald-700',
        progress: 'bg-emerald-500',
        next: 'bg-emerald-600 hover:bg-emerald-700',
        selected: 'border-emerald-500 bg-emerald-50',
        option: 'hover:border-emerald-500',
        selectedText: 'text-emerald-700',
        optionText: 'group-hover:text-emerald-700',
        urText: 'text-emerald-600',
        finishBorder: 'border-slate-100',
      };

  return (
    <div className="h-screen bg-slate-50 flex flex-col overflow-hidden">
      {/* Quiz Top Header */}
      <header className="bg-white h-14 md:h-16 border-b flex items-center justify-between px-4 md:px-6 shrink-0 z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="text-slate-400 hover:text-red-500 transition-colors"
            title="Exit Quiz"
          >
            <X size={24} />
          </button>
          <div className="h-8 w-[1px] bg-slate-100"></div>
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
              {selectedQuiz?.title || 'Quiz'}
            </p>
            <div className="flex items-center gap-2">
              {isExam && (
                <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                  Exam
                </span>
              )}
              <p className="text-sm font-bold text-slate-700">
                Question {currentIndex + 1} of {questions.length}
              </p>
              <span
                className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md text-[10px] font-bold border border-emerald-200/60"
                title="Your progress is automatically saved. You can close or resume anytime."
              >
                <Save size={10} className="text-emerald-600" />
                Auto-saved
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {(userRole === 'instructor' || userRole === 'admin') && (
            <button
              onClick={() => navigate('/instructor')}
              className="flex items-center gap-1.5 px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl border border-emerald-200 transition-colors font-bold text-xs"
              title="Table / JSON Question Editor"
            >
              <Table size={14} />
              <span className="hidden sm:inline">Table / JSON</span>
            </button>
          )}

          <button
            onClick={handleEditClick}
            className="flex items-center gap-2 px-3.5 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-xl border border-amber-200 transition-colors font-bold text-xs animate-pulse"
          >
            <Edit2 size={14} />
            <span>Edit Question</span>
          </button>

          <div className="w-48 h-2 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
            <div
              className={`h-full transition-all duration-500 ${examPalette.progress}`}
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </header>

      {/* Main Runner Container */}
      <main className="flex-1 w-full flex flex-col max-w-3xl mx-auto px-4 sm:px-6 py-4 md:py-6 min-h-0">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col flex-1 min-h-0">
          {/* Part tabs strip */}
          <div className="px-5 pt-4 md:px-8 md:pt-5 shrink-0">
            <PartTabs
              quizParts={quizParts}
              currentPartName={currentPartName}
              animatingPart={animatingPart}
              currentIndex={currentIndex}
              answers={answers}
              isExam={isExam}
              onSelectPart={(firstIdx) => {
                setCurrentIndex(firstIdx);
                saveActiveQuizState(studentId, quizId, {
                  quizId,
                  questions,
                  currentIndex: firstIdx,
                  answers,
                  startedAt,
                });
              }}
            />
          </div>

          {/* Question Text and Options */}
          <QuestionCard
            question={currentQ}
            currentAnswer={answers[currentIndex]}
            onSelectOption={handleSelectOption}
            examPalette={examPalette}
          />

          {/* Bottom Bar with Yellowish Counter */}
          <QuizBottomBar
            currentIndex={currentIndex}
            totalQuestions={questions.length}
            skippedEarlierCount={skippedEarlierCount}
            firstSkippedIndex={firstSkippedIndex}
            unansweredCount={unansweredCount}
            canFinish={canFinish}
            isLastQuestion={isLastQuestion}
            examPalette={examPalette}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onFinish={handleFinish}
            onJumpToFirstSkipped={handleJumpToFirstSkipped}
          />
        </div>
      </main>

      {/* Inline Question Editor Modal */}
      <QuestionEditorModal
        isOpen={isEditingQuestion}
        question={currentQ}
        onClose={() => setIsEditingQuestion(false)}
        onSave={handleSaveQuestion}
      />

      {/* Password Modal */}
      <PasswordModal
        isOpen={passwordModalOpen}
        onClose={() => setPasswordModalOpen(false)}
        onVerify={handlePasswordVerify}
        error={passwordError}
      />
    </div>
  );
}
