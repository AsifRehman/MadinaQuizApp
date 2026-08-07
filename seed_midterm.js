import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

// ============================================================
// MID-TERM QUIZ — Dr. Abdul Raheem's Madina Arabic
// Covers: Madina Book 1 (complete) + Madina Book 2 (Lectures 1-23)
// ============================================================

const questionsData = [
  // ── BOOK 1 — COMPLETE (Q1-Q15) ─────────────────────────────
  {
    en: "Look at the sentence 'هٰذَا بَيْتٌ'. Which statement correctly identifies BOTH words?",
    ur: "'هٰذَا بَيْتٌ' کو دیکھیں۔ کون سا بیان دونوں الفاظ کی درست شناخت کرتا ہے؟",
    options: [
      { en: "هٰذَا is an Ism Isharah and بَيْتٌ is an Ism", ur: "هٰذَا اسمِ اشارہ ہے اور بَيْتٌ اسم ہے" },
      { en: "هٰذَا is a Fi'l and بَيْتٌ is an Ism", ur: "هٰذَا فعل ہے اور بَيْتٌ اسم ہے" },
      { en: "هٰذَا is a Harf and بَيْتٌ is a Fi'l", ur: "هٰذَا حرف ہے اور بَيْتٌ فعل ہے" },
      { en: "Both words are verbs", ur: "دونوں الفاظ فعل ہیں" },
    ],
    correct: 0,
  },
  {
    en: "Which change correctly turns the indefinite noun 'بَيْتٌ' into a definite noun?",
    ur: "نکرہ اسم 'بَيْتٌ' کو معرفہ بنانے کے لیے کون سی تبدیلی درست ہے؟",
    options: [
      { en: "بَيْتٌ → الْبَيْتُ", ur: "بَيْتٌ → الْبَيْتُ" },
      { en: "بَيْتٌ → بَيْتٍ", ur: "بَيْتٌ → بَيْتٍ" },
      { en: "بَيْتٌ → بَيْتَ", ur: "بَيْتٌ → بَيْتَ" },
      { en: "بَيْتٌ → بَيْتَانِ", ur: "بَيْتٌ → بَيْتَانِ" },
    ],
    correct: 0,
  },
  {
    en: "Which sentence correctly uses the masculine singular demonstrative for something far away?",
    ur: "دور کی کسی مذکر واحد چیز کے لیے کون سا جملہ درست ہے؟",
    options: [
      { en: "ذٰلِكَ رَجُلٌ", ur: "ذٰلِكَ رَجُلٌ" },
      { en: "تِلْكَ رَجُلٌ", ur: "تِلْكَ رَجُلٌ" },
      { en: "هٰذِهِ رَجُلٌ", ur: "هٰذِهِ رَجُلٌ" },
      { en: "ذٰلِكَ بِنْتٌ", ur: "ذٰلِكَ بِنْتٌ" },
    ],
    correct: 0,
  },
  {
    en: "In the sentence 'الطَّالِبُ فِي الْفَصْلِ', why is 'الْفَصْلِ' Majrur?",
    ur: "'الطَّالِبُ فِي الْفَصْلِ' میں 'الْفَصْلِ' مجرور کیوں ہے؟",
    options: [
      { en: "Because it is the Fa'il", ur: "کیونکہ یہ فاعل ہے" },
      { en: "Because it comes after the Harf Jarr 'فِي'", ur: "کیونکہ یہ حرفِ جر 'فِي' کے بعد آیا ہے" },
      { en: "Because it is the Mubtada", ur: "کیونکہ یہ مبتدا ہے" },
      { en: "Because it is the Maf'ool Bihi", ur: "کیونکہ یہ مفعول به ہے" },
    ],
    correct: 1,
  },
  {
    en: "In 'كِتَابُ مُحَمَّدٍ', which statement is completely correct?",
    ur: "'كِتَابُ مُحَمَّدٍ' کے بارے میں کون سا بیان مکمل طور پر درست ہے؟",
    options: [
      { en: "كِتَابُ is Muzaaf and مُحَمَّدٍ is Muzaaf Ilaih and Majrur", ur: "كِتَابُ مضاف ہے اور مُحَمَّدٍ مضاف الیہ اور مجرور ہے" },
      { en: "مُحَمَّدٍ is Muzaaf and كِتَابُ is Muzaaf Ilaih", ur: "مُحَمَّدٍ مضاف ہے اور كِتَابُ مضاف الیہ ہے" },
      { en: "Both words are Muzaaf", ur: "دونوں الفاظ مضاف ہیں" },
      { en: "كِتَابُ is Maf'ool Bihi and مُحَمَّدٍ is Fa'il", ur: "كِتَابُ مفعول به ہے اور مُحَمَّدٍ فاعل ہے" },
    ],
    correct: 0,
  },
  {
    en: "In 'الْبَابُ مَفْتُوحٌ', which pair correctly identifies the Mubtada and Khabar?",
    ur: "'الْبَابُ مَفْتُوحٌ' میں مبتدا اور خبر کی درست نشاندہی کون سی ہے؟",
    options: [
      { en: "الْبَابُ = Mubtada; مَفْتُوحٌ = Khabar", ur: "الْبَابُ = مبتدا؛ مَفْتُوحٌ = خبر" },
      { en: "مَفْتُوحٌ = Mubtada; الْبَابُ = Khabar", ur: "مَفْتُوحٌ = مبتدا؛ الْبَابُ = خبر" },
      { en: "Both are Mubtada", ur: "دونوں مبتدا ہیں" },
      { en: "Both are Khabar", ur: "دونوں خبر ہیں" },
    ],
    correct: 0,
  },
  {
    en: "Which sentence has the correct case endings for a Fa'il and a Maf'ool Bihi?",
    ur: "فاعل اور مفعول به کے لیے کس جملے میں درست اعراب استعمال ہوئے ہیں؟",
    options: [
      { en: "كَتَبَ مُحَمَّدٌ الدَّرْسَ", ur: "كَتَبَ مُحَمَّدٌ الدَّرْسَ" },
      { en: "كَتَبَ مُحَمَّدًا الدَّرْسُ", ur: "كَتَبَ مُحَمَّدًا الدَّرْسُ" },
      { en: "كَتَبَ مُحَمَّدٍ الدَّرْسُ", ur: "كَتَبَ مُحَمَّدٍ الدَّرْسُ" },
      { en: "كَتَبَ مُحَمَّدٌ الدَّرْسُ", ur: "كَتَبَ مُحَمَّدٌ الدَّرْسُ" },
    ],
    correct: 0,
  },
  {
    en: "In 'كَتَبَ مُحَمَّدٌ الدَّرْسَ', why is 'الدَّرْسَ' Mansub?",
    ur: "'كَتَبَ مُحَمَّدٌ الدَّرْسَ' میں 'الدَّرْسَ' منصوب کیوں ہے؟",
    options: [
      { en: "It is the Fa'il", ur: "یہ فاعل ہے" },
      { en: "It is the Mubtada", ur: "یہ مبتدا ہے" },
      { en: "It is the Maf'ool Bihi", ur: "یہ مفعول به ہے" },
      { en: "It is the Muzaaf Ilaih", ur: "یہ مضاف الیہ ہے" },
    ],
    correct: 2,
  },
  {
    en: "Which pair correctly shows the nominative and accusative forms of the dual?",
    ur: "تثنیہ کی حالتِ رفع اور حالتِ نصب کی درست شکل کون سی ہے؟",
    options: [
      { en: "رَجُلَانِ = Marfu'; رَجُلَيْنِ = Mansub", ur: "رَجُلَانِ = مرفوع؛ رَجُلَيْنِ = منصوب" },
      { en: "رَجُلَيْنِ = Marfu'; رَجُلَانِ = Mansub", ur: "رَجُلَيْنِ = مرفوع؛ رَجُلَانِ = منصوب" },
      { en: "رِجَالٌ = Marfu'; رَجُلَانِ = Mansub", ur: "رِجَالٌ = مرفوع؛ رَجُلَانِ = منصوب" },
      { en: "رَجُلَاتٌ = Marfu'; رَجُلَيْنِ = Mansub", ur: "رَجُلَاتٌ = مرفوع؛ رَجُلَيْنِ = منصوب" },
    ],
    correct: 0,
  },
  {
    en: "Which sentence correctly uses the sound masculine plural in the nominative case?",
    ur: "جمع مذکر سالم کو حالتِ رفع میں کون سا جملہ درست استعمال کرتا ہے؟",
    options: [
      { en: "جَاءَ الْمُدَرِّسُونَ", ur: "جَاءَ الْمُدَرِّسُونَ" },
      { en: "رَأَيْتُ الْمُدَرِّسُونَ", ur: "رَأَيْتُ الْمُدَرِّسُونَ" },
      { en: "مَرَرْتُ بِالْمُدَرِّسُونَ", ur: "مَرَرْتُ بِالْمُدَرِّسُونَ" },
      { en: "جَاءَ الْمُدَرِّسِينَ", ur: "جَاءَ الْمُدَرِّسِينَ" },
    ],
    correct: 0,
  },
  {
    en: "Which sentence correctly uses the sound feminine plural in the nominative case?",
    ur: "جمع مؤنث سالم کو حالتِ رفع میں کون سا جملہ درست استعمال کرتا ہے؟",
    options: [
      { en: "جَاءَتِ الْمُدَرِّسَاتُ", ur: "جَاءَتِ الْمُدَرِّسَاتُ" },
      { en: "رَأَيْتُ الْمُدَرِّسَاتُ", ur: "رَأَيْتُ الْمُدَرِّسَاتُ" },
      { en: "مَرَرْتُ بِالْمُدَرِّسَاتُ", ur: "مَرَرْتُ بِالْمُدَرِّسَاتُ" },
      { en: "جَاءَتِ الْمُدَرِّسَاتِ", ur: "جَاءَتِ الْمُدَرِّسَاتِ" },
    ],
    correct: 0,
  },
  {
    en: "Which statement correctly explains the difference between the Fa'il and Maf'ool Bihi in 'كَتَبَ الطَّالِبُ الدَّرْسَ'?",
    ur: "'كَتَبَ الطَّالِبُ الدَّرْسَ' میں فاعل اور مفعول به کے درمیان درست فرق کون سا ہے؟",
    options: [
      { en: "الطَّالِبُ is the doer and is Marfu'; الدَّرْسَ receives the action and is Mansub", ur: "الطَّالِبُ کام کرنے والا ہے اور مرفوع ہے؛ الدَّرْسَ پر کام واقع ہوا اور وہ منصوب ہے" },
      { en: "الطَّالِبُ receives the action and is Mansub; الدَّرْسَ is the doer", ur: "الطَّالِبُ پر کام واقع ہوا اور وہ منصوب ہے؛ الدَّرْسَ فاعل ہے" },
      { en: "Both are Fa'il", ur: "دونوں فاعل ہیں" },
      { en: "Both are Maf'ool Bihi", ur: "دونوں مفعول به ہیں" },
    ],
    correct: 0,
  },
  {
    en: "Which Arabic sentence correctly means 'What is this? This is a pen.'?",
    ur: "'یہ کیا ہے؟ یہ ایک قلم ہے۔' کا درست عربی ترجمہ کون سا ہے؟",
    options: [
      { en: "مَا هٰذَا؟ هٰذَا قَلَمٌ", ur: "مَا هٰذَا؟ هٰذَا قَلَمٌ" },
      { en: "مَنْ هٰذَا؟ هٰذَا قَلَمٌ", ur: "مَنْ هٰذَا؟ هٰذَا قَلَمٌ" },
      { en: "أَيْنَ هٰذَا؟ هٰذَا قَلَمٌ", ur: "أَيْنَ هٰذَا؟ هٰذَا قَلَمٌ" },
      { en: "مَا ذٰلِكَ؟ ذٰلِكَ كُرْسِيٌّ", ur: "مَا ذٰلِكَ؟ ذٰلِكَ كُرْسِيٌّ" },
    ],
    correct: 0,
  },
  {
    en: "A student says: 'فِي الْبَيْتُ'. Which correction is grammatically required?",
    ur: "ایک طالب علم کہتا ہے: 'فِي الْبَيْتُ'۔ اس کی درستگی کے لیے کیا تبدیلی ضروری ہے؟",
    options: [
      { en: "Change الْبَيْتُ to الْبَيْتِ because it follows فِي", ur: "الْبَيْتُ کو الْبَيْتِ کریں کیونکہ یہ فِي کے بعد آیا ہے" },
      { en: "Change فِي to مِنْ", ur: "فِي کو مِنْ سے بدل دیں" },
      { en: "Change الْبَيْتُ to الْبَيْتَ because it is a Maf'ool", ur: "الْبَيْتُ کو الْبَيْتَ کریں کیونکہ یہ مفعول ہے" },
      { en: "No correction is needed", ur: "کسی تبدیلی کی ضرورت نہیں" },
    ],
    correct: 0,
  },

  // ── BOOK 2 — LECTURES 1-23 (Q16-Q30) ─────────────────────
  {
    en: "Which sentence correctly shows the effect of 'إِنَّ' on the original nominal sentence 'الطَّالِبُ مُجْتَهِدٌ'?",
    ur: "'الطَّالِبُ مُجْتَهِدٌ' پر 'إِنَّ' داخل ہونے کے بعد درست جملہ کون سا ہے؟",
    options: [
      { en: "إِنَّ الطَّالِبَ مُجْتَهِدٌ", ur: "إِنَّ الطَّالِبَ مُجْتَهِدٌ" },
      { en: "إِنَّ الطَّالِبُ مُجْتَهِدًا", ur: "إِنَّ الطَّالِبُ مُجْتَهِدًا" },
      { en: "إِنَّ الطَّالِبِ مُجْتَهِدٌ", ur: "إِنَّ الطَّالِبِ مُجْتَهِدٌ" },
      { en: "إِنَّ الطَّالِبٌ مُجْتَهِدٌ", ur: "إِنَّ الطَّالِبٌ مُجْتَهِدٌ" },
    ],
    correct: 0,
  },
  {
    en: "In 'إِنَّهُ فَصْلٌ كَبِيرٌ', what is the grammatical role of the attached pronoun 'هُ'?",
    ur: "'إِنَّهُ فَصْلٌ كَبِيرٌ' میں متصل ضمیر 'هُ' کا نحوی کردار کیا ہے؟",
    options: [
      { en: "Ismu Inna, in the place of Nasb", ur: "اسمِ اِنَّ، محلِ نصب میں" },
      { en: "Khabaru Inna, Marfu'", ur: "خبرِ اِنَّ، مرفوع" },
      { en: "Maf'ool Bihi", ur: "مفعول به" },
      { en: "Muzaaf Ilaih", ur: "مضاف الیہ" },
    ],
    correct: 0,
  },
  {
    en: "In 'إِنَّ الدَّرْسَ صَعْبٌ', why is 'الدَّرْسَ' Mansub while 'صَعْبٌ' remains Marfu'?",
    ur: "'إِنَّ الدَّرْسَ صَعْبٌ' میں 'الدَّرْسَ' منصوب اور 'صَعْبٌ' مرفوع کیوں ہے؟",
    options: [
      { en: "الدَّرْسَ is Ismu Inna and صَعْبٌ is Khabaru Inna", ur: "الدَّرْسَ اسمِ اِنَّ اور صَعْبٌ خبرِ اِنَّ ہے" },
      { en: "الدَّرْسَ is Khabaru Inna and صَعْبٌ is Ismu Inna", ur: "الدَّرْسَ خبرِ اِنَّ اور صَعْبٌ اسمِ اِنَّ ہے" },
      { en: "Both are Ismu Inna", ur: "دونوں اسمِ اِنَّ ہیں" },
      { en: "Both are Khabaru Inna", ur: "دونوں خبرِ اِنَّ ہیں" },
    ],
    correct: 0,
  },
  {
    en: "Which statement best describes the word 'ذُو'?",
    ur: "'ذُو' کے بارے میں کون سا بیان درست ہے؟",
    options: [
      { en: "It means 'possessor of / one who has'", ur: "اس کا معنی 'صاحبِ / والا' ہے" },
      { en: "It means 'this' as a demonstrative", ur: "اس کا معنی 'یہ' ہے اور یہ اسمِ اشارہ ہے" },
      { en: "It is a Harf Jarr meaning 'with'", ur: "یہ حرفِ جر ہے جس کا معنی 'کے ساتھ' ہے" },
      { en: "It means 'who/which' as a relative pronoun", ur: "اس کا معنی 'جو' ہے اور یہ اسمِ موصول ہے" },
    ],
    correct: 0,
  },
  {
    en: "Which sentence correctly applies the rule of 'لَيْسَ'?",
    ur: "'لَيْسَ' کے اصول کو کون سا جملہ درست طور پر استعمال کرتا ہے؟",
    options: [
      { en: "لَيْسَ مُحَمَّدٌ مُدَرِّسًا", ur: "لَيْسَ مُحَمَّدٌ مُدَرِّسًا" },
      { en: "لَيْسَ مُحَمَّدًا مُدَرِّسٌ", ur: "لَيْسَ مُحَمَّدًا مُدَرِّسٌ" },
      { en: "لَيْسَ مُحَمَّدٍ مُدَرِّسًا", ur: "لَيْسَ مُحَمَّدٍ مُدَرِّسًا" },
      { en: "لَيْسَ مُحَمَّدًا مُدَرِّسًا", ur: "لَيْسَ مُحَمَّدًا مُدَرِّسًا" },
    ],
    correct: 0,
  },
  {
    en: "In 'لَيْسَ مُحَمَّدٌ مُدَرِّسًا', which statement is correct?",
    ur: "'لَيْسَ مُحَمَّدٌ مُدَرِّسًا' میں کون سا بیان درست ہے؟",
    options: [
      { en: "مُحَمَّدٌ is Ismu Laysa and مُدَرِّسًا is Khabaru Laysa", ur: "مُحَمَّدٌ اسمِ لَیس اور مُدَرِّسًا خبرِ لَیس ہے" },
      { en: "مُحَمَّدٌ is Khabaru Laysa and مُدَرِّسًا is Ismu Laysa", ur: "مُحَمَّدٌ خبرِ لَیس اور مُدَرِّسًا اسمِ لَیس ہے" },
      { en: "Both are Ismu Laysa", ur: "دونوں اسمِ لَیس ہیں" },
      { en: "Both are Khabaru Laysa", ur: "دونوں خبرِ لَیس ہیں" },
    ],
    correct: 0,
  },
  {
    en: "Which sentence correctly applies the rule of 'كَانَ'?",
    ur: "'كَانَ' کے اصول کو کون سا جملہ درست طور پر استعمال کرتا ہے؟",
    options: [
      { en: "كَانَ الْبَابُ مَفْتُوحًا", ur: "كَانَ الْبَابُ مَفْتُوحًا" },
      { en: "كَانَ الْبَابَ مَفْتُوحٌ", ur: "كَانَ الْبَابَ مَفْتُوحٌ" },
      { en: "كَانَ الْبَابِ مَفْتُوحًا", ur: "كَانَ الْبَابِ مَفْتُوحًا" },
      { en: "كَانَ الْبَابُ مَفْتُوحٍ", ur: "كَانَ الْبَابُ مَفْتُوحٍ" },
    ],
    correct: 0,
  },
  {
    en: "In 'كَانَ الْبَابُ مَفْتُوحًا', why is 'مَفْتُوحًا' Mansub?",
    ur: "'كَانَ الْبَابُ مَفْتُوحًا' میں 'مَفْتُوحًا' منصوب کیوں ہے؟",
    options: [
      { en: "It is Khabaru Kana", ur: "یہ خبرِ کَان ہے" },
      { en: "It is Ismu Kana", ur: "یہ اسمِ کَان ہے" },
      { en: "It is the Maf'ool Bihi", ur: "یہ مفعول به ہے" },
      { en: "It follows a Harf Jarr", ur: "یہ حرفِ جر کے بعد آیا ہے" },
    ],
    correct: 0,
  },
  {
    en: "Which option correctly describes the علامة رفع of the Five Verbs (الأفعال الخمسة)?",
    ur: "افعالِ خمسہ کی علامتِ رفع کو کون سا جواب درست بیان کرتا ہے؟",
    options: [
      { en: "ثبوت النون — the Nun remains", ur: "ثبوت النون — نون باقی رہتا ہے" },
      { en: "حذف النون — the Nun is removed", ur: "حذف النون — نون حذف ہو جاتا ہے" },
      { en: "الفتحة — Fatha", ur: "الفتحة — فتحہ" },
      { en: "السكون — Sukun", ur: "السكون — سکون" },
    ],
    correct: 0,
  },
  {
    en: "What happens to 'يَكْتُبُونَ' when 'لَمْ' enters the sentence?",
    ur: "'يَكْتُبُونَ' پر 'لَمْ' داخل ہونے سے کیا ہوگا؟",
    options: [
      { en: "لَمْ يَكْتُبُوا — the Nun is dropped", ur: "لَمْ يَكْتُبُوا — نون حذف ہو جاتا ہے" },
      { en: "لَمْ يَكْتُبُونَ — nothing changes", ur: "لَمْ يَكْتُبُونَ — کوئی تبدیلی نہیں ہوتی" },
      { en: "لَمْ يَكْتُبَ — the Waw is dropped", ur: "لَمْ يَكْتُبَ — واو حذف ہو جاتا ہے" },
      { en: "لَمْ يَكْتُبُ — the Nun changes to Dhamma", ur: "لَمْ يَكْتُبُ — نون ضمہ میں بدل جاتا ہے" },
    ],
    correct: 0,
  },
  {
    en: "Which sentence correctly shows the effect of 'لَنْ' on a Five Verb?",
    ur: "'لَنْ' کے افعالِ خمسہ پر اثر کو کون سا جملہ درست ظاہر کرتا ہے؟",
    options: [
      { en: "لَنْ يَكْتُبُوا", ur: "لَنْ يَكْتُبُوا" },
      { en: "لَنْ يَكْتُبُونَ", ur: "لَنْ يَكْتُبُونَ" },
      { en: "لَنْ يَكْتُبْ", ur: "لَنْ يَكْتُبْ" },
      { en: "لَنْ يَكْتُبِ", ur: "لَنْ يَكْتُبِ" },
    ],
    correct: 0,
  },
  {
    en: "Which sentence is a Jumlah Fi'liyyah containing a verb, a Fa'il, and a Maf'ool Bihi?",
    ur: "کون سا جملہ فعلیہ فعل، فاعل اور مفعول به تینوں پر مشتمل ہے؟",
    options: [
      { en: "كَتَبَ الْوَلَدُ الدَّرْسَ", ur: "كَتَبَ الْوَلَدُ الدَّرْسَ" },
      { en: "الْوَلَدُ مُجْتَهِدٌ", ur: "الْوَلَدُ مُجْتَهِدٌ" },
      { en: "هٰذَا بَيْتٌ", ur: "هٰذَا بَيْتٌ" },
      { en: "الطَّالِبُ فِي الْفَصْلِ", ur: "الطَّالِبُ فِي الْفَصْلِ" },
    ],
    correct: 0,
  },
  {
    en: "A student says: 'The Arabic word can only be a noun or a verb.' Which correction is correct?",
    ur: "ایک طالب علم کہتا ہے: 'عربی میں کلمہ صرف اسم یا فعل ہوتا ہے۔' درست اصلاح کیا ہے؟",
    options: [
      { en: "Arabic words are divided into Ism, Fi'l, and Harf", ur: "عربی میں کلمہ اسم، فعل اور حرف تین اقسام پر مشتمل ہوتا ہے" },
      { en: "Arabic words are divided into Mubtada, Khabar, and Fa'il", ur: "عربی میں کلمہ مبتدا، خبر اور فاعل تین اقسام پر مشتمل ہوتا ہے" },
      { en: "Arabic words are divided into Marfu', Mansub, and Majrur", ur: "عربی میں کلمہ مرفوع، منصوب اور مجرور تین اقسام پر مشتمل ہوتا ہے" },
      { en: "Arabic words are divided only into singular and plural", ur: "عربی میں کلمہ صرف واحد اور جمع ہوتا ہے" },
    ],
    correct: 0,
  },
  {
    en: "Which statement about Fi'l al-Amr (فعل الأمر) is correct?",
    ur: "فعلِ امر کے بارے میں کون سا بیان درست ہے؟",
    options: [
      { en: "It is Mabni; for example, اُكْتُبْ is built on Sukun", ur: "یہ مبنی ہوتا ہے؛ مثلاً اُكْتُبْ سکون پر مبنی ہے" },
      { en: "It is always Marfu'", ur: "یہ ہمیشہ مرفوع ہوتا ہے" },
      { en: "It is always Mansub", ur: "یہ ہمیشہ منصوب ہوتا ہے" },
      { en: "It is always Majrur", ur: "یہ ہمیشہ مجرور ہوتا ہے" },
    ],
    correct: 0,
  },
  {
    en: "Which option correctly identifies the Masdar of 'كَتَبَ'?",
    ur: "'كَتَبَ' کا مصدر کون سا ہے؟",
    options: [
      { en: "كِتَابَةٌ", ur: "كِتَابَةٌ" },
      { en: "يَكْتُبُ", ur: "يَكْتُبُ" },
      { en: "كَاتِبٌ", ur: "كَاتِبٌ" },
      { en: "كَتَبَ", ur: "كَتَبَ" },
    ],
    correct: 0,
  },
  {
    en: "In 'يَا عَبْدَ اللهِ', why is 'عَبْدَ' Mansub?",
    ur: "'يَا عَبْدَ اللهِ' میں 'عَبْدَ' منصوب کیوں ہے؟",
    options: [
      { en: "It is a Munaada that is a Muzaaf", ur: "یہ منادی ہے جو مضاف ہے" },
      { en: "It is a Fa'il", ur: "یہ فاعل ہے" },
      { en: "It is a Maf'ool Bihi", ur: "یہ مفعول به ہے" },
      { en: "It comes after a Harf Jarr", ur: "یہ حرفِ جر کے بعد آیا ہے" },
    ],
    correct: 0,
  },
];

// ============================================================
// ADDITIONAL QUESTIONS (10) — added later
// Concepts: Adad & Madud, Ism Mawsul, Damair, Tamyeez
// ============================================================
const additionalQuestionsData = [
  // ── ADAD & MADUD (4) ──────────────────────────────────────
  {
    en: "In 'خَمْسَةُ كُتُبٍ' (five books), why is the counted noun 'كُتُبٍ' Majrur?",
    ur: "'خَمْسَةُ كُتُبٍ' (پانچ کتابیں) میں معدود 'كُتُبٍ' مجرور کیوں ہے؟",
    options: [
      { en: "It follows a Harf Jarr", ur: "یہ حرفِ جر کے بعد آیا ہے" },
      { en: "It is the Fa'il", ur: "یہ فاعل ہے" },
      { en: "It is treated as Muzaaf Ilaih after the numbers 3 to 10, so it is a plural in Jarr", ur: "یہ تین سے دس تک کے اعداد کے بعد مضاف الیہ بنتا ہے، اس لیے جمع مجرور ہے" },
      { en: "It is the Maf'ool Bihi", ur: "یہ مفعول به ہے" },
    ],
    correct: 2,
  },
  {
    en: "Which range of numbers takes its counted noun (معدود) as a single noun in the accusative (Mansub)?",
    ur: "کون سے اعداد اپنے معدود کو واحد حالتِ نصب میں لیتے ہیں؟",
    options: [
      { en: "Numbers 3 to 10", ur: "تین سے دس تک" },
      { en: "Numbers 11 to 99 — e.g. أَحَدَ عَشَرَ كِتَابًا / عِشْرُونَ كِتَابًا", ur: "گیارہ سے ننانوے تک — مثلاً أَحَدَ عَشَرَ كِتَابًا / عِشْرُونَ كِتَابًا" },
      { en: "Numbers 1 to 2 only", ur: "صرف ایک سے دو" },
      { en: "Numbers 100 and above", ur: "سو اور اس سے اوپر" },
    ],
    correct: 1,
  },
  {
    en: "In 'عِشْرُونَ كِتَابًا' (twenty books), what is the grammatical state of the counted noun 'كِتَابًا'?",
    ur: "'عِشْرُونَ كِتَابًا' (بیس کتابیں) میں معدود 'كِتَابًا' کی حالت کیا ہے؟",
    options: [
      { en: "It is Marfu'", ur: "یہ مرفوع ہے" },
      { en: "It is Majrur", ur: "یہ مجرور ہے" },
      { en: "It is a verb", ur: "یہ فعل ہے" },
      { en: "It is Mansub — a singular counted noun after the numbers 11 to 99", ur: "یہ منصوب ہے — گیارہ سے ننانوے کے بعد معدود واحد منصوب ہوتا ہے" },
    ],
    correct: 3,
  },
  {
    en: "Which statement about the numbers 3 to 10 is correct?",
    ur: "تین سے دس تک کے اعداد کے بارے میں کون سا بیان درست ہے؟",
    options: [
      { en: "The number disagrees with the noun's gender, and the counted noun is a plural Majrur", ur: "عدد اسم کی جنس کے خلاف ہوتا ہے، اور معدود جمع مجرور ہوتا ہے" },
      { en: "The number always agrees with the noun in gender", ur: "عدد ہمیشہ اسم کی جنس کے مطابق ہوتا ہے" },
      { en: "The counted noun is always singular", ur: "معدود ہمیشہ واحد ہوتا ہے" },
      { en: "The counted noun is always Mansub", ur: "معدود ہمیشہ منصوب ہوتا ہے" },
    ],
    correct: 0,
  },

  // ── ISM MAWSUL (2) ────────────────────────────────────────
  {
    en: "Which relative pronoun correctly completes 'الرَّجُلُ ... جَاءَ' (the man who came)?",
    ur: "'الرَّجُلُ ... جَاءَ' (وہ آدمی جو آیا) میں کون سا اسمِ موصول درست ہے؟",
    options: [
      { en: "الَّتِي", ur: "الَّتِي" },
      { en: "الَّذِي", ur: "الَّذِي" },
      { en: "الَّذِينَ", ur: "الَّذِينَ" },
      { en: "مَا", ur: "مَا" },
    ],
    correct: 1,
  },
  {
    en: "Which relative pronoun is used for a feminine singular noun like 'الْبِنْتُ'?",
    ur: "مؤنث واحد اسم جیسے 'الْبِنْتُ' کے لیے کون سا اسمِ موصول استعمال ہوتا ہے؟",
    options: [
      { en: "الَّذِينَ", ur: "الَّذِينَ" },
      { en: "الَّذِي", ur: "الَّذِي" },
      { en: "الَّتِي", ur: "الَّتِي" },
      { en: "هٰذِهِ", ur: "هٰذِهِ" },
    ],
    correct: 2,
  },

  // ── DAMAIR (2) ────────────────────────────────────────────
  {
    en: "Which is the correct separate (منفصلة) pronoun for 'they' (masculine)?",
    ur: "جمع مذکر غائب (وہ) کے لیے درست ضمیرِ منفصلہ کون سا ہے؟",
    options: [
      { en: "هُنَّ", ur: "هُنَّ" },
      { en: "هُمَا", ur: "هُمَا" },
      { en: "أَنْتُمْ", ur: "أَنْتُمْ" },
      { en: "هُمْ", ur: "هُمْ" },
    ],
    correct: 3,
  },
  {
    en: "In 'كِتَابُهُ' (his book), what does the attached pronoun 'هُ' indicate?",
    ur: "'كِتَابُهُ' (اس کی کتاب) میں متصل ضمیر 'هُ' کس چیز کو ظاہر کرتا ہے؟",
    options: [
      { en: "Third person masculine singular — 'his'", ur: "غائب مذکر واحد — 'اس کی'" },
      { en: "First person — 'my'", ur: "متکلم — 'میری'" },
      { en: "Second person masculine — 'your'", ur: "حاضر مذکر — 'آپ کی'" },
      { en: "Third person feminine — 'her'", ur: "غائب مؤنث — 'اس کی'" },
    ],
    correct: 0,
  },

  // ── TAMYEEZ (2) ───────────────────────────────────────────
  {
    en: "In 'أَحَدَ عَشَرَ كَأْسًا' (eleven cups), the word 'كَأْسًا' is grammatically called what?",
    ur: "'أَحَدَ عَشَرَ كَأْسًا' (گیارہ پیالے) میں 'كَأْسًا' کو نحوی طور پر کیا کہتے ہیں؟",
    options: [
      { en: "Mubtada", ur: "مبتدا" },
      { en: "Tamyeez — the accusative specifier that clarifies the number", ur: "تمییز — عدد کو واضح کرنے والا منصوب اسم" },
      { en: "Fa'il", ur: "فاعل" },
      { en: "Khabar", ur: "خبر" },
    ],
    correct: 1,
  },
  {
    en: "When a counted noun acts as Tamyeez (after numbers 11 to 99), in which case is it?",
    ur: "جب معدود تمییز بن کر آئے (اعداد 11 سے 99 کے بعد)، تو وہ کس حالت میں ہوتا ہے؟",
    options: [
      { en: "Marfu'", ur: "مرفوع" },
      { en: "Majrur", ur: "مجرور" },
      { en: "Mansub (accusative)", ur: "منصوب" },
      { en: "Mabni", ur: "مبنی" },
    ],
    correct: 2,
  },
];
async function run() {
  try {
    // 1. Find Book 2 course and its Lecture 23
    const [course] = await sql`SELECT id FROM courses WHERE name = 'Madina Arabic Book 2' LIMIT 1`;
    if (!course) throw new Error('Book 2 course not found');

    const [lecture] = await sql`
      SELECT id FROM lectures
      WHERE course_id = ${course.id} AND order_index = 23
      LIMIT 1
    `;
    if (!lecture) throw new Error('Book 2 Lecture 23 not found');

    // 2. Create (or get) the Mid Term quiz
    let [quiz] = await sql`
      SELECT * FROM quizzes
      WHERE lecture_id = ${lecture.id} AND quiz_type = 'Mid Term'
      LIMIT 1
    `;

    if (quiz) {
      console.log(`Mid Term quiz already exists (ID ${quiz.id}). Skipping creation.`);
    } else {
      const [newQuiz] = await sql`
        INSERT INTO quizzes (lecture_id, title, quiz_type, version)
        VALUES (${lecture.id}, 'Book 1 & Book 2 - Mid Term Quiz', 'Mid Term', '1')
        RETURNING id
      `;
      quiz = newQuiz;
      console.log(`Created Mid Term quiz: ID ${quiz.id}`);
    }

    // 3. Insert questions (skip duplicates by question_en)
    let inserted = 0;
    let skipped = 0;
    for (const q of questionsData) {
      const existing = await sql`
        SELECT id FROM questions WHERE quiz_id = ${quiz.id} AND question_en = ${q.en} LIMIT 1
      `;
      if (existing.length > 0) {
        skipped++;
        continue;
      }
      await sql`
        INSERT INTO questions (quiz_id, question_en, question_ur, options, correct_option_index)
        VALUES (${quiz.id}, ${q.en}, ${q.ur}, ${JSON.stringify(q.options)}, ${q.correct})
      `;
      inserted++;
    }

    console.log(`\nDone. Inserted ${inserted} questions, skipped ${skipped} duplicates.`);
    console.log(`Mid Term quiz ID: ${quiz.id}, lecture_id: ${lecture.id}`);
  } catch (err) {
    console.error('Failed:', err);
  }
}

run();
