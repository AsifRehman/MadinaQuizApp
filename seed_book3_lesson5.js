import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL || process.env.DATABASE_URL);

export const questionsData = [
  // ==========================================
  // MAIN CONTENT (الدرس الخامس: صوغ اسم الفاعل والمفعول من غير الثلاثي والمبني للمجهول)
  // ==========================================
  {
    part: "Main Content",
    en: "How are Ism al-Fa'il and Ism al-Maf'ool formed from derived verbs (غير الثلاثي / المزيد فيه)?",
    ur: "فعل ثلاثی مزید فیہ (غیر ثلاثی) سے اسمِ فاعل اور اسمِ مفعول کیسے بنائے جاتے ہیں؟",
    options: [
      { en: "Replace present prefix with Damma-bearing Meem (مُـ); Kasra before last letter for Fa'il, Fatha for Maf'ool", ur: "علامتِ مضارع کو میم مضموم (مُـ) سے بدل کر؛ اسمِ فاعل کے لیے ماقبل آخر کسرہ اور اسمِ مفعول کے لیے فتحہ دیا جاتا ہے" },
      { en: "Add Alif after the first letter for both forms", ur: "پہلے حرف کے بعد الف کا اضافہ کر کے" },
      { en: "Place the verb on the weight of Fa'il and Maf'ool directly", ur: "فعل کو براہِ راست فاعل اور مفعول کے وزن پر لا کر" },
      { en: "Add Tanween Kasr on the last letter only", ur: "آخری حرف پر صرف تنوینِ کسرہ لگا کر" }
    ],
    correct: 0
  },
  {
    part: "Main Content",
    en: "What is the standard pattern (وزن) of Ism al-Fa'il for Form II verbs (فَعَّلَ / يُفَعِّلُ)?",
    ur: "فارم II کے افعال (فَعَّلَ / يُفَعِّلُ) سے اسمِ فاعل کا معیاری وزن کیا ہوتا ہے؟",
    options: [
      { en: "مُفَعِّلٌ (Mufa''il)", ur: "مُفَعِّلٌ" },
      { en: "مُفَعَّلٌ (Mufa''al)", ur: "مُفَعَّلٌ" },
      { en: "فَاعِلٌ (Fā'il)", ur: "فَاعِلٌ" },
      { en: "تَفْعِيلٌ (Taf'eel)", ur: "تَفْعِيلٌ" }
    ],
    correct: 0
  },
  {
    part: "Main Content",
    en: "What is the standard pattern (وزن) of Ism al-Maf'ool for Form IV verbs (أَفْعَلَ / يُفْعِلُ)?",
    ur: "فارم IV کے افعال (أَفْعَلَ / يُفْعِلُ) سے اسمِ مفعول کا معیاری وزن کیا ہوتا ہے؟",
    options: [
      { en: "مُفْعَلٌ (Muf'al)", ur: "مُفْعَلٌ" },
      { en: "مُفْعِلٌ (Muf'il)", ur: "مُفْعِلٌ" },
      { en: "مَفْعُولٌ (Maf'ool)", ur: "مَفْعُولٌ" },
      { en: "إِفْعَالٌ (If'āl)", ur: "إِفْعَالٌ" }
    ],
    correct: 0
  },
  {
    part: "Main Content",
    en: "How is the past tense of a derived verb (المزيد فيه) converted to passive voice (المبني للمجهول)?",
    ur: "فعل ثلاثی مزید فیہ کے ماضی کو غیر فاعلی (مجہول) میں کیسے تبدیل کیا جاتا ہے؟",
    options: [
      { en: "Damma on first vowelled letter and Kasra on second-to-last letter (e.g., أُكْرِمَ)", ur: "پہلے متحرک حرف پر ضمہ اور آخری سے پہلے حرف پر کسرہ (جیسے أُكْرِمَ)" },
      { en: "Fatha on all letters and Sukoon on the end", ur: "تمام حروف پر فتحہ اور آخر میں سکون" },
      { en: "Kasra on the first letter and Damma on the end", ur: "پہلے حرف پر کسرہ اور آخر میں ضمہ" },
      { en: "It cannot be made passive", ur: "اس کا مجہول نہیں بن سکتا" }
    ],
    correct: 0
  },
  {
    part: "Main Content",
    en: "How is the present tense of a derived verb converted to passive voice?",
    ur: "فعل ثلاثی مزید فیہ کے مضارع کو غیر فاعلی (مجہول) میں کیسے تبدیل کیا جاتا ہے؟",
    options: [
      { en: "Damma on present prefix and Fatha on second-to-last letter (e.g., يُكْرَمُ)", ur: "علامتِ مضارع پر ضمہ اور آخری سے پہلے حرف پر فتحہ (جیسے يُكْرَمُ)" },
      { en: "Kasra on present prefix and Damma before last", ur: "علامتِ مضارع پر کسرہ اور ماقبل آخر پر ضمہ" },
      { en: "Fatha on present prefix and Kasra before last", ur: "علامتِ مضارع پر فتحہ اور ماقبل آخر پر کسرہ" },
      { en: "Sukoon on prefix and Fatha on end", ur: "علامتِ مضارع پر سکون اور آخر میں فتحہ" }
    ],
    correct: 0
  },
  {
    part: "Main Content",
    en: "What is the passive past form (الماضي المبني للمجهول) of the Ajwaf verb 'قَالَ' (to say)?",
    ur: "فعلِ اجوف 'قَالَ' (کہنا) کی ماضی مجہول کی شکل کیا ہوتی ہے؟",
    options: [
      { en: "قِيلَ (Qeela)", ur: "قِيلَ" },
      { en: "قُولَ (Qoola)", ur: "قُولَ" },
      { en: "قَالُوا (Qāloo)", ur: "قَالُوا" },
      { en: "يُقَالُ (Yuqālu)", ur: "يُقَالُ" }
    ],
    correct: 0
  },
  {
    part: "Main Content",
    en: "What is the passive present form (المضارع المبني للمجهول) of the Ajwaf verb 'بَاعَ' (to sell)?",
    ur: "فعلِ اجوف 'بَاعَ' (بیچنا) کی مضارع مجہول کی شکل کیا ہوتی ہے؟",
    options: [
      { en: "يُبَاعُ (Yubā'u)", ur: "يُبَاعُ" },
      { en: "بِيعَ (Bee'a)", ur: "بِيعَ" },
      { en: "يَبِيعُ (Yabee'u)", ur: "يَبِيعُ" },
      { en: "مَبِيعٌ (Mabee')", ur: "مَبِيعٌ" }
    ],
    correct: 0
  },
  {
    part: "Main Content",
    en: "What is the Ism al-Fa'il of the Form IV verb 'أَسْلَمَ' (to submit/embrace Islam)?",
    ur: "فارم IV کے فعل 'أَسْلَمَ' (اسلام لانا) سے اسمِ فاعل کیا بنتا ہے؟",
    options: [
      { en: "مُسْلِمٌ (Muslim)", ur: "مُسْلِمٌ" },
      { en: "مُسْلَمٌ (Muslam)", ur: "مُسْلَمٌ" },
      { en: "إِسْلاَمٌ (Islām)", ur: "إِسْلاَمٌ" },
      { en: "سَالِمٌ (Sālim)", ur: "سَالِمٌ" }
    ],
    correct: 0
  },
  {
    part: "Main Content",
    en: "What is the Ism al-Maf'ool of the Form IV verb 'أَرْسَلَ' (to send)?",
    ur: "فارم IV کے فعل 'أَرْسَلَ' (بھیجنا) سے اسمِ مفعول کیا بنتا ہے؟",
    options: [
      { en: "مُرْسَلٌ (Mursal)", ur: "مُرْسَلٌ" },
      { en: "مُرْسِلٌ (Mursil)", ur: "مُرْسِلٌ" },
      { en: "إِرْسَالٌ (Irsāl)", ur: "إِرْسَالٌ" },
      { en: "رَسُولٌ (Rasool)", ur: "رَسُولٌ" }
    ],
    correct: 0
  },
  {
    part: "Main Content",
    en: "What is the Ism al-Fa'il of the Form X verb 'اسْتَغْفَرَ' (to seek forgiveness)?",
    ur: "فارم X کے فعل 'اسْتَغْفَرَ' (استغفار کرنا) سے اسمِ فاعل کیا بنتا ہے؟",
    options: [
      { en: "مُسْتَغْفِرٌ (Mustaghfir)", ur: "مُسْتَغْفِرٌ" },
      { en: "مُسْتَغْفَرٌ (Mustaghfar)", ur: "مُسْتَغْفَرٌ" },
      { en: "اسْتِغْفَارٌ (Istighfār)", ur: "اسْتِغْفَارٌ" },
      { en: "غَفَّارٌ (Ghaffār)", ur: "غَفَّارٌ" }
    ],
    correct: 0
  },

  // ==========================================
  // EXERCISE 1 (تمرين ١: صوغ اسم الفاعل واسم المفعول من المزيد فيه)
  // ==========================================
  {
    part: "Exercise 1",
    en: "In Exercise 1, what are the Ism Fa'il and Ism Maf'ool of Form II verb 'عَلَّمَ' (to teach)?",
    ur: "تمرين 1 کے مطابق فارم II کے فعل 'عَلَّمَ' (سکھانا) سے اسمِ فاعل اور اسمِ مفعول کیا ہیں؟",
    options: [
      { en: "مُعَلِّمٌ / مُعَلَّمٌ (Mu'allim / Mu'allam)", ur: "مُعَلِّمٌ / مُعَلَّمٌ" },
      { en: "عَالِمٌ / مَعْلُومٌ", ur: "عَالِمٌ / مَعْلُومٌ" },
      { en: "تَعْلِيمٌ / تَعَلُّمٌ", ur: "تَعْلِيمٌ / تَعَلُّمٌ" },
      { en: "مُتَعَلِّمٌ / مُتَعَلَّمٌ", ur: "مُتَعَلِّمٌ / مُتَعَلَّمٌ" }
    ],
    correct: 0
  },
  {
    part: "Exercise 1",
    en: "What are the Ism Fa'il and Ism Maf'ool of Form III verb 'شَاهَدَ' (to observe/watch)?",
    ur: "فارم III کے فعل 'شَاهَدَ' (مشاہدہ کرنا) سے اسمِ فاعل اور اسمِ مفعول کی درست شکلیں کیا ہیں؟",
    options: [
      { en: "مُشَاهِدٌ / مُشَاهَدٌ (Mushāhid / Mushāhad)", ur: "مُشَاهِدٌ / مُشَاهَدٌ" },
      { en: "شَاهِدٌ / مَشْهُودٌ", ur: "شَاهِدٌ / مَشْهُودٌ" },
      { en: "مُشَاهَدَةٌ / شَهَادَةٌ", ur: "مُشَاهَدَةٌ / شَهَادَةٌ" },
      { en: "أَشْهَدُ / يُشْهِدُ", ur: "أَشْهَدُ / يُشْهِدُ" }
    ],
    correct: 0
  },
  {
    part: "Exercise 1",
    en: "What are the Ism Fa'il and Ism Maf'ool of Form V verb 'تَكَلَّمَ' (to speak)?",
    ur: "فارم V کے فعل 'تَكَلَّمَ' (گفتگو کرنا) سے اسمِ فاعل اور اسمِ مفعول کیا بنتے ہیں؟",
    options: [
      { en: "مُتَكَلِّمٌ / مُتَكَلَّمٌ (Mutakallim / Mutakallam)", ur: "مُتَكَلِّمٌ / مُتَكَلَّمٌ" },
      { en: "كَلِيمٌ / مَكْلُومٌ", ur: "كَلِيمٌ / مَكْلُومٌ" },
      { en: "تَكَلُّمٌ / كَلاَمٌ", ur: "تَكَلُّمٌ / كَلاَمٌ" },
      { en: "مُكَلِّمٌ / مُكَلَّمٌ", ur: "مُكَلِّمٌ / مُكَلَّمٌ" }
    ],
    correct: 0
  },
  {
    part: "Exercise 1",
    en: "What is the Ism al-Fa'il of the Form VIII verb 'اجْتَهَدَ' (to strive)?",
    ur: "فارم VIII کے فعل 'اجْتَهَدَ' (محنت کرنا) سے اسمِ فاعل کیا ہے؟",
    options: [
      { en: "مُجْتَهِدٌ (Mujtahid)", ur: "مُجْتَهِدٌ" },
      { en: "مُجْتَهَدٌ (Mujtahad)", ur: "مُجْتَهَدٌ" },
      { en: "اجْتِهَادٌ (Ijtihād)", ur: "اجْتِهَادٌ" },
      { en: "جَاهِدٌ (Jāhid)", ur: "جَاهِدٌ" }
    ],
    correct: 0
  },
  {
    part: "Exercise 1",
    en: "What is the Ism al-Maf'ool of the Form IV verb 'أَغْلَقَ' (to close)?",
    ur: "فارم IV کے فعل 'أَغْلَقَ' (بند کرنا) سے اسمِ مفعول کیا ہے؟",
    options: [
      { en: "مُغْلَقٌ (Mughlaq)", ur: "مُغْلَقٌ" },
      { en: "مُغْلِقٌ (Mughliq)", ur: "مُغْلِقٌ" },
      { en: "إِغْلاَقٌ (Ighlāq)", ur: "إِغْلاَقٌ" },
      { en: "مَغْلُوقٌ (Maghlooq)", ur: "مَغْلُوقٌ" }
    ],
    correct: 0
  },

  // ==========================================
  // EXERCISE 2 (تمرين ٢: المبني للمجهول من المزيد فيه)
  // ==========================================
  {
    part: "Exercise 2",
    en: "In Exercise 2, what is the passive past form (الماضي المجهول) of 'أَكْرَمَ' (to honor)?",
    ur: "تمرين 2 کے مطابق 'أَكْرَمَ' (عزت دینا) کی ماضی مجہول شکل کیا ہوگی؟",
    options: [
      { en: "أُكْرِمَ (Ukrima)", ur: "أُكْرِمَ" },
      { en: "يُكْرَمُ (Yukramu)", ur: "يُكْرَمُ" },
      { en: "أَكْرَمَ (Akrama)", ur: "أَكْرَمَ" },
      { en: "مُكْرَمٌ (Mukram)", ur: "مُكْرَمٌ" }
    ],
    correct: 0
  },
  {
    part: "Exercise 2",
    en: "What is the passive present form (المضارع المجهول) of 'يُحْسِنُ' (to do good)?",
    ur: "فعل 'يُحْسِنُ' کی مضارع مجہول شکل کیا ہوگی؟",
    options: [
      { en: "يُحْسَنُ (Yuhsanu)", ur: "يُحْسَنُ" },
      { en: "أُحْسِنَ (Uhsina)", ur: "أُحْسِنَ" },
      { en: "يَحْسُنُ (Yahsunu)", ur: "يَحْسُنُ" },
      { en: "مُحْسَنٌ (Muhsan)", ur: "مُحْسَنٌ" }
    ],
    correct: 0
  },
  {
    part: "Exercise 2",
    en: "Convert the sentence 'أَغْلَقَ الحَارِسُ البَابَ' (The guard closed the door) into passive voice.",
    ur: "جملے 'أَغْلَقَ الحَارِسُ البَابَ' کو مجہول میں درست طریقے سے تبدیل کریں:",
    options: [
      { en: "أُغْلِقَ البَابُ (Ughiqa al-bābu)", ur: "أُغْلِقَ البَابُ" },
      { en: "أَغْلَقَ البَابُ", ur: "أَغْلَقَ البَابُ" },
      { en: "يُغْلَقُ البَابَ", ur: "يُغْلَقُ البَابَ" },
      { en: "أُغْلِقَتِ البَابُ", ur: "أُغْلِقَتِ البَابُ" }
    ],
    correct: 0
  },
  {
    part: "Exercise 2",
    en: "What is the passive past form of Form II verb 'عَلَّمَ' (to teach)?",
    ur: "فارم II کے فعل 'عَلَّمَ' کی ماضی مجہول شکل کیا ہے؟",
    options: [
      { en: "عُلِّمَ ('Ullima)", ur: "عُلِّمَ" },
      { en: "يُعَلَّمُ (Yu'allamu)", ur: "يُعَلَّمُ" },
      { en: "تُعُلِّمَ (Tu'ullima)", ur: "تُعُلِّمَ" },
      { en: "مُعَلَّمٌ (Mu'allam)", ur: "مُعَلَّمٌ" }
    ],
    correct: 0
  },
  {
    part: "Exercise 2",
    en: "What is the passive present form of Form X verb 'يَسْتَخْرِجُ' (to extract)?",
    ur: "فارم X کے فعل 'يَسْتَخْرِجُ' کی مضارع مجہول شکل کیا ہے؟",
    options: [
      { en: "يُسْتَخْرَجُ (Yustakhraju)", ur: "يُسْتَخْرَجُ" },
      { en: "اسْتُخْرِجَ (Ustukhrija)", ur: "اسْتُخْرِجَ" },
      { en: "يَسْتَخْرَجُ (Yastakhraju)", ur: "يَسْتَخْرَجُ" },
      { en: "مُسْتَخْرَجٌ (Mustakhraj)", ur: "مُسْتَخْرَجٌ" }
    ],
    correct: 0
  },

  // ==========================================
  // EXERCISE 3 (تمرين ٣: المبني للمجهول من الفعل الأجوف)
  // ==========================================
  {
    part: "Exercise 3",
    en: "In Exercise 3, what is the passive past form of the Ajwaf verb 'صَامَ' (to fast)?",
    ur: "تمرين 3 کے مطابق فعلِ اجوف 'صَامَ' (روزہ رکھنا) کی ماضی مجہول شکل کیا ہوگی؟",
    options: [
      { en: "صِيمَ (Seema)", ur: "صِيمَ" },
      { en: "صُومَ (Sooma)", ur: "صُومَ" },
      { en: "يُصَامُ (Yusāmu)", ur: "يُصَامُ" },
      { en: "صَائِمٌ (Sā'im)", ur: "صَائِمٌ" }
    ],
    correct: 0
  },
  {
    part: "Exercise 3",
    en: "What is the passive present form of the Ajwaf verb 'قَالَ' (to say)?",
    ur: "فعلِ اجوف 'قَالَ' کی مضارع مجہول شکل کیا ہوتی ہے؟",
    options: [
      { en: "يُقَالُ (Yuqālu)", ur: "يُقَالُ" },
      { en: "قِيلَ (Qeela)", ur: "قِيلَ" },
      { en: "يَقُولُ (Yaqoolu)", ur: "يَقُولُ" },
      { en: "مَقُولٌ (Maqool)", ur: "مَقُولٌ" }
    ],
    correct: 0
  },
  {
    part: "Exercise 3",
    en: "What is the passive past form of the Ajwaf verb 'بَاعَ' (to sell)?",
    ur: "فعلِ اجوف 'بَاعَ' کی ماضی مجہول شکل کیا ہوتی ہے؟",
    options: [
      { en: "بِيعَ (Bee'a)", ur: "بِيعَ" },
      { en: "بُوعَ (Boo'a)", ur: "بُوعَ" },
      { en: "يُبَاعُ (Yubā'u)", ur: "يُبَاعُ" },
      { en: "مَبِيعٌ (Mabee')", ur: "مَبِيعٌ" }
    ],
    correct: 0
  },
  {
    part: "Exercise 3",
    en: "Convert 'قَالَ العَالِمُ الحَقَّ' (The scholar spoke the truth) into passive voice.",
    ur: "جملے 'قَالَ العَالِمُ الحَقَّ' کو فعلِ مجہول کے ساتھ تبدیل کریں:",
    options: [
      { en: "قِيلَ الحَقُّ (Qeela al-haqqu)", ur: "قِيلَ الحَقُّ" },
      { en: "يُقَالُ الحَقَّ", ur: "يُقَالُ الحَقَّ" },
      { en: "قَالُوا الحَقُّ", ur: "قَالُوا الحَقُّ" },
      { en: "قِيلَ العَالِمُ", ur: "قِيلَ العَالِمُ" }
    ],
    correct: 0
  },

  // ==========================================
  // EXERCISE 4 (تمرين ٤: تحديد نائب الفاعل في الجمل)
  // ==========================================
  {
    part: "Exercise 4",
    en: "In Exercise 4, in the sentence 'يُكْرَمُ الضَّيْفُ فِي بَيْتِنَا', what is the Na'ib al-Fa'il?",
    ur: "تمرين 4 کے جملے 'يُكْرَمُ الضَّيْفُ فِي بَيْتِنَا' میں نائب الفاعل کیا ہے؟",
    options: [
      { en: "الضَّيْفُ (Ad-Dayfu, Marfoo' with Damma)", ur: "الضَّيْفُ (ضمہ کے ساتھ مرفوع)" },
      { en: "بَيْتِنَا (Baytinā)", ur: "بَيْتِنَا" },
      { en: "Hidden pronoun (ضمیر مستتر)", ur: "ضمیر مستتر" },
      { en: "فِي (Fee)", ur: "فِي" }
    ],
    correct: 0
  },
  {
    part: "Exercise 4",
    en: "In 'سُمِعَتِ الأَخْبَارُ الجَدِيدَةُ', why is the passive verb 'سُمِعَتْ' in feminine form?",
    ur: "جملے 'سُمِعَتِ الأَخْبَارُ الجَدِيدَةُ' میں فعلِ مجہول 'سُمِعَتْ' مؤنث کیوں آیا ہے؟",
    options: [
      { en: "Because 'الأَخْبَارُ' is a non-human plural (جمع غير عاقل) treated as feminine singular", ur: "کیونکہ 'الأَخْبَارُ' جمع غیر عاقل ہے اور واحد مؤنث کے حکم میں ہوتی ہے" },
      { en: "Because it is in the present tense", ur: "کیونکہ یہ فعلِ مضارع ہے" },
      { en: "Because 'الجَدِيدَةُ' is Masculine", ur: "کیونکہ 'الجديدة' مذکر ہے" },
      { en: "Because the speaker is female", ur: "کیونکہ متکلم مؤنث ہے" }
    ],
    correct: 0
  },
  {
    part: "Exercise 4",
    en: "In 'تُسْتَخْرَجُ المَعَادِنُ مِنَ الأَرْضِ', how is 'المَعَادِنُ' parsed syntactically?",
    ur: "جملے 'تُسْتَخْرَجُ المَعَادِنُ مِنَ الأَرْضِ' میں 'المَعَادِنُ' کا ترکیبی اعراب کیا ہے؟",
    options: [
      { en: "Na'ib al-Fa'il Marfoo' with Damma (نائب الفاعل مرفوع بالضمة)", ur: "نائب الفاعل مرفوع بالضمة" },
      { en: "Fa'il Marfoo' with Damma", ur: "فاعل مرفوع بالضمة" },
      { en: "Maf'ool Bihi Mansoob", ur: "مفعول بہ منصوب" },
      { en: "Mubtada' Marfoo'", ur: "مبتدأ مرفوع" }
    ],
    correct: 0
  },

  // ==========================================
  // EXERCISE 5 (تمرين ٥: مراجعة عامة وإعراب)
  // ==========================================
  {
    part: "Exercise 5",
    en: "In 'إِنَّ اللَّهَ مُحِبٌّ لِلْمُحْسِنِينَ', which derived words are Ism Fa'il?",
    ur: "جملے 'إِنَّ اللَّهَ مُحِبٌّ لِلْمُحْسِنِينَ' میں کون سے الفاظ فارم IV سے اسمِ فاعل ہیں؟",
    options: [
      { en: "Both 'مُحِبٌّ' and 'المُحْسِنِينَ' (from Form IV verbs)", ur: "دونوں الفاظ 'مُحِبٌّ' اور 'المُحْسِنِينَ' (فارم IV کے افعال سے)" },
      { en: "Only 'اللَّهَ'", ur: "صرف لفظِ جلالہ 'الله'" },
      { en: "Only 'إِنَّ'", ur: "صرف 'إنّ'" },
      { en: "None of the above", ur: "ان میں سے کوئی نہیں" }
    ],
    correct: 0
  },
  {
    part: "Exercise 5",
    en: "In 'جَاءَ مُدَرِّسٌ جَدِيدٌ', what is the morphological classification of 'مُدَرِّسٌ'?",
    ur: "جملے 'جَاءَ مُدَرِّسٌ جَدِيدٌ' میں لفظ 'مُدَرِّسٌ' صرفی لحاظ سے کیا ہے؟",
    options: [
      { en: "Ism al-Fa'il from Form II verb 'دَرَّسَ'", ur: "فارم II کے فعل 'دَرَّسَ' سے اسمِ فاعل" },
      { en: "Ism al-Maf'ool from Form I", ur: "اسمِ مفعول" },
      { en: "Masdar", ur: "مصدر" },
      { en: "Ism Zarf", ur: "اسمِ ظرف" }
    ],
    correct: 0
  },
  {
    part: "Exercise 5",
    en: "In 'يُحْتَرَمُ المُجْتَهِدُونَ', what is the sign of Raf' for Na'ib al-Fa'il 'المُجْتَهِدُونَ'?",
    ur: "جملے 'يُحْتَرَمُ المُجْتَهِدُونَ' میں نائب الفاعل 'المُجْتَهِدُونَ' کی اعرابی علامت کیا ہے؟",
    options: [
      { en: "Waw (واو) because it is Jama' Mudhakar Salim (جمع مذكر سالم)", ur: "جمع مذكر سالم ہونے کی بنا پر واؤ (واو)" },
      { en: "Damma on Noon", ur: "نون پر ضمہ" },
      { en: "Fatha on Yā'", ur: "یاء پر فتحہ" },
      { en: "Sukoon", ur: "سکون" }
    ],
    correct: 0
  }
];

async function run() {
  console.log('--- Seeding Book 3 Lesson 5 Quiz ---');

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

    // 4. Find or Create Lecture 05 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 5 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 05 exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 05', 5)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 05: ID ${lectureId}`);
    }

    // 5. CAREFUL DELETION: Find existing Book 3 Lesson 5 quizzes if any
    const existingQuizzes = await sql`
      SELECT q.id, q.title, q.lecture_id, l.title as lecture_title
      FROM quizzes q
      LEFT JOIN lectures l ON q.lecture_id = l.id
      WHERE (q.lecture_id = ${lectureId} OR (l.section_id = ${sectionId} AND l.order_index = 5))
    `;

    if (existingQuizzes.length > 0) {
      console.log(`Found ${existingQuizzes.length} existing quiz(zes) for Book 3 Lesson 5.`);
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

    // 6. Create the quiz for Book 3 Lesson 5
    const [newQuiz] = await sql`
      INSERT INTO quizzes (lecture_id, section_id, title, quiz_type, version)
      VALUES (${lectureId}, ${sectionId}, 'Book 3 - Lecture 05 Quiz', 'Daily', 1)
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

    console.log(`\n🎉 Successfully seeded Book 3 Lesson 5 with ${questionsData.length} questions and Part designations!`);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

run();
