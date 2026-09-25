import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is an 'Extra Preposition' (حَرْفُ الجَرِّ الزَّائِدُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'حرفِ جر زائد' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A preposition added for emphasis that does not alter the core sentence meaning and whose noun retains its original grammatical position (في محل)",
        "ur": "وہ حرفِ جر جو صرف تاکید کے لیے آئے، جس سے جملے کا بنیادی معنی نہیں بدلتا اور اسم کا اصلی ترکیبی موقع (محلاً) برقرار رہتا ہے"
      },
      {
        "en": "A preposition that changes a noun into an adverb of time",
        "ur": "وہ حرفِ جر جو اسم کو ظرفِ زمان میں بدل دے"
      },
      {
        "en": "A particle used strictly for negation",
        "ur": "وہ حرف جو صرف نفی کے لیے آئے"
      },
      {
        "en": "A conjunction connecting two independent verbs",
        "ur": "دو افعال کو ملانے والا حرفِ عطف"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the key grammatical effect of an Extra Preposition on the noun following it?",
    "ur": "حرفِ جر زائد کا اپنے بعد والے اسم پر لفظی اور محلی لحاظ سے کیا اثر ہوتا ہے؟",
    "options": [
      {
        "en": "It causes the noun to be Majroor in word form (لفظاً) while preserving its original position in place (محلاً)",
        "ur": "یہ اسم کو لفظاً مجرور کر دیتا ہے جبکہ محلاً اس کا اپنا اصلی اعرابی منصب (مرفوع/منصوب) باقی رہتا ہے"
      },
      {
        "en": "It permanently converts the noun into a Mudaf Ilayh",
        "ur": "یہ اسم کو مستقل مضاف الیہ بنا دیتا ہے"
      },
      {
        "en": "It makes the noun Mabni on Sukoon",
        "ur": "یہ اسم کو سکون پر مبنی کر دیتا ہے"
      },
      {
        "en": "It has no effect on word form or position at all",
        "ur": "اس کا لفظ یا محل پر کوئی اثر نہیں ہوتا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the two essential conditions for 'مِنْ' to function as an Extra Preposition (مِنْ الزَّائِدَةُ)?",
    "ur": "'مِنْ' کو حرفِ جر زائد بننے کے لیے کون سی دو بنیادی شرائط کا ہونا ضروری ہے؟",
    "options": [
      {
        "en": "It must be preceded by Negation/Prohibition/Interrogation (نفي/نهي/استفهام) AND its noun must be Indefinite (نكرة)",
        "ur": "اس سے پہلے نفی، نہی یا استفہام کا ہونا اور اس کے مجرور اسم کا اسمِ نکرہ ہونا"
      },
      {
        "en": "It must be preceded by an oath and its noun must be Definite",
        "ur": "اس سے پہلے قسم کا ہونا اور اس کا اسم معرفہ ہونا"
      },
      {
        "en": "Its noun must be a Proper Noun",
        "ur": "اس کا مجرور اسم اسمِ علم ہونا"
      },
      {
        "en": "It must be followed by a past tense verb",
        "ur": "اس کے بعد فعلِ ماضی کا ہونا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In which positions is 'البَاءُ الزَّائِدَةُ' (Extra Baa) most commonly used?",
    "ur": "عربی میں 'الباء الزائدة' (زائد باء) کن اعرابی مواقع پر سب سے زیادہ استعمال ہوتی ہے؟",
    "options": [
      {
        "en": "In Khabar of negated verbs 'لَيْسَ' and 'مَا', Fa'il of 'كَفَى', and in Mubtada'/Maf'ool Bihi",
        "ur": "'لَيْسَ' اور 'مَا' نافیہ کی خبر میں، 'كَفَى' کے فاعل پر، اور بعض مبتدأ یا مفعول بہ پر"
      },
      {
        "en": "Only after prepositions",
        "ur": "صرف حروفِ جر کے بعد"
      },
      {
        "en": "Only with dual nouns",
        "ur": "صرف تثنیہ اسماء کے ساتھ"
      },
      {
        "en": "Only at the beginning of an imperative verb",
        "ur": "صرف فعلِ امر کے شروع میں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is 'لَيْسَ زَيْدٌ بِقَائِمٍ' parsed grammatically?",
    "ur": "جملے 'لَيْسَ زَيْدٌ بِقَائِمٍ' کا کامل اعرابی تجزیہ کیا ہے؟",
    "options": [
      {
        "en": "زَيْدٌ: Ism Laisa Marfoo'; بِقَائِمٍ: Baa Za'idah, Qā'im: Khabar Laisa Majroor in word, Mansoob in position (مجرور لفظاً منصوب محلاً)",
        "ur": "زَيْدٌ: اسم لیس مرفوع؛ بِقَائِمٍ: باء زائدہ، قائم: خبر لیس مجرور لفظاً منصوب محلاً"
      },
      {
        "en": "زَيْدٌ: Mubtada', بِقَائِمٍ: Jar wa Majroor Khabar",
        "ur": "زید مبتدأ، بقائم جار مجرور خبر"
      },
      {
        "en": "زَيْدٌ: Fa'il, بِقَائِمٍ: Maf'ool Bihi",
        "ur": "زید فاعل، بقائم مفعول بہ"
      },
      {
        "en": "زَيْدٌ: Ism Laisa, بِقَائِمٍ: Badl",
        "ur": "زید اسم لیس، بقائم بدل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'كَفَى بِاللَّهِ شَهِيداً' (Qur'an 4:79), how is 'اللَّهِ' parsed?",
    "ur": "قرآنی آیہ 'كَفَى بِاللَّهِ شَهِيداً' میں اسمِ جلالہ 'اللَّهِ' کا کیا اعرابی موقع ہے؟",
    "options": [
      {
        "en": "Fa'il of 'كَفَى' Majroor in word due to Baa Za'idah, Marfoo' in position (فاعل مجرور لفظاً مرفوع محلاً)",
        "ur": "فعل 'كَفَى' کا فاعل بننے کی بنا پر مجرور لفظاً مرفوع محلاً"
      },
      {
        "en": "Maf'ool Bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Mubtada' Marfoo'",
        "ur": "مبتدأ مرفوع"
      },
      {
        "en": "Ism Majroor only",
        "ur": "صرف اسمِ مجرور"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What type of preposition is 'رُبَّ' classified as in Arabic grammar?",
    "ur": "عربی گرامر میں 'رُبَّ' کس قسم کا حرفِ جر شمار ہوتا ہے؟",
    "options": [
      {
        "en": "Shabih biz-Za'id (شَبِيهٌ بِالزَّائِدِ - resembling extra prepositions as it adds meaning like scarcity/abundance but requires no attachment)",
        "ur": "شبہ بالزائد (جو تقلیل/تکثیر کے معنی کا فائدہ دیتا ہے لیکن متعلق نہیں ہوتا)"
      },
      {
        "en": "Harf Jar Asli only",
        "ur": "صرف حرفِ جر اصلی"
      },
      {
        "en": "Harf Jar Za'id strictly",
        "ur": "صرف حرفِ جر زائد"
      },
      {
        "en": "Harf Atf",
        "ur": "حرفِ عطف"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the grammatical requirement for the noun following 'رُبَّ' (e.g., 'رُبَّ رَجُلٍ كَرِيمٍ لَقِيتُهُ')?",
    "ur": "حرفِ جر 'رُبَّ' کے بعد آنے والے اسم کا کیا حکم ہوتا ہے؟",
    "options": [
      {
        "en": "It MUST be an Indefinite Noun (اسم نكرة) and is Majroor in word form",
        "ur": "اس کا لازماً اسمِ نکرہ ہونا ضروری ہے جو لفظاً مجرور ہوتا ہے"
      },
      {
        "en": "It MUST be a Proper Noun (اسم علم)",
        "ur": "اس کا اسمِ علم ہونا واجب ہے"
      },
      {
        "en": "It must be defined with 'Al'",
        "ur": "اس پر 'ال' ہونا لازم ہے"
      },
      {
        "en": "It must be a plural pronoun",
        "ur": "اس کا ضمیرِ جمع ہونا لازم ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In which construction is 'الكَاَفُ الزَّائِدَةُ' (Extra Kaaf) classically found in the Qur'an?",
    "ur": "قرآنِ کریم میں 'الكاف الزائدة' (زائد کاف) کی سب سے معروف مثال کون سی ہے؟",
    "options": [
      {
        "en": "In 'لَيْسَ كَمِثْلِهِ شَيْءٌ' (Qur'an 42:11), attached to 'مِثْل' to emphasize negation of likeness",
        "ur": "آیت 'لَيْسَ كَمِثْلِهِ شَيْءٌ' میں لفظ 'مِثْل' پر، تاکہ نفیِ مثل کی تاکید ہو"
      },
      {
        "en": "In 'كَأَنَّهُ كَوْكَبٌ دُرِّيٌّ'",
        "ur": "آیت 'كأنه كوكب دري' میں"
      },
      {
        "en": "In 'فَكَانَ كَالطَّوْدِ العَظِيمِ'",
        "ur": "آیت 'فكان كالطود العظيم' میں"
      },
      {
        "en": "In 'كَمَا كَتَبْنَا'",
        "ur": "آیت 'كما كتبنا' میں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'اللاَّمُ الزَّائِدَةُ' (Extra Laam) and where does it occur?",
    "ur": "'اللام الزائدة' (زائد لام) کہاں اور کس لیے آتی ہے؟",
    "options": [
      {
        "en": "It is added for emphasis or to strengthen a weak verb/derived noun acting on its object (e.g., رَدِفَ لَكُمْ)",
        "ur": "یہ تاکید کے لیے یا کسی ضعیف عامل کو مفعول میں عمل کی تقویت دینے کے لیے آتی ہے (جیسے: رَدِفَ لَكُمْ)"
      },
      {
        "en": "It is used strictly for possession (الملك)",
        "ur": "یہ صرف ملکیت کے لیے آتی ہے"
      },
      {
        "en": "It is used for distance in demonstratives",
        "ur": "یہ اسمِ اشارہ میں بعد کے لیے آتی ہے"
      },
      {
        "en": "It is used to make a noun feminine",
        "ur": "یہ اسم کو مؤنث بنانے کے لیے آتی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, complete with Baa Za'idah: 'مَا حَامِدٌ ...' (Hamid is not lazy):",
    "ur": "تمرين 1 کے مطابق باءِ زائدہ سے جملہ مکمل کریں: 'مَا حَامِدٌ ...' (حامد سست نہیں ہے):",
    "options": [
      {
        "en": "بِكَسْلاَنَ (Bi-kaslāna - Majroor with Fatha due to Diptote)",
        "ur": "بِكَسْلاَنَ (ممنوع من الصرف ہونے کی وجہ سے فتحہ کے ساتھ مجرور لفظاً)"
      },
      {
        "en": "بِكَسْلاَنٍ",
        "ur": "بِكَسْلاَنٍ"
      },
      {
        "en": "كَسْلاَنُ",
        "ur": "كَسْلاَنُ"
      },
      {
        "en": "كَسْلاَناً",
        "ur": "كَسْلاَناً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'مَا هَذَا بِبَشَرٍ' (Qur'an 12:31), how is 'بَشَرٍ' parsed?",
    "ur": "قرآنی آیہ 'مَا هَذَا بِبَشَرٍ' میں لفظ 'بَشَرٍ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Khabar of 'مَا' al-Hijaziyyah Majroor in word form, Mansoob in position (خبر ما الحجازية مجرور لفظاً منصوب محلاً)",
        "ur": "ما حجازیہ کی خبر، مجرور لفظاً منصوب محلاً"
      },
      {
        "en": "Ism Ma Marfoo'",
        "ur": "ما کا اسم مرفوع"
      },
      {
        "en": "Badal",
        "ur": "بدل"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete: 'أَلَيْسَ اللَّهُ ... عَبْدَهُ' (Qur'an 39:36) with Baa Za'idah:",
    "ur": "قرآنی آیہ کو باءِ زائدہ کے ساتھ مکمل کریں: 'أَلَيْسَ اللَّهُ ... عَبْدَهُ':",
    "options": [
      {
        "en": "بِكَافٍ (Bi-kāfin - Majroor in word with estimated Kasra on omitted Yā')",
        "ur": "بِكَافٍ (حذف شدہ یاء پر کسرہ مقدرہ کے ساتھ مجرور لفظاً)"
      },
      {
        "en": "كافِياً",
        "ur": "كافِياً"
      },
      {
        "en": "كافِيٌ",
        "ur": "كافِيٌ"
      },
      {
        "en": "بِكافِياً",
        "ur": "بِكافِياً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'بِحَسْبِكَ دِرْهَمٌ' (A dirham is sufficient for you), why is Baa attached to 'حَسْبِ'?",
    "ur": "جملے 'بِحَسْبِكَ دِرْهَمٌ' میں 'حَسْبِ' پر باء کا کیا کردار ہے؟",
    "options": [
      {
        "en": "Baa Za'idah attached to Mubtada' 'حَسْبِ' (مبتدأ مجرور لفظاً مرفوع محلاً)",
        "ur": "مبتدأ 'حَسْبِ' پر باء زائدہ (مجرور لفظاً مرفوع محلاً)"
      },
      {
        "en": "Preposition attached to Khabar",
        "ur": "خبر پر داخل حرفِ جر"
      },
      {
        "en": "Baa attached to Fa'il",
        "ur": "فاعل پر داخل باء"
      },
      {
        "en": "Baa attached to Mudaf Ilayh",
        "ur": "مضاف الیہ پر داخل باء"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, complete with Min Za'idah: 'مَا جَاءَنَا مِنْ ...' (No giver of glad tidings came to us):",
    "ur": "تمرين 2 کے مطابق منِ زائدہ کے ساتھ جملہ مکمل کریں: 'مَا جَاءَنَا مِنْ ...':",
    "options": [
      {
        "en": "بَشِيرٍ (Bashīrin - Indefinite noun as Fa'il Majroor in word)",
        "ur": "بَشِيرٍ (فاعل مجرور لفظاً مرفوع محلاً)"
      },
      {
        "en": "البَشِيرِ",
        "ur": "البَشِيرِ"
      },
      {
        "en": "بَشِيرٌ",
        "ur": "بَشِيرٌ"
      },
      {
        "en": "بَشِيراً",
        "ur": "بَشِيراً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Why is 'مِنْ' considered EXTRA in 'مَا رَأَيْتُ مِنْ أَحَدٍ'?",
    "ur": "جملے 'مَا رَأَيْتُ مِنْ أَحَدٍ' میں 'مِنْ' کو زائد کیوں مانا جاتا ہے؟",
    "options": [
      {
        "en": "Because it is preceded by negation 'مَا' and its object 'أَحَدٍ' is an Indefinite noun acting as Maf'ool Bihi",
        "ur": "کیونکہ اس سے پہلے نفی 'ما' ہے اور اس کا مجرور اسم 'أحد' نکرہ ہو کر مفعول بہ بن رہا ہے"
      },
      {
        "en": "Because it is followed by a verb",
        "ur": "فعل کے بعد آنے کی وجہ سے"
      },
      {
        "en": "Because 'أحد' is definite",
        "ur": "أحد کے معرفہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it means 'from'",
        "ur": "بمعنی 'سے' ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'هَلْ مِنْ خَالِقٍ غَيْرُ اللَّهِ' (Qur'an 35:3), how is 'خَالِقٍ' parsed?",
    "ur": "قرآنی آیہ 'هَلْ مِنْ خَالِقٍ غَيْرُ اللَّهِ' میں لفظ 'خَالِقٍ' کا اعرابی موقع کیا ہے؟",
    "options": [
      {
        "en": "Mubtada' Majroor in word due to Min Za'idah after interrogation, Marfoo' in position (مبتدأ مجرور لفظاً مرفوع محلاً)",
        "ur": "استفہام کے بعد 'من زائدہ' کی وجہ سے مبتدأ مجرور لفظاً مرفوع محلاً"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Khabar",
        "ur": "خبر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Why is 'مِنْ' NOT extra in 'خَلَقَ الإِنْسَانَ مِنْ طِينٍ'?",
    "ur": "قرآنی آیہ 'خَلَقَ الإِنْسَانَ مِنْ طِينٍ' میں 'مِنْ' زائد کیوں نہیں ہے؟",
    "options": [
      {
        "en": "Because it expresses origin/material (حرف جر أصلي لِبيان الجِنْس) and is not preceded by negation/interrogation",
        "ur": "کیونکہ یہ حرفِ جر اصلی (بیانِ جنس کے لیے) ہے اور نفی/استفہام کے بعد نہیں آئی"
      },
      {
        "en": "Because 'طين' is masculine",
        "ur": "طین کے مذکر ہونے کی وجہ سے"
      },
      {
        "en": "Because it is inside a nominal sentence",
        "ur": "جملہ اسمیہ میں ہونے کی وجہ سے"
      },
      {
        "en": "Because it comes after Fa'il",
        "ur": "فاعل کے بعد آنے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, identify the function of Extra Kaaf in 'لَيْسَ كَمِثْلِهِ شَيْءٌ':",
    "ur": "تمرين 3 کے مطابق 'لَيْسَ كَمِثْلِهِ شَيْءٌ' میں زائد کاف کا کیا فائدہ ہے؟",
    "options": [
      {
        "en": "It reinforces and emphasizes the absolute denial of any likeness to Allah",
        "ur": "یہ اللہ تعالیٰ کی مثل و شباہت کی مطلق نفی میں تاکید پیدا کرتی ہے"
      },
      {
        "en": "It makes the sentence conditional",
        "ur": "یہ جملے کو شرطیہ بناتی ہے"
      },
      {
        "en": "It indicates physical location",
        "ur": "یہ جگہ بتاتی ہے"
      },
      {
        "en": "It converts the noun into a plural",
        "ur": "یہ اسم کو جمع بناتی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'رَدِفَ لَكُمْ' (Qur'an 27:72), why is Laam added before 'كُمْ'?",
    "ur": "قرآنی آیہ 'رَدِفَ لَكُمْ' میں 'كُمْ' سے پہلے لامِ زائدہ کیوں لائی گئی ہے؟",
    "options": [
      {
        "en": "Extra Laam to strengthen the verb's connection to its object (تَقْوِيَةٌ لِلْعَامِلِ)",
        "ur": "مفعول میں عاملِ فعل کو تقویت دینے کے لیے لائی گئی لامِ زائدہ"
      },
      {
        "en": "Laam of ownership",
        "ur": "ملکیت کی لام"
      },
      {
        "en": "Laam of oath",
        "ur": "قسم کی لام"
      },
      {
        "en": "Laam of imperative",
        "ur": "لامِ امر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Complete with Extra Laam: 'سَمِعْتُ لِـ ...' (I heard the caller):",
    "ur": "لامِ زائدہ کے ساتھ جملہ مکمل کریں: 'سَمِعْتُ لِـ ...':",
    "options": [
      {
        "en": "الـمُنَادِي (Al-Munādī - Maf'ool Bihi with Extra Laam)",
        "ur": "الـمُنَادِي (لامِ زائدہ کے ساتھ مفعول بہ)"
      },
      {
        "en": "مُنَادٍ",
        "ur": "مُنَادٍ"
      },
      {
        "en": "الـمُنَادِيُ",
        "ur": "الـمُنَادِيُ"
      },
      {
        "en": "مُنَادِياً",
        "ur": "مُنَادِياً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, complete: 'رُبَّ ... ضَارَّةٍ نَافِعَةٌ' (Many a harmful thing is beneficial):",
    "ur": "تمرين 4 کے مطابق 'رُبَّ' کے بعد درست اسمِ نکرہ منتخب کریں: 'رُبَّ ... ضَارَّةٍ نَافِعَةٌ':",
    "options": [
      {
        "en": "أَمْرٍ (Amrin - Indefinite noun Majroor in word)",
        "ur": "أَمْرٍ (اسمِ نکرہ مجرور لفظاً)"
      },
      {
        "en": "الأَمْرِ",
        "ur": "الأَمْرِ"
      },
      {
        "en": "أَمْرٌ",
        "ur": "أَمْرٌ"
      },
      {
        "en": "أَمْراً",
        "ur": "أَمْراً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'رُبَّ رَجُلٍ كَرِيمٍ لَقِيتُهُ', how is 'رَجُلٍ' parsed?",
    "ur": "جملے 'رُبَّ رَجُلٍ كَرِيمٍ لَقِيتُهُ' میں 'رَجُلٍ' کا اعرابی موقع کیا ہے؟",
    "options": [
      {
        "en": "Mubtada' Majroor in word due to Shabih biz-Za'id 'رُبَّ', Marfoo' in position",
        "ur": "شبہ بالزائد 'رُبَّ' کی وجہ سے مبتدأ مجرور لفظاً مرفوع محلاً"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
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
    "part": "Exercise 4",
    "en": "What happens when 'مَا' is attached to 'رُبَّ' (e.g., 'رُبَمَا يَنْجَحُ الكَسْلاَنُ')?",
    "ur": "جب 'رُبَّ' کے ساتھ 'مَا' مل جائے ('رُبَمَا') تو اس کے عمل پر کیا اثر پڑتا ہے؟",
    "options": [
      {
        "en": "'مَا' renders 'رُبَّ' inactive (كَافَّةٌ) so it no longer causes Jar and can enter upon verbs",
        "ur": "'مَا' کافہ ہو کر 'رُبَّ' کے عملِ جر کو باطل کر دیتی ہے اور وہ افعال پر بھی داخل ہو سکتی ہے"
      },
      {
        "en": "It doubles the Jar operation",
        "ur": "یہ عملِ جر کو دوگنا کر دیتی ہے"
      },
      {
        "en": "It converts 'رب' into a conditional noun",
        "ur": "یہ رب کو اسمِ شرط بنا دیتی ہے"
      },
      {
        "en": "No change occurs",
        "ur": "کوئی تبدیلی نہیں آتی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَكَفَى بِاللَّهِ وَكِيلاً' (Qur'an 4:81), what is 'وَكِيلاً'?",
    "ur": "قرآنی آیہ 'وَكَفَى بِاللَّهِ وَكِيلاً' میں لفظ 'وَكِيلاً' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Tamyeez Mansoob with Fatha (تمييز منصوب بالفتحة)",
        "ur": "تمیز منصوب بالفتحة"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
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
    "en": "In the Quranic verse 'مَا لَكُمْ مِنْ إِلَهٍ غَيْرُهُ' (Qur'an 7:59), why is 'إِلَهٍ' Majroor in word form?",
    "ur": "قرآنی آیہ 'مَا لَكُمْ مِنْ إِلَهٍ غَيْرُهُ' میں لفظ 'إِلَهٍ' لفظاً مجرور کیوں ہے؟",
    "options": [
      {
        "en": "Because 'مِنْ' is an Extra Preposition after negation 'مَا', making 'إِلَهٍ' the Mubtada' (مجرور لفظاً مرفوع محلاً)",
        "ur": "نفی 'ما' کے بعد 'من زائدہ' آنے کی وجہ سے (مبتدأ مجرور لفظاً مرفوع محلاً)"
      },
      {
        "en": "Because it is Mudaf Ilayh",
        "ur": "مضاف الیہ ہونے کی وجہ سے"
      },
      {
        "en": "Because of preposition of place",
        "ur": "ظرف کی وجہ سے"
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
    "en": "In 'أَلَيْسَ اللَّهُ بِأَحْكَمِ الحَاكِمِينَ' (Qur'an 95:8), why does 'بِأَحْكَمِ' take a Kasra despite being Diptote (ممنوع من الصرف)?",
    "ur": "آیت 'أَلَيْسَ اللَّهُ بِأَحْكَمِ الحَاكِمِينَ' میں 'أَحْكَمِ' غیر منصرف ہونے کے باوجود کسرہ کیوں لے رہا ہے؟",
    "options": [
      {
        "en": "Because it is MUDAF to 'الحَاكِمِينَ', which restores the regular Kasra ending",
        "ur": "اسمِ 'الحَاكِمِينَ' کی طرف مضاف ہونے کی وجہ سے کسرہ لوٹ آیا ہے"
      },
      {
        "en": "Because of Baa Za'idah",
        "ur": "باء زائدہ کی وجہ سے"
      },
      {
        "en": "Because it is Marfoo'",
        "ur": "مرفوع ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Khabar Inna",
        "ur": "انّ کی خبر ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'مَا جَاءَنَا مِنْ أَحَدٍ':",
    "ur": "پورے جملے 'مَا جَاءَنَا مِنْ أَحَدٍ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "مَا: نافية، جَاءَ: فعل ماضٍ، نَا: مفعول به، مِنْ: حرف جر زائد، أَحَدٍ: فاعل مجرور لفظاً مرفوع محلاً",
        "ur": "مَا: نفی کا حرف، جَاءَ: فعل ماضی، نَا: مفعول بہ، مِنْ: حرفِ جر زائد، أَحَدٍ: فاعل مجرور لفظاً مرفوع محلاً"
      },
      {
        "en": "ما: موصولة، جاء: فعل، نا: فاعل، من: حرف جر، أحد: اسم مجرور",
        "ur": "ما موصولہ، جاء فعل، نا فاعل، من حرف جر، احد اسم مجرور"
      },
      {
        "en": "ما: استفهامية، جاءنا: خبر، من: زائدة، أحد: مبتدأ",
        "ur": "ما استفہامیہ، جاءنا خبر، من زائدہ، احد مبتدأ"
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
    "en": "Parse the full sentence: 'لَيْسَ الطَّالِبُ بِكَسْلاَنَ':",
    "ur": "پورے جملے 'لَيْسَ الطَّالِبُ بِكَسْلاَنَ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "لَيْسَ: فعل ماضٍ ناقص، الطَّالِبُ: اسمها مرفوع، بِـ: حرف جر زائد، كَسْلاَنَ: خبرها مجرور لفظاً بالفتحة لأنه ممنوع من الصرف، منصوب محلاً",
        "ur": "لَيْسَ: فعلِ ناقص، الطَّالِبُ: اسم لیس مرفوع، بِـ: حرفِ جر زائد، كَسْلاَنَ: خبر لیس مجرور لفظاً بالفتحة (ممنوع من الصرف)، منصوب محلاً"
      },
      {
        "en": "ليس: مبتدأ، الطالب: خبر، بكسلان: جار ومجرور",
        "ur": "لیس مبتدأ، الطالب خبر، بكسلان جار مجرور"
      },
      {
        "en": "ليس: حرف، الطالب: فاعل، بكسلان: مفعول به",
        "ur": "لیس حرف، الطالب فاعل، بكسلان مفعول بہ"
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
    "en": "Which statement accurately summarizes the core rule of Extra Prepositions in Arabic grammar?",
    "ur": "عربی زبان میں حروفِ جر زائدہ کے بنیادی قاعدے کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "They do NOT affect the syntactic function (محلاً) of the noun, but render it Majroor in word form (لفظاً) for stylistic emphasis",
        "ur": "وہ اسم کی بنیادی ترکیبی حالت (محلاً) کو تبدیل نہیں کرتے، بلکہ صرف تاکید کے لیے لفظی طور پر (لفظاً) اسم کو مجرور کرتے ہیں"
      },
      {
        "en": "They convert all verbs into past tense",
        "ur": "وہ تمام افعال کو ماضی میں بدل دیتے ہیں"
      },
      {
        "en": "They make all nouns Marfoo' in place and word",
        "ur": "وہ تمام اسماء کو لفظاً و محلاً مرفوع کرتے ہیں"
      },
      {
        "en": "They can only be used with numbers",
        "ur": "وہ صرف اعداد کے ساتھ استعمال ہو سکتے ہیں"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 17 Quiz ---');
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

    // 3. Find or Create Lecture 17 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 17 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 17 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 17', 17)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 17: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 17 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 17))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 17.`);
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

    // 5. Create the quiz for Book 3 Lesson 17
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 17 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 17 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
