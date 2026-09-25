import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What are 'Adawat ash-Shart' (أَدَوَاتُ الشَّرْطِ) in Arabic grammar?",
    "ur": "عربی گرامر میں 'ادواتِ شرط' کی کیا تعریف ہے؟",
    "options": [
      {
        "en": "Particles or nouns that link a condition clause (فعل الشرط) with its result/answer clause (جواب الشرط)",
        "ur": "وہ حروف یا اسماء جو جملہ شرط (فعلِ شرط) کو اس کے نتیجہ و جزا (جوابِ شرط) کے ساتھ جوڑتے ہیں"
      },
      {
        "en": "Particles used exclusively for vocative calls",
        "ur": "وہ حروف جو صرف ندا کے لیے آئیں"
      },
      {
        "en": "Nouns indicating the time or place of action",
        "ur": "زمان یا مکان بتانے والے اسماء"
      },
      {
        "en": "Verbs derived from Form X",
        "ur": "فارم X سے مشتق افعال"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the two primary classifications of conditional instruments in Arabic?",
    "ur": "عربی زبان میں ادواتِ شرط کی بنیادی دو اقسام کون سی ہیں؟",
    "options": [
      {
        "en": "أدوات الشرط الجازمة (Making two verbs Majzoom) and أدوات الشرط غير الجازمة (Non-jazim)",
        "ur": "أدوات الشرط الجازمة (دو افعال کو جزم دینے والے) اور أدوات الشرط غير الجازمة (غیر جازم)"
      },
      {
        "en": "أدوات الشرط المرفوعة اور أدوات الشرط المنصوبة",
        "ur": "ادوات شرط مرفوعہ اور ادوات شرط منصوبہ"
      },
      {
        "en": "أدوات الشرط المافية اور أدوات الشرط الحاضرة",
        "ur": "ادوات شرط ماضیہ اور ادوات شرط حاضرہ"
      },
      {
        "en": "أدوات الشرط المذكرة اور أدوات الشرط المؤنثة",
        "ur": "ادوات شرط مذکرہ اور ادوات شرط مؤنثہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How do 'Adawat ash-Shart al-Jazimah' (أدوات الشرط الجازمة) affect the condition and answer verbs?",
    "ur": "'ادواتِ شرط جازمہ' کا فعلِ شرط اور جوابِ شرط کے اعراب پر کیا عمل ہوتا ہے؟",
    "options": [
      {
        "en": "They cause both Fi'l ash-Shart and Jawab ash-Shart to be Majroor / Majzoom (جَزْمُ الفِعْلَيْنِ)",
        "ur": "وہ فعلِ شرط اور جوابِ شرط دونوں افعال کو مجزوم کر دیتے ہیں (جزم الفعلين)"
      },
      {
        "en": "They make both verbs Mansoob with Fatha",
        "ur": "وہ دونوں افعال کو فتحہ کے ساتھ منصوب کرتے ہیں"
      },
      {
        "en": "They make both verbs Marfoo' with Damma",
        "ur": "وہ دونوں افعال کو ضمہ کے ساتھ مرفوع کرتے ہیں"
      },
      {
        "en": "They affect only the first verb",
        "ur": "وہ صرف پہلے فعل پر عمل کرتے ہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "Which of the following Jazimah conditional instruments is a TRUE HARF (حرف), while the rest are Asma' (اسماء)?",
    "ur": "ادواتِ شرط جازمہ میں سے کون सा لفظ 'حرف' ہے، جبکہ باقی تمام 'اسماء' ہیں؟",
    "options": [
      {
        "en": "'إِنْ' (and 'إِذْمَا'), while words like مَنْ, مَا, مَهْمَا, متى are Asma'",
        "ur": "'إِنْ' (اور إِذْمَا) حرف ہے، جبکہ مَنْ، مَا، مَهْمَا، مَتَى وغیرہ اسماء ہیں"
      },
      {
        "en": "'مَنْ'",
        "ur": "'مَنْ'"
      },
      {
        "en": "'أَيْنَمَا'",
        "ur": "'أَيْنَمَا'"
      },
      {
        "en": "'كَيْفَمَا'",
        "ur": "'كَيْفَمَا'"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What are the primary 'Adawat ash-Shart Ghair al-Jazimah' (أدوات الشرط غير الجازمة)?",
    "ur": "بنیادی 'ادواتِ شرط غیر جازمہ' کون سی ہیں؟",
    "options": [
      {
        "en": "لَوْ، لَوْلاَ، لَوْمَا، إِذَا، كُلَّمَا، لَمَّا، أَمَّا",
        "ur": "لَوْ، لَوْلاَ، لَوْمَا، إِذَا، كُلَّمَا، لَمَّا، أَمَّا"
      },
      {
        "en": "إِنْ، مَنْ، مَا، مَهْمَا",
        "ur": "إِنْ، مَنْ، مَا، مَهْمَا"
      },
      {
        "en": "لَيْسَ، مَا، لاَ، إِنَّ",
        "ur": "لَيْسَ، مَا، لاَ، إِنَّ"
      },
      {
        "en": "أَنْ، لَنْ، كَيْ، إِذَنْ",
        "ur": "أَنْ، لَنْ، كَيْ، إِذَنْ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Law' (لَوْ) defined as in conditional grammar?",
    "ur": "شرطیہ گرامر میں 'لَوْ' کی کیا خاص نحوی تعریف بیان کی جاتی ہے؟",
    "options": [
      {
        "en": "Harf Imtina' li-Imtina' (حَرْفُ امْتِنَاعٍ لاِمْتِنَاعٍ - particle indicating non-occurrence of answer due to non-occurrence of condition)",
        "ur": "حَرْفُ امْتِنَاعٍ لاِمْتِنَاعٍ (شرط کے نہ ہونے کی وجہ سے جزا کا نہ ہونا ظاہر کرنے والا حرف)"
      },
      {
        "en": "Harf Imtina' li-Wujood",
        "ur": "حرف امتناع لوجود"
      },
      {
        "en": "Harf Atf",
        "ur": "حرف عطف"
      },
      {
        "en": "Harf Jasim",
        "ur": "حرف جازم"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Lawla' (لَوْلاَ) defined as in conditional grammar?",
    "ur": "'لَوْلاَ' کی گرامر میں کیا خاص نحوی تعریف ہے؟",
    "options": [
      {
        "en": "Harf Imtina' li-Wujood (حَرْفُ امْتِنَاعٍ لِوُجُودٍ - particle indicating non-occurrence of answer due to existence of condition)",
        "ur": "حَرْفُ امْتِنَاعٍ لِوُجُودٍ (شرط کے وجود کی وجہ سے جزا کا مانع ہونا)"
      },
      {
        "en": "Harf Imtina' li-Imtina'",
        "ur": "حرف امتناع لامتناع"
      },
      {
        "en": "Harf Jar",
        "ur": "حرف جر"
      },
      {
        "en": "Harf Nida",
        "ur": "حرف نداء"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "When MUST the result/answer clause (جواب الشرط) be connected with 'Fā' al-Jazā'' (الفاء الرابطة لجواب الشرط)?",
    "ur": "جوابِ شرط کے شروع میں 'فاءِ جزاء' (فـ) کا لانا کب واجب ہو جاتا ہے؟",
    "options": [
      {
        "en": "When Jawab is Jumla Ismiyyah, Talabiyyah (Imperative/Prohibition), Jamid verb (لَيْسَ/عَسَى), or preceded by مَا/قَدْ/لَنْ/سـ/سَوْفَ",
        "ur": "جب جواب جملہ اسمیہ ہو، طلبائیہ ہو، فعلِ جامد ہو، یا اس سے پہلے ما/قد/لن/سین/سوف آئے"
      },
      {
        "en": "In every conditional sentence without exception",
        "ur": "ہر شرطیہ جملے میں بلا استثناء"
      },
      {
        "en": "Only when the condition verb is past tense",
        "ur": "صرف جب فعلِ شرط ماضی ہو"
      },
      {
        "en": "Only when the conditional particle is 'إِنْ'",
        "ur": "صرف جب اداۃِ شرط 'أن' ہو"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is 'Jazm al-Mudari' fi Jawab at-Talab' (جَزْمُ الـمُضَارِعِ فِي جَوَابِ الطَّلَبِ)?",
    "ur": "'جزم المضارع في جواب الطلب' سے کیا مراد ہے؟",
    "options": [
      {
        "en": "A present tense verb becoming Majzoom as the desirable result/answer of a preceding demand (like Imperative/Prohibition) without a conditional particle",
        "ur": "بغیر اداۃِ شرط کے، سابقہ طلب (فعلِ امر یا نہی) کے پسندیدہ نتیجے و جواب کے طور پر مضارع کا مجزوم ہونا"
      },
      {
        "en": "A verb becoming Mansoob after Fa' al-Sababiyyah",
        "ur": "فاء سببیہ کے بعد مضارع کا منصوب ہونا"
      },
      {
        "en": "A verb taking Damma after 'Lamma'",
        "ur": "لما کے بعد فعل کا مرفوع ہونا"
      },
      {
        "en": "A past tense verb becoming Mabni on Sukoon",
        "ur": "فعلِ ماضی کا سکون پر مبنی ہونا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is 'أَيُّ' uniquely distinguished among all 'Adawat ash-Shart al-Jazimah'?",
    "ur": "تمام ادواتِ شرط جازمہ میں لفظ 'أَيُّ' کس خاص صفت کی بنا پر ممتاز اور الگ ہے؟",
    "options": [
      {
        "en": "'أَيُّ' is the ONLY conditional instrument that is MU'RAB (declinable with vowels) and Mudaf, while all others are Mabni",
        "ur": "لفظ 'أَيُّ' واحد اداۃِ شرط ہے جو **معرب** (اعراب بدلنے والا) اور مضاف ہوتا ہے، جبکہ باقی تمام مبنی ہیں"
      },
      {
        "en": "'أَيُّ' is a letter rather than a noun",
        "ur": "یہ اسم کے بجائے حرف ہے"
      },
      {
        "en": "'أَيُّ' can never make the verb Majzoom",
        "ur": "یہ فعل کو کبھی مجزوم نہیں کرتا"
      },
      {
        "en": "'أَيُّ' is used only with past verbs",
        "ur": "یہ صرف افعالِ ماضی کے ساتھ آتا ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, parse 'تَنْجَحْ' in 'إِنْ تَجْتَهِدْ تَنْجَحْ':",
    "ur": "تمرين 1 کے مطابق 'إِنْ تَجْتَهِدْ تَنْجَحْ' میں 'تَنْجَحْ' کا اعرابی تجزیہ کیا ہے؟",
    "options": [
      {
        "en": "Fi'l Mudari' Majzoom as Jawab ash-Shart with Sukoon (فعل مضارع مجزوم لأنه جواب الشرط وعلامة جزمه السكون)",
        "ur": "جوابِ شرط بننے کی بنا پر فعلِ مضارع مجزوم بالسكون"
      },
      {
        "en": "Fi'l Mudari' Marfoo' with Damma",
        "ur": "فعلِ مضارع مرفوع بالضمة"
      },
      {
        "en": "Fi'l ash-Shart Majzoom",
        "ur": "فعلِ شرط مجزوم"
      },
      {
        "en": "Khabar Inna",
        "ur": "انّ کی خبر"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete with Jazimah instrument for rational beings (عاقل): '... يَعْمَلْ سُوءاً يُجْزَ بِهِ' (Qur'an 4:123):",
    "ur": "عاقل کے لیے اداۃِ شرط جازمہ سے قرآنی آیہ مکمل کریں: '... يَعْمَلْ سُوءاً يُجْزَ بِهِ':",
    "options": [
      {
        "en": "مَنْ (Man - Conditional noun for rational beings)",
        "ur": "مَنْ (عاقل کے لیے اسمِ شرط جازم)"
      },
      {
        "en": "مَا",
        "ur": "مَا"
      },
      {
        "en": "مَهْمَا",
        "ur": "مَهْمَا"
      },
      {
        "en": "إِذَا",
        "ur": "إِذَا"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "Complete: 'وَمَا تَفْعَلُوا مِنْ خَيْرٍ ... اللَّهُ' (Qur'an 2:197) with Majzoom Jawab verb:",
    "ur": "مجزوم جوابِ شرط سے قرآنی آیہ مکمل کریں: 'وَمَا تَفْعَلُوا مِنْ خَيْرٍ ... اللَّهُ':",
    "options": [
      {
        "en": "يَعْلَمْهُ (Ya'lamhu - Majzoom with Sukoon on Meem)",
        "ur": "يَعْلَمْهُ (میام پر سکون کے ساتھ مجزوم)"
      },
      {
        "en": "يَعْلَمُهُ",
        "ur": "يَعْلَمُهُ"
      },
      {
        "en": "يَعْلَمُونَهُ",
        "ur": "يَعْلَمُونَهُ"
      },
      {
        "en": "عَلِمَهُ",
        "ur": "عَلِمَهُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In 'أَيْنَمَا تَكُونُوا يُدْرِكْكُمُ الـمَوْتُ' (Qur'an 4:78), why is 'تَكُونُوا' Majzoom?",
    "ur": "قرآنی آیہ 'أَيْنَمَا تَكُونُوا يُدْرِكْكُمُ الـمَوْتُ' میں 'تَكُونُوا' کے مجزوم ہونے کی کیا علامت ہے؟",
    "options": [
      {
        "en": "Majzoom by deleting Noon because it is from Al-Af'al al-Khamsah (مجزوم بحذف النون)",
        "ur": "افعالِ خمسہ میں سے ہونے کی بنا پر نون کے حذف کے ساتھ مجزوم"
      },
      {
        "en": "Majzoom with Sukoon",
        "ur": "سکون کے ساتھ مجزوم"
      },
      {
        "en": "Majzoom by deleting Harf Illah",
        "ur": "حرفِ علت کے حذف کے ساتھ مجزوم"
      },
      {
        "en": "Mabni on Fatha",
        "ur": "فتحہ پر مبنی"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, parse 'لَوْ' in 'لَوْ اجْتَهَدْتَ لَنَجَحْتَ':",
    "ur": "تمرين 2 کے مطابق 'لَوْ اجْتَهَدْتَ لَنَجَحْتَ' میں 'لَوْ' کا کیا اعرابی منصب ہے؟",
    "options": [
      {
        "en": "Harf Imtina' li-Imtina' Ghair Jazim (حرف امتناع لامتناع شرط غير جازم)",
        "ur": "حرفِ امتناع لامتناع، شرطِ غیر جازم"
      },
      {
        "en": "Harf Shart Jazim",
        "ur": "حرفِ شرط جازم"
      },
      {
        "en": "Harf Jar",
        "ur": "حرفِ جر"
      },
      {
        "en": "Harf Nida",
        "ur": "حرفِ نداء"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Complete: 'لَوْلاَ العِلْمُ ... النَّاسُ' (Had it not been for knowledge, people would have perished):",
    "ur": "غیر جازم جملہ مکمل کریں: 'لَوْلاَ العِلْمُ ... النَّاسُ' (اگر علم نہ ہوتا تو لوگ ہلاک ہو جاتے):",
    "options": [
      {
        "en": "لَهَلَكَ (Lahalaka - Past verb with Laam ar-Rabitah)",
        "ur": "لَهَلَكَ (لامِ رابطہ کے ساتھ فعلِ ماضی)"
      },
      {
        "en": "يَهْلِكُ",
        "ur": "يَهْلِكُ"
      },
      {
        "en": "هَالِكٌ",
        "ur": "هَالِكٌ"
      },
      {
        "en": "هَلاَكاً",
        "ur": "هَلاَكاً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In 'كُلَّمَا دَخَلَ عَلَيْهَا زَكَرِيَّا الـمِحْرَابَ وَجَدَ عِنْدَهَا رِزْقاً' (Qur'an 3:37), what verb tense MUST follow 'كُلَّمَا'?",
    "ur": "قرآنی آیہ میں لفظ 'كُلَّمَا' کے بعد ہمیشہ افعال کی کون سی حالت آنا ضروری ہے؟",
    "options": [
      {
        "en": "MUST be followed by Past Tense verbs only (الفعل الماضي فقط)",
        "ur": "اس کے بعد صرف اور صرف فعلِ ماضی کا آنا لازمی ہے"
      },
      {
        "en": "Present Tense verbs only",
        "ur": "صرف فعلِ مضارع"
      },
      {
        "en": "Imperative verbs",
        "ur": "فعلِ امر"
      },
      {
        "en": "Nominal sentence",
        "ur": "جملہ اسمیہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "Complete: 'إِذَا قُرِئَ القُرْآنُ ... لَهُ' (Qur'an 7:204):",
    "ur": "قرآنی آیہ 'إِذَا' کے بعد مکمل کریں: 'إِذَا قُرِئَ القُرْآنُ ... لَهُ':",
    "options": [
      {
        "en": "فَاسْتَمِعُوا (Fa-stami'ū - Imperative Jawab preceded by Fā')",
        "ur": "فَاسْتَمِعُوا (فاء کے ساتھ امر جوابِ شرط)"
      },
      {
        "en": "اسْتَمَعُوا",
        "ur": "اسْتَمَعُوا"
      },
      {
        "en": "يَسْتَمِعُونَ",
        "ur": "يَسْتَمِعُونَ"
      },
      {
        "en": "اسْتِمَاعاً",
        "ur": "اسْتِمَاعاً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In Exercise 3, in 'مَنْ يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ' (Qur'an 4:80), why is Fā' linked to Jawab?",
    "ur": "تمرين 3 کے مطابق آیہ 'فَقَدْ أَطَاعَ اللَّهَ' میں جوابِ شرط کے ساتھ فاء لانا کیوں ضروری ہے؟",
    "options": [
      {
        "en": "Because the Jawab verb is preceded by 'قَدْ' (لأن الجواب مقترن بـ قد)",
        "ur": "کیونکہ جوابِ شرط کے شروع میں حرف 'قَدْ' موجود ہے"
      },
      {
        "en": "Because Jawab is a nominal sentence",
        "ur": "کیونکہ جواب جملہ اسمیہ ہے"
      },
      {
        "en": "Because Jawab is a Jamid verb",
        "ur": "کیونکہ جواب فعلِ جامد ہے"
      },
      {
        "en": "Because Jawab is negated with Lan",
        "ur": "کیونکہ جواب لن سے منفی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'إِنْ تَنْصُرُوا اللَّهَ فَاللَّهُ نَاصِرُكُمْ', why is Fā' linked to Jawab?",
    "ur": "جملے 'فَاللَّهُ نَاصِرُكُمْ' میں جوابِ شرط پر فاء لانے کی کیا وجہ ہے؟",
    "options": [
      {
        "en": "Because the Jawab is a Nominal Sentence (لأنه جملة اسمية)",
        "ur": "کیونکہ جوابِ شرط جملہ اسمیہ ہے"
      },
      {
        "en": "Because Jawab contains Saufa",
        "ur": "کیونکہ جواب میں سوف ہے"
      },
      {
        "en": "Because Jawab is an imperative verb",
        "ur": "کیونکہ جواب فعلِ امر ہے"
      },
      {
        "en": "Because Jawab is negative",
        "ur": "کیونکہ جواب منفی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In the Prophet's Hadith 'مَنْ غَشَّنَا فَلَيْسَ مِنَّا', why is Fā' linked to 'لَيْسَ'?",
    "ur": "حدیثِ مبارکہ 'فَلَيْسَ مِنَّا' میں 'لَيْسَ' سے پہلے فاء لانا کیوں واجب ہے؟",
    "options": [
      {
        "en": "Because 'لَيْسَ' is a Non-derivable Rigid verb (فِعْلٌ جَامِدٌ)",
        "ur": "کیونکہ 'لَيْسَ' ایک فعلِ جامد (غير متصرف) ہے"
      },
      {
        "en": "Because it is preceded by Qad",
        "ur": "قد کے بعد آنے کی وجہ سے"
      },
      {
        "en": "Because it is a nominal sentence",
        "ur": "جملہ اسمیہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it is present tense",
        "ur": "مضارع ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "In 'إِنْ حَضَرَ الـمُدَرِّسُ فَاسْتَمِعْ إِلَيْهِ', why is Fā' linked to Jawab?",
    "ur": "جملے 'فَاسْتَمِعْ إِلَيْهِ' میں فاء لانے کی کیا وجہ ہے؟",
    "options": [
      {
        "en": "Because the Jawab is a Request/Demand sentence (جملة طلبية - فعل أمر)",
        "ur": "کیونکہ جوابِ شرط ایک جملہ طلبائیہ (فعلِ امر) ہے"
      },
      {
        "en": "Because it is Jumla Ismiyyah",
        "ur": "جملہ اسمیہ ہونے کی وجہ سے"
      },
      {
        "en": "Because it has Saufa",
        "ur": "سوف ہونے کی وجہ سے"
      },
      {
        "en": "Because it has Ma",
        "ur": "ما ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "In Exercise 4, complete: 'اِقْرَأِ الكِتَابَ ...' (Read the book, you will benefit - Majzoom in Jawab at-Talab):",
    "ur": "تمرين 4 کے مطابق جوابِ طلب میں مجزوم فعل سے جملہ مکمل کریں: 'اِقْرَأِ الكِتَابَ ...':",
    "options": [
      {
        "en": "تَسْتَفِدْ (Tastafid - Majzoom with Sukoon in Jawab at-Talab)",
        "ur": "تَسْتَفِدْ (جوابِ طلب میں سکون کے ساتھ مجزوم)"
      },
      {
        "en": "تَسْتَفِيدُ",
        "ur": "تَسْتَفِيدُ"
      },
      {
        "en": "تَسْتَفِيدُونَ",
        "ur": "تَسْتَفِيدُونَ"
      },
      {
        "en": "اسْتَفَادَ",
        "ur": "اسْتَفَادَ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Complete: 'لاَ تَكْسَلْ ...' (Do not be lazy, you will succeed):",
    "ur": "جملہ مکمل کریں: 'لاَ تَكْسَلْ ...' (سستی نہ کرو، کامیاب ہو جاؤ گے):",
    "options": [
      {
        "en": "تَنْجَحْ (Tanjah - Majzoom in Jawab of Prohibition)",
        "ur": "تَنْجَحْ (نہی کے جوابِ طلب میں مجزوم)"
      },
      {
        "en": "تَنْجَحُ",
        "ur": "تَنْجَحُ"
      },
      {
        "en": "تَنْجَحُونَ",
        "ur": "تَنْجَحُونَ"
      },
      {
        "en": "نَجَاحاً",
        "ur": "نَجَاحاً"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "Why is 'تَنْجَحْ' Majzoom in 'اجْتَهِدْ تَنْجَحْ'?",
    "ur": "جملے 'اجْتَهِدْ تَنْجَحْ' میں فعل 'تَنْجَحْ' پر جزم کیوں ہے؟",
    "options": [
      {
        "en": "Because it is a present verb falling in the desirable answer of an imperative demand (جواب الطلب)",
        "ur": "کیونکہ یہ فعلِ امر کے پسندیدہ جوابِ طلب میں آنے والا مضارع ہے"
      },
      {
        "en": "Because 'اجتهد' is a preposition",
        "ur": "حرفِ جر کی وجہ سے"
      },
      {
        "en": "Because it is preceded by 'In'",
        "ur": "ان کی وجہ سے"
      },
      {
        "en": "Because it is Fa'il",
        "ur": "فاعل ہونے کی وجہ سے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the requirement for a present verb to be Majzoom after Prohibition (النهي, e.g., 'لاَ تَدْنُ مِنَ الأَسَدِ تِسْلَمْ')?",
    "ur": "نہی (ممانعت) کے بعد مضارع کو جوابِ طلب میں مجزوم بنانے کے لیے کیا شرط ہے؟",
    "options": [
      {
        "en": "The result MUST be a desirable/positive outcome (أَمْرٌ مَحْبُوبٌ, e.g., 'تسلمْ' as opposed to undesirable 'يعقركَ')",
        "ur": "نتیجہ کا لازماً ایک پسندیدہ امر (محبوب) ہونا ضروری ہے (جیسے 'تسلمْ' بجائز ناپسندیدہ 'يعقرك')"
      },
      {
        "en": "The result must be negative",
        "ur": "نتیجہ کا ناپسندیدہ ہونا"
      },
      {
        "en": "The verb must be past tense",
        "ur": "فعل کا ماضی ہونا"
      },
      {
        "en": "No condition is required",
        "ur": "کوئی شرط نہیں"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In the Quranic verse 'وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجاً' (Qur'an 65:2), why does 'يَتَّقِ' end with Kasra?",
    "ur": "قرآنی آیہ 'وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجاً' میں 'يَتَّقِ' کے آخر میں کسرہ ہونے کی کیا وجہ ہے؟",
    "options": [
      {
        "en": "Majzoom by deleting Harf Illah Yā' (مجزوم بحذف حرف العلة الياء)",
        "ur": "حرفِ علت یاء کے حذف کے ساتھ مجزوم (اصل: يَتَّقِي)"
      },
      {
        "en": "Majroor with Kasra",
        "ur": "کسرہ کے ساتھ مجرور"
      },
      {
        "en": "Mabni on Kasra",
        "ur": "کسرہ پر مبنی"
      },
      {
        "en": "Diptote rule",
        "ur": "غیر منصرف کا قاعدہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In 'أَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ' (Qur'an 2:115), why is 'تُوَلُّوا' Majzoom?",
    "ur": "آیت مبارکہ 'أَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ' میں 'تُوَلُّوا' کس علامت کے ساتھ مجزوم ہے؟",
    "options": [
      {
        "en": "Majzoom by deleting Noon because it is from Al-Af'al al-Khamsah (مجزوم بحذف النون)",
        "ur": "افعالِ خمسہ میں سے ہونے کی بنا پر نون کے حذف کے ساتھ مجزوم"
      },
      {
        "en": "Majzoom with Sukoon",
        "ur": "سکون کے ساتھ مجزوم"
      },
      {
        "en": "Mabni on Damma",
        "ur": "ضمہ پر مبنی"
      },
      {
        "en": "Mansoob with Alif",
        "ur": "الف کے ساتھ منصوب"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "Parse the full sentence: 'إِنْ تَجْتَهِدْ تَنْجَحْ':",
    "ur": "پورے جملے 'إِنْ تَجْتَهِدْ تَنْجَحْ' کا کامل ترکیبی اعراب کیا ہے؟",
    "options": [
      {
        "en": "إِنْ: حرف شرط جازم، تَجْتَهِدْ: فعل الشرط مجزوم بالسكون والفاعل مستتر أنت، تَنْجَحْ: جواب الشرط مجزوم بالسكون والفاعل مستتر أنت",
        "ur": "إِنْ: حرفِ شرط جازم، تَجْتَهِدْ: فعلِ شرط مجزوم بالسكون مع فاعل مستتر (أنت)، تَنْجَحْ: جوابِ شرط مجزوم بالسكون مع فاعل مستتر (أنت)"
      },
      {
        "en": "إن: حرف جر، تجتهد: اسم مجرور، تنجح: خبر",
        "ur": "ان حرف جر، تجتهد اسم مجرور، تنجح خبر"
      },
      {
        "en": "إن: مبتدأ، تجتهد: فاعل، تنجح: مفعول به",
        "ur": "ان مبتدأ، تجتهد فاعل، تنجح مفعول بہ"
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
    "en": "Which statement accurately summarizes the core difference between Jazimah and Ghair Jazimah conditional instruments?",
    "ur": "ادواتِ شرط جازمہ اور غیر جازمہ کے بنیادی باہمی فرق کا درست خلاصہ کیا ہے؟",
    "options": [
      {
        "en": "Jazimah instruments grammatically cause both Fi'l ash-Shart and Jawab ash-Shart to be Majzoom; while Ghair Jazimah instruments create conditional meaning without changing the grammatical I'rab of the verbs",
        "ur": "ادواتِ شرط جازمہ لفطاً و اعراباً دونوں افعال کو مجزوم کرتے ہیں؛ جبکہ غیر جازمہ ادوات صرف شرطیہ معنی پیدا کرتے ہیں لیکن افعال کا اعراب تبدیل نہیں کرتے"
      },
      {
        "en": "Both type of instruments make the verb Mansoob with Fatha",
        "ur": "دونوں قسم کے ادوات افعال کو منصوب کرتے ہیں"
      },
      {
        "en": "Ghair Jazimah instruments work only on nouns",
        "ur": "غیر جازمہ ادوات صرف اسماء پر عمل کرتے ہیں"
      },
      {
        "en": "Jazimah instruments require preposition 'Min'",
        "ur": "جازمہ ادوات کو حرفِ جر 'من' کی ضرورت ہوتی ہے"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 18 Quiz ---');
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

    // 3. Find or Create Lecture 18 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 18 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 18 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 18', 18)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 18: ID ${lectureId}`);
    }

    // 4. CAREFUL DELETION: Find existing Book 3 Lesson 18 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 18))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 18.`);
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

    // 5. Create the quiz for Book 3 Lesson 18
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 18 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 18 with ${questionsData.length} questions and Part designations!\n`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
