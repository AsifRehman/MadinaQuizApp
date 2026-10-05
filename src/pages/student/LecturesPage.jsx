import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../components/common/Header';
import { useLMS } from '../../context/LMSContext';
import { formatRelativeTime } from '../../utils/formatters';

export default function LecturesPage() {
  const { courseId, sectionId } = useParams();
  const navigate = useNavigate();
  const {
    sections,
    lectures,
    fetchSections,
    fetchSectionLectures,
    courseQuizzes,
    fetchCourseQuizzes,
    userProgress,
    selectedSection,
    setSelectedSection,
    setSelectedLecture,
  } = useLMS();

  useEffect(() => {
    if (courseId && (!sections || sections.length === 0)) {
      fetchSections(courseId);
      fetchCourseQuizzes(courseId);
    }
  }, [courseId]);

  useEffect(() => {
    if (sectionId) {
      fetchSectionLectures(sectionId);
      if (!selectedSection && sections.length > 0) {
        const found = sections.find((s) => String(s.id) === String(sectionId));
        if (found) setSelectedSection(found);
      }
    }
  }, [sectionId, sections]);

  const getLectureProgress = (lecture) => {
    const lectureQuizzes = courseQuizzes.filter((q) => q.lecture_id === lecture.id);
    const attemptedQuizzes = lectureQuizzes.filter((q) => userProgress[`quiz_${q.id}`]);
    const latestAttempt = attemptedQuizzes
      .flatMap((q) => userProgress[`quiz_${q.id}`]?.attempts || [])
      .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))[0];

    const total = lectureQuizzes.length;
    const attempted = attemptedQuizzes.length;
    const status = total > 0 && attempted === total ? 'complete' : attempted > 0 ? 'partial' : 'none';

    return { total, attempted, status, latestAttempt };
  };

  const handleSelectLecture = (lecture) => {
    setSelectedLecture(lecture);
    navigate(`/courses/${courseId}/lectures/${lecture.id}/quizzes`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header
        title={selectedSection ? `${selectedSection.title} - Lectures` : 'Lectures'}
        showBack
        onBack={() => navigate(`/courses/${courseId}/sections`)}
      />

      <main className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 w-full flex-1">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-slate-800">
            {selectedSection?.title || 'Lessons'} - Lectures / لیکچرز
          </h2>
          <span className="bg-emerald-100 text-emerald-700 px-3 sm:px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
            {lectures.length} Lessons
          </span>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {lectures.map((lec) => {
            const progress = getLectureProgress(lec);
            const palette =
              progress.status === 'complete'
                ? {
                    card: 'bg-emerald-50/70 border-emerald-300 hover:border-emerald-500',
                    number: 'bg-emerald-600 text-white border-emerald-600',
                    badge: 'bg-emerald-600 text-white',
                    icon: 'text-emerald-600',
                    label: 'All Versions Attempted',
                  }
                : progress.status === 'partial'
                ? {
                    card: 'bg-amber-50/70 border-amber-300 hover:border-amber-500',
                    number: 'bg-amber-500 text-white border-amber-500',
                    badge: 'bg-amber-500 text-white',
                    icon: 'text-amber-500',
                    label: 'Partially Attempted',
                  }
                : {
                    card: 'bg-red-50/60 border-red-200 hover:border-red-400',
                    number: 'bg-red-500 text-white border-red-500',
                    badge: 'bg-red-500 text-white',
                    icon: 'text-red-500',
                    label: 'Not Attempted',
                  };

            return (
              <button
                key={lec.id}
                onClick={() => handleSelectLecture(lec)}
                className={`p-5 rounded-2xl border shadow-sm hover:shadow-md text-left transition-all group flex flex-col gap-4 active:scale-[0.99] ${palette.card}`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl transition-all shadow-inner border shrink-0 ${palette.number}`}
                  >
                    {lec.order_index}
                  </div>
                  <ChevronRight className={`${palette.icon} transition-colors shrink-0`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-slate-800 leading-snug mb-2">{lec.title}</h3>
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${palette.badge}`}
                  >
                    {palette.label}
                  </span>
                  <div className="flex flex-col gap-1 text-xs font-bold mt-3 text-slate-500">
                    <span>
                      {progress.attempted}/{progress.total || 0} versions attempted
                    </span>
                    <span className={progress.latestAttempt ? 'text-slate-600' : 'text-slate-400'}>
                      {progress.latestAttempt
                        ? `Last attempted ${formatRelativeTime(progress.latestAttempt.completedAt)}`
                        : 'No attempt yet'}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}

          {lectures.length === 0 && (
            <div className="col-span-full py-12 text-center bg-slate-100 rounded-3xl border-2 border-dashed border-slate-200">
              <p className="text-slate-400 font-bold">No lectures found in this section yet.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
