import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is the primary derived verb pattern of Form X (باب اسْتَفْعَلَ) in Arabic?",
    "ur": "عربی زبان میں فارم X (بابِ اسْتَفْعَلَ) کا ماضی، مضارع، اور مصدر کا بنیادی وزن کیا ہے؟",
    "options": [
      {
        "en": "اسْتَفْعَلَ - يَسْتَفْعِلُ - اسْتِفْعَالاً",
        "ur": "اسْتَفْعَلَ - يَسْتَفْعِلُ - اسْتِفْعَالاً"
      },
      {
        "en": "انْفَعَلَ - يَنْفَعِلُ - انْفِعَالاً",
        "ur": "انْفَعَلَ - يَنْفَعِلُ - انْفِعَالاً"
      },
      {
        "en": "افْتَعَلَ - يَفْتَعِلُ - افْتِعَالاً",
        "ur": "افْتَعَلَ - يَفْتَعِلُ - افْتِعَالاً"
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
    "en": "What is the primary semantic function of Form X when used for 'At-Talab' (الطَّلَبُ, e.g., اسْتَغْفَرَ، اسْتَسْقَى)?",
    "ur": "جب بابِ اسْتَفْعَلَ 'طلب' (الطَّلَبُ) کے لیے آئے (مثلاً اسْتَغْفَرَ، اسْتَسْقَى) تو اس کا بنیادی مفہوم کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Seeking or requesting the action/root quality (e.g., seeking forgiveness or requesting rain)",
        "ur": "اصل فعل یا مصدر کے اثر کی طلب و سوال کرنا (جیسے مغفرت چاہنا یا بارش مانگنا)"
      },
      {
        "en": "Pretending or feigning a trait",
        "ur": "کسی صفت کا بنوٹ ساختہ مظاہرہ کرنا"
      },
      {
        "en": "Reciprocal participation between two parties",
        "ur": "دو فریقوں میں باہمی شرکت"
      },
      {
        "en": "Diminishing the noun in size",
        "ur": "اسم کا حجم چھوٹا کرنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What semantic meaning does Form X convey when used for 'Al-I'tiqād / At-Taḥawwul' (الاعْتِقَادُ / التَّحَوُّلُ, e.g., اسْتَحْسَنَ، اسْتَحْجَرَ)?",
    "ur": "جب بابِ اسْتَفْعَلَ 'اعتقاد یا تحول' کے لیے آئے (مثلاً اسْتَحْسَنَ، اسْتَحْجَرَ) تو اس کا کیا مطلب ہوتا ہے؟",
    "options": [
      {
        "en": "Believing something to have a quality (e.g., considering it good) OR transforming into a state (e.g., clay turning to stone)",
        "ur": "کسی چیز کو کسی صفت پر گمان کرنا (جیسے اچھا سمجھنا) یا کسی حالت میں منتقل و تبدیل ہو جانا (جیسے مٹی کا پتھر بن جانا)"
      },
      {
        "en": "Demanding money",
        "ur": "مال کا مطالبات کرنا"
      },
      {
        "en": "Prohibiting an action",
        "ur": "کسی عمل سے منع کرنا"
      },
      {
        "en": "Expressing fear",
        "ur": "خوف ظاہر کرنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Active Participle (اسم الفاعل) pattern for sound Form X verbs (e.g., اسْتَغْفَرَ)?",
    "ur": "صحیح فارم X افعال (مثلاً اسْتَغْفَرَ) کے اسمِ فاعل کا کیا وزن ہوتا ہے؟",
    "options": [
      {
        "en": "مُسْتَفْعِلٌ (Mustaf'ilun, e.g., مُسْتَغْفِرٌ)",
        "ur": "مُسْتَفْعِلٌ (مثلاً: مُسْتَغْفِرٌ)"
      },
      {
        "en": "مُسْتَفْعَلٌ",
        "ur": "مُسْتَفْعَلٌ"
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
    "en": "What is the Passive Participle (اسم المفعول) pattern for sound Form X verbs (e.g., اسْتَخْرَجَ)?",
    "ur": "صحیح فارم X افعال (مثلاً اسْتَخْرَجَ) کے اسمِ مفعول کا کیا وزن ہوتا ہے؟",
    "options": [
      {
        "en": "مُسْتَفْعَلٌ (Mustaf'alun, e.g., مُسْتَخْرَجٌ)",
        "ur": "مُسْتَفْعَلٌ (مثلاً: مُسْتَخْرَجٌ)"
      },
      {
        "en": "مُسْتَفْعِلٌ",
        "ur": "مُسْتَفْعِلٌ"
      },
      {
        "en": "مَفْعُولٌ",
        "ur": "مَفْعُولٌ"
      },
      {
        "en": "اسْتِفْعَالٌ",
        "ur": "اسْتِفْعَالٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What pattern does the Masdar of an Ajwaf verb take in Form X (e.g., اسْتَقَامَ)?",
    "ur": "بابِ اسْتَفْعَلَ میں اجوف فعل (مثلاً اسْتَقَامَ) کا مصدر کس خاص وزن پر آتا ہے؟",
    "options": [
      {
        "en": "اسْتِفَالَةٌ (Istifālatun, e.g., اسْتِقَامَةٌ, replacing the dropped Waw/Yā' with Tā' Marbooṭah at the end)",
        "ur": "اسْتِفَالَةٌ (مثلاً: اسْتِقَامَةٌ، جہاں حذف شدہ عین کی جگہ آخر میں تاء مربوطہ لائی جاتی ہے)"
      },
      {
        "en": "اسْتِفْعَالٌ",
        "ur": "اسْتِفْعَالٌ"
      },
      {
        "en": "تَفْعِيلٌ",
        "ur": "تَفْعِيلٌ"
      },
      {
        "en": "مُسْتَفَعٌّ",
        "ur": "مُسْتَفَعٌّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the three core patterns for Diminutive Nouns (تَصْغِيرُ الأَسْمَاءِ) in Arabic grammar?",
    "ur": "عربی گرامر میں اسمِ تصغیر (چھوٹا ظاہر کرنے) کے تین بنیادی اوزان کون سے ہیں؟",
    "options": [
      {
        "en": "فُعَيْلٌ (for 3-letter nouns), فُعَيْعِلٌ (for 4-letter nouns), and فُعَيْعِيلٌ (for 5-letter nouns with madd before the end)",
        "ur": "فُعَيْلٌ (ثلاثی کے لیے)، فُعَيْعِلٌ (رباعی کے لیے)، اور فُعَيْعِيلٌ (خماسی مع حرفِ مد کے لیے)"
      },
      {
        "en": "فَاعِلٌ، مَفْعُولٌ، فَعَّالٌ",
        "ur": "فَاعِلٌ، مَفْعُولٌ، فَعَّالٌ"
      },
      {
        "en": "أَفْعَلُ، فُعْلاَى، فُعَالٌ",
        "ur": "أَفْعَلُ، فُعْلاَى، فُعَالٌ"
      },
      {
        "en": "فَعَلَ، يَفْعُلُ، فُعُولٌ",
        "ur": "فَعَلَ، يَفْعُلُ، فُعُولٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When forming the diminutive of a 3-letter feminine noun lacking Tā' Marbooṭah (e.g., شَمْسٌ، أَرْضٌ), what morphological addition occurs?",
    "ur": "جب تاء مربوطہ سے خالی تین حرفی مؤنث اسم (مثلاً شَمْسٌ، أَرْضٌ) کی تصغیر بنائی جائے تو کیا صرفی اضافہ ہوتا ہے؟",
    "options": [
      {
        "en": "Tā' Marbooṭah is attached at the end (e.g., شُمَيْسَةٌ، أُرَيْضَةٌ)",
        "ur": "آخر میں تاء مربوطہ کا اضافہ کر دیا جاتا ہے (جیسے: شُمَيْسَةٌ، أُرَيْضَةٌ)"
      },
      {
        "en": "Alif Maqsoourah is added",
        "ur": "الفِ مقصورہ کا اضافہ"
      },
      {
        "en": "No change occurs at all",
        "ur": "کوئی تبدیلی نہیں ہوتی"
      },
      {
        "en": "The first letter is omitted",
        "ur": "پہلا حرف حذف کر دیا جاتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the syntactic style of 'Al-Ighrā'' (الإِغْرَاءُ, e.g., الصَّلاَةَ الصَّلاَةَ!) in Arabic grammar?",
    "ur": "عربی گرامر میں 'اسلوبِ إغراء' (مثلاً الصَّلاَةَ الصَّلاَةَ!) سے کیا مراد ہے؟",
    "options": [
      {
        "en": "Urging someone towards a praiseworthy action by putting the noun in Mansoob due to an omitted verb 'الْزَمْ' (Keep to...)",
        "ur": "محذوف فعل 'الْزَمْ' (پابندی کرو) کی بنا پر اسم کو منصوب کر کے کسی پسندیدہ و قابلِ تعریف عمل پر ابھارنا"
      },
      {
        "en": "Warning someone against a dangerous action",
        "ur": "کسی خطرناک چیز سے ڈرانا"
      },
      {
        "en": "Making an exception using Illa",
        "ur": "إلا کے ذریعے استثناء کرنا"
      },
      {
        "en": "Calling someone with Nida'",
        "ur": "حرفِ نداء سے پکارنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the syntactic style of 'At-Taḥdhīr' (التَّحْذِيرُ, e.g., إِيَّاكَ وَالكَذِبَ!) in Arabic grammar?",
    "ur": "عربی گرامر میں 'اسلوبِ تحذیر' (مثلاً إِيَّاكَ وَالكَذِبَ!) سے کیا مراد ہے؟",
    "options": [
      {
        "en": "Warning someone against a harmful thing by putting the noun in Mansoob due to an omitted verb 'احْذَرْ' (Beware of...)",
        "ur": "محذوف فعل 'احْذَرْ' (بچو!) کی بنا پر اسم کو منصوب کر کے کسی ناپسندیدہ یا نقصان دہ چیز سے ڈرانا و خبردار کرنا"
      },
      {
        "en": "Praising a good quality",
        "ur": "کسی اچھی صفت کی تعریف کرنا"
      },
      {
        "en": "Taking an oath",
        "ur": "قسم اٹھانا"
      },
      {
        "en": "Describing colors",
        "ur": "رنگوں کا بیان"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, what is the Masdar of Form X verb 'اسْتَخْرَجَ' (to extract)?",
    "ur": "تمرين 1 کے مطابق فارم X فعل 'اسْتَخْرَجَ' (نکالنا) کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "اسْتِخْرَاجٌ (Istikhrājun)",
        "ur": "اسْتِخْرَاجٌ"
      },
      {
        "en": "تَخْرِيجٌ",
        "ur": "تَخْرِيجٌ"
      },
      {
        "en": "إِخْرَاجٌ",
        "ur": "إِخْرَاجٌ"
      },
      {
        "en": "مُسْتَخْرَجَةٌ",
        "ur": "مُسْتَخْرَجَةٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Form the Imperative (فعل الأمر) for Form X verb 'اسْتَغْفَرَ' (to seek forgiveness):",
    "ur": "فعل 'اسْتَغْفَرَ' (مغفرت چاہنا) کا فعلِ امر کیا ہوگا؟",
    "options": [
      {
        "en": "اسْتَغْفِرْ (Istaghfir - with Kasra on Fā' and Sukoon on Rā')",
        "ur": "اسْتَغْفِرْ (فاء پر کسرہ اور راء پر سکون کے ساتھ)"
      },
      {
        "en": "اسْتَغْفَرُ",
        "ur": "اسْتَغْفَرُ"
      },
      {
        "en": "أَغْفِرْ",
        "ur": "أَغْفِرْ"
      },
      {
        "en": "تَغَفَّرْ",
        "ur": "تَغَفَّرْ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the Present Tense (فعل المضارع) of Form X verb 'اسْتَحْسَنَ' (to deem good)?",
    "ur": "فعل 'اسْتَحْسَنَ' (اچھا جاننا) کا فعلِ مضارع کیا ہے؟",
    "options": [
      {
        "en": "يَسْتَحْسِنُ (Yastahsinu - with Kasra on Seen)",
        "ur": "يَسْتَحْسِنُ (سین پر کسرہ کے ساتھ)"
      },
      {
        "en": "يُحْسِنُ",
        "ur": "يُحْسِنُ"
      },
      {
        "en": "يَتَحَسَّنُ",
        "ur": "يَتَحَسَّنُ"
      },
      {
        "en": "يَحْسُنُ",
        "ur": "يَحْسُنُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the Active Participle (اسم الفاعل) of Form X verb 'اسْتَقْبَلَ' (to receive/welcome)?",
    "ur": "فعل 'اسْتَقْبَلَ' (استقبال کرنا) کا اسمِ فاعل کیا ہے؟",
    "options": [
      {
        "en": "مُسْتَقْبِلٌ (Mustaqbilun - with Kasra on Bā')",
        "ur": "مُسْتَقْبِلٌ (باء پر کسرہ کے ساتھ)"
      },
      {
        "en": "مُسْتَقْبَلٌ",
        "ur": "مُسْتَقْبَلٌ"
      },
      {
        "en": "قَابِلٌ",
        "ur": "قَابِلٌ"
      },
      {
        "en": "مَقْبُولٌ",
        "ur": "مَقْبُولٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, in 'اسْتَغْفَرْتُ اللَّهَ' (I sought Allah's forgiveness), what semantic meaning of Form X is shown?",
    "ur": "تمرين 2 کے مطابق 'اسْتَغْفَرْتُ اللَّهَ' میں فارم X کا کون سا معنوی پہلو ظاہر ہوتا ہے؟",
    "options": [
      {
        "en": "At-Talab (الطَّلَبُ - requesting/seeking forgiveness)",
        "ur": "الطَّلَبُ (مغفرت کی طلب و سوال کرنا)"
      },
      {
        "en": "At-Taḥawwul",
        "ur": "التحول"
      },
      {
        "en": "Al-I'tiqād",
        "ur": "الاعتقاد"
      },
      {
        "en": "At-Tazāhur",
        "ur": "التظاهر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'اسْتَحْجَرَ الطِّينُ' (The clay turned into stone), what semantic meaning of Form X is shown?",
    "ur": "جملے 'اسْتَحْجَرَ الطِّينُ' میں فارم X کا کون سا معنوی پہلو ظاہر ہوتا ہے؟",
    "options": [
      {
        "en": "At-Taḥawwul / At-Taṣyeer (التَّحَوُّلُ / التَّصْيِيرُ - transformation into stone)",
        "ur": "التَّحَوُّلُ / التَّصْيِيرُ (پتھر کی مانند سخت ہو کر بدل جانا)"
      },
      {
        "en": "At-Talab",
        "ur": "الطلب"
      },
      {
        "en": "Al-Mushārakah",
        "ur": "المشاركة"
      },
      {
        "en": "At-Tasgher",
        "ur": "التصغير"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'اسْتَعْظَمْتُ الأَمْرَ' (I deemed the matter grand/serious), what semantic meaning of Form X is shown?",
    "ur": "جملے 'اسْتَعْظَمْتُ الأَمْرَ' میں فارم X کا کون سا معنوی پہلو ظاہر ہوتا ہے؟",
    "options": [
      {
        "en": "Al-I'tiqād / Al-Ḥusbān (الاعْتِقَادُ / الحُسْبَانُ - believing the matter to be grand)",
        "ur": "الاعْتِقَادُ / الحُسْبَانُ (معاملے کو بڑا و سنگین گمان کرنا)"
      },
      {
        "en": "At-Talab",
        "ur": "الطلب"
      },
      {
        "en": "Al-Mutāwa'ah",
        "ur": "المطاوعة"
      },
      {
        "en": "At-Taḥdhīr",
        "ur": "التحذير"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'أَحْكَمْتُ الْبِنَاءَ فَاسْتَحْكَمَ' (I made the structure firm, so it became firm), what semantic relationship exists between 'أَحْكَمَ' and 'اسْتَحْكَمَ'?",
    "ur": "جملے 'أَحْكَمْتُ الْبِنَاءَ فَاسْتَحْكَمَ' میں 'أَحْكَمَ' (فارم IV) اور 'اسْتَحْكَمَ' (فارم X) کا کیا معنوی تعلق ہے؟",
    "options": [
      {
        "en": "Al-Mutāwa'ah for Form IV 'أَفْعَلَ' (المُطَاوَعَةُ لِـ أَفْعَلَ)",
        "ur": "المُطَاوَعَةُ لِـ أَفْعَلَ (بابِ افعال کے فعل کا اثر قبول کرنا)"
      },
      {
        "en": "At-Talab",
        "ur": "الطلب"
      },
      {
        "en": "At-Tazāhur",
        "ur": "التظاهر"
      },
      {
        "en": "Al-Ighrā'",
        "ur": "الإغراء"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, what is the Present Tense (فعل المضارع) of Ajwaf verb 'اسْتَقَامَ' (to stand straight)?",
    "ur": "تمرين 3 کے مطابق اجوف فعل 'اسْتَقَامَ' (سیدھا قائم ہونا) کا فعلِ مضارع کیا ہے؟",
    "options": [
      {
        "en": "يَسْتَقِيمُ (Yastaqīmu - ending in Yā' before Meem)",
        "ur": "يَسْتَقِيمُ (میم سے پہلے یاء کے ساتھ)"
      },
      {
        "en": "يَسْتَقُومُ",
        "ur": "يَسْتَقُومُ"
      },
      {
        "en": "يَسْتَقَامُ",
        "ur": "يَسْتَقَامُ"
      },
      {
        "en": "يُقِيمُ",
        "ur": "يُقِيمُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Masdar of Ajwaf verb 'اسْتَشَارَ' (to consult)?",
    "ur": "اجوف فعل 'اسْتَشَارَ' (مشورہ مانگنا) کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "اسْتِشَارَةٌ (Istishāratun - on pattern اسْتِفَالَةٌ)",
        "ur": "اسْتِشَارَةٌ (وزن اسْتِفَالَةٌ پر)"
      },
      {
        "en": "اسْتِشْيَارٌ",
        "ur": "اسْتِشْيَارٌ"
      },
      {
        "en": "مشاورة",
        "ur": "مشاورة"
      },
      {
        "en": "إشارة",
        "ur": "إشارة"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Masdar of Naqis verb 'اسْتَدْعَى' (root د-ع-و)?",
    "ur": "ناقص فعل 'اسْتَدْعَى' (بلانا/استدعا کرنا) کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "اسْتِدْعَاءٌ (Istid'ā'un - with Hamzah at the end)",
        "ur": "اسْتِدْعَاءٌ (آخر میں ہمزہ کے ساتھ)"
      },
      {
        "en": "اسْتِدْعَايٌ",
        "ur": "اسْتِدْعَايٌ"
      },
      {
        "en": "دعوة",
        "ur": "دعوة"
      },
      {
        "en": "تداعي",
        "ur": "تداعي"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Masdar of Muda'af verb 'اسْتَعَدَّ' (to prepare oneself)?",
    "ur": "مضاعف فعل 'اسْتَعَدَّ' (تیاری کرنا/استعداد بننا) کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "اسْتِعْدَادٌ (Isti'dādun - where the doubled letters unpack)",
        "ur": "اسْتِعْدَادٌ (دونوں حرفوں کے کھلنے کے ساتھ)"
      },
      {
        "en": "اسْتَعَدٌّ",
        "ur": "اسْتَعَدٌّ"
      },
      {
        "en": "إعداد",
        "ur": "إعداد"
      },
      {
        "en": "مستعد",
        "ur": "مستعد"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, form the diminutive (تصغير) of the 3-letter noun 'جَبَلٌ' (mountain):",
    "ur": "تمرين 4 کے مطابق تین حرفی اسم 'جَبَلٌ' (پہاڑ) کی تصغیر کیا ہوگی؟",
    "options": [
      {
        "en": "جُبَيْلٌ (Jubaylun - on pattern فُعَيْلٌ)",
        "ur": "جُبَيْلٌ (وزن فُعَيْلٌ پر)"
      },
      {
        "en": "جُبَيْلَةٌ",
        "ur": "جُبَيْلَةٌ"
      },
      {
        "en": "مُجَيْبِلٌ",
        "ur": "مُجَيْبِلٌ"
      },
      {
        "en": "أَجْبَالٌ",
        "ur": "أَجْبَالٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Form the diminutive (تصغير) of the 4-letter noun 'دِرْهَمٌ':",
    "ur": "چار حرفی اسم 'دِرْهَمٌ' کی تصغیر کیا ہوگی؟",
    "options": [
      {
        "en": "دُرَيْهِمٌ (Durayhimun - on pattern فُعَيْعِلٌ)",
        "ur": "دُرَيْهِمٌ (وزن فُعَيْعِلٌ پر)"
      },
      {
        "en": "دُرَيْهيمٌ",
        "ur": "دُرَيْهيمٌ"
      },
      {
        "en": "دُرَيْمٌ",
        "ur": "دُرَيْمٌ"
      },
      {
        "en": "مُدَيْرهِمٌ",
        "ur": "مُدَيْرهِمٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Form the diminutive (تصغير) of 'مِفْتَاحٌ' (key - 5 letters with madd before end):",
    "ur": "اسم 'مِفْتَاحٌ' (چابی) کی تصغیر کیا ہوگی؟",
    "options": [
      {
        "en": "مُفَيْتِيحٌ (Mufaytīḥun - on pattern فُعَيْعِيلٌ)",
        "ur": "مُفَيْتِيحٌ (وزن فُعَيْعِيلٌ پر)"
      },
      {
        "en": "مُفَيْتِحٌ",
        "ur": "مُفَيْتِحٌ"
      },
      {
        "en": "مُفَيْتَحٌ",
        "ur": "مُفَيْتَحٌ"
      },
      {
        "en": "فُتَيْحٌ",
        "ur": "فُتَيْحٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Form the diminutive (تصغير) of the noun 'أَخٌ' (brother - whose 3rd root letter was omitted):",
    "ur": "حذف شدہ حرف پر مشتمل تین حرفی اسم 'أَخٌ' (بھائی) کی تصغیر کیا ہوگی؟",
    "options": [
      {
        "en": "أُخَيٌّ (Ukhayyun - restoring the third radical as Yā' with Tashdeed)",
        "ur": "أُخَيٌّ (حذف شدہ حرف کو یاءِ مشدد سے لوٹا کر)"
      },
      {
        "en": "أُخَيَّةٌ",
        "ur": "أُخَيَّةٌ"
      },
      {
        "en": "أُخَيْلٌ",
        "ur": "أُخَيْلٌ"
      },
      {
        "en": "أَخِى",
        "ur": "أَخِى"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In Exercise 5, in 'إِيَّاكَ وَالكَذِبَ!' (Beware of lying!), how is 'إِيَّاكَ' parsed?",
    "ur": "تمرين 5 کے مطابق 'إِيَّاكَ وَالكَذِبَ!' میں لفظ 'إِيَّاكَ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Detached Pronoun in position of Nasb as Maf'ool Bihi for an omitted imperative verb 'احْذَرْ' / 'أُحَذِّرُ'",
        "ur": "محذوف فعل 'احْذَرْ' / 'أُحَذِّرُ' کا مفعول بہ منصوب (ضمير منفصل في محل نصب)"
      },
      {
        "en": "Mubtada' Marfoo'",
        "ur": "مبتدأ مرفوع"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Ism Inna",
        "ur": "اسم انّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'الصَّلاَةَ الصَّلاَةَ!' (Keep strictly to prayer!), how is the FIRST 'الصَّلاَةَ' parsed?",
    "ur": "جملے 'الصَّلاَةَ الصَّلاَةَ!' میں پہلا لفظ 'الصَّلاَةَ' کا کیا نحوی اعراب ہے؟",
    "options": [
      {
        "en": "Mansoob on Ighrā' as Maf'ool Bihi for an omitted verb 'الْزَمْ' (منصوب على الإغراء بفعل محذوف تقديره الْزَمْ)",
        "ur": "محذوف فعل 'الْزَمْ' کے لیے مفعول بہ منصوب علی الإغراء"
      },
      {
        "en": "Mubtada' Marfoo'",
        "ur": "مبتدأ مرفوع"
      },
      {
        "en": "Tawkeed Lafzī",
        "ur": "توکید لفظی"
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
    "en": "In the Quranic verse 'فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّاراً' (Qur'an 71:10), how is 'اسْتَغْفِرُوا' parsed?",
    "ur": "قرآنی آیہ 'فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ' میں 'اسْتَغْفِرُوا' کا کیا اعرابی تجزیہ ہے؟",
    "options": [
      {
        "en": "Fi'l Amr from Form X Mabni on deletion of Noon, Waw is Fa'il (فعل أمر من باب استفعل مبني على حذف النون والواو فاعل)",
        "ur": "فارم X سے فعلِ امر مبنی بر حذف النون، مع واؤ فاعل"
      },
      {
        "en": "Fi'l Mudari' Majzoom",
        "ur": "فعلِ مضارع مجزوم"
      },
      {
        "en": "Fi'l Madin Mabni",
        "ur": "فعلِ ماضی مبنی"
      },
      {
        "en": "Ism Fa'il Marfoo'",
        "ur": "اسمِ فاعل مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'اسْتَغْفَرَ الـمُسْتَغْفِرُ اسْتِغْفَاراً':",
    "ur": "پورے جملے 'اسْتَغْفَرَ الـمُسْتَغْفِرُ اسْتِغْفَاراً' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "اسْتَغْفَرَ: فعل ماضٍ من باب استفعلَ، الـمُسْتَغْفِرُ: فاعل مرفوع بالضمة (اسم فاعل)، اسْتِغْفَاراً: مفعول مطلق منصوب بالفتحة",
        "ur": "اسْتَغْفَرَ: فعلِ ماضی (باب استفعل)، الـمُسْتَغْفِرُ: فاعل مرفوع بالضمة (اسم فاعل)، اسْتِغْفَاراً: مفعول مطلق منصوب بالفتحة"
      },
      {
        "en": "استغفر: مبتدأ، المستغفر: خبر، استغفاراً: مفعول به",
        "ur": "استغفر مبتدأ، المستغفر خبر، استغفاراً مفعول بہ"
      },
      {
        "en": "استغفر: حرف، المستغفر: اسم مجرور، استغفاراً: حال",
        "ur": "استغفر حرف، المستغفر اسم مجرور، استغفاراً حال"
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
    "en": "Which statement accurately summarizes the core grammar rules taught in Lesson 25?",
    "ur": "سبق 25 کے بنیادی گرامر موضوعات کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers Form X (اسْتَفْعَلَ) and its meanings (Talab, Taḥawwul, Mutāwa'ah), weak/doubled verb conjugation, 3 patterns of Diminutives (تصغير الأسماء), and styles of Ighrā' and Taḥdhīr",
        "ur": "اس سبق میں بابِ استفعل (معانیِ طلب، تحول، مطاوعت)، معتل و مضاعف کی گردان، تصغیر کے 3 اوزان، اور اسلوبِ إغراء و تحذیر کا کامل احاطہ کیا گیا ہے"
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
  console.log('🚀 Seeding Book 3 Lesson 25 Quiz...');
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

    // 3. Find or Create Lecture for Lesson 25
    let lectureId;
    const existingLec = await sql`
      SELECT id, title, order_index FROM lectures
      WHERE section_id = ${sectionId} AND order_index = 25
      LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 25 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 25', 25)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 25: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 25 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 25))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 25.`);
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

    // 5. Create the quiz for Book 3 Lesson 25
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 25 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 25 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
