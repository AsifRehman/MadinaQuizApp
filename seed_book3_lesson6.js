import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL || process.env.DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What are 'Ism az-Zaman' and 'Ism al-Makan' in Arabic grammar?",
    "ur": "عربی گرامر میں 'اسم الزمان' اور 'اسم المكان' کی تعریف کیا ہے؟",
    "options": [
      {
        "en": "Nouns derived from Form I verbs to indicate the time or place of an action",
        "ur": "وہ اسماء جو فعلِ ثلاثی مجرور سے کام کا وقت یا جگہ ظاہر کرنے کے لیے بنائے جاتے ہیں"
      },
      {
        "en": "Nouns that indicate the instrument used in an action",
        "ur": "وہ اسماء جو کام کا آلہ یا اوزار ظاہر کرتے ہیں"
      },
      {
        "en": "Nouns that indicate the doer of the action",
        "ur": "وہ اسماء جو کام کرنے والے کو ظاہر کرتے ہیں"
      },
      {
        "en": "Nouns used only for proper names of cities",
        "ur": "وہ اسماء جو صرف شہروں کے علم ہوتے ہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "On which weight is Ism al-Makan derived when the verb is Naqis (الفعل الناقص, e.g., جَرَى)?",
    "ur": "فعلِ ناقص (مثلاً جَرَى) سے اسمِ مکان کس وزن پر آتا ہے؟",
    "options": [
      {
        "en": "مَفْعَلٌ (Maf'al, e.g., مَجْرَى)",
        "ur": "مَفْعَلٌ (جیسے مَجْرَى)"
      },
      {
        "en": "مَفْعِلٌ (Maf'il)",
        "ur": "مَفْعِلٌ"
      },
      {
        "en": "مِفْعَلٌ (Mif'al)",
        "ur": "مِفْعَلٌ"
      },
      {
        "en": "مُفَعَّلٌ (Mufa''al)",
        "ur": "مُفَعَّلٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When does a Form I sound verb take the weight 'مَفْعَلٌ' (Maf'al) for Ism az-Zaman or Ism al-Makan?",
    "ur": "فعل ثلاثی مجرد سالم سے اسمِ زمان/مکان کس صورت میں 'مَفْعَلٌ' کے وزن پر آتا ہے؟",
    "options": [
      {
        "en": "When the Ayn of present verb has Fatha or Damma (مفتوح العين أو مضمومها)",
        "ur": "جب مضارع میں عین کلمہ پر فتحہ یا ضمہ ہو (جیسے يَلْعَبُ -> مَلْعَبٌ)"
      },
      {
        "en": "When the present verb has Kasra on Ayn",
        "ur": "جب مضارع میں عین کلمہ پر کسرہ ہو"
      },
      {
        "en": "When the verb is Mithal Wawi",
        "ur": "جب فعل مثالِ واوی ہو"
      },
      {
        "en": "Only when it is passive",
        "ur": "صرف جب وہ مجہول ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When does a Form I verb take the weight 'مَفْعِلٌ' (Maf'il with Kasra on Ayn) for Ism al-Makan?",
    "ur": "فعل ثلاثی مجرد سے اسمِ مکان کس صورت میں 'مَفْعِلٌ' (عین کے کسرہ) کے وزن پر آتا ہے؟",
    "options": [
      {
        "en": "When the verb is Mithal (e.g., وَقَفَ -> مَوْقِفٌ) or sound with Kasra in present (e.g., جَلَسَ يَجْلِسُ -> مَجْلِسٌ)",
        "ur": "جب فعل مثالِ واوی ہو (جیسے مَوْقِفٌ) یا مضارع میں عین مکسور ہو (جیسے مَجْلِسٌ)"
      },
      {
        "en": "When the verb is Naqis",
        "ur": "جب فعل ناقص ہو"
      },
      {
        "en": "When the verb is Ajwaf Wawi",
        "ur": "جب فعل اجوف واوی ہو"
      },
      {
        "en": "When the present verb has Damma on Ayn",
        "ur": "جب مضارع کے عین پر ضمہ ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Why are words like 'مَشْرِقٌ', 'مَغْرِبٌ', and 'مَسْجِدٌ' pronounced on the weight of 'مَفْعِلٌ'?",
    "ur": "الفاظ 'مَشْرِقٌ'، 'مَغْرِبٌ' اور 'مَسْجِدٌ' مضارع میں ضمہ ہونے کے باوجود 'مَفْعِلٌ' کے وزن پر کیوں آتے ہیں؟",
    "options": [
      {
        "en": "These are irregular forms heard from Arabs with Kasra (سمعي)",
        "ur": "یہ اہل زبان سے مسموع اور شاذ گرامر پیٹرن ہیں"
      },
      {
        "en": "Because they are Ism al-Aala",
        "ur": "کیونکہ یہ اسمِ آلہ ہیں"
      },
      {
        "en": "Because they are derived from Form IV verbs",
        "ur": "کیونکہ یہ فارم IV سے مشتق ہیں"
      },
      {
        "en": "Because they end with Tā' Marbootah",
        "ur": "کیونکہ ان کے آخر میں تاء مربوطہ ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Ism al-Aala' (اسم الآلة) in Arabic grammar?",
    "ur": "عربی گرامر میں 'اسم الآلة' کی تعریف کیا ہے؟",
    "options": [
      {
        "en": "A derived noun indicating the tool or instrument used to perform the verb",
        "ur": "وہ مشتق اسم جو فعل کے انجام دہی کے آلے یا اوزار کو ظاہر کرے"
      },
      {
        "en": "A noun showing the place of event",
        "ur": "واقعہ کی جگہ بتانے والا اسم"
      },
      {
        "en": "A noun showing the doer of the verb",
        "ur": "کام کرنے والے کو بتانے والا اسم"
      },
      {
        "en": "A verbal noun expressing abstract action",
        "ur": "مصدر جو محض عمل کا افادہ کرے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the three primary standard weights (اوزان) of Ism al-Aala from Form I trilateral verbs?",
    "ur": "ثلاثی مجرد سے اسمِ آلہ کے تین بنیادی اوزان کون سے ہیں؟",
    "options": [
      {
        "en": "مِفْعَلٌ، مِفْعَالٌ، مِفْعَلَةٌ (Mif'al, Mif'āl, Mif'alah)",
        "ur": "مِفْعَلٌ، مِفْعَالٌ، مِفْعَلَةٌ"
      },
      {
        "en": "مَفْعَلٌ، مَفْعِلٌ، مَفْعُلٌ",
        "ur": "مَفْعَلٌ، مَفْعِلٌ، مَفْعُلٌ"
      },
      {
        "en": "فَاعِلٌ، مَفْعُولٌ، فَعَّالٌ",
        "ur": "فَاعِلٌ، مَفْعُولٌ، فَعَّالٌ"
      },
      {
        "en": "مُفْعِلٌ، مُفْعَلٌ، تَفْعِيلٌ",
        "ur": "مُفْعِلٌ، مُفْعَلٌ، تَفْعِيلٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the weight of the tool noun 'مِفْتَاحٌ' (key) from 'فَتَحَ'?",
    "ur": "فعل 'فَتَحَ' سے اسمِ آلہ 'مِفْتَاحٌ' (چابی) کا وزن کیا ہے؟",
    "options": [
      {
        "en": "مِفْعَالٌ (Mif'āl)",
        "ur": "مِفْعَالٌ"
      },
      {
        "en": "مِفْعَلٌ (Mif'al)",
        "ur": "مِفْعَلٌ"
      },
      {
        "en": "مِفْعَلَةٌ (Mif'alah)",
        "ur": "مِفْعَلَةٌ"
      },
      {
        "en": "مَفْعُولٌ (Maf'ool)",
        "ur": "مَفْعُولٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the weight of 'مِكْنَسَةٌ' (broom) from 'كَنَسَ يَكْنُسُ'?",
    "ur": "فعل 'كَنَسَ' سے اسمِ آلہ 'مِكْنَسَةٌ' (جھاڑو) کا وزن کیا ہے؟",
    "options": [
      {
        "en": "مِفْعَلَةٌ (Mif'alah)",
        "ur": "مِفْعَلَةٌ"
      },
      {
        "en": "مِفْعَلٌ (Mif'al)",
        "ur": "مِفْعَلٌ"
      },
      {
        "en": "مِفْعَالٌ (Mif'āl)",
        "ur": "مِفْعَالٌ"
      },
      {
        "en": "مَفْعَلَةٌ (Maf'alah)",
        "ur": "مَفْعَلَةٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the weight of 'مِبْرَدٌ' (file/rasp) from 'بَرَدَ يَبْرُدُ'?",
    "ur": "فعل 'بَرَدَ' سے اسمِ آلہ 'مِبْرَدٌ' (ریتی/سوہان) کا وزن کیا ہے؟",
    "options": [
      {
        "en": "مِفْعَلٌ (Mif'al)",
        "ur": "مِفْعَلٌ"
      },
      {
        "en": "مِفْعَالٌ (Mif'āl)",
        "ur": "مِفْعَالٌ"
      },
      {
        "en": "مِفْعَلَةٌ (Mif'alah)",
        "ur": "مِفْعَلَةٌ"
      },
      {
        "en": "مَفْعَلٌ (Maf'al)",
        "ur": "مَفْعَلٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In the dialogue of Lesson 6, how many students are joining the Hajj trip?",
    "ur": "سبق 6 کے حوار میں رحلہ حج کے لیے کتنے طلباء شریک ہیں؟",
    "options": [
      {
        "en": "Eighteen students (ثَمَانِيَةَ عَشَرَ طَالِباً)",
        "ur": "18 طلباء (ثَمَانِيَةَ عَشَرَ طَالِباً)"
      },
      {
        "en": "Fifteen students",
        "ur": "15 طلباء"
      },
      {
        "en": "Twenty students",
        "ur": "20 طلباء"
      },
      {
        "en": "Twelve students",
        "ur": "12 طلباء"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Where will the supervisor and students meet according to the dialogue ('أَيْنَ نَلْتَقِي؟')?",
    "ur": "حوار کے مطابق مشرف اور طلباء کی ملاقات کہاں طے پائی؟",
    "options": [
      {
        "en": "In the university car park (فِي مَوْقِفِ السَّيَّارَاتِ بِالجَامِعَةِ)",
        "ur": "جامعہ کے پارکینگ / مَوْقِف السيارات میں"
      },
      {
        "en": "In the central mosque",
        "ur": "مرکزی مسجد میں"
      },
      {
        "en": "In the library hall",
        "ur": "لائبریری کے ہال میں"
      },
      {
        "en": "At the airport terminal",
        "ur": "ایئرپورٹ پر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In the dialogue, where is the bus parked ('السَّيَّارَةُ الوَاقِفَةُ')?",
    "ur": "حوار کے مطابق بس کہاں کھڑی ہے؟",
    "options": [
      {
        "en": "In front of the dormitory entrance (أَمَامَ مَدْخَلِ المَهْجَعِ)",
        "ur": "ہاسٹل / مَدْخَل المَهْجَع کے سامنے"
      },
      {
        "en": "Behind the dining hall",
        "ur": "ڈائننگ ہال کے پیچھے"
      },
      {
        "en": "In front of the administration building",
        "ur": "ایڈمنسٹریشن بلاک کے سامنے"
      },
      {
        "en": "Near the train station",
        "ur": "ریلوے اسٹیشن کے پاس"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "What is the Ism al-Makan of the verb 'لَعِبَ يَلْعَبُ' (to play)?",
    "ur": "تمرين 2 کے مطابق فعل 'لَعِبَ يَلْعَبُ' (کھیلنا) سے اسمِ مکان کیا ہوگا؟",
    "options": [
      {
        "en": "مَلْعَبٌ (Mal'ab, on weight of Maf'al)",
        "ur": "مَلْعَبٌ (مَفْعَلٌ کے وزن پر)"
      },
      {
        "en": "مَلْعِبٌ (Mal'ib)",
        "ur": "مَلْعِبٌ"
      },
      {
        "en": "مِلْعَبٌ (Mil'ab)",
        "ur": "مِلْعَبٌ"
      },
      {
        "en": "تَلْعِيبٌ (Tal'eeb)",
        "ur": "تَلْعِيبٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Ism al-Makan of 'جَلَسَ يَجْلِسُ' (to sit)?",
    "ur": "تمرين 3 کے مطابق فعل 'جَلَسَ يَجْلِسُ' (بیٹھنا) سے اسمِ مکان کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَجْلِسٌ (Majlis, on weight of Maf'il)",
        "ur": "مَجْلِسٌ (مَفْعِلٌ کے وزن پر)"
      },
      {
        "en": "مَجْلَسٌ (Majlas)",
        "ur": "مَجْلَسٌ"
      },
      {
        "en": "مِجْلَسٌ (Mijlas)",
        "ur": "مِجْلَسٌ"
      },
      {
        "en": "مُجَالَسَةٌ",
        "ur": "مُجَالَسَةٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Ism al-Makan of Mithal verb 'وَقَفَ يَقِفُ' (to stop/park)?",
    "ur": "فعلِ مثال 'وَقَفَ يَقِفُ' (ٹھہرنا/کھڑا ہونا) سے اسمِ مکان کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَوْقِفٌ (Mawqif)",
        "ur": "مَوْقِفٌ"
      },
      {
        "en": "مَوْقَفٌ (Mawqaf)",
        "ur": "مَوْقَفٌ"
      },
      {
        "en": "مِوَقَفٌ (Miwaqaf)",
        "ur": "مِوَقَفٌ"
      },
      {
        "en": "تَوْقِيفٌ (Tawqeef)",
        "ur": "تَوْقِيفٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Ism al-Makan with Tā' Marbootah of 'كَتَبَ يَكْتُبُ' (to write)?",
    "ur": "فعل 'كَتَبَ' سے تاء مربوطہ کے ساتھ اسمِ مکان (لائبریری) کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَكْتَبَةٌ (Maktabah)",
        "ur": "مَكْتَبَةٌ"
      },
      {
        "en": "مِكْتَبَةٌ (Miktabah)",
        "ur": "مِكْتَبَةٌ"
      },
      {
        "en": "مَكْتُوبٌ (Maktoob)",
        "ur": "مَكْتُوبٌ"
      },
      {
        "en": "كِتَابَةٌ (Kitābah)",
        "ur": "كِتَابَةٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Ism al-Makan of 'دَخَلَ يَدْخُلُ' (to enter)?",
    "ur": "فعل 'دَخَلَ يَدْخُلُ' (داخل ہونا) سے اسمِ مکان کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَدْخَلٌ (Madkhal)",
        "ur": "مَدْخَلٌ"
      },
      {
        "en": "مَدْخِلٌ (Madkhil)",
        "ur": "مَدْخِلٌ"
      },
      {
        "en": "مِدْخَلٌ (Midkhal)",
        "ur": "مِدْخَلٌ"
      },
      {
        "en": "دُخُولٌ (Dukbool)",
        "ur": "دُخُولٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Ism al-Makan of 'خَرَجَ يَخْرُجُ' (to exit)?",
    "ur": "فعل 'خَرَجَ يَخْرُجُ' (نکلنا) سے اسمِ مکان کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَخْرَجٌ (Makhraj)",
        "ur": "مَخْرَجٌ"
      },
      {
        "en": "مَخْرِجٌ (Makhrij)",
        "ur": "مَخْرِجٌ"
      },
      {
        "en": "مِخْرَجٌ (Mikhraj)",
        "ur": "مِخْرَجٌ"
      },
      {
        "en": "خُرُوجٌ (Khurooj)",
        "ur": "خُرُوجٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, what is the Ism al-Aala of 'صَعِدَ يَصْعَدُ' (to ascend) on the weight of 'مِفْعَلٌ'?",
    "ur": "تمرين 4 کے مطابق 'صَعِدَ' (اوپر چڑھنا) سے وزن 'مِفْعَلٌ' پر اسمِ آلہ (لفٹ/ایلیویٹر) کیا ہوگا؟",
    "options": [
      {
        "en": "مِصْعَدٌ (Mis'ad - elevator)",
        "ur": "مِصْعَدٌ (لفٹ)"
      },
      {
        "en": "مَصْعَدٌ (Mas'ad)",
        "ur": "مَصْعَدٌ"
      },
      {
        "en": "مِصْعَادٌ (Mis'ād)",
        "ur": "مِصْعَادٌ"
      },
      {
        "en": "صُعُودٌ (Su'ood)",
        "ur": "صُعُودٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the Ism al-Aala of the doubled verb 'قَصَّ يَقُصُّ' (to cut) on the weight of 'مِفْعَلٌ'?",
    "ur": "فعلِ مضاعف 'قَصَّ' (کاٹنا) سے وزن 'مِفْعَلٌ' پر اسمِ آلہ (قینچی) کیا بنتا ہے؟",
    "options": [
      {
        "en": "مِقَصٌّ (Miqass - scissors)",
        "ur": "مِقَصٌّ (قینچی)"
      },
      {
        "en": "مَقَصٌّ (Maqass)",
        "ur": "مَقَصٌّ"
      },
      {
        "en": "مِقْصَاصٌ (Miqsās)",
        "ur": "مِقْصَاصٌ"
      },
      {
        "en": "قَصَّاصَةٌ",
        "ur": "قَصَّاصَةٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the Ism al-Aala of 'حَلَبَ يَحْلُبُ' (to milk) on the weight 'مِفْعَلٌ'?",
    "ur": "فعل 'حَلَبَ' (دودھ دوہنا) سے 'مِفْعَلٌ' کے وزن پر اسمِ آلہ (دوہنے کا برتن) کیا ہے؟",
    "options": [
      {
        "en": "مِحْلَبٌ (Mihlab)",
        "ur": "مِحْلَبٌ"
      },
      {
        "en": "مَحْلَبٌ (Mahlab)",
        "ur": "مَحْلَبٌ"
      },
      {
        "en": "مِحْلاَبٌ (Mihlāb)",
        "ur": "مِحْلاَبٌ"
      },
      {
        "en": "حَلِيبٌ (Haleeb)",
        "ur": "حَلِيبٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In Exercise 5, what is the Ism al-Aala of 'لَعِقَ يَلْعَقُ' (to lick) on weight 'مِفْعَلَةٌ'?",
    "ur": "تمرين 5 کے مطابق 'لَعِقَ' (چاٹنا) سے وزن 'مِفْعَلَةٌ' پر اسمِ آلہ (چمچ) کیا ہے؟",
    "options": [
      {
        "en": "مِلْعَقَةٌ (Mil'aqah - spoon)",
        "ur": "مِلْعَقَةٌ (چمچ)"
      },
      {
        "en": "مَلْعَقَةٌ (Mal'aqah)",
        "ur": "مَلْعَقَةٌ"
      },
      {
        "en": "مِلْعَاقٌ (Mil'āq)",
        "ur": "مِلْعَاقٌ"
      },
      {
        "en": "لَعُوقٌ (La'ooq)",
        "ur": "لَعُوقٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "What is the original form (أصلها) of the Ism al-Aala 'مِقْلاَةٌ' (frying pan) before I'lal?",
    "ur": "اسمِ آلہ 'مِقْلاَةٌ' (فرائنگ پین) کی تعلیل سے پہلے اصل صرفی شکل کیا تھی؟",
    "options": [
      {
        "en": "مِقْلَيَةٌ (Miqlayah, on weight of Mif'alah)",
        "ur": "مِقْلَيَةٌ (مِفْعَلَةٌ کے وزن پر)"
      },
      {
        "en": "مَقْلَاةٌ (Maqlāh)",
        "ur": "مَقْلَاةٌ"
      },
      {
        "en": "مِقْلَوَةٌ (Miqlawah)",
        "ur": "مِقْلَوَةٌ"
      },
      {
        "en": "مُقْلاَيَةٌ",
        "ur": "مُقْلاَيَةٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "What is the original form of the Ism al-Aala 'مِمْحَاةٌ' (eraser) before I'lal?",
    "ur": "اسمِ آلہ 'مِمْحَاةٌ' (ربڑ/مٹانے کا اوزار) کی اصل صرفی شکل تعلیل سے پہلے کیا تھی؟",
    "options": [
      {
        "en": "مِمْحَوَةٌ (Mimhawah, from root م-ح-و)",
        "ur": "مِمْحَوَةٌ (جڑ م-ح-و سے)"
      },
      {
        "en": "مِمْحَيَةٌ (Mimhayah)",
        "ur": "مِمْحَيَةٌ"
      },
      {
        "en": "مَمْحَاةٌ (Mamhāh)",
        "ur": "مَمْحَاةٌ"
      },
      {
        "en": "مِمْحَاءٌ (Mimhā')",
        "ur": "مِمْحَاءٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "In the Hadith 'المُؤْمِنُ مِرْآةُ المُؤْمِنِ', what derivative form and weight is 'مِرْآةٌ'?",
    "ur": "حدیث مبارکہ 'المُؤْمِنُ مِرْآةُ المُؤْمِنِ' میں لفظ 'مِرْآةٌ' (آئینہ) کا صرفی وزن کیا ہے؟",
    "options": [
      {
        "en": "Ism al-Aala on weight of مِفْعَلَةٌ (originally مِرْأَيَةٌ)",
        "ur": "مِفْعَلَةٌ کے وزن پر اسمِ آلہ (اصل میں مِرْأَيَةٌ)"
      },
      {
        "en": "Ism al-Makan on weight of مَفْعَلٌ",
        "ur": "اسمِ مکان"
      },
      {
        "en": "Ism al-Fa'il on weight of فَاعِلٌ",
        "ur": "اسمِ فاعل"
      },
      {
        "en": "Masdar Mimiy",
        "ur": "مصدر میمی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "In the Hadith regarding birds of prey: 'نَهَى عَنْ كُلِّ ذِي مِخْلَبٍ مِنَ الطَّيْرِ', what is 'مِخْلَبٌ'?",
    "ur": "حدیث مبارکہ 'نَهَى عَنْ كُلِّ ذِي مِخْلَبٍ مِنَ الطَّيْرِ' میں لفظ 'مِخْلَبٌ' (پنجہ) صرفی لحاظ سے کیا ہے؟",
    "options": [
      {
        "en": "Ism al-Aala on the weight of مِفْعَلٌ (claw/talon of bird)",
        "ur": "وزن مِفْعَلٌ پر اسمِ آلہ (پرندے کا پنجہ/ناخن)"
      },
      {
        "en": "Ism al-Makan",
        "ur": "اسمِ مکان"
      },
      {
        "en": "Ism al-Fa'il",
        "ur": "اسمِ فاعل"
      },
      {
        "en": "Ism al-Maf'ool",
        "ur": "اسمِ مفعول"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 7",
    "en": "What is the weight of 'مِكْوَاةٌ' (clothes iron) from the verb 'كَوَى يَكْوِي'?",
    "ur": "فعل 'كَوَى يَكْوِي' (استری کرنا) سے اسمِ آلہ 'مِكْوَاةٌ' کا وزن کیا ہے؟",
    "options": [
      {
        "en": "مِفْعَلَةٌ (Mif'alah, originally مِكْوَيَةٌ)",
        "ur": "مِفْعَلَةٌ (اصل میں مِكْوَيَةٌ)"
      },
      {
        "en": "مِفْعَالٌ",
        "ur": "مِفْعَالٌ"
      },
      {
        "en": "مِفْعَلٌ",
        "ur": "مِفْعَلٌ"
      },
      {
        "en": "مَفْعَلٌ",
        "ur": "مَفْعَلٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 8",
    "en": "Categorize the two derivatives 'فَاتِحٌ' and 'مِفْتَاحٌ' derived from 'فَتَحَ':",
    "ur": "تمرين 8 کے مطابق فعل 'فَتَحَ' سے بننے والے دو اسماء 'فَاتِحٌ' اور 'مِفْتَاحٌ' کی صرفی نوعیت کیا ہے؟",
    "options": [
      {
        "en": "فَاتِحٌ is Ism Fa'il (Opener); مِفْتَاحٌ is Ism Aala (Key)",
        "ur": "فَاتِحٌ اسمِ فاعل ہے؛ مِفْتَاحٌ اسمِ آلہ (چابی) ہے"
      },
      {
        "en": "Both are Ism al-Makan",
        "ur": "دونوں اسمِ مکان ہیں"
      },
      {
        "en": "فَاتِحٌ is Ism Aala; مِفْتَاحٌ is Ism Maf'ool",
        "ur": "فَاتِحٌ اسمِ آلہ ہے؛ مِفْتَاحٌ اسمِ مفعول ہے"
      },
      {
        "en": "Both are verbal nouns (Masdar)",
        "ur": "دونوں مصادر ہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 8",
    "en": "Categorize the two derivatives 'مَكِيلٌ' and 'مِكْيَالٌ' derived from 'كَالَ يَكِيلُ' (to measure):",
    "ur": "فعل 'كَالَ يَكِيلُ' (ناپنا) سے بننے والے دو اسماء 'مَكِيلٌ' اور 'مِكْيَالٌ' کا صرفی فرق کیا ہے؟",
    "options": [
      {
        "en": "مَكِيلٌ is Ism Maf'ool (measured item); مِكْيَالٌ is Ism Aala (measuring vessel)",
        "ur": "مَكِيلٌ اسمِ مفعول (پیمائش شدہ چیز) ہے؛ مِكْيَالٌ اسمِ آلہ (پیمانہ) ہے"
      },
      {
        "en": "Both are Ism al-Fa'il",
        "ur": "دونوں اسمِ فاعل ہیں"
      },
      {
        "en": "مَكِيلٌ is Ism Aala; مِكْيَالٌ is Ism Makan",
        "ur": "مَكِيلٌ اسمِ آلہ ہے؛ مِكْيَالٌ اسمِ مکان ہے"
      },
      {
        "en": "Both are Form IV derivatives",
        "ur": "دونوں فارم IV کے مشتقات ہیں"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 6 Quiz ---');

  try {
    // 1. Ensure 'part' column exists in 'questions' table
    console.log('Ensuring "part" column exists in questions table...');
    await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS part TEXT`;

    // 2. Get the Madina Books course ID
    const courses = await sql`SELECT id FROM courses WHERE name = 'Madina Books' LIMIT 1`;
    if (courses.length === 0) {
      throw new Error('Madina Books course not found.');
    }
    const courseId = courses[0].id;
    console.log(`Using Course ID: ${courseId}`);

    // 3. Find or Create Book 3 section
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

    // 4. Find or Create Lecture 06 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 6 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 06 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 06', 6)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 06: ID ${lectureId}`);
    }

    // 5. CAREFUL DELETION: Find existing Book 3 Lesson 6 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 6))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 6.`);
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

    // 6. Create the quiz for Book 3 Lesson 6
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 06 Quiz', 'Daily', 1)
      RETURNING id, title
    `;
    const newQuizId = newQuiz.id;
    console.log(`Created new Quiz: ID ${newQuizId} ("${newQuiz.title}")`);

    // 7. Insert all 30 questions with part, en, ur, options, correct_option_index
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 6 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

run();
