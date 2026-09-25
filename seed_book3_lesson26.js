import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is the primary derived verb pattern of Form XII (باب افْعَوْعَلَ) in Arabic?",
    "ur": "عربی زبان میں فارم XII (بابِ افْعَوْعَلَ) کا ماضی، مضارع، اور مصدر کا بنیادی وزن کیا ہے؟",
    "options": [
      {
        "en": "افْعَوْعَلَ - يَفْعَوْعِلُ - افْعِيعَالاً",
        "ur": "افْعَوْعَلَ - يَفْعَوْعِلُ - افْعِيعَالاً"
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
    "en": "What semantic meaning does Form XII (باب افْعَوْعَلَ, e.g., اعْشَوْشَبَتِ الأَرْضُ) convey?",
    "ur": "بابِ افْعَوْعَلَ (مثلاً اعْشَوْشَبَتِ الأَرْضُ) کا بنیادی معنوی فائدہ کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Extreme hyperbole and intensity in describing a physical state or quality (المُبَالَغَةُ الشَّدِيدَةُ)",
        "ur": "کسی صفت یا حالت کو بیان کرنے میں شدید مبالغہ اور کثرت (المبالغة الشديدة)"
      },
      {
        "en": "Seeking forgiveness",
        "ur": "استغفار و معافی مانگنا"
      },
      {
        "en": "Reciprocal participation",
        "ur": "دو فریقوں میں باہمی شرکت"
      },
      {
        "en": "Diminution of size",
        "ur": "سائز چھوٹا کرنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Al-Ism Al-Manqoos' (الاسْمُ الـمَنْقُوصُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'اسمِ منقوص' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A declinable noun ending in an original essential Yā' preceded by Kasra (اسم معرب آخره ياء لازمة مكسور ما قبلها, e.g., القَاضِي)",
        "ur": "وہ معرب اسم جس کے آخر میں یاءِ لازمی ہو اور اس سے پہلے والے حرف پر کسرہ ہو (جیسے: القَاضِي)"
      },
      {
        "en": "A noun ending in Alif Maqsoorah",
        "ur": "الفِ مقصورہ پر ختم ہونے والا اسم"
      },
      {
        "en": "A noun ending in Hamzah preceded by Alif",
        "ur": "الف کے بعد ہمزہ پر ختم ہونے والا اسم"
      },
      {
        "en": "A noun ending in Waw",
        "ur": "واؤ پر ختم ہونے والا اسم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is 'Al-Ism Al-Manqoos' declined in Raf', Nasb, and Jarr when DEFINITE (معرفة بالـ, e.g., القَاضِي)?",
    "ur": "معرفہ ہونے کی حالت میں اسمِ منقوص (مثلاً القَاضِي) کا تینوں حالتوں میں اعراب کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Estimated Damma in Raf' (مقدرة), explicit Fatha in Nasb (ظاهرة), and estimated Kasra in Jarr (مقدرة)",
        "ur": "حالتِ رفع میں ضمہ مقدرہ، حالتِ نصب میں فتحہ ظاہرہ (القَاضِيَ)، اور حالتِ جر میں کسرہ مقدرہ"
      },
      {
        "en": "Explicit vowels in all three cases",
        "ur": "تینوں حالتوں میں اعرابِ ظاہر"
      },
      {
        "en": "Estimated vowels in all three cases",
        "ur": "تینوں حالتوں میں اعرابِ مقدر"
      },
      {
        "en": "Declined with Sukoon in all cases",
        "ur": "تمام حالتوں میں سکون"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What happens to the final Yā' of 'Al-Ism Al-Manqoos' when INDEFINITE (نكرة) in Raf' and Jarr (e.g., قَاضٍ)?",
    "ur": "نکرہ ہونے کی حالت میں مرفوع اور مجرور اسمِ منقوص (مثلاً قَاضٍ) کی آخر یاء کا کیا بنتا ہے؟",
    "options": [
      {
        "en": "The Yā' is omitted and replaced with Tanween al-I'wad (تُنْوِينُ العِوَض) on the preceding letter (e.g., قَاضٍ)",
        "ur": "یاء حذف ہو جاتی ہے اور اس کے عوض پہلے حرف پر تنوینِ عوض لائی جاتی ہے (جیسے: قَاضٍ)"
      },
      {
        "en": "The Yā' remains with Damma",
        "ur": "یاء ضمہ کے ساتھ باقی رہتی ہے"
      },
      {
        "en": "The Yā' changes into Alif",
        "ur": "یاء الف میں بدل جاتی ہے"
      },
      {
        "en": "The word becomes un-declinable",
        "ur": "اسم مبنی بن جاتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Al-Ism Al-Maqsoor' (الاسْمُ الـمَقْصُورُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'اسمِ مقصور' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A declinable noun ending in an essential Alif (اسم معرب آخره ألف لازمة, e.g., الفَتَى، الـمُسْتَشْفَى)",
        "ur": "وہ معرب اسم جس کے آخر میں الفِ لازمی ہو (جیسے: الفَتَى، الـمُسْتَشْفَى)"
      },
      {
        "en": "A noun ending in Yā'",
        "ur": "یاء پر ختم ہونے والا اسم"
      },
      {
        "en": "A noun ending in Hamzah",
        "ur": "ہمزہ پر ختم ہونے والا اسم"
      },
      {
        "en": "A noun ending in Tā' Marbooṭah",
        "ur": "تاء مربوطہ پر ختم ہونے والا اسم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is 'Al-Ism Al-Maqsoor' declined in all three grammatical cases (Raf', Nasb, Jarr, e.g., الفَتَى)?",
    "ur": "اسمِ مقصور (مثلاً الفَتَى) کا تینوں حالتوں (رفع، نصب، جر) میں اعراب کیا ہوتا ہے؟",
    "options": [
      {
        "en": "All vowel signs are ESTIMATED on the Alif due to impossibility of vocalization (مُقَدَّرَةٌ عَلَى الأَلِفِ لِلتَّعَذُّرِ)",
        "ur": "تعذر (تلفظ کی ناممکنات) کی بنا پر الف پر تمام اعرابی حرکات **مقدرہ** ہوتی ہیں"
      },
      {
        "en": "Explicit vowel signs in all cases",
        "ur": "تمام حالتوں میں ظاہر حرکات"
      },
      {
        "en": "Explicit Fatha in Nasb and estimated in Raf'/Jarr",
        "ur": "صرف حالتِ نصب میں ظاہر"
      },
      {
        "en": "Declined as Diptote only",
        "ur": "صرف غیر منصرف کا قاعدہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Al-Ism Al-Mamdood' (الاسْمُ الـمَمْدُودُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'اسمِ ممدود' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A declinable noun ending in a Hamzah preceded by an extra Alif (اسم معرب آخره همزة قبلها ألف زائدة, e.g., سَمَاء، حَمْرَاء)",
        "ur": "وہ معرب اسم جس کے آخر میں الفِ زائدہ کے بعد ہمزہ ہو (جیسے: سَمَاء، حَمْرَاء)"
      },
      {
        "en": "A noun ending in Alif Maqsoorah",
        "ur": "الفِ مقصورہ والا اسم"
      },
      {
        "en": "A noun ending in Yā'",
        "ur": "یاء والا اسم"
      },
      {
        "en": "A noun with doubled final radical",
        "ur": "مضاعف اسم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the three origin types of Hamzah in Al-Ism Al-Mamdood?",
    "ur": "اسمِ ممدود کی ہمزہ کی اصل کے اعتبار سے بنیادی تین اقسام کون سی ہیں؟",
    "options": [
      {
        "en": "1. Original (أَصْلِيَّة e.g., إِﻧْﺸَﺎء), 2. Converted from Waw/Yā' (مُنْقَلِبَة e.g., سَمَاء/بِنَاء), 3. Feminine marker (لِلتَّأْنِيثِ e.g., حَمْرَاء)",
        "ur": "1. اصلیہ (إِنْشَاء)، 2. منقلبہ عن واو/یاء (سَمَاء/بِنَاء)، 3. للتأنیث (حَمْرَاء)"
      },
      {
        "en": "1. Past, 2. Present, 3. Future",
        "ur": "1. ماضی، 2. مضارع، 3. مستقبل"
      },
      {
        "en": "1. Marfoo', 2. Mansoob, 3. Majroor",
        "ur": "1. مرفوع، 2. منصوب، 3. مجرور"
      },
      {
        "en": "1. Singular, 2. Dual, 3. Plural",
        "ur": "1. مفرد، 2. تثنیہ، 3. جمع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are 'Ni'ma' (نِعْمَ) and 'Bi'sa' (بِئْسَ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'نِعْمَ' اور 'بِئْسَ' کس مقصد کے لیے استعمال ہونے والے افعال ہیں؟",
    "options": [
      {
        "en": "Rigid past verbs used for Praise (نِعْمَ لِلْمَدْحِ) and Blame/Condemnation (بِئْسَ لِلذَّمِّ)",
        "ur": "جامد افعالِ ماضی: 'نِعْمَ' مدح و تعریف کے لیے اور 'بِئْسَ' ذم و برائی کے لیے"
      },
      {
        "en": "Prohibition particles",
        "ur": "نہی کے حروف"
      },
      {
        "en": "Prepositions",
        "ur": "حروفِ جر"
      },
      {
        "en": "Condition particles causing Jazm",
        "ur": "شرط کے حروف"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, what is the Masdar of Form XII verb 'اعْشَوْشَبَ' (to become densely green)?",
    "ur": "تمرين 1 کے مطابق فارم XII فعل 'اعْشَوْشَبَ' کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "اعْشِيشَابٌ (I'shīshābun)",
        "ur": "اعْشِيشَابٌ"
      },
      {
        "en": "اعْشَوْشَبَةٌ",
        "ur": "اعْشَوْشَبَةٌ"
      },
      {
        "en": "تَعْشِيبٌ",
        "ur": "تَعْشِيبٌ"
      },
      {
        "en": "مُعْشَوْشِبٌ",
        "ur": "مُعْشَوْشِبٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'حَضَرَ قَاضٍ عَادِلٌ', how is 'قَاضٍ' parsed?",
    "ur": "جملے 'حَضَرَ قَاضٍ عَادِلٌ' میں لفظ 'قَاضٍ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Fa'il Marfoo' with estimated Damma on the deleted Yā' (فاعل مرفوع بالضمة المقدرة على الياء المحذوفة)",
        "ur": "حذف شدہ یاء پر ضمہ مقدرہ کے ساتھ فاعلِ مرفوع"
      },
      {
        "en": "Majroor with explicit Kasra",
        "ur": "کسرہ ظاہرہ کے ساتھ مجرور"
      },
      {
        "en": "Mansoob with Fatha",
        "ur": "فتحہ کے ساتھ منصوب"
      },
      {
        "en": "Mubtada' Marfoo'",
        "ur": "مبتدأ مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'رَأَيْتُ القَاضِيَ فِي الـمَحْكَمَةِ', why is 'القَاضِيَ' explicit with Fatha?",
    "ur": "جملے 'رَأَيْتُ القَاضِيَ فِي الـمَحْكَمَةِ' میں 'القَاضِيَ' پر فتحہ کیوں ظاہر ہے؟",
    "options": [
      {
        "en": "Because Al-Ism Al-Manqoos takes explicit Fatha in Nasb as Direct Object (مفعول به منصوب بالفتحة الظاهرة)",
        "ur": "کیونکہ اسمِ منقوص حالتِ نصب میں مفعول بہ بن کر فتحہ ظاہرہ قبول کرتا ہے"
      },
      {
        "en": "Because it is Fa'il",
        "ur": "فاعل ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Khabar",
        "ur": "خبر ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Diptote",
        "ur": "غیر منصرف ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'جَاءَ الفَتَى', how is 'الفَتَى' parsed?",
    "ur": "جملے 'جَاءَ الفَتَى' میں اسمِ مقصور 'الفَتَى' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Fa'il Marfoo' with estimated Damma on Alif due to impossibility (فاعل مرفوع بالضمة المقدرة على الألف للتّعذُّر)",
        "ur": "تعذر کی بنا پر الف پر ضمہ مقدرہ کے ساتھ فاعلِ مرفوع"
      },
      {
        "en": "Fa'il Marfoo' with explicit Damma",
        "ur": "ضمہ ظاہرہ کے ساتھ فاعل"
      },
      {
        "en": "Maf'ool Bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Badal",
        "ur": "بدل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, identify the origin of Hamzah in 'صَحْرَاءُ' (desert):",
    "ur": "تمرين 2 کے مطابق اسم 'صَحْرَاءُ' میں ہمزہ کی کیا قسم ہے؟",
    "options": [
      {
        "en": "Hamzah for Feminine marker (هَمْزَةٌ لِلتَّأْنِيثِ, causing it to be Diptote / ممنوع من الصرف)",
        "ur": "ہمزہ للتأنیث (جس کی بنا پر یہ غير منصرف ہوتا ہے)"
      },
      {
        "en": "Original Hamzah",
        "ur": "ہمزہ اصلیہ"
      },
      {
        "en": "Converted from Waw",
        "ur": "ہمزہ منقلبہ عن واو"
      },
      {
        "en": "Converted from Yā'",
        "ur": "ہمزہ منقلبہ عن یاء"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Identify the origin of Hamzah in 'إِنْشَاءٌ' (creation/construction, from root ن-ش-أ):",
    "ur": "اسم 'إِنْشَاءٌ' (مادہ ن-ش-أ) میں ہمزہ کی کیا قسم ہے؟",
    "options": [
      {
        "en": "Original Hamzah (هَمْزَةٌ أَصْلِيَّةٌ, accepting Tanween)",
        "ur": "ہمزہ اصلیہ (جو تنوین قبول کرتی ہے)"
      },
      {
        "en": "Feminine Hamzah",
        "ur": "ہمزہ للتأنیث"
      },
      {
        "en": "Converted from Waw",
        "ur": "منقلبہ عن واو"
      },
      {
        "en": "Converted from Yā'",
        "ur": "منقلبہ عن یاء"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Identify the origin of Hamzah in 'سَمَاءٌ' (sky, from root س-م-و) and 'بِنَاءٌ' (building, from root ب-ن-ي):",
    "ur": "اسماء 'سَمَاءٌ' (س-م-و) اور 'بِنَاءٌ' (ب-ن-ي) میں ہمزہ کی کیا اصل ہے؟",
    "options": [
      {
        "en": "Converted from Waw (سَمَاء) and Yā' (بِنَاء) (هَمْزَةٌ مُنْقَلِبَةٌ عَنْ وَاوٍ أَوْ يِاءٍ)",
        "ur": "واؤ (سماء) اور یاء (بناء) سے منقلبہ ہمزہ"
      },
      {
        "en": "Original Hamzah",
        "ur": "ہمزہ اصلیہ"
      },
      {
        "en": "Feminine Hamzah",
        "ur": "ہمزہ للتأنیث"
      },
      {
        "en": "Plural Hamzah",
        "ur": "ہمزہ برائے جمع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, in 'نِعْمَ الرَّجُلُ زَيْدٌ', how is 'زَيْدٌ' (المخصوص بالمدح) parsed?",
    "ur": "تمرين 3 کے مطابق 'نِعْمَ الرَّجُلُ زَيْدٌ' میں 'زَيْدٌ' (مخصوص بالمدح) کا کیا اعرابی موقع ہے؟",
    "options": [
      {
        "en": "Mubtada' Mu'akhar Marfoo' with Damma (or Khabar for an omitted Mubtada')",
        "ur": "مبتدأ مؤخر مرفوع بالضمة (یا خبر لمبتدأ محذوف)"
      },
      {
        "en": "Fa'il of 'نِعْمَ'",
        "ur": "نِعْمَ کا فاعل"
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
    "part": "Exercise 3",
    "en": "In 'حَبَّذَا الصِّدْقُ!' (How excellent is truthfulness!), what is the Fa'il of the praise verb?",
    "ur": "جملے 'حَبَّذَا الصِّدْقُ!' میں مدح کے فعل کا فاعل کیا ہے؟",
    "options": [
      {
        "en": "The demonstrative pronoun 'ذَا' attached to 'حَبَّ' (اسم إشارة مبني في محل رفع فاعل)",
        "ur": "'حَبَّ' کے ساتھ ملا ہوا اسمِ اشارہ **'ذَا'** بطورِ فاعل"
      },
      {
        "en": "The word 'الصِّدْقُ'",
        "ur": "لفظ الصدق"
      },
      {
        "en": "An omitted pronoun",
        "ur": "ضمیر مستتر"
      },
      {
        "en": "No Fa'il exists",
        "ur": "کوئی فاعل نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'لاَ حَبَّذَا الكَسَلُ!' (How evil is laziness!), how is 'الكَسَلُ' parsed?",
    "ur": "جملے 'لاَ حَبَّذَا الكَسَلُ!' میں لفظ 'الكَسَلُ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Mubtada' Mu'akhar Marfoo' with Damma (المخصوص بالذّم)",
        "ur": "مخصوص بالذم بننے کی بنا پر مبتدأ مؤخر مرفوع بالضمة"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Na't Marfoo'",
        "ur": "نعت مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "How is the defective present verb 'يَدْعُو' (ending in Waw) declined in Raf', Nasb, and Jazm?",
    "ur": "واؤ پر ختم ہونے والے ناقص فعلِ مضارع 'يَدْعُو' کا رفع، نصب اور جزم میں کیا اعراب ہوتا ہے؟",
    "options": [
      {
        "en": "Raf': estimated Damma (مقدرة), Nasb: explicit Fatha (يَدْعُوَ ظاهرة), Jazm: deletion of Waw (لَمْ يَدْعُ)",
        "ur": "رفع: ضمہ مقدرہ، نصب: فتحہ ظاہرہ (يَدْعُوَ)، جزم: حذفِ واؤ (لَمْ يَدْعُ)"
      },
      {
        "en": "Explicit vowels in all cases",
        "ur": "تمام حالتوں میں ظاہر"
      },
      {
        "en": "Estimated vowels in all cases",
        "ur": "تمام حالتوں میں مقدر"
      },
      {
        "en": "Deletion of Noon in all cases",
        "ur": "تمام حالتوں میں حذف نون"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "How is the defective present verb 'يَرْمِي' (ending in Yā') declined in Raf', Nasb, and Jazm?",
    "ur": "یاء پر ختم ہونے والے ناقص فعلِ مضارع 'يَرْمِي' کا رفع، نصب اور جزم میں کیا اعراب ہوتا ہے؟",
    "options": [
      {
        "en": "Raf': estimated Damma (مقدرة), Nasb: explicit Fatha (يَرْمِيَ ظاهرة), Jazm: deletion of Yā' (لَمْ يَرْمِ)",
        "ur": "رفع: ضمہ مقدرہ، نصب: فتحہ ظاہرہ (يَرْمِيَ)، جزم: حذفِ یاء (لَمْ يَرْمِ)"
      },
      {
        "en": "Explicit Damma in Raf'",
        "ur": "رفع میں ضمہ ظاہرہ"
      },
      {
        "en": "Estimated Fatha in Nasb",
        "ur": "نصب میں فتحہ مقدرہ"
      },
      {
        "en": "Sukoon in Jazm",
        "ur": "جزم میں سکون"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "How is the defective present verb 'يَخْشَى' (ending in Alif) declined in Raf', Nasb, and Jazm?",
    "ur": "الف پر ختم ہونے والے ناقص فعلِ مضارع 'يَخْشَى' کا رفع، نصب اور جزم میں کیا اعراب ہوتا ہے؟",
    "options": [
      {
        "en": "Raf': estimated Damma, Nasb: estimated Fatha (مقدرة للتّعذر), Jazm: deletion of Alif (لَمْ يَخْشَ)",
        "ur": "رفع: ضمہ مقدرہ، نصب: فتحہ مقدرہ (للتعذر)، جزم: حذفِ الف (لَمْ يَخْشَ)"
      },
      {
        "en": "Explicit Fatha in Nasb",
        "ur": "نصب میں فتحہ ظاہرہ"
      },
      {
        "en": "Explicit Damma in Raf'",
        "ur": "رفع میں ضمہ ظاہرہ"
      },
      {
        "en": "Sukoon in Jazm",
        "ur": "جزم میں سکون"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'لَمْ يَدْعُ زَيْدٌ إِلاَّ الحَقَّ', why does 'يَدْعُ' end with Damma?",
    "ur": "جملے 'لَمْ يَدْعُ زَيْدٌ إِلاَّ الحَقَّ' میں 'يَدْعُ' کے عین پر ضمہ کیوں ہے؟",
    "options": [
      {
        "en": "Because it is Majzoom with deletion of final Waw (مجزوم بلم وعلامة جزمه حذف حرف العلة الواو), leaving Damma as sign of omitted Waw",
        "ur": "حرفِ جزم 'لَمْ' کی وجہ سے حذفِ واؤ پر مجزوم ہے اور ضمہ حذف شدہ واؤ کی علامت ہے"
      },
      {
        "en": "Because it is Marfoo' with Damma",
        "ur": "ضمہ کے ساتھ مرفوع"
      },
      {
        "en": "Because it is Mabni on Damma",
        "ur": "ضمہ پر مبنی"
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
    "en": "In the Quranic verse 'نِعْمَ العَبْدُ إِنَّهُ أَوَّابٌ' (Qur'an 38:30), how is 'العَبْدُ' parsed?",
    "ur": "قرآنی آیہ 'نِعْمَ العَبْدُ إِنَّهُ أَوَّابٌ' میں لفظ 'العَبْدُ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Fa'il of praise verb 'نِعْمَ' Marfoo' with Damma (فاعل نعم مرفوع بالضمة)",
        "ur": "فعلِ مدح 'نِعْمَ' کا فاعل مرفوع بالضمة"
      },
      {
        "en": "Mubtada' Mu'akhar",
        "ur": "مبتدأ مؤخر"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Ism Inna",
        "ur": "اسم انّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "In the Quranic verse 'بِئْسَ الاِسْمُ الفُسُوقُ بَعْدَ الإِيمَانِ' (Qur'an 49:11), what is 'الفُسُوقُ'?",
    "ur": "آیت مبارکہ 'بِئْسَ الاِسْمُ الفُسُوقُ بَعْدَ الإِيمَانِ' میں لفظ 'الفُسُوقُ' کا کیا اعرابی منصب ہے؟",
    "options": [
      {
        "en": "Al-Makhsoos bi-DhAmm parsed as Mubtada' Mu'akhar Marfoo' with Damma (المخصوص بالذم مبتدأ مؤخر)",
        "ur": "مخصوص بالذم ہو کر مبتدأ مؤخر مرفوع بالضمة"
      },
      {
        "en": "Fa'il of Bi'sa",
        "ur": "بِئْسَ کا فاعل"
      },
      {
        "en": "Na't",
        "ur": "نعت"
      },
      {
        "en": "Badal",
        "ur": "بدل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'اعْشَوْشَبَتِ الأَرْضُ اعْشِيشَاباً':",
    "ur": "پورے جملے 'اعْشَوْشَبَتِ الأَرْضُ اعْشِيشَاباً' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "اعْشَوْشَبَتِ: فعل ماضٍ من باب افعوعلَ والتاء للتأنيث، الأَرْضُ: فاعل مرفوع بالضمة، اعْشِيشَاباً: مفعول مطلق منصوب بالفتحة",
        "ur": "اعْشَوْشَبَتِ: فعلِ ماضی (باب افعوعل) مع تاء تانیث، الأَرْضُ: فاعل مرفوع بالضمة، اعْشِيشَاباً: مفعول مطلق منصوب بالفتحة"
      },
      {
        "en": "اعشوشبت: مبتدأ، الأرض: خبر، اعشيشاباً: مفعول به",
        "ur": "اعشوشبت مبتدأ، الأرض خبر، اعشیشاباً مفعول بہ"
      },
      {
        "en": "اعشوشبت: حرف، الأرض: اسم مجرور، اعشيشاباً: حال",
        "ur": "اعشوشبت حرف، الأرض اسم مجرور، اعشیشاباً حال"
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
    "en": "Which statement accurately summarizes the core grammar rules taught in Lesson 26?",
    "ur": "سبق 26 کے بنیادی گرامر موضوعات کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers Form XII (افْعَوْعَلَ), Al-Ism Al-Manqoos, Al-Ism Al-Maqsoor, Al-Ism Al-Mamdood, styles of praise/blame (نِعْمَ/بِئْسَ/حَبَّذَا), and declension of defective present verbs",
        "ur": "اس سبق میں بابِ افعوعل، اسمِ منقوص، اسمِ مقصور، اسمِ ممدود، اسلوبِ مدح و ذم (نِعْمَ/بِئْسَ/حَبَّذَا)، اور معتل المضارع کے اعراب کا کامل احاطہ کیا گیا ہے"
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
  console.log('🚀 Seeding Book 3 Lesson 26 Quiz...');
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

    // 3. Find or Create Lecture for Lesson 26
    let lectureId;
    const existingLec = await sql`
      SELECT id, title, order_index FROM lectures
      WHERE section_id = ${sectionId} AND order_index = 26
      LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 26 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 26', 26)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 26: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 26 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 26))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 26.`);
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

    // 5. Create the quiz for Book 3 Lesson 26
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 26 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 26 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
