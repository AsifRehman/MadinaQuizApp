import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What are the two types of Emphasizing Nūn (نون التوكيد) in Arabic grammar?",
    "ur": "عربی گرامر میں 'نونِ تاکید' کی دو کون سی بنیادی اقسام ہیں؟",
    "options": [
      {
        "en": "1. An-Nūn Ath-Thaqīlah (النُّونُ الثَّقِيلَةُ - doubled/heavy 'ـَنَّ'), 2. An-Nūn Al-Khafīfah (النُّونُ الخَفِيفَةُ - silent/light 'ـَنْ')",
        "ur": "1. نونِ ثقیلہ (مشددہ 'ـَنَّ')، 2. نونِ خفیفہ (ساکنہ 'ـَنْ')"
      },
      {
        "en": "1. Nūn al-Niswah, 2. Nūn al-Wiqāyah",
        "ur": "1. نونِ نسوہ، 2. نونِ وقایہ"
      },
      {
        "en": "1. Nūn al-Raf', 2. Nūn al-Tanoon",
        "ur": "1. نونِ رفع، 2. نونِ تنوین"
      },
      {
        "en": "1. Nūn al-Jarr, 2. Nūn al-Jazm",
        "ur": "1. نونِ جر، 2. نونِ جزم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Can a Past Tense verb (الفعل الماضي) be emphasized using Nūn al-Tawkeed?",
    "ur": "کیا فعلِ ماضی میں نونِ تاکید لا کر تاکید پیدا کی جا سکتی ہے؟",
    "options": [
      {
        "en": "NO, a past verb can NEVER take Nūn al-Tawkeed under any circumstance (لاَ يُؤَكَّدُ بِالنُّونِ مُطْلَقاً)",
        "ur": "جی نہیں! فعلِ ماضی میں کسی بھی صورت میں نونِ تاکید **نہیں آ سکتی**"
      },
      {
        "en": "Yes, it is mandatory in all cases",
        "ur": "جی ہاں! تمام حالتوں میں واجب ہے"
      },
      {
        "en": "Yes, provided it is preceded by Inna",
        "ur": "جی ہاں! اگر انّ سے پہلے ہو"
      },
      {
        "en": "Yes, if the past verb is plural",
        "ur": "جی ہاں! اگر فعل ماضی جمع ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the grammatical rule for emphasizing an Imperative verb (فعل الأمر) with Nūn al-Tawkeed?",
    "ur": "فعلِ امر کے ساتھ نونِ تاکید لانے کا کیا نحوی حکم ہے؟",
    "options": [
      {
        "en": "It is PERMISSIBLE UNCONDITIONALLY (يَجُوزُ تَوْكِيدُهُ بِالنُّونِ مُطْلَقاً بَلاَ شَرْطٍ, e.g., 'اكْتُبَنَّ')",
        "ur": "فعلِ امر کو بلا کسی شرط کے مطلقاً نونِ تاکید سے مؤکد کرنا **جائز** ہے (جیسے: 'اكْتُبَنَّ')"
      },
      {
        "en": "It is forbidden in all cases",
        "ur": "یہ ہر حالت میں ممنوع ہے"
      },
      {
        "en": "It is mandatory in all cases",
        "ur": "یہ ہر حالت میں واجب ہے"
      },
      {
        "en": "It is allowed only in poetry",
        "ur": "یہ صرف شاعری میں جائز ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When is emphasizing a Present Tense verb (الفعل المضارع) MANDATORY (وجوباً)?",
    "ur": "فعلِ مضارع میں نونِ تاکید کا لانا کب **واجب (وجوباً)** ہو جاتا ہے؟",
    "options": [
      {
        "en": "When it is the answer to an Oath (قسم), Affirmative (مثبت), Future-oriented (استقبال), and directly attached to Lām al-Qasam (بلا فاصلة)",
        "ur": "جب فعل قسم کے جواب میں ہو، مثبت ہو، استقبال کا معنی دے اور لامِ قسم سے بلا فاصلہ ملا ہوا ہو (جیسے: 'وَاللَّهِ لَأَكْتُبَنَّ')"
      },
      {
        "en": "When it is preceded by Laa of Prohibition",
        "ur": "جب لاۓ نہی کے بعد ہو"
      },
      {
        "en": "When it is past tense",
        "ur": "جب فعل ماضی ہو"
      },
      {
        "en": "When it is in passive voice only",
        "ur": "جب صرف فعلِ مجہول ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When is emphasizing a Present Tense verb (الفعل المضارع) PERMISSIBLE (جوازاً)?",
    "ur": "فعلِ مضارع میں نونِ تاکید کا لانا کب **جائز (جوازاً)** ہوتا ہے؟",
    "options": [
      {
        "en": "When preceded by 'إِمَّا' ('إِنْ' + 'مَا') OR by a Demand/Request (طلب: أمر، نهي، استفهام، تحضيض، تمَنٍّ)",
        "ur": "جب فعل 'إِمَّا' کے بعد واقع ہو یا اس سے پہلے طلب (نہی، استفہام، امر، تمنا وغیرہ) موجود ہو"
      },
      {
        "en": "When it expresses current present time",
        "ur": "جب حال کا معنی دے"
      },
      {
        "en": "When preceded by Sawfa",
        "ur": "جب سوف کے بعد ہو"
      },
      {
        "en": "When it is a past noun",
        "ur": "جب وہ ماضی کا اسم ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When is emphasizing a Present Tense verb (الفعل المضارع) FORBIDDEN (امتناعاً)?",
    "ur": "فعلِ مضارع میں نونِ تاکید کا لانا کب **ممنوع (امتناعاً)** ہوتا ہے؟",
    "options": [
      {
        "en": "When a condition for mandatory/permissible is lacking (e.g., separated by 'سَوْفَ', negative, or present time meaning)",
        "ur": "جب وجوب و جواز کے اسباب نہ ہوں (مثلاً لامِ قسم اور فعل میں 'سوف' کا فاصلہ ہو، نفی ہو، یا حال کا معنی ہو)"
      },
      {
        "en": "When preceded by Inna",
        "ur": "جب انّ سے پہلے ہو"
      },
      {
        "en": "When the verb is singular",
        "ur": "جب فعل واحد ہو"
      },
      {
        "en": "When the verb ends in Hamzah",
        "ur": "جب فعل ہمزہ پر ختم ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What happens to the grammatical build (بناء) of a Present verb when Nūn al-Tawkeed connects to it DIRECTLY (مباشرة)?",
    "ur": "جب نونِ تاکید فعلِ مضارع سے بلا واسطہ (مباشر) متصل ہو تو فعل کی بنا ء کس حرکت پر ہوتی ہے؟",
    "options": [
      {
        "en": "It becomes MABNI ON FATHA (مَبْنِيٌّ عَلَى الفَتْحِ, e.g., 'يَكْتُبَنَّ')",
        "ur": "فعل **مبنی بر فتحہ** ہو جاتا ہے (مبني على الفتح، جیسے: 'يَكْتُبَنَّ')"
      },
      {
        "en": "It becomes Mabni on Damma",
        "ur": "مبنی بر ضمہ"
      },
      {
        "en": "It becomes Mabni on Sukoon",
        "ur": "مبنی بر سکون"
      },
      {
        "en": "It becomes Majroom",
        "ur": "مجزوم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What structural changes occur when Nūn al-Tawkeed attaches to a verb with Wāw al-Jamā'ah (e.g., 'تَكْتُبُونَ' + 'ـَنَّ')?",
    "ur": "جب نونِ تاکید واؤ الجماعت والے فعل (مثلاً 'تَكْتُبُونَ') پر داخل ہو تو کیا صرفی تبدیلیاں آتی ہیں؟",
    "options": [
      {
        "en": "Nūn al-Raf' is dropped, and Wāw is dropped due to meeting of two sukoons, leaving Damma before Nūn ('تَكْتُبُنَّ')",
        "ur": "نونِ رفع حذف ہوتا ہے، اور واؤ التقاۓ ساکنین کی بنا پر گر جاتی ہے، جبکہ نون سے پہلے حرف پر ضمہ باقی رہتا ہے ('تَكْتُبُنَّ')"
      },
      {
        "en": "The verb becomes Mabni on Fatha",
        "ur": "فعل مبنی بر فتحہ بن جاتا ہے"
      },
      {
        "en": "The verb changes to past tense",
        "ur": "فعل ماضی بن جاتا ہے"
      },
      {
        "en": "No changes occur",
        "ur": "کوئی تبدیلی نہیں ہوتی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What structural changes occur when Nūn al-Tawkeed attaches to a verb with Yā' al-Mukhāṭabah (e.g., 'تَكْتُبِينَ' + 'ـَنَّ')?",
    "ur": "جب نونِ تاکید یاءِ مخاطبہ والے فعل (مثلاً 'تَكْتُبِينَ') پر داخل ہو تو کیا صرفی تبدیلی آتی ہے؟",
    "options": [
      {
        "en": "Nūn al-Raf' and Yā' are dropped due to two sukoons, leaving Kasra before Nūn ('تَكْتُبِنَّ')",
        "ur": "نونِ رفع اور یاء التقاۓ ساکنین کی بنا پر حذف ہو جاتے ہیں، اور نون سے پہلے کسرہ باقی رہتا ہے ('تَكْتُبِنَّ')"
      },
      {
        "en": "The verb becomes Mabni on Sukoon",
        "ur": "فعل مبنی بر سکون ہو جاتا ہے"
      },
      {
        "en": "The Yā' turns into Alif",
        "ur": "یاء الف میں بدل جاتی ہے"
      },
      {
        "en": "The Nūn turns into Waw",
        "ur": "نون واؤ میں بدل جاتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'أُفٍّ' in Arabic grammar and what meaning does it express?",
    "ur": "عربی گرامر میں 'أُفٍّ' کیا ہے اور اس کا معنوی مفہوم کیا ہوتا ہے؟",
    "options": [
      {
        "en": "A Verbal Noun for Present Tense (اسْمُ فِعْلٍ مُضَارِعٌ) meaning 'I am annoyed/disgusted' (أَتَضَجَّرُ), Mabni on Kasra with Tanween",
        "ur": "اسمِ فعلِ مضارع (بمعنی 'أَتَضَجَّرُ' - میں تنگ و بیزار ہوتا ہوں)، جو کسرہ مع تنوین پر مبنی ہے"
      },
      {
        "en": "A past verb meaning 'I went'",
        "ur": "فعلِ ماضی بمعنی میں گیا"
      },
      {
        "en": "A noun of place",
        "ur": "اسمِ مکان"
      },
      {
        "en": "A preposition causing Kasra",
        "ur": "حرفِ جر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, in 'وَاللَّهِ لَأَكْتُبَنَّ الدَّرْسَ', why is emphasizing 'أَكْتُبَنَّ' MANDATORY (واجب)?",
    "ur": "تمرين 1 کے مطابق 'وَاللَّهِ لَأَكْتُبَنَّ الدَّرْسَ' میں فعل 'أَكْتُبَنَّ' کا نونِ تاکید کے ساتھ مؤکد ہونا کیوں **واجب** ہے؟",
    "options": [
      {
        "en": "Because it is an affirmative, future answer to an oath connected to Lām al-Qasam directly",
        "ur": "کیونکہ یہ قسم کا مثبت جواب ہے، استقبال کا معنی دے رہا ہے اور لامِ قسم سے بلا فاصلہ متصل ہے"
      },
      {
        "en": "Because it is preceded by Laa of prohibition",
        "ur": "لاۓ نہی کی وجہ سے"
      },
      {
        "en": "Because it is an imperative verb",
        "ur": "فعلِ امر ہونے کی وجہ سے"
      },
      {
        "en": "Because it is in passive voice",
        "ur": "فعلِ مجہول ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'فَإِمَّا تَخَافَنَّ مِنْ قَوْمٍ خِيَانَةً' (Qur'an 8:58), why is emphasizing 'تَخَافَنَّ' PERMISSIBLE (جائز)?",
    "ur": "قرآنی آیہ 'فَإِمَّا تَخَافَنَّ مِنْ قَوْمٍ خِيَانَةً' میں فعل 'تَخَافَنَّ' پر نونِ تاکید کا آنا کیوں **جائز** ہے؟",
    "options": [
      {
        "en": "Because it is preceded by 'إِمَّا' ('إِنْ' Conditional + 'مَا' Extra)",
        "ur": "کیونکہ یہ شرطیہ حرف 'إِمَّا' ('إِنْ' + 'مَا') کے بعد واقع ہوا ہے"
      },
      {
        "en": "Because it is an answer to Oath",
        "ur": "قسم کا جواب ہونے کی وجہ سے"
      },
      {
        "en": "Because it is mandatory",
        "ur": "واجب ہونے کی وجہ سے"
      },
      {
        "en": "Because it is past tense",
        "ur": "ماضی ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'وَلاَ تَحْسَبَنَّ اللَّهَ غَافِلاً' (Qur'an 14:42), what justifies the emphasis in 'تَحْسَبَنَّ'?",
    "ur": "آیت مبارکہ 'وَلاَ تَحْسَبَنَّ اللَّهَ غَافِلاً' میں 'تَحْسَبَنَّ' کے مؤکد ہونے کا کیا مسوغ ہے؟",
    "options": [
      {
        "en": "Permissible because it is preceded by Demand/Prohibition ('لاَ' النَّاهِيَةُ)",
        "ur": "جائز، کیونکہ اس سے پہلے طلب/نہی کا حرف '**لاَ**' موجود ہے"
      },
      {
        "en": "Mandatory as answer to Oath",
        "ur": "قسم کے جواب کی بنا پر واجب"
      },
      {
        "en": "Forbidden",
        "ur": "ممنوع"
      },
      {
        "en": "Past tense rule",
        "ur": "ماضی کا قاعدہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'وَاللَّهِ لَسَوْفَ أَكْتُبُ الدَّرْسَ', why is Nūn al-Tawkeed FORBIDDEN (امتناعاً) on 'أَكْتُبُ'?",
    "ur": "جملے 'وَاللَّهِ لَسَوْفَ أَكْتُبُ الدَّرْسَ' میں فعل 'أَكْتُبُ' کے ساتھ نونِ تاکید لانا کیوں **ممنوع (امتناع)** ہے؟",
    "options": [
      {
        "en": "Because Lām al-Qasam is SEPARATED from the verb by 'سَوْفَ'",
        "ur": "کیونکہ لامِ قسم اور فعل کے درمیان حرف '**سَوْفَ**' کا فاصلہ آ گیا ہے"
      },
      {
        "en": "Because the verb is past tense",
        "ur": "کیونکہ فعل ماضی ہے"
      },
      {
        "en": "Because it is preceded by Inna",
        "ur": "انّ کی وجہ سے"
      },
      {
        "en": "Because the verb is plural",
        "ur": "فعل کے جمع ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, emphasize the Imperative verb 'اكْتُبْ' (Write!) with Heavy Nūn al-Tawkeed:",
    "ur": "تمرين 2 کے مطابق فعلِ امر 'اكْتُبْ' کی نونِ تاکید ثقیلہ کے ساتھ درست مؤکد شکل کیا ہوگی؟",
    "options": [
      {
        "en": "اكْتُبَنَّ (Uktubanna - Mabni on Fatha)",
        "ur": "اكْتُبَنَّ (مبنی بر فتحہ)"
      },
      {
        "en": "اكْتُبْنَ",
        "ur": "اكْتُبْنَ"
      },
      {
        "en": "اكْتُبَانِ",
        "ur": "اكْتُبَانِ"
      },
      {
        "en": "اكْتُبُونَّ",
        "ur": "اكْتُبُونَّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Emphasize the Dual Imperative verb 'اكْتُبَا' (You two write!) with Heavy Nūn al-Tawkeed:",
    "ur": "تثنیہ کے فعلِ امر 'اكْتُبَا' کی نونِ تاکید کے ساتھ درست مؤکد شکل کیا ہوگی؟",
    "options": [
      {
        "en": "اكْتُبَانِّ (Uktubānni - with Alif al-Ithnayn and Kasra on Nūn al-Tawkeed)",
        "ur": "اكْتُبَانِّ (الفِ اثنین کے ساتھ اور نونِ تاکید مکسور)"
      },
      {
        "en": "اكْتُبَنَّ",
        "ur": "اكْتُبَنَّ"
      },
      {
        "en": "اكْتُبُونَّ",
        "ur": "اكْتُبُونَّ"
      },
      {
        "en": "اكْتُبِينَّ",
        "ur": "اكْتُبِينَّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, emphasize 'تَكْتُبُونَ' (You all write) with Nūn al-Tawkeed:",
    "ur": "تمرين 3 کے مطابق جمع مذكر کے فعل 'تَكْتُبُونَ' کو نونِ تاکید کے ساتھ مؤکد بنا کر لکھیں:",
    "options": [
      {
        "en": "تَكْتُبُنَّ (Taktubunna - dropping Nūn al-Raf' and Wāw, leaving Damma on Bā')",
        "ur": "تَكْتُbُنَّ (نونِ رفع اور واؤ کے حذف کے ساتھ باء پر ضمہ)"
      },
      {
        "en": "تَكْتُبُونَّ",
        "ur": "تَكْتُبُونَّ"
      },
      {
        "en": "تَكْتُبَانِّ",
        "ur": "تَكْتُبَانِّ"
      },
      {
        "en": "تَكْتُبَنَّ",
        "ur": "تَكْتُبَنَّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Emphasize 'تَكْتُبِينَ' (You single female write) with Nūn al-Tawkeed:",
    "ur": "واحد مؤنث مخاطب کے فعل 'تَكْتُبِينَ' کو نونِ تاکید کے ساتھ مؤکد بنا کر لکھیں:",
    "options": [
      {
        "en": "تَكْتُبِنَّ (Taktubinna - dropping Nūn al-Raf' and Yā', leaving Kasra on Bā')",
        "ur": "تَكْتُبِنَّ (نونِ رفع اور یاء کے حذف کے ساتھ باء پر کسرہ)"
      },
      {
        "en": "تَكْتُبِينَّ",
        "ur": "تَكْتُبِينَّ"
      },
      {
        "en": "تَكْتُبَانِّ",
        "ur": "تَكْتُبَانِّ"
      },
      {
        "en": "تَكْتُبُنَّ",
        "ur": "تَكْتُبُنَّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, in 'فَلاَ تَقُلْ لَهُمَا أُفٍّ' (Qur'an 17:23), how is 'أُفٍّ' parsed?",
    "ur": "تمرين 4 کے مطابق قرآنی آیہ 'فَلاَ تَقُلْ لَهُمَا أُفٍّ' میں لفظ 'أُفٍّ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Verbal Noun for Present Tense (اسم فعل مضارع) meaning 'أَتَضَجَّرُ', Mabni on Kasra with Tanween",
        "ur": "اسمِ فعلِ مضارع بمعنی 'أَتَضَجَّرُ'، مبنی بر کسرہ مع تنوین"
      },
      {
        "en": "Maf'ool bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Harf Jarr",
        "ur": "حرفِ جر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'وَيْلٌ لِلْمُطَفِّفِينَ' (Qur'an 83:1), how is 'وَيْلٌ' parsed?",
    "ur": "قرآنی آیہ 'وَيْلٌ لِلْمُطَفِّفِينَ' میں لفظ 'وَيْلٌ' کا کیا اعرابی موقع ہے؟",
    "options": [
      {
        "en": "Topic / Mubtada' Marfoo' with Damma (مبتدأ مرفوع بالضمة), with 'لِلْمُطَفِّفِينَ' as Shibah Jumlah Khabar",
        "ur": "مبتدأ مرفوع بالضمة (جس کی خبر جار و مجرور 'للمطففين' ہے)"
      },
      {
        "en": "Maf'ool Mutlaq",
        "ur": "مفعول مطلق"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
      },
      {
        "en": "Ism Inna",
        "ur": "اسم انّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'وَيْلَ الكَافِرِينَ مِنْ عَذَابٍ شَدِيدٍ', why is 'وَيْلَ' Mansoob with Fatha?",
    "ur": "جملے 'وَيْلَ الكَافِرِينَ مِنْ عَذَابٍ شَدِيدٍ' میں 'وَيْلَ' فتحہ کے ساتھ کیوں منصوب ہے؟",
    "options": [
      {
        "en": "Mansoob as Maf'ool Bihi / Maf'ool Mutlaq for an omitted verb (تقديره أَلْزَمَهُمُ اللَّهُ وَيْلاً)",
        "ur": "محذوف فعل کا مفعول بہ / مفعول مطلق منصوب ہو کر"
      },
      {
        "en": "Mubtada' Marfoo'",
        "ur": "مبتدأ"
      },
      {
        "en": "Ism Laa",
        "ur": "اسم لا"
      },
      {
        "en": "Hal",
        "ur": "حال"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'لَيُسْجَنَنَّ وَلَيَكُوناً مِنَ الصَّاغِرِينَ' (Qur'an 12:32), what two forms of Nūn al-Tawkeed appear?",
    "ur": "تمرين 5 کے مطابق قرآنی آیہ 'لَيُسْجَنَنَّ وَلَيَكُوناً...' میں نونِ تاکید کی کون سی دو شکلیں اکٹھی آئی ہیں؟",
    "options": [
      {
        "en": "Heavy Nūn (ثقيلة) in 'لَيُسْجَنَنَّ' and Light Nūn (خفيفة written as Tanween) in 'لَيَكُوناً'",
        "ur": "'لَيُسْجَنَنَّ' میں **نونِ ثقیلہ** اور 'لَيَكُوناً' میں **نونِ خفیفہ** (جو الرسم العثمانی میں تنوین سے لکھی گئی ہے)"
      },
      {
        "en": "Both are Nūn Niswah",
        "ur": "دونوں نونِ نسوہ ہیں"
      },
      {
        "en": "Both are Nūn al-Raf'",
        "ur": "دونوں نونِ رفع ہیں"
      },
      {
        "en": "None of the above",
        "ur": "ان میں سے کوئی نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'وَتَاللَّهِ لَأَكِيدَنَّ أَصْنَامَكُمْ' (Qur'an 21:57), how is 'لَأَكِيدَنَّ' parsed?",
    "ur": "آیت مبارکہ 'وَتَاللَّهِ لَأَكِيدَنَّ أَصْنَامَكُمْ' میں 'لَأَكِيدَنَّ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Present verb in answer to Oath, Mabni on Fatha due to direct attachment of Nūn al-Tawkeed (فعل مضارع مبني على الفتح لاِتِّصَالِهِ بِنُونِ التَّوْكِيدِ)",
        "ur": "قسم کے جواب میں فعلِ مضارع، نونِ تاکید سے بلا واسطہ متصل ہونے کی بنا پر **مبنی بر فتحہ**"
      },
      {
        "en": "Present verb Marfoo' with Damma",
        "ur": "ضمہ کے ساتھ مرفوع"
      },
      {
        "en": "Past verb Mabni on Fatha",
        "ur": "ماضی مبنی بر فتحہ"
      },
      {
        "en": "Imperative verb",
        "ur": "فعلِ امر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'لَتُبْلَوُنَّ فِي أَمْوَالِكُمْ وَأَنْفُسِكُمْ' (Qur'an 3:186), why does 'لَتُبْلَوُنَّ' have a Damma on the Wāw?",
    "ur": "آیت مبارکہ 'لَتُبْلَوُنَّ فِي أَمْوَالِكُمْ' میں واؤ پر ضمہ کیوں باقی رہا ہے؟",
    "options": [
      {
        "en": "Because Wāw al-Jamā'ah took Damma after deletion of Nūn al-Raf' to indicate the plural subject",
        "ur": "جمع فاعل پر دلالت کے لیے نونِ رفع کے حذف کے بعد واؤ پر ضمہ دیا گیا ہے"
      },
      {
        "en": "Because it is Mabni on Damma",
        "ur": "مبنی بر ضمہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Fa'il",
        "ur": "فاعل ہونے کی وجہ سے"
      },
      {
        "en": "Because of preposition",
        "ur": "حرفِ جر کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'وَاللَّهِ لَأَجْتَهِدَنَّ':",
    "ur": "پورے جملے 'وَاللَّهِ لَأَجْتَهِدَنَّ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "الواو: حرف قسم، اللَّهِ: اسم جلالة مجرور، اللام: واقعة في جواب القسم، أَجْتَهِدَنَّ: فعل مضارع مبني على الفتح لاتصاله بنون التوكيد، والفاعل مستتر (أنا)",
        "ur": "الواو: حرفِ قسم، اللَّهِ: اسمِ جلالت مجرور، اللام: جوابِ قسم، أَجْتَهِدَنَّ: **فعل مضارع مبنی بر فتحہ** مع نونِ تاکید"
      },
      {
        "en": "والله: مبتدأ، لأجتهدن: خبر",
        "ur": "والله مبتدأ، لأجتهدن خبر"
      },
      {
        "en": "والله: فعل، لأجتهدن: مفعول به",
        "ur": "والله فعل، لأجتهدن مفعول بہ"
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
    "en": "Parse the full sentence: 'فَلاَ وَرَبِّكَ لاَ يُؤْمِنُونَ حَتَّى يُحَكِّمُوكَ':",
    "ur": "قرآنی حصے 'فَلاَ وَرَبِّكَ لاَ يُؤْمِنُونَ' میں 'لاَ يُؤْمِنُونَ' پر نونِ تاکید کیوں نہیں لائی گئی؟",
    "options": [
      {
        "en": "Because the verb is Negative ('لاَ' النافية), which forbids Nūn al-Tawkeed (امتناع التوكيد بسبب النفي)",
        "ur": "کیونکہ فعل **منفی** ('لاَ' النافية) ہے، اور منفی فعل میں نونِ تاکید لانا ممنوع (امتناع) ہے"
      },
      {
        "en": "Because it is imperative",
        "ur": "امر ہونے کی وجہ سے"
      },
      {
        "en": "Because it is past tense",
        "ur": "ماضی ہونے کی وجہ سے"
      },
      {
        "en": "Because it is noun",
        "ur": "اسم ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Which statement accurately summarizes the core grammar rules taught in Lesson 33?",
    "ur": "سبق 33 کے بنیادی گرامر موضوعات کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers Nūn al-Tawkeed (Thaqīlah & Khafīfah) rules for Past (never), Imperative (unconditional), and Present (Wujūb, Jawāz, Imtinā'), morphological shifts with pronouns, Ism al-Fi'l 'أُفٍّ', and 'وَيْلٌ'",
        "ur": "اس سبق میں نونِ تاکید (ثقیلہ و خفیفہ) کے ماضی/امر/مضارع پر احکام (وجوب، جواز، امتناع)، ضمائر کے ساتھ صرفی تبدیلیاں، اسمِ فعل 'أُفٍّ' اور 'وَيْلٌ' کا کامل احاطہ ہے"
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
  console.log('🚀 Seeding Book 3 Lesson 33 Quiz...');
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

    // 3. Find or Create Lecture for Lesson 33
    let lectureId;
    const existingLec = await sql`
      SELECT id, title, order_index FROM lectures
      WHERE section_id = ${sectionId} AND order_index = 33
      LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 33 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 33', 33)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 33: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 33 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 33))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 33.`);
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

    // 5. Create the quiz for Book 3 Lesson 33
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 33 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 33 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
