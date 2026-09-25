import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL || process.env.DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is 'Ism al-Aala' (اسم الآلة) in Arabic grammar?",
    "ur": "عربی گرامر میں 'اسم الآلة' کی تعریف کیا ہے؟",
    "options": [
      {
        "en": "A derived noun that indicates the tool or instrument used to perform an action",
        "ur": "وہ مشتق اسم جو فعل کی انجام دہی کا آلہ یا اوزار ظاہر کرے"
      },
      {
        "en": "A noun that indicates the place where an action occurs",
        "ur": "وہ اسم جو عمل کے وقوع کی جگہ ظاہر کرے"
      },
      {
        "en": "A noun that indicates the time of an action",
        "ur": "وہ اسم جو عمل کا وقت ظاہر کرے"
      },
      {
        "en": "A noun used exclusively for plural forms",
        "ur": "وہ اسم جو صرف جمع کے لیے استعمال ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the three classical standard weights (أوزان قياسية) of Ism al-Aala derived from Form I verbs?",
    "ur": "فعل ثلاثی مجرد سے اسمِ آلہ کے تین کلاسیکی قیاسی اوزان کون سے ہیں؟",
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
        "en": "مُفْعِلٌ، مُفْعَلٌ، إِفْعَالٌ",
        "ur": "مُفْعِلٌ، مُفْعَلٌ، إِفْعَالٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the weight of the instrument noun 'مِصْعَدٌ' (elevator) derived from 'صَعِدَ'?",
    "ur": "فعل 'صَعِدَ' سے اسمِ آلہ 'مِصْعَدٌ' (لفٹ) کا وزن کیا ہے؟",
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
    "part": "Main Content",
    "en": "What is the weight of the instrument noun 'مِفْتَاحٌ' (key) derived from 'فَتَحَ'?",
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
    "en": "What is the weight of the instrument noun 'مِكْنَسَةٌ' (broom) derived from 'كَنَسَ'?",
    "ur": "فعل 'كَنَسَ' سے اسمِ آلہ 'مِكْنَسَةٌ' (جھاڑو) کا وزن کیا ہے؟",
    "options": [
      {
        "en": "مِفْعَلَةٌ (Mif'alah)",
        "ur": "مِفْعَلَةٌ"
      },
      {
        "en": "مِفْعَالٌ (Mif'āl)",
        "ur": "مِفْعَالٌ"
      },
      {
        "en": "مِفْعَلٌ (Mif'al)",
        "ur": "مِفْعَلٌ"
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
    "en": "Which of the following is a non-derived (جامد / غير مشتق) instrument noun?",
    "ur": "درج ذیل میں سے کون سا اسمِ آلہ غیر مشتق (جامد) ہے؟",
    "options": [
      {
        "en": "سِكِّينٌ (Sikkeen - knife)",
        "ur": "سِكِّينٌ (چھری/چاقو)"
      },
      {
        "en": "مِقَصٌّ (Miqass - scissors)",
        "ur": "مِقَصٌّ (قینچی)"
      },
      {
        "en": "مِلْعَقَةٌ (Mil'aqah - spoon)",
        "ur": "مِلْعَقَةٌ (چمچ)"
      },
      {
        "en": "مِفْتَاحٌ (Miftāh - key)",
        "ur": "مِفْتَاحٌ (چابی)"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What was the original form (أصلها) of 'مِقْلاَةٌ' (frying pan) before I'lal (morphological change)?",
    "ur": "تعلیل (صرفی تبدیلی) سے پہلے اسمِ آلہ 'مِقْلاَةٌ' (فرائنگ پین) کی اصل شکل کیا تھی؟",
    "options": [
      {
        "en": "مِقْلَيَةٌ (Miqlayah, on weight of Mif'alah)",
        "ur": "مِقْلَيَةٌ (مِفْعَلَةٌ کے وزن پر)"
      },
      {
        "en": "مَقْلاَةٌ (Maqlāh)",
        "ur": "مَقْلاَةٌ"
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
    "part": "Main Content",
    "en": "What was the original form of 'مِمْحَاةٌ' (eraser) before I'lal?",
    "ur": "تعلیل سے پہلے اسمِ آلہ 'مِمْحَاةٌ' (ربڑ) کی اصل شکل کیا تھی؟",
    "options": [
      {
        "en": "مِمْحَوَةٌ (Mimhawah, derived from root م-ح-و)",
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
    "part": "Main Content",
    "en": "What modern pattern (وزن حديث) approved by modern language academies is used for appliance instrument nouns like 'ثَلاَّجَةٌ' and 'غَسَّالَةٌ'?",
    "ur": "جدید زبان کے اداروں کا منظور شدہ کون سا جدید وزن 'ثَلاَّجَةٌ' (فریج) اور 'غَسَّالَةٌ' (واشنگ مشین) جیسے آلات کے لیے استعمال ہوتا ہے؟",
    "options": [
      {
        "en": "فَعَّالَةٌ (Fa''ālah)",
        "ur": "فَعَّالَةٌ"
      },
      {
        "en": "مِفْعَلَةٌ (Mif'alah)",
        "ur": "مِفْعَلَةٌ"
      },
      {
        "en": "فَاعِلَةٌ (Fā'ilah)",
        "ur": "فَاعِلَةٌ"
      },
      {
        "en": "مُفَعِّلَةٌ (Mufa''ilah)",
        "ur": "مُفَعِّلَةٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What was the original form of 'مِكْوَاةٌ' (clothes iron) before morphological change?",
    "ur": "صرفی تبدیلی سے پہلے 'مِكْوَاةٌ' (استری) کی اصل شکل کیا تھی؟",
    "options": [
      {
        "en": "مِكْوَيَةٌ (Mikwayah, from verb كَوَى يَكْوِي)",
        "ur": "مِكْوَيَةٌ (فعل كَوَى يَكْوِي سے)"
      },
      {
        "en": "مَكْوَاةٌ (Makwāh)",
        "ur": "مَكْوَاةٌ"
      },
      {
        "en": "مِكْوَاةٌ (Mikwāh)",
        "ur": "مِكْوَاةٌ"
      },
      {
        "en": "مُكْوِيَةٌ (Mukwiyah)",
        "ur": "مُكْوِيَةٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, what is the Ism al-Aala in the sentence 'صَعِدْنَا إِلَى الطَّابَقِ العُلْوِيِّ بِالمِصْعَدِ'?",
    "ur": "تمرين 1 کے جملے 'صَعِدْنَا إِلَى الطَّابَقِ العُلْوِيِّ بِالمِصْعَدِ' میں اسمِ آلہ کیا ہے؟",
    "options": [
      {
        "en": "المِصْعَدِ (Al-Mis'ad - the elevator)",
        "ur": "المِصْعَدِ (لفٹ)"
      },
      {
        "en": "الطَّابَقِ (At-Tābaq)",
        "ur": "الطَّابَقِ"
      },
      {
        "en": "العُلْوِيِّ (Al-'Ulwiyy)",
        "ur": "العُلْوِيِّ"
      },
      {
        "en": "صَعِدْنَا (Sa'idnā)",
        "ur": "صَعِدْنَا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'فَتَحْتُ البَابَ بِالمِفْتَاحِ', what is the grammatical case and position of 'بِالمِفْتَاحِ'?",
    "ur": "جملے 'فَتَحْتُ البَابَ بِالمِفْتَاحِ' میں 'بِالمِفْتَاحِ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Majroor with Kasra due to the preposition Ba (بـ)",
        "ur": "حرفِ جر (بـ) داخل ہونے کی بنا پر کسرہ کے ساتھ مجرور"
      },
      {
        "en": "Maf'ool Bihi Mansoob",
        "ur": "مفعول بہ منصوب"
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
    "part": "Exercise 1",
    "en": "In 'نَظَّفَتِ الخَادِمَةُ الغُرْفَةَ بِالمِكْنَسَةِ', what derivative form is 'المِكْنَسَةِ'?",
    "ur": "جملے 'نَظَّفَتِ الخَادِمَةُ الغُرْفَةَ بِالمِكْنَسَةِ' میں 'المِكْنَسَةِ' کون سا مشتق اسم ہے؟",
    "options": [
      {
        "en": "Ism al-Aala on the weight of مِفْعَلَةٌ",
        "ur": "مِفْعَلَةٌ کے وزن پر اسمِ آلہ"
      },
      {
        "en": "Ism al-Makan on weight of مَفْعَلَةٌ",
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
    "part": "Exercise 2",
    "en": "In Exercise 2, derive the Ism al-Aala on weight 'مِفْعَلٌ' from 'بَرَدَ يَبْرُدُ' (to file/smooth):",
    "ur": "تمرين 2 کے مطابق فعل 'بَرَدَ يَبْرُدُ' (ریتی سے گھسنا) سے وزن 'مِفْعَلٌ' پر اسمِ آلہ کیا ہوگا؟",
    "options": [
      {
        "en": "مِبْرَدٌ (Mibrad - file/rasp)",
        "ur": "مِبْرَدٌ (ریتی/سوہان)"
      },
      {
        "en": "مَبْرَدٌ (Mabrad)",
        "ur": "مَبْرَدٌ"
      },
      {
        "en": "مِبْرَادٌ (Mibrād)",
        "ur": "مِبْرَادٌ"
      },
      {
        "en": "بَارِدٌ (Bārid)",
        "ur": "بَارِدٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Derive the Ism al-Aala on weight 'مِفْعَلٌ' from 'حَلَبَ يَحْلُبُ' (to milk):",
    "ur": "فعل 'حَلَبَ يَحْلُبُ' (دودھ دوہنا) سے وزن 'مِفْعَلٌ' پر اسمِ آلہ کیا ہوگا؟",
    "options": [
      {
        "en": "مِحْلَبٌ (Mihlab - milking vessel)",
        "ur": "مِحْلَبٌ (دودھ دوہنے کا برتن)"
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
    "part": "Exercise 2",
    "en": "Derive the Ism al-Aala on weight 'مِفْعَلٌ' from doubled verb 'قَصَّ يَقُصُّ' (to cut):",
    "ur": "فعلِ مضاعف 'قَصَّ يَقُصُّ' (کاٹنا) سے وزن 'مِفْعَلٌ' پر اسمِ آلہ کیا ہوگا؟",
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
    "part": "Exercise 2",
    "en": "Derive the Ism al-Aala on weight 'مِفْعَلٌ' from 'قَبَضَ يَقْبِضُ' (to grip):",
    "ur": "فعل 'قَبَضَ يَقْبِضُ' (پکڑنا) سے وزن 'مِفْعَلٌ' پر اسمِ آلہ (دستہ/ہینڈل) کیا ہوگا؟",
    "options": [
      {
        "en": "مِقْبَضٌ (Miqbad - handle/grip)",
        "ur": "مِقْبَضٌ (دستہ/قبضہ)"
      },
      {
        "en": "مَقْبَضٌ (Maqbad)",
        "ur": "مَقْبَضٌ"
      },
      {
        "en": "مِقْبَاضٌ (Miqbād)",
        "ur": "مِقْبَاضٌ"
      },
      {
        "en": "قَابِضٌ (Qābid)",
        "ur": "قَابِضٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, derive the Ism al-Aala on weight 'مِفْعَالٌ' from Mithal verb 'وَزَنَ يَزِنُ' (to weigh):",
    "ur": "تمرين 3 کے مطابق فعلِ مثال 'وَزَنَ يَزِنُ' (وزن کرنا) سے وزن 'مِفْعَالٌ' پر اسمِ آلہ (ترازو) کیا ہوگا؟",
    "options": [
      {
        "en": "مِيزَانٌ (Meezān, originally مِوْزَانٌ)",
        "ur": "مِيزَانٌ (اصل میں مِوْزَانٌ)"
      },
      {
        "en": "مَوْزُونٌ (Mawzoon)",
        "ur": "مَوْزُونٌ"
      },
      {
        "en": "وَازِنٌ (Wāzin)",
        "ur": "وَازِنٌ"
      },
      {
        "en": "مِوَزَانٌ (Miwzān)",
        "ur": "مِوَزَانٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Derive the Ism al-Aala on weight 'مِفْعَالٌ' from Ajwaf verb 'قَاسَ يَقِيسُ' (to measure):",
    "ur": "فعلِ اجوف 'قَاسَ يَقِيسُ' (پیمائش کرنا) سے وزن 'مِفْعَالٌ' پر اسمِ آلہ کیا ہوگا؟",
    "options": [
      {
        "en": "مِقْيَاسٌ (Miqyās - measuring gauge)",
        "ur": "مِقْيَاسٌ (پیمانہ)"
      },
      {
        "en": "مَقْيُوسٌ (Maqyoos)",
        "ur": "مَقْيُوسٌ"
      },
      {
        "en": "قَائِسٌ (Qā'is)",
        "ur": "قَائِسٌ"
      },
      {
        "en": "مِقْسَاسٌ (Miqsās)",
        "ur": "مِقْسَاسٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Derive the Ism al-Aala on weight 'مِفْعَالٌ' from 'زَمَرَ يَزْمُرُ' (to play pipe):",
    "ur": "فعل 'زَمَرَ يَزْمُرُ' (بنسری بجانا) سے وزن 'مِفْعَالٌ' پر اسمِ آلہ کیا ہوگا؟",
    "options": [
      {
        "en": "مِزْمَارٌ (Mizmār - flute/pipe)",
        "ur": "مِزْمَارٌ (بنسری)"
      },
      {
        "en": "مَزْمُورٌ (Mazmoor)",
        "ur": "مَزْمُورٌ"
      },
      {
        "en": "زَامِرٌ (Zāmir)",
        "ur": "زَامِرٌ"
      },
      {
        "en": "مِزْمَرٌ (Mizmar)",
        "ur": "مِزْمَرٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Derive the Ism al-Aala on weight 'مِفْعَالٌ' from 'صَبَحَ يَصْبَحُ' (to shine light):",
    "ur": "فعل 'صَبَحَ' (روشن کرنا) سے وزن 'مِفْعَالٌ' پر اسمِ آلہ (چراغ/لیمپ) کیا ہوگا؟",
    "options": [
      {
        "en": "مِصْبَاحٌ (Misbāh - lamp/lantern)",
        "ur": "مِصْبَاحٌ (چراغ/لیمپ)"
      },
      {
        "en": "مَصْبُوحٌ (Masbooh)",
        "ur": "مَصْبُوحٌ"
      },
      {
        "en": "صَابِحٌ (Sābih)",
        "ur": "صَابِحٌ"
      },
      {
        "en": "مِصْبَحٌ (Misbah)",
        "ur": "مِصْبَحٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, derive the Ism al-Aala on weight 'مِفْعَلَةٌ' from 'طَرَقَ يَطْرُقُ' (to hammer/strike):",
    "ur": "تمرين 4 کے مطابق 'طَرَقَ يَطْرُقُ' (ہتھوڑی مارنا) سے وزن 'مِفْعَلَةٌ' پر اسمِ آلہ کیا ہوگا؟",
    "options": [
      {
        "en": "مِطْرَقَةٌ (Mitraqah - hammer)",
        "ur": "مِطْرَقَةٌ (ہتھوڑی)"
      },
      {
        "en": "مَطْرَقَةٌ (Matraqah)",
        "ur": "مَطْرَقَةٌ"
      },
      {
        "en": "مِطْرَاقٌ (Mitrāq)",
        "ur": "مِطْرَاقٌ"
      },
      {
        "en": "طَارِقٌ (Tāriq)",
        "ur": "طَارِقٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Derive the Ism al-Aala on weight 'مِفْعَلَةٌ' from 'عَصَرَ يَعْصِرُ' (to squeeze/press):",
    "ur": "فعل 'عَصَرَ يَعْصِرُ' (نچوڑنا) سے وزن 'مِفْعَلَةٌ' پر اسمِ آلہ (جوسر/نچوڑنے کا آلہ) کیا ہوگا؟",
    "options": [
      {
        "en": "مِعْصَرَةٌ (Mi'sarah - juicer/press)",
        "ur": "مِعْصَرَةٌ (جوسر/عصارہ)"
      },
      {
        "en": "مَعْصَرَةٌ (Ma'sarah)",
        "ur": "مَعْصَرَةٌ"
      },
      {
        "en": "مِعْصَارٌ (Mi'sār)",
        "ur": "مِعْصَارٌ"
      },
      {
        "en": "عَاصِرٌ ('Āsir)",
        "ur": "عَاصِرٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Derive the Ism al-Aala on weight 'مِفْعَلَةٌ' from Naqis verb 'قَلَى يَقْلِي' (to fry):",
    "ur": "فعلِ ناقص 'قَلَى يَقْلِي' (تلنا) سے وزن 'مِفْعَلَةٌ' پر اسمِ آلہ کیا ہوگا؟",
    "options": [
      {
        "en": "مِقْلاَةٌ (Miqlāh, originally مِقْلَيَةٌ)",
        "ur": "مِقْلاَةٌ (اصل میں مِقْلَيَةٌ)"
      },
      {
        "en": "مَقْلِيٌّ (Maqliyy)",
        "ur": "مَقْلِيٌّ"
      },
      {
        "en": "قَالٍ (Qālin)",
        "ur": "قَالٍ"
      },
      {
        "en": "مِقْلاَيٌ (Miqlāy)",
        "ur": "مِقْلاَيٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In Exercise 5, classify the word 'سَيْفٌ' (sword) among instrument nouns:",
    "ur": "تمرين 5 کے مطابق لفظ 'سَيْفٌ' (تلوار) کی اسمِ آلہ کے طور پر کیا قسم ہے؟",
    "options": [
      {
        "en": "Non-derived / Jamid instrument noun (اسم آلة جامد)",
        "ur": "اسمِ آلہ جامد (غیر مشتق)"
      },
      {
        "en": "Derived on weight of Mif'al",
        "ur": "مشتق بر وزن مِفْعَلٌ"
      },
      {
        "en": "Derived on weight of Mif'alah",
        "ur": "مشتق بر وزن مِفْعَلَةٌ"
      },
      {
        "en": "Ism al-Fa'il",
        "ur": "اسمِ فاعل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "Classify the word 'قَلَمٌ' (pen) among instrument nouns:",
    "ur": "لفظ 'قَلَمٌ' (قلم) کی اسمِ آلہ کے طور پر کیا صرفی قسم ہے؟",
    "options": [
      {
        "en": "Non-derived / Jamid instrument noun (اسم آلة جامد)",
        "ur": "اسمِ آلہ جامد"
      },
      {
        "en": "Derived on weight of Mif'al",
        "ur": "مشتق بر وزن مِفْعَلٌ"
      },
      {
        "en": "Derived on weight of Mif'āl",
        "ur": "مشتق بر وزن مِفْعَالٌ"
      },
      {
        "en": "Ism al-Maf'ool",
        "ur": "اسمِ مفعول"
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
    "en": "In the Hadith: 'نَهَى عَنْ كُلِّ ذِي مِخْلَبٍ مِنَ الطَّيْرِ', what is 'مِخْلَبٌ'?",
    "ur": "حدیث مبارکہ 'نَهَى عَنْ كُلِّ ذِي مِخْلَبٍ مِنَ الطَّيْرِ' میں لفظ 'مِخْلَبٌ' (پنجہ) صرفی لحاظ سے کیا ہے؟",
    "options": [
      {
        "en": "Ism al-Aala on weight of مِفْعَلٌ (claw/talon of bird)",
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
    "en": "Differentiate between the three forms 'فَاتِحٌ', 'مَفْتُوحٌ', and 'مِفْتَاحٌ' derived from 'فَتَحَ':",
    "ur": "تمرين 7 کے مطابق فعل 'فَتَحَ' سے مشتق تینوں الفاظ 'فَاتِحٌ'، 'مَفْتُوحٌ'، اور 'مِفْتَاحٌ' کا باہمی صرفی فرق کیا ہے؟",
    "options": [
      {
        "en": "فَاتِحٌ is Ism Fa'il; مَفْتُوحٌ is Ism Maf'ool; مِفْتَاحٌ is Ism Aala",
        "ur": "فَاتِحٌ اسمِ فاعل ہے؛ مَفْتُوحٌ اسمِ مفعول ہے؛ مِفْتَاحٌ اسمِ آلہ ہے"
      },
      {
        "en": "All three are Ism al-Aala forms",
        "ur": "تینوں اسمِ آلہ ہیں"
      },
      {
        "en": "فَاتِحٌ is Ism Aala; مَفْتُوحٌ is Ism Makan; مِفْتَاحٌ is Ism Fa'il",
        "ur": "فَاتِحٌ اسمِ آلہ ہے؛ مَفْتُوحٌ اسمِ مکان ہے؛ مِفْتَاحٌ اسمِ فاعل ہے"
      },
      {
        "en": "All three are Form IV derivatives",
        "ur": "تینوں فارم IV کے افعال ہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 7",
    "en": "Differentiate between 'عَالِمٌ', 'مَعْلُومٌ', and 'مِعْلاَمٌ' derived from 'عَلِمَ':",
    "ur": "فعل 'عَلِمَ' سے بننے والے تینوں الفاظ 'عَالِمٌ'، 'مَعْلُومٌ'، اور 'مِعْلاَمٌ' کا صرفی فرق کیا ہے؟",
    "options": [
      {
        "en": "عَالِمٌ is Ism Fa'il (knower); مَعْلُومٌ is Ism Maf'ool (known); مِعْلاَمٌ is Ism Aala (marking tool)",
        "ur": "عَالِمٌ اسمِ فاعل (جانے والا)؛ مَعْلُومٌ اسمِ مفعول (معلوم)؛ مِعْلاَمٌ اسمِ آلہ (علامت/پیمانہ) ہے"
      },
      {
        "en": "All three are Ism al-Fa'il",
        "ur": "تینوں اسمِ فاعل ہیں"
      },
      {
        "en": "عَالِمٌ is Ism Aala; مَعْلُومٌ is Ism Fa'il; مِعْلاَمٌ is Ism Maf'ool",
        "ur": "عَالِمٌ اسمِ آلہ؛ مَعْلُومٌ اسمِ فاعل؛ مِعْلاَمٌ اسمِ مفعول ہے"
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
  console.log('--- Seeding Book 3 Lesson 7 Quiz ---');

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

    // 4. Find or Create Lecture 07 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 7 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 07 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 07', 7)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 07: ID ${lectureId}`);
    }

    // 5. CAREFUL DELETION: Find existing Book 3 Lesson 7 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 7))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 7.`);
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

    // 6. Create the quiz for Book 3 Lesson 7
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 07 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 7 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

run();
