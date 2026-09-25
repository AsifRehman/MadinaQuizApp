import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL || process.env.DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is 'Al-Ma'rifah' (المَعْرِفَةُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'المعرفۃ' (معرفہ اسم) کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A noun that indicates a specific person, place, or thing (اسم يدل على معين)",
        "ur": "وہ اسم جو کسی خاص اور متعین شخص، جگہ یا چیز پر دلالت کرے"
      },
      {
        "en": "A noun that indicates an unspecified general entity",
        "ur": "وہ اسم جو کسی غیر متعین عام چیز پر دلالت کرے"
      },
      {
        "en": "A verb indicating past action",
        "ur": "وہ فعل جو ماضی پر دلالت کرے"
      },
      {
        "en": "A particle used strictly for interrogation",
        "ur": "وہ حرف جو صرف سوال کے لیے آئے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How many primary categories of Definite Nouns (أقسام المعارف) are taught in Lesson 8?",
    "ur": "سبق 8 میں معرفہ اسم کی بنیادی کتنی اقسام بیان کی گئی ہیں؟",
    "options": [
      {
        "en": "Seven categories (الضمير، العلم، اسم الإشارة، الاسم الموصول، المحلى بـ'ال'، المضاف إلى معرفة، المنادى)",
        "ur": "سات اقسام (ضمائر، علم، اسم اشارہ، اسم موصول، معرف باللام، مضاف الی المعرفہ، منادی)"
      },
      {
        "en": "Three categories only",
        "ur": "صرف تین اقسام"
      },
      {
        "en": "Ten categories",
        "ur": "دس اقسام"
      },
      {
        "en": "Five categories",
        "ur": "پانچ اقسام"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Which of the following is considered the most definite category of Ma'rifah nouns (أعرف المعارف) after Allah's name?",
    "ur": "اسمِ جلالہ کے بعد معرفہ کی تمام اقسام میں سے سب سے زیادہ معرفہ کون سی قسم ہے؟",
    "options": [
      {
        "en": "Personal Pronouns (الضمائر, e.g., أَنَا، هُوَ)",
        "ur": "ضمائر (الضمائر، جیسے أَنَا، هُوَ)"
      },
      {
        "en": "Demonstrative Nouns (أسماء الإشارة)",
        "ur": "اسمائے اشارہ"
      },
      {
        "en": "Nouns with Al (المحلى بـ'ال')",
        "ur": "معرف باللام"
      },
      {
        "en": "Relative Pronouns (الأسماء الموصولة)",
        "ur": "اسمائے موصولہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Far Masculine Dual demonstrative noun (اسم الإشارة للبعيد للمثنى المذكر) in the Marfoo' case?",
    "ur": "حالتِ رفع میں دور کے تثنیہ مذکر کے لیے کون سا اسمِ اشارہ استعمال ہوتا ہے؟",
    "options": [
      {
        "en": "ذَانِكَ (Dhānika - 'Those two')",
        "ur": "ذَانِكَ"
      },
      {
        "en": "هَذَانِ (Hadhāni)",
        "ur": "هَذَانِ"
      },
      {
        "en": "تَانِكَ (Tānika)",
        "ur": "تَانِكَ"
      },
      {
        "en": "ذَيْنِكَ (Dhaynika)",
        "ur": "ذَيْنِكَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Far Feminine Dual demonstrative noun (اسم الإشارة للبعيد للمثنى المؤنث) in the Marfoo' case?",
    "ur": "حالتِ رفع میں دور کے تثنیہ مؤنث کے لیے کون سا اسمِ اشارہ آتا ہے؟",
    "options": [
      {
        "en": "تَانِكَ (Tānika - 'Those two female...')",
        "ur": "تَانِكَ"
      },
      {
        "en": "هَاتَانِ (Hātāni)",
        "ur": "هَاتَانِ"
      },
      {
        "en": "تَيْنِكَ (Thaynika)",
        "ur": "تَيْنِكَ"
      },
      {
        "en": "تِلْكَ (Tilka)",
        "ur": "تِلْكَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the Mansoob and Majroor forms of the far dual demonstratives 'ذَانِكَ' and 'تَانِكَ'?",
    "ur": "دور کے تثنیہ اسمائے اشارہ 'ذَانِكَ' اور 'تَانِكَ' کی حالتِ نصب اور حالتِ جر کی شکلیں کیا ہیں؟",
    "options": [
      {
        "en": "ذَيْنِكَ (Dhaynika) and تَيْنِكَ (Taynika)",
        "ur": "ذَيْنِكَ اور تَيْنِكَ"
      },
      {
        "en": "ذَانِكَ and تَانِكَ (unchanged)",
        "ur": "ذَانِكَ اور تَانِكَ"
      },
      {
        "en": "ذَلِكَ and تِلْكَ",
        "ur": "ذَلِكَ اور تِلْكَ"
      },
      {
        "en": "أُولَئِكَ for both",
        "ur": "دونوں کے لیے أُولَئِكَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Why are dual demonstratives like 'ذَانِكَ' and 'تَانِكَ' classified as Mu'rab (معرب) unlike singular/plural demonstratives?",
    "ur": "'ذَانِكَ' اور 'تَانِكَ' کو واحد اور جمع اسمائے اشارہ کے برعکس معرب کیوں مانا جاتا ہے؟",
    "options": [
      {
        "en": "Because they decline like Dual nouns with Alif in Raf' and Yā' in Nasb/Jar",
        "ur": "کیونکہ ان کا اعراب تثنیہ کی طرح بدلتا ہے (رفع میں الف، نصب وجر میں یاء)"
      },
      {
        "en": "Because they end with Tanween",
        "ur": "کیونکہ ان کے آخر میں تنوین ہے"
      },
      {
        "en": "Because they are possessive adjectives",
        "ur": "کیونکہ وہ صفتِ ملکیت ہیں"
      },
      {
        "en": "Because they are always Majroor",
        "ur": "کیونکہ وہ ہمیشہ مجرور رہتے ہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In the sentence from dialogue 'أُرِيدُ دَفْتَراً ذَا وَرَقٍ مُسَطَّرٍ', why is 'ذَا' in the Mansoob case?",
    "ur": "حوار کے جملے 'أُرِيدُ دَفْتَراً ذَا وَرَقٍ مُسَطَّرٍ' میں 'ذَا' منصوب کیوں ہے؟",
    "options": [
      {
        "en": "Because it functions as Na't (adjective) for the Mansoob noun 'دَفْتَراً'",
        "ur": "کیونکہ یہ اسمِ منصوب 'دَفْتَراً' کی نعت (صفت) بن رہا ہے"
      },
      {
        "en": "Because it is Maf'ool Bihi directly",
        "ur": "مفعول بہ ہونے کی بنا پر"
      },
      {
        "en": "Because it is Mudaf Ilayh",
        "ur": "مضاف الیہ ہونے کی بنا پر"
      },
      {
        "en": "Because it is Khabar Inna",
        "ur": "انّ کی خبر ہونے کی بنا پر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What happens to the definiteness of an indefinite noun (نكرة) when made Mudaf to a Ma'rifah noun (e.g., كِتَابُ حَامِدٍ)?",
    "ur": "جب نکرہ اسم کسی معرفہ اسم کی طرف مضاف ہو جائے (مثلاً كِتَابُ حَامِدٍ) تو اس کی وسعت/تعریف پر کیا اثر پڑتا ہے؟",
    "options": [
      {
        "en": "It becomes Ma'rifah (معرفة بالإضافة)",
        "ur": "یہ اضافت کی وجہ سے معرفہ بن جاتا ہے (المضاف إلى معرفة)"
      },
      {
        "en": "It remains completely Nakirah",
        "ur": "یہ مکمل نکرہ ہی رہتا ہے"
      },
      {
        "en": "It becomes Mabni on Fatha",
        "ur": "یہ فتحہ پر مبنی ہو جاتا ہے"
      },
      {
        "en": "It takes Tanween on the end",
        "ur": "اس پر تنوین آ جاتی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What happens when an indefinite noun is Mudaf to another indefinite noun (e.g., قَلَمُ حِبْرٍ - an ink pen)?",
    "ur": "جب نکرہ اسم کسی دوسرے نکرہ اسم کی طرف مضاف ہو (مثلاً قَلَمُ حِبْرٍ) تو اس کا کیا حکم ہوتا ہے؟",
    "options": [
      {
        "en": "It becomes specialized (نكرة مخصصة) but does NOT become full Ma'rifah",
        "ur": "یہ نکرہ مخصصہ (خاص نکرہ) بن جاتا ہے لیکن کامل معرفہ نہیں بنتا"
      },
      {
        "en": "It becomes full Ma'rifah",
        "ur": "یہ کامل معرفہ بن جاتا ہے"
      },
      {
        "en": "It becomes a proper noun (علم)",
        "ur": "یہ اسمِ علم بن جاتا ہے"
      },
      {
        "en": "It cannot be parsed grammatically",
        "ur": "اس کا ترکیبی اعراب نہیں ہو سکتا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1 based on the dialogue, what items did the customer buy from the shop?",
    "ur": "تمرين 1 (حوار) کے مطابق خریدار نے دکان سے کیا چیزیں خریدیں؟",
    "options": [
      {
        "en": "An ink pen, a pencil, and a notebook with lined paper (قلم حبر، قلم رصاص، دفتر)",
        "ur": "ایک روشنائی والا قلم، ایک پنسل، اور مسطر کاغذ والا دفتر"
      },
      {
        "en": "Only a textbook and a bag",
        "ur": "صرف درسی کتاب اور بیگ"
      },
      {
        "en": "Three newspapers and a map",
        "ur": "تین اخبارات اور ایک نقشہ"
      },
      {
        "en": "A ruler and scissors",
        "ur": "ایک پیمانہ اور قینچی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What map was depicted on the cover of the notebook requested in the dialogue?",
    "ur": "حوار میں مطلوبہ دفتر کے کور پر کس چیز کا نقشہ موجود تھا؟",
    "options": [
      {
        "en": "Map of the Islamic World (خَرِيطَةُ العَالَمِ الإِسْلاَمِيِّ)",
        "ur": "عالمِ اسلامی کا نقشہ (خَرِيطَةُ العَالَمِ الإِسْلاَمِيِّ)"
      },
      {
        "en": "Map of Europe",
        "ur": "یورپ کا نقشہ"
      },
      {
        "en": "Map of Asia",
        "ur": "ایشیا کا نقشہ"
      },
      {
        "en": "Map of Saudi Arabia",
        "ur": "سعودی عرب کا نقشہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, identify the type of Ma'rifah for the word 'أَنَا' in 'أَنَا طَالِبٌ':",
    "ur": "تمرين 2 کے مطابق جملے 'أَنَا طَالِبٌ' میں لفظ 'أَنَا' معرفہ کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Personal Pronoun (الضمير)",
        "ur": "ضمیر (الضمير)"
      },
      {
        "en": "Proper Noun (العلم)",
        "ur": "علم"
      },
      {
        "en": "Demonstrative Noun (اسم الإشارة)",
        "ur": "اسمِ اشارہ"
      },
      {
        "en": "Relative Pronoun (الاسم الموصول)",
        "ur": "اسمِ موصول"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Identify the type of Ma'rifah for 'مَكَّةُ' in 'سَافَرْتُ إِلَى مَكَّةَ':",
    "ur": "جملے 'سَافَرْتُ إِلَى مَكَّةَ' میں 'مَكَّةَ' معرفہ کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Proper Noun for a place (العلم)",
        "ur": "اسمِ علم (العلم)"
      },
      {
        "en": "Defined by Al (المحلى بـ'ال')",
        "ur": "معرف باللام"
      },
      {
        "en": "Demonstrative Noun",
        "ur": "اسمِ اشارہ"
      },
      {
        "en": "Mudaf to Ma'rifah",
        "ur": "مضاف الیہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Identify the type of Ma'rifah for 'هَذَا' in 'هَذَا كِتَابِي':",
    "ur": "جملے 'هَذَا كِتَابِي' میں 'هَذَا' معرفہ کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Demonstrative Noun (اسم الإشارة)",
        "ur": "اسمِ اشارہ (اسم الإشارة)"
      },
      {
        "en": "Relative Pronoun (الاسم الموصول)",
        "ur": "اسمِ موصول"
      },
      {
        "en": "Pronoun (الضمير)",
        "ur": "ضمیر"
      },
      {
        "en": "Vocative (المنادى)",
        "ur": "منادی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Identify the type of Ma'rifah for 'الَّذِي' in 'جَاءَ الَّذِي نَجَحَ':",
    "ur": "جملے 'جَاءَ الَّذِي نَجَحَ' میں 'الَّذِي' معرفہ کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Relative Pronoun (الاسم الموصول)",
        "ur": "اسمِ موصول (الاسم الموصول)"
      },
      {
        "en": "Demonstrative Noun",
        "ur": "اسمِ اشارہ"
      },
      {
        "en": "Proper Noun",
        "ur": "علم"
      },
      {
        "en": "Mudaf",
        "ur": "مضاف"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Identify the type of Ma'rifah for 'كِتَابُ المُدِيرِ':",
    "ur": "ترکیب 'كِتَابُ المُدِيرِ' میں لفظ 'كِتَابُ' معرفہ کی کون سی قسم بن گیا ہے؟",
    "options": [
      {
        "en": "Mudaf to a Definite Noun (المضاف إلى معرفة)",
        "ur": "معرفہ کی طرف مضاف (المضاف إلى معرفة)"
      },
      {
        "en": "Defined by Al",
        "ur": "معرف باللام"
      },
      {
        "en": "Proper Noun",
        "ur": "اسمِ علم"
      },
      {
        "en": "Indefinite Specialized",
        "ur": "نکرہ مخصصہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, complete: 'هَذَا كِتَابِي، وَ... كِتَابُ زَمِيلِي' (pointing to a far dual/plural pair):",
    "ur": "تمرين 3 میں جملہ مکمل کریں: 'هَذَانِ كِتَابَايَ، وَ... كِتَابَا زَمِيلِي' (دور کی دو کتابوں کی طرف اشارہ):",
    "options": [
      {
        "en": "ذَانِكَ (Dhānika - 'those two books')",
        "ur": "ذَانِكَ"
      },
      {
        "en": "هَذَانِ (Hadhāni)",
        "ur": "هَذَانِ"
      },
      {
        "en": "تَانِكَ (Tānika)",
        "ur": "تَانِكَ"
      },
      {
        "en": "تِلْكَ (Tilka)",
        "ur": "تِلْكَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Complete: 'هَاتَانِ حَافِلَتَانِ تُسِرَانِ إِلَى الجَامِعَةِ، وَ... تُسِرَانِ إِلَى المَطَارِ' (two far buses):",
    "ur": "جملہ مکمل کریں: 'هَاتَانِ حَافِلَتَانِ ... وَ... تَسِيرَانِ إِلَى المَطَارِ' (دور کی دو بسوں کی طرف اشارہ):",
    "options": [
      {
        "en": "تَانِكَ (Tānika - 'those two female buses')",
        "ur": "تَانِكَ"
      },
      {
        "en": "ذَانِكَ (Dhānika)",
        "ur": "ذَانِكَ"
      },
      {
        "en": "ذَيْنِكَ (Dhaynika)",
        "ur": "ذَيْنِكَ"
      },
      {
        "en": "أُولَئِكَ (Ula'ika)",
        "ur": "أُولَئِكَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'لِمَنْ هَذِهِ الدَّفَاتِرُ؟ - هِيَ لِـ... الطَّالِبَيْنِ' (for those two far students), what is the correct form?",
    "ur": "جملہ مکمل کریں: 'هِيَ لِـ... الطَّالِبَيْنِ' (حرفِ جر 'لِـ' کے بعد دور کے تثنیہ اسمِ اشارہ کی درست شکل):",
    "options": [
      {
        "en": "لِذَيْنِكَ (Lidhaynika - Majroor with Yā')",
        "ur": "لِذَيْنِكَ (یاء کے ساتھ مجرور)"
      },
      {
        "en": "لِذَانِكَ (Lidhānika)",
        "ur": "لِذَانِكَ"
      },
      {
        "en": "لِتَانِكَ (Litānika)",
        "ur": "لِتَانِكَ"
      },
      {
        "en": "لِذَلِكَ (Lidhalika)",
        "ur": "لِذَلِكَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'لَوْنُ ... السَّيَّارَتَيْنِ جَمِيلٌ' (The color of those two far cars is beautiful), choose the correct form:",
    "ur": "جملہ مکمل کریں: 'لَوْنُ ... السَّيَّارَتَيْنِ جَمِيلٌ' (مضاف الیہ ہونے کی وجہ سے دور کے تثنیہ مؤنث کی درست شکل):",
    "options": [
      {
        "en": "تَيْنِكَ (Taynika - Majroor with Yā')",
        "ur": "تَيْنِكَ (یاء کے ساتھ مجرور)"
      },
      {
        "en": "تَانِكَ (Tānika)",
        "ur": "تَانِكَ"
      },
      {
        "en": "ذَيْنِكَ (Dhaynika)",
        "ur": "ذَيْنِكَ"
      },
      {
        "en": "تِلْكَ (Tilka)",
        "ur": "تِلْكَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, complete: 'رَأَيْتُ رَجُلاً ... لِحْيَةٍ بَيْضَاءَ' (I saw a man having a white beard):",
    "ur": "تمرين 4 کے مطابق جملہ مکمل کریں: 'رَأَيْتُ رَجُلاً ... لِحْيَةٍ بَيْضَاءَ' (مفعول بہ کی صفت ہونے کی وجہ سے):",
    "options": [
      {
        "en": "ذَا (Dhā - Mansoob with Alif)",
        "ur": "ذَا (الف کے ساتھ منصوب)"
      },
      {
        "en": "ذُو (Dhoo)",
        "ur": "ذُو"
      },
      {
        "en": "ذِي (Dhee)",
        "ur": "ذِي"
      },
      {
        "en": "ذَوُو (Dhawoo)",
        "ur": "ذَوُو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Complete: 'سَلَّمْتُ عَلَى شَيْخٍ ... عِلْمٍ غَزِيرٍ' (I greeted an old man possessing abundant knowledge):",
    "ur": "جملہ مکمل کریں: 'سَلَّمْتُ عَلَى شَيْخٍ ... عِلْمٍ غَزِيرٍ' (اسمِ مجرور کی صفت ہونے کی وجہ سے):",
    "options": [
      {
        "en": "ذِي (Dhee - Majroor with Yā')",
        "ur": "ذِي (یاء کے ساتھ مجرور)"
      },
      {
        "en": "ذُو (Dhoo)",
        "ur": "ذُو"
      },
      {
        "en": "ذَا (Dhā)",
        "ur": "ذَا"
      },
      {
        "en": "ذَوِي (Dhawee)",
        "ur": "ذَوِي"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Complete: 'هَذَا المَسْجِدُ ... مَنَارَةٍ عَالِيَةٍ' (This mosque has a high minaret):",
    "ur": "جملہ مکمل کریں: 'هَذَا المَسْجِدُ ... مَنَارَةٍ عَالِيَةٍ' (خبر/مرفوع کی صفت ہونے کی وجہ سے):",
    "options": [
      {
        "en": "ذُو (Dhoo - Marfoo' with Waw)",
        "ur": "ذُو (واؤ کے ساتھ مرفوع)"
      },
      {
        "en": "ذَا (Dhā)",
        "ur": "ذَا"
      },
      {
        "en": "ذِي (Dhee)",
        "ur": "ذِي"
      },
      {
        "en": "ذَاتُ (Dhātu)",
        "ur": "ذَاتُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'فَذَانِكَ بُرْهَانَانِ مِنْ رَبِّكَ كَإِلَى فِرْعَوْنَ وَمَلَئِهِ' (Qur'an 28:32), how is 'فَذَانِكَ' parsed?",
    "ur": "قرآنی آیہ 'فَذَانِكَ بُرْهَانَانِ مِنْ رَبِّكَ' (القصص: 32) میں 'ذَانِكَ' کا اعرابی موقع کیا ہے؟",
    "options": [
      {
        "en": "Mubtada' Marfoo' with Alif (مبتدأ مرفوع بالألف)",
        "ur": "الف کے ساتھ مبتدأ مرفوع"
      },
      {
        "en": "Maf'ool Bihi Mansoob with Yā'",
        "ur": "یاء کے ساتھ مفعول بہ منصوب"
      },
      {
        "en": "Majroor with Kasra",
        "ur": "کسرہ کے ساتھ مجرور"
      },
      {
        "en": "Ism Inna Mansoob",
        "ur": "انّ کا اسم منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In Exercise 5, what is the grammatical function of 'بُرْهَانَانِ' in 'فَذَانِكَ بُرْهَانَانِ'?",
    "ur": "آیت مبارکہ 'فَذَانِكَ بُرْهَانَانِ' میں لفظ 'بُرْهَانَانِ' کا ترکیبی منصب کیا ہے؟",
    "options": [
      {
        "en": "Khabar Marfoo' with Alif (خبر مرفوع بالألف)",
        "ur": "الف کے ساتھ خبر مرفوع"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Na't Marfoo'",
        "ur": "نعت مرفوع"
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
    "en": "How does the indefinite noun 'قَلَمٌ' become definite when defined by 'Al'?",
    "ur": "نکرہ اسم 'قَلَمٌ' پر جب 'ال' داخل ہو جائے تو اس کی درست شکل کیا بنتی ہے؟",
    "options": [
      {
        "en": "القَلَمُ (Al-Qalamu, dropping Tanween)",
        "ur": "القَلَمُ (تنوین ختم ہو کر ایک ضمہ کے ساتھ)"
      },
      {
        "en": "القَلَمٌ (with Tanween)",
        "ur": "القَلَمٌ"
      },
      {
        "en": "قَلَمُكُ",
        "ur": "قَلَمُكُ"
      },
      {
        "en": "قَلَمِيٌّ",
        "ur": "قَلَمِيٌّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "When 'سَيَّارَةٌ' is made Mudaf to proper noun 'حَامِدٌ', how is the phrase written?",
    "ur": "اسم 'سَيَّارَةٌ' کو جب اسمِ علم 'حَامِدٌ' کی طرف مضاف کیا جائے تو درست مرکب کیا بنے گا؟",
    "options": [
      {
        "en": "سَيَّارَةُ حَامِدٍ (Sayyāratu Hāmidin)",
        "ur": "سَيَّارَةُ حَامِدٍ"
      },
      {
        "en": "السَّيَّارَةُ حَامِدٍ",
        "ur": "السَّيَّارَةُ حَامِدٍ"
      },
      {
        "en": "سَيَّارَةٌ حَامِدٌ",
        "ur": "سَيَّارَةٌ حَامِدٌ"
      },
      {
        "en": "سَيَّارَةَ الحَامِدِ",
        "ur": "سَيَّارَةَ الحَامِدِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Which of the following phrases represents a noun made definite by demonstrative relation?",
    "ur": "درج ذیل میں سے کون سی ترکیب 'المضاف إلى معرفة' (اسمِ اشارہ کی طرف اضافت) کی مثال ہے؟",
    "options": [
      {
        "en": "كِتَابُ هَذَا الطَّالِبِ (Kitābu hādhā at-tālibi)",
        "ur": "كِتَابُ هَذَا الطَّالِبِ"
      },
      {
        "en": "كِتَابٌ جَدِيدٌ",
        "ur": "كِتَابٌ جَدِيدٌ"
      },
      {
        "en": "الكِتَابُ الجَمِيلُ",
        "ur": "الكِتَابُ الجَمِيلُ"
      },
      {
        "en": "قَرَأْتُ كِتَاباً",
        "ur": "قَرَأْتُ كِتَاباً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Summary of Lesson 8: What are the two far dual demonstrative forms for masculine and feminine in the Marfoo' case?",
    "ur": "سبق 8 کا خلاصہ: حالتِ رفع میں مذکر اور مؤنث کے لیے دور کے تثنیہ اسمائے اشارہ کون سے ہیں؟",
    "options": [
      {
        "en": "ذَانِكَ (Masculine) and تَانِكَ (Feminine)",
        "ur": "مذکر کے لیے ذَانِكَ اور مؤنث کے لیے تَانِكَ"
      },
      {
        "en": "هَذَانِ and هَاتَانِ",
        "ur": "هَذَانِ اور هَاتَانِ"
      },
      {
        "en": "ذَلِكَ and تِلْكَ",
        "ur": "ذَلِكَ اور تِلْكَ"
      },
      {
        "en": "ذَيْنِكَ and تَيْنِكَ",
        "ur": "ذَيْنِكَ اور تَيْنِكَ"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 8 Quiz ---');

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

    // 4. Find or Create Lecture 08 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 8 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 08 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 08', 8)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 08: ID ${lectureId}`);
    }

    // 5. CAREFUL DELETION: Find existing Book 3 Lesson 8 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 8))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 8.`);
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

    // 6. Create the quiz for Book 3 Lesson 8
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 08 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 8 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

run();
