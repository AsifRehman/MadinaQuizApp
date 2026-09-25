import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is the primary derived verb pattern of Form VII (باب انْفَعَلَ) in Arabic?",
    "ur": "عربی زبان میں فارم VII (بابِ انْفَعَلَ) کا ماضی، مضارع، اور مصدر کا بنیادی وزن کیا ہے؟",
    "options": [
      {
        "en": "انْفَعَلَ - يَنْفَعِلُ - انْفِعَالاً",
        "ur": "انْفَعَلَ - يَنْفَعِلُ - انْفِعَالاً"
      },
      {
        "en": "افتَعَلَ - يَفْتَعِلُ - افْتِعَالاً",
        "ur": "افتَعَلَ - يَفْتَعِلُ - افْتِعَالاً"
      },
      {
        "en": "تَفَعَّلَ - يَتَفَعَّلُ - تَفَعُّلاً",
        "ur": "تَفَعَّلَ - يَتَفَعَّلُ - تَفَعُّلاً"
      },
      {
        "en": "استَفْعَلَ - يَسْتَفْعِلُ - اسْتِفْعَالاً",
        "ur": "استَفْعَلَ - يَسْتَفْعِلُ - اسْتِفْعَالاً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the core semantic function of Form VII (باب انْفَعَلَ, e.g., كَسَرْتُهُ فَانْكَسَرَ)?",
    "ur": "بابِ انْفَعَلَ (مثلاً كَسَرْتُهُ فَانْكَسَرَ) کا بنیادی معنوی اور نحوی مقصد کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Al-Mutāwa'ah for Form I transitive verbs (المطاوَعَةُ لِلثُّلاَثِيِّ الـمُتَعَدِّي - accepting the effect of Form I action)",
        "ur": "المطاوعۃ (ثلاثی مجرد متعدی فعل کا اثر و نتیجہ قبول کرنا)"
      },
      {
        "en": "Al-Mushārakah between two participants",
        "ur": "دو فریقوں میں باہمی شرکت"
      },
      {
        "en": "At-Tazāhur (pretending/feigning)",
        "ur": "جھوٹا تظاہر کرنا"
      },
      {
        "en": "Asking or seeking something",
        "ur": "طلب و سوال کرنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the strict syntactic condition regarding transitivity in Form VII (باب انْفَعَلَ)?",
    "ur": "تعدی و لزوم کے لحاظ سے بابِ انْفَعَلَ کا کیا لچکدار یا حتمی قانون ہے؟",
    "options": [
      {
        "en": "Form VII is STRICTLY INTRANSITIVE (لاَ يَكُونُ إِلاَّ لاَزِماً) and never takes a direct object",
        "ur": "بابِ انْفَعَلَ ہمیشہ اور لازماً **لازم** ہوتا ہے اور کبھی مفعول بہ نہیں لیتا"
      },
      {
        "en": "Form VII is always transitive taking two objects",
        "ur": "یہ ہمیشہ دو مفعول لینے والا متعدی ہوتا ہے"
      },
      {
        "en": "Form VII can be either transitive or intransitive freely",
        "ur": "یہ متعدی اور لازم دونوں ہو سکتا ہے"
      },
      {
        "en": "Form VII is used only in passive voice",
        "ur": "یہ صرف مجہول میں استعمال ہوتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Why is NO direct Passive Participle (اسم المفعول) formed from Form VII verbs (e.g., انْكَسَرَ)?",
    "ur": "بابِ انْفَعَلَ کے افعال سے ڈائریکٹ اسمِ مفعول کیوں نہیں بنایا جاتا؟",
    "options": [
      {
        "en": "Because Form VII verbs are strictly intransitive (لاَزِمَةٌ), and intransitive verbs do not form direct passive participles",
        "ur": "کیونکہ اس کے افعال لازماً **لازم** ہوتے ہیں اور لازم افعال سے ڈائریکٹ اسمِ مفعول نہیں بنتا"
      },
      {
        "en": "Because it is phonetically impossible to pronounce",
        "ur": "تلفظ میں دشواری کی وجہ سے"
      },
      {
        "en": "Because Form VII is derived from non-verbs",
        "ur": "اسماءِ جامدہ سے بننے کی وجہ سے"
      },
      {
        "en": "Because it already functions as a noun",
        "ur": "اسم ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What type of Hamzah is attached at the beginning of Form VII past tense, imperative, and masdar (e.g., انْكَسَرَ، انْكَسِرْ، انْكِسَارٌ)?",
    "ur": "فارم VII کے ماضی، امر، اور مصدر کے شروع میں آنے والی ہمزہ کس قسم کی ہوتی ہے؟",
    "options": [
      {
        "en": "Hamzat al-Wasl (هَمْزَةُ وَصْلٍ - dropped in connected speech)",
        "ur": "ہمزہ وصل (جو درمیانِ کلام میں گر جاتی ہے)"
      },
      {
        "en": "Hamzat al-Qat' (همزة قطع)",
        "ur": "ہمزہ قطع"
      },
      {
        "en": "Hamzat al-Istifham (همزة استفهام)",
        "ur": "ہمزہ استفہام"
      },
      {
        "en": "Hamzat al-Nida' (همزة نداء)",
        "ur": "ہمزہ نداء"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Active Participle (اسم الفاعل) pattern for sound Form VII verbs (e.g., انْصَرَفَ)?",
    "ur": "صحیح فارم VII افعال (مثلاً انْصَرَفَ) کے اسمِ فاعل کا کیا وزن ہوتا ہے؟",
    "options": [
      {
        "en": "مُنْفَعِلٌ (Munfa'ilun, e.g., مُنْصَرِفٌ)",
        "ur": "مُنْفَعِلٌ (مثلاً: مُنْصَرِفٌ)"
      },
      {
        "en": "مُنْفَعَلٌ",
        "ur": "مُنْفَعَلٌ"
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
    "en": "How is the Ajwaf verb conjugated in past and present Form VII (e.g., root ق-و-د)?",
    "ur": "بابِ انْفَعَلَ میں اجوف فعل (مثلاً مادہ ق-و-د) کے ماضی اور مضارع کا کیا وزن بنتا ہے؟",
    "options": [
      {
        "en": "انْقَادَ - يَنْقَادُ (Inqāda - Yanqādu, with Alif in both past and present)",
        "ur": "انْقَادَ - يَنْقَادُ (ماضی اور مضارع دونوں میں الف کے ساتھ)"
      },
      {
        "en": "انْقَوَدَ - يَنْقِوُدُ",
        "ur": "انْقَوَدَ - يَنْقِوُدُ"
      },
      {
        "en": "انْقَايَدَ - يَنْقَيِدُ",
        "ur": "انْقَايَدَ - يَنْقَيِدُ"
      },
      {
        "en": "أَقَادَ - يُقِيدُ",
        "ur": "أَقَادَ - يُقِيدُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Masdar of an Ajwaf verb in Form VII (e.g., انْقَادَ)?",
    "ur": "بابِ انْفَعَلَ میں اجوف فعل (مثلاً انْقَادَ) کا مصدر کیا بنتا ہے؟",
    "options": [
      {
        "en": "انْقِيَادٌ (Inqiyādun - changing the Waw/Yā' radical into Yā')",
        "ur": "انْقِيَادٌ (عین کلمہ کو یاء سے بدل کر)"
      },
      {
        "en": "انْقِوَادٌ",
        "ur": "انْقِوَادٌ"
      },
      {
        "en": "انْقِدَاءٌ",
        "ur": "انْقِدَاءٌ"
      },
      {
        "en": "مُنْقَادٌ",
        "ur": "مُنْقَادٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is the Naqis verb conjugated in past, present, and masdar Form VII (e.g., root ق-ض-ي)?",
    "ur": "ناقص فعل (مثلاً مادہ ق-ض-ي) کی فارم VII میں ماضی، مضارع، اور مصدر کی کیا اشکال بنتی ہیں؟",
    "options": [
      {
        "en": "انْقَضَى - يَنْقَضِي - انْقِضَاءً (Inqadā - Yanqadī - Inqidā'an)",
        "ur": "انْقَضَى - يَنْقَضِي - انْقِضَاءً"
      },
      {
        "en": "انْقَضَاوَ - يَنْقَضِوُ - انْقِضَاوًا",
        "ur": "انْقَضَاوَ - يَنْقَضِوُ - انْقِضَاوًا"
      },
      {
        "en": "تَقَضَّى - يَتَقَضَّى - تَقَضِّياً",
        "ur": "تَقَضَّى - يَتَقَضَّى - تَقَضِّياً"
      },
      {
        "en": "اسْتَقْضَى - يَسْتَقْضِي - اسْتِقْضَاءً",
        "ur": "اسْتَقْضَى - يَسْتَقْضِي - اسْتِقْضَاءً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How does Form VII (انْفَعَلَ) differ from Form V (تَفَعَّلَ) in terms of Mutāwa'ah?",
    "ur": "مطاوعت (اثر پذیری) کے لحاظ سے بابِ انْفَعَلَ اور بابِ تَفَعَّلَ میں کیا بنیادی فرق ہے؟",
    "options": [
      {
        "en": "Form VII (انْفَعَلَ) is Mutāwa'ah for Form I (الثلاثي المجرد), whereas Form V (تَفَعَّلَ) is Mutāwa'ah for Form II (فَعَّلَ)",
        "ur": "بابِ انْفَعَلَ ثلاثی مجرد (فارم I) کا مطاوع ہے، جبکہ بابِ تَفَعَّلَ بابِ تفعیل (فارم II) کا مطاوع ہے"
      },
      {
        "en": "Form VII is for nominal sentences only",
        "ur": "فارم VII صرف اسمیہ کے لیے ہے"
      },
      {
        "en": "Form V is strictly intransitive while Form VII is transitive",
        "ur": "فارم V لازم اور فارم VII متعدی ہے"
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
    "en": "In Exercise 1, what is the Masdar of Form VII verb 'انْصَرَفَ' (to leave/depart)?",
    "ur": "تمرين 1 کے مطابق فارم VII فعل 'انْصَرَفَ' کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "انْصِرَافٌ (Insirāfun)",
        "ur": "انْصِرَافٌ"
      },
      {
        "en": "تصريف",
        "ur": "تصريف"
      },
      {
        "en": "إنصرافة",
        "ur": "إنصرافة"
      },
      {
        "en": "تصرُّف",
        "ur": "تصرُّف"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Form the Imperative (فعل الأمر) for Form VII verb 'انْقَلَبَ' (to turn upside down/overturn):",
    "ur": "فعل 'انْقَلَبَ' کا فعلِ امر کیا ہوگا؟",
    "options": [
      {
        "en": "انْقَلِبْ (Inqalib - with Kasra on Laam and Sukoon on Bā')",
        "ur": "انْقَلِبْ (لام پر کسرہ اور باء پر سکون کے ساتھ)"
      },
      {
        "en": "انْقَلَبُ",
        "ur": "انْقَلَبُ"
      },
      {
        "en": "تَقَلَّبْ",
        "ur": "تَقَلَّبْ"
      },
      {
        "en": "أَقْلِبْ",
        "ur": "أَقْلِبْ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the Present Tense (فعل المضارع) of Form VII verb 'انْفَجَرَ' (to gush out/burst)?",
    "ur": "فعل 'انْفَجَرَ' کا فعلِ مضارع کیا ہے؟",
    "options": [
      {
        "en": "يَنْفَجِرُ (Yanfajiru - with Kasra on Jeem)",
        "ur": "يَنْفَجِرُ (جیم پر کسرہ کے ساتھ)"
      },
      {
        "en": "يُفَجِّرُ",
        "ur": "يُفَجِّرُ"
      },
      {
        "en": "يَتَفَجَّرُ",
        "ur": "يَتَفَجَّرُ"
      },
      {
        "en": "يَفْجُرُ",
        "ur": "يَفْجُرُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the Active Participle (اسم الفاعل) of Form VII verb 'انْقَطَعَ' (to be severed/broken)?",
    "ur": "فعل 'انْقَطَعَ' کا اسمِ فاعل کیا ہے؟",
    "options": [
      {
        "en": "مُنْقَطِعٌ (Munqati'un - with Kasra on Tā')",
        "ur": "مُنْقَطِعٌ (طاء پر کسرہ کے ساتھ)"
      },
      {
        "en": "مُنْقَطَعٌ",
        "ur": "مُنْقَطَعٌ"
      },
      {
        "en": "قَاطِعٌ",
        "ur": "قَاطِعٌ"
      },
      {
        "en": "مَقْطُوعٌ",
        "ur": "مَقْطُوعٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, in 'كَسَرْتُ الإِنَاءَ فَانْكَسَرَ' (I broke the vessel, so it broke), what is the syntactic relationship between 'كَسَرَ' and 'انْكَسَرَ'?",
    "ur": "تمرين 2 کے مطابق 'كَسَرْتُ الإِنَاءَ فَانْكَسَرَ' میں 'كَسَرَ' اور 'انْكَسَرَ' کا باہمی اعرابی و معنوی تعلق کیا ہے؟",
    "options": [
      {
        "en": "'كَسَرَ' is Transitive Form I, and 'انْكَسَرَ' is its Intransitive Form VII Mutāwa'ah (اثر پذیری)",
        "ur": "'كَسَرَ' متعدی ثلاثی مجرد ہے اور 'انْكَسَرَ' اس کا لازم مطاوع (فارم VII) ہے"
      },
      {
        "en": "Both are transitive verbs taking objects",
        "ur": "دونوں متعدی افعال ہیں"
      },
      {
        "en": "Both are passive voice verbs",
        "ur": "دونوں مجہول افعال ہیں"
      },
      {
        "en": "There is no semantic relationship",
        "ur": "کوئی معنوی تعلق نہیں ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'فَتَحْتُ البَابَ فَانْفَتَحَ' (I opened the door, so it opened), what does 'فَانْفَتَحَ' express?",
    "ur": "جملے 'فَتَحْتُ البَابَ فَانْفَتَحَ' میں فعل 'فَانْفَتَحَ' کیا ظاہر کرتا ہے؟",
    "options": [
      {
        "en": "Accepting the state of being opened (المطاوَعَةُ لِلْفَتْحِ)",
        "ur": "کھولنے کے عمل کا اثر قبول کر کے کھل جانا (المطاوعة)"
      },
      {
        "en": "Pretending to open",
        "ur": "کھولنے کا ڈرامہ کرنا"
      },
      {
        "en": "Prohibition from opening",
        "ur": "کھولنے سے روکنا"
      },
      {
        "en": "Plurality of doors",
        "ur": "دروازوں کی کثرت"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Convert Form I transitive verb 'قَطَعَ' (to cut/sever) to its Form VII Mutāwa'ah form:",
    "ur": "ثلاثی مجرد متعدی 'قَطَعَ' (کاٹنا) کو اس کے مطاوع فارم VII میں تبدیل کریں:",
    "options": [
      {
        "en": "انْقَطَعَ (Inqata'a - to become cut/severed)",
        "ur": "انْقَطَعَ (کٹ جانا)"
      },
      {
        "en": "قَطَّعَ",
        "ur": "قَطَّعَ"
      },
      {
        "en": "تَقَطَّعَ",
        "ur": "تَقَطَّعَ"
      },
      {
        "en": "اسْتَقْطَعَ",
        "ur": "اسْتَقْطَعَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Convert Form I transitive verb 'شَقَّ' (to split/rip) to its Form VII Mutāwa'ah form:",
    "ur": "ثلاثی مجرد متعدی 'شَقَّ' (پھاڑنا/شق کرنا) کو اس کے مطاوع فارم VII میں تبدیل کریں:",
    "options": [
      {
        "en": "انْشَقَّ (Inshaqqa - to become split/ripped)",
        "ur": "انْشَقَّ (شق ہو جانا/پھٹ جانا)"
      },
      {
        "en": "شَقَّقَ",
        "ur": "شَقَّقَ"
      },
      {
        "en": "تَشَقَّقَ",
        "ur": "تَشَقَّقَ"
      },
      {
        "en": "شَاقَّ",
        "ur": "شَاقَّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, what is the Present Tense (فعل المضارع) of Ajwaf verb 'انْقَادَ' (to submit/be led)?",
    "ur": "تمرين 3 کے مطابق اجوف فعل 'انْقَادَ' (اطاعت کرنا/قیادت میں آنا) کا فعلِ مضارع کیا ہے؟",
    "options": [
      {
        "en": "يَنْقَادُ (Yanqādu)",
        "ur": "يَنْقَادُ"
      },
      {
        "en": "يَنْقُودُ",
        "ur": "يَنْقُودُ"
      },
      {
        "en": "يَنْقِيدُ",
        "ur": "يَنْقِيدُ"
      },
      {
        "en": "يُقَادُ",
        "ur": "يُقَادُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Masdar of Ajwaf verb 'انْحَازَ' (to lean towards/join a side)?",
    "ur": "اجوف فعل 'انْحَازَ' (کسی طرف مائل/منحاز ہونا) کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "انْحِيَازٌ (Inhiyāzun)",
        "ur": "انْحِيَازٌ"
      },
      {
        "en": "انْحَوَازٌ",
        "ur": "انْحَوَازٌ"
      },
      {
        "en": "تحيُّز",
        "ur": "تحيُّز"
      },
      {
        "en": "إحيازة",
        "ur": "إحيازة"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Present Tense (فعل المضارع) of Naqis verb 'انْقَضَى' (to lapse/be fulfilled)?",
    "ur": "ناقص فعل 'انْقَضَى' (گزرنا/پورا ہونا) کا فعلِ مضارع کیا ہے؟",
    "options": [
      {
        "en": "يَنْقَضِي (Yanqadī - ending in Yā')",
        "ur": "يَنْقَضِي (یاء پر مسبوق)"
      },
      {
        "en": "يَنْقَضَى",
        "ur": "يَنْقَضَى"
      },
      {
        "en": "يَنْقَضُّ",
        "ur": "يَنْقَضُّ"
      },
      {
        "en": "يُقْضَى",
        "ur": "يُقْضَى"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Masdar of Naqis verb 'انْـجَلَى' (to be unveiled/clear up)?",
    "ur": "ناقص فعل 'انْـجَلَى' (روشنی سے ظاہر ہونا/منجلی ہونا) کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "انْـجِلاَءٌ (Injilā'un - with Hamzah at the end)",
        "ur": "انْـجِلاَءٌ (آخر میں ہمزہ کے ساتھ)"
      },
      {
        "en": "انْـجِلاَيٌ",
        "ur": "انْـجِلاَيٌ"
      },
      {
        "en": "تَجَلٍّ",
        "ur": "تَجَلٍّ"
      },
      {
        "en": "إِجْلاَءٌ",
        "ur": "إِجْلاَءٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, what is the Masdar of Muda'af verb 'انْشَقَّ' (to split)?",
    "ur": "تمرين 4 کے مطابق مضاعف فعل 'انْشَقَّ' کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "انْشِقَاقٌ (Inshiqāqun - where the doubled letters unpack)",
        "ur": "انْشِقَاقٌ (دونوں حروف کے کھلنے کے ساتھ)"
      },
      {
        "en": "انْشَقٌّ",
        "ur": "انْشَقٌّ"
      },
      {
        "en": "تَشَقُّقٌ",
        "ur": "تَشَقُّقٌ"
      },
      {
        "en": "مُنْشَقٌّ",
        "ur": "مُنْشَقٌّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the Present Tense (فعل المضارع) of Muda'af verb 'انْصَبَّ' (to pour/gush down)?",
    "ur": "مضاعف فعل 'انْصَبَّ' (بہنا/انصباب ہونا) کا فعلِ مضارع کیا ہے؟",
    "options": [
      {
        "en": "يَنْصَبُّ (Yansabbu - with Fatha on Ayn and doubled Ba')",
        "ur": "يَنْصَبُّ (عین پر فتحہ اور تشدید کے ساتھ)"
      },
      {
        "en": "يَنْصِبُّ",
        "ur": "يَنْصِبُّ"
      },
      {
        "en": "يُنْصَبُ",
        "ur": "يُنْصَبُ"
      },
      {
        "en": "يَتَصَبَّبُ",
        "ur": "يَتَصَبَّبُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the Active Participle (اسم الفاعل) of Ajwaf verb 'انْقَادَ'?",
    "ur": "اجوف فعل 'انْقَادَ' کا اسمِ فاعل کیا ہے؟",
    "options": [
      {
        "en": "مُنْقَادٌ (Munqādun - taking Alif form for both active and contextual passive)",
        "ur": "مُنْقَادٌ (الف کے ساتھ)"
      },
      {
        "en": "مُنْقِيدٌ",
        "ur": "مُنْقِيدٌ"
      },
      {
        "en": "مُنْقَوِدٌ",
        "ur": "مُنْقَوِدٌ"
      },
      {
        "en": "قَائِدٌ",
        "ur": "قَائِدٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'إِذَا السَّمَاءُ انْشَقَّتْ' (Qur'an 84:1), how is 'انْشَقَّتْ' parsed?",
    "ur": "قرآنی آیہ 'إِذَا السَّمَاءُ انْشَقَّتْ' میں 'انْشَقَّتْ' کا کیا اعرابی منصب ہے؟",
    "options": [
      {
        "en": "Fi'l Madin from Form VII Muda'af Mabni on Fatha, Tā' is Tā' at-Ta'neeth, Fa'il is pronoun 'هي'",
        "ur": "فارم VII (مضاعف) سے فعلِ ماضی مبنی بر فتحہ، تاء تانیث، مع فاعل مستتر (هي)"
      },
      {
        "en": "Fi'l Mudari' Majzoom",
        "ur": "فعلِ مضارع مجزوم"
      },
      {
        "en": "Fi'l Amr Mabni",
        "ur": "فعلِ امر مبنی"
      },
      {
        "en": "Khabar Inna",
        "ur": "انّ کی خبر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'إِذَا السَّمَاءُ انْفَطَرَتْ' (Qur'an 82:1), what pattern does 'انْفَطَرَتْ' belong to?",
    "ur": "آیت مبارکہ 'إِذَا السَّمَاءُ انْفَطَرَتْ' میں فعل 'انْفَطَرَتْ' کس باب کا فعل ہے؟",
    "options": [
      {
        "en": "Form VII (باب انْفَعَلَ - showing Mutāwa'ah for Form I فَطَرَ)",
        "ur": "بابِ انْفَعَلَ (فارم VII - ثلاثی مجرد 'فطر' کی مطاوعت)"
      },
      {
        "en": "Form VIII (باب افتعل)",
        "ur": "بابِ افتعل"
      },
      {
        "en": "Form V (باب تفعل)",
        "ur": "بابِ تفعل"
      },
      {
        "en": "Form X (باب استفعل)",
        "ur": "بابِ استفعل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'فَانْفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْناً' (Qur'an 2:60), how is 'اثْنَتَا عَشْرَةَ' parsed?",
    "ur": "قرآنی آیہ 'فَانْفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْناً' میں 'اثْنَتَا عَشْرَةَ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Fa'il of 'انْفَجَرَتْ' Marfoo' with Alif because it is dual attached to 'عَشْرَةَ'",
        "ur": "فعل 'انْفَجَرَتْ' کا فاعل، تثنیہ ہونے کی بنا پر الف کے ساتھ مرفوع"
      },
      {
        "en": "Maf'ool Bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Tamyeez Mansoob",
        "ur": "تمیز منصوب"
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
    "en": "Parse the full sentence: 'انْصَرَفَ الطَّالِبُ انْصِرَافاً':",
    "ur": "پورے جملے 'انْصَرَفَ الطَّالِبُ انْصِرَافاً' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "انْصَرَفَ: فعل ماضٍ من باب انفعَلَ، الطَّالِبُ: فاعل مرفوع بالضمة، انْصِرَافاً: مفعول مطلق منصوب بالفتحة",
        "ur": "انْصَرَفَ: فعلِ ماضی (باب انفعل)، الطَّالِبُ: فاعل مرفوع بالضمة، انْصِرَافاً: مفعول مطلق منصوب بالفتحة"
      },
      {
        "en": "انصرف: مبتدأ، الطالب: خبر، انصرافاً: مفعول به",
        "ur": "انصرف مبتدأ، الطالب خبر، انصرافاً مفعول بہ"
      },
      {
        "en": "انصرف: حرف، الطالب: اسم مجرور، انصرافاً: حال",
        "ur": "انصرف حرف، الطالب اسم مجرور، انصرافاً حال"
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
    "en": "Which statement accurately summarizes the core features of Form VII (باب انْفَعَلَ)?",
    "ur": "سبق 22 میں بیان کردہ بابِ انْفَعَلَ کے بنیادی قوانین کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "It provides Mutāwa'ah for Form I transitive verbs, is ALWAYS strictly intransitive (لازم), forms no direct passive participle, and has Hamzat al-Wasl",
        "ur": "یہ فارم I متعدی فعل کا مطاوع ہے، ہمیشہ لازماً **لازم** ہوتا ہے، ڈائریکٹ اسمِ مفعول نہیں بناتا، اور اس کی ہمزہ ہمزہ وصل ہوتی ہے"
      },
      {
        "en": "It is always transitive with two objects",
        "ur": "یہ ہمیشہ متعدی ہوتا ہے"
      },
      {
        "en": "It is used only in condition sentences",
        "ur": "یہ صرف جملہ شرط میں آتا ہے"
      },
      {
        "en": "It has no present tense form",
        "ur": "اس کا مضارع نہیں آتا"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('🚀 Seeding Book 3 Lesson 22 Quiz...');
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

    // 3. Find or Create Lecture for Lesson 22
    let lectureId;
    const existingLec = await sql`
      SELECT id, title, order_index FROM lectures
      WHERE section_id = ${sectionId} AND order_index = 22
      LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 22 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 22', 22)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 22: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 22 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 22))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 22.`);
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

    // 5. Create the quiz for Book 3 Lesson 22
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 22 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 22 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
