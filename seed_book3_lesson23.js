import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is the primary derived verb pattern of Form VIII (باب افْتَعَلَ) in Arabic?",
    "ur": "عربی زبان میں فارم VIII (بابِ افْتَعَلَ) کا ماضی، مضارع، اور مصدر کا بنیادی وزن کیا ہے؟",
    "options": [
      {
        "en": "افْتَعَلَ - يَفْتَعِلُ - افْتِعَالاً",
        "ur": "افْتَعَلَ - يَفْتَعِلُ - افْتِعَالاً"
      },
      {
        "en": "انْفَعَلَ - يَنْفَعِلُ - انْفِعَالاً",
        "ur": "انْفَعَلَ - يَنْفَعِلُ - انْفِعَالاً"
      },
      {
        "en": "تَفَعَّلَ - يَتَفَعَّلُ - تَفَعُّلاً",
        "ur": "تَفَعَّلَ - يَتَفَعَّلُ - تَفَعُّلاً"
      },
      {
        "en": "اسْتَفْعَلَ - يَسْتَفْعِلُ - اسْتِفْعَالاً",
        "ur": "اسْتَفْعَلَ - يَسْتَفْعِلُ - اسْتِفْعَالاً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What phonetic transformation occurs in Form VIII when the first root letter (فاء الكلمة) is Waw (و, e.g., root و-ص-ل)?",
    "ur": "جب فارم VIII کا پہلا اصلی حرف (فاء کلمہ) واؤ (و) ہو (جیسے مادہ و-ص-ل) تو کیا صرفی و صوتی تبدیلی واقع ہوتی ہے؟",
    "options": [
      {
        "en": "The Waw is changed into Tā' and assimilated into the Tā' of Ifta'ala (e.g., اوْتَصَلَ → اتَّصَلَ)",
        "ur": "واؤ کو تاء سے بدل کر باب کی تاء میں ادغام کر دیا جاتا ہے (جیسے: اوْتَصَلَ → اتَّصَلَ)"
      },
      {
        "en": "The Waw is dropped completely without replacement",
        "ur": "واؤ کو بغیر کسی عوض کے بالکل حذف کر دیا جاتا ہے"
      },
      {
        "en": "The Waw changes into Alif",
        "ur": "واؤ الف میں بدل جاتی ہے"
      },
      {
        "en": "The Waw changes into Ya'",
        "ur": "واؤ یاء میں بدل جاتی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What happens to the Tā' of Form VIII (تاء افتعل) when the first root letter is Dāl (د), Dhāl (ذ), or Zāy (ز, e.g., root ز-ي-د)?",
    "ur": "جب فارم VIII کا فاء کلمہ دال (د)، ذال (ذ)، یا زا (ز) ہو (جیسے مادہ ز-ي-د) تو باب کی تاء کس حرف سے بدلتی ہے؟",
    "options": [
      {
        "en": "The Tā' of Ifta'ala is changed into Dāl (د, e.g., ازْتَادَ → ازْدَادَ)",
        "ur": "بابِ افتعل کی تاء **دال** (د) سے بدل جاتی ہے (جیسے: ازْتَادَ → ازْدَادَ)"
      },
      {
        "en": "The Tā' is changed into Ṭā' (ط)",
        "ur": "تاء **طاء** (ط) سے بدل جاتی ہے"
      },
      {
        "en": "The Tā' is changed into Seen (س)",
        "ur": "تاء **سین** سے بدل جاتی ہے"
      },
      {
        "en": "No change occurs",
        "ur": "کوئی تبدیلی نہیں ہوتی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What happens to the Tā' of Form VIII when the first root letter is Sād (ص), Dād (ض), Ṭā' (ط), or Ẓā' (ظ, e.g., root ص-ب-ر)?",
    "ur": "جب فارم VIII کا فاء کلمہ حروفِ اطباق (ص، ض، ط، ظ) میں سے ہو (جیسے مادہ ص-ب-ر) تو باب کی تاء کس حرف سے بدلتی ہے؟",
    "options": [
      {
        "en": "The Tā' of Ifta'ala is changed into Ṭā' (ط, e.g., اصْتَبَرَ → اصْطَبَرَ)",
        "ur": "بابِ افتعل کی تاء **طاء** (ط) سے بدل جاتی ہے (جیسے: اصْتَبَرَ → اصْطَبَرَ)"
      },
      {
        "en": "The Tā' is changed into Dāl (د)",
        "ur": "تاء **دال** سے بدل جاتی ہے"
      },
      {
        "en": "The Tā' is changed into Waw (و)",
        "ur": "تاء **واؤ** سے بدل جاتی ہے"
      },
      {
        "en": "The Tā' is deleted",
        "ur": "تاء حذف ہو جاتی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What semantic meaning does Form VIII convey when used for 'Al-Itikhādh' (الاتِّخَاذُ, e.g., اخْتَتَمَ، اخْتَدَمَ)?",
    "ur": "جب بابِ افْتَعَلَ 'اتخاذ' (الاتِّخَاذُ) کے معنوی مفہوم کے لیے آئے (مثلاً اخْتَتَمَ، اخْتَدَمَ) تو اس کا کیا مطلب ہوتا ہے؟",
    "options": [
      {
        "en": "Adopting or taking something for oneself (e.g., adopting a signet ring or employing a servant)",
        "ur": "کسی چیز کو اپنے لیے بنانا، اختیار کرنا یا اپنانا (جیسے انگوٹھی پہننا یا خادم رکھنا)"
      },
      {
        "en": "Pretending or feigning a trait",
        "ur": "کسی صفت کا بنوٹ ساختہ مظاہرہ کرنا"
      },
      {
        "en": "Asking for forgiveness",
        "ur": "معافی مانگنا"
      },
      {
        "en": "Decreasing an action gradually",
        "ur": "کسی عمل کو تدریجاً کم کرنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What semantic meaning does Form VIII convey when indicating 'Al-Iktisāb / Al-Ijtihead' (الاِكْتِسَابُ / الاِجْتِهَادُ, e.g., اكْتَسَبَ، اجْتَهَدَ)?",
    "ur": "جب بابِ افْتَعَلَ 'اکتساب / اجتہاد' کے لیے استعمال ہو (مثلاً اكْتَسَبَ، اجْتَهَدَ) تو اس کا کیا مفہوم ہوتا ہے؟",
    "options": [
      {
        "en": "Exerting personal effort and diligence to achieve or earn something for oneself",
        "ur": "کسی چیز کے حصول کے لیے ذاتی محنت، جدوجہد اور کوشش کرنا"
      },
      {
        "en": "Doing an action without effort",
        "ur": "بغیر کسی کوشش کے عمل کا ہونا"
      },
      {
        "en": "Showing passive compliance",
        "ur": "مجہولانہ اطاعت"
      },
      {
        "en": "Connecting two nominal sentences",
        "ur": "دو اسمیہ جملوں کو جوڑنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is the Ajwaf verb conjugated in Form VIII (e.g., root خ-ي-ر)?",
    "ur": "بابِ افْتَعَلَ میں اجوف فعل (مثلاً مادہ خ-ي-ر) کے ماضی، مضارع، اور مصدر کی کیا شکلیں بنتی ہیں؟",
    "options": [
      {
        "en": "اخْتَارَ - يَخْتَارُ - اخْتِيَاراً (Iktāra - Yaktāru - Iktiyāran)",
        "ur": "اخْتَارَ - يَخْتَارُ - اخْتِيَاراً"
      },
      {
        "en": "اخْتَيَرَ - يَخْتِيِرُ - اخْتِيَاراً",
        "ur": "اخْتَيَرَ - يَخْتِيِرُ - اخْتِيَاراً"
      },
      {
        "en": "تَخَيَّرَ - يَتَخَيَّرُ - تَخَيُّراً",
        "ur": "تَخَيَّرَ - يَتَخَيَّرُ - تَخَيُّراً"
      },
      {
        "en": "اسْتَخَارَ - يَسْتَخِيرُ - اسْتِخَارَةً",
        "ur": "اسْتَخَارَ - يَسْتَخِيرُ - اسْتِخَارَةً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is unique about the Active Participle (اسم الفاعل) and Passive Participle (اسم المفعول) of Ajwaf verbs in Form VIII (e.g., اخْتَارَ)?",
    "ur": "بابِ افْتَعَلَ میں اجوف افعال (مثلاً اخْتَارَ) کے اسمِ فاعل اور اسمِ مفعول میں کیا خاص اشتراک ہوتا ہے؟",
    "options": [
      {
        "en": "Both share the identical word form 'مُخْتَارٌ', distinguished only by sentence context and meaning",
        "ur": "دونوں کے لیے ایک ہی لفظی شکل **مُخْتَارٌ** آتی ہے، جس میں فرق صرف سیاق و معنوی ربط سے ہوتا ہے"
      },
      {
        "en": "Active participle is 'مُخْتِيرٌ' and passive is 'مُخْتَارٌ'",
        "ur": "اسمِ فاعل مختیر اور اسمِ مفعول مختار ہوتا ہے"
      },
      {
        "en": "Passive participle cannot be formed at all",
        "ur": "اسمِ مفعول بن ہی نہیں سکتا"
      },
      {
        "en": "Active participle is 'خَائِرٌ' and passive is 'مَخُورٌ'",
        "ur": "اسمِ فاعل خائر اور اسمِ مفعول مخور ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Active Participle (اسم الفاعل) pattern for sound Form VIII verbs (e.g., اجْتَمَعَ)?",
    "ur": "صحیح فارم VIII افعال (مثلاً اجْتَمَعَ) کے اسمِ فاعل کا کیا وزن ہوتا ہے؟",
    "options": [
      {
        "en": "مُفْتَعِلٌ (Mufta'ilun, e.g., مُجْتَمِعٌ)",
        "ur": "مُفْتَعِلٌ (مثلاً: مُجْتَمِعٌ)"
      },
      {
        "en": "مُفْتَعَلٌ",
        "ur": "مُفْتَعَلٌ"
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
    "en": "What is the Passive Participle (اسم المفعول) pattern for sound Form VIII verbs (e.g., اجْتَمَعَ)?",
    "ur": "صحیح فارم VIII افعال (مثلاً اجْتَمَعَ) کے اسمِ مفعول کا کیا وزن ہوتا ہے؟",
    "options": [
      {
        "en": "مُفْتَعَلٌ (Mufta'alun, e.g., مُجْتَمَعٌ)",
        "ur": "مُفْتَعَلٌ (مثلاً: مُجْتَمَعٌ)"
      },
      {
        "en": "مُفْتَعِلٌ",
        "ur": "مُفْتَعِلٌ"
      },
      {
        "en": "مَفْعُولٌ",
        "ur": "مَفْعُولٌ"
      },
      {
        "en": "افْتِعَالٌ",
        "ur": "افْتِعَالٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, what is the Masdar of Form VIII verb 'اجْتَهَدَ' (to strive)?",
    "ur": "تمرين 1 کے مطابق فارم VIII فعل 'اجْتَهَدَ' کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "اجْتِهَادٌ (Ijtihādun)",
        "ur": "اجْتِهَادٌ"
      },
      {
        "en": "تَجْهِيدٌ",
        "ur": "تَجْهِيدٌ"
      },
      {
        "en": "مُجَاهَدَةٌ",
        "ur": "مُجَاهَدَةٌ"
      },
      {
        "en": "تَجَاهُدٌ",
        "ur": "تَجَاهُدٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Form the Imperative (فعل الأمر) for Form VIII verb 'اقْتَرَبَ' (to approach):",
    "ur": "فعل 'اقْتَرَبَ' (قریب ہونا) کا فعلِ امر کیا ہوگا؟",
    "options": [
      {
        "en": "اقْتَرِبْ (Iqtarib - with Kasra on Rā' and Sukoon on Bā')",
        "ur": "اقْتَرِبْ (راء پر کسرہ اور باء پر سکون کے ساتھ)"
      },
      {
        "en": "اقْتَرَبُ",
        "ur": "اقْتَرَبُ"
      },
      {
        "en": "قَرِّبْ",
        "ur": "قَرِّبْ"
      },
      {
        "en": "تَقَارَبْ",
        "ur": "تَقَارَبْ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the Present Tense (فعل المضارع) of Form VIII verb 'اشْتَرَكَ' (to participate)?",
    "ur": "فعل 'اشْتَرَكَ' کا فعلِ مضارع کیا ہے؟",
    "options": [
      {
        "en": "يَشْتَرِكُ (Yashtariku - with Kasra on Rā')",
        "ur": "يَشْتَرِكُ (راء پر کسرہ کے ساتھ)"
      },
      {
        "en": "يُشَرِّكُ",
        "ur": "يُشَرِّكُ"
      },
      {
        "en": "يُشَارِكُ",
        "ur": "يُشَارِكُ"
      },
      {
        "en": "يَشْتَرَكُ",
        "ur": "يَشْتَرَكُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the Active Participle (اسم الفاعل) of Form VIII verb 'اخْتَلَفَ' (to differ)?",
    "ur": "فعل 'اخْتَلَفَ' کا اسمِ فاعل کیا ہے؟",
    "options": [
      {
        "en": "مُخْتَلِفٌ (Mukhtalifun - with Kasra on Laam)",
        "ur": "مُخْتَلِفٌ (لام پر کسرہ کے ساتھ)"
      },
      {
        "en": "مُخْتَلَفٌ",
        "ur": "مُخْتَلَفٌ"
      },
      {
        "en": "خَالِفٌ",
        "ur": "خَالِفٌ"
      },
      {
        "en": "مَخْلُوفٌ",
        "ur": "مَخْلُوفٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, in 'اخْتَتَمَ زَيْدٌ' (Zayd put on a signet ring / adopted a seal), what semantic feature of Form VIII is shown?",
    "ur": "تمرين 2 کے مطابق 'اخْتَتَمَ زَيْدٌ' میں فارم VIII کی کون سی معنوی خصوصیت ظاہر ہوتی ہے؟",
    "options": [
      {
        "en": "Al-Itikhādh (الاتِّخَاذُ - taking or adopting something for oneself)",
        "ur": "الاتِّخَاذُ (کسی چیز کو اپنے لیے بنانا یا اختیار کرنا)"
      },
      {
        "en": "Al-Mutāwa'ah",
        "ur": "المطاوعة"
      },
      {
        "en": "At-Tazāhur",
        "ur": "التظاهر"
      },
      {
        "en": "At-Tadarruj",
        "ur": "التدرج"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'جَمَعْتُ الـمَالَ فَاجْتَمَعَ' (I gathered the money, so it gathered), what semantic feature of Form VIII is shown?",
    "ur": "جملے 'جَمَعْتُ الـمَالَ فَاجْتَمَعَ' میں فعل 'فَاجْتَمَعَ' کا کیا معنوی تعلق ہے؟",
    "options": [
      {
        "en": "Al-Mutāwa'ah for Form I verb 'جَمَعَ' (المطاوَعَةُ لِـ فَعَلَ)",
        "ur": "المطاوَعَةُ لِـ فَعَلَ (ثلاثی مجرد 'جمع' کا اثر قبول کرنا)"
      },
      {
        "en": "Al-Itikhādh",
        "ur": "الاتخاذ"
      },
      {
        "en": "At-Tazāhur",
        "ur": "التظاهر"
      },
      {
        "en": "At-Tadarruj",
        "ur": "التدرج"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'كَسَبَ زَيْدٌ وَاكْتَسَبَ', what extra nuance does Form VIII 'اكْتَسَبَ' add over Form I 'كَسَبَ'?",
    "ur": "جملے 'كَسَبَ زَيْدٌ وَاكْتَسَبَ' میں بابِ افتعل 'اكْتَسَبَ' مجرد 'كَسَبَ' سے کیا زائد معنی فراہم کرتا ہے؟",
    "options": [
      {
        "en": "It emphasizes rigorous personal effort, diligence, and working for one's own gain (الاِكْتِسَابُ وَالاِجْتِهَادُ)",
        "ur": "یہ ذات کے لیے خاص محنت، مشقت، جدوجہد اور کماؤ کی تاکید و کوشش ظاہر کرتا ہے"
      },
      {
        "en": "It indicates passive helplessness",
        "ur": "یہ لاچاری ظاہر کرتا ہے"
      },
      {
        "en": "It indicates pretending",
        "ur": "یہ جھوٹا دکھاوا بتاتا ہے"
      },
      {
        "en": "It has no added nuance",
        "ur": "اس میں کوئی زائد معنی نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'اخْتَصَمَ زَيْدٌ وَعَمْرٌو' (Zayd and Amr disputed with each other), what semantic feature of Form VIII is shown?",
    "ur": "جملے 'اخْتَصَمَ زَيْدٌ وَعَمْرٌو' میں فارم VIII کا کون سا معنی ظاہر ہوتا ہے؟",
    "options": [
      {
        "en": "Al-Mushārakah (المُشَارَكَةُ - mutual dispute between participants)",
        "ur": "المُشَارَكَةُ (باہمی نزاع و عمل)"
      },
      {
        "en": "Al-Itikhādh",
        "ur": "الاتخاذ"
      },
      {
        "en": "At-Tazāhur",
        "ur": "التظاهر"
      },
      {
        "en": "At-Tadarruj",
        "ur": "التدرج"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, transform the root (و-ق-ي) into Form VIII past tense verb:",
    "ur": "تمرين 3 کے مطابق مادہ (و-ق-ي) کو فارم VIII فعلِ ماضی میں تبدیل کریں:",
    "options": [
      {
        "en": "اتَّقَى (Ittaqā - where Waw changed to Tā' and assimilated into Tā' of Ifta'ala)",
        "ur": "اتَّقَى (واؤ کو تاء سے بدل کر باب کی تاء میں ادغام کیا گیا)"
      },
      {
        "en": "اوْتَقَى",
        "ur": "اوْتَقَى"
      },
      {
        "en": "واثَّقَى",
        "ur": "واثَّقَى"
      },
      {
        "en": "تَوَقَّى",
        "ur": "تَوَقَّى"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Transform the root (ز-ي-د) into Form VIII past tense verb:",
    "ur": "مادہ (ز-ي-د) کو فارم VIII فعلِ ماضی میں درست صرفی قاعدے کے ساتھ تبدیل کریں:",
    "options": [
      {
        "en": "ازْدَادَ (Izdāda - where Tā' of Ifta'ala changed to Dāl after Zāy)",
        "ur": "ازْدَادَ (زا کے بعد باب کی تاء دال سے بدل گئی)"
      },
      {
        "en": "ازْتَادَ",
        "ur": "ازْتَادَ"
      },
      {
        "en": "تَزَايَدَ",
        "ur": "تَزَايَدَ"
      },
      {
        "en": "ازْطَادَ",
        "ur": "ازْطَادَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Transform the root (ص-ب-ر) into Form VIII past tense verb:",
    "ur": "مادہ (ص-ب-ر) کو فارم VIII فعلِ ماضی میں درست ابدال کے ساتھ تبدیل کریں:",
    "options": [
      {
        "en": "اصْتَبَرَ → اصْطَبَرَ (Isṭabara - where Tā' of Ifta'ala changed to Ṭā' after Sād)",
        "ur": "اصْطَبَرَ (صاد کے بعد باب کی تاء طاء سے بدل گئی)"
      },
      {
        "en": "اصْتَبَرَ",
        "ur": "اصْتَبَرَ"
      },
      {
        "en": "اصْدَبَرَ",
        "ur": "اصْدَبَرَ"
      },
      {
        "en": "تَصَبَّرَ",
        "ur": "تَصَبَّرَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'اذَّكَرَ' / 'ادَّكَرَ' (from root ذ-ك-ر), what morphological steps took place?",
    "ur": "مادہ (ذ-ك-ر) سے 'اذَّكَرَ' / 'ادَّكَرَ' بننے میں کیا صرفی مراحل طے ہوئے؟",
    "options": [
      {
        "en": "Tā' of Ifta'ala changed to Dāl after Dhāl (اذْتَكَرَ → اذْدَكَرَ), followed by assimilation (اذَّكَرَ or ادَّكَرَ)",
        "ur": "ذال کے بعد تاء دال سے بدلی، پھر ذال یا دال میں باہمی ادغام واقع ہوا"
      },
      {
        "en": "The root letter Dhāl was deleted",
        "ur": "حرفِ اصلی ذال کو بالکل حذف کیا گیا"
      },
      {
        "en": "The word was converted into Form I",
        "ur": "لفظ کو فارم I میں بدلا گیا"
      },
      {
        "en": "None of the above",
        "ur": "ان میں سے کوئی نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, what is the Present Tense (فعل المضارع) of Ajwaf verb 'اخْتَارَ'?",
    "ur": "تمرين 4 کے مطابق اجوف فعل 'اخْتَارَ' کا فعلِ مضارع کیا ہے؟",
    "options": [
      {
        "en": "يَخْتَارُ (Yakhtāru)",
        "ur": "يَخْتَارُ"
      },
      {
        "en": "يَخْتِيرُ",
        "ur": "يَخْتِيرُ"
      },
      {
        "en": "يَخْتُورُ",
        "ur": "يَخْتُورُ"
      },
      {
        "en": "يَتَخَيَّرُ",
        "ur": "يَتَخَيَّرُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the Masdar of Naqis verb 'اتَّقَى' (root و-ق-ي)?",
    "ur": "ناقص فعل 'اتَّقَى' (تقویٰ اختیار کرنا) کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "اتِّقَاءٌ (Ittiqā'un - with Hamzah at the end)",
        "ur": "اتِّقَاءٌ (آخر میں ہمزہ کے ساتھ)"
      },
      {
        "en": "اتِّقَايٌ",
        "ur": "اتِّقَايٌ"
      },
      {
        "en": "تَقْوَى",
        "ur": "تَقْوَى"
      },
      {
        "en": "مُتَّقٍ",
        "ur": "مُتَّقٍ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the Masdar of Muda'af verb 'امْتَدَّ' (to extend/stretch)?",
    "ur": "مضاعف فعل 'امْتَدَّ' (پھیلنا/امتداد ہونا) کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "امْتِدَادٌ (Imtidādun - where the doubled letters unpack)",
        "ur": "امْتِدَادٌ (دونوں حروف کے کھلنے کے ساتھ)"
      },
      {
        "en": "امْتَدٌّ",
        "ur": "امْتَدٌّ"
      },
      {
        "en": "تَمَدُّدٌ",
        "ur": "تَمَدُّدٌ"
      },
      {
        "en": "مُمْتَدٌّ",
        "ur": "مُمْتَدٌّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'مُخْتَارٌ', how do you distinguish whether it is acting as Active Participle (اسم الفاعل) or Passive Participle (اسم المفعول)?",
    "ur": "لفظ 'مُخْتَارٌ' میں اسمِ فاعل اور اسمِ مفعول کی پہچان کس کے ذریعے ہوتی ہے؟",
    "options": [
      {
        "en": "Through context and sentence semantics (المَعْنَى وَالسِّيَاقُ)",
        "ur": "جملے کے معنوی سیاق و سباق (Context) سے"
      },
      {
        "en": "By looking at the last vowel sign",
        "ur": "آخری حرکتِ اعراب کو دیکھ کر"
      },
      {
        "en": "By adding a preposition",
        "ur": "حرفِ جر لگا کر"
      },
      {
        "en": "They cannot be distinguished",
        "ur": "ان کی پہچان ممکن نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لاَ يَعْلَمُونَ' (Qur'an 39:9), what is the verb 'يَسْتَوِي'?",
    "ur": "قرآنی آیہ 'هَلْ يَسْتَوِي' میں فعل 'يَسْتَوِي' کی صرفی ساخت کیا ہے؟",
    "options": [
      {
        "en": "Fi'l Mudari' from Form VIII Naqis (افْتَعَلَ) root (س-و-ي), ending in Yā'",
        "ur": "فارم VIII (ناقص، مادہ س-و-ي) سے فعلِ مضارع"
      },
      {
        "en": "Form X (استفعل)",
        "ur": "فارم X (استفعل)"
      },
      {
        "en": "Form I (ثلاثي مجرد)",
        "ur": "فارم I (ثلاثی مجرد)"
      },
      {
        "en": "Form V (تفعل)",
        "ur": "فارم V (تفعل)"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَاقْتَرَبَ الْوَعْدُ الْحَقُّ' (Qur'an 21:97), how is 'الْوَعْدُ' parsed?",
    "ur": "آیت مبارکہ 'وَاقْتَرَبَ الْوَعْدُ الْحَقُّ' میں 'الْوَعْدُ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Fa'il of 'اقْتَرَبَ' Marfoo' with Damma (فاعل مرفوع بالضمة)",
        "ur": "فعل 'اقْتَرَبَ' کا فاعل مرفوع بالضمة"
      },
      {
        "en": "Maf'ool Bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Na't Marfoo'",
        "ur": "نعت مرفوع"
      },
      {
        "en": "Mubtada' Marfoo'",
        "ur": "مبتدأ مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ' (Qur'an 2:189), what is 'اتَّقُوا'?",
    "ur": "آیت مبارکہ 'وَاتَّقُوا اللَّهَ' میں لفظ 'اتَّقُوا' کی کیا ترکیبی و صرفی حیثیت ہے؟",
    "options": [
      {
        "en": "Fi'l Amr from Form VIII (افْتَعَلَ) root (و-ق-ي) Mabni on deletion of Noon, Waw is Fa'il",
        "ur": "فارم VIII (مادہ و-ق-ي) سے فعلِ امر مبنی بر حذف النون، مع واؤ فاعل"
      },
      {
        "en": "Fi'l Madin Mabni on Damma",
        "ur": "فعلِ ماضی مبنی بر ضمہ"
      },
      {
        "en": "Fi'l Mudari' Majzoom",
        "ur": "فعلِ مضارع مجزوم"
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
    "en": "Parse the full sentence: 'اجْتَمَعَ الطُّلاَّبُ اجْتِمَاعاً':",
    "ur": "پورے جملے 'اجْتَمَعَ الطُّلاَّبُ اجْتِمَاعاً' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "اجْتَمَعَ: فعل ماضٍ من باب افتعلَ، الطُّلاَّبُ: فاعل مرفوع بالضمة، اجْتِمَاعاً: مفعول مطلق منصوب بالفتحة",
        "ur": "اجْتَمَعَ: فعلِ ماضی (باب افتعل)، الطُّلاَّبُ: فاعل مرفوع بالضمة، اجْتِمَاعاً: مفعول مطلق منصوب بالفتحة"
      },
      {
        "en": "اجتمع: مبتدأ، الطلاب: خبر، اجتماعا: مفعول به",
        "ur": "اجتمع مبتدأ، الطلاب خبر، اجتماعاً مفعول بہ"
      },
      {
        "en": "اجتمع: حرف، الطلاب: اسم مجرور، اجتماعا: حال",
        "ur": "اجتمع حرف، الطلاب اسم مجرور، اجتماعاً حال"
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
    "en": "Which statement accurately summarizes the core grammar and phonetic rules of Lesson 23?",
    "ur": "سبق 23 کے بنیادی گرامر اور صرفی و صوتی قوانین کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers Form VIII verb (افْتَعَلَ), its meanings (Itikhādh, Iktisāb, Mushārakah, Mutāwa'ah), and phonetic rules: Waw becomes Tā', Dāl/Dhāl/Zāy change Tā' to Dāl, and Sād/Dād/Ṭā'/Ẓā' change Tā' to Ṭā'",
        "ur": "اس سبق میں بابِ افتعل، اس کے معانی (اتخاذ، اکتساب، مشارکۃ، مطاوعت) اور صوتی ابدالات: و→ت، د/ذ/ز→د، اور ص/ض/ط/ظ→ط کا کامل احاطہ کیا گیا ہے"
      },
      {
        "en": "Covers passive voice only",
        "ur": "صرف مجہول کا احاطہ"
      },
      {
        "en": "Covers numbers 1 to 10 only",
        "ur": "صرف اعداد 1 سے 10 کا احاطہ"
      },
      {
        "en": "Covers prepositions only",
        "ur": "صرف حروفِ جر کا احاطہ"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('🚀 Seeding Book 3 Lesson 23 Quiz...');
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

    // 3. Find or Create Lecture for Lesson 23
    let lectureId;
    const existingLec = await sql`
      SELECT id, title, order_index FROM lectures
      WHERE section_id = ${sectionId} AND order_index = 23
      LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 23 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 23', 23)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 23: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 23 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 23))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 23.`);
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

    // 5. Create the quiz for Book 3 Lesson 23
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 23 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 23 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
