import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What are the three primary components of an Exception sentence (أسلوب الاستثناء) in Arabic?",
    "ur": "عربی گرامر میں اسلوبِ استثناء کے تین بنیادی ارکان کون سے ہیں؟",
    "options": [
      {
        "en": "1. Al-Mustathnā Minhu (المستثنى منه), 2. Adāt al-Istithnā' (أداة الاستثناء), 3. Al-Mustathnā (المستثنى)",
        "ur": "1. المستثنى منه (جس سے استثناء کیا جائے)، 2. أداة الاستثناء (حرف/اسمِ استثناء)، 3. المستثنى (جسے مستثنیٰ کیا جائے)"
      },
      {
        "en": "1. Mubtada', 2. Khabar, 3. Fa'il",
        "ur": "1. مبتدأ، 2. خبر، 3. فاعل"
      },
      {
        "en": "1. Past, 2. Present, 3. Imperative",
        "ur": "1. ماضی، 2. مضارع، 3. امر"
      },
      {
        "en": "1. Harf Jarr, 2. Ism Majroor, 3. Sifah",
        "ur": "1. حرفِ جر، 2. اسمِ مجرور، 3. صفت"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Al-Istithnā' At-Tāmm Al-Mūjab' (الاستثناء التام الموجب/المثبت) in Arabic grammar?",
    "ur": "'استثناءِ تام موجب (مثبت)' کی کیا تعریف اور پہچان ہے؟",
    "options": [
      {
        "en": "A sentence where the Mustathnā Minhu IS mentioned and the sentence is NOT preceded by negation (غير منفي)",
        "ur": "وہ جملہ جس میں مستثنیٰ منہ مذکور ہو اور جملے سے پہلے نفی یا نہی نہ ہو (مثبت ہو)"
      },
      {
        "en": "A sentence where Mustathnā Minhu is omitted",
        "ur": "وہ جملہ جس میں مستثنیٰ منہ حذف ہو"
      },
      {
        "en": "A sentence preceded by negation without Mustathnā Minhu",
        "ur": "مستثنیٰ منہ کے بغیر نفی والا جملہ"
      },
      {
        "en": "A sentence containing a passive verb only",
        "ur": "صرف مجہول فعل والا جملہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the mandatory grammatical case rule for the noun after 'إِلاَّ' in At-Tāmm Al-Mūjab (e.g., 'حَضَرَ الطُّلاَّبُ إِلاَّ زَيْداً')?",
    "ur": "استثناءِ تام موجب میں 'إِلاَّ' کے بعد آنے والے اسم کا اعرابی حکم کیا ہوتا ہے؟",
    "options": [
      {
        "en": "MANDATORY Nasb on Exception (وُجُوبُ النَّصْبِ عَلَى الاِسْتِثْنَاءِ)",
        "ur": "استثناء کی بنا پر **وجوبِ نصب** (منصوب ہونا واجب ہے)"
      },
      {
        "en": "Mandatory Raf' as Fa'il",
        "ur": "فاعل بن کر مرفوع ہونا واجب"
      },
      {
        "en": "Mandatory Kasra as Majroor",
        "ur": "مجرور ہونا واجب"
      },
      {
        "en": "It is optional to be Sukoon",
        "ur": "سکون ہونا اختیاری"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Al-Istithnā' At-Tāmm Al-Manfiyy' (الاستثناء التام المنفي)?",
    "ur": "'استثناءِ تام منفی' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A sentence where the Mustathnā Minhu IS mentioned BUT the sentence is preceded by Negation, Prohibition, or Interrogation",
        "ur": "وہ جملہ جس میں مستثنیٰ منہ مذکور ہو لیکن جملے سے پہلے نفی، نہی یا استفہام موجود ہو"
      },
      {
        "en": "A sentence where Mustathnā Minhu is deleted",
        "ur": "جس میں مستثنیٰ منہ حذف ہو"
      },
      {
        "en": "A sentence with no exception tools",
        "ur": "بغیر کسی اداتِ استثناء کے جملہ"
      },
      {
        "en": "A nominal sentence without Khabar",
        "ur": "بغیر خبر کا اسمیہ جملہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the two permissible grammatical options for the noun after 'إِلاَّ' in At-Tāmm Al-Manfiyy (e.g., 'مَا حَضَرَ الطُّلاَّبُ إِلاَّ زَيْدٌ / زَيْداً')?",
    "ur": "استثناءِ تام منفی میں 'إِلاَّ' کے بعد والے اسم میں کون سی دو اعرابی صورتیں جائز ہوتی ہیں؟",
    "options": [
      {
        "en": "1. Nasb on Exception (نَصْبٌ عَلَى الاِسْتِثْنَاءِ), OR 2. Badal following the case of Mustathnā Minhu (إِتْبَاعٌ عَلَى البَدَلِيَّةِ)",
        "ur": "1. استثناء کی بنا پر منصوب ہونا، یا 2. مستثنیٰ منہ کا اتباع کرتے ہوئے **بدل** بننا"
      },
      {
        "en": "Only Majroor or Marfoo'",
        "ur": "صرف مجرور یا مرفوع"
      },
      {
        "en": "Only Jazm or Sukoon",
        "ur": "صرف جزم یا سکون"
      },
      {
        "en": "Must always be deleted",
        "ur": "ہمیشہ حذف ہونا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Al-Istithnā' Al-Mufarrag' (الاستثناء المفرّغ / الناقص)?",
    "ur": "'استثناءِ مفرغ (ناقص)' سے کیا مراد ہے؟",
    "options": [
      {
        "en": "A sentence where Mustathnā Minhu is OMITTED and preceded by negation, so 'إِلاَّ' acts purely as a tool of restriction (أداة حصر)",
        "ur": "وہ جملہ جس میں مستثنیٰ منہ حذف ہو اور جملہ منفی ہو، جہاں 'إِلاَّ' صرف حصر (روکنے) کا کام کرتی ہے"
      },
      {
        "en": "A positive sentence with full components",
        "ur": "تمام اجزاء مع مثبت جملہ"
      },
      {
        "en": "A sentence with no negation",
        "ur": "بغیر نفی کا جملہ"
      },
      {
        "en": "A sentence with three verbs",
        "ur": "تین افعال والا جملہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is the noun after 'إِلاَّ' parsed in Al-Istithnā' Al-Mufarrag (e.g., 'مَا مُحَمَّدٌ إِلاَّ رَسُولٌ')?",
    "ur": "استثناءِ مفرغ میں 'إِلاَّ' کے بعد والے اسم کا اعراب کیسے متعین کیا جاتا ہے؟",
    "options": [
      {
        "en": "It is parsed according to its exact syntactic position in the sentence (حَسَبَ مَوْقِعِهِ فِي الجُمْلَةِ) as if 'مَا' and 'إِلاَّ' were absent",
        "ur": "جملے میں اپنے **اصل اعرابی موقع** (حسب موقعه في الجملة) کے مطابق، جیسے 'ما' اور 'إلا' موجود ہی نہ ہوں"
      },
      {
        "en": "Always mandatory Nasb",
        "ur": "ہمیشہ وجوبِ نصب"
      },
      {
        "en": "Always mandatory Majroor",
        "ur": "ہمیشہ مجرور"
      },
      {
        "en": "Always Fa'il Marfoo'",
        "ur": "ہمیشہ فاعل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How do exception nouns 'غَيْرُ' and 'سِوَى' function grammatically?",
    "ur": "استثناء کے اسماء 'غَيْرُ' اور 'سِوَى' کا گرامر میں کیا طریقۂ استعمال اور اعراب ہوتا ہے؟",
    "options": [
      {
        "en": "They TAKE the exact case ending that the noun after 'إِلاَّ' would hold, while the noun following them is ALWAYS Mudaf Ilaihi Majroor",
        "ur": "یہ خود اس اعراب کو قبول کرتے ہیں جو 'إلاّ' کے بعد والے اسم کو ملتا، اور ان کے بعد والا اسم ہمیشہ **مضاف الیہ مجرور** ہوتا ہے"
      },
      {
        "en": "They are always prepositions making the noun Mansoob",
        "ur": "یہ ہمیشہ حرفِ جر بن کر اسم کو منصوب کرتے ہیں"
      },
      {
        "en": "They are verbs in past tense only",
        "ur": "یہ صرف ماضی افعال ہیں"
      },
      {
        "en": "They are indeclinable particles on Sukoon",
        "ur": "یہ سکون پر مبنی حروف ہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How do 'خَلاَ', 'عَدَا', and 'حَاشَا' function grammatically when NOT preceded by 'مَا'?",
    "ur": "جب 'خَلاَ'، 'عَدَا' اور 'حَاشَا' سے پہلے 'مَا' نہ ہو تو ان کا کیا نحوی استعمال ہوتا ہے؟",
    "options": [
      {
        "en": "They can be treated as Past Verbs (taking a Mansoob Object) OR as Prepositions (taking a Majroor Noun)",
        "ur": "ان کو فعلِ ماضی مان کر بعد والے اسم کو منصوب (مفعول) بنانا، یا حرفِ جر مان کر مجرور بنانا دونوں جائز ہیں"
      },
      {
        "en": "They must always be prepositions only",
        "ur": "ان کا صرف حرفِ جر ہونا واجب ہے"
      },
      {
        "en": "They must always be nouns in Raf'",
        "ur": "ان کا مرفوع اسم ہونا واجب ہے"
      },
      {
        "en": "They are illegal in classical Arabic",
        "ur": "یہ فصیح عربی میں ناجائز ہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What happens when 'مَا' Masdariyyah precedes 'خَلاَ' or 'عَدَا' (e.g., 'مَا خَلاَ زَيْداً')?",
    "ur": "جب 'خَلاَ' یا 'عَدَا' سے پہلے 'مَا' مصدریہ داخل ہو جائے (جیسے: 'مَا خَلاَ زَيْداً') تو کیا اعرابی حکم ہوتا ہے؟",
    "options": [
      {
        "en": "They MUST be treated as Past Verbs, and the following noun MUST be Mansoob as Direct Object (وُجُوبُ النَّصْبِ)",
        "ur": "ان کا فعلِ ماضی ہونا متعین ہو جاتا ہے اور ان کے بعد والے اسم کا مفعول بہ ہو کر **منصوب ہونا واجب** ہو جاتا ہے"
      },
      {
        "en": "The following noun becomes Majroor with Kasra",
        "ur": "بعد والا اسم مجرور ہو جاتا ہے"
      },
      {
        "en": "The following noun becomes Marfoo' as Fa'il",
        "ur": "بعد والا اسم فاعل بن جاتا ہے"
      },
      {
        "en": "The sentence becomes invalid",
        "ur": "جملہ باطل ہو جاتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, in 'فَشَرِبُوا مِنْهُ إِلاَّ قَلِيلاً مِنْهُمْ' (Qur'an 2:249), why is 'قَلِيلاً' Mansoob?",
    "ur": "تمرين 1 کے مطابق قرآنی آیہ 'فَشَرِبُوا مِنْهُ إِلاَّ قَلِيلاً مِنْهُمْ' میں 'قَلِيلاً' کیوں منصوب ہے؟",
    "options": [
      {
        "en": "Mandatory Nasb on exception because the sentence is At-Tāmm Al-Mūjab (مستثنى منصوب وجوباً في كلام تام موجب)",
        "ur": "استثناءِ تام موجب میں واقع ہونے کی بنا پر **وجوبِ نصب**"
      },
      {
        "en": "Badal Marfoo'",
        "ur": "بدل مرفوع"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Hal",
        "ur": "حال"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'مَا فَعَلُوهُ إِلاَّ قَلِيلٌ مِنْهُمْ' (Qur'an 4:66), why is 'قَلِيلٌ' Marfoo'?",
    "ur": "آیت مبارکہ 'مَا فَعَلُوهُ إِلاَّ قَلِيلٌ مِنْهُمْ' میں 'قَلِيلٌ' کے مرفوع ہونے کی کیا وجہ ہے؟",
    "options": [
      {
        "en": "Badal Marfoo' from the pronoun Waw in 'فَعَلُوهُ' in an At-Tāmm Al-Manfiyy sentence (بدل مرفوع في كلام تام منفي)",
        "ur": "استثناءِ تام منفی میں فعل 'فعلوه' کی ضمیر 'واو' سے **بدلِ مرفوع** بننے کی بنا پر"
      },
      {
        "en": "Mustathnā Mansoob",
        "ur": "مستثنیٰ منصوب"
      },
      {
        "en": "Khabar",
        "ur": "خبر"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'مَا مُحَمَّدٌ إِلاَّ رَسُولٌ' (Qur'an 3:144), how is 'رَسُولٌ' parsed?",
    "ur": "آیت مبارکہ 'مَا مُحَمَّدٌ إِلاَّ رَسُولٌ' میں لفظ 'رَسُولٌ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Predicate / Khabar Marfoo' with Damma for Mubtada' 'مُحَمَّدٌ' in Al-Istithnā' Al-Mufarrag",
        "ur": "استثناءِ مفرغ میں مبتدأ 'مُحَمَّدٌ' کی **خبر مرفوع بالضمة**"
      },
      {
        "en": "Mustathnā Mansoob",
        "ur": "مستثنیٰ منصوب"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Badal",
        "ur": "بدل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, in 'حَضَرَ الطُّلاَّبُ غَيْرَ زَيْدٍ', why is 'غَيْرَ' Mansoob with Fatha?",
    "ur": "تمرين 2 کے مطابق 'حَضَرَ الطُّلاَّبُ غَيْرَ زَيْدٍ' میں لفظ 'غَيْرَ' پر فتحہ کیوں ہے؟",
    "options": [
      {
        "en": "Because 'غَيْرَ' takes the mandatory Nasb case of the exception noun in At-Tāmm Al-Mūjab",
        "ur": "کیونکہ استثناءِ تام موجب ہونے کی بنا پر 'غَيْرَ' نے المستثنیٰ کا **وجوبِ نصب** کا اعراب لیا ہے"
      },
      {
        "en": "Because it is Fa'il",
        "ur": "فاعل ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Mudaf Ilaihi",
        "ur": "مضاف الیہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Harf Jarr",
        "ur": "حرفِ جر ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'مَا حَضَرَ غَيْرُ زَيْدٍ', how is 'غَيْرُ' parsed?",
    "ur": "جملے 'مَا حَضَرَ غَيْرُ زَيْدٍ' میں لفظ 'غَيْرُ' کا کیا اعرابی موقع ہے؟",
    "options": [
      {
        "en": "Fa'il Marfoo' with Damma for verb 'حَضَرَ' in Al-Istithnā' Al-Mufarrag",
        "ur": "استثناءِ مفرغ میں فعل 'حَضَرَ' کا **فاعل مرفوع بالضمة**"
      },
      {
        "en": "Mustathnā Mansoob",
        "ur": "مستثنیٰ منصوب"
      },
      {
        "en": "Mubtada'",
        "ur": "مبتدأ"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'فَمَا زَادُوهُمْ غَيْرَ تَتْبِيبٍ' (Qur'an 11:101), how is 'غَيْرَ' parsed?",
    "ur": "قرآنی آیہ 'فَمَا زَادُوهُمْ غَيْرَ تَتْبِيبٍ' میں لفظ 'غَيْرَ' کا کیا اعرابی منصب ہے؟",
    "options": [
      {
        "en": "Second Direct Object (مفعول به ثانٍ منصوب) for verb 'زَادُوا' in Al-Istithnā' Al-Mufarrag",
        "ur": "استثناءِ مفرغ میں فعل 'زادوا' کا **مفعول بہ ثانی منصوب**"
      },
      {
        "en": "First Direct Object",
        "ur": "مفعول بہ اول"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
      },
      {
        "en": "Hal",
        "ur": "حال"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, in 'قَامَ القَوْمُ خَلاَ زَيْداً / زَيْدٍ', what are the two valid readings for 'زيد'?",
    "ur": "تمرين 3 کے مطابق 'قَامَ القَوْمُ خَلاَ زَيْداً / زَيْدٍ' میں لفظ 'زيد' کو کن دو اعرابی شکلوں میں پڑھنا جائز ہے؟",
    "options": [
      {
        "en": "Mansoob 'زَيْداً' (object of past verb 'خَلاَ') OR Majroor 'زَيْدٍ' (noun after preposition 'خَلاَ')",
        "ur": "منصوب 'زَيْداً' (فعل خلا کا مفعول) یا مجرور 'زَيْدٍ' (حرفِ جر خلا کے بعد اسم)"
      },
      {
        "en": "Only Marfoo' or Sukoon",
        "ur": "صرف مرفوع یا سکون"
      },
      {
        "en": "Only Dual or Plural",
        "ur": "صرف تثنیہ یا جمع"
      },
      {
        "en": "It is invalid to use Khala",
        "ur": "خلا کا استعمال ہی ناجائز ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'قَامَ القَوْمُ مَا خَلاَ زَيْداً', why is reading 'زَيْدٍ' with Kasra INVALID?",
    "ur": "جملے 'قَامَ القَوْمُ مَا خَلاَ زَيْداً' میں 'زَيْدٍ' کو کسرہ کے ساتھ مجرور پڑھنا کیوں نا جائز اور غلط ہے؟",
    "options": [
      {
        "en": "Because 'مَا' Masdariyyah enters ONLY on verbs, forcing 'خَلاَ' to be a verb and making mandatory Nasb 'زَيْداً'",
        "ur": "کیونکہ 'مَا' مصدریہ صرف افعال پر داخل ہوتا ہے، جس کی وجہ سے 'خلا' کا فعل ہونا متعین ہو جاتا ہے اور 'زَيْداً' پر **وجوبِ نصب** آتا ہے"
      },
      {
        "en": "Because Khala is a noun",
        "ur": "کیونکہ خلا اسم ہے"
      },
      {
        "en": "Because Zayd is diptote",
        "ur": "کیونکہ زید غیر منصرف ہے"
      },
      {
        "en": "Because the verb is negative",
        "ur": "کیونکہ فعل نفی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the broken plural (جمع تكسير) of 'دِينَارٌ' (Dīnār) and what morphological class does it belong to?",
    "ur": "تمرين 4 کے مطابق اسم 'دِينَارٌ' کی جمعِ تکسیر کیا ہے اور یہ کس صرفی گروہ سے تعلق رکھتی ہے؟",
    "options": [
      {
        "en": "دَنَانِيرُ (Danāneeru) on pattern مَفَاعِيلُ, which is a Diptote (مَمْنُوعٌ مِنَ الصَّرْفِ)",
        "ur": "دَنَانِيرُ (وزن مفاعيل)، جو کہ **غیر منصرف** (ممنوع من الصرف) ہے"
      },
      {
        "en": "دنانيرات (Triptote)",
        "ur": "دنانيرات (منصرف)"
      },
      {
        "en": "أدنار",
        "ur": "أدنار"
      },
      {
        "en": "دنانيراً",
        "ur": "دنانيراً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'عِنْدِي ثَلاَثُونَ دِينَاراً', why is 'دِينَاراً' Singular and Mansoob?",
    "ur": "جملے 'عِنْدِي ثَلاَثُونَ دِينَاراً' میں لفظ 'دِينَاراً' کیوں مفرد اور منصوب ہے؟",
    "options": [
      {
        "en": "Because it is Tamyeez for the compound number 'ثَلاَثُونَ' (تفكير العدد 11-99)",
        "ur": "کیونکہ یہ عدد 'ثلاثون' (11-99) کا **تمیزِ مفرد منصوب** ہے"
      },
      {
        "en": "Because it is Mustathna",
        "ur": "مستثنیٰ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Hal",
        "ur": "حال ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Khabar",
        "ur": "خبر ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In Exercise 5, in 'سَيَكُونُهُ زَيْدٌ', how is the attached pronoun 'ـهُ' parsed with 'كَانَ'?",
    "ur": "تمرين 5 کے مطابق 'سَيَكُونُهُ زَيْدٌ' میں فعل ناقص 'کان' کے ساتھ متصل ضمیر 'ـهُ' کا کیا اعرابی منصب ہے؟",
    "options": [
      {
        "en": "Khabar Kāna in position of Nasb placed before its Ism (خبر كان في محل نصب مقدم)",
        "ur": "اسم سے پہلے مقدم ہو کر **خبرِ کان منصوب محلاً** (في محل نصب مقدم)"
      },
      {
        "en": "Ism Kāna Marfoo'",
        "ur": "اسمِ کان"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "Is it permissible to use a detached pronoun for Khabar Kāna, as in 'هَلْ كُنْتَ إِيَّاهُ؟' alongside 'هَلْ كُنْتَهُ؟'?",
    "ur": "کیا خبرِ کان کی ضمیر میں متصل 'كُنْتَهُ' کے ساتھ منفصل 'كُنْتَ إِيَّاهُ' لانا بھی جائز ہے؟",
    "options": [
      {
        "en": "Yes, both attached (كُنْتَهُ) and detached (كُنْتَ إِيَّاهُ) pronouns are grammatically permissible for Khabar Kāna",
        "ur": "جی ہاں! خبرِ کان کی ضمیر میں متصل (كُنْتَهُ) اور منفصل (كُنْتَ إِيَّاهُ) دونوں جائز ہیں"
      },
      {
        "en": "No, only attached is allowed",
        "ur": "نہیں! صرف متصل جائز ہے"
      },
      {
        "en": "No, only detached is allowed",
        "ur": "نہیں! صرف منفصل جائز ہے"
      },
      {
        "en": "Neither is allowed",
        "ur": "کوئی جائز نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "What role do particles 'أَلاَ' and 'أَمَا' play in Arabic sentences?",
    "ur": "عربی زبان میں حروف 'أَلاَ' اور 'أَمَا' کلام میں کیا وظیفہ اور مقصد رکھتے ہیں؟",
    "options": [
      {
        "en": "Particles of Opening and Alerting (حُرُوفُ الاِسْتِفْتَاحِ وَالتَّنْبِيهِ) used to capture the listener's attention",
        "ur": "افتتاحِ کلام اور مخاطب کو متوجہ کرنے والے حروف (حروف الاستفتاح والتنبيه)"
      },
      {
        "en": "Prepositions causing Kasra",
        "ur": "کسرہ دینے والے حروفِ جر"
      },
      {
        "en": "Particles of exception causing Nasb",
        "ur": "نصب دینے والے حروفِ استثناء"
      },
      {
        "en": "Condition particles causing Jazm",
        "ur": "جزم دینے والے حروفِ شرط"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "In the Quranic verse 'أَلاَ إِنَّ أَوْلِيَاءَ اللَّهِ لاَ خَوْفٌ عَلَيْهِمْ' (Qur'an 10:62), how is 'أَلاَ' parsed?",
    "ur": "تمرين 6 کے مطابق قرآنی آیہ 'أَلاَ إِنَّ أَوْلِيَاءَ اللَّهِ...' میں 'أَلاَ' کا کیا اعرابی و تحلیلی مقام ہے؟",
    "options": [
      {
        "en": "Harf Istiftāh wa Tanbeeh, non-declinable having no grammatical position (حرف افتتاح وتنبيه لا محل له من الإعراب)",
        "ur": "حرفِ افتتاح و تنبیہ (لا محل له من الإعراب)"
      },
      {
        "en": "Harf Jarr",
        "ur": "حرفِ جر"
      },
      {
        "en": "Ism Inna",
        "ur": "اسم انّ"
      },
      {
        "en": "Adat Istithna'",
        "ur": "اداة استثناء"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "In 'مَا فَعَلُوهُ إِلاَّ قَلِيلٌ مِنْهُمْ', what type of Istithnā' is present?",
    "ur": "آیت مبارکہ 'مَا فَعَلُوهُ إِلاَّ قَلِيلٌ مِنْهُمْ' میں استثناء کی کون سی قسم موجود ہے؟",
    "options": [
      {
        "en": "Al-Istithnā' At-Tāmm Al-Manfiyy (الاستثناء التام المنفي)",
        "ur": "استثناءِ تام منفی (الاستثناء التام المنفي)"
      },
      {
        "en": "Al-Istithnā' At-Tāmm Al-Mūjab",
        "ur": "استثناءِ تام موجب"
      },
      {
        "en": "Al-Istithnā' Al-Mufarrag",
        "ur": "استثناءِ مفرغ"
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
    "en": "In 'فَمَا زَادُوهُمْ غَيْرَ تَتْبِيبٍ', what type of Istithnā' is present?",
    "ur": "قرآنی آیہ 'فَمَا زَادُوهُمْ غَيْرَ تَتْبِيبٍ' میں استثناء کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Al-Istithnā' Al-Mufarrag / An-Nāqis (الاستثناء المفرّغ/الناقص)",
        "ur": "استثناءِ مفرغ / ناقص (الاستثناء المفرغ)"
      },
      {
        "en": "Al-Istithnā' At-Tāmm Al-Mūjab",
        "ur": "استثناءِ تام موجب"
      },
      {
        "en": "Al-Istithnā' At-Tāmm Al-Manfiyy",
        "ur": "استثناءِ تام منفی"
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
    "en": "Parse the full sentence: 'حَضَرَ الضُّيُوفُ إِلاَّ حَامِداً':",
    "ur": "پورے جملے 'حَضَرَ الضُّيُوفُ إِلاَّ حَامِداً' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "حَضَرَ: فعل ماضٍ، الضُّيُوفُ: فاعل مرفوع بالضمة (مستثنى منه)، إِلاَّ: أداة استثناء، حَامِداً: مستثنى بـ إلا منصوب وجوباً بالفتحة",
        "ur": "حَضَرَ: فعلِ ماضی، الضُّيُوفُ: فاعل مرفوع (مستثنى منہ)، إِلاَّ: حرفِ استثناء، حَامِداً: **مستثنى بـ إلا منصوب وجوباً بالفتحة**"
      },
      {
        "en": "حضر: مبتدأ، الضيوف: خبر، إلا: حرف جر، حامداً: مجرور",
        "ur": "حضر مبتدأ، الضيوف خبر، إلا حرف جر، حامداً مجرور"
      },
      {
        "en": "حضر: حرف، الضيوف: اسم، إلا حامدا: صفة",
        "ur": "حضر حرف، الضيوف اسم، إلا حامداً صفت"
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
    "en": "Parse the full sentence: 'مَا مُحَمَّدٌ إِلاَّ رَسُولٌ':",
    "ur": "پورے جملے 'مَا مُحَمَّدٌ إِلاَّ رَسُولٌ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "مَا: نافية، مُحَمَّدٌ: مبتدأ مرفوع بالضمة، إِلاَّ: أداة حصر ملغاة، رَسُولٌ: خبر المبتدأ مرفوع بالضمة",
        "ur": "مَا: حرفِ نفی، مُحَمَّدٌ: **مبتدأ مرفوع بالضمة**، إِلاَّ: أداة حصر (ملغاة)، رَسُولٌ: **خبر مرفوع بالضمة**"
      },
      {
        "en": "ما: فعل، محمد: فاعل، إلا: حرف جر، رسول: مجرور",
        "ur": "ما فعل، محمد فاعل، إلا حرف جر، رسول مجرور"
      },
      {
        "en": "ما: اسم، محمد: مضاف إليه، إلا رسول: مستثنى",
        "ur": "ما اسم، محمد مضاف الیہ، إلا رسول مستثنیٰ"
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
    "en": "Which statement accurately summarizes the core grammar rules taught in Lesson 32?",
    "ur": "سبق 32 کے بنیادی گرامر موضوعات کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers Al-Mustathnā rules with 'إلاّ' (Tāmm Mūjab, Tāmm Manfiyy, Mufarrag), 'غير/سوى', 'خلا/عدا/حاشا' (with/without 'ما'), plural 'دنانير', pronoun as Khabar Kāna, and alerting particles (ألا/أما)",
        "ur": "اس سبق میں إلاّ کے ساتھ استثناء کی 3 حالتیں، غیر/سویٰ، خلا/عدا/حاشا مع ما، جمع دنانیر، خبرِ کان ضمیر، اور حروفِ افتتاح و تنبیہ کا کامل احاطہ کیا گیا ہے"
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
  console.log('🚀 Seeding Book 3 Lesson 32 Quiz...');
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

    // 3. Find or Create Lecture for Lesson 32
    let lectureId;
    const existingLec = await sql`
      SELECT id, title, order_index FROM lectures
      WHERE section_id = ${sectionId} AND order_index = 32
      LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 32 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 32', 32)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 32: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 32 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 32))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 32.`);
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

    // 5. Create the quiz for Book 3 Lesson 32
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 32 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 32 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
