import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is the primary derived verb pattern of Form IX (باب إِفْعَلَّ) in Arabic?",
    "ur": "عربی زبان میں فارم IX (بابِ إِفْعَلَّ) کا ماضی، مضارع، اور مصدر کا بنیادی وزن کیا ہے؟",
    "options": [
      {
        "en": "إِفْعَلَّ - يَفْعَلُّ - إِفْعِلاَلاً",
        "ur": "إِفْعَلَّ - يَفْعَلُّ - إِفْعِلاَلاً"
      },
      {
        "en": "إِفْعَالَّ - يَفْعَالُّ - إِفْعِيلاَلاً",
        "ur": "إِفْعَالَّ - يَفْعَالُّ - إِفْعِيلاَلاً"
      },
      {
        "en": "انْفَعَلَ - يَنْفَعِلُ - انْفِعَالاً",
        "ur": "انْفَعَلَ - يَنْفَعِلُ - انْفِعَالاً"
      },
      {
        "en": "افْتَعَلَ - يَفْتَعِلُ - افْتِعَالاً",
        "ur": "افْتَعَلَ - يَفْتَعِلُ - افْتِعَالاً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What specific semantic domains do Form IX verbs (باب إِفْعَلَّ, e.g., إِحْمَرَّ، إِعْوَجَّ) express?",
    "ur": "بابِ إِفْعَلَّ (مثلاً إِحْمَرَّ، إِعْوَجَّ) کے افعال کا بنیادی معنوی میدان کون سا ہوتا ہے؟",
    "options": [
      {
        "en": "Colors (الأَلْوَان) and Physical Traits/Defects (العُيُوب)",
        "ur": "رنگوں (الألوان) اور ظاہری عیوب و خصوصیات (العيوب) کو ظاہر کرنا"
      },
      {
        "en": "Seeking forgiveness",
        "ur": "استغفار و طلب کرنا"
      },
      {
        "en": "Reciprocal handshaking between two people",
        "ur": "دو افراد میں باہمی مصافحہ"
      },
      {
        "en": "Transitive action on two objects",
        "ur": "دو مفعولوں پر متعدی ہونا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Active Participle (اسم الفاعل) pattern for Form IX verbs (e.g., إِحْمَرَّ، إِصْفَرَّ)?",
    "ur": "فارم IX افعال (مثلاً إِحْمَرَّ، إِصْفَرَّ) کے اسمِ فاعل کا کیا وزن ہوتا ہے؟",
    "options": [
      {
        "en": "مُفْعَلٌّ (Muf'allun, e.g., مُحْمَرٌّ، مُصْفَرٌّ)",
        "ur": "مُفْعَلٌّ (مثلاً: مُحْمَرٌّ، مُصْفَرٌّ)"
      },
      {
        "en": "مُفْعَالٌّ",
        "ur": "مُفْعَالٌّ"
      },
      {
        "en": "فَاعِلٌ",
        "ur": "فَاعِلٌ"
      },
      {
        "en": "مَفْعُولٌ",
        "ur": "مَفْعُولٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the primary derived verb pattern of Form XI (باب إِفْعَالَّ)?",
    "ur": "فارم XI (بابِ إِفْعَالَّ) کا ماضی، مضارع، اور مصدر کا بنیادی وزن کیا ہے؟",
    "options": [
      {
        "en": "إِفْعَالَّ - يَفْعَالُّ - إِفْعِيلاَلاً",
        "ur": "إِفْعَالَّ - يَفْعَالُّ - إِفْعِيلاَلاً"
      },
      {
        "en": "إِفْعَلَّ - يَفْعَلُّ - إِفْعِلاَلاً",
        "ur": "إِفْعَلَّ - يَفْعَلُّ - إِفْعِلاَلاً"
      },
      {
        "en": "اسْتَفْعَلَ - يَسْتَفْعِلُ - اسْتِفْعَالاً",
        "ur": "اسْتَفْعَلَ - يَسْتَفْعِلُ - اسْتِفْعَالاً"
      },
      {
        "en": "تَفَاعَلَ - يَتَفَاعَلُ - تَفَاعُلاً",
        "ur": "تَفَاعَلَ - يَتَفَاعَلُ - تَفَاعُلاً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the core semantic distinction between Form IX (إِفْعَلَّ) and Form XI (إِفْعَالَّ)?",
    "ur": "بابِ إِفْعَلَّ (فارم IX) اور بابِ إِفْعَالَّ (فارم XI) کے درمیان معنوی لحاظ سے کیا بنیادی فرق ہے؟",
    "options": [
      {
        "en": "Form XI indicates extreme hyperbole and intensity in color (الـمُبَالَغَةُ وَالشِّدَّةُ فِي الأَلْوَانِ) compared to Form IX",
        "ur": "فارم XI میں فارم IX کے مقابلے میں رنگوں کی شدت، گہرائی اور مبالغہ (المبالغة في الألوان) پایا جاتا ہے"
      },
      {
        "en": "Form IX is transitive while Form XI is passive",
        "ur": "فارم IX متعدی اور فارم XI مجہول ہے"
      },
      {
        "en": "Form XI is used strictly for defects",
        "ur": "فارم XI صرف عیوب کے لیے ہے"
      },
      {
        "en": "There is no difference between them",
        "ur": "ان کے درمیان کوئی فرق نہیں ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Ra'ā al-Qalbiyyah' (رَأَى القَلْبِيَّةُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'رَأَى القَلْبِيَّةُ' (دل و عقل سے جاننے والی رأى) سے کیا مراد ہے؟",
    "options": [
      {
        "en": "A verb meaning 'to know/perceive' (بمعنى عَلِمَ) that takes TWO direct objects whose origin was Mubtada' and Khabar",
        "ur": "وہ فعل جو بمعنی 'عَلِمَ' (جاننا/یقین رکھنا) ہو اور جو دو ایسے مفعولوں کو نصب دیتا ہے جو اصل میں مبتدا اور خبر تھے"
      },
      {
        "en": "A verb meaning 'to see with eyes' taking one object",
        "ur": "آنکھ سے دیکھنے والا فعل جو ایک مفعول لیتا ہے"
      },
      {
        "en": "A verb of expectation taking no object",
        "ur": "بغیر مفعول کا فعل"
      },
      {
        "en": "A preposition",
        "ur": "حرفِ جر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Ra'ā al-Basariyyah' (رَأَى البَصَرِيَّةُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'رَأَى البَصَرِيَّةُ' (آنکھ سے دیکھنے والی رأى) سے کیا مراد ہے؟",
    "options": [
      {
        "en": "A verb meaning 'to see visually with eyes' (الرُّؤْيَةُ بِالعَيْنِ) that takes only ONE direct object",
        "ur": "وہ فعل جو بمعنی 'آنکھ سے دیکھنا' ہو اور صرف **ایک** مفعول بہ کو نصب دیتا ہے"
      },
      {
        "en": "A verb taking two objects",
        "ur": "دو مفعول لینے والا فعل"
      },
      {
        "en": "A verb of hope",
        "ur": "فعلِ رجاء"
      },
      {
        "en": "An imperative particle",
        "ur": "امر کا حرف"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What type of verb is 'Asā' (عَسَى) and what semantic meaning does it convey?",
    "ur": "عربی زبان میں 'عَسَى' کس قسم کا فعل ہے اور اس کا کیا بنیادی معنوی فائدہ ہوتا ہے؟",
    "options": [
      {
        "en": "Af'āl ar-Rajā' (أَفْعَالُ الرَّجَاءِ) expressing hope (التَّرَجِّي) or apprehension (الإِشْفَاق)",
        "ur": "افعالِ رجاء (أفعال الرجاء) میں سے ہے جو امید (الترجي) یا خدشے و شفقت (الإشفاق) کا فائدہ دیتا ہے"
      },
      {
        "en": "Af'al al-Muqarabah indicating action starting",
        "ur": "افعالِ مقاربہ"
      },
      {
        "en": "Conditional particle causing Jazm",
        "ur": "جزم دینے والی شرط"
      },
      {
        "en": "Vocative particle",
        "ur": "حرفِ نداء"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Asā an-Nāqisah' (عَسَى الناقِصَةُ) and how does it function syntactically?",
    "ur": "'عَسَى الناقصة' (ناقصہ عسی) سے کیا مراد ہے اور اس کی ترکیبی ساخت کیا ہوتی ہے؟",
    "options": [
      {
        "en": "Functions like Kāna (تعمل عمل كان): takes a Marfoo' noun as its Ism, and a Masdar Mu'awwal (أن + مضارع) as its Khabar",
        "ur": "یہ 'کان' کی طرح عمل کرتی ہے: اسم کو مرفوع اور اس کی خبر 'أن + مضارع' (مصدر مؤول) کی شکل میں ہوتی ہے"
      },
      {
        "en": "Takes two objects directly",
        "ur": "دو مفعولوں کو ڈائریکٹ نصب دیتی ہے"
      },
      {
        "en": "Takes only a past verb",
        "ur": "صرف ماضی فعل لیتی ہے"
      },
      {
        "en": "Acts as a preposition",
        "ur": "حرفِ جر کا عمل کرتی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Asā at-Tāmmah' (عَسَى التَّامَّةُ) and how does it differ from Nāqisah?",
    "ur": "'عَسَى التامة' (تامہ عسی) سے کیا مراد ہے اور یہ ناقصہ سے کیسے مختلف ہوتی ہے؟",
    "options": [
      {
        "en": "It is satisfied by its Marfoo' Subject alone (تَكْتَفِي بِمَرْفُوعِهَا) which is the Masdar Mu'awwal (أن + مضارع) acting as its Fa'il, needing no separate Khabar",
        "ur": "یہ صرف اپنے مرفوع (مصدر مؤول: أن + مضارع) پر بطورِ فاعل کامل و پورا ہو جاتی ہے اور اسے کسی الگ خبر کی حاجت نہیں ہوتی"
      },
      {
        "en": "It takes an Ism and Khabar like Kāna",
        "ur": "یہ کان کی طرح اسم و خبر لیتی ہے"
      },
      {
        "en": "It makes present verbs Majzoom",
        "ur": "یہ مضارع کو مجزوم کرتی ہے"
      },
      {
        "en": "It functions as a derived noun",
        "ur": "یہ مشتق اسم بنتی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, what is the Masdar of Form IX verb 'إِصْفَرَّ' (to turn yellow)?",
    "ur": "تمرين 1 کے مطابق فارم IX فعل 'إِصْفَرَّ' (زرد ہونا) کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "إِصْفِرَارٌ (Isfirārun)",
        "ur": "إِصْفِرَارٌ"
      },
      {
        "en": "إِصْفَارٌ",
        "ur": "إِصْفَارٌ"
      },
      {
        "en": "تَصْفِيرٌ",
        "ur": "تَصْفِيرٌ"
      },
      {
        "en": "مُصْفَرٌّ",
        "ur": "مُصْفَرٌّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the Active Participle (اسم الفاعل) of Form IX verb 'إِبْيَضَّ' (to turn white)?",
    "ur": "فعل 'إِبْيَضَّ' (سفید ہونا) کا اسمِ فاعل کیا ہے؟",
    "options": [
      {
        "en": "مُبْيَضٌّ (Mubyaḍḍun - with Tashdeed on Dād)",
        "ur": "مُبْيَضٌّ (ضاد پر تشدید کے ساتھ)"
      },
      {
        "en": "مُبْيَاضٌّ",
        "ur": "مُبْيَاضٌّ"
      },
      {
        "en": "أَبْيَضُ",
        "ur": "أَبْيَضُ"
      },
      {
        "en": "تَبْيِيضٌ",
        "ur": "تَبْيِيضٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the Present Tense (فعل المضارع) of Form IX defect verb 'إِعْوَجَّ' (to become crooked)?",
    "ur": "عیب و کجی کے فارم IX فعل 'إِعْوَجَّ' (ٹیڑھا ہونا) کا فعلِ مضارع کیا ہے؟",
    "options": [
      {
        "en": "يَعْوَجُّ (Ya'wajju - with Tashdeed on Jeem)",
        "ur": "يَعْوَجُّ (جیم پر تشدید کے ساتھ)"
      },
      {
        "en": "يُعَوِّجُ",
        "ur": "يُعَوِّجُ"
      },
      {
        "en": "يَعْوَاجُّ",
        "ur": "يَعْوَاجُّ"
      },
      {
        "en": "يَسْتَعْوِجُ",
        "ur": "يَسْتَعْوِجُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Form the Imperative (فعل الأمر) for Form IX verb 'إِخْضَرَّ' (to become green):",
    "ur": "فعل 'إِخْضَرَّ' (سبز ہونا) کا فعلِ امر کیا ہوگا؟",
    "options": [
      {
        "en": "إِخْضَرَّ / إِخْضَرِرْ (Ikhḍarra / Ikhḍarir)",
        "ur": "إِخْضَرَّ / إِخْضَرِرْ"
      },
      {
        "en": "إِخْضَارَّ",
        "ur": "إِخْضَارَّ"
      },
      {
        "en": "أَخْضِرْ",
        "ur": "أَخْضِرْ"
      },
      {
        "en": "تَخَضَّرْ",
        "ur": "تَخَضَّرْ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, what is the Masdar of Form XI verb 'إِصْفَارَّ'?",
    "ur": "تمرين 3 کے مطابق فارم XI فعل 'إِصْفَارَّ' کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "إِصْفِيرَارٌ (Isfīrārun - with Yā' after Ayn radical)",
        "ur": "إِصْفِيرَارٌ (عین کے بعد یاء کے ساتھ)"
      },
      {
        "en": "إِصْفِرَارٌ",
        "ur": "إِصْفِرَارٌ"
      },
      {
        "en": "تَصْفِيرٌ",
        "ur": "تَصْفِيرٌ"
      },
      {
        "en": "مُصْفَارٌّ",
        "ur": "مُصْفَارٌّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Active Participle (اسم الفاعل) of Form XI verb 'إِحْمَارَّ'?",
    "ur": "فارم XI فعل 'إِحْمَارَّ' کا اسمِ فاعل کیا ہے؟",
    "options": [
      {
        "en": "مُحْمَارٌّ (Muhmārrun - with Alif after Ayn radical)",
        "ur": "مُحْمَارٌّ (عین کلمہ کے بعد الف کے ساتھ)"
      },
      {
        "en": "مُحْمَرٌّ",
        "ur": "مُحْمَرٌّ"
      },
      {
        "en": "أَحْمَرُ",
        "ur": "أَحْمَرُ"
      },
      {
        "en": "تَحْمِيرٌ",
        "ur": "تَحْمِيرٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In the Quranic description 'مُدْهَامَّتَانِ' (Qur'an 55:64), what color intensity does Form XI 'إِدْهَامَّ' denote?",
    "ur": "قرآنی وصف 'مُدْهَامَّتَانِ' میں فارم XI فعل 'إِدْهَامَّ' کس قسم کا رنگ ظاہر کرتا ہے؟",
    "options": [
      {
        "en": "Deep intense dark green approaching blackness due to lush irrigation (شدة الخضرة حتى تميل إلى السواد)",
        "ur": "سیرابی کی وجہ سے شدید گہرا سبز رنگ جو سیاہی کی طرف مائل محسوس ہو (شدة الخضرة)"
      },
      {
        "en": "Yellowish white color",
        "ur": "زردی مائل سفید رنگ"
      },
      {
        "en": "Pale blue color",
        "ur": "ہلکا نیلا رنگ"
      },
      {
        "en": "Pure red color",
        "ur": "خالص سرخ رنگ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What structural addition differentiates Form XI 'إِحْمَارَّ' from Form IX 'إِحْمَرَّ'?",
    "ur": "فارم XI 'إِحْمَارَّ' کے فارم IX 'إِحْمَرَّ' پر کیا ساختگی و حروفی زیادہ اضافہ ہوتا ہے؟",
    "options": [
      {
        "en": "Form XI adds an extra Alif after the Ayn radical (ألف بعد العين)",
        "ur": "فارم XI میں عین کلمہ کے بعد ایک اضافی **الف** کا اضافہ ہوتا ہے"
      },
      {
        "en": "Form XI adds a Meem at the start",
        "ur": "شروع میں میم کا اضافہ"
      },
      {
        "en": "Form XI drops the Hamzat al-Wasl",
        "ur": "ہمزہ وصل کا حذف"
      },
      {
        "en": "Form XI adds a Waw",
        "ur": "واؤ کا اضافہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In Exercise 5, in 'أَرَاكَ ضَعِيفاً فِي النَّحْوِ', why is 'ضَعِيفاً' Mansoob?",
    "ur": "تمرين 5 کے مطابق 'أَرَاكَ ضَعِيفاً فِي النَّحْوِ' میں لفظ 'ضَعِيفاً' کیوں منصوب ہے؟",
    "options": [
      {
        "en": "Second Direct Object (مفعول به ثانٍ) for Ra'ā al-Qalbiyyah",
        "ur": "رَأَى القَلْبِيَّة کا مفعول بہ ثانی منصوب"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      },
      {
        "en": "Tamyeez Mansoob",
        "ur": "تمیز منصوب"
      },
      {
        "en": "Badal Mansoob",
        "ur": "بدل منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'رَأَيْتُ الـمُدَرِّسَ فِي الـمَسْجِدِ', what type of 'رَأَى' is used and how many objects does it take?",
    "ur": "جملے 'رَأَيْتُ الـمُدَرِّسَ فِي الـمَسْجِدِ' میں 'رَأَى' کی کون سی قسم ہے اور یہ کتنے مفعول لیتی ہے؟",
    "options": [
      {
        "en": "Ra'ā al-Basariyyah (visual seeing with eye), taking ONE direct object 'الـمُدَرِّسَ'",
        "ur": "رَأَى البَصَرِيَّة (آنکھ سے دیکھنا)، جو صرف ایک مفعول 'المدرس' لیتی ہے"
      },
      {
        "en": "Ra'ā al-Qalbiyyah taking two objects",
        "ur": "رأى القلبية (دو مفعول)"
      },
      {
        "en": "Verb of hope taking no object",
        "ur": "فعلِ رجاء"
      },
      {
        "en": "Passive verb",
        "ur": "مجہول فعل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "In 'رَأَيْتُ زَيْداً مُسْتَعْجِلاً' (I saw Zayd while he was in a hurry), if 'رَأَيْتُ' is visual (بصرية), how is 'مُسْتَعْجِلاً' parsed?",
    "ur": "جملے 'رَأَيْتُ زَيْداً مُسْتَعْجِلاً' میں اگر 'رَأَيْتُ' بصریہ ہو تو 'مُسْتَعْجِلاً' کا کیا اعرابی موقع ہوگا؟",
    "options": [
      {
        "en": "Ḥāl Mansوob with Fatha (حال منصوب بالفتحة)",
        "ur": "حال منصوب بالفتحة"
      },
      {
        "en": "Second Object (مفعول به ثانٍ)",
        "ur": "مفعول بہ ثانی"
      },
      {
        "en": "Mubtada'",
        "ur": "مبتدأ"
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
    "en": "Convert the nominal sentence 'أَنْتَ مُسْتَعْجِلٌ' using Ra'ā al-Qalbiyyah (in 1st person 'أَرَى'):",
    "ur": "اسمیہ جملے 'أَنْتَ مُسْتَعْجِلٌ' کو 'رَأَى القَلْبِيَّة' (ضمير متکلم 'أَرَى') کے ساتھ درست تبدیل کریں:",
    "options": [
      {
        "en": "أَرَاكَ مُسْتَعْجِلاً (Arāka musta'jilan - Kaaf is 1st object, Musta'jilan is 2nd object)",
        "ur": "أَرَاكَ مُسْتَعْجِلاً (کاف پہلا مفعول، مستعجلاً دوسرا مفعول)"
      },
      {
        "en": "أَرَاكَ مُسْتَعْجِلٌ",
        "ur": "أَرَاكَ مُسْتَعْجِلٌ"
      },
      {
        "en": "رَأَيْتُكَ أَنْتَ مُسْتَعْجِلٌ",
        "ur": "رَأَيْتُكَ أَنْتَ مُسْتَعْجِلٌ"
      },
      {
        "en": "أَرَى أَنْتَ مُسْتَعْجِلٌ",
        "ur": "أَرَى أَنْتَ مُسْتَعْجِلٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 7",
    "en": "In Exercise 7, in 'عَسَى اللَّهُ أَنْ يَتُوبَ عَلَيْهِمْ' (Qur'an 9:102), how is 'اللَّهُ' parsed?",
    "ur": "تمرين 7 کے مطابق قرآنی آیہ 'عَسَى اللَّهُ أَنْ يَتُوبَ عَلَيْهِمْ' میں اسمِ جلالہ 'اللَّهُ' کا اعرابی موقع کیا ہے؟",
    "options": [
      {
        "en": "Ism 'Asā Nāqisah Marfoo' with Damma (اسم عسى الناقصة مرفوع بالضمة)",
        "ur": "'عسى الناقصة' کا اسم مرفوع بالضمة"
      },
      {
        "en": "Fa'il of 'یتوب'",
        "ur": "یتوب کا فاعل"
      },
      {
        "en": "Maf'ool Bihi",
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
    "part": "Exercise 7",
    "en": "In 'عَسَى اللَّهُ أَنْ يَأْتِيَنِي بِهِمْ جَمِيعاً' (Qur'an 12:83), what acts as the Khabar of 'Asā Nāqisah?",
    "ur": "قرآنی آیہ میں 'عَسَى' ناقصہ کی خبر کا کیا ترکیبی منصب ہے؟",
    "options": [
      {
        "en": "The Masdar Mu'awwal 'أَنْ يَأْتِيَنِي' in position of Nasb as Khabar 'Asā (المصدر المؤول في محل نصب خبر عسى)",
        "ur": "مصدر مؤول 'أَنْ يَأْتِيَنِي' خبرِ 'عسى' ہو کر (في محل نصب)"
      },
      {
        "en": "The word 'جمیعاً'",
        "ur": "لفظ جمیعاً"
      },
      {
        "en": "The prepositional phrase 'بهم'",
        "ur": "جار مجرور بهم"
      },
      {
        "en": "There is no Khabar",
        "ur": "کوئی خبر نہیں ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 8",
    "en": "In 'عَسَى أَنْ تَنْجَحَ', what type of 'Asā is used and what is 'أَنْ تَنْجَحَ'?",
    "ur": "تمرين 8 کے مطابق 'عَسَى أَنْ تَنْجَحَ' میں 'عَسَى' کی کون سی قسم ہے اور 'أَنْ تَنْجَحَ' کیا بن رہا ہے؟",
    "options": [
      {
        "en": "'Asā at-Tāmmah, and 'أَنْ تَنْجَحَ' is Masdar Mu'awwal in position of Raf' as its Fa'il (فاعل مرفوع محلاً)",
        "ur": "'عَسَى التامّة'، اور 'أَنْ تَنْجَحَ' مصدر مؤول ہو کر اس کا فاعل (في محل رفع) ہے"
      },
      {
        "en": "'Asā Nāqisah and Khabar",
        "ur": "عسى ناقصہ اور خبر"
      },
      {
        "en": "Prepositional phrase",
        "ur": "جار مجرور"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 8",
    "en": "Convert 'عَسَيْتُ أَنْ أَعُودَ' ('Asā Nāqisah with pronoun) into 'Asā Tāmmah:",
    "ur": "جملے 'عَسَيْتُ أَنْ أَعُودَ' (عسى ناقصہ مع ضمیر) کو 'عسى تامة' کی درست شکل میں تبدیل کریں:",
    "options": [
      {
        "en": "عَسَى أَنْ أَعُودَ ('Asā + Masdar Mu'awwal directly as Fa'il)",
        "ur": "عَسَى أَنْ أَعُودَ (عسى + ڈائریکٹ فاعل مصدر مؤول)"
      },
      {
        "en": "عَسَيْتُ أَنِّي أَعُودُ",
        "ur": "عَسَيْتُ أَنِّي أَعُودُ"
      },
      {
        "en": "عَسَى أَنَا أَعُودُ",
        "ur": "عَسَى أَنَا أَعُودُ"
      },
      {
        "en": "أَنْ أَعُودَ عَسَيْتُ",
        "ur": "أَنْ أَعُودَ عَسَيْتُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 9",
    "en": "In the Quranic verse 'يَوْمَ تَبْيَضُّ وُجُوهٌ وَتَسْوَدُّ وُجُوهٌ' (Qur'an 3:106), how is 'وُجُوهٌ' parsed after 'تَبْيَضُّ'?",
    "ur": "قرآنی آیہ 'يَوْمَ تَبْيَضُّ وُجُوهٌ وَتَسْوَدُّ وُجُوهٌ' میں 'تَبْيَضُّ' کے بعد 'وُجُوهٌ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Fa'il of 'تَبْيَضُّ' Marfoo' with Damma (فاعل مرفوع بالضمة)",
        "ur": "فعل 'تَبْيَضُّ' کا فاعل مرفوع بالضمة"
      },
      {
        "en": "Maf'ool Bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Mubtada'",
        "ur": "مبتدأ"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 9",
    "en": "In the Quranic description 'مُدْهَامَّتَانِ' (Qur'an 55:64), what morphological class does this word belong to?",
    "ur": "آیت مبارکہ 'مُدْهَامَّتَانِ' کس صرفی و اشتقاقی صیغے کی مثال ہے؟",
    "options": [
      {
        "en": "Dual Feminine Active Participle from Form XI (اسم فاعل للمثنى المؤنث من باب إِفْعَالَّ)",
        "ur": "بابِ إِفْعَالَّ (فارم XI) کا تثنیہ مؤنث اسمِ فاعل"
      },
      {
        "en": "Form I past verb",
        "ur": "فارم I ماضی فعل"
      },
      {
        "en": "Form IX passive participle",
        "ur": "فارم IX اسمِ مفعول"
      },
      {
        "en": "Prepositional phrase",
        "ur": "جار مجرور"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 10",
    "en": "Parse the full sentence: 'إِحْمَرَّ وَجْهُهُ إِحْمِرَاراً':",
    "ur": "پورے جملے 'إِحْمَرَّ وَجْهُهُ إِحْمِرَاراً' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "إِحْمَرَّ: فعل ماضٍ من باب إِفْعَلَّ، وَجْهُهُ: فاعل مرفوع بالضمة وهو مضاف والهاء مضاف إليه، إِحْمِرَاراً: مفعول مطلق منصوب بالفتحة",
        "ur": "إِحْمَرَّ: فعلِ ماضی (باب إفعلّ)، وَجْهُهُ: فاعل مرفوع بالضمة مع مضاف الیہ (ضمير)، إِحْمِرَاراً: مفعول مطلق منصوب بالفتحة"
      },
      {
        "en": "احمر: مبتدأ، وجهه: خبر، احمرارا: مفعول به",
        "ur": "احمر مبتدأ، وجهه خبر، احمراراً مفعول بہ"
      },
      {
        "en": "احمر: حرف، وجهه: اسم مجرور، احمرارا: حال",
        "ur": "احمر حرف، وجهه اسم مجرور، احمراراً حال"
      },
      {
        "en": "None of the above",
        "ur": "ان میں سے کوئی نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 10",
    "en": "Which statement accurately summarizes the core grammar rules taught in Lesson 24?",
    "ur": "سبق 24 کے بنیادی گرامر موضوعات کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers Form IX (إِفْعَلَّ) for colors/defects, Form XI (إِفْعَالَّ) for color intensity, Ra'ā al-Qalbiyyah (2 objects) vs Ra'ā al-Basariyyah (1 object), and 'Asā (Nāqisah vs Tāmmah)",
        "ur": "اس سبق میں بابِ إفعلّ (رنگ و عیوب)، بابِ إفعالّ (شدتِ رنگ)، رأى القلبیہ (دو مفعول) و بصریہ (ایک مفعول)، اور عسی ناقصہ و تامہ کا کامل احاطہ کیا گیا ہے"
      },
      {
        "en": "Covers condition particles only",
        "ur": "صرف ادواتِ شرط کا احاطہ"
      },
      {
        "en": "Covers prepositions only",
        "ur": "صرف حروفِ جر کا احاطہ"
      },
      {
        "en": "Covers passive verbs only",
        "ur": "صرف مجہول افعال کا احاطہ"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('🚀 Seeding Book 3 Lesson 24 Quiz...');
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

    // 3. Find or Create Lecture for Lesson 24
    let lectureId;
    const existingLec = await sql`
      SELECT id, title, order_index FROM lectures
      WHERE section_id = ${sectionId} AND order_index = 24
      LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 24 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 24', 24)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 24: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 24 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 24))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 24.`);
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

    // 5. Create the quiz for Book 3 Lesson 24
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 24 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 24 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
