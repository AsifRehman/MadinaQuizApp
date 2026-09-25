import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL || process.env.DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is 'Al-Masdar al-Mu'awwal' (المَصْدَرُ المُؤَوَّلُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'مصدرِ مؤول' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "A grammatical structure (e.g., أَنْ + Verb or أَنَّ + Ism + Khabar) that can be rephrased as a explicit verbal noun (مصدر صريح)",
        "ur": "وہ ترکیبی ساخة (مثلاً أَنْ + فعل یا أَنَّ + اسم وخبر) جو ایک صریح مصدر کے قائم مقام بن سکے"
      },
      {
        "en": "A noun ending with Alif Mamdoodah",
        "ur": "وہ اسم جس کے آخر میں الفِ ممدودہ ہو"
      },
      {
        "en": "A verb in the imperative form",
        "ur": "وہ فعل جو امر کے صیغے میں ہو"
      },
      {
        "en": "A noun that is always non-declinable (مبني)",
        "ur": "وہ اسم جو ہمیشہ مبنی رہتا ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is 'أُرِيدُ أَنْ أَدْرُسَ اللُّغَةَ العَرَبِيَّةَ' converted into Masdar Sarih (مصدر صريح)?",
    "ur": "جملے 'أُرِيدُ أَنْ أَدْرُسَ اللُّغَةَ العَرَبِيَّةَ' کو مصدرِ صریح کے ساتھ کیسے تبدیل کیا جائے گا؟",
    "options": [
      {
        "en": "أُرِيدُ دِرَاسَةَ اللُّغَةِ العَرَبِيَّةِ (Urīdu dirāsata al-lughati...)",
        "ur": "أُرِيدُ دِرَاسَةَ اللُّغَةِ العَرَبِيَّةِ"
      },
      {
        "en": "أُرِيدُ دَارِسَ اللُّغَةِ العَرَبِيَّةِ",
        "ur": "أُرِيدُ دَارِسَ اللُّغَةِ العَرَبِيَّةِ"
      },
      {
        "en": "أُرِيدُ أَدْرُسُ اللُّغَةَ",
        "ur": "أُرِيدُ أَدْرُسُ اللُّغَةَ"
      },
      {
        "en": "أُرِيدُ المَدْرَسَةَ العَرَبِيَّةَ",
        "ur": "أُرِيدُ المَدْرَسَةَ العَرَبِيَّةَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'أَنْ' al-Mukhaffafah min ath-Thaqilah (أَنْ المخففة من الثقيلة)?",
    "ur": "'أَنْ المخففة من الثقيلة' (مخففہ أن) سے گرامر میں کیا مراد ہے؟",
    "options": [
      {
        "en": "The heavy particle 'أَنَّ' lightened to 'أَنْ' with Sukoon, where its Ism is hidden Dameer ash-Sha'n",
        "ur": "مشدد حرف 'أَنَّ' کا سکون کے ساتھ 'أَنْ' میں تخفیف ہونا، جس کا اسم ضمير الشأن محذوف ہوتا ہے"
      },
      {
        "en": "The particle of negation 'أنْ'",
        "ur": "حرفِ نفی 'أنْ'"
      },
      {
        "en": "The particle of condition 'إنْ'",
        "ur": "حرفِ شرط 'إنْ'"
      },
      {
        "en": "The preposition 'عَنْ'",
        "ur": "حرفِ جر 'عَنْ'"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When the Khabar of 'أَنْ' Mukhaffafah is a verb, what usually separates it from 'أَنْ'?",
    "ur": "مخففہ 'أَنْ' کی خبر جب فعل ہو تو ان کے درمیان عموماً کون سا فاصل حرف (فصل) آتا ہے؟",
    "options": [
      {
        "en": "Particles like 'قَدْ', 'سَوْفَ', 'لاَ', 'لَوْ', or 'لَنْ'",
        "ur": "حروف جیسے 'قَدْ'، 'سَوْفَ'، 'لاَ'، 'لَوْ' یا 'لَنْ'"
      },
      {
        "en": "The preposition 'في'",
        "ur": "حرفِ جر 'في'"
      },
      {
        "en": "A dual noun",
        "ur": "تثنیہ اسم"
      },
      {
        "en": "There is never any separation",
        "ur": "کوئی فاصلہ نہیں ہو سکتا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In which of the following positions MUST the Hamzah of 'إِنَّ' be pronounced with Kasra (كسر همزة إنَّ)?",
    "ur": "درج ذیل میں سے کس جگہ 'إِنَّ' کے ہمزہ پر کسرہ پڑھنا واجب ہے؟",
    "options": [
      {
        "en": "At the beginning of speech (في ابتداء الكلام), after Qawl (بعد القول), and after Oath (بعد القسم)",
        "ur": "ابتداءِ کلام میں، بعد القول (قالَ کے بعد)، اور بعد القسم (قسم کے بعد)"
      },
      {
        "en": "Only when functioning as Fa'il",
        "ur": "صرف جب وہ فاعل بن رہی ہو"
      },
      {
        "en": "Only when preceded by preposition Ba",
        "ur": "صرف جب حرفِ جر 'بـ' سے پہلے ہو"
      },
      {
        "en": "When preceded by Maf'ool Bihi",
        "ur": "جب مفعول بہ سے پہلے ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Why is Kasra mandatory on 'إِنَّ' in 'قَالَ إِنِّي عَبْدُ اللَّهِ' (Qur'an 19:30)?",
    "ur": "قرآنی آیہ 'قَالَ إِنِّي عَبْدُ اللَّهِ' میں 'إِنَّ' کے ہمزہ کو کسرہ دینا کیوں واجب ہے؟",
    "options": [
      {
        "en": "Because it occurs immediately after the verb of speech 'قَالَ' (وقعت بعد القول)",
        "ur": "فعلِ قول 'قَالَ' کے فوراً بعد واقع ہونے کی وجہ سے (بعد القول)"
      },
      {
        "en": "Because it comes after an oath",
        "ur": "قسم کے بعد ہونے کی وجہ سے"
      },
      {
        "en": "Because it is inside Silat al-Mawsool",
        "ur": "صلہ الموصول کا حصہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Khabar Inna",
        "ur": "انّ کی خبر ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What does the expression 'لاَ سِيَّمَا' (Lā siyyamā) mean in Arabic?",
    "ur": "عربی زبان میں ترکیب 'لاَ سِيَّمَا' کا کیا معنی ہوتا ہے؟",
    "options": [
      {
        "en": "'Especially' / 'Particularly' (خاصةً / ولا سيما)",
        "ur": "خاص طور پر / بالخصوص"
      },
      {
        "en": "'Never at all'",
        "ur": "ہرگز نہیں"
      },
      {
        "en": "'In spite of'",
        "ur": "باوجود اس کے"
      },
      {
        "en": "'Because of'",
        "ur": "اس وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the origin and literal meaning of 'سِيَّ' in 'لاَ سِيَّمَا'?",
    "ur": "'لاَ سِيَّمَا' میں لفظ 'سِيَّ' کی اصل اور لغوی معنی کیا ہے؟",
    "options": [
      {
        "en": "It means 'equal' / 'like' (مِثْلُ) derived from 'سَوَاءٌ'",
        "ur": "اس کا معنی ہے 'مثل/برابر' (سَوَاءٌ کی اصل سے)"
      },
      {
        "en": "It means 'bad' / 'evil'",
        "ur": "برائی"
      },
      {
        "en": "It is a negation particle",
        "ur": "حرفِ نفی"
      },
      {
        "en": "It means 'today'",
        "ur": "آج"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When an INDEFINITE noun follows 'لاَ سِيَّمَا' (e.g., أُحِبُّ الفَوَاكِهَ لاَ سِيَّمَا تُفَّاحاً / تُفَّاحٍ / تُفَّاحٌ), how many I'rab cases are permissible?",
    "ur": "'لاَ سِيَّمَا' کے بعد جب **نکرہ** اسم آئے تو اس کی کتنی اعرابی حالتیں جائز ہیں؟",
    "options": [
      {
        "en": "Three cases: Majroor (Mudaf Ilayh), Marfoo' (Khabar), or Mansoob (Tamyeez)",
        "ur": "تینوں حالتیں جائز ہیں: مجرور (مضاف الیہ)، مرفوع (خبر)، یا منصوب (تمیز)"
      },
      {
        "en": "Only Majroor case",
        "ur": "صرف مجرور"
      },
      {
        "en": "Only Mansoob case",
        "ur": "صرف منصوب"
      },
      {
        "en": "Only Marfoo' case",
        "ur": "صرف مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When a DEFINITE noun follows 'لاَ سِيَّمَا' (e.g., لاَ سِيَّمَا التُّفَّاحُ / التُّفَّاحِ), which cases are permissible?",
    "ur": "'لاَ سِيَّمَا' کے بعد جب **معرفہ** اسم آئے تو اس کا اعراب کیا ہو سکتا ہے؟",
    "options": [
      {
        "en": "Two cases: Majroor (Mudaf Ilayh) or Marfoo' (Khabar) - NOT Tamyeez",
        "ur": "دو حالتیں جائز ہیں: مجرور یا مرفوع (تمیز نہ ہونے کی وجہ سے منصوب نہیں ہو سکتا)"
      },
      {
        "en": "Only Mansoob case",
        "ur": "صرف منصوب"
      },
      {
        "en": "All three cases including Mansoob",
        "ur": "منصوب سمیت تینوں حالتیں"
      },
      {
        "en": "It must be Majzoom with Sukoon",
        "ur": "سکون کے ساتھ مجزوم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, convert the Masdar Mu'awwal in 'يَسُرُّنِي أَنْ تَنْجَحَ' to Masdar Sarih:",
    "ur": "تمرين 1 کے مطابق 'يَسُرُّنِي أَنْ تَنْجَحَ' میں مصدرِ مؤول کو مصدرِ صريح میں تبدیل کریں:",
    "options": [
      {
        "en": "يَسُرُّنِي نَجَاحُكَ (Yasurrunī najāhuka)",
        "ur": "يَسُرُّنِي نَجَاحُكَ"
      },
      {
        "en": "يَسُرُّنِي أَنْ نَجَحْتَ",
        "ur": "يَسُرُّنِي أَنْ نَجَحْتَ"
      },
      {
        "en": "يَسُرُّنِي نَاجِحُكَ",
        "ur": "يَسُرُّنِي نَاجِحُكَ"
      },
      {
        "en": "يَسُرُّنِي النَّجَاحَ",
        "ur": "يَسُرُّنِي النَّجَاحَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Convert the Masdar Mu'awwal in 'أَخَافُ أَنْ أَتَأَخَّرَ' (I fear that I might be late):",
    "ur": "جملے 'أَخَافُ أَنْ أَتَأَخَّرَ' میں مصدرِ مؤول کی صریح شکل کیا ہوگی؟",
    "options": [
      {
        "en": "أَخَافُ التَّأَخُّرَ (Akhāfu at-ta'akhkhura)",
        "ur": "أَخَافُ التَّأَخُّرَ"
      },
      {
        "en": "أَخَافُ المُتَأَخِّرَ",
        "ur": "أَخَافُ المُتَأَخِّرَ"
      },
      {
        "en": "أَخَافُ أَنْ تَأَخُّرٍ",
        "ur": "أَخَافُ أَنْ تَأَخُّرٍ"
      },
      {
        "en": "أَخَافُ التَّأْخِيرِ",
        "ur": "أَخَافُ التَّأْخِيرِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'بَلَغَنِي أَنَّ الـمُدِيرَ مَرِيضٌ', how is the Masdar Mu'awwal rephrased as Masdar Sarih?",
    "ur": "جملے 'بَلَغَنِي أَنَّ الـمُدِيرَ مَرِيضٌ' میں 'أَنَّ وَاسْمُهَا وَخَبَرُهَا' کی جگہ صريح مصدر کیا بنے گا؟",
    "options": [
      {
        "en": "بَلَغَنِي مَرَضُ الـمُدِيرِ (Balaghanī maradu al-mudīri)",
        "ur": "بَلَغَنِي مَرَضُ الـمُدِيرِ"
      },
      {
        "en": "بَلَغَنِي المَرِيضُ المدِيرِ",
        "ur": "بَلَغَنِي المَرِيضُ المدِيرِ"
      },
      {
        "en": "بَلَغَنِي أَنْ المَدِيرَ مَرِيضٌ",
        "ur": "بَلَغَنِي أَنْ المَدِيرَ مَرِيضٌ"
      },
      {
        "en": "بَلَغَنِي مُمَرِّضُ المديرِ",
        "ur": "بَلَغَنِي مُمَرِّضُ المديرِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, in 'عَلِمْتُ أَنْ سَيَكُونُ مِنْكُمْ مَرْضَى' (Qur'an 73:20), what type of 'أَنْ' is this?",
    "ur": "تمرين 2 کے مطابق قرآنی آیہ 'عَلِمْتُ أَنْ سَيَكُونُ مِنْكُمْ مَرْضَى' میں 'أَنْ' کی کیا قسم ہے؟",
    "options": [
      {
        "en": "أَنْ Mukhaffafah min ath-Thaqilah (أَنْ المخففة من الثقيلة preceded by verb of certainty)",
        "ur": "یقین والے فعل (عَلِمَ) کے بعد آنے والی أن المخففة من الثقيلة"
      },
      {
        "en": "An-Nasibah for Present tense",
        "ur": "أن الناصبہ للمضارع"
      },
      {
        "en": "An-Nafiyah",
        "ur": "أن النافیہ"
      },
      {
        "en": "An-Zaidah",
        "ur": "أن الزائدہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Why is 'يَكُونُ' in 'عَلِمْتُ أَنْ سَيَكُونُ' Marfoo' (with Damma) instead of Mansoob?",
    "ur": "آیت 'عَلِمْتُ أَنْ سَيَكُونُ' میں فعل 'يَكُونُ' منصوب ہونے کے بجائے مرفوع کیوں ہے؟",
    "options": [
      {
        "en": "Because 'أَنْ' here is Mukhaffafah (not the Nasibah particle), separated by 'سـ'",
        "ur": "کیونکہ یہاں 'أَنْ' مخففہ ہے (ناصبہ نہیں) اور 'سـ' کے ذریعے فاصلہ ہے"
      },
      {
        "en": "Because it is Majzoom",
        "ur": "مجزوم ہونے کی وجہ سے"
      },
      {
        "en": "Because 'علمت' makes it Marfoo'",
        "ur": "علمت کی وجہ سے"
      },
      {
        "en": "Due to a printing error",
        "ur": "طباعتی غلطی کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Identify the hidden Ism of 'أَنْ' Mukhaffafah in 'أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ':",
    "ur": "جملے 'أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ' میں مخففہ 'أَنْ' کا محذوف اسم کیا ہے؟",
    "options": [
      {
        "en": "Omitted Dameer ash-Sha'n 'هُ' (تقديره: أَشْهَدُ أَنَّهُ لاَ إِلَهَ...)",
        "ur": "محذوف ضمیر الشأن 'هُ' (تقدير: أَنَّهُ)"
      },
      {
        "en": "The word 'الله'",
        "ur": "لفظِ جلالہ 'الله'"
      },
      {
        "en": "The word 'إله'",
        "ur": "لفظ 'إله'"
      },
      {
        "en": "Visible pronoun 'أنا'",
        "ur": "ظاہری ضمیر 'أنا'"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, why does 'إِنَّ' have Kasra in 'إِنَّا أَعْطَيْنَاكَ الكَوْثَرَ'?",
    "ur": "تمرين 3 کے مطابق 'إِنَّا أَعْطَيْنَاكَ الكَوْثَرَ' میں 'إِنَّ' کے ہمزہ کو کسرہ کیوں دیا گیا ہے؟",
    "options": [
      {
        "en": "Because it occurs at the very beginning of speech (وقعت في ابتداء الكلام)",
        "ur": "جملے اور کلام کے بالکل شروع میں واقع ہونے کی وجہ سے (في ابتداء الكلام)"
      },
      {
        "en": "Because it comes after Qawl",
        "ur": "قول کے بعد ہونے کی وجہ سے"
      },
      {
        "en": "Because it comes after Kasam",
        "ur": "قسم کے بعد ہونے کی وجہ سے"
      },
      {
        "en": "Because it is inside Silat al-Mawsool",
        "ur": "صلہ الموصول ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Why does 'إِنَّ' have Kasra in 'وَاللَّهِ إِنَّكَ لَطَالِبٌ مُجْتَهِدٌ'?",
    "ur": "جملے 'وَاللَّهِ إِنَّكَ لَطَالِبٌ مُجْتَهِدٌ' میں 'إِنَّ' کا ہمزہ مکسور کیوں ہے؟",
    "options": [
      {
        "en": "Because it occurs in the response to an oath (وقعت بعد القسم في جواب القسم)",
        "ur": "قسم کے جواب کے شروع میں واقع ہونے کی وجہ سے (بعد القسم)"
      },
      {
        "en": "Because it occurs after Qawl",
        "ur": "قول کے بعد"
      },
      {
        "en": "Because it is Hal clause",
        "ur": "جملہ حالیہ کے شروع میں"
      },
      {
        "en": "Because it is Mubtada'",
        "ur": "مبتدأ ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Why does 'إِنَّ' have Kasra in 'زُرْتُ الَّذِي إِنَّهُ يُحِبُّنِي'?",
    "ur": "جملے 'زُرْتُ الَّذِي إِنَّهُ يُحِبُّنِي' میں 'إِنَّ' کے ہمزہ پر کسرہ کیوں ضروری ہے؟",
    "options": [
      {
        "en": "Because it occurs at the beginning of Silat al-Mawsool (في صلة الموصول)",
        "ur": "اسمِ موصول کے صلے کے بالکل شروع میں آنے کی وجہ سے"
      },
      {
        "en": "Because it is preceded by a preposition",
        "ur": "حرفِ جر کے بعد آنے کی وجہ سے"
      },
      {
        "en": "Because it is at the end of speech",
        "ur": "کلام کے آخر میں آنے کی وجہ سے"
      },
      {
        "en": "Because it is Fa'il",
        "ur": "فاعل ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Why does 'إِنَّ' have Kasra in 'قَبَضْتُ العَلِيَّ وَإِنَّهُ لَيَبْكِي'?",
    "ur": "جملے 'وَإِنَّهُ لَيَبْكِي' میں 'إِنَّ' پر کسرہ کیوں واجب ہے؟",
    "options": [
      {
        "en": "Because it occurs at the beginning of Jumla Haliyyah (في أول جملة الحال)",
        "ur": "جملہ حالیہ کے بالکل شروع میں واقع ہونے کی وجہ سے"
      },
      {
        "en": "Because it comes after Qawl",
        "ur": "قول کے بعد"
      },
      {
        "en": "Because it comes after Kasam",
        "ur": "قسم کے بعد"
      },
      {
        "en": "Because it is Badl",
        "ur": "بدل ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, in 'أُحِبُّ الطُّلاَّبَ لاَ سِيَّمَا حَامِدٌ', how is 'حَامِدٌ' parsed in Marfoo' case?",
    "ur": "تمرين 4 کے مطابق 'أُحِبُّ الطُّلاَّبَ لاَ سِيَّمَا حَامِدٌ' میں مرفوع حالت میں 'حَامِدٌ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Khabar of an omitted Mubtada' (خبر لمبتدأ محذوف تقديره: هُوَ حَامِدٌ)",
        "ur": "محذوف مبتدأ (هو) کی خبر مرفوع"
      },
      {
        "en": "Fa'il of Uhibbu",
        "ur": "فعل أُحِبُّ کا فاعل"
      },
      {
        "en": "Mudaf Ilayh",
        "ur": "مضاف الیہ"
      },
      {
        "en": "Tamyeez Mansoob",
        "ur": "تمیز منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'أُحِبُّ الطُّلاَّبَ لاَ سِيَّمَا حَامِدٍ', how is 'حَامِدٍ' parsed in Majroor case?",
    "ur": "جملے 'لاَ سِيَّمَا حَامِدٍ' میں مجرور حالت میں 'حَامِدٍ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Mudaf Ilayh to 'سِيَّ' (مضاف إليه مجرور بالكسرة)",
        "ur": "لفظ 'سِيَّ' کا مضاف الیہ مجرور"
      },
      {
        "en": "Badal Mansoob",
        "ur": "بدل منصوب"
      },
      {
        "en": "Na't Majroor",
        "ur": "نعت مجرور"
      },
      {
        "en": "Khabar Inna",
        "ur": "انّ کی خبر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'أَقْرَأُ الكُتُبَ لاَ سِيَّمَا كِتَاباً عِلْمِيّاً', how is 'كِتَاباً' parsed in Mansoob case?",
    "ur": "جملے 'لاَ سِيَّمَا كِتَاباً عِلْمِيّاً' میں منصوب حالت میں 'كِتَاباً' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Tamyeez Mansoob (تمییز منصوب بالفتحة)",
        "ur": "تمیز منصوب بالفتحة"
      },
      {
        "en": "Maf'ool Bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Khabar Laa",
        "ur": "لا کی خبر"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Why CANNOT the word 'عَلِيٌّ' be Mansoob in 'أُحِبُّ أَصْدِقَائِي لاَ سِيَّمَا عَلِيٌّ / عَلِيٍّ'?",
    "ur": "جملے 'لاَ سِيَّمَا عَلِيٌّ / عَلِيٍّ' میں لفظ 'عَلِيّ' منصوب (عَلِيّاً) کیوں نہیں ہو سکتا؟",
    "options": [
      {
        "en": "Because 'عَلِيٌّ' is a Proper/Definite Noun (معرفة) and Tamyeez MUST be Nakirah",
        "ur": "کیونکہ 'عَلِيّ' اسمِ معرفہ ہے اور تمیز کا نکرہ ہونا ضروری ہے"
      },
      {
        "en": "Because it is plural",
        "ur": "جمع ہونے کی وجہ سے"
      },
      {
        "en": "Because it is feminine",
        "ur": "مؤنث ہونے کی وجہ سے"
      },
      {
        "en": "Because 'لا سيما' is inactive",
        "ur": "لا سيما کے باطل العمل ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'يُعْجِبُنِي أَنَّكَ مُجْتَهِدٌ', what is the position of Masdar Mu'awwal 'أَنَّكَ مُجْتَهِدٌ'?",
    "ur": "تمرين 5 کے جملے 'يُعْجِبُنِي أَنَّكَ مُجْتَهِدٌ' میں مصدرِ مؤول 'أَنَّكَ مُجْتَهِدٌ' کا ترکیبی منصب کیا ہے؟",
    "options": [
      {
        "en": "In position of Raf' as Fa'il for 'يُعْجِبُ' (في محل رفع فاعل)",
        "ur": "فعل 'يُعْجِبُ' کا فاعل ہونے کی بنا پر في محل رفع"
      },
      {
        "en": "In position of Nasb as Maf'ool Bihi",
        "ur": "في محل نصب مفعول بہ"
      },
      {
        "en": "In position of Jar",
        "ur": "في محل جر"
      },
      {
        "en": "Khabar Mubtada'",
        "ur": "مبتدأ کی خبر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'أُرِيدُ أَنْ أَزُورَكَ', what is the position of Masdar Mu'awwal 'أَنْ أَزُورَكَ'?",
    "ur": "جملے 'أُرِيدُ أَنْ أَزُورَكَ' (أُرِيدُ زِيَارَتَكَ) میں مصدرِ مؤول کا ترکیبی منصب کیا ہے؟",
    "options": [
      {
        "en": "In position of Nasb as Maf'ool Bihi for 'أُرِيدُ' (في محل نصب مفعول به)",
        "ur": "فعل 'أُرِيدُ' کا مفعول بہ ہونے کی بنا پر في محل نصب"
      },
      {
        "en": "In position of Raf' as Fa'il",
        "ur": "في محل رفع فاعل"
      },
      {
        "en": "In position of Jar",
        "ur": "في محل جر"
      },
      {
        "en": "Mubtada' Mu'akhar",
        "ur": "مبتدأ مؤخر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "In the Quranic verse 'قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الكِتَابَ' (Qur'an 19:30), how is 'عَبْدُ' parsed?",
    "ur": "قرآنی آیہ 'قَالَ إِنِّي عَبْدُ اللَّهِ' میں لفظ 'عَبْدُ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Khabar Inna Marfoo' with Damma (خبر إنَّ مرفوع بالضمة)",
        "ur": "انّ کی خبر ہونے کی بنا پر ضمہ کے ساتھ مرفوع"
      },
      {
        "en": "Ism Inna Mansoob",
        "ur": "انّ کا اسم منصوب"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Badal Mansoob",
        "ur": "بدل منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "In the Quranic verse 'وَآتَيْنَاهُ مِنَ الكُنُوزِ مَا إِنَّ مَفَاتِحَهُ لَتَنُوءُ...' (Qur'an 28:76), why is the Hamzah of 'إِنَّ' broken with Kasra?",
    "ur": "آیت مبارکہ 'مَا إِنَّ مَفَاتِحَهُ لَتَنُوءُ' میں 'إِنَّ' کے ہمزہ پر کسرہ کیوں ضروری ہے؟",
    "options": [
      {
        "en": "Because it occurs at the beginning of Silat al-Mawsool after 'مَا' (في صلة الموصول)",
        "ur": "اسمِ موصول 'مَا' کے صلے کے شروعات میں واقع ہونے کی وجہ سے"
      },
      {
        "en": "Because it is at the start of sentence",
        "ur": "جملے کے شروع میں ہونے کی وجہ سے"
      },
      {
        "en": "Because it comes after an oath",
        "ur": "قسم کے بعد ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Maf'ool Bihi",
        "ur": "مفعول بہ ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 7",
    "en": "Which statement accurately summarizes the difference between 'أَنْ' al-Mukhaffafah and 'أَنْ' an-Nasibah?",
    "ur": "مخففہ 'أَنْ' اور ناصبہ 'أَنْ' کے بنیادی فرق کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "'أَنْ' Mukhaffafah is preceded by verbs of certainty (علم/يقين) and does NOT make the present verb Mansoob; 'أَنْ' Nasibah makes the verb Mansoob",
        "ur": "مخففہ 'أَنْ' سے پہلے افعالِ یقین ہوتے ہیں اور وہ مضارع کو منصوب نہیں کرتی؛ جبکہ ناصبہ 'أَنْ' مضارع کو منصوب کرتی ہے"
      },
      {
        "en": "Both make the present verb Mansoob in all cases",
        "ur": "دونوں ہر حال میں مضارع کو منصوب کرتی ہیں"
      },
      {
        "en": "Mukhaffafah only comes with nouns",
        "ur": "مخففہ صرف اسماء کے ساتھ آتی ہے"
      },
      {
        "en": "There is no difference between them",
        "ur": "ان کے درمیان کوئی فرق نہیں"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 10 Quiz ---');

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

    // 4. Find or Create Lecture 10 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 10 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 10 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 10', 10)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 10: ID ${lectureId}`);
    }

    // 5. CAREFUL DELETION: Find existing Book 3 Lesson 10 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 10))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 10.`);
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

    // 6. Create the quiz for Book 3 Lesson 10
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 10 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 10 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

run();
