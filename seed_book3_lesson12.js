import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL || process.env.DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is 'Al-Tamyeez' (التَّمْيِيزُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'تمیز' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "An indefinite noun specifying and clarifying ambiguity in a preceding noun or sentence structure",
        "ur": "وہ نکرہ اسم جو اپنے سے پہلے اسم یا جملے کے ابہام و پوشیدگی کو دور کرے"
      },
      {
        "en": "A definite noun modifying the subject",
        "ur": "وہ معرفہ اسم جو فاعل کی صفت بیان کرے"
      },
      {
        "en": "A verb indicating cause or effect",
        "ur": "وہ فعل جو سبب یا اثر ظاہر کرے"
      },
      {
        "en": "A particle used strictly for negation",
        "ur": "وہ حرف جو صرف نفی کے لیے آئے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the two main categories of Tamyeez taught in Lesson 12?",
    "ur": "سبق 12 میں تمیز کی بنیادی دو اقسام کون سی بیان کی گئی ہیں؟",
    "options": [
      {
        "en": "تمييز الذات (الملفوظ) and تمييز النسبة (الملحوظ)",
        "ur": "تمييز الذات (الملفوظ) اور تمييز النسبة (الملحوظ)"
      },
      {
        "en": "تمييز المعرفة and تمييز النكرة",
        "ur": "تمیز المعرفہ اور تمیز النکرہ"
      },
      {
        "en": "تمييز الماضي and تمييز المضارع",
        "ur": "تمیز الماضي اور تمیز المضارع"
      },
      {
        "en": "تمييز المبتدأ and تمييز الخبر",
        "ur": "تمیز المبتدأ اور تمیز الخبر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Tamyeez ad-Dhat / al-Malfooz' (تمييز الذات / الملفوظ)?",
    "ur": "'تمیزِ ذات' (تمیزِ ملفوظ) سے کیا مراد ہے؟",
    "options": [
      {
        "en": "Tamyeez that removes ambiguity from a single specific preceding word (e.g., numbers, weight, measure)",
        "ur": "وہ تمیز جو اپنے سے پہلے موجود کسی مفرد اور خاص لفظ (عدد، وزن، پیمائش) کا ابہام دور کرے"
      },
      {
        "en": "Tamyeez that modifies the sentence relation",
        "ur": "وہ تمیز جو پورے جملے کی نسبت کو واضح کرے"
      },
      {
        "en": "Tamyeez that only appears with proper nouns",
        "ur": "وہ تمیز جو صرف اسماءِ علم کے ساتھ آئے"
      },
      {
        "en": "A dual verb structure",
        "ur": "تثنیہ فعل کی ساخت"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Tamyeez an-Nisbah / al-Malhooz' (تمييز النسبة / الملحوظ)?",
    "ur": "'تمیزِ نسبت' (تمیزِ ملحوظ) سے کیا مراد ہے؟",
    "options": [
      {
        "en": "Tamyeez that removes ambiguity from the relationship between sentence elements (e.g., verb and fa'il)",
        "ur": "وہ تمیز جو جملے کے اجزاء (مثلاً فعل اور فاعل) کے باہمی تعلق و نسبت کا ابہام دور کرے"
      },
      {
        "en": "Tamyeez that specifies number count directly",
        "ur": "وہ تمیز جو ڈائریکٹ عدد کی گنتی بتائے"
      },
      {
        "en": "Tamyeez that is always Majroor with Kasra",
        "ur": "وہ تمیز جو ہمیشہ کسرہ کے ساتھ مجرور ہو"
      },
      {
        "en": "Tamyeez attached to personal pronouns",
        "ur": "ضمائر سے متصل تمیز"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the primary grammatical case (إعراب) of Tamyeez?",
    "ur": "تمیز کا بنیادی اعرابی حکم کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Mansoob with Fatha (منصوب بالفتحة)",
        "ur": "فتحه کے ساتھ منصوب (منصوب بالفتحة)"
      },
      {
        "en": "Marfoo' with Damma",
        "ur": "ضمہ کے ساتھ مرفوع"
      },
      {
        "en": "Majroor with Kasra in all cases",
        "ur": "تمام حالتوں میں کسرہ کے ساتھ مجرور"
      },
      {
        "en": "Majzoom with Sukoon",
        "ur": "سکون کے ساتھ مجزوم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'اشْتَرَيْتُ رِطْلاً زَيْتاً', how is 'زَيْتاً' classified morphologically?",
    "ur": "جملے 'اشْتَرَيْتُ رِطْلاً زَيْتاً' میں لفظ 'زَيْتاً' کا کیا منصب ہے؟",
    "options": [
      {
        "en": "Tamyeez ad-Dhat Mansoob after weight measure (تمييز ذات منصوب)",
        "ur": "وزن کے بعد آنے والی تمیزِ ذات منصوب"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Na't Mansoob",
        "ur": "نعت منصوب"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'طَابَ حَامِدٌ نَفْساً' (Hamid was pleased in soul), what was 'نَفْساً' originally before conversion (مُحَوَّل)?",
    "ur": "جملے 'طَابَ حَامِدٌ نَفْساً' میں تمیز 'نَفْساً' اصل ترکیب میں کس سے منقول (مُحَوَّل) ہے؟",
    "options": [
      {
        "en": "Transferred from Fa'il (مُحَوَّلٌ عَنِ الفَاعِلِ، أصلها: طَابَتْ نَفْسُ حَامِدٍ)",
        "ur": "فاعل سے منقول (اصل: طَابَتْ نَفْسُ حَامِدٍ)"
      },
      {
        "en": "Transferred from Maf'ool Bihi",
        "ur": "مفعول بہ سے منقول"
      },
      {
        "en": "Transferred from Mubtada'",
        "ur": "مبتدأ سے منقول"
      },
      {
        "en": "Not transferred from anything",
        "ur": "غیر منقول"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'فَجَّرْنَا الأَرْضَ عُيُوناً' (Qur'an 54:12), what was 'عُيُوناً' originally before conversion?",
    "ur": "آیت مبارکہ 'فَجَّرْنَا الأَرْضَ عُيُوناً' میں تمیز 'عُيُوناً' اصل میں کس سے منقول ہے؟",
    "options": [
      {
        "en": "Transferred from Maf'ool Bihi (مُحَوَّلٌ عَنِ الـمَفْعُولِ بِهِ، أصلها: فَجَّرْنَا عُيُونَ الأَرْضِ)",
        "ur": "مفعول بہ سے منقول (اصل: فَجَّرْنَا عُيُونَ الأَرْضِ)"
      },
      {
        "en": "Transferred from Fa'il",
        "ur": "فاعل سے منقول"
      },
      {
        "en": "Transferred from Mubtada'",
        "ur": "مبتدأ سے منقول"
      },
      {
        "en": "Transferred from Na'ib al-Fa'il",
        "ur": "نائب الفاعل سے منقول"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'أَنَا أَكْثَرُ مِنْكَ مَالاً' (Qur'an 18:34), what was 'مَالاً' originally before conversion?",
    "ur": "آیت 'أَنَا أَكْثَرُ مِنْكَ مَالاً' میں تمیز 'مَالاً' اصل میں کس سے منقول ہے؟",
    "options": [
      {
        "en": "Transferred from Mubtada' (مُحَوَّلٌ عَنِ الـمُبْتَدَأِ، أصلها: مَالِي أَكْثَرُ مِنْ مَالِكَ)",
        "ur": "مبتدأ سے منقول (اصل: مَالِي أَكْثَرُ مِنْ مَالِكَ)"
      },
      {
        "en": "Transferred from Fa'il",
        "ur": "فاعل سے منقول"
      },
      {
        "en": "Transferred from Maf'ool Bihi",
        "ur": "مفعول بہ سے منقول"
      },
      {
        "en": "Transferred from Khabar",
        "ur": "خبر سے منقول"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the requirement for a noun following Ism al-Tafdeel (اسم التفضيل) when clarifying the aspect of comparison (e.g., خَالِدٌ أَحْسَنُ مِنْكَ خُلُقاً)?",
    "ur": "اسمِ تفضیل کے بعد موازنے کا پہلو واضح کرنے والے اسم (مثلاً خَالِدٌ أَحْسَنُ مِنْكَ خُلُقاً) کا کیا حکم ہے؟",
    "options": [
      {
        "en": "Must be Tamyeez Mansoob (تمییز منصوب)",
        "ur": "تمیز بن کر لازماً منصوب ہوگا"
      },
      {
        "en": "Must be Mudaf Ilayh Majroor",
        "ur": "مضاف الیہ مجرور ہوگا"
      },
      {
        "en": "Must be Na't Marfoo'",
        "ur": "نعت مرفوع ہوگا"
      },
      {
        "en": "Must be Maf'ool Absolute",
        "ur": "مفعول مطلق ہوگا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, complete with Tamyeez: 'اشْتَرَيْتُ عِشْرِينَ ...' (I bought twenty books):",
    "ur": "تمرين 1 کے مطابق تمیزِ ذات سے جملہ مکمل کریں: 'اشْتَرَيْتُ عِشْرِينَ ...' (میں نے بیس کتابیں خریدیں):",
    "options": [
      {
        "en": "كِتَاباً (Kitāban - Tamyeez Mansoob after number)",
        "ur": "كِتَاباً (عدد کے بعد تمیز منصوب)"
      },
      {
        "en": "كِتَابٌ",
        "ur": "كِتَابٌ"
      },
      {
        "en": "كِتَابٍ",
        "ur": "كِتَابٍ"
      },
      {
        "en": "الكِتَابَ",
        "ur": "الكِتَابَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete: 'عِنْدِي مِتْرٌ ...' (I have a meter of cloth):",
    "ur": "جملہ مکمل کریں: 'عِنْدِي مِتْرٌ ...' (میرے پاس ایک میٹر کپڑا ہے):",
    "options": [
      {
        "en": "قُمَاشاً (Qumāshan - Tamyeez Mansoob after length measure)",
        "ur": "قُمَاشاً (پیمائش کے بعد تمیز منصوب)"
      },
      {
        "en": "قُمَاشٌ",
        "ur": "قُمَاشٌ"
      },
      {
        "en": "قُمَاشٍ",
        "ur": "قُمَاشٍ"
      },
      {
        "en": "القُمَاشُ",
        "ur": "القُمَاشُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete: 'اشْتَرَيْتُ كِيلُو غَرَامٍ ...' (I bought a kilogram of meat):",
    "ur": "جملہ مکمل کریں: 'اشْتَرَيْتُ كِيلُو غَرَامٍ ...' (میں نے ایک کلوگرام گوشت خریدا):",
    "options": [
      {
        "en": "لَحْماً (Lahman - Tamyeez Mansoob after weight)",
        "ur": "لَحْماً (وزن کے بعد تمیز منصوب)"
      },
      {
        "en": "لَحْمٌ",
        "ur": "لَحْمٌ"
      },
      {
        "en": "لَحْمٍ",
        "ur": "لَحْمٍ"
      },
      {
        "en": "اللَّحْمَ",
        "ur": "اللَّحْمَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete: 'بَاعَ الفَلاَّحُ صَاعاً ...' (The farmer sold a Sa' of wheat):",
    "ur": "جملہ مکمل کریں: 'بَاعَ الفَلاَّحُ صَاعاً ...' (کسان نے ایک صاع گندم بیچی):",
    "options": [
      {
        "en": "قَمْحاً (Qamhan - Tamyeez Mansoob after volume capacity)",
        "ur": "قَمْحاً (پیمانہِ حجم کے بعد تمیز منصوب)"
      },
      {
        "en": "قَمْحٌ",
        "ur": "قَمْحٌ"
      },
      {
        "en": "قَمْحٍ",
        "ur": "قَمْحٍ"
      },
      {
        "en": "القَمْحِ",
        "ur": "القَمْحِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, convert 'حَسُنَ خُلُقُ الطَّالِبِ' using Tamyeez:",
    "ur": "تمرين 2 کے مطابق جملے 'حَسُنَ خُلُقُ الطَّالِبِ' کو تمیز کے ساتھ تبدیل کریں:",
    "options": [
      {
        "en": "حَسُنَ الطَّالِبُ خُلُقاً (Hasuna at-tālibu khuluqan)",
        "ur": "حَسُنَ الطَّالِبُ خُلُقاً"
      },
      {
        "en": "حَسُنَ خُلُقاً الطَّالِبَ",
        "ur": "حَسُنَ خُلُقاً الطَّالِبَ"
      },
      {
        "en": "حَسُنَ الطَّالِبَ خُلُقٌ",
        "ur": "حَسُنَ الطَّالِبَ خُلُقٌ"
      },
      {
        "en": "حَسُنَ خُلُقِ الطَّالِبِ",
        "ur": "حَسُنَ خُلُقِ الطَّالِبِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Convert 'طَابَتْ رَائِحَةُ الوَرْدَةِ' using Tamyeez:",
    "ur": "جملے 'طَابَتْ رَائِحَةُ الوَرْدَةِ' کو تمیز کے ساتھ تبدیل کریں:",
    "options": [
      {
        "en": "طَابَتِ الوَرْدَةُ رَائِحَةً (Tābati al-wardatu rā'ihatan)",
        "ur": "طَابَتِ الوَرْدَةُ رَائِحَةً"
      },
      {
        "en": "طَابَتِ الوَرْدَةَ رَائِحَةٌ",
        "ur": "طَابَتِ الوَرْدَةَ رَائِحَةٌ"
      },
      {
        "en": "طَابَ رَائِحَةُ الوَرْدَةِ",
        "ur": "طَابَ رَائِحَةُ الوَرْدَةِ"
      },
      {
        "en": "طَابَتِ الوَرْدَةِ رَائِحَةٍ",
        "ur": "طَابَتِ الوَرْدَةِ رَائِحَةٍ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Convert 'غَرَسْتُ شَجَرَ الحَدِيقَةِ' (I planted the garden's trees) using Tamyeez:",
    "ur": "جملے 'غَرَسْتُ شَجَرَ الحَدِيقَةِ' (مفعول بہ سے منقول) کو تمیز کے ساتھ تبدیل کریں:",
    "options": [
      {
        "en": "غَرَسْتُ الحَدِيقَةَ شَجَراً (Gharastu al-hadīqata shajaran)",
        "ur": "غَرَسْتُ الحَدِيقَةَ شَجَراً"
      },
      {
        "en": "غَرَسْتُ شَجَراً الحَدِيقَةِ",
        "ur": "غَرَسْتُ شَجَراً الحَدِيقَةِ"
      },
      {
        "en": "غَرَسْتُ الحَدِيقَةُ شَجَرٌ",
        "ur": "غَرَسْتُ الحَدِيقَةُ شَجَرٌ"
      },
      {
        "en": "غَرَسْتُ الشَّجَرَ حَدِيقَةً",
        "ur": "غَرَسْتُ الشَّجَرَ حَدِيقَةً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Convert 'كَبُرَتْ سِنُّ عَلِيٍّ' (Ali's age grew) using Tamyeez:",
    "ur": "جملے 'كَبُرَتْ سِنُّ عَلِيٍّ' کو تمیز کے ساتھ درست فارم میں لائیں:",
    "options": [
      {
        "en": "كَبُرَ عَلِيٌّ سِنّاً (Kabura 'Aliyyun sinnan)",
        "ur": "كَبُرَ عَلِيٌّ سِنّاً"
      },
      {
        "en": "كَبُرَتْ سِنّاً عَلِيٌّ",
        "ur": "كَبُرَتْ سِنّاً عَلِيٌّ"
      },
      {
        "en": "كَبُرَ عَلِيّاً سِنٌّ",
        "ur": "كَبُرَ عَلِيّاً سِنٌّ"
      },
      {
        "en": "كَبُرَ عَلِيٍّ سِنٍّ",
        "ur": "كَبُرَ عَلِيٍّ سِنٍّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, complete: 'خَالِدٌ أَكْبَرُ مِنْكَ ...' (Khalid is older than you in age):",
    "ur": "تمرين 3 کے مطابق جملہ مکمل کریں: 'خَالِدٌ أَكْبَرُ مِنْكَ ...' (خالد تم سے عمر میں بڑا ہے):",
    "options": [
      {
        "en": "سِنّاً (Sinnan - Tamyeez after Ism al-Tafdeel)",
        "ur": "سِنّاً (اسمِ تفضیل کے بعد تمیز)"
      },
      {
        "en": "سِنٌّ",
        "ur": "سِنٌّ"
      },
      {
        "en": "سِنٍّ",
        "ur": "سِنٍّ"
      },
      {
        "en": "السِّنِّ",
        "ur": "السِّنِّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'كَمْ طَالِباً فِي الفَصْلِ؟', what is the parsing of 'طَالِباً'?",
    "ur": "سوال 'كَمْ طَالِباً فِي الفَصْلِ؟' میں 'طَالِباً' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Tamyeez Mansoob after Kam al-Istifhamiyyah (تمييز كَمِ الاستفهامية منصوب)",
        "ur": "کم استفہامیہ کے بعد تمیز منصوب"
      },
      {
        "en": "Mudaf Ilayh",
        "ur": "مضاف الیہ"
      },
      {
        "en": "Khabar Kam",
        "ur": "کم کی خبر"
      },
      {
        "en": "Badal",
        "ur": "بدل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'أَكْثَرُ مِنْكَ مَالاً وَأَعَزُّ نَفَراً' (Qur'an 18:34), how is 'نَفَراً' parsed?",
    "ur": "قرآنی عبارت 'أَكْثَرُ مِنْكَ مَالاً وَأَعَزُّ نَفَراً' میں 'نَفَراً' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Tamyeez Mansoob after Ism al-Tafdeel 'أَعَزُّ'",
        "ur": "اسمِ تفضیل 'أَعَزُّ' کے بعد تمیز منصوب"
      },
      {
        "en": "Ma'toof Marfoo'",
        "ur": "معطوف مرفوع"
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
    "part": "Exercise 4",
    "en": "In Exercise 4, how can 'عِنْدِي رِطْلٌ زَيْتاً' be expressed with preposition 'مِنْ'?",
    "ur": "تمرين 4 کے مطابق 'عِنْدِي رِطْلٌ زَيْتاً' کو حرفِ جر 'مِنْ' کے ساتھ کیسے لکھا جا سکتا ہے؟",
    "options": [
      {
        "en": "عِنْدِي رِطْلٌ مِنْ زَيْتٍ (Indī ritlun min zaytin)",
        "ur": "عِنْدِي رِطْلٌ مِنْ زَيْتٍ"
      },
      {
        "en": "عِنْدِي رِطْلٌ مِنْ زَيْتاً",
        "ur": "عِنْدِي رِطْلٌ مِنْ زَيْتاً"
      },
      {
        "en": "عِنْدِي رِطْلَ مِنْ زَيْتٌ",
        "ur": "عِنْدِي رِطْلَ مِنْ زَيْتٌ"
      },
      {
        "en": "عِنْدِي زَيْتٌ مِنْ رِطْلٍ",
        "ur": "عِنْدِي زَيْتٌ مِنْ رِطْلٍ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "How can 'عِنْدِي رِطْلٌ زَيْتاً' be expressed with Idafah (الإضافة)?",
    "ur": "'عِنْدِي رِطْلٌ زَيْتاً' کو اضافت کے مرکب میں کیسے تبدیل کیا جائے گا؟",
    "options": [
      {
        "en": "عِنْدِي رِطْلُ زَيْتٍ ('Indī ritlu zaytin - Mudaf without Tanween)",
        "ur": "عِنْدِي رِطْلُ زَيْتٍ (غیر تنوین مضاف کے ساتھ)"
      },
      {
        "en": "عِنْدِي رِطْلٌ زَيْتٍ",
        "ur": "عِنْدِي رِطْلٌ زَيْتٍ"
      },
      {
        "en": "عِنْدِي رِطْلِ زَيْتٌ",
        "ur": "عِنْدِي رِطْلِ زَيْتٌ"
      },
      {
        "en": "عِنْدِي الرِّطْلُ زَيْتٍ",
        "ur": "عِنْدِي الرِّطْلُ زَيْتٍ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Can Tamyeez an-Nisbah (e.g., 'طَابَ حَامِدٌ نَفْساً') be made Majroor with 'مِنْ' or Idafah like Tamyeez ad-Dhat?",
    "ur": "کیا تمیزِ نسبت (مثلاً 'طَابَ حَامِدٌ نَفْساً') کو بھی تمیزِ ذات کی طرح 'مِنْ' یا اضافت کے ذریعے مجرور بنایا جا سکتا ہے؟",
    "options": [
      {
        "en": "No, Tamyeez an-Nisbah MUST strictly remain Mansoob (لا يجوز جره)",
        "ur": "نہیں! تمیزِ نسبت کا لازماً منصوب رہنا واجب ہے (مجرور کرنا جائز نہیں)"
      },
      {
        "en": "Yes, in all cases",
        "ur": "جی ہاں! تمام حالتوں میں"
      },
      {
        "en": "Only when it comes after negation",
        "ur": "صرف نفی کے بعد"
      },
      {
        "en": "Only in poetry",
        "ur": "صرف شاعری میں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَباً' (Qur'an 12:4), what is 'كَوْكَباً'?",
    "ur": "قرآنی آیہ 'إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَباً' میں 'كَوْكَباً' کا کیا اعرابی منصب ہے؟",
    "options": [
      {
        "en": "Tamyeez ad-Dhat Mansoob after compound number 11 (تمييز ذات منصوب)",
        "ur": "مرکب عدد 11 کے بعد تمیزِ ذات منصوب"
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
        "en": "Badal",
        "ur": "بدل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَاشْتَعَلَ الرَّأْسُ شَيْباً' (Qur'an 19:4), what type of Tamyeez is 'شَيْباً'?",
    "ur": "آیت مبارکہ 'وَاشْتَعَلَ الرَّأْسُ شَيْباً' میں 'شَيْباً' کون سی تمیز ہے؟",
    "options": [
      {
        "en": "Tamyeez an-Nisbah converted from Fa'il (أصلها: وَاشْتَعَلَ شَيْبُ الرَّأْسِ)",
        "ur": "فاعل سے منقول تمیزِ نسبت (اصل: اشتعل شيبُ الرأسِ)"
      },
      {
        "en": "Tamyeez ad-Dhat after weight",
        "ur": "تمیزِ ذات"
      },
      {
        "en": "Maf'ool Absolute",
        "ur": "مفعول مطلق"
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
    "en": "In the Quranic verse 'وَفَجَّرْنَا الأَرْضَ عُيُوناً' (Qur'an 54:12), how is 'عُيُوناً' parsed?",
    "ur": "آیت مبارکہ 'وَفَجَّرْنَا الأَرْضَ عُيُوناً' میں لفظ 'عُيُوناً' کا اعرابی منصب کیا ہے؟",
    "options": [
      {
        "en": "Tamyeez an-Nisbah Mansoob converted from Maf'ool Bihi",
        "ur": "مفعول بہ سے منقول تمیزِ نسبت منصوب"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Na't Mansoob",
        "ur": "نعت منصوب"
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
    "en": "Parse the full sentence: 'حَسُنَ الطَّالِبُ خُلُقاً':",
    "ur": "پورے جملے 'حَسُنَ الطَّالِبُ خُلُقاً' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "حَسُنَ: فعل ماضٍ، الطَّالِبُ: فاعل مرفوع بالضمة، خُلُقاً: تمييز نسبة منصوب بالفتحة",
        "ur": "حَسُنَ: فعل ماضی، الطَّالِبُ: فاعل مرفوع بالضمة، خُلُقاً: تمیزِ نسبت منصوب بالفتحة"
      },
      {
        "en": "حَسُنَ: مبتدأ، الطالب: خبر، خلقاً: مفعول به",
        "ur": "حَسُنَ مبتدأ، الطالب خبر، خلقاً مفعول بہ"
      },
      {
        "en": "حَسُنَ: فعل امر، الطالب: مفعول به، خلقاً: حال",
        "ur": "حَسُنَ فعل امر، الطالب مفعول بہ، خلقاً حال"
      },
      {
        "en": "حَسُنَ: حرف، الطالب: اسم مجرور، خلقاً: نعت",
        "ur": "حَسُنَ حرف، الطالب اسم مجرور، خلقاً نعت"
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
    "en": "Which statement accurately distinguishes Tamyeez ad-Dhat from Tamyeez an-Nisbah?",
    "ur": "تمیزِ ذات اور تمیزِ نسبت کا باہمی فرق بیان کرنے والا درست جملہ کون سا ہے؟",
    "options": [
      {
        "en": "Tamyeez ad-Dhat clarifies a single word (number/measure) and can be Majroor with Min/Idafah; Tamyeez an-Nisbah clarifies sentence relation and MUST be Mansoob",
        "ur": "تمیزِ ذات مفرد لفظ (عدد/مقدار) کا ابہام دور کرتی ہے اور مجرور ہو سکتی ہے؛ تمیزِ نسبت جملے کے تعلق کا ابہام دور کرتی ہے اور لازماً منصوب ہوتی ہے"
      },
      {
        "en": "Both must always be Majroor",
        "ur": "دونوں کا ہمیشہ مجرور ہونا لازم ہے"
      },
      {
        "en": "Tamyeez an-Nisbah comes after numbers only",
        "ur": "تمیزِ نسبت صرف اعداد کے بعد آتی ہے"
      },
      {
        "en": "Tamyeez ad-Dhat cannot be Mansoob",
        "ur": "تمیزِ ذات کبھی منصوب نہیں ہو سکتی"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 12 Quiz ---');

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

    // 4. Find or Create Lecture 12 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 12 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 12 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 12', 12)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 12: ID ${lectureId}`);
    }

    // 5. CAREFUL DELETION: Find existing Book 3 Lesson 12 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 12))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 12.`);
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

    // 6. Create the quiz for Book 3 Lesson 12
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 12 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 12 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

run();
