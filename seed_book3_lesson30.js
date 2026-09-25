import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is 'At-Tamyeez' (التَّمْيِيزُ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'تمیز' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "An indefinite, rigid (جامد) Mansoob noun mentioned to remove ambiguity from a prior ambiguous noun (ذات) or sentence relationship (نسبة)",
        "ur": "وہ اسمِ نکرہ جامد منصوب جو اپنے سے پہلے کسی اسم (ذات) یا جملے کی نسبت کے ابہام کو دور کرے"
      },
      {
        "en": "A derived adjective showing state of action",
        "ur": "فعل کی حالت ظاہر کرنے والا اسمِ مشتق"
      },
      {
        "en": "A preposition indicating space or time",
        "ur": "مقام یا وقت بتانے والا حرفِ جر"
      },
      {
        "en": "A past tense verb in passive voice",
        "ur": "مجہول ماضی فعل"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the two primary categories of Tamyeez (أقسام التمييز) in Arabic grammar?",
    "ur": "عربی زبان میں تمیز کی دو بنیادی اقسام کون سی ہیں؟",
    "options": [
      {
        "en": "1. Tamyeez ad-Dhāt / al-Mufrad (تمييز الذات/المفرد), 2. Tamyeez an-Nisbah / al-Jumlah (تمييز النسبة/الجملة)",
        "ur": "1. تمييز الذات / المفرد (مفرد ذات کا تمیز)، 2. تمييز النسبة / الجملة (جملے کی نسبت کا تمیز)"
      },
      {
        "en": "1. Past, 2. Present",
        "ur": "1. ماضی، 2. مضارع"
      },
      {
        "en": "1. Marfoo', 2. Majroor",
        "ur": "1. مرفوع، 2. مجرور"
      },
      {
        "en": "1. Singular, 2. Plural",
        "ur": "1. مفرد، 2. جمع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What ambiguous domains are clarified by 'Tamyeez ad-Dhāt / al-Mufrad' (تمييز المفرد)?",
    "ur": "'تمیزِ ذات / مفرد' کن کن مبہم اسماء و مقداروں کی وضاحت کرتا ہے؟",
    "options": [
      {
        "en": "Numbers (الأعداد), Weights (الوزن), Measures of Capacity (الكيل), and Area/Distance (المساحة)",
        "ur": "اعداد (گیارہ سے ننانوے)، وزن (ناپ)، کیل (پیمانہ)، اور مساحت (رقبہ)"
      },
      {
        "en": "Verb tense only",
        "ur": "صرف فعل کا زمانہ"
      },
      {
        "en": "Types of prepositions",
        "ur": "حروفِ جر کی اقسام"
      },
      {
        "en": "Gender of the speaker",
        "ur": "متکلم کی جنس"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Tamyeez an-Nisbah Al-Muhawwal' (التَّمْيِيزُ الـمُحَوَّلُ) in Arabic grammar?",
    "ur": "'تمیزِ نسبتِ محول' سے کیا مراد ہے؟",
    "options": [
      {
        "en": "Tamyeez that was originally the Subject (فاعل), Direct Object (مفعول به), or Topic (مبتدأ) before being restructured",
        "ur": "وہ تمیز جو اصل ترکیب میں فاعل، مفعول بہ، یا مبتدا تھا جسے بعد میں تمیز میں منتقل کیا گیا"
      },
      {
        "en": "Tamyeez derived from foreign words",
        "ur": "غیر عربی الفاظ سے بننے والا تمیز"
      },
      {
        "en": "Tamyeez attached to numbers 1 to 10",
        "ur": "اعداد 1 سے 10 کے ساتھ آنے والا تمیز"
      },
      {
        "en": "Tamyeez used only in passive sentences",
        "ur": "صرف مجہول جملوں میں آنے والا تمیز"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'وَاشْتَعَلَ الرَّأْسُ شَيْباً' (Qur'an 19:4), what was the original syntactic role of 'شَيْباً' before transformation?",
    "ur": "قرآنی آیہ 'وَاشْتَعَلَ الرَّأْسُ شَيْباً' میں لفظ 'شَيْباً' تبدیلی سے پہلے اصل میں کیا تھا؟",
    "options": [
      {
        "en": "It was the Subject (فاعل): 'اشْتَعَلَ شَيْبُ الرَّأْسِ' (My head's gray hair flared up)",
        "ur": "اصل میں فاعل تھا: 'اشْتَعَلَ شَيْبُ الرَّأْسِ' (مھول عن الفاعل)"
      },
      {
        "en": "It was Direct Object",
        "ur": "مفعول بہ"
      },
      {
        "en": "It was Mubtada'",
        "ur": "مبتدا"
      },
      {
        "en": "It was Na't",
        "ur": "نعت"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'فَجَّرْنَا الأَرْضَ عُيُوناً' (Qur'an 54:12), what was the original syntactic role of 'عُيُوناً' before transformation?",
    "ur": "قرآنی آیہ 'فَجَّرْنَا الأَرْضَ عُيُوناً' میں لفظ 'عُيُوناً' تبدیلی سے پہلے اصل میں کیا تھا؟",
    "options": [
      {
        "en": "It was the Direct Object (مفعول به): 'فَجَّرْنَا عُيُونَ الأَرْضِ' (We erupted the earth's springs)",
        "ur": "اصل میں مفعول بہ تھا: 'فَجَّرْنَا عُيُونَ الأَرْضِ' (متحول عن المفعول)"
      },
      {
        "en": "It was Fa'il",
        "ur": "فاعل"
      },
      {
        "en": "It was Mubtada'",
        "ur": "مبتدا"
      },
      {
        "en": "It was Hal",
        "ur": "حال"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'أَنَا أَكْثَرُ مِنْكَ مَالاً' (Qur'an 18:34), what was the original syntactic role of 'مَالاً' before transformation?",
    "ur": "قرآنی آیہ 'أَنَا أَكْثَرُ مِنْكَ مَالاً' میں لفظ 'مَالاً' (افعل التفضیل کے بعد) تبدیلی سے پہلے کیا تھا؟",
    "options": [
      {
        "en": "It was the Topic (مبتدأ): 'مَالِي أَكْثَرُ مِنْ مَالِكَ' (My wealth is greater than yours)",
        "ur": "اصل میں مبتدا تھا: 'مَالِي أَكْثَرُ مِنْ مَالِكَ' (متحول عن المبتدأ)"
      },
      {
        "en": "It was Fa'il",
        "ur": "فاعل"
      },
      {
        "en": "It was Maf'ool bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "It was Khabar",
        "ur": "خبر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the key structural difference between 'Al-Ḥāl' (الحال) and 'At-Tamyeez' (التمييز)?",
    "ur": "'حال' اور 'تمیز' کے درمیان بنیادی ساختگی و صوتی فرق کیا ہے؟",
    "options": [
      {
        "en": "Ḥāl is typically a derived adjective (مشتق) describing state, while Tamyeez is typically a rigid noun (جامد) resolving ambiguity of substance or relation",
        "ur": "حال عموماً اسمِ مشتق ہوتا ہے جو حالت بتاتا ہے، جبکہ تمیز اسمِ جامد ہوتا ہے جو ذوات یا نسبت کا ابہام دور کرتا ہے"
      },
      {
        "en": "Ḥāl is always Marfoo' while Tamyeez is Majroor",
        "ur": "حال ہمیشہ مرفوع اور تمیز مجرور ہوتا ہے"
      },
      {
        "en": "Tamyeez is always a sentence while Ḥāl is a letter",
        "ur": "تمیز ہمیشہ جملہ اور حال حرف ہوتا ہے"
      },
      {
        "en": "There is no difference between them",
        "ur": "ان کے درمیان کوئی فرق نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the general grammatical case (إعراب) of Tamyeez?",
    "ur": "اسمِ تمیز کا بنیادی اعرابی حکم کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Tamyeez is ALWAYS Mansoob in sentence-relation (النسبة) and predominantly Mansoob in single-noun (الذات)",
        "ur": "تمیزِ نسبت ہمیشہ **منصوب** ہوتا ہے، اور تمیزِ ذات بھی غالباً منصوب ہوتا ہے"
      },
      {
        "en": "Tamyeez is always Marfoo'",
        "ur": "تمیز ہمیشہ مرفوع ہوتا ہے"
      },
      {
        "en": "Tamyeez is always Majroor",
        "ur": "تمیز ہمیشہ مجرور ہوتا ہے"
      },
      {
        "en": "Tamyeez is Mabni on Sukoon",
        "ur": "تمیز سکون پر مبنی ہوتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In 'امْتَلأَ الإِنَاءُ مَاءً', what type of Tamyeez is 'مَاءً'?",
    "ur": "جملے 'امْتَلأَ الإِنَاءُ مَاءً' (برتن پانی سے بھر گیا) میں 'مَاءً' تمیز کی کون سی قسم ہے؟",
    "options": [
      {
        "en": "Tamyeez an-Nisbah Ghair al-Muhawwal (تمييز النسبة غير المحوّل - non-transformed relation tamyeez after verbs of fullness)",
        "ur": "تمیزِ نسبت **غیر محول** (بھرنے یا خالی ہونے والے افعال کے بعد)"
      },
      {
        "en": "Tamyeez ad-Dhat",
        "ur": "تمیز ذات"
      },
      {
        "en": "Hal Mufredah",
        "ur": "حال مفردہ"
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
    "en": "In Exercise 1, in 'اشْتَرَيْتُ رِطْلاً زَيْتاً', how is 'زَيْتاً' parsed?",
    "ur": "تمرين 1 کے مطابق 'اشْتَرَيْتُ رِطْلاً زَيْتاً' میں لفظ 'زَيْتاً' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Tamyeez ad-Dhāt Mansoob with Fatha clarifying the weight 'رِطْلاً' (تمييز ذات منصوب بالفتحة)",
        "ur": "وزن 'رِطْلاً' کے ابہام کو دور کرنے کی بنا پر **تمیيز ذات منصوب بالفتحة**"
      },
      {
        "en": "Maf'ool bihi",
        "ur": "مفعول بہ"
      },
      {
        "en": "Na't",
        "ur": "نعت"
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
    "en": "In 'اشْتَرَيْتُ صَاعاً قَمْحاً', what measure type does 'صَاعاً' represent?",
    "ur": "جملے 'اشْتَرَيْتُ صَاعاً قَمْحاً' میں لفظ 'صَاعاً' کس قسم کی مقدار بتاتا ہے؟",
    "options": [
      {
        "en": "Measure of Capacity / Kail (مِقْدَارُ الكَيْلِ)",
        "ur": "پیمانہ / کیل (مقدور الكيل)"
      },
      {
        "en": "Weight / Wazn",
        "ur": "وزن"
      },
      {
        "en": "Area / Misāhah",
        "ur": "رقبہ/مساحت"
      },
      {
        "en": "Number / 'Adad",
        "ur": "عدد"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'اشْتَرَيْتُ فَدَّاناً أَرْضاً', what measure type does 'فَدَّاناً' represent?",
    "ur": "جملے 'اشْتَرَيْتُ فَدَّاناً أَرْضاً' میں لفظ 'فَدَّاناً' کس قسم کی مقدار بتاتا ہے؟",
    "options": [
      {
        "en": "Measure of Area / Land (مِقْدَارُ المِسَاحَةِ)",
        "ur": "زمین کا رقبہ / مساحت (مقدور المساحة)"
      },
      {
        "en": "Weight / Wazn",
        "ur": "وزن"
      },
      {
        "en": "Capacity / Kail",
        "ur": "کیل"
      },
      {
        "en": "Time / Dharf",
        "ur": "ظرف"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'عِنْدِي أَرْبَعُونَ كِتَاباً', why is 'كِتَاباً' Mansoob and Singular?",
    "ur": "جملے 'عِنْدِي أَرْبَعُونَ كِتَاباً' میں لفظ 'كِتَاباً' کیوں منصوب اور مفرد ہے؟",
    "options": [
      {
        "en": "Because numbers 11 to 99 require their Tamyeez to be Singular and Mansoob (مفرد منصوب)",
        "ur": "کیونکہ 11 سے 99 تک کے اعداد کا تمیز **مفرد منصوب** ہوتا ہے"
      },
      {
        "en": "Because it is Maf'ool bihi",
        "ur": "مفعول بہ ہونے کی وجہ سے"
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
    "part": "Exercise 2",
    "en": "In Exercise 2, in 'طَابَ زَيْدٌ نَفْساً', restore the sentence to its non-Tamyeez original structure:",
    "ur": "تمرين 2 کے مطابق 'طَابَ زَيْدٌ نَفْساً' کو اس کی تمیز سے پہلے والی اصل ترکیب میں بحال کریں:",
    "options": [
      {
        "en": "طَابَتْ نَفْسُ زَيْدٍ (Tābat nafsu Zaidin - transformed from Fa'il)",
        "ur": "طَابَتْ نَفْسُ زَيْدٍ (اصل میں فاعل سے منتقل شدہ)"
      },
      {
        "en": "طاب زيد نفسَ",
        "ur": "طاب زيد نفسَ"
      },
      {
        "en": "زيد طيب نفس",
        "ur": "زيد طيب نفس"
      },
      {
        "en": "نفس زيد طاب",
        "ur": "نفس زيد طاب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'غَرَسْتُ الأَرْضَ شَجَراً', restore the sentence to its non-Tamyeez original structure:",
    "ur": "جملے 'غَرَسْتُ الأَرْضَ شَجَراً' کو اس کی اصل ترکیب میں واپس لائیں:",
    "options": [
      {
        "en": "غَرَسْتُ شَجَرَ الأَرْضِ (Gharastu shajara al-ardi - transformed from Maf'ool bihi)",
        "ur": "غَرَسْتُ شَجَرَ الأَرْضِ (اصل میں مفعول بہ سے منتقل شدہ)"
      },
      {
        "en": "غرست الأرض شجرٌ",
        "ur": "غرست الأرض شجرٌ"
      },
      {
        "en": "الأرض غرست شجراً",
        "ur": "الأرض غرست شجراً"
      },
      {
        "en": "شجر الأرض غرست",
        "ur": "شجر الأرض غرست"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'عَمْرٌو أَكْبَرُ مِنْكَ سِنّاً', restore the sentence to its non-Tamyeez original structure:",
    "ur": "جملے 'عَمْرٌو أَكْبَرُ مِنْكَ سِنّاً' (افعل التفضیل) کو اس کی اصل ساخت میں منتقل کریں:",
    "options": [
      {
        "en": "سِنُّ عَمْرٍو أَكْبَرُ مِنْ سِنِّكَ (Sinnu 'Amrin akbaru min sinnika - transformed from Mubtada')",
        "ur": "سِنُّ عَمْرٍو أَكْبَرُ مِنْ سِنِّكَ (اصل میں مبتدا سے منتقل شدہ)"
      },
      {
        "en": "عمرو كبر سنك",
        "ur": "عمرو كبر سنك"
      },
      {
        "en": "كبر سن عمرو",
        "ur": "كبر سن عمرو"
      },
      {
        "en": "سنك أكبر من عمرو",
        "ur": "سنك أكبر من عمرو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Convert 'حَسُنَ خُلُقُ عَلِيٍّ' into a Tamyeez sentence structure:",
    "ur": "جملے 'حَسُنَ خُلُقُ عَلِيٍّ' (علی کا اخلاق اچھا ہوا) کو تمیز کے جملے میں تبدیل کریں:",
    "options": [
      {
        "en": "حَسُنَ عَلِيٌّ خُلُقاً (Ḥasuna 'Aliyyun khuluqan)",
        "ur": "حَسُنَ عَلِيٌّ خُلُقاً"
      },
      {
        "en": "حسن خلقاً عليّ",
        "ur": "حسن خلقاً عليّ"
      },
      {
        "en": "علي حسن الخلق",
        "ur": "علي حسن الخلق"
      },
      {
        "en": "خلق علي حسن",
        "ur": "خلق علي حسن"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, in 'لِلَّهِ دَرُّهُ فَارِساً!', what type of sentence style does 'فَارِساً' clarify?",
    "ur": "تمرين 3 کے مطابق 'لِلَّهِ دَرُّهُ فَارِساً!' (تعجب و مدح) میں 'فَارِساً' کس قسم کا تمیز ہے؟",
    "options": [
      {
        "en": "Tamyeez an-Nisbah Ghair al-Muhawwal in an Exclamatory/Praise style (تمييز نسبة غير محوّل في أسلوب التعجب)",
        "ur": "اسلوبِ تعجب/مدح میں تمیزِ نسبت **غیر محول**"
      },
      {
        "en": "Tamyeez ad-Dhat for numbers",
        "ur": "اعداد کا تمیز ذات"
      },
      {
        "en": "Hal Mufredah",
        "ur": "حال مفردہ"
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
    "en": "In 'كَفَى بِاللَّهِ شَهِيداً' (Qur'an 4:79), how is 'شَهِيداً' parsed?",
    "ur": "آیت مبارکہ 'كَفَى بِاللَّهِ شَهِيداً' میں لفظ 'شَهِيداً' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Tamyeez an-Nisbah Mansoob with Fatha after verb 'كَفَى' (تمييز نسبة منصوب بالفتحة)",
        "ur": "فعل 'کفی' کے بعد **تمییز نسبة منصوب بالفتحة**"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
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
    "en": "Is it permissible to say 'عِنْدِي رِطْلٌ مِنْ زَيْتٍ' using preposition 'مِنْ' instead of Nasb 'زَيْتاً' in Tamyeez ad-Dhāt?",
    "ur": "کیا تمیزِ ذات (مقادیر) میں 'عِنْدِي رِطْلٌ زَيْتاً' کے بجائے حرفِ جر 'مِنْ' کے ساتھ 'عِنْدِي رِطْلٌ مِنْ زَيْتٍ' کہنا جائز ہے؟",
    "options": [
      {
        "en": "Yes, in Tamyeez ad-Dhāt (measures/weights), it is permissible to render it Majroor with 'مِنْ' or by Idāfah",
        "ur": "جی ہاں! تمیزِ ذات (مقادیر) میں 'مِنْ' کے ساتھ مجرور کرنا یا مضاف الیہ بنانا جائز ہے"
      },
      {
        "en": "No, it is strictly forbidden",
        "ur": "نہیں! یہ بالکل ناجائز ہے"
      },
      {
        "en": "It is allowed only in poetry",
        "ur": "صرف شاعری میں جائز ہے"
      },
      {
        "en": "It changes the sentence to past tense",
        "ur": "یہ جملے کو ماضی بنا دیتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, compare 'جَاءَ زَيْدٌ رَاكِباً' vs 'طَابَ زَيْدٌ نَفْساً'. Which is Ḥāl and which is Tamyeez?",
    "ur": "تمرين 4 کے مطابق 'جَاءَ زَيْدٌ رَاكِباً' اور 'طَابَ زَيْدٌ نَفْساً' میں بالترتیب 'رَاكِباً' اور 'نَفْساً' کیا ہیں؟",
    "options": [
      {
        "en": "'رَاكِباً' is Ḥāl (derived adjective showing state), while 'نَفْساً' is Tamyeez (rigid noun clarifying relation)",
        "ur": "'رَاكِباً' **حال** (مشتق صفت برائے حالت) ہے، جبکہ 'نَفْساً' **تمیز** (جامد اسم برائے ازالۂ ابہام) ہے"
      },
      {
        "en": "Both are Ḥāl",
        "ur": "دونوں حال ہیں"
      },
      {
        "en": "Both are Tamyeez",
        "ur": "دونوں تمیز ہیں"
      },
      {
        "en": "Both are Maf'ool bihi",
        "ur": "دونوں مفعول بہ ہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In 'حَسُنَ الخَالِدُ رَجُلاً', why cannot 'رَجُلاً' be parsed as Ḥāl?",
    "ur": "جملے 'حَسُنَ الخَالِدُ رَجُلاً' میں لفظ 'رَجُلاً' کو حال کیوں نہیں بنایا جا سکتا؟",
    "options": [
      {
        "en": "Because 'رَجُلاً' is a Rigid Noun (اسم جامد), not a derived adjective, so it functions as Tamyeez",
        "ur": "کیونکہ 'رَجُلاً' اسمِ **جامد** ہے (اسمِ مشتق نہیں)، اس لیے یہ تمیز بنتا ہے"
      },
      {
        "en": "Because it is Marfoo'",
        "ur": "مرفوع ہونے کی وجہ سے"
      },
      {
        "en": "Because it is Majroor",
        "ur": "مجرور ہونے کی وجہ سے"
      },
      {
        "en": "Because it is a verb",
        "ur": "فعل ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا' (Qur'an 12:4), how is 'كَوْكَبًا' parsed?",
    "ur": "قرآنی آیہ 'إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا' میں لفظ 'كَوْكَبًا' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Tamyeez ad-Dhāt for compound number 'أَحَدَ عَشَرَ' Mansoob with Fatha (تمييز عدد منصوب بالفتحة)",
        "ur": "مرکب عدد 'أَحَدَ عَشَرَ' کی بنا پر **تمیيز عدد منصوب بالفتحة**"
      },
      {
        "en": "Maf'ool bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      },
      {
        "en": "Sifah Majroor",
        "ur": "صفت مجرور"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَمَنْ أَحْسَنُ مِنَ اللَّهِ صِبْغَةً' (Qur'an 2:138), how is 'صِبْغَةً' parsed after 'أَحْسَنُ'?",
    "ur": "آیت مبارکہ 'وَمَنْ أَحْسَنُ مِنَ اللَّهِ صِبْغَةً' میں افعل التفضیل 'أَحْسَنُ' کے بعد 'صِبْغَةً' کا کیا اعرابی موقع ہے؟",
    "options": [
      {
        "en": "Tamyeez an-Nisbah Mansoob with Fatha (تمييز نسبة منصوب بالفتحة)",
        "ur": "افعل التفضیل کے ابہام کو دور کرنے کے لیے **تمیيز نسبة منصوب بالفتحة**"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
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
    "part": "Exercise 5",
    "en": "In the Quranic verse 'فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ' (Qur'an 99:7), how is 'خَيْرًا' parsed?",
    "ur": "قرآنی آیہ 'فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ' میں لفظ 'خَيْرًا' کا کیا ترکیبی اعراب ہے؟",
    "options": [
      {
        "en": "Tamyeez ad-Dhāt for weight measure 'مِثْقَالَ' Mansoob with Fatha (تمييز مقدار منصوب بالفتحة)",
        "ur": "مقدار و وزن 'مثقال' کے بعد **تمیيز مقدار منصوب بالفتحة**"
      },
      {
        "en": "Hal Mansoob",
        "ur": "حال منصوب"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Sifah Majroor",
        "ur": "صفت مجرور"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'طَابَ الـمَكَانُ هَوَاءً':",
    "ur": "پورے جملے 'طَابَ الـمَكَانُ هَوَاءً' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "طَابَ: فعل ماضٍ، الـمَكَانُ: فاعل مرفوع بالضمة، هَوَاءً: تمييز نسبة (محول عن الفاعل) منصوب بالفتحة",
        "ur": "طَابَ: فعلِ ماضی، الـمَكَانُ: فاعل مرفوع بالضمة، هَوَاءً: **تمیيز نسبة (محول عن الفاعل) منصوب بالفتحة**"
      },
      {
        "en": "طاب: مبتدأ، المكان: خبر، هواء: مفعول به",
        "ur": "طاب مبتدأ، المكان خبر، هواء مفعول بہ"
      },
      {
        "en": "طاب: حرف، المكان: اسم مجرور، هواء: حال",
        "ur": "طاب حرف، المكان اسم مجرور، هواء حال"
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
    "en": "Parse the full sentence: 'عِنْدِي ثَلاَثُونَ كِتَاباً':",
    "ur": "پورے جملے 'عِنْدِي ثَلاَثُونَ كِتَاباً' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "عِنْدِي: ظرف مكان وهو مضاف والياء مضاف إليه (شبه جملة خبر مقدم)، ثَلاَثُونَ: مبتدأ مؤخر مرفوع بالواو، كِتَاباً: تمييز عدد منصوب بالفتحة",
        "ur": "عِنْدِي: ظرف و مضاف الیہ (خبرِ مقدم)، ثَلاَثُونَ: مبتدأ مؤخر مرفوع بالواو، كِتَاباً: **تمیيز عدد منصوب بالفتحة**"
      },
      {
        "en": "عندي: فعل، ثلاثون: فاعل، كتابا: مفعول به",
        "ur": "عندي فعل، ثلاثون فاعل، كتاباً مفعول بہ"
      },
      {
        "en": "عندي: حرف، ثلاثون: اسم، كتابا: صفة",
        "ur": "عندي حرف، ثلاثون اسم، كتاباً صفت"
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
    "en": "Which statement accurately summarizes the core grammar rules taught in Lesson 30?",
    "ur": "سبق 30 کے بنیادی گرامر موضوعات کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Covers At-Tamyeez definition and rules, Tamyeez ad-Dhāt (measures/numbers), Tamyeez an-Nisbah (Muhawwal 'an al-Fa'il/Maf'ool/Mubtada' and Ghair Muhawwal), and distinctions between Tamyeez and Ḥāl",
        "ur": "اس سبق میں التمییز کی تعریف و احکام، تمیزِ ذات (مقادیر و اعداد)، تمیزِ نسبت (محول و غیر محول)، اور تمیز و حال کے باہمی فروق کا کامل احاطہ کیا گیا ہے"
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
  console.log('🚀 Seeding Book 3 Lesson 30 Quiz...');
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

    // 3. Find or Create Lecture for Lesson 30
    let lectureId;
    const existingLec = await sql`
      SELECT id, title, order_index FROM lectures
      WHERE section_id = ${sectionId} AND order_index = 30
      LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 30 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 30', 30)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 30: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 30 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 30))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 30.`);
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

    // 5. Create the quiz for Book 3 Lesson 30
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 30 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 30 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
