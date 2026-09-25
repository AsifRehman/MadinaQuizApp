import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL || process.env.DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is the grammatical term for the noun that replaces the subject (الفاعل) in a passive voice sentence?",
    "ur": "غیر فاعلی (مجہول) جملے میں فاعل کی جگہ لینے والے اسم کو کیا کہتے ہیں؟",
    "options": [
      {
        "en": "Na'ib al-Fa'il (نائب الفاعل)",
        "ur": "نائب الفاعل"
      },
      {
        "en": "Maf'ool Bihi (مفعول به)",
        "ur": "مفعول به"
      },
      {
        "en": "Khabar (خبر)",
        "ur": "خبر"
      },
      {
        "en": "Mubtada' (مبتدأ)",
        "ur": "مبتدأ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the case/I'rab of Na'ib al-Fa'il (نائب الفاعل) in Arabic grammar?",
    "ur": "عربی گرامر میں نائب الفاعل کا اعرابی حکم کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Always Marfoo' (مرفوع)",
        "ur": "ہمیشہ مرفوع"
      },
      {
        "en": "Always Mansoob (منصوب)",
        "ur": "ہمیشہ منصوب"
      },
      {
        "en": "Always Majroor (مجرور)",
        "ur": "ہمیشہ مجرور"
      },
      {
        "en": "Always Majzoom (مجزوم)",
        "ur": "ہمیشہ مجزوم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is a Form I past tense verb converted into passive voice (المبني للمجهول)?",
    "ur": "فارم I کے فعلِ ماضی کو غیر فاعلی (مجہول) میں کیسے تبدیل کیا جاتا ہے؟",
    "options": [
      {
        "en": "Damma on first letter, Kasra on second-to-last letter (فُعِلَ)",
        "ur": "پہلے حرف پر ضمہ اور آخری سے پہلے حرف پر کسرہ (فُعِلَ)"
      },
      {
        "en": "Fatha on first letter, Damma on second-to-last letter",
        "ur": "پہلے حرف پر فتحہ اور آخری سے پہلے پر ضمہ"
      },
      {
        "en": "Kasra on first letter, Fatha on second-to-last letter",
        "ur": "پہلے حرف پر کسرہ اور آخری سے پہلے پر فتحہ"
      },
      {
        "en": "Sukoon on first letter, Damma on second-to-last letter",
        "ur": "پہلے حرف پر سکون اور آخری سے پہلے پر ضمہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is a Form I present tense verb converted into passive voice (المبني للمجهول)?",
    "ur": "فارم I کے فعلِ مضارع کو غیر فاعلی (مجہول) میں کیسے تبدیل کیا جاتا ہے؟",
    "options": [
      {
        "en": "Damma on prefix letter, Fatha on second-to-last letter (يُفْعَلُ)",
        "ur": "علامتِ مضارع پر ضمہ اور آخری سے پہلے حرف پر فتحہ (يُفْعَلُ)"
      },
      {
        "en": "Kasra on prefix letter, Damma on second-to-last letter",
        "ur": "علامتِ مضارع پر کسرہ اور آخری سے پہلے پر ضمہ"
      },
      {
        "en": "Fatha on prefix letter, Kasra on second-to-last letter",
        "ur": "علامتِ مضارع پر فتحہ اور آخری سے پہلے پر کسرہ"
      },
      {
        "en": "Damma on prefix letter, Kasra on second-to-last letter",
        "ur": "علامتِ مضارع پر ضمہ اور آخری سے پہلے پر کسرہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What happens to the original Fa'il (فاعل) when a sentence is converted to passive voice?",
    "ur": "جب جملہ مجہول میں تبدیل ہوتا ہے تو اصل فاعل کا کیا ہوتا ہے؟",
    "options": [
      {
        "en": "It is omitted (يُحْذَفُ الفَاعِلُ)",
        "ur": "اسے حذف کر دیا جاتا ہے (يُحْذَفُ الفَاعِلُ)"
      },
      {
        "en": "It becomes Mansoob",
        "ur": "وہ منصوب ہو جاتا ہے"
      },
      {
        "en": "It takes Kasra",
        "ur": "اس پر کسرہ آ جاتا ہے"
      },
      {
        "en": "It moves to the end with Tanween",
        "ur": "وہ تنوین کے ساتھ آخر میں چلا جاتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Which particle structure is used in Arabic to express alternative choices ('Either ... or')?",
    "ur": "عربی میں دو متبادل اختیارات پیش کرنے کے لیے کون سا ساختار استعمال ہوتا ہے؟",
    "options": [
      {
        "en": "إِمَّا ... وَإِمَّا (Imma ... wa-Imma)",
        "ur": "إِمَّا ... وَإِمَّا"
      },
      {
        "en": "لَعَلَّ ... وَلَكِنَّ",
        "ur": "لَعَلَّ ... وَلَكِنَّ"
      },
      {
        "en": "ثُمَّ ... وَأَوْ",
        "ur": "ثُمَّ ... وَأَوْ"
      },
      {
        "en": "إِذَا ... فَإِنَّ",
        "ur": "إِذَا ... فَإِنَّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the gender classification of the word 'الحَرْبُ' (war) in Arabic grammar?",
    "ur": "عربی گرامر میں لفظ 'الحَرْبُ' (جنگ) تذکیر و تانیث کے لحاظ سے کیا ہے؟",
    "options": [
      {
        "en": "Feminine by usage (مُؤَنَّثٌ)",
        "ur": "مؤنث سماعی"
      },
      {
        "en": "Masculine (مُذَكَّرٌ)",
        "ur": "مذکر"
      },
      {
        "en": "Always plural",
        "ur": "ہمیشہ جمع"
      },
      {
        "en": "Non-declinable (مَبْنِيٌّ)",
        "ur": "مبنی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In compound numbers like 'ثَلاَثُمِائَةٍ' (300), how is the prefix word 'ثَلاَثُ' declined?",
    "ur": "مرکب عدد 'ثَلاَثُمِائَةٍ' (300) میں 'ثَلاَثُ' کا اعراب کیسے بدلتا ہے؟",
    "options": [
      {
        "en": "According to its grammatical position in the sentence (بحسب العامل)",
        "ur": "جملے میں اپنے اعرابی موقع و عامل کے مطابق"
      },
      {
        "en": "It is always fixed on Damma",
        "ur": "یہ ہمیشہ ضمہ پر مبنی رہتا ہے"
      },
      {
        "en": "It is always fixed on Fatha",
        "ur": "یہ ہمیشہ فتحہ پر مبنی رہتا ہے"
      },
      {
        "en": "It is always Majroor",
        "ur": "یہ ہمیشہ مجرور رہتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "In compound numbers like 'ثَلاَثُمِائَةٍ', what is the grammatical position and case of 'مِائَةٍ'?",
    "ur": "مرکب عدد 'ثَلاَثُمِائَةٍ' میں لفظ 'مِائَةٍ' کا ترکیبی موقع اور اعراب کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Mudaf Ilayh Majroor (مجرور بالإضافة)",
        "ur": "مضاف الیہ مجرور"
      },
      {
        "en": "Maf'ool Bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Na't Mansoob",
        "ur": "نعت منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Ism al-Jins al-Jam'i' (اسم الجنس الجمعي)?",
    "ur": "'اسم الجنس الجمعي' سے گرامر میں کیا مراد ہے؟",
    "options": [
      {
        "en": "A noun differentiated from its singular unit by Yā' al-Nisbah or Tā' Marbootah",
        "ur": "وہ اسم جو اپنے واحد سے یاءِ نسبتی یا تاء مربوطہ کے ذریعے ممتاز ہو"
      },
      {
        "en": "A dual noun ending in Alif and Noon",
        "ur": "الف اور نون پر ختم ہونے والا تثنیہ اسم"
      },
      {
        "en": "A proper noun for cities",
        "ur": "شہروں کا اسمِ علم"
      },
      {
        "en": "A broken plural pattern",
        "ur": "جمع تکسیر کا پیٹرن"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the passive past form of the verb 'قَتَلَ' (He killed)?",
    "ur": "فعلِ ماضی 'قَتَلَ' کی مجہول شکل کیا ہے؟",
    "options": [
      {
        "en": "قُتِلَ (Qutila)",
        "ur": "قُتِلَ"
      },
      {
        "en": "يَقْتُلُ (Yaqtulu)",
        "ur": "يَقْتُلُ"
      },
      {
        "en": "قَاتَلَ (Qatala)",
        "ur": "قَاتَلَ"
      },
      {
        "en": "أُقْتِلَ (Uqtila)",
        "ur": "أُقْتِلَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What is the passive past form of the verb 'خَلَقَ' (He created)?",
    "ur": "فعلِ ماضی 'خَلَقَ' کی مجہول شکل کیا ہے؟",
    "options": [
      {
        "en": "خُلِقَ (Khuliqa)",
        "ur": "خُلِقَ"
      },
      {
        "en": "يَخْلُقُ (Yakhluqu)",
        "ur": "يَخْلُقُ"
      },
      {
        "en": "خَلَّقَ (Khallaqa)",
        "ur": "خَلَّقَ"
      },
      {
        "en": "اِخْتَلَقَ (Ikhtalaqa)",
        "ur": "اِخْتَلَقَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In the Quranic sentence 'خُلِقَ الإِنْسَانُ مِنْ طِينٍ', how is 'الإِنْسَانُ' parsed?",
    "ur": "قرآنی جملے 'خُلِقَ الإِنْسَانُ مِنْ طِينٍ' میں 'الإِنْسَانُ' کا ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "Na'ib al-Fa'il Marfoo' (نائب الفاعل مرفوع)",
        "ur": "نائب الفاعل مرفوع"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Maf'ool Bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Mubtada' Marfoo'",
        "ur": "مبتدأ مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "What is the passive present form of 'يَسْمَعُ' (He hears)?",
    "ur": "فعلِ مضارع 'يَسْمَعُ' کی مجہول شکل کیا ہے؟",
    "options": [
      {
        "en": "يُسْمَعُ (Yusma'u)",
        "ur": "يُسْمَعُ"
      },
      {
        "en": "سُمِعَ (Sumi'a)",
        "ur": "سُمِعَ"
      },
      {
        "en": "يَسْتَمِعُ (Yastami'u)",
        "ur": "يَسْتَمِعُ"
      },
      {
        "en": "أَسْمَعَ (Asma'a)",
        "ur": "أَسْمَعَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "What is the passive present form of 'يَفْتَحُ' (He opens)?",
    "ur": "فعلِ مضارع 'يَفْتَحُ' کی مجہول شکل کیا ہے؟",
    "options": [
      {
        "en": "يُفْتَحُ (Yuftahu)",
        "ur": "يُفْتَحُ"
      },
      {
        "en": "فُتِحَ (Futiha)",
        "ur": "فُتِحَ"
      },
      {
        "en": "يَنْفَتِحُ (Yanfatihu)",
        "ur": "يَنْفَتِحُ"
      },
      {
        "en": "إِفْتَحْ (Iftah)",
        "ur": "إِفْتَحْ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Convert 'يَسْمَعُ النَّاسُ الأَذَانَ' (People hear the Adhan) into passive voice.",
    "ur": "جملے 'يَسْمَعُ النَّاسُ الأَذَانَ' کو مجہول میں درست طریقے سے تبدیل کریں:",
    "options": [
      {
        "en": "يُسْمَعُ الأَذَانُ",
        "ur": "يُسْمَعُ الأَذَانُ"
      },
      {
        "en": "سُمِعَ الأَذَانَ",
        "ur": "سُمِعَ الأَذَانَ"
      },
      {
        "en": "يَسْمَعُ الأَذَانُ",
        "ur": "يَسْمَعُ الأَذَانُ"
      },
      {
        "en": "تُسْمَعُ النَّاسُ",
        "ur": "تُسْمَعُ النَّاسُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the first month of the Islamic Hijri calendar?",
    "ur": "اسلامی ہجری تقویم کا پہلا مہینہ کون سا ہے؟",
    "options": [
      {
        "en": "Al-Muharram (المُحَرَّمُ)",
        "ur": "المُحَرَّمُ"
      },
      {
        "en": "Safar (صَفَرٌ)",
        "ur": "صَفَرٌ"
      },
      {
        "en": "Rabi' al-Awwal (رَبِيعٌ الأَوَّلُ)",
        "ur": "رَبِيعٌ الأَوَّلُ"
      },
      {
        "en": "Ramadan (رَمَضَانُ)",
        "ur": "رَمَضَانُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "Which month immediately follows Ramadan in the Hijri calendar?",
    "ur": "ہجری تقویم میں رمضان المبارک کے فوراً بعد کون سا مہینہ آتا ہے؟",
    "options": [
      {
        "en": "Shawwal (شَوَّالُ)",
        "ur": "شَوَّالُ"
      },
      {
        "en": "Sha'ban (شَعْبَانُ)",
        "ur": "شَعْبَانُ"
      },
      {
        "en": "Dhu al-Qa'dah (ذُو القَعْدَةِ)",
        "ur": "ذُو القَعْدَةِ"
      },
      {
        "en": "Rajab (رَجَبٌ)",
        "ur": "رَجَبٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the ninth month of the Islamic calendar?",
    "ur": "اسلامی تقویم کا نواں مہینہ کون سا ہے؟",
    "options": [
      {
        "en": "Ramadan (رَمَضَانُ)",
        "ur": "رَمَضَانُ"
      },
      {
        "en": "Sha'ban (شَعْبَانُ)",
        "ur": "شَعْبَانُ"
      },
      {
        "en": "Shawwal (شَوَّالُ)",
        "ur": "شَوَّالُ"
      },
      {
        "en": "Dhu al-Hijjah (ذُو الحِجَّةِ)",
        "ur": "ذُو الحِجَّةِ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "How do you complete Exercise 4: 'الاسم في اللغة العربية ... مذكر ... مؤنث'?",
    "ur": "تمرين 4 کا جملہ 'الاسم في اللغة العربية ... مذكر ... مؤنث' کیسے مکمل ہوگا؟",
    "options": [
      {
        "en": "إِمَّا مُذَكَّرٌ وَإِمَّا مُؤَنَّثٌ",
        "ur": "إِمَّا مُذَكَّرٌ وَإِمَّا مُؤَنَّثٌ"
      },
      {
        "en": "لَكِنَّ مُذَكَّرٌ وَلَعَلَّ مُؤَنَّثٌ",
        "ur": "لَكِنَّ مُذَكَّرٌ وَلَعَلَّ مُؤَنَّثٌ"
      },
      {
        "en": "أَنَّ مُذَكَّرٌ وَإِنَّ مُؤَنَّثٌ",
        "ur": "أَنَّ مُذَكَّرٌ وَإِنَّ مُؤَنَّثٌ"
      },
      {
        "en": "هَذَا مُذَكَّرٌ وَذَاكَ مُؤَنَّثٌ",
        "ur": "هَذَا مُذَكَّرٌ وَذَاكَ مُؤَنَّثٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What grammatical function does 'إِمَّا ... وَإِمَّا' convey in a sentence?",
    "ur": "جملے میں 'إِمَّا ... وَإِمَّا' کیا گرامر کا مقصد یا معنی ظاہر کرتا ہے؟",
    "options": [
      {
        "en": "Detailing / Presenting alternatives (التفصيل أو التخيير)",
        "ur": "تفصیل اور اختیارات پیش کرنا (التفصيل/التخيير)"
      },
      {
        "en": "Emphatic negation",
        "ur": "شدید نفی"
      },
      {
        "en": "Past temporal sequence",
        "ur": "ماضی کی ترتیب"
      },
      {
        "en": "Prohibition",
        "ur": "ممانعت"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Complete the sentence: 'إبراهيم ... مريض ... مسافر' (Ibrahim is either sick or traveling).",
    "ur": "جملہ مکمل کریں: 'إبراهيم ... مريض ... مسافر' (ابراہیم یا تو بیمار ہے یا مسافر):",
    "options": [
      {
        "en": "إِمَّا مَرِيضٌ وَإِمَّا مُسَافِرٌ",
        "ur": "إِمَّا مَرِيضٌ وَإِمَّا مُسَافِرٌ"
      },
      {
        "en": "إِذَا مَرِيضٌ فَإِنَّهُ مُسَافِرٌ",
        "ur": "إِذَا مَرِيضٌ فَإِنَّهُ مُسَافِرٌ"
      },
      {
        "en": "مَا مَرِيضٌ وَلاَ مُسَافِرٌ",
        "ur": "مَا مَرِيضٌ وَلاَ مُسَافِرٌ"
      },
      {
        "en": "كَانَ مَرِيضاً ثُمَّ مُسَافِراً",
        "ur": "كَانَ مَرِيضاً ثُمَّ مُسَافِراً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "How do you say '500 dollars' in Arabic with correct I'rab for 'خَمْسُمِائَةِ'?",
    "ur": "500 ڈالر کو درست اعراب کے ساتھ عربی میں کیسے لکھا جائے گا؟",
    "options": [
      {
        "en": "خَمْسُمِائَةِ دُولاَرٍ",
        "ur": "خَمْسُمِائَةِ دُولاَرٍ"
      },
      {
        "en": "خَمْسَةُ مِائَةٍ دُولاَرٍ",
        "ur": "خَمْسَةُ مِائَةٍ دُولاَرٍ"
      },
      {
        "en": "خَمْسِينَ مِائَةَ دُولاَرٍ",
        "ur": "خَمْسِينَ مِائَةَ دُولاَرٍ"
      },
      {
        "en": "خَمْسُونَ المِائَةِ دُولاَرٍ",
        "ur": "خَمْسُونَ المِائَةِ دُولاَرٍ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'قَرَأْتُ أَرْبَعَمِائَةِ صَفْحَةٍ' (I read 400 pages), why is 'أَرْبَعَ' in the Mansoob case?",
    "ur": "جملے 'قَرَأْتُ أَرْبَعَمِائَةِ صَفْحَةٍ' میں 'أَرْبَعَ' منصوب کیوں ہے؟",
    "options": [
      {
        "en": "Because it is Maf'ool Bihi (مفعول به)",
        "ur": "مفعول بہ ہونے کی بنا پر"
      },
      {
        "en": "Because it is Mudaf Ilayh",
        "ur": "مضاف الیہ ہونے کی بنا پر"
      },
      {
        "en": "Because it is Na'ib al-Fa'il",
        "ur": "نائب الفاعل ہونے کی بنا پر"
      },
      {
        "en": "Because it is Khabar Inna",
        "ur": "انّ کی خبر ہونے کی بنا پر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'اشْتَرَيْتُ هَذِهِ السَّاعَةَ بِثَلاَثِمِائَةِ رِيَالٍ', why is 'ثَلاَثِ' in the Majroor case?",
    "ur": "جملے 'اشْتَرَيْتُ هَذِهِ السَّاعَةَ بِثَلاَثِمِائَةِ رِيَالٍ' میں 'ثَلاَثِ' مجرور کیوں ہے؟",
    "options": [
      {
        "en": "Preceded by the preposition Ba (بـ)",
        "ur": "حرفِ جر (بـ) داخل ہونے کی بنا پر"
      },
      {
        "en": "Because it is Mudaf Ilayh",
        "ur": "مضاف الیہ ہونے کی بنا پر"
      },
      {
        "en": "Because it is Na't",
        "ur": "نعت ہونے کی بنا پر"
      },
      {
        "en": "Because it is Hal",
        "ur": "حال ہونے کی بنا پر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "What is the singular unit form (المفرد) of the collective generic noun 'عَرَبٌ'?",
    "ur": "اسم الجنس الجمعی 'عَرَبٌ' کا واحد لفظ کیا ہے؟",
    "options": [
      {
        "en": "عَرَبِيٌّ (Arabiyy)",
        "ur": "عَرَبِيٌّ"
      },
      {
        "en": "عَرَبَةٌ",
        "ur": "عَرَبَةٌ"
      },
      {
        "en": "أَعْرَابٌ",
        "ur": "أَعْرَابٌ"
      },
      {
        "en": "عُرُوبَةٌ",
        "ur": "عُرُوبَةٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "What is the singular unit form of the collective generic noun 'تُفَّاحٌ' (apples)?",
    "ur": "اسم الجنس الجمعی 'تُفَّاحٌ' (سیب) کا واحد لفظ کیا ہے؟",
    "options": [
      {
        "en": "تُفَّاحَةٌ (Tuffahatah)",
        "ur": "تُفَّاحَةٌ"
      },
      {
        "en": "تُفَّاحِيٌّ",
        "ur": "تُفَّاحِيٌّ"
      },
      {
        "en": "أَتْفَاحٌ",
        "ur": "أَتْفَاحٌ"
      },
      {
        "en": "مَتَافِحُ",
        "ur": "مَتَافِحُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "How is the singular unit formed from the collective noun 'شَجَرٌ' (trees)?",
    "ur": "اسم جنس جمعی 'شَجَرٌ' سے واحد یونٹ کیسے بنایا جاتا ہے؟",
    "options": [
      {
        "en": "By adding Tā' Marbootah (شَجَرَةٌ)",
        "ur": "آخر میں تاء مربوطہ کا اضافہ کر کے (شَجَرَةٌ)"
      },
      {
        "en": "By adding Yā' Nisbah",
        "ur": "یاءِ نسبتی کے اضافے سے"
      },
      {
        "en": "By adding Tanween",
        "ur": "تنوین کے اضافے سے"
      },
      {
        "en": "By prefixing Al",
        "ur": "شروع میں ال لگا کر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 7",
    "en": "What is the passive present form of the verb 'يَخْلُقُ' in 'يُخْلَقُ الإِنْسَانُ'?",
    "ur": "فعل 'يَخْلُقُ' کی مضارع مجہول شکل کیا ہے؟",
    "options": [
      {
        "en": "يُخْلَقُ (Yukhlaqu)",
        "ur": "يُخْلَقُ"
      },
      {
        "en": "خُلِقَ (Khuliqa)",
        "ur": "خُلِقَ"
      },
      {
        "en": "إِخْتَلَقَ",
        "ur": "إِخْتَلَقَ"
      },
      {
        "en": "يَسْتَخْلِقُ",
        "ur": "يَسْتَخْلِقُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 7",
    "en": "What is the grammatical function of 'الأَذَانُ' in 'يُسْمَعُ الأَذَانُ بِوُضُوحٍ'?",
    "ur": "جملے 'يُسْمَعُ الأَذَانُ بِوُضُوحٍ' میں 'الأَذَانُ' کا ترکیبی منصب کیا ہے؟",
    "options": [
      {
        "en": "Na'ib al-Fa'il Marfoo' (نائب الفاعل مرفوع)",
        "ur": "نائب الفاعل مرفوع"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Maf'ool Bihi Mansoob",
        "ur": "مفعول بہ منصوب"
      },
      {
        "en": "Zarf Zaman",
        "ur": "ظرف زمان"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 3 Quiz ---');

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

    // 4. Find or Create Lecture 03 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 3 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 03 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 03', 3)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 03: ID ${lectureId}`);
    }

    // 5. CAREFUL DELETION: Find existing Book 3 Lesson 3 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 3))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 3.`);
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

    // 6. Create the quiz for Book 3 Lesson 3
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 03 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 3 with ${questionsData.length} questions and Part designations!`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

run();
