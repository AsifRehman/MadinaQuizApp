import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is 'Al-Maf'ool Fihi / Adh-Dharf' (المَفْعُولُ فِيهِ / الظَّرْفُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'مفعول فيه / ظرف' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A noun indicating the time or place where an action occurred, implying the meaning of 'في' (in/at)",
        "ur": "وہ اسم جو فعل کے سرزد ہونے کا وقت یا جگہ بتائے اور اس میں 'في' (میں/پر) کا معنی پوشیدہ ہو"
      },
      {
        "en": "A noun showing the tool used to perform the verb",
        "ur": "وہ اسم جو عمل کا آلہ بتائے"
      },
      {
        "en": "A verbal noun confirming the meaning of the verb",
        "ur": "وہ مصدر جو فعل کے معنی کی تاکید کرے"
      },
      {
        "en": "A noun showing the doer of the action",
        "ur": "وہ اسم جو فاعل کو ظاہر کرے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the two primary divisions of Adh-Dharf?",
    "ur": "ظرف کی بنیادی دو اقسام کون سی ہیں؟",
    "options": [
      {
        "en": "ظَرْفُ الزَّمَانِ (Dharf az-Zaman) and ظَرْفُ الـمَكَانِ (Dharf al-Makan)",
        "ur": "ظَرْفُ الزَّمَانِ (وقت بتانے والا) اور ظَرْفُ الـمَكَانِ (جگہ بتانے والا)"
      },
      {
        "en": "ظرف الفاعل اور ظرف المفعول",
        "ur": "ظرف الفاعل اور ظرف المفعول"
      },
      {
        "en": "ظرف الماضي اور ظرف المضارع",
        "ur": "ظرف الماضي اور ظرف المضارع"
      },
      {
        "en": "ظرف المعرفة اور ظرف النكرة",
        "ur": "ظرف المعرفة اور ظرف النكرة"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the primary grammatical case (إعراب) of a declinable (معرب) Dharf?",
    "ur": "معرب ظرف کا بنیادی اعرابی حکم کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Mansoob with Fatha (منصوب بالفتحة على الظرفية)",
        "ur": "ظرفیت کی بنا پر فتحہ کے ساتھ منصوب"
      },
      {
        "en": "Marfoo' with Damma in all cases",
        "ur": "تمام حالتوں میں ضمہ کے ساتھ مرفوع"
      },
      {
        "en": "Majroor with Kasra in all cases",
        "ur": "تمام حالتوں میں کسرہ کے ساتھ مجرور"
      },
      {
        "en": "Majzoom with Sukoon",
        "ur": "سکون کے ساتھ مجزوم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is the time dharf 'أَمْسِ' (yesterday) parsed grammatically?",
    "ur": "زمان کا مبنی ظرف 'أَمْسِ' (گزشتہ کل) اعرابی لحاظ سے کیسے پڑھا جاتا ہے؟",
    "options": [
      {
        "en": "Mabni on Kasra in position of Nasb (مبني على الكسر في محل نصب)",
        "ur": "كسرہ پر مبنی (في محل نصب)"
      },
      {
        "en": "Mu'rab Mansoob with Fatha",
        "ur": "فتحہ کے ساتھ معرب منصوب"
      },
      {
        "en": "Mabni on Damma",
        "ur": "ضمہ پر مبنی"
      },
      {
        "en": "Mabni on Sukoon",
        "ur": "سکون پر مبنی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is the place dharf 'حَيْثُ' (where/wherever) parsed grammatically?",
    "ur": "مکان کا مبنی ظرف 'حَيْثُ' (جہاں) اعرابی لحاظ سے کیسے پڑھا جاتا ہے؟",
    "options": [
      {
        "en": "Mabni on Damma in position of Nasb (مبني على الضم في محل نصب)",
        "ur": "ضمہ پر مبنی (في محل نصب)"
      },
      {
        "en": "Mabni on Kasra",
        "ur": "کسرہ پر مبنی"
      },
      {
        "en": "Mabni on Fatha",
        "ur": "فتحہ پر مبنی"
      },
      {
        "en": "Mu'rab Majroor",
        "ur": "معرب مجرور"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Dharf Mutasarrif' (الظرف المتصرف)?",
    "ur": "'ظرفِ متصرف' سے گرامر میں کیا مراد ہے؟",
    "options": [
      {
        "en": "A dharf that can function either as a dharf or as other syntactic positions (e.g., Mubtada', Fa'il, Maf'ool Bihi)",
        "ur": "وہ ظرف جو ظرف بننے کے علاوہ دیگر اعرابی مناصب (مبتدأ، فاعل، مفعول بہ) پر بھی استعمال ہو سکے"
      },
      {
        "en": "A dharf that is strictly Mabni",
        "ur": "وہ ظرف جو صرف مبنی ہو"
      },
      {
        "en": "A dharf that can only be preceded by prepositions",
        "ur": "وہ ظرف جو صرف حروفِ جر کے بعد آئے"
      },
      {
        "en": "A dharf derived from Form II verbs",
        "ur": "فارم II سے مشتق ظرف"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Dharf Ghair Mutasarrif' (الظرف غير المتصرف)?",
    "ur": "'ظرفِ غیر متصرف' سے گرامر میں کیا مراد ہے؟",
    "options": [
      {
        "en": "A dharf used strictly as a time/place indicator, or preceded only by a preposition (e.g., عِنْدَ، قَبْلَ، بَعْدَ، فَوْقَ، تَحْتَ)",
        "ur": "وہ ظرف جو صرف ظرفیت کے لیے آئے یا زیادہ سے زیادہ حرفِ جر کے بعد آئے (جیسے عند، قبل، بعد)"
      },
      {
        "en": "A dharf that can never take Kasra",
        "ur": "وہ ظرف جس پر کبھی کسرہ نہ آئے"
      },
      {
        "en": "A dharf that functions as Fa'il only",
        "ur": "وہ ظرف جو صرف فاعل بنے"
      },
      {
        "en": "A dharf used only in questions",
        "ur": "وہ ظرف جو صرف سوالات میں آئے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Na'ib 'an adh-Dharf' (النائب عن الظرف)?",
    "ur": "'نائب عن الظرف' سے گرامر میں کیا مراد ہے؟",
    "options": [
      {
        "en": "A word (like كُلّ/بَعْض, number, demonstrative, or adjective) that precedes the dharf and takes its Mansoob status",
        "ur": "وہ الفاظ (جیسے كل/بعض، عدد، اسمِ اشارہ، صفت) جو ظرف سے پہلے آ کر اس کا قائم مقام اور منصوب بن جائیں"
      },
      {
        "en": "The verb itself functioning as time",
        "ur": "خود فعل کا وقت بننا"
      },
      {
        "en": "A preposition attached to the subject",
        "ur": "فاعل سے متصل حرفِ جر"
      },
      {
        "en": "A dual form of the verb",
        "ur": "فعل کی تثنیہ شکل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is the time dharf 'قَطُّ' used in Arabic sentences?",
    "ur": "ظرفِ زمان 'قَطُّ' عربی جملوں میں کس خاص طریقے سے استعمال ہوتا ہے؟",
    "options": [
      {
        "en": "Mabni on Damma, used strictly with NEGATED PAST tense verbs to emphasize past negation (e.g., مَا فَعَلْتُهُ قَطُّ)",
        "ur": "ضمہ پر مبنی، جو ماضی منفی فعل کی تاکید کے لیے آتا ہے (جیسے: مَا فَعَلْتُهُ قَطُّ)"
      },
      {
        "en": "Used strictly with future verbs",
        "ur": "صرف مستقبل کے افعال کے ساتھ"
      },
      {
        "en": "Used with affirmative imperative verbs",
        "ur": "مثبت امر کے افعال کے ساتھ"
      },
      {
        "en": "Always Majroor with Kasra",
        "ur": "ہمیشہ کسرہ کے ساتھ مجرور"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the key difference between the time particles 'إِذْ' and 'إِذَا'?",
    "ur": "زمان کے دو کلمات 'إِذْ' اور 'إِذَا' کے درمیان بنیادی کیا فرق ہے؟",
    "options": [
      {
        "en": "'إِذْ' is a Mabni dharf for PAST time; 'إِذَا' is a Mabni dharf for FUTURE time (often with conditional meaning)",
        "ur": "'إِذْ' ماضی کے لیے ظرفِ زمان ہے؛ جبکہ 'إِذَا' مستقبل (شرط) کے لیے ظرفِ زمان ہے"
      },
      {
        "en": "'إِذْ' is place dharf and 'إِذَا' is time dharf",
        "ur": "'إِذْ' مکان کے لیے اور 'إِذَا' زمان کے لیے ہے"
      },
      {
        "en": "Both are strictly place dharfs",
        "ur": "دونوں صرف مکان کے لیے ہیں"
      },
      {
        "en": "There is no difference between them",
        "ur": "ان کے درمیان کوئی فرق نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, identify the Dharf in 'سَافَرْتُ لَيْلاً':",
    "ur": "تمرين 1 کے مطابق جملے 'سَافَرْتُ لَيْلاً' میں ظرف کیا ہے؟",
    "options": [
      {
        "en": "لَيْلاً (Dharf az-Zaman Mansoob - Nighttime)",
        "ur": "لَيْلاً (ظرفِ زمان منصوب)"
      },
      {
        "en": "سَافَرْتُ",
        "ur": "سَافَرْتُ"
      },
      {
        "en": "التاء فاعل",
        "ur": "التاء فاعل"
      },
      {
        "en": "There is no dharf",
        "ur": "کوئی ظرف نہیں ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Identify the Dharf in 'جَلَسْتُ أَمَامَ الـمُدَرِّسِ':",
    "ur": "جملے 'جَلَسْتُ أَمَامَ الـمُدَرِّسِ' میں ظرف کیا ہے؟",
    "options": [
      {
        "en": "أَمَامَ (Dharf al-Makan Mansoob - In front of)",
        "ur": "أَمَامَ (ظرفِ مکان منصوب)"
      },
      {
        "en": "الـمُدَرِّسِ",
        "ur": "الـمُدَرِّسِ"
      },
      {
        "en": "جَلَسْتُ",
        "ur": "جَلَسْتُ"
      },
      {
        "en": "التاء",
        "ur": "التاء"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete with Dharf az-Zaman: 'سَأَزُورُكَ ...' (I will visit you tomorrow):",
    "ur": "ظرفِ زمان سے جملہ مکمل کریں: 'سَأَزُورُكَ ...' (میں کل آپ کی زیارت کروں گا):",
    "options": [
      {
        "en": "غَداً (Ghadan - Tomorrow)",
        "ur": "غَداً (کل/مستقبل)"
      },
      {
        "en": "أَمَامَ",
        "ur": "أَمَامَ"
      },
      {
        "en": "تَحْتَ",
        "ur": "تَحْتَ"
      },
      {
        "en": "فَوْقَ",
        "ur": "فَوْقَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete with Dharf al-Makan: 'وُضِعَ الكِتَابُ ... الطَّاوِلَةِ' (The book was placed under the table):",
    "ur": "ظرفِ مکان سے جملہ مکمل کریں: 'وُضِعَ الكِتَابُ ... الطَّاوِلَةِ' (کتاب میز کے نیچے رکھی گئی):",
    "options": [
      {
        "en": "تَحْتَ (Tahta - Under)",
        "ur": "تَحْتَ (نیچے)"
      },
      {
        "en": "صَبَاحاً",
        "ur": "صَبَاحاً"
      },
      {
        "en": "أَمْسِ",
        "ur": "أَمْسِ"
      },
      {
        "en": "لَيْلاً",
        "ur": "لَيْلاً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, classify 'الآنَ' in 'سَأَخْرُجُ الآنَ':",
    "ur": "تمرين 2 کے مطابق 'سَأَخْرُجُ الآنَ' میں لفظ 'الآنَ' کا کیا اعرابی حکم ہے؟",
    "options": [
      {
        "en": "Mabni Dharf on Fatha in position of Nasb (مبني على الفتح في محل نصب)",
        "ur": "فتحہ پر مبنی (في محل نصب)"
      },
      {
        "en": "Mu'rab Mansoob",
        "ur": "معرب منصوب"
      },
      {
        "en": "Mabni on Sukoon",
        "ur": "سکون پر مبنی"
      },
      {
        "en": "Mu'rab Majroor",
        "ur": "معرب مجرور"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Classify 'حَيْثُ' in 'اجْلِسْ حَيْثُ جَلَسَ أَبُوكَ':",
    "ur": "جملے 'اجْلِسْ حَيْثُ جَلَسَ أَبُوكَ' میں لفظ 'حَيْثُ' کا اعراب کیا ہے؟",
    "options": [
      {
        "en": "Mabni Dharf al-Makan on Damma in position of Nasb (مبني على الضم في محل نصب)",
        "ur": "مکان کا ظرف، ضمہ پر مبنی (في محل نصب)"
      },
      {
        "en": "Mu'rab Mansoob with Fatha",
        "ur": "فتحہ کے ساتھ معرب منصوب"
      },
      {
        "en": "Mabni on Kasra",
        "ur": "کسرہ پر مبنی"
      },
      {
        "en": "Mabni on Fatha",
        "ur": "فتحہ پر مبنی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Classify 'مُنْذُ' when followed directly by an explicit noun in 'مَا رَأَيْتُهُ مُنْذُ يَوْمَيْنِ':",
    "ur": "جب 'مُنْذُ' کے بعد اسمِ ظاہر مجرور آئے ('مَا رَأَيْتُهُ مُنْذُ يَوْمَيْنِ') تو 'مُنْذُ' کی کیا نحوی قسم ہوتی ہے؟",
    "options": [
      {
        "en": "Preposition (حرف جر) causing Jar to the noun",
        "ur": "حرفِ جر (اسم کو مجرور کرنے والا)"
      },
      {
        "en": "Dharf al-Makan Mabni",
        "ur": "ظرفِ مکان مبنی"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
      },
      {
        "en": "Maf'ool Absolute",
        "ur": "مفعول مطلق"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'وَاذْكُرُوا إِذْ أَنْتُمْ قَلِيلٌ', how is 'إِذْ' parsed?",
    "ur": "آیت مبارکہ 'وَاذْكُرُوا إِذْ أَنْتُمْ قَلِيلٌ' میں لفظ 'إِذْ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Mabni on Sukoon as Dharf az-Zaman in position of Nasb",
        "ur": "سکون پر مبنی ظرفِ زمان (في محل نصب)"
      },
      {
        "en": "Mu'rab Mansoob",
        "ur": "معرب منصوب"
      },
      {
        "en": "Mabni on Damma",
        "ur": "ضمہ پر مبنی"
      },
      {
        "en": "Harf Jar",
        "ur": "حرفِ جر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, identify the Mutasarrif Dharf in 'يَوْمُ الجُمُعَةِ يَوْمٌ مُبَارَكٌ':",
    "ur": "تمرين 3 میں جملے 'يَوْمُ الجُمُعَةِ يَوْمٌ مُبَارَكٌ' میں لفظ 'يَوْمُ' کے متصرف ہونے کا کیا ثبوت ہے؟",
    "options": [
      {
        "en": "'يَوْمُ' is used here as Mubtada' Marfoo' rather than functioning as a Dharf",
        "ur": "لفظ 'يَوْمُ' یہاں ظرف بننے کے بجائے مبتدأ (مرفوع) بن کر آیا ہے"
      },
      {
        "en": "It is Mabni on Sukoon",
        "ur": "سکون پر مبنی ہونا"
      },
      {
        "en": "It is preceded by preposition",
        "ur": "حرفِ جر کے بعد ہونا"
      },
      {
        "en": "It is a proper noun",
        "ur": "اسمِ علم ہونا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Identify the Ghair Mutasarrif Dharf in 'جِئْتُ مِنْ عِنْدِ الـمُدِيرِ':",
    "ur": "جملے 'جِئْتُ مِنْ عِنْدِ الـمُدِيرِ' میں 'عِنْدِ' کے غیر متصرف ہونے کا کیا ثبوت ہے؟",
    "options": [
      {
        "en": "'عِنْدِ' is used here Majroor strictly by preposition 'مِنْ'",
        "ur": "'عِنْدِ' کا یہاں صرف حرفِ جر 'مِنْ' کے بعد مجرور بن کر آنا"
      },
      {
        "en": "It is used as Mubtada'",
        "ur": "مبتدأ بن کر آنا"
      },
      {
        "en": "It is used as Fa'il",
        "ur": "فاعل بن کر آنا"
      },
      {
        "en": "It is used as Na't",
        "ur": "نعت بن کر آنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'صُمْتُ يَوْماً', how is 'يَوْماً' parsed?",
    "ur": "جملے 'صُمْتُ يَوْماً' میں لفظ 'يَوْماً' کا کیا اعرابی منصب ہے؟",
    "options": [
      {
        "en": "Dharf az-Zaman Mansoob with Fatha (متصرف قائم بدور الظرفية)",
        "ur": "ظرفیت کا کردار ادا کرتا ہوا ظرفِ زمان منصوب"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Mubtada'",
        "ur": "مبتدأ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'يَوْمُ العِيدِ يَوْمُ سُرُورٍ', why is 'يَوْمُ' Marfoo' with Damma?",
    "ur": "جملے 'يَوْمُ العِيدِ يَوْمُ سُرُورٍ' میں 'يَوْمُ' پر ضمہ کیوں ہے؟",
    "options": [
      {
        "en": "Because it functions as Mubtada' (غير قائم بدور الظرفية)",
        "ur": "ظرف نہ بننے کی وجہ سے مبتدأ (مرفوع) بن کر آنے پر"
      },
      {
        "en": "Because it is Dharf Mansoob",
        "ur": "ظرف منصوب ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Mudaf Ilayh",
        "ur": "مضاف الیہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Mabni",
        "ur": "مبنی ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, in 'سِرْتُ كُلَّ النَّهَارِ', why is 'كُلَّ' Mansoob?",
    "ur": "تمرين 4 کے جملے 'سِرْتُ كُلَّ النَّهَارِ' میں لفظ 'كُلَّ' کیوں منصوب ہے؟",
    "options": [
      {
        "en": "Na'ib 'an adh-Dharf Mansoob as Mudaf to time dharf 'النَّهَارِ'",
        "ur": "زمان کا ظرف 'النهار' کی طرف مضاف ہونے کی بنا پر نائب عن الظرف منصوب"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'مَشَيْتُ ثَلاَثَةَ أَمْيَالٍ', how is number 'ثَلاَثَةَ' parsed?",
    "ur": "جملے 'مَشَيْتُ ثَلاَثَةَ أَمْيَالٍ' میں عدد 'ثَلاَثَةَ' کا کیا ترکیبی منصب ہے؟",
    "options": [
      {
        "en": "Na'ib 'an adh-Dharf Mansoob (number preceding distance unit 'أَمْيَالٍ')",
        "ur": "فاصلے کی اکائی 'أَمْيَالٍ' سے پہلے آنے کی وجہ سے نائب عن الظرف منصوب"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Tamyeez",
        "ur": "تمیز"
      },
      {
        "en": "Mudaf Ilayh",
        "ur": "مضاف الیہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'انْتَظَرْتُكَ ذَلِكَ اليَوْمَ', how is demonstrative noun 'ذَلِكَ' parsed?",
    "ur": "جملے 'انْتَظَرْتُكَ ذَلِكَ اليَوْمَ' میں اسمِ اشارہ 'ذَلِكَ' کا اعرابی موقع کیا ہے؟",
    "options": [
      {
        "en": "Demonstrative noun in position of Nasb as Na'ib 'an adh-Dharf",
        "ur": "اسمِ اشارہ (في محل نصب) بنوائے نائب عن الظرف"
      },
      {
        "en": "Mubtada'",
        "ur": "مبتدأ"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
      },
      {
        "en": "Hal",
        "ur": "حال"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'مَشَيْتُ طَوِيلاً' (I walked long), why is 'طَوِيلاً' parsed as Na'ib 'an adh-Dharf?",
    "ur": "جملے 'مَشَيْتُ طَوِيلاً' میں 'طَوِيلاً' کو نائب عن الظرف کیوں مانا جاتا ہے؟",
    "options": [
      {
        "en": "Because it is an adjective substituting for the omitted time dharf (تقديره: مَشَيْتُ زَمَناً طَوِيلاً)",
        "ur": "کیونکہ یہ محذوف ظرفِ زمان کی صفت ہے جو اس کی جگہ نائب بنی ہے (تقدیر: زَمَناً طَوِيلاً)"
      },
      {
        "en": "Because it is Maf'ool Absolute",
        "ur": "مفعول مطلق ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Hal",
        "ur": "حال ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Tamyeez",
        "ur": "تمیز ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ الشَّمْسِ وَقَبْلَ غُرُوبِهَا' (Qur'an 50:39), what is 'قَبْلَ'?",
    "ur": "قرآنی آیہ 'قَبْلَ طُلُوعِ الشَّمْسِ' میں لفظ 'قَبْلَ' کا ترکیبی منصب کیا ہے؟",
    "options": [
      {
        "en": "Dharf az-Zaman Mansoob with Fatha as Mudaf (ظرف زمان منصوب وهو مضاف)",
        "ur": "ظرفِ زمان منصوب (وہو مضاف)"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
      },
      {
        "en": "Mabni on Damma",
        "ur": "ضمہ پر مبنی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَقَوْمَ نُوحٍ مِنْ قَبْلُ' (Qur'an 53:52), why is 'قَبْلُ' Mabni on Damma?",
    "ur": "آیت مبارکہ 'مِنْ قَبْلُ' میں حرفِ جر 'مِنْ' داخل ہونے کے باوجود 'قَبْلُ' ضمہ پر مبنی کیوں ہے؟",
    "options": [
      {
        "en": "Mabni on Damma because its Mudaf Ilayh is omitted while intended in meaning (قُطِعَ عَنِ الإِضَافَةِ لَفْظاً لاَ مَعْنًى)",
        "ur": "کیونکہ اس کا مضاف الیہ لفظاً محذوف ہے جبکہ معنیً مراد ہے"
      },
      {
        "en": "Because it is Mansoob",
        "ur": "منصوب ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Fa'il",
        "ur": "فاعل ہونے کی وجہ سے"
      },
      {
        "en": "Because it is proper noun",
        "ur": "اسمِ علم ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَاللَّهُ مَعَ الصَّابِرِينَ' (Qur'an 2:249), what is 'مَعَ'?",
    "ur": "قرآنی آیہ 'وَاللَّهُ مَعَ الصَّابِرِينَ' میں لفظ 'مَعَ' کا ترکیبی منصب کیا ہے؟",
    "options": [
      {
        "en": "Dharf Mansoob with Fatha as Mudaf (ظرف منصوب بالفتحة وهو مضاف)",
        "ur": "ظرف منصوب (وہو مضاف)"
      },
      {
        "en": "Harf Jar",
        "ur": "حرفِ جر"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
      },
      {
        "en": "Ism Inna",
        "ur": "انّ کا اسم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'اجْلِسْ حَيْثُ أَمَرْتُكَ':",
    "ur": "پورے جملے 'اجْلِسْ حَيْثُ أَمَرْتُكَ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "اجْلِسْ: فعل أمر، حَيْثُ: ظرف مكان مبني على الضم في محل نصب، أَمَرْتُكَ: فعل وفاعل ومفعول به، والجملة في محل جر مضاف إليه لحيث",
        "ur": "اجْلِسْ: فعل امر، حَيْثُ: مکان کا ظرف ضمہ پر مبنی (في محل نصب)، أَمَرْتُكَ: فعل، فاعل و مفعول بہ، اور پورا جملہ 'حيث' کا مضاف الیہ (في محل جر)"
      },
      {
        "en": "اجلس: مبتدأ، حيث: خبر، امرتك: مفعول به",
        "ur": "اجلس مبتدأ، حيث خبر، امرتك مفعول بہ"
      },
      {
        "en": "اجلس: فعل، حيث: حرف جر، امرتك: اسم مجرور",
        "ur": "اجلس فعل، حيث حرف جر، امرتك اسم مجرور"
      },
      {
        "en": "None of the above",
        "ur": "ان میں سے کوئی نہیں"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 15 Quiz ---');
  console.log('Total questions to seed:', questionsData.length);

  try {
    // 1. Ensure 'part' column exists in 'questions' table
    console.log('Ensuring "part" column exists in questions table...');
    await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS part TEXT`;

    // 2. Madina Books course & Book 3 section
    const courses = await sql`
      SELECT id FROM courses WHERE name = 'Madina Books' LIMIT 1
    `;
    if (courses.length === 0) {
      throw new Error('Madina Books course not found.');
    }
    const courseId = courses[0].id;
    console.log(`Using Course ID: ${courseId}`);

    let sectionId;
    const existingSection = await sql`
      SELECT id FROM sections WHERE title = 'Book 3' AND course_id = ${courseId} LIMIT 1
    `;
    if (existingSection.length > 0) {
      sectionId = existingSection[0].id;
      console.log(`Book 3 section exists: ID ${sectionId}`);
    } else {
      const [newSection] = await sql`
        INSERT INTO sections (course_id, title, order_index, kind)
        VALUES (${courseId}, 'Book 3', 4, 'book')
        RETURNING id
      `;
      sectionId = newSection.id;
      console.log(`Created Book 3 section: ID ${sectionId}`);
    }

    // 3. Find or Create Lecture 15 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 15 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 15 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 15', 15)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 15: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 15 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 15))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 15.`);
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

    // 5. Create the quiz for Book 3 Lesson 15
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 15 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 15 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
