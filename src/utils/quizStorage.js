export const SESSION_KEY = 'madina_quiz_session_v1';
export const ACTIVE_QUIZ_PREFIX = 'madina_active_quiz_v1_';

export const getSavedSession = () => {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
  } catch {
    return null;
  }
};

export const saveSession = (sessionData) => {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
  } catch (e) {
    console.error("Failed to save session:", e);
  }
};

export const clearSession = () => {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (e) {}
};

export const getActiveQuizStorageKey = (uid, quizId) =>
  `${ACTIVE_QUIZ_PREFIX}${uid || 'guest'}_${quizId}`;

export const loadActiveQuizState = (uid, quizId) => {
  if (!quizId) return null;
  try {
    const raw = localStorage.getItem(getActiveQuizStorageKey(uid, quizId));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.questions) && parsed.questions.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.error("Failed to load active quiz state:", err);
  }
  return null;
};

export const saveActiveQuizState = (uid, quizId, data) => {
  if (!quizId) return;
  try {
    localStorage.setItem(getActiveQuizStorageKey(uid, quizId), JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save active quiz state:", e);
  }
};

export const clearActiveQuizState = (uid, quizId) => {
  if (!quizId) return;
  try {
    localStorage.removeItem(getActiveQuizStorageKey(uid, quizId));
  } catch (e) {}
};
