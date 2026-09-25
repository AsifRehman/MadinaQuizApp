import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is the primary derived verb pattern of Form V (باب تَفَعَّلَ) in Arabic?",
    "ur": "عربی زبان میں فارم V (بابِ تَفَعَّلَ) کا ماضی، مضارع، اور مصدر کا بنیادی وزن کیا ہے؟",
    "options": [
      {
        "en": "تَفَعَّلَ - يَتَفَعَّلُ - تَفَعُّلاً",
        "ur": "تَفَعَّلَ - يَتَفَعَّلُ - تَفَعُّلاً"
      },
      {
        "en": "فَاعَلَ - يُفَاعِلُ - مُفَاعَلَةً",
        "ur": "فَاعَلَ - يُفَاعِلُ - مُفَاعَلَةً"
      },
      {
        "en": "تَفَاعَلَ - يَتَفَاعَلُ - تَفَاعُلاً",
        "ur": "تَفَاعَلَ - يَتَفَاعَلُ - تَفَاعُلاً"
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
    "en": "What general semantic meaning is most characteristic of Form V verbs (باب تَفَعَّلَ, e.g., كَسَّرْتُهُ فَتَكَسَّرَ)?",
    "ur": "بابِ تَفَعَّلَ (مثلاً كَسَّرْتُهُ فَتَكَسَّرَ) کے افعال میں غالب معنوی خصوصیت کیا ہوتی ہے؟",
    "options": [
      {
        "en": "Al-Mutāwa'ah (الـمُطَاوَعَةُ - accepting the effect of Form II فَعَّلَ action)",
        "ur": "المطاوعۃ (بابِ تفعیل 'فَعَّلَ' کے فعل کا اثر و نتیجہ قبول کرنا)"
      },
      {
        "en": "Reciprocal participation between two parties",
        "ur": "دو فریقوں کے درمیان باہمی شرکت"
      },
      {
        "en": "Requesting or seeking something",
        "ur": "طلب و سوال کرنا"
      },
      {
        "en": "Causative action only",
        "ur": "صرف سببی عمل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In present tense Form V verbs starting with two Tās (e.g., تَتَذَكَّرُونَ), what morphological simplification is allowed?",
    "ur": "بابِ تَفَعَّلَ کے فعلِ مضارع میں جب دو تائیں اکٹھی آ جائیں (مثلاً تَتَذَكَّرُونَ) تو صرفی لحاظ سے کیا جواز حاصل ہوتا ہے؟",
    "options": [
      {
        "en": "Permissible to delete one of the two Tās (جَوَازُ حَذْفِ إِحْدَى التَّائَيْنِ, e.g., تَذَكَّرُونَ)",
        "ur": "دو میں سے ایک تاء کو حذف کرنا جائز ہے (جیسے: تَذَكَّرُونَ)"
      },
      {
        "en": "Mandatory to change the second Tā' to Alif",
        "ur": "دوسری تاء کو الف سے بدلنا واجب ہے"
      },
      {
        "en": "Mandatory to drop the first root letter",
        "ur": "پہلے اصلی حرف کو حذف کرنا واجب ہے"
      },
      {
        "en": "No deletion is allowed under any circumstances",
        "ur": "کسی صورت حذف جائز نہیں ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Lammā al-Heeniyyah' (لَمَّا الحِينِيَّةُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'لَمَّا الحینیہ' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A time dharf (ظرف زمان بمعنَى حِينَ) that enters PAST tense verbs meaning 'when'",
        "ur": "وہ ظرفِ زمان جو بمعنی 'حين' (جب) ہو اور صرف فعلِ ماضی پر داخل ہوتا ہے"
      },
      {
        "en": "A particle that enters present tense verbs to negate and make them Majzoom",
        "ur": "وہ حرف جو مضارع کی نفی اور جزم کے لیے آئے"
      },
      {
        "en": "A conditional instrument causing two verbs to be Majzoom",
        "ur": "دو افعال کو جزم دینے والی اداۃِ شرط"
      },
      {
        "en": "A preposition meaning 'for'",
        "ur": "ملکیت کا حرفِ جر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How does 'Lammā al-Heeniyyah' differ from 'Lammā al-Jāzimah'?",
    "ur": "'لَمَّا الحینیہ' اور 'لَمَّا الجازمہ' کے درمیان کیا بنیادی فرق ہے؟",
    "options": [
      {
        "en": "Lammā al-Jāzimah enters Present Tense negating it; Lammā al-Heeniyyah enters Past Tense as a time adverb",
        "ur": "لما الجازمہ مضارع پر داخل ہو کر نفی و جزم دیتی ہے؛ جبکہ لما الحینیہ ماضی پر بطورِ ظرفِ زمان داخل ہوتی ہے"
      },
      {
        "en": "Both enter past tense with identical meaning",
        "ur": "دونوں ماضی پر ایک ہی معنی میں داخل ہوتی ہیں"
      },
      {
        "en": "Lammā al-Heeniyyah makes verbs Mansoob",
        "ur": "لما الحینیہ افعال کو منصوب کرتی ہے"
      },
      {
        "en": "Lammā al-Jāzimah enters nominal sentences only",
        "ur": "لما الجازمہ صرف جملہ اسمیہ پر آتی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Al-Ikhtisās' (الاِخْتِصَاصُ) in Arabic grammar?",
    "ur": "عربی زبان میں 'اسلوبِ اختصاص' سے کیا مراد ہے؟",
    "options": [
      {
        "en": "Mentioning a Mansoob noun after a pronoun to clarify and specify the intended group (e.g., نَحْنُ الـمُسْلِمِينَ)",
        "ur": "ضمیر کے بعد کسی اسمِ منصوب کو لانا تاکہ ضمیر کی مراد و تخصیص کو واضح کیا جائے (مثلاً: نَحْنُ الـمُسْلِمِينَ)"
      },
      {
        "en": "Adding an adjective to a proper noun",
        "ur": "اسمِ علم کے ساتھ صفت لگانا"
      },
      {
        "en": "A type of exception using 'Illa'",
        "ur": "إلا کے ذریعے استثناء کی قسم"
      },
      {
        "en": "Calling a person using vocative 'Ya'",
        "ur": "کسی شخص کو حرفِ نداء سے پکارنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'نَحْنُ - مَعَشِرَ الأَنْبِيَاءِ - لاَ نُورَثُ', how is 'مَعَشِرَ' parsed grammatically?",
    "ur": "ترکیب 'نَحْنُ - مَعَشِرَ الأَنْبِيَاءِ - لاَ نُورَثُ' میں لفظ 'مَعَشِرَ' کا اعرابی موقع کیا ہے؟",
    "options": [
      {
        "en": "Mansoob on Ikhtisās as Maf'ool Bihi for an omitted verb 'أَخُصُّ' (منصوب على الاختصاص بفعل محذوف تقديره أخصّ)",
        "ur": "حذف شدہ فعل 'أَخُصُّ' کی بنا پر مفعول بہ منصوب علی الاختصاص"
      },
      {
        "en": "Khabar of Mubtada' 'نحن'",
        "ur": "مبتدأ 'نحن' کی خبر"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Badal Marfoo'",
        "ur": "بدل مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Active Participle (اسم الفاعل) pattern for Form V verbs (e.g., تَقَدَّمَ)?",
    "ur": "فارم V کے افعال (مثلاً تَقَدَّمَ) کے اسمِ فاعل کا کیا وزن ہوتا ہے؟",
    "options": [
      {
        "en": "مُتَفَعِّلٌ (Mutafa''ilun, e.g., مُتَقَدِّمٌ)",
        "ur": "مُتَفَعِّلٌ (مثلاً: مُتَقَدِّمٌ)"
      },
      {
        "en": "مُتَفَعَّلٌ",
        "ur": "مُتَفَعَّلٌ"
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
    "en": "What is the Passive Participle (اسم المفعول) pattern for Form V verbs (e.g., تَعَلَّمَ)?",
    "ur": "فارم V کے افعال (مثلاً تَعَلَّمَ) کے اسمِ مفعول کا کیا وزن ہوتا ہے؟",
    "options": [
      {
        "en": "مُتَفَعَّلٌ (Mutafa''alun, e.g., مُتَعَلَّمٌ)",
        "ur": "مُتَفَعَّلٌ (مثلاً: مُتَعَلَّمٌ)"
      },
      {
        "en": "مُتَفَعِّلٌ",
        "ur": "مُتَفَعِّلٌ"
      },
      {
        "en": "مَفْعُولٌ",
        "ur": "مَفْعُولٌ"
      },
      {
        "en": "تَفْعِيلٌ",
        "ur": "تَفْعِيلٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Masdar pattern for sound Form V verbs (e.g., تَكَلَّمَ)?",
    "ur": "صحیح فارم V افعال (مثلاً تَكَلَّمَ) کے مصدر کا کیا وزن ہوتا ہے؟",
    "options": [
      {
        "en": "تَفَعُّلٌ (Tafa''ulun, e.g., تَكَلُّمٌ)",
        "ur": "تَفَعُّلٌ (مثلاً: تَكَلُّمٌ)"
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
        "en": "إِفْعَالٌ",
        "ur": "إِفْعَالٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, what is the Masdar of Form V verb 'تَعَلَّمَ'?",
    "ur": "تمرين 1 کے مطابق فارم V فعل 'تَعَلَّمَ' کا مصدر کیا ہے؟",
    "options": [
      {
        "en": "تَعَلُّمٌ (Ta'allumun)",
        "ur": "تَعَلُّمٌ"
      },
      {
        "en": "تعليم",
        "ur": "تعليم"
      },
      {
        "en": "إعلام",
        "ur": "إعلام"
      },
      {
        "en": "استعلام",
        "ur": "استعلام"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Form the Imperative (فعل الأمر) for Form V verb 'تَذَكَّرَ' (to remember):",
    "ur": "فعل 'تَذَكَّرَ' (یاد کرنا) کا فعلِ امر کیا ہوگا؟",
    "options": [
      {
        "en": "تَذَكَّرْ (Tadhakkar - with Sukoon on Rā')",
        "ur": "تَذَكَّرْ (راء پر سکون کے ساتھ)"
      },
      {
        "en": "تَذَكَّرُ",
        "ur": "تَذَكَّرُ"
      },
      {
        "en": "أَذْكِرْ",
        "ur": "أَذْكِرْ"
      },
      {
        "en": "تَذَكُّرٌ",
        "ur": "تَذَكُّرٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the Present tense (فعل المضارع) of Form V verb 'تَقَدَّمَ'?",
    "ur": "فعل 'تَقَدَّمَ' کا فعلِ مضارع کیا ہے؟",
    "options": [
      {
        "en": "يَتَقَدَّمُ (Yataqaddamu)",
        "ur": "يَتَقَدَّمُ"
      },
      {
        "en": "يُقَدِّمُ",
        "ur": "يُقَدِّمُ"
      },
      {
        "en": "يُقْدِمُ",
        "ur": "يُقْدِمُ"
      },
      {
        "en": "يَسْتَقْدِمُ",
        "ur": "يَسْتَقْدِمُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the Active Participle (اسم الفاعل) of 'تَكَلَّمَ'?",
    "ur": "فعل 'تَكَلَّمَ' (بات کرنا) کا اسمِ فاعل کیا ہے؟",
    "options": [
      {
        "en": "مُتَكَلِّمٌ (Mutakallimun - with Kasra on Laam)",
        "ur": "مُتَكَلِّمٌ (لام پر کسرہ کے ساتھ)"
      },
      {
        "en": "مُتَكَلَّمٌ",
        "ur": "مُتَكَلَّمٌ"
      },
      {
        "en": "كَلِيمٌ",
        "ur": "كَلِيمٌ"
      },
      {
        "en": "مُكَلِّمٌ",
        "ur": "مُكَلِّمٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, in 'عَلَّمْتُهُ فَتَعَلَّمَ' (I taught him, so he learned), what does 'فَتَعَلَّمَ' express?",
    "ur": "تمرين 2 کے مطابق 'عَلَّمْتُهُ فَتَعَلَّمَ' میں فعل 'فَتَعَلَّمَ' کیا معنی ظاہر کرتا ہے؟",
    "options": [
      {
        "en": "Mutāwa'ah (مطاوعة - accepting and exhibiting the result of teaching)",
        "ur": "المطاوعة (تعلیم کے فعل کا اثر قبول کرنا)"
      },
      {
        "en": "Participation between two people",
        "ur": "دو افراد میں باہمی شرکت"
      },
      {
        "en": "Doubt",
        "ur": "شک و شبہ"
      },
      {
        "en": "Passive obligation",
        "ur": "مجبوری"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'كَسَّرْتُ الزُّجَاجَ فَتَكَسَّرَ', what type of relationship exists between 'كَسَّرَ' (Form II) and 'تَكَسَّرَ' (Form V)?",
    "ur": "جملے 'كَسَّرْتُ الزُّجَاجَ فَتَكَسَّرَ' میں 'كَسَّرَ' (باب تفعیل) اور 'تَكَسَّرَ' (باب تفعل) کا باہمی کیا تعلق ہے؟",
    "options": [
      {
        "en": "'كَسَّرَ' is Transitive Form II, and 'تَكَسَّرَ' is its Intransitive Form V Mutāwa'ah",
        "ur": "'كَسَّرَ' متعدی باب تفعیل ہے اور 'تَكَسَّرَ' اس کا لازم مطاوع باب تفعل ہے"
      },
      {
        "en": "Both are transitive verbs",
        "ur": "دونوں متعدی افعال ہیں"
      },
      {
        "en": "Both are passive voice",
        "ur": "دونوں غیر فاعلی افعال ہیں"
      },
      {
        "en": "There is no relationship",
        "ur": "کوئی تعلق نہیں ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Convert Form II 'قَرَّبَ' (to bring near) to its Form V Mutāwa'ah form:",
    "ur": "بابِ تفعیل 'قَرَّبَ' کو اس کے مطاوع بابِ تفعل (فارم V) میں تبدیل کریں:",
    "options": [
      {
        "en": "تَقَرَّبَ (Taqarraba - to draw near / become close)",
        "ur": "تَقَرَّبَ (قریب ہونا)"
      },
      {
        "en": "قَارَبَ",
        "ur": "قَارَبَ"
      },
      {
        "en": "أَقْرَبَ",
        "ur": "أَقْرَبَ"
      },
      {
        "en": "اسْتَقْرَبَ",
        "ur": "اسْتَقْرَبَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Convert Form II 'فَرَّقَ' (to divide/scatter) to its Form V Mutāwa'ah form:",
    "ur": "فعل 'فَرَّقَ' کو اس کے مطاوع بابِ تفعل میں تبدیل کریں:",
    "options": [
      {
        "en": "تَفَرَّقَ (Tafarraqa - to become scattered/divided)",
        "ur": "تَفَرَّقَ (متفرق ہونا/بکھر جانا)"
      },
      {
        "en": "فَارَقَ",
        "ur": "فَارَقَ"
      },
      {
        "en": "أَفْرَقَ",
        "ur": "أَفْرَقَ"
      },
      {
        "en": "افْتَرَقَ",
        "ur": "افْتَرَقَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, in the Quranic verse 'تَنَزَّلُ الـمَلاَئِكَةُ' (Qur'an 97:4), what was the original present verb before deletion?",
    "ur": "تمرين 3 کے مطابق قرآنی آیہ 'تَنَزَّلُ الـمَلاَئِكَةُ' میں حذف سے پہلے اصل فعلِ مضارع کیا تھا؟",
    "options": [
      {
        "en": "تَتَنَزَّلُ (Tatanazzalu - with two Tās)",
        "ur": "تَتَنَزَّلُ (دو تائیں)"
      },
      {
        "en": "يَتَنَزَّلُ",
        "ur": "يَتَنَزَّلُ"
      },
      {
        "en": "نَزَلَتْ",
        "ur": "نَزَلَتْ"
      },
      {
        "en": "أَنْزَلَ",
        "ur": "أَنْزَلَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Shorten 'تَتَذَكَّرُونَ' by deleting one Tā':",
    "ur": "فعل 'تَتَذَكَّرُونَ' سے ایک تاء حذف کر کے مختصر شکل بنائیں:",
    "options": [
      {
        "en": "تَذَكَّرُونَ (Tadhakkarūna)",
        "ur": "تَذَكَّرُونَ"
      },
      {
        "en": "يَتَذَكَّرُونَ",
        "ur": "يَتَذَكَّرُونَ"
      },
      {
        "en": "تَذَكَّرُوا",
        "ur": "تَذَكَّرُوا"
      },
      {
        "en": "مُتَذَكِّرُونَ",
        "ur": "مُتَذَكِّرُونَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Shorten 'تَتَكَلَّمُونَ' in present tense by deleting one Tā':",
    "ur": "فعل 'تَتَكَلَّمُونَ' کا ایک تاء کے حذف کے ساتھ درست روپ کیا ہے؟",
    "options": [
      {
        "en": "تَكَلَّمُونَ (Takallamūna)",
        "ur": "تَكَلَّمُونَ"
      },
      {
        "en": "يَتَكَلَّمُونَ",
        "ur": "يَتَكَلَّمُونَ"
      },
      {
        "en": "تَكَلَّمُوا",
        "ur": "تَكَلَّمُوا"
      },
      {
        "en": "متكلمون",
        "ur": "متكلمون"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'أَفَلاَ تَفَكَّرُونَ' (Qur'an 6:50), why does 'تَفَكَّرُونَ' have only one Tā'?",
    "ur": "قرآنی آیہ 'أَفَلاَ تَفَكَّرُونَ' میں 'تَفَكَّرُونَ' میں ایک ہی تاء کیوں آئی ہے؟",
    "options": [
      {
        "en": "Because one of the two present Tās was deleted for morphological lightness (حُذِفَتْ إِحْدَى التَّائَيْنِ لِلتَّخْفِيفِ)",
        "ur": "تخفیف و آسانی کی بنا پر دو میں سے ایک تاء حذف کر دی گئی ہے (اصل: تَتَفَكَّرُونَ)"
      },
      {
        "en": "Because it is past tense",
        "ur": "فعلِ ماضی ہونے کی وجہ سے"
      },
      {
        "en": "Because it is an imperative verb",
        "ur": "فعلِ امر ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Mabni",
        "ur": "مبنی ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, in 'لَمَّا وَصَلَ الـمُدِيرُ بَدَأَ الاِجْتِمَاعُ', what type of 'لَمَّا' is used?",
    "ur": "تمرين 4 کے مطابق 'لَمَّا وَصَلَ الـمُدِيرُ بَدَأَ الاِجْتِمَاعُ' میں 'لَمَّا' کی کون سی قسم استعمال ہوئی ہے؟",
    "options": [
      {
        "en": "Lammā al-Heeniyyah (لَمَّا الحِينِيَّةُ - time dharf meaning 'when' entering past verb)",
        "ur": "لما الحینیہ (ظرفِ زمان بمعنی 'جب' جو ماضی پر داخل ہوتا ہے)"
      },
      {
        "en": "Lammā al-Jāzimah",
        "ur": "لما الجازمہ"
      },
      {
        "en": "Lammā of exception",
        "ur": "استثنائیہ"
      },
      {
        "en": "Harf Nida",
        "ur": "حرفِ نداء"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'فَلَمَّا نَجَّاكُمْ إِلَى البَرِّ أَعْرَضْتُمْ' (Qur'an 17:67), how is 'لَمَّا' parsed?",
    "ur": "قرآنی آیہ 'فَلَمَّا نَجَّاكُمْ إِلَى البَرِّ أَعْرَضْتُمْ' میں لفظ 'لَمَّا' کا اعرابی موقع کیا ہے؟",
    "options": [
      {
        "en": "Dharf Zamaan Mabni on Sukoon in position of Nasb (ظرف زمان مبني على السكون في محل نصب)",
        "ur": "سکون پر مبنی ظرفِ زمان (في محل نصب)"
      },
      {
        "en": "Harf Jazm",
        "ur": "حرفِ جزم"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Harf Jar",
        "ur": "حرفِ جر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the difference in verb tense following 'لَمَّا' in 'لَمَّا يَقْضِ مَا أَمَرَهُ' vs 'لَمَّا جَاءَ نَصْرُ اللَّهِ'?",
    "ur": "جملوں 'لَمَّا يَقْضِ' اور 'لَمَّا جَاءَ' میں 'لَمَّا' کے بعد افعال کا کیا بنیادی فرق ہے؟",
    "options": [
      {
        "en": "The first is Lammā al-Jāzimah with Present Tense; the second is Lammā al-Heeniyyah with Past Tense",
        "ur": "پہلی 'لما الجازمہ' ہے جو مضارع پر آئی ہے؛ دوسری 'لما الحینیہ' ہے جو ماضی پر آئی ہے"
      },
      {
        "en": "Both are identical in governance",
        "ur": "عمل میں دونوں ایک جیسی ہیں"
      },
      {
        "en": "The second is a preposition",
        "ur": "دوسری حرفِ جر ہے"
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
    "en": "Complete with Lammā al-Heeniyyah: '... سَمِعْتُ الأَذَانَ ذَهَبْتُ إِلَى الـمَسْجِدِ' (When I heard the Adhan, I went to the mosque):",
    "ur": "لما الحینیہ سے جملہ مکمل کریں: '... سَمِعْتُ الأَذَانَ ذَهَبْتُ إِلَى الـمَسْجِدِ':",
    "options": [
      {
        "en": "لَمَّا (Lammā)",
        "ur": "لَمَّا"
      },
      {
        "en": "إِنَّمَا",
        "ur": "إِنَّمَا"
      },
      {
        "en": "كَيْفَمَا",
        "ur": "كَيْفَمَا"
      },
      {
        "en": "إِنْ",
        "ur": "إِنْ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'إِنَّا - مَعْشَرَ الـمُسْلِمِينَ - نُحِبُّ السَّلاَمَ', why is 'مَعْشَرَ' Mansoob with Fatha?",
    "ur": "تمرين 5 کے مطابق 'إِنَّا - مَعْشَرَ الـمُسْلِمِينَ - نُحِبُّ السَّلاَمَ' میں لفظ 'مَعْشَرَ' کیوں منصوب بالفتحة ہے؟",
    "options": [
      {
        "en": "Mansoob on Ikhtisās as Maf'ool Bihi for omitted verb 'أَخُصُّ' (منصوب على الاختصاص)",
        "ur": "حذف شدہ فعل 'أَخُصُّ' کے لیے اسمِ منصوب علی الاختصاص بننے کی وجہ سے"
      },
      {
        "en": "Ism Inna",
        "ur": "اسم انّ"
      },
      {
        "en": "Khabar Inna",
        "ur": "خبر انّ"
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
    "en": "In 'أَنَا - الطَّالِبَ - أَجْتَهِدُ فِي دِرَاسَتِي', what is 'الطَّالِبَ'?",
    "ur": "جملے 'أَنَا - الطَّالِبَ - أَجْتَهِدُ فِي دِرَاسَتِي' میں لفظ 'الطَّالِبَ' کا کیا نحوی منصب ہے؟",
    "options": [
      {
        "en": "Noun Mansoob on Ikhtisās defined with 'Al' (اسم منصوب على الاختصاص محلى بـ أل)",
        "ur": "'ال' کے ساتھ معرفہ اسم، منصوب علی الاختصاص"
      },
      {
        "en": "Badal Marfoo'",
        "ur": "بدل مرفوع"
      },
      {
        "en": "Khabar Marfoo'",
        "ur": "خبر مرفوع"
      },
      {
        "en": "Na't Marfoo'",
        "ur": "نعت مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'تَكَلَّمَ الـمُتَكَلِّمُ تَكَلُّماً':",
    "ur": "پورے جملے 'تَكَلَّمَ الـمُتَكَلِّمُ تَكَلُّماً' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "تَكَلَّمَ: فعل ماضٍ، الـمُتَكَلِّمُ: فاعل مرفوع بالضمة (اسم فاعل من باب تفعل)، تَكَلُّماً: مفعول مطلق منصوب بالفتحة",
        "ur": "تَكَلَّمَ: فعل ماضی، الـمُتَكَلِّمُ: فاعل مرفوع بالضمة (اسم فاعل)، تَكَلُّماً: مفعول مطلق منصوب بالفتحة"
      },
      {
        "en": "تكلم: مبتدأ، المتكلم: خبر، تكلما: مفعول به",
        "ur": "تكلم مبتدأ، المتكلم خبر، تكلماً مفعول بہ"
      },
      {
        "en": "تكلم: حرف، المتكلم: اسم مجرور، تكلما: حال",
        "ur": "تكلم حرف، المتكلم اسم مجرور، تكلماً حال"
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
    "en": "Which statement accurately summarizes the core grammar rules taught in Lesson 20?",
    "ur": "سبق 20 کے بنیادی گرامر موضوعات کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers Form V verb (تَفَعَّلَ), Mutāwa'ah meaning, deletion of one Tā' in present, Lammā al-Heeniyyah, and Al-Ikhtisās style",
        "ur": "اس سبق میں بابِ تفعل، معنیِ مطاوعہ، مضارع میں ایک تاء کا حذف، لما الحینیہ، اور اسلوبِ اختصاص کا احاطہ کیا گیا ہے"
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
        "en": "Covers vocative calls only",
        "ur": "صرف منادیٰ کا احاطہ"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 20 Quiz ---');
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

    // 3. Find or Create Lecture 20 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 20 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 20 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 20', 20)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 20: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 20 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 20))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 20.`);
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

    // 5. Create the quiz for Book 3 Lesson 20
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 20 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 20 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
