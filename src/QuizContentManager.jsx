import React, { useState, useEffect, useRef } from 'react';
import {
  Table as TableIcon,
  Code,
  Copy,
  Check,
  Upload,
  Download,
  Plus,
  Trash2,
  Edit2,
  Save,
  RotateCcw,
  ArrowLeft,
  Search,
  AlertCircle,
  CheckCircle2,
  X,
  FileSpreadsheet,
  ChevronDown,
  Layers,
  HelpCircle,
  RefreshCw
} from 'lucide-react';

/**
 * Normalizes options into standard [{en, ur}, ...]
 */
const normalizeOptions = (rawOptions) => {
  if (!rawOptions) return [{ en: '', ur: '' }, { en: '', ur: '' }, { en: '', ur: '' }, { en: '', ur: '' }];
  let opts = rawOptions;
  if (typeof opts === 'string') {
    try { opts = JSON.parse(opts); } catch { opts = []; }
  }
  if (!Array.isArray(opts)) opts = [];
  const list = opts.map(o => {
    if (typeof o === 'string') return { en: o, ur: o };
    return { en: o?.en || '', ur: o?.ur || '' };
  });
  while (list.length < 4) {
    list.push({ en: '', ur: '' });
  }
  return list;
};

/**
 * Converts array of questions to TSV (Tab Separated Values) for Excel
 */
export const questionsToExcelTsv = (questions) => {
  const headers = [
    '#',
    'Part',
    'Question (English)',
    'Question (Urdu)',
    'Option 1 (English)',
    'Option 1 (Urdu)',
    'Option 2 (English)',
    'Option 2 (Urdu)',
    'Option 3 (English)',
    'Option 3 (Urdu)',
    'Option 4 (English)',
    'Option 4 (Urdu)',
    'Correct Option (1-4)'
  ];

  const rows = questions.map((q, idx) => {
    const opts = normalizeOptions(q.options);
    const cleanText = (txt) => (txt || '').toString().replace(/[\t\r\n]+/g, ' ').trim();
    const correctNum = (Number(q.correct_option_index ?? q.correct ?? 0) + 1).toString();

    return [
      idx + 1,
      cleanText(q.part || ''),
      cleanText(q.question_en || q.qEn || ''),
      cleanText(q.question_ur || q.qUr || ''),
      cleanText(opts[0]?.en || ''),
      cleanText(opts[0]?.ur || ''),
      cleanText(opts[1]?.en || ''),
      cleanText(opts[1]?.ur || ''),
      cleanText(opts[2]?.en || ''),
      cleanText(opts[2]?.ur || ''),
      cleanText(opts[3]?.en || ''),
      cleanText(opts[3]?.ur || ''),
      correctNum
    ].join('\t');
  });

  return [headers.join('\t'), ...rows].join('\r\n');
};

/**
 * Converts questions to formatted JSON
 */
export const questionsToJson = (questions) => {
  const clean = questions.map(q => {
    const opts = normalizeOptions(q.options);
    // Keep non-empty options or minimum 2
    const nonEmpties = opts.filter((o, i) => o.en || o.ur || i < 2);
    return {
      part: q.part || null,
      question_en: q.question_en || q.qEn || '',
      question_ur: q.question_ur || q.qUr || '',
      options: nonEmpties.map(o => ({ en: o.en || '', ur: o.ur || '' })),
      correct_option_index: Number(q.correct_option_index ?? q.correct ?? 0)
    };
  });
  return JSON.stringify(clean, null, 2);
};

/**
 * Intelligent TSV Parser for Excel pasted data
 */
export const parseExcelTsv = (tsvText) => {
  if (!tsvText || !tsvText.trim()) {
    return { questions: [], detectedCols: 0, error: 'Pasted text is empty.' };
  }

  const lines = tsvText
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l.length > 0);

  if (lines.length === 0) {
    return { questions: [], detectedCols: 0, error: 'No data rows found.' };
  }

  // Detect header row
  const firstCols = lines[0].split('\t').map(c => c.trim().toLowerCase());
  const lastCol = firstCols[firstCols.length - 1];
  const lastIsAnswer = ['1', '2', '3', '4', 'a', 'b', 'c', 'd', '0'].includes(lastCol);

  const hasHeaderKeywords = firstCols.some(c =>
    c === 'question' || c === 'question (english)' || c === 'question (urdu)' ||
    c === '#' || c === 'id' || c === 'part' || c.includes('option 1') || c.includes('correct option')
  );

  const isHeader = hasHeaderKeywords && !lastIsAnswer;
  let startIndex = isHeader ? 1 : 0;
  const sampleLine = lines[startIndex < lines.length ? startIndex : 0];
  const detectedCols = sampleLine ? sampleLine.split('\t').length : 0;

  const questions = [];

  for (let i = startIndex; i < lines.length; i++) {
    const rawLine = lines[i];
    const cols = rawLine.split('\t').map(c => c.trim().replace(/^["']|["']$/g, ''));
    if (cols.every(c => c === '')) continue;

    let part = '';
    let qEn = '';
    let qUr = '';
    let opt1En = '', opt1Ur = '';
    let opt2En = '', opt2Ur = '';
    let opt3En = '', opt3Ur = '';
    let opt4En = '', opt4Ur = '';
    let correctRaw = '';

    // Layout matching:
    // Layout 1: 13+ columns: [# (0), Part (1), Q_En (2), Q_Ur (3), Opt1En (4), Opt1Ur (5), Opt2En (6), Opt2Ur (7), Opt3En (8), Opt3Ur (9), Opt4En (10), Opt4Ur (11), Correct (12)]
    if (cols.length >= 13) {
      part = cols[1];
      qEn = cols[2];
      qUr = cols[3];
      opt1En = cols[4]; opt1Ur = cols[5];
      opt2En = cols[6]; opt2Ur = cols[7];
      opt3En = cols[8]; opt3Ur = cols[9];
      opt4En = cols[10]; opt4Ur = cols[11];
      correctRaw = cols[12];
    }
    // Layout 2: 12 columns: [Part (0), Q_En (1), Q_Ur (2), Opt1En (3), Opt1Ur (4), Opt2En (5), Opt2Ur (6), Opt3En (7), Opt3Ur (8), Opt4En (9), Opt4Ur (10), Correct (11)]
    else if (cols.length === 12) {
      part = cols[0];
      qEn = cols[1];
      qUr = cols[2];
      opt1En = cols[3]; opt1Ur = cols[4];
      opt2En = cols[5]; opt2Ur = cols[6];
      opt3En = cols[7]; opt3Ur = cols[8];
      opt4En = cols[9]; opt4Ur = cols[10];
      correctRaw = cols[11];
    }
    // Layout 3: 11 columns (No Part, No #): [Q_En (0), Q_Ur (1), Opt1En (2), Opt1Ur (3), Opt2En (4), Opt2Ur (5), Opt3En (6), Opt3Ur (7), Opt4En (8), Opt4Ur (9), Correct (10)]
    else if (cols.length === 11) {
      part = '';
      qEn = cols[0];
      qUr = cols[1];
      opt1En = cols[2]; opt1Ur = cols[3];
      opt2En = cols[4]; opt2Ur = cols[5];
      opt3En = cols[6]; opt3Ur = cols[7];
      opt4En = cols[8]; opt4Ur = cols[9];
      correctRaw = cols[10];
    }
    // Layout 4: 9 or 10 columns (Part, Q_En, Q_Ur, Opt1, Opt2, Opt3, Opt4, Correct)
    else if (cols.length >= 7) {
      // Simplified options
      let offset = 0;
      if (cols.length >= 8 && isNaN(cols[0]) && !cols[0].includes(' ')) {
        part = cols[0];
        offset = 1;
      }
      qEn = cols[offset] || '';
      qUr = cols[offset + 1] || '';
      opt1En = cols[offset + 2] || '';
      opt2En = cols[offset + 3] || '';
      opt3En = cols[offset + 4] || '';
      opt4En = cols[offset + 5] || '';
      correctRaw = cols[cols.length - 1] || '';
    } else {
      continue;
    }

    const options = [
      { en: opt1En || '', ur: opt1Ur || '' },
      { en: opt2En || '', ur: opt2Ur || '' },
      { en: opt3En || '', ur: opt3Ur || '' },
      { en: opt4En || '', ur: opt4Ur || '' }
    ];

    // Determine correct option index (0-based)
    let correctIdx = 0;
    const cleanCorrect = (correctRaw || '').trim().toUpperCase();
    if (['1', '2', '3', '4'].includes(cleanCorrect)) {
      correctIdx = parseInt(cleanCorrect, 10) - 1;
    } else if (cleanCorrect === '0') {
      correctIdx = 0;
    } else if (cleanCorrect === 'A') correctIdx = 0;
    else if (cleanCorrect === 'B') correctIdx = 1;
    else if (cleanCorrect === 'C') correctIdx = 2;
    else if (cleanCorrect === 'D') correctIdx = 3;
    else {
      // Try matching text
      const matchIdx = options.findIndex(o => (o.en && o.en.toLowerCase() === cleanCorrect.toLowerCase()) || (o.ur && o.ur === cleanCorrect));
      if (matchIdx !== -1) correctIdx = matchIdx;
    }

    questions.push({
      part: part.trim() || null,
      question_en: qEn.trim(),
      question_ur: qUr.trim(),
      options,
      correct_option_index: correctIdx
    });
  }

  return { questions, detectedCols, hasHeader: hasHeaderKeywords, error: null };
};

/**
 * Intelligent JSON Parser
 */
export const parseQuestionsJson = (jsonString) => {
  if (!jsonString || !jsonString.trim()) {
    throw new Error('JSON is empty.');
  }

  const parsed = JSON.parse(jsonString);
  if (!Array.isArray(parsed)) {
    throw new Error('Top-level JSON must be an array of question objects [ { ... } ].');
  }

  return parsed.map((item, idx) => {
    const qEn = item.question_en ?? item.qEn ?? item.en ?? '';
    const qUr = item.question_ur ?? item.qUr ?? item.ur ?? '';
    let options = item.options;
    if (typeof options === 'string') {
      try { options = JSON.parse(options); } catch { options = []; }
    }
    if (!Array.isArray(options)) options = [];
    const normalizedOptions = options.map(opt => {
      if (typeof opt === 'string') return { en: opt, ur: opt };
      return { en: opt?.en || '', ur: opt?.ur || '' };
    });
    while (normalizedOptions.length < 4) {
      normalizedOptions.push({ en: '', ur: '' });
    }

    let correctIdx = Number(item.correct_option_index ?? item.correct ?? 0);
    if (correctIdx >= 4 && correctIdx >= normalizedOptions.length) {
      correctIdx = Math.max(0, correctIdx - 1);
    }
    if (isNaN(correctIdx) || correctIdx < 0 || correctIdx >= normalizedOptions.length) {
      correctIdx = 0;
    }

    return {
      part: item.part || null,
      question_en: qEn,
      question_ur: qUr,
      options: normalizedOptions,
      correct_option_index: correctIdx
    };
  });
};

export default function QuizContentManager({
  sql,
  initialQuiz,
  courses = [],
  sections = [],
  lectures = [],
  selectedCourse,
  selectedSection,
  onBack,
  onQuizUpdated
}) {
  const [activeCourseId, setActiveCourseId] = useState(selectedCourse?.id || courses[0]?.id || null);
  const [availableSections, setAvailableSections] = useState(sections || []);
  const [activeSectionId, setActiveSectionId] = useState(selectedSection?.id || null);
  const [availableQuizzes, setAvailableQuizzes] = useState([]);
  const [activeQuiz, setActiveQuiz] = useState(initialQuiz || null);

  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('table'); // 'table' | 'json'

  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState(null); // { message, type: 'success' | 'error' | 'info' }

  // Excel paste modal state
  const [isExcelModalOpen, setIsExcelModalOpen] = useState(false);
  const [excelPasteText, setExcelPasteText] = useState('');
  const [excelParsedResult, setExcelParsedResult] = useState(null);

  // JSON editor state
  const [jsonText, setJsonText] = useState('');
  const [jsonError, setJsonError] = useState('');
  const [jsonSuccess, setJsonSuccess] = useState('');

  // Row editor modal state
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState(null);

  // Confirm overwrite modal
  const [confirmDialog, setConfirmDialog] = useState(null); // { title, message, onConfirm }

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(prev => (prev?.message === message ? null : prev));
    }, 4000);
  };

  const loadedQuizIdRef = useRef(null);

  // 1. Fetch sections when course changes
  useEffect(() => {
    if (!activeCourseId) return;
    let isMounted = true;
    const loadSections = async () => {
      try {
        const secList = await sql`
          SELECT * FROM sections WHERE course_id = ${activeCourseId} ORDER BY order_index ASC
        `;
        if (!isMounted) return;
        setAvailableSections(secList);
        if (secList.length > 0 && (!activeSectionId || !secList.some(s => s.id === activeSectionId))) {
          setActiveSectionId(secList[0].id);
        }
      } catch (err) {
        console.error('Error fetching sections:', err);
      }
    };
    loadSections();
    return () => { isMounted = false; };
  }, [activeCourseId]);

  // 2. Fetch quizzes when section or course changes
  useEffect(() => {
    if (!activeCourseId) return;
    let isMounted = true;
    const loadQuizzes = async () => {
      try {
        let qList = [];
        if (activeSectionId) {
          qList = await sql`
            SELECT q.*, l.title as lecture_title, l.order_index as lecture_order, s.title as section_title, s.kind as section_kind
            FROM quizzes q
            LEFT JOIN lectures l ON q.lecture_id = l.id
            LEFT JOIN sections s ON (q.section_id = s.id OR l.section_id = s.id)
            WHERE (q.section_id = ${activeSectionId} OR l.section_id = ${activeSectionId})
            ORDER BY COALESCE(l.order_index, 999), q.title, q.version ASC
          `;
        } else {
          qList = await sql`
            SELECT q.*, l.title as lecture_title, l.order_index as lecture_order, s.title as section_title, s.kind as section_kind
            FROM quizzes q
            LEFT JOIN lectures l ON q.lecture_id = l.id
            LEFT JOIN sections s ON (q.section_id = s.id OR l.section_id = s.id)
            WHERE s.course_id = ${activeCourseId} OR l.course_id = ${activeCourseId}
            ORDER BY COALESCE(l.order_index, 999), q.title, q.version ASC
          `;
        }
        if (!isMounted) return;
        setAvailableQuizzes(qList);

        // Keep activeQuiz if valid, or pick initialQuiz, or pick first
        setActiveQuiz(prev => {
          if (prev && qList.some(q => q.id === prev.id)) return prev;
          if (initialQuiz && qList.some(q => q.id === initialQuiz.id)) return initialQuiz;
          return qList[0] || null;
        });
      } catch (err) {
        console.error('Error fetching quizzes:', err);
      }
    };
    loadQuizzes();
    return () => { isMounted = false; };
  }, [activeCourseId, activeSectionId]);

  // 3. Load questions when activeQuiz changes
  const loadQuestions = async (quizId, force = false) => {
    if (!quizId) {
      setQuestions([]);
      setJsonText('[]');
      loadedQuizIdRef.current = null;
      return;
    }
    // Never reload questions from database if already loaded, unless forced
    if (!force && loadedQuizIdRef.current === quizId) {
      return;
    }
    setIsLoading(true);
    try {
      const records = await sql`
        SELECT * FROM questions WHERE quiz_id = ${quizId} ORDER BY id ASC
      `;
      const mapped = records.map(r => ({
        id: r.id,
        part: r.part || null,
        question_en: r.question_en || '',
        question_ur: r.question_ur || '',
        options: normalizeOptions(r.options),
        correct_option_index: Number(r.correct_option_index ?? 0)
      }));
      setQuestions(mapped);
      setJsonText(questionsToJson(mapped));
      setJsonError('');
      loadedQuizIdRef.current = quizId;
    } catch (err) {
      console.error('Error loading questions:', err);
      showToast('Failed to load questions from database', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (activeQuiz?.id) {
      loadQuestions(activeQuiz.id);
    }
  }, [activeQuiz?.id]);

  // Handle Tab Switch: sync JSON text with latest table questions
  const handleSwitchTab = (tab) => {
    if (tab === 'json') {
      setJsonText(questionsToJson(questions));
      setJsonError('');
    } else if (tab === 'table' && activeTab === 'json') {
      try {
        const parsed = parseQuestionsJson(jsonText);
        setQuestions(parsed);
      } catch {
        // If JSON has errors, warn user
        showToast('JSON has syntax errors. Table view will keep previous valid data.', 'info');
      }
    }
    setActiveTab(tab);
  };

  // 4. Copy Table Data for Excel
  const handleCopyForExcel = () => {
    if (questions.length === 0) {
      showToast('No questions to copy.', 'info');
      return;
    }
    try {
      const tsv = questionsToExcelTsv(questions);
      navigator.clipboard.writeText(tsv);
      showToast(`Copied ${questions.length} questions to clipboard in Excel table format!`, 'success');
    } catch (err) {
      console.error('Copy failed:', err);
      showToast('Could not copy to clipboard. Please allow clipboard permissions.', 'error');
    }
  };

  // 5. Download TSV file for Excel
  const handleDownloadTsv = () => {
    if (questions.length === 0) {
      showToast('No questions to download.', 'info');
      return;
    }
    const tsv = questionsToExcelTsv(questions);
    const blob = new Blob([tsv], { type: 'text/tab-separated-values;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const filename = `${(activeQuiz?.title || 'quiz').replace(/[^a-z0-9_-]/gi, '_')}_v${activeQuiz?.version || 1}.tsv`;
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`Downloaded ${filename} for Excel!`, 'success');
  };

  // 6. Copy JSON
  const handleCopyJson = () => {
    try {
      const textToCopy = activeTab === 'json' ? jsonText : questionsToJson(questions);
      navigator.clipboard.writeText(textToCopy);
      showToast('Copied questions JSON to clipboard!', 'success');
    } catch (err) {
      console.error('Copy JSON failed:', err);
      showToast('Could not copy JSON to clipboard.', 'error');
    }
  };

  // 7. Format JSON
  const handleFormatJson = () => {
    try {
      const parsed = JSON.parse(jsonText);
      setJsonText(JSON.stringify(parsed, null, 2));
      setJsonError('');
      showToast('Formatted JSON successfully!', 'success');
    } catch (err) {
      setJsonError(err.message);
    }
  };

  // 8. Excel Paste Modal Handler
  const handleOpenExcelModal = () => {
    setExcelPasteText('');
    setExcelParsedResult(null);
    setIsExcelModalOpen(true);
  };

  const handleExcelPasteChange = (e) => {
    const text = e.target.value;
    setExcelPasteText(text);
    if (!text.trim()) {
      setExcelParsedResult(null);
      return;
    }
    const res = parseExcelTsv(text);
    setExcelParsedResult(res);
  };

  // Save / Overwrite from Excel Paste
  const handleConfirmExcelOverwrite = async () => {
    if (!activeQuiz?.id) {
      showToast('Please select a quiz first.', 'error');
      return;
    }
    if (!excelParsedResult || excelParsedResult.questions.length === 0) {
      showToast('No valid questions found in pasted text.', 'error');
      return;
    }

    setConfirmDialog({
      title: 'Overwrite Quiz in Database?',
      message: `You are about to REPLACE all existing questions in "${activeQuiz.title}" (Version ${activeQuiz.version}) with ${excelParsedResult.questions.length} questions from Excel. This action directly updates the database.`,
      confirmText: 'Yes, Overwrite Database',
      onConfirm: async () => {
        setIsSaving(true);
        try {
          await executeDatabaseOverwrite(activeQuiz.id, excelParsedResult.questions);
          setIsExcelModalOpen(false);
          await loadQuestions(activeQuiz.id, true);
          showToast(`Successfully saved ${excelParsedResult.questions.length} questions to database!`, 'success');
          if (onQuizUpdated) onQuizUpdated();
        } catch (err) {
          console.error('Error overwriting quiz from Excel:', err);
          showToast('Failed to overwrite database. See console for details.', 'error');
        } finally {
          setIsSaving(false);
          setConfirmDialog(null);
        }
      }
    });
  };

  // Save / Overwrite from JSON Editor
  const handleSaveJsonToDb = () => {
    if (!activeQuiz?.id) {
      showToast('Please select a quiz first.', 'error');
      return;
    }
    let parsedQuestions;
    try {
      parsedQuestions = parseQuestionsJson(jsonText);
    } catch (err) {
      setJsonError(`JSON Syntax Error: ${err.message}`);
      showToast('Cannot save: JSON has syntax errors.', 'error');
      return;
    }

    if (parsedQuestions.length === 0) {
      showToast('JSON array is empty. No questions to save.', 'error');
      return;
    }

    setConfirmDialog({
      title: 'Overwrite Quiz Database from JSON?',
      message: `This will REPLACE all questions in "${activeQuiz.title}" with the ${parsedQuestions.length} questions defined in the JSON editor.`,
      confirmText: 'Overwrite Database',
      onConfirm: async () => {
        setIsSaving(true);
        try {
          await executeDatabaseOverwrite(activeQuiz.id, parsedQuestions);
          await loadQuestions(activeQuiz.id, true);
          showToast(`Saved ${parsedQuestions.length} questions from JSON into database!`, 'success');
          if (onQuizUpdated) onQuizUpdated();
        } catch (err) {
          console.error('Error saving JSON:', err);
          showToast('Failed to save JSON to database.', 'error');
        } finally {
          setIsSaving(false);
          setConfirmDialog(null);
        }
      }
    });
  };

  // Save current table state to DB
  const handleSaveCurrentTableToDb = () => {
    if (!activeQuiz?.id) {
      showToast('Please select a quiz first.', 'error');
      return;
    }
    if (questions.length === 0) {
      showToast('Quiz has no questions to save.', 'info');
      return;
    }

    setConfirmDialog({
      title: 'Save Questions to Database',
      message: `Update "${activeQuiz.title}" (Version ${activeQuiz.version}) with the current ${questions.length} table questions?`,
      confirmText: 'Save to Database',
      onConfirm: async () => {
        setIsSaving(true);
        try {
          await executeDatabaseOverwrite(activeQuiz.id, questions);
          await loadQuestions(activeQuiz.id, true);
          showToast(`Database updated successfully with ${questions.length} questions!`, 'success');
          if (onQuizUpdated) onQuizUpdated();
        } catch (err) {
          console.error('Save error:', err);
          showToast('Failed to save questions to database.', 'error');
        } finally {
          setIsSaving(false);
          setConfirmDialog(null);
        }
      }
    });
  };

  // Core Overwrite execution
  const executeDatabaseOverwrite = async (quizId, newQuestions) => {
    // 1. Delete existing questions for this quiz
    await sql`DELETE FROM questions WHERE quiz_id = ${quizId}`;

    // 2. Insert new questions sequentially
    for (const q of newQuestions) {
      const opts = normalizeOptions(q.options);
      const correctIdx = Number(q.correct_option_index ?? 0);
      await sql`
        INSERT INTO questions (quiz_id, question_en, question_ur, options, correct_option_index, part)
        VALUES (
          ${quizId},
          ${q.question_en || ''},
          ${q.question_ur || ''},
          ${JSON.stringify(opts)},
          ${correctIdx},
          ${q.part || null}
        )
      `;
    }
  };

  // Add a blank question row
  const handleAddQuestionRow = () => {
    const newQ = {
      part: null,
      question_en: '',
      question_ur: '',
      options: [
        { en: '', ur: '' },
        { en: '', ur: '' },
        { en: '', ur: '' },
        { en: '', ur: '' }
      ],
      correct_option_index: 0
    };
    setQuestions(prev => [...prev, newQ]);
    // Immediately open editor for the new question
    setEditingIndex(questions.length);
    setEditFormData(JSON.parse(JSON.stringify(newQ)));
  };

  // Delete a question row
  const handleDeleteRow = (index) => {
    if (confirm(`Delete Question #${index + 1}?`)) {
      setQuestions(prev => prev.filter((_, i) => i !== index));
      showToast(`Removed Question #${index + 1}. Remember to click "Save Changes" to commit.`, 'info');
    }
  };

  // Open Edit Modal for a specific row
  const handleOpenRowEditor = (index) => {
    setEditingIndex(index);
    setEditFormData(JSON.parse(JSON.stringify(questions[index])));
  };

  // Save changes from Edit Modal
  const handleSaveRowEditor = () => {
    if (editingIndex === null || !editFormData) return;
    setQuestions(prev => {
      const copy = [...prev];
      copy[editingIndex] = editFormData;
      return copy;
    });
    setEditingIndex(null);
    setEditFormData(null);
    showToast(`Updated Question #${editingIndex + 1}. Click "Save to Database" to commit changes.`, 'info');
  };

  // Filtered questions in table
  const filteredQuestions = questions.filter(q => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchEn = (q.question_en || '').toLowerCase().includes(query);
    const matchUr = (q.question_ur || '').toLowerCase().includes(query);
    const matchPart = (q.part || '').toLowerCase().includes(query);
    const matchOpts = (q.options || []).some(o =>
      (o.en || '').toLowerCase().includes(query) || (o.ur || '').includes(query)
    );
    return matchEn || matchUr || matchPart || matchOpts;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className={`px-5 py-3.5 rounded-2xl shadow-2xl border flex items-center gap-3 text-sm font-bold ${
            toast.type === 'error'
              ? 'bg-red-900 text-white border-red-700'
              : toast.type === 'info'
              ? 'bg-slate-900 text-white border-slate-700'
              : 'bg-emerald-600 text-white border-emerald-500'
          }`}>
            {toast.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
            <span>{toast.message}</span>
            <button onClick={() => setToast(null)} className="ml-2 hover:opacity-75">
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Main Top Header */}
      <div className="bg-white border-b sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {onBack && (
                <button
                  onClick={onBack}
                  className="p-2 hover:bg-slate-100 rounded-xl text-slate-500 transition-colors"
                  title="Go Back"
                >
                  <ArrowLeft size={20} />
                </button>
              )}
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
                <FileSpreadsheet size={22} />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-slate-800 leading-tight">
                  Lecture Quiz Questions & Answers
                </h1>
                <p className="text-xs text-slate-400 font-medium">
                  Excel Table Copy/Paste &amp; JSON Database Manager
                </p>
              </div>
            </div>

            {/* View Switcher Tabs */}
            <div className="inline-flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl h-11 max-h-11 self-center shrink-0">
              <button
                type="button"
                onClick={() => handleSwitchTab('table')}
                className={`inline-flex items-center gap-2 px-3.5 h-9 max-h-9 rounded-xl text-xs font-black transition-all shrink-0 select-none whitespace-nowrap ${
                  activeTab === 'table'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <TableIcon size={16} className="shrink-0" />
                <span>Table View (Excel)</span>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-[10px] font-black leading-none">
                  {questions.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleSwitchTab('json')}
                className={`inline-flex items-center gap-2 px-3.5 h-9 max-h-9 rounded-xl text-xs font-black transition-all shrink-0 select-none whitespace-nowrap ${
                  activeTab === 'json'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Code size={16} className="shrink-0" />
                <span>JSON View</span>
              </button>
            </div>
          </div>

          {/* Selector Bar */}
          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Course Selector */}
            <div>
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                Course
              </label>
              <select
                value={activeCourseId || ''}
                onChange={(e) => setActiveCourseId(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl border bg-slate-50 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {courses.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Section Selector */}
            <div>
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                Section
              </label>
              <select
                value={activeSectionId || ''}
                onChange={(e) => setActiveSectionId(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl border bg-slate-50 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {availableSections.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.title} {s.kind === 'exam' ? '(Exam Section)' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Quiz Selector */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                  Select Quiz / Version
                </label>
                {activeQuiz && (
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Quiz ID: {activeQuiz.id} · v{activeQuiz.version}
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <select
                  value={activeQuiz?.id || ''}
                  onChange={(e) => {
                    const qId = Number(e.target.value);
                    const q = availableQuizzes.find(item => item.id === qId);
                    setActiveQuiz(q || null);
                    if (q) loadQuestions(q.id, true);
                  }}
                  className="flex-1 p-2.5 rounded-xl border bg-slate-50 text-xs font-black text-slate-800 outline-none focus:ring-2 focus:ring-emerald-500 truncate"
                >
                  {availableQuizzes.length === 0 && (
                    <option value="">No quizzes in this section</option>
                  )}
                  {availableQuizzes.map(q => (
                    <option key={q.id} value={q.id}>
                      {q.lecture_order ? `Lec ${q.lecture_order}: ` : ''}{q.title} (v{q.version} - {q.quiz_type})
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => activeQuiz?.id && loadQuestions(activeQuiz.id, true)}
                  title="Reload from Database"
                  className="p-2.5 rounded-xl border bg-white hover:bg-slate-50 text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Action Toolbar */}
        <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {activeTab === 'table' ? (
              <>
                <button
                  onClick={handleCopyForExcel}
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black px-4 py-2.5 rounded-2xl text-xs transition-all shadow-md shadow-emerald-100 active:scale-95"
                  title="Copy formatted table data directly for Excel or Google Sheets"
                >
                  <Copy size={16} />
                  <span>Copy for Excel</span>
                </button>

                <button
                  onClick={handleOpenExcelModal}
                  className="flex items-center gap-2 bg-slate-900 hover:bg-black text-white font-black px-4 py-2.5 rounded-2xl text-xs transition-all shadow-sm active:scale-95"
                  title="Paste copied rows from Excel to overwrite database"
                >
                  <Upload size={16} />
                  <span>Paste from Excel (Overwrite)</span>
                </button>

                <button
                  onClick={handleDownloadTsv}
                  className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3.5 py-2.5 rounded-2xl text-xs transition-all"
                  title="Download .tsv file that opens directly in Microsoft Excel"
                >
                  <Download size={16} />
                  <span>Download TSV</span>
                </button>

                <button
                  onClick={handleAddQuestionRow}
                  className="flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold px-3.5 py-2.5 rounded-2xl text-xs transition-all"
                  title="Add a new blank question to this quiz"
                >
                  <Plus size={16} />
                  <span>Add Question</span>
                </button>

                <button
                  onClick={handleSaveCurrentTableToDb}
                  disabled={isSaving}
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-black px-4 py-2.5 rounded-2xl text-xs transition-all shadow-sm disabled:opacity-50"
                  title="Save any modified questions in this table directly to Neon Database"
                >
                  <Save size={16} />
                  <span>{isSaving ? 'Saving...' : 'Save to Database'}</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleCopyJson}
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black px-4 py-2.5 rounded-2xl text-xs transition-all shadow-md shadow-emerald-100"
                >
                  <Copy size={16} />
                  <span>Copy JSON</span>
                </button>

                <button
                  onClick={handleFormatJson}
                  className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2.5 rounded-2xl text-xs transition-all"
                >
                  <RotateCcw size={16} />
                  <span>Prettify / Format</span>
                </button>

                <button
                  onClick={handleSaveJsonToDb}
                  disabled={isSaving}
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-black px-4 py-2.5 rounded-2xl text-xs transition-all shadow-sm disabled:opacity-50"
                >
                  <Save size={16} />
                  <span>{isSaving ? 'Saving...' : 'Save JSON to Database'}</span>
                </button>
              </>
            )}
          </div>

          {/* Search Box in Table View */}
          {activeTab === 'table' && (
            <div className="relative w-full sm:w-64">
              <Search size={16} className="absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-2xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          )}
        </div>

        {/* LOADING INDICATOR */}
        {isLoading && (
          <div className="py-16 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mb-3"></div>
            <p className="text-slate-400 font-bold text-sm">Loading quiz questions from database...</p>
          </div>
        )}

        {/* ======================================================== */}
        {/* TABLE VIEW (EXCEL READY) */}
        {/* ======================================================== */}
        {!isLoading && activeTab === 'table' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            {questions.length === 0 ? (
              <div className="py-16 px-6 text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                  <FileSpreadsheet size={32} />
                </div>
                <h3 className="font-black text-lg text-slate-700 mb-2">No Questions in this Quiz</h3>
                <p className="text-slate-400 text-xs max-w-md mx-auto mb-6">
                  You can paste questions from an Excel spreadsheet, paste JSON, or click "Add Question" to start creating quiz content.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={handleOpenExcelModal}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all flex items-center gap-2"
                  >
                    <Upload size={16} /> Paste from Excel
                  </button>
                  <button
                    onClick={handleAddQuestionRow}
                    className="bg-slate-900 hover:bg-black text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all flex items-center gap-2"
                  >
                    <Plus size={16} /> Add Question
                  </button>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto max-h-[75vh]">
                <table className="w-full text-left border-collapse text-xs select-text">
                  <thead className="bg-slate-50 border-b sticky top-0 z-10 shadow-sm">
                    <tr className="text-[10px] font-black uppercase tracking-wider text-slate-500 whitespace-nowrap">
                      <th className="px-3 py-3 w-12 text-center">#</th>
                      <th className="px-3 py-3 min-w-[90px]">Part</th>
                      <th className="px-4 py-3 min-w-[240px]">Question (English)</th>
                      <th className="px-4 py-3 min-w-[240px] text-right font-urdu text-xs">سوال (Urdu)</th>
                      <th className="px-3 py-3 min-w-[170px]">Option 1</th>
                      <th className="px-3 py-3 min-w-[170px]">Option 2</th>
                      <th className="px-3 py-3 min-w-[170px]">Option 3</th>
                      <th className="px-3 py-3 min-w-[170px]">Option 4</th>
                      <th className="px-3 py-3 min-w-[120px] text-center">Correct Option</th>
                      <th className="px-3 py-3 w-20 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredQuestions.map((q, idx) => {
                      const opts = normalizeOptions(q.options);
                      const correctIdx = Number(q.correct_option_index ?? 0);
                      const actualIdx = questions.indexOf(q);

                      return (
                        <tr
                          key={q.id || idx}
                          className="hover:bg-slate-50/70 transition-colors group"
                        >
                          {/* Index */}
                          <td className="px-3 py-3.5 text-center font-black text-slate-400">
                            {actualIdx + 1}
                          </td>

                          {/* Part */}
                          <td className="px-3 py-3.5">
                            {q.part ? (
                              <span className="bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded text-[10px] whitespace-nowrap">
                                {q.part}
                              </span>
                            ) : (
                              <span className="text-slate-300 italic text-[10px]">—</span>
                            )}
                          </td>

                          {/* Question EN */}
                          <td className="px-4 py-3.5 font-bold text-slate-800 leading-snug">
                            {q.question_en || <span className="text-red-400 italic">Missing English</span>}
                          </td>

                          {/* Question UR */}
                          <td className="px-4 py-3.5 text-right font-urdu text-base font-bold text-slate-900 leading-relaxed" dir="rtl">
                            {q.question_ur || <span className="text-red-400 italic font-sans text-xs">Missing Urdu</span>}
                          </td>

                          {/* Option 1 */}
                          <td className={`px-3 py-3.5 rounded-lg transition-colors ${correctIdx === 0 ? 'bg-emerald-50/80 font-bold border border-emerald-200' : ''}`}>
                            <div className="flex items-center gap-1.5">
                              {correctIdx === 0 && <Check size={12} className="text-emerald-600 shrink-0" />}
                              <div className="min-w-0">
                                <div className="text-slate-800 truncate">{opts[0]?.en || '—'}</div>
                                <div className="font-urdu text-sm text-slate-600 truncate" dir="rtl">{opts[0]?.ur || ''}</div>
                              </div>
                            </div>
                          </td>

                          {/* Option 2 */}
                          <td className={`px-3 py-3.5 rounded-lg transition-colors ${correctIdx === 1 ? 'bg-emerald-50/80 font-bold border border-emerald-200' : ''}`}>
                            <div className="flex items-center gap-1.5">
                              {correctIdx === 1 && <Check size={12} className="text-emerald-600 shrink-0" />}
                              <div className="min-w-0">
                                <div className="text-slate-800 truncate">{opts[1]?.en || '—'}</div>
                                <div className="font-urdu text-sm text-slate-600 truncate" dir="rtl">{opts[1]?.ur || ''}</div>
                              </div>
                            </div>
                          </td>

                          {/* Option 3 */}
                          <td className={`px-3 py-3.5 rounded-lg transition-colors ${correctIdx === 2 ? 'bg-emerald-50/80 font-bold border border-emerald-200' : ''}`}>
                            <div className="flex items-center gap-1.5">
                              {correctIdx === 2 && <Check size={12} className="text-emerald-600 shrink-0" />}
                              <div className="min-w-0">
                                <div className="text-slate-800 truncate">{opts[2]?.en || '—'}</div>
                                <div className="font-urdu text-sm text-slate-600 truncate" dir="rtl">{opts[2]?.ur || ''}</div>
                              </div>
                            </div>
                          </td>

                          {/* Option 4 */}
                          <td className={`px-3 py-3.5 rounded-lg transition-colors ${correctIdx === 3 ? 'bg-emerald-50/80 font-bold border border-emerald-200' : ''}`}>
                            <div className="flex items-center gap-1.5">
                              {correctIdx === 3 && <Check size={12} className="text-emerald-600 shrink-0" />}
                              <div className="min-w-0">
                                <div className="text-slate-800 truncate">{opts[3]?.en || '—'}</div>
                                <div className="font-urdu text-sm text-slate-600 truncate" dir="rtl">{opts[3]?.ur || ''}</div>
                              </div>
                            </div>
                          </td>

                          {/* Correct Option Badge */}
                          <td className="px-3 py-3.5 text-center">
                            <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-black text-[11px]">
                              <Check size={12} /> Opt {correctIdx + 1}
                            </span>
                          </td>

                          {/* Actions */}
                          <td className="px-3 py-3.5 text-center">
                            <div className="flex items-center justify-center gap-1 opacity-80 group-hover:opacity-100">
                              <button
                                onClick={() => handleOpenRowEditor(actualIdx)}
                                className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                                title="Edit Question"
                              >
                                <Edit2 size={15} />
                              </button>
                              <button
                                onClick={() => handleDeleteRow(actualIdx)}
                                className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete Question"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* JSON VIEW */}
        {/* ======================================================== */}
        {!isLoading && activeTab === 'json' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-black text-slate-800 text-base">Quiz Questions JSON</h3>
                <p className="text-xs text-slate-400">
                  Full editable array of question objects. You can copy, edit, or paste JSON here and overwrite the database.
                </p>
              </div>
              <div className="flex items-center gap-2">
                {jsonError ? (
                  <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-xl flex items-center gap-1">
                    <AlertCircle size={14} /> Syntax Error
                  </span>
                ) : (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl flex items-center gap-1">
                    <CheckCircle2 size={14} /> Valid JSON Array
                  </span>
                )}
              </div>
            </div>

            {jsonError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-700">
                {jsonError}
              </div>
            )}

            <textarea
              value={jsonText}
              onChange={(e) => {
                const val = e.target.value;
                setJsonText(val);
                try {
                  const parsed = JSON.parse(val);
                  if (Array.isArray(parsed)) {
                    setJsonError('');
                  } else {
                    setJsonError('Top-level JSON must be an array: [ ... ]');
                  }
                } catch (err) {
                  setJsonError(err.message);
                }
              }}
              rows={22}
              className="w-full p-4 font-mono text-xs leading-relaxed bg-slate-900 text-emerald-400 rounded-2xl border border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner"
              spellCheck={false}
            />

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Tip: You can paste questions JSON formatted with <code>question_en</code>, <code>question_ur</code>, <code>options</code>, <code>correct_option_index</code>.
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyJson}
                  className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2 rounded-xl text-xs transition-all"
                >
                  <Copy size={15} /> Copy JSON
                </button>
                <button
                  onClick={handleSaveJsonToDb}
                  disabled={isSaving || Boolean(jsonError)}
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black px-5 py-2 rounded-xl text-xs transition-all shadow-md shadow-emerald-100 disabled:opacity-50"
                >
                  <Save size={15} /> Save JSON to Database
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* EXCEL PASTE MODAL */}
      {/* ======================================================== */}
      {isExcelModalOpen && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl border border-slate-100 p-6 sm:p-8 flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between mb-4 pb-4 border-b">
              <div>
                <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
                  <Upload className="text-emerald-600" size={22} />
                  Paste from Excel &amp; Overwrite Database
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Copy rows directly from Excel or Google Sheets and paste them below.
                </p>
              </div>
              <button
                onClick={() => setIsExcelModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Expected Layout Guide */}
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 mb-4 text-[11px] text-slate-500">
              <span className="font-black text-slate-700 uppercase tracking-wider block mb-1">
                Expected Column Order from Excel:
              </span>
              <div className="overflow-x-auto whitespace-nowrap font-mono text-[10px] text-emerald-800 bg-emerald-50/70 p-2 rounded-xl">
                # | Part | Question (EN) | Question (UR) | Opt 1 (EN) | Opt 1 (UR) | Opt 2 (EN) | Opt 2 (UR) | Opt 3 (EN) | Opt 3 (UR) | Opt 4 (EN) | Opt 4 (UR) | Correct (1-4)
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">
                * Header row is optional and will be detected and skipped automatically.
              </span>
            </div>

            {/* Paste Area */}
            <div className="flex-1 min-h-[160px] mb-4">
              <textarea
                value={excelPasteText}
                onChange={handleExcelPasteChange}
                placeholder="Click here and press Ctrl+V to paste table rows copied from Excel..."
                rows={7}
                className="w-full p-4 rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50/20 font-mono text-xs outline-none focus:border-emerald-600 focus:bg-white transition-all text-slate-800"
                autoFocus
              />
            </div>

            {/* Live Parsing Preview */}
            {excelParsedResult && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-800">
                      Detected: {excelParsedResult.questions.length} Questions
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {excelParsedResult.detectedCols} columns
                    </span>
                    {excelParsedResult.hasHeader && (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Header Row Skipped
                      </span>
                    )}
                  </div>
                </div>

                {excelParsedResult.questions.length > 0 && (
                  <div className="max-h-40 overflow-y-auto border rounded-xl divide-y text-xs">
                    {excelParsedResult.questions.slice(0, 5).map((pq, i) => (
                      <div key={i} className="p-2.5 bg-slate-50/60 flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <span className="font-bold text-slate-800">#{i + 1}: {pq.question_en}</span>
                          <span className="font-urdu text-sm text-slate-600 mr-2" dir="rtl">{pq.question_ur}</span>
                        </div>
                        <span className="shrink-0 text-[10px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                          Correct: Opt {pq.correct_option_index + 1}
                        </span>
                      </div>
                    ))}
                    {excelParsedResult.questions.length > 5 && (
                      <div className="p-2 text-center text-[10px] font-bold text-slate-400">
                        ...and {excelParsedResult.questions.length - 5} more questions
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t">
              <button
                type="button"
                onClick={() => setIsExcelModalOpen(false)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleConfirmExcelOverwrite}
                disabled={!excelParsedResult || excelParsedResult.questions.length === 0 || isSaving}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition-all shadow-md shadow-emerald-200 disabled:opacity-50 flex items-center gap-2"
              >
                <Save size={16} />
                <span>Overwrite Database</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* ROW EDIT MODAL */}
      {/* ======================================================== */}
      {editingIndex !== null && editFormData && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl border border-slate-100 p-6 sm:p-8 flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between mb-4 pb-4 border-b">
              <div>
                <h3 className="text-xl font-black text-slate-800">
                  Edit Question #{editingIndex + 1}
                </h3>
                <p className="text-xs text-slate-400">Edit details and options</p>
              </div>
              <button
                onClick={() => { setEditingIndex(null); setEditFormData(null); }}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 overflow-y-auto pr-1">
              {/* Part */}
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Part / Section (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Part 1 or Vocabulary"
                  value={editFormData.part || ''}
                  onChange={(e) => setEditFormData({ ...editFormData, part: e.target.value })}
                  className="w-full p-3 rounded-xl border bg-slate-50 text-xs font-bold text-slate-800 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Question EN */}
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Question (English)</label>
                <input
                  type="text"
                  value={editFormData.question_en || ''}
                  onChange={(e) => setEditFormData({ ...editFormData, question_en: e.target.value })}
                  className="w-full p-3 rounded-xl border bg-slate-50 text-xs font-bold text-slate-800 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Question UR */}
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">سوال (Urdu)</label>
                <input
                  type="text"
                  dir="rtl"
                  value={editFormData.question_ur || ''}
                  onChange={(e) => setEditFormData({ ...editFormData, question_ur: e.target.value })}
                  className="w-full p-3 rounded-xl border bg-slate-50 text-base font-urdu font-bold text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* 4 Options */}
              <div className="pt-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2 block mb-2">
                  Options &amp; Select Correct Option
                </label>
                <div className="space-y-3">
                  {[0, 1, 2, 3].map((optIdx) => {
                    const opt = editFormData.options?.[optIdx] || { en: '', ur: '' };
                    const isCorrect = Number(editFormData.correct_option_index) === optIdx;

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-2xl border transition-all flex items-center gap-3 ${
                          isCorrect ? 'bg-emerald-50/80 border-emerald-300' : 'bg-slate-50 border-slate-100'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setEditFormData({ ...editFormData, correct_option_index: optIdx })}
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs shrink-0 transition-colors ${
                            isCorrect ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                          }`}
                          title="Click to set as correct option"
                        >
                          {optIdx + 1}
                        </button>

                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <input
                            type="text"
                            placeholder={`Option ${optIdx + 1} English`}
                            value={opt.en || ''}
                            onChange={(e) => {
                              const newOpts = [...(editFormData.options || [])];
                              while (newOpts.length < 4) newOpts.push({ en: '', ur: '' });
                              newOpts[optIdx] = { ...newOpts[optIdx], en: e.target.value };
                              setEditFormData({ ...editFormData, options: newOpts });
                            }}
                            className="p-2 rounded-lg border bg-white text-xs font-bold text-slate-800 outline-none focus:ring-2 focus:ring-emerald-500"
                          />

                          <input
                            type="text"
                            dir="rtl"
                            placeholder={`آپشن ${optIdx + 1} اردو`}
                            value={opt.ur || ''}
                            onChange={(e) => {
                              const newOpts = [...(editFormData.options || [])];
                              while (newOpts.length < 4) newOpts.push({ en: '', ur: '' });
                              newOpts[optIdx] = { ...newOpts[optIdx], ur: e.target.value };
                              setEditFormData({ ...editFormData, options: newOpts });
                            }}
                            className="p-2 rounded-lg border bg-white font-urdu text-sm font-bold text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>

                        {isCorrect && (
                          <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                            Correct
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t mt-4">
              <button
                type="button"
                onClick={() => { setEditingIndex(null); setEditFormData(null); }}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveRowEditor}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-md shadow-emerald-200"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* CONFIRM OVERWRITE MODAL */}
      {/* ======================================================== */}
      {confirmDialog && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-100 p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <AlertCircle size={28} />
            </div>
            <h3 className="font-black text-xl text-slate-800 mb-2">{confirmDialog.title}</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6 font-medium">
              {confirmDialog.message}
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setConfirmDialog(null)}
                className="py-3 px-4 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDialog.onConfirm}
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition-colors shadow-lg shadow-emerald-100"
              >
                {confirmDialog.confirmText || 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
