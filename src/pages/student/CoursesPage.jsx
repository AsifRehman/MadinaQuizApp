import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, BookOpen, ChevronRight } from 'lucide-react';
import Header from '../../components/common/Header';
import StudentProgressSummary from '../../components/student/StudentProgressSummary';
import { useLMS } from '../../context/LMSContext';

export default function CoursesPage() {
  const navigate = useNavigate();
  const { courses, fetchCourses, setSelectedCourse } = useLMS();

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    navigate(`/courses/${course.id}/sections`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header title="My Courses" />
      <main className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 w-full flex-1">
        <StudentProgressSummary />

        <h2 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8 text-slate-800 flex items-center gap-3">
          <Book className="text-emerald-600" size={28} />
          Available Courses
        </h2>

        {courses.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
            <p className="text-slate-400 font-bold">No courses available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => handleSelectCourse(course)}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-400 text-left transition-all group relative overflow-hidden active:scale-[0.99]"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <BookOpen size={80} />
                </div>
                <h3 className="font-black text-xl sm:text-2xl text-slate-800 mb-2">{course.name}</h3>
                <p className="text-slate-500 text-xs sm:text-sm mb-6 line-clamp-2">
                  {course.description || 'Interactive quizzes and comprehensive Arabic lessons.'}
                </p>
                <div className="flex items-center text-emerald-600 font-bold gap-1 group-hover:gap-2 transition-all text-sm">
                  <span>View Sections</span>
                  <ChevronRight size={18} />
                </div>
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
