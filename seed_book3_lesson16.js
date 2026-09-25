import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is 'Al-Munada' (المُنَادَى) in Arabic grammar?",
    "ur": "عربی گرامر میں 'منادیٰ' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A noun called using a vocative particle (حرف نداء) to request the listener's attention",
        "ur": "وہ اسم جسے حرفِ نداء کے ذریعے مخاطب کر کے متوجہ کیا جائے"
      },
      {
        "en": "A noun showing the doer of the verb",
        "ur": "وہ اسم جو فاعل کو ظاہر کرے"
      },
      {
        "en": "A verbal noun confirming the action",
        "ur": "وہ مصدر جو فعل کے معنی کی تاکید کرے"
      },
      {
        "en": "A time or place indicator",
        "ur": "زمان یا مکان بتانے والا اسم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the primary divisions of Munada based on its grammatical state (حكمه الإعرابي)?",
    "ur": "اعرابی احکام کے لحاظ سے منادیٰ کی بنیادی دو اقسام کون سی ہیں؟",
    "options": [
      {
        "en": "1) المبني على ما يُرفع به في محل نصب، 2) المعرب المنصوب",
        "ur": "1) حالتِ رفع والی علامت پر مبنی (في محل نصب)، 2) معرب منصوب"
      },
      {
        "en": "1) المرفوع دائماً، 2) المجرور دائماً",
        "ur": "1) ہمیشہ مرفوع، 2) ہمیشہ مجرور"
      },
      {
        "en": "1) الماضي، 2) المضارع",
        "ur": "1) ماضی، 2) مضارع"
      },
      {
        "en": "1) الظاهر، 2) المستتر",
        "ur": "1) ظاہر، 2) مستتر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Which two categories of Munada are built on their sign of Raf' in position of Nasb (المبني على ما يُرفع به في محل نصب)?",
    "ur": "منادیٰ کی کون سی دو قسمیں حالتِ رفع والی علامت پر مبنی (في محل نصب) ہوتی ہیں؟",
    "options": [
      {
        "en": "المفرد العَلَم (Proper noun singular) and النَّكِرَة المَقْصُودَة (Specific indefinite noun)",
        "ur": "المفرد العلم (خاص اسم) اور النكرة المقصودة (خاص نکرہ)"
      },
      {
        "en": "المضاف اور الشبيه بالمضاف",
        "ur": "مضاف اور شبیہ بالمضاف"
      },
      {
        "en": "النكرة غير المقصودة اور المضاف",
        "ur": "نکرہ غیر مقصودہ اور مضاف"
      },
      {
        "en": "الاسم الموصول اور اسم الإشارة",
        "ur": "اسمِ موصول اور اسمِ اشارہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Which three categories of Munada are directly Mansoob (المعرب المنصوب)?",
    "ur": "منادیٰ کی کون سی تین قسمیں ڈائریکٹ معرب منصوب ہوتی ہیں؟",
    "options": [
      {
        "en": "1) المضاف، 2) الشبيه بالمضاف، 3) النكرة غير المقصودة",
        "ur": "1) مضاف، 2) شبیہ بالمضاف، 3) نکرہ غیر مقصودہ"
      },
      {
        "en": "1) المفرد العلم، 2) النكرة المقصودة، 3) المعرف بـ أل",
        "ur": "1) مفرد علم، 2) نکرہ مقصودہ، 3) معرف باللام"
      },
      {
        "en": "1) اسم الإشارة، 2) الضمير، 3) الموصول",
        "ur": "1) اسم اشارہ، 2) ضمیر، 3) اسم موصول"
      },
      {
        "en": "1) اسم الفاعل، 2) اسم المفعول، 3) المصدر",
        "ur": "1) اسم فاعل، 2) اسم مفعول، 3) مصدر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'يَا عَبْدَ اللَّهِ', why is 'عَبْدَ' Mansoob with Fatha?",
    "ur": "ترکیب 'يَا عَبْدَ اللَّهِ' میں لفظ 'عَبْدَ' کے منصوب ہونے کی کیا وجہ ہے؟",
    "options": [
      {
        "en": "Because it is Munada Mudaf (منادى مضاف منصوب بالفتحة)",
        "ur": "منادیٰ مضاف ہونے کی وجہ سے منصوب بالفتحة"
      },
      {
        "en": "Because it is Munada Mabni on Damma",
        "ur": "ضمہ پر مبنی ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Maf'ool Bihi for an imperative verb",
        "ur": "فعلِ امر کا مفعول بہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Badl",
        "ur": "بدل ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Al-Munada ash-Shabih bil-Mudaf' (الشبيه بالمضاف)?",
    "ur": "'منادیٰ شبیہ بالمضاف' سے گرامر میں کیا مراد ہے؟",
    "options": [
      {
        "en": "A derived noun (like Ism Fa'il/Maf'ool) attached to a following noun that completes its meaning (e.g., يَا طَالِعاً جَبَلاً)",
        "ur": "وہ مشتق اسم جو اپنے بعد والے اسم کے ساتھ مل کر معنی مکمل کرے (جیسے: يَا طَالِعاً جَبَلاً)"
      },
      {
        "en": "A noun made Mudaf directly to a proper noun",
        "ur": "وہ اسم جو ڈائریکٹ مضاف بنے"
      },
      {
        "en": "A noun ending with Alif Maqsoorah",
        "ur": "الفِ مقصورہ پر ختم ہونے والا اسم"
      },
      {
        "en": "A dual subject noun",
        "ur": "تثنیہ فاعل اسم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is a noun defined with 'Al' (المعرف بـ أل, e.g., 'النَّاسُ') called in Arabic?",
    "ur": "عربی زبان میں 'ال' والے معرفہ اسم (مثلاً 'النَّاسُ') کو پکارنے کا کیا طریقہ ہے؟",
    "options": [
      {
        "en": "By introducing 'أيُّهَا' for masculine or 'أيَّتُهَا' for feminine before the noun (e.g., يَا أَيُّهَا النَّاسُ)",
        "ur": "اس سے پہلے مذکر کے لیے 'أيُّهَا' اور مؤنث کے لیے 'أيَّتُهَا' لایا جاتا ہے (جیسے: يَا أَيُّهَا النَّاسُ)"
      },
      {
        "en": "By directly attaching 'یا' without any mediator",
        "ur": "بلا کسی واسطے کے ڈائریکٹ 'یا' لگا کر"
      },
      {
        "en": "By dropping 'Al' forcibly",
        "ur": "جبراً 'ال' کو حذف کر کے"
      },
      {
        "en": "It can never be called in vocative style",
        "ur": "اسے کبھی پکارا ہی نہیں جا سکتا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is 'أَيُّ' parsed in 'يَا أَيُّهَا النَّبِيُّ'?",
    "ur": "ترکیب 'يَا أَيُّهَا النَّبِيُّ' میں لفظ 'أَيُّ' کا کیا اعرابی موقع ہے؟",
    "options": [
      {
        "en": "Munada Mabni on Damma in position of Nasb (منادى مبني على الضم في محل نصب، و'ها' للتنبيه)",
        "ur": "منادیٰ ضمہ پر مبنی (في محل نصب) اور 'ہا' حرفِ تنبیہ ہے"
      },
      {
        "en": "Na't Mansoob",
        "ur": "نعت منصوب"
      },
      {
        "en": "Badal Marfoo'",
        "ur": "بدل مرفوع"
      },
      {
        "en": "Mudaf Ilayh",
        "ur": "مضاف الیہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is Allah's name called in vocative form 'اللَّهُمَّ'?",
    "ur": "اسمِ جلالہ کی ندائی شکل 'اللَّهُمَّ' کا کیا اعرابی اور صرفی تجزیہ ہے؟",
    "options": [
      {
        "en": "Munada Mabni on Damma; the doubled Mim (الميم المشددة) replaces the omitted vocative particle 'يَا'",
        "ur": "منادیٰ ضمہ پر مبنی؛ اور آخر کی میمِ مشددہ حذف شدہ حرفِ نداء 'یا' کا عوض ہے"
      },
      {
        "en": "A verb in imperative mood",
        "ur": "فعلِ امر"
      },
      {
        "en": "A noun with attached personal pronoun",
        "ur": "اسم مع ضمیر"
      },
      {
        "en": "A prepositional phrase",
        "ur": "حرفِ جر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'At-Tarkheem' (التَّرْخِيمُ) in the grammar of Munada?",
    "ur": "بابِ منادیٰ میں 'ترخیم' سے کیا مراد ہے؟",
    "options": [
      {
        "en": "Shortening the Munada by deleting its final letter(s) for lightness/ease (e.g., يا عَائِشُ for يا عائشةُ)",
        "ur": "تخفیف و آسانی کے لیے منادیٰ کے آخری حرف کو حذف کر دینا (جیسے: يا عائشةُ کی جگہ يا عَائِشُ)"
      },
      {
        "en": "Adding Tanween to the end",
        "ur": "آخر میں تنوین بڑھانا"
      },
      {
        "en": "Making the noun plural",
        "ur": "اسم کو جمع بنانا"
      },
      {
        "en": "Repeating the noun twice",
        "ur": "اسم کو دو بار دہرانا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, parse 'عَلِيُّ' in 'يَا عَلِيُّ اِقْرَأْ':",
    "ur": "تمرين 1 کے مطابق 'يَا عَلِيُّ اِقْرَأْ' میں 'عَلِيُّ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Munada Mufrad 'Alam Mabni on Damma in position of Nasb (منادى مفرد علم مبني على الضم في محل نصب)",
        "ur": "منادیٰ مفرد علم ضمہ پر مبنی (في محل نصب)"
      },
      {
        "en": "Munada Mansoob with Fatha",
        "ur": "منادیٰ منصوب بالفتحة"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Mubtada' Marfoo'",
        "ur": "مبتدأ مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Parse dual Munada Nakirah Maqsoodah in 'يَا رَجُلاَنِ اقْتَرِبَا':",
    "ur": "جملے 'يَا رَجُلاَنِ اقْتَرِبَا' (نکرہ مقصودہ) میں 'رَجُلاَنِ' کا اعرابی حکم کیا ہے؟",
    "options": [
      {
        "en": "Munada Nakirah Maqsoodah Mabni on Alif in position of Nasb (مبني على الألف في محل نصب)",
        "ur": "منادیٰ نکرہ مقصودہ الف پر مبنی (في محل نصب)"
      },
      {
        "en": "Mansoob with Yā'",
        "ur": "یاء کے ساتھ منصوب"
      },
      {
        "en": "Majroor with Kasra",
        "ur": "کسرہ کے ساتھ مجرور"
      },
      {
        "en": "Mabni on Sukoon",
        "ur": "سکون پر مبنی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Parse plural Munada Nakirah Maqsoodah in 'يَا مُسْلِمُونَ اتَّقُوا اللَّهَ':",
    "ur": "جملے 'يَا مُسْلِمُونَ اتَّقُوا اللَّهَ' میں 'مُسْلِمُونَ' کا اعرابی حکم کیا ہے؟",
    "options": [
      {
        "en": "Munada Nakirah Maqsoodah Mabni on Waw in position of Nasb (مبني على الواو في محل نصب)",
        "ur": "منادیٰ نکرہ مقصودہ واؤ پر مبنی (في محل نصب)"
      },
      {
        "en": "Mansoob with Yā'",
        "ur": "یاء کے ساتھ منصوب"
      },
      {
        "en": "Marfoo' with Damma",
        "ur": "ضمہ کے ساتھ مرفوع"
      },
      {
        "en": "Majzoom",
        "ur": "مجزوم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the difference in meaning and parsing between 'يَا وَلَدُ' and 'يَا وَلَداً'?",
    "ur": "'يَا وَلَدُ' اور 'يَا وَلَداً' کے باہمی اعرابی اور معنوی فرق کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "'يا ولدُ' is Nakirah Maqsoodah (Mabni on Damma, specific boy); 'يا ولداً' is Nakirah Ghair Maqsoodah (Mansoob, any boy)",
        "ur": "'يا ولدُ' نکرہ مقصودہ (مبنی بر ضمہ، متعین لڑکا) ہے؛ جبکہ 'يا ولداً' نکرہ غیر مقصودہ (منصوب، کوئی بھی غیر متعین لڑکا) ہے"
      },
      {
        "en": "Both are identical in parsing",
        "ur": "اعراب میں دونوں بالکل ایک جیسے ہیں"
      },
      {
        "en": "'يا ولدُ' is Mudaf and 'يا ولداً' is Mabni",
        "ur": "'يا ولدُ' مضاف اور 'يا ولداً' مبنی ہے"
      },
      {
        "en": "None of the above",
        "ur": "ان میں سے کوئی نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, complete with Mudaf Munada: 'يَا ... الرَّسُولِ جَزَاكَ اللَّهُ خَيْراً' (O companion of the Messenger):",
    "ur": "تمرين 2 کے مطابق منادیٰ مضاف سے جملہ مکمل کریں: 'يَا ... الرَّسُولِ جَزَاكَ اللَّهُ خَيْراً':",
    "options": [
      {
        "en": "صَاحِبَ (Sāhiba - Mansoob with Fatha)",
        "ur": "صَاحِبَ (فتحه کے ساتھ منصوب)"
      },
      {
        "en": "صَاحِبُ",
        "ur": "صَاحِبُ"
      },
      {
        "en": "صَاحِبٍ",
        "ur": "صَاحِبٍ"
      },
      {
        "en": "الصَّاحِبُ",
        "ur": "الصَّاحِبُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Parse 'أَبَانَا' in 'يَا أَبَانَا اغْفِرْ لَنَا':",
    "ur": "ترکیب 'يَا أَبَانَا اغْفِرْ لَنَا' میں 'أَبَانَا' کا اعرابی تجزیہ کیا ہے؟",
    "options": [
      {
        "en": "Munada Mudaf Mansoob with Alif because it is from Asma' al-Khamsah (منصوب بالألف وهو مضاف)",
        "ur": "منادیٰ مضاف، اسماءِ خمسہ میں سے ہونے کی بنا پر الف کے ساتھ منصوب"
      },
      {
        "en": "Mabni on Damma",
        "ur": "ضمہ پر مبنی"
      },
      {
        "en": "Mansoob with Fatha",
        "ur": "فتحہ کے ساتھ منصوب"
      },
      {
        "en": "Majroor with Yā'",
        "ur": "یاء کے ساتھ مجرور"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'يَا حَسَناً خُلُقُهُ', why is 'حَسَناً' Mansoob with Tanween?",
    "ur": "جملے 'يَا حَسَناً خُلُقُهُ' میں 'حَسَناً' پر تنوینِ نصب کیوں ہے؟",
    "options": [
      {
        "en": "Because it is Shabih bil-Mudaf (منادى شبيه بالمضاف منصوب بالفتحة)",
        "ur": "منادیٰ شبیہ بالمضاف ہونے کی وجہ سے فتحہ مع تنوین کے ساتھ منصوب"
      },
      {
        "en": "Because it is Nakirah Maqsoodah",
        "ur": "نکرہ مقصودہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Mudaf",
        "ur": "مضاف ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Mabni",
        "ur": "مبنی ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Parse 'جَبَلاً' in 'يَا طَالِعاً جَبَلاً':",
    "ur": "ترکیب 'يَا طَالِعاً جَبَلاً' میں لفظ 'جَبَلاً' کا اعرابی منصب کیا ہے؟",
    "options": [
      {
        "en": "Maf'ool Bihi Mansoob for the active participle 'طَالِعاً'",
        "ur": "اسمِ فاعل 'طَالِعاً' کا مفعول بہ منصوب"
      },
      {
        "en": "Mudaf Ilayh",
        "ur": "مضاف الیہ"
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
    "part": "Exercise 3",
    "en": "In Exercise 3, in the blind man's call 'يَا رَجُلاً خُذْ بِيَدِي', why is 'رَجُلاً' Mansoob?",
    "ur": "تمرين 3 کے مطابق نابینا شخص کی پکار 'يَا رَجُلاً خُذْ بِيَدِي' میں 'رَجُلاً' کے منصوب ہونے کی کیا وجہ ہے؟",
    "options": [
      {
        "en": "Because it is Nakirah Ghair Maqsoodah (منادى نكرة غير مقصودة منصوب)",
        "ur": "منادیٰ نکرہ غیر مقصودہ ہونے کی وجہ سے منصوب"
      },
      {
        "en": "Because it is Mudaf",
        "ur": "مضاف ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Mabni on Fatha",
        "ur": "فتحہ پر مبنی ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Shabih bil-Mudaf",
        "ur": "شبیہ بالمضاف ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Complete with 'أيَّتُهَا': 'يَا ... النَّفْسُ الـمُطْمَئِنَّةُ' (Qur'an 89:27):",
    "ur": "قرآنی آیہ مکمل کریں: 'يَا ... النَّفْسُ الـمُطْمَئِنَّةُ':",
    "options": [
      {
        "en": "أَيَّتُهَا (Ayyatuhā - for feminine noun 'النَّفْسُ')",
        "ur": "أَيَّتُهَا (اسمِ مؤنث 'النَّفْسُ' کی وجہ سے)"
      },
      {
        "en": "أَيُّهَا",
        "ur": "أَيُّهَا"
      },
      {
        "en": "هَذَا",
        "ur": "هَذَا"
      },
      {
        "en": "ذَلِكَ",
        "ur": "ذَلِكَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'يَا أَيُّهَا الـمُعَلِّمُ', how is the derivative word 'الـمُعَلِّمُ' parsed after 'أَيُّهَا'?",
    "ur": "ترکیب 'يَا أَيُّهَا الـمُعَلِّمُ' میں لفظ 'أَيُّهَا' کے بعد آنے والا مشتق اسم 'الـمُعَلِّمُ' کیا بنتا ہے؟",
    "options": [
      {
        "en": "Na't Marfoo' for 'أَيُّ' (نعت مرفوع بالضمة)",
        "ur": "لفظ 'أَيُّ' کے لیے نعت مرفوع"
      },
      {
        "en": "Badal Marfoo'",
        "ur": "بدل مرفوع"
      },
      {
        "en": "Mudaf Ilayh Majroor",
        "ur": "مضاف الیہ مجرور"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'يَا أَيُّهَا الرَّجُلُ', how is the rigid non-derived word 'الرَّجُلُ' parsed after 'أَيُّهَا'?",
    "ur": "ترکیب 'يَا أَيُّهَا الرَّجُلُ' میں 'أَيُّهَا' کے بعد آنے والا جامد اسم 'الرَّجُلُ' کیا بنتا ہے؟",
    "options": [
      {
        "en": "Badal Marfoo' for 'أَيُّ' (بدل مرفوع بالضمة)",
        "ur": "لفظ 'أَيُّ' کا بدلِ مرفوع"
      },
      {
        "en": "Mudaf Ilayh",
        "ur": "مضاف الیہ"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      },
      {
        "en": "Tamyeez",
        "ur": "تمیز"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, why is it INCORRECT to say 'يا اللَّهُمَّ' in standard Arabic?",
    "ur": "تمرين 4 کے مطابق فصیح عربی میں 'يا اللَّهُمَّ' کہنا کیوں غلط ہے؟",
    "options": [
      {
        "en": "Because combining the vocative particle 'يَا' and the substitute Mim 'مّ' creates an invalid double vocative",
        "ur": "کیونکہ حرفِ نداء 'یا' اور اس کے عوض آنے والی میمِ مشددہ 'مّ' کا ایک ساتھ جمع ہونا نا جائز ہے"
      },
      {
        "en": "Because Allah's name cannot be called",
        "ur": "کیونکہ اسمِ جلالہ کی نداء نہیں ہو سکتی"
      },
      {
        "en": "Because 'اللهم' is a verb",
        "ur": "کیونکہ 'اللهم' فعل ہے"
      },
      {
        "en": "Because of a grammatical pause rule",
        "ur": "وقف کے قاعدے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "How is the vocative form 'يَا عَائِشُ' derived via Tarkheem?",
    "ur": "ترخیم کے قواعد کے مطابق 'يَا عَائِشُ' کس کی آسان و مختصر شکل ہے؟",
    "options": [
      {
        "en": "Shortened form of 'يَا عَائِشَةُ' by deleting final Tā' Marbootah (تَرْخِيم)",
        "ur": "اسم 'يا عائشةُ' کے آخر سے تاءِ مربوطہ کو حذف کر کے ترخیم کی گئی ہے"
      },
      {
        "en": "Derived from 'عاش يعيش'",
        "ur": "فعل 'عاش يعيش' سے مشتق"
      },
      {
        "en": "Formed by adding Alif",
        "ur": "الف بڑھا کر"
      },
      {
        "en": "Dual form of A'ishah",
        "ur": "عائشہ کی تثنیہ شکل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the Tarkheem form of 'يَا حَارِثُ'?",
    "ur": "اسم 'يَا حَارِثُ' کی ترخیم والی درست شکل کیا ہوگی؟",
    "options": [
      {
        "en": "يا حَارِ (Ya Hāri - deleting final Thā')",
        "ur": "يا حَارِ (آخری حرف 'ث' حذف کر کے)"
      },
      {
        "en": "يا حارثون",
        "ur": "يا حارثون"
      },
      {
        "en": "يا أبا حارث",
        "ur": "يا أبا حارث"
      },
      {
        "en": "يا حارثاً",
        "ur": "يا حارثاً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'يَاجِبَالُ أَوِّبِي مَعَهُ' (Qur'an 34:10), how is 'جِبَالُ' parsed?",
    "ur": "قرآنی آیہ 'يَاجِبَالُ أَوِّبِي مَعَهُ' میں لفظ 'جِبَالُ' کا کیا اعرابی منصب ہے؟",
    "options": [
      {
        "en": "Munada Nakirah Maqsoodah Mabni on Damma in position of Nasb (منادى نكرة مقصودة مبني على الضم في محل نصب)",
        "ur": "منادیٰ نکرہ مقصودہ، ضمہ پر مبنی (في محل نصب)"
      },
      {
        "en": "Munada Mansoob",
        "ur": "منادیٰ منصوب"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Mubtada'",
        "ur": "مبتدأ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ' (Qur'an 37:102), what does the Tā' Kasra (تِ) in 'أَبَتِ' represent?",
    "ur": "آیت مبارکہ 'يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ' میں 'أَبَتِ' کی تاءِ مکسورہ (تِ) کس چیز کا عوض ہے؟",
    "options": [
      {
        "en": "Replaces the deleted Yā' al-Mutakallim in Mudaf Munada (عوض عن ياء المتكلم المحذوفة)",
        "ur": "منادیٰ مضاف کی حذف شدہ یاءِ متکلم کا عوض ہے"
      },
      {
        "en": "Sign of feminine gender",
        "ur": "تانیث کی علامت"
      },
      {
        "en": "Preposition",
        "ur": "حرفِ جر"
      },
      {
        "en": "Part of the root verb",
        "ur": "فعل کا اصلی حرف"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'يُوسُفُ أَعْرِضْ عَنْ هَذَا' (Qur'an 12:29), why does 'يُوسُفُ' have a Damma without a visible vocative particle?",
    "ur": "آیت مبارکہ 'يُوسُفُ أَعْرِضْ عَنْ هَذَا' میں حرفِ نداء ظاہر نہ ہونے کے باوجود 'يُوسُفُ' پر ضمہ کیوں ہے؟",
    "options": [
      {
        "en": "It is Munada Mufrad 'Alam Mabni on Damma with omitted vocative particle 'يَا' (تقديره: يَا يُوسُفُ)",
        "ur": "یہ حرفِ نداء 'یا' محذوف ہونے کے ساتھ منادیٰ مفرد علم مبنی بر ضمہ (في محل نصب) ہے"
      },
      {
        "en": "It is Mubtada' Marfoo'",
        "ur": "مبتدأ مرفوع ہے"
      },
      {
        "en": "It is Fa'il",
        "ur": "فاعل ہے"
      },
      {
        "en": "It is Khabar",
        "ur": "خبر ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'يَا عَبْدَ اللَّهِ اجْتَهِدْ':",
    "ur": "پورے جملے 'يَا عَبْدَ اللَّهِ اجْتَهِدْ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "يَا: حرف نداء، عَبْدَ: منادى مضاف منصوب بالفتحة، اللَّهِ: مضاف إليه مجرور، اجْتَهِدْ: فعل أمر والفاعل مستتر تقديره أنت",
        "ur": "يَا: حرفِ نداء، عَبْدَ: منادیٰ مضاف منصوب بالفتحة، اللَّهِ: مضاف الیہ مجرور، اجْتَهِدْ: فعلِ امر مع فاعل مستتر (أنت)"
      },
      {
        "en": "يا: حرف جر، عبد: اسم مجرور، الله: فاعل، اجتهد: خبر",
        "ur": "یا حرف جر، عبد اسم مجرور، الله فاعل، اجتهد خبر"
      },
      {
        "en": "يا: مبتدأ، عبد: خبر، الله: مفعول به، اجتهد: صفة",
        "ur": "یا مبتدأ، عبد خبر، الله مفعول بہ، اجتهد صفت"
      },
      {
        "en": "None of the above",
        "ur": "ان میں سے کوئی نہیں"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 16 Quiz ---');
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

    // 3. Find or Create Lecture 16 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 16 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 16 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 16', 16)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 16: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 16 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 16))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 16.`);
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

    // 5. Create the quiz for Book 3 Lesson 16
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 16 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 16 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
