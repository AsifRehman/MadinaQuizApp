import React, { createContext, useContext, useState } from 'react';
import { sql, SCHOOL_ID } from '../api/db';
import { getSavedSession, saveSession, clearSession } from '../utils/quizStorage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const saved = getSavedSession();
  const [studentId, setStudentId] = useState(saved?.studentId || null);
  const [studentName, setStudentName] = useState(saved?.studentName || '');
  const [userRole, setUserRole] = useState(saved?.userRole || null);
  const [assignedCourseIds, setAssignedCourseIds] = useState(saved?.assignedCourseIds || []);
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(saved?.studentId && saved?.userRole));
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const isTeacherOfCurrentCourse = () => {
    return Boolean(userRole === 'instructor' || userRole === 'admin');
  };

  const login = async (username, password) => {
    setLoginError('');
    if (!username || username.trim().length < 2) {
      setLoginError('Username must be at least 2 characters.');
      return null;
    }
    setIsLoggingIn(true);

    try {
      const normalizedUsername = username.trim().toLowerCase();
      const [user] = await sql`
        SELECT * FROM users 
        WHERE school_id = ${SCHOOL_ID} AND LOWER(username) = ${normalizedUsername}
      `;

      if (user && user.password === password) {
        try {
          await sql`
            INSERT INTO login_logs (user_id, success) 
            VALUES (${user.id}, true)
          `;
        } catch (e) {
          console.warn("Could not record login log:", e);
        }

        setStudentId(user.id);
        setStudentName(user.username);
        setUserRole(user.role);
        setIsLoggedIn(true);

        let userAssignedCourses = [];
        if (user.role === 'instructor') {
          try {
            const assignments = await sql`
              SELECT course_id FROM instructor_assignments 
              WHERE user_id = ${user.id}
            `;
            userAssignedCourses = assignments.map(a => Number(a.course_id));
          } catch (err) {
            console.error("Login instructor assignments fetch error:", err);
          }
        }
        setAssignedCourseIds(userAssignedCourses);

        saveSession({
          studentId: user.id,
          studentName: user.username,
          userRole: user.role,
          assignedCourseIds: userAssignedCourses,
        });

        return user;
      } else {
        if (user) {
          try {
            await sql`
              INSERT INTO login_logs (user_id, success) 
              VALUES (${user.id}, false)
            `;
          } catch (e) {}
        }
        setLoginError('Invalid username or password');
        return null;
      }
    } catch (err) {
      console.error("Login error:", err);
      setLoginError('An error occurred during login. Please try again.');
      return null;
    } finally {
      setIsLoggingIn(false);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setStudentName('');
    setStudentId(null);
    setUserRole(null);
    setAssignedCourseIds([]);
    setLoginError('');
    clearSession();
  };

  return (
    <AuthContext.Provider
      value={{
        studentId,
        studentName,
        userRole,
        assignedCourseIds,
        isLoggedIn,
        isLoggingIn,
        loginError,
        setLoginError,
        isTeacherOfCurrentCourse,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
