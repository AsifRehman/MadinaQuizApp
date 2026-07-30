import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

// ============================================================
// Version 2 Quiz Data — Madina Book 1 (Dr. Abdul Raheem)
// Strictly from lessons and their exercises
// ============================================================

const v2Data = [
  // ─────────────────────────────────────────────────────────
  // LECTURE 1 — هٰذَا + masculine indefinite nouns
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 1,
    questions: [
      {
        en: "What grammatical type is 'Baitun' (بَيْتٌ)?",
        ur: "'بَيْتٌ' کس صنف کا لفظ ہے؟",
        options: [
          { en: "Ism (Noun)", ur: "اِسم (اسم)" },
          { en: "Fi'l (Verb)", ur: "فِعْل (فعل)" },
          { en: "Harf (Particle)", ur: "حَرف (حرف)" },
          { en: "Sifat (Adjective)", ur: "صفت" },
        ],
        correct: 0,
      },
      {
        en: "The ending 'un' (ٌ) on a noun indicates what?",
        ur: "اسم کے آخر میں 'ٌ' (تنوین) کا کیا مطلب ہے؟",
        options: [
          { en: "Definite noun", ur: "معرفہ اسم" },
          { en: "Indefinite noun (Tanween)", ur: "نکرہ اسم (تنوین)" },
          { en: "Plural noun", ur: "جمع" },
          { en: "Feminine noun", ur: "مؤنث اسم" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Haza kitabun'",
        ur: "ترجمہ کریں: 'هٰذَا كِتَابٌ'",
        options: [
          { en: "That is a book", ur: "وہ ایک کتاب ہے" },
          { en: "This is a pen", ur: "یہ ایک قلم ہے" },
          { en: "This is a book", ur: "یہ ایک کتاب ہے" },
          { en: "This is a chair", ur: "یہ ایک کرسی ہے" },
        ],
        correct: 2,
      },
      {
        en: "Which word means 'a door'?",
        ur: "کون سا لفظ 'دروازہ' کے معنی میں ہے؟",
        options: [
          { en: "Baitun (بَيْتٌ)", ur: "بَيْتٌ" },
          { en: "Babun (بَابٌ)", ur: "بَابٌ" },
          { en: "Qalamun (قَلَمٌ)", ur: "قَلَمٌ" },
          { en: "Faslun (فَصْلٌ)", ur: "فَصْلٌ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Ma haza? Haza kursiyyun.'",
        ur: "ترجمہ: 'مَا هٰذَا؟ هٰذَا كُرْسِيٌّ'",
        options: [
          { en: "What is this? This is a desk.", ur: "یہ کیا ہے؟ یہ ایک میز ہے۔" },
          { en: "What is that? That is a chair.", ur: "وہ کیا ہے؟ وہ ایک کرسی ہے۔" },
          { en: "What is this? This is a chair.", ur: "یہ کیا ہے؟ یہ ایک کرسی ہے۔" },
          { en: "Who is this? This is a student.", ur: "یہ کون ہے؟ یہ ایک طالب علم ہے۔" },
        ],
        correct: 2,
      },
      {
        en: "Which word means 'a classroom / class'?",
        ur: "کون سا لفظ 'کلاس / جماعت' کے معنی میں ہے؟",
        options: [
          { en: "Maktabun (مَكْتَبٌ)", ur: "مَكْتَبٌ" },
          { en: "Faslun (فَصْلٌ)", ur: "فَصْلٌ" },
          { en: "Babun (بَابٌ)", ur: "بَابٌ" },
          { en: "Baitun (بَيْتٌ)", ur: "بَيْتٌ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Haza masjidun'",
        ur: "ترجمہ: 'هٰذَا مَسْجِدٌ'",
        options: [
          { en: "That is a mosque", ur: "وہ ایک مسجد ہے" },
          { en: "This is a school", ur: "یہ ایک اسکول ہے" },
          { en: "This is a mosque", ur: "یہ ایک مسجد ہے" },
          { en: "This is a house", ur: "یہ ایک گھر ہے" },
        ],
        correct: 2,
      },
      {
        en: "In Madina Book 1, 'هٰذَا' is used for which type of noun?",
        ur: "مدینہ کتاب 1 میں 'هٰذَا' کس قسم کے اسم کے ساتھ آتا ہے؟",
        options: [
          { en: "Masculine, near", ur: "مذکر، قریب" },
          { en: "Feminine, near", ur: "مؤنث، قریب" },
          { en: "Masculine, far", ur: "مذکر، دور" },
          { en: "Feminine, far", ur: "مؤنث، دور" },
        ],
        correct: 0,
      },
      {
        en: "Which word means 'an office / desk'?",
        ur: "کون سا لفظ 'دفتر / میز' کے معنی میں ہے؟",
        options: [
          { en: "Kursiyyun (كُرْسِيٌّ)", ur: "كُرْسِيٌّ" },
          { en: "Kitabun (كِتَابٌ)", ur: "كِتَابٌ" },
          { en: "Maktabun (مَكْتَبٌ)", ur: "مَكْتَبٌ" },
          { en: "Faslun (فَصْلٌ)", ur: "فَصْلٌ" },
        ],
        correct: 2,
      },
      {
        en: "Which question word means 'What?'",
        ur: "کون سا سوالیہ لفظ 'کیا؟' کے معنی میں ہے؟",
        options: [
          { en: "Man (مَنْ)", ur: "مَنْ" },
          { en: "Ayna (أَيْنَ)", ur: "أَيْنَ" },
          { en: "Ma (مَا)", ur: "مَا" },
          { en: "Hal (هَلْ)", ur: "هَلْ" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Haza qalamun'",
        ur: "ترجمہ: 'هٰذَا قَلَمٌ'",
        options: [
          { en: "That is a book", ur: "وہ ایک کتاب ہے" },
          { en: "This is a pen", ur: "یہ ایک قلم ہے" },
          { en: "This is a desk", ur: "یہ ایک میز ہے" },
          { en: "This is a key", ur: "یہ ایک چابی ہے" },
        ],
        correct: 1,
      },
      {
        en: "What type of sentence is 'Haza baitun'?",
        ur: "'هٰذَا بَيْتٌ' کس قسم کا جملہ ہے؟",
        options: [
          { en: "Verbal sentence (Jumlah Fi'liyyah)", ur: "جملہ فعلیہ" },
          { en: "Nominal sentence (Jumlah Ismiyyah)", ur: "جملہ اسمیہ" },
          { en: "Question sentence", ur: "سوالیہ جملہ" },
          { en: "Command sentence", ur: "حکمیہ جملہ" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 2 — ذٰلِكَ + vocabulary (far, masculine)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 2,
    questions: [
      {
        en: "Which Arabic word means 'That is' (masculine, far)?",
        ur: "مذکر دور کے لیے 'وہ ہے' کا عربی لفظ کیا ہے؟",
        options: [
          { en: "Haza (هٰذَا)", ur: "هٰذَا" },
          { en: "Hazihi (هٰذِهِ)", ur: "هٰذِهِ" },
          { en: "Zalika (ذٰلِكَ)", ur: "ذٰلِكَ" },
          { en: "Tilka (تِلْكَ)", ur: "تِلْكَ" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Zalika kalbun'",
        ur: "ترجمہ: 'ذٰلِكَ كَلْبٌ'",
        options: [
          { en: "This is a dog", ur: "یہ ایک کتا ہے" },
          { en: "That is a donkey", ur: "وہ ایک گدھا ہے" },
          { en: "That is a dog", ur: "وہ ایک کتا ہے" },
          { en: "That is a horse", ur: "وہ ایک گھوڑا ہے" },
        ],
        correct: 2,
      },
      {
        en: "Which word means 'a key'?",
        ur: "کون سا لفظ 'چابی' کے معنی میں ہے؟",
        options: [
          { en: "Baabun (بَابٌ)", ur: "بَابٌ" },
          { en: "Miftahun (مِفْتَاحٌ)", ur: "مِفْتَاحٌ" },
          { en: "Kitabun (كِتَابٌ)", ur: "كِتَابٌ" },
          { en: "Hisanun (حِصَانٌ)", ur: "حِصَانٌ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Ma zalika? Zalika himaarun.'",
        ur: "ترجمہ: 'مَا ذٰلِكَ؟ ذٰلِكَ حِمَارٌ'",
        options: [
          { en: "What is this? This is a horse.", ur: "یہ کیا ہے؟ یہ گھوڑا ہے۔" },
          { en: "What is that? That is a donkey.", ur: "وہ کیا ہے؟ وہ گدھا ہے۔" },
          { en: "What is that? That is a dog.", ur: "وہ کیا ہے؟ وہ کتا ہے۔" },
          { en: "What is this? This is an imam.", ur: "یہ کیا ہے؟ یہ امام ہے۔" },
        ],
        correct: 1,
      },
      {
        en: "Which word means 'a star'?",
        ur: "کون سا لفظ 'ستارہ' کے معنی میں ہے؟",
        options: [
          { en: "Qamarun (قَمَرٌ)", ur: "قَمَرٌ" },
          { en: "Shamsun (شَمْسٌ)", ur: "شَمْسٌ" },
          { en: "Najmun (نَجْمٌ)", ur: "نَجْمٌ" },
          { en: "Bahroun (بَحْرٌ)", ur: "بَحْرٌ" },
        ],
        correct: 2,
      },
      {
        en: "In 'Haza baitun wa zalika masjidun', what does 'wa' mean?",
        ur: "'هٰذَا بَيْتٌ وَذٰلِكَ مَسْجِدٌ' میں 'وَ' کا کیا مطلب ہے؟",
        options: [
          { en: "But", ur: "لیکن" },
          { en: "And", ur: "اور" },
          { en: "Or", ur: "یا" },
          { en: "So", ur: "پس" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Zalika mudarrisun'",
        ur: "ترجمہ: 'ذٰلِكَ مُدَرِّسٌ'",
        options: [
          { en: "This is a teacher", ur: "یہ ایک استاد ہے" },
          { en: "That is a student", ur: "وہ ایک طالب علم ہے" },
          { en: "That is a teacher", ur: "وہ ایک استاد ہے" },
          { en: "That is a doctor", ur: "وہ ایک ڈاکٹر ہے" },
        ],
        correct: 2,
      },
      {
        en: "Which word means 'a boy / child'?",
        ur: "کون سا لفظ 'لڑکا / بچہ' کے معنی میں ہے؟",
        options: [
          { en: "Rajulun (رَجُلٌ)", ur: "رَجُلٌ" },
          { en: "Waladun (وَلَدٌ)", ur: "وَلَدٌ" },
          { en: "Imamun (إِمَامٌ)", ur: "إِمَامٌ" },
          { en: "Tabibun (طَبِيبٌ)", ur: "طَبِيبٌ" },
        ],
        correct: 1,
      },
      {
        en: "True or False: 'Haza' and 'Zalika' are both used for masculine nouns.",
        ur: "صحیح یا غلط: 'هٰذَا' اور 'ذٰلِكَ' دونوں مذکر اسموں کے لیے ہیں۔",
        options: [
          { en: "True", ur: "صحیح" },
          { en: "False", ur: "غلط" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'Zalika imamun'",
        ur: "ترجمہ: 'ذٰلِكَ إِمَامٌ'",
        options: [
          { en: "This is an imam", ur: "یہ ایک امام ہے" },
          { en: "That is an imam", ur: "وہ ایک امام ہے" },
          { en: "That is a student", ur: "وہ ایک طالب علم ہے" },
          { en: "That is a teacher", ur: "وہ ایک استاد ہے" },
        ],
        correct: 1,
      },
      {
        en: "What question word asks 'Who?'",
        ur: "کون سا سوالیہ لفظ 'کون؟' کے معنی میں ہے؟",
        options: [
          { en: "Ma (مَا)", ur: "مَا" },
          { en: "Man (مَنْ)", ur: "مَنْ" },
          { en: "Kayfa (كَيْفَ)", ur: "كَيْفَ" },
          { en: "Ayna (أَيْنَ)", ur: "أَيْنَ" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 3 — Definite Article (اَلْ) + adjectives
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 3,
    questions: [
      {
        en: "What is the function of 'Al' (اَلْ) in Arabic?",
        ur: "'اَلْ' عربی میں کیا کام کرتا ہے؟",
        options: [
          { en: "It makes the noun indefinite", ur: "اسم کو نکرہ بناتا ہے" },
          { en: "It makes the noun definite", ur: "اسم کو معرفہ بناتا ہے" },
          { en: "It makes the noun feminine", ur: "اسم کو مؤنث بناتا ہے" },
          { en: "It makes the noun plural", ur: "اسم کو جمع بناتا ہے" },
        ],
        correct: 1,
      },
      {
        en: "What happens to 'Tanween' when 'Al' is added?",
        ur: "جب 'اَلْ' لگایا جائے تو تنوین کا کیا ہوتا ہے؟",
        options: [
          { en: "It stays", ur: "رہتی ہے" },
          { en: "It doubles", ur: "دوگنی ہو جاتی ہے" },
          { en: "It is removed", ur: "ہٹا دی جاتی ہے" },
          { en: "It moves to the end", ur: "آخر میں چلی جاتی ہے" },
        ],
        correct: 2,
      },
      {
        en: "What is 'Qalamun' (قَلَمٌ) with 'Al' added?",
        ur: "'قَلَمٌ' پر 'اَلْ' لگانے کے بعد کیا بنتا ہے؟",
        options: [
          { en: "Al-Qalamun", ur: "اَلْقَلَمُنْ" },
          { en: "Al-Qalamu", ur: "اَلْقَلَمُ" },
          { en: "Qalamu-Al", ur: "قَلَمُ الْ" },
          { en: "Al-Qalami", ur: "اَلْقَلَمِ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Al-waladu kabeerun'",
        ur: "ترجمہ: 'اَلْوَلَدُ كَبِيرٌ'",
        options: [
          { en: "The boy is small", ur: "لڑکا چھوٹا ہے" },
          { en: "A boy is big", ur: "ایک لڑکا بڑا ہے" },
          { en: "The boy is big", ur: "لڑکا بڑا ہے" },
          { en: "The man is old", ur: "آدمی بوڑھا ہے" },
        ],
        correct: 2,
      },
      {
        en: "What is the Arabic word for 'new'?",
        ur: "'نیا' کا عربی لفظ کیا ہے؟",
        options: [
          { en: "Qadeemun (قَدِيمٌ)", ur: "قَدِيمٌ" },
          { en: "Jadeedun (جَدِيدٌ)", ur: "جَدِيدٌ" },
          { en: "Jameelun (جَمِيلٌ)", ur: "جَمِيلٌ" },
          { en: "Maksurun (مَكْسُورٌ)", ur: "مَكْسُورٌ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Al-babul maftoohun'",
        ur: "ترجمہ: 'اَلْبَابُ مَفْتُوحٌ'",
        options: [
          { en: "The door is broken", ur: "دروازہ ٹوٹا ہوا ہے" },
          { en: "The door is closed", ur: "دروازہ بند ہے" },
          { en: "The door is open", ur: "دروازہ کھلا ہے" },
          { en: "The new door", ur: "نیا دروازہ" },
        ],
        correct: 2,
      },
      {
        en: "What does 'Jameelun' (جَمِيلٌ) mean?",
        ur: "'جَمِيلٌ' کا کیا مطلب ہے؟",
        options: [
          { en: "Ugly", ur: "بدصورت" },
          { en: "Beautiful", ur: "خوبصورت" },
          { en: "Big", ur: "بڑا" },
          { en: "Broken", ur: "ٹوٹا ہوا" },
        ],
        correct: 1,
      },
      {
        en: "Which word means 'old' (as in an old object)?",
        ur: "کون سا لفظ 'پرانا' (چیز) کے معنی میں ہے؟",
        options: [
          { en: "Jadeedun (جَدِيدٌ)", ur: "جَدِيدٌ" },
          { en: "Kabeerun (كَبِيرٌ)", ur: "كَبِيرٌ" },
          { en: "Qadeemun (قَدِيمٌ)", ur: "قَدِيمٌ" },
          { en: "Sagheerun (صَغِيرٌ)", ur: "صَغِيرٌ" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Al-kitabu jadeedun'",
        ur: "ترجمہ: 'اَلْكِتَابُ جَدِيدٌ'",
        options: [
          { en: "A book is new", ur: "ایک کتاب نئی ہے" },
          { en: "The book is old", ur: "کتاب پرانی ہے" },
          { en: "The book is new", ur: "کتاب نئی ہے" },
          { en: "The book is beautiful", ur: "کتاب خوبصورت ہے" },
        ],
        correct: 2,
      },
      {
        en: "What does 'Maftoohun' (مَفْتُوحٌ) mean?",
        ur: "'مَفْتُوحٌ' کا کیا مطلب ہے؟",
        options: [
          { en: "Closed", ur: "بند" },
          { en: "Broken", ur: "ٹوٹا ہوا" },
          { en: "Open", ur: "کھلا" },
          { en: "New", ur: "نیا" },
        ],
        correct: 2,
      },
      {
        en: "Is 'Maksurun' (مَكْسُورٌ) a noun or an adjective?",
        ur: "'مَكْسُورٌ' اسم ہے یا صفت؟",
        options: [
          { en: "Noun", ur: "اسم" },
          { en: "Adjective", ur: "صفت" },
          { en: "Verb", ur: "فعل" },
          { en: "Particle", ur: "حرف" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Al-babul maksurun'",
        ur: "ترجمہ: 'اَلْبَابُ مَكْسُورٌ'",
        options: [
          { en: "The door is open", ur: "دروازہ کھلا ہے" },
          { en: "The door is broken", ur: "دروازہ ٹوٹا ہوا ہے" },
          { en: "The door is new", ur: "دروازہ نیا ہے" },
          { en: "A broken door", ur: "ایک ٹوٹا ہوا دروازہ" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 4 — Prepositions (فِي، عَلَى، مِنْ، إِلَى) + أَيْنَ
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 4,
    questions: [
      {
        en: "Which preposition means 'In'?",
        ur: "کون سا حرف جر 'میں' کے معنی میں ہے؟",
        options: [
          { en: "Ala (عَلَى)", ur: "عَلَى" },
          { en: "Min (مِنْ)", ur: "مِنْ" },
          { en: "Fi (فِي)", ur: "فِي" },
          { en: "Ila (إِلَى)", ur: "إِلَى" },
        ],
        correct: 2,
      },
      {
        en: "Which preposition means 'On'?",
        ur: "کون سا حرف جر 'پر / اوپر' کے معنی میں ہے؟",
        options: [
          { en: "Fi (فِي)", ur: "فِي" },
          { en: "Min (مِنْ)", ur: "مِنْ" },
          { en: "Ala (عَلَى)", ur: "عَلَى" },
          { en: "Ila (إِلَى)", ur: "إِلَى" },
        ],
        correct: 2,
      },
      {
        en: "Which preposition means 'From'?",
        ur: "کون سا حرف جر 'سے' کے معنی میں ہے (نکلنا)؟",
        options: [
          { en: "Ala (عَلَى)", ur: "عَلَى" },
          { en: "Min (مِنْ)", ur: "مِنْ" },
          { en: "Fi (فِي)", ur: "فِي" },
          { en: "Ila (إِلَى)", ur: "إِلَى" },
        ],
        correct: 1,
      },
      {
        en: "Which preposition means 'To / Towards'?",
        ur: "کون سا حرف جر 'کی طرف / تک' کے معنی میں ہے؟",
        options: [
          { en: "Min (مِنْ)", ur: "مِنْ" },
          { en: "Fi (فِي)", ur: "فِي" },
          { en: "Ala (عَلَى)", ur: "عَلَى" },
          { en: "Ila (إِلَى)", ur: "إِلَى" },
        ],
        correct: 3,
      },
      {
        en: "What case does a noun take after a preposition (Harf Jarr)?",
        ur: "حرف جر کے بعد آنے والا اسم کس حالت میں ہوتا ہے؟",
        options: [
          { en: "Marfu' (Nominative)", ur: "مرفوع" },
          { en: "Mansoob (Accusative)", ur: "منصوب" },
          { en: "Majroor (Genitive)", ur: "مجرور" },
          { en: "Jazm", ur: "جزم" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Al-kitabu alal maktabi'",
        ur: "ترجمہ: 'اَلْكِتَابُ عَلَى الْمَكْتَبِ'",
        options: [
          { en: "The book is in the desk", ur: "کتاب میز کے اندر ہے" },
          { en: "The book is on the desk", ur: "کتاب میز پر ہے" },
          { en: "The book is under the desk", ur: "کتاب میز کے نیچے ہے" },
          { en: "The pen is on the desk", ur: "قلم میز پر ہے" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Ayna al-waladu?'",
        ur: "ترجمہ: 'أَيْنَ الْوَلَدُ؟'",
        options: [
          { en: "Who is the boy?", ur: "لڑکا کون ہے؟" },
          { en: "What is the boy?", ur: "لڑکا کیا ہے؟" },
          { en: "Where is the boy?", ur: "لڑکا کہاں ہے؟" },
          { en: "Is the boy here?", ur: "کیا لڑکا یہاں ہے؟" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Al-waladu fil masjidi'",
        ur: "ترجمہ: 'اَلْوَلَدُ فِي الْمَسْجِدِ'",
        options: [
          { en: "The boy is at the school", ur: "لڑکا اسکول میں ہے" },
          { en: "The boy is on the mosque", ur: "لڑکا مسجد پر ہے" },
          { en: "The boy is in the mosque", ur: "لڑکا مسجد میں ہے" },
          { en: "A boy is in the mosque", ur: "ایک لڑکا مسجد میں ہے" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Min ayna anta?'",
        ur: "ترجمہ: 'مِنْ أَيْنَ أَنْتَ؟'",
        options: [
          { en: "Where are you going?", ur: "تم کہاں جا رہے ہو؟" },
          { en: "Who are you from?", ur: "تم کس کے ہو؟" },
          { en: "Where are you from?", ur: "تم کہاں سے ہو؟" },
          { en: "Why are you here?", ur: "تم یہاں کیوں ہو؟" },
        ],
        correct: 2,
      },
      {
        en: "When 'Al' follows 'Min', it combines to become:",
        ur: "جب 'مِنْ' کے بعد 'الْ' آئے تو وہ مل کر کیا بنتے ہیں؟",
        options: [
          { en: "Min-al", ur: "مِنْ الْ" },
          { en: "Minal (مِنَ الْ)", ur: "مِنَ الْ" },
          { en: "Minil", ur: "مِنِ الْ" },
          { en: "No change", ur: "کوئی تبدیلی نہیں" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Al-qalamu alal kursiyyi'",
        ur: "ترجمہ: 'اَلْقَلَمُ عَلَى الْكُرْسِيِّ'",
        options: [
          { en: "The pen is in the chair", ur: "قلم کرسی میں ہے" },
          { en: "The pen is on the chair", ur: "قلم کرسی پر ہے" },
          { en: "The book is on the chair", ur: "کتاب کرسی پر ہے" },
          { en: "The pen is under the chair", ur: "قلم کرسی کے نیچے ہے" },
        ],
        correct: 1,
      },
      {
        en: "What does 'Hunaka' (هُنَاكَ) mean?",
        ur: "'هُنَاكَ' کا کیا مطلب ہے؟",
        options: [
          { en: "Here", ur: "یہاں" },
          { en: "There", ur: "وہاں" },
          { en: "Nearby", ur: "قریب" },
          { en: "Far", ur: "دور" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 5 — Idafah (مضاف / مضاف إليه)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 5,
    questions: [
      {
        en: "In Idhafa, which word is the 'Mudaaf' (possessor's thing)?",
        ur: "اضافہ میں 'مضاف' کون سا لفظ ہوتا ہے؟",
        options: [
          { en: "The second noun (owner)", ur: "دوسرا اسم (مالک)" },
          { en: "The first noun (owned thing)", ur: "پہلا اسم (ملکیت)" },
          { en: "The verb", ur: "فعل" },
          { en: "The adjective", ur: "صفت" },
        ],
        correct: 1,
      },
      {
        en: "In Idhafa, which word is the 'Mudaaf Ilayhi' (owner)?",
        ur: "اضافہ میں 'مضاف إليه' کون سا لفظ ہوتا ہے؟",
        options: [
          { en: "The first noun", ur: "پہلا اسم" },
          { en: "The adjective", ur: "صفت" },
          { en: "The second noun", ur: "دوسرا اسم" },
          { en: "The verb", ur: "فعل" },
        ],
        correct: 2,
      },
      {
        en: "In 'Kitabu Muhammadin', what case is 'Muhammadin'?",
        ur: "'كِتَابُ مُحَمَّدٍ' میں 'مُحَمَّدٍ' کس حالت میں ہے؟",
        options: [
          { en: "Marfu' (ضمہ)", ur: "مرفوع" },
          { en: "Mansoob (فتحہ)", ur: "منصوب" },
          { en: "Majroor (کسرہ)", ur: "مجرور" },
          { en: "No change", ur: "کوئی تبدیلی نہیں" },
        ],
        correct: 2,
      },
      {
        en: "Can the Mudaaf have 'Al' or Tanween?",
        ur: "کیا مضاف پر 'اَلْ' یا تنوین آ سکتی ہے؟",
        options: [
          { en: "Yes, always", ur: "ہاں، ہمیشہ" },
          { en: "No, neither can appear", ur: "نہیں، دونوں نہیں آ سکتیں" },
          { en: "Only Al is allowed", ur: "صرف اَلْ آ سکتا ہے" },
          { en: "Only Tanween is allowed", ur: "صرف تنوین آ سکتی ہے" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Babul baiti'",
        ur: "ترجمہ: 'بَابُ الْبَيْتِ'",
        options: [
          { en: "The key of the house", ur: "گھر کی چابی" },
          { en: "The window of the house", ur: "گھر کی کھڑکی" },
          { en: "The door of the house", ur: "گھر کا دروازہ" },
          { en: "The roof of the house", ur: "گھر کی چھت" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Miftahu al-baabi'",
        ur: "ترجمہ: 'مِفْتَاحُ الْبَابِ'",
        options: [
          { en: "The key of the door", ur: "دروازے کی چابی" },
          { en: "The door of the key", ur: "چابی کا دروازہ" },
          { en: "The key of the house", ur: "گھر کی چابی" },
          { en: "The lock of the door", ur: "دروازے کا تالہ" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'Qalamu man haza?'",
        ur: "ترجمہ: 'قَلَمُ مَنْ هٰذَا؟'",
        options: [
          { en: "What pen is this?", ur: "یہ کیسا قلم ہے؟" },
          { en: "Where is the pen?", ur: "قلم کہاں ہے؟" },
          { en: "Whose pen is this?", ur: "یہ کس کا قلم ہے؟" },
          { en: "Is this a pen?", ur: "کیا یہ قلم ہے؟" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Ibnu Khalid'",
        ur: "ترجمہ: 'اِبْنُ خَالِدٍ'",
        options: [
          { en: "Khalid's father", ur: "خالد کے والد" },
          { en: "Khalid's brother", ur: "خالید کا بھائی" },
          { en: "Khalid's son", ur: "خالد کا بیٹا" },
          { en: "Khalid's uncle", ur: "خالد کے چاچا" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Kitabu al-mudarrisi'",
        ur: "ترجمہ: 'كِتَابُ الْمُدَرِّسِ'",
        options: [
          { en: "The teacher's pen", ur: "استاد کا قلم" },
          { en: "The student's book", ur: "طالب علم کی کتاب" },
          { en: "The teacher's book", ur: "استاد کی کتاب" },
          { en: "The book of the school", ur: "اسکول کی کتاب" },
        ],
        correct: 2,
      },
      {
        en: "What does 'Abun' (أَبٌ) mean?",
        ur: "'أَبٌ' کا کیا مطلب ہے؟",
        options: [
          { en: "Son", ur: "بیٹا" },
          { en: "Brother", ur: "بھائی" },
          { en: "Father", ur: "والد / باپ" },
          { en: "Uncle", ur: "چاچا" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Ukhtu Hamidin'",
        ur: "ترجمہ: 'أُخْتُ حَامِدٍ'",
        options: [
          { en: "Hamid's daughter", ur: "حامد کی بیٹی" },
          { en: "Hamid's sister", ur: "حامد کی بہن" },
          { en: "Hamid's mother", ur: "حامد کی ماں" },
          { en: "Hamid's aunt", ur: "حامد کی خالہ" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 6 — Feminine nouns (مؤنث), هٰذِهِ, تِلْكَ, حرف لِ
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 6,
    questions: [
      {
        en: "What is the feminine demonstrative for 'This is' (near)?",
        ur: "قریب کے لیے مؤنث اشارہ 'یہ ہے' کیا ہے؟",
        options: [
          { en: "Haza (هٰذَا)", ur: "هٰذَا" },
          { en: "Hazihi (هٰذِهِ)", ur: "هٰذِهِ" },
          { en: "Zalika (ذٰلِكَ)", ur: "ذٰلِكَ" },
          { en: "Tilka (تِلْكَ)", ur: "تِلْكَ" },
        ],
        correct: 1,
      },
      {
        en: "What is the feminine demonstrative for 'That is' (far)?",
        ur: "دور کے لیے مؤنث اشارہ 'وہ ہے' کیا ہے؟",
        options: [
          { en: "Hazihi (هٰذِهِ)", ur: "هٰذِهِ" },
          { en: "Haza (هٰذَا)", ur: "هٰذَا" },
          { en: "Tilka (تِلْكَ)", ur: "تِلْكَ" },
          { en: "Zalika (ذٰلِكَ)", ur: "ذٰلِكَ" },
        ],
        correct: 2,
      },
      {
        en: "Which ending typically marks a feminine noun in Arabic?",
        ur: "عربی میں مؤنث اسم کی عام پہچان کیا ہے؟",
        options: [
          { en: "Un (ٌ) at the end", ur: "آخر میں 'ٌ'" },
          { en: "Ta Marboota (ة) at the end", ur: "آخر میں 'ة' (تاء مربوطہ)" },
          { en: "Al at the beginning", ur: "شروع میں 'اَلْ'" },
          { en: "Waw at the end", ur: "آخر میں 'و'" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Hazihi sayyaaratun'",
        ur: "ترجمہ: 'هٰذِهِ سَيَّارَةٌ'",
        options: [
          { en: "That is a car", ur: "وہ ایک گاڑی ہے" },
          { en: "This is a motorcycle", ur: "یہ ایک موٹر سائیکل ہے" },
          { en: "This is a car", ur: "یہ ایک گاڑی ہے" },
          { en: "This is a bus", ur: "یہ ایک بس ہے" },
        ],
        correct: 2,
      },
      {
        en: "What does 'Li' (لِ) mean as a preposition?",
        ur: "'لِ' بطور حرف جر کیا معنی رکھتا ہے؟",
        options: [
          { en: "From", ur: "سے" },
          { en: "In", ur: "میں" },
          { en: "For / Belonging to", ur: "کے لیے / کا/کی/کے" },
          { en: "On", ur: "پر" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Haza li-Yaasirin'",
        ur: "ترجمہ: 'هٰذَا لِيَاسِرٍ'",
        options: [
          { en: "This is from Yasir", ur: "یہ یاسر کی طرف سے ہے" },
          { en: "This is for Yasir / This belongs to Yasir", ur: "یہ یاسر کا ہے" },
          { en: "This is near Yasir", ur: "یہ یاسر کے قریب ہے" },
          { en: "That is Yasir's", ur: "وہ یاسر کا ہے" },
        ],
        correct: 1,
      },
      {
        en: "Is 'Shamsun' (شَمْسٌ - sun) masculine or feminine in Arabic?",
        ur: "'شَمْسٌ' (سورج) عربی میں مذکر ہے یا مؤنث؟",
        options: [
          { en: "Masculine", ur: "مذکر" },
          { en: "Feminine", ur: "مؤنث" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Hazihi naafidhah'",
        ur: "ترجمہ: 'هٰذِهِ نَافِذَةٌ'",
        options: [
          { en: "This is a door", ur: "یہ ایک دروازہ ہے" },
          { en: "That is a window", ur: "وہ ایک کھڑکی ہے" },
          { en: "This is a window", ur: "یہ ایک کھڑکی ہے" },
          { en: "This is a wall", ur: "یہ ایک دیوار ہے" },
        ],
        correct: 2,
      },
      {
        en: "Which Arabic word means 'a woman'?",
        ur: "'عورت' کا عربی لفظ کیا ہے؟",
        options: [
          { en: "Rajulun (رَجُلٌ)", ur: "رَجُلٌ" },
          { en: "Waladun (وَلَدٌ)", ur: "وَلَدٌ" },
          { en: "Imra'atun (اِمْرَأَةٌ)", ur: "اِمْرَأَةٌ" },
          { en: "Tabibatun (طَبِيبَةٌ)", ur: "طَبِيبَةٌ" },
        ],
        correct: 2,
      },
      {
        en: "Is 'Ardun' (أَرْضٌ - earth/land) masculine or feminine?",
        ur: "'أَرْضٌ' (زمین) مذکر ہے یا مؤنث؟",
        options: [
          { en: "Masculine", ur: "مذکر" },
          { en: "Feminine", ur: "مؤنث" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Tilka sayyaaratun jadeeda'",
        ur: "ترجمہ: 'تِلْكَ سَيَّارَةٌ جَدِيدَةٌ'",
        options: [
          { en: "This is a new car", ur: "یہ ایک نئی گاڑی ہے" },
          { en: "That is a new car", ur: "وہ ایک نئی گاڑی ہے" },
          { en: "That is an old car", ur: "وہ ایک پرانی گاڑی ہے" },
          { en: "That is a new house", ur: "وہ ایک نیا گھر ہے" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 7 — Feminine vocabulary + tilka + fem. adjectives
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 7,
    questions: [
      {
        en: "What is the feminine form of 'Mudarrisun' (teacher)?",
        ur: "'مُدَرِّسٌ' (استاد) کی مؤنث شکل کیا ہے؟",
        options: [
          { en: "Mudarrisatun (مُدَرِّسَةٌ)", ur: "مُدَرِّسَةٌ" },
          { en: "Mudarrisun", ur: "مُدَرِّسٌ" },
          { en: "Mudarrisa", ur: "مُدَرِّسَ" },
          { en: "Mudarriseen", ur: "مُدَرِّسِيْن" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'Tilka dajaajatun'",
        ur: "ترجمہ: 'تِلْكَ دَجَاجَةٌ'",
        options: [
          { en: "This is a chicken", ur: "یہ ایک مرغی ہے" },
          { en: "That is a duck", ur: "وہ ایک بطخ ہے" },
          { en: "That is a chicken", ur: "وہ ایک مرغی ہے" },
          { en: "That is a bird", ur: "وہ ایک پرندہ ہے" },
        ],
        correct: 2,
      },
      {
        en: "What does 'Battatun' (بَطَّةٌ) mean?",
        ur: "'بَطَّةٌ' کا کیا مطلب ہے؟",
        options: [
          { en: "Hen", ur: "مرغی" },
          { en: "Cow", ur: "گائے" },
          { en: "Duck", ur: "بطخ" },
          { en: "Goat", ur: "بکری" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Hazihi baqaratun'",
        ur: "ترجمہ: 'هٰذِهِ بَقَرَةٌ'",
        options: [
          { en: "That is a cow", ur: "وہ ایک گائے ہے" },
          { en: "This is a goat", ur: "یہ ایک بکری ہے" },
          { en: "This is a cow", ur: "یہ ایک گائے ہے" },
          { en: "This is a sheep", ur: "یہ ایک بھیڑ ہے" },
        ],
        correct: 2,
      },
      {
        en: "What is the feminine of 'Kabeerun' (big)?",
        ur: "'كَبِيرٌ' (بڑا) کی مؤنث شکل کیا ہے؟",
        options: [
          { en: "Kabeera (كَبِيرَا)", ur: "كَبِيرَا" },
          { en: "Kabeeratun (كَبِيرَةٌ)", ur: "كَبِيرَةٌ" },
          { en: "Kabeerun", ur: "كَبِيرٌ" },
          { en: "Kaabiratun", ur: "كَابِرَةٌ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Al-baqaratu kabeeratun'",
        ur: "ترجمہ: 'اَلْبَقَرَةُ كَبِيرَةٌ'",
        options: [
          { en: "The cow is small", ur: "گائے چھوٹی ہے" },
          { en: "The goat is big", ur: "بکری بڑی ہے" },
          { en: "The cow is big", ur: "گائے بڑی ہے" },
          { en: "A cow is beautiful", ur: "ایک گائے خوبصورت ہے" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Tilka shajaratun'",
        ur: "ترجمہ: 'تِلْكَ شَجَرَةٌ'",
        options: [
          { en: "This is a flower", ur: "یہ ایک پھول ہے" },
          { en: "That is a tree", ur: "وہ ایک درخت ہے" },
          { en: "This is a tree", ur: "یہ ایک درخت ہے" },
          { en: "That is a branch", ur: "وہ ایک شاخ ہے" },
        ],
        correct: 1,
      },
      {
        en: "What is the feminine of 'Sagheerun' (small)?",
        ur: "'صَغِيرٌ' (چھوٹا) کی مؤنث شکل کیا ہے؟",
        options: [
          { en: "Sagheeratun (صَغِيرَةٌ)", ur: "صَغِيرَةٌ" },
          { en: "Sagheerun", ur: "صَغِيرٌ" },
          { en: "Saghira", ur: "صَغِيرَ" },
          { en: "Sagheereen", ur: "صَغِيرِيْن" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'Hazihi shajaratun sagheeratun'",
        ur: "ترجمہ: 'هٰذِهِ شَجَرَةٌ صَغِيرَةٌ'",
        options: [
          { en: "That is a small tree", ur: "وہ ایک چھوٹا درخت ہے" },
          { en: "This is a big tree", ur: "یہ ایک بڑا درخت ہے" },
          { en: "This is a small tree", ur: "یہ ایک چھوٹا درخت ہے" },
          { en: "This is a small flower", ur: "یہ ایک چھوٹا پھول ہے" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Tilka tabibatun'",
        ur: "ترجمہ: 'تِلْكَ طَبِيبَةٌ'",
        options: [
          { en: "This is a female doctor", ur: "یہ ایک خاتون ڈاکٹر ہے" },
          { en: "That is a male doctor", ur: "وہ ایک مرد ڈاکٹر ہے" },
          { en: "That is a female doctor", ur: "وہ ایک خاتون ڈاکٹر ہے" },
          { en: "That is a nurse", ur: "وہ ایک نرس ہے" },
        ],
        correct: 2,
      },
      {
        en: "Which word means 'a sheep / ewe'?",
        ur: "کون سا لفظ 'بھیڑ' کے معنی میں ہے؟",
        options: [
          { en: "Baqaratun (بَقَرَةٌ)", ur: "بَقَرَةٌ" },
          { en: "Battatun (بَطَّةٌ)", ur: "بَطَّةٌ" },
          { en: "Sha'atun (شَاةٌ)", ur: "شَاةٌ" },
          { en: "Dajaajatun (دَجَاجَةٌ)", ur: "دَجَاجَةٌ" },
        ],
        correct: 2,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 8 — Adjective-Noun agreement (Naat / Man'oot)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 8,
    questions: [
      {
        en: "In Arabic, does the adjective come before or after the noun?",
        ur: "عربی میں صفت اسم سے پہلے آتی ہے یا بعد میں؟",
        options: [
          { en: "Before", ur: "پہلے" },
          { en: "After", ur: "بعد میں" },
          { en: "Either position", ur: "کسی بھی جگہ" },
          { en: "Between two nouns", ur: "دو اسموں کے درمیان" },
        ],
        correct: 1,
      },
      {
        en: "If the noun is definite (with Al), the adjective must be:",
        ur: "اگر اسم معرفہ ہو (اَلْ کے ساتھ)، تو صفت کیسی ہوگی؟",
        options: [
          { en: "Indefinite (with Tanween)", ur: "نکرہ (تنوین کے ساتھ)" },
          { en: "Also definite (with Al)", ur: "معرفہ (اَلْ کے ساتھ)" },
          { en: "Feminine only", ur: "صرف مؤنث" },
          { en: "No adjective needed", ur: "صفت کی ضرورت نہیں" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Rajulun tawilun'",
        ur: "ترجمہ: 'رَجُلٌ طَوِيلٌ'",
        options: [
          { en: "The tall man", ur: "لمبا آدمی" },
          { en: "A short man", ur: "ایک چھوٹا آدمی" },
          { en: "A tall man", ur: "ایک لمبا آدمی" },
          { en: "A fat man", ur: "ایک موٹا آدمی" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Al-baytul kabeer'",
        ur: "ترجمہ: 'اَلْبَيْتُ الْكَبِيرُ'",
        options: [
          { en: "A big house", ur: "ایک بڑا گھر" },
          { en: "The small house", ur: "چھوٹا گھر" },
          { en: "The big house", ur: "بڑا گھر" },
          { en: "The old house", ur: "پرانا گھر" },
        ],
        correct: 2,
      },
      {
        en: "What does 'Tawilun' (طَوِيلٌ) mean?",
        ur: "'طَوِيلٌ' کا کیا مطلب ہے؟",
        options: [
          { en: "Short", ur: "چھوٹا / چھوٹا قد" },
          { en: "Fat", ur: "موٹا" },
          { en: "Tall / Long", ur: "لمبا" },
          { en: "Old", ur: "بوڑھا / پرانا" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Imra'atun jameelah'",
        ur: "ترجمہ: 'اِمْرَأَةٌ جَمِيلَةٌ'",
        options: [
          { en: "A beautiful woman", ur: "ایک خوبصورت عورت" },
          { en: "The beautiful woman", ur: "خوبصورت عورت" },
          { en: "A tall woman", ur: "ایک لمبی عورت" },
          { en: "An old woman", ur: "ایک بوڑھی عورت" },
        ],
        correct: 0,
      },
      {
        en: "Which is the correct form: 'Baitun kabeerun' or 'Baitun kabeera'?",
        ur: "کون سی شکل درست ہے؟",
        options: [
          { en: "Baitun kabeerun (بَيْتٌ كَبِيرٌ)", ur: "بَيْتٌ كَبِيرٌ" },
          { en: "Baitun kabeera (بَيْتٌ كَبِيرَ)", ur: "بَيْتٌ كَبِيرَ" },
          { en: "Baitun kabeeratun (بَيْتٌ كَبِيرَةٌ)", ur: "بَيْتٌ كَبِيرَةٌ" },
          { en: "Baitun al-kabeer (بَيْتٌ الْكَبِيرُ)", ur: "بَيْتٌ الْكَبِيرُ" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'Al-kitabul jadeed'",
        ur: "ترجمہ: 'اَلْكِتَابُ الْجَدِيدُ'",
        options: [
          { en: "A new book", ur: "ایک نئی کتاب" },
          { en: "The old book", ur: "پرانی کتاب" },
          { en: "The new book", ur: "نئی کتاب" },
          { en: "The big book", ur: "بڑی کتاب" },
        ],
        correct: 2,
      },
      {
        en: "Must a feminine noun have a feminine adjective?",
        ur: "کیا مؤنث اسم کے ساتھ مؤنث صفت ضروری ہے؟",
        options: [
          { en: "No, masculine adjective is always used", ur: "نہیں، مذکر صفت ہمیشہ استعمال ہوتی ہے" },
          { en: "Yes, the adjective must match the noun in gender", ur: "ہاں، صفت اسم کی جنس کے مطابق ہونی چاہیے" },
          { en: "Only with Al-nouns", ur: "صرف اَلْ والے اسموں کے ساتھ" },
          { en: "Only with Tanween nouns", ur: "صرف تنوین والے اسموں کے ساتھ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Hazihi sayyaaratun jadeedatun'",
        ur: "ترجمہ: 'هٰذِهِ سَيَّارَةٌ جَدِيدَةٌ'",
        options: [
          { en: "This is an old car", ur: "یہ ایک پرانی گاڑی ہے" },
          { en: "That is a new car", ur: "وہ ایک نئی گاڑی ہے" },
          { en: "This is a new car", ur: "یہ ایک نئی گاڑی ہے" },
          { en: "This is a big car", ur: "یہ ایک بڑی گاڑی ہے" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Man hazal rajulu?'",
        ur: "ترجمہ: 'مَنْ هٰذَا الرَّجُلُ؟'",
        options: [
          { en: "What is this man?", ur: "یہ آدمی کیا ہے؟" },
          { en: "Where is the man?", ur: "آدمی کہاں ہے؟" },
          { en: "Who is this man?", ur: "یہ آدمی کون ہے؟" },
          { en: "Is this a man?", ur: "کیا یہ آدمی ہے؟" },
        ],
        correct: 2,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 9 — Personal pronouns (هُوَ، هِيَ، أَنْتَ، أَنْتِ، أَنَا، نَحْنُ)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 9,
    questions: [
      {
        en: "What is the Arabic pronoun for 'He'?",
        ur: "'وہ' (مذکر) کی عربی ضمیر کیا ہے؟",
        options: [
          { en: "Hiya (هِيَ)", ur: "هِيَ" },
          { en: "Huwa (هُوَ)", ur: "هُوَ" },
          { en: "Anta (أَنْتَ)", ur: "أَنْتَ" },
          { en: "Ana (أَنَا)", ur: "أَنَا" },
        ],
        correct: 1,
      },
      {
        en: "What is the Arabic pronoun for 'She'?",
        ur: "'وہ' (مؤنث) کی عربی ضمیر کیا ہے؟",
        options: [
          { en: "Huwa (هُوَ)", ur: "هُوَ" },
          { en: "Anti (أَنْتِ)", ur: "أَنْتِ" },
          { en: "Hiya (هِيَ)", ur: "هِيَ" },
          { en: "Nahnu (نَحْنُ)", ur: "نَحْنُ" },
        ],
        correct: 2,
      },
      {
        en: "What is the Arabic pronoun for 'You' (masculine)?",
        ur: "'تم' (مذکر) کی عربی ضمیر کیا ہے؟",
        options: [
          { en: "Huwa (هُوَ)", ur: "هُوَ" },
          { en: "Anti (أَنْتِ)", ur: "أَنْتِ" },
          { en: "Ana (أَنَا)", ur: "أَنَا" },
          { en: "Anta (أَنْتَ)", ur: "أَنْتَ" },
        ],
        correct: 3,
      },
      {
        en: "What is the Arabic pronoun for 'You' (feminine)?",
        ur: "'تم' (مؤنث) کی عربی ضمیر کیا ہے؟",
        options: [
          { en: "Anta (أَنْتَ)", ur: "أَنْتَ" },
          { en: "Anti (أَنْتِ)", ur: "أَنْتِ" },
          { en: "Hiya (هِيَ)", ur: "هِيَ" },
          { en: "Nahnu (نَحْنُ)", ur: "نَحْنُ" },
        ],
        correct: 1,
      },
      {
        en: "What is the Arabic pronoun for 'I'?",
        ur: "'میں' کی عربی ضمیر کیا ہے؟",
        options: [
          { en: "Nahnu (نَحْنُ)", ur: "نَحْنُ" },
          { en: "Anta (أَنْتَ)", ur: "أَنْتَ" },
          { en: "Ana (أَنَا)", ur: "أَنَا" },
          { en: "Huwa (هُوَ)", ur: "هُوَ" },
        ],
        correct: 2,
      },
      {
        en: "What is the Arabic pronoun for 'We'?",
        ur: "'ہم' کی عربی ضمیر کیا ہے؟",
        options: [
          { en: "Ana (أَنَا)", ur: "أَنَا" },
          { en: "Nahnu (نَحْنُ)", ur: "نَحْنُ" },
          { en: "Antum (أَنْتُمْ)", ur: "أَنْتُمْ" },
          { en: "Hum (هُمْ)", ur: "هُمْ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Ana mudarrisun'",
        ur: "ترجمہ: 'أَنَا مُدَرِّسٌ'",
        options: [
          { en: "You are a teacher", ur: "تم استاد ہو" },
          { en: "He is a teacher", ur: "وہ استاد ہے" },
          { en: "I am a teacher", ur: "میں استاد ہوں" },
          { en: "We are teachers", ur: "ہم استاد ہیں" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Anta tabibun'",
        ur: "ترجمہ: 'أَنْتَ طَبِيبٌ'",
        options: [
          { en: "I am a doctor", ur: "میں ڈاکٹر ہوں" },
          { en: "You are a doctor", ur: "تم ڈاکٹر ہو" },
          { en: "He is a doctor", ur: "وہ ڈاکٹر ہے" },
          { en: "She is a doctor", ur: "وہ ڈاکٹر ہے (مؤنث)" },
        ],
        correct: 1,
      },
      {
        en: "For a car (feminine noun), which pronoun is used?",
        ur: "گاڑی (مؤنث اسم) کے لیے کون سی ضمیر استعمال ہوتی ہے؟",
        options: [
          { en: "Huwa (هُوَ)", ur: "هُوَ" },
          { en: "Anta (أَنْتَ)", ur: "أَنْتَ" },
          { en: "Hiya (هِيَ)", ur: "هِيَ" },
          { en: "Ana (أَنَا)", ur: "أَنَا" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Hiya mudarrisatun'",
        ur: "ترجمہ: 'هِيَ مُدَرِّسَةٌ'",
        options: [
          { en: "He is a teacher", ur: "وہ (مذکر) استاد ہے" },
          { en: "She is a student", ur: "وہ (مؤنث) طالبہ ہے" },
          { en: "She is a teacher", ur: "وہ (مؤنث) استاد ہے" },
          { en: "I am a teacher", ur: "میں استاد ہوں" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Anti talibatun'",
        ur: "ترجمہ: 'أَنْتِ طَالِبَةٌ'",
        options: [
          { en: "You (m) are a student", ur: "تم (مذکر) طالب علم ہو" },
          { en: "She is a student", ur: "وہ طالبہ ہے" },
          { en: "You (f) are a student", ur: "تم (مؤنث) طالبہ ہو" },
          { en: "I am a student", ur: "میں طالبہ ہوں" },
        ],
        correct: 2,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 10 — Revision + more vocabulary (professions, adj.)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 10,
    questions: [
      {
        en: "Translate: 'Ana min al-Hind'",
        ur: "ترجمہ: 'أَنَا مِنَ الْهِنْدِ'",
        options: [
          { en: "I am going to India", ur: "میں بھارت جا رہا ہوں" },
          { en: "I am from India", ur: "میں بھارت سے ہوں" },
          { en: "You are from India", ur: "تم بھارت سے ہو" },
          { en: "He is from India", ur: "وہ بھارت سے ہے" },
        ],
        correct: 1,
      },
      {
        en: "Which word means 'a farmer'?",
        ur: "کون سا لفظ 'کسان' کے معنی میں ہے؟",
        options: [
          { en: "Tajirun (تَاجِرٌ)", ur: "تَاجِرٌ" },
          { en: "Fallaahun (فَلَّاحٌ)", ur: "فَلَّاحٌ" },
          { en: "Najjarun (نَجَّارٌ)", ur: "نَجَّارٌ" },
          { en: "Tabibun (طَبِيبٌ)", ur: "طَبِيبٌ" },
        ],
        correct: 1,
      },
      {
        en: "Which word means 'a carpenter'?",
        ur: "کون سا لفظ 'بڑھئی' کے معنی میں ہے؟",
        options: [
          { en: "Fallaahun (فَلَّاحٌ)", ur: "فَلَّاحٌ" },
          { en: "Tajirun (تَاجِرٌ)", ur: "تَاجِرٌ" },
          { en: "Najjarun (نَجَّارٌ)", ur: "نَجَّارٌ" },
          { en: "Mudarrisun (مُدَرِّسٌ)", ur: "مُدَرِّسٌ" },
        ],
        correct: 2,
      },
      {
        en: "What does 'Baaridun' (بَارِدٌ) mean?",
        ur: "'بَارِدٌ' کا کیا مطلب ہے؟",
        options: [
          { en: "Hot", ur: "گرم" },
          { en: "Sweet", ur: "میٹھا" },
          { en: "Cold", ur: "ٹھنڈا" },
          { en: "Heavy", ur: "بھاری" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Al-hawa baaridun'",
        ur: "ترجمہ: 'اَلْهَوَاءُ بَارِدٌ'",
        options: [
          { en: "The air is hot", ur: "ہوا گرم ہے" },
          { en: "The weather is sweet", ur: "موسم میٹھا ہے" },
          { en: "The air is cold", ur: "ہوا ٹھنڈی ہے" },
          { en: "The wind is strong", ur: "ہوا تیز ہے" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Nahnu tullaabun'",
        ur: "ترجمہ: 'نَحْنُ طُلَّابٌ'",
        options: [
          { en: "You are students", ur: "تم طالب علم ہو" },
          { en: "They are students", ur: "وہ طالب علم ہیں" },
          { en: "We are students", ur: "ہم طالب علم ہیں" },
          { en: "I am a student", ur: "میں طالب علم ہوں" },
        ],
        correct: 2,
      },
      {
        en: "What does 'Mareedun' (مَرِيضٌ) mean?",
        ur: "'مَرِيضٌ' کا کیا مطلب ہے؟",
        options: [
          { en: "Healthy", ur: "صحت مند" },
          { en: "Tired", ur: "تھکا ہوا" },
          { en: "Sick / Ill", ur: "بیمار" },
          { en: "Happy", ur: "خوش" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Al-waladu mareedun'",
        ur: "ترجمہ: 'اَلْوَلَدُ مَرِيضٌ'",
        options: [
          { en: "The boy is healthy", ur: "لڑکا صحت مند ہے" },
          { en: "The boy is sick", ur: "لڑکا بیمار ہے" },
          { en: "The girl is sick", ur: "لڑکی بیمار ہے" },
          { en: "A boy is tired", ur: "ایک لڑکا تھکا ہوا ہے" },
        ],
        correct: 1,
      },
      {
        en: "What is 'Haarun' (حَارٌّ) the opposite of?",
        ur: "'حَارٌّ' (گرم) کی ضد (الٹ) کیا ہے؟",
        options: [
          { en: "Kabeerun (كَبِيرٌ)", ur: "كَبِيرٌ (بڑا)" },
          { en: "Baaridun (بَارِدٌ)", ur: "بَارِدٌ (ٹھنڈا)" },
          { en: "Jadeedun (جَدِيدٌ)", ur: "جَدِيدٌ (نیا)" },
          { en: "Jameelun (جَمِيلٌ)", ur: "جَمِيلٌ (خوبصورت)" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Anta min Misr?'",
        ur: "ترجمہ: 'أَنْتَ مِنْ مِصْرَ؟'",
        options: [
          { en: "Are you going to Egypt?", ur: "کیا تم مصر جا رہے ہو؟" },
          { en: "Are you from Egypt?", ur: "کیا تم مصر سے ہو؟" },
          { en: "He is from Egypt?", ur: "کیا وہ مصر سے ہے؟" },
          { en: "I am from Egypt?", ur: "کیا میں مصر سے ہوں؟" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 11 — Dual (المثنى) masculine
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 11,
    questions: [
      {
        en: "What suffix is added to make a masculine noun dual (Muthanna)?",
        ur: "مذکر اسم کو تثنیہ بنانے کے لیے کیا لاحقہ لگایا جاتا ہے؟",
        options: [
          { en: "-oona (ونَ)", ur: "ونَ" },
          { en: "-aani (انِ) in nominative", ur: "انِ (حالت رفع میں)" },
          { en: "-aat (اتٌ)", ur: "اتٌ" },
          { en: "-een (ين)", ur: "ين" },
        ],
        correct: 1,
      },
      {
        en: "What is the dual (Muthanna) of 'Kitabun' (كِتَابٌ) in the nominative?",
        ur: "حالت رفع میں 'كِتَابٌ' کی تثنیہ کیا ہے؟",
        options: [
          { en: "Kitabayni (كِتَابَيْنِ)", ur: "كِتَابَيْنِ" },
          { en: "Kitabaani (كِتَابَانِ)", ur: "كِتَابَانِ" },
          { en: "Kutubun (كُتُبٌ)", ur: "كُتُبٌ" },
          { en: "Kitabaatun (كِتَابَاتٌ)", ur: "كِتَابَاتٌ" },
        ],
        correct: 1,
      },
      {
        en: "What is the dual of 'Kitabun' in the genitive/accusative case?",
        ur: "حالت جر/نصب میں 'كِتَابٌ' کی تثنیہ کیا ہے؟",
        options: [
          { en: "Kitabaani (كِتَابَانِ)", ur: "كِتَابَانِ" },
          { en: "Kitabayni (كِتَابَيْنِ)", ur: "كِتَابَيْنِ" },
          { en: "Kutubun (كُتُبٌ)", ur: "كُتُبٌ" },
          { en: "Kitabaatun", ur: "كِتَابَاتٌ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Haza kitabaani'",
        ur: "ترجمہ: 'هٰذَانِ كِتَابَانِ'",
        options: [
          { en: "These are many books", ur: "یہ بہت ساری کتابیں ہیں" },
          { en: "These are two books", ur: "یہ دو کتابیں ہیں" },
          { en: "That is a book", ur: "وہ ایک کتاب ہے" },
          { en: "These are two pens", ur: "یہ دو قلم ہیں" },
        ],
        correct: 1,
      },
      {
        en: "What is the demonstrative used with dual masculine nouns (near)?",
        ur: "مذکر تثنیہ (قریب) کے لیے اسم اشارہ کیا ہے؟",
        options: [
          { en: "Haza (هٰذَا)", ur: "هٰذَا" },
          { en: "Hazaani (هٰذَانِ)", ur: "هٰذَانِ" },
          { en: "Hazihi (هٰذِهِ)", ur: "هٰذِهِ" },
          { en: "Zalika (ذٰلِكَ)", ur: "ذٰلِكَ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Hazaani waladaani'",
        ur: "ترجمہ: 'هٰذَانِ وَلَدَانِ'",
        options: [
          { en: "These are many boys", ur: "یہ بہت سارے لڑکے ہیں" },
          { en: "Those are two boys", ur: "وہ دو لڑکے ہیں" },
          { en: "These are two boys", ur: "یہ دو لڑکے ہیں" },
          { en: "These are two girls", ur: "یہ دو لڑکیاں ہیں" },
        ],
        correct: 2,
      },
      {
        en: "What is the dual of 'Qalamun' (قَلَمٌ) in the nominative?",
        ur: "حالت رفع میں 'قَلَمٌ' کی تثنیہ کیا ہے؟",
        options: [
          { en: "Qalamayni (قَلَمَيْنِ)", ur: "قَلَمَيْنِ" },
          { en: "Aqlamun (أَقْلَامٌ)", ur: "أَقْلَامٌ" },
          { en: "Qalamaani (قَلَمَانِ)", ur: "قَلَمَانِ" },
          { en: "Qalamaat (قَلَمَاتٌ)", ur: "قَلَمَاتٌ" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Al-waladu wa al-waladaan' — how many boys are referred to in total?",
        ur: "'اَلْوَلَدُ وَالْوَلَدَانِ' — کل کتنے لڑکے ہیں؟",
        options: [
          { en: "One", ur: "ایک" },
          { en: "Two", ur: "دو" },
          { en: "Three", ur: "تین" },
          { en: "Four", ur: "چار" },
        ],
        correct: 2,
      },
      {
        en: "When a dual noun (Muthanna) comes after a preposition, which form is used?",
        ur: "جب تثنیہ اسم حرف جر کے بعد آئے تو کیا لاحقہ لگتا ہے؟",
        options: [
          { en: "-aani (انِ)", ur: "انِ" },
          { en: "-ayni (يْنِ)", ur: "يْنِ" },
          { en: "-oona (ونَ)", ur: "ونَ" },
          { en: "-aat (اتٌ)", ur: "اتٌ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Fil kitabayni' (فِي الْكِتَابَيْنِ)",
        ur: "ترجمہ: 'فِي الْكِتَابَيْنِ'",
        options: [
          { en: "In the two books", ur: "دو کتابوں میں" },
          { en: "On the two books", ur: "دو کتابوں پر" },
          { en: "From the two books", ur: "دو کتابوں سے" },
          { en: "With the two books", ur: "دو کتابوں کے ساتھ" },
        ],
        correct: 0,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 12 — Dual feminine (هٰتَانِ، تَانِكَ)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 12,
    questions: [
      {
        en: "What suffix is added to a feminine noun to make it dual (nominative)?",
        ur: "مؤنث اسم کو تثنیہ (حالت رفع) بنانے کے لیے کیا لاحقہ لگتا ہے؟",
        options: [
          { en: "-aani (انِ) after removing ta marboota", ur: "تاء مربوطہ ہٹا کر -انِ" },
          { en: "-oona (ونَ)", ur: "-ونَ" },
          { en: "-aat (اتٌ)", ur: "-اتٌ" },
          { en: "-een (يْنِ)", ur: "-يْنِ" },
        ],
        correct: 0,
      },
      {
        en: "What is the dual of 'Sayyaaratun' (سَيَّارَةٌ - car) in nominative?",
        ur: "حالت رفع میں 'سَيَّارَةٌ' کی تثنیہ کیا ہے؟",
        options: [
          { en: "Sayyaaratayni (سَيَّارَتَيْنِ)", ur: "سَيَّارَتَيْنِ" },
          { en: "Sayyaaraatun (سَيَّارَاتٌ)", ur: "سَيَّارَاتٌ" },
          { en: "Sayyaarataan (سَيَّارَتَانِ)", ur: "سَيَّارَتَانِ" },
          { en: "Sayyaaraani (سَيَّارَانِ)", ur: "سَيَّارَانِ" },
        ],
        correct: 2,
      },
      {
        en: "What demonstrative is used for dual feminine (near)?",
        ur: "مؤنث تثنیہ (قریب) کے لیے اشارہ کیا ہے؟",
        options: [
          { en: "Hazihi (هٰذِهِ)", ur: "هٰذِهِ" },
          { en: "Hazaani (هٰذَانِ)", ur: "هٰذَانِ" },
          { en: "Haataani (هٰتَانِ)", ur: "هٰتَانِ" },
          { en: "Tilka (تِلْكَ)", ur: "تِلْكَ" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Haataani sayyaarataan'",
        ur: "ترجمہ: 'هٰتَانِ سَيَّارَتَانِ'",
        options: [
          { en: "Those are two cars", ur: "وہ دو گاڑیاں ہیں" },
          { en: "These are two cars", ur: "یہ دو گاڑیاں ہیں" },
          { en: "These are many cars", ur: "یہ بہت ساری گاڑیاں ہیں" },
          { en: "These are two books", ur: "یہ دو کتابیں ہیں" },
        ],
        correct: 1,
      },
      {
        en: "What demonstrative is used for dual feminine (far)?",
        ur: "مؤنث تثنیہ (دور) کے لیے اشارہ کیا ہے؟",
        options: [
          { en: "Haataani (هٰتَانِ)", ur: "هٰتَانِ" },
          { en: "Hazaani (هٰذَانِ)", ur: "هٰذَانِ" },
          { en: "Taannika (تَانِكَ)", ur: "تَانِكَ" },
          { en: "Tilka (تِلْكَ)", ur: "تِلْكَ" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Taannika dajaajataani'",
        ur: "ترجمہ: 'تَانِكَ دَجَاجَتَانِ'",
        options: [
          { en: "These are two chickens", ur: "یہ دو مرغیاں ہیں" },
          { en: "Those are two chickens", ur: "وہ دو مرغیاں ہیں" },
          { en: "Those are many chickens", ur: "وہ بہت ساری مرغیاں ہیں" },
          { en: "Those are two ducks", ur: "وہ دو بطخیں ہیں" },
        ],
        correct: 1,
      },
      {
        en: "What is the dual of 'Battatun' (بَطَّةٌ - duck) in genitive/accusative?",
        ur: "حالت جر/نصب میں 'بَطَّةٌ' کی تثنیہ کیا ہے؟",
        options: [
          { en: "Battataani (بَطَّتَانِ)", ur: "بَطَّتَانِ" },
          { en: "Battatayni (بَطَّتَيْنِ)", ur: "بَطَّتَيْنِ" },
          { en: "Battaat (بَطَّاتٌ)", ur: "بَطَّاتٌ" },
          { en: "Battataani (بَطَّتَانِ)", ur: "بَطَّتَانِ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Hazaani qalamaan wa haataani kitaabataan'",
        ur: "ترجمہ: 'هٰذَانِ قَلَمَانِ وَهٰتَانِ كِتَابَتَانِ'",
        options: [
          { en: "These are two pens and those are two books", ur: "یہ دو قلم ہیں اور وہ دو کتابیں ہیں" },
          { en: "These are two pens and these are two books", ur: "یہ دو قلم ہیں اور یہ دو کتابیں ہیں" },
          { en: "Those are two pens and these are two books", ur: "وہ دو قلم ہیں اور یہ دو کتابیں ہیں" },
          { en: "These are many pens and books", ur: "یہ بہت سارے قلم اور کتابیں ہیں" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 13 — Sound Masculine Plural (جمع مذكر سالم)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 13,
    questions: [
      {
        en: "What suffix makes a masculine noun a Sound Masculine Plural (nominative)?",
        ur: "جمع مذکر سالم (حالت رفع) بنانے کے لیے کیا لاحقہ لگتا ہے؟",
        options: [
          { en: "-aani (انِ)", ur: "-انِ" },
          { en: "-oona (ونَ)", ur: "-ونَ" },
          { en: "-aat (اتٌ)", ur: "-اتٌ" },
          { en: "-ayni (يْنِ)", ur: "-يْنِ" },
        ],
        correct: 1,
      },
      {
        en: "What suffix makes a masculine Sound Plural in genitive/accusative?",
        ur: "جمع مذکر سالم کا لاحقہ حالت جر/نصب میں کیا ہے؟",
        options: [
          { en: "-oona (ونَ)", ur: "-ونَ" },
          { en: "-aani (انِ)", ur: "-انِ" },
          { en: "-eena (يْنَ)", ur: "-يْنَ" },
          { en: "-aat (اتٌ)", ur: "-اتٌ" },
        ],
        correct: 2,
      },
      {
        en: "What is the Sound Masculine Plural of 'Mudarrisun' (nominative)?",
        ur: "حالت رفع میں 'مُدَرِّسٌ' کی جمع مذکر سالم کیا ہے؟",
        options: [
          { en: "Mudarrisoona (مُدَرِّسُونَ)", ur: "مُدَرِّسُونَ" },
          { en: "Mudarriseena (مُدَرِّسِينَ)", ur: "مُدَرِّسِينَ" },
          { en: "Mudarrisaat (مُدَرِّسَاتٌ)", ur: "مُدَرِّسَاتٌ" },
          { en: "Mudarrisaani (مُدَرِّسَانِ)", ur: "مُدَرِّسَانِ" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'Al-mudarrisoona fil fasli'",
        ur: "ترجمہ: 'اَلْمُدَرِّسُونَ فِي الْفَصْلِ'",
        options: [
          { en: "The teacher is in the class", ur: "استاد کلاس میں ہے" },
          { en: "The teachers are in the class", ur: "استاد کلاس میں ہیں" },
          { en: "The students are in the class", ur: "طالب علم کلاس میں ہیں" },
          { en: "Two teachers are in the class", ur: "دو استاد کلاس میں ہیں" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Antum tullaabun'",
        ur: "ترجمہ: 'أَنْتُمْ طُلَّابٌ'",
        options: [
          { en: "We are students", ur: "ہم طالب علم ہیں" },
          { en: "They are students", ur: "وہ طالب علم ہیں" },
          { en: "You (plural) are students", ur: "تم سب طالب علم ہو" },
          { en: "I am a student", ur: "میں طالب علم ہوں" },
        ],
        correct: 2,
      },
      {
        en: "What is 'Antum' (أَنْتُمْ) used for?",
        ur: "'أَنْتُمْ' کس کے لیے ہے؟",
        options: [
          { en: "You (singular masculine)", ur: "تم (واحد مذکر)" },
          { en: "You (plural masculine)", ur: "تم سب (جمع مذکر)" },
          { en: "They (masculine)", ur: "وہ سب (مذکر)" },
          { en: "We", ur: "ہم" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Hum mudarrisoona'",
        ur: "ترجمہ: 'هُمْ مُدَرِّسُونَ'",
        options: [
          { en: "He is a teacher", ur: "وہ استاد ہے" },
          { en: "They (f) are teachers", ur: "وہ (مؤنث) استاد ہیں" },
          { en: "They (m) are teachers", ur: "وہ (مذکر) استاد ہیں" },
          { en: "We are teachers", ur: "ہم استاد ہیں" },
        ],
        correct: 2,
      },
      {
        en: "The sound masculine plural (-oona/-eena) is used for:",
        ur: "جمع مذکر سالم (-ونَ/-يْنَ) کس کے لیے ہے؟",
        options: [
          { en: "Things and animals only", ur: "صرف چیزوں اور جانوروں کے لیے" },
          { en: "Rational masculine beings (people)", ur: "عاقل مذکر (انسانوں) کے لیے" },
          { en: "Feminine beings only", ur: "صرف مؤنث کے لیے" },
          { en: "Any masculine noun", ur: "کسی بھی مذکر اسم کے لیے" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Al-muminoona ikhwatun'",
        ur: "ترجمہ: 'اَلْمُؤْمِنُونَ إِخْوَةٌ'",
        options: [
          { en: "The believers are brothers", ur: "مؤمن بھائی بھائی ہیں" },
          { en: "The brothers are believers", ur: "بھائی مؤمن ہیں" },
          { en: "Two believers are brothers", ur: "دو مؤمن بھائی ہیں" },
          { en: "The believer is a brother", ur: "مؤمن ایک بھائی ہے" },
        ],
        correct: 0,
      },
      {
        en: "What is the pronoun for 'They' (masculine plural)?",
        ur: "'وہ سب' (مذکر جمع) کے لیے کون سی ضمیر ہے؟",
        options: [
          { en: "Huwa (هُوَ)", ur: "هُوَ" },
          { en: "Hum (هُمْ)", ur: "هُمْ" },
          { en: "Hunna (هُنَّ)", ur: "هُنَّ" },
          { en: "Nahnu (نَحْنُ)", ur: "نَحْنُ" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 14 — Sound Feminine Plural (جمع مؤنث سالم)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 14,
    questions: [
      {
        en: "What suffix is added to form the Sound Feminine Plural?",
        ur: "جمع مؤنث سالم بنانے کے لیے کیا لاحقہ لگتا ہے؟",
        options: [
          { en: "-oona (ونَ)", ur: "-ونَ" },
          { en: "-aatun (اتٌ) in nominative", ur: "-اتٌ (حالت رفع میں)" },
          { en: "-aani (انِ)", ur: "-انِ" },
          { en: "-eena (يْنَ)", ur: "-يْنَ" },
        ],
        correct: 1,
      },
      {
        en: "What is the Sound Feminine Plural of 'Mudarrisatun' (nominative)?",
        ur: "حالت رفع میں 'مُدَرِّسَةٌ' کی جمع مؤنث سالم کیا ہے؟",
        options: [
          { en: "Mudarrisaatun (مُدَرِّسَاتٌ)", ur: "مُدَرِّسَاتٌ" },
          { en: "Mudarrisoona (مُدَرِّسُونَ)", ur: "مُدَرِّسُونَ" },
          { en: "Mudarrisaani (مُدَرِّسَانِ)", ur: "مُدَرِّسَانِ" },
          { en: "Mudarrisaat", ur: "مُدَرِّسَات" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'Al-mudarrisaatu fil fasli'",
        ur: "ترجمہ: 'اَلْمُدَرِّسَاتُ فِي الْفَصْلِ'",
        options: [
          { en: "The female teachers are in the class", ur: "خاتون استاد کلاس میں ہیں" },
          { en: "The male teachers are in the class", ur: "مرد استاد کلاس میں ہیں" },
          { en: "Two teachers are in the class", ur: "دو استاد کلاس میں ہیں" },
          { en: "The teacher is in the class", ur: "استاد کلاس میں ہے" },
        ],
        correct: 0,
      },
      {
        en: "What is 'Antunna' (أَنْتُنَّ) used for?",
        ur: "'أَنْتُنَّ' کس کے لیے ہے؟",
        options: [
          { en: "You (singular feminine)", ur: "تم (واحد مؤنث)" },
          { en: "You (plural masculine)", ur: "تم سب (جمع مذکر)" },
          { en: "You (plural feminine)", ur: "تم سب (جمع مؤنث)" },
          { en: "They (feminine plural)", ur: "وہ سب (مؤنث)" },
        ],
        correct: 2,
      },
      {
        en: "What is the pronoun for 'They' (feminine plural)?",
        ur: "'وہ سب' (مؤنث جمع) کے لیے کون سی ضمیر ہے؟",
        options: [
          { en: "Hum (هُمْ)", ur: "هُمْ" },
          { en: "Hiya (هِيَ)", ur: "هِيَ" },
          { en: "Hunna (هُنَّ)", ur: "هُنَّ" },
          { en: "Nahnu (نَحْنُ)", ur: "نَحْنُ" },
        ],
        correct: 2,
      },
      {
        en: "Sound Feminine Plural ending in genitive/accusative is:",
        ur: "جمع مؤنث سالم کا لاحقہ حالت جر/نصب میں کیا ہے؟",
        options: [
          { en: "-aatun (اتٌ)", ur: "-اتٌ" },
          { en: "-aatin (اتِ)", ur: "-اتِ" },
          { en: "-oona (ونَ)", ur: "-ونَ" },
          { en: "-ayni (يْنِ)", ur: "-يْنِ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Hunna tabibatun'",
        ur: "ترجمہ: 'هُنَّ طَبِيبَاتٌ'",
        options: [
          { en: "She is a doctor", ur: "وہ ڈاکٹر ہے" },
          { en: "They (f) are doctors", ur: "وہ (مؤنث) ڈاکٹر ہیں" },
          { en: "They (m) are doctors", ur: "وہ (مذکر) ڈاکٹر ہیں" },
          { en: "We are doctors", ur: "ہم ڈاکٹر ہیں" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Al-baqaraatu fil haqli'",
        ur: "ترجمہ: 'اَلْبَقَرَاتُ فِي الْحَقْلِ'",
        options: [
          { en: "The cow is in the field", ur: "گائے کھیت میں ہے" },
          { en: "The cows are on the field", ur: "گائیں کھیت پر ہیں" },
          { en: "The cows are in the field", ur: "گائیں کھیت میں ہیں" },
          { en: "Two cows are in the field", ur: "دو گائیں کھیت میں ہیں" },
        ],
        correct: 2,
      },
      {
        en: "Which type of plural is used for feminine nouns of people and things?",
        ur: "مؤنث انسانوں اور چیزوں کے لیے کیا جمع آتی ہے؟",
        options: [
          { en: "Sound Masculine Plural", ur: "جمع مذکر سالم" },
          { en: "Sound Feminine Plural", ur: "جمع مؤنث سالم" },
          { en: "Broken Plural only", ur: "صرف جمع مکسر" },
          { en: "Dual only", ur: "صرف تثنیہ" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 15 — Broken Plural (جمع التكسير)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 15,
    questions: [
      {
        en: "What is a Broken Plural (Jam' al-Takseer)?",
        ur: "جمع تکسیر کیا ہے؟",
        options: [
          { en: "Plural formed by adding a suffix only", ur: "صرف لاحقہ لگا کر بنائی گئی جمع" },
          { en: "Plural formed by changing the internal structure of the word", ur: "لفظ کی اندرونی ساخت بدل کر بنائی گئی جمع" },
          { en: "Dual of a noun", ur: "اسم کی تثنیہ" },
          { en: "Plural formed only for feminine nouns", ur: "صرف مؤنث اسم کی جمع" },
        ],
        correct: 1,
      },
      {
        en: "What is the broken plural of 'Kitabun' (كِتَابٌ)?",
        ur: "'كِتَابٌ' کی جمع تکسیر کیا ہے؟",
        options: [
          { en: "Kitabaatun (كِتَابَاتٌ)", ur: "كِتَابَاتٌ" },
          { en: "Kutubun (كُتُبٌ)", ur: "كُتُبٌ" },
          { en: "Kitabaani (كِتَابَانِ)", ur: "كِتَابَانِ" },
          { en: "Maktuubun (مَكْتُوبٌ)", ur: "مَكْتُوبٌ" },
        ],
        correct: 1,
      },
      {
        en: "What is the broken plural of 'Qalamun' (قَلَمٌ)?",
        ur: "'قَلَمٌ' کی جمع تکسیر کیا ہے؟",
        options: [
          { en: "Qalamaat (قَلَمَاتٌ)", ur: "قَلَمَاتٌ" },
          { en: "Aqlamun (أَقْلَامٌ)", ur: "أَقْلَامٌ" },
          { en: "Qalamaani (قَلَمَانِ)", ur: "قَلَمَانِ" },
          { en: "Qalamu (قَلَمُ)", ur: "قَلَمُ" },
        ],
        correct: 1,
      },
      {
        en: "What is the broken plural of 'Baitun' (بَيْتٌ)?",
        ur: "'بَيْتٌ' کی جمع تکسیر کیا ہے؟",
        options: [
          { en: "Buyutun (بُيُوتٌ)", ur: "بُيُوتٌ" },
          { en: "Baitaatun (بَيْتَاتٌ)", ur: "بَيْتَاتٌ" },
          { en: "Baitaani (بَيْتَانِ)", ur: "بَيْتَانِ" },
          { en: "Abyaatun (أَبْيَاتٌ)", ur: "أَبْيَاتٌ" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'Al-kutub ala al-maktabi'",
        ur: "ترجمہ: 'اَلْكُتُبُ عَلَى الْمَكْتَبِ'",
        options: [
          { en: "The book is on the desk", ur: "کتاب میز پر ہے" },
          { en: "The books are on the desk", ur: "کتابیں میز پر ہیں" },
          { en: "The pens are on the desk", ur: "قلم میز پر ہیں" },
          { en: "The books are in the desk", ur: "کتابیں میز میں ہیں" },
        ],
        correct: 1,
      },
      {
        en: "What is the broken plural of 'Babun' (بَابٌ)?",
        ur: "'بَابٌ' کی جمع تکسیر کیا ہے؟",
        options: [
          { en: "Abaabun (أَبَابٌ)", ur: "أَبَابٌ" },
          { en: "Abwabun (أَبْوَابٌ)", ur: "أَبْوَابٌ" },
          { en: "Bawaabun (بَوَّابٌ)", ur: "بَوَّابٌ" },
          { en: "Baabaani (بَابَانِ)", ur: "بَابَانِ" },
        ],
        correct: 1,
      },
      {
        en: "For non-rational plural (things/animals), which pronoun is used?",
        ur: "غیر عاقل جمع (چیزوں / جانوروں) کے لیے کون سی ضمیر آتی ہے؟",
        options: [
          { en: "Hum (هُمْ)", ur: "هُمْ" },
          { en: "Hunna (هُنَّ)", ur: "هُنَّ" },
          { en: "Hiya (هِيَ) — treated as singular feminine", ur: "هِيَ (واحد مؤنث کی طرح)" },
          { en: "Huwa (هُوَ)", ur: "هُوَ" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Al-kutub jadeedatun'",
        ur: "ترجمہ: 'اَلْكُتُبُ جَدِيدَةٌ'",
        options: [
          { en: "The book is new", ur: "کتاب نئی ہے" },
          { en: "The books are new (treated as fem. sing.)", ur: "کتابیں نئی ہیں" },
          { en: "Two books are new", ur: "دو کتابیں نئی ہیں" },
          { en: "The books are old", ur: "کتابیں پرانی ہیں" },
        ],
        correct: 1,
      },
      {
        en: "What is the broken plural of 'Rajulun' (رَجُلٌ)?",
        ur: "'رَجُلٌ' کی جمع تکسیر کیا ہے؟",
        options: [
          { en: "Rijaalun (رِجَالٌ)", ur: "رِجَالٌ" },
          { en: "Rajulaatun (رَجُلَاتٌ)", ur: "رَجُلَاتٌ" },
          { en: "Rajulaani (رَجُلَانِ)", ur: "رَجُلَانِ" },
          { en: "Rujulun (رُجُلٌ)", ur: "رُجُلٌ" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'Al-rijalu fi al-masjidi'",
        ur: "ترجمہ: 'اَلرِّجَالُ فِي الْمَسْجِدِ'",
        options: [
          { en: "The man is in the mosque", ur: "آدمی مسجد میں ہے" },
          { en: "The men are in the mosque", ur: "مرد مسجد میں ہیں" },
          { en: "Two men are in the mosque", ur: "دو مرد مسجد میں ہیں" },
          { en: "The women are in the mosque", ur: "عورتیں مسجد میں ہیں" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 16 — Attached pronouns (ضمائر متصلة)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 16,
    questions: [
      {
        en: "What is 'Kitaabi' (كِتَابِي)?",
        ur: "'كِتَابِي' کا کیا مطلب ہے؟",
        options: [
          { en: "His book", ur: "اس کی کتاب" },
          { en: "Your book", ur: "تمہاری کتاب" },
          { en: "My book", ur: "میری کتاب" },
          { en: "Our book", ur: "ہماری کتاب" },
        ],
        correct: 2,
      },
      {
        en: "What is 'Kitabuka' (كِتَابُكَ)?",
        ur: "'كِتَابُكَ' کا کیا مطلب ہے؟",
        options: [
          { en: "My book", ur: "میری کتاب" },
          { en: "Your (m) book", ur: "تمہاری (مذکر) کتاب" },
          { en: "His book", ur: "اس کی کتاب" },
          { en: "Her book", ur: "اس کی (مؤنث) کتاب" },
        ],
        correct: 1,
      },
      {
        en: "What is 'Kitabuhu' (كِتَابُهُ)?",
        ur: "'كِتَابُهُ' کا کیا مطلب ہے؟",
        options: [
          { en: "My book", ur: "میری کتاب" },
          { en: "Your book", ur: "تمہاری کتاب" },
          { en: "His book", ur: "اس کی (مذکر) کتاب" },
          { en: "Her book", ur: "اس کی (مؤنث) کتاب" },
        ],
        correct: 2,
      },
      {
        en: "What is 'Kitabuha' (كِتَابُهَا)?",
        ur: "'كِتَابُهَا' کا کیا مطلب ہے؟",
        options: [
          { en: "His book", ur: "اس کی (مذکر) کتاب" },
          { en: "Her book", ur: "اس کی (مؤنث) کتاب" },
          { en: "Their book", ur: "ان کی کتاب" },
          { en: "Our book", ur: "ہماری کتاب" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Qalamuhu alal maktabi'",
        ur: "ترجمہ: 'قَلَمُهُ عَلَى الْمَكْتَبِ'",
        options: [
          { en: "My pen is on the desk", ur: "میرا قلم میز پر ہے" },
          { en: "Your pen is on the desk", ur: "تمہارا قلم میز پر ہے" },
          { en: "Her pen is on the desk", ur: "اس کا (مؤنث) قلم میز پر ہے" },
          { en: "His pen is on the desk", ur: "اس کا (مذکر) قلم میز پر ہے" },
        ],
        correct: 3,
      },
      {
        en: "What is 'Kitabuna' (كِتَابُنَا)?",
        ur: "'كِتَابُنَا' کا کیا مطلب ہے؟",
        options: [
          { en: "My book", ur: "میری کتاب" },
          { en: "Your book", ur: "تمہاری کتاب" },
          { en: "Our book", ur: "ہماری کتاب" },
          { en: "Their book", ur: "ان کی کتاب" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Haaza baituna'",
        ur: "ترجمہ: 'هٰذَا بَيْتُنَا'",
        options: [
          { en: "This is their house", ur: "یہ ان کا گھر ہے" },
          { en: "This is his house", ur: "یہ اس کا گھر ہے" },
          { en: "This is our house", ur: "یہ ہمارا گھر ہے" },
          { en: "That is our house", ur: "وہ ہمارا گھر ہے" },
        ],
        correct: 2,
      },
      {
        en: "The attached pronoun '-ka' (كَ) attached to a noun means:",
        ur: "اسم کے ساتھ لگا '-كَ' کا کیا مطلب ہے؟",
        options: [
          { en: "My", ur: "میرا" },
          { en: "Your (masculine)", ur: "تمہارا (مذکر)" },
          { en: "His", ur: "اس کا (مذکر)" },
          { en: "Her", ur: "اس کا (مؤنث)" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Ma ismuki?'",
        ur: "ترجمہ: 'مَا اسْمُكِ؟'",
        options: [
          { en: "What is your (m) name?", ur: "تمہارا (مذکر) نام کیا ہے؟" },
          { en: "What is your (f) name?", ur: "تمہارا (مؤنث) نام کیا ہے؟" },
          { en: "What is his name?", ur: "اس کا نام کیا ہے؟" },
          { en: "What is her name?", ur: "اس کا (مؤنث) نام کیا ہے؟" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Haaza kitabi wa zalika kitabuka'",
        ur: "ترجمہ: 'هٰذَا كِتَابِي وَذٰلِكَ كِتَابُكَ'",
        options: [
          { en: "This is your book and that is my book", ur: "یہ تمہاری کتاب ہے اور وہ میری کتاب ہے" },
          { en: "This is my book and that is your book", ur: "یہ میری کتاب ہے اور وہ تمہاری کتاب ہے" },
          { en: "This is his book and that is her book", ur: "یہ اس کی کتاب ہے اور وہ اس کی کتاب ہے" },
          { en: "This is my pen and that is your pen", ur: "یہ میرا قلم ہے اور وہ تمہارا قلم ہے" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 17 — Past tense verbs (الفعل الماضي) — هُوَ / هِيَ
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 17,
    questions: [
      {
        en: "In Arabic, what is the base form (root form) of a verb based on?",
        ur: "عربی میں فعل کی بنیادی شکل کس پر مبنی ہوتی ہے؟",
        options: [
          { en: "Third person singular masculine past tense", ur: "غائب مذکر واحد ماضی" },
          { en: "First person singular", ur: "متکلم واحد" },
          { en: "Second person plural", ur: "مخاطب جمع" },
          { en: "Future tense", ur: "مستقبل" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'Kataba al-waladu' (كَتَبَ الْوَلَدُ)",
        ur: "ترجمہ: 'كَتَبَ الْوَلَدُ'",
        options: [
          { en: "The boy will write", ur: "لڑکا لکھے گا" },
          { en: "The boy is writing", ur: "لڑکا لکھ رہا ہے" },
          { en: "The boy wrote", ur: "لڑکے نے لکھا" },
          { en: "The boy writes", ur: "لڑکا لکھتا ہے" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Sharibat al-bintul maa'' (شَرِبَتِ الْبِنْتُ الْمَاءَ)",
        ur: "ترجمہ: 'شَرِبَتِ الْبِنْتُ الْمَاءَ'",
        options: [
          { en: "The girl will drink water", ur: "لڑکی پانی پئے گی" },
          { en: "The girl drank the water", ur: "لڑکی نے پانی پیا" },
          { en: "The girl is drinking water", ur: "لڑکی پانی پی رہی ہے" },
          { en: "The girl drinks water", ur: "لڑکی پانی پیتی ہے" },
        ],
        correct: 1,
      },
      {
        en: "When a feminine subject does the action in past tense, what is added to the verb?",
        ur: "جب فاعل مؤنث ہو تو ماضی میں فعل پر کیا لگایا جاتا ہے؟",
        options: [
          { en: "Nothing changes", ur: "کوئی تبدیلی نہیں" },
          { en: "Ta (تَ) is added at the end", ur: "آخر میں تَ لگایا جاتا ہے" },
          { en: "Ta Marboota (ة) is added", ur: "تاء مربوطہ لگائی جاتی ہے" },
          { en: "Alif is added", ur: "الف لگایا جاتا ہے" },
        ],
        correct: 1,
      },
      {
        en: "What does 'Jalasa' (جَلَسَ) mean?",
        ur: "'جَلَسَ' کا کیا مطلب ہے؟",
        options: [
          { en: "He stood", ur: "وہ کھڑا ہوا" },
          { en: "He sat", ur: "وہ بیٹھا" },
          { en: "He ate", ur: "اس نے کھایا" },
          { en: "He went", ur: "وہ گیا" },
        ],
        correct: 1,
      },
      {
        en: "What does 'Dhahaba' (ذَهَبَ) mean?",
        ur: "'ذَهَبَ' کا کیا مطلب ہے؟",
        options: [
          { en: "He came", ur: "وہ آیا" },
          { en: "He ate", ur: "اس نے کھایا" },
          { en: "He went", ur: "وہ گیا" },
          { en: "He returned", ur: "وہ واپس آیا" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Dhahabat al-mudarrisatu ila al-madrasa'",
        ur: "ترجمہ: 'ذَهَبَتِ الْمُدَرِّسَةُ إِلَى الْمَدْرَسَةِ'",
        options: [
          { en: "The (male) teacher went to school", ur: "استاد (مذکر) اسکول گیا" },
          { en: "The (female) teacher went to school", ur: "استاد (مؤنث) اسکول گئی" },
          { en: "The teacher will go to school", ur: "استاد اسکول جائے گی" },
          { en: "The teacher is at school", ur: "استاد اسکول میں ہے" },
        ],
        correct: 1,
      },
      {
        en: "What does 'Akala' (أَكَلَ) mean?",
        ur: "'أَكَلَ' کا کیا مطلب ہے؟",
        options: [
          { en: "He drank", ur: "اس نے پیا" },
          { en: "He slept", ur: "وہ سویا" },
          { en: "He ate", ur: "اس نے کھایا" },
          { en: "He read", ur: "اس نے پڑھا" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Rajaahu ila al-baiti' (رَجَعَ إِلَى الْبَيْتِ)",
        ur: "ترجمہ: 'رَجَعَ إِلَى الْبَيْتِ'",
        options: [
          { en: "He went to the house", ur: "وہ گھر گیا" },
          { en: "He returned to the house", ur: "وہ گھر واپس آیا" },
          { en: "He left the house", ur: "وہ گھر سے نکلا" },
          { en: "He entered the house", ur: "وہ گھر میں داخل ہوا" },
        ],
        correct: 1,
      },
      {
        en: "What does 'Qara'a' (قَرَأَ) mean?",
        ur: "'قَرَأَ' کا کیا مطلب ہے؟",
        options: [
          { en: "He wrote", ur: "اس نے لکھا" },
          { en: "He read", ur: "اس نے پڑھا" },
          { en: "He spoke", ur: "اس نے بات کی" },
          { en: "He heard", ur: "اس نے سنا" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 18 — Past tense with various pronouns
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 18,
    questions: [
      {
        en: "What is the past tense of 'Kataba' for 'Ana' (I)?",
        ur: "'أَنَا' کے ساتھ 'كَتَبَ' کا ماضی کیا ہے؟",
        options: [
          { en: "Katabtu (كَتَبْتُ)", ur: "كَتَبْتُ" },
          { en: "Katabta (كَتَبْتَ)", ur: "كَتَبْتَ" },
          { en: "Katabna (كَتَبْنَا)", ur: "كَتَبْنَا" },
          { en: "Katabuu (كَتَبُوا)", ur: "كَتَبُوا" },
        ],
        correct: 0,
      },
      {
        en: "What is the past tense of 'Kataba' for 'Anta' (you, m)?",
        ur: "'أَنْتَ' کے ساتھ 'كَتَبَ' کا ماضی کیا ہے؟",
        options: [
          { en: "Katabtu (كَتَبْتُ)", ur: "كَتَبْتُ" },
          { en: "Katabta (كَتَبْتَ)", ur: "كَتَبْتَ" },
          { en: "Katabti (كَتَبْتِ)", ur: "كَتَبْتِ" },
          { en: "Katabna (كَتَبْنَا)", ur: "كَتَبْنَا" },
        ],
        correct: 1,
      },
      {
        en: "What is the past tense of 'Kataba' for 'Anti' (you, f)?",
        ur: "'أَنْتِ' کے ساتھ 'كَتَبَ' کا ماضی کیا ہے؟",
        options: [
          { en: "Katabta (كَتَبْتَ)", ur: "كَتَبْتَ" },
          { en: "Katabtu (كَتَبْتُ)", ur: "كَتَبْتُ" },
          { en: "Katabti (كَتَبْتِ)", ur: "كَتَبْتِ" },
          { en: "Katabat (كَتَبَتْ)", ur: "كَتَبَتْ" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Katabtu risaalatan'",
        ur: "ترجمہ: 'كَتَبْتُ رِسَالَةً'",
        options: [
          { en: "You wrote a letter", ur: "تم نے خط لکھا" },
          { en: "He wrote a letter", ur: "اس نے خط لکھا" },
          { en: "I wrote a letter", ur: "میں نے خط لکھا" },
          { en: "We wrote a letter", ur: "ہم نے خط لکھا" },
        ],
        correct: 2,
      },
      {
        en: "What is the past tense of 'Kataba' for 'Nahnu' (we)?",
        ur: "'نَحْنُ' کے ساتھ 'كَتَبَ' کا ماضی کیا ہے؟",
        options: [
          { en: "Katabtu (كَتَبْتُ)", ur: "كَتَبْتُ" },
          { en: "Katabna (كَتَبْنَا)", ur: "كَتَبْنَا" },
          { en: "Katabuu (كَتَبُوا)", ur: "كَتَبُوا" },
          { en: "Katabta (كَتَبْتَ)", ur: "كَتَبْتَ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Dhahaba al-awlaadu ilal masjid'",
        ur: "ترجمہ: 'ذَهَبَ الْأَوْلَادُ إِلَى الْمَسْجِدِ'",
        options: [
          { en: "The boy went to the mosque", ur: "لڑکا مسجد گیا" },
          { en: "The boys went to the mosque", ur: "لڑکے مسجد گئے" },
          { en: "Two boys went to the mosque", ur: "دو لڑکے مسجد گئے" },
          { en: "The boys will go to the mosque", ur: "لڑکے مسجد جائیں گے" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Dhahab-tum ilal madrasati'",
        ur: "ترجمہ: 'ذَهَبْتُمْ إِلَى الْمَدْرَسَةِ'",
        options: [
          { en: "He went to school", ur: "وہ اسکول گیا" },
          { en: "You (plural) went to school", ur: "تم سب اسکول گئے" },
          { en: "I went to school", ur: "میں اسکول گیا" },
          { en: "We went to school", ur: "ہم اسکول گئے" },
        ],
        correct: 1,
      },
      {
        en: "What does 'Sama'a' (سَمِعَ) mean?",
        ur: "'سَمِعَ' کا کیا مطلب ہے؟",
        options: [
          { en: "He saw", ur: "اس نے دیکھا" },
          { en: "He heard", ur: "اس نے سنا" },
          { en: "He spoke", ur: "اس نے بات کی" },
          { en: "He understood", ur: "اس نے سمجھا" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Akaltum al-ta'aama'",
        ur: "ترجمہ: 'أَكَلْتُمُ الطَّعَامَ'",
        options: [
          { en: "He ate the food", ur: "اس نے کھانا کھایا" },
          { en: "I ate the food", ur: "میں نے کھانا کھایا" },
          { en: "You (plural) ate the food", ur: "تم سب نے کھانا کھایا" },
          { en: "We ate the food", ur: "ہم نے کھانا کھایا" },
        ],
        correct: 2,
      },
      {
        en: "What does 'Nazara' (نَظَرَ) mean?",
        ur: "'نَظَرَ' کا کیا مطلب ہے؟",
        options: [
          { en: "He looked / He saw", ur: "اس نے دیکھا" },
          { en: "He heard", ur: "اس نے سنا" },
          { en: "He spoke", ur: "اس نے کہا" },
          { en: "He went", ur: "وہ گیا" },
        ],
        correct: 0,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 19 — Present tense (الفعل المضارع)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 19,
    questions: [
      {
        en: "What prefix indicates present tense (Mudaari') for 'Huwa' (He)?",
        ur: "'هُوَ' کے لیے مضارع میں کیا سابقہ (prefix) لگتا ہے؟",
        options: [
          { en: "أَ (A-)", ur: "أَ" },
          { en: "تَ (Ta-)", ur: "تَ" },
          { en: "يَ (Ya-)", ur: "يَ" },
          { en: "نَ (Na-)", ur: "نَ" },
        ],
        correct: 2,
      },
      {
        en: "What is the present tense of 'Kataba' for 'Huwa'?",
        ur: "'هُوَ' کے ساتھ 'كَتَبَ' کا مضارع کیا ہے؟",
        options: [
          { en: "Aktubu (أَكْتُبُ)", ur: "أَكْتُبُ" },
          { en: "Yaktubu (يَكْتُبُ)", ur: "يَكْتُبُ" },
          { en: "Taktubu (تَكْتُبُ)", ur: "تَكْتُبُ" },
          { en: "Naktubu (نَكْتُبُ)", ur: "نَكْتُبُ" },
        ],
        correct: 1,
      },
      {
        en: "What prefix is used for 'Ana' (I) in present tense?",
        ur: "'أَنَا' کے ساتھ مضارع میں کیا سابقہ آتا ہے؟",
        options: [
          { en: "يَ (Ya-)", ur: "يَ" },
          { en: "تَ (Ta-)", ur: "تَ" },
          { en: "أَ (A-)", ur: "أَ" },
          { en: "نَ (Na-)", ur: "نَ" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Yaktubu al-waladu'",
        ur: "ترجمہ: 'يَكْتُبُ الْوَلَدُ'",
        options: [
          { en: "The boy wrote", ur: "لڑکے نے لکھا" },
          { en: "The boy writes / is writing", ur: "لڑکا لکھتا ہے / لکھ رہا ہے" },
          { en: "The boy will write", ur: "لڑکا لکھے گا" },
          { en: "The boy read", ur: "لڑکے نے پڑھا" },
        ],
        correct: 1,
      },
      {
        en: "What is the present tense of 'Dhahaba' (went) for 'Hiya' (she)?",
        ur: "'هِيَ' کے ساتھ 'ذَهَبَ' کا مضارع کیا ہے؟",
        options: [
          { en: "Yadhabu (يَذْهَبُ)", ur: "يَذْهَبُ" },
          { en: "Adhabu (أَذْهَبُ)", ur: "أَذْهَبُ" },
          { en: "Tadhabu (تَذْهَبُ)", ur: "تَذْهَبُ" },
          { en: "Nadhabu (نَذْهَبُ)", ur: "نَذْهَبُ" },
        ],
        correct: 2,
      },
      {
        en: "What prefix is used for 'Nahnu' (we) in present tense?",
        ur: "'نَحْنُ' کے ساتھ مضارع میں کیا سابقہ آتا ہے؟",
        options: [
          { en: "أَ (A-)", ur: "أَ" },
          { en: "يَ (Ya-)", ur: "يَ" },
          { en: "تَ (Ta-)", ur: "تَ" },
          { en: "نَ (Na-)", ur: "نَ" },
        ],
        correct: 3,
      },
      {
        en: "Translate: 'Naktubu fil fasli'",
        ur: "ترجمہ: 'نَكْتُبُ فِي الْفَصْلِ'",
        options: [
          { en: "He writes in the class", ur: "وہ کلاس میں لکھتا ہے" },
          { en: "You write in the class", ur: "تم کلاس میں لکھتے ہو" },
          { en: "We write in the class", ur: "ہم کلاس میں لکھتے ہیں" },
          { en: "I write in the class", ur: "میں کلاس میں لکھتا ہوں" },
        ],
        correct: 2,
      },
      {
        en: "What is the present tense of 'Akala' (ate) for 'Anta' (you, m)?",
        ur: "'أَنْتَ' کے ساتھ 'أَكَلَ' کا مضارع کیا ہے؟",
        options: [
          { en: "Yakulu (يَأْكُلُ)", ur: "يَأْكُلُ" },
          { en: "Takulu (تَأْكُلُ)", ur: "تَأْكُلُ" },
          { en: "Akulu (أَكُلُ)", ur: "أَكُلُ" },
          { en: "Nakulu (نَأْكُلُ)", ur: "نَأْكُلُ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Yaqra'u al-talibul qur'ana'",
        ur: "ترجمہ: 'يَقْرَأُ الطَّالِبُ الْقُرْآنَ'",
        options: [
          { en: "The student read the Quran", ur: "طالب علم نے قرآن پڑھا" },
          { en: "The student reads the Quran", ur: "طالب علم قرآن پڑھتا ہے" },
          { en: "The student will read the Quran", ur: "طالب علم قرآن پڑھے گا" },
          { en: "The teacher reads the Quran", ur: "استاد قرآن پڑھتا ہے" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Tasma'u al-bintul aghniata'",
        ur: "ترجمہ: 'تَسْمَعُ الْبِنْتُ الْأَغَانِيَ'",
        options: [
          { en: "The girl heard songs", ur: "لڑکی نے گانے سنے" },
          { en: "The girl listens to songs", ur: "لڑکی گانے سنتی ہے" },
          { en: "The girl will listen to songs", ur: "لڑکی گانے سنے گی" },
          { en: "The boy listens to songs", ur: "لڑکا گانے سنتا ہے" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 20 — Negation of Present tense (لَا + مضارع)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 20,
    questions: [
      {
        en: "Which word is used to negate the present tense verb?",
        ur: "مضارع فعل کی نفی کے لیے کون سا لفظ استعمال ہوتا ہے؟",
        options: [
          { en: "Lam (لَمْ)", ur: "لَمْ" },
          { en: "Lan (لَنْ)", ur: "لَنْ" },
          { en: "La (لَا)", ur: "لَا" },
          { en: "Laysa (لَيْسَ)", ur: "لَيْسَ" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'La yaktubu al-waladu'",
        ur: "ترجمہ: 'لَا يَكْتُبُ الْوَلَدُ'",
        options: [
          { en: "The boy is writing", ur: "لڑکا لکھ رہا ہے" },
          { en: "The boy does not write", ur: "لڑکا نہیں لکھتا" },
          { en: "Did the boy not write?", ur: "کیا لڑکے نے نہیں لکھا؟" },
          { en: "The boy will not write", ur: "لڑکا نہیں لکھے گا" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'La adhabu ilal madrasah'",
        ur: "ترجمہ: 'لَا أَذْهَبُ إِلَى الْمَدْرَسَةِ'",
        options: [
          { en: "I do not go to school", ur: "میں اسکول نہیں جاتا" },
          { en: "He does not go to school", ur: "وہ اسکول نہیں جاتا" },
          { en: "You do not go to school", ur: "تم اسکول نہیں جاتے" },
          { en: "We do not go to school", ur: "ہم اسکول نہیں جاتے" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'La taktubu al-bintul dars'",
        ur: "ترجمہ: 'لَا تَكْتُبُ الْبِنْتُ الدَّرْسَ'",
        options: [
          { en: "The girl does not write the lesson", ur: "لڑکی سبق نہیں لکھتی" },
          { en: "The girl writes the lesson", ur: "لڑکی سبق لکھتی ہے" },
          { en: "The girl did not write the lesson", ur: "لڑکی نے سبق نہیں لکھا" },
          { en: "The boy does not write the lesson", ur: "لڑکا سبق نہیں لکھتا" },
        ],
        correct: 0,
      },
      {
        en: "After 'La' (لَا) for negation, the verb is in which form?",
        ur: "نفی کے 'لَا' کے بعد فعل کس حالت میں ہوتا ہے؟",
        options: [
          { en: "Majzoom (جَزم) form", ur: "مجزوم" },
          { en: "Mansoob (نصب) form", ur: "منصوب" },
          { en: "Marfu' (رفع) form — unchanged Mudaari'", ur: "مرفوع — مضارع بغیر تبدیلی کے" },
          { en: "Past tense form", ur: "ماضی کی شکل" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'La naqra'u al-qur'ana al-yawma'",
        ur: "ترجمہ: 'لَا نَقْرَأُ الْقُرْآنَ الْيَوْمَ'",
        options: [
          { en: "We do not read the Quran today", ur: "ہم آج قرآن نہیں پڑھتے" },
          { en: "We read the Quran today", ur: "ہم آج قرآن پڑھتے ہیں" },
          { en: "They do not read the Quran today", ur: "وہ آج قرآن نہیں پڑھتے" },
          { en: "I do not read the Quran today", ur: "میں آج قرآن نہیں پڑھتا" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'La taskunu fi hadha al-baiti'",
        ur: "ترجمہ: 'لَا تَسْكُنُ فِي هٰذَا الْبَيْتِ'",
        options: [
          { en: "She lives in this house", ur: "وہ اس گھر میں رہتی ہے" },
          { en: "She does not live in this house", ur: "وہ اس گھر میں نہیں رہتی" },
          { en: "He does not live in this house", ur: "وہ اس گھر میں نہیں رہتا" },
          { en: "I do not live in this house", ur: "میں اس گھر میں نہیں رہتا" },
        ],
        correct: 1,
      },
      {
        en: "What does 'Yaskunu' (يَسْكُنُ) mean?",
        ur: "'يَسْكُنُ' کا کیا مطلب ہے؟",
        options: [
          { en: "He goes", ur: "وہ جاتا ہے" },
          { en: "He eats", ur: "وہ کھاتا ہے" },
          { en: "He lives / He resides", ur: "وہ رہتا ہے" },
          { en: "He works", ur: "وہ کام کرتا ہے" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'La tadhabu al-imra'atu ila al-suqi al-yawm'",
        ur: "ترجمہ: 'لَا تَذْهَبُ الْمَرْأَةُ إِلَى السُّوقِ الْيَوْمَ'",
        options: [
          { en: "The woman went to the market today", ur: "عورت آج بازار گئی" },
          { en: "The woman does not go to the market today", ur: "عورت آج بازار نہیں جاتی" },
          { en: "The woman will not go to the market", ur: "عورت بازار نہیں جائے گی" },
          { en: "The man does not go to the market today", ur: "مرد آج بازار نہیں جاتا" },
        ],
        correct: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 21 — Negation of Past tense (لَمْ + مجزوم)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 21,
    questions: [
      {
        en: "Which word negates the past tense in Arabic?",
        ur: "ماضی فعل کی نفی کے لیے کون سا لفظ استعمال ہوتا ہے؟",
        options: [
          { en: "La (لَا)", ur: "لَا" },
          { en: "Lan (لَنْ)", ur: "لَنْ" },
          { en: "Lam (لَمْ)", ur: "لَمْ" },
          { en: "Ma (مَا)", ur: "مَا" },
        ],
        correct: 2,
      },
      {
        en: "After 'Lam' (لَمْ), the verb is in which form?",
        ur: "'لَمْ' کے بعد فعل کس شکل میں ہوتا ہے؟",
        options: [
          { en: "Past tense (Maadi)", ur: "ماضی" },
          { en: "Present tense Marfu' (مرفوع مضارع)", ur: "مرفوع مضارع" },
          { en: "Present tense Majzoom (مجزوم مضارع)", ur: "مجزوم مضارع" },
          { en: "Mansoob (منصوب مضارع)", ur: "منصوب مضارع" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Lam yaktubu al-waladu'",
        ur: "ترجمہ: 'لَمْ يَكْتُبِ الْوَلَدُ'",
        options: [
          { en: "The boy wrote", ur: "لڑکے نے لکھا" },
          { en: "The boy did not write", ur: "لڑکے نے نہیں لکھا" },
          { en: "The boy does not write", ur: "لڑکا نہیں لکھتا" },
          { en: "The boy will not write", ur: "لڑکا نہیں لکھے گا" },
        ],
        correct: 1,
      },
      {
        en: "What happens to the Dhamma at end of Mudaari' after Lam?",
        ur: "'لَمْ' کے بعد مضارع کے آخر کا ضمہ کیا ہو جاتا ہے؟",
        options: [
          { en: "It stays as Dhamma", ur: "ضمہ رہتا ہے" },
          { en: "It becomes Fatha", ur: "فتحہ ہو جاتا ہے" },
          { en: "It becomes Sukoon (Jazm)", ur: "سکون (جزم) ہو جاتا ہے" },
          { en: "It becomes Kasra", ur: "کسرہ ہو جاتا ہے" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Lam adhabu ilal madrasati'",
        ur: "ترجمہ: 'لَمْ أَذْهَبْ إِلَى الْمَدْرَسَةِ'",
        options: [
          { en: "I did not go to school", ur: "میں اسکول نہیں گیا" },
          { en: "He did not go to school", ur: "وہ اسکول نہیں گیا" },
          { en: "I do not go to school", ur: "میں اسکول نہیں جاتا" },
          { en: "I will not go to school", ur: "میں اسکول نہیں جاؤں گا" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'Lam tashrab al-bintul haliba'",
        ur: "ترجمہ: 'لَمْ تَشْرَبِ الْبِنْتُ الْحَلِيبَ'",
        options: [
          { en: "The girl did not drink the milk", ur: "لڑکی نے دودھ نہیں پیا" },
          { en: "The girl drank the milk", ur: "لڑکی نے دودھ پیا" },
          { en: "The girl does not drink milk", ur: "لڑکی دودھ نہیں پیتی" },
          { en: "The boy did not drink the milk", ur: "لڑکے نے دودھ نہیں پیا" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'Lam nakul al-ta'aama'",
        ur: "ترجمہ: 'لَمْ نَأْكُلِ الطَّعَامَ'",
        options: [
          { en: "I did not eat the food", ur: "میں نے کھانا نہیں کھایا" },
          { en: "He did not eat the food", ur: "اس نے کھانا نہیں کھایا" },
          { en: "We did not eat the food", ur: "ہم نے کھانا نہیں کھایا" },
          { en: "You did not eat the food", ur: "تم نے کھانا نہیں کھایا" },
        ],
        correct: 2,
      },
      {
        en: "True or False: 'Lam' changes the verb to past tense form.",
        ur: "صحیح یا غلط: 'لَمْ' فعل کو ماضی کی شکل میں بدل دیتا ہے۔",
        options: [
          { en: "True", ur: "صحیح" },
          { en: "False — it uses present tense form (Mudaari') with Jazm", ur: "غلط — مضارع مجزوم استعمال ہوتا ہے" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Lam yaqra' al-talibul kitaba'",
        ur: "ترجمہ: 'لَمْ يَقْرَأِ الطَّالِبُ الْكِتَابَ'",
        options: [
          { en: "The student read the book", ur: "طالب علم نے کتاب پڑھی" },
          { en: "The student did not read the book", ur: "طالب علم نے کتاب نہیں پڑھی" },
          { en: "The student does not read the book", ur: "طالب علم کتاب نہیں پڑھتا" },
          { en: "The student will not read the book", ur: "طالب علم کتاب نہیں پڑھے گا" },
        ],
        correct: 1,
      },
      {
        en: "What does 'Yasma'' (يَسْمَعُ) mean and what is its Lam-negated form?",
        ur: "'يَسْمَعُ' کا کیا مطلب ہے اور لَمْ کے ساتھ کیا شکل بنے گی؟",
        options: [
          { en: "He hears / Lam yasma' (لَمْ يَسْمَعْ)", ur: "وہ سنتا ہے / لَمْ يَسْمَعْ" },
          { en: "He sees / Lam yara' (لَمْ يَرَ)", ur: "وہ دیکھتا ہے / لَمْ يَرَ" },
          { en: "He goes / Lam yadhhab (لَمْ يَذْهَبْ)", ur: "وہ جاتا ہے / لَمْ يَذْهَبْ" },
          { en: "He eats / Lam ya'kul (لَمْ يَأْكُلْ)", ur: "وہ کھاتا ہے / لَمْ يَأْكُلْ" },
        ],
        correct: 0,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 22 — Future tense (سَـ / سَوْفَ + مضارع)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 22,
    questions: [
      {
        en: "Which prefix/word indicates near future tense?",
        ur: "قریب کا مستقبل ظاہر کرنے کے لیے کون سا سابقہ استعمال ہوتا ہے؟",
        options: [
          { en: "Sawfa (سَوْفَ)", ur: "سَوْفَ" },
          { en: "Sa- (سَـ)", ur: "سَـ" },
          { en: "Lam (لَمْ)", ur: "لَمْ" },
          { en: "La (لَا)", ur: "لَا" },
        ],
        correct: 1,
      },
      {
        en: "Which word indicates distant future tense?",
        ur: "بعید مستقبل کے لیے کون سا لفظ استعمال ہوتا ہے؟",
        options: [
          { en: "Sa- (سَـ)", ur: "سَـ" },
          { en: "Lam (لَمْ)", ur: "لَمْ" },
          { en: "Sawfa (سَوْفَ)", ur: "سَوْفَ" },
          { en: "La (لَا)", ur: "لَا" },
        ],
        correct: 2,
      },
      {
        en: "After 'Sa-' or 'Sawfa', the verb is in which form?",
        ur: "'سَـ' یا 'سَوْفَ' کے بعد فعل کس شکل میں ہوتا ہے؟",
        options: [
          { en: "Past tense (Maadi)", ur: "ماضی" },
          { en: "Present tense Marfu' (Mudaari' unchanged)", ur: "مضارع مرفوع" },
          { en: "Majzoom form", ur: "مجزوم" },
          { en: "Mansoob form", ur: "منصوب" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Sa-yaktubu al-waladu'",
        ur: "ترجمہ: 'سَيَكْتُبُ الْوَلَدُ'",
        options: [
          { en: "The boy wrote", ur: "لڑکے نے لکھا" },
          { en: "The boy writes", ur: "لڑکا لکھتا ہے" },
          { en: "The boy will write (soon)", ur: "لڑکا (جلد) لکھے گا" },
          { en: "The boy did not write", ur: "لڑکے نے نہیں لکھا" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Sawfa adhabu ila al-masjidi'",
        ur: "ترجمہ: 'سَوْفَ أَذْهَبُ إِلَى الْمَسْجِدِ'",
        options: [
          { en: "I went to the mosque", ur: "میں مسجد گیا" },
          { en: "I go to the mosque", ur: "میں مسجد جاتا ہوں" },
          { en: "I will go to the mosque (distant future)", ur: "میں مسجد جاؤں گا (بعید مستقبل)" },
          { en: "I do not go to the mosque", ur: "میں مسجد نہیں جاتا" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Sa-naqra'u al-qur'ana ghadan'",
        ur: "ترجمہ: 'سَنَقْرَأُ الْقُرْآنَ غَدًا'",
        options: [
          { en: "We read the Quran yesterday", ur: "ہم نے کل قرآن پڑھا" },
          { en: "We will read the Quran tomorrow", ur: "ہم کل قرآن پڑھیں گے" },
          { en: "We are reading the Quran now", ur: "ہم ابھی قرآن پڑھ رہے ہیں" },
          { en: "You will read the Quran tomorrow", ur: "تم کل قرآن پڑھو گے" },
        ],
        correct: 1,
      },
      {
        en: "What does 'Ghadan' (غَدًا) mean?",
        ur: "'غَدًا' کا کیا مطلب ہے؟",
        options: [
          { en: "Yesterday", ur: "کل (گزرا ہوا)" },
          { en: "Today", ur: "آج" },
          { en: "Tomorrow", ur: "کل (آنے والا)" },
          { en: "Now", ur: "ابھی" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Sa-tarji'u al-mudarrisatu al-yawma'",
        ur: "ترجمہ: 'سَتَرْجِعُ الْمُدَرِّسَةُ الْيَوْمَ'",
        options: [
          { en: "The female teacher returned today", ur: "خاتون استاد آج واپس آئیں" },
          { en: "The female teacher will return today", ur: "خاتون استاد آج واپس آئیں گی" },
          { en: "The male teacher will return today", ur: "مرد استاد آج واپس آئیں گے" },
          { en: "The teacher is returning today", ur: "استاد آج واپس آ رہی ہیں" },
        ],
        correct: 1,
      },
      {
        en: "What does 'Al-yawma' (الْيَوْمَ) mean?",
        ur: "'الْيَوْمَ' کا کیا مطلب ہے؟",
        options: [
          { en: "Yesterday", ur: "کل (گزرا)" },
          { en: "Tomorrow", ur: "کل (آنے والا)" },
          { en: "Today", ur: "آج" },
          { en: "This week", ur: "اس ہفتے" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'Sawfa yaskunu fil baiti al-jadidi'",
        ur: "ترجمہ: 'سَوْفَ يَسْكُنُ فِي الْبَيْتِ الْجَدِيدِ'",
        options: [
          { en: "He lives in the new house", ur: "وہ نئے گھر میں رہتا ہے" },
          { en: "He lived in the new house", ur: "وہ نئے گھر میں رہا" },
          { en: "He will live in the new house (future)", ur: "وہ نئے گھر میں رہے گا" },
          { en: "He did not live in the new house", ur: "وہ نئے گھر میں نہیں رہا" },
        ],
        correct: 2,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 23 — Imperative (فعل الأمر) + Prohibition (لَا الناهية)
  // ─────────────────────────────────────────────────────────
  {
    lectureId: 23,
    questions: [
      {
        en: "How is the imperative (command) verb formed in Arabic?",
        ur: "عربی میں فعل امر کیسے بناتے ہیں؟",
        options: [
          { en: "By adding Sa- to the Mudaari'", ur: "مضارع پر سَـ لگا کر" },
          { en: "By removing the Mudaari' prefix and adjusting the start", ur: "مضارع کا سابقہ ہٹا کر اور شروع درست کر کے" },
          { en: "By adding -na to the verb", ur: "فعل پر -نا لگا کر" },
          { en: "Same as past tense", ur: "ماضی کی شکل جیسا" },
        ],
        correct: 1,
      },
      {
        en: "What is the imperative of 'Kataba' (to write) for 'Anta' (you, m)?",
        ur: "'أَنْتَ' کے لیے 'كَتَبَ' کا فعل امر کیا ہے؟",
        options: [
          { en: "Katabta (كَتَبْتَ)", ur: "كَتَبْتَ" },
          { en: "Uktub (اُكْتُبْ)", ur: "اُكْتُبْ" },
          { en: "Taktubu (تَكْتُبُ)", ur: "تَكْتُبُ" },
          { en: "Yaktub (يَكْتُبْ)", ur: "يَكْتُبْ" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'Uktub darsaka'",
        ur: "ترجمہ: 'اُكْتُبْ دَرْسَكَ'",
        options: [
          { en: "He wrote his lesson", ur: "اس نے اپنا سبق لکھا" },
          { en: "Write your lesson!", ur: "اپنا سبق لکھو!" },
          { en: "You wrote your lesson", ur: "تم نے اپنا سبق لکھا" },
          { en: "Do not write your lesson", ur: "اپنا سبق نہ لکھو" },
        ],
        correct: 1,
      },
      {
        en: "What is the imperative of 'Dhahaba' (to go) for 'Anta'?",
        ur: "'أَنْتَ' کے لیے 'ذَهَبَ' کا فعل امر کیا ہے؟",
        options: [
          { en: "Idhhab (اِذْهَبْ)", ur: "اِذْهَبْ" },
          { en: "Tadhhabu (تَذْهَبُ)", ur: "تَذْهَبُ" },
          { en: "Dhahab (ذَهَبَ)", ur: "ذَهَبَ" },
          { en: "Sa-tadhabu (سَتَذْهَبُ)", ur: "سَتَذْهَبُ" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'Idhhab ilal masjidi'",
        ur: "ترجمہ: 'اِذْهَبْ إِلَى الْمَسْجِدِ'",
        options: [
          { en: "He went to the mosque", ur: "وہ مسجد گیا" },
          { en: "Go to the mosque!", ur: "مسجد جاؤ!" },
          { en: "Do not go to the mosque", ur: "مسجد نہ جاؤ" },
          { en: "You will go to the mosque", ur: "تم مسجد جاؤ گے" },
        ],
        correct: 1,
      },
      {
        en: "How do you form a prohibition (Do not!) in Arabic?",
        ur: "عربی میں نہی (نہ کرو) کیسے بناتے ہیں؟",
        options: [
          { en: "Lam + Majzoom Mudaari'", ur: "لَمْ + مجزوم مضارع" },
          { en: "La Naahiya + Majzoom Mudaari'", ur: "لَا ناہیہ + مجزوم مضارع" },
          { en: "Sawfa + Mudaari'", ur: "سَوْفَ + مضارع" },
          { en: "La + Marfu' Mudaari'", ur: "لَا + مرفوع مضارع" },
        ],
        correct: 1,
      },
      {
        en: "Translate: 'La taktub fi hadha al-kitaabi'",
        ur: "ترجمہ: 'لَا تَكْتُبْ فِي هٰذَا الْكِتَابِ'",
        options: [
          { en: "Write in this book!", ur: "اس کتاب میں لکھو!" },
          { en: "He does not write in this book", ur: "وہ اس کتاب میں نہیں لکھتا" },
          { en: "Do not write in this book!", ur: "اس کتاب میں نہ لکھو!" },
          { en: "He did not write in this book", ur: "اس نے اس کتاب میں نہیں لکھا" },
        ],
        correct: 2,
      },
      {
        en: "What is the imperative of 'Qara'a' (to read) for 'Anta'?",
        ur: "'أَنْتَ' کے لیے 'قَرَأَ' کا فعل امر کیا ہے؟",
        options: [
          { en: "Iqra' (اِقْرَأْ)", ur: "اِقْرَأْ" },
          { en: "Taqra'u (تَقْرَأُ)", ur: "تَقْرَأُ" },
          { en: "Qara'a (قَرَأَ)", ur: "قَرَأَ" },
          { en: "La taqra' (لَا تَقْرَأْ)", ur: "لَا تَقْرَأْ" },
        ],
        correct: 0,
      },
      {
        en: "Translate: 'Iqra'il qur'ana yawmiyan'",
        ur: "ترجمہ: 'اِقْرَأِ الْقُرْآنَ يَوْمِيًّا'",
        options: [
          { en: "Do not read the Quran daily", ur: "روزانہ قرآن نہ پڑھو" },
          { en: "He reads the Quran daily", ur: "وہ روزانہ قرآن پڑھتا ہے" },
          { en: "Read the Quran daily!", ur: "روزانہ قرآن پڑھو!" },
          { en: "You read the Quran daily", ur: "تم روزانہ قرآن پڑھتے ہو" },
        ],
        correct: 2,
      },
      {
        en: "Translate: 'La tajlis huna'",
        ur: "ترجمہ: 'لَا تَجْلِسْ هُنَا'",
        options: [
          { en: "Sit here!", ur: "یہاں بیٹھو!" },
          { en: "He does not sit here", ur: "وہ یہاں نہیں بیٹھتا" },
          { en: "Do not sit here!", ur: "یہاں مت بیٹھو!" },
          { en: "He did not sit here", ur: "وہ یہاں نہیں بیٹھا" },
        ],
        correct: 2,
      },
    ],
  },
];

// ============================================================
// Seed function
// ============================================================
async function seedV2() {
  console.log('🚀 Starting Version 2 quiz seeding...\n');

  try {
    // Fetch all existing version-1 quizzes to get lecture_id mappings
    const existingQuizzes = await sql`
      SELECT id, lecture_id, title, quiz_type FROM quizzes WHERE version = 1
      ORDER BY lecture_id
    `;

    const lectureMap = {};
    for (const q of existingQuizzes) {
      lectureMap[q.lecture_id] = { quizType: q.quiz_type, title: q.title };
    }

    let totalInserted = 0;

    for (const entry of v2Data) {
      const { lectureId, questions } = entry;

      const meta = lectureMap[lectureId];
      if (!meta) {
        console.warn(`⚠️  No existing quiz found for lecture_id ${lectureId} — skipping.`);
        continue;
      }

      // Check if version 2 already exists for this lecture
      const existing = await sql`
        SELECT id FROM quizzes 
        WHERE lecture_id = ${lectureId} AND version = 2
        LIMIT 1
      `;

      if (existing.length > 0) {
        console.log(`⏭️  Lecture ${lectureId}: Version 2 already exists (Quiz ID ${existing[0].id}) — skipping.`);
        continue;
      }

      // Insert the new version 2 quiz
      const [newQuiz] = await sql`
        INSERT INTO quizzes (lecture_id, title, quiz_type, version)
        VALUES (${lectureId}, ${meta.title}, ${meta.quizType}, 2)
        RETURNING id
      `;

      const quizId = newQuiz.id;
      console.log(`✅ Created Version 2 quiz for Lecture ${lectureId} → Quiz ID ${quizId}`);

      // Insert questions
      for (const q of questions) {
        // Shuffle options to randomize correct answer position
        const indexed = q.options.map((opt, i) => ({ ...opt, origIdx: i }));
        for (let i = indexed.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
        }
        const shuffledOptions = indexed.map(({ en, ur }) => ({ en, ur }));
        const newCorrect = indexed.findIndex(opt => opt.origIdx === q.correct);

        await sql`
          INSERT INTO questions (quiz_id, question_en, question_ur, options, correct_option_index)
          VALUES (
            ${quizId},
            ${q.en},
            ${q.ur},
            ${JSON.stringify(shuffledOptions)},
            ${newCorrect}
          )
        `;
        totalInserted++;
      }

      console.log(`   📝 Inserted ${questions.length} questions for Lecture ${lectureId}`);
    }

    console.log(`\n🎉 Done! Total questions inserted: ${totalInserted}`);
    console.log(`📚 Version 2 quizzes created for ${v2Data.length} lectures.`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    throw err;
  }
}

seedV2();
