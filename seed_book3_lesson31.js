import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is the primary definition of 'Al-Ḥāl' (الحَالُ) reaffirmed in Lesson 31?",
    "ur": "سبق 31 میں 'حال' کی کیا بنیادی اور جامع تعریف بیان کی گئی ہے؟",
    "options": [
      {
        "en": "An extra descriptive word (وَصْفٌ فَضْلَةٌ) mentioned to explain the posture/state (هَيْئَة) of its owner when the action occurs",
        "ur": "وہ اسمِ وصف فضلہ جو فعل کے وقوع کے وقت اپنے صاحب (فاعل/مفعول وغیرہ) کی ہیئت و حالت بیان کرے"
      },
      {
        "en": "A principal noun that acts as subject",
        "ur": "بنیادی اسم جو فاعل کا کام کرے"
      },
      {
        "en": "A particle of condition causing Jazm",
        "ur": "جزم دینے والا شرط کا حرف"
      },
      {
        "en": "A number pattern for counting",
        "ur": "گنتی کا عددی وزن"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What syntactic positions can 'Ṣāḥib al-Ḥāl' (صَاحِبُ الحَالِ) occupy in a sentence?",
    "ur": "جملے میں 'صاحبِ حال' (جس کی حالت بیان کی جائے) کون کون سے اعرابی مواضع پر واقع ہو سکتا ہے؟",
    "options": [
      {
        "en": "Subject (فاعل), Pro-subject (نائب فاعل), Direct Object (مفعول به), Predicate (خبر), or Topic (مبتدأ)",
        "ur": "فاعل، نائب فاعل، مفعول بہ، خبر، یا مبتدأ"
      },
      {
        "en": "Prepositional particle only",
        "ur": "صرف حرفِ جر"
      },
      {
        "en": "Adverb of time only",
        "ur": "صرف ظرفِ زمان"
      },
      {
        "en": "Diptote noun only",
        "ur": "صرف غیر منصرف اسم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the GENERAL rule regarding 'Ṣāḥib al-Ḥāl' being definite vs. indefinite?",
    "ur": "'صاحبِ حال' کا معرفہ یا نکرہ ہونا کیا عمومی نحوی قاعدہ (الأصل) رکھتا ہے؟",
    "options": [
      {
        "en": "The general rule (الأَصْلُ) is that Ṣāḥib al-Ḥāl must be Definite (معرفة), but it may come as Indefinite (نكرة) when a justifying condition (مسوغ) is present",
        "ur": "اصل قاعدہ (الأصل) یہ ہے کہ صاحبِ حال **معرفہ** ہو، لیکن خاص اسباب و مسوغات (مُسَوِّغ) کی موجودگی میں نکرہ بھی آ سکتا ہے"
      },
      {
        "en": "It must always be indefinite in all cases",
        "ur": "اس کا ہمیشہ نکرہ ہونا واجب ہے"
      },
      {
        "en": "It must always be a past verb",
        "ur": "اس کا ہمیشہ فعلِ ماضی ہونا واجب ہے"
      },
      {
        "en": "It must always be a particle",
        "ur": "اس کا ہمیشہ حرف ہونا واجب ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the FIRST justifying condition (مسوغ) allowing Ḥāl to come from an Indefinite noun?",
    "ur": "نکرہ اسم سے حال لانے کا پہلا جوزی و نحوی مسوغ (سبب) کیا ہے؟",
    "options": [
      {
        "en": "When Al-Ḥāl PRECEDES the indefinite noun (تَقَدُّمُ الحَالِ عَلَى النَّكِرَةِ, e.g., 'جَاءَنِي سَائِلاً طَالِبٌ')",
        "ur": "جب حال نکرہ اسم سے پہلے مقدم ہو کر آ جائے (جیسے: 'جَاءَنِي سَائِلاً طَالِبٌ')"
      },
      {
        "en": "When the noun is plural",
        "ur": "جب اسم جمع ہو"
      },
      {
        "en": "When the verb is in past tense",
        "ur": "جب فعل ماضی ہو"
      },
      {
        "en": "When the noun is diptote",
        "ur": "جب اسم غیر منصرف ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the SECOND justifying condition (مسوغ) allowing Ḥāl from an Indefinite noun?",
    "ur": "نکرہ اسم سے حال لانے کا دوسرا نحوی مسوغ کیا ہے؟",
    "options": [
      {
        "en": "When the indefinite noun is SPECIFIED by an adjective or Idāfah (تَخْصِيصُ النَّكِرَةِ بِوَصْفٍ أَوْ إِضَافَةٍ, e.g., 'جَاءَنِي طَالِبٌ مُوَاظِبٌ مُسْتَأْذِناً')",
        "ur": "جب نکرہ اسم صفت یا اضافت کے ذریعے مخصوص ہو جائے (جیسے: 'جَاءَنِي طَالِبٌ مُوَاظِبٌ مُسْتَأْذِناً')"
      },
      {
        "en": "When the verb is passive",
        "ur": "جب فعل مجہول ہو"
      },
      {
        "en": "When the noun ends in Alif",
        "ur": "جب اسم الف پر ختم ہو"
      },
      {
        "en": "When the sentence is exclamatory",
        "ur": "جب جملہ تعجب کا ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the THIRD justifying condition (مسوغ) allowing Ḥāl from an Indefinite noun?",
    "ur": "نکرہ اسم سے حال لانے کا تیسرا نحوی مسوغ کیا ہے؟",
    "options": [
      {
        "en": "When preceded by Negation (نفي), Prohibition (نهي), or Interrogation (استفهام) (e.g., 'مَا جَاءَ اليَوْمَ أَحَدٌ مُتَأَخِّراً')",
        "ur": "جب نکرہ اسم سے پہلے نفی، نہی، یا استفہام واقع ہو (جیسے: 'مَا جَاءَ اليَوْمَ أَحَدٌ مُتَأَخِّراً')"
      },
      {
        "en": "When preceded by Inna",
        "ur": "جب اس سے پہلے انّ ہو"
      },
      {
        "en": "When followed by Kāna",
        "ur": "جب اس کے بعد کان ہو"
      },
      {
        "en": "When preceded by a number",
        "ur": "جب اس سے پہلے عدد ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the FOURTH justifying condition (مسوغ) allowing Ḥāl from an Indefinite noun?",
    "ur": "نکرہ اسم سے حال لانے کا چوتھا نحوی مسوغ کیا ہے؟",
    "options": [
      {
        "en": "When the Ḥāl is a clause attached with Waw al-Ḥāl (أن تكون الحال جملة مقرونة بالواو, e.g., 'أَوْ كَالَّذِي مَرَّ عَلَى قَرْيَةٍ وَهِيَ خَاوِيَةٌ')",
        "ur": "جب حال ایسا جملہ ہو جو واوُ الحال سے ملا ہوا ہو (جیسے: 'أَوْ كَالَّذِي مَرَّ عَلَى قَرْيَةٍ وَهِيَ خَاوِيَةٌ')"
      },
      {
        "en": "When the verb is imperative",
        "ur": "جب فعل امر ہو"
      },
      {
        "en": "When the sentence is conditional",
        "ur": "جب جملہ شرطیہ ہو"
      },
      {
        "en": "When the noun is dual",
        "ur": "جب اسم تثنیہ ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Can Ḥāl ever come from an Indefinite noun WITHOUT any justifying condition (بِلاَ مُسَوِّغٍ)?",
    "ur": "کیا نکرہ اسم سے بغیر کسی مسوغ کے بھی حال کا آنا سماعاً ثابت ہے؟",
    "options": [
      {
        "en": "Yes, based on authentic transmitted usage (سماعاً), as in the Hadith: 'صَلَّى رَسُولُ اللَّهِ قَاعِداً وَصَلَّى وَرَاءَهُ رِجَالٌ قِيَاماً'",
        "ur": "جی ہاں! سماعی طور پر ایسا وارد ہے، جیسے حدیثِ مبارکہ میں ہے: 'صَلَّى رَسُولُ اللَّهِ قَاعِداً وَصَلَّى وَرَاءَهُ رِجَالٌ قِيَاماً'"
      },
      {
        "en": "No, it is strictly logically impossible",
        "ur": "نہیں! یہ عقلًا بالکل ناممکن ہے"
      },
      {
        "en": "Only in modern dialects",
        "ur": "صرف جدید بولیوں میں"
      },
      {
        "en": "Only in future tense",
        "ur": "صرف فعلِ مستقبل میں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What broken plural (جمع تكسير) pattern is commonly used for Active Participles of pattern 'فَاعِلٌ' (e.g., قَائِمٌ, نَائِمٌ, صَائِمٌ, قَاعِدٌ)?",
    "ur": "اسمِ فاعل 'فَاعِلٌ' (مثلاً قَائِمٌ، نَائِمٌ، صَائِمٌ) کے لیے جمعِ تکسیر کا کون سا وزن کثرت سے آتا ہے؟",
    "options": [
      {
        "en": "فُعَّالٌ (e.g., قِيَامٌ, نِيَامٌ, صُيَّامٌ, قُرَّاءٌ) and فُعُولٌ (e.g., قُعُودٌ)",
        "ur": "فُعَّالٌ (مثلاً: قِيَامٌ، نِيَامٌ، صُيَّامٌ، قُرَّاءٌ) اور فُعُولٌ (مثلاً: قُعُودٌ)"
      },
      {
        "en": "فُعَلاَءُ",
        "ur": "فُعَلاَءُ"
      },
      {
        "en": "أَفْعِلاَءُ",
        "ur": "أَفْعِلاَءُ"
      },
      {
        "en": "مَفَاعِلُ",
        "ur": "مَفَاعِلُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Masdar pattern for verbs like 'لَعِبَ' and 'ضَحِكَ' taught in Lesson 31?",
    "ur": "سبق 31 کے مطابق افعال 'لَعِبَ' اور 'ضَحِكَ' کا مصدر کس وزن پر آتا ہے؟",
    "options": [
      {
        "en": "فَعِلٌ (e.g., لَعِبٌ and ضَحِكٌ)",
        "ur": "فَعِلٌ (مثلاً: لَعِبٌ اور ضَحِكٌ)"
      },
      {
        "en": "إِفْعَالٌ",
        "ur": "إِفْعَالٌ"
      },
      {
        "en": "تَفْعِيلٌ",
        "ur": "تَفْعِيلٌ"
      },
      {
        "en": "فُعُولٌ",
        "ur": "فُعُولٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, in 'يُؤْكَلُ اللَّحْمُ مَطْبُوحاً', what syntactic role does 'اللَّحْمُ' (Ṣāḥib al-Ḥāl) hold?",
    "ur": "تمرين 1 کے مطابق 'يُؤْكَلُ اللَّحْمُ مَطْبُوحاً' میں 'اللَّحْمُ' (صاحبِ حال) کا کیا ترکیبی منصب ہے؟",
    "options": [
      {
        "en": "Pro-subject / Na'ib Fa'il Marfoo' (نائب فاعل مرفوع)",
        "ur": "نائب فاعل مرفوع"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Direct Object / Maf'ool Bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Mubtada'",
        "ur": "مبتدأ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'اشْتَرَيْتُ الكِتَابَ مُجَلَّداً', what syntactic role does 'الكِتَابَ' (Ṣāḥib al-Ḥāl) hold?",
    "ur": "جملے 'اشْتَرَيْتُ الكِتَابَ مُجَلَّداً' میں 'الكِتَابَ' (صاحبِ حال) کا کیا ترکیبی منصب ہے؟",
    "options": [
      {
        "en": "Direct Object / Maf'ool Bihi Mansoob (مفعول به منصوب)",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Na'ib Fa'il",
        "ur": "نائب فاعل"
      },
      {
        "en": "Khabar",
        "ur": "خبر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'هَذَا الهِلاَلُ طَالِعاً', what syntactic role does 'الهِلاَلُ' (Ṣāḥib al-Ḥāl) hold?",
    "ur": "جملے 'هَذَا الهِلاَلُ طَالِعاً' میں 'الهِلاَلُ' (صاحبِ حال) کا کیا ترکیبی منصب ہے؟",
    "options": [
      {
        "en": "Predicate / Khabar Marfoo' (خبر مرفوع)",
        "ur": "خبر مرفوع"
      },
      {
        "en": "Direct Object",
        "ur": "مفعول بہ"
      },
      {
        "en": "Prepositional phrase",
        "ur": "جار مجرور"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'جَاءَنِي طَبِيبُ أَسْنَانٍ مُسْتَفْتِياً', why is Ḥāl coming from the indefinite 'طَبِيبُ أَسْنَانٍ'?",
    "ur": "جملے 'جَاءَنِي طَبِيبُ أَسْنَانٍ مُسْتَفْتِياً' میں نکرہ 'طَبِيبُ أَسْنَانٍ' سے حال آنے کا کیا سبب ہے؟",
    "options": [
      {
        "en": "Because the indefinite noun is specified by Idāfah (مُخَصَّصٌ بِالإِضَافَةِ)",
        "ur": "کیونکہ نکرہ اسم اضافت کے ذریعے **مخصوص** (مخصص بالإضافة) ہو گیا ہے"
      },
      {
        "en": "Because it is preceded by negation",
        "ur": "نفی سے پہلے ہونے کی وجہ سے"
      },
      {
        "en": "Because Al-Ḥāl is a clause",
        "ur": "حال جملہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is a number",
        "ur": "عدد ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, in 'مَا جَاءَ اليَوْمَ أَحَدٌ مُتَأَخِّراً', what justifies the indefinite Ṣāḥib al-Ḥāl 'أَحَدٌ'?",
    "ur": "تمرين 2 کے مطابق 'مَا جَاءَ اليَوْمَ أَحَدٌ مُتَأَخِّراً' میں نکرہ فاعل 'أَحَدٌ' کے لیے کیا مسوغ موجود ہے؟",
    "options": [
      {
        "en": "Preceded by Negation 'مَا' (مَسْبُوقٌ بِالنَّفْيِ)",
        "ur": "نفی حرف 'مَا' سے مسبوق ہونا (مسبوق بالنفي)"
      },
      {
        "en": "Preceded by Inna",
        "ur": "انّ سے مسبوق ہونا"
      },
      {
        "en": "Specified by Idāfah",
        "ur": "اضافت سے مخصوص ہونا"
      },
      {
        "en": "Preceded by Al-Ḥāl",
        "ur": "حال سے مسبوق ہونا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'لاَ يَدْخُلْ أَحَدٌ القَاعَةَ حَامِلاً حَقِيبَتَهُ', what justifies the indefinite Ṣāḥib al-Ḥāl 'أَحَدٌ'?",
    "ur": "جملے 'لاَ يَدْخُلْ أَحَدٌ القَاعَةَ حَامِلاً حَقِيبَتَهُ' میں 'أَحَدٌ' کے لیے کیا مسوغ ہے؟",
    "options": [
      {
        "en": "Preceded by Prohibition 'لاَ' (مَسْبُوقٌ بِالنَّهْيِ)",
        "ur": "نہی حرف 'لاَ' سے مسبوق ہونا (مسبوق بالنهي)"
      },
      {
        "en": "Preceded by Interrogation",
        "ur": "استفہام سے مسبوق ہونا"
      },
      {
        "en": "Advanced Ḥāl",
        "ur": "حالِ مقدم ہونا"
      },
      {
        "en": "Specified by adjective",
        "ur": "صفت سے مخصوص ہونا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'أَجَاءَ اليَوْمَ أَحَدٌ مُتَأَخِّراً؟', what justifies the indefinite Ṣāḥib al-Ḥāl 'أَحَدٌ'?",
    "ur": "جملے 'أَجَاءَ اليَوْمَ أَحَدٌ مُتَأَخِّراً؟' میں 'أَحَدٌ' کے لیے کیا مسوغ ہے؟",
    "options": [
      {
        "en": "Preceded by Interrogation Hamzah 'أَ' (مَسْبُوقٌ بِالاِسْتِفْهَامِ)",
        "ur": "ہمزۂ استفہام 'أَ' سے مسبوق ہونا (مسبوق بالاستفهام)"
      },
      {
        "en": "Preceded by Prohibition",
        "ur": "نہی سے مسبوق ہونا"
      },
      {
        "en": "Preceded by Negation",
        "ur": "نفی سے مسبوق ہونا"
      },
      {
        "en": "Specified by Idāfah",
        "ur": "اضافت سے مخصوص ہونا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'جَاءَنِي سَائِلاً طَالِبٌ', why is Ḥāl 'سَائِلاً' placed BEFORE its indefinite owner 'طَالِبٌ'?",
    "ur": "جملے 'جَاءَنِي سَائِلاً طَالِبٌ' میں حال 'سَائِلاً' اپنے صاحبِ حال 'طَالِبٌ' سے پہلے کیوں مقدم ہوا ہے؟",
    "options": [
      {
        "en": "Advancing Al-Ḥāl serves as the justifying condition (تَقَدُّمُ الحَالِ عَلَى النَّكِرَةِ) allowing an indefinite owner",
        "ur": "حال کا نکرہ صاحبِ حال پر مقدم ہونا (تقدم الحال على النكرة) خود مسوغ کا کام کرتا ہے"
      },
      {
        "en": "Because it is mandatory for all verbs",
        "ur": "تمام افعال کے لیے واجب ہونے کی وجہ سے"
      },
      {
        "en": "Because 'طالب' is plural",
        "ur": "طالب کے جمع ہونے کی وجہ سے"
      },
      {
        "en": "Because 'سائلاً' is diptote",
        "ur": "سائلاً کے غیر منصرف ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'جَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ' (Qur'an 12:16), what link (الرَّابِطُ) connects the Ḥāl clause 'يَبْكُونَ' to Ṣāḥib al-Ḥāl?",
    "ur": "تمرين 3 کے مطابق قرآنی آیہ 'وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ' میں جملہ حالیہ 'يَبْكُونَ' کا صاحبِ حال سے کیا رابط ہے؟",
    "options": [
      {
        "en": "The Pronoun alone (الضَّمِيرُ فَقَطْ: Waw in 'يبكون')",
        "ur": "صرف الضمير (فعل 'يبكون' کی ضمیر 'واو' - الضمير فقط)"
      },
      {
        "en": "Waw al-Ḥāl alone",
        "ur": "صرف واو الحال"
      },
      {
        "en": "Both Waw and Pronoun",
        "ur": "الواو والضمیر معا"
      },
      {
        "en": "No link exists",
        "ur": "کوئی رابط نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'وَصَلْتُ إِلَى مَكَّةَ وَالشَّمْسُ تَغْرُبُ', what link connects the Ḥāl clause to Ṣāḥib al-Ḥāl?",
    "ur": "جملے 'وَصَلْتُ إِلَى مَكَّةَ وَالشَّمْسُ تَغْرُبُ' میں جملہ حالیہ کا صاحبِ حال سے کیا رابط ہے؟",
    "options": [
      {
        "en": "Waw al-Ḥāl alone (الوَاوُ فَقَطْ)",
        "ur": "صرف واوُ الحال (الواو فقط)"
      },
      {
        "en": "Pronoun alone",
        "ur": "صرف الضمیر"
      },
      {
        "en": "Both Waw and Pronoun",
        "ur": "الواو والضمیر معا"
      },
      {
        "en": "No link exists",
        "ur": "کوئی رابط نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'خَرَجُوا مِنْ دِيَارِهِمْ وَهُمْ أُلُوفٌ' (Qur'an 2:243), what link connects the Ḥāl clause to Ṣāḥib al-Ḥāl?",
    "ur": "آیت مبارکہ 'خَرَجُوا مِنْ دِيَارِهِمْ وَهُمْ أُلُوفٌ' میں جملہ حالیہ کا کیا رابط ہے؟",
    "options": [
      {
        "en": "Both Waw al-Ḥāl AND the Pronoun together (الوَاوُ وَالضَّمِيرُ مَعاً: 'وَ' + 'هُمْ')",
        "ur": "واوُ الحال اور الضمير دونوں مل کر (الواو والضمير معا: 'وَ' + 'هُمْ')"
      },
      {
        "en": "Pronoun alone",
        "ur": "صرف الضمیر"
      },
      {
        "en": "Waw alone",
        "ur": "صرف الواو"
      },
      {
        "en": "Prepositional link",
        "ur": "حرفِ جر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'فَرَجَعَ مُوسَى إِلَى قَوْمِهِ غَضْبَانَ أَسِفاً' (Qur'an 20:86), how are 'غَضْبَانَ' and 'أَسِفاً' parsed?",
    "ur": "تمرين 4 کے مطابق آیہ مبارکہ 'فَرَجَعَ مُوسَى إِلَى قَوْمِهِ غَضْبَانَ أَسِفاً' میں 'غَضْبَانَ' اور 'أَسِفاً' کا کیا اعرابی منصب ہے؟",
    "options": [
      {
        "en": "Two multiple Ḥāl words (حَالٌ أُولَى وَحَالٌ ثَانِيَةٌ) in position of Nasb for 'مُوسَى'",
        "ur": "اسم 'موسى' کے لیے دو متعدد حال منصوب (حالٌ أُولَى وَحَالٌ ثَانِيَةٌ)"
      },
      {
        "en": "First is Fa'il, second is Maf'ool",
        "ur": "پہلا فاعل، دوسرا مفعول"
      },
      {
        "en": "First is Mubtada', second is Khabar",
        "ur": "پہلا مبتدا، دوسرا خبر"
      },
      {
        "en": "Prepositional phrases",
        "ur": "جار مجرور"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'أَيُحِبُّ أَحَدُكُمْ أَنْ يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا' (Qur'an 49:12), what is 'مَيْتًا'?",
    "ur": "قرآنی آیہ 'أَيُحِبُّ أَحَدُكُمْ أَنْ يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا' میں لفظ 'مَيْتًا' کا کیا ترکیبی منصب ہے؟",
    "options": [
      {
        "en": "Al-Ḥāl Mansoob describing the condition of 'أَخِيهِ'",
        "ur": "اسم 'أَخِيهِ' کے لیے **حالِ منصوب بالفتحة**"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
      },
      {
        "en": "Tamyeez",
        "ur": "تمیز"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the plural of the active participle 'قَائِمٌ' and 'نَائِمٌ' on pattern 'فُعَّالٌ'?",
    "ur": "وزن 'فُعَّالٌ' پر اسمِ فاعل 'قَائِمٌ' اور 'نَائِمٌ' کی جمعِ تکسیر کیا بنتی ہے؟",
    "options": [
      {
        "en": "قِيَامٌ (Qiyāmun) and نِيَامٌ (Niyāmun) on pattern فُعَّالٌ",
        "ur": "قِيَامٌ (وزن فُعَّالٌ) اور نِيَامٌ"
      },
      {
        "en": "أَقْوَامٌ",
        "ur": "أَقْوَامٌ"
      },
      {
        "en": "قُوَّامُونَ",
        "ur": "قُوَّامُونَ"
      },
      {
        "en": "مَقَامَاتٌ",
        "ur": "مَقَامَاتٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَنْ دَخَلَ بَيْتِيَ مُؤْمِناً' (Qur'an 71:28), how is 'مُؤْمِناً' parsed?",
    "ur": "تمرين 5 کے مطابق قرآنی آیہ 'وَلِمَنْ دَخَلَ بَيْتِيَ مُؤْمِناً' میں لفظ 'مُؤْمِناً' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Al-Ḥāl Mansoob with Fatha for the pronoun in 'دَخَلَ' / 'مَنْ'",
        "ur": "فعل 'دخل' کے فاعل (ضمیر) کے لیے **حالِ منصوب بالفتحة**"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
      },
      {
        "en": "Mudaf ilaihi",
        "ur": "مضاف الیہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ', how is 'عِشَاءً' parsed?",
    "ur": "آیت مبارکہ 'وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ' میں لفظ 'عِشَاءً' کا کیا اعرابی منصب ہے؟",
    "options": [
      {
        "en": "Maf'ool Feehi (Dharf Zamaan) Mansoob with Fatha",
        "ur": "آمد کا وقت بتانے کی بنا پر **مفعول فيه (ظرفِ زمان) منصوب**"
      },
      {
        "en": "Al-Ḥāl",
        "ur": "حال"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'خَرَجَ الطُّلاَّبُ مِنَ القَاعَةِ مَسْرُورِينَ':",
    "ur": "پورے جملے 'خَرَجَ الطُّلاَّبُ مِنَ القَاعَةِ مَسْرُورِينَ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "خَرَجَ: فعل ماضٍ، الطُّلاَّبُ: فاعل مرفوع بالضمة (صاحب الحال)، مِنَ القَاعَةِ: جار ومجرور، مَسْرُورِينَ: حال منصوبة بالياء لأنها جمع مذكر سالم",
        "ur": "خَرَجَ: فعلِ ماضی، الطُّلاَّبُ: فاعل مرفوع (صاحبِ حال)، مِنَ القَاعَةِ: جار و مجرور، مَسْرُورِينَ: **حال منصوبة بالياء (جمع مذكر سالم)**"
      },
      {
        "en": "خرج: مبتدأ، الطلاب: خبر، مسرورين: مفعول به",
        "ur": "خرج مبتدأ، الطلاب خبر، مسرورين مفعول بہ"
      },
      {
        "en": "خرج: حرف، الطلاب: اسم، مسرورين: نعت",
        "ur": "خرج حرف، الطلاب اسم، مسرورين نعت"
      },
      {
        "en": "None of the above",
        "ur": "ان میں سے کوئی نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'صَلَّى النَّبِيُّ قَاعِداً وَصَلَّى وَرَاءَهُ رِجَالٌ قِيَاماً':",
    "ur": "حدیثِ مبارکہ 'صَلَّى النَّبِيُّ قَاعِداً وَصَلَّى وَرَاءَهُ رِجَالٌ قِيَاماً' کے آخری حصے کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "صَلَّى: فعل ماضٍ، وَرَاءَهُ: ظرف ومضاف إليه، رِجَالٌ: فاعل مرفوع (نكرة)، قِيَاماً: حال منصوبة من النكرة بلا مسوغ",
        "ur": "صَلَّى: فعلِ ماضی، وَرَاءَهُ: ظرف و مضاف الیہ، رِجَالٌ: فاعلِ مرفوع (نکرہ)، قِيَاماً: **نکرہ اسم سے سماعی طور پر بلا مسوغ حالِ منصوب**"
      },
      {
        "en": "صلى: مبتدأ، قاعدا: خبر",
        "ur": "صلى مبتدأ، قاعداً خبر"
      },
      {
        "en": "رجال: مفعول به، قياما: صفة",
        "ur": "رجال مفعول بہ، قياماً صفت"
      },
      {
        "en": "None of the above",
        "ur": "ان میں سے کوئی نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "What is the plural of 'قَاعِدٌ' on pattern 'فُعُودٌ'?",
    "ur": "اسمِ فاعل 'قَاعِدٌ' کی جمعِ تکسیر وزن 'فُعُودٌ' پر کیا بنتی ہے؟",
    "options": [
      {
        "en": "قُعُودٌ (Qu'ūdun)",
        "ur": "قُعُودٌ"
      },
      {
        "en": "قَاعِدُونَ",
        "ur": "قَاعِدُونَ"
      },
      {
        "en": "مَقَاعِدُ",
        "ur": "مَقَاعِدُ"
      },
      {
        "en": "أَقْعَادٌ",
        "ur": "أَقْعَادٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Which statement accurately summarizes the core grammar rules taught in Lesson 31?",
    "ur": "سبق 31 کے بنیادی گرامر موضوعات کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers Al-Ḥāl and Ṣāḥib al-Ḥāl positions, 4 justifying conditions (مسوغات) for indefinite Ṣāḥib al-Ḥāl, sentence-Ḥāl links (الرابط), broken plurals of 'فَاعِلٌ' (فُعَّالٌ/فُعُودٌ), and Masdar pattern 'فَعِلٌ'",
        "ur": "اس سبق میں حال اور صاحبِ حال کے اعرابی مواضع، نکرہ سے حال لانے کے 4 مسوغات، جملہ حالیہ کے روابط، 'فَاعِلٌ' کی جمعِ تکسیر، اور 'فَعِلٌ' کے مصادر کا کامل احاطہ کیا گیا ہے"
      },
      {
        "en": "Covers prepositions only",
        "ur": "صرف حروفِ جر کا احاطہ"
      },
      {
        "en": "Covers condition particles only",
        "ur": "صرف ادواتِ شرط کا احاطہ"
      },
      {
        "en": "Covers numbers 1 to 10 only",
        "ur": "صرف اعداد 1 سے 10 کا احاطہ"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('🚀 Seeding Book 3 Lesson 31 Quiz...');
  try {
    // 1. Get Course ID for 'Madina Books'
    const courses = await sql`SELECT id, name FROM courses WHERE name = 'Madina Books' LIMIT 1`;
    if (courses.length === 0) {
      throw new Error('Course "Madina Books" not found.');
    }
    const courseId = courses[0].id;
    console.log(`Course ID: ${courseId}`);

    // 2. Get Section ID for 'Book 3'
    const sections = await sql`SELECT id, title FROM sections WHERE course_id = ${courseId} AND title ILIKE '%Book 3%' LIMIT 1`;
    if (sections.length === 0) {
      throw new Error('Section "Book 3" not found.');
    }
    const sectionId = sections[0].id;
    console.log(`Section ID: ${sectionId} (${sections[0].title})`);

    // 3. Find or Create Lecture for Lesson 31
    let lectureId;
    const existingLec = await sql`
      SELECT id, title, order_index FROM lectures
      WHERE section_id = ${sectionId} AND order_index = 31
      LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 31 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 31', 31)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 31: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 31 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 31))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 31.`);
      for (const eq of existingQuizzes) {
        console.log(`Processing old Quiz ID ${eq.id} ("${eq.title}")...`);
        const deletedResults = await sql`DELETE FROM results WHERE quiz_id = ${eq.id} RETURNING id`;
        console.log(`  - Deleted ${deletedResults.length} student attempt(s) for quiz ID ${eq.id}.`);
        const deletedQuestions = await sql`DELETE FROM questions WHERE quiz_id = ${eq.id} RETURNING id`;
        console.log(`  - Deleted ${deletedQuestions.length} old question(s) for quiz ID ${eq.id}.`);
        await sql`DELETE FROM quizzes WHERE id = ${eq.id}`;
        console.log(`  - Deleted old quiz ID ${eq.id}.`);
      }
    }

    // 5. Create the quiz for Book 3 Lesson 31
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 31 Quiz', 'Daily', 1)
      RETURNING id, title
    `;
    const newQuizId = newQuiz.id;
    console.log(`Created new Quiz: ID ${newQuizId} ("${newQuiz.title}")`);

    // 6. Insert all questions with part, en, ur, options, correct_option_index
    console.log(`Inserting ${questionsData.length} questions with Part metadata...`);
    for (let i = 0; i < questionsData.length; i++) {
      const q = questionsData[i];
      await sql`
        INSERT INTO questions (quiz_id, question_en, question_ur, options, correct_option_index, part)
        VALUES (
          ${newQuizId},
          ${q.en},
          ${q.ur},
          ${JSON.stringify(q.options)},
          ${q.correct},
          ${q.part}
        )
      `;
      console.log(`  [${i + 1}/${questionsData.length}] (${q.part}) ${q.en.slice(0, 45)}...`);
    }

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 31 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
