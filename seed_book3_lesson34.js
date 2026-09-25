import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is 'Al-Mamnū' min aṣ-Ṣarf' (المَمْنُوعُ مِنَ الصَّرْفِ / Non-Fully Declinable / Diptote) in Arabic grammar?",
    "ur": "عربی گرامر میں 'غیر منصرف' (الممنوع من الصرف) کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A declinable noun that NEVER takes Tanween and takes Fatha instead of Kasra in the state of Jarr (يُجَرُّ بِالفَتْحَةِ نِيَابَةً عَنِ الكَسْرَةِ وَلاَ يَنَّوَّنُ)",
        "ur": "وہ معرب اسم جو **تنوین قبول نہیں کرتا** اور حالتِ جر میں کسرہ کے بدلے **فتحہ** قبول کرتا ہے"
      },
      {
        "en": "A noun that takes Sukoon in all cases",
        "ur": "تمام حالتوں میں سکون قبول کرنے والا اسم"
      },
      {
        "en": "A noun that only accepts Kasra",
        "ur": "صرف کسرہ قبول کرنے والا اسم"
      },
      {
        "en": "A verb in passive voice",
        "ur": "فعلِ مجہول"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the two major categories of reasons ('Ilal / علل) that prevent a noun from taking Tanween?",
    "ur": "اسم کو غیر منصرف بنانے کی دو بنیادی قسمیں کون سی ہیں؟",
    "options": [
      {
        "en": "1. A Single Cause acting as two ('Illah Wāhidah تقوم مقام علتين), 2. Two Combined Causes ('Illatān)",
        "ur": "1. ایک علت جو دو کے قائم مقام ہو (علة واحدة)، 2. دو علتیں مل کر (علتان)"
      },
      {
        "en": "1. Past tense, 2. Present tense",
        "ur": "1. ماضی، 2. مضارع"
      },
      {
        "en": "1. Marfoo', 2. Mansoob",
        "ur": "1. مرفوع، 2. منصوب"
      },
      {
        "en": "1. Singular, 2. Dual",
        "ur": "1. مفرد، 2. تثنیہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Which three noun categories are forbidden from Tanween due to a SINGLE cause ('Illah Wāhidah)?",
    "ur": "کون سی تین قسمیں صرف **ایک علت** (علة واحدة) کی بنا پر غیر منصرف ہوتی ہیں؟",
    "options": [
      {
        "en": "1. Muntahā al-Jumū' (مساجد/مفاتيح), 2. Alif at-Ta'neeth al-Maqsoorah (حبلى/مرضى), 3. Alif at-Ta'neeth al-Mamdoodah (صحراء/علماء)",
        "ur": "1. صيغ منتهى الجموع (مساجد/مفاتيح)، 2. ألف التأنيث المقصورة (حبلى/مرضى)، 3. ألف التأنيث الممدودة (صحراء/علماء)"
      },
      {
        "en": "1. Proper nouns, 2. Adjectives, 3. Verbs",
        "ur": "1. اعلام، 2. صفات، 3. افعال"
      },
      {
        "en": "1. Numbers 1 to 10 only",
        "ur": "صرف اعداد 1 سے 10"
      },
      {
        "en": "1. Prepositions only",
        "ur": "صرف حروفِ جر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What defines 'Ṣeghat Muntahā al-Jumū'' (صِيَغُ مُنْتَهَى الجُمُوعِ) in plural patterns?",
    "ur": "جمع کے اوزان میں 'صيغ منتهى الجموع' کی کیا ساختگی پہچان ہے؟",
    "options": [
      {
        "en": "Any broken plural where an extra Alif is followed by TWO letters (مَفَاعِلُ e.g. مَسَاجِدُ) OR THREE letters with silent middle Yā' (مَفَاعِيلُ e.g. مَفَاتِيحُ/دَنَانِيرُ)",
        "ur": "ہر وہ جمعِ تکسیر جس کے الفِ زائدہ کے بعد **دو حروف** (مَفَاعِلُ) یا **تین حروف باوسطِ ساکن** (مَفَاعِيلُ) ہوں"
      },
      {
        "en": "Plurals ending in -oon or -aat",
        "ur": "ون یا ات پر ختم ہونے والی جمع"
      },
      {
        "en": "Dual nouns",
        "ur": "تثنیہ اسماء"
      },
      {
        "en": "Singular nouns ending in Ta",
        "ur": "تاء پر ختم ہونے والے مفرد اسماء"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What sub-conditions prevent Proper Nouns (الَعَلَمِيَّةُ) from Tanween under TWO causes ('Illatān)?",
    "ur": "علم (Proper Noun) ہونے کے ساتھ کون سی ذیلی علتیں مل کر اسم کو غیر منصرف بناتی ہیں؟",
    "options": [
      {
        "en": "Feminine (فاطمة), Foreign (>3 letters: إبراهيم), Extra Alif-Nūn (عثمان), Verb Pattern (أحمد), Shifted Form (عمر), or Compound Noun (بعلبك)",
        "ur": "تأنیث (فاطمة)، عجمہ (إبراهيم)، زائد الف ونون (عثمان)، وزنِ فعل (أحمد)، عدل (عمر)، یا ترکیبِ مزجی (بعلبك)"
      },
      {
        "en": "Prepositions and Particles",
        "ur": "حروفِ جر اور حروفِ عطف"
      },
      {
        "en": "Passive verbs only",
        "ur": "صرف افعالِ مجہول"
      },
      {
        "en": "Dharf Zamaan only",
        "ur": "صرف ظرفِ زمان"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What sub-conditions prevent Adjectives (الصِّفَةُ) from Tanween under TWO causes ('Illatān)?",
    "ur": "صفت (Adjective) ہونے کے ساتھ کون سی ذیلی علتیں مل کر اسم کو غیر منصرف بناتی ہیں؟",
    "options": [
      {
        "en": "1. Extra Alif-Nūn on pattern فَعْلاَنُ (كسلاَنُ), 2. Verb Pattern أَفْعَلُ (أَحْمَرُ), 3. Shifted Form (أُخَرُ / مَثْنَى وَثُلاَثَ)",
        "ur": "1. زائد الف ونون وزن فَعْلاَنُ (كسلاَنُ)، 2. وزنِ فعل أَفْعَلُ (أَحْمَرُ)، 3. عدل (أُخَرُ / مَثْنَى وَثُلاَثَ)"
      },
      {
        "en": "Adjectives ending in Kasra",
        "ur": "کسرہ پر ختم ہونے والی صفات"
      },
      {
        "en": "Adjectives ending in Tā' Marbooṭah",
        "ur": "تاء مربوطہ والی صفات"
      },
      {
        "en": "Adjectives acting as Khabar Kāna",
        "ur": "خبرِ کان بننے والی صفات"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Under what TWO conditions does a Diptote noun LOSE its diptote case ending and take Kasra in Jarr (يُجَرُّ بِالكَسْرَةِ)?",
    "ur": "کن **دو حالات** میں غیر منصرف اسم کا فتحہ کا حکم ختم ہو جاتا ہے اور وہ حالتِ جر میں کسرہ قبول کرتا ہے؟",
    "options": [
      {
        "en": "1. When prefixed with 'الـ' (e.g. فِي الـمَسَاجِدِ), OR 2. When acting as a Muḍāf (e.g. فِي مَسَاجِدِ الـمَدِينَةِ)",
        "ur": "1. جب اس پر **'الـ'** داخل ہو جائے (فِي الـمَسَاجِدِ)، یا 2. جب وہ **مضاف** بن کر آئے (فِي مَسَاجِدِ الـمَدِينَةِ)"
      },
      {
        "en": "When it is in past tense or future tense",
        "ur": "جب ماضی یا مستقبل ہو"
      },
      {
        "en": "When preceded by Inna or Kāna",
        "ur": "جب انّ یا کان کے بعد ہو"
      },
      {
        "en": "When it is singular or dual",
        "ur": "جب مفرد یا تثنیہ ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Why is a 3-letter Foreign Proper Noun with a silent middle letter (e.g., نُوحٌ، لُوطٌ، هُودٌ) FULLY DECLINABLE (منصرف)?",
    "ur": "تین حرفی عجمی اسم جس کا درمیانی حرف ساکن ہو (جیسے: نُوحٌ، لُوطٌ، هُودٌ) غیر منصرف کے بجائے **منصرف** کیوں ہوتا ہے؟",
    "options": [
      {
        "en": "Because lightness of three letters with a silent middle overrides the foreign 'Illah (لِخِفَّةِ السُّكُونِ فِي الوَسَطِ)",
        "ur": "کیونکہ درمیانی حرف کے ساکن ہونے کی خفت (ہلکا پن) عجمہ کی علت کو باطل کر دیتی ہے"
      },
      {
        "en": "Because they are Arabic words",
        "ur": "کیونکہ یہ عربی الفاظ ہیں"
      },
      {
        "en": "Because they are plurals",
        "ur": "کیونکہ یہ جمع ہیں"
      },
      {
        "en": "Because they have Alif-Noon",
        "ur": "کیونکہ ان میں الف ونون ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Why are broken plurals like 'تَلاَمِذَةٌ' and 'أَسَاتِذَةٌ' fully declinable (منصرف with Tanween)?",
    "ur": "جمع کے الفاظ 'تَلاَمِذَةٌ' اور 'أَسَاتِذَةٌ' اوزانِ منتہی الجموع کے باوجود **منصرف** (تنوین والے) کیوں ہیں؟",
    "options": [
      {
        "en": "Because the letter after Alif has THREE letters BUT the middle letter is MOVING (متحرك), not silent (e.g., -ذَ- in تلاميذَة)",
        "ur": "کیونکہ الف کے بعد تین حروف تو ہیں لیکن **درمیانی حرف متحرک** ہے (ذَ)، ساکن نہیں ہے"
      },
      {
        "en": "Because they are singular nouns",
        "ur": "کیونکہ یہ مفرد ہیں"
      },
      {
        "en": "Because they are foreign words",
        "ur": "کیونکہ یہ عجمی ہیں"
      },
      {
        "en": "Because they are feminine",
        "ur": "کیونکہ یہ مؤنث ہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the rule for a 3-letter silent-middle Feminine Proper Noun (e.g., هِنْدٌ / هِنْدُ)?",
    "ur": "تین حرفی ساکن الوسط مؤنث علم (مثلاً: هِنْدٌ / هِنْدُ) کے اعراب کا کیا حکم ہے؟",
    "options": [
      {
        "en": "It is PERMISSIBLE to treat it as fully declinable (صَرْفُهُ) OR as a diptote (مَنْعُهُ مِنَ الصَّرْفِ)",
        "ur": "اسے **منصرف** (هِنْدٌ) پڑھنا اور **غیر منصرف** (هِنْدُ) پڑھنا دونوں جائز ہیں"
      },
      {
        "en": "It is strictly forbidden to be diptote",
        "ur": "غیر منصرف ہونا حرام ہے"
      },
      {
        "en": "It is strictly mandatory to be diptote",
        "ur": "غیر منصرف ہونا واجب ہے"
      },
      {
        "en": "It is un-declinable / Mabni",
        "ur": "یہ مبنی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, in 'صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ', how is 'مَسَاجِدَ' parsed?",
    "ur": "تمرين 1 کے مطابق 'صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ' میں لفظ 'مَسَاجِدَ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Majroor with Fatha instead of Kasra because it is Diptote (مَجْرُورٌ بِالْفَتْحَةِ نِيَابَةً عَنِ الْكَسْرَةِ لِأَنَّهُ مَمْنُوعٌ مِنَ الصَّرْفِ)",
        "ur": "حرفِ جر 'في' کی بنا پر غیر منصرف ہونے کی وجہ سے **فتحه کے ساتھ مجرور** (مجرو بالفتحة)"
      },
      {
        "en": "Majroor with Kasra",
        "ur": "کسرہ کے ساتھ مجرور"
      },
      {
        "en": "Mansoob with Fatha as Maf'ool",
        "ur": "مفعول بہ"
      },
      {
        "en": "Marfoo' with Damma",
        "ur": "مرفوع بالضمة"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'صَلَّيْتُ فِي الـمَسَاجِدِ الكَبِيرَةِ', why does 'الـمَسَاجِدِ' take Kasra in Jarr?",
    "ur": "جملے 'صَلَّيْتُ فِي الـمَسَاجِدِ الكَبِيرَةِ' میں 'الـمَسَاجِدِ' حالتِ جر میں کسرہ کیوں قبول کر رہا ہے؟",
    "options": [
      {
        "en": "Because it is prefixed with 'الـ', which cancels Diptote status (دُخُولُ الـ عَلَيْهِ)",
        "ur": "کیونکہ اس پر **'الـ'** داخل ہو گیا ہے جو غیر منصرف کے فتحہ والے حکم کو منسوخ کر دیتا ہے"
      },
      {
        "en": "Because it is a proper noun",
        "ur": "علم ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Mudaaf",
        "ur": "مضاف ہونے کی وجہ سے"
      },
      {
        "en": "Because it is singular",
        "ur": "مفرد ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'صَلَّيْتُ فِي مَسَاجِدِ القَرْيَةِ', why does 'مَسَاجِدِ' take Kasra in Jarr?",
    "ur": "جملے 'صَلَّيْتُ فِي مَسَاجِدِ القَرْيَةِ' میں 'مَسَاجِدِ' حالتِ جر میں کسرہ کیوں قبول کر رہا ہے؟",
    "options": [
      {
        "en": "Because it is a Muḍāf (مُضَافٌ إلى القَرْيَةِ), which cancels Diptote status",
        "ur": "کیونکہ یہ اسم 'القرية' کی طرف **مضاف** بن کر آیا ہے"
      },
      {
        "en": "Because it has 'الـ'",
        "ur": "الـ کی وجہ سے"
      },
      {
        "en": "Because it is an adjective",
        "ur": "صفت ہونے کی وجہ سے"
      },
      {
        "en": "Because it is foreign",
        "ur": "عجمہ کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, identify the 'Illah preventing 'حُبْلَى' (pregnant) and 'مَرْضَى' (sick) from Tanween:",
    "ur": "تمرين 2 کے مطابق اسماء 'حُبْلَى' اور 'مَرْضَى' میں تنوین نہ آنے کی کیا واحد علت ہے؟",
    "options": [
      {
        "en": "Alif at-Ta'neeth al-Maqsoorah (أَلِفُ التَّأْنِيثِ الـمَقْصُورَةُ)",
        "ur": "أَلِفُ التَّأْنِيثِ الـمَقْصُورَةُ (زائد الف مقصورہ)"
      },
      {
        "en": "Alif at-Ta'neeth al-Mamdoodah",
        "ur": "ألف التأنيث الممدودة"
      },
      {
        "en": "Proper Noun and Foreign",
        "ur": "علم و عجمہ"
      },
      {
        "en": "Proper Noun and Feminine",
        "ur": "علم و تأنیث"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Identify the 'Illah preventing 'صَحْرَاءُ' (desert) and 'عُلَمَاءُ' (scholars) from Tanween:",
    "ur": "اسماء 'صَحْرَاءُ' اور 'عُلَمَاءُ' میں تنوین نہ آنے کی کیا علت ہے؟",
    "options": [
      {
        "en": "Alif at-Ta'neeth al-Mamdoodah (أَلِفُ التَّأْنِيثِ الـمَمْدُودَةُ)",
        "ur": "أَلِفُ التَّأْنِيثِ الـمَمْدُودَةُ (زائد الف ممدودہ)"
      },
      {
        "en": "Alif at-Ta'neeth al-Maqsoorah",
        "ur": "ألف التأنيث المقصورة"
      },
      {
        "en": "Proper Noun and Extra Noon",
        "ur": "علم و زائد نون"
      },
      {
        "en": "Adjective and Verb Pattern",
        "ur": "صفت و وزن فعل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Why is 'إِنْشَاءٌ' (construction/creation) NOT a Diptote (i.e. accepts Tanween)?",
    "ur": "اسم 'إِنْشَاءٌ' غیر منصرف کیوں نہیں ہے (یعنی تنوین کیوں قبول کرتا ہے)؟",
    "options": [
      {
        "en": "Because its final Hamzah is ORIGINAL (أَصْلِيَّةٌ from root ن-ش-أ), NOT an extra feminine marker",
        "ur": "کیونکہ اس کی ہمزہ اصلیہ ہے (مادہ ن-ش-أ)، زائد برائے تانیث نہیں ہے"
      },
      {
        "en": "Because it is a proper noun",
        "ur": "علم ہونے کی وجہ سے"
      },
      {
        "en": "Because it has 'الـ'",
        "ur": "الـ کی وجہ سے"
      },
      {
        "en": "Because it is plural",
        "ur": "جمع ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, what TWO causes prevent 'إِبْرَاهِيمُ' and 'يُوسُفُ' from Tanween?",
    "ur": "تمرين 3 کے مطابق اسماء 'إِبْرَاهِيمُ' اور 'يُوسُفُ' کو غیر منصرف بنانے والی **دو علتیں** کون سی ہیں؟",
    "options": [
      {
        "en": "Proper Noun + Foreign Origin over 3 letters (العَلَمِيَّةُ وَالعُجْمَةُ)",
        "ur": "العَلَمِيَّةُ وَالعُجْمَةُ (علم اور عجمہ)"
      },
      {
        "en": "Proper Noun + Feminine",
        "ur": "علم و تأنیث"
      },
      {
        "en": "Proper Noun + Verb Pattern",
        "ur": "علم و وزن فعل"
      },
      {
        "en": "Adjective + Extra Alif-Noon",
        "ur": "صفت و زائد الف نون"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What TWO causes prevent 'عُثْمَانُ' and 'سُلَيْمَانُ' from Tanween?",
    "ur": "اسماء 'عُثْمَانُ' اور 'سُلَيْمَانُ' کو غیر منصرف بنانے والی دو علتیں کون سی ہیں؟",
    "options": [
      {
        "en": "Proper Noun + Extra Alif and Nūn (العَلَمِيَّةُ وَزِيَادَةُ الأَلِفِ وَالنُّونِ)",
        "ur": "العَلَمِيَّةُ وَزِيَادَةُ الأَلِفِ وَالنُّونِ (علم اور زائد الف ونون)"
      },
      {
        "en": "Adjective + Extra Alif and Noon",
        "ur": "صفت و زائد الف نون"
      },
      {
        "en": "Proper Noun + Feminine",
        "ur": "علم و تأنیث"
      },
      {
        "en": "Proper Noun + Compound",
        "ur": "علم و ترکیب مزجی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What TWO causes prevent 'أَحْمَدُ' and 'يَزِيدُ' and 'يَثْرِبُ' from Tanween?",
    "ur": "اسماء 'أَحْمَدُ'، 'يَزِيدُ' اور 'يَثْرِبُ' میں کون سی دو علتیں ہیں؟",
    "options": [
      {
        "en": "Proper Noun + Verb Pattern (العَلَمِيَّةُ وَوَزْنُ الفِعْلِ)",
        "ur": "العَلَمِيَّةُ وَوَزْنُ الفِعْلِ (علم اور وزنِ فعل)"
      },
      {
        "en": "Adjective + Verb Pattern",
        "ur": "صفت و وزن فعل"
      },
      {
        "en": "Proper Noun + Shifted Form",
        "ur": "علم و عدل"
      },
      {
        "en": "Proper Noun + Foreign",
        "ur": "علم و عجمہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What TWO causes prevent 'عُمَرُ' and 'زُحَلُ' from Tanween?",
    "ur": "اسماء 'عُمَرُ' اور 'زُحَلُ' میں کون سی دو علتیں ہیں؟",
    "options": [
      {
        "en": "Proper Noun + Shifted Form / Pattern Fu'al (العَلَمِيَّةُ وَالعَدْلُ - وزن فُعَلُ)",
        "ur": "العَلَمِيَّةُ وَالعَدْلُ (علم اور عدل - وزن فُعَل)"
      },
      {
        "en": "Proper Noun + Feminine",
        "ur": "علم و تأنیث"
      },
      {
        "en": "Proper Noun + Compound",
        "ur": "علم و ترکیب مزجی"
      },
      {
        "en": "Adjective + Shifted Form",
        "ur": "صفت و عدل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, what TWO causes prevent 'كَسْلَانُ' (lazy) and 'غَضْبَانُ' (angry) from Tanween?",
    "ur": "تمرين 4 کے مطابق صفات 'كَسْلَانُ' اور 'غَضْبَانُ' کو غیر منصرف بنانے والی دو علتیں کیا ہیں؟",
    "options": [
      {
        "en": "Adjective + Extra Alif and Nūn on pattern فَعْلَانُ (الصِّفَةُ وَزِيَادَةُ الأَلِفِ وَالنُّونِ)",
        "ur": "الصِّفَةُ وَزِيَادَةُ الأَلِفِ وَالنُّونِ (صفت اور زائد الف ونون وزن فَعْلاَن)"
      },
      {
        "en": "Proper Noun + Extra Alif and Noon",
        "ur": "علم و زائد الف ونون"
      },
      {
        "en": "Adjective + Verb Pattern",
        "ur": "صفت و وزن فعل"
      },
      {
        "en": "Single Cause",
        "ur": "ایک علت"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What TWO causes prevent colors/comparatives like 'أَحْمَرُ' (red) and 'أَحْسَنُ' (better) from Tanween?",
    "ur": "صفات 'أَحْمَرُ' اور 'أَحْسَنُ' میں کون سی دو علتیں ہیں؟",
    "options": [
      {
        "en": "Adjective + Verb Pattern on pattern أَفْعَلُ (الصِّفَةُ وَوَزْنُ الفِعْلِ)",
        "ur": "الصِّفَةُ وَوَزْنُ الفِعْلِ (صفت اور وزنِ فعل - وزن أَفْعَل)"
      },
      {
        "en": "Proper Noun + Verb Pattern",
        "ur": "علم و وزن فعل"
      },
      {
        "en": "Adjective + Extra Alif-Noon",
        "ur": "صفت و زائد الف نون"
      },
      {
        "en": "Proper Noun + Foreign",
        "ur": "علم و عجمہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَبَشَّرْنَاهُ بِإِسْحَاقَ نَبِيًّا' (Qur'an 37:112), how is 'بِإِسْحَاقَ' parsed?",
    "ur": "تمرين 5 کے مطابق قرآنی آیہ 'وَبَشَّرْنَاهُ بِإِسْحَاقَ' میں 'بِإِسْحَاقَ' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Majroor with Fatha instead of Kasra after Harf Jarr Bā' (مَجْرُورٌ بِالْبَاءِ وَعَلاَمَةُ جَرِّهِ الْفَتْحَةُ نِيَابَةً عَنِ الْكَسْرَةِ)",
        "ur": "حرفِ جر باء کے بعد غیر منصرف (علم و عجمہ) ہونے کی بنا پر **فتحہ کے ساتھ مجرور**"
      },
      {
        "en": "Majroor with Kasra",
        "ur": "کسرہ کے ساتھ مجرور"
      },
      {
        "en": "Mansoob with Fatha as Maf'ool",
        "ur": "مفعول بہ"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'فَعِدَّةٌ مِنْ أَيَّامٍ أُخَرَ' (Qur'an 2:184), why is 'أُخَرَ' Diptote?",
    "ur": "قرآنی آیہ 'فَعِدَّةٌ مِنْ أَيَّامٍ أُخَرَ' میں لفظ 'أُخَرَ' غیر منصرف کیوں ہے؟",
    "options": [
      {
        "en": "Because it is an Adjective shifted from 'أُخْرَى' (صِفَةٌ مَعْدُولَةٌ عَنْ أُخْرَى)",
        "ur": "کیونکہ یہ 'أُخْرَى' کی جمع صفتِ معدولہ ہے (الصِّفَةُ وَالعَدْلُ)"
      },
      {
        "en": "Because it is a proper noun",
        "ur": "علم ہونے کی وجہ سے"
      },
      {
        "en": "Because it has 'الـ'",
        "ur": "الـ کی وجہ سے"
      },
      {
        "en": "Because it is a foreign word",
        "ur": "عجمہ کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'يَعْمَلُونَ لَهُ مَا يَشَاءُ مِنْ مَحَارِيبَ وَتَمَاثِيلَ' (Qur'an 34:13), why are both nouns in Jarr with Fatha?",
    "ur": "آیت مبارکہ 'مِنْ مَحَارِيبَ وَتَمَاثِيلَ' میں دونوں اسماء فتحہ کے ساتھ مجرور کیوں ہیں؟",
    "options": [
      {
        "en": "Because both are broken plurals on Ṣeghat Muntahā al-Jumū' (مَفَاعِيلُ) which is Diptote",
        "ur": "کیونکہ دونوں اسماء اوزانِ **صيغ منتهى الجموع** (مَفَاعِيلُ) پر غیر منصرف ہیں"
      },
      {
        "en": "Because they are proper nouns",
        "ur": "علم ہونے کی وجہ سے"
      },
      {
        "en": "Because they are adjectives",
        "ur": "صفات ہونے کی وجہ سے"
      },
      {
        "en": "Because they are singulars",
        "ur": "مفرد ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'سَافَرْتُ إِلَى إِبْرَاهِيمَ وَعُثْمَانَ':",
    "ur": "پورے جملے 'سَافَرْتُ إِلَى إِبْرَاهِيمَ وَعُثْمَانَ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "إِلَى: حرف جر، إِبْرَاهِيمَ: اسم مجرور بالفتحة نيابة عن الكسرة (علم وعجمة)، وَعُثْمَانَ: معطوف مجرور بالفتحة (علم وزيادة الألف والنون)",
        "ur": "إِلَى: حرفِ جر، إِبْرَاهِيمَ: **مجرور بالفتحة** (علم و عجمہ)، وَعُثْمَانَ: **معطوف مجرور بالفتحة** (علم و زائد الف ونون)"
      },
      {
        "en": "إبراهيم: مجرور بالكسرة، عثمان: مرفوع",
        "ur": "إبراهيم مجرور بالکسرة، عثمان مرفوع"
      },
      {
        "en": "إبراهيم: فاعل، عثمان: مفعول به",
        "ur": "إبراهيم فاعل، عثمان مفعول بہ"
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
    "en": "In 'صَلَّيْتُ فِي المَسَاجِدِ وَمَسَاجِدِ المَدِينَةِ', why do both 'المساجد' words take Kasra in Jarr?",
    "ur": "جملے 'صَلَّيْتُ فِي المَسَاجِدِ وَمَسَاجِدِ المَدِينَةِ' میں دونوں جگہ 'مساجد' کسرہ کے ساتھ کیوں مجرور ہیں؟",
    "options": [
      {
        "en": "The first because of 'الـ', and the second because it is a Muḍāf",
        "ur": "پہلا لفظ **'الـ'** کی وجہ سے، اور دوسرا لفظ **مضاف** بننے کی وجہ سے"
      },
      {
        "en": "Both are proper nouns",
        "ur": "دونوں علم ہیں"
      },
      {
        "en": "Both are singular nouns",
        "ur": "دونوں مفرد ہیں"
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
    "en": "Which statement accurately summarizes the core grammar rules taught in Lesson 34?",
    "ur": "سبق 34 کے بنیادی گرامر موضوعات کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers Al-Mamnū' min aṣ-Ṣarf definition and Jarr with Fatha, Single Cause (Muntahā al-Jumū', Maqsoorah, Mamdoodah), Two Causes (Proper Noun & Adjective sub-types), and conditions for Jarr with Kasra ('الـ' & Idāfah)",
        "ur": "اس سبق میں غیر منصرف کی تعریف و اعراب، ایک علت والی تین اقسام، دو علتوں والے اعلام و صفات، اور 'الـ' یا اضافت کے داخل ہونے پر کسرہ کا کامل احاطہ ہے"
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
  console.log('🚀 Seeding Book 3 Lesson 34 Quiz...');
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

    // 3. Find or Create Lecture for Lesson 34
    let lectureId;
    const existingLec = await sql`
      SELECT id, title, order_index FROM lectures
      WHERE section_id = ${sectionId} AND order_index = 34
      LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 34 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 34', 34)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 34: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 34 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 34))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 34.`);
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

    // 5. Create the quiz for Book 3 Lesson 34
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 34 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 34 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
