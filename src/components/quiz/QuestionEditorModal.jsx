import React, { useState, useEffect, useRef } from 'react';
import { Save, X, Edit2 } from 'lucide-react';

export default function QuestionEditorModal({
  isOpen,
  question,
  onClose,
  onSave,
}) {
  const [editPart, setEditPart] = useState('');
  const [editQuestionEn, setEditQuestionEn] = useState('');
  const [editQuestionUr, setEditQuestionUr] = useState('');
  const [editOptions, setEditOptions] = useState([
    { en: '', ur: '' },
    { en: '', ur: '' },
    { en: '', ur: '' },
    { en: '', ur: '' },
  ]);
  const [editCorrectIndex, setEditCorrectIndex] = useState(0);
  const [editJsonValue, setEditJsonValue] = useState('');
  const [jsonError, setJsonError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const isJsonFocused = useRef(false);

  useEffect(() => {
    if (!isOpen || !question) return;

    setEditPart(question.part || '');
    setEditQuestionEn(question.qEn || '');
    setEditQuestionUr(question.qUr || '');

    const opts = (question.options || []).map((o, idx) => ({
      en: o.en || '',
      ur: o.ur || '',
      originalIdx: o.originalIdx !== undefined ? Number(o.originalIdx) : idx,
    }));
    while (opts.length < 4) opts.push({ en: '', ur: '', originalIdx: opts.length });
    setEditOptions(opts);

    setEditCorrectIndex(question.correct ?? 0);

    const initialJson = {
      id: question.id,
      part: question.part || '',
      question_en: question.qEn || '',
      question_ur: question.qUr || '',
      options: opts.map(({ en, ur }) => ({ en, ur })),
      correct_option_index: question.correct ?? 0,
    };
    setEditJsonValue(JSON.stringify(initialJson, null, 2));
    setJsonError('');
  }, [isOpen, question]);

  // Sync form state to JSON textarea if user is not editing JSON directly
  useEffect(() => {
    if (isJsonFocused.current || !isOpen) return;
    const currentObj = {
      id: question?.id,
      part: editPart,
      question_en: editQuestionEn,
      question_ur: editQuestionUr,
      options: editOptions.map(({ en, ur }) => ({ en, ur })),
      correct_option_index: Number(editCorrectIndex),
    };
    setEditJsonValue(JSON.stringify(currentObj, null, 2));
  }, [editPart, editQuestionEn, editQuestionUr, editOptions, editCorrectIndex, isOpen, question?.id]);

  const handleJsonChange = (val) => {
    setEditJsonValue(val);
    try {
      const parsed = JSON.parse(val);
      setJsonError('');
      if (parsed.part !== undefined) setEditPart(parsed.part);
      if (parsed.question_en !== undefined) setEditQuestionEn(parsed.question_en);
      if (parsed.question_ur !== undefined) setEditQuestionUr(parsed.question_ur);
      if (parsed.correct_option_index !== undefined)
        setEditCorrectIndex(Number(parsed.correct_option_index));

      if (Array.isArray(parsed.options)) {
        const newOpts = parsed.options.map((o, idx) => {
          if (typeof o === 'string') return { en: o, ur: o, originalIdx: idx };
          return {
            en: o?.en || '',
            ur: o?.ur || '',
            originalIdx: o?.originalIdx !== undefined ? Number(o.originalIdx) : idx,
          };
        });
        while (newOpts.length < 4) newOpts.push({ en: '', ur: '', originalIdx: newOpts.length });
        setEditOptions(newOpts.slice(0, 4));
      }
    } catch {
      setJsonError('Invalid JSON format');
    }
  };

  const handleSave = async () => {
    if (!editQuestionEn.trim() || !editQuestionUr.trim()) {
      alert('Both English and Urdu question titles are required.');
      return;
    }

    setIsSaving(true);
    try {
      const optionsWithIdx = editOptions.map((opt, idx) => ({
        en: opt.en || '',
        ur: opt.ur || '',
        originalIdx: opt.originalIdx !== undefined ? Number(opt.originalIdx) : idx,
      }));

      await onSave({
        id: question.id,
        part: editPart.trim(),
        qEn: editQuestionEn.trim(),
        qUr: editQuestionUr.trim(),
        options: optionsWithIdx,
        correct: Number(editCorrectIndex),
      });
      onClose();
    } catch (err) {
      console.error('Failed to save question:', err);
      alert('Error saving question: ' + (err.message || 'Check database connection'));
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl p-6 md:p-8 border border-slate-100 max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between pb-4 border-b shrink-0">
          <div className="flex items-center gap-2">
            <Edit2 className="text-emerald-600" size={24} />
            <h3 className="text-xl font-black text-slate-800">Edit Question #{question?.id}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6 overflow-y-auto pr-2 flex-1">
          {/* LEFT: FORM FIELDS */}
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 ml-2">
                Part / Category (Grouping Tab)
              </label>
              <input
                type="text"
                placeholder="e.g. Exercise 1, Main Lesson"
                value={editPart}
                onChange={(e) => setEditPart(e.target.value)}
                className="w-full p-3.5 rounded-xl border bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold text-sm"
              />
            </div>

            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 ml-2">
                Question (English)
              </label>
              <input
                type="text"
                value={editQuestionEn}
                onChange={(e) => setEditQuestionEn(e.target.value)}
                className="w-full p-3.5 rounded-xl border bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-bold text-sm"
              />
            </div>

            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 ml-2">
                Question (Urdu)
              </label>
              <input
                type="text"
                dir="rtl"
                value={editQuestionUr}
                onChange={(e) => setEditQuestionUr(e.target.value)}
                className="w-full p-3.5 rounded-xl border bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-urdu font-bold text-xl text-emerald-800"
              />
            </div>

            <div className="space-y-3 pt-3 border-t">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase text-slate-400">Options</span>
                <span className="text-[10px] font-black uppercase text-slate-400 mr-2">
                  Select Correct Option
                </span>
              </div>

              {editOptions.map((opt, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 items-center bg-slate-50 p-3 rounded-2xl border border-slate-100"
                >
                  <label className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-200 text-slate-700 font-black text-xs shrink-0">
                    {idx + 1}
                  </label>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Option (English)"
                      value={opt.en}
                      onChange={(e) => {
                        const newOpts = [...editOptions];
                        newOpts[idx] = { ...newOpts[idx], en: e.target.value };
                        setEditOptions(newOpts);
                      }}
                      className="w-full p-2.5 rounded-xl border bg-white outline-none focus:ring-2 focus:ring-emerald-500 font-bold text-xs"
                    />
                    <input
                      type="text"
                      dir="rtl"
                      placeholder="Option (Urdu)"
                      value={opt.ur}
                      onChange={(e) => {
                        const newOpts = [...editOptions];
                        newOpts[idx] = { ...newOpts[idx], ur: e.target.value };
                        setEditOptions(newOpts);
                      }}
                      className="w-full p-2.5 rounded-xl border bg-white outline-none focus:ring-2 focus:ring-emerald-500 font-urdu font-bold text-sm text-emerald-800"
                    />
                  </div>
                  <input
                    type="radio"
                    name="correct-opt"
                    checked={Number(editCorrectIndex) === idx}
                    onChange={() => setEditCorrectIndex(idx)}
                    className="w-5 h-5 accent-emerald-600 cursor-pointer shrink-0"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: JSON EDITOR */}
          <div className="flex flex-col h-full space-y-2">
            <div className="flex items-center justify-between ml-2">
              <label className="text-[10px] font-black uppercase text-slate-400">
                JSON Editor (Direct Edit / Paste)
              </label>
              {jsonError ? (
                <span className="text-red-500 text-xs font-bold">{jsonError}</span>
              ) : (
                <span className="text-emerald-600 text-xs font-bold">JSON Format Valid</span>
              )}
            </div>
            <textarea
              className="flex-1 w-full p-4 rounded-xl border bg-slate-900 text-emerald-400 font-mono text-xs outline-none focus:ring-2 focus:ring-emerald-500 min-h-[350px] resize-none leading-relaxed"
              value={editJsonValue}
              onFocus={() => {
                isJsonFocused.current = true;
              }}
              onBlur={() => {
                isJsonFocused.current = false;
              }}
              onChange={(e) => handleJsonChange(e.target.value)}
            />
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex justify-end gap-3 pt-4 border-t shrink-0">
          <button
            type="button"
            disabled={isSaving}
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-bold text-sm transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={isSaving}
            onClick={handleSave}
            className="px-8 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-sm transition-colors flex items-center gap-2"
          >
            {isSaving ? (
              <span>Saving...</span>
            ) : (
              <>
                <Save size={16} />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
