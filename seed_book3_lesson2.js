import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL || process.env.DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is the function of 'Waw al-Hal' (واو الحال) in Arabic grammar?",
    "ur": "عربی گرامر میں 'واو الحال' کا کیا کام ہوتا ہے؟",
    "options": [
      {
        "en": "It connects a circumstantial state clause (جملة حالية) to the main sentence",
        "ur": "یہ جملہ حالیہ کو اصل جملے سے جوڑتا ہے"
      },
      {
        "en": "It is used strictly for taking an oath (واو القسم)",
        "ur": "یہ صرف قسم کھانے کے لیے استعمال ہوتا ہے"
      },
      {
        "en": "It makes the following noun Majroor as a conjunction",
        "ur": "یہ بعد والے اسم کو مجرور بناتا ہے"
      },
      {
        "en": "It indicates future expectation",
        "ur": "یہ مستقبل کی توقع کو ظاہر کرتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the two primary grammatical meanings of 'La'alla' (لَعَلَّ) covered in Lesson 2?",
    "ur": "سبق 2 میں 'لَعَلَّ' کے کون سے دو بنیادی معانی بیان کیے گئے ہیں؟",
    "options": [
      {
        "en": "At-Tarajji (التَّرَجِّي - hope) and Al-Ishfaq (الإِشْفَاق - fear/apprehension)",
        "ur": "الترجی (امید) اور الإشفاق (خوف/اندیشہ)"
      },
      {
        "en": "At-Takeed (التأكيد) and At-Tasbeeh (التشبيه)",
        "ur": "التأکید اور التشبہ"
      },
      {
        "en": "Al-Inkar (الإنكار) and At-Ta'ajjub (التعجب)",
        "ur": "الإنکار اور التعجب"
      },
      {
        "en": "Al-Istithna' (الاستثناء) and Al-Hasr (الحصر)",
        "ur": "الاستثناء اور الحصر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What does 'At-Tarajji' (التَّرَجِّي) express when using 'La'alla'?",
    "ur": "'لعل' کے استعمال میں 'الترجي' سے کیا مراد ہے؟",
    "options": [
      {
        "en": "Expecting a desirable and achievable outcome (طلب الأمر المحبوب القريب المنال)",
        "ur": "کسی پسندیدہ اور ممکن الحصول بات کی امید رکھنا"
      },
      {
        "en": "Fearing a painful punishment",
        "ur": "کسی دردناک سزا کا ڈر ہونا"
      },
      {
        "en": "Wishing for an impossible past event",
        "ur": "کسی ناممکن ماضی کی تمنا کرنا"
      },
      {
        "en": "Asking a question about the unknown",
        "ur": "کسی نامعلوم بات کے بارے میں سوال کرنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What does 'Al-Ishfaq' (الإِشْفَاق) express when using 'La'alla'?",
    "ur": "'لعل' کے استعمال میں 'الإشفاق' سے کیا مراد ہے؟",
    "options": [
      {
        "en": "Fearing or being apprehensive of an undesirable event (الخوف من الأمر المكروه)",
        "ur": "کسی ناپسندیدہ یا نقصان دہ بات کا خوف و اندیشہ ہونا"
      },
      {
        "en": "Expressing gratitude and happiness",
        "ur": "خوشی اور شکر گزاری کا اظہار کرنا"
      },
      {
        "en": "Commanding someone to do an action",
        "ur": "کسی کو کام کا حکم دینا"
      },
      {
        "en": "Hoping for wealth and success",
        "ur": "دولت اور کامیابی کی امید رکھنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is an 'Ism Fi'l' (اسم الفِعْل) in Arabic grammar?",
    "ur": "عربی گرامر میں 'اسم الفعل' سے کیا مراد ہے؟",
    "options": [
      {
        "en": "A noun that denotes the meaning and action of a verb but does not accept verb signs",
        "ur": "وہ اسم جو فعل کا معنی اور عمل تو دیتا ہے لیکن فعل کی علامات قبول نہیں کرتا"
      },
      {
        "en": "A regular verbal noun (Masdar)",
        "ur": "ایک عام مصدر"
      },
      {
        "en": "A verb that has turned into a proper noun",
        "ur": "وہ فعل جو اسمِ علم بن گیا ہو"
      },
      {
        "en": "A noun that only appears in Majroor case",
        "ur": "وہ اسم جو صرف حالتِ جر میں آتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the conditions for 'Min' to function as 'Min Za'idah' (مِنْ الزائدة)?",
    "ur": "'مِنْ الزائدة' (زائد مِنْ) بننے کی کیا شرائط ہیں؟",
    "options": [
      {
        "en": "Must be preceded by Nafi, Nahi, or Istifham, and its Majroor must be Nakirah (indefinite)",
        "ur": "اس سے پہلے نفی، نہی یا استفہام ہو اور اس کا مجرور نکرہ ہو"
      },
      {
        "en": "Must be preceded by Inna and followed by a definite noun",
        "ur": "اس سے پہلے إنّ ہو اور اس کے بعد معرفہ اسم ہو"
      },
      {
        "en": "Must come at the very beginning of a sentence",
        "ur": "یہ جملے کے بالکل شروع میں آئے"
      },
      {
        "en": "Must be attached to an attached pronoun",
        "ur": "یہ کسی ضمیرِ متصل کے ساتھ جڑا ہوا ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Why is the word 'أَشْيَاءُ' (Ashya') classified as Diptote (الممنوع من الصرف)?",
    "ur": "لفظ 'أَشْيَاءُ' کو الممنوع من الصرف کیوں قرار دیا گیا ہے؟",
    "options": [
      {
        "en": "Because it originally ends with an extra Alif Mamdoodah (ألف التأنيث الممدودة)",
        "ur": "کیونکہ اصل ساخت کے اعتبار سے اس کے آخر میں الفِ تأنیث ممدودہ ہے"
      },
      {
        "en": "Because it is a foreign non-Arabic name",
        "ur": "کیونکہ یہ عجمی نام ہے"
      },
      {
        "en": "Because it is on the weight of 'Af'al'",
        "ur": "کیونکہ یہ أفعل کے وزن پر ہے"
      },
      {
        "en": "Because it is a verbal noun",
        "ur": "کیونکہ یہ مصدر ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When a Past Tense verb (فعل ماضٍ) is used for Du'a (الدُّعَاء), what timeframe does its meaning shift to?",
    "ur": "جب فعلِ ماضی کو دعا کے لیے استعمال کیا جائے تو اس کے معنی کس زمانے میں منتقل ہو جاتے ہیں؟",
    "options": [
      {
        "en": "Future (المُسْتَقْبَل)",
        "ur": "مستقبل (آئندہ زمانہ)"
      },
      {
        "en": "Past only (الماضي)",
        "ur": "صرف ماضی"
      },
      {
        "en": "Present continuous only",
        "ur": "صرف حال جاری"
      },
      {
        "en": "It loses all temporal meaning",
        "ur": "یہ تمام زمانی معانی کھو دیتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is a past tense verb used in supplication (Du'a) negated?",
    "ur": "دعا کے لیے استعمال ہونے والے فعلِ ماضی کی نفی کس حرف سے کی جاتی ہے؟",
    "options": [
      {
        "en": "Using 'لاَ' (e.g., لاَ فُضَّ فُوكَ)",
        "ur": "'لاَ' کے ذریعے (جیسے: لاَ فُضَّ فُوكَ)"
      },
      {
        "en": "Using 'لَمْ'",
        "ur": "'لَمْ' کے ذریعے"
      },
      {
        "en": "Using 'لَنْ'",
        "ur": "'لَنْ' کے ذریعے"
      },
      {
        "en": "Using 'لَيْسَ'",
        "ur": "'لَيْسَ' کے ذریعے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is the noun 'مَعَانٍ' (Ma'anin) declined in Raf' and Jar when indefinite?",
    "ur": "نکرہ حالت میں اسم 'مَعَانٍ' کی حالتِ رفع اور حالتِ جر میں اعرابی علامت کیا ہوتی ہے؟",
    "options": [
      {
        "en": "Estimated Damma / Kasra on the omitted Yā' (مقدرة على الياء المحذوفة)",
        "ur": "حذف شدہ یاء پر ضمہ مقدرہ / کسرہ مقدرہ"
      },
      {
        "en": "Apparent Fatha on the last letter",
        "ur": "آخری حرف پر ظاہری فتحہ"
      },
      {
        "en": "Apparent Damma on Alif",
        "ur": "الف پر ظاہری ضمہ"
      },
      {
        "en": "Sukoon on all letters",
        "ur": "تمام حروف پر سکون"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, in 'دَخَلْتُ المَسْجِدَ وَالإِمَامُ يَرْكَعُ', what is the position of 'وَالإِمَامُ يَرْكَعُ'?",
    "ur": "تمرين 1 کے جملے 'دَخَلْتُ المَسْجِدَ وَالإِمَامُ يَرْكَعُ' میں 'وَالإِمَامُ يَرْكَعُ' کا کیا موقعِ اعراب ہے؟",
    "options": [
      {
        "en": "Jumla Haliyyah in position of Nasb (في محل نصب حال)",
        "ur": "في محل نصب حال (جملہ حالیہ)"
      },
      {
        "en": "Khabar of Mubtada'",
        "ur": "مبتدا کی خبر"
      },
      {
        "en": "Na't (adjective)",
        "ur": "نعت (صفت)"
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
    "en": "Which of the following contains Waw al-Hal (واو الحال) from Exercise 1?",
    "ur": "تمرين 1 کے مطابق مندرجہ ذیل میں سے کس جملے میں واو الحال موجود ہے؟",
    "options": [
      {
        "en": "وَصَلْتُ المَطَارَ وَالشَّمْسُ تُشْرِقُ",
        "ur": "وَصَلْتُ المَطَارَ وَالشَّمْسُ تُشْرِقُ"
      },
      {
        "en": "جَاءَ حَامِدٌ وَمَحْمُودٌ",
        "ur": "جَاءَ حَامِدٌ وَمَحْمُودٌ"
      },
      {
        "en": "وَاللَّهِ لأَجْتَهِدَنَّ",
        "ur": "وَاللَّهِ لأَجْتَهِدَنَّ"
      },
      {
        "en": "كُلْ وَاشْرَبْ",
        "ur": "كُلْ وَاشْرَبْ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'خَرَجَ الطَّالِبُ وَهُوَ يَضْحَكُ', what connects the Hal clause to Sahib al-Hal?",
    "ur": "جملے 'خَرَجَ الطَّالِبُ وَهُوَ يَضْحَكُ' میں جملہ حالیہ کو صاحب الحال سے جوڑنے والا رابط کیا ہے؟",
    "options": [
      {
        "en": "The Waw and the pronoun 'هُوَ'",
        "ur": "واو اور ضمیر 'هُوَ'"
      },
      {
        "en": "Only the verb 'خرج'",
        "ur": "صرف فعل 'خرج'"
      },
      {
        "en": "The noun 'الطالب'",
        "ur": "اسم 'الطالب'"
      },
      {
        "en": "There is no connector",
        "ur": "کوئی رابط نہیں ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, in 'لَعَلَّ المُرَاقِبَ يَهَبُنِي كِتَاباً', what meaning does 'لَعَلَّ' express?",
    "ur": "تمرين 2 کے جملے 'لَعَلَّ المُرَاقِبَ يَهَبُنِي كِتَاباً' میں 'لعل' کیا معنی دے رہا ہے؟",
    "options": [
      {
        "en": "At-Tarajji (Hope / Desirable expectation)",
        "ur": "الترجي (پسندیدہ چیز کی امید)"
      },
      {
        "en": "Al-Ishfaq (Fear / Apprehension)",
        "ur": "الإشفاق (خوف و اندیشہ)"
      },
      {
        "en": "At-Tasbeeh (Resemblance)",
        "ur": "التشبيه (تشبیہ)"
      },
      {
        "en": "Al-Istithna' (Exception)",
        "ur": "الاستثناء (استثناء)"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, in 'لاَ تَدْخُلْ عَلَى المَرِيضِ لَعَلَّهُ نَائِمٌ', what meaning does 'لَعَلَّ' convey?",
    "ur": "تمرين 2 کے جملے 'لاَ تَدْخُلْ عَلَى المَرِيضِ لَعَلَّهُ نَائِمٌ' میں 'لعل' کیا معنی ظاہر کرتا ہے؟",
    "options": [
      {
        "en": "Al-Ishfaq (Fear of disturbing a sleeping patient)",
        "ur": "الإشفاق (مریض کی نیند خراب ہونے کا اندیشہ)"
      },
      {
        "en": "At-Tarajji (Desirable hope)",
        "ur": "الترجي (امید)"
      },
      {
        "en": "At-Takeed (Emphasis)",
        "ur": "التأكيد (تأکید)"
      },
      {
        "en": "At-Tamanni (Impossible wish)",
        "ur": "التمني (تمنا)"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In the sentence 'لَعَلَّ المَرِيضَ هَالِكٌ', what does 'لَعَلَّ' express?",
    "ur": "جملے 'لَعَلَّ المَرِيضَ هَالِكٌ' میں 'لعل' کس معنی کا افادہ کر رہا ہے؟",
    "options": [
      {
        "en": "Al-Ishfaq (Fear of destruction/death)",
        "ur": "الإشفاق (ہلاکت و موت کا اندیشہ)"
      },
      {
        "en": "At-Tarajji (Hope of good outcome)",
        "ur": "الترجي (اچھی بات کی امید)"
      },
      {
        "en": "Al-Amr (Command)",
        "ur": "الأمر (حکم)"
      },
      {
        "en": "Al-Nahi (Prohibition)",
        "ur": "النهي (نہی)"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, what category of words does 'وَيْهَ' (Weiha) belong to?",
    "ur": "تمرين 3 کے مطابق لفظ 'وَيْهَ' کا تعلق کس کیٹیگری سے ہے؟",
    "options": [
      {
        "en": "Ism Fi'l Amr (اسم فعل أمر)",
        "ur": "اسم فعل أمر"
      },
      {
        "en": "Harf Jar (حرف جر)",
        "ur": "حرف جر"
      },
      {
        "en": "Zarf Zaman (ظرف زمان)",
        "ur": "ظرف زمان"
      },
      {
        "en": "Masdar Mutlaq",
        "ur": "مصدر مطلق"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the meaning and action of the Ism Fi'l 'آهٍ'?",
    "ur": "اسم الفعل 'آهٍ' کا کیا معنی اور عمل ہوتا ہے؟",
    "options": [
      {
        "en": "It means 'أَتَوَجَّعُ' (I express pain/grief)",
        "ur": "اس کا معنی ہے 'أَتَوَجَّعُ' (میں درد/تکلیف کا اظہار کرتا ہوں)"
      },
      {
        "en": "It means 'اُكْتُبْ' (Write)",
        "ur": "اس کا معنی ہے 'اُكْتُبْ'"
      },
      {
        "en": "It means 'اِذْهَبْ' (Go)",
        "ur": "اس کا معنی ہے 'اِذْهَبْ'"
      },
      {
        "en": "It means 'انْتَظِرْ' (Wait)",
        "ur": "اس کا معنی ہے 'انْتَظِرْ'"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, why is 'مِنْ' extra in 'مَا رَأَيْتُ مِنْ أَحَدٍ'?",
    "ur": "تمرين 4 کے جملے 'مَا رَأَيْتُ مِنْ أَحَدٍ' میں 'مِنْ' کیوں زائدہ ہے؟",
    "options": [
      {
        "en": "Because it is preceded by Nafi (مَا) and its noun 'أَحَدٍ' is Nakirah",
        "ur": "کیونکہ اس سے پہلے نفی (مَا) ہے اور اسم 'أَحَدٍ' نکرہ ہے"
      },
      {
        "en": "Because it comes after a prepositional phrase",
        "ur": "کیونکہ یہ جار مجرور کے بعد ہے"
      },
      {
        "en": "Because it means 'from'",
        "ur": "کیونکہ اس کا معنی 'سے' ہے"
      },
      {
        "en": "Because it is part of Mudaf",
        "ur": "کیونکہ یہ مضاف کا حصہ ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'مَا جَاءَنَا مِنْ بَشِيرٍ', how is 'بَشِيرٍ' parsed syntactically?",
    "ur": "جملے 'مَا جَاءَنَا مِنْ بَشِيرٍ' میں 'بَشِيرٍ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Fa'il Marfoo' with estimated Damma due to extra Min (فاعل مرفوع بضمة مقدرة)",
        "ur": "زائدہ مِنْ کی وجہ سے ضمہ مقدرہ کے ساتھ فاعل مرفوع"
      },
      {
        "en": "Maf'ool Bihi Mansoob with Fatha",
        "ur": "فتحہ کے ساتھ مفعول بہ منصوب"
      },
      {
        "en": "Khabar of Ma",
        "ur": "ما کی خبر"
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
    "en": "Which condition is NOT met in 'خَرَجْتُ مِنَ البَيْتِ' for 'مِنْ' to be extra?",
    "ur": "جملے 'خَرَجْتُ مِنَ البَيْتِ' میں 'مِنْ' کے زائدہ نہ ہونے کی کیا وجہ ہے؟",
    "options": [
      {
        "en": "It is not preceded by negation/prohibition/question and 'البَيْتِ' is Definite (معرفة)",
        "ur": "اس سے پہلے نفی/نہی/استفہام نہیں ہے اور 'البَيْتِ' معرفہ ہے"
      },
      {
        "en": "It is at the end of sentence",
        "ur": "یہ جملے کے آخر میں ہے"
      },
      {
        "en": "Because the verb is past tense",
        "ur": "کیونکہ فعل ماضی ہے"
      },
      {
        "en": "Because 'Min' has a Fatha",
        "ur": "کیونکہ نون پر فتحہ ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In Exercise 5, how is 'أَشْيَاءَ' written in 'قَرَأْتُ عَنْ أَشْيَاءَ كَثِيرَةٍ'?",
    "ur": "تمرين 5 کے جملے 'قَرَأْتُ عَنْ أَشْيَاءَ كَثِيرَةٍ' میں 'أَشْيَاءَ' پر کیا اعراب آتا ہے؟",
    "options": [
      {
        "en": "Majroor with Fatha because it is Diptote (ممنوع من الصرف)",
        "ur": "الممنوع من الصرف ہونے کی بنا پر فتحہ کے ساتھ مجرور"
      },
      {
        "en": "Majroor with Kasra and Tanween (عن أشياءٍ)",
        "ur": "کسرہ اور تنوین کے ساتھ مجرور"
      },
      {
        "en": "Marfoo' with Damma (عن أشياءُ)",
        "ur": "ضمہ کے ساتھ مرفوع"
      },
      {
        "en": "Built on Sukoon",
        "ur": "سکون پر مبنی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "What happens to 'أَشْيَاءُ' when 'Al' is added to it (الأَشْيَاءُ) in Majroor case?",
    "ur": "حالتِ جر میں 'أَشْيَاءُ' پر جب 'ال' داخل ہو جائے (الأَشْيَاءُ) تو اس کا اعراب کیا ہوتا ہے؟",
    "options": [
      {
        "en": "It takes regular Kasra (e.g., عَنِ الأَشْيَاءِ)",
        "ur": "اس پر باقاعدہ کسرہ آ جاتا ہے (مثلاً عَنِ الأَشْيَاءِ)"
      },
      {
        "en": "It retains Fatha",
        "ur": "اس پر فتحہ ہی رہتا ہے"
      },
      {
        "en": "It takes Tanween",
        "ur": "اس پر تنوین آ جاتی ہے"
      },
      {
        "en": "It becomes Mabni",
        "ur": "یہ مبنی ہو جاتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "In Exercise 6, what does the past tense verb 'شَفَاكَ اللَّهُ' express?",
    "ur": "تمرين 6 میں فعلِ ماضی 'شَفَاكَ اللَّهُ' کس چیز کا اظہار کرتا ہے؟",
    "options": [
      {
        "en": "Du'a / Supplication for healing in the future",
        "ur": "شفایابی کے لیے دعا (مستقبل کے معنی میں)"
      },
      {
        "en": "A factual statement about past healing",
        "ur": "ماضی میں شفایابی کی خبر"
      },
      {
        "en": "A question about health",
        "ur": "صحت کے بارے میں سوال"
      },
      {
        "en": "A prohibition against medication",
        "ur": "دوا کی نہی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "How would you correctly express 'May Allah NOT paralyze your hand!' using past tense for Du'a?",
    "ur": "تمرين 6 کے مطابق 'خدا نہ کرے کہ تمہارا ہاتھ شل ہو' کا درست عربی جملہ (دعا بالنفى) کیا ہوگا؟",
    "options": [
      {
        "en": "لاَ شَلَّتْ يَدُكَ!",
        "ur": "لاَ شَلَّتْ يَدُكَ!"
      },
      {
        "en": "لَمْ تَشَلَّ يَدُكَ!",
        "ur": "لَمْ تَشَلَّ يَدُكَ!"
      },
      {
        "en": "لَنْ تَشَلَّ يَدُكَ!",
        "ur": "لَنْ تَشَلَّ يَدُكَ!"
      },
      {
        "en": "مَا شَلَّتْ يَدُكَ!",
        "ur": "مَا شَلَّتْ يَدُكَ!"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "In 'رَحِمَهُ اللَّهُ', what is the grammatical position of 'اللَّهُ'?",
    "ur": "جملے 'رَحِمَهُ اللَّهُ' میں لفظ جلالہ 'اللَّهُ' کا اعرابی موقع کیا ہے؟",
    "options": [
      {
        "en": "Fa'il Marfoo' with Damma",
        "ur": "فاعل مرفوع بالضمة"
      },
      {
        "en": "Maf'ool Bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Mudaf Ilayh Majroor",
        "ur": "مضاف الیہ مجرور"
      },
      {
        "en": "Khabar Marfoo'",
        "ur": "خبر مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 7",
    "en": "In Exercise 7, what is the Mansoob form of 'مَعَانٍ' in 'أَعْرِفُ مَعَانِيَ كَثِيرَةً'?",
    "ur": "تمرين 7 کے مطابق 'أَعْرِفُ مَعَانِيَ كَثِيرَةً' میں 'مَعَانٍ' کی منصوب شکل کیا ہے؟",
    "options": [
      {
        "en": "مَعَانِيَ (with apparent Fatha on Yā')",
        "ur": "مَعَانِيَ (یاء پر فتحہ ظاہرہ کے ساتھ)"
      },
      {
        "en": "مَعَانٍ",
        "ur": "مَعَانٍ"
      },
      {
        "en": "مَعَانِيًا",
        "ur": "مَعَانِيًا"
      },
      {
        "en": "مَعَانُ",
        "ur": "مَعَانُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 7",
    "en": "In 'هَذِهِ الكَلِمَةُ لَهَا مَعَانٍ كَثِيرَةٌ', why is the Yā' dropped from 'مَعَانٍ'?",
    "ur": "جملے 'هَذِهِ الكَلِمَةُ لَهَا مَعَانٍ كَثِيرَةٌ' میں 'مَعَانٍ' سے یاء کیوں حذف ہوئی ہے؟",
    "options": [
      {
        "en": "Because it is an indefinite Marfoo' Mankoos noun pattern (مرفوع بضمة مقدرة)",
        "ur": "کیونکہ یہ نکرہ مرفوع حالت میں اسمِ منقوص کے پیٹرن پر ہے"
      },
      {
        "en": "Because it is Mansoob",
        "ur": "کیونکہ یہ منصوب ہے"
      },
      {
        "en": "Because it has 'Al'",
        "ur": "کیونکہ اس پر 'ال' ہے"
      },
      {
        "en": "Because it is Mudaf",
        "ur": "کیونکہ یہ مضاف ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 7",
    "en": "How is 'مَعَانِي' written when made Mudaf to 'القُرْآن' in Majroor case ('في مَعَانِي القُرْآنِ')?",
    "ur": "حالتِ جر میں جب 'مَعَانِي' مضاف ہو (مثلاً 'في مَعَانِي القُرْآنِ') تو یاء کا کیا حکم ہے؟",
    "options": [
      {
        "en": "The Yā' is retained with estimated Kasra (في مَعَانِي القُرْآنِ)",
        "ur": "یاء کسرہ مقدرہ کے ساتھ باقی رہتی ہے"
      },
      {
        "en": "The Yā' must be dropped (في مَعَانِ القرآن)",
        "ur": "یاء کا حذف ہونا ضروری ہے"
      },
      {
        "en": "It takes Tanween",
        "ur": "اس پر تنوین آ جاتی ہے"
      },
      {
        "en": "It takes Fatha",
        "ur": "اس پر فتحہ آ جاتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 8",
    "en": "Which statement summarizes the grammatical rule for past tense verbs used in Du'a?",
    "ur": "دعا کے لیے استعمال ہونے والے فعلِ ماضی کے گرامر قاعدے کا خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "It functions as a past tense in form, but conveys future supplication in meaning",
        "ur": "یہ لفظاً فعلِ ماضی ہے لیکن معناً مستقبل کی دعا کا افادہ کرتا ہے"
      },
      {
        "en": "It becomes a present tense verb automatically",
        "ur": "یہ مضارع بن جاتا ہے"
      },
      {
        "en": "It can only be used with 'Inna'",
        "ur": "یہ صرف إنّ کے ساتھ آتا ہے"
      },
      {
        "en": "It cannot be negated",
        "ur": "اس کی نفی نہیں ہو سکتی"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 2 Quiz ---');

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

    // 4. Find or Create Lecture 02 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 2 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 02 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 02', 2)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 02: ID ${lectureId}`);
    }

    // 5. CAREFUL DELETION: Find existing Book 3 Lesson 2 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 2))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 2.`);
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

    // 6. Create the quiz for Book 3 Lesson 2
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 02 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 2 with ${questionsData.length} questions and Part designations!`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

run();
