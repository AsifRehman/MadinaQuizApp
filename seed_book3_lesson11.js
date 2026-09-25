import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL || process.env.DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What are the three primary components of an exception sentence (أركان اسلوب الاستثناء) in Arabic?",
    "ur": "عربی میں اسلوبِ استثناء کے تین بنیادی ارکان کون سے ہیں؟",
    "options": [
      {
        "en": "المستثنى منه، أداة الاستثناء، المستثنى",
        "ur": "المستثنى منه، أداة الاستثناء، المستثنى"
      },
      {
        "en": "الفاعل، الفعل، المفعول به",
        "ur": "الفاعل، الفعل، المفعول به"
      },
      {
        "en": "المبتدأ، الخبر، النعت",
        "ur": "المبتدأ، الخبر، النعت"
      },
      {
        "en": "حرف الجر، الاسم المجرور، الإضافة",
        "ur": "حرف الجر، الاسم المجرور، الإضافة"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Al-Istithna' at-Tamm al-Moojab' (الاستثناء التام الموجب)?",
    "ur": "'استثناء تام موجب' سے گرامر میں کیا مراد ہے؟",
    "options": [
      {
        "en": "When 'المستثنى منه' is mentioned and the sentence is affirmative (not negated)",
        "ur": "جس میں المستثنى منه مذکور ہو اور جملہ مثبت (غیر منفی) ہو"
      },
      {
        "en": "When 'المستثنى منه' is omitted and negated",
        "ur": "جس میں المستثنى منه محذوف اور جملہ منفی ہو"
      },
      {
        "en": "When the sentence starts with an imperative verb",
        "ur": "جو جملہ فعلِ امر سے شروع ہو"
      },
      {
        "en": "When 'إلا' is replaced by 'Inna'",
        "ur": "جس میں 'إلا' کی جگہ 'انّ' آئے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the I'rab rule for the noun following 'إِلاَّ' in 'Al-Istithna' at-Tamm al-Moojab' (e.g., 'حَضَرَ الطُّلاَّبُ إِلاَّ حَامِداً')?",
    "ur": "'استثناء تام موجب' میں 'إِلاَّ' کے بعد والے اسم (المستثنى) کا اعرابی حکم کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Obligatory Mansoob (وجوب النصب على الاستثناء)",
        "ur": "وجوبِ نصب (مستثنى بننے کی بنا پر لازماً منصوب)"
      },
      {
        "en": "Obligatory Majroor",
        "ur": "لازماً مجرور"
      },
      {
        "en": "Obligatory Marfoo'",
        "ur": "لازماً مرفوع"
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
    "en": "What are the two permissible I'rab cases for the noun after 'إِلاَّ' in 'Al-Istithna' at-Tamm al-Manfiy' (e.g., 'مَا حَضَرَ الطُّلاَّبُ إِلاَّ حَامِدٌ / حَامِداً')?",
    "ur": "'استثناء تام منفی' میں 'إِلاَّ' کے بعد والے اسم کے کون سے دو اعرابی رخ جائز ہیں؟",
    "options": [
      {
        "en": "Permissible Mansoob (جواز النصب) OR Badal from Mustathna Minhu (الإتباع على البدلية)",
        "ur": "جوازِ نصب یا مستثنى منه سے بدل بنانا"
      },
      {
        "en": "Only Majroor or Majzoom",
        "ur": "صرف مجرور یا مجزوم"
      },
      {
        "en": "Always Mabni on Fatha",
        "ur": "ہمیشہ فتحہ پر مبنی"
      },
      {
        "en": "It must be omitted",
        "ur": "اس کا حذف ہونا واجب ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Al-Istithna' al-Mufarragh' (الاستثناء المفرَّغ / الحصر)?",
    "ur": "'استثناء مفرغ' (حصر) کسے کہتے ہیں؟",
    "options": [
      {
        "en": "When 'المستثنى منه' is omitted from a negated sentence, so the verb acts directly on the noun after 'إِلاَّ'",
        "ur": "جس جملہ منفی میں 'المستثنى منه' محذوف ہو اور 'إِلاَّ' کے بعد والا اسم حسبِ عامل اعراب لے"
      },
      {
        "en": "When the sentence has two verbs",
        "ur": "جس میں دو افعال جمع ہوں"
      },
      {
        "en": "When 'غَيْر' is used in an affirmative sentence",
        "ur": "جس مثبت جملے میں 'غیر' آئے"
      },
      {
        "en": "When 'إلا' is repeated twice",
        "ur": "جس میں 'إلا' کا تکرار ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is the noun parsed in 'وما مُحَمَّدٌ إِلاَّ رَسُولٌ' (Qur'an 3:144)?",
    "ur": "آیت مبارکہ 'وما مُحَمَّدٌ إِلاَّ رَسُولٌ' میں لفظ 'رَسُولٌ' کا اعرابی منصب کیا ہے؟",
    "options": [
      {
        "en": "Khabar Marfoo' according to the operator (حسب العامل في الاستثناء المفرغ)",
        "ur": "استثناء مفرغ کی وجہ سے 'مبتا' کی خبر مرفوع"
      },
      {
        "en": "Mustathna Mansoob",
        "ur": "مستثنى منصوب"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
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
    "en": "What is the grammatical case of the noun immediately following 'غَيْرِ' and 'سِوَى' (e.g., 'حَضَرَ الطُّلاَّبُ غَيْرَ حَامِدٍ')?",
    "ur": "'غَيْرِ' اور 'سِوَى' کے فوراً بعد آنے والے اسم (المستثنى) کا اعراب کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Always Majroor as Mudaf Ilayh (مجرور بالإضافة دائماً)",
        "ur": "مضاف الیہ ہونے کی بنا پر ہمیشہ مجرور"
      },
      {
        "en": "Always Mansoob",
        "ur": "ہمیشہ منصوب"
      },
      {
        "en": "Always Marfoo'",
        "ur": "ہمیشہ مرفوع"
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
    "en": "How are the words 'غَيْرُ' and 'سِوَى' themselves declined grammatically in an exception sentence?",
    "ur": "جملہ استثناء میں خود الفاظ 'غَيْرُ' اور 'سِوَى' کا اعراب کس اصول پر طے ہوتا ہے؟",
    "options": [
      {
        "en": "They take the exact I'rab that the noun after 'إِلاَّ' would take in the same context",
        "ur": "ان کا وہی اعراب ہوتا ہے جو اس جملے میں 'إِلاَّ' کے بعد آنے والے اسم کا ہوتا"
      },
      {
        "en": "They are always Mabni on Sukoon",
        "ur": "وہ ہمیشہ سکون پر مبنی رہتے ہیں"
      },
      {
        "en": "They are always Marfoo' as Mubtada'",
        "ur": "وہ ہمیشہ مبتدأ بن کر مرفوع ہوتے ہیں"
      },
      {
        "en": "They take no I'rab at all",
        "ur": "ان کا کوئی اعراب نہیں ہوتا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When 'خَلاَ', 'عَدَا', and 'حَاشَا' are used WITHOUT preceding 'مَا' المصدرية, how can the noun after them be parsed?",
    "ur": "جب 'خَلاَ'، 'عَدَا'، 'حَاشَا' سے پہلے 'مَا' مصدریہ نہ ہو تو ان کے بعد والے اسم کا اعراب کیا ہو سکتا ہے؟",
    "options": [
      {
        "en": "Either Mansoob (as Maf'ool Bihi) OR Majroor (as Harf Jar)",
        "ur": "منصوب (مفعول بہ بننے پر) یا مجرور (حرفِ جر بننے پر)"
      },
      {
        "en": "Only Marfoo'",
        "ur": "صرف مرفوع"
      },
      {
        "en": "Only Majzoom",
        "ur": "صرف مجزوم"
      },
      {
        "en": "Only Mabni on Damma",
        "ur": "صرف ضمہ پر مبنی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When 'مَا' المصدرية precedes 'مَا خَلاَ' or 'مَا عَدَا', what MUST be the grammatical case of the following noun?",
    "ur": "جب 'خَلاَ' یا 'عَدَا' پر 'مَا' مصدریہ داخل ہو جائے ('مَا خَلاَ' / 'مَا عَدَا') تو بعد والے اسم کا اعراب کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Obligatory Mansoob as Maf'ool Bihi (وجوب النصب على المفعولية)",
        "ur": "مفعول بہ بننے کی بنا پر لازماً منصوب"
      },
      {
        "en": "Obligatory Majroor",
        "ur": "لازماً مجرور"
      },
      {
        "en": "Obligatory Marfoo'",
        "ur": "لازماً مرفوع"
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
    "en": "In Exercise 1, complete the Tamm Moojab sentence: 'فَهِمَ الطُّلاَّبُ الدَّرْسَ إِلاَّ ...' (all students understood except Hamid):",
    "ur": "تمرين 1 کے مطابق جملہ مکمل کریں: 'فَهِمَ الطُّلاَّبُ الدَّرْسَ إِلاَّ ...' (تمام طلباء سبق سمجھے بجز حامد کے):",
    "options": [
      {
        "en": "حَامِداً (Hāmidan - Obligatory Mansoob)",
        "ur": "حَامِداً (وجوبِ نصب کی بنا پر)"
      },
      {
        "en": "حَامِدٌ",
        "ur": "حَامِدٌ"
      },
      {
        "en": "حَامِدٍ",
        "ur": "حَامِدٍ"
      },
      {
        "en": "حَامِدُ",
        "ur": "حَامِدُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In the Quranic verse 'فَشَرِبُوا مِنْهُ إِلاَّ قَلِيلاً مِنْهُمْ' (Qur'an 2:249), why is 'قَلِيلاً' Mansoob?",
    "ur": "قرآنی آیہ 'فَشَرِبُوا مِنْهُ إِلاَّ قَلِيلاً مِنْهُمْ' میں 'قَلِيلاً' کے منصوب ہونے کی کیا وجہ ہے؟",
    "options": [
      {
        "en": "Because it is Mustathna in a Tamm Moojab exception sentence (مستثنى في كلام تام موجب)",
        "ur": "کلامِ تام موجب میں المستثنى بالاستثناء ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Maf'ool Absolute (مصدر)",
        "ur": "مفعول مطلق ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Khabar Kaana",
        "ur": "کان کی خبر ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Tamyeez",
        "ur": "تمیز ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete: 'قَرَأْتُ الكِتَابَ إِلاَّ ... أَقْلِيَةً' (I read the book except three pages):",
    "ur": "جملہ مکمل کریں: 'قَرَأْتُ الكِتَابَ إِلاَّ ... صَفَحَاتٍ' (میں نے تین صفحات کے علاوہ کتاب پڑھ لی):",
    "options": [
      {
        "en": "ثَلاَثَ (Thalātha - Mansoob as Mustathna)",
        "ur": "ثَلاَثَ (مستثنى منصوب)"
      },
      {
        "en": "ثَلاَثُ",
        "ur": "ثَلاَثُ"
      },
      {
        "en": "ثَلاَثٍ",
        "ur": "ثَلاَثٍ"
      },
      {
        "en": "ثَلاَثَةُ",
        "ur": "ثَلاَثَةُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, in 'مَا حَضَرَ الطُّلاَّبُ إِلاَّ حَامِدٌ / حَامِداً', what is the parsing of 'حَامِدٌ' in Marfoo' case?",
    "ur": "تمرين 2 کے مطابق 'مَا حَضَرَ الطُّلاَّبُ إِلاَّ حَامِدٌ' میں مرفوع حالت میں 'حَامِدٌ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Badal from Mustathna Minhu 'الطُّلاَّبُ' (بدل مرفوع من الطلاب)",
        "ur": "مستثنى منہ 'الطلاب' سے بدلِ مرفوع"
      },
      {
        "en": "Fa'il of Hadara",
        "ur": "فعل کا فاعل"
      },
      {
        "en": "Mubtada' Mu'akhar",
        "ur": "مبتدأ مؤخر"
      },
      {
        "en": "Khabar Ma",
        "ur": "ما کی خبر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In the Quranic reading 'وَلَمْ يَكُنْ لَهُمْ شُهَدَاءُ إِلاَّ أَنْفُسُهُمْ' (Qur'an 24:6), why is 'أَنْفُسُهُمْ' Marfoo'?",
    "ur": "آیت مبارکہ 'وَلَمْ يَكُنْ لَهُمْ شُهَدَاءُ إِلاَّ أَنْفُسُهُمْ' میں 'أَنْفُسُهُمْ' مرفوع کیوں ہے؟",
    "options": [
      {
        "en": "Parsed as Badal from the Marfoo' noun 'شُهَدَاءُ' in a negated Tamm sentence",
        "ur": "کلامِ تام منفی میں اسمِ مرفوع 'شهداء' سے بدل بننے کی بنا پر"
      },
      {
        "en": "Because it is Ism Yakun",
        "ur": "یکون کا اسم ہونے کی بنا پر"
      },
      {
        "en": "Because it is Fa'il",
        "ur": "فاعل ہونے کی بنا پر"
      },
      {
        "en": "Because it is Mudaf Ilayh",
        "ur": "مضاف الیہ ہونے کی بنا پر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Complete with the Badal option: 'مَا رَأَيْتُ الطُّلاَّبَ إِلاَّ ...' (I did not see the students except Ali):",
    "ur": "بدل کی حالت میں جملہ مکمل کریں: 'مَا رَأَيْتُ الطُّلاَّبَ إِلاَّ ...' (میں نے علی کے علاوہ طلباء کو نہیں دیکھا):",
    "options": [
      {
        "en": "عَلِيّاً ('Aliyyan - Badal from Mansoob 'الطُّلاَّبَ')",
        "ur": "عَلِيّاً (منصوب اسم 'الطلاب' سے بدل)"
      },
      {
        "en": "عَلِيٌّ",
        "ur": "عَلِيٌّ"
      },
      {
        "en": "عَلِيٍّ",
        "ur": "عَلِيٍّ"
      },
      {
        "en": "عَلِيُ",
        "ur": "عَلِيُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Complete: 'مَا مَرَرْتُ بِأَحَدٍ إِلاَّ ...' (I did not pass by anyone except Zayd - choosing Badal case):",
    "ur": "بدل کے اعراب کے مطابق جملہ مکمل کریں: 'مَا مَرَرْتُ بِأَحَدٍ إِلاَّ ...':",
    "options": [
      {
        "en": "زَيْدٍ (Zaydin - Badal from Majroor 'بِأَحَدٍ')",
        "ur": "زَيْدٍ (مجرور اسم 'بِأَحَدٍ' سے بدل)"
      },
      {
        "en": "زَيْدٌ",
        "ur": "زَيْدٌ"
      },
      {
        "en": "زَيْداً",
        "ur": "زَيْداً"
      },
      {
        "en": "زَيْدُ",
        "ur": "زَيْدُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, in 'مَا قَلْتُ إِلاَّ الحَقَّ', what is the grammatical position of 'الحَقَّ'?",
    "ur": "تمرين 3 کے جملے 'مَا قَلْتُ إِلاَّ الحَقَّ' میں 'الحَقَّ' کا ترکیبی منصب کیا ہے؟",
    "options": [
      {
        "en": "Maf'ool Bihi Mansoob for verb 'قُلْتُ' (استثناء مفرغ)",
        "ur": "استثناء مفرغ ہونے کی وجہ سے فعل 'قُلْتُ' کا مفعول بہ منصوب"
      },
      {
        "en": "Mustathna Mansoob",
        "ur": "مستثنى منصوب"
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
    "part": "Exercise 3",
    "en": "In 'مَا جَاءَ إِلاَّ حَامِدٌ', how is 'حَامِدٌ' parsed?",
    "ur": "جملے 'مَا جَاءَ إِلاَّ حَامِدٌ' میں 'حَامِدٌ' کا اعرابی موقع کیا ہے؟",
    "options": [
      {
        "en": "Fa'il Marfoo' for the verb 'جَاءَ'",
        "ur": "فعل 'جَاءَ' کا فاعل مرفوع"
      },
      {
        "en": "Mubtada' Mu'akhar",
        "ur": "مبتدأ مؤخر"
      },
      {
        "en": "Badal",
        "ur": "بدل"
      },
      {
        "en": "Khabar Ma",
        "ur": "ما کی خبر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'مَا مَرَرْتُ إِلاَّ بِعَلِيٍّ', why is 'بِعَلِيٍّ' Majroor?",
    "ur": "جملے 'مَا مَرَرْتُ إِلاَّ بِعَلِيٍّ' میں 'بِعَلِيٍّ' کے مجرور ہونے کی کیا وجہ ہے؟",
    "options": [
      {
        "en": "Preceded by preposition Ba (بـ) operating directly in Mufarragh exception",
        "ur": "استثناء مفرغ میں حرفِ جر (بـ) کے ڈائریکٹ عمل کی وجہ سے"
      },
      {
        "en": "Because it is Mudaf Ilayh",
        "ur": "مضاف الیہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Badal",
        "ur": "بدل ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Khabar",
        "ur": "خبر ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In the Quranic verse 'إِنْ هَذَا إِلاَّ سِحْرٌ مُبِينٌ' (Qur'an 6:7), how is 'سِحْرٌ' parsed?",
    "ur": "قرآنی آیہ 'إِنْ هَذَا إِلاَّ سِحْرٌ مُبِينٌ' (حصر) میں لفظ 'سِحْرٌ' کا اعرابی موقع کیا ہے؟",
    "options": [
      {
        "en": "Khabar Marfoo' for Mubtada' 'هَذَا' (where 'إِنْ' is Nafiyah)",
        "ur": "مبتدأ 'هَذَا' کی خبر مرفوع (جہاں 'إِنْ' بمعنی نفی ہے)"
      },
      {
        "en": "Mustathna Mansoob",
        "ur": "مستثنى منصوب"
      },
      {
        "en": "Ism Inna",
        "ur": "انّ کا اسم"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, complete: 'حَضَرَ الطُّلاَّبُ غَيْرَ ...' (The students attended except Hamid):",
    "ur": "تمرين 4 کے مطابق جملہ مکمل کریں: 'حَضَرَ الطُّلاَّبُ غَيْرَ ...':",
    "options": [
      {
        "en": "حَامِدٍ (Hāmidin - Majroor as Mudaf Ilayh)",
        "ur": "حَامِدٍ (مضاف الیہ ہونے کی بنا پر مجرور)"
      },
      {
        "en": "حَامِداً",
        "ur": "حَامِداً"
      },
      {
        "en": "حَامِدٌ",
        "ur": "حَامِدٌ"
      },
      {
        "en": "حَامِدُ",
        "ur": "حَامِدُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'حَضَرَ الطُّلاَّبُ غَيْرَ حَامِدٍ', why is the word 'غَيْرَ' Mansoob with Fatha?",
    "ur": "جملے 'حَضَرَ الطُّلاَّبُ غَيْرَ حَامِدٍ' میں لفظ 'غَيْرَ' خود منصوب کیوں ہے؟",
    "options": [
      {
        "en": "Because it takes the I'rab of Mustathna in a Tamm Moojab sentence (Mansoob)",
        "ur": "کیونکہ کلامِ تام موجب میں اس کا اپنا اعراب مستثنى والا (منصوب) ہوتا ہے"
      },
      {
        "en": "Because it is Mudaf Ilayh",
        "ur": "مضاف الیہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Fa'il",
        "ur": "فاعل ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Maf'ool Absolute",
        "ur": "مفعول مطلق ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'مَا جَاءَ غَيْرُ حَامِدٍ', why is 'غَيْرُ' Marfoo' with Damma?",
    "ur": "جملے 'مَا جَاءَ غَيْرُ حَامِدٍ' میں لفظ 'غَيْرُ' پر ضمہ کیوں ہے؟",
    "options": [
      {
        "en": "Because it acts as Fa'il for 'جَاءَ' in Mufarragh exception",
        "ur": "استثناء مفرغ میں فعل 'جَاءَ' کا فاعل بننے کی وجہ سے"
      },
      {
        "en": "Because it is Mustathna Mansoob",
        "ur": "مستثنى منصوب ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Badal",
        "ur": "بدل ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Mudaf",
        "ur": "مضاف ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "How are the vowelled signs of 'سِوَى' expressed grammatically in all positions?",
    "ur": "لفظ 'سِوَى' کی اعرابی علامات کا تمام حالتوں میں کیا حکم ہوتا ہے؟",
    "options": [
      {
        "en": "Estimated vowels on Alif in all cases (بحركات مقدرة على الألف)",
        "ur": "تمام حالتوں میں الف پر حرکاتِ مقدورہ کے ساتھ"
      },
      {
        "en": "Apparent Fatha and Damma",
        "ur": "ظاہری فتحہ اور ضمہ کے ساتھ"
      },
      {
        "en": "Always fixed on Kasra",
        "ur": "ہمیشہ کسرہ پر مبنی"
      },
      {
        "en": "It takes Tanween",
        "ur": "اس پر تنوین آتی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In Exercise 5, if you parse 'خَلاَ' as a preposition (حرف جر) in 'حَضَرَ الطُّلاَّبُ خَلاَ حَامِدٍ', how is 'حَامِدٍ' parsed?",
    "ur": "تمرين 5 میں اگر 'خَلاَ' کو حرفِ جر مانا جائے ('حَضَرَ الطُّلاَّبُ خَلاَ حَامِدٍ') تو 'حَامِدٍ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Ism Majroor by 'خَلاَ' (اسم مجرور بحرف الجر)",
        "ur": "حرفِ جر 'خَلاَ' سے اسمِ مجرور"
      },
      {
        "en": "Maf'ool Bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Mudaf Ilayh",
        "ur": "مضاف الیہ"
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
    "en": "If you parse 'خَلاَ' as a past tense verb (فعل ماضٍ) in 'حَضَرَ الطُّلاَّبُ خَلاَ حَامِداً', how is 'حَامِداً' parsed?",
    "ur": "اگر 'خَلاَ' کو فعلِ ماضی مانا جائے ('حَضَرَ الطُّلاَّبُ خَلاَ حَامِداً') تو 'حَامِداً' کا اعرابی منصب کیا ہوگا؟",
    "options": [
      {
        "en": "Maf'ool Bihi Mansoob for verb 'خَلاَ' (مفعول به منصوب)",
        "ur": "فعل 'خَلاَ' کا مفعول بہ منصوب"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Ism Majroor",
        "ur": "اسمِ مجرور"
      },
      {
        "en": "Tamyeez Mansoob",
        "ur": "تمیز منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'حَضَرَ الرِّجَالُ مَا عَدَا عَلِيّاً', why MUST 'عَلِيّاً' be Mansoob?",
    "ur": "جملے 'حَضَرَ الرِّجَالُ مَا عَدَا عَلِيّاً' میں لفظ 'عَلِيّاً' کا منصوب ہونا کیوں ضروری ہے؟",
    "options": [
      {
        "en": "Because 'مَا' المصدرية forces 'عَدَا' to function strictly as a verb",
        "ur": "'مَا' مصدریہ داخل ہونے کی وجہ سے 'عَدَا' لازماً فعل بن جاتا ہے"
      },
      {
        "en": "Because 'عَدَا' becomes a preposition",
        "ur": "کیونکہ عدا حرفِ جر بن جاتا ہے"
      },
      {
        "en": "Because it is Mudaf Ilayh",
        "ur": "مضاف الیہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Badal",
        "ur": "بدل ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Which statement accurately summarizes the difference between 'إِلاَّ' as Harf Istithna vs 'إِلاَّ' as Adat Hasr (حصر)?",
    "ur": "'إِلاَّ' حرفِ استثناء اور 'إِلاَّ' اداۃِ حصر کے بنیادی فرق کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "It is Harf Istithna when 'المستثنى منه' is present; it becomes Adat Hasr in Mufarragh exception when 'المستثنى منه' is omitted",
        "ur": "جب المستثنى منه موجود ہو تو حرفِ استثناء ہے؛ جب استثناء مفرغ میں المستثنى منه محذوف ہو تو اداۃِ حصر ہے"
      },
      {
        "en": "Both are identical in all rules",
        "ur": "تمام قواعد میں دونوں بالکل ایک جیسے ہیں"
      },
      {
        "en": "Adat Hasr requires a Majroor noun",
        "ur": "اداۃِ حصر کے بعد اسم کا مجرور ہونا لازمی ہے"
      },
      {
        "en": "Harf Istithna only appears in past tense",
        "ur": "حرفِ استثناء صرف فعلِ ماضی میں آتا ہے"
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
        "en": "مَا: نَافِيَةٌ، مُحَمَّدٌ: مُبْتَدَأٌ مَرْفُوعٌ، إِلاَّ: أَدَاةُ حَصْرٍ، رَسُولٌ: خَبَرٌ مَرْفُوعٌ",
        "ur": "مَا: نفی کا حرف، مُحَمَّدٌ: مبتدأ مرفوع، إِلاَّ: اداۃِ حصر، رَسُولٌ: خبر مرفوع"
      },
      {
        "en": "مَا: موصولة، محمد: فاعل، إلا: حرف جر، رسول: مجرور",
        "ur": "ما موصولہ، محمد فاعل، إلا حرف جر، رسول مجرور"
      },
      {
        "en": "مَا: زائدة، محمد: مفعول به، إلا: استثناء، رسول: مستثنى",
        "ur": "ما زائدہ، محمد مفعول بہ، إلا استثناء، رسول مستثنى"
      },
      {
        "en": "مَا: استفهامية، محمد: خبر، إلا: حرف عطف، رسول: معطوف",
        "ur": "ما استفہامیہ، محمد خبر، إلا حرف عطف، رسول معطوف"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 11 Quiz ---');

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

    // 4. Find or Create Lecture 11 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 11 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 11 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 11', 11)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 11: ID ${lectureId}`);
    }

    // 5. CAREFUL DELETION: Find existing Book 3 Lesson 11 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 11))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 11.`);
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

    // 6. Create the quiz for Book 3 Lesson 11
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 11 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 11 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

run();
