import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../components/common/ProtectedRoute';
import { useAuth } from '../context/AuthContext';

// Pages
import LoginPage from '../pages/auth/LoginPage';
import CoursesPage from '../pages/student/CoursesPage';
import SectionsPage from '../pages/student/SectionsPage';
import LecturesPage from '../pages/student/LecturesPage';
import QuizzesPage from '../pages/student/QuizzesPage';
import QuizRunnerPage from '../pages/quiz/QuizRunnerPage';
import InstructorPortalPage from '../pages/instructor/InstructorPortalPage';
import AdminDashboardPage from '../pages/admin/AdminDashboardPage';

// Root Redirect component based on login state and role
function RootRedirect() {
  const { isLoggedIn, userRole } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (userRole === 'instructor') {
    return <Navigate to="/instructor" replace />;
  }

  if (userRole === 'admin') {
    return <Navigate to="/admin" replace />;
  }

  return <Navigate to="/courses" replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Login Route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Root redirect */}
      <Route path="/" element={<RootRedirect />} />

      {/* Student Course & Lecture Navigation */}
      <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <CoursesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/courses/:courseId/sections"
        element={
          <ProtectedRoute>
            <SectionsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/courses/:courseId/sections/:sectionId/lectures"
        element={
          <ProtectedRoute>
            <LecturesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/courses/:courseId/lectures/:lectureId/quizzes"
        element={
          <ProtectedRoute>
            <QuizzesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/courses/:courseId/sections/:sectionId/quizzes"
        element={
          <ProtectedRoute>
            <QuizzesPage />
          </ProtectedRoute>
        }
      />

      {/* Quiz Runner */}
      <Route
        path="/quiz/:quizId"
        element={
          <ProtectedRoute>
            <QuizRunnerPage />
          </ProtectedRoute>
        }
      />

      {/* Instructor Portal */}
      <Route
        path="/instructor"
        element={
          <ProtectedRoute allowedRoles={['instructor', 'admin']}>
            <InstructorPortalPage />
          </ProtectedRoute>
        }
      />

      {/* Admin Dashboard */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboardPage />
          </ProtectedRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
