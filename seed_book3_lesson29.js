import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is 'Al-Ḥāl' (الحَالُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'حال' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A Mansoob noun that describes the state or condition of the Subject (فاعل) or Object (مفعول) when the action occurs",
        "ur": "وہ اسمِ منصوب جو فعل کے وقوع کے وقت فاعل یا مفعول (صاحبِ حال) کی حالت کو ظاہر کرے"
      },
      {
        "en": "A noun indicating the place of action only",
        "ur": "صرف فعل کا مقام بتانے والا اسم"
      },
      {
        "en": "A particle used for prohibition",
        "ur": "نہی کا حرف"
      },
      {
        "en": "A verb in passive voice",
        "ur": "مجہول فعل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the primary grammatical case (إعراب) of Al-Ḥāl?",
    "ur": "اسمِ حال کا بنیادی اعرابی حکم کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Al-Ḥāl is ALWAYS Mansoob (الحَالُ مَنْصُوبَةٌ دَائِماً)",
        "ur": "حال ہمیشہ **منصوب** ہوتا ہے (الحال منصوبة دائماً)"
      },
      {
        "en": "Al-Ḥāl is always Marfoo'",
        "ur": "حال ہمیشہ مرفوع ہوتا ہے"
      },
      {
        "en": "Al-Ḥāl is always Majroor",
        "ur": "حال ہمیشہ مجرور ہوتا ہے"
      },
      {
        "en": "Al-Ḥāl is Mabni on Sukoon",
        "ur": "حال سکون پر مبنی ہوتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What state of definiteness is typically required for 'Ṣāḥib al-Ḥāl' (صَاحِبُ الحَالِ)?",
    "ur": "'صاحبِ حال' (جس کی حالت بیان کی جا رہی ہو) کا معرفہ یا نکرہ ہونا کیا حکم رکھتا ہے؟",
    "options": [
      {
        "en": "Ṣāḥib al-Ḥāl is typically DEFINITE (مَعْرِفَةٌ غَالِباً)",
        "ur": "صاحبِ حال عموماً **معرفہ** (Definite) ہوتا ہے"
      },
      {
        "en": "Ṣāḥib al-Ḥāl must always be Indefinite (نكرة)",
        "ur": "صاحب حال کا نکرہ ہونا واجب ہے"
      },
      {
        "en": "Ṣāḥib al-Ḥāl must be a verb",
        "ur": "صاحب حال کا فعل ہونا واجب ہے"
      },
      {
        "en": "Ṣāḥib al-Ḥāl must be a particle",
        "ur": "صاحب حال کا حرف ہونا واجب ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the four primary structural types of Al-Ḥāl (أَنْوَاعُ الحَالِ)?",
    "ur": "حال کی چار بنیادی ساختگی اقسام کون سی ہیں؟",
    "options": [
      {
        "en": "1. Mufredah (مفردة), 2. Jumlah Ismiyyah (جملة اسمية), 3. Jumlah Fi'liyyah (جملة فعلية), 4. Shibah Jumlah (شبه جملة)",
        "ur": "1. مفردہ (اسم مفرد)، 2. جملہ اسمیہ، 3. جملہ فعلیہ، 4. شبه جملہ (ظرف/جار مجرور)"
      },
      {
        "en": "1. Past, 2. Present, 3. Future, 4. Imperative",
        "ur": "1. ماضی، 2. مضارع، 3. مستقبل، 4. امر"
      },
      {
        "en": "1. Marfoo', 2. Mansoob, 3. Majroor, 4. Majzoom",
        "ur": "1. مرفوع، 2. منصوب، 3. مجرور، 4. مجزوم"
      },
      {
        "en": "1. Singular, 2. Dual, 3. Plural, 4. Diptote",
        "ur": "1. مفرد، 2. تثنیہ، 3. جمع، 4. غیر منصرف"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'جَاءَ الطَّالِبُ ضَاحِكاً', what type of Ḥāl is 'ضَاحِكاً' and how does it agree with Ṣāḥib al-Ḥāl?",
    "ur": "جملے 'جَاءَ الطَّالِبُ ضَاحِكاً' میں 'ضَاحِكاً' حال کی کون سی قسم ہے اور اس کی صاحبِ حال سے کیا مطابقت ہے؟",
    "options": [
      {
        "en": "Ḥāl Mufredah, agreeing with Ṣāḥib al-Ḥāl ('الطَّالِبُ') in gender (masculine) and number (singular)",
        "ur": "حالِ مفردہ، جو مذکر اور واحد ہونے میں اپنے صاحبِ حال ('الطالب') کے مطابق ہے"
      },
      {
        "en": "Ḥāl Jumlah Ismiyyah",
        "ur": "حال جملہ اسمیہ"
      },
      {
        "en": "Ḥāl Shibah Jumlah",
        "ur": "حال شبه جملہ"
      },
      {
        "en": "Sifah for the verb",
        "ur": "فعل کی صفت"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'جَاءَ الطَّالِبُ وَهُوَ يَبْتَسِمُ', what acts as the link (الرَّابِطُ) between the Ḥāl clause and Ṣāḥib al-Ḥāl?",
    "ur": "جملے 'جَاءَ الطَّالِبُ وَهُوَ يَبْتَسِمُ' میں جملہ حالیہ اور صاحبِ حال کے درمیان رابط (ربط جوڑنے والی چیز) کیا ہے؟",
    "options": [
      {
        "en": "Both Waw al-Ḥāl and the Pronoun together (الوَاوُ وَالضَّمِيرُ مَعاً: 'وَ' + 'هُوَ')",
        "ur": "واوُ الحال اور الضمير دونوں مل کر (الواو والضمير معا: 'وَ' + 'هُوَ')"
      },
      {
        "en": "Waw al-Ḥāl alone without pronoun",
        "ur": "صرف واو الحال"
      },
      {
        "en": "The verb 'يَبْتَسِمُ' alone",
        "ur": "صرف فعل یبتسم"
      },
      {
        "en": "There is no link needed",
        "ur": "کسی رابط کی ضرورت نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When Ḥāl is a Jumlah Fi'liyyah starting with a Past Verb (فعل ماضٍ, e.g., 'وَقَدْ ضَحِكَ'), what particle is typically attached?",
    "ur": "جب حال ایسا جملہ فعلیہ ہو جو فعلِ ماضی سے شروع ہو (مثلاً 'وَقَدْ ضَحِكَ') تو اس کے ساتھ عموماً کون سا حرف لایا جاتا ہے؟",
    "options": [
      {
        "en": "The particle 'قَدْ' attached after Waw al-Ḥāl (وَقَدْ + ماضی)",
        "ur": "واو الحال کے بعد حرف **'قَدْ'** لایا جاتا ہے (وَقَدْ + فعلِ ماضی)"
      },
      {
        "en": "The particle 'سَوْفَ'",
        "ur": "حرف سوف"
      },
      {
        "en": "The particle 'أَنْ'",
        "ur": "حرف ان"
      },
      {
        "en": "The prohibition particle 'لاَ'",
        "ur": "حرفِ نہی لا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What famous grammatical rule governs sentences and quasi-sentences (الجمل وشبه الجمل) after definite vs indefinite nouns?",
    "ur": "معرفہ اور نکرہ اسماء کے بعد واقع ہونے والے جملوں اور شبه جملوں کا مشہور زریں قاعدہ کیا ہے؟",
    "options": [
      {
        "en": "'Sentences and quasi-sentences after DEFINITES are Ḥāl (أَحْوَالٌ), and after INDEFINITES are Attributes (صِفَاتٌ)'",
        "ur": "'معرفہ اسماء کے بعد جملے اور شبه جملے **حال** بنتے ہیں، اور نکرہ اسماء کے بعد **صفات** بنتے ہیں'"
      },
      {
        "en": "All sentences after nouns are Khabar",
        "ur": "اسم کے بعد تمام جملے خبر ہوتے ہیں"
      },
      {
        "en": "All sentences after nouns are Mudaf Ilaihi",
        "ur": "تمام جملے مضاف الیہ ہوتے ہیں"
      },
      {
        "en": "There is no distinction between definite and indefinite",
        "ur": "معرفہ و نکرہ میں کوئی فرق نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'رَأَيْتُ الهِلاَلَ بَيْنَ السَّحَابِ', what type of Ḥāl is 'بَيْنَ السَّحَابِ'?",
    "ur": "جملے 'رَأَيْتُ الهِلاَلَ بَيْنَ السَّحَابِ' میں 'بَيْنَ السَّحَابِ' حال کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Ḥāl Shibah Jumlah Dharf (شِبْهُ جُمْلَةٍ ظَرْفٌ) in position of Nasb",
        "ur": "حالِ شبه جملہ (ظرف) منصوب محلاً (في محل نصب)"
      },
      {
        "en": "Ḥāl Mufredah",
        "ur": "حالِ مفردہ"
      },
      {
        "en": "Ḥāl Jumlah Ismiyyah",
        "ur": "حالِ جملہ اسمیہ"
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
    "en": "Is it permissible for Al-Ḥāl to precede its Ṣāḥib al-Ḥāl or verb (e.g., 'جَاءَ ضَاحِكاً الطَّالِبُ')?",
    "ur": "کیا حال کا اپنے صاحبِ حال یا فعل سے پہلے مقدم ہونا (جیسے: 'جَاءَ ضَاحِكاً الطَّالِبُ') جائز ہے؟",
    "options": [
      {
        "en": "Yes, it is permissible to advance Al-Ḥāl before Ṣāḥib al-Ḥāl or verb for rhetorical emphasis",
        "ur": "جی ہاں! بلاغتی تاکید و حصر کے لیے حال کا اپنے صاحبِ حال یا فعل پر مقدم ہونا جائز ہے"
      },
      {
        "en": "No, it is strictly forbidden in all cases",
        "ur": "نہیں! یہ ہر حال میں ناجائز ہے"
      },
      {
        "en": "It is allowed only in poetry",
        "ur": "صرف شاعری میں جائز ہے"
      },
      {
        "en": "It changes the verb into passive",
        "ur": "یہ فعل کو مجہول بنا دیتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, in 'رَجَعَ الجَيْشُ مُنْتَصِراً', identify Al-Ḥāl and Ṣāḥib al-Ḥāl:",
    "ur": "تمرين 1 کے مطابق 'رَجَعَ الجَيْشُ مُنْتَصِراً' میں حال اور صاحبِ حال کی نشان دہی کریں:",
    "options": [
      {
        "en": "Al-Ḥāl is 'مُنْتَصِراً' (Mansoob), and Ṣāḥib al-Ḥāl is 'الجَيْشُ' (Marfoo' Subject)",
        "ur": "حال: 'مُنْتَصِراً' (منصوب)، اور صاحبِ حال: 'الجَيْشُ' (فاعلِ مرفوع)"
      },
      {
        "en": "Al-Ḥāl is 'الجَيْشُ', and Ṣāḥib al-Ḥāl is 'مُنْتَصِراً'",
        "ur": "حال 'الجيش' اور صاحب حال 'منتصراً' ہے"
      },
      {
        "en": "Al-Ḥāl is 'رَجَعَ'",
        "ur": "حال 'رجع' ہے"
      },
      {
        "en": "There is no Ḥāl in this sentence",
        "ur": "کوئی حال نہیں ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Change Ḥāl Mufredah to Dual Masculine: 'جَاءَ الطَّالِبَانِ ...' (arrived laughing):",
    "ur": "جملے 'جَاءَ الطَّالِبَانِ ...' میں حالِ مفردہ کو تثنیہ مذكر کی درست شکل میں مکمل کریں:",
    "options": [
      {
        "en": "جَاءَ الطَّالِبَانِ ضَاحِكَيْنِ (Ḍāḥikaini - Mansoob with Yā' for Dual)",
        "ur": "جَاءَ الطَّالِبَانِ ضَاحِكَيْنِ (تثنیہ ہونے کی بنا پر یاء کے ساتھ منصوب)"
      },
      {
        "en": "جَاءَ الطَّالِبَانِ ضَاحِكَانِ",
        "ur": "جَاءَ الطَّالِبَانِ ضَاحِكَانِ"
      },
      {
        "en": "جَاءَ الطَّالِبَانِ ضَاحِكٌ",
        "ur": "جَاءَ الطَّالِبَانِ ضَاحِكٌ"
      },
      {
        "en": "جَاءَ الطَّالِبَانِ ضَاحِكِينَ",
        "ur": "جَاءَ الطَّالِبَانِ ضَاحِكِينَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Change Ḥāl Mufredah to Sound Masculine Plural: 'عَادَ الـمُسَافِرُونَ ...' (returned safe):",
    "ur": "جملے 'عَادَ الـمُسَافِرُونَ ...' میں حال کو جمع مذكر سالم کی منصوب شکل سے مکمل کریں:",
    "options": [
      {
        "en": "عَادَ الـمُسَافِرُونَ سَالِمِينَ (Sālimīna - Mansoob with Yā' for Plural)",
        "ur": "عَادَ الـمُسَافِرُونَ سَالِمِينَ (جمع مذكر سالم کا اعرابِ نصب یاء کے ساتھ)"
      },
      {
        "en": "عَادَ الـمُسَافِرُونَ سَالِمُونَ",
        "ur": "عَادَ الـمُسَافِرُونَ سَالِمُونَ"
      },
      {
        "en": "عَادَ الـمُسَافِرُونَ سَالِمٍ",
        "ur": "عَادَ الـمُسَافِرُونَ سَالِمٍ"
      },
      {
        "en": "عَادَ الـمُسَافِرُونَ سَالِمَانِ",
        "ur": "عَادَ الـمُسَافِرُونَ سَالِمَانِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'رَأَيْتُ الطَّالِبَاتِ مَسْرُورَاتٍ', why does Al-Ḥāl 'مَسْرُورَاتٍ' end with Kasra?",
    "ur": "جملے 'رَأَيْتُ الطَّالِبَاتِ مَسْرُورَاتٍ' میں حال 'مَسْرُورَاتٍ' کے نیچے کسرہ کیوں ہے؟",
    "options": [
      {
        "en": "Because it is Sound Feminine Plural (جمع مؤنث سالم) which takes Kasra instead of Fatha in Nasb",
        "ur": "کیونکہ یہ جمع مؤنث سالم ہے جو حالتِ نصب میں فتحہ کے بدلے کسرہ قبول کرتی ہے"
      },
      {
        "en": "Because it is Majroor by a preposition",
        "ur": "حرفِ جر کی وجہ سے مجرور"
      },
      {
        "en": "Because it is Mudaf Ilaihi",
        "ur": "مضاف الیہ ہونے کی وجہ سے"
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
    "en": "In Exercise 2, in 'خَرَجُوا وَهُمْ فَرِحُونَ', how is the Ḥāl clause 'وَهُمْ فَرِحُونَ' parsed?",
    "ur": "تمرين 2 کے مطابق 'خَرَجُوا وَهُمْ فَرِحُونَ' میں جملہ حالیہ 'وَهُمْ فَرِحُونَ' کا اعرابی موقع کیا ہے؟",
    "options": [
      {
        "en": "Nominal Sentence in position of Nasb as Ḥāl (جملة اسمية في محل نصب حال)",
        "ur": "جملہ اسمیہ حال ہو کر منصوب محلاً (في محل نصب حال)"
      },
      {
        "en": "Verbal Sentence in position of Raf'",
        "ur": "جملہ فعلیہ مرفوع محلاً"
      },
      {
        "en": "Sifah for the Subject",
        "ur": "فاعل کی صفت"
      },
      {
        "en": "Khabar for the verb",
        "ur": "فعل کی خبر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'دَخَلْتُ الـمَسْجِدَ وَالإِمَامُ يَقْرَأُ', what is the link (الرَّابِطُ) connecting Ḥāl clause to Ṣāḥib al-Ḥāl?",
    "ur": "جملے 'دَخَلْتُ الـمَسْجِدَ وَالإِمَامُ يَقْرَأُ' میں جملہ حالیہ کا صاحبِ حال سے ربط کیا ہے؟",
    "options": [
      {
        "en": "Waw al-Ḥāl alone (الوَاوُ فَقَطْ)",
        "ur": "صرف واوُ الحال (الواو فقط)"
      },
      {
        "en": "Pronoun alone",
        "ur": "صرف الضمیر"
      },
      {
        "en": "Both Waw and Pronoun",
        "ur": "الواو والضمیر معا"
      },
      {
        "en": "No link exists",
        "ur": "کوئی رابط نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'جَاءَ عَلِيٌّ يَبْتَسِمُ', what is the link (الرَّابِطُ) in this Ḥāl clause?",
    "ur": "جملے 'جَاءَ عَلِيٌّ يَبْتَسِمُ' (علی مسکراتے ہوئے آیا) میں ربط کا کام کون کر رہا ہے؟",
    "options": [
      {
        "en": "The hidden pronoun 'هُوَ' inside 'يَبْتَسِمُ' returning to 'عَلِيٌّ' (الضَّمِيرُ فَقَطْ)",
        "ur": "فعل 'یبتسم' کے اندر مستتر ضمیر 'هو' جو علی کی طرف لوٹ رہی ہے (الضمير فقط)"
      },
      {
        "en": "Waw al-Ḥāl",
        "ur": "واو الحال"
      },
      {
        "en": "The word 'عليّ'",
        "ur": "لفظ علی"
      },
      {
        "en": "Preposition",
        "ur": "حرفِ جر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Convert 'جَاءَ الطَّالِبُ يَرْكَبُ الحَافِلَةَ' into Ḥāl Mufredah:",
    "ur": "جملے 'جَاءَ الطَّالِبُ يَرْكَبُ الحَافِلَةَ' (جملہ فعلیہ) کو حالِ مفردہ میں تبدیل کریں:",
    "options": [
      {
        "en": "جَاءَ الطَّالِبُ رَاكِباً الحَافِلَةَ (Rākiban al-ḥāfilata)",
        "ur": "جَاءَ الطَّالِبُ رَاكِباً الحَافِلَةَ"
      },
      {
        "en": "جَاءَ الطَّالِبُ وَهُوَ يَرْكَبُ",
        "ur": "جَاءَ الطَّالِبُ وَهُوَ يَرْكَبُ"
      },
      {
        "en": "جَاءَ الطَّالِبُ مَرْكُوباً",
        "ur": "جَاءَ الطَّالِبُ مَرْكُوباً"
      },
      {
        "en": "جَاءَ رَاكِبٌ الطَّالِبُ",
        "ur": "جَاءَ رَاكِبٌ الطَّالِبُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, in 'شَاهَدْتُ الإِمَامَ عَلَى الـمِنْبَرِ', what type of Ḥāl is 'عَلَى الـمِنْبَرِ'?",
    "ur": "تمرين 3 کے مطابق 'شَاهَدْتُ الإِمَامَ عَلَى الـمِنْبَرِ' میں 'عَلَى الـمِنْبَرِ' حال کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Ḥāl Shibah Jumlah Jar wa Majroor (شِبْهُ جُمْلَةٍ جَارٌّ وَمَجْرُورٌ) in position of Nasb",
        "ur": "حالِ شبه جملہ (جار و مجرور) منصوب محلاً (في محل نصب حال)"
      },
      {
        "en": "Ḥāl Mufredah",
        "ur": "حالِ مفردہ"
      },
      {
        "en": "Ḥāl Jumlah Ismiyyah",
        "ur": "حالِ جملہ اسمیہ"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'رَأَيْتُ الطَّائِرَ بَيْنَ الأَغْصَانِ', how is 'بَيْنَ' parsed?",
    "ur": "جملے 'رَأَيْتُ الطَّائِرَ بَيْنَ الأَغْصَانِ' میں لفظ 'بَيْنَ' کا کیا اعرابی منصب ہے؟",
    "options": [
      {
        "en": "Dharf Makān Mansoob forming Shibah Jumlah Ḥāl for 'الطَّائِرَ'",
        "ur": "'الطائر' کے لیے شبه جملہ حال بنانے والا **ظرفِ مکان منصوب**"
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
        "en": "Harf Jarr",
        "ur": "حرفِ جر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'أَبْصَرْتُ الهِلاَلَ بَيْنَ السَّحَابِ', what is the Ṣāḥib al-Ḥāl?",
    "ur": "جملے 'أَبْصَرْتُ الهِلاَلَ بَيْنَ السَّحَابِ' میں صاحبِ حال کون سا لفظ ہے؟",
    "options": [
      {
        "en": "The Definite Object 'الهِلاَلَ'",
        "ur": "مفعول بہ معرفہ **'الهِلاَلَ'**"
      },
      {
        "en": "The verb 'أبصرت'",
        "ur": "فعل أبصرت"
      },
      {
        "en": "The word 'السحاب'",
        "ur": "لفظ السحاب"
      },
      {
        "en": "The pronoun 'ت' in أبصرت",
        "ur": "ضمير ت"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, compare 'رَأَيْتُ طَائِراً يُغَرِّدُ' vs 'رَأَيْتُ الطَّائِرَ يُغَرِّدُ'. What is 'يُغَرِّدُ' in each?",
    "ur": "تمرين 4 کے مطابق 'رَأَيْتُ طَائِراً يُغَرِّدُ' اور 'رَأَيْتُ الطَّائِرَ يُغَرِّدُ' میں فعل 'يُغَرِّدُ' کا کیا بالترتیب اعرابی منصب ہے؟",
    "options": [
      {
        "en": "In 1st: Sifah/Na't for indefinite 'طَائِراً'; in 2nd: Ḥāl for definite 'الطَّائِرَ'",
        "ur": "پہلے میں: نکرہ 'طَائِراً' کی **صفت/نعت**؛ دوسرے میں: معرفہ 'الطَّائِرَ' کا **حال**"
      },
      {
        "en": "In both it is Ḥāl",
        "ur": "دونوں میں حال ہے"
      },
      {
        "en": "In both it is Sifah",
        "ur": "دونوں میں صفت ہے"
      },
      {
        "en": "In both it is Khabar",
        "ur": "دونوں میں خبر ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Transform the Sifah clause into a Ḥāl clause: 'سَمِعْتُ طِفْلاً يَبْكِي':",
    "ur": "جملہ نعت 'سَمِعْتُ طِفْلاً يَبْكِي' کو صاحبِ حال کو معرفہ بنا کر جملہ حالیہ میں تبدیل کریں:",
    "options": [
      {
        "en": "سَمِعْتُ الطِّفْلَ يَبْكِي (Samii'tu at-tifla yabkī - making child definite)",
        "ur": "سَمِعْتُ الطِّفْلَ يَبْكِي (طفل کو معرفہ بنا کر)"
      },
      {
        "en": "سَمِعْتُ طِفْلاً باَكِياً",
        "ur": "سَمِعْتُ طِفْلاً باَكِياً"
      },
      {
        "en": "سَمِعْتُ الطفلَ البَاكِيَ",
        "ur": "سَمِعْتُ الطفلَ البَاكِيَ"
      },
      {
        "en": "طفل يبكي سمعت",
        "ur": "طفل يبكي سمعت"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Why is a sentence following an INDEFINITE noun parsed as Sifah (صفة) rather than Ḥāl?",
    "ur": "نکرہ اسم کے بعد آنے والا جملہ حال کے بجائے صفت (نعت) کیوں بنتا ہے؟",
    "options": [
      {
        "en": "Because Ṣāḥib al-Ḥāl MUST be Definite; an indefinite noun requires a modifying Sifah to describe it",
        "ur": "کیونکہ صاحبِ حال کا معرفہ ہونا شرط ہے، اور نکرہ اسم اپنے بعد وضاحت کے لیے صفت کا محتاج ہوتا ہے"
      },
      {
        "en": "Because Ḥāl cannot be a sentence",
        "ur": "کیونکہ حال جملہ نہیں بن سکتا"
      },
      {
        "en": "Because Sifah is always Marfoo'",
        "ur": "کیونکہ صفت ہمیشہ مرفوع ہوتی ہے"
      },
      {
        "en": "There is no grammatical rule for this",
        "ur": "اس کا کوئی نحوی قاعدہ نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَلاَ تَعْثَوْ فِي الأَرْضِ مُفْسِدِينَ' (Qur'an 2:60), how is 'مُفْسِدِينَ' parsed?",
    "ur": "قرآنی آیہ 'وَلاَ تَعْثَوْ فِي الأَرْضِ مُفْسِدِينَ' میں لفظ 'مُفْسِدِينَ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Al-Ḥāl Mansoob with Yā' for Sound Masculine Plural (حال منصوبة بالياء لأنها جمع مذكر سالم)",
        "ur": "جمع مذكر سالم ہونے کی بنا پر **یاء کے ساتھ حالِ منصوب**"
      },
      {
        "en": "Maf'ool bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Na't Majroor",
        "ur": "نعت مجرور"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic prohibition 'وَلَا تَقْرَبُوا الصَّلَاةَ وَأَنْتُمْ سُكَارَى' (Qur'an 4:43), what is the Ḥāl clause?",
    "ur": "قرآنی آیہ 'وَلَا تَقْرَبُوا الصَّلَاةَ وَأَنْتُمْ سُكَارَى' میں جملہ حالیہ کون سا ہے؟",
    "options": [
      {
        "en": "The Nominal Sentence 'وَأَنْتُمْ سُكَارَى' in position of Nasb as Ḥāl (جملة اسمية في محل نصب حال)",
        "ur": "جملہ اسمیہ **'وَأَنْتُمْ سُكَارَى'** منصوب محلاً (في محل نصب حال)"
      },
      {
        "en": "The word 'الصلاة'",
        "ur": "لفظ الصلاة"
      },
      {
        "en": "The verb 'تقربوا'",
        "ur": "فعل تقربوا"
      },
      {
        "en": "There is no Ḥāl clause",
        "ur": "کوئی جملہ حالیہ نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'خُشَّعاً أَبْصَارُهُمْ يَخْرُجُونَ مِنَ الأَجْدَاثِ' (Qur'an 54:7), what position does 'خُشَّعاً' hold?",
    "ur": "آیت مبارکہ 'خُشَّعاً أَبْصَارُهُمْ يَخْرُجُونَ' میں لفظ 'خُشَّعاً' کا کیا اعرابی منصب ہے؟",
    "options": [
      {
        "en": "Advanced Ḥāl Mansoob with Fatha preceding its verb 'يَخْرُجُونَ' (حال مقدم منصوبة بالفتحة)",
        "ur": "اپنے فعل 'يَخْرُجُونَ' سے مقدم واقع ہونے والا **حالِ مقدم منصوب بالفتحة**"
      },
      {
        "en": "Mubtada' Marfoo'",
        "ur": "مبتدأ مرفوع"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
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
    "en": "Parse the full sentence: 'جَاءَ الطَّالِبُ يَبْتَسِمُ':",
    "ur": "پورے جملے 'جَاءَ الطَّالِبُ يَبْتَسِمُ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "جَاءَ: فعل ماضٍ، الطَّالِبُ: فاعل مرفوع بالضمة (صاحب الحال)، يَبْتَسِمُ: فعل مضارع والفاعل مستتر (هو)، والجملة الفعلية في محل نصب حال",
        "ur": "جَاءَ: فعلِ ماضی، الطَّالِبُ: فاعل مرفوع (صاحبِ حال)، يَبْتَسِمُ: فعلِ مضارع مع فاعل مستتر، اور **جملہ فعلیہ في محل نصب حال**"
      },
      {
        "en": "جاء: مبتدأ، الطالب: خبر، يبتسم: مفعول به",
        "ur": "جاء مبتدأ، الطالب خبر، يبتسم مفعول بہ"
      },
      {
        "en": "جاء: حرف، الطالب: اسم مجرور، يبتسم: صفة",
        "ur": "جاء حرف، الطالب اسم مجرور، يبتسم صفت"
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
    "en": "Parse the full sentence: 'رَجَعَ العُمَّالُ وَهُمْ مَسْرُورُونَ':",
    "ur": "پورے جملے 'رَجَعَ العُمَّالُ وَهُمْ مَسْرُورُونَ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "رَجَعَ: فعل ماضٍ، العُمَّالُ: فاعل مرفوع، الواو: واو الحال، هُمْ: مبتدأ مبني، مَسْرُورُونَ: خبر مرفوع بالواو، والجملة الاسمية في محل نصب حال",
        "ur": "رَجَعَ: فعلِ ماضی، العُمَّالُ: فاعل مرفوع، الواو: واو الحال، هُمْ: مبتدأ، مَسْرُورُونَ: خبر، اور **جملہ اسمیہ في محل نصب حال**"
      },
      {
        "en": "رجع: مبتدأ، العمال: خبر، وهم مسرورون: مفعول به",
        "ur": "رجع مبتدأ، العمال خبر، وهم مسرورون مفعول بہ"
      },
      {
        "en": "رجع: حرف، العمال: فاعل، وهم مسرورون: مضاف إليه",
        "ur": "رجع حرف، العمال فاعل، وهم مسرورون مضاف الیہ"
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
    "en": "Which statement accurately summarizes the core grammar rules taught in Lesson 29?",
    "ur": "سبق 29 کے بنیادی گرامر موضوعات کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers Al-Ḥāl and Ṣāḥib al-Ḥāl, its 4 structural types (Mufredah, Jumlah Ismiyyah, Jumlah Fi'liyyah, Shibah Jumlah), rules for links (الرابط), and the Golden Rule regarding sentences after definite vs indefinite nouns",
        "ur": "اس سبق میں حال و صاحبِ حال، اس کی 4 اقسام (مفردہ، جملہ اسمیہ، جملہ فعلیہ، شبه جملہ)، رابط کے قوانین اور معرفہ/نکرہ کے بعد جملوں کا زریں قاعدہ شامل ہے"
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
  console.log('🚀 Seeding Book 3 Lesson 29 Quiz...');
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

    // 3. Find or Create Lecture for Lesson 29
    let lectureId;
    const existingLec = await sql`
      SELECT id, title, order_index FROM lectures
      WHERE section_id = ${sectionId} AND order_index = 29
      LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 29 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 29', 29)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 29: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 29 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 29))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 29.`);
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

    // 5. Create the quiz for Book 3 Lesson 29
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 29 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 29 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
