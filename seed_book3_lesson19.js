import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is the primary derived verb pattern of Form III (باب فَاعَلَ) in Arabic?",
    "ur": "عربی زبان میں فارم III (بابِ فَاعَلَ) کی ماضی، مضارع، اور مصدر کی بنیادی وزن کیا ہے؟",
    "options": [
      {
        "en": "فَاعَلَ - يُفَاعِلُ - مُفَاعَلَةً / فِعَالاً",
        "ur": "فَاعَلَ - يُفَاعِلُ - مُفَاعَلَةً / فِعَالاً"
      },
      {
        "en": "فَعَّلَ - يُفَعِّلُ - تَفْعِيلاً",
        "ur": "فَعَّلَ - يُفَعِّلُ - تَفْعِيلاً"
      },
      {
        "en": "أَفْعَلَ - يُفْعِلُ - إِفْعَالاً",
        "ur": "أَفْعَلَ - يُفْعِلُ - إِفْعَالاً"
      },
      {
        "en": "تَفَعَّلَ - يَتَفَعَّلُ - تَفَعُّلاً",
        "ur": "تَفَعَّلَ - يَتَفَعَّلُ - تَفَعُّلاً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What general semantic meaning is most characteristic of Form III verbs (باب فَاعَلَ, e.g., كَاتَبَ، قَاتَلَ)?",
    "ur": "بابِ فَاعَلَ (مثلاً كَاتَبَ، قَاتَلَ) کے افعال میں غالب معنوی خصوصیت کیا ہوتی ہے؟",
    "options": [
      {
        "en": "Participation / Reciprocal action between two parties (المُشَارَكَةُ بَيْنَ اثْنَيْنِ)",
        "ur": "دو فریقوں کے درمیان باہمی شرکت و عمل (المشاركة بين اثنين)"
      },
      {
        "en": "Strictly passive voice",
        "ur": "صرف غیر فاعلی صورت"
      },
      {
        "en": "Causative action only",
        "ur": "صرف سببی عمل"
      },
      {
        "en": "Reflexive self-action",
        "ur": "خود پر عمل کرنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Al-Lām al-Muzahlaqah' (اللاَّمُ الـمُزَحْلَقَةُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'لامِ مزحلقہ' سے کیا مراد ہے؟",
    "options": [
      {
        "en": "Lām al-Ibtidā' shifted from Mubtada' to Khabar 'Inna' to prevent two emphasizing particles from meeting at the sentence start",
        "ur": "لامِ ابتداء جو 'انّ' کے بعد دو تاکیدی حروف کا اکٹھا ہونا روکنے کے لیے مبتدا سے ہٹ کر خبرِ 'انّ' پر منتقل ہو جاتی ہے"
      },
      {
        "en": "The preposition Laam meaning 'for'",
        "ur": "ملکیت بتانے والی لامِ باء"
      },
      {
        "en": "The Laam of imperative mood",
        "ur": "فعلِ امر کی لام"
      },
      {
        "en": "The Laam attached to past verbs for negation",
        "ur": "نفیِ ماضی کی لام"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Does 'Al-Lām al-Muzahlaqah' alter the grammatical case (إعراب) of Khabar Inna when attached to it?",
    "ur": "کیا 'لامِ مزحلقہ' خبرِ 'انّ' پر داخل ہو کر اس کا اعرابی حکم تبدیل کرتی ہے؟",
    "options": [
      {
        "en": "No, it adds emphasis (تأكيد) only and leaves Khabar Inna Marfoo'",
        "ur": "نہیں! یہ صرف تاکید پیدا کرتی ہے اور خبرِ 'انّ' مرفوع ہی رہتی ہے"
      },
      {
        "en": "Yes, it makes Khabar Inna Majroor",
        "ur": "جی ہاں! یہ خبر کو مجرور کر دیتی ہے"
      },
      {
        "en": "Yes, it makes Khabar Inna Mansoob",
        "ur": "جی ہاں! یہ خبر کو منصوب کر دیتی ہے"
      },
      {
        "en": "It makes the verb Majzoom",
        "ur": "یہ فعل کو مجزوم کر دیتی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What meaning does the particle 'قَدْ' convey when preceding a PAST tense verb (فعل ماضٍ, e.g., قَدْ حَضَرَ الـمُدَرِّسُ)?",
    "ur": "جب حرف 'قَدْ' فعلِ ماضی سے پہلے آئے (مثلاً قَدْ حَضَرَ الـمُدَرِّسُ) تو یہ کیا معنی دیتا ہے؟",
    "options": [
      {
        "en": "Certainty/Emphasis (التَّأْكِيد) and closeness of action to present time (التَّقْرِيب)",
        "ur": "تاکید (یقین) اور عمل کا موجودہ وقت سے قریب ہونا (التقریب)"
      },
      {
        "en": "Doubt and possibility (الشك والاحتمال)",
        "ur": "شک و احتمال"
      },
      {
        "en": "Scarcity/Rarity (التقليل)",
        "ur": "تقلیل/کمی"
      },
      {
        "en": "Future negation",
        "ur": "مستقبل کی نفی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What meaning does 'قَدْ' usually convey when preceding a PRESENT tense verb (فعل مضارع, e.g., قَدْ يَنْجَحُ الكَسْلاَنُ)?",
    "ur": "جب حرف 'قَدْ' فعلِ مضارع سے پہلے آئے (مثلاً قَدْ يَنْجَحُ الكَسْلاَنُ) تو یہ عموماً کیا معنی دیتا ہے؟",
    "options": [
      {
        "en": "Possibility/Doubt (الاحتمال/الشك) or Rarity/Scarcity (التَّقْلِيل)",
        "ur": "احتمال/شک یا تقلیل/کمی"
      },
      {
        "en": "Absolute past obligation",
        "ur": "ماضیِ واجب"
      },
      {
        "en": "Prohibition (النهي)",
        "ur": "نہی/ممانعت"
      },
      {
        "en": "Past negation",
        "ur": "ماضی کی نفی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is the plural word 'ذُوُو' / 'ذَوُو' (plural of ذُو) grammatically declined?",
    "ur": "لفظ 'ذُو' کی جمع 'ذُوُو' / 'ذَوُو' کا اعرابی نظام کس قاعدے پر چلتا ہے؟",
    "options": [
      {
        "en": "Declined like Sound Masculine Plural: Marfoo' with Waw (ذَوُو), Mansoob/Majroor with Yā' (ذَوِي)",
        "ur": "جمع مذكر سالم کی طرح: حالتِ رفع میں واؤ (ذَوُو) اور حالتِ نصب/جر میں یاء (ذَوِي)"
      },
      {
        "en": "Declined with vowel signs on Alif",
        "ur": "الف پر حرکاتِ اعراب کے ساتھ"
      },
      {
        "en": "Mabni on Sukoon in all cases",
        "ur": "تمام حالتوں میں سکون پر مبنی"
      },
      {
        "en": "Declined as Diptote (ممنوع من الصرف)",
        "ur": "غیر منصرف کی طرح"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What happens when 'لَكِنَّ' (sister of Inna) is lightened to 'لَكِنْ' (Mukhaffafah)?",
    "ur": "جب مشبہ بالفعل حرف 'لَكِنَّ' کو مخفف کر کے 'لَكِنْ' پڑھا جائے تو اس کے عمل کا کیا حکم ہے؟",
    "options": [
      {
        "en": "It loses its governance (تُلْغَى/تُهْمَلُ) and no longer causes Nasb to nouns",
        "ur": "اس کا عمل باطل (ملغى/مہمل) ہو جاتا ہے اور یہ اسم کو منصوب نہیں کرتی"
      },
      {
        "en": "It makes the following noun Majroor",
        "ur": "یہ بعد والے اسم کو مجرور کر دیتی ہے"
      },
      {
        "en": "It doubles its governance",
        "ur": "اس کا عمل دوگنا ہو جاتا ہے"
      },
      {
        "en": "It can only precede proper nouns",
        "ur": "یہ صرف اسماءِ علم پر داخل ہوتی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In demonstrative pronouns like 'ذَالِكَ', 'ذَالِكُمَا', 'ذَالِكُمْ', 'ذَالِكُنَّ', what changes according to the audience?",
    "ur": "اسماءِ اشارہ 'ذَالِكَ'، 'ذَالِكُمَا'، 'ذَالِكُمْ'، 'ذَالِكُنَّ' میں مخاطب کی جنس اور تعداد کے مطابق کیا چیز تبدیل ہوتی ہے؟",
    "options": [
      {
        "en": "The Kaaf of Address (كَافُ الخِطَابِ) varies according to the addressee while the core demonstrative remains unchanged",
        "ur": "کافِ خطاب (كاف الخطاب) مخاطب کے مطابق بدلتی ہے جبکہ اصل اسمِ اشارہ اپنی جگہ رہتا ہے"
      },
      {
        "en": "The core demonstrative 'ذا' changes entirely",
        "ur": "اصل اسم اشارہ 'ذا' تبدیل ہو جاتا ہے"
      },
      {
        "en": "The word becomes a verb",
        "ur": "لفظ فعل بن جاتا ہے"
      },
      {
        "en": "No part changes at all",
        "ur": "کوئی حصہ نہیں بدلتا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the standard verbal noun pattern (وزن المصدر) for professions and crafts derived from Form I verbs (e.g., كِتَابَة، زِرَاعَة، صِنَاعَة)?",
    "ur": "عربی زبان میں پیشوں، صنوعات اور حرفت کے مصادر کا غالباً کون سا وزن آتا ہے (جیسے: كِتَابَة، زِرَاعَة، صِنَاعَة)؟",
    "options": [
      {
        "en": "فِعَالَةٌ (Fi'ālah)",
        "ur": "فِعَالَةٌ (مثلاً كِتَابَةٌ، زِرَاعَةٌ، صِنَاعَةٌ)"
      },
      {
        "en": "تَفْعِيلٌ",
        "ur": "تَفْعِيلٌ"
      },
      {
        "en": "فُعُولٌ",
        "ur": "فُعُولٌ"
      },
      {
        "en": "مَفْعَلَةٌ",
        "ur": "مَفْعَلَةٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, what is the Masdar of the Form III verb 'سَافَرَ'?",
    "ur": "تمرين 1 کے مطابق فارم III فعل 'سَافَرَ' کے دو بنیادی مصادر میں سے کون سا معروف ہے؟",
    "options": [
      {
        "en": "مُسَافَرَةٌ / سِفَارٌ (Musāfaratun / Sifārun)",
        "ur": "مُسَافَرَةٌ / سِفَارٌ"
      },
      {
        "en": "تسفير",
        "ur": "تسفير"
      },
      {
        "en": "إسفار",
        "ur": "إسفار"
      },
      {
        "en": "استسفار",
        "ur": "استسفار"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the Active Participle (اسم الفاعل) of Form III verb 'قَاتَلَ'?",
    "ur": "فعل 'قَاتَلَ' (باب فاعل) کا اسمِ فاعل کیا ہے؟",
    "options": [
      {
        "en": "مُقَاتِلٌ (Muqātilun - with Kasra on Ayn radical)",
        "ur": "مُقَاتِلٌ (عین کلمہ پر کسرہ کے ساتھ)"
      },
      {
        "en": "مُقَاتَلٌ",
        "ur": "مُقَاتَلٌ"
      },
      {
        "en": "قَاتِلٌ",
        "ur": "قَاتِلٌ"
      },
      {
        "en": "قتيل",
        "ur": "قتيل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the Passive Participle (اسم المفعول) of Form III verb 'شَاهَدَ'?",
    "ur": "فعل 'شَاهَدَ' کا اسمِ مفعول کیا ہے؟",
    "options": [
      {
        "en": "مُشَاهَدٌ (Mushāhadun - with Fatha on Ayn radical)",
        "ur": "مُشَاهَدٌ (عین کلمہ پر فتحہ کے ساتھ)"
      },
      {
        "en": "مُشَاهِدٌ",
        "ur": "مُشَاهِدٌ"
      },
      {
        "en": "شَاهِدٌ",
        "ur": "شَاهِدٌ"
      },
      {
        "en": "مشہود",
        "ur": "مشہود"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Form the Imperative (فعل الأمر) for Form III verb 'سَامَحَ' (to forgive):",
    "ur": "فعل 'سَامَحَ' (درگزر کرنا) کا فعلِ امر کیا ہوگا؟",
    "options": [
      {
        "en": "سَامِحْ (Sāmih - with Sukoon on Ha')",
        "ur": "سَامِحْ (حاء پر سکون کے ساتھ)"
      },
      {
        "en": "سامَحَ",
        "ur": "سامَحَ"
      },
      {
        "en": "أَسْمِحْ",
        "ur": "أَسْمِحْ"
      },
      {
        "en": "تسامَحْ",
        "ur": "تسامَحْ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, identify Lām al-Muzahlaqah in 'إِنَّ اللَّهَ لَغَفُورٌ رَحِيمٌ':",
    "ur": "تمرين 2 کے مطابق 'إِنَّ اللَّهَ لَغَفُورٌ رَحِيمٌ' میں 'لَغَفُورٌ' کا کیا ترکیبی تجزیہ ہے؟",
    "options": [
      {
        "en": "Khabar Inna Marfoo' with Damma, carrying Lām al-Muzahlaqah for emphasis",
        "ur": "خبرِ 'انّ' مرفوع بالضمة، جس پر تاکید کے لیے لامِ مزحلقہ داخل ہے"
      },
      {
        "en": "Ism Inna Mansoob",
        "ur": "اسم انّ منصوب"
      },
      {
        "en": "Prepositional phrase",
        "ur": "جار و مجرور"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Insert Lām al-Muzahlaqah into: 'إِنَّ الدَّرْسَ مُفِيدٌ':",
    "ur": "جملے 'إِنَّ الدَّرْسَ مُفِيدٌ' میں درست مقام پر لامِ مزحلقہ کا اضافہ کریں:",
    "options": [
      {
        "en": "إِنَّ الدَّرْسَ لَمُفِيدٌ (Inna ad-darsa la-mufīdun)",
        "ur": "إِنَّ الدَّرْسَ لَمُفِيدٌ"
      },
      {
        "en": "لَإِنَّ الدَّرْسَ مُفِيدٌ",
        "ur": "لَإِنَّ الدَّرْسَ مُفِيدٌ"
      },
      {
        "en": "إِنَّ لَالدَّرْسَ مُفِيدٌ",
        "ur": "إِنَّ لَالدَّرْسَ مُفِيدٌ"
      },
      {
        "en": "إِنَّ الدَّرْسَ مُفِيداً لَـ",
        "ur": "إِنَّ الدَّرْسَ مُفِيداً لَـ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ' (Qur'an 14:39), what is the function of the Laam in 'لَسَمِيعُ'?",
    "ur": "قرآنی آیہ 'إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ' میں 'لَسَمِيعُ' پر لائی گئی لام کا کیا فائدہ اور نام ہے؟",
    "options": [
      {
        "en": "Lām al-Muzahlaqah attached to Khabar Inna to emphasize the statement",
        "ur": "خبرِ انّ پر داخل لامِ مزحلقہ جو جملے میں تاکید کا فائدہ دیتی ہے"
      },
      {
        "en": "Laam of prohibition",
        "ur": "لامِ نہی"
      },
      {
        "en": "Laam of ownership",
        "ur": "لامِ ملکیت"
      },
      {
        "en": "Laam of imperative",
        "ur": "لامِ امر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Can Lām al-Muzahlaqah enter upon delayed Ism Inna (اسم إنّ المؤخر, e.g., 'إِنَّ فِي ذَلِكَ لَعِبْرَةً')?",
    "ur": "کیا لامِ مزحلقہ مؤخر اسمِ 'انّ' پر داخل ہو سکتی ہے (جیسے: 'إِنَّ فِي ذَلِكَ لَعِبْرَةً')؟",
    "options": [
      {
        "en": "Yes, when Ism Inna is delayed after its Jar-wa-Majroor Khabar",
        "ur": "جی ہاں! جب اسمِ انّ اپنی خبرِ جار و مجرور کے بعد مؤخر ہو کر آئے"
      },
      {
        "en": "No, it is strictly forbidden",
        "ur": "نہیں! یہ بالکل ممنوع ہے"
      },
      {
        "en": "Only in poetry",
        "ur": "صرف شاعری میں"
      },
      {
        "en": "Only with proper nouns",
        "ur": "صرف اسماءِ علم کے ساتھ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, determine the meaning of 'قَدْ' in 'قَدْ يَنْزِلُ الـمَطَرُ غَداً':",
    "ur": "تمرين 3 کے مطابق 'قَدْ يَنْزِلُ الـمَطَرُ غَداً' میں 'قَدْ' کا کیا معنی و مفہوم ہے؟",
    "options": [
      {
        "en": "Expresses possibility / likelihood (الاحتمال / الشك)",
        "ur": "احتمال و امکان ظاہر کرنا (شاید کل بارش نازل ہو)"
      },
      {
        "en": "Expresses absolute certainty of past action",
        "ur": "ماضی کی یقینی تاکید"
      },
      {
        "en": "Expresses prohibition",
        "ur": "ممانعت"
      },
      {
        "en": "Expresses future obligation",
        "ur": "مستقبل کا وجوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Determine the meaning of 'قَدْ' in 'قَدْ قَامَتِ الصَّلاَةُ':",
    "ur": "اقامت کے الفاظ 'قَدْ قَامَتِ الصَّلاَةُ' میں 'قَدْ' کا کیا مفہوم ہے؟",
    "options": [
      {
        "en": "Expresses closeness of action to execution (التَّقْرِيب)",
        "ur": "عمل کے وقت کے بالکل قریب ہونے کا اظہار (التقریب)"
      },
      {
        "en": "Expresses doubt",
        "ur": "شک و شبہ"
      },
      {
        "en": "Expresses rarity",
        "ur": "کمی و ندرت"
      },
      {
        "en": "Expresses negation",
        "ur": "نفی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Parse 'حَامِدٌ' in 'جَاءَ الطُّلاَّبُ لَكِنْ حَامِدٌ غَائِبٌ':",
    "ur": "جملے 'جَاءَ الطُّلاَّبُ لَكِنْ حَامِدٌ غَائِبٌ' میں 'حَامِدٌ' کا کیا اعرابی منصب ہے؟",
    "options": [
      {
        "en": "Mubtada' Marfoo' with Damma because 'لَكِنْ' is lightened and inactive",
        "ur": "'لَكِنْ' کے مخفف و غیر عامل ہونے کی وجہ سے مبتدأ مرفوع بالضمة"
      },
      {
        "en": "Ism Lakinna Mansoob",
        "ur": "اسمِ لیکنّ منصوب"
      },
      {
        "en": "Fa'il",
        "ur": "فاعل"
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
    "en": "Can 'لَكِنْ' Mukhaffafah enter upon a VERBAL sentence (e.g., 'غَابَ عَلِيٌّ لَكِنْ حَضَرَ حَامِدٌ')?",
    "ur": "کیا مخففہ 'لَكِنْ' جملہ فعلیہ پر داخل ہو سکتی ہے (جیسے: 'غَابَ عَلِيٌّ لَكِنْ حَضَرَ حَامِدٌ')؟",
    "options": [
      {
        "en": "Yes, because lightening it removes its restriction to nominal sentences",
        "ur": "جی ہاں! کیونکہ مخفف ہونے کے بعد اس کی جملہ اسمیہ کے ساتھ اختصاص ختم ہو جاتی ہے"
      },
      {
        "en": "No, it is strictly forbidden",
        "ur": "نہیں! بالکل نہیں"
      },
      {
        "en": "Only with negative verbs",
        "ur": "صرف منفی افعال کے ساتھ"
      },
      {
        "en": "Only in questions",
        "ur": "صرف سوالات میں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, complete: 'حَضَرَ ... القُرْبَى' (The relatives attended - Marfoo' subject):",
    "ur": "تمرين 4 کے مطابق جملہ مکمل کریں: 'حَضَرَ ... القُرْبَى' (قرابت دار حاضر ہوئے):",
    "options": [
      {
        "en": "ذَوُو (Dhawū - Marfoo' with Waw as Mudaf)",
        "ur": "ذَوُو (حالتِ رفع میں واؤ کے ساتھ مضاف)"
      },
      {
        "en": "ذَوِي",
        "ur": "ذَوِي"
      },
      {
        "en": "ذُو",
        "ur": "ذُو"
      },
      {
        "en": "ذَوِينَ",
        "ur": "ذَوِينَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Complete: 'أَكْرَمْتُ ... القُرْبَى' (I honored the relatives - Mansoob object):",
    "ur": "جملہ مکمل کریں: 'أَكْرَمْتُ ... القُرْبَى' (میں نے قرابت داروں کی عزت کی):",
    "options": [
      {
        "en": "ذَوِي (Dhawī - Mansoob with Yā' as Mudaf)",
        "ur": "ذَوِي (حالتِ نصب میں یاء کے ساتھ مضاف)"
      },
      {
        "en": "ذَوُو",
        "ur": "ذَوُو"
      },
      {
        "en": "ذُو",
        "ur": "ذُو"
      },
      {
        "en": "ذَوُونَ",
        "ur": "ذَوُونَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Addressing TWO FEMALES, how is the demonstrative 'ذَالِكَ' formed with Kaaf of address?",
    "ur": "دو خواتین (تثنیہ مؤنث) کو مخاطب کرتے ہوئے اسمِ اشارہ 'ذَالِكَ' میں کافِ خطاب کی کیا شکل ہوگی؟",
    "options": [
      {
        "en": "ذَالِكُمَا (Dhālikumā - Kaaf of address in dual)",
        "ur": "ذَالِكُمَا (تثنیہ کافِ خطاب کے ساتھ)"
      },
      {
        "en": "ذَالِكِ",
        "ur": "ذَالِكِ"
      },
      {
        "en": "ذَالِكُنَّ",
        "ur": "ذَالِكُنَّ"
      },
      {
        "en": "ذَالِكُمْ",
        "ur": "ذَالِكُمْ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَإِنَّ رَبَّكَ لَذُو مَغْفِرَةٍ لِلنَّاسِ' (Qur'an 13:6), what is 'لَذُو'?",
    "ur": "قرآنی آیہ 'وَإِنَّ رَبَّكَ لَذُو مَغْفِرَةٍ لِلنَّاسِ' میں 'لَذُو' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Khabar Inna Marfoo' with Waw, preceded by Lām al-Muzahlaqah (خبر إنّ مرفوع بالواو ومعها اللام المزحلقة)",
        "ur": "خبرِ انّ مرفوع بالواو (اسماءِ خمسہ) مع لامِ مزحلقہ"
      },
      {
        "en": "Ism Inna Mansoob",
        "ur": "اسم انّ منصوب"
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
    "part": "Exercise 5",
    "en": "In the Quranic verse 'قَالُوا تَاللَّهِ لَقَدْ آثَرَكَ اللَّهُ عَلَيْنَا' (Qur'an 12:91), why is 'لَقَدْ' used before the past verb?",
    "ur": "آیت مبارکہ 'تَاللَّهِ لَقَدْ آثَرَكَ اللَّهُ عَلَيْنَا' میں فعلِ ماضی سے پہلے 'لَقَدْ' لانے کی کیا وجہ ہے؟",
    "options": [
      {
        "en": "To emphasize the answer of oath (جواب القسم) using both Laam of oath and Qad",
        "ur": "قسم کے جواب (جواب القسم) کو لامِ قسم اور قد کے ذریعے مضبوط تاکید دینا"
      },
      {
        "en": "To express doubt",
        "ur": "شک کا اظہار کرنا"
      },
      {
        "en": "To negate the verb",
        "ur": "فعل کی نفی کرنا"
      },
      {
        "en": "To make the verb future tense",
        "ur": "فعل کو مستقبل بنانا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "How is the broken plural 'خَطَايَا' (plural of خَطِيئَةٌ) formed morphologically?",
    "ur": "لفظ 'خَطِيئَةٌ' کی جمعِ تکسیر 'خَطَايَا' کس قیاسی وزنی ضابطے پر آتی ہے؟",
    "options": [
      {
        "en": "Plural pattern 'فَعَالَى' (like قَضِيَّةٌ → قَضَايَا)",
        "ur": "وزن 'فَعَالَى' (جیسے قَضِيَّةٌ → قَضَايَا)"
      },
      {
        "en": "Plural pattern 'فُعُولٌ'",
        "ur": "وزن فُعُولٌ"
      },
      {
        "en": "Plural pattern 'مَفَاعِلُ'",
        "ur": "وزن مَفَاعِلُ"
      },
      {
        "en": "Plural pattern 'أَفْعَالٌ'",
        "ur": "وزن أَفْعَالٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'إِنَّ زَيْداً لَشَاعِرٌ':",
    "ur": "پورے جملے 'إِنَّ زَيْداً لَشَاعِرٌ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "إِنَّ: حرف توكيد ونصب، زَيْداً: اسمها منصوب بالفتحة، لَـ: اللام المزحلقة للتأكيد، شَاعِرٌ: خبرها مرفوع بالضمة",
        "ur": "إِنَّ: حرفِ توکید و نصب، زَيْداً: اسم انّ منصوب بالفتحة، لَـ: لامِ مزحلقہ برائے تاکید، شَاعِرٌ: خبر انّ مرفوع بالضمة"
      },
      {
        "en": "إن: حرف جر، زيد: اسم مجرور، لشاعر: خبر",
        "ur": "ان حرف جر، زید اسم مجرور، لشاعر خبر"
      },
      {
        "en": "إن: مبتدأ، زيد: خبر، لشاعر: مفعول به",
        "ur": "ان مبتدأ، زید خبر، لشاعر مفعول بہ"
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
    "en": "Which statement accurately summarizes the core grammar topics of Lesson 19?",
    "ur": "سبق 19 کے بنیادی گرامر موضوعات کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers Form III verb (فَاعَلَ), Lām al-Muzahlaqah in Khabar Inna, meanings of Qad, Dhawū as plural of Dhū, lightened Lakin, and Kaaf of address variations",
        "ur": "اس سبق میں بابِ فاعل، خبرِ انّ میں لامِ مزحلقہ، قد کے معانی، ذو کی جمع ذوو، لیکن المخففہ، اور کافِ خطاب کے تصرفات کا احاطہ کیا گیا ہے"
      },
      {
        "en": "Covers passive voice only",
        "ur": "صرف غیر فاعلی افعال کا احاطہ"
      },
      {
        "en": "Covers numbers 1 to 10 only",
        "ur": "صرف 1 سے 10 تک اعداد کا احاطہ"
      },
      {
        "en": "Covers condition particles only",
        "ur": "صرف ادواتِ شرط کا احاطہ"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 19 Quiz ---');
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

    // 3. Find or Create Lecture 19 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 19 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 19 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 19', 19)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 19: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 19 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 19))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 19.`);
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

    // 5. Create the quiz for Book 3 Lesson 19
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 19 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 19 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
