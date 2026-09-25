import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL || process.env.DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What are the primary signs of I'rab (علامات الإعراب الأصلية) for Marfoo', Mansoob, and Majroor singular nouns?",
    "ur": "واحد اسم کے لیے رفع، نصب اور جر کی اصلی علامات کیا ہیں؟",
    "options": [
      {
        "en": "Damma (ضمة) for Raf', Fatha (فتحة) for Nasb, Kasra (كسرة) for Jar",
        "ur": "رفع کے لیے ضمہ، نصب کے لیے فتحہ، جر کے لیے کسرہ"
      },
      {
        "en": "Fatha for Raf', Damma for Nasb, Sukoon for Jar",
        "ur": "رفع کے لیے فتحہ، نصب کے لیے ضمہ، جر کے لیے سکون"
      },
      {
        "en": "Waw for Raf', Alif for Nasb, Ya for Jar",
        "ur": "رفع کے لیے واؤ، نصب کے لیے الف، جر کے لیےیاء"
      },
      {
        "en": "Kasra for Raf', Fatha for Nasb, Damma for Jar",
        "ur": "رفع کے لیے کسرہ، نصب کے لیے فتحہ، جر کے لیے ضمہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the secondary signs of I'rab for the Five Nouns (الأسماء الخمسة) when they are Mudaf?",
    "ur": "الأسماء الخمسة جب مضاف ہوں تو ان کی فرعی اعرابی علامات کیا ہیں؟",
    "options": [
      {
        "en": "Damma, Fatha, Kasra",
        "ur": "ضمہ، فتحہ، کسرہ"
      },
      {
        "en": "Waw (واو) for Raf', Alif (ألف) for Nasb, Yā' (ياء) for Jar",
        "ur": "رفع کے لیے واؤ، نصب کے لیے الف، اور جر کے لیےیاء"
      },
      {
        "en": "Alif for Raf', Yā' for Nasb, Waw for Jar",
        "ur": "رفع کے لیے الف، نصب کے لیے یاء، اور جر کے لیے واؤ"
      },
      {
        "en": "Fatha for Raf', Kasra for Nasb, Sukoon for Jar",
        "ur": "رفع کے لیے فتحہ، نصب کے لیے کسرہ، اور جر کے لیے سکون"
      }
    ],
    "correct": 1
  },
  {
    "part": "Main Content",
    "en": "What is the sign of Nasb (علامة النصب) for Sound Feminine Plural (جمع المؤنث السالم)?",
    "ur": "جمع مؤنث سالم کے لیے حالتِ نصب میں اعرابی علامت کیا ہے؟",
    "options": [
      {
        "en": "Fatha (فتحة)",
        "ur": "فتحہ"
      },
      {
        "en": "Kasra (كسرة) instead of Fatha",
        "ur": "فتحہ کی جگہ کسرہ"
      },
      {
        "en": "Alif (ألف)",
        "ur": "الف"
      },
      {
        "en": "Yā' (ياء)",
        "ur": "یاء"
      }
    ],
    "correct": 1
  },
  {
    "part": "Main Content",
    "en": "What is the sign of Jar (علامة الجر) for Diptote nouns (الممنوع من الصرف) when stripped of 'Al' and not Mudaf?",
    "ur": "الممنوع من الصرف اگر ال اور مضاف سے خالی ہو تو حالتِ جر میں اس کی علامت کیا ہے؟",
    "options": [
      {
        "en": "Kasra (كسرة)",
        "ur": "کسرہ"
      },
      {
        "en": "Fatha (فتحة) instead of Kasra",
        "ur": "کسرہ کی جگہ فتحہ"
      },
      {
        "en": "Sukoon (سكون)",
        "ur": "سکون"
      },
      {
        "en": "Damma (ضمة)",
        "ur": "ضمہ"
      }
    ],
    "correct": 1
  },
  {
    "part": "Main Content",
    "en": "How are the three I'rab signs expressed in a noun that is Mudaf to Yā' al-Mutakallim (المضاف إلى ياء المتكلم, e.g., صَدِيقِي)?",
    "ur": "یاءِ متکلم کی طرف مضاف اسم (مثلاً صَدِيقِي) میں تمام تینوں اعرابی علامات کا کیا حکم ہے؟",
    "options": [
      {
        "en": "Apparent vowel signs on Yā'",
        "ur": "یاء پر ظاہری حرکات"
      },
      {
        "en": "All three signs are estimated (مقدرة) due to the Kasra of occasion",
        "ur": "کسرہ المناسبۃ کی وجہ سے تینوں علامات مقدرہ ہوتی ہیں"
      },
      {
        "en": "Damma is apparent; Fatha and Kasra are estimated",
        "ur": "ضمہ ظاہر ہوتا ہے، فتحہ اور کسرہ مقدر"
      },
      {
        "en": "Fatha is apparent; Damma and Kasra are estimated",
        "ur": "فتحہ ظاہر ہوتا ہے، ضمہ اور کسرہ مقدر"
      }
    ],
    "correct": 1
  },
  {
    "part": "Main Content",
    "en": "What is an Ism Maqsoor (الاسم المقصور)?",
    "ur": "الاسم المقصور سے کیا مراد ہے؟",
    "options": [
      {
        "en": "A noun ending in an essential Yā' preceded by Kasra",
        "ur": "وہ اسم جس کے آخر میں یاءِ لازمی ہو اور اس سے پہلے کسرہ ہو"
      },
      {
        "en": "A noun ending in an essential Alif (ألف لازمة) like المَصْطَفَى",
        "ur": "وہ اسم جس کے آخر میں الفِ لازمی ہو جیسے المَصْطَفَى"
      },
      {
        "en": "A noun ending in Hamzah preceded by Alif",
        "ur": "وہ اسم جس کے آخر میں ہمزہ اور اس سے پہلے الف ہو"
      },
      {
        "en": "A noun with no vowel endings",
        "ur": "وہ اسم جس کا آخری حرف ساکن ہو"
      }
    ],
    "correct": 1
  },
  {
    "part": "Main Content",
    "en": "How are I'rab signs expressed in an Ism Maqsoor (e.g., المَصْطَفَى)?",
    "ur": "الاسم المقصور (مثلاً المَصْطَفَى) میں اعرابی علامات کیسے ظاہر کی جاتی ہیں؟",
    "options": [
      {
        "en": "All three signs (Damma, Fatha, Kasra) are estimated (مقدرة)",
        "ur": "تینوں علامات (ضمہ، فتحہ، کسرہ) مقدرہ ہوتی ہیں"
      },
      {
        "en": "Fatha is apparent; Damma and Kasra are estimated",
        "ur": "فتحہ ظاہری ہوتا ہے، ضمہ اور کسرہ مقدر"
      },
      {
        "en": "All three signs are apparent",
        "ur": "تینوں علامات ظاہری ہوتی ہیں"
      },
      {
        "en": "Only Kasra is estimated",
        "ur": "صرف کسرہ مقدر ہوتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is an Ism Manqoos (الاسم المنقوص)?",
    "ur": "الاسم المنقوص سے کیا مراد ہے؟",
    "options": [
      {
        "en": "A noun ending in Alif Maqsoora",
        "ur": "وہ اسم جس کے آخر میں الفِ مقصورہ ہو"
      },
      {
        "en": "A noun ending in an essential Yā' preceded by Kasra (e.g., القَاضِي)",
        "ur": "وہ اسم جس کے آخر میں یاءِ لازمی ہو اور اس سے پہلے کسرہ ہو (جیسے القَاضِي)"
      },
      {
        "en": "A noun with a dropped first letter",
        "ur": "وہ اسم جس کا پہلا حرف حذف ہو"
      },
      {
        "en": "A noun ending in Tanween",
        "ur": "وہ اسم جس کے آخر میں تنوین ہو"
      }
    ],
    "correct": 1
  },
  {
    "part": "Main Content",
    "en": "In an Ism Manqoos (e.g., القَاضِي / قَاضٍ), which I'rab sign is apparent (ظاهرة)?",
    "ur": "الاسم المنقوص (مثلاً القَاضِي / قَاضٍ) میں کون سی اعرابی علامت ظاہری (ظاهرة) ہوتی ہے؟",
    "options": [
      {
        "en": "Damma in Marfoo'",
        "ur": "حالتِ رفع میں ضمہ"
      },
      {
        "en": "Fatha in Mansoob (فتحة ظاهرة)",
        "ur": "حالتِ نصب میں فتحہ ظاہرہ"
      },
      {
        "en": "Kasra in Majroor",
        "ur": "حالتِ جر میں کسرہ"
      },
      {
        "en": "None; all three are estimated",
        "ur": "کوئی بھی نہیں؛ تینوں مقدرہ ہوتی ہیں"
      }
    ],
    "correct": 1
  },
  {
    "part": "Main Content",
    "en": "In which three cases is the final Yā' retained in an indefinite or definite Ism Manqoos?",
    "ur": "الاسم المنقوص میں آخری یاء کن تین حالتوں میں باقی رہتی ہے؟",
    "options": [
      {
        "en": "When defined by Al (القاضي), when Mudaf (قاضي مكة), and when Mansoob (قاضياً)",
        "ur": "جب اس پر ال ہو (القاضي)، جب مضاف ہو (قاضي مكة)، اور جب منصوب ہو (قاضياً)"
      },
      {
        "en": "Only when Marfoo', Majroor, or Plural",
        "ur": "صرف جب مرفوع، مجرور، یا جمع ہو"
      },
      {
        "en": "Only when it takes Tanween",
        "ur": "صرف جب تنوین ہو"
      },
      {
        "en": "Only at the end of a sentence",
        "ur": "صرف جملے کے آخر میں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Which of the following words from Exercise 1 is Mabni (مبني)?",
    "ur": "تمرين 1 کے درج ذیل الفاظ میں سے کون سا لفظ مبنی (مبني) ہے؟",
    "options": [
      {
        "en": "كِتَابٌ (Kitabun)",
        "ur": "كِتَابٌ"
      },
      {
        "en": "هَذَا (Hadha)",
        "ur": "هَذَا"
      },
      {
        "en": "حَامِدٌ (Hamidun)",
        "ur": "حَامِدٌ"
      },
      {
        "en": "سَيَّارَةٌ (Sayyaratun)",
        "ur": "سَيَّارَةٌ"
      }
    ],
    "correct": 1
  },
  {
    "part": "Exercise 1",
    "en": "Why are the dual demonstrative/relative forms 'هَذَانِ' (Hadhani) and 'اللَّتَانِ' (Allatani) classified as Mu'rab (معرب) in Exercise 1?",
    "ur": "تمرين 1 میں 'هَذَانِ' اور 'اللَّتَانِ' کو معرب (معرب) کیوں قرار دیا گیا ہے؟",
    "options": [
      {
        "en": "Because they take Tanween",
        "ur": "کیونکہ ان پر تنوین آتی ہے"
      },
      {
        "en": "Because they decline like Dual nouns (Alif in Marfoo', Yā' in Mansoob/Majroor)",
        "ur": "کیونکہ ان کا اعراب تثنیہ کی طرح بدلتا ہے (رفع میں الف، نصب وجر میں یاء)"
      },
      {
        "en": "Because they end with Kasra",
        "ur": "کیونکہ ان کے آخر میں کسرہ ہے"
      },
      {
        "en": "Because they are personal pronouns",
        "ur": "کیونکہ وہ ضمائر ہیں"
      }
    ],
    "correct": 1
  },
  {
    "part": "Exercise 1",
    "en": "Which of the following compound numbers from Exercise 1 is Mabni (مبني)?",
    "ur": "تمرين 1 کے مندرجہ ذیل الفاظ میں سے کون سا لفظ مبنی ہے؟",
    "options": [
      {
        "en": "اللهُ",
        "ur": "اللهُ"
      },
      {
        "en": "أَرْبَعَةَ عَشَرَ (Arba'ata 'ashara)",
        "ur": "أَرْبَعَةَ عَشَرَ"
      },
      {
        "en": "مُسْلِمَانِ",
        "ur": "مُسْلِمَانِ"
      },
      {
        "en": "الجَامِعَةُ",
        "ur": "الجَامِعَةُ"
      }
    ],
    "correct": 1
  },
  {
    "part": "Exercise 2",
    "en": "According to Exercise 2, what are the primary signs of I'rab for standard singular nouns?",
    "ur": "تمرين 2 کے مطابق اسم مفرد میں اعراب کی اصلی علامات کیا ہیں؟",
    "options": [
      {
        "en": "Waw, Alif, Yā'",
        "ur": "واؤ، الف، یاء"
      },
      {
        "en": "Damma for Raf', Fatha for Nasb, Kasra for Jar",
        "ur": "رفع کے لیے ضمہ، نصب کے لیے فتحہ، جر کے لیے کسرہ"
      },
      {
        "en": "Fatha for Raf', Damma for Nasb, Sukoon for Jar",
        "ur": "رفع کے لیے فتحہ، نصب کے لیے ضمہ، جر کے لیے سکون"
      },
      {
        "en": "Sukoon for all cases",
        "ur": "تمام حالتوں کے لیے سکون"
      }
    ],
    "correct": 1
  },
  {
    "part": "Exercise 3",
    "en": "According to Exercise 3, which group of nouns uses Alif (ألف) for Raf' and Yā' (ياء) for Nasb and Jar?",
    "ur": "تمرين 3 کے مطابق کون سا اسم حالتِ رفع میں الف اور حالتِ نصب وجر میں یاء لیتا ہے؟",
    "options": [
      {
        "en": "Asma' al-Khamsa (الأسماء الخمسة)",
        "ur": "الأسماء الخمسة"
      },
      {
        "en": "Al-Muthanna / Dual (المثنى)",
        "ur": "المثنى (تثنیہ)"
      },
      {
        "en": "Jama' al-Mudhakar al-Salim (جمع المذكر السالم)",
        "ur": "جمع المذكر السالم"
      },
      {
        "en": "Diptotes (الممنوع من الصرف)",
        "ur": "الممنوع من الصرف"
      }
    ],
    "correct": 1
  },
  {
    "part": "Exercise 3",
    "en": "What are the secondary signs of I'rab for Jama' al-Mudhakar al-Salim (جمع المذكر السالم)?",
    "ur": "جمع مذكر سالم کی فرعی اعرابی علامات کیا ہیں؟",
    "options": [
      {
        "en": "Alif for Raf', Yā' for Nasb and Jar",
        "ur": "رفع کے لیے الف، نصب وجر کے لیے یاء"
      },
      {
        "en": "Waw (واو) for Raf', and Yā' (ياء) for Nasb and Jar",
        "ur": "رفع کے لیے واؤ، اور نصب وجر کے لیے یاء"
      },
      {
        "en": "Damma for Raf', Fatha for Nasb, Kasra for Jar",
        "ur": "رفع کے لیے ضمہ، نصب کے لیے فتحہ، جر کے لیے کسرہ"
      },
      {
        "en": "Sukoon for Raf', Kasra for Nasb",
        "ur": "رفع کے لیے سکون، نصب کے لیے کسرہ"
      }
    ],
    "correct": 1
  },
  {
    "part": "Exercise 4",
    "en": "What is the sign of Jar for a Diptote noun (الممنوع من الصرف) when stripped of 'Al' and not Mudaf?",
    "ur": "تمرين 4 کے مطابق الممنوع من الصرف جب ال اور مضاف سے خالی ہو تو حالتِ جر میں اعرابی علامت کیا ہوگی؟",
    "options": [
      {
        "en": "Kasra (كسرة)",
        "ur": "کسرہ"
      },
      {
        "en": "Fatha (فتحة)",
        "ur": "فتحہ"
      },
      {
        "en": "Damma (ضمة)",
        "ur": "ضمہ"
      },
      {
        "en": "Yā' (ياء)",
        "ur": "یاء"
      }
    ],
    "correct": 1
  },
  {
    "part": "Exercise 5",
    "en": "In Exercise 5, what is the sign of Nasb in the sentence 'رَأَيْتُ الطَّالِبَاتِ' (I saw the female students)?",
    "ur": "تمرين 5 کے جملے 'رَأَيْتُ الطَّالِبَاتِ' میں مفعول بہ کا اعراب کیا ہے؟",
    "options": [
      {
        "en": "Fatha on the last letter",
        "ur": "آخری حرف پر فتحہ"
      },
      {
        "en": "Kasra (كسرة) because it is Sound Feminine Plural",
        "ur": "جمع مؤنث سالم ہونے کی وجہ سے کسرہ"
      },
      {
        "en": "Alif",
        "ur": "الف"
      },
      {
        "en": "Sukoon",
        "ur": "سکون"
      }
    ],
    "correct": 1
  },
  {
    "part": "Exercise 6",
    "en": "What is the correct Marfoo' form of the Ism Maqsoor in Exercise 6?",
    "ur": "تمرين 6 کے مطابق الاسم المقصور کی حالتِ رفع کی درست شکل کیا ہے؟",
    "options": [
      {
        "en": "جَاءَ المَصْطَفَى (with estimated Damma)",
        "ur": "جَاءَ المَصْطَفَى (ضمہ مقدرہ کے ساتھ)"
      },
      {
        "en": "جَاءَ المَصْطَفَىُ (with apparent Damma)",
        "ur": "جَاءَ المَصْطَفَىُ (ضمہ ظاہرہ کے ساتھ)"
      },
      {
        "en": "جَاءَ المَصْطَفَىِ",
        "ur": "جَاءَ المَصْطَفَىِ"
      },
      {
        "en": "جَاءَ المَصْطَفَيُ",
        "ur": "جَاءَ المَصْطَفَيُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "How are the Ism Maqsoor words 'الجَرْحَى' and 'المُسْتَشْفَى' declined in 'خَرَجَ الجَرْحَى مِنَ المُسْتَشْفَى'?",
    "ur": "جملے 'خَرَجَ الجَرْحَى مِنَ المُسْتَشْفَى' میں دونوں اسمائے مقصورہ کا اعراب کیا ہے؟",
    "options": [
      {
        "en": "Apparent Fatha on Alif",
        "ur": "الف پر ظاہری فتحہ"
      },
      {
        "en": "Estimated Damma for 'الجرحى' (Fa'il) and estimated Kasra for 'المستشفى' (Majroor)",
        "ur": "فاعل ہونے کی بنا پر الجرحى پر ضمہ مقدرہ اور مجرور ہونے کی بنا پر المستشفى پر کسرہ مقدرہ"
      },
      {
        "en": "Apparent Kasra under Alif",
        "ur": "الف کے نیچے ظاہری کسرہ"
      },
      {
        "en": "Apparent Sukoon",
        "ur": "ظاہری سکون"
      }
    ],
    "correct": 1
  },
  {
    "part": "Exercise 7",
    "en": "In Exercise 7, how is the Ism Manqoos 'القَاضِي' parsed in 'ذَهَبْتُ إِلَى القَاضِي'?",
    "ur": "تمرين 7 کے جملے 'ذَهَبْتُ إِلَى القَاضِي' میں 'القَاضِي' کا اعراب کیا ہے؟",
    "options": [
      {
        "en": "Majroor with apparent Kasra on Yā'",
        "ur": "یاء پر ظاہری کسرہ کے ساتھ مجرور"
      },
      {
        "en": "Majroor with estimated Kasra on Yā' (كسرة مقدرة على الياء)",
        "ur": "یاء پر کسرہ مقدرہ کے ساتھ مجرور"
      },
      {
        "en": "Mansoob with apparent Fatha",
        "ur": "فتحه ظاہرہ کے ساتھ منصوب"
      },
      {
        "en": "Marfoo' with Waw",
        "ur": "واؤ کے ساتھ مرفوع"
      }
    ],
    "correct": 1
  },
  {
    "part": "Exercise 7",
    "en": "In 'رَأَيْتُ القَاضِيَ' (I saw the judge), why is the Fatha visible on 'القَاضِيَ'?",
    "ur": "جملے 'رَأَيْتُ القَاضِيَ' میں 'القَاضِيَ' پر فتحہ کیوں ظاہر ہوتا ہے؟",
    "options": [
      {
        "en": "Because Fatha is light and easily pronounced on Yā' (فتحة ظاهرة)",
        "ur": "کیونکہ یاء پر فتحہ ہلکا اور آسانی سے بولا جاتا ہے (فتحہ ظاہرہ)"
      },
      {
        "en": "Because it is Marfoo'",
        "ur": "کیونکہ وہ مرفوع ہے"
      },
      {
        "en": "Because it is Mudaf",
        "ur": "کیونکہ وہ مضاف ہے"
      },
      {
        "en": "Because it is Mabni",
        "ur": "کیونکہ وہ مبنی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 8",
    "en": "What is the correct indefinite Marfoo' form of Ism Manqoos (dropping Yā') in Exercise 8?",
    "ur": "تمرين 8 کے مطابق الاسم المنقوص (یاء حذف ہونے کی صورت میں) کی نکرہ حالتِ رفع کیا ہے؟",
    "options": [
      {
        "en": "ذَهَبَ قَاضِيٌ",
        "ur": "ذَهَبَ قَاضِيٌ"
      },
      {
        "en": "ذَهَبَ قَاضٍ (Qādin with Tanween Kasr replacing dropped Yā')",
        "ur": "ذَهَبَ قَاضٍ (حذف شدہ یاء کے عوض تنوین کسر کے ساتھ)"
      },
      {
        "en": "ذَهَبَ قَاضِياً",
        "ur": "ذَهَبَ قَاضِياً"
      },
      {
        "en": "ذَهَبَ قَاضَى",
        "ur": "ذَهَبَ قَاضَى"
      }
    ],
    "correct": 1
  },
  {
    "part": "Exercise 8",
    "en": "In Exercise 8, what happens to the indefinite Ism Manqoos when it is Mansoob ('I saw a judge')?",
    "ur": "تمرين 8 کے مطابق نکرہ اسم منقوص جب منصوب ہوتا ہے (مثلاً 'میں نے ایک قاضی دیکھا') تو کیا تبدیلی آتی ہے؟",
    "options": [
      {
        "en": "Yā' is dropped: رَأَيْتُ قَاضٍ",
        "ur": "یاء حذف رہتی ہے: رَأَيْتُ قَاضٍ"
      },
      {
        "en": "Yā' returns with apparent Fatha: رَأَيْتُ قَاضِياً",
        "ur": "یاء فتحہ ظاہرہ کے ساتھ واپس آ جاتی ہے: رَأَيْتُ قَاضِياً"
      },
      {
        "en": "It takes Damma: رَأَيْتُ قَاضِيٌ",
        "ur": "ضمہ آ جاتا ہے: رَأَيْتُ قَاضِيٌ"
      },
      {
        "en": "It takes Sukoon: رَأَيْتُ قَاضِي",
        "ur": "سکون آ جاتا ہے: رَأَيْتُ قَاضِي"
      }
    ],
    "correct": 1
  },
  {
    "part": "Exercise 9",
    "en": "In 'دَعَا جَدِّي أُسْتَاذِي مَعَ زُمَلاَئِي', how is 'جَدِّي' (my grandfather) parsed?",
    "ur": "جملے 'دَعَا جَدِّي أُسْتَاذِي مَعَ زُمَلاَئِي' میں 'جَدِّي' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Fa'il Marfoo' with apparent Damma",
        "ur": "فاعل مرفوع بضمہ ظاہرہ"
      },
      {
        "en": "Fa'il Marfoo' with estimated Damma (ضمة مقدرة) due to Yā' al-Mutakallim",
        "ur": "یاءِ متکلم کی وجہ سے ضمہ مقدرہ کے ساتھ فاعل مرفوع"
      },
      {
        "en": "Maf'ool Bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Mudaf Ilayh Majroor",
        "ur": "مضاف الیہ مجرور"
      }
    ],
    "correct": 1
  },
  {
    "part": "Exercise 9",
    "en": "How is 'أُسْتَاذِي' (my teacher) parsed in the sentence 'دَعَا جَدِّي أُسْتَاذِي'?",
    "ur": "جملے 'دَعَا جَدِّي أُسْتَاذِي' میں 'أُسْتَاذِي' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Maf'ool Bihi Mansoob with estimated Fatha (فتحة مقدرة)",
        "ur": "فتحہ مقدرہ کے ساتھ مفعول بہ منصوب"
      },
      {
        "en": "Maf'ool Bihi Mansoob with apparent Fatha",
        "ur": "فتحہ ظاہرہ کے ساتھ مفعول بہ منصوب"
      },
      {
        "en": "Fa'il Marfoo' with estimated Damma",
        "ur": "ضمہ مقدرہ کے ساتھ فاعل مرفوع"
      },
      {
        "en": "Majroor with Kasra",
        "ur": "کسرہ کے ساتھ مجرور"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 10",
    "en": "In Exercise 10, in the sentence 'افْتَحْ فَاكَ' (Open your mouth), how is 'فَاكَ' parsed?",
    "ur": "تمرين 10 کے جملے 'افْتَحْ فَاكَ' میں 'فَاكَ' کا اعراب کیا ہے؟",
    "options": [
      {
        "en": "Maf'ool Bihi Mansoob with Alif (ألف) because it is from Asma' al-Khamsa",
        "ur": "الأسماء الخمسة میں سے ہونے کی وجہ سے الف کے ساتھ مفعول بہ منصوب"
      },
      {
        "en": "Fa'il Marfoo' with Damma",
        "ur": "ضمہ کے ساتھ فاعل مرفوع"
      },
      {
        "en": "Majroor with Yā'",
        "ur": "یاء کے ساتھ مجرور"
      },
      {
        "en": "Mabni on Fatha",
        "ur": "فتحہ پر مبنی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 10",
    "en": "In Exercise 10, in 'أَخَذَ صَدِيقِي كِتَابِي مِنْ حَقِيبَتِي', what is the grammatical sign for 'صَدِيقِي', 'كِتَابِي', and 'حَقِيبَتِي'?",
    "ur": "تمرين 10 کے جملے 'أَخَذَ صَدِيقِي كِتَابِي مِنْ حَقِيبَتِي' میں 'صَدِيقِي'، 'كِتَابِي'، اور 'حَقِيبَتِي' کا اعرابی حکم کیا ہے؟",
    "options": [
      {
        "en": "Apparent Damma, Fatha, and Kasra",
        "ur": "ظاہری ضمہ، فتحہ اور کسرہ"
      },
      {
        "en": "Estimated signs (علامات مقدرة) on all three due to Yā' al-Mutakallim",
        "ur": "یاءِ متکلم سے مضاف ہونے کی وجہ سے تینوں پر اعرابی علامات مقدرہ ہیں"
      },
      {
        "en": "Secondary signs (علامات فرعية)",
        "ur": "فرعی اعرابی علامات"
      },
      {
        "en": "Sukoon on all three",
        "ur": "تینوں پر سکون"
      }
    ],
    "correct": 1
  },
  {
    "part": "Exercise 10",
    "en": "In 'اشْتَرَيْتُ هَذَا بِخَمْسَةَ عَشَرَ رِيَالاً' (I bought this for 15 riyals), how is 'خَمْسَةَ عَشَرَ' parsed?",
    "ur": "جملے 'اشْتَرَيْتُ هَذَا بِخَمْسَةَ عَشَرَ رِيَالاً' میں مرکب عددی 'خَمْسَةَ عَشَرَ' کا کیا اعراب ہے؟",
    "options": [
      {
        "en": "Compound number Mabni on Fatha of both parts in position of Jar (مبني على فتح الجزأين في محل جر)",
        "ur": "مرکبِ بنائی دونوں جزئوں کے فتحہ پر مبنی ہے (في محل جر)"
      },
      {
        "en": "Majroor with Kasra under five",
        "ur": "خمسۃ کے نیچے کسرہ کے ساتھ مجرور"
      },
      {
        "en": "Marfoo' with Damma",
        "ur": "ضمہ کے ساتھ مرفوع"
      },
      {
        "en": "Mansoob with Tanween",
        "ur": "تنوین کے ساتھ منصوب"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 1 Quiz (New Version with Part field) ---');

  try {
    // 1. Ensure 'part' column exists in 'questions' table
    console.log('Ensuring "part" column exists in questions table...');
    await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS part TEXT`;
    console.log('Checked "part" column.');

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

    // 4. Find or Create Lecture 01 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 1 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 01 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 01', 1)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 01: ID ${lectureId}`);
    }

    // 5. CAREFUL DELETION: Find existing Book 3 Lesson 1 quizzes ONLY
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 1))
    `;

    console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 1.`);

    for (const eq of existingQuizzes) {
      console.log(`Processing old Quiz ID ${eq.id} ("${eq.title}")...`);

      // Delete student attempts for this quiz
      const deletedResults = await sql`DELETE FROM results WHERE quiz_id = ${eq.id} RETURNING id`;
      console.log(`  - Deleted ${deletedResults.length} student attempt(s) for quiz ID ${eq.id}.`);

      // Delete questions for this quiz
      const deletedQuestions = await sql`DELETE FROM questions WHERE quiz_id = ${eq.id} RETURNING id`;
      console.log(`  - Deleted ${deletedQuestions.length} old question(s) for quiz ID ${eq.id}.`);

      // Delete the old quiz itself
      await sql`DELETE FROM quizzes WHERE id = ${eq.id}`;
      console.log(`  - Deleted old quiz ID ${eq.id}.`);
    }

    // 6. Create the replacement quiz for Book 3 Lesson 1
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 01 Quiz', 'Daily', 1)
      RETURNING id, title
    `;
    const newQuizId = newQuiz.id;
    console.log(`Created new Quiz: ID ${newQuizId} ("${newQuiz.title}")`);

    // 7. Insert all 29 questions with part, en, ur, options, correct_option_index
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 1 with ${questionsData.length} questions and Part designations!`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

run();
