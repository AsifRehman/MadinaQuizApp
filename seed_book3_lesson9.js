import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL || process.env.DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What happens to the Noon (ن) of Muthanna (Dual) and Jama' Mudhakar Salim (Sound Masculine Plural) when they become Mudaf (مضاف)?",
    "ur": "تثنیہ اور جمع مذكر سالم جب مضاف بنتے ہیں تو ان کے نون (ن) کے ساتھ کیا معاملہ ہوتا ہے؟",
    "options": [
      {
        "en": "The Noon is dropped obligatory (تُحْذَفُ النُّونُ وُجُوباً l-الإضافة)",
        "ur": "اضافت کی وجہ سے نون کا حذف ہونا واجب ہے"
      },
      {
        "en": "The Noon takes a Kasra",
        "ur": "نون پر کسرہ آ جاتا ہے"
      },
      {
        "en": "The Noon takes a Fatha",
        "ur": "نون پر فتحہ آ جاتا ہے"
      },
      {
        "en": "The Noon remains unchanged",
        "ur": "نون میں کوئی تبدیلی نہیں آتی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the correct Marfoo' form when 'كِتَابَانِ' (two books) is made Mudaf to 'حَامِدٌ'?",
    "ur": "'كِتَابَانِ' (دو کتابیں) کو جب 'حَامِدٌ' کی طرف مضاف کیا جائے تو حالتِ رفع میں درست شکل کیا ہوگی؟",
    "options": [
      {
        "en": "كِتَابَا حَامِدٍ (Kitābā Hāmidin)",
        "ur": "كِتَابَا حَامِدٍ"
      },
      {
        "en": "كِتَابَانِ حَامِدٍ",
        "ur": "كِتَابَانِ حَامِدٍ"
      },
      {
        "en": "كِتَابَيْ حَامِدٍ",
        "ur": "كِتَابَيْ حَامِدٍ"
      },
      {
        "en": "كِتَابُ حَامِدٍ",
        "ur": "كِتَابُ حَامِدٍ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the correct Marfoo' form when 'مُدَرِّسُونَ' (teachers) is made Mudaf to 'المَدْرَسَةُ'?",
    "ur": "'مُدَرِّسُونَ' (اساتذہ) کو جب 'المَدْرَسَةُ' کی طرف مضاف کیا جائے تو حالتِ رفع میں درست شکل کیا ہوگی؟",
    "options": [
      {
        "en": "مُدَرِّسُو المَدْرَسَةِ (Mudarrisū al-madrasati)",
        "ur": "مُدَرِّسُو المَدْرَسَةِ"
      },
      {
        "en": "مُدَرِّسُونَ المَدْرَسَةِ",
        "ur": "مُدَرِّسُونَ المَدْرَسَةِ"
      },
      {
        "en": "مُدَرِّسِي المَدْرَسَةِ",
        "ur": "مُدَرِّسِي المَدْرَسَةِ"
      },
      {
        "en": "مُدَرِّسِينَ المَدْرَسَةِ",
        "ur": "مُدَرِّسِينَ المَدْرَسَةِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the correct Marfoo' form of Muthanna 'كِتَابَانِ' when attached to Yā' al-Mutakallim (my two books)?",
    "ur": "تثنیہ 'كِتَابَانِ' کو جب یاءِ متکلم سے جوڑا جائے تو حالتِ رفع میں اس کی درست شکل کیا ہوگی؟",
    "options": [
      {
        "en": "كِتَابَايَ (Kitābāya, with Alif and Fatha-bearing Yā')",
        "ur": "كِتَابَايَ (الف اور مفتوح یاء کے ساتھ)"
      },
      {
        "en": "كِتَابِيَّ",
        "ur": "كِتَابِيَّ"
      },
      {
        "en": "كِتَابَانِي",
        "ur": "كِتَابَانِي"
      },
      {
        "en": "كِتَابَيَّ",
        "ur": "كِتَابَيَّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the Mansoob and Majroor forms of Muthanna 'كِتَابَيْنِ' attached to Yā' al-Mutakallim?",
    "ur": "تثنیہ 'كِتَابَيْنِ' کو یاءِ متکلم سے جوڑنے پر حالتِ نصب وجر میں درست شکل کیا ہوتی ہے؟",
    "options": [
      {
        "en": "كِتَابَيَّ (Kitābayya, merging Yā' of dual with Yā' al-Mutakallim with Shaddah)",
        "ur": "كِتَابَيَّ (تثنیہ کی یاء کو یاءِ متکلم میں مدغم کر کے تشدید کے ساتھ)"
      },
      {
        "en": "كِتَابَايَ",
        "ur": "كِتَابَايَ"
      },
      {
        "en": "كِتَابِيَّ",
        "ur": "كِتَابِيَّ"
      },
      {
        "en": "كِتَابَيْنِي",
        "ur": "كِتَابَيْنِي"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is Jama' Mudhakar Salim (e.g., مُدَرِّسُونَ) expressed when attached to Yā' al-Mutakallim in ALL three cases (Raf', Nasb, Jar)?",
    "ur": "جمع مذكر سالم (مثلاً مُدَرِّسُونَ) جب یاءِ متکلم سے مضاف ہو تو تمام اعرابی حالتوں (رفع، نصب، جر) میں اس کی شکل کیا ہوتی ہے؟",
    "options": [
      {
        "en": "مُدَرِّسِيَّ (Mudarrisiyya, in all cases)",
        "ur": "مُدَرِّسِيَّ (تمام حالتوں میں ایک ہی شکل)"
      },
      {
        "en": "مُدَرِّسُويَ",
        "ur": "مُدَرِّسُويَ"
      },
      {
        "en": "مُدَرِّسُونِي",
        "ur": "مُدَرِّسُونِي"
      },
      {
        "en": "مُدَرِّسَايَ",
        "ur": "مُدَرِّسَايَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is 'كِلاَ' (Kilā) declined when made Mudaf to an explicit noun (إلى اسم ظاهر, e.g., كِلاَ الطَّالِبَيْنِ)?",
    "ur": "'كِلاَ' جب کسی اسمِ ظاہر (مثلاً كِلاَ الطَّالِبَيْنِ) کی طرف مضاف ہو تو اس کا اعراب کیسے ہوتا ہے؟",
    "options": [
      {
        "en": "With estimated signs on Alif like Ism Maqsoor (بحركات مقدرة على الألف)",
        "ur": "اسمِ مقصور کی طرح الف پر مقدر حرکات کے ساتھ"
      },
      {
        "en": "Like Dual with Alif in Raf' and Yā' in Nasb/Jar",
        "ur": "تثنیہ کی طرح رفع میں الف اور نصب وجر میں یاء کے ساتھ"
      },
      {
        "en": "Fixed on Fatha in all cases",
        "ur": "تمام حالتوں میں فتحہ پر مبنی"
      },
      {
        "en": "Always Majroor with Kasra",
        "ur": "ہمیشہ کسرہ کے ساتھ مجرور"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How are 'كِلاَهُمَا' and 'كِلْتَاهُمَا' declined when attached to a pronoun (إلى ضمير)?",
    "ur": "'كِلاَهُمَا' اور 'كِلْتَاهُمَا' جب کسی ضمیر کی طرف مضاف ہوں تو ان کا اعراب کیسے ہوتا ہے؟",
    "options": [
      {
        "en": "Like Dual (ملحق بالمثنى: بالألف رفعاً وبالياء نصباً وجراً)",
        "ur": "تثنیہ کی طرح (رفع میں الف، اور نصب وجر میں یاء کے ساتھ)"
      },
      {
        "en": "With estimated vowels on Alif in all cases",
        "ur": "الف پر مقدر حرکات کے ساتھ"
      },
      {
        "en": "Fixed on Damma",
        "ur": "ضمہ پر مبنی"
      },
      {
        "en": "Always Mansoob with Fatha",
        "ur": "ہمیشہ فتحہ کے ساتھ منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Mansoob and Majroor form of 'كِلاَهُمَا' (both of them - masculine)?",
    "ur": "'كِلاَهُمَا' (وہ دونوں مذکر) کی حالتِ نصب اور حالتِ جر کی درست شکل کیا ہے؟",
    "options": [
      {
        "en": "كِلَيْهِمَا (Kilayhimā)",
        "ur": "كِلَيْهِمَا"
      },
      {
        "en": "كِلْتَيْهِمَا",
        "ur": "كِلْتَيْهِمَا"
      },
      {
        "en": "كِلاَهُمَا",
        "ur": "كِلاَهُمَا"
      },
      {
        "en": "كِلَيْهِمُ",
        "ur": "كِلَيْهِمُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the grammatical state of compound numbers (11-19) when attached to a Mudaf Ilayh (e.g., 'ثَلاَثَةَ عَشَرَكَ')?",
    "ur": "مرکب اعداد (11-19) جب کسی مضاف الیہ (مثلاً 'ثَلاَثَةَ عَشَرَكَ') سے مضاف بنتے ہیں تو ان کا اعرابی حکم کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Remains Mabni on Fatha of both parts (مبني على فتح الجزأين)",
        "ur": "دونوں اجزاء کے فتحہ پر مبنی ہی رہتے ہیں"
      },
      {
        "en": "Becomes Mu'rab with Kasra",
        "ur": "کسرہ کے ساتھ معرب ہو جاتے ہیں"
      },
      {
        "en": "First part takes Damma, second takes Fatha",
        "ur": "پہلا جز ضمہ اور دوسرا فتحہ لیتا ہے"
      },
      {
        "en": "Drops Fatha and takes Sukoon",
        "ur": "فتحہ ختم ہو کر سکون آ جاتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, how do you express 'I washed my two hands' in Arabic?",
    "ur": "تمرين 1 کے مطابق 'میں نے اپنے دونوں ہاتھ دھوئے' کا درست عربی جملہ کیا ہوگا؟",
    "options": [
      {
        "en": "غَسَلْتُ يَدَيَّ (Ghasaltu yadayya)",
        "ur": "غَسَلْتُ يَدَيَّ"
      },
      {
        "en": "غَسَلْتُ يَدَانِ",
        "ur": "غَسَلْتُ يَدَانِ"
      },
      {
        "en": "غَسَلْتُ يَدَيْنِ",
        "ur": "غَسَلْتُ يَدَيْنِ"
      },
      {
        "en": "غَسَلْتُ يَدَايَ",
        "ur": "غَسَلْتُ يَدَايَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, convert 'طَالِبَانِ' into Mudaf to 'الفَصْلِ' in the sentence 'جَاءَ ...' (Two students of the class came):",
    "ur": "جملے 'جَاءَ ...' میں 'طَالِبَانِ' کو 'الفَصْلِ' کی طرف مضاف کر کے درست شکل منتخب کریں:",
    "options": [
      {
        "en": "طَالِبَا الفَصْلِ (Tālibā al-fasli)",
        "ur": "طَالِبَا الفَصْلِ"
      },
      {
        "en": "طَالِبَانِ الفَصْلِ",
        "ur": "طَالِبَانِ الفَصْلِ"
      },
      {
        "en": "طَالِبَيْ الفَصْلِ",
        "ur": "طَالِبَيْ الفَصْلِ"
      },
      {
        "en": "طُلاَّبُ الفَصْلِ",
        "ur": "طُلاَّبُ الفَصْلِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete: 'رَأَيْتُ ... حَامِدٍ' (I saw Hamid's two sons):",
    "ur": "جملہ مکمل کریں: 'رَأَيْتُ ... حَامِدٍ' (میں نے حامد کے دونوں بیٹوں کو دیکھا):",
    "options": [
      {
        "en": "ابْنَيْ حَامِدٍ (Ibnay Hāmidin, Mansoob with Yā')",
        "ur": "ابْنَيْ حَامِدٍ (یاء کے ساتھ منصوب)"
      },
      {
        "en": "ابْنَا حَامِدٍ",
        "ur": "ابْنَا حَامِدٍ"
      },
      {
        "en": "ابْنَانِ حَامِدٍ",
        "ur": "ابْنَانِ حَامِدٍ"
      },
      {
        "en": "أَبْنَاءُ حَامِدٍ",
        "ur": "أَبْنَاءُ حَامِدٍ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete: 'أَخَذْتُ الكِتَابَ مِنْ ... عَلِيٍّ' (I took the book from Ali's two brothers):",
    "ur": "جملہ مکمل کریں: 'أَخَذْتُ الكِتَابَ مِنْ ... عَلِيٍّ' (میں نے علی کے دو بھائیوں سے کتاب لی):",
    "options": [
      {
        "en": "أَخَوَيْ عَلِيٍّ (Akhaway 'Aliyyin, Majroor with Yā')",
        "ur": "أَخَوَيْ عَلِيٍّ (یاء کے ساتھ مجرور)"
      },
      {
        "en": "أَخَوَا عَلِيٍّ",
        "ur": "أَخَوَا عَلِيٍّ"
      },
      {
        "en": "أَخَوَانِ عَلِيٍّ",
        "ur": "أَخَوَانِ عَلِيٍّ"
      },
      {
        "en": "إِخْوَةِ عَلِيٍّ",
        "ur": "إِخْوَةِ عَلِيٍّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, convert 'مُهَنْدِسُونَ' into Mudaf to 'الـمَشْرُوعِ' in 'حَضَرَ ...' (The engineers of the project attended):",
    "ur": "تمرين 2 کے مطابق جملے 'حَضَرَ ...' میں 'مُهَنْدِسُونَ' کو 'المَشْرُوعِ' کی طرف مضاف کر کے درست شکل منتخب کریں:",
    "options": [
      {
        "en": "مُهَنْدِسُو المَشْرُوعِ (Muhandisū al-mashroo'i)",
        "ur": "مُهَنْدِسُو المَشْرُوعِ"
      },
      {
        "en": "مُهَنْدِسُونَ المَشْرُوعِ",
        "ur": "مُهَنْدِسُونَ المَشْرُوعِ"
      },
      {
        "en": "مُهَنْدِسِي المَشْرُوعِ",
        "ur": "مُهَنْدِسِي المَشْرُوعِ"
      },
      {
        "en": "مُهَنْدِسِينَ المَشْرُوعِ",
        "ur": "مُهَنْدِسِينَ المَشْرُوعِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Complete: 'سَلَّمْتُ عَلَى ... الـمَدْرَسَةِ' (I greeted the teachers of the school):",
    "ur": "جملہ مکمل کریں: 'سَلَّمْتُ عَلَى ... المَدْرَسَةِ' (میں نے مدرسے کے اساتذہ کو سلام کیا):",
    "options": [
      {
        "en": "مُدَرِّسِي المَدْرَسَةِ (Mudarrisī al-madrasati, Majroor with Yā')",
        "ur": "مُدَرِّسِي المَدْرَسَةِ (یاء کے ساتھ مجرور)"
      },
      {
        "en": "مُدَرِّسُو المَدْرَسَةِ",
        "ur": "مُدَرِّسُو المَدْرَسَةِ"
      },
      {
        "en": "مُدَرِّسُونَ المَدْرَسَةِ",
        "ur": "مُدَرِّسُونَ المَدْرَسَةِ"
      },
      {
        "en": "مُدَرِّسِينَ المَدْرَسَةِ",
        "ur": "مُدَرِّسِينَ المَدْرَسَةِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Complete: 'شَكَرَ المُدِيرُ ... الشَّرِكَةِ' (The director thanked the employees of the company):",
    "ur": "جملہ مکمل کریں: 'شَكَرَ المُدِيرُ ... الشَّرِكَةِ' (ڈائریکٹر نے کمپنی کے ملازمین کا شکریہ ادا کیا):",
    "options": [
      {
        "en": "مُوَظَّفِي الشَّرِكَةِ (Muwazzafī ash-sharikati, Mansoob with Yā')",
        "ur": "مُوَظَّفِي الشَّرِكَةِ (یاء کے ساتھ منصوب)"
      },
      {
        "en": "مُوَظَّفُو الشَّرِكَةِ",
        "ur": "مُوَظَّفُو الشَّرِكَةِ"
      },
      {
        "en": "مُوَظَّفُونَ الشَّرِكَةِ",
        "ur": "مُوَظَّفُونَ الشَّرِكَةِ"
      },
      {
        "en": "مُوَظَّفِينَ الشَّرِكَةِ",
        "ur": "مُوَظَّفِينَ الشَّرِكَةِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In the Quranic phrase 'يَابَنِي إِسْرَائِيلَ', why was the Noon dropped from 'بَنِينَ'?",
    "ur": "قرآنی مرکب 'يَابَنِي إِسْرَائِيلَ' میں لفظ 'بَنِينَ' سے نون کیوں حذف ہوا ہے؟",
    "options": [
      {
        "en": "Because it is Mudaf to 'إِسْرَائِيلَ' (حُذِفَتِ النُّونُ لِلإِضَافَةِ)",
        "ur": "اسمِ 'إِسْرَائِيلَ' کی طرف مضاف ہونے کی وجہ سے (نونِ اضافت حذف)"
      },
      {
        "en": "Because it is preceding a verb",
        "ur": "کیونکہ یہ فعل سے پہلے ہے"
      },
      {
        "en": "Because it is Mabni on Fatha",
        "ur": "فتحہ پر مبنی ہونے کی وجہ سے"
      },
      {
        "en": "Because it is singular",
        "ur": "واحد ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, how do you say 'These are my two books' (Marfoo') in Arabic?",
    "ur": "تمرين 3 کے مطابق 'یہ میری دو کتابیں ہیں' (حالتِ رفع) کا درست عربی جملہ کیا ہے؟",
    "options": [
      {
        "en": "هَذَانِ كِتَابَايَ (Hadhāni kitābāya)",
        "ur": "هَذَانِ كِتَابَايَ"
      },
      {
        "en": "هَذَانِ كِتَابِيَّ",
        "ur": "هَذَانِ كِتَابِيَّ"
      },
      {
        "en": "هَذَانِ كِتَابَانِي",
        "ur": "هَذَانِ كِتَابَانِي"
      },
      {
        "en": "هَذَانِ كِتَابَيَّ",
        "ur": "هَذَانِ كِتَابَيَّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "How do you say 'I read my two books' (Mansoob) in Arabic?",
    "ur": "'میں نے اپنی دو کتابیں پڑھیں' (حالتِ نصب) کا درست عربی جملہ کیا ہوگا؟",
    "options": [
      {
        "en": "قَرَأْتُ كِتَابَيَّ (Qara'tu kitābayya)",
        "ur": "قَرَأْتُ كِتَابَيَّ"
      },
      {
        "en": "قَرَأْتُ كِتَابَايَ",
        "ur": "قَرَأْتُ كِتَابَايَ"
      },
      {
        "en": "قَرَأْتُ كِتَابِيَّ",
        "ur": "قَرَأْتُ كِتَابِيَّ"
      },
      {
        "en": "قَرَأْتُ كِتَابَيْنِي",
        "ur": "قَرَأْتُ كِتَابَيْنِي"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "How do you say 'These are my teachers' (Jama' Mudhakar Salim attached to Yā' in Marfoo')?",
    "ur": "'یہ میرے اساتذہ ہیں' (حالتِ رفع میں جمع مذكر سالم + یاءِ متکلم) کا درست عربی جملہ کیا ہے؟",
    "options": [
      {
        "en": "هَؤُلاَءِ مُدَرِّسِيَّ (Ha'ulā'i mudarrisiyya)",
        "ur": "هَؤُلاَءِ مُدَرِّسِيَّ"
      },
      {
        "en": "هَؤُلاَءِ مُدَرِّسُويَ",
        "ur": "هَؤُلاَءِ مُدَرِّسُويَ"
      },
      {
        "en": "هَؤُلاَءِ مُدَرِّسُونِي",
        "ur": "هَؤُلاَءِ مُدَرِّسُونِي"
      },
      {
        "en": "هَؤُلاَءِ مُدَرِّسَايَ",
        "ur": "هَؤُلاَءِ مُدَرِّسَايَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Complete: 'سَلَّمْتُ عَلَى ...' (I greeted my two brothers):",
    "ur": "جملہ مکمل کریں: 'سَلَّمْتُ عَلَى ...' (میں نے اپنے دونوں بھائیوں کو سلام کیا):",
    "options": [
      {
        "en": "أَخَوَيَّ (Akhawayya, Majroor with Yā')",
        "ur": "أَخَوَيَّ (یاء کے ساتھ مجرور)"
      },
      {
        "en": "أَخَوَايَ",
        "ur": "أَخَوَايَ"
      },
      {
        "en": "أَخَوَانِي",
        "ur": "أَخَوَانِي"
      },
      {
        "en": "إِخْوَتِي",
        "ur": "إِخْوَتِي"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, complete: 'حَضَرَ الطَّالِبَانِ ...' (Both male students attended):",
    "ur": "تمرين 4 کے مطابق جملہ مکمل کریں: 'حَضَرَ الطَّالِبَانِ ...' (دونوں طالب علم حاضر ہوئے):",
    "options": [
      {
        "en": "كِلاَهُمَا (Kilāhumā - Marfoo' with Alif)",
        "ur": "كِلاَهُمَا (الف کے ساتھ مرفوع)"
      },
      {
        "en": "كِلَيْهِمَا",
        "ur": "كِلَيْهِمَا"
      },
      {
        "en": "كِلْتَاهُمَا",
        "ur": "كِلْتَاهُمَا"
      },
      {
        "en": "كِلْتَيْهِمَا",
        "ur": "كِلْتَيْهِمَا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Complete: 'رَأَيْتُ الطَّالِبَتَيْنِ ...' (I saw both female students):",
    "ur": "جملہ مکمل کریں: 'رَأَيْتُ الطَّالِبَتَيْنِ ...' (میں نے دونوں طالبات کو دیکھا):",
    "options": [
      {
        "en": "كِلْتَيْهِمَا (Kiltayhimā - Mansoob with Yā')",
        "ur": "كِلْتَيْهِمَا (یاء کے ساتھ منصوب)"
      },
      {
        "en": "كِلْتَاهُمَا",
        "ur": "كِلْتَاهُمَا"
      },
      {
        "en": "كِلَيْهِمَا",
        "ur": "كِلَيْهِمَا"
      },
      {
        "en": "كِلاَهُمَا",
        "ur": "كِلاَهُمَا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'سَلَّمْتُ عَلَى كِلاَ الطَّالِبَيْنِ', how is 'كِلاَ' parsed?",
    "ur": "جملے 'سَلَّمْتُ عَلَى كِلاَ الطَّالِبَيْنِ' میں 'كِلاَ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Majroor with estimated Kasra on Alif (مجرور بكسرة مقدرة على الألف)",
        "ur": "الف پر کسرہ مقدرہ کے ساتھ مجرور"
      },
      {
        "en": "Majroor with Yā'",
        "ur": "یاء کے ساتھ مجرور"
      },
      {
        "en": "Mabni on Fatha",
        "ur": "فتحہ پر مبنی"
      },
      {
        "en": "Mansoob with Fatha",
        "ur": "فتحہ کے ساتھ منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'كِلْتَا الجَنَّتَيْنِ آتَتْ أُكُلَهَا' (Qur'an 18:33), how is 'كِلْتَا' parsed?",
    "ur": "قرآنی آیہ 'كِلْتَا الجَنَّتَيْنِ آتَتْ أُكُلَهَا' میں 'كِلْتَا' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Mubtada' Marfoo' with estimated Damma on Alif (مبتدأ مرفوع بضمة مقدرة على الألف)",
        "ur": "الف پر ضمہ مقدرہ کے ساتھ مبتدأ مرفوع"
      },
      {
        "en": "Marfoo' with Alif like Dual",
        "ur": "تثنیہ کی طرح الف کے ساتھ"
      },
      {
        "en": "Mansoob with Fatha",
        "ur": "فتحہ کے ساتھ منصوب"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "How do you express 'your thirteen books' in Arabic with correct I'rab?",
    "ur": "'تمہاری تیرہ کتابیں' کو درست اعراب کے ساتھ عربی میں کیسے لکھا جائے گا؟",
    "options": [
      {
        "en": "ثَلاَثَةَ عَشَرَ كِتَابِكَ / ثَلاَثَةَ عَشَرَكَ",
        "ur": "ثَلاَثَةَ عَشَرَكِتَابِكَ / ثَلاَثَةَ عَشَرَكَ"
      },
      {
        "en": "ثَلاَثَةُ عَشُرِكَ",
        "ur": "ثَلاَثَةُ عَشُرِكَ"
      },
      {
        "en": "ثَلاَثِ عَشْرِكَ",
        "ur": "ثَلاَثِ عَشْرِكَ"
      },
      {
        "en": "ثَلاَثَةٍ عَشَرِكَ",
        "ur": "ثَلاَثَةٍ عَشَرِكَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'هَذِهِ أَرْبَعَةَ عَشَرَنَا' (These are our fourteen...), why is 'أَرْبَعَةَ عَشَرَ' fixed on Fatha?",
    "ur": "جملے 'هَذِهِ أَرْبَعَةَ عَشَرَنَا' میں مضاف ہونے کے باوجود 'أَرْبَعَةَ عَشَرَ' پر فتحہ کیوں برقرار رہتا ہے؟",
    "options": [
      {
        "en": "Because compound numbers 11-19 are Mabni on Fatha of both parts in all positions",
        "ur": "کیونکہ 11 سے 19 تک کے مرکب اعداد ہر اعرابی حالت میں فتح الجزأین پر مبنی رہتے ہیں"
      },
      {
        "en": "Because it is Mansoob as Maf'ool Bihi",
        "ur": "مفعول بہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Mudaf Ilayh",
        "ur": "مضاف الیہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Na't",
        "ur": "نعت ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "In 'جَاءَ مَعْمُورُو المَسَاجِدِ', what is the sign of Raf' for 'مَعْمُورُو'?",
    "ur": "جملے 'جَاءَ مَعْمُورُو المَسَاجِدِ' میں 'مَعْمُورُو' کا اعرابی منصب اور علامت کیا ہے؟",
    "options": [
      {
        "en": "Fa'il Marfoo' with Waw (فاعل مرفوع بالواو وحُذِفَتِ النُّونُ لِلإِضَافَةِ)",
        "ur": "واؤ کے ساتھ فاعل مرفوع (نونِ اضافت حذف)"
      },
      {
        "en": "Fa'il Marfoo' with Damma",
        "ur": "ضمہ کے ساتھ فاعل مرفوع"
      },
      {
        "en": "Mubtada' Marfoo' with Alif",
        "ur": "الف کے ساتھ مبتدأ مرفوع"
      },
      {
        "en": "Maf'ool Bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Which statement summarizes the rule for 'كِلاَ' when attached to pronouns vs explicit nouns?",
    "ur": "'كِلاَ' کا اسمِ ظاہر اور ضمیر کی طرف مضاف ہونے پر اعرابی قاعدے کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "With pronouns it declines like Dual (بالألف والياء); with explicit nouns it takes estimated vowels on Alif (بحركات مقدرة)",
        "ur": "ضمیر کے ساتھ تثنیہ کا اعراب (الف ویاء) لیتا ہے؛ اسمِ ظاہر کے ساتھ الف پر حرکاتِ مقدورہ لیتا ہے"
      },
      {
        "en": "It always declines like Dual in both cases",
        "ur": "دونوں صورتوں میں ہمیشہ تثنیہ کا اعراب لیتا ہے"
      },
      {
        "en": "It always takes estimated vowels on Alif in both cases",
        "ur": "دونوں صورتوں میں ہمیشہ مقدر حرکات لیتا ہے"
      },
      {
        "en": "It is Mabni on Fatha in both cases",
        "ur": "دونوں صورتوں میں فتحہ پر مبنی رہتا ہے"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 9 Quiz ---');

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

    // 4. Find or Create Lecture 09 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 9 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 09 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 09', 9)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 09: ID ${lectureId}`);
    }

    // 5. CAREFUL DELETION: Find existing Book 3 Lesson 9 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 9))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 9.`);
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

    // 6. Create the quiz for Book 3 Lesson 9
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 09 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 9 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

run();
