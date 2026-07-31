import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

const questionsData = {
  17: [ // Lesson 17: نصب المضارع بـ أن، لام التعليل، منذ، يرى، يمكن، فصول السنة
    {
      en: "In 'li-ashtariya' (لِأَشْتَرِيَ), what effect does 'li' have on the present tense verb?",
      ur: "'لِأَشْتَرِيَ' میں 'لِـ' فعلِ مضارع پر کیا اثر ڈالتا ہے؟",
      options: [
        { en: "It gives purpose and makes the verb Mansub", ur: "یہ مقصد بتاتا ہے اور فعل کو منصوب کرتا ہے" },
        { en: "It makes the verb Majzum like 'lam'", ur: "یہ 'لَمْ' کی طرح فعل کو مجزوم کرتا ہے" },
        { en: "It changes the verb into past tense", ur: "یہ فعل کو ماضی بنا دیتا ہے" },
        { en: "It makes the following noun Marfu'" }
      ],
      correct: 0
    },
    {
      en: "What effect does the particle 'An' (أَنْ) have on a present tense verb?",
      ur: "حرفِ 'أَنْ' مضارع فعل پر داخل ہو کر کیا اعرابی اثر ڈالتا ہے؟",
      options: [
        { en: "It makes it Majzoom (Sukun)", ur: "وہ اسے مجزوم کرتا ہے" },
        { en: "It makes it Mansub (Fatha) (e.g. an adhhaba)", ur: "وہ اسے منصوب (فتحہ) کرتا ہے (جیسے أَنْ أَذْهَبَ)" },
        { en: "It keeps it Marfu'", ur: "وہ اسے مرفوع رکھتا ہے" },
        { en: "It turns it into past tense" }
      ],
      correct: 1
    },
    {
      en: "What is the meaning and grammatical effect of 'Lam al-Ta'leel' (لَامُ التَّعْلِيلِ - Lam of purpose)?",
      ur: "'لام تعلیل' کا کیا مطلب ہے اور یہ مضارع پر کیا اثر ڈالتا ہے؟",
      options: [
        { en: "It means 'Because of' and makes the verb Majzoom", ur: "اس کا مطلب 'وجہ' ہے" },
        { en: "It means 'So that / In order to' and makes the verb Mansub (e.g. li-adhhaba)", ur: "اس کا مطلب 'تاکہ / اس لیے کہ' ہے اور یہ فعل کو منصوب کرتا ہے (جیسے لِيَذْهَبَ)" },
        { en: "It means 'Indeed' and makes the verb Marfu'", ur: "اس کا مطلب 'البتہ' ہے" },
        { en: "It has no effect" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I want to go to the market'",
      ur: "ترجمہ کریں: 'میں بازار جانا چاہتا ہوں'",
      options: [
        { en: "Ureedu an adhhaba ila al-suqi", ur: "أُرِيدُ أَنْ أَذْهَبَ إِلَى السُّوقِ" },
        { en: "Ureedu an adhhaby ila al-suqi", ur: "أُرِيدُ أَنْ أَذْهَبُ إِلَى السُّوقِ" },
        { en: "Ureedu li-adhhaba ila al-suqi", ur: "أُرِيدُ لِأَذْهَبَ إِلَى السُّوقِ" },
        { en: "Ureedu adhhaba ila al-suqi" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'We sat in the library in order to read'",
      ur: "ترجمہ کریں: 'ہم لائبریری میں بیٹھے تاکہ پڑھیں'",
      options: [
        { en: "Jalasna fil maktabati li-naqra'a", ur: "جَلَسْنَا فِي الْمَكْتَبَةِ لِنَقْرَأَ" },
        { en: "Jalasna fil maktabati li-naqra'u", ur: "جَلَسْنَا فِي الْمَكْتَبَةِ لِنَقْرَأُ" },
        { en: "Jalasna fil maktabati an naqra'a", ur: "جَلَسْنَا فِي الْمَكْتَبَةِ أَنْ نَقْرَأَ" },
        { en: "Jalasna fil maktabati li-naqra'i" }
      ],
      correct: 0
    },
    {
      en: "What does the preposition 'Mundhu' (مُنْذُ) mean?",
      ur: "حرفِ جر 'مُنْذُ' کا کیا مطلب ہے؟",
      options: [
        { en: "Until", ur: "تک" },
        { en: "Since / For (referring to time)", ur: "سے / سے لے کر (وقت کے لیے)" },
        { en: "Behind", ur: "پیچھے" },
        { en: "Inside" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I haven't seen him since Friday'",
      ur: "ترجمہ کریں: 'میں نے اسے جمعہ کے دن سے نہیں دیکھا'",
      options: [
        { en: "Ma ra'aituhu mundhu yawmi al-jumu'ati", ur: "مَا رَأَيْتُهُ مُنْذُ يَوْمِ الْجُمُعَةِ" },
        { en: "La ra'aituhu mundhu yawmi al-jumu'ati", ur: "لَا رَأَيْتُهُ مُنْذُ يَوْمِ الْجُمُعَةِ" },
        { en: "Ma ra'aituhu ila yawmi al-jumu'ati", ur: "مَا رَأَيْتُهُ إِلَى يَوْمِ الْجُمُعَةِ" },
        { en: "Lam ra'aituhu mundhu yawmi al-jumu'ah" }
      ],
      correct: 0
    },
    {
      en: "What are the present tense forms of the verb of seeing 'Ra'aa' (رَأَى) for 'He sees' (Huwa) and 'You see' (Anta)?",
      ur: "'رَأَى' (دیکھنا) کا مضارع 'وہ دیکھتا ہے' اور 'تم دیکھتے ہو' کے لیے کیا ہے؟",
      options: [
        { en: "Yaraa (يَرَى) / Taraa (تَرَى)", ur: "يَرَى / تَرَى" },
        { en: "Yar'aa / Tar'aa", ur: "يَرْأَى / تَرْأَى" },
        { en: "Yuraa / Turaa", ur: "يُرَى / تُرَى" },
        { en: "Yash'ur / Tash'ur" }
      ],
      correct: 0
    },
    {
      en: "How do you say 'I see' (Ana) using the verb 'Ra'aa'?",
      ur: "'رَأَى' کا مضارع 'میں دیکھتا ہوں' کے لیے کیا ہے؟",
      options: [
        { en: "Araa (أَرَى)", ur: "أَرَى" },
        { en: "Taraa (تَرَى)", ur: "تَرَى" },
        { en: "Naraa (نَرَى)", ur: "نَرَى" },
        { en: "Raytuh" }
      ],
      correct: 0
    },
    {
      en: "What does 'Yumkinu' (يُمْكِنُ) mean?",
      ur: "'يُمْكِنُ' کا کیا مطلب ہے؟",
      options: [
        { en: "It is necessary", ur: "یہ ضروری ہے" },
        { en: "It is possible / Can", ur: "یہ ممکن ہے / ہو سکتا ہے" },
        { en: "It is forbidden", ur: "یہ حرام ہے" },
        { en: "It is difficult" }
      ],
      correct: 1
    },
    {
      en: "How do you say 'It is possible for you to enter' (You can enter)?",
      ur: "آپ کا داخل ہونا ممکن ہے (آپ داخل ہو سکتے ہیں) کا ترجمہ کیا ہوگا؟",
      options: [
        { en: "Yumkinu-ka an tadkhula (يُمْكِنُكَ أَنْ تَدْخُلَ)", ur: "يُمْكِنُكَ أَنْ تَدْخُلَ" },
        { en: "Yumkinu-ka an tadkhulu", ur: "يُمْكِنُكَ أَنْ تَدْخُلُ" },
        { en: "Yumkinu-ka udkhul", ur: "يُمْكِنُكَ ادْخُلْ" },
        { en: "Laka an tadkhul" }
      ],
      correct: 0
    },
    {
      en: "What does 'Al-Shita'u' (الشِّتَاءُ) mean?",
      ur: "'الشِّتَاءُ' کا کیا مطلب ہے؟",
      options: [
        { en: "Summer", ur: "گرمی کا موسم" },
        { en: "Winter (season)", ur: "سردی کا موسم (سرما)" },
        { en: "Spring", ur: "بہار کا موسم" },
        { en: "Autumn" }
      ],
      correct: 1
    },
    {
      en: "What does 'Al-Saifu' (الصَّيْفُ) mean?",
      ur: "'الصَّيْفُ' کا کیا مطلب ہے؟",
      options: [
        { en: "Winter", ur: "سرما" },
        { en: "Summer (season)", ur: "گرمی کا موسم (گرما)" },
        { en: "Autumn", ur: "خریف" },
        { en: "Spring" }
      ],
      correct: 1
    },
    {
      en: "What does 'Al-Rabi'u' (الرَّبِيعُ) mean?",
      ur: "'الرَّبِيعُ' کا کیا مطلب ہے؟",
      options: [
        { en: "Summer", ur: "گرما" },
        { en: "Spring (season)", ur: "بہار کا موسم" },
        { en: "Autumn", ur: "خریف" },
        { en: "Winter" }
      ],
      correct: 1
    },
    {
      en: "What does 'Al-Khareefu' (الْخَرِيفُ) mean?",
      ur: "'الْخَرِيفُ' کا کیا مطلب ہے؟",
      options: [
        { en: "Spring", ur: "بہار" },
        { en: "Autumn (season)", ur: "خریف / پت جھڑ" },
        { en: "Winter", ur: "سرما" },
        { en: "Summer" }
      ],
      correct: 1
    }
  ],
  18: [ // Lesson 18: حذف النون للنصب، بناء المضارع مع نون النسوة، كاف التشبيه
    {
      en: "What happens to 'The Five Verbs' (Al-Af'aal al-Khamsah) in the subjunctive (Mansub) case?",
      ur: "حالتِ نصب میں 'افعالِ خمسہ' کے اعراب میں کیا تبدیلی آتی ہے؟",
      options: [
        { en: "They get a Fatha at the end", ur: "ان کے آخر میں فتحہ آتا ہے" },
        { en: "The final letter 'Noon' is dropped (e.g. an tadhaboo)", ur: "آخر کا حرفِ نون حذف ہو جاتا ہے (جیسے أَنْ تَذْهَبُوا)" },
        { en: "They remain unchanged", ur: "ان میں کوئی تبدیلی نہیں آتی" },
        { en: "They are replaced by past verbs" }
      ],
      correct: 1
    },
    {
      en: "What is the subjunctive form of 'Tadhaboona' (تَذْهَبُونَ) after 'An'?",
      ur: "'أَنْ' کے بعد 'تَذْهَبُونَ' کی منصوب شکل کیا ہوگی؟",
      options: [
        { en: "An tadhaboona", ur: "أَنْ تَذْهَبُونَ" },
        { en: "An tadhaboo (أَنْ تَذْهَبُوا - dropping Noon, adding silent Alif)", ur: "أَنْ تَذْهَبُوا" },
        { en: "An tadhabna", ur: "أَنْ تَذْهَبْنَ" },
        { en: "An tadhaban" }
      ],
      correct: 1
    },
    {
      en: "What is the subjunctive form of 'Tadhabeena' (تَذْهَبِينَ) after 'An'?",
      ur: "'أَنْ' کے بعد 'تَذْهَبِينَ' کی منصوب شکل کیا ہوگی؟",
      options: [
        { en: "An tadhabeena", ur: "أَنْ تَذْهَبِينَ" },
        { en: "An tadhabee (أَنْ تَذْهَبِي - dropping Noon)", ur: "أَنْ تَذْهَبِي" },
        { en: "An tadhabna", ur: "أَنْ تَذْهَبْنَ" },
        { en: "An tadhabu" }
      ],
      correct: 1
    },
    {
      en: "Do present tense verbs conjugated for plural feminine (like yadhabna, tadhabna) drop their Noon in subjunctive case?",
      ur: "کیا جمع مؤنث مضارع کے افعال (جیسے يَذْهَبْنَ، تَذْهَبْنَ) منصوب ہونے کی صورت میں اپنا نون گراتے ہیں؟",
      options: [
        { en: "Yes, they drop the Noon", ur: "جی ہاں، وہ نون گراتے ہیں" },
        { en: "No, they are Mabni (unchangeable) (e.g. an tadhabna)", ur: "جی نہیں، وہ مبنی بر سکون ہیں اس لیے کوئی تبدیلی نہیں ہوتی" },
        { en: "They get a Kasra", ur: "ان پر کسرہ آتا ہے" },
        { en: "They change to masculine plural" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'They (men) want to leave'",
      ur: "ترجمہ کریں: 'وہ سب (مرد) نکلنا چاہتے ہیں'",
      options: [
        { en: "Yureedoona an yakhrujoona", ur: "يُرِيدُونَ أَنْ يَخْرُجُونَ" },
        { en: "Yureedoona an yakhrujoo (يُرِيدُونَ أَنْ يَخْرُجُوا)", ur: "يُرِيدُونَ أَنْ يَخْرُجُوا" },
        { en: "Yureedna an yakhrujna", ur: "يُرِدْنَ أَنْ يَخْرُجْنَ" },
        { en: "Yureedoona li-yakhrujoo" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'They (women) want to leave'",
      ur: "ترجمہ کریں: 'وہ سب (مؤنث) نکلنا چاہتی ہیں'",
      options: [
        { en: "Yureedoona an yakhrujoo", ur: "يُرِيدُونَ أَنْ يَخْرُجُوا" },
        { en: "Yureedna an yakhrujna (يُرِدْنَ أَنْ يَخْرُجْنَ)", ur: "يُرِدْنَ أَنْ يَخْرُجْنَ" },
        { en: "Yureedna an yakhrujoo", ur: "يُرِدْنَ أَنْ يَخْرُجُوا" },
        { en: "Tureedna an yakhrujna" }
      ],
      correct: 1
    },
    {
      en: "What does the particle 'Kaf' (كَـ) of comparison mean and do?",
      ur: "تشبیہ کا حرف 'كَـ' کیا معنی رکھتا ہے اور اس کا کیا نحوی اثر ہے؟",
      options: [
        { en: "It means 'Like / As' and acts as a preposition (next noun is Majrur)", ur: "اس کا مطلب 'کی طرح / مانند' ہے اور یہ حرفِ جر ہے (اگلا اسم مجرور ہوتا ہے)" },
        { en: "It means 'Because' and makes next noun Mansub", ur: "اس کا مطلب 'کیونکہ' ہے" },
        { en: "It means 'Perhaps'", ur: "اس کا مطلب 'شاید' ہے" },
        { en: "It has no grammatical effect" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'Like a star'",
      ur: "ترجمہ کریں: 'ایک ستارے کی مانند / ستارے کی طرح'",
      options: [
        { en: "Ka-najmin (كَأَنَّ نَجْمٍ)", ur: "كَأَنَّ نَجْمٍ" },
        { en: "Ka-najmin (كَنَجْمٍ)", ur: "كَنَجْمٍ" },
        { en: "Ka-najman", ur: "كَنَجْمًا" },
        { en: "Ka-najmun" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'This library is like a masjid'",
      ur: "ترجمہ کریں: 'یہ لائبریری مسجد کی طرح ہے'",
      options: [
        { en: "Hazihi al-maktabatu ka-masjidin", ur: "هٰذِهِ الْمَكْتَبَةُ كَمَسْجِدٍ" },
        { en: "Hazihi al-maktabatu ka-masjidun", ur: "هٰذِهِ الْمَكْتَبَةُ كَمَسْجِدٌ" },
        { en: "Haza al-maktabatu ka-masjidin", ur: "هٰذَا الْمَكْتَبَةُ كَمَسْجِدٍ" },
        { en: "Hazihi al-maktabatu ka-masjidan" }
      ],
      correct: 0
    },
    {
      en: "In Exercise 3, translate: 'He stands like a teacher'",
      ur: "مشق 3 کے مطابق، ترجمہ کریں: 'وہ استاد کی طرح کھڑا ہوتا ہے'",
      options: [
        { en: "Yaqifu ka-mudarrisin", ur: "يَقِفُ كَمُدَرِّسٍ" },
        { en: "Yaqifu ka-mudarrisu", ur: "يَقِفُ كَمُدَرِّسُ" },
        { en: "Yaqifu ka-mudarrisen", ur: "يَقِفُ كَمُدَرِّسٍ" },
        { en: "Yajlisu ka-mudarrisin" }
      ],
      correct: 0
    },
    {
      en: "What does 'Baqiya' (بَقِيَ) mean?",
      ur: "'بَقِيَ' کا کیا مطلب ہے؟",
      options: [
        { en: "He left", ur: "وہ چلا گیا" },
        { en: "He remained / Stayed", ur: "وہ باقی رہا / ٹھہرا" },
        { en: "He returned", ur: "وہ واپس آیا" },
        { en: "He died" }
      ],
      correct: 1
    },
    {
      en: "What is the past tense verb 'Sami'a' (heard) for 'Antum'?",
      ur: "'أَنْتُمْ' کے لیے 'سَمِعَ' کا ماضی کا صیغہ کیا ہوگا؟",
      options: [
        { en: "Sami'tum (سَمِعْتُمْ)", ur: "سَمِعْتُمْ" },
        { en: "Sami'tuma (سَمِعْتُمَا)", ur: "سَمِعْتُمَا" },
        { en: "Sami'na (سَمِعْنَا)", ur: "سَمِعْنَا" },
        { en: "Sami'oo" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'I wanted to ask you (masculine plural)'",
      ur: "ترجمہ کریں: 'میں تم سب سے پوچھنا چاہتا تھا'",
      options: [
        { en: "Aradtu an as'ala-kum", ur: "أَرَدْتُ أَنْ أَسْأَلَكُمْ" },
        { en: "Aradtu an as'alu-kum", ur: "أَرَدْتُ أَنْ أَسْأَلُكُمْ" },
        { en: "Ureedu an as'ala-kum", ur: "أُرِيدُ أَنْ أَسْأَلَكُمْ" },
        { en: "Aradtu li-as'ala-kum" }
      ],
      correct: 0
    },
    {
      en: "What is the present tense verb 'Bakaa' (wept) for 'Huwa'?",
      ur: "'هُوَ' کے لیے 'بَكَى' (رونا) کا مضارع کیا ہے؟",
      options: [
        { en: "Yabkee (يَبْكِي)", ur: "يَبْكِي" },
        { en: "Tabkee (تَبْكِي)", ur: "تَبْكِي" },
        { en: "Abkee (أَبْكِي)", ur: "أَبْكِي" },
        { en: "Yabkoona" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'The baby (masculine) is weeping'",
      ur: "ترجمہ کریں: 'بچہ رو رہا ہے'",
      options: [
        { en: "Yabkee al-tiflu", ur: "يَبْكِي الطِّفْلُ" },
        { en: "Tabkee al-tiflu", ur: "تَبْكِي الطِّفْلُ" },
        { en: "Yabkee al-tifla", ur: "يَبْكِي الطِّفْلَ" },
        { en: "Baka al-tiflu" }
      ],
      correct: 0
    }
  ],
  19: [ // Lesson 19: نصب المضارع بـ لن، نفي الماضي والحال والمستقبل
    {
      en: "What does the particle 'Lan' (لَنْ) mean and do?",
      ur: "حرفِ 'لَنْ' کا کیا مطلب ہے اور یہ مضارع پر کیا اثر ڈالتا ہے؟",
      options: [
        { en: "It means 'Never' (for future negation) and makes the verb Mansub", ur: "یہ مستقبل کی نفی 'ہرگز نہیں' کے لیے آتا ہے اور فعل کو منصوب کرتا ہے" },
        { en: "It means 'Did not' and makes the verb Majzoom", ur: "اس کا مطلب 'نہیں کیا' ہے اور یہ مجزوم کرتا ہے" },
        { en: "It means 'No' and keeps the verb Marfu'", ur: "یہ لا جیسا کام کرتا ہے" },
        { en: "It has no grammatical effect" }
      ],
      correct: 0
    },
    {
      en: "What is the subjunctive form of 'Yadhabu' after 'Lan'?",
      ur: "'لَنْ' کے بعد 'يَذْهَبُ' کی منصوب شکل کیا ہوگی؟",
      options: [
        { en: "Lan yadhabu", ur: "لَنْ يَذْهَبُ" },
        { en: "Lan yadhaba (لَنْ يَذْهَبَ - He will never go)", ur: "لَنْ يَذْهَبَ" },
        { en: "Lan yadhab", ur: "لَنْ يَذْهَبْ" },
        { en: "Lan yadhaban" }
      ],
      correct: 1
    },
    {
      en: "What is the subjunctive form of 'Yadhaboona' (يَذْهَبُونَ) after 'Lan'?",
      ur: "'لَنْ' کے بعد 'يَذْهَبُونَ' کی منصوب شکل کیا ہوگی؟",
      options: [
        { en: "Lan yadhaboona", ur: "لَنْ يَذْهَبُونَ" },
        { en: "Lan yadhaboo (لَنْ يَذْهَبُوا - dropping Noon)", ur: "لَنْ يَذْهَبُوا" },
        { en: "Lan yadhabna", ur: "لَنْ يَذْهَبْنَ" },
        { en: "Lan yadhabu" }
      ],
      correct: 1
    },
    {
      en: "What particle is used to negate past tense actions?",
      ur: "ماضی کی نفی کے لیے کون سا حرف استعمال کیا جاتا ہے؟",
      options: [
        { en: "La (لَا)", ur: "لَا" },
        { en: "Maa (مَا) - e.g. maa dhahabtu", ur: "مَا (جیسے مَا ذَهَبْتُ)" },
        { en: "Lan (لَنْ)", ur: "لَنْ" },
        { en: "Lam (لَمْ)" }
      ],
      correct: 1
    },
    {
      en: "What particle is used to negate actions in the present (current moment)?",
      ur: "موجودہ لمحے (حال) کی نفی کے لیے کون سا حرف استعمال کیا جاتا ہے؟",
      options: [
        { en: "Maa (مَا) - e.g. maa ashrabu al-aana", ur: "مَا (جیسے مَا أَشْرَبُ الْآنَ)" },
        { en: "La (لَا)", ur: "لَا" },
        { en: "Lan (لَنْ)", ur: "لَنْ" },
        { en: "Lam (لَمْ)" }
      ],
      correct: 0
    },
    {
      en: "What particle is used to negate general/habitual present actions?",
      ur: "عام عادت یا مستقل مضارع کی نفی کے لیے کون سا حرف استعمال کیا جاتا ہے؟",
      options: [
        { en: "Maa (مَا)", ur: "مَا" },
        { en: "La (لَا) - e.g. laa ashrabu al-qahwata (I don't drink coffee)", ur: "لَا (جیسے لَا أَشْرَبُ الْقَهْوَةَ)" },
        { en: "Lan (لَنْ)", ur: "لَنْ" },
        { en: "Lam (لَمْ)" }
      ],
      correct: 1
    },
    {
      en: "What particle is used to negate actions in the future with emphasis (never)?",
      ur: "مستقبل میں زوردار نفی (ہرگز نہیں) کے لیے کون سا حرف آتا ہے؟",
      options: [
        { en: "La (لَا)", ur: "لَا" },
        { en: "Lan (لَنْ) - e.g. lan adhhaba (I will never go)", ur: "لَنْ (جیسے لَنْ أَذْهَبَ)" },
        { en: "Maa (مَا)", ur: "مَا" },
        { en: "Lam (لَمْ)" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I will never enter this house'",
      ur: "ترجمہ کریں: 'میں اس گھر میں ہرگز داخل نہیں ہوں گا'",
      options: [
        { en: "La adkhulu hadha al-baita", ur: "لَا أَدْخُلُ هٰذَا الْبَيْتَ" },
        { en: "Lan adkhula hadha al-baita (لَنْ أَدْخُلَ هٰذَا الْبَيْتَ)", ur: "لَنْ أَدْخُلَ هٰذَا الْبَيْتَ" },
        { en: "Ma dakhaltu hadha al-baita", ur: "مَا دَخَلْتُ هٰذَا الْبَيْتَ" },
        { en: "Lan adkhul hadha al-baita" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I do not drink tea now' (negating the current moment)",
      ur: "ترجمہ کریں: 'میں ابھی چائے نہیں پی رہا ہوں'",
      options: [
        { en: "La ashrabu al-shaya al-aana", ur: "لَا أَشْرَبُ الشَّايَ الْآنَ" },
        { en: "Maa ashrabu al-shaya al-aana (مَا أَشْرَبُ الشَّايَ الْآنَ)", ur: "مَا أَشْرَبُ الشَّايَ الْآنَ" },
        { en: "Lan ashraba al-shaya al-aana", ur: "لَنْ أَشْرَبَ الشَّايَ الْآنَ" },
        { en: "Lam ashrab al-shaya al-aana" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I do not eat fish' (habitual statement)",
      ur: "ترجمہ کریں: 'میں مچھلی نہیں کھاتا ہوں' (عام عادت)",
      options: [
        { en: "Ma akulu al-samaka", ur: "مَا أَكُلُ السَّمَكَ" },
        { en: "La akulu al-samaka (لَا أَكُلُ السَّمَكَ)", ur: "لَا أَكُلُ السَّمَكَ" },
        { en: "Lan akula al-samaka", ur: "لَنْ أَكُلَ السَّمَكَ" },
        { en: "Lam akul al-samaka" }
      ],
      correct: 1
    },
    {
      en: "What does 'Al-Baarihata' (الْبَارِحَةَ) mean?",
      ur: "'الْبَارِحَةَ' کا کیا مطلب ہے؟",
      options: [
        { en: "Tomorrow", ur: "کل (آنے والا)" },
        { en: "Yesterday / Last night", ur: "گزشتہ روز / گزشتہ رات" },
        { en: "Today", ur: "آج" },
        { en: "Day before yesterday" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I did not go to school yesterday'",
      ur: "ترجمہ کریں: 'میں کل اسکول نہیں گیا'",
      options: [
        { en: "La adhabu ilal madrasati amsi", ur: "لَا أَذْهَبُ إِلَى الْمَدْرَسَةِ أَمْسِ" },
        { en: "Maa dhahabtu ilal madrasati amsi (مَا ذَهَبْتُ إِلَى الْمَدْرَسَةِ أَمْسِ)", ur: "مَا ذَهَبْتُ إِلَى الْمَدْرَسَةِ أَمْسِ" },
        { en: "Lan adhhaba ilal madrasati amsi", ur: "لَنْ أَذْهَبَ إِلَى الْمَدْرَسَةِ أَمْسِ" },
        { en: "Ma dhahabtu ilal madrasati al-baarihata" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'We will never play with him'",
      ur: "ترجمہ کریں: 'ہم اس کے ساتھ ہرگز نہیں کھیلیں گے'",
      options: [
        { en: "La nal'abu ma'ahu", ur: "لَا نَلْعَبُ مَعَهُ" },
        { en: "Lan nal'aba ma'ahu (لَنْ نَلْعَبَ مَعَهُ)", ur: "لَنْ نَلْعَبَ مَعَهُ" },
        { en: "Maa la'ibna ma'ahu", ur: "مَا لَعِبْنَا مَعَهُ" },
        { en: "Lan nal'ab ma'ahu" }
      ],
      correct: 1
    },
    {
      en: "What is the subjunctive form of 'Tadhabna' (You all, feminine) after 'Lan'?",
      ur: "'لَنْ' کے بعد 'تَذْهَبْنَ' کی منصوب شکل کیا ہوگی؟",
      options: [
        { en: "Lan tadhabna (unchanged due to being Mabni)", ur: "لَنْ تَذْهَبْنَ (مبنی ہونے کی وجہ سے کوئی تبدیلی نہیں)" },
        { en: "Lan tadhabee", ur: "لَنْ تَذْهَبِي" },
        { en: "Lan tadhaboo", ur: "لَنْ تَذْهَبُوا" },
        { en: "Lan tadhaban" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'The girls will never play'",
      ur: "ترجمہ کریں: 'لڑکیاں ہرگز نہیں کھیلیں گی'",
      options: [
        { en: "Lan tal'aba al-banaatu", ur: "لَنْ تَلْعَبَ الْبَنَاتُ" },
        { en: "Lan tal'abna al-banaatu", ur: "لَنْ تَلْعَبْنَ الْبَنَاتُ" },
        { en: "Al-banaatu lan yal'abna (الْبَنَاتُ لَنْ يَلْعَبْنَ)", ur: "الْبَنَاتُ لَنْ يَلْعَبْنَ" },
        { en: "Both 'Lan tal'aba al-banaatu' and 'Al-banaatu lan yal'abna' are correct", ur: "پہلا اور تیسرا دونوں درست ہیں" }
      ],
      correct: 3
    }
  ],
  20: [ // Lesson 20: إعراب المثنى، أحدهما والآخر
    {
      en: "What suffix represents a dual noun (Muthanna) in the nominative (Marfu') case?",
      ur: "حالتِ رفع میں تثنیہ (dual) اسم کی علامت کیا ہوتی ہے؟",
      options: [
        { en: "-ayni (ـيْنِ)", ur: "ـيْنِ" },
        { en: "-aani (ـانِ) - e.g. kitaabaani", ur: "ـانِ (جیسے كِتَابَانِ)" },
        { en: "-oona (ـونَ)", ur: "ـونَ" },
        { en: "-aat" }
      ],
      correct: 1
    },
    {
      en: "What suffix represents a dual noun in the accusative (Mansub) and genitive (Majrur) cases?",
      ur: "حالتِ نصب اور حالتِ جر میں تثنیہ اسم کی علامت کیا ہوتی ہے؟",
      options: [
        { en: "-aani (ـانِ)", ur: "ـانِ" },
        { en: "-ayni (ـيْنِ) - e.g. kitaabayni", ur: "ـيْنِ (جیسے كِتَابَيْنِ)" },
        { en: "-eena (ـيْنَ)", ur: "ـيْنَ" },
        { en: "-aat" }
      ],
      correct: 1
    },
    {
      en: "In 'Katabtu bi-qalamayni' (كَتَبْتُ بِقَلَمَيْنِ), what case is 'qalamayni'?",
      ur: "'كَتَبْتُ بِقَلَمَيْنِ' میں 'قَلَمَيْنِ' کس حالت میں ہے؟",
      options: [
        { en: "Marfu'", ur: "مرفوع" },
        { en: "Majrur (due to preposition bi-)", ur: "مجرور (حرفِ جر بِـ کی وجہ سے)" },
        { en: "Mansub", ur: "منصوب" },
        { en: "Mabni" }
      ],
      correct: 1
    },
    {
      en: "In 'Ra'aitu tabibayni' (رَأَيْتُ طَبِيبَيْنِ), what case is 'tabibayni'?",
      ur: "'رَأَيْتُ طَبِيبَيْنِ' میں 'طَبِيبَيْنِ' کس حالت میں ہے؟",
      options: [
        { en: "Marfu'", ur: "مرفوع" },
        { en: "Mansub (acting as object/Maf'ul)", ur: "منصوب (بطور مفعول بہ)" },
        { en: "Majrur", ur: "مجرور" },
        { en: "Jazm" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I bought two books'",
      ur: "ترجمہ کریں: 'میں نے دو کتابیں خریدیں'",
      options: [
        { en: "Ishtaraitu kitaabaani", ur: "اشْتَرَيْتُ كِتَابَانِ" },
        { en: "Ishtaraitu kitaabayni (اشْتَرَيْتُ كِتَابَيْنِ)", ur: "اشْتَرَيْتُ كِتَابَيْنِ" },
        { en: "Ishtaraitu kutubayn", ur: "اشْتَرَيْتُ كُتُبَيْنِ" },
        { en: "Kitaabaani ishtaraitu" }
      ],
      correct: 1
    },
    {
      en: "What does 'Ahaduhuma... wal-aakharu' mean?",
      ur: "'أَحَدُهُمَا ... وَالْآخَرُ' کا کیا مطلب ہے؟",
      options: [
        { en: "Both of them are here", ur: "وہ دونوں یہاں ہیں" },
        { en: "One of them... and the other... (for masculine dual)", ur: "ان دونوں میں سے ایک ... اور دوسرا ... (مذکر کے لیے)" },
        { en: "One of them... and the other... (for feminine dual)", ur: "ان دونوں میں سے ایک ... اور دوسرا ... (مؤنث کے لیے)" },
        { en: "None of them" }
      ],
      correct: 1
    },
    {
      en: "What is the feminine form of 'Ahaduhuma... wal-aakharu'?",
      ur: "'أَحَدُهُمَا ... وَالْآخَرُ' کی مؤنث شکل کیا ہے؟",
      options: [
        { en: "Ihdahuma... wal-ukhraa (إِحْدَاهُمَا ... وَالْأُخْرَى)", ur: "إِحْدَاهُمَا ... وَالْأُخْرَى" },
        { en: "Ahaduhuma... wal-ukhra", ur: "أَحَدُهُمَا ... وَالْأُخْرَى" },
        { en: "Ihdahuma... wal-aakharu", ur: "إِحْدَاهُمَا ... وَالْآخَرُ" },
        { en: "None" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'I have two brothers; one of them is a teacher and the other is an engineer'",
      ur: "ترجمہ کریں: 'میرے دو بھائی ہیں؛ ان میں سے ایک استاد ہے اور دوسرا انجینئر ہے'",
      options: [
        { en: "Lii akhawaani, ahaduhuma mudarrisun wal-aakharu muhandisun", ur: "لِي أَخَوَانِ، أَحَدُهُمَا مُدَرِّسٌ وَالْآخَرُ مُهَنْدِسٌ" },
        { en: "Lii akhawaani, ihdahuma mudarrisun wal-ukhra muhandisun", ur: "لِي أَخَوَانِ، إِحْدَاهُمَا مُدَرِّسٌ وَالْأُخْرَى مُهَنْدِسٌ" },
        { en: "Lii akhawayni, ahaduhuma mudarrisun wal-aakharu muhandisun", ur: "لِي أَخَوَينِ، أَحَدُهُمَا مُدَرِّسٌ وَالْآخَرُ مُهَنْدِسٌ" },
        { en: "Lii akhawaani, ahaduhuma mudarrisan wal-aakharu muhandisan" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'I have two cars; one of them is red and the other is green'",
      ur: "ترجمہ کریں: 'میری دو گاڑیاں ہیں؛ ان میں سے ایک سرخ ہے اور دوسری سبز ہے'",
      options: [
        { en: "Lii sayyaarataani, ahaduhuma hamra'u wal-aakharu khadra'u", ur: "لِي سَيَّارَتَانِ، أَحَدُهُمَا حَمْرَاءُ وَالْآخَرُ خَضْرَاءُ" },
        { en: "Lii sayyaarataani, ihdahuma hamra'u wal-ukhraa khadra'u", ur: "لِي سَيَّارَتَانِ، إِحْدَاهُمَا حَمْرَاءُ وَالْأُخْرَى خَضْرَاءُ" },
        { en: "Lii sayyaaratayni, ihdahuma hamra'u wal-ukhra khadra'u", ur: "لِي سَيَّارَتَيْنِ، إِحْدَاهُمَا حَمْرَاءُ وَالْأُخْرَى خَضْرَاءُ" },
        { en: "Lii sayyaarataan, ihdahuma ahmaru wal-ukhra akhdaru" }
      ],
      correct: 1
    },
    {
      en: "What is the dual form of 'Yadun' (يَدٌ - hand) in the nominative case?",
      ur: "'یَدٌ' (ہاتھ) کی حالتِ رفع میں تثنیہ کیا ہوگی؟",
      options: [
        { en: "Yadaani (يَدَانِ)", ur: "يَدَانِ" },
        { en: "Yadayni (يَدَيْنِ)", ur: "يَدَيْنِ" },
        { en: "Aydin (أَيْدٍ)", ur: "أَيْدٍ" },
        { en: "Yadataani" }
      ],
      correct: 0
    },
    {
      en: "What is the dual form of 'Yadun' (يَدٌ) in the genitive/accusative case?",
      ur: "'یَدٌ' کی حالتِ جر/نصب میں تثنیہ کیا ہوگی؟",
      options: [
        { en: "Yadaani (يَدَانِ)", ur: "يَدَانِ" },
        { en: "Yadayni (يَدَيْنِ)", ur: "يَدَيْنِ" },
        { en: "Aydin (أَيْدٍ)", ur: "أَيْدٍ" },
        { en: "Yadataani" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'He wrote with his two hands'",
      ur: "ترجمہ کریں: 'اس نے اپنے دونوں ہاتھوں سے لکھا'",
      options: [
        { en: "Kataba bi-yadayhi (بِيَدَيْهِ - dropping Noon of dual because of possessive pronoun)", ur: "كَتَبَ بِيَدَيْهِ (مضاف ہونے کی وجہ سے نونِ تثنیہ گر گیا)" },
        { en: "Kataba bi-yadaynihi", ur: "كَتَبَ بِيَدَيْنِهِ" },
        { en: "Kataba bi-yadahu", ur: "كَتَبَ بِيَدَهُ" },
        { en: "Kataba bi-yadaahu" }
      ],
      correct: 0
    },
    {
      en: "When a dual noun acts as a Mudaaf (possessor), what happens to its final Noon?",
      ur: "جب تثنیہ اسم مضاف بنتا ہے تو اس کے آخری نون کا کیا ہوتا ہے؟",
      options: [
        { en: "It stays", ur: "وہ قائم رہتا ہے" },
        { en: "It is dropped (e.g. yadaa yaasirin - the two hands of Yasir)", ur: "وہ گر جاتا ہے (جیسے يَدَا يَاسِرٍ)" },
        { en: "It turns into Fatha", ur: "وہ فتحہ بن جاتا ہے" },
        { en: "It turns into Waw" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'The two doors of the school are open'",
      ur: "ترجمہ کریں: 'اسکول کے دونوں دروازے کھلے ہیں'",
      options: [
        { en: "Babaani al-madrasati maftoohani", ur: "بَابَانِ الْمَدْرَسَةِ مَفْتُوحَانِ" },
        { en: "Babaa al-madrasati maftoohaani (بَابَا الْمَدْرَسَةِ مَفْتُوحَانِ - dropping Noon of dual)", ur: "بَابَا الْمَدْرَسَةِ مَفْتُوحَانِ" },
        { en: "Babay al-madrasati maftoohani", ur: "بَابَيْ الْمَدْرَسَةِ مَفْتُوحَانِ" },
        { en: "Abwabu al-madrasati maftoohah" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I saw the two doors of the school'",
      ur: "ترجمہ کریں: 'میں نے اسکول کے دونوں دروازے دیکھے'",
      options: [
        { en: "Ra'aitu babaa al-madrasati", ur: "رَأَيْتُ بَابَا الْمَدْرَسَةِ" },
        { en: "Ra'aitu babay al-madrasati (رَأَيْتُ بَابَيْ الْمَدْرَسَةِ - dual in accusative acting as Mudaaf)", ur: "رَأَيْتُ بَابَيْ الْمَدْرَسَةِ" },
        { en: "Ra'aitu babayni al-madrasati", ur: "رَأَيْتُ بَابَيْنِ الْمَدْرَسَةِ" },
        { en: "Ra'aitu abwaba al-madrasah" }
      ],
      correct: 1
    }
  ]
};

async function seed() {
  console.log('🚀 Seeding Book 2 Questions: Part 3 (Lessons 11-20)...');
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
    console.log('\n🎉 Finished Seeding Part 3!');
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

seed();
