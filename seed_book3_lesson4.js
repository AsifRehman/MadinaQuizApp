import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL || process.env.DATABASE_URL);

export const questionsData = [
  {
    "part": "Main Content",
    "en": "What is the standard pattern (وزن) of Ism al-Fa'il (اسم الفاعل) for a Form I sound verb (الثلاثي المجرد السالم)?",
    "ur": "فعل ثلاثی مجرد سالم سے اسمِ فاعل کا بنیادی وزن کیا ہوتا ہے؟",
    "options": [
      {
        "en": "فَاعِلٌ (Fā'il)",
        "ur": "فَاعِلٌ"
      },
      {
        "en": "مَفْعُولٌ (Maf'ool)",
        "ur": "مَفْعُولٌ"
      },
      {
        "en": "مُفْعِلٌ (Muf'il)",
        "ur": "مُفْعِلٌ"
      },
      {
        "en": "فَعِيلٌ (Fa'eel)",
        "ur": "فَعِيلٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the standard pattern (وزن) of Ism al-Maf'ool (اسم المفعول) for a Form I sound verb?",
    "ur": "فعل ثلاثی مجرد سالم سے اسمِ مفعول کا بنیادی وزن کیا ہوتا ہے؟",
    "options": [
      {
        "en": "مَفْعُولٌ (Maf'ool)",
        "ur": "مَفْعُولٌ"
      },
      {
        "en": "فَاعِلٌ (Fā'il)",
        "ur": "فَاعِلٌ"
      },
      {
        "en": "مُفْعَلٌ (Muf'al)",
        "ur": "مُفْعَلٌ"
      },
      {
        "en": "فَعَّالٌ (Fa''āl)",
        "ur": "فَعَّالٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is Ism al-Fa'il formed from a Form I doubled verb (الفعل المضاعف, e.g., سَرَّ)?",
    "ur": "فعلِ مضاعف (مثلاً سَرَّ) سے اسمِ فاعل کی بناوٹ کس طرح ہوتی ہے؟",
    "options": [
      {
        "en": "سَارٌّ (Sārr, retaining Idgham on weight of Fā'il)",
        "ur": "سَارٌّ (ادغام برقرار رکھتے ہوئے)"
      },
      {
        "en": "مَسْرُورٌ (Masroor)",
        "ur": "مَسْرُورٌ"
      },
      {
        "en": "سَارِرٌ (Sārir)",
        "ur": "سَارِرٌ"
      },
      {
        "en": "أَسَرَّ (Asarra)",
        "ur": "أَسَرَّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Ism al-Maf'ool of the doubled verb 'سَرَّ' (to make happy)?",
    "ur": "فعلِ مضاعف 'سَرَّ' سے اسمِ مفعول کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَسْرُورٌ (Masroor, with un-doubling/fakk al-idgham)",
        "ur": "مَسْرُورٌ (فکِ ادغام کے ساتھ)"
      },
      {
        "en": "سَارٌّ",
        "ur": "سَارٌّ"
      },
      {
        "en": "مُسَرٌّ",
        "ur": "مُسَرٌّ"
      },
      {
        "en": "مَسَرَّةٌ",
        "ur": "مَسَرَّةٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "How is Ism al-Fa'il formed from a verb starting with Hamzah (المهموز الفاء, e.g., أَخَذَ)?",
    "ur": "المہموز الفاء فعل (مثلاً أَخَذَ) سے اسمِ فاعل کیسے بنایا جاتا ہے؟",
    "options": [
      {
        "en": "آخِذٌ (Ākhidh, merging the original Hamzah with Alif)",
        "ur": "آخِذٌ (ہمزہ کو الف سے بدل کر ملا دینے سے)"
      },
      {
        "en": "أَأْخِذٌ",
        "ur": "أَأْخِذٌ"
      },
      {
        "en": "مَأْخُوذٌ",
        "ur": "مَأْخُوذٌ"
      },
      {
        "en": "إِخْذٌ",
        "ur": "إِخْذٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Ism al-Fa'il of the Ajwaf Wawi verb 'قَالَ' (to say)?",
    "ur": "فعلِ اجوف واوی 'قَالَ' سے اسمِ فاعل کیا بنتا ہے؟",
    "options": [
      {
        "en": "قَائِلٌ (Qā'il, converting the weak letter to Hamzah)",
        "ur": "قَائِلٌ (حرفِ علت کو ہمزہ سے بدل کر)"
      },
      {
        "en": "قَاوِلٌ",
        "ur": "قَاوِلٌ"
      },
      {
        "en": "مَقُولٌ",
        "ur": "مَقُولٌ"
      },
      {
        "en": "قَوَّالٌ",
        "ur": "قَوَّالٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Ism al-Maf'ool of the Ajwaf Wawi verb 'قَالَ' (to say)?",
    "ur": "فعلِ اجوف واوی 'قَالَ' سے اسمِ مفعول کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَقُولٌ (Maqool, originally مَقْوُولٌ)",
        "ur": "مَقُولٌ (اصل میں مَقْوُولٌ)"
      },
      {
        "en": "قَائِلٌ",
        "ur": "قَائِلٌ"
      },
      {
        "en": "مَقْوُولٌ",
        "ur": "مَقْوُولٌ"
      },
      {
        "en": "مُقَالٌ",
        "ur": "مُقَالٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Ism al-Maf'ool of the Ajwaf Ya'i verb 'بَاعَ' (to sell)?",
    "ur": "فعلِ اجوف یائی 'بَاعَ' سے اسمِ مفعول کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَبِيعٌ (Mabee', originally مَبْيُوعٌ)",
        "ur": "مَبِيعٌ (اصل میں مَبْيُوعٌ)"
      },
      {
        "en": "بَائِعٌ",
        "ur": "بَائِعٌ"
      },
      {
        "en": "مَبُوعٌ",
        "ur": "مَبُوعٌ"
      },
      {
        "en": "مُبَاعٌ",
        "ur": "مُبَاعٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the indefinite Marfoo' form of Ism al-Fa'il for the Naqis verb 'دَعَا' (to call)?",
    "ur": "فعلِ ناقص 'دَعَا' سے نکرہ حالتِ رفع میں اسمِ فاعل کیا ہوگا؟",
    "options": [
      {
        "en": "دَاعٍ (Dā'in, with omitted Yā')",
        "ur": "دَاعٍ (حذف شدہ یاء کے ساتھ)"
      },
      {
        "en": "الدَّاعِي",
        "ur": "الدَّاعِي"
      },
      {
        "en": "مَدْعُوٌّ",
        "ur": "مَدْعُوٌّ"
      },
      {
        "en": "دَاعِيٌ",
        "ur": "دَاعِيٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Main Content",
    "en": "What is the Ism al-Maf'ool of the Naqis Wawi verb 'دَعَا'?",
    "ur": "فعلِ ناقص واوی 'دَعَا' سے اسمِ مفعول کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَدْعُوٌّ (Mad'uww)",
        "ur": "مَدْعُوٌّ"
      },
      {
        "en": "دَاعٍ",
        "ur": "دَاعٍ"
      },
      {
        "en": "مَدْعِيٌّ",
        "ur": "مَدْعِيٌّ"
      },
      {
        "en": "مُدَّعَى",
        "ur": "مُدَّعَى"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In Exercise 1, what are the Ism Fa'il and Ism Maf'ool of 'كَتَبَ'?",
    "ur": "تمرين 1 کے مطابق 'كَتَبَ' سے اسمِ فاعل اور اسمِ مفعول کی درست شکلیں کیا ہیں؟",
    "options": [
      {
        "en": "كَاتِبٌ / مَكْتُوبٌ",
        "ur": "كَاتِبٌ / مَكْتُوبٌ"
      },
      {
        "en": "مُكْتِبٌ / مَكْتَبٌ",
        "ur": "مُكْتِبٌ / مَكْتَبٌ"
      },
      {
        "en": "كُتَّابٌ / كِتَابَةٌ",
        "ur": "كُتَّابٌ / كِتَابَةٌ"
      },
      {
        "en": "مَكْتُوبٌ / كَاتِبٌ",
        "ur": "مَكْتُوبٌ / كَاتِبٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "What are the Ism Fa'il and Ism Maf'ool of the verb 'فَتَحَ' (to open)?",
    "ur": "فعل 'فَتَحَ' سے اسمِ فاعل اور اسمِ مفعول کیا بنتے ہیں؟",
    "options": [
      {
        "en": "فَاتِحٌ / مَفْتُوحٌ",
        "ur": "فَاتِحٌ / مَفْتُوحٌ"
      },
      {
        "en": "مُفْتِحٌ / مَفْتَحٌ",
        "ur": "مُفْتِحٌ / مَفْتَحٌ"
      },
      {
        "en": "فَتَّاحٌ / إِفْتَاحٌ",
        "ur": "فَتَّاحٌ / إِفْتَاحٌ"
      },
      {
        "en": "مَفْتُوحٌ / فَتِيحٌ",
        "ur": "مَفْتُوحٌ / فَتِيحٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 1",
    "en": "In the sentence 'وَجَدْنَاهُ مَكْتُوباً', how is 'مَكْتُوباً' morphologically categorized?",
    "ur": "جملے 'وَجَدْنَاهُ مَكْتُوباً' میں لفظ 'مَكْتُوباً' کا صرفی تعارف کیا ہے؟",
    "options": [
      {
        "en": "Ism Maf'ool from Form I verb 'كَتَبَ'",
        "ur": "فعلِ ثلاثی مجرد 'كَتَبَ' سے اسمِ مفعول"
      },
      {
        "en": "Ism Fa'il from Form I verb",
        "ur": "اسمِ فاعل"
      },
      {
        "en": "Masdar Mutlaq",
        "ur": "مصدر مطلق"
      },
      {
        "en": "Ism Zarf",
        "ur": "اسم ظرف"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "In Exercise 2, what are the Ism Fa'il and Ism Maf'ool of the doubled verb 'عَدَّ' (to count)?",
    "ur": "تمرين 2 کے مطابق فعلِ مضاعف 'عَدَّ' سے اسمِ فاعل اور اسمِ مفعول کیا ہیں؟",
    "options": [
      {
        "en": "عَادٌّ / مَعْدُودٌ",
        "ur": "عَادٌّ / مَعْدُودٌ"
      },
      {
        "en": "عَادِرٌ / مَعْدُودٌ",
        "ur": "عَادِرٌ / مَعْدُودٌ"
      },
      {
        "en": "مَعْدُودٌ / عَادٌّ",
        "ur": "مَعْدُودٌ / عَادٌّ"
      },
      {
        "en": "مُعِدٌّ / مُعَدٌّ",
        "ur": "مُعِدٌّ / مُعَدٌّ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 2",
    "en": "What are the Ism Fa'il and Ism Maf'ool of the verb 'حَجَّ' (to perform Hajj)?",
    "ur": "فعل 'حَجَّ' (حج کرنا) سے اسمِ فاعل اور اسمِ مفعول کی درست شکلیں کیا ہیں؟",
    "options": [
      {
        "en": "حَاجٌّ / مَحْجُوجٌ",
        "ur": "حَاجٌّ / مَحْجُوجٌ"
      },
      {
        "en": "حَاجِجٌ / مَحُوجٌ",
        "ur": "حَاجِجٌ / مَحُوجٌ"
      },
      {
        "en": "مَحْجُوجٌ / حَاجٌّ",
        "ur": "مَحْجُوجٌ / حَاجٌّ"
      },
      {
        "en": "مُحَجِّجٌ / حَجَّاجٌ",
        "ur": "مُحَجِّجٌ / حَجَّاجٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Ism Fa'il of the Mahmooz al-Ayn verb 'سَأَلَ' (to ask) in Exercise 3?",
    "ur": "تمرين 3 کے مطابق مہموز العین فعل 'سَأَلَ' سے اسمِ فاعل کیا ہوگا؟",
    "options": [
      {
        "en": "سَائِلٌ (Sā'il)",
        "ur": "سَائِلٌ"
      },
      {
        "en": "مَسْئُولٌ",
        "ur": "مَسْئُولٌ"
      },
      {
        "en": "سَأَّالٌ",
        "ur": "سَأَّالٌ"
      },
      {
        "en": "أَسْأَلُ",
        "ur": "أَسْأَلُ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Ism Maf'ool of the Mahmooz al-Lam verb 'قَرَأَ' (to read)?",
    "ur": "مہموز اللام فعل 'قَرَأَ' سے اسمِ مفعول کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَقْرُوءٌ (Maqroo')",
        "ur": "مَقْرُوءٌ"
      },
      {
        "en": "قَارِئٌ",
        "ur": "قَارِئٌ"
      },
      {
        "en": "قِرَاءَةٌ",
        "ur": "قِرَاءَةٌ"
      },
      {
        "en": "مُقْرِئٌ",
        "ur": "مُقْرِئٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 3",
    "en": "What is the Ism Maf'ool of the verb 'أَخَذَ' (to take)?",
    "ur": "فعل 'أَخَذَ' سے اسمِ مفعول کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَأْخُوذٌ (Ma'khoodh)",
        "ur": "مَأْخُوذٌ"
      },
      {
        "en": "آخِذٌ",
        "ur": "آخِذٌ"
      },
      {
        "en": "مُتَّخَذٌ",
        "ur": "مُتَّخَذٌ"
      },
      {
        "en": "إِخْذٌ",
        "ur": "إِخْذٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the Ism Fa'il of the Mithal Wawi verb 'وَزَنَ' (to weigh)?",
    "ur": "تمرين 4 کے مطابق مثالِ واوی فعل 'وَزَنَ' سے اسمِ فاعل کیا ہوگا؟",
    "options": [
      {
        "en": "وَازِنٌ (Wāzin)",
        "ur": "وَازِنٌ"
      },
      {
        "en": "مَوْزُونٌ",
        "ur": "مَوْزُونٌ"
      },
      {
        "en": "مُوزِنٌ",
        "ur": "مُوزِنٌ"
      },
      {
        "en": "زَانٍ",
        "ur": "زَانٍ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 4",
    "en": "What is the Ism Maf'ool of the Mithal Wawi verb 'وَزَنَ'?",
    "ur": "مثالِ واوی فعل 'وَزَنَ' سے اسمِ مفعول کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَوْزُونٌ (Mawzoon)",
        "ur": "مَوْزُونٌ"
      },
      {
        "en": "وَازِنٌ",
        "ur": "وَازِنٌ"
      },
      {
        "en": "مِيزَانٌ",
        "ur": "مِيزَانٌ"
      },
      {
        "en": "مُوزَنٌ",
        "ur": "مُوزَنٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "In Exercise 5, what is the Ism Fa'il of the Ajwaf verb 'بَاعَ' (to sell)?",
    "ur": "تمرين 5 کے مطابق فعلِ اجوف 'بَاعَ' (بیچنا) سے اسمِ فاعل کیا ہے؟",
    "options": [
      {
        "en": "بَائِعٌ (Bā'i')",
        "ur": "بَائِعٌ"
      },
      {
        "en": "مَبِيعٌ",
        "ur": "مَبِيعٌ"
      },
      {
        "en": "بَايِعٌ",
        "ur": "بَايِعٌ"
      },
      {
        "en": "بَيَّاعٌ",
        "ur": "بَيَّاعٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "What is the Ism Maf'ool of the Ajwaf Wawi verb 'زَارَ' (to visit)?",
    "ur": "فعلِ اجوف واوی 'زَارَ' (زیارت کرنا) سے اسمِ مفعول کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَزُورٌ (Mazoor)",
        "ur": "مَزُورٌ"
      },
      {
        "en": "زَائِرٌ",
        "ur": "زَائِرٌ"
      },
      {
        "en": "مَزْوُورٌ",
        "ur": "مَزْوُورٌ"
      },
      {
        "en": "مُزَارٌ",
        "ur": "مُزَارٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 5",
    "en": "What is the Ism Maf'ool of the Ajwaf Wawi verb 'صَانَ' (to preserve)?",
    "ur": "فعلِ اجوف واوی 'صَانَ' (حفاظت کرنا) سے اسمِ مفعول کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَصُونٌ (Masoon)",
        "ur": "مَصُونٌ"
      },
      {
        "en": "صَائِنٌ",
        "ur": "صَائِنٌ"
      },
      {
        "en": "مَصْوُونٌ",
        "ur": "مَصْوُونٌ"
      },
      {
        "en": "صِيَانَةٌ",
        "ur": "صِيَانَةٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "What is the definite (with Al) Ism Fa'il of the Naqis verb 'هَدَى' (to guide)?",
    "ur": "تمرين 6 کے مطابق فعلِ ناقص 'هَدَى' سے معرف باللام اسمِ فاعل کیا ہوگا؟",
    "options": [
      {
        "en": "الهَادِي (Al-Hādī)",
        "ur": "الهَادِي"
      },
      {
        "en": "هَادٍ",
        "ur": "هَادٍ"
      },
      {
        "en": "مَهْدِيٌّ",
        "ur": "مَهْدِيٌّ"
      },
      {
        "en": "الهَادَى",
        "ur": "الهَادَى"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "What is the Ism Maf'ool of the Naqis Ya'i verb 'هَدَى' (to guide)?",
    "ur": "فعلِ ناقص یائی 'هَدَى' سے اسمِ مفعول کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَهْدِيٌّ (Mahdiyy)",
        "ur": "مَهْدِيٌّ"
      },
      {
        "en": "هَادٍ",
        "ur": "هَادٍ"
      },
      {
        "en": "مَهْدُوٌّ",
        "ur": "مَهْدُوٌّ"
      },
      {
        "en": "مُهْدَى",
        "ur": "مُهْدَى"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 6",
    "en": "What is the Ism Maf'ool of the Naqis Ya'i verb 'بَنَى' (to build)?",
    "ur": "فعلِ ناقص یائی 'بَنَى' (بنانا) سے اسمِ مفعول کیا بنتا ہے؟",
    "options": [
      {
        "en": "مَبْنِيٌّ (Mabniyy)",
        "ur": "مَبْنِيٌّ"
      },
      {
        "en": "بَانٍ",
        "ur": "بَانٍ"
      },
      {
        "en": "مَبْنُوٌّ",
        "ur": "مَبْنُوٌّ"
      },
      {
        "en": "بِنَاءٌ",
        "ur": "بِنَاءٌ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 7",
    "en": "In the Quranic verse 'مَا هَذَا بَشَراً', how does 'مَا الحجازية' operate grammatically?",
    "ur": "قرآنی آیہ 'مَا هَذَا بَشَراً' میں 'ما الحجازية' کا عمل کیا ہے؟",
    "options": [
      {
        "en": "It operates like 'لَيْسَ', raising its subject and making its predicate Mansoob",
        "ur": "یہ 'لَيْسَ' کی طرح عمل کر کے خبر کو منصوب بناتی ہے"
      },
      {
        "en": "It makes its predicate Majroor with Kasra",
        "ur": "یہ خبر کو مجرور بناتی ہے"
      },
      {
        "en": "It has no grammatical operation (إلغاء العمل)",
        "ur": "اس کا کوئی اعرابی عمل نہیں ہوتا"
      },
      {
        "en": "It renders the whole sentence Mabni on Sukoon",
        "ur": "یہ پورے جملے کو مبنی بناتی ہے"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 7",
    "en": "When extra 'بـ' is attached to the Khabar of 'مَا الحجازية' (e.g., 'مَا هَذَا بِبَشَرٍ'), what is its grammatical position?",
    "ur": "'ما الحجازية' کی خبر پر جب زائدہ 'بـ' آ جائے (مثلاً 'مَا هَذَا بِبَشَرٍ') تو اس کا اعرابی منصب کیا ہوتا ہے؟",
    "options": [
      {
        "en": "Majroor in appearance (لفظاً) and Mansoob in position (محلاً) as Khabar of Ma",
        "ur": "لفظاً مجرور اور ما کی خبر ہونے کی بنا پر محلاً منصوب"
      },
      {
        "en": "Only Majroor both in form and position",
        "ur": "لفظاً اور محلاً صرف مجرور"
      },
      {
        "en": "Fa'il Marfoo'",
        "ur": "فاعل مرفوع"
      },
      {
        "en": "Mubtada' Marfoo'",
        "ur": "مبتدأ مرفوع"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 8",
    "en": "In the Quranic verse 'وَالسَّارِقُ وَالسَّارِقَةُ فَاقْطَعُوا أَيْدِيَهُمَا', what derivative form is 'السَّارِقُ'?",
    "ur": "آیت مبارکہ 'وَالسَّارِقُ وَالسَّارِقَةُ' میں لفظ 'السَّارِقُ' کون سا مشتق اسم ہے؟",
    "options": [
      {
        "en": "Ism al-Fa'il (اسم الفاعل) from 'سَرَقَ'",
        "ur": "فعل 'سَرَقَ' سے اسمِ فاعل"
      },
      {
        "en": "Ism al-Maf'ool (اسم المفعول)",
        "ur": "اسمِ مفعول"
      },
      {
        "en": "Sifah Mushabbahah",
        "ur": "صفتِ مشبہ"
      },
      {
        "en": "Ism al-Aala",
        "ur": "اسمِ آلہ"
      }
    ],
    "correct": 0
  },
  {
    "part": "Exercise 8",
    "en": "In the sentence 'القَفْلُ مَكْسُورٌ', what derivative form is 'مَكْسُورٌ'?",
    "ur": "جملے 'القَفْلُ مَكْسُورٌ' (قفل ٹوٹا ہوا ہے) میں 'مَكْسُورٌ' کون سا مشتق اسم ہے؟",
    "options": [
      {
        "en": "Ism al-Maf'ool (اسم المفعول) from 'كَسَرَ'",
        "ur": "فعل 'كَسَرَ' سے اسمِ مفعول"
      },
      {
        "en": "Ism al-Fa'il",
        "ur": "اسمِ فاعل"
      },
      {
        "en": "Masdar",
        "ur": "مصدر"
      },
      {
        "en": "Ism al-Makan",
        "ur": "اسمِ مکان"
      }
    ],
    "correct": 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 4 Quiz ---');

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

    // 4. Find or Create Lecture 04 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 4 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 04 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 04', 4)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 04: ID ${lectureId}`);
    }

    // 5. CAREFUL DELETION: Find existing Book 3 Lesson 4 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 4))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 4.`);
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

    // 6. Create the quiz for Book 3 Lesson 4
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 04 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 4 with ${questionsData.length} questions and Part designations!`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

run();
