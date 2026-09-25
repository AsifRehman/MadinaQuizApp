import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is 'Al-Hal' (الحَالُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'حال' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "An extra (فضلة) Mansoob noun that explains the state/condition of 'Sahib al-Hal' during the action",
        "ur": "وہ زائد (فضلة) منصوب اسم جو فعل کی انجام دہی کے وقت 'صاحب الحال' کی حالت و ہیئت بیان کرے"
      },
      {
        "en": "A required noun that functions as the subject of the sentence",
        "ur": "وہ عمدة اسم جو جملے کا فاعل بنے"
      },
      {
        "en": "A particle used to express future tense",
        "ur": "وہ حرف جو مستقبل کے لیے آئے"
      },
      {
        "en": "A noun that specifies number count",
        "ur": "وہ اسم جو عدد کی گنتی بتائے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the general rule regarding the definiteness of Sahib al-Hal (صاحب الحال) and Hal (الحال)?",
    "ur": "صاحب الحال اور حال کی وسعت (معرفہ و نکرہ ہونا) کے بارے میں کیا بنیادی قاعدہ ہے؟",
    "options": [
      {
        "en": "Sahib al-Hal is usually Definite (معرفة) and Hal is strictly Indefinite (نكرة)",
        "ur": "صاحب الحال عموماً معرفہ ہوتا ہے اور حال لازماً نکرہ ہوتا ہے"
      },
      {
        "en": "Both Sahib al-Hal and Hal must be Definite",
        "ur": "صاحب الحال اور حال دونوں کا معرفہ ہونا ضروری ہے"
      },
      {
        "en": "Sahib al-Hal is Indefinite and Hal is Definite",
        "ur": "صاحب الحال نکرہ اور حال معرفہ ہوتا ہے"
      },
      {
        "en": "Both must be Majroor with Kasra",
        "ur": "دونوں کا مجرور ہونا لازمی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the primary types of Hal (أنواع الحال) taught in Lesson 13?",
    "ur": "سبق 13 میں حال کی کتنی بنیادی اقسام بیان کی گئی ہیں؟",
    "options": [
      {
        "en": "حال مفردة، حال جملة اسمية، حال جملة فعلية، حال شبه جملة",
        "ur": "حال مفردة، حال جملة اسمية، حال جملة فعلية، حال شبه جملة"
      },
      {
        "en": "حال ماضی، حال مضارع، حال امر",
        "ur": "حال ماضی، حال مضارع، حال امر"
      },
      {
        "en": "حال مرفوعة، حال مجرورة، حال مجزومة",
        "ur": "حال مرفوعة، حال مجرورة، حال مجزومة"
      },
      {
        "en": "حال معرفة، حال نكرة، حال مضاف",
        "ur": "حال معرفة، حال نكرة، حال مضاف"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'جَاءَ الطَّالِبُ رَاكِباً' (The student came riding), what type of Hal is 'رَاكِباً'?",
    "ur": "جملے 'جَاءَ الطَّالِبُ رَاكِباً' میں لفظ 'رَاكِباً' حال کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Hal Mufradah (حال مفردة - single word Hal)",
        "ur": "حال مفردہ (واحد لفظی حال)"
      },
      {
        "en": "Hal Jumla Ismiyyah",
        "ur": "حال جملہ اسمیہ"
      },
      {
        "en": "Hal Jumla Fi'liyyah",
        "ur": "حال جملہ فعلیہ"
      },
      {
        "en": "Hal Shibah Jumla",
        "ur": "حال شبہ جملہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When Hal is a Nominal Sentence (حال جملة اسمية, e.g., 'خَرَجْتُ وَالشَّمْسُ طَالِعَةٌ'), what connects it to Sahib al-Hal?",
    "ur": "حال جب جملہ اسمیہ بن کر آئے (مثلاً 'خَرَجْتُ وَالشَّمْسُ طَالِعَةٌ') تو اسے صاحب الحال سے کون سا رابط جوڑتا ہے؟",
    "options": [
      {
        "en": "Waw al-Hal (واو الحالية) and/or a matching pronoun (الضمير)",
        "ur": "واو الحالیہ اور/یا صاحب الحال کے مطابق ضمیر"
      },
      {
        "en": "The particle 'أنَّ'",
        "ur": "حرف 'أنَّ'"
      },
      {
        "en": "The particle 'إنْ' الشرطية",
        "ur": "حرفِ شرط 'إنْ'"
      },
      {
        "en": "Preposition Min",
        "ur": "حرفِ جر مِنْ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Waw al-Hal' (واو الحالية) in Arabic grammar?",
    "ur": "عربی گرامر میں 'واو الحالیہ' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A Waw used to introduce a state/condition sentence, translating as 'while / when'",
        "ur": "وہ واؤ جو جملہ حالیہ کی شروعات میں آئے اور بمعنی 'اس حال میں کہ / جب' ہو"
      },
      {
        "en": "The Waw of conjunction meaning 'and' (واو العطف)",
        "ur": "عاطفہ واؤ (جو حرفِ عطف ہے)"
      },
      {
        "en": "The Waw of oath meaning 'I swear by' (واو القسم)",
        "ur": "قسمیہ واؤ"
      },
      {
        "en": "The Waw of plural masculines (واو الجماعة)",
        "ur": "واو الجماعة"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When a past verb sentence serves as Hal (حال جملة فعلية فعلها ماضٍ), what particle usually precedes the verb?",
    "ur": "حال جب فعلِ ماضی پر مشتمل جملہ فعلیہ بن کر آئے تو فعل سے پہلے عموماً کون سا لفظ آتا ہے؟",
    "options": [
      {
        "en": "Preceded by 'قَدْ' or 'وَقَدْ' (e.g., جَاءَ حَامِدٌ وَقَدْ نَجَحَ)",
        "ur": "اس سے پہلے 'قَدْ' یا 'وَقَدْ' آتا ہے (جیسے: جَاءَ حَامِدٌ وَقَدْ نَجَحَ)"
      },
      {
        "en": "Preceded by 'سَوْفَ'",
        "ur": "اس سے پہلے 'سوف' آتا ہے"
      },
      {
        "en": "Preceded by 'لَنْ'",
        "ur": "اس سے پہلے 'لن' آتا ہے"
      },
      {
        "en": "Preceded by 'كَيْ'",
        "ur": "اس سے پہلے 'کی' آتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'رَأَيْتُ الطَّائِرَ بَيْنَ الأَغْصَانِ' (I saw the bird among the branches), what type of Hal is 'بَيْنَ الأَغْصَانِ'?",
    "ur": "جملے 'رَأَيْتُ الطَّائِرَ بَيْنَ الأَغْصَانِ' میں 'بَيْنَ الأَغْصَانِ' حال کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Hal Shibah Jumla (حال شبه جملة - Zarf)",
        "ur": "حال شبہ جملہ (ظرف)"
      },
      {
        "en": "Hal Mufradah",
        "ur": "حال مفردہ"
      },
      {
        "en": "Hal Jumla Ismiyyah",
        "ur": "حال جملہ اسمیہ"
      },
      {
        "en": "Hal Jumla Fi'liyyah",
        "ur": "حال جملہ فعلیہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How must a Hal Mufradah agree with Sahib al-Hal?",
    "ur": "حالِ مفردہ کا صاحب الحال کے ساتھ کن امور میں مطابق ہونا واجب ہے؟",
    "options": [
      {
        "en": "In Gender (Mudhakar/Mu'annath) and Number (Singular/Dual/Plural)",
        "ur": "تذكیر و تانیث (جنس) اور واحد/تثنیہ/جمع (عدد) میں"
      },
      {
        "en": "In Definiteness (Ma'rifah/Nakirah)",
        "ur": "معرفہ نکرہ ہونے میں"
      },
      {
        "en": "In prepositional ending",
        "ur": "حرفِ جر کے اضافے میں"
      },
      {
        "en": "No agreement is required",
        "ur": "کسی مطابقت کی ضرورت نہیں ہوتی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'جَاءَتِ الطَّالِبَاتُ ضَاحِكَاتٍ', why is Hal 'ضَاحِكَاتٍ' ending with Kasratayn?",
    "ur": "جملے 'جَاءَتِ الطَّالِبَاتُ ضَاحِكَاتٍ' میں حال 'ضَاحِكَاتٍ' کے آخر میں کسرتین (تنوینِ کسرہ) کیوں ہے؟",
    "options": [
      {
        "en": "Because it is Jama' Mu'annath Salim, which takes Kasra in Mansoob state",
        "ur": "کیونکہ یہ جمع مؤنث سالم ہے اور حالتِ نصب میں کسرہ لیتی ہے"
      },
      {
        "en": "Because it is Majroor by a preposition",
        "ur": "حرفِ جر کی وجہ سے مجرور ہونے کی بنا پر"
      },
      {
        "en": "Because it is Mudaf Ilayh",
        "ur": "مضاف الیہ ہونے کی بنا پر"
      },
      {
        "en": "Because it is Mabni on Kasra",
        "ur": "کسرہ پر مبنی ہونے کی بنا پر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, complete with Hal Mufradah for dual masculine: 'جَاءَ الطَّالِبَانِ ...' (The two students came laughing):",
    "ur": "تمرين 1 کے مطابق تثنیہ مذکر کے لیے حالِ مفردہ سے جملہ مکمل کریں: 'جَاءَ الطَّالِبَانِ ...':",
    "options": [
      {
        "en": "ضَاحِكَيْنِ (Dhāhikayni - Dual Mansoob with Yā')",
        "ur": "ضَاحِكَيْنِ (تثنیہ منصوب بالیاء)"
      },
      {
        "en": "ضَاحِكَانِ",
        "ur": "ضَاحِكَانِ"
      },
      {
        "en": "ضَاحِكاً",
        "ur": "ضَاحِكاً"
      },
      {
        "en": "ضَاحِكُونَ",
        "ur": "ضَاحِكُونَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete with Hal Mufradah for Jama' Mudhakar Salim: 'وَصَلَ الـمُسَافِرُونَ ...' (The travelers arrived tired):",
    "ur": "جمع مذكر سالم کے لیے حالِ مفردہ سے جملہ مکمل کریں: 'وَصَلَ الـمُسَافِرُونَ ...':",
    "options": [
      {
        "en": "مُتْعَبِينَ (Mut'abīna - Plural Mansoob with Yā')",
        "ur": "مُتْعَبِينَ (جمع مذكر منصوب بالیاء)"
      },
      {
        "en": "مُتْعَبُونَ",
        "ur": "مُتْعَبُونَ"
      },
      {
        "en": "مُتْعَبًا",
        "ur": "مُتْعَبًا"
      },
      {
        "en": "مُتْعَبَةٍ",
        "ur": "مُتْعَبَةٍ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete with Hal Mufradah for feminine singular: 'رَجَعَتِ الطَّالِبَةُ ...' (The female student returned happy):",
    "ur": "واحد مؤنث کے لیے حالِ مفردہ سے جملہ مکمل کریں: 'رَجَعَتِ الطَّالِبَةُ ...':",
    "options": [
      {
        "en": "مَسْرُورَةً (Masrooratan - Feminine Singular Mansoob)",
        "ur": "مَسْرُورَةً (واحد مؤنث منصوب)"
      },
      {
        "en": "مَسْرُورٌ",
        "ur": "مَسْرُورٌ"
      },
      {
        "en": "مَسْرُورَاتٍ",
        "ur": "مَسْرُورَاتٍ"
      },
      {
        "en": "مَسْرُورَانِ",
        "ur": "مَسْرُورَانِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete: 'دَخَلَ الطُّلاَّبُ الفَصْلَ ...' (The students entered the class organized):",
    "ur": "جملہ مکمل کریں: 'دَخَلَ الطُّلاَّبُ الفَصْلَ ...':",
    "options": [
      {
        "en": "مُنَظَّمِينَ (Munazzamīna - Plural Mansoob)",
        "ur": "مُنَظَّمِينَ (جمع منصوب بالیاء)"
      },
      {
        "en": "مُنَظَّمُونَ",
        "ur": "مُنَظَّمُونَ"
      },
      {
        "en": "مُنَظَّماً",
        "ur": "مُنَظَّماً"
      },
      {
        "en": "مُنَظَّمَةً",
        "ur": "مُنَظَّمَةً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, complete with Jumla Ismiyyah Hal: 'دَخَلْتُ الـمَسْجِدَ ...' (I entered the mosque while the Imam was praying):",
    "ur": "تمرين 2 کے مطابق جملہ اسمیہ حال سے جملہ مکمل کریں: 'دَخَلْتُ الـمَسْجِدَ ...':",
    "options": [
      {
        "en": "وَالإِمَامُ يُصَلِّي (Wa al-imāmu yusallī - with Waw al-Hal)",
        "ur": "وَالإِمَامُ يُصَلِّي (واو الحالیہ کے ساتھ)"
      },
      {
        "en": "الإِمَامَ يُصَلِّي",
        "ur": "الإِمَامَ يُصَلِّي"
      },
      {
        "en": "مُصَلِّياً الإِمَامُ",
        "ur": "مُصَلِّياً الإِمَامُ"
      },
      {
        "en": "إِلَى الإِمَامِ",
        "ur": "إِلَى الإِمَامِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Complete: 'سَافَرْتُ إِلَى مَكَّةَ ...' (I traveled to Makkah while the rain was falling):",
    "ur": "جملہ اسمیہ حال سے مکمل کریں: 'سَافَرْتُ إِلَى مَكَّةَ ...':",
    "options": [
      {
        "en": "وَالمَطَرُ يَنْزِلُ (Wa al-mataru yanzilu)",
        "ur": "وَالمَطَرُ يَنْزِلُ"
      },
      {
        "en": "المَطَرِ يَنْزِلُ",
        "ur": "المَطَرِ يَنْزِلُ"
      },
      {
        "en": "مَطَراً يَنْزِلُ",
        "ur": "مَطَراً يَنْزِلُ"
      },
      {
        "en": "فِي المَطَرِ",
        "ur": "فِي المَطَرِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'خَرَجَ حَامِدٌ وَهُوَ يَبْتَسِمُ', what connects the Hal sentence 'وَهُوَ يَبْتَسِمُ' to Sahib al-Hal 'حَامِدٌ'?",
    "ur": "جملے 'خَرَجَ حَامِدٌ وَهُوَ يَبْتَسِمُ' میں جملہ حالیہ کو صاحب الحال 'حَامِدٌ' سے کون سے دو رابط جوڑ رہے ہیں؟",
    "options": [
      {
        "en": "Both Waw al-Hal (الواو) and the Pronoun 'هُوَ' (الضمير)",
        "ur": "واو الحالیہ (الواو) اور ضمیر 'هُوَ' (الضمير) دونوں"
      },
      {
        "en": "Only the verb yabtasimu",
        "ur": "صرف فعل يبتسم"
      },
      {
        "en": "Only the proper noun Hamid",
        "ur": "صرف اسم حامد"
      },
      {
        "en": "No connector is present",
        "ur": "کوئی رابط نہیں ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "What is the grammatical position of the entire sentence 'وَهُوَ يَبْتَسِمُ' in 'خَرَجَ حَامِدٌ وَهُوَ يَبْتَسِمُ'?",
    "ur": "جملے 'وَهُوَ يَبْتَسِمُ' کا پورے کے پورے جملے کے طور پر اعرابی محل کیا ہے؟",
    "options": [
      {
        "en": "In the position of Nasb as Hal (في محل نصب حال)",
        "ur": "حال بننے کی بنا پر في محل نصب"
      },
      {
        "en": "In the position of Raf' as Fa'il",
        "ur": "فاعل بننے کی بنا پر في محل رفع"
      },
      {
        "en": "In the position of Jar",
        "ur": "في محل جر"
      },
      {
        "en": "No grammatical position",
        "ur": "لا محل لها من الإعراب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, complete: 'وَصَلَ الـضَّيْفُ ...' (The guest arrived while smiling / present verb Hal):",
    "ur": "تمرين 3 کے مطابق فعلِ مضارع سے جملہ فعلیہ حال مکمل کریں: 'وَصَلَ الـضَّيْفُ ...':",
    "options": [
      {
        "en": "يَبْتَسِمُ (Yabtasimu - present verb sentence Hal)",
        "ur": "يَبْتَسِمُ (جملہ فعلیہ مضارع حال)"
      },
      {
        "en": "وَقَدْ ابْتَسَمَ",
        "ur": "وَقَدْ ابْتَسَمَ"
      },
      {
        "en": "مُبْتَسِماً",
        "ur": "مُبْتَسِماً"
      },
      {
        "en": "فِي ابْتِسَامٍ",
        "ur": "فِي ابْتِسَامٍ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Complete with past verb Hal: 'جَاءَ حَامِدٌ ...' (Hamid came having succeeded):",
    "ur": "فعلِ ماضی والے جملہ فعلیہ حال سے مکمل کریں: 'جَاءَ حَامِدٌ ...':",
    "options": [
      {
        "en": "وَقَدْ نَجَحَ (Wa qad najaha - past verb preceded by Wa + Qad)",
        "ur": "وَقَدْ نَجَحَ (واو + قد + فعلِ ماضی کے ساتھ)"
      },
      {
        "en": "نَاجِحاً",
        "ur": "نَاجِحاً"
      },
      {
        "en": "يَنْجَحُ",
        "ur": "يَنْجَحُ"
      },
      {
        "en": "فِي نَجَاحٍ",
        "ur": "فِي نَجَاحٍ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'رَأَيْتُ الأَوْلاَدَ يَلْعَبُونَ', what is the Hal sentence?",
    "ur": "جملے 'رَأَيْتُ الأَوْلاَدَ يَلْعَبُونَ' میں جملہ حالیہ کیا ہے؟",
    "options": [
      {
        "en": "The verbal sentence 'يَلْعَبُونَ' in position of Nasb",
        "ur": "جملہ فعلیہ 'يَلْعَبُونَ' (في محل نصب)"
      },
      {
        "en": "The word 'الأَوْلاَدَ'",
        "ur": "لفظ 'الأولاد'"
      },
      {
        "en": "The verb 'رَأَيْتُ'",
        "ur": "فعل 'رأيت'"
      },
      {
        "en": "There is no Hal",
        "ur": "کوئی حال نہیں ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'عَادَ أَبِي وَقَدْ غَرَبَتِ الشَّمْسُ', why is 'وَقَدْ' used before 'غَرَبَتِ'?",
    "ur": "جملے 'عَادَ أَبِي وَقَدْ غَرَبَتِ الشَّمْسُ' میں فعلِ ماضی 'غَرَبَتِ' سے پہلے 'وَقَدْ' لانا کیوں ضروری ہے؟",
    "options": [
      {
        "en": "Because when a past verb sentence serves as Hal, it is typically linked with Waw and Qad",
        "ur": "کیونکہ فعلِ ماضی جب جملہ حالیہ بنتا ہے تو اس کا 'واو' اور 'قد' کے ساتھ متصل ہونا ضابطہ ہے"
      },
      {
        "en": "To make the verb present tense",
        "ur": "فعل کو مضارع بنانے کے لیے"
      },
      {
        "en": "Because 'الشمس' is masculine",
        "ur": "کیونکہ الشمس مذکر ہے"
      },
      {
        "en": "To negate the action",
        "ur": "نفی ظاہر کرنے کے لیے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, in 'رَأَيْتُ الـهِلاَلَ بَيْنَ السَّحَابِ', what is the Shibah Jumla Hal?",
    "ur": "تمرين 4 کے جملے 'رَأَيْتُ الـهِلاَلَ بَيْنَ السَّحَابِ' میں شبہ جملہ حال کیا ہے؟",
    "options": [
      {
        "en": "'بَيْنَ السَّحَابِ' (Zarf + Mudaf Ilayh in position of Nasb)",
        "ur": "'بَيْنَ السَّحَابِ' (ظرف و مضاف الیہ في محل نصب)"
      },
      {
        "en": "The word 'الهِلاَلَ'",
        "ur": "لفظ 'الهلال'"
      },
      {
        "en": "The verb 'رَأَيْتُ'",
        "ur": "فعل 'رأيت'"
      },
      {
        "en": "The whole sentence",
        "ur": "پورا جملہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'شَاهَدْتُ الإِمَامَ عَلَى الـمِنْبَرِ', what type of Hal is 'عَلَى الـمِنْبَرِ'?",
    "ur": "جملے 'شَاهَدْتُ الإِمَامَ عَلَى الـمِنْبَرِ' میں 'عَلَى الـمِنْبَرِ' حال کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Shibah Jumla Jar wa Majroor (شبه جملة جار ومجرور في محل نصب)",
        "ur": "شبہ جملہ جار و مجرور (في محل نصب)"
      },
      {
        "en": "Hal Mufradah",
        "ur": "حال مفردہ"
      },
      {
        "en": "Hal Jumla Ismiyyah",
        "ur": "حال جملہ اسمیہ"
      },
      {
        "en": "Hal Jumla Fi'liyyah",
        "ur": "حال جملہ فعلیہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Complete with Shibah Jumla Hal: 'رَأَيْتُ العُصْفُورَ ...' (I saw the sparrow on the branch):",
    "ur": "شبہ جملہ حال سے جملہ مکمل کریں: 'رَأَيْتُ العُصْفُورَ ...':",
    "options": [
      {
        "en": "عَلَى الغُصْنِ ('Alā al-ghusni - Jar wa Majroor)",
        "ur": "عَلَى الغُصْنِ (جار و مجرور)"
      },
      {
        "en": "غُصْناً",
        "ur": "غُصْناً"
      },
      {
        "en": "وَهُوَ غُصْنٌ",
        "ur": "وَهُوَ غُصْنٌ"
      },
      {
        "en": "يَغْصُنُ",
        "ur": "يَغْصُنُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَلاَ تَقْرَبُوا الصَّلاَةَ وَأَنْتُمْ سُكَارَى' (Qur'an 4:43), what type of Hal is 'وَأَنْتُمْ سُكَارَى'?",
    "ur": "قرآنی آیہ 'وَلاَ تَقْرَبُوا الصَّلاَةَ وَأَنْتُمْ سُكَارَى' میں 'وَأَنْتُمْ سُكَارَى' حال کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Hal Jumla Ismiyyah (جملة اسمية في محل نصب حال with Waw al-Hal)",
        "ur": "حال جملہ اسمیہ (واو الحالیہ کے ساتھ في محل نصب)"
      },
      {
        "en": "Hal Mufradah",
        "ur": "حال مفردہ"
      },
      {
        "en": "Hal Jumla Fi'liyyah",
        "ur": "حال جملہ فعلیہ"
      },
      {
        "en": "Hal Shibah Jumla",
        "ur": "حال شبہ جملہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'فَخَرَجَ مِنْهَا خَائِفاً يَتَرَقَّبُ' (Qur'an 28:21), how many Hal forms follow the verb 'خَرَجَ'?",
    "ur": "آیت مبارکہ 'فَخَرَجَ مِنْهَا خَائِفاً يَتَرَقَّبُ' میں فعل 'خَرَجَ' کے بعد کتنی حالیں مسلسل آئی ہیں؟",
    "options": [
      {
        "en": "Two Hals: 'خَائِفاً' (Hal Mufradah) and 'يَتَرَقَّبُ' (Hal Jumla Fi'liyyah)",
        "ur": "دو حالیں: 'خَائِفاً' (حال مفردہ) اور 'يَتَرَقَّبُ' (حال جملہ فعلیہ)"
      },
      {
        "en": "Only one Hal",
        "ur": "صرف ایک حال"
      },
      {
        "en": "Three Hals",
        "ur": "تین حالیں"
      },
      {
        "en": "No Hal is present",
        "ur": "کوئی حال نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'ادْخُلُوهَا بِسَلاَمٍ آمِنِينَ' (Qur'an 15:46), what is the sign of Nasb for Hal 'آمِنِينَ'?",
    "ur": "قرآنی آیہ 'ادْخُلُوهَا بِسَلاَمٍ آمِنِينَ' میں حال 'آمِنِينَ' کی اعرابی علامت کیا ہے؟",
    "options": [
      {
        "en": "Yā' (ياء) because it is Jama' Mudhakar Salim (منصوب بالياء)",
        "ur": "جمع مذكر سالم ہونے کی وجہ سے یاء (منصوب بالياء)"
      },
      {
        "en": "Fatha on Noon",
        "ur": "نون پر فتحہ"
      },
      {
        "en": "Kasra",
        "ur": "کسرہ"
      },
      {
        "en": "Damma",
        "ur": "ضمہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'جَاءَ الطَّالِبُ يَبْتَسِمُ':",
    "ur": "پورے جملے 'جَاءَ الطَّالِبُ يَبْتَسِمُ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "جَاءَ: فعل ماضٍ، الطَّالِبُ: فاعل مرفوع بالضمة (صاحب الحال)، يَبْتَسِمُ: فعل مضارع والفاعل ضمير مستتر والجملة الفعلية في محل نصب حال",
        "ur": "جَاءَ: فعل ماضی، الطَّالِبُ: فاعل مرفوع بالضمة (صاحب الحال)، يَبْتَسِمُ: فعل مضارع مع فاعل مستتر، اور پورا جملہ فعلیہ في محل نصب حال"
      },
      {
        "en": "جاء: مبتدأ، الطالب: خبر، يبتسم: مفعول به",
        "ur": "جاء مبتدأ، الطالب خبر، يبتسم مفعول بہ"
      },
      {
        "en": "جاء: حرف، الطالب: اسم مجرور، يبتسم: نعت",
        "ur": "جاء حرف، الطالب اسم مجرور، يبتسم نعت"
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
    "en": "Which statement accurately distinguishes 'Hal' from 'Na't' (Adjective)?",
    "ur": "'حال' اور 'نعت' (صفت) کے بنیادی اعرابی و صرفی فرق کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Hal is ALWAYS Indefinite while its Sahib al-Hal is Definite, and Hal is always Mansoob; whereas Na't matches its Man'oot in Definiteness/Indefiniteness and in ALL I'rab cases",
        "ur": "حال ہمیشہ نکرہ ہوتا ہے جبکہ صاحب الحال معرفہ ہوتا ہے اور حال کا منصوب ہونا لازم ہے؛ جبکہ نعت اپنے منعت کی معرفہ/نکرہ ہونے میں اور تمام اعرابی حالتوں میں پیروی کرتی ہے"
      },
      {
        "en": "Both are identical in all grammatical rules",
        "ur": "تمام قواعد میں دونوں بالکل ایک جیسے ہیں"
      },
      {
        "en": "Hal is always Definite and Na't is always Indefinite",
        "ur": "حال معرفہ اور نعت نکرہ ہوتی ہے"
      },
      {
        "en": "Hal is always Majroor",
        "ur": "حال ہمیشہ مجرور ہوتا ہے"
      }
    ],
    "correct": 0
  }
];

async function run() {
  try {
    console.log('--- Seeding Book 3 Lesson 13 Quiz ---');
    console.log('Total questions to seed:', questionsData.length);

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

    // 2. Find or Create Lecture 13 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 13 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 13 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 13', 13)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 13: ID ${lectureId}`);
    }

    // 3. CAREFUL DELETION: Find existing Book 3 Lesson 13 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 13))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 13.`);
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

    // 4. Create the quiz for Book 3 Lesson 13
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 13 Quiz', 'Daily', 1)
      RETURNING id, title
    `;
    const newQuizId = newQuiz.id;
    console.log(`Created new Quiz: ID ${newQuizId} ("${newQuiz.title}")`);

    // 5. Insert all questions with part, en, ur, options, correct_option_index
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 13 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
