import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is 'Al-Maf'ool al-Mutlaq' (المَفْعُولُ الـمُطْلَقُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'مفعول مطلق' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "An extra Mansoob verbal noun derived from the same verb to confirm it, show its type, or state its count",
        "ur": "وہ زائد (فضلة) منصوب مصدر جو اپنے ہی فعل سے آئے تاکہ اس کی تاکید کرے، نوعیت بتائے، یا تعداد ظاہر کرے"
      },
      {
        "en": "A noun showing the place where the action occurred",
        "ur": "وہ اسم جو عمل کے وقوع کی جگہ بتائے"
      },
      {
        "en": "A heart-based noun showing the reason for the verb",
        "ur": "وہ قلبی اسم جو فعل کی وجہ بتائے"
      },
      {
        "en": "A prepositional phrase modifying the subject",
        "ur": "وہ جار مجرور جو فاعل کی حالت بتائے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the three categories of Maf'ool Mutlaq (أنواع المفعول المطلق)?",
    "ur": "مفعول مطلق کی تین بنیادی اقسام کون سی ہیں؟",
    "options": [
      {
        "en": "المؤكِّد لِفِعْلِهِ، الـمُبَيِّنُ لِنَوْعِهِ، الـمُبَيِّنُ لِعَدَدِهِ",
        "ur": "المؤكِّد لِفِعْلِهِ (تاکیدی)، الـمُبَيِّنُ لِنَوْعِهِ (نوعی)، الـمُبَيِّنُ لِعَدَدِهِ (عددی)"
      },
      {
        "en": "المطلق، المقيد، المضاف",
        "ur": "المطلق، المقيد، المضاف"
      },
      {
        "en": "المرفوع، المنصوب، المجرور",
        "ur": "المرفوع، المنصوب، المجرور"
      },
      {
        "en": "الظاهر، المضمر، المستتر",
        "ur": "الظاهر، المضمر، المستتر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'حَفِظْتُ الدَّرْسَ حِفْظاً جَيِّداً' (I memorized the lesson thoroughly), what type of Maf'ool Mutlaq is 'حِفْظاً'?",
    "ur": "جملے 'حَفِظْتُ الدَّرْسَ حِفْظاً جَيِّداً' میں 'حِفْظاً' مفعول مطلق کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "المبيِّن لِنَوْعِهِ (Describing the type due to the following Na't 'جَيِّداً')",
        "ur": "الـمُبَيِّنُ لِنَوْعِهِ (صفت 'جَيِّداً' ساتھ آنے کی وجہ سے نوعیت بتانے والا)"
      },
      {
        "en": "المؤكد لفعله",
        "ur": "المؤكد لفعله"
      },
      {
        "en": "المبين لعدده",
        "ur": "المبين لعدده"
      },
      {
        "en": "Maf'ool Li-ajlihi",
        "ur": "مفعول لأجله"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'سَجَدْتُ سَجْدَتَيْنِ' (I performed two prostrations), what type of Maf'ool Mutlaq is 'سَجْدَتَيْنِ'?",
    "ur": "جملے 'سَجَدْتُ سَجْدَتَيْنِ' میں 'سَجْدَتَيْنِ' مفعول مطلق کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "المبيِّن لِعَدَدِهِ (Showing the count of the action)",
        "ur": "الـمُبَيِّنُ لِعَدَدِهِ (عمل کی تعداد ظاہر کرنے والا)"
      },
      {
        "en": "المؤكد لفعله",
        "ur": "المؤكد لفعله"
      },
      {
        "en": "المبين لنوعه",
        "ur": "المبين لنوعه"
      },
      {
        "en": "Maf'ool Fihi",
        "ur": "مفعول فيه"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Na'ib 'an al-Maf'ool al-Mutlaq' (النائب عن المفعول المطلق)?",
    "ur": "'نائب عن المفعول مطلق' سے گرامر میں کیا مراد ہے؟",
    "options": [
      {
        "en": "A word (like كُلّ, بَعْض, demonstrative, number, or synonym) that replaces the Masdar and takes its Mansoob I'rab",
        "ur": "وہ الفاظ (جیسے كل، بعض، اسمِ اشارہ، عدد، مترادف) جو مصدر کی جگہ لے کر مفعول مطلق کا اعرابِ نصب پاتے ہیں"
      },
      {
        "en": "The verb that omits its subject",
        "ur": "وہ فعل جو اپنے فاعل کو حذف کر دے"
      },
      {
        "en": "The preposition that introduces the Masdar",
        "ur": "وہ حرفِ جر جو مصدر پر داخل ہو"
      },
      {
        "en": "A dual subject noun",
        "ur": "تثنیہ فاعل اسم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'فَلاَ تَمِيلُوا كُلَّ الـمَيْلِ' (Qur'an 4:129), how is 'كُلَّ' parsed?",
    "ur": "آیت مبارکہ 'فَلاَ تَمِيلُوا كُلَّ الـمَيْلِ' میں لفظ 'كُلَّ' کا اعرابی منصب کیا ہے؟",
    "options": [
      {
        "en": "Na'ib 'an al-Maf'ool al-Mutlaq Mansoob with Fatha (نائب عن المفعول المطلق منصوب وهو مضاف)",
        "ur": "نائب عن المفعول المطلق منصوب (وہو مضاف)"
      },
      {
        "en": "Tamyeez Mansoob",
        "ur": "تمیز منصوب"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Al-Maf'ool Li-ajlihi' (المَفْعُولُ لأَجْلِهِ / الـمَفْعُولُ لَهُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'مفعول لأجله' (یا مفعول لہ) کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A heart-based Mansoob verbal noun mentioned to explain the reason/cause for the occurrence of the verb",
        "ur": "وہ قلبی منصوب مصدر جو فعل کے وقوع کا سبب اور وجہ بیان کرنے کے لیے ذکر کیا جائے"
      },
      {
        "en": "A noun showing the tool used in the action",
        "ur": "وہ اسم جو عمل کا اوزار ظاہر کرے"
      },
      {
        "en": "A word that confirms the verb's meaning",
        "ur": "وہ لفظ جو فعل کے معنی کی تاکید کرے"
      },
      {
        "en": "A time or place noun",
        "ur": "زمان یا مکان کا اسم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the essential conditions for a noun to function directly as Maf'ool Li-ajlihi in Mansoob case?",
    "ur": "کسی اسم کو براہِ راست مفعول لأجله (منصوب) بنانے کے لیے کون سی بنیادی شرائط ضروری ہیں؟",
    "options": [
      {
        "en": "Must be an inner/heart-based Masdar (مصدر قلبي) sharing the same Subject (الفاعل) and Time (الزمان) with the verb",
        "ur": "اس کا قلبی مصدر ہونا، اور فعل کے ساتھ فاعل اور زمانہ (وقت) میں متحد ہونا"
      },
      {
        "en": "Must be a proper noun ending with Tanween",
        "ur": "اس کا اسمِ علم ہونا"
      },
      {
        "en": "Must be derived from Form X verbs only",
        "ur": "اس کا صرف فارم X سے ہونا"
      },
      {
        "en": "Must be a plural noun",
        "ur": "اس کا جمع ہونا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What does 'Masdar Qalbiy' (مصدر قلبي) mean regarding Maf'ool Li-ajlihi?",
    "ur": "مفعول لأجله کے باب میں 'مصدرِ قلبی' سے کیا مراد ہے؟",
    "options": [
      {
        "en": "A verbal noun expressing internal emotions/feelings (e.g., احترام، خوف، رغبة، حياء) rather than physical organ actions",
        "ur": "وہ مصدر جو دلی و باطنی احساسات (احترام، خوف، رغبت، حیا) کو ظاہر کرے، نہ کہ اعضاء کے ظاہری افعال کو"
      },
      {
        "en": "A verb conjugate for the heart",
        "ur": "دل سے بولا جانے والا فعل"
      },
      {
        "en": "A non-derived primitive noun",
        "ur": "اسمِ جامد"
      },
      {
        "en": "A noun written in red color",
        "ur": "سرخ رنگ میں لکھا گیا اسم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the three states of Maf'ool Li-ajlihi and their primary I'rab tendencies?",
    "ur": "مفعول لأجله کی تین حالتیں اور ان کے ترجیحی اعرابی احکام کیا ہیں؟",
    "options": [
      {
        "en": "1) Mujarrad from Al/Idafah (Nصب غالباً)، 2) Mudaf (جواز النصب والجر)، 3) Muhalla bi-Al (الجر باللام غالباً)",
        "ur": "1) مجرد من أل والإضافة (نصب غالباً)، 2) مضاف (جوازِ نصب و جر)، 3) محلى بأل (جر باللام غالباً)"
      },
      {
        "en": "All three states are strictly Marfoo'",
        "ur": "تینوں حالتوں میں صرف مرفوع"
      },
      {
        "en": "All three states are strictly Majroor",
        "ur": "تینوں حالتوں میں صرف مجرور"
      },
      {
        "en": "There is only one state permitted",
        "ur": "صرف ایک حالت جائز ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, identify the type of Maf'ool Mutlaq in 'حَفِظْتُ السُّورَةَ حِفْظاً':",
    "ur": "تمرين 1 کے مطابق جملے 'حَفِظْتُ السُّورَةَ حِفْظاً' میں 'حِفْظاً' مفعول مطلق کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "المؤكِّد لِفِعْلِهِ (Confirming the verb)",
        "ur": "المؤكِّد لِفِعْلِهِ (تاکیدِ فعل کے لیے)"
      },
      {
        "en": "المبين لنوعه",
        "ur": "المبين لنوعه"
      },
      {
        "en": "المبين لعدده",
        "ur": "المبين لعدده"
      },
      {
        "en": "Na'ib 'an al-Maf'ool al-Mutlaq",
        "ur": "نائب عن المفعول المطلق"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Identify the type of Maf'ool Mutlaq in 'مَشَيْتُ مَشْيَ الهَوْنَى' (I walked the walk of gentleness):",
    "ur": "جملے 'مَشَيْتُ مَشْيَ الهَوْنَى' میں 'مَشْيَ' مفعول مطلق کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "المبيِّن لِنَوْعِهِ (Describing the type of walk as Mudaf)",
        "ur": "الـمُبَيِّنُ لِنَوْعِهِ (مضاف بن کر نوعیت بتانے والا)"
      },
      {
        "en": "المؤكد لفعله",
        "ur": "المؤكد لفعله"
      },
      {
        "en": "المبين لعدده",
        "ur": "المبين لعدده"
      },
      {
        "en": "Maf'ool Li-ajlihi",
        "ur": "مفعول لأجله"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Identify the type of Maf'ool Mutlaq in 'ضَرَبْتُ الـجَرَسَ ضَرَبَتَيْنِ':",
    "ur": "جملے 'ضَرَبْتُ الـجَرَسَ ضَرَبَتَيْنِ' میں 'ضَرَبَتَيْنِ' مفعول مطلق کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "المبيِّن لِعَدَدِهِ (Showing two occurrences of the action)",
        "ur": "الـمُبَيِّنُ لِعَدَدِهِ (عمل کی دو بار تعداد بتانے والا)"
      },
      {
        "en": "المؤكد لفعله",
        "ur": "المؤكد لفعله"
      },
      {
        "en": "المبين لنوعه",
        "ur": "المبين لنوعه"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete with Mobayyin lin-Naw' Maf'ool Mutlaq: 'نَامَ الطِّفْلُ ...' (The child slept a deep sleep):",
    "ur": "نوعیت بتانے والے مفعول مطلق سے جملہ مکمل کریں: 'نَامَ الطِّفْلُ ...':",
    "options": [
      {
        "en": "نَوْماً عَمِيقاً (Nawman 'amīqan - Masdar + Na't)",
        "ur": "نَوْماً عَمِيقاً (مصدر + صفت)"
      },
      {
        "en": "نَوْماً",
        "ur": "نَوْماً"
      },
      {
        "en": "نَوْمَتَيْنِ",
        "ur": "نَوْمَتَيْنِ"
      },
      {
        "en": "فِي النَّوْمِ",
        "ur": "فِي النَّوْمِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, in 'فَهِمْتُ الدَّرْسَ كُلَّ الفَهْمِ', why is 'كُلَّ' parsed as Na'ib 'an al-Maf'ool al-Mutlaq?",
    "ur": "تمرين 2 کے مطابق 'فَهِمْتُ الدَّرْسَ كُلَّ الفَهْمِ' میں 'كُلَّ' کو نائب عن المفعول المطلق کیوں کہا گیا ہے؟",
    "options": [
      {
        "en": "Because 'كُلّ' is added/Mudaf to the actual Masdar 'الفَهْمِ'",
        "ur": "کیونکہ لفظ 'كُلّ' اصلی مصدر 'الفَهْمِ' کی طرف مضاف ہو کر آیا ہے"
      },
      {
        "en": "Because it is the Fa'il of Fahimtu",
        "ur": "فاعل ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Tamyeez",
        "ur": "تمیز ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Harf Jar",
        "ur": "حرفِ جر ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'سِرْتُ ذَلِكَ السَّيْرَ', how is demonstrative noun 'ذَلِكَ' parsed?",
    "ur": "جملے 'سِرْتُ ذَلِكَ السَّيْرَ' میں اسمِ اشارہ 'ذَلِكَ' کا کیا ترکیبی منصب ہے؟",
    "options": [
      {
        "en": "Demonstrative noun in position of Nasb as Na'ib 'an al-Maf'ool al-Mutlaq (اسم إشارة في محل نصب نائب عن المفعول المطلق)",
        "ur": "اسمِ اشارہ في محل نصب بنوائے نائب عن المفعول المطلق"
      },
      {
        "en": "Mubtada' Marfoo'",
        "ur": "مبتدأ مرفوع"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'جَلَدْتُ العَاصِيَ خَمْسِينَ جَلْدَةً', why is number 'خَمْسِينَ' Mansoob with Yā'?",
    "ur": "جملے 'جَلَدْتُ العَاصِيَ خَمْسِينَ جَلْدَةً' میں عدد 'خَمْسِينَ' نائب عن المفعول المطلق بن کر یاء کے ساتھ منصوب کیوں ہے؟",
    "options": [
      {
        "en": "Because it is a number preceding the Masdar count unit 'جَلْدَةً'",
        "ur": "کیونکہ یہ مصدری اکائی 'جَلْدَةً' سے پہلے آنے والا عدد (نائب عن المفعول المطلق) ہے"
      },
      {
        "en": "Because it is Maf'ool Bihi",
        "ur": "مفعول بہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Fa'il",
        "ur": "فاعل ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Mudaf Ilayh",
        "ur": "مضاف الیہ ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'قَعَدْتُ جُلُوساً' (I sat down sitting), why is 'جُلُوساً' parsed as Na'ib 'an al-Maf'ool al-Mutlaq?",
    "ur": "جملے 'قَعَدْتُ جُلُوساً' میں لفظ 'جُلُوساً' نائب عن المفعول المطلق کیوں ہے؟",
    "options": [
      {
        "en": "Because it is a synonym (مرادف) for the verb's own Masdar 'قُعُوداً'",
        "ur": "کیونکہ یہ فعل 'قَعَدَ' کے اپنے اصل مصدر 'قُعُوداً' کا ہم معنی و مترادف ہے"
      },
      {
        "en": "Because it is an instrument noun",
        "ur": "اسمِ آلہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is a number",
        "ur": "عدد ہونے کی وجہ سے"
      },
      {
        "en": "Because it is time noun",
        "ur": "اسمِ زمان ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, complete: 'قُمْتُ ... لِلْمُدَرِّسِ' (I stood out of respect for the teacher):",
    "ur": "تمرين 3 کے مطابق مفعول لأجله سے جملہ مکمل کریں: 'قُمْتُ ... لِلْمُدَرِّسِ':",
    "options": [
      {
        "en": "إِجْلاَلاً (Ijlālan - Mansoob inner Qalbiy Masdar)",
        "ur": "إِجْلاَلاً (تعظیم کی بنا پر منصوب قلبی مصدر)"
      },
      {
        "en": "إِجْلاَلٌ",
        "ur": "إِجْلاَلٌ"
      },
      {
        "en": "مُجْلِلٌ",
        "ur": "مُجْلِلٌ"
      },
      {
        "en": "جَلِيلٌ",
        "ur": "جَلِيلٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Complete: 'سَافَرْتُ إِلَى القَاهِرَةِ ... لِلْعِلْمِ' (I traveled to Cairo seeking knowledge):",
    "ur": "مفعول لأجله سے جملہ مکمل کریں: 'سَافَرْتُ إِلَى القَاهِرَةِ ... لِلْعِلْمِ':",
    "options": [
      {
        "en": "طَلَباً (Talaban - Mansoob Maf'ool Li-ajlihi)",
        "ur": "طَلَباً (طلبِ علم کی بنا پر منصوب مفعول لأجله)"
      },
      {
        "en": "طَالِبٌ",
        "ur": "طَالِبٌ"
      },
      {
        "en": "مَطْلُوبٌ",
        "ur": "مَطْلُوبٌ"
      },
      {
        "en": "بِطَلَبٍ",
        "ur": "بِطَلَبٍ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'اجْتَهَدْتُ خَوْفَ الفَشَلِ', how is 'خَوْفَ' parsed?",
    "ur": "جملے 'اجْتَهَدْتُ خَوْفَ الفَشَلِ' میں لفظ 'خَوْفَ' کا اعرابی منصب کیا ہے؟",
    "options": [
      {
        "en": "Maf'ool Li-ajlihi Mansoob with Fatha as Mudaf (مفعول لأجله منصوب وهو مضاف)",
        "ur": "مفعول لأجله منصوب (وہو مضاف)"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Why CANNOT physical action verbs like 'قِرَاءَةً' or 'كِتَابَةً' be parsed directly as Maf'ool Li-ajlihi in 'جِئْتُ قِرَاءَةً'?",
    "ur": "جملے 'جِئْتُ قِرَاءَةً' میں 'قِرَاءَةً' (پڑھنا) کو ڈائریکٹ مفعول لأجله (منصوب) کیوں نہیں بنایا جا سکتا؟",
    "options": [
      {
        "en": "Because physical organ actions (أفعال الجوارح) are NOT Qalbiy Masdars; they require a preposition (لِلْقِرَاءَةِ)",
        "ur": "کیونکہ ظاہری اعضاء کے افعال (أفعال الجوارح) قلبی مصدر نہیں ہوتے؛ انہیں حرفِ جر (لِـ) کی ضرورت ہوتی ہے"
      },
      {
        "en": "Because they are masculine",
        "ur": "مذکر ہونے کی وجہ سے"
      },
      {
        "en": "Because they are in the past tense",
        "ur": "ماضی ہونے کی وجہ سے"
      },
      {
        "en": "Because they are non-declinable",
        "ur": "مبنی ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, when Maf'ool Li-ajlihi is WITHOUT 'Al' and Idafah (مجرد من أل والإضافة, e.g., 'رَغْبَةً'), what is its preferred case?",
    "ur": "تمرين 4 کے مطابق جب مفعول لأجله أل اور اضافت سے خالی ہو (مثلاً 'رَغْبَةً') تو اس کی ترجیحی حالت کیا ہوتی ہے؟",
    "options": [
      {
        "en": "Preferred to be Mansoob (النصب غالباً)",
        "ur": "غالباً منصوب پڑھنا (النصب غالباً)"
      },
      {
        "en": "Preferred to be Majroor with Li-",
        "ur": "غالباً مجرور پڑھنا"
      },
      {
        "en": "Must be Marfoo'",
        "ur": "لازماً مرفوع پڑھنا"
      },
      {
        "en": "Must be Majzoom",
        "ur": "لازماً مجزوم پڑھنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "When Maf'ool Li-ajlihi is DEFINED BY 'AL' (المحلّى بـ 'أل', e.g., 'الخَوْفُ'), what is its preferred case?",
    "ur": "جب مفعول لأجله پر 'أل' داخل ہو (مثلاً 'الخَوْفُ') تو اس کی ترجیحی اعرابی حالت کیا ہوتی ہے؟",
    "options": [
      {
        "en": "Preferred to be Majroor with preposition Laam (الجر باللام غالباً, e.g., لِلْخَوْفِ)",
        "ur": "غالباً حرفِ جر لام کے ساتھ مجرور ہونا (الجر باللام غالباً، جیسے: لِلْخَوْفِ)"
      },
      {
        "en": "Preferred to be Mansoob",
        "ur": "غالباً منصوب ہونا"
      },
      {
        "en": "Must be Marfoo'",
        "ur": "لازماً مرفوع ہونا"
      },
      {
        "en": "Must be Mudaf Ilayh",
        "ur": "لازماً مضاف الیہ ہونا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "When Maf'ool Li-ajlihi is MUDAF (المضاف, e.g., 'خَوْفَ الفَشَلِ' or 'لِخَوْفِ الفَشَلِ'), what is the ruling?",
    "ur": "جب مفعول لأجله مضاف بن کر آئے (مثلاً 'خَوْفَ الفَشَلِ' / 'لِخَوْفِ الفَشَلِ') تو اس کا کیا حکم ہے؟",
    "options": [
      {
        "en": "Both Nasb and Jar with Laam are equally permissible (جواز الأمرين: النصب والجر على السواء)",
        "ur": "نصب اور لام کے ساتھ جر دونوں حالتیں برابر سے جائز ہیں"
      },
      {
        "en": "Only Nasb is allowed",
        "ur": "صرف نصب جائز ہے"
      },
      {
        "en": "Only Jar is allowed",
        "ur": "صرف جر جائز ہے"
      },
      {
        "en": "It becomes Mabni on Sukoon",
        "ur": "سکون پر مبنی ہو جاتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَكَلَّمَ اللَّهُ مُوسَى تَكْلِيماً' (Qur'an 4:164), what is 'تَكْلِيماً'?",
    "ur": "قرآنی آیہ 'وَكَلَّمَ اللَّهُ مُوسَى تَكْلِيماً' میں 'تَكْلِيماً' کا اعرابی منصب کیا ہے؟",
    "options": [
      {
        "en": "Maf'ool Mutlaq Mansoob confirming its verb (مفعول مطلق مؤكد لفعله منصوب)",
        "ur": "فعل کی تاکید کرنے والا مفعول مطلق منصوب"
      },
      {
        "en": "Maf'ool Li-ajlihi",
        "ur": "مفعول لأجله"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِمْ مِنَ الصَّوَاعِقِ حَذَرَ الـمَوْتِ' (Qur'an 2:19), how is 'حَذَرَ' parsed?",
    "ur": "قرآنی آیہ 'حَذَرَ الـمَوْتِ' میں لفظ 'حَذَرَ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Maf'ool Li-ajlihi Mansoob as Mudaf (مفعول لأجله منصوب وهو مضاف)",
        "ur": "مفعول لأجله منصوب (وہو مضاف)"
      },
      {
        "en": "Maf'ool Mutlaq",
        "ur": "مفعول مطلق"
      },
      {
        "en": "Maf'ool Fihi",
        "ur": "مفعول فيه"
      },
      {
        "en": "Tamyeez Mansoob",
        "ur": "تمیز منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَلاَ تَقْتُلُوا أَوْلاَدَكُمْ خَشْيَةَ إِمْلاَقٍ' (Qur'an 17:31), what is 'خَشْيَةَ'?",
    "ur": "آیت مبارکہ 'وَلاَ تَقْتُلُوا أَوْلاَدَكُمْ خَشْيَةَ إِمْلاَقٍ' میں 'خَشْيَةَ' کا کیا اعرابی موقع ہے؟",
    "options": [
      {
        "en": "Maf'ool Li-ajlihi Mansoob as Mudaf showing reason for prohibition",
        "ur": "ممانعت کا سبب بتانے والا مفعول لأجله منصوب (وہو مضاف)"
      },
      {
        "en": "Maf'ool Mutlaq",
        "ur": "مفعول مطلق"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'قُمْتُ إِجْلاَلاً لِلْمُدَرِّسِ':",
    "ur": "پورے جملے 'قُمْتُ إِجْلاَلاً لِلْمُدَرِّسِ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "قُمْتُ: فعل ماضٍ والتاء فاعل، إِجْلاَلاً: مفعول لأجله منصوب بالفتحة، لِلْمُدَرِّسِ: جار ومجرور متعلق بإجلاَلاً",
        "ur": "قُمْتُ: فعل ماضی مع تاء فاعل، إِجْلاَلاً: مفعول لأجله منصوب بالفتحة، لِلْمُدَرِّسِ: جار و مجرور متعلق بإجلالاً"
      },
      {
        "en": "قمت: مبتدأ، إجلالا: خبر، للمدرس: مفعول به",
        "ur": "قمت مبتدأ، إجلالاً خبر، للمدرس مفعول بہ"
      },
      {
        "en": "قمت: فعل، إجلالا: مفعول مطلق، للمدرس: تمييز",
        "ur": "قمت فعل، إجلالاً مفعول مطلق، للمدرس تمیز"
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
    "en": "Which statement accurately distinguishes 'Maf'ool Mutlaq' from 'Maf'ool Li-ajlihi'?",
    "ur": "'مفعول مطلق' اور 'مفعول لأجله' کے بنیادی باہمی فرق کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Maf'ool Mutlaq is derived from the SAME verb to confirm or describe its type/count; while Maf'ool Li-ajlihi is an inner Qalbiy Masdar showing the REASON/CAUSE for the verb's occurrence",
        "ur": "مفعول مطلق خود اسی فعل سے مشتق مصدر ہوتا ہے جو تاکید یا نوعیت/تعداد بتائے؛ جبکہ مفعول لأجله ایک باطنی قلبی مصدر ہوتا ہے جو فعل کے سرزد ہونے کی وجہ بتائے"
      },
      {
        "en": "Both are identical in all rules and definitions",
        "ur": "تمام قواعد و تعریفات میں دونوں بالکل ایک جیسے ہیں"
      },
      {
        "en": "Maf'ool Mutlaq is always Majroor and Maf'ool Li-ajlihi is Marfoo'",
        "ur": "مفعول مطلق ہمیشہ مجرور اور مفعول لأجله مرفوع ہوتا ہے"
      },
      {
        "en": "Maf'ool Li-ajlihi comes before the verb only",
        "ur": "مفعول لأجله صرف فعل سے پہلے آتا ہے"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 14 Quiz ---');
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

    // 3. Find or Create Lecture 14 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 14 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 14 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 14', 14)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 14: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 14 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 14))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 14.`);
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

    // 5. Create the quiz for Book 3 Lesson 14
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 14 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 14 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
