import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

const questionsData = {
  11: [ // Lesson 11: المضارع + ضمائر أخرى، حرف الاستقبال، المصدر، أما، أخ لي
    {
      en: "In the phrase 'min akhin lee' (مِنْ أَخٍ لِي), why is 'akhin' Majrur?",
      ur: "'مِنْ أَخٍ لِي' میں 'أَخٍ' مجرور کیوں ہے؟",
      options: [
        { en: "Because it comes after the Harf Jarr 'min'", ur: "کیونکہ یہ حرفِ جر 'مِنْ' کے بعد آیا ہے" },
        { en: "Because it is the Fa'il of a verb", ur: "کیونکہ یہ فعل کا فاعل ہے" },
        { en: "Because it is Khabaru Inna", ur: "کیونکہ یہ خبرِ اِنَّ ہے" },
        { en: "Because it is a past tense verb", ur: "کیونکہ یہ فعلِ ماضی ہے" }
      ],
      correct: 0
    },
    {
      en: "What is the present tense prefix and suffix for 'Antum' (You all, masculine)?",
      ur: "'أَنْتُمْ' کے لیے مضارع کا سابقہ اور لاحقہ کیا ہے؟",
      options: [
        { en: "Ya- at the start, and -oona at the end (يـ ... ونَ)", ur: "يـ ... ونَ" },
        { en: "Ta- at the start, and -oona at the end (تـ ... ونَ)", ur: "تـ ... ونَ" },
        { en: "Ta- at the start, and -na at the end (تـ ... نَ)", ur: "تـ ... نَ" },
        { en: "A- at the start" }
      ],
      correct: 1
    },
    {
      en: "What is the present tense of 'Dhahaba' for 'Antum'?",
      ur: "'أَنْتُمْ' کے ساتھ 'ذَهَبَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Yadhaboona (يَذْهَبُونَ)", ur: "يَذْهَبُونَ" },
        { en: "Tadhaboona (تَذْهَبُونَ)", ur: "تَذْهَبُونَ" },
        { en: "Tadhabna (تَذْهَبْنَ)", ur: "تَذْهَبْنَ" },
        { en: "Tadhabani (تَذْهَبَانِ)" }
      ],
      correct: 1
    },
    {
      en: "What is the present tense verb 'Dhahaba' for 'Anti' (You, feminine singular)?",
      ur: "'أَنْتِ' کے ساتھ 'ذَهَبَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Tadhabeena (تَذْهَبِينَ)", ur: "تَذْهَبِينَ" },
        { en: "Tadhabna (تَذْهَبْنَ)", ur: "تَذْهَبْنَ" },
        { en: "Yadhabeena (يَذْهَبِينَ)", ur: "يَذْهَبِينَ" },
        { en: "Tadhabu (تَذْهَبُ)" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'Where are you (masculine plural) going?'",
      ur: "ترجمہ کریں: 'تم سب کہاں جا رہے ہو؟'",
      options: [
        { en: "Ayna tadhaboona?", ur: "أَيْنَ تَذْهَبُونَ؟" },
        { en: "Ayna tadhabna?", ur: "أَيْنَ تَذْهَبْنَ؟" },
        { en: "Ayna yadhaboona?", ur: "أَيْنَ يَذْهَبُونَ؟" },
        { en: "Ayna tadhabeena?" }
      ],
      correct: 0
    },
    {
      en: "What particle is added to present tense to specify the near future?",
      ur: "مضارع فعل کو قریب کے مستقبل کے لیے خاص کرنے کے لیے کون سا سابقہ لگایا جاتا ہے؟",
      options: [
        { en: "Sa- (سَـ)", ur: "سَـ" },
        { en: "Sawfa (سَوْفَ)", ur: "سَوْفَ" },
        { en: "Qad (قَدْ)", ur: "قَدْ" },
        { en: "Lan (لَنْ)" }
      ],
      correct: 0
    },
    {
      en: "What is the verbal noun (Masdar) of 'Dhahaba' (to go)?",
      ur: "'ذَهَبَ' (جانا) کا مصدر کیا ہے؟",
      options: [
        { en: "Zaahibun (ذَاهِبٌ)", ur: "ذَاهِبٌ" },
        { en: "Dhahaabun (ذَهَابٌ)", ur: "ذَهَابٌ" },
        { en: "Mazhabun (مَذْهَبٌ)", ur: "مَذْهَبٌ" },
        { en: "Zuhubun (ذُهُبٌ)" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 3, what is the Masdar of 'Khara-ja' (to exit)?",
      ur: "مشق 3 کے مطابق، 'خَرَجَ' (نکلنا) کا مصدر کیا ہے؟",
      options: [
        { en: "Khaarijun (خَارِجٌ)", ur: "خَارِجٌ" },
        { en: "Khuroojun (خُرُوجٌ)", ur: "خُرُوجٌ" },
        { en: "Makhrajun (مَخْرَجٌ)", ur: "مَخْرَجٌ" },
        { en: "Kharijatan (خَارِجَةً)" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 3, what is the Masdar of 'Dakhala' (to enter)?",
      ur: "مشق 3 کے مطابق، 'دَخَلَ' (داخل ہونا) کا مصدر کیا ہے؟",
      options: [
        { en: "Dakhilun (دَاخِلٌ)", ur: "دَاخِلٌ" },
        { en: "Dukhoolun (دُخُولٌ)", ur: "دُخُولٌ" },
        { en: "Mudkhalun (مُدْخَلٌ)", ur: "مُدْخَلٌ" },
        { en: "Dakhlaan (دَخْلَانُ)" }
      ],
      correct: 1
    },
    {
      en: "What does the particle 'Ammaa' (أَمَّا) mean and what must follow it?",
      ur: "حرفِ 'أَمَّا' کا کیا مطلب ہے اور اس کے جواب پر کیا آنا لازمی ہے؟",
      options: [
        { en: "It means 'Indeed' and must be followed by Inna", ur: "اس کا مطلب 'بے شک' ہے" },
        { en: "It means 'As for...' and its response must begin with 'Fa-' (فَـ)", ur: "اس کا مطلب 'بہرحال / جہاں تک...' ہے اور اس کے بعد 'فَـ' کا آنا ضروری ہے" },
        { en: "It means 'Or' and is followed by a verb", ur: "اس کا مطلب 'یا' ہے" },
        { en: "It means 'Because'" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'As for Bilal, he is a doctor'",
      ur: "ترجمہ کریں: 'رہی بات بلال کی تو وہ ڈاکٹر ہے'",
      options: [
        { en: "Amma Bilalun fahuwa tabibun", ur: "أَمَّا بِلَالٌ فَهُوَ طَبِيبٌ" },
        { en: "Amma Bilalun huwa tabibun", ur: "أَمَّا بِلَالٌ هُوَ طَبِيبٌ" },
        { en: "Amma Bilalan fahuwa tabibun", ur: "أَمَّا بِلَالًا فَهُوَ طَبِيبٌ" },
        { en: "Inna Bilalan tabibun" }
      ],
      correct: 0
    },
    {
      en: "How do you translate 'a book of mine' using the pattern in this lesson?",
      ur: "سبق میں موجود قاعدے کے مطابق 'میری ایک کتاب' کا ترجمہ کیا ہوگا؟",
      options: [
        { en: "Kitabi (كِتَابِي)", ur: "كِتَابِي" },
        { en: "Kitabun lee (كِتَابٌ لِي)", ur: "كِتَابٌ لِي" },
        { en: "Kitabun minni (كِتَابٌ مِنِّي)", ur: "كِتَابٌ مِنِّي" },
        { en: "Baitun laka" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I have a brother in Medina'",
      ur: "ترجمہ کریں: 'میرا ایک بھائی مدینہ میں ہے'",
      options: [
        { en: "Akhun lee fil madinati", ur: "أَخٌ لِي فِي الْمَدِينَةِ" },
        { en: "Akhi fil madinati", ur: "أَخِي فِي الْمَدِينَةِ" },
        { en: "Lii akhun fil madinati (لِي أَخٌ فِي الْمَدِينَةِ)", ur: "لِي أَخٌ فِي الْمَدِينَةِ" },
        { en: "Both 'Akhun lee...' and 'Lii akhun...' are grammatically valid depending on phrasing", ur: "دونوں جملے درست ہیں" }
      ],
      correct: 3
    },
    {
      en: "Translate: 'What are you (feminine singular) reading?'",
      ur: "ترجمہ کریں: 'تم (واحد مؤنث) کیا پڑھ رہی ہو؟'",
      options: [
        { en: "Maza taqra'oona?", ur: "مَاذَا تَقْرَأُونَ؟" },
        { en: "Maza taqra'eena?", ur: "مَاذَا تَقْرَأِينَ؟" },
        { en: "Maza yaqra'eena?", ur: "مَاذَا يَقْرَأِينَ؟" },
        { en: "Maza taqra'na?" }
      ],
      correct: 1
    },
    {
      en: "What is the verbal noun (Masdar) of 'Sajada' (to prostrate)?",
      ur: "'سَجَدَ' کا مصدر کیا ہے؟",
      options: [
        { en: "Sajidun (سَاجِدٌ)", ur: "سَاجِدٌ" },
        { en: "Sujoodun (سُجُودٌ)", ur: "سُجُودٌ" },
        { en: "Masjidun (مَسْجِدٌ)", ur: "مَسْجِدٌ" },
        { en: "Sajdatun (سَجْدَةٌ)" }
      ],
      correct: 1
    }
  ],
  12: [ // Lesson 12: المضارع + ضمائر أخرى، كسر همزة إن وفتحها، أيام الأسبوع
    {
      en: "In Arabic, how is 'Saturday' expressed as a day name?",
      ur: "عربی میں 'سنیچر/ہفتہ' کے دن کو کیسے کہا جاتا ہے؟",
      options: [
        { en: "Yawm al-Jumu'ah", ur: "يَوْمُ الْجُمُعَةِ" },
        { en: "Yawm al-Sabt", ur: "يَوْمُ السَّبْتِ" },
        { en: "Yawm al-Ahad", ur: "يَوْمُ الْأَحَدِ" },
        { en: "Monday (Yawm al-Ithnayn)" }
      ],
      correct: 1
    },
    {
      en: "What is the present tense verb 'Dhahaba' conjugated for 'Hunna' (They, feminine)?",
      ur: "'هُنَّ' کے لیے 'ذَهَبَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Yadhaboona (يَذْهَبُونَ)", ur: "يَذْهَبُونَ" },
        { en: "Yadhabna (يَذْهَبْنَ - They go)", ur: "يَذْهَبْنَ" },
        { en: "Tadhabna (تَذْهَبْنَ)", ur: "تَذْهَبْنَ" },
        { en: "Yadhabani (يَذْهَبَانِ)" }
      ],
      correct: 1
    },
    {
      en: "What is the present tense verb 'Dhahaba' for 'Antunna' (You all, feminine)?",
      ur: "'أَنْتُنَّ' کے لیے 'ذَهَبَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Yadhabna (يَذْهَبْنَ)", ur: "يَذْهَبْنَ" },
        { en: "Tadhabna (تَذْهَبْنَ - You all go)", ur: "تَذْهَبْنَ" },
        { en: "Tadhaboona (تَذْهَبُونَ)", ur: "تَذْهَبُونَ" },
        { en: "Tadhabeena (تَذْهَبِينَ)" }
      ],
      correct: 1
    },
    {
      en: "When is the Hamza of 'Inna' written/pronounced as a Kasra (إِنَّ)?",
      ur: "'إِنَّ' کا حمزہ کب زیر (كسرة) کے ساتھ پڑھا جاتا ہے؟",
      options: [
        { en: "At the beginning of a sentence", ur: "جملے کے بالکل شروع میں" },
        { en: "After the verb of saying (e.g. Qaala)", ur: "قول کے فعل کے بعد (جیسے قَالَ إِنَّ)" },
        { en: "Both are correct", ur: "دونوں صورتیں درست ہیں" },
        { en: "Only after prepositions" }
      ],
      correct: 2
    },
    {
      en: "When does 'Inna' change to 'Anna' (أَنَّ)?",
      ur: "'إِنَّ' کب 'أَنَّ' (زبر کے ساتھ) میں تبدیل ہو جاتا ہے؟",
      options: [
        { en: "At the start of a sentence", ur: "جملے کے شروع میں" },
        { en: "In the middle of a sentence, acting as a subordinator (e.g., after 'A-zannu')", ur: "جملے کے درمیان میں (جیسے أَظُنُّ أَنَّ)" },
        { en: "After the verb 'Qaala'", ur: "فعلِ قال کے بعد" },
        { en: "Never" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I think that the lesson is easy'",
      ur: "ترجمہ کریں: 'میرا خیال ہے کہ سبق آسان ہے'",
      options: [
        { en: "Azunnu inna al-darsa sahlun", ur: "أَظُنُّ إِنَّ الدَّرْسَ سَهْلٌ" },
        { en: "Azunnu anna al-darsa sahlun", ur: "أَظُنُّ أَنَّ الدَّرْسَ سَهْلٌ" },
        { en: "Azunnu anna al-darsu sahlun", ur: "أَظُنُّ أَنَّ الدَّرْسُ سَهْلٌ" },
        { en: "Qaala anna al-darsa sahlun" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'The teacher said that the lesson is easy'",
      ur: "ترجمہ کریں: 'استاد نے کہا کہ سبق آسان ہے'",
      options: [
        { en: "Qala al-mudarrisu anna al-darsa sahlun", ur: "قَالَ الْمُدَرِّسُ أَنَّ الدَّرْسَ سَهْلٌ" },
        { en: "Qala al-mudarrisu inna al-darsa sahlun", ur: "قَالَ الْمُدَرِّسُ إِنَّ الدَّرْسَ سَهْلٌ" },
        { en: "Qala al-mudarrisu inna al-darsu sahlun", ur: "قَالَ الْمُدَرِّسُ إِنَّ الدَّرْسُ سَهْلٌ" },
        { en: "Azunnu inna al-darsa sahlun" }
      ],
      correct: 1
    },
    {
      en: "What is 'Saturday' in Arabic?",
      ur: "عربی میں 'سنیچر' (ہفتہ) کو کیا کہتے ہیں؟",
      options: [
        { en: "Yawm al-Sabt (يَوْمُ السَّبْتِ)", ur: "يَوْمُ السَّبْتِ" },
        { en: "Yawm al-Ahad (يَوْمُ الْأَحَدِ)", ur: "يَوْمُ الْأَحَدِ" },
        { en: "Yawm al-Jumu'ah", ur: "يَوْمُ الْجُمُعَةِ" },
        { en: "Yawm al-Thulatha" }
      ],
      correct: 0
    },
    {
      en: "What is 'Sunday' in Arabic?",
      ur: "عربی میں 'اتوار' کو کیا کہتے ہیں؟",
      options: [
        { en: "Yawm al-Sabt", ur: "يَوْمُ السَّبْتِ" },
        { en: "Yawm al-Ahad (يَوْمُ الْأَحَدِ)", ur: "يَوْمُ الْأَحَدِ" },
        { en: "Yawm al-Ithnayn", ur: "يَوْمُ الْإِثْنَيْنِ" },
        { en: "Yawm al-Arbi'a" }
      ],
      correct: 1
    },
    {
      en: "What is 'Monday' in Arabic?",
      ur: "عربی میں 'پیر' (سوموار) کو کیا کہتے ہیں؟",
      options: [
        { en: "Yawm al-Ithnayn (يَوْمُ الْإِثْنَيْنِ)", ur: "يَوْمُ الْإِثْنَيْنِ" },
        { en: "Yawm al-Thulatha", ur: "يَوْمُ الثُّلَاثَاءِ" },
        { en: "Yawm al-Arbi'a", ur: "يَوْمُ الْأَرْبِعَاءِ" },
        { en: "Yawm al-Khamis" }
      ],
      correct: 0
    },
    {
      en: "What is 'Tuesday' in Arabic?",
      ur: "عربی میں 'منگل' کو کیا کہتے ہیں؟",
      options: [
        { en: "Yawm al-Thulatha (يَوْمُ الثُّلَاثَاءِ)", ur: "يَوْمُ الثُّلَاثَاءِ" },
        { en: "Yawm al-Arbi'a", ur: "يَوْمُ الْأَرْبِعَاءِ" },
        { en: "Yawm al-Khamis", ur: "يَوْمُ الْخَمِيسِ" },
        { en: "Yawm al-Jumu'ah" }
      ],
      correct: 0
    },
    {
      en: "What is 'Wednesday' in Arabic?",
      ur: "عربی میں 'بدھ' کو کیا کہتے ہیں؟",
      options: [
        { en: "Yawm al-Arbi'a (يَوْمُ الْأَرْبِعَاءِ)", ur: "يَوْمُ الْأَرْبِعَاءِ" },
        { en: "Yawm al-Khamis", ur: "يَوْمُ الْخَمِيسِ" },
        { en: "Yawm al-Jumu'ah", ur: "يَوْمُ الْجُمُعَةِ" },
        { en: "Yawm al-Sabt" }
      ],
      correct: 0
    },
    {
      en: "What is 'Thursday' in Arabic?",
      ur: "عربی میں 'جمعرات' کو کیا کہتے ہیں؟",
      options: [
        { en: "Yawm al-Khamis (يَوْمُ الْخَمِيسِ)", ur: "يَوْمُ الْخَمِيسِ" },
        { en: "Yawm al-Jumu'ah", ur: "يَوْمُ الْجُمُعَةِ" },
        { en: "Yawm al-Sabt", ur: "يَوْمُ السَّبْتِ" },
        { en: "Yawm al-Ahad" }
      ],
      correct: 0
    },
    {
      en: "What is 'Friday' in Arabic?",
      ur: "عربی میں 'جمعہ' کو کیا کہتے ہیں؟",
      options: [
        { en: "Yawm al-Jumu'ah (يَوْمُ الْجُمُعَةِ)", ur: "يَوْمُ الْجُمُعَةِ" },
        { en: "Yawm al-Sabt", ur: "يَوْمُ السَّبْتِ" },
        { en: "Yawm al-Ahad", ur: "يَوْمُ الْأَحَدِ" },
        { en: "Yawm al-Ithnayn" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'They (women) write the lessons on Saturday'",
      ur: "ترجمہ کریں: 'وہ سب (مؤنث) سنیچر کے دن اسباق لکھتی ہیں'",
      options: [
        { en: "Yaktubna al-duroosa yawma al-sabti", ur: "يَكْتُبْنَ الدُّرُوسَ يَوْمَ السَّبْتِ" },
        { en: "Taktubna al-duroosa yawma al-sabti", ur: "تَكْتُبْنَ الدُّرُوسَ يَوْمَ السَّبْتِ" },
        { en: "Yaktuboona al-duroosa yawma al-sabti", ur: "يَكْتُبُونَ الدُّرُوسَ يَوْمَ السَّبْتِ" },
        { en: "Yaktubna al-duroosa fee al-sabti" }
      ],
      correct: 0
    }
  ],
  13: [ // Lesson 13: المضارع مسنداً لجميع الضمائر، علامة الرفع في المضارع
    {
      en: "What is the standard sign of Raf' (nominative) for normal singular present verbs (like yadhabu)?",
      ur: "واحد مضارع افعال (جیسے يَذْهَبُ) میں رفع (مرفوع ہونے) کی عام علامت کیا ہے؟",
      options: [
        { en: "Fatha at the end", ur: "فتحہ" },
        { en: "Dhamma at the end (الضمة)", ur: "ضمہ (پیش)" },
        { en: "Noon at the end (ثبوت النون)", ur: "نون کا ہونا" },
        { en: "Jazm" }
      ],
      correct: 1
    },
    {
      en: "For verbs like 'Yadhaboona' (يَذْهَبُونَ) and 'Tadhabeena' (تَذْهَبِينَ), what is the sign of Raf'?",
      ur: "'يَذْهَبُونَ' اور 'تَذْهَبِينَ' جیسے افعال میں رفع کی علامت کیا ہوتی ہے؟",
      options: [
        { en: "Dhamma", ur: "ضمہ" },
        { en: "Presence of the letter Noon (ثبوت النون)", ur: "آخر میں حرفِ نون کا ثابت رہنا (ثبوت النون)" },
        { en: "Waw", ur: "واؤ" },
        { en: "Ya" }
      ],
      correct: 1
    },
    {
      en: "What is the present tense verb 'Dhahaba' for 'Hum' (They, masculine plural)?",
      ur: "'هُمْ' کے لیے 'ذَهَبَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Yadhaboona (يَذْهَبُونَ)", ur: "يَذْهَبُونَ" },
        { en: "Tadhaboona (تَذْهَبُونَ)", ur: "تَذْهَبُونَ" },
        { en: "Yadhabna (يَذْهَبْنَ)", ur: "يَذْهَبْنَ" },
        { en: "Yadhabani" }
      ],
      correct: 0
    },
    {
      en: "What is the present tense verb 'Dhahaba' for 'Antum' (You all, masculine)?",
      ur: "'أَنْتُمْ' کے لیے 'ذَهَبَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Yadhaboona (يَذْهَبُونَ)", ur: "يَذْهَبُونَ" },
        { en: "Tadhaboona (تَذْهَبُونَ - You all go)", ur: "تَذْهَبُونَ" },
        { en: "Tadhabna (تَذْهَبْنَ)", ur: "تَذْهَبْنَ" },
        { en: "Tadhabeena" }
      ],
      correct: 1
    },
    {
      en: "What is the present tense verb 'Dhahaba' for 'Anti' (You, feminine singular)?",
      ur: "'أَنْتِ' کے لیے 'ذَهَبَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Tadhabeena (تَذْهَبِينَ - You go)", ur: "تَذْهَبِينَ" },
        { en: "Tadhabna (تَذْهَبْنَ)", ur: "تَذْهَبْنَ" },
        { en: "Yadhabeena (يَذْهَبِينَ)", ur: "يَذْهَبِينَ" },
        { en: "Tadhabu" }
      ],
      correct: 0
    },
    {
      en: "What is the present tense verb 'Dhahaba' for 'Hunna' (They, feminine plural)?",
      ur: "'هُنَّ' کے لیے 'ذَهَبَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Yadhabna (يَذْهَبْنَ - They go)", ur: "يَذْهَبْنَ" },
        { en: "Tadhabna (تَذْهَبْنَ)", ur: "تَذْهَبْنَ" },
        { en: "Yadhaboona (يَذْهَبُونَ)", ur: "يَذْهَبُونَ" },
        { en: "Yadhabani" }
      ],
      correct: 0
    },
    {
      en: "What is the present tense verb 'Dhahaba' for 'Antunna' (You all, feminine)?",
      ur: "'أَنْتُنَّ' کے لیے 'ذَهَبَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Yadhabna (يَذْهَبْنَ)", ur: "يَذْهَبْنَ" },
        { en: "Tadhabna (تَذْهَبْنَ - You all go)", ur: "تَذْهَبْنَ" },
        { en: "Tadhaboona (تَذْهَبُونَ)", ur: "تَذْهَبُونَ" },
        { en: "Tadhabeena" }
      ],
      correct: 1
    },
    {
      en: "Which category of present verbs are called 'The Five Verbs' (Al-Af'aal al-Khamsah)?",
      ur: "مضارع کے کن پانچ صیغوں کو 'افعالِ خمسہ' کہا جاتا ہے؟",
      options: [
        { en: "Those that end in Noon (except feminine plurals) like yaf'alaani, yaf'aloona, taf'alaani, taf'aloona, taf'aleena", ur: "وہ صیغے جن کے آخر میں نونِ اعرابی آتا ہے (جمع مؤنث کے علاوہ)" },
        { en: "First five forms of conjugation", ur: "پہلے پانچ صیغے" },
        { en: "Past verbs", ur: "ماضی کے افعال" },
        { en: "Derived verbs" }
      ],
      correct: 0
    },
    {
      en: "Are present feminine plural verbs (like yadhabna, tadhabna) Mabni (fixed) or Mu'rab (declinable)?",
      ur: "مضارع جمع مؤنث کے صیغے (جیسے يَذْهَبْنَ، تَذْهَبْنَ) مبنی ہوتے ہیں یا معرب؟",
      options: [
        { en: "They are Mu'rab", ur: "معرب ہوتے ہیں" },
        { en: "They are Mabni (fixed on Sukun)", ur: "مبنی ہوتے ہیں (سکون پر)" },
        { en: "They change based on position", ur: "موقع کے حساب سے بدلتے ہیں" },
        { en: "Only in the subjunctive case" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'The students (masculine) enter the masjid'",
      ur: "ترجمہ کریں: 'طالب علم مسجد میں داخل ہوتے ہیں'",
      options: [
        { en: "Yadkhulu al-tullaabu al-masjida", ur: "يَدْخُلُ الطُّلَّابُ الْمَسْجِدَ" },
        { en: "Yadkhuloona al-tullaabu al-masjida", ur: "يَدْخُلُونَ الطُّلَّابُ الْمَسْجِدَ" },
        { en: "Al-tullaabu yadkhuloona al-masjida (الطُّلَّابُ يَدْخُلُونَ الْمَسْجِدَ)", ur: "الطُّلَّابُ يَدْخُلُونَ الْمَسْجِدَ" },
        { en: "Both 'Yadkhulu al-tullaabu al-masjida (يَدْخُلُ الطُّلَّابُ الْمَسْجِدَ)' and 'Al-tullaabu yadkhuloona al-masjida (الطُّلَّابُ يَدْخُلُونَ الْمَسْجِدَ)' are correct", ur: "يَدْخُلُ الطُّلَّابُ الْمَسْجِدَ اور الطُّلَّابُ يَدْخُلُونَ الْمَسْجِدَ دونوں درست ہیں" }
      ],
      correct: 3
    },
    {
      en: "Translate: 'What are you (women) drinking?'",
      ur: "ترجمہ کریں: 'تم سب (مؤنث) کیا پی رہی ہو؟'",
      options: [
        { en: "Maza tashrabna?", ur: "مَاذَا تَشْرَبْنَ؟" },
        { en: "Maza tashraboona?", ur: "مَاذَا تَشْرَبُونَ؟" },
        { en: "Maza yashrabna?", ur: "مَاذَا يَشْرَبْنَ؟" },
        { en: "Maza tashrabeena?" }
      ],
      correct: 0
    },
    {
      en: "What is the present tense verb 'Sajada' (prostrated) for 'Hum'?",
      ur: "'هُمْ' کے لیے 'سَجَدَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Yasjudoona (يَسْجُدُونَ)", ur: "يَسْجُدُونَ" },
        { en: "Tasjudoona (تَسْجُدُونَ)", ur: "تَسْجُدُونَ" },
        { en: "Yasjudna (يَسْجُدْنَ)", ur: "يَسْجُدْنَ" },
        { en: "Yasjudu" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'Why are you (masculine plural) laughing?'",
      ur: "ترجمہ کریں: 'تم سب کیوں ہنس رہے ہو؟'",
      options: [
        { en: "Li-ma tad-hakoona? (لِمَ تَضْحَكُونَ؟)", ur: "لِمَ تَضْحَكُونَ؟" },
        { en: "Li-ma tad-hakna?", ur: "لِمَ تَضْحَكْنَا؟" },
        { en: "Li-ma yad-hakoona?", ur: "لِمَ يَضْحَكُونَ؟" },
        { en: "Li-ma tad-hakeena?" }
      ],
      correct: 0
    },
    {
      en: "What is the present tense verb 'Arafa' (knew) for 'Anti'?",
      ur: "'أَنْتِ' کے لیے 'عَرَفَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Ta'rifeena (تَعْرِفِينَ)", ur: "تَعْرِفِينَ" },
        { en: "Ta'rifna (تَعْرِفْنَ)", ur: "تَعْرِفْنَ" },
        { en: "Ya'rifeena (يَعْرِفِينَ)", ur: "يَعْرِفِينَ" },
        { en: "Ta'rifu" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'We play football'",
      ur: "ترجمہ کریں: 'ہم فٹ بال کھیلتے ہیں'",
      options: [
        { en: "Nal'abu kurata al-qadami (نَلْعَبُ كُرَةَ الْقَدَمِ)", ur: "نَلْعَبُ كُرَةَ الْقَدَمِ" },
        { en: "Tal'abu kurata al-qadami", ur: "تَلْعَبُ كُرَةَ الْقَدَمِ" },
        { en: "Al'abu kurata al-qadami", ur: "أَلْعَبُ كُرَةَ الْقَدَمِ" },
        { en: "Yal'aboona kurata al-qadami" }
      ],
      correct: 0
    }
  ],
  14: [ // Lesson 14: فعل الأمر
    {
      en: "Which form is the correct singular masculine imperative from 'fataha' (فَتَحَ - to open)?",
      ur: "'فَتَحَ' (کھولنا) سے واحد مذکر مخاطب کے لیے درست فعلِ امر کون سا ہے؟",
      options: [
        { en: "Iftah (اِفْتَحْ)", ur: "اِفْتَحْ" },
        { en: "Taftahu (تَفْتَحُ)", ur: "تَفْتَحُ" },
        { en: "Fatahta (فَتَحْتَ)", ur: "فَتَحْتَ" },
        { en: "Yaftahu (يَفْتَحُ)", ur: "يَفْتَحُ" }
      ],
      correct: 0
    },
    {
      en: "How is the imperative verb (Fi'l al-Amr) formed in Arabic?",
      ur: "عربی میں فعلِ امر (حکم دینے والا فعل) کیسے بنایا جاتا ہے؟",
      options: [
        { en: "From the past tense by adding Alif", ur: "ماضی سے الف کا اضافہ کر کے" },
        { en: "From the second person present tense (Mudaari' Mukhatab) by dropping prefix and making ending Majzoom", ur: "مضارع مخاطب کے صیغے سے، شروع کا حرفِ مضارع ہٹا کر اور آخر کو مجزوم کر کے" },
        { en: "By adding Sa- at the beginning", ur: "شروع میں سَـ لگا کر" },
        { en: "It has a unique root form" }
      ],
      correct: 1
    },
    {
      en: "If the first letter of the verb is silent (Sukun) after removing the present tense prefix, what do you add to the start?",
      ur: "حرفِ مضارع ہٹانے کے بعد اگر پہلا حرف ساکن ہو، تو شروع میں کس چیز کا اضافہ کیا جاتا ہے؟",
      options: [
        { en: "Hamzatul Wasl (ٱ) with appropriate vowel", ur: "ہمزۃ الوصل (الف) مناسب حرکت کے ساتھ" },
        { en: "Hamzatul Qat' (أ)", ur: "ہمزۃ القطع" },
        { en: "Waw", ur: "واؤ" },
        { en: "Ya" }
      ],
      correct: 0
    },
    {
      en: "When is the Hamzatul Wasl of the imperative read with a Dhamma (پیش)?",
      ur: "فعلِ امر کے شروع کا ہمزۃ الوصل کب ضمہ (پیش) کے ساتھ پڑھا جاتا ہے؟",
      options: [
        { en: "When the third letter of the present tense has a Fatha", ur: "جب مضارع کے تیسرے حرف پر فتحہ ہو" },
        { en: "When the third letter of the present tense has a Dhamma (e.g. yaktubu -> uktub)", ur: "جب مضارع کے تیسرے حرف پر ضمہ (پیش) ہو (جیسے يَكْتُبُ -> اُكْتُبْ)" },
        { en: "When the third letter has a Kasra", ur: "جب تیسرے حرف پر کسرہ ہو" },
        { en: "Always" }
      ],
      correct: 1
    },
    {
      en: "When is the Hamzatul Wasl of the imperative read with a Kasra (زیر)?",
      ur: "فعلِ امر کا ہمزۃ الوصل کب کسرہ (زیر) کے ساتھ پڑھا جاتا ہے؟",
      options: [
        { en: "When the third letter has a Fatha or Kasra (e.g. yaftahu -> iftah, yajlisu -> ijlis)", ur: "جب مضارع کے تیسرے حرف پر فتحہ یا کسرہ ہو (جیسے يَفْتَحُ -> اِفْتَحْ، يَجْلِسُ -> اِجْلِسْ)" },
        { en: "When the third letter has a Dhamma", ur: "جب تیسرے حرف پر ضمہ ہو" },
        { en: "Only at the end of a sentence", ur: "صرف جملے کے آخر میں" },
        { en: "Never" }
      ],
      correct: 0
    },
    {
      en: "What is the imperative of 'Kataba' (to write) for 'Anta'?",
      ur: "'أَنْتَ' کے لیے 'كَتَبَ' کا فعلِ امر کیا ہے؟",
      options: [
        { en: "Aktub (أَكْتُبْ)", ur: "أَكْتُبْ" },
        { en: "Uktub (اُكْتُبْ)", ur: "اُكْتُبْ" },
        { en: "Katabta (كَتَبْتَ)", ur: "كَتَبْتَ" },
        { en: "Taktub" }
      ],
      correct: 1
    },
    {
      en: "What is the imperative of 'Jalasa' (to sit) for 'Anta'?",
      ur: "'أَنْتَ' کے لیے 'جَلَسَ' کا فعلِ امر کیا ہے؟",
      options: [
        { en: "Ujlis (اُجْلِسْ)", ur: "اُجْلِسْ" },
        { en: "Ijlis (اِجْلِسْ)", ur: "اِجْلِسْ" },
        { en: "Ajlis (أَجْلِسْ)", ur: "أَجْلِسْ" },
        { en: "Jalis" }
      ],
      correct: 1
    },
    {
      en: "What is the imperative of 'Fataha' (to open) for 'Anta'?",
      ur: "'أَنْتَ' کے لیے 'فَتَحَ' کا فعلِ امر کیا ہے؟",
      options: [
        { en: "Uftah (اُفْتَحْ)", ur: "اُفْتَحْ" },
        { en: "Iftah (اِفْتَحْ)", ur: "اِفْتَحْ" },
        { en: "Fatah (فَتَحْ)", ur: "فَتَحْ" },
        { en: "Aftah" }
      ],
      correct: 1
    },
    {
      en: "How do you form the imperative of 'Kataba' for 'Antum' (You all, masculine)?",
      ur: "'أَنْتُمْ' کے لیے 'كَتَبَ' کا فعلِ امر کیا ہوگا؟",
      options: [
        { en: "Uktub (اُكْتُبْ)", ur: "اُكْتُبْ" },
        { en: "Uktuboo (اُكْتُبُوا - write!)", ur: "اُكْتُبُوا" },
        { en: "Uktubna (اُكْتُبْنَا)", ur: "اُكْتُبْنَا" },
        { en: "Katabtum" }
      ],
      correct: 1
    },
    {
      en: "How do you form the imperative of 'Kataba' for 'Anti' (You, feminine singular)?",
      ur: "'أَنْتِ' کے لیے 'كَتَبَ' کا فعلِ امر کیا ہوگا؟",
      options: [
        { en: "Uktub (اُكْتُبْ)", ur: "اُكْتُبْ" },
        { en: "Uktubee (اُكْتُبِي - write!)", ur: "اُكْتُبِي" },
        { en: "Uktubna (اُكْتُبْنَ)", ur: "اُكْتُبْنِ" },
        { en: "Katabti" }
      ],
      correct: 1
    },
    {
      en: "How do you form the imperative of 'Kataba' for 'Antunna' (You all, feminine)?",
      ur: "'أَنْتُنَّ' کے لیے 'كَتَبَ' کا فعلِ امر کیا ہوگا؟",
      options: [
        { en: "Uktuboo (اُكْتُبُوا)", ur: "اُكْتُبُوا" },
        { en: "Uktubna (اُكْتُبْنَ - write!)", ur: "اُكْتُبْنِ" },
        { en: "Uktubee (اُكْتُبِي)", ur: "اُكْتُبِي" },
        { en: "Katabtunna" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Enter the classroom, O boys!'",
      ur: "ترجمہ کریں: 'کلاس میں داخل ہو جاؤ، اے لڑکو!'",
      options: [
        { en: "Udkhul al-fasla ya awlaadu", ur: "اُدْخُلْ الْفَصْلَ يَا أَوْلَادُ" },
        { en: "Udkhuloo al-fasla ya awlaadu", ur: "اُدْخُلُوا الْفَصْلَ يَا أَوْلَادُ" },
        { en: "Idkhuloo al-fasla ya awlaadu", ur: "اِدْخُلُوا الْفَصْلَ يَا أَوْلَادُ" },
        { en: "Dakhaltum al-fasla ya awlaadu" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Drink the milk, O Maryam!'",
      ur: "ترجمہ کریں: 'دودھ پیو، اے مریم!'",
      options: [
        { en: "Ishrab al-haliba ya Maryamu", ur: "اِشْرَبْ الْحَلِيبَ يَا مَرْيَمُ" },
        { en: "Ishrabee al-haliba ya Maryamu", ur: "اِشْرَبِي الْحَلِيبَ يَا مَرْيَمُ" },
        { en: "Ushrabee al-haliba ya Maryamu", ur: "اُشْرَبِي الْحَلِيبَ يَا مَرْيَمُ" },
        { en: "Sharibti al-haliba ya Maryamu" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Open your (feminine plural) books!'",
      ur: "ترجمہ کریں: 'اپنی (مؤنث جمع) کتابیں کھولو!'",
      options: [
        { en: "Iftahoo kutubakunna", ur: "اِفْتَحُوا كُتُبَكُنَّ" },
        { en: "Iftahna kutubakunna", ur: "اِفْتَحْنَ كُتُبَكُنَّ" },
        { en: "Iftah kutubakunna", ur: "اِفْتَحْ كُتُبَكُنَّ" },
        { en: "Iftahi kutubakunna" }
      ],
      correct: 1
    },
    {
      en: "What is the imperative form of 'Dhahaba' for 'Antuma' (You two)?",
      ur: "'أَنْتُمَا' کے لیے 'ذَهَبَ' کا فعلِ امر کیا ہوگا؟",
      options: [
        { en: "Idhhab (اِذْهَبْ)", ur: "اِذْهَبْ" },
        { en: "Idhhabaa (اِذْهَبَا)", ur: "اِذْهَبَا" },
        { en: "Idhhaboo (اِذْهَبُوا)", ur: "اِذْهَبُوا" },
        { en: "Dhahabtuma" }
      ],
      correct: 1
    }
  ],
  15: [ // Lesson 15: لا الناهية، كاد، الفرق بين لا وما النافيتين
    {
      en: "Which is the correct negative command for one masculine addressee: 'Do not eat'?",
      ur: "واحد مذکر مخاطب کے لیے 'مت کھاؤ' کی درست نہی کون سی ہے؟",
      options: [
        { en: "Laa ta'kul (لَا تَأْكُلْ)", ur: "لَا تَأْكُلْ" },
        { en: "Laa ya'kulu (لَا يَأْكُلُ)", ur: "لَا يَأْكُلُ" },
        { en: "Kul (كُلْ)", ur: "كُلْ" },
        { en: "Lan ta'kula (لَنْ تَأْكُلَ)", ur: "لَنْ تَأْكُلَ" }
      ],
      correct: 0
    },
    {
      en: "What is the name of the 'La' used to forbid someone from doing something (Prohibition)?",
      ur: "کسی کام سے روکنے کے لیے استعمال ہونے والی 'لا' کو کیا کہتے ہیں؟",
      options: [
        { en: "La al-Nafiyah (لَا النَّافِيَةُ - Negative)", ur: "لا نافیہ" },
        { en: "La al-Nahiyah (لَا النَّاهِيَةُ - Prohibitive)", ur: "لا ناہیہ" },
        { en: "La al-Jins", ur: "لا جنس" },
        { en: "None" }
      ],
      correct: 1
    },
    {
      en: "What grammatical effect does 'La al-Nahiyah' (prohibitive) have on the present tense verb?",
      ur: "'لا ناہیہ' کا مضارع فعل پر کیا اعرابی اثر ہوتا ہے؟",
      options: [
        { en: "It makes it Mansub (Fatha)", ur: "وہ اسے منصوب کر دیتا ہے" },
        { en: "It makes it Majzoom (Sukun or drops Noon)", ur: "وہ اسے مجزوم کر دیتا ہے (ساکن یا نون گرا دیتا ہے)" },
        { en: "It keeps it Marfu'", ur: "وہ اسے مرفوع رکھتا ہے" },
        { en: "It changes it to past tense" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Do not go!' (singular masculine)",
      ur: "ترجمہ کریں: 'تم مت جاؤ!'",
      options: [
        { en: "La tadhabu", ur: "لَا تَذْهَبُ" },
        { en: "La tadhab (لَا تَذْهَبْ)", ur: "لَا تَذْهَبْ" },
        { en: "La yadhab", ur: "لَا يَذْهَبْ" },
        { en: "Ma tadhab" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Do not go!' (plural masculine)",
      ur: "ترجمہ کریں: 'تم سب مت جاؤ!'",
      options: [
        { en: "La tadhaboona", ur: "لَا تَذْهَبُونَ" },
        { en: "La tadhaboo (لَا تَذْهَبُوا)", ur: "لَا تَذْهَبُوا" },
        { en: "La tadhabna", ur: "لَا تَذْهَبْنَ" },
        { en: "La yadhaboo" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Do not sit, O Maryam!'",
      ur: "ترجمہ کریں: 'مت بیٹھو، اے مریم!'",
      options: [
        { en: "La tajlis ya Maryamu", ur: "لَا تَجْلِسْ يَا مَرْيَمُ" },
        { en: "La tajlisee ya Maryamu (لَا تَجْلِسِي يَا مَرْيَمُ)", ur: "لَا تَجْلِسِي يَا مَرْيَمُ" },
        { en: "La tajlisna ya Maryamu", ur: "لَا تَجْلِسْنَ يَا مَرْيَمُ" },
        { en: "Ma tajlisee ya Maryamu" }
      ],
      correct: 1
    },
    {
      en: "What does the verb 'Kaada / Yakaadu' (كَادَ / يَكَادُ) mean?",
      ur: "'كَادَ / يَكَادُ' کا کیا مطلب ہے؟",
      options: [
        { en: "To write", ur: "لکھنا" },
        { en: "To be about to / Almost (approaching action)", ur: "قریب ہونا / قریب تھا کہ / قریب ہے کہ" },
        { en: "To believe", ur: "اعتقاد رکھنا" },
        { en: "To deny" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'The student almost left the classroom'",
      ur: "ترجمہ کریں: 'طالب علم قریب تھا کہ کلاس سے نکل جاتا'",
      options: [
        { en: "Kaada al-taalibu yakhruju min al-fasli", ur: "كَادَ الطَّالِبُ يَخْرُجُ مِنَ الْفَصْلِ" },
        { en: "Kaada al-taalibu kharaja min al-fasli", ur: "كَادَ الطَّالِبُ خَرَجَ مِنَ الْفَصْلِ" },
        { en: "Yakaadu al-taalibu yakhruju min al-fasli", ur: "يَكَادُ الطَّالِبُ يَخْرُجُ مِنَ الْفَصْلِ" },
        { en: "Kaadat al-taalibu yakhruju min al-fasli" }
      ],
      correct: 0
    },
    {
      en: "What is the difference between 'La al-Nafiyah' (negative) and 'La al-Nahiyah' (prohibitive)?",
      ur: "'لا نافیہ' اور 'لا ناہیہ' میں کیا فرق ہے؟",
      options: [
        { en: "Nafiyah is a statement (verb stays Marfu'); Nahiyah is a command (verb becomes Majzoom)", ur: "نافیہ خبر دیتا ہے (مضارع مرفوع رہتا ہے)؛ ناہیہ روکتا ہے (مضارع مجزوم ہو جاتا ہے)" },
        { en: "Nahiyah stays Marfu'; Nafiyah becomes Majzoom", ur: "ناہیہ مرفوع رہتا ہے؛ نافیہ مجزوم ہو جاتا ہے" },
        { en: "There is no grammatical difference", ur: "کوئی نحوی فرق نہیں ہے" },
        { en: "Only one is used with verbs" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'He does not write' (Statement)",
      ur: "ترجمہ کریں: 'وہ نہیں لکھتا ہے' (بیانیہ جملہ)",
      options: [
        { en: "La yaktub (لَا يَكْتُبْ)", ur: "لَا يَكْتُبْ" },
        { en: "La yaktubu (لَا يَكْتُبُ)", ur: "لَا يَكْتُبُ" },
        { en: "Ma yaktubu", ur: "مَا يَكْتُبُ" },
        { en: "Lan yaktubu" }
      ],
      correct: 1
    },
    {
      en: "What is the negative particle 'Maa' (مَا) usually used for?",
      ur: "نفی کا حرف 'مَا' عام طور پر کس فعل کی نفی کے لیے آتا ہے؟",
      options: [
        { en: "Past tense verb (and present for current moment negation)", ur: "ماضی فعل کی نفی کے لیے (اور حال کی نفی کے لیے)" },
        { en: "Future tense only", ur: "صرف مستقبل کے لیے" },
        { en: "Imperative only", ur: "صرف امر کے لیے" },
        { en: "It is not a negative particle" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'I did not eat anything'",
      ur: "ترجمہ کریں: 'میں نے کچھ نہیں کھایا'",
      options: [
        { en: "La akaltu shay'an", ur: "لَا أَكَلْتُ شَيْئًا" },
        { en: "Maa akaltu shay'an (مَا أَكَلْتُ شَيْئًا)", ur: "مَا أَكَلْتُ شَيْئًا" },
        { en: "La akulu shay'an", ur: "لَا أَكُلُ شَيْئًا" },
        { en: "Lam akaltu shay'an" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'The bell is about to ring' (yurannu)",
      ur: "ترجمہ کریں: 'گھنٹی بجنے ہی والی ہے'",
      options: [
        { en: "Kaada al-jarasu yurannu", ur: "كَادَ الْجَرَسُ يُرَنُّ" },
        { en: "Yakaadu al-jarasu yurannu (يَكَادُ الْجَرَسُ يُرَنُّ)", ur: "يَكَادُ الْجَرَسُ يُرَنُّ" },
        { en: "Kaadat al-jarasu yurannu", ur: "كَادَتِ الْجَرَسُ يُرَنُّ" },
        { en: "Kaada al-jarasu rananna" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 3, how is 'Do not drink!' (plural feminine) written?",
      ur: "مشق 3 کے مطابق، 'تم سب (مؤنث) مت پیو!' کیسے لکھا جائے گا؟",
      options: [
        { en: "La tashrabna (لَا تَشْرَبْنَ)", ur: "لَا تَشْرَبْنَ" },
        { en: "La tashraboo", ur: "لَا تَشْرَبُوا" },
        { en: "La yashrabna", ur: "لَا يَشْرَبْنَ" },
        { en: "La tashrabee" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'Do not play in the street, O kids!'",
      ur: "ترجمہ کریں: 'سڑک پر مت کھیلو، اے بچو!'",
      options: [
        { en: "La tal'aboo fish-shaari'i ya awlaadu", ur: "لَا تَلْعَبُوا فِي الشَّارِعِ يَا أَوْلَادُ" },
        { en: "La tal'ab fish-shaari'i ya awlaadu", ur: "لَا تَلْعَبْ فِي الشَّارِعِ يَا أَوْلَادُ" },
        { en: "La yal'aboo fish-shaari'i ya awlaadu", ur: "لَا يَلْعَبُوا فِي الشَّارِعِ يَا أَوْلَادُ" },
        { en: "Ma tal'aboo fish-shaari'i" }
      ],
      correct: 0
    }
  ],
  16: [ // Lesson 16: يريد، ألوان مؤنث، عمر وعمرو، ما الموصولة، ذو منصوباً، غير
    {
      en: "In a list such as 'dafaatir, aqlaam, zuruf' (دَفَاتِر، أَقْلَام، ظُرُوف), what do these nouns have in common?",
      ur: "'دَفَاتِر، أَقْلَام، ظُرُوف' جیسے الفاظ میں مشترک نحوی/صرفی بات کیا ہے؟",
      options: [
        { en: "They are broken plurals", ur: "یہ جمع مکسر ہیں" },
        { en: "They are all dual nouns", ur: "یہ سب تثنیہ اسم ہیں" },
        { en: "They are all attached pronouns", ur: "یہ سب ضمائر متصل ہیں" },
        { en: "They are all particles of Jarr", ur: "یہ سب حروفِ جر ہیں" }
      ],
      correct: 0
    },
    {
      en: "How is 'Yureedu' (يُرِيدُ - he wants) conjugated for 'Antum'?",
      ur: "'أَنْتُمْ' کے لیے 'يُرِيدُ' کی مضارع کی گردان کیا ہے؟",
      options: [
        { en: "Tureedoona (تُرِيدُونَ)", ur: "تُرِيدُونَ" },
        { en: "Tureedna (تُرِيدْنَ)", ur: "تُرِيدْنَ" },
        { en: "Yureedoona (يُرِيدُونَ)", ur: "يُرِيدُونَ" },
        { en: "Tureedu" }
      ],
      correct: 0
    },
    {
      en: "How is 'Yureedu' conjugated for 'Hunna' (They, feminine plural)?",
      ur: "'هُنَّ' کے لیے 'يُرِيدُ' کی مضارع کی گردان کیا ہے؟",
      options: [
        { en: "Yureedna (يُرِدْنَ - note the dropped middle letter)", ur: "يُرِدْنَ" },
        { en: "Yureedna (يُرِيدْنَ)", ur: "يُرِيدْنَ" },
        { en: "Tureedna (تُرِيدْنَ)", ur: "تُرِيدْنَ" },
        { en: "Tureedna (تُرِدْنَ)" }
      ],
      correct: 0
    },
    {
      en: "What is the feminine form of color 'Ahmaru' (أَحْمَرُ - red)?",
      ur: "'أَحْمَرُ' (سرخ) کی مؤنث شکل کیا ہے؟",
      options: [
        { en: "Hamra'u (حَمْرَاءُ) - diptote", ur: "حَمْرَاءُ (غیر منصرف)" },
        { en: "Ahmaratun (أَحْمَرَةٌ)", ur: "أَحْمَرَةٌ" },
        { en: "Hamratun (حَمْرَةٌ)", ur: "حَمْرَةٌ" },
        { en: "Humrun (حُمْرٌ)" }
      ],
      correct: 0
    },
    {
      en: "What is the feminine form of color 'Abyadu' (أَبْيَضُ - white)?",
      ur: "'أَبْيَضُ' (سفید) کی مؤنث شکل کیا ہے؟",
      options: [
        { en: "Bayda'u (بَيْضَاءُ)", ur: "بَيْضَاءُ" },
        { en: "Abyadatun (أَبْيَضَةٌ)", ur: "أَبْيَضَةٌ" },
        { en: "Baydatun (بَيْضَةٌ)", ur: "بَيْضَةٌ" },
        { en: "Beedun (بِيضٌ)" }
      ],
      correct: 0
    },
    {
      en: "What is the difference in spelling and pronunciation between 'Umar' (عُمَرُ) and 'Amr' (عَمْرٌو)?",
      ur: "'عُمَرُ' اور 'عَمْرٌو' کے لکھنے اور پڑھنے میں کیا فرق ہے؟",
      options: [
        { en: "Amr has a silent 'Waw' at the end in nominative/genitive case to distinguish it, and it accepts Tanween, while Umar is a diptote", ur: "عَمرو کے آخر میں غیر ملفوظ واؤ (نہ پڑھی جانے والی واؤ) ہوتی ہے اور یہ منصرف ہے، جبکہ عُمر غیر منصرف ہے" },
        { en: "Umar has a Waw at the end", ur: "عمر کے آخر میں واؤ ہوتی ہے" },
        { en: "Both are read exactly the same and are diptotes", ur: "دونوں ایک جیسے پڑھے جاتے ہیں" },
        { en: "None" }
      ],
      correct: 0
    },
    {
      en: "What is 'Amr' (عَمْرٌو) in the accusative (Mansub) case?",
      ur: "حالتِ نصب میں 'عَمْرٌو' کی شکل کیا ہو جاتی ہے؟",
      options: [
        { en: "Amran (عَمْرًا - dropping the Waw and adding Alif)", ur: "عَمْرًا (واؤ گرا کر الف کے ساتھ)" },
        { en: "Amrun (عَمْرٌو - keeping the Waw)", ur: "عَمْرٌو (واؤ برقرار)" },
        { en: "Amru (عَمْرُ)", ur: "عَمْرُ" },
        { en: "Amrin (عَمْرٍو)" }
      ],
      correct: 0
    },
    {
      en: "What does the relative pronoun 'Maa' (مَا الموصولة) mean?",
      ur: "'مَا' موصولہ کا کیا مطلب ہے؟",
      options: [
        { en: "What (question)", ur: "کیا (سوالیہ)" },
        { en: "That which / What (relative)", ur: "جو کچھ / وہ جو" },
        { en: "No / Not", ur: "نہیں" },
        { en: "Why" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I ate what you wrote'",
      ur: "ترجمہ کریں: 'میں نے وہ کھایا جو تم نے لکھا'",
      options: [
        { en: "Akaltu ma katabta", ur: "أَكَلْتُ مَا كَتَبْتَ" },
        { en: "Akaltu maaza katabta", ur: "أَكَلْتُ مَاذَا كَتَبْتَ" },
        { en: "Akaltu la katabta", ur: "أَكَلْتُ لَا كَتَبْتَ" },
        { en: "Akaltu man katabta" }
      ],
      correct: 0
    },
    {
      en: "What is the accusative (Mansub) form of 'Zuu' (ذُو) when it acts as an object?",
      ur: "مفعول بننے کی صورت میں (حالتِ نصب میں) 'ذُو' کی شکل کیا ہوتی ہے؟",
      options: [
        { en: "Zii (ذِي)", ur: "ذِي" },
        { en: "Zaa (ذَا)", ur: "ذَا" },
        { en: "Zuu (ذُو)", ur: "ذُو" },
        { en: "Zawa" }
      ],
      correct: 1
    },
    {
      en: "What does 'Ghayru' (غَيْرُ) mean and how does it affect the noun after it?",
      ur: "'غَيْرُ' کا کیا مطلب ہے اور یہ اپنے بعد والے اسم پر کیا اثر ڈالتا ہے؟",
      options: [
        { en: "It means 'Other than / Non-' and acts as Mudaaf (next noun is Majrur)", ur: "اس کا مطلب 'علاوہ / غیر / بغیر' ہے اور یہ مضاف کا کام کرتا ہے (اگلا اسم مجرور ہوتا ہے)" },
        { en: "It means 'Indeed' and makes the next noun Mansub", ur: "اس کا مطلب 'بے شک' ہے" },
        { en: "It means 'Also'", ur: "اس کا مطلب 'بھی' ہے" },
        { en: "It has no effect" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'This page is lined (mastoorah), and that is unlined (ghayru mastooratin)'",
      ur: "ترجمہ کریں: 'یہ صفحہ لائنوں والا ہے اور وہ بنا لائنوں کے ہے'",
      options: [
        { en: "Hazihi al-waraqatu mastooratun wa tilka ghayru mastooratin", ur: "هٰذِهِ الْوَرَقَةُ مَسْطُورَةٌ وَتِلْكَ غَيْرُ مَسْطُورَةٍ" },
        { en: "Hazihi al-waraqatu mastooratun wa tilka ghayru mastooratun", ur: "هٰذِهِ الْوَرَقَةُ مَسْطُورَةٌ وَتِلْكَ غَيْرُ مَسْطُورَةٌ" },
        { en: "Hazihi al-waraqatu mastooratun wa tilka la mastoorah", ur: "هٰذِهِ الْوَرَقَةُ مَسْطُورَةٌ وَتِلْكَ لَا مَسْطُورَةٌ" },
        { en: "Haza al-waraqu mastoorun wa zalika ghayru mastoorin" }
      ],
      correct: 0
    },
    {
      en: "What is the feminine of 'Aakharu' (آخَرُ - another)?",
      ur: "'آخَرُ' (دوسرا) کی مؤنث شکل کیا ہے؟",
      options: [
        { en: "Aakharatun (آخَرَةٌ)", ur: "آخَرَةٌ" },
        { en: "Ukhraa (أُخْرَى) - diptote", ur: "أُخْرَى (غیر منصرف)" },
        { en: "Aakhireen (آخِرِينَ)", ur: "آخِرِينَ" },
        { en: "Ukhrayatun" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I bought another book (masculine) and another car (feminine)'",
      ur: "ترجمہ کریں: 'میں نے ایک اور کتاب اور ایک اور گاڑی خریدی'",
      options: [
        { en: "Ishtaraitu kitaaban aakhara wa sayyaaratan ukhraa", ur: "اشْتَرَيْتُ كِتَابًا آخَرَ وَسَيَّارَةً أُخْرَى" },
        { en: "Ishtaraitu kitaaban ukhraa wa sayyaaratan aakhara", ur: "اشْتَرَيْتُ كِتَابًا أُخْرَى وَسَيَّارَةً آخَرَ" },
        { en: "Ishtaraitu kitaaban aakharatun wa sayyaaratan ukhra", ur: "اشْتَرَيْتُ كِتَابًا آخَرَةً وَسَيَّارَةً أُخْرَى" },
        { en: "Ishtaraitu kitaaban aakhara wa sayyaaratan aakhara" }
      ],
      correct: 0
    },
    {
      en: "What is 'Green' in Arabic for masculine and feminine?",
      ur: "مذکر اور مؤنث کے لیے 'سبز' (ہرا) کا عربی لفظ کیا ہے؟",
      options: [
        { en: "Akhdaru (أَخْضَرُ) / Khadra'u (خَضْرَاءُ)", ur: "أَخْضَرُ / خَضْرَاءُ" },
        { en: "Azraqu (أَزْرَقُ) / Zarqa'u (زَرْقَاءُ)", ur: "أَزْرَقُ / زَرْقَاءُ" },
        { en: "Asfaru (أَصْفَرُ) / Safra'u (صَفْرَاءُ)", ur: "أَصْفَرُ / صَفْرَاءُ" },
        { en: "Aswadu / Sawda'u" }
      ],
      correct: 0
    }
  ]
};

async function seed() {
  console.log('🚀 Seeding Book 2 Questions: Part 2 (Lessons 11-16)...');
  try {
    for (const lecIdStr of Object.keys(questionsData)) {
      const lecId = parseInt(lecIdStr);
      const questions = questionsData[lecId];

      const quizRes = await sql`
        SELECT q.id FROM quizzes q
        JOIN lectures l ON q.lecture_id = l.id
        WHERE l.course_id = 2 AND l.order_index = ${lecId} AND q.version = '1'
        LIMIT 1
      `;

      if (quizRes.length === 0) {
        console.warn(`⚠️ No quiz found for Book 2 Lecture Index ${lecId} — skipping.`);
        continue;
      }

      const quizId = quizRes[0].id;
      console.log(`Inserting into Quiz ID ${quizId} for Lecture Index ${lecId}...`);

      await sql`DELETE FROM questions WHERE quiz_id = ${quizId}`;

      let count = 0;
      for (const q of questions) {
        const indexed = q.options.map((opt, i) => ({ ...opt, origIdx: i }));
        for (let i = indexed.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
        }
        const shuffledOptions = indexed.map(({ en, ur }) => ({ en, ur }));
        const newCorrect = indexed.findIndex(opt => opt.origIdx === q.correct);

        await sql`
          INSERT INTO questions (quiz_id, question_en, question_ur, options, correct_option_index)
          VALUES (
            ${quizId},
            ${q.en},
            ${q.ur},
            ${JSON.stringify(shuffledOptions)},
            ${newCorrect}
          )
        `;
        count++;
      }
      console.log(`  ✅ Successfully seeded ${count} questions.`);
    }
    console.log('\n🎉 Finished Seeding Part 2!');
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

seed();
