import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../components/common/Header';
import StudentProgressSummary from '../../components/student/StudentProgressSummary';
import { useLMS } from '../../context/LMSContext';

export default function SectionsPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const {
    courses,
    sections,
    fetchSections,
    fetchCourseQuizzes,
    selectedCourse,
    setSelectedCourse,
    setSelectedSection,
  } = useLMS();

  useEffect(() => {
    if (courseId) {
      fetchSections(courseId);
      fetchCourseQuizzes(courseId);
      if (!selectedCourse && courses.length > 0) {
        const found = courses.find((c) => String(c.id) === String(courseId));
        if (found) setSelectedCourse(found);
      }
    }
  }, [courseId, courses]);

  const handleSelectSection = (section) => {
    setSelectedSection(section);
    if (section.kind === 'exam') {
      navigate(`/courses/${courseId}/sections/${section.id}/quizzes`);
    } else {
      navigate(`/courses/${courseId}/sections/${section.id}/lectures`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header
        title={selectedCourse?.name || 'Course Sections'}
        showBack
        onBack={() => navigate('/courses')}
      />

      <main className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 w-full flex-1">
        <StudentProgressSummary compact />

        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-slate-800">Sections / اقسام</h2>
          <span className="bg-emerald-100 text-emerald-700 px-3 sm:px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
            {sections.length} Sections
          </span>
        </div>

        <div className="grid gap-4">
          {sections.map((section) => {
            const isExam = section.kind === 'exam';
            const palette = isExam
              ? {
                  card: 'bg-indigo-50/70 border-indigo-300 hover:border-indigo-500',
                  icon: 'bg-indigo-600 text-white',
                  badge: 'bg-indigo-600 text-white',
                  accent: 'text-indigo-600',
                }
              : {
                  card: 'bg-white border-slate-200 hover:border-emerald-400',
                  icon: 'bg-emerald-600 text-white',
                  badge: 'bg-emerald-600 text-white',
                  accent: 'text-emerald-600',
                };

            return (
              <button
                key={section.id}
                onClick={() => handleSelectSection(section)}
                className={`p-4 sm:p-5 rounded-2xl border shadow-sm hover:shadow-md text-left transition-all group flex items-center gap-4 sm:gap-6 active:scale-[0.99] ${palette.card}`}
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-black text-xl sm:text-2xl transition-all shadow-inner shrink-0 ${palette.icon}`}
                >
                  {section.order_index}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                    <h3 className="font-bold text-lg sm:text-xl text-slate-800">{section.title}</h3>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${palette.badge}`}
                    >
                      {isExam ? 'Exam' : 'Lectures'}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-500">
                    {isExam ? 'Cumulative assessment' : 'Daily lessons and quizzes'}
                  </div>
                </div>
                <ChevronRight className={`${palette.accent} transition-colors shrink-0`} />
              </button>
            );
          })}

          {sections.length === 0 && (
            <div className="py-12 text-center bg-slate-100 rounded-3xl border-2 border-dashed border-slate-200">
              <p className="text-slate-400 font-bold">No sections available for this course yet.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
