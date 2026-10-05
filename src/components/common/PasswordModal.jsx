import React, { useState } from 'react';

export default function PasswordModal({ isOpen, onClose, onVerify, error }) {
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify(password);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 border border-slate-100">
        <h3 className="text-xl font-black text-slate-800 mb-2">Instructor Verification</h3>
        <p className="text-slate-500 text-sm mb-6">Please enter the instructor password to continue.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Password"
            required
            autoFocus
            className="w-full p-4 rounded-xl border bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm font-bold mb-4">{error}</p>}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-bold text-sm transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-sm transition-colors"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
