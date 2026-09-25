import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What are the two primary structural divisions of pronouns (الضمائر) in Arabic grammar based on visibility in speech?",
    "ur": "عربی گرامر میں کلام میں ظاہری وجود کے اعتبار سے ضمائر کی دو بنیادی اقسام کون سی ہیں؟",
    "options": [
      {
        "en": "Al-Bārizah (البارزة - prominent/visible) and Al-Mustatirah (المستترة - hidden/implicit)",
        "ur": "البارزة (ظاہر و نمایاں) اور المستترة (پوشیدہ و مستتر)"
      },
      {
        "en": "Marfoo' and Majroor only",
        "ur": "صرف مرفوع اور مجرور"
      },
      {
        "en": "Singular and Plural only",
        "ur": "صرف واحد اور جمع"
      },
      {
        "en": "Past and Present only",
        "ur": "صرف ماضی اور مضارع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the two subdivisions of Al-Bārizah (visible) pronouns in Arabic?",
    "ur": "اسمِ بارز (ظاہری ضمائر) کی آگے دو بنیادی قسمیں کون سی ہیں؟",
    "options": [
      {
        "en": "Al-Muttaṣilah (المتصلة - attached) and Al-Munfaṣilah (المنفصلة - detached)",
        "ur": "المتصلة (پیوستہ و متصل) اور المنفصلة (الگ و منفصل)"
      },
      {
        "en": "Diptote and Triptote",
        "ur": "منصرف اور غیر منصرف"
      },
      {
        "en": "Active and Passive",
        "ur": "معروف اور مجہول"
      },
      {
        "en": "Nominal and Verbal",
        "ur": "اسمیہ اور فعلیہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are 'Damā'ir an-Naṣb al-Munfaṣilah' (ضمائر النصب المنفصلة) in Arabic?",
    "ur": "عربی زبان میں 'ضمائرِ نصبِ منفصلہ' کی کیا تعریف اور پہچان ہے؟",
    "options": [
      {
        "en": "Detached pronouns specifically used in position of Nasb (e.g., إِيَّايَ، إِيَّانَا، إِيَّاكَ، إِيَّاهُ)",
        "ur": "وہ الگ واقع ہونے والی ضمائر جو حالتِ نصب (في محل نصب) میں استعمال ہوتی ہیں (جیسے: إِيَّايَ، إِيَّاكَ، إِيَّاهُ)"
      },
      {
        "en": "Pronouns used only for Raf' at the start of sentences (أنا، أنت، هو)",
        "ur": "صرف حالتِ رفع کے لیے آنے والی ضمائر"
      },
      {
        "en": "Attached suffix pronouns (ك، هـ، ي)",
        "ur": "فعل کے ساتھ جڑی ہوئی ضمائر"
      },
      {
        "en": "Prepositions of Jarr",
        "ur": "حروفِ جر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In the Quranic verse 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ' (Qur'an 1:5), why is 'إِيَّاكَ' placed BEFORE the verb?",
    "ur": "آیت مبارکہ 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ' میں مفعول 'إِيَّاكَ' کو فعل سے پہلے کیوں مقدم کیا گیا ہے؟",
    "options": [
      {
        "en": "To express exclusivity, restriction, and emphasis (الَحَصْرُ وَالاِخْتِصَاصُ - 'You ALONE we worship')",
        "ur": "حصر، تخصیص اور تاکید پیدا کرنے کے لیے ('ہم صرف اور صرف تیری ہی عبادت کرتے ہیں')"
      },
      {
        "en": "Because it is required for rhyming",
        "ur": "صرف قافیہ ملانے کے لیے"
      },
      {
        "en": "Because the verb is past tense",
        "ur": "کیونکہ فعل ماضی ہے"
      },
      {
        "en": "Because 'إِيَّاكَ' is Fa'il",
        "ur": "کیونکہ إِيَّاكَ فاعل ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is 'إِيَّاكَ' parsed in 'إِيَّاكَ نَعْبُدُ'?",
    "ur": "ترکیب 'إِيَّاكَ نَعْبُدُ' میں لفظ 'إِيَّاكَ' کا اعرابی منصب کیا ہے؟",
    "options": [
      {
        "en": "Detached pronoun in position of Nasb as Advanced Direct Object (ضمير منفصل مبني في محل نصب مفعول به مقدم)",
        "ur": "فعل 'نعبد' کا مقدم مفعول بہ (ضمير منفصل في محل نصب)"
      },
      {
        "en": "Mubtada' Marfoo'",
        "ur": "مبتدأ مرفوع"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Harf Nida'",
        "ur": "حرفِ نداء"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When is it MANDATORY to use a detached Nasb pronoun instead of an attached one?",
    "ur": "منفصل نصب کی ضمیر لانا کب واجب ہو جاتا ہے؟",
    "options": [
      {
        "en": "When the object precedes its verb (مفعول مقدم) OR occurs after 'إِلاَّ' (e.g., مَا نَعْبُدُ إِلاَّ إِيَّاكَ)",
        "ur": "جب مفعول اپنے فعل پر مقدم ہو جائے یا استثناء 'إِلاَّ' کے بعد واقع ہو (جیسے: مَا نَعْبُدُ إِلاَّ إِيَّاكَ)"
      },
      {
        "en": "When the verb is in past tense",
        "ur": "جب فعل ماضی ہو"
      },
      {
        "en": "When the noun is feminine",
        "ur": "جب اسم مؤنث ہو"
      },
      {
        "en": "When used with prepositions",
        "ur": "جب حرفِ جر کے ساتھ ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What semantic domain does the Form I triliteral Masdar pattern 'فَعِيلٌ' (e.g., صَهِيلٌ، زَئِيرٌ، نَهِيقٌ) typically indicate?",
    "ur": "ثلاثی مجرد کا مصدر وزن 'فَعِيلٌ' (مثلاً صَهِيلٌ، زَئِيرٌ، نَهِيقٌ) عموماً کس معنوی خصوصیت کو ظاہر کرتا ہے؟",
    "options": [
      {
        "en": "Sounds and noises of animals and nature (الأَصْوَاتُ)",
        "ur": "جانوروں، پرندوں اور قدرت کی آوازوں (الأصوات) کو ظاہر کرنا"
      },
      {
        "en": "Colors and defects",
        "ur": "رنگ اور عیوب"
      },
      {
        "en": "Professions and crafts",
        "ur": "پیشے اور حرفت"
      },
      {
        "en": "Place of action",
        "ur": "فعل کی جگہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Match the sound 'صَهِيلٌ' to its correct animal source:",
    "ur": "عربی لفظ 'صَهِيلٌ' کس جانور کی مخصوص آواز کے لیے بولا جاتا ہے؟",
    "options": [
      {
        "en": "Neighing of a horse (صَهِيلُ الخَيْلِ)",
        "ur": "گھوڑے کی ہنکار/آواز (صَهِيلُ الخَيْلِ)"
      },
      {
        "en": "Roar of a lion",
        "ur": "شیر کی دہاڑ"
      },
      {
        "en": "Braying of a donkey",
        "ur": "گدھے کی ڈھینچوں ڈھینچوں"
      },
      {
        "en": "Barking of a dog",
        "ur": "کتے کا بھونکنا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Match the sound 'زَئِيرٌ' to its correct animal source:",
    "ur": "عربی لفظ 'زَئِيرٌ' کس جانور کی آواز ہے؟",
    "options": [
      {
        "en": "Roar of a lion (زَئِيرُ الأَسَدِ)",
        "ur": "شیر کی دہاڑ (زَئِيرُ الأَسَدِ)"
      },
      {
        "en": "Neighing of a horse",
        "ur": "گھوڑے کی آواز"
      },
      {
        "en": "Braying of a donkey",
        "ur": "گدھے کی آواز"
      },
      {
        "en": "Crowing of a rooster",
        "ur": "مرغ کی اذان"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Match the sound 'نَهِيقٌ' to its correct animal source:",
    "ur": "عربی لفظ 'نَهِيقٌ' کس جانور کی آواز کے لیے استعمال ہوتا ہے؟",
    "options": [
      {
        "en": "Braying of a donkey (نَهِيقُ الحِمَارِ)",
        "ur": "گدھے کی آواز (نَهِيقُ الحِمَارِ)"
      },
      {
        "en": "Neighing of a horse",
        "ur": "گھوڑے کی آواز"
      },
      {
        "en": "Roar of a lion",
        "ur": "شیر کی دہاڑ"
      },
      {
        "en": "Howling of a wolf",
        "ur": "بھیڑیے کی چیخ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, what detached Nasb pronoun represents 1st Person Singular ('Me')?",
    "ur": "تمرين 1 کے مطابق متکلم واحد ('مجھے/مجھ کو') کے لیے کون سی منفصل ضمیرِ نصب آتی ہے؟",
    "options": [
      {
        "en": "إِيَّايَ (Iyyāya)",
        "ur": "إِيَّايَ"
      },
      {
        "en": "إِيَّانَا",
        "ur": "إِيَّانَا"
      },
      {
        "en": "إِيَّاكَ",
        "ur": "إِيَّاكَ"
      },
      {
        "en": "إِيَّاهُ",
        "ur": "إِيَّاهُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What detached Nasb pronoun represents 1st Person Plural ('Us')?",
    "ur": "متکلم مع الغير/جمع ('ہمیں/ہم کو') کے لیے کون سی منفصل ضمیرِ نصب آتی ہے؟",
    "options": [
      {
        "en": "إِيَّانَا (Iyyānā)",
        "ur": "إِيَّانَا"
      },
      {
        "en": "إِيَّايَ",
        "ur": "إِيَّايَ"
      },
      {
        "en": "إِيَّاكُمْ",
        "ur": "إِيَّاكُمْ"
      },
      {
        "en": "إِيَّاهُمْ",
        "ur": "إِيَّاهُمْ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What detached Nasb pronoun represents 2nd Person Masculine Plural ('You all males')?",
    "ur": "مخاطب جمع مذكر ('تم سب مردوں کو') کے لیے کون سی منفصل ضمیرِ نصب آتی ہے؟",
    "options": [
      {
        "en": "إِيَّاكُمْ (Iyyākum)",
        "ur": "إِيَّاكُمْ"
      },
      {
        "en": "إِيَّاكُنَّ",
        "ur": "إِيَّاكُنَّ"
      },
      {
        "en": "إِيَّاكُمَا",
        "ur": "إِيَّاكُمَا"
      },
      {
        "en": "إِيَّاهُمْ",
        "ur": "إِيَّاهُمْ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What detached Nasb pronoun represents 3rd Person Feminine Singular ('Her')?",
    "ur": "غائب واحد مؤنث ('اس ایک عورت کو') کے لیے کون سی منفصل ضمیرِ نصب آتی ہے؟",
    "options": [
      {
        "en": "إِيَّاهَا (Iyyāhā)",
        "ur": "إِيَّاهَا"
      },
      {
        "en": "إِيَّاهُ",
        "ur": "إِيَّاهُ"
      },
      {
        "en": "إِيَّاكِ",
        "ur": "إِيَّاكِ"
      },
      {
        "en": "إِيَّاهُنَّ",
        "ur": "إِيَّاهُنَّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, convert attached object in 'أَكْرَمْتُكَ' into an advanced detached object:",
    "ur": "تمرين 2 کے مطابق جملے 'أَكْرَمْتُكَ' (میں نے تیری عزت کی) کی متصل ضمیر کو مقدم منفصل ضمیر میں بدلیں:",
    "options": [
      {
        "en": "إِيَّاكَ أَكْرَمْتُ (Iyyāka akramtu)",
        "ur": "إِيَّاكَ أَكْرَمْتُ"
      },
      {
        "en": "أَكْرَمْتُ إِيَّاكَ",
        "ur": "أَكْرَمْتُ إِيَّاكَ"
      },
      {
        "en": "أَنْتَ أَكْرَمْتُ",
        "ur": "أَنْتَ أَكْرَمْتُ"
      },
      {
        "en": "إِيَّايَ أَكْرَمْتَ",
        "ur": "إِيَّايَ أَكْرَمْتَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Convert attached object in 'رَأَيْتُهُمْ' into an advanced detached object:",
    "ur": "جملے 'رَأَيْتُهُمْ' (میں نے ان کو دیکھا) کی متصل ضمیر کو مقدم منفصل ضمیر میں بدلیں:",
    "options": [
      {
        "en": "إِيَّاهُمْ رَأَيْتُ (Iyyāhum ra'aitu)",
        "ur": "إِيَّاهُمْ رَأَيْتُ"
      },
      {
        "en": "رَأَيْتُ إِيَّاهُمْ",
        "ur": "رَأَيْتُ إِيَّاهُمْ"
      },
      {
        "en": "هُمْ رَأَيْتُ",
        "ur": "هُمْ رَأَيْتُ"
      },
      {
        "en": "إِيَّاكُمْ رَأَيْتُ",
        "ur": "إِيَّاكُمْ رَأَيْتُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Convert attached object in 'سَأَلْتُهَا' into an advanced detached object:",
    "ur": "جملے 'سَأَلْتُهَا' (میں نے اس سے سوال کیا) کو مقدم منفصل ضمیر کے ساتھ لکھیں:",
    "options": [
      {
        "en": "إِيَّاهَا سَأَلْتُ (Iyyāhā sa'altu)",
        "ur": "إِيَّاهَا سَأَلْتُ"
      },
      {
        "en": "سَأَلْتُ إِيَّاهَا",
        "ur": "سَأَلْتُ إِيَّاهَا"
      },
      {
        "en": "هِيَ سَأَلْتُ",
        "ur": "هِيَ سَأَلْتُ"
      },
      {
        "en": "إِيَّاكِ سَأَلْتُ",
        "ur": "إِيَّاكِ سَأَلْتُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'مَا نَعْبُدُ إِلاَّ إِيَّاهُ', why is 'إِيَّاهُ' used instead of attached 'ـه'?",
    "ur": "جملے 'مَا نَعْبُدُ إِلاَّ إِيَّاهُ' میں متصل 'ـه' کے بجائے منفصل 'إِيَّاهُ' لانا کیوں ضروری ہے؟",
    "options": [
      {
        "en": "Because an attached pronoun cannot follow the exception particle 'إِلاَّ' directly",
        "ur": "کیونکہ متصل ضمیر بلا واسطہ استثناء 'إِلاَّ' کے بعد نہیں آ سکتی"
      },
      {
        "en": "Because the verb is negative",
        "ur": "کیونکہ فعل نفی ہے"
      },
      {
        "en": "Because 'إِيَّاهُ' is Marfoo'",
        "ur": "کیونکہ إياہ مرفوع ہے"
      },
      {
        "en": "There is no special rule",
        "ur": "کوئی خاص قاعدہ نہیں ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, in 'مَا زُرْتُ إِلاَّ إِيَّاكَ', what meaning does this structure convey?",
    "ur": "تمرين 3 کے مطابق 'مَا زُرْتُ إِلاَّ إِيَّاكَ' میں اس ترکیب سے کیا معنوی فائدہ حاصل ہوتا ہے؟",
    "options": [
      {
        "en": "Exclusivity/Restriction: 'I visited NO ONE except You'",
        "ur": "حصر و استثناء: 'میں نے آپ کے علاوہ کسی کی زیارت نہیں کی'"
      },
      {
        "en": "General doubt",
        "ur": "عام شک و شبہ"
      },
      {
        "en": "Prohibition from visiting",
        "ur": "زیارت سے روکنا"
      },
      {
        "en": "Past imperative",
        "ur": "ماضی کا امر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Rewrite 'شَكَرْتُكَ وَشَكَرْتُهُ' advancing both objects for emphasis:",
    "ur": "جملے 'شَكَرْتُكَ وَشَكَرْتُهُ' کے دونوں مفعولوں کو مقدم کر کے تاکیدی شکل میں لکھیں:",
    "options": [
      {
        "en": "إِيَّاكَ شَكَرْتُ وَإِيَّاهُ (Iyyāka shakartu wa-iyyāhu)",
        "ur": "إِيَّاكَ شَكَرْتُ وَإِيَّاهُ"
      },
      {
        "en": "شَكَرْتُ إِيَّاكَ وَإِيَّاهُ",
        "ur": "شَكَرْتُ إِيَّاكَ وَإِيَّاهُ"
      },
      {
        "en": "أَنْتَ شَكَرْتُ وَهُوَ",
        "ur": "أَنْتَ شَكَرْتُ وَهُوَ"
      },
      {
        "en": "إِيَّايَ شَكَرْتُ",
        "ur": "إِيَّايَ شَكَرْتُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'أَنْتَ أَعْطَيْتَنِي إِيَّاهُ', how many objects does 'أَعْطَى' take and what is 'إِيَّاهُ'?",
    "ur": "جملے 'أَنْتَ أَعْطَيْتَنِي إِيَّاهُ' میں فعل 'أَعْطَى' کتنے مفعول لے رہا ہے اور 'إِيَّاهُ' کیا بن رہا ہے؟",
    "options": [
      {
        "en": "It takes TWO objects: Nūn/Yā' is 1st object, and 'إِيَّاهُ' is 2nd direct object",
        "ur": "یہ دو مفعول لیتا ہے: یاء متکلم پہلا مفعول، اور 'إِيَّاهُ' دوسرا مفعول بہ"
      },
      {
        "en": "It takes one object only",
        "ur": "ایک مفعول"
      },
      {
        "en": "It is Fa'il",
        "ur": "یہ فاعل ہے"
      },
      {
        "en": "It is Na't",
        "ur": "یہ نعت ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Is it permissible to say 'أَعْطَيْتُكَ إِيَّاهُ' alongside 'أَعْطَيْتُكَه' when a verb takes two pronoun objects?",
    "ur": "جب فعل دو ضمیر مفعول لے تو کیا 'أَعْطَيْتُكَه' کے ساتھ 'أَعْطَيْتُكَ إِيَّاهُ' کہنا بھی جائز ہے؟",
    "options": [
      {
        "en": "Yes, both attached-attached (أَعْطَيْتُكَه) and attached-detached (أَعْطَيْتُكَ إِيَّاهُ) are permissible",
        "ur": "جی ہاں! دونوں صورتی ترکیبات (أَعْطَيْتُكَه اور أَعْطَيْتُكَ إِيَّاهُ) جائز ہیں"
      },
      {
        "en": "No, only detached is allowed",
        "ur": "نہیں! صرف منفصل جائز ہے"
      },
      {
        "en": "No, only attached is allowed",
        "ur": "نہیں! صرف متصل جائز ہے"
      },
      {
        "en": "Neither is allowed",
        "ur": "کوئی جائز نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, what is the Masdar of sound 'خَرِيرٌ' associated with?",
    "ur": "تمرين 4 کے مطابق مصدر 'خَرِيرٌ' کس کی جاری آواز کے لیے بولا جاتا ہے؟",
    "options": [
      {
        "en": "Sound of running water (خَرِيرُ الـمَاءِ)",
        "ur": "بہتے ہوئے پانی کی آواز (خَرِيرُ الـمَاءِ)"
      },
      {
        "en": "Sound of wind in trees",
        "ur": "درختوں میں ہوا کی سرسراہٹ"
      },
      {
        "en": "Sound of a lion",
        "ur": "شیر کی آواز"
      },
      {
        "en": "Sound of a bell",
        "ur": "گھنٹی کی آواز"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the Masdar 'حَفِيفٌ' associated with?",
    "ur": "عربی مصدر 'حَفِيفٌ' کس کی آواز کے لیے تخصیص رکھتا ہے؟",
    "options": [
      {
        "en": "Rustling sound of tree leaves / wind (حَفِيفُ الشَّجَرِ)",
        "ur": "درخت کے پتوں کی سرسراہٹ و آواز (حَفِيفُ الشَّجَرِ)"
      },
      {
        "en": "Sound of running water",
        "ur": "بہتے پانی کی آواز"
      },
      {
        "en": "Sound of a horse",
        "ur": "گھوڑے کی آواز"
      },
      {
        "en": "Sound of thunder",
        "ur": "بادل کی گرج"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the Masdar 'أَطِيطٌ' associated with?",
    "ur": "عربی مصدر 'أَطِيطٌ' کس کی آواز کے لیے بولا جاتا ہے؟",
    "options": [
      {
        "en": "Creaking sound of a heavy camel saddle or loaded carriage (أَطِيطُ الرَّحْلِ)",
        "ur": "کجاوے یا بھاری سواری کی چرچراہٹ/آواز (أَطِيطُ الرَّحْلِ)"
      },
      {
        "en": "Sound of a bird",
        "ur": "پرندے کی آواز"
      },
      {
        "en": "Sound of water",
        "ur": "پانی کی آواز"
      },
      {
        "en": "Sound of fire",
        "ur": "آگ کی آواز"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَقَضَى رَبُّكَ أَالَّ تَعْبُدُوا إِلاَّ إِيَّاهُ' (Qur'an 17:23), how is 'إِيَّاهُ' parsed?",
    "ur": "قرآنی آیہ 'وَقَضَى رَبُّكَ أَالَّ تَعْبُدُوا إِلاَّ إِيَّاهُ' میں 'إِيَّاهُ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Detached Nasb Pronoun after 'إِلاَّ' as Direct Object in position of Nasb (ضمير منفصل في محل نصب مفعول به)",
        "ur": "استثناء 'إِلاَّ' کے بعد مفعول بہ ہو کر (ضمير منفصل في محل نصب)"
      },
      {
        "en": "Mubtada' Marfoo'",
        "ur": "مبتدأ مرفوع"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Mudaf Ilaihi",
        "ur": "مضاف الیہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'أَمَر أَالَّ تَعْبُدُوا إِلاَّ إِيَّاهُ' (Qur'an 12:40), why can't an attached pronoun be used after 'إِلاَّ'?",
    "ur": "آیت مبارکہ 'أَالَّ تَعْبُدُوا إِلاَّ إِيَّاهُ' میں 'إِلاَّ' کے بعد متصل ضمیر لانا کیوں ناممکن ہے؟",
    "options": [
      {
        "en": "Because an attached pronoun (ضمير متصل) cannot stand independently after particles like 'إِلاَّ'",
        "ur": "کیونکہ متصل ضمیر 'إِلاَّ' جیسے حرف کے بعد خود مختار الگ نہیں ہو سکتی"
      },
      {
        "en": "Because the verb is plural",
        "ur": "کیونکہ فعل جمع ہے"
      },
      {
        "en": "Because it is in Jarr",
        "ur": "کیونکہ یہ مجرور ہے"
      },
      {
        "en": "There is no reason",
        "ur": "کوئی وجہ نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'إِيَّاكَ شَكَرَ الـمُدَرِّسُ':",
    "ur": "پورے جملے 'إِيَّاكَ شَكَرَ الـمُدَرِّسُ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "إِيَّاكَ: ضمير منفصل مبني في محل نصب مفعول به مقدم، شَكَرَ: فعل ماضٍ، الـمُدَرِّسُ: فاعل مرفوع بالضمة",
        "ur": "إِيَّاكَ: ضمیر منفصل (في محل نصب مفعول بہ مقدم)، شَكَرَ: فعلِ ماضی، الـمُدَرِّسُ: فاعل مرفوع بالضمة"
      },
      {
        "en": "إياك: مبتدأ، شكر: خبر، المدرس: مفعول به",
        "ur": "إياك مبتدأ، شكر خبر، المدرس مفعول بہ"
      },
      {
        "en": "إياك: حرف، شكر: اسم، المدرس: فاعل",
        "ur": "إياك حرف، شكر اسم، المدرس فاعل"
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
    "en": "Which statement accurately summarizes the core grammar rules taught in Lesson 27?",
    "ur": "سبق 27 کے بنیادی گرامر موضوعات کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers pronoun classifications (بارزة/مستترة/متصلة/منفصلة), detached Nasb pronouns (إِيَّايَ to إِيَّاهُنَّ), advancing objects for restriction (إِيَّاكَ نَعْبُدُ), and triliteral Masdar pattern 'فَعِيلٌ' for sounds",
        "ur": "اس سبق میں ضمائر کی اقسام، ضمائرِ نصبِ منفصلہ، حصر و تاکید کے لیے مفعول کی تقديم، اور آوازوں کے لیے 'فَعِيلٌ' کے مصادر کا کامل احاطہ کیا گیا ہے"
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
  console.log('🚀 Seeding Book 3 Lesson 27 Quiz...');
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

    // 3. Find or Create Lecture for Lesson 27
    let lectureId;
    const existingLec = await sql`
      SELECT id, title, order_index FROM lectures
      WHERE section_id = ${sectionId} AND order_index = 27
      LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 27 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 27', 27)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 27: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 27 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 27))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 27.`);
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

    // 5. Create the quiz for Book 3 Lesson 27
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 27 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 27 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
