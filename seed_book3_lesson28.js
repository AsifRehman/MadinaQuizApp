import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is 'Al-Maf'ool Al-Mutlaq' (المَفْعُولُ المُلْطَقُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'مفعول مطلق' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A Mansoob Masdar mentioned after a verb from the same root to emphasize it, specify its type, or show its number",
        "ur": "وہ اسمِ مصدر منصوب جو فعل کے بعد اس کی تاکید، نوعیت یا تعداد ظاہر کرنے کے لیے اسی مادے سے لایا جائے"
      },
      {
        "en": "A noun showing the place of action only",
        "ur": "صرف فعل کا مقام بتانے والا اسم"
      },
      {
        "en": "A noun showing the doer of the action",
        "ur": "فعل کا فاعل بتانے والا اسم"
      },
      {
        "en": "A particle used for negation",
        "ur": "نفی کا حرف"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the three primary types of Maf'ool Mutlaq (أنواع المفعول المطلق)?",
    "ur": "مفعول مطلق کی بنیادی تین اقسام کون سی ہیں؟",
    "options": [
      {
        "en": "1. Mu'akkid li-Fi'lihi (تاکید), 2. Mubayyin li-Naw'ihi (نوعیت), 3. Mubayyin li-'Adadihi (تعداد)",
        "ur": "1. مؤکد لفعلہ (تاکید)، 2. مبین لنوعہ (نوعیت)، 3. مبین لعددہ (تعداد)"
      },
      {
        "en": "1. Past, 2. Present, 3. Imperative",
        "ur": "1. ماضی، 2. مضارع، 3. امر"
      },
      {
        "en": "1. Marfoo', 2. Mansoob, 3. Majroor",
        "ur": "1. مرفوع، 2. منصوب، 3. مجرور"
      },
      {
        "en": "1. Singular, 2. Dual, 3. Plural",
        "ur": "1. مفرد، 2. تثنیہ، 3. جمع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'حَفِظْتُ الدَّرْسَ حِفْظاً', what type of Maf'ool Mutlaq is 'حِفْظاً'?",
    "ur": "جملے 'حَفِظْتُ الدَّرْسَ حِفْظاً' میں 'حِفْظاً' مفعول مطلق کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Mu'akkid li-Fi'lihi (مُؤَكِّدٌ لِلْفِعْلِ - emphasizing the action)",
        "ur": "مُؤَكِّدٌ لِلْفِعْلِ (فعل کی تاکید کے لیے)"
      },
      {
        "en": "Mubayyin li-Naw'ihi",
        "ur": "مبین لنوعہ"
      },
      {
        "en": "Mubayyin li-'Adadihi",
        "ur": "مبین لعددہ"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'حَفِظْتُ الدَّرْسَ حِفْظاً جَيِّداً', what type of Maf'ool Mutlaq is 'حِفْظاً جَيِّداً'?",
    "ur": "جملے 'حَفِظْتُ الدَّرْسَ حِفْظاً جَيِّداً' میں 'حِفْظاً' مفعول مطلق کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Mubayyin li-Naw'ihi (مُبَيِّنٌ لِنَوْعِهِ - specifying the quality/type through an adjective)",
        "ur": "مُبَيِّنٌ لِنَوْعِهِ (صفت کے ذریعے فعل کی نوعیت و کیفیت بتانے کے لیے)"
      },
      {
        "en": "Mu'akkid li-Fi'lihi",
        "ur": "مؤکد لفعلہ"
      },
      {
        "en": "Mubayyin li-'Adadihi",
        "ur": "مبین لعددہ"
      },
      {
        "en": "Maf'ool lahu",
        "ur": "مفعول لہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'ضَرَبْتُ الكَسْلاَنَ ضَرْبَتَيْنِ', what type of Maf'ool Mutlaq is 'ضَرْبَتَيْنِ'?",
    "ur": "جملے 'ضَرَبْتُ الكَسْلاَنَ ضَرْبَتَيْنِ' میں 'ضَرْبَتَيْنِ' مفعول مطلق کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Mubayyin li-'Adadihi (مُبَيِّنٌ لِعَدَدِهِ - indicating the frequency/number of two times)",
        "ur": "مُبَيِّنٌ لِعَدَدِهِ (فعل کی دو بار تعداد بتانے کے لیے)"
      },
      {
        "en": "Mu'akkid li-Fi'lihi",
        "ur": "مؤکد لفعلہ"
      },
      {
        "en": "Mubayyin li-Naw'ihi",
        "ur": "مبین لنوعہ"
      },
      {
        "en": "Maf'ool ma'ahu",
        "ur": "مفعول معہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'احْتَرَمْتُ الـمُدَرِّسَ كُلَّ الاِحْتِرَامِ', how is 'كُلَّ' parsed?",
    "ur": "جملے 'احْتَرَمْتُ الـمُدَرِّسَ كُلَّ الاِحْتِرَامِ' میں لفظ 'كُلَّ' کا کیا اعرابی موقع ہے؟",
    "options": [
      {
        "en": "Na'ib 'an al-Maf'ool al-Mutlaq Mansoob with Fatha (نَائِبٌ عَنِ الـمَفْعُولِ الـمُطْلَقِ مَنْصُوبٌ)",
        "ur": "مصدر کی طرف مضاف ہونے کی بنا پر نائب عن المفعول المطلق منصوب"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
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
    "en": "What is 'Al-Maf'ool Lahu / Al-Maf'ool Li-ajlihi' (المَفْعُولُ لأَجْلِهِ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'مفعول لأجله' (مفعول لہ) کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A Mansoob Masdar mentioned to explain the REASON or PURPOSE for performing the action (e.g., قُمْتُ إِجْلاَلاً لِلْمُدَرِّسِ)",
        "ur": "وہ اسمِ مصدر منصوب جو فعل کے واقع ہونے کا **سبب یا مقصد** بیان کرنے کے لیے لایا جائے (جیسے: قُمْتُ إِجْلاَلاً)"
      },
      {
        "en": "A noun showing the time of action",
        "ur": "فعل کا وقت بتانے والا اسم"
      },
      {
        "en": "A noun showing accompaniment",
        "ur": "ساتھ کا معنی دینے والا اسم"
      },
      {
        "en": "A particle of condition",
        "ur": "شرط کا حرف"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Al-Maf'ool Feehi / Adh-Dharf' (المَفْعُولُ فِيهِ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'مفعول فیہ' (ظرف) کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A Mansoob noun indicating the TIME or PLACE in which the action occurred (e.g., صُمْتُ يَوْماً، جَلَسْتُ أَمَامَكَ)",
        "ur": "وہ اسمِ منصوب جو فعل کے واقع ہونے کا **وقت یا مقام** ظاہر کرے (جیسے: صُمْتُ يَوْماً، جَلَسْتُ أَمَامَكَ)"
      },
      {
        "en": "A noun indicating reason",
        "ur": "سبب بتانے والا اسم"
      },
      {
        "en": "A noun indicating number of times",
        "ur": "تعداد بتانے والا اسم"
      },
      {
        "en": "A preposition",
        "ur": "حرفِ جر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Al-Maf'ool Ma'ahu' (المَفْعُولُ مَعَهُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'مفعول معہ' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A Mansoob noun following 'Waw al-Ma'iyyah' (واو المعية) denoting accompaniment in time/action (e.g., سِرْتُ وَالنَّهْرَ)",
        "ur": "وہ اسمِ منصوب جو **واؤ المعیۃ** (بمعنی 'مع' / ساتھ) کے بعد آ کر عمل میں باہمی معیت بتائے (جیسے: سِرْتُ وَالنَّهْرَ)"
      },
      {
        "en": "A noun joined by conjunctive Waw",
        "ur": "عاطفہ واؤ سے جڑا اسم"
      },
      {
        "en": "A verb in passive voice",
        "ur": "مجہول فعل"
      },
      {
        "en": "A prepositional phrase",
        "ur": "جار مجرور"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'سِرْتُ وَالشَّاطِئَ', why is 'الشَّاطِئَ' Mansoob with Fatha?",
    "ur": "جملے 'سِرْتُ وَالشَّاطِئَ' میں لفظ 'الشَّاطِئَ' کیوں منصوب ہے؟",
    "options": [
      {
        "en": "Because it is Maf'ool Ma'ahu Mansoob after Waw al-Ma'iyyah (مفعول معه منصوب بالفتحة بعد واو المعية)",
        "ur": "واؤ المعیۃ کے بعد واقع ہونے کی بنا پر **مفعول معہ منصوب بالفتحة**"
      },
      {
        "en": "Because it is Ma'toof Marfoo'",
        "ur": "معطوف مرفوع"
      },
      {
        "en": "Because it is Fa'il",
        "ur": "فاعل"
      },
      {
        "en": "Because it is Mubtada'",
        "ur": "مبتدأ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, in 'كَلَّمَ اللَّهُ مُوسَى تَكْلِيماً' (Qur'an 4:164), what type of Maf'ool Mutlaq is 'تَكْلِيماً'?",
    "ur": "تمرين 1 کے مطابق قرآنی آیہ 'كَلَّمَ اللَّهُ مُوسَى تَكْلِيماً' میں 'تَكْلِيماً' مفعول مطلق کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Mu'akkid li-Fi'lihi (مُؤَكِّدٌ لِلْفِعْلِ - emphasizing the speaking action)",
        "ur": "مُؤَكِّدٌ لِلْفِعْلِ (کلام کے فعل کی تاکید کے لیے)"
      },
      {
        "en": "Mubayyin li-Naw'ihi",
        "ur": "مبین لنوعہ"
      },
      {
        "en": "Mubayyin li-'Adadihi",
        "ur": "مبین لعددہ"
      },
      {
        "en": "Na'ib 'an al-Masdar",
        "ur": "نائب عن المصدر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'وَأَخَذْنَاهُمْ أَخْذَ عَزِيزٍ مُقْتَدِرٍ' (Qur'an 54:42), what type of Maf'ool Mutlaq is 'أَخْذَ'?",
    "ur": "آیت مبارکہ 'وَأَخَذْنَاهُمْ أَخْذَ عَزِيزٍ مُقْتَدِرٍ' میں 'أَخْذَ' مفعول مطلق کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Mubayyin li-Naw'ihi (مُبَيِّنٌ لِنَوْعِهِ - specifying the manner/type by Idāfah)",
        "ur": "مُبَيِّنٌ لِنَوْعِهِ (اضافت کے ذریعے نائبت و کیفیت بتانے کے لیے)"
      },
      {
        "en": "Mu'akkid li-Fi'lihi",
        "ur": "مؤکد لفعلہ"
      },
      {
        "en": "Mubayyin li-'Adadihi",
        "ur": "مبین لعددہ"
      },
      {
        "en": "Maf'ool lahu",
        "ur": "مفعول لہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'سَجَدْتُ لِلَّهِ سَجْدَتَيْنِ', what type of Maf'ool Mutlaq is 'سَجْدَتَيْنِ'?",
    "ur": "جملے 'سَجَدْتُ لِلَّهِ سَجْدَتَيْنِ' میں 'سَجْدَتَيْنِ' مفعول مطلق کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Mubayyin li-'Adadihi (مُبَيِّنٌ لِعَدَدِهِ - indicating two prostrations)",
        "ur": "مُبَيِّنٌ لِعَدَدِهِ (سجدوں کی دو بار تعداد بتانے کے لیے)"
      },
      {
        "en": "Mu'akkid li-Fi'lihi",
        "ur": "مؤکد لفعلہ"
      },
      {
        "en": "Mubayyin li-Naw'ihi",
        "ur": "مبین لنوعہ"
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
    "en": "In 'صَبَرْتُ صَبْراً جَمِيلاً', how is 'جَمِيلاً' parsed?",
    "ur": "جملے 'صَبَرْتُ صَبْراً جَمِيلاً' میں لفظ 'جَمِيلاً' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Na't / Sifah Mansoob with Fatha for the Masdar 'صَبْراً' (نعت/صفة منصوبة بالفتحة)",
        "ur": "مصدر 'صَبْراً' کی نعت/صفت منصوب بالفتحة"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Mudaaf ilaihi",
        "ur": "مضاف الیہ"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, in 'فَاجْلِدُوهُمْ ثَمَانِينَ جَلْدَةً' (Qur'an 24:4), why is 'ثَمَانِينَ' Mansoob?",
    "ur": "تمرين 2 کے مطابق قرآنی آیہ 'فَاجْلِدُوهُمْ ثَمَانِينَ جَلْدَةً' میں 'ثَمَانِينَ' کیوں منصوب ہے؟",
    "options": [
      {
        "en": "Na'ib 'an al-Maf'ool al-Mutlaq as the number of the Masdar (نائب عن المفعول المطلق - عدد المصدر)",
        "ur": "مصدر کے عدد کو ظاہر کرنے کی بنا پر **نائب عن المفعول المطلق** منصوب"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Tamyeez",
        "ur": "تمیز"
      },
      {
        "en": "Hal",
        "ur": "حال"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'قَعَدْتُ جُلُوساً', why is 'جُلُوساً' acting as Na'ib 'an al-Maf'ool al-Mutlaq?",
    "ur": "جملے 'قَعَدْتُ جُلُوساً' میں 'جُلُوساً' کیوں نائب عن المفعول المطلق بن رہا ہے؟",
    "options": [
      {
        "en": "Because 'جُلُوساً' is a SYNONYM (مُرَادِفٌ) of the verb's own Masdar 'قُعُوداً'",
        "ur": "کیونکہ 'جُلُوساً' فعل کے اپنے اصلی مصدر 'قُعُوداً' کا **ہم معنی و مترادف** (مرادف) ہے"
      },
      {
        "en": "Because it is an adjective",
        "ur": "صفت ہونے کی وجہ سے"
      },
      {
        "en": "Because it is a number",
        "ur": "عدد ہونے کی وجہ سے"
      },
      {
        "en": "Because it is a demonstrative",
        "ur": "اسمِ اشارہ ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'فَلاَ تَمِيلُوا كُلَّ الـمَيْلِ' (Qur'an 4:129), how is 'كُلَّ' parsed?",
    "ur": "آیت مبارکہ 'فَلاَ تَمِيلُوا كُلَّ الـمَيْلِ' میں لفظ 'كُلَّ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Na'ib 'an al-Maf'ool al-Mutlaq Mansoob with Fatha attached to Masdar (نائب عن المفعول المطلق مضاف إلى المصدر)",
        "ur": "مصدر کی طرف مضاف ہونے کی بنا پر **نائب عن المفعول المطلق منصوب**"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Ism Laa",
        "ur": "اسم لا"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'أَكْرَمْتُهُ ذَلِكَ الإِكْرَامَ', why is 'ذَلِكَ' acting as Na'ib 'an al-Maf'ool al-Mutlaq?",
    "ur": "جملے 'أَكْرَمْتُهُ ذَلِكَ الإِكْرَامَ' میں 'ذَلِكَ' کیوں نائب عن المفعول المطلق ہے؟",
    "options": [
      {
        "en": "Because it is a Demonstrative Noun pointing to the Masdar 'الإِكْرَامَ' (اسم إشارة مشار به إلى المصدر)",
        "ur": "کیونکہ یہ وہ اسمِ اشارہ ہے جس کے ذریعے مصدر کی طرف اشارہ کیا جا رہا ہے"
      },
      {
        "en": "Because it is an adjective",
        "ur": "صفت ہونے کی وجہ سے"
      },
      {
        "en": "Because it is a number",
        "ur": "عدد ہونے کی وجہ سے"
      },
      {
        "en": "Because it is a time adverb",
        "ur": "ظرف ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, in 'سَافَرْتُ إِلَى مَكَّةَ رَغْبَةً فِي العُمْرَةِ', why is 'رَغْبَةً' Mansoob?",
    "ur": "تمرين 3 کے مطابق 'سَافَرْتُ إِلَى مَكَّةَ رَغْبَةً فِي العُمْرَةِ' میں لفظ 'رَغْبَةً' کیوں منصوب ہے؟",
    "options": [
      {
        "en": "Maf'ool Lahu / Li-ajlihi Mansoob expressing the cause/desire for travel (مفعول لأجله منصوب بالفتحة)",
        "ur": "سفر کا سبب و شوق ظاہر کرنے کی بنا پر **مفعول لأجله منصوب بالفتحة**"
      },
      {
        "en": "Maf'ool Mutlaq",
        "ur": "مفعول مطلق"
      },
      {
        "en": "Maf'ool feehi",
        "ur": "مفعول فیہ"
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
    "en": "In the Quranic verse 'وَلاَ تَقْتُلُوا أَوْلاَدَكُمْ خَشْيَةَ إِمْلاَقٍ' (Qur'an 17:31), how is 'خَشْيَةَ' parsed?",
    "ur": "قرآنی آیہ 'وَلاَ تَقْتُلُوا أَوْلاَدَكُمْ خَشْيَةَ إِمْلاَقٍ' میں 'خَشْيَةَ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Maf'ool Lahu Mansoob with Fatha, in Idāfah structure (مفعول لأجله منصوب وهو مضاف)",
        "ur": "قتل سے ممانعت کا سبب بتانے کی بنا پر **مفعول لأجله منصوب** (مع مضاف)"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Maf'ool Mutlaq",
        "ur": "مفعول مطلق"
      },
      {
        "en": "Tamyeez",
        "ur": "تمیز"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Convert 'سَافَرْتُ لِكَيْ أَتَعَلَّمَ' using a Maf'ool Lahu Masdar:",
    "ur": "جملے 'سَافَرْتُ لِكَيْ أَتَعَلَّمَ' کو 'مفعول لہ' مصدر استعمال کر کے درست تبدیل کریں:",
    "options": [
      {
        "en": "سَافَرْتُ طَلَباً لِلْعِلْمِ / طَلَبَ العِلْمِ (Sāfartu ṭalaban lil-'ilmi)",
        "ur": "سَافَرْتُ طَلَباً لِلْعِلْمِ / طَلَبَ العِلْمِ"
      },
      {
        "en": "سَافَرْتُ تَعَلُّماً كَيْ",
        "ur": "سَافَرْتُ تَعَلُّماً كَيْ"
      },
      {
        "en": "سَافَرْتُ فِي العِلْمِ",
        "ur": "سَافَرْتُ فِي العِلْمِ"
      },
      {
        "en": "سَافَرْتُ عَالِماً",
        "ur": "سَافَرْتُ عَالِماً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, in 'صُمْتُ يَوْمَ الخَمِيسِ', how is 'يَوْمَ' parsed?",
    "ur": "تمرين 4 کے مطابق 'صُمْتُ يَوْمَ الخَمِيسِ' میں 'يَوْمَ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Maf'ool Feehi (Dharf Zamaan) Mansoob with Fatha (مفعول فيه - ظرف زمان منصوب بالفتحة)",
        "ur": "روزہ کے وقت کو بتانے کی بنا پر **مفعول فيه (ظرفِ زمان) منصوب بالفتحة**"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Maf'ool lahu",
        "ur": "مفعول لہ"
      },
      {
        "en": "Mubtada'",
        "ur": "مبتدأ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'جَلَسْتُ أَمَامَ الـمِحْرَابِ', how is 'أَمَامَ' parsed?",
    "ur": "جملے 'جَلَسْتُ أَمَامَ الـمِحْرَابِ' میں 'أَمَامَ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Maf'ool Feehi (Dharf Makān) Mansoob with Fatha (مفعول فيه - ظرف مكان منصوب بالفتحة)",
        "ur": "بیٹھنے کا مقام بتانے کی بنا پر **مفعول فيه (ظرفِ مکان) منصوب بالفتحة**"
      },
      {
        "en": "Maf'ool Mutlaq",
        "ur": "مفعول مطلق"
      },
      {
        "en": "Maf'ool ma'ahu",
        "ur": "مفعول معہ"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'سَافَرْتُ لَيْلاً وَجَلَسْتُ تَحْتَ الشَّجَرَةِ', identify the two Maf'ool Feehi adverbs:",
    "ur": "جملے 'سَافَرْتُ لَيْلاً وَجَلَسْتُ تَحْتَ الشَّجَرَةِ' میں دونوں مفعول فیہ (ظرف) کی نشان دہی کریں:",
    "options": [
      {
        "en": "'لَيْلاً' (Time Adverb) and 'تَحْتَ' (Place Adverb)",
        "ur": "'لَيْلاً' (ظرفِ زمان) اور 'تَحْتَ' (ظرفِ مکان)"
      },
      {
        "en": "'سافرت' and 'جلست'",
        "ur": "سافرت اور جلست"
      },
      {
        "en": "'الشجرة' and 'ليلا'",
        "ur": "الشجرة اور ليلا"
      },
      {
        "en": "None of the above",
        "ur": "ان میں سے کوئی نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In Exercise 5, in 'اسْتَيْقَظْتُ وَأَذَانَ الفَجْرِ', what type of Waw is used and how is 'أَذَانَ' parsed?",
    "ur": "تمرين 5 کے مطابق 'اسْتَيْقَظْتُ وَأَذَانَ الفَجْرِ' میں واؤ کی کون سی قسم ہے اور 'أَذَانَ' کا کیا اعراب ہے؟",
    "options": [
      {
        "en": "Waw al-Ma'iyyah (واو المعية), and 'أَذَانَ' is Maf'ool Ma'ahu Mansoob with Fatha",
        "ur": "واؤ المعیۃ (بمعنی ساتھ)، اور 'أَذَانَ' **مفعول معه منصوب بالفتحة**"
      },
      {
        "en": "Waw al-'Atf, and Adhāna is Ma'toof Marfoo'",
        "ur": "واؤ عاطفہ مع معطوف مرفوع"
      },
      {
        "en": "Waw al-Hāl",
        "ur": "واؤ حالیہ"
      },
      {
        "en": "Waw al-Qasam",
        "ur": "واؤ قسمیہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'كَيْفَ أَنْتَ وَالامْتِحَانَ؟', why is 'الامْتِحَانَ' Mansoob with Fatha?",
    "ur": "جملے 'كَيْفَ أَنْتَ وَالامْتِحَانَ؟' (آپ کا امتحان کے ساتھ کیا حال ہے؟) میں 'الامْتِحَانَ' کیوں منصوب ہے؟",
    "options": [
      {
        "en": "Maf'ool Ma'ahu Mansoob after Waw al-Ma'iyyah (مفعول معه منصوب بالفتحة بعد واو المعية)",
        "ur": "واؤ المعیۃ کے بعد واقع ہونے کی بنا پر **مفعول معه منصوب بالفتحة**"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Khabar",
        "ur": "خبر"
      },
      {
        "en": "Hal",
        "ur": "حال"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "In the Quranic verse 'فَأَجْمِعُوا أَمْرَكُمْ وَشُرَكَاءَكُمْ' (Qur'an 10:71), how is 'شُرَكَاءَكُمْ' parsed after Waw?",
    "ur": "قرآنی آیہ 'فَأَجْمِعُوا أَمْرَكُمْ وَشُرَكَاءَكُمْ' میں واؤ کے بعد 'شُرَكَاءَكُمْ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Maf'ool Ma'ahu Mansoob with Fatha after Waw al-Ma'iyyah (مفعول معه منصوب بالفتحة)",
        "ur": "واؤ المعیۃ کے بعد **مفعول معه منصوب بالفتحة**"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Mubtada'",
        "ur": "مبتدأ"
      },
      {
        "en": "Mudaf ilaihi",
        "ur": "مضاف الیہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'حَفِظَ الطَّالِبُ الدَّرْسَ حِفْظاً':",
    "ur": "پورے جملے 'حَفِظَ الطَّالِبُ الدَّرْسَ حِفْظاً' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "حَفِظَ: فعل ماضٍ، الطَّالِبُ: فاعل مرفوع بالضمة، الدَّرْسَ: مفعول به منصوب بالفتحة، حِفْظاً: مفعول مطلق منصوب بالفتحة",
        "ur": "حَفِظَ: فعلِ ماضی، الطَّالِبُ: فاعل مرفوع بالضمة، الدَّرْسَ: مفعول بہ منصوب، حِفْظاً: **مفعول مطلق منصوب بالفتحة**"
      },
      {
        "en": "حفظ: مبتدأ، الطالب: خبر، الدرس: مفعول بہ، حفظا: حال",
        "ur": "حفظ مبتدأ، الطالب خبر، الدرس مفعول بہ، حفظاً حال"
      },
      {
        "en": "حفظ: حرف، الطالب: اسم مجرور، الدرس: فاعل، حفظا: تمييز",
        "ur": "حفظ حرف، الطالب اسم مجرور، الدرس فاعل، حفظاً تمییز"
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
    "en": "Which statement accurately summarizes the core grammar rules taught in Lesson 28?",
    "ur": "سبق 28 کے بنیادی گرامر موضوعات کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers Al-Maf'ool Al-Mutlaq and its 3 types, Na'ib 'an al-Maf'ool al-Mutlaq, Al-Maf'ool Lahu (cause), Al-Maf'ool Feehi (time/place dharf), and Al-Maf'ool Ma'ahu (with Waw al-Ma'iyyah)",
        "ur": "اس سبق میں مفعول مطلق (اور اس کی 3 اقسام)، نائب عن المفعول المطلق، مفعول لہ (سبب)، مفعول فیہ (ظرف)، اور مفعول معہ (مع واؤ المعیۃ) کا کامل احاطہ کیا گیا ہے"
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
  console.log('🚀 Seeding Book 3 Lesson 28 Quiz...');
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

    // 3. Find or Create Lecture for Lesson 28
    let lectureId;
    const existingLec = await sql`
      SELECT id, title, order_index FROM lectures
      WHERE section_id = ${sectionId} AND order_index = 28
      LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 28 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 28', 28)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 28: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 28 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 28))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 28.`);
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

    // 5. Create the quiz for Book 3 Lesson 28
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 28 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 28 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
