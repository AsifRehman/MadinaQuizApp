import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Book,
  Users,
  Settings,
  Plus,
  XCircle,
  Shield,
  Edit2,
  Trash2,
} from 'lucide-react';
import Header from '../../components/common/Header';
import { sql, SCHOOL_ID } from '../../api/db';
import { useAuth } from '../../context/AuthContext';
import { useLMS } from '../../context/LMSContext';

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const { studentName } = useAuth();
  const { courses, fetchCourses } = useLMS();

  const [adminTab, setAdminTab] = useState('courses');
  const [usersList, setUsersList] = useState([]);
  const [newCourseName, setNewCourseName] = useState('');
  const [newCourseDesc, setNewCourseDesc] = useState('');

  // Course Assignment
  const [selectedInstructorId, setSelectedInstructorId] = useState('');
  const [selectedAssignCourseId, setSelectedAssignCourseId] = useState('');

  // User Management
  const [newUser, setNewUser] = useState({ username: '', password: '', role: 'student' });
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const data = await sql`
        SELECT id, username, password, role 
        FROM users 
        WHERE school_id = ${SCHOOL_ID} 
        ORDER BY role DESC, username ASC
      `;
      setUsersList(data);
    } catch (err) {
      console.error('Fetch users error:', err);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchUsers();
  }, []);

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    if (!newCourseName.trim()) return;
    try {
      await sql`
        INSERT INTO courses (school_id, name, description) 
        VALUES (${SCHOOL_ID}, ${newCourseName.trim()}, ${newCourseDesc.trim()})
      `;
      setNewCourseName('');
      setNewCourseDesc('');
      fetchCourses();
      alert('Course created successfully!');
    } catch (err) {
      console.error('Create course error:', err);
      alert('Error creating course: ' + err.message);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    if (!confirm('Are you sure you want to delete this course and all associated data?')) return;
    try {
      await sql`DELETE FROM courses WHERE id = ${courseId}`;
      fetchCourses();
    } catch (err) {
      console.error('Delete course error:', err);
    }
  };

  const handleAssignCourse = async (e) => {
    e.preventDefault();
    if (!selectedAssignCourseId || !selectedInstructorId) {
      alert('Please select both an instructor and a course.');
      return;
    }
    try {
      await sql`
        INSERT INTO instructor_assignments (user_id, course_id) 
        VALUES (${selectedInstructorId}, ${selectedAssignCourseId})
        ON CONFLICT DO NOTHING
      `;
      alert('Course assigned successfully!');
    } catch (err) {
      console.error('Assign course error:', err);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!newUser.username || !newUser.password) return;
    try {
      const normalized = newUser.username.trim().toLowerCase();
      await sql`
        INSERT INTO users (school_id, username, password, role) 
        VALUES (${SCHOOL_ID}, ${normalized}, ${newUser.password}, ${newUser.role})
        ON CONFLICT (school_id, username) DO UPDATE SET password = EXCLUDED.password, role = EXCLUDED.role
      `;
      setNewUser({ username: '', password: '', role: 'student' });
      fetchUsers();
    } catch (err) {
      console.error('Add user error:', err);
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    if (!editingUser.username || !editingUser.password) return;
    try {
      const normalized = editingUser.username.trim().toLowerCase();
      await sql`
        UPDATE users 
        SET username = ${normalized}, 
            password = ${editingUser.password}, 
            role = ${editingUser.role}
        WHERE school_id = ${SCHOOL_ID} AND username = ${editingUser.originalUsername}
      `;
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      console.error('Update user error:', err);
    }
  };

  const handleDeleteUser = async (uname) => {
    if (uname === 'admin' || uname === studentName) {
      alert('You cannot delete your own account or the main admin.');
      return;
    }
    if (!confirm(`Are you sure you want to delete user: ${uname}?`)) return;
    try {
      await sql`DELETE FROM users WHERE school_id = ${SCHOOL_ID} AND username = ${uname}`;
      fetchUsers();
    } catch (err) {
      console.error('Delete user error:', err);
    }
  };

  const instructors = usersList.filter((u) => u.role === 'instructor');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header title="Administrator Hub" />

      {/* Admin Nav */}
      <nav className="bg-slate-900 border-b border-slate-800 px-6 flex items-center gap-6 sm:gap-8 h-14 overflow-x-auto text-slate-400 shrink-0">
        <button
          onClick={() => setAdminTab('courses')}
          className={`h-full px-2 flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-all border-b-2 ${
            adminTab === 'courses' ? 'border-emerald-500 text-emerald-400' : 'border-transparent hover:text-white'
          }`}
        >
          <Book size={16} /> Manage Courses
        </button>

        <button
          onClick={() => setAdminTab('assign')}
          className={`h-full px-2 flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-all border-b-2 ${
            adminTab === 'assign' ? 'border-emerald-500 text-emerald-400' : 'border-transparent hover:text-white'
          }`}
        >
          <Users size={16} /> Course Assignments
        </button>

        <button
          onClick={() => setAdminTab('users')}
          className={`h-full px-2 flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-all border-b-2 ${
            adminTab === 'users' ? 'border-emerald-500 text-emerald-400' : 'border-transparent hover:text-white'
          }`}
        >
          <Settings size={16} /> Platform Users
        </button>

        <button
          onClick={() => navigate('/instructor')}
          className="ml-auto text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          Go to Instructor Portal &rarr;
        </button>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 w-full flex-1">
        {/* COURSES TAB */}
        {adminTab === 'courses' && (
          <div className="grid gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3 text-slate-800">
                <Plus className="text-emerald-600" /> Define New Course
              </h3>
              <form onSubmit={handleCreateCourse} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Course Name"
                    required
                    value={newCourseName}
                    onChange={(e) => setNewCourseName(e.target.value)}
                    className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                  />
                  <textarea
                    placeholder="Brief Description"
                    value={newCourseDesc}
                    onChange={(e) => setNewCourseDesc(e.target.value)}
                    className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-medium h-32"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-slate-900 text-white font-black py-4 px-8 rounded-2xl hover:bg-black transition-all shadow-xl"
                  >
                    Create Course Structure
                  </button>
                </div>
                <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 flex flex-col justify-center">
                  <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
                    <Settings size={24} />
                  </div>
                  <h4 className="font-black text-emerald-900 text-lg mb-2">Administrator Tip</h4>
                  <p className="text-emerald-700/80 text-sm font-medium leading-relaxed">
                    Creating a course here establishes the curriculum root. Once created, you can assign instructors
                    and manage sections, lectures, and quizzes through the Instructor Portal.
                  </p>
                </div>
              </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-black text-xl text-slate-800 mb-2">{course.name}</h3>
                    <p className="text-slate-500 text-xs mb-6 line-clamp-2">{course.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigate('/instructor')}
                      className="flex-1 bg-slate-50 text-slate-600 font-bold py-2 rounded-xl text-xs hover:bg-slate-100 transition-all border border-slate-100 text-center"
                    >
                      Manage
                    </button>
                    <button
                      onClick={() => handleDeleteCourse(course.id)}
                      className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                      title="Delete Course"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ASSIGNMENT TAB */}
        {adminTab === 'assign' && (
          <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-slate-800">
              <Users className="text-emerald-600" /> Allocate Course Permissions
            </h3>
            <form onSubmit={handleAssignCourse} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">
                  Select Instructor
                </label>
                <select
                  required
                  value={selectedInstructorId}
                  onChange={(e) => setSelectedInstructorId(e.target.value)}
                  className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                >
                  <option value="">-- Choose Instructor --</option>
                  {instructors.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.username}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">
                  Select Course
                </label>
                <select
                  required
                  value={selectedAssignCourseId}
                  onChange={(e) => setSelectedAssignCourseId(e.target.value)}
                  className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                >
                  <option value="">-- Choose Course --</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white font-black py-4 rounded-2xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all"
                >
                  Grant Access
                </button>
              </div>
            </form>
          </div>
        )}

        {/* USERS TAB */}
        {adminTab === 'users' && (
          <div className="grid gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3 text-slate-800">
                <Shield className="text-emerald-600" />
                {editingUser ? `Edit User: ${editingUser.originalUsername}` : 'Create Platform User'}
              </h3>
              <form
                onSubmit={editingUser ? handleUpdateUser : handleAddUser}
                className="grid grid-cols-1 md:grid-cols-4 gap-4"
              >
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    value={editingUser ? editingUser.username : newUser.username}
                    onChange={(e) =>
                      editingUser
                        ? setEditingUser({ ...editingUser, username: e.target.value })
                        : setNewUser({ ...newUser, username: e.target.value })
                    }
                    className="w-full p-3.5 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Password</label>
                  <input
                    type="text"
                    placeholder="Password"
                    required
                    value={editingUser ? editingUser.password : newUser.password}
                    onChange={(e) =>
                      editingUser
                        ? setEditingUser({ ...editingUser, password: e.target.value })
                        : setNewUser({ ...newUser, password: e.target.value })
                    }
                    className="w-full p-3.5 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">System Role</label>
                  <select
                    value={editingUser ? editingUser.role : newUser.role}
                    onChange={(e) =>
                      editingUser
                        ? setEditingUser({ ...editingUser, role: e.target.value })
                        : setNewUser({ ...newUser, role: e.target.value })
                    }
                    className="w-full p-3.5 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold text-slate-700"
                  >
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>
                <div className="pt-5 flex gap-2">
                  {editingUser && (
                    <button
                      type="button"
                      onClick={() => setEditingUser(null)}
                      className="px-4 py-3 bg-slate-100 text-slate-600 rounded-2xl font-bold text-sm"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-slate-900 text-white font-black py-3.5 rounded-2xl hover:bg-black shadow-xl transition-all"
                  >
                    {editingUser ? 'Save' : 'Authorize'}
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
              <div className="divide-y divide-slate-50">
                {usersList.map((u) => (
                  <div
                    key={u.id}
                    className="px-6 py-4 hover:bg-slate-50/50 transition-colors flex justify-between items-center"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm text-white ${
                          u.role === 'admin'
                            ? 'bg-slate-900'
                            : u.role === 'instructor'
                            ? 'bg-amber-500'
                            : 'bg-emerald-600'
                        }`}
                      >
                        {u.username[0]?.toUpperCase()}
                      </div>
                      <div>
                        <span className="font-bold text-slate-800 block text-base">{u.username}</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span
                            className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
                              u.role === 'admin'
                                ? 'bg-red-100 text-red-600'
                                : u.role === 'instructor'
                                ? 'bg-amber-100 text-amber-600'
                                : 'bg-blue-100 text-blue-600'
                            }`}
                          >
                            {u.role}
                          </span>
                          <span className="text-[11px] text-slate-400 font-mono">PWD: {u.password}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingUser({ ...u, originalUsername: u.username })}
                        className="p-2 text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                      >
                        <Edit2 size={16} />
                      </button>
                      {u.username !== studentName && (
                        <button
                          onClick={() => handleDeleteUser(u.username)}
                          className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
