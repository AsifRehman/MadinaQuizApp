import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is the primary derived verb pattern of Form VI (باب تَفَاعَلَ) in Arabic?",
    "ur": "عربی زبان میں فارم VI (بابِ تَفَاعَلَ) کا ماضی، مضارع، اور مصدر کا بنیادی وزن کیا ہے؟",
    "options": [
      {
        "en": "تَفَاعَلَ - يَتَفَاعَلُ - تَفَاعُلاً",
        "ur": "تَفَاعَلَ - يَتَفَاعَلُ - تَفَاعُلاً"
      },
      {
        "en": "تَفَعَّلَ - يَتَفَعَّلُ - تَفَعُّلاً",
        "ur": "تَفَعَّلَ - يَتَفَعَّلُ - تَفَعُّلاً"
      },
      {
        "en": "فَاعَلَ - يُفَاعِلُ - مُفَاعَلَةً",
        "ur": "فَاعَلَ - يُفَاعِلُ - مُفَاعَلَةً"
      },
      {
        "en": "انْفَعَلَ - يَنْفَعِلُ - انْفِعَالاً",
        "ur": "انْفَعَلَ - يَنْفَعِلُ - انْفِعَالاً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When Form VI expresses 'Al-Mushārakah' (المُشَارَكَةُ, e.g., تَصَافَحَ زَيْدٌ وَعَمْرٌو), how does it differ from Form III (فَاعَلَ) in subject case structure?",
    "ur": "جب بابِ تَفَاعَلَ باہمی شرکت (المشاركة) کے لیے آئے (مثلاً تَصَافَحَ زَيْدٌ وَعَمْرٌو) تو اعرابی ساخت میں یہ بابِ فَاعَلَ سے کیسے مختلف ہوتا ہے؟",
    "options": [
      {
        "en": "In Form VI, both participating parties become Marfoo' subjects (فاعل), whereas in Form III one is Subject and the other is Object (مفعول به)",
        "ur": "بابِ تفاعل میں دونوں فریق مرفوع فاعل بنتے ہیں، جبکہ بابِ فاعل میں ایک فاعل اور دوسرا مفعول بہ بنتا ہے"
      },
      {
        "en": "In Form VI, both parties become Mansoob objects",
        "ur": "بابِ تفاعل میں دونوں فریق منصوب مفعول بنتے ہیں"
      },
      {
        "en": "Form VI requires a preposition for both subjects",
        "ur": "بابِ تفاعل میں دونوں فاعلوں کے لیے حرفِ جر ضروری ہے"
      },
      {
        "en": "There is no structural difference between them",
        "ur": "دونوں کے اعرابی نظام میں کوئی فرق نہیں ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What meaning does Form VI express when used for 'At-Tazāhur' (التَّظَاهُرُ بِمَا لَيْسَ فِي الحَقِيقَةِ, e.g., تَمَارَضَ، تَجَاهَلَ)?",
    "ur": "جب بابِ تَفَاعَلَ 'تظاہر' (التظاهر بما ليس في الحقيقة) کے لیے استعمال ہو (جیسے تَمَارَضَ، تَجَاهَلَ) تو اس سے کیا مراد ہوتا ہے؟",
    "options": [
      {
        "en": "Pretending or feigning a state/quality that is not actually present in reality",
        "ur": "کسی ایسی صفت یا حالت کا جھوٹا دکھاوا و تظاہر کرنا جو حقیقت میں موجود نہ ہو"
      },
      {
        "en": "Repeating an action multiple times",
        "ur": "کسی عمل کو بار بار دہرانا"
      },
      {
        "en": "Forcing someone to perform an action",
        "ur": "کسی پر عمل زبردستی مسلط کرنا"
      },
      {
        "en": "Asking for forgiveness",
        "ur": "استغفار و معافی مانگنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What morphological simplification is permitted in present tense Form VI when two Tās meet (e.g., تَتَسَاءَلُونَ)?",
    "ur": "فارم VI کے فعلِ مضارع میں جب دو تائیں اکٹھی ہو جائیں (مثلاً تَتَسَاءَلُونَ) تو کیا صرفی تخفیف جائز ہوتی ہے؟",
    "options": [
      {
        "en": "Permissible to delete one of the two Tās for lightness (حَذْفُ إِحْدَى التَّائَيْنِ, e.g., تَسَاءَلُونَ)",
        "ur": "تخفیف کی بنا پر دو میں سے ایک تاء کو حذف کرنا جائز ہے (جیسے: تَسَاءَلُونَ)"
      },
      {
        "en": "Mandatory to replace the second Tā' with Yā'",
        "ur": "دوسری تاء کو یاء سے بدلنا واجب ہے"
      },
      {
        "en": "Mandatory to change the verb into past tense",
        "ur": "فعل کو ماضی میں بدلنا لازم ہے"
      },
      {
        "en": "No deletion is allowed",
        "ur": "کوئی حذف جائز نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is the verbal noun (مصدر) formed for defective Form VI verbs ending in Alif (e.g., تَنَاسَى)?",
    "ur": "الف پر ختم ہونے والے ناقص فارم VI افعال (مثلاً تَنَاسَى) کے مصدر کا کیا اعرابی و صرفی وزن بنتا ہے؟",
    "options": [
      {
        "en": "The Damma on Ayn changes to Kasra, yielding 'تَفَاعٍ' (e.g., تَنَاسٍ / التَّنَاسِي)",
        "ur": "عین کلمہ کا ضمہ کسرہ سے بدل کر وزن 'تَفَاعٍ' بنتا ہے (جیسے: تَنَاسٍ / التَّنَاسِي)"
      },
      {
        "en": "It changes to 'تَفَاعُلَةٌ'",
        "ur": "یہ وزن 'تَفَاعُلَةٌ' میں بدل جاتا ہے"
      },
      {
        "en": "It takes the pattern 'إِفْعَالٌ'",
        "ur": "یہ 'إِفْعَالٌ' کا وزن لیتا ہے"
      },
      {
        "en": "It takes the pattern 'تَفْعِيلٌ'",
        "ur": "یہ 'تَفْعِيلٌ' کا وزن لیتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What meaning does Form VI convey when indicating 'At-Tadarruj' (التَّدَرُّجُ, e.g., تَزَايَدَ المَطَرُ)?",
    "ur": "جب بابِ تَفَاعَلَ 'تدرج' (التدرج) کے معنی میں آئے (مثلاً تَزَايَدَ المَطَرُ) تو اس کا کیا مفہوم ہوتا ہے؟",
    "options": [
      {
        "en": "Gradual progression or step-by-step occurrence of the action over time",
        "ur": "تدریجی اضافہ یا وقت کے ساتھ ساتھ قدم بہ قدم عمل کا واقع ہونا"
      },
      {
        "en": "Sudden one-time occurrence",
        "ur": "ایک دم اچانک واقع ہونا"
      },
      {
        "en": "Total cessation of the action",
        "ur": "عمل کا مکمل طور پر رک جانا"
      },
      {
        "en": "Commanding others to act",
        "ur": "دوسروں کو حکم دینا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Active Participle (اسم الفاعل) pattern for Form VI verbs (e.g., تَشَاوَرَ)?",
    "ur": "فارم VI افعال (مثلاً تَشَاوَرَ) کے اسمِ فاعل کا کیا وزن ہوتا ہے؟",
    "options": [
      {
        "en": "مُتَفَاعِلٌ (Mutafā'ilun, e.g., مُتَشَاوِرٌ)",
        "ur": "مُتَفَاعِلٌ (مثلاً: مُتَشَاوِرٌ)"
      },
      {
        "en": "مُتَفَاعَلٌ",
        "ur": "مُتَفَاعَلٌ"
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
    "en": "What is the Passive Participle (اسم المفعول) pattern for Form VI verbs (e.g., تَجَاهَلَ)?",
    "ur": "فارم VI افعال (مثلاً تَجَاهَلَ) کے اسمِ مفعول کا کیا وزن ہوتا ہے؟",
    "options": [
      {
        "en": "مُتَفَاعَلٌ (Mutafā'alun, e.g., مُتَجَاهَلٌ)",
        "ur": "مُتَفَاعَلٌ (مثلاً: مُتَجَاهَلٌ)"
      },
      {
        "en": "مُتَفَاعِلٌ",
        "ur": "مُتَفَاعِلٌ"
      },
      {
        "en": "مَفْعُولٌ",
        "ur": "مَفْعُولٌ"
      },
      {
        "en": "تَفَاعُلٌ",
        "ur": "تَفَاعُلٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Masdar pattern for sound Form VI verbs (e.g., تَكَاسَلَ)?",
    "ur": "صحیح فارم VI افعال (مثلاً تَكَاسَلَ) کے مصدر کا کیا وزن ہوتا ہے؟",
    "options": [
      {
        "en": "تَفَاعُلٌ (Tafā'ulun, e.g., تَكَاسُلٌ)",
        "ur": "تَفَاعُلٌ (مثلاً: تَكَاسُلٌ)"
      },
      {
        "en": "تَفْعِيلٌ",
        "ur": "تَفْعِيلٌ"
      },
      {
        "en": "مُفَاعَلَةٌ",
        "ur": "مُفَاعَلَةٌ"
      },
      {
        "en": "تَفَعُّلٌ",
        "ur": "تَفَعُّلٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'بَاعَدْتُهُ فَتَبَاعَدَ', what semantic role does Form VI 'تَبَاعَدَ' play relative to Form III 'بَاعَدَ'?",
    "ur": "جملے 'بَاعَدْتُهُ فَتَبَاعَدَ' میں بابِ تفاعل 'تَبَاعَدَ' کا بابِ فاعل 'بَاعَدَ' کے ساتھ کیا معنوی تعلق ہے؟",
    "options": [
      {
        "en": "Al-Mutāwa'ah (مطاوعة - accepting the effect of Form III action)",
        "ur": "المطاوعة (بابِ فاعل کے فعل کا اثر و نتیجہ قبول کرنا)"
      },
      {
        "en": "Feigning/Pretending",
        "ur": "جھوٹا تظاہر کرنا"
      },
      {
        "en": "Asking for help",
        "ur": "مدد مانگنا"
      },
      {
        "en": "Negative prohibition",
        "ur": "نہی و ممانعت"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, what is the Masdar of Form VI verb 'تَعَاوَنَ'?",
    "ur": "تمرين 1 کے مطابق فارم VI فعل 'تَعَاوَنَ' کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "تَعَاوُنٌ (Ta'āwunun)",
        "ur": "تَعَاوُنٌ"
      },
      {
        "en": "معاونة",
        "ur": "معاونة"
      },
      {
        "en": "إعانة",
        "ur": "إعانة"
      },
      {
        "en": "تعاوين",
        "ur": "تعاوين"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Form the Imperative (فعل الأمر) for Form VI verb 'تَشَاوَرَ' (to consult mutually):",
    "ur": "فعل 'تَشَاوَرَ' (باہمی مشورہ کرنا) کا فعلِ امر کیا ہوگا؟",
    "options": [
      {
        "en": "تَشَاوَرْ (Tashāwar - with Sukoon on Rā')",
        "ur": "تَشَاوَرْ (راء پر سکون کے ساتھ)"
      },
      {
        "en": "تَشَاوَرُ",
        "ur": "تَشَاوَرُ"
      },
      {
        "en": "أَشَاوِرْ",
        "ur": "أَشَاوِرْ"
      },
      {
        "en": "تَشَاوُرٌ",
        "ur": "تَشَاوُرٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the Active Participle (اسم الفاعل) of Form VI verb 'تَكَاثَرَ'?",
    "ur": "فعل 'تَكَاثَرَ' کا اسمِ فاعل کیا ہے؟",
    "options": [
      {
        "en": "مُتَكَاثِرٌ (Mutakāthirun - with Kasra on Tha')",
        "ur": "مُتَكَاثِرٌ (ثاء پر کسرہ کے ساتھ)"
      },
      {
        "en": "مُتَكَاثَرٌ",
        "ur": "مُتَكَاثَرٌ"
      },
      {
        "en": "كَاثِرٌ",
        "ur": "كَاثِرٌ"
      },
      {
        "en": "تكاثُرٌ",
        "ur": "تكاثُرٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the Present Tense (فعل المضارع) of Form VI verb 'تَجَاهَلَ' (to pretend ignorance)?",
    "ur": "فعل 'تَجَاهَلَ' (انجان بننا) کا فعلِ مضارع کیا ہے؟",
    "options": [
      {
        "en": "يَتَجَاهَلُ (Yatajāhalu)",
        "ur": "يَتَجَاهَلُ"
      },
      {
        "en": "يُجَاهِلُ",
        "ur": "يُجَاهِلُ"
      },
      {
        "en": "يَجْهَلُ",
        "ur": "يَجْهَلُ"
      },
      {
        "en": "يَسْتَجْهِلُ",
        "ur": "يَسْتَجْهِلُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, in 'تَمَارَضَ العَامِلُ' (The worker feigned illness), what does 'تَمَارَضَ' express?",
    "ur": "تمرين 2 کے مطابق 'تَمَارَضَ العَامِلُ' میں فعل 'تَمَارَضَ' کا کیا معنی ہے؟",
    "options": [
      {
        "en": "Pretending/feigning illness while not actually sick (التظاهر بالمَـرَض)",
        "ur": "بیمار نہ ہونے کے باوجود بیماری کا جھوٹا دکھاوا کرنا (تظاهر بالمرض)"
      },
      {
        "en": "Becoming severely ill in reality",
        "ur": "حقیقت میں شدید بیمار ہو جانا"
      },
      {
        "en": "Visiting a sick person",
        "ur": "کسی بیمار کی عیادت کرنا"
      },
      {
        "en": "Curing a patient",
        "ur": "کسی مریض کا علاج کرنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'تَصَافَحَ الصَّدِيقَانِ' (The two friends shook hands), what semantic feature of Form VI is illustrated?",
    "ur": "جملے 'تَصَافَحَ الصَّدِيقَانِ' میں فارم VI کی کون سی معنوی خصوصیت ظاہر ہوتی ہے؟",
    "options": [
      {
        "en": "Al-Mushārakah (المشاركة - mutual action between two participants)",
        "ur": "المشاركة (دو فریقوں میں باہمی مصافحہ و عمل)"
      },
      {
        "en": "Pretending/feigning",
        "ur": "جھوٹا تظاہر کرنا"
      },
      {
        "en": "Asking for something",
        "ur": "طلب کرنا"
      },
      {
        "en": "Passive compulsion",
        "ur": "مجبوری"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'تَنَاوَمَ الكَسْلاَنُ' (The lazy person pretended to sleep), what does 'تَنَاوَمَ' mean?",
    "ur": "جملے 'تَنَاوَمَ الكَسْلاَنُ' میں فعل 'تَنَاوَمَ' کا کیا مفہوم ہے؟",
    "options": [
      {
        "en": "He pretended to be asleep (التظاهر بالنَّوْمِ)",
        "ur": "اس نے سونے کا جھوٹا ڈرامہ/تظاہر کیا (تظاهر بالنوم)"
      },
      {
        "en": "He fell into deep sleep",
        "ur": "وہ گہری نیند سو گیا"
      },
      {
        "en": "He woke up early",
        "ur": "وہ جلدی بیدار ہو گیا"
      },
      {
        "en": "He put others to sleep",
        "ur": "اس نے دوسروں کو سلا دیا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'تَوَارَدَتِ الأَخْبَارُ' (News arrived in continuous succession), what semantic meaning of Form VI is shown?",
    "ur": "جملے 'تَوَارَدَتِ الأَخْبَارُ' میں فارم VI کا کون سا معنی ظاہر ہوتا ہے؟",
    "options": [
      {
        "en": "At-Tadarruj / Al-Muwālāt (التدرج/الموالاة - continuous succession over time)",
        "ur": "التدرّج / الموالاة (تدریج اور مسلسل تسلسل کے ساتھ خبروں کا آنا)"
      },
      {
        "en": "Pretending/feigning",
        "ur": "تظاہر"
      },
      {
        "en": "Mutāwa'ah",
        "ur": "مطاوعۃ"
      },
      {
        "en": "Prohibition",
        "ur": "نہی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, in the Quranic verse 'عَمَّ يَتَسَاءَلُونَ' (Qur'an 78:1), if addressed in 2nd person plural 'تَسَاءَلُونَ', what was the original form before deletion of one Tā'?",
    "ur": "تمرين 3 کے مطابق اگر مخاطب میں 'تَسَاءَلُونَ' کہا جائے تو ایک تاء کے حذف سے پہلے اصل فعل کیا تھا؟",
    "options": [
      {
        "en": "تَتَسَاءَلُونَ (Tatasā'alūna - with two Tās)",
        "ur": "تَتَسَاءَلُونَ (دو تائیں)"
      },
      {
        "en": "يتساءلون",
        "ur": "يتساءلون"
      },
      {
        "en": "تساءلوا",
        "ur": "تساءلوا"
      },
      {
        "en": "متسائلون",
        "ur": "متسائلون"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In the Quranic prohibition 'وَلاَ تَنَابَزُوا بِالأَلْقَابِ' (Qur'an 49:11), what was the original present verb before deletion of one Tā'?",
    "ur": "قرآنی ممانعت 'وَلاَ تَنَابَزُوا بِالأَلْقَابِ' میں ایک تاء کے حذف سے پہلے اصل فعل کیا تھا؟",
    "options": [
      {
        "en": "لاَ تَتَنَابَزُوا (Lā tatanābazū - with two Tās)",
        "ur": "لاَ تَتَنَابَزُوا (دو تائیں)"
      },
      {
        "en": "لا يتنابزون",
        "ur": "لا يتنابزون"
      },
      {
        "en": "لا تنابزتم",
        "ur": "لا تنابزتم"
      },
      {
        "en": "لا متنابزون",
        "ur": "لا متنابزون"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Shorten 'تَتَعَاوَنُونَ' by deleting one Tā':",
    "ur": "فعل 'تَتَعَاوَنُونَ' سے ایک تاء حذف کر کے مختصر درست شکل بنائیں:",
    "options": [
      {
        "en": "تَعَاوَنُونَ (Ta'āwanūna)",
        "ur": "تَعَاوَنُونَ"
      },
      {
        "en": "يتعاونون",
        "ur": "يتعاونون"
      },
      {
        "en": "تعاونوا",
        "ur": "تعاونوا"
      },
      {
        "en": "متعاونون",
        "ur": "متعاونون"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the reason for deleting one of the two Tās in present tense Form V and Form VI verbs?",
    "ur": "بابِ تفعل اور بابِ تفاعل کے فعلِ مضارع میں دو میں سے ایک تاء کو حذف کرنے کی کیا وجہ بیان کی جاتی ہے؟",
    "options": [
      {
        "en": "For morphological lightness and ease of pronunciation (التَّخْفِيفُ وَسُهُولَةُ النُّطْقِ)",
        "ur": "صرفی تخفیف اور تلفظ میں آسانی و روانی کی بنا پر (التخفيف)"
      },
      {
        "en": "Because of a grammatical preposition",
        "ur": "حرفِ جر کے اثر کی وجہ سے"
      },
      {
        "en": "To make the verb passive",
        "ur": "فعل کو مجہول بنانے کے لیے"
      },
      {
        "en": "Because of dual agreement",
        "ur": "تثنیہ کی مطابقت کے لیے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, what is the Masdar of defective Form VI verb 'تَنَاسَى' (to pretend to forget)?",
    "ur": "تمرين 4 کے مطابق ناقص فعل 'تَنَاسَى' (بھولنے کا تظاہر کرنا) کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "تَنَاسٍ / التَّنَاسِي (Tanāsin / At-Tanāsī)",
        "ur": "تَنَاسٍ / التَّنَاسِي"
      },
      {
        "en": "تناسُؤ",
        "ur": "تناسُؤ"
      },
      {
        "en": "إنساء",
        "ur": "إنساء"
      },
      {
        "en": "تنسية",
        "ur": "تنسية"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the Present Tense (فعل المضارع) of defective Form VI verb 'تَلاَقَى' (to meet mutually)?",
    "ur": "ناقص فعل 'تَلاَقَى' (باہمی ملاقات کرنا) کا فعلِ مضارع کیا ہے؟",
    "options": [
      {
        "en": "يَتَلاَقَى (Yatalāqā - ending in Alif Maqsoorah)",
        "ur": "يَتَلاَقَى (الفِ مقصورہ پر مسبوق)"
      },
      {
        "en": "يُلاَقِي",
        "ur": "يُلاَقِي"
      },
      {
        "en": "يَلْقَى",
        "ur": "يَلْقَى"
      },
      {
        "en": "يَسْتَلْقِي",
        "ur": "يَسْتَلْقِي"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the plural masculine Imperative (فعل الأمر للجمع المذكر) for 'تَعَالَى'?",
    "ur": "فعل 'تَعَالَى' کا جمع مذكر کے لیے فعلِ امر کیا ہوگا؟",
    "options": [
      {
        "en": "تَعَالَوْا (Ta'ālaw - with Fatha on Laam and Sukoon on Waw)",
        "ur": "تَعَالَوْا (لام پر فتحہ اور واؤ پر سکون کے ساتھ)"
      },
      {
        "en": "تعالُوا (with Damma on Laam)",
        "ur": "تعالُوا"
      },
      {
        "en": "تعالَين",
        "ur": "تعالَين"
      },
      {
        "en": "متعالون",
        "ur": "متعالون"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى' (Qur'an 5:2), how is 'تَعَاوَنُوا' parsed?",
    "ur": "قرآنی آیہ 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى' میں 'تَعَاوَنُوا' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Fi'l Amr Mabni on deletion of Noon, Waw is Fa'il (فعل أمر مبني على حذف النون والواو فاعل)",
        "ur": "نون کے حذف پر مبنی فعلِ امر، مع واؤ فاعل"
      },
      {
        "en": "Fi'l Mudari' Majzoom",
        "ur": "فعلِ مضارع مجزوم"
      },
      {
        "en": "Fi'l Madin Mabni on Damma",
        "ur": "فعلِ ماضی مبنی بر ضمہ"
      },
      {
        "en": "Ism Fa'il Marfoo'",
        "ur": "اسمِ فاعل مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَلاَ تَعَاوَنُوا عَلَى الإِثْمِ وَالعُدْوَانِ' (Qur'an 5:2), how is 'تَعَاوَنُوا' parsed after 'لاَ'?",
    "ur": "آیت مبارکہ 'وَلاَ تَعَاوَنُوا عَلَى الإِثْمِ وَالعُدْوَانِ' میں 'لاَ' کے بعد 'تَعَاوَنُوا' کا اعرابی موقع کیا ہے؟",
    "options": [
      {
        "en": "Fi'l Mudari' Majzoom after Lā an-Nāhiyah by deleting Noon (فعل مضارع مجزوم بلا الناهية وعلامة جزمه حذف النون)",
        "ur": "لاۓ نہی کے بعد نون کے حذف کے ساتھ فعلِ مضارع مجزوم"
      },
      {
        "en": "Fi'l Amr Mabni",
        "ur": "فعلِ امر مبنی"
      },
      {
        "en": "Fi'l Madin Mabni",
        "ur": "فعلِ ماضی مبنی"
      },
      {
        "en": "Mansoob with Fatha",
        "ur": "فتحہ کے ساتھ منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'أَلْهَاكُمُ التَّكَاثُرُ' (Qur'an 102:1), how is 'التَّكَاثُرُ' parsed?",
    "ur": "قرآنی آیہ 'أَلْهَاكُمُ التَّكَاثُرُ' میں لفظ 'التَّكَاثُرُ' کا کیا اعرابی موقع ہے؟",
    "options": [
      {
        "en": "Fa'il Marfoo' with Damma, functioning as Masdar of Form VI (فاعل مرفوع بالضمة وهو مصدر باب تفاعل)",
        "ur": "ضمہ کے ساتھ فاعلِ مرفوع (بابِ تفاعل کا مصدر)"
      },
      {
        "en": "Maf'ool Bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Khabar Mubtada'",
        "ur": "خبر مبتدأ"
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
    "en": "Parse the full sentence: 'تَشَاوَرَ الطُّلاَّبُ تَشَاوُراً':",
    "ur": "پورے جملے 'تَشَاوَرَ الطُّلاَّبُ تَشَاوُراً' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "تَشَاوَرَ: فعل ماضٍ من باب تفاعل، الطُّلاَّبُ: فاعل مرفوع بالضمة، تَشَاوُراً: مفعول مطلق منصوب بالفتحة",
        "ur": "تَشَاوَرَ: فعلِ ماضی (باب تفاعل)، الطُّلاَّبُ: فاعل مرفوع بالضمة، تَشَاوُراً: مفعول مطلق منصوب بالفتحة"
      },
      {
        "en": "تشاور: مبتدأ، الطلاب: خبر، تشاوراً: مفعول به",
        "ur": "تشاور مبتدأ، الطلاب خبر، تشاوراً مفعول بہ"
      },
      {
        "en": "تشاور: حرف، الطلاب: اسم مجرور، تشاوراً: حال",
        "ur": "تشاور حرف، الطلاب اسم مجرور، تشاوراً حال"
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
    "en": "Which statement accurately summarizes the core grammar rules taught in Lesson 21?",
    "ur": "سبق 21 کے بنیادی گرامر موضوعات کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers Form VI verb (تَفَاعَلَ), its meanings of participation, feigning/pretending, Mutāwa'ah, and gradual progression, deletion of one Tā' in present tense, and defective verb forms",
        "ur": "اس سبق میں بابِ تفاعل، اس کے معانی (مشاركة، تظاهر، مطاوعة، تدرج)، مضارع میں ایک تاء کا حذف، اور ناقص افعال کا احاطہ کیا گیا ہے"
      },
      {
        "en": "Covers prepositions only",
        "ur": "صرف حروفِ جر کا احاطہ"
      },
      {
        "en": "Covers numbers 1 to 10 only",
        "ur": "صرف 1 سے 10 تک اعداد کا احاطہ"
      },
      {
        "en": "Covers vocative calls only",
        "ur": "صرف منادیٰ کا احاطہ"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('🚀 Seeding Book 3 Lesson 21 Quiz...');
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

    // 3. Find or Create Lecture for Lesson 21
    let lectureId;
    const existingLec = await sql`
      SELECT id, title, order_index FROM lectures
      WHERE section_id = ${sectionId} AND order_index = 21
      LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 21 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 21', 21)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 21: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 21 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 21))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 21.`);
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

    // 5. Create the quiz for Book 3 Lesson 21
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 21 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 21 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
