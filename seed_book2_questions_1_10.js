import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

const questionsData = {
  1: [ // Lesson 1: إن وأخواتها، ذو، مائة وألف
    {
      en: "In the phrase 'Innahu faslun kabeerun' (إِنَّهُ فَصْلٌ كَبِيرٌ), what is the attached pronoun 'hu' (هُ)?",
      ur: "'إِنَّهُ فَصْلٌ كَبِيرٌ' میں متصل ضمیر 'هُ' کا نحوی کردار کیا ہے؟",
      options: [
        { en: "It is Ismu Inna: an attached pronoun in the place of Nasb", ur: "یہ اسمِ اِنَّ ہے: متصل ضمیر محلِ نصب میں" },
        { en: "It is Khabaru Inna and must be Marfu'", ur: "یہ خبرِ اِنَّ ہے اور مرفوع ہونا چاہیے" },
        { en: "It is a Harf Jarr that makes the next noun Majrur", ur: "یہ حرفِ جر ہے جو اگلے اسم کو مجرور کرتا ہے" },
        { en: "It is a Na't describing 'faslun'", ur: "یہ 'فصلٌ' کی صفت ہے" }
      ],
      correct: 0
    },
    {
      en: "In 'Innahu faslun kabeerun' (إِنَّهُ فَصْلٌ كَبِيرٌ), why is 'faslun' (فَصْلٌ) Marfu'?",
      ur: "'إِنَّهُ فَصْلٌ كَبِيرٌ' میں 'فَصْلٌ' مرفوع کیوں ہے؟",
      options: [
        { en: "Because it is Khabaru Inna, and Khabaru Inna stays Marfu'", ur: "کیونکہ یہ خبرِ اِنَّ ہے، اور خبرِ اِنَّ مرفوع رہتی ہے" },
        { en: "Because it is Ismu Inna, and Ismu Inna is always Marfu'", ur: "کیونکہ یہ اسمِ اِنَّ ہے، اور اسمِ اِنَّ ہمیشہ مرفوع ہوتا ہے" },
        { en: "Because it comes after a Harf Jarr", ur: "کیونکہ یہ حرفِ جر کے بعد آیا ہے" },
        { en: "Because every noun after Inna becomes Majrur", ur: "کیونکہ اِنَّ کے بعد ہر اسم مجرور ہو جاتا ہے" }
      ],
      correct: 0
    },
    {
      en: "What happens to the Mubtada when 'Inna' (إِنَّ) enters the sentence?",
      ur: "جب 'اِنَّ' جملے پر داخل ہوتا ہے تو مبتدا کے اعراب میں کیا تبدیلی آتی ہے؟",
      options: [
        { en: "It remains Marfu'", ur: "وہ مرفوع ہی رہتا ہے" },
        { en: "It becomes Mansub (accusative case)", ur: "وہ منصوب (حالتِ نصب) بن جاتا ہے" },
        { en: "It becomes Majrur", ur: "وہ مجرور بن جاتا ہے" },
        { en: "It becomes Mabni", ur: "وہ مبنی بن جاتا ہے" }
      ],
      correct: 1
    },
    {
      en: "What is the Mubtada called after 'Inna' enters the sentence?",
      ur: "'اِنَّ' کے داخل ہونے کے بعد مبتدا کو کیا کہا جاتا ہے؟",
      options: [
        { en: "Ismu Inna (اِسْمُ إِنَّ)", ur: "اِسمِ اِنَّ" },
        { en: "Khabaru Inna (خَبَرُ إِنَّ)", ur: "خبرِ اِنَّ" },
        { en: "Fa'il (فاعل)", ur: "فاعل" },
        { en: "Mudaaf (مضاف)", ur: "مضاف" }
      ],
      correct: 0
    },
    {
      en: "In Exercise 1, how do you change 'Al-darsu sa'bun' using Inna?",
      ur: "مشق 1 کے مطابق، 'اَلدَّرْسُ صَعْبٌ' کو اِنَّ لگا کر کیسے تبدیل کریں گے؟",
      options: [
        { en: "Inna al-darsu sa'bun", ur: "إِنَّ الدَّرْسُ صَعْبٌ" },
        { en: "Inna al-darsa sa'bun", ur: "إِنَّ الدَّرْسَ صَعْبٌ" },
        { en: "Inna al-darsi sa'bin", ur: "إِنَّ الدَّرْسِ صَعْبٍ" },
        { en: "Inna al-darsan sa'ban", ur: "إِنَّ الدَّرْسًا صَعْبًا" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 2, what is 'Inna + Huwa' (إِنَّ + هُوَ)?",
      ur: "مشق 2 کے مطابق، 'اِنَّ + هُوَ' مل کر کیا بنتا ہے؟",
      options: [
        { en: "Innahu (إِنَّهُ)", ur: "إِنَّهُ" },
        { en: "Innahuwa (إِنَّهُوَ)", ur: "إِنَّهُوَ" },
        { en: "Innahum (إِنَّهُمْ)", ur: "إِنَّهُمْ" },
        { en: "Inni (إِنِّي)", ur: "إِنِّي" }
      ],
      correct: 0
    },
    {
      en: "What does the word 'Zuu' (ذُو) mean?",
      ur: "لفظ 'ذُو' کا کیا مطلب ہے؟",
      options: [
        { en: "Who / Which", ur: "جو / کون سا" },
        { en: "Possessor of / Having", ur: "والا / صاحبِ" },
        { en: "This (masculine)", ur: "یہ (مذکر)" },
        { en: "Not / None", ur: "نہیں" }
      ],
      correct: 1
    },
    {
      en: "What is the feminine form of 'Zuu' (ذُو)?",
      ur: "'ذُو' کی مؤنث شکل کیا ہے؟",
      options: [
        { en: "Zawaa (ذَوَا)", ur: "ذَوَا" },
        { en: "Zaatun (ذَاتُ)", ur: "ذَاتُ" },
        { en: "Zaati (ذَاتِ)", ur: "ذَاتِ" },
        { en: "Zuha (ذُوهَا)", ur: "ذُوهَا" }
      ],
      correct: 1
    },
    {
      en: "What is the plural form of 'Zuu' (ذُو) for masculine nouns?",
      ur: "مذکر کے لیے 'ذُو' کی جمع شکل کیا ہے؟",
      options: [
        { en: "Zuuna (ذُون)", ur: "ذُون" },
        { en: "Zawuu (ذَوُو)", ur: "ذَوُو" },
        { en: "Zawaat (ذَوَات)", ur: "ذَوَات" },
        { en: "Azuu (أَذْوُ)", ur: "أَذْوُ" }
      ],
      correct: 1
    },
    {
      en: "How does the noun following 'Zuu' (ذُو) behave grammatically?",
      ur: "'ذُو' کے بعد آنے والے اسم کا اعراب کیا ہوتا ہے؟",
      options: [
        { en: "It is Mansub", ur: "منصوب ہوتا ہے" },
        { en: "It is Majrur (since Zuu acts as Mudaaf)", ur: "مجرور ہوتا ہے کیونکہ ذو مضاف کا کام کرتا ہے" },
        { en: "It is Marfu'", ur: "مرفوع ہوتا ہے" },
        { en: "It remains unchanged", ur: "بے اعراب رہتا ہے" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Haza al-rajulu zuu maalin'",
      ur: "ترجمہ کریں: 'هٰذَا الرَّجُلُ ذُو مَالٍ'",
      options: [
        { en: "This man has knowledge", ur: "اس آدمی کے پاس علم ہے" },
        { en: "This man is rich (possessor of wealth)", ur: "یہ آدمی مال والا ہے / امیر ہے" },
        { en: "This man is poor", ur: "یہ آدمی غریب ہے" },
        { en: "That man is rich", ur: "وہ آدمی امیر ہے" }
      ],
      correct: 1
    },
    {
      en: "What is the rule for the counted noun (Ma'dood) after 'Miah' (مِائَة - 100) and 'Alf' (أَلْف - 1000)?",
      ur: "'مِائَة' (100) اور 'أَلْف' (1000) کے بعد معدود (گنی جانے والی چیز) کا قاعدہ کیا ہے؟",
      options: [
        { en: "Plural and Mansub", ur: "جمع اور منصوب" },
        { en: "Singular and Majrur", ur: "واحد اور مجرور" },
        { en: "Plural and Majrur", ur: "جمع اور مجرور" },
        { en: "Singular and Mansub", ur: "واحد اور منصوب" }
      ],
      correct: 1
    },
    {
      en: "Translate: '100 books'",
      ur: "ترجمہ کریں: '100 کتابیں'",
      options: [
        { en: "Miatu kutubin", ur: "مِائَةُ كُتُبٍ" },
        { en: "Miatu kitaabin", ur: "مِائَةُ كِتَابٍ" },
        { en: "Miatu kitaaban", ur: "مِائَةُ كِتَابًا" },
        { en: "Miatu al-kitaabi", ur: "مِائَةُ الْكِتَابِ" }
      ],
      correct: 1
    },
    {
      en: "Translate: '1000 men'",
      ur: "ترجمہ کریں: '1000 مرد'",
      options: [
        { en: "Alfu rijaalin", ur: "أَلْفُ رِجَالٍ" },
        { en: "Alfu rajulin", ur: "أَلْفُ رَجُلٍ" },
        { en: "Alfu rajulan", ur: "أَلْفُ رَجُلًا" },
        { en: "Alfu al-rajuli", ur: "أَلْفُ الرَّجُلِ" }
      ],
      correct: 1
    },
    {
      en: "What does 'Innama' (إِنَّمَا) mean and do?",
      ur: "'إِنَّمَا' کا کیا مطلب اور کام ہے؟",
      options: [
        { en: "It means 'Indeed' and acts like Inna", ur: "اس کا مطلب 'بے شک' ہے اور یہ ان جیسا کام کرتا ہے" },
        { en: "It means 'Only' and stops Inna from changing the Mubtada's state", ur: "اس کا مطلب 'صرف' ہے اور یہ مبتدا کو تبدیل ہونے سے روکتا ہے" },
        { en: "It means 'Perhaps'", ur: "اس کا مطلب 'شاید' ہے" },
        { en: "It makes the sentence negative", ur: "یہ جملے کو منفی بناتا ہے" }
      ],
      correct: 1
    }
  ],
  2: [ // Lesson 2: ليس
    {
      en: "In the sentence 'Laysa Haashimun bi-mudarrisin' (لَيْسَ هَاشِمٌ بِمُدَرِّسٍ), what is 'Haashimun' grammatically?",
      ur: "'لَيْسَ هَاشِمٌ بِمُدَرِّسٍ' میں 'هَاشِمٌ' نحوی اعتبار سے کیا ہے؟",
      options: [
        { en: "Ismu Laysa, so it remains Marfu'", ur: "اسمِ لَيْسَ ہے، اس لیے مرفوع ہے" },
        { en: "Khabaru Laysa, so it is Mansub", ur: "خبرِ لَيْسَ ہے، اس لیے منصوب ہے" },
        { en: "Majrur because it follows bi", ur: "مجرور ہے کیونکہ یہ بِ کے بعد آیا ہے" },
        { en: "Fa'il of a complete verb", ur: "فعلِ تام کا فاعل ہے" }
      ],
      correct: 0
    },
    {
      en: "When the Khabar of 'Laysa' is preceded by extra 'bi' (بِ), what case does it take in wording?",
      ur: "جب 'لَيْسَ' کی خبر پر زائد 'بِ' داخل ہو تو لفظاً اس کا اعراب کیا ہوتا ہے؟",
      options: [
        { en: "It becomes Majrur in wording, though it is Khabar Laysa in meaning", ur: "لفظاً مجرور ہوتا ہے، اگرچہ معنی میں خبرِ لَيْسَ ہے" },
        { en: "It must remain Marfu' with Dammah", ur: "اس پر ضمہ کے ساتھ مرفوع رہنا لازم ہے" },
        { en: "It becomes dual automatically", ur: "یہ خود بخود تثنیہ بن جاتا ہے" },
        { en: "It becomes Fa'il of Laysa", ur: "یہ لَيْسَ کا فاعل بن جاتا ہے" }
      ],
      correct: 0
    },
    {
      en: "What grammatical category does 'Laysa' (لَيْسَ) belong to?",
      ur: "'لَيْسَ' کا تعلق کس نحوی گروہ سے ہے؟",
      options: [
        { en: "Inna and its sisters", ur: "اِنَّ اور اس کی بہنیں" },
        { en: "Kana and its sisters (verbs of state)", ur: "کانَ اور اس کی بہنیں (افعالِ ناقصہ)" },
        { en: "Prepositions (Huroof Jarr)", ur: "حروفِ جر" },
        { en: "Adjectives", ur: "صفات" }
      ],
      correct: 1
    },
    {
      en: "What does 'Laysa' negate?",
      ur: "'لَيْسَ' کس قسم کے جملے کی نفی کرتا ہے؟",
      options: [
        { en: "Verbal sentence (Jumlah Fi'liyyah)", ur: "جملہ فعلیہ کی" },
        { en: "Nominal sentence (Jumlah Ismiyyah)", ur: "جملہ اسمیہ کی" },
        { en: "Commands", ur: "احکامات کی" },
        { en: "Future tense only", ur: "صرف مستقبل کی" }
      ],
      correct: 1
    },
    {
      en: "What prefix is usually attached to the Khabar of 'Laysa'?",
      ur: "'لَيْسَ' کی خبر پر عام طور پر کون سا سابقہ لگایا جاتا ہے؟",
      options: [
        { en: "Bi- (بِـ) which makes it Majrur", ur: "بِـ (حرفِ جر)" },
        { en: "Al- (الـ)", ur: "الـ" },
        { en: "Ka- (كَـ)", ur: "كَـ" },
        { en: "Li- (لِـ)", ur: "لِـ" }
      ],
      correct: 0
    },
    {
      en: "How do you conjugate Laysa for 'Huwa' (He)?",
      ur: "'هُوَ' کے لیے لیس کی گردان کیا ہے؟",
      options: [
        { en: "Laysat (لَيْسَتْ)", ur: "لَيْسَتْ" },
        { en: "Laysa (لَيْسَ)", ur: "لَيْسَ" },
        { en: "Lasta (لَسْتَ)", ur: "لَسْتَ" },
        { en: "Lastu (لَسْتُ)", ur: "لَسْتُ" }
      ],
      correct: 1
    },
    {
      en: "How do you conjugate Laysa for 'Hiya' (She)?",
      ur: "'هِيَ' کے لیے لیس کی گردان کیا ہے؟",
      options: [
        { en: "Laysa (لَيْسَ)", ur: "لَيْسَ" },
        { en: "Laysat (لَيْسَتْ)", ur: "لَيْسَتْ" },
        { en: "Lasta (لَسْتَ)", ur: "لَسْتَ" },
        { en: "Lastun (لَسْتُنَّ)", ur: "لَسْتُنَّ" }
      ],
      correct: 1
    },
    {
      en: "How do you conjugate Laysa for 'Anta' (You, m)?",
      ur: "'أَنْتَ' کے لیے لیس کی گردان کیا ہے؟",
      options: [
        { en: "Lasta (لَسْتَ)", ur: "لَسْتَ" },
        { en: "Laysa (لَيْسَ)", ur: "لَيْسَ" },
        { en: "Lasti (لَسْتِ)", ur: "لَسْتِ" },
        { en: "Lastu (لَسْتُ)", ur: "لَسْتُ" }
      ],
      correct: 0
    },
    {
      en: "How do you conjugate Laysa for 'Ana' (I)?",
      ur: "'أَنَا' کے لیے لیس کی گردان کیا ہے؟",
      options: [
        { en: "Lasta (لَسْتَ)", ur: "لَسْتَ" },
        { en: "Lastu (لَسْتُ)", ur: "لَسْتُ" },
        { en: "Lasna (لَسْنَا)", ur: "لَسْنَا" },
        { en: "Laysat (لَيْسَتْ)", ur: "لَيْسَتْ" }
      ],
      correct: 1
    },
    {
      en: "How do you conjugate Laysa for 'Hum' (They, m)?",
      ur: "'هُمْ' کے لیے لیس کی گردان کیا ہے؟",
      options: [
        { en: "Laysuu (لَيْسُوا)", ur: "لَيْسُوا" },
        { en: "Lasna (لَسْنَا)", ur: "لَسْنَا" },
        { en: "Lastum (لَسْتُمْ)", ur: "لَسْتُمْ" },
        { en: "Laysaat (لَيْسَاتُ)", ur: "لَيْسَاتُ" }
      ],
      correct: 0
    },
    {
      en: "How do you conjugate Laysa for 'Hunna' (They, f)?",
      ur: "'هُنَّ' کے لیے لیس کی گردان کیا ہے؟",
      options: [
        { en: "Laysat (لَيْسَتْ)", ur: "لَيْسَتْ" },
        { en: "Lasnaa (لَسْنَا)", ur: "لَسْنَا" },
        { en: "Lasna (لَسْنَ)", ur: "لَسْنَ" },
        { en: "Lastun (لَسْتُنَّ)", ur: "لَسْتُنَّ" }
      ],
      correct: 2
    },
    {
      en: "How do you conjugate Laysa for 'Nahnu' (We)?",
      ur: "'نَحْنُ' کے لیے لیس کی گردان کیا ہے؟",
      options: [
        { en: "Lastum (لَسْتُمْ)", ur: "لَسْتُمْ" },
        { en: "Lastun (لَسْتُنَّ)", ur: "لَسْتُنَّ" },
        { en: "Lasnaa (لَسْنَا)", ur: "لَسْنَا" },
        { en: "Lastu (لَسْتُ)", ur: "لَسْتُ" }
      ],
      correct: 2
    },
    {
      en: "Translate: 'I am not a doctor'",
      ur: "ترجمہ کریں: 'میں ڈاکٹر نہیں ہوں'",
      options: [
        { en: "Lasta bi-tabibin", ur: "لَسْتَ بِطَبِيبٍ" },
        { en: "Lastu bi-tabibin", ur: "لَسْتُ بِطَبِيبٍ" },
        { en: "Laysa bi-tabibin", ur: "لَيْسَ بِطَبِيبٍ" },
        { en: "Lasna bi-tabibin", ur: "لَسْنَا بِطَبِيبٍ" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'The house is not new'",
      ur: "ترجمہ کریں: 'گھر نیا نہیں ہے'",
      options: [
        { en: "Al-baytu laysa bi-jadeedin", ur: "اَلْبَيْتُ لَيْسَ بِجَدِيدٍ" },
        { en: "Al-baytu laysat bi-jadeedin", ur: "اَلْبَيْتُ لَيْسَتْ بِجَدِيدٍ" },
        { en: "Al-baytu lastu bi-jadeedin", ur: "اَلْبَيْتُ لَسْتُ بِجَدِيدٍ" },
        { en: "Al-baytu lasna bi-jadeedin", ur: "اَلْبَيْتُ لَسْنَا بِجَدِيدٍ" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'You (plural, feminine) are not sick'",
      ur: "ترجمہ کریں: 'تم سب (مؤنث) بیمار نہیں ہو'",
      options: [
        { en: "Lastum bi-marda", ur: "لَسْتُمْ بِمَرْضَى" },
        { en: "Lastunna bi-marda", ur: "لَسْتُنَّ بِمَرْضَى" },
        { en: "Lasna bi-marda", ur: "لَسْنَّ بِمَرْضَى" },
        { en: "Lasti bi-marda", ur: "لَسْتِ بِمَرْضَى" }
      ],
      correct: 1
    }
  ],
  3: [ // Lesson 3: اسم التفضيل، كأن، لكن، الأعداد المركبة
    {
      en: "In 'Ibraaheemu atwalu min Ahmad' (إِبْرَاهِيمُ أَطْوَلُ مِنْ أَحْمَدَ), what does 'atwalu' express?",
      ur: "'إِبْرَاهِيمُ أَطْوَلُ مِنْ أَحْمَدَ' میں 'أَطْوَلُ' کیا معنی دیتا ہے؟",
      options: [
        { en: "A comparative meaning: taller than", ur: "اسمِ تفضیل کا تقابلی معنی: زیادہ لمبا" },
        { en: "A past tense verb meaning he became tall", ur: "فعلِ ماضی: وہ لمبا ہو گیا" },
        { en: "A preposition meaning from", ur: "حرفِ جر: سے" },
        { en: "A plural adjective meaning tall ones", ur: "جمع صفت: لمبے لوگ" }
      ],
      correct: 0
    },
    {
      en: "How is 'Ism al-Tafdeel' (comparative/superlative) structured in Arabic?",
      ur: "عربی میں 'اسم التفضیل' (موازنہ/تفوق) کا وزن کیا ہے؟",
      options: [
        { en: "Fa'ilun (فَاعِلٌ)", ur: "فَاعِلٌ" },
        { en: "Af'alu (أَفْعَلُ) - diptote", ur: "أَفْعَلُ (غیر منصرف)" },
        { en: "Maf'oolun (مَفْعُولٌ)", ur: "مَفْعُولٌ" },
        { en: "Fu'aalun (فُعَالٌ)", ur: "فُعَالٌ" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Hamid is taller than Bilal'",
      ur: "ترجمہ کریں: 'حامد بلال سے لمبا ہے'",
      options: [
        { en: "Hamidu atwalu Bilalin", ur: "حَامِدٌ أَطْوَلُ بِلَالٍ" },
        { en: "Hamidun atwalu min Bilalin", ur: "حَامِدٌ أَطْوَلُ مِنْ بِلَالٍ" },
        { en: "Hamidun atwala min Bilalin", ur: "حَامِدٌ أَطْوَلَ مِنْ بِلَالٍ" },
        { en: "Hamidun atwalu ila Bilalin", ur: "حَامِدٌ أَطْوَلُ إِلَى بِلَالٍ" }
      ],
      correct: 1
    },
    {
      en: "What does 'Ka-anna' (كَأَنَّ) mean?",
      ur: "'كَأَنَّ' کا کیا مطلب ہے؟",
      options: [
        { en: "Because", ur: "اس لیے کہ" },
        { en: "As if / It looks like", ur: "گویا کہ / جیسے کہ / لگتا ہے" },
        { en: "But", ur: "لیکن" },
        { en: "Although", ur: "اگرچہ" },
      ],
      correct: 1
    },
    {
      en: "Which category does 'Ka-anna' (كَأَنَّ) and 'Lakinna' (لَكِنَّ) belong to?",
      ur: "'كَأَنَّ' اور 'لَكِنَّ' کس نحوی گروہ سے تعلق رکھتے ہیں؟",
      options: [
        { en: "Kana and sisters", ur: "کان اور اس کی بہنیں" },
        { en: "Inna and sisters (Huroof al-Mushabbahah bil-Fi'l)", ur: "اِنَّ اور اس کی بہنیں" },
        { en: "Relative pronouns", ur: "اسمائے موصولہ" },
        { en: "Prepositions", ur: "حروفِ جر" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'It is as if you are sick'",
      ur: "ترجمہ کریں: 'گویا کہ تم بیمار ہو'",
      options: [
        { en: "Ka-annahu mareedun", ur: "كَأَنَّهُ مَرِيضٌ" },
        { en: "Ka-annaka mareedun", ur: "كَأَنَّكَ مَرِيضٌ" },
        { en: "Lakinna-ka mareedun", ur: "لَكِنَّكَ مَرِيضٌ" },
        { en: "Ka-anna-ki mareedun", ur: "كَأَنَّكِ مَرِيضٌ" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'The car is old, but it is strong'",
      ur: "ترجمہ کریں: 'گاڑی پرانی ہے لیکن وہ مضبوط ہے'",
      options: [
        { en: "Al-sayyaaratu qadeematun lakinna-ha qawiyyatun", ur: "اَلسَّيَّارَةُ قَدِيمَةٌ لَكِنَّهَا قَوِيَّةٌ" },
        { en: "Al-sayyaaratu qadeematun lakinna-hu qawiyyun", ur: "اَلسَّيَّارَةُ قَدِيمَةٌ لَكِنَّهُ قَوِيٌّ" },
        { en: "Al-sayyaaratu qadeematun ka-anna-ha qawiyyatun", ur: "اَلسَّيَّارَةُ قَدِيمَةٌ كَأَنَّهَا قَوِيَّةٌ" },
        { en: "Al-sayyaaratu qadeematun lakinna qawiyyatun", ur: "اَلسَّيَّارَةُ قَدِيمَةٌ لَكِنَّ قَوِيَّةٌ" }
      ],
      correct: 0
    },
    {
      en: "What is the rule for compound numbers 13-19 with a masculine counted noun?",
      ur: "مذکر معدود کے ساتھ مرکب اعداد 13 سے 19 کا کیا قاعدہ ہے؟",
      options: [
        { en: "Both parts match the counted noun in gender", ur: "دونوں حصے معدود کی جنس کے موافق ہوتے ہیں" },
        { en: "First part opposes, second part matches (e.g. khamsata 'ashara)", ur: "پہلا حصہ جنس میں الٹ ہوتا ہے، دوسرا حصہ موافق ہوتا ہے (جیسے خَمْسَةَ عَشَرَ)" },
        { en: "First part matches, second part opposes", ur: "پہلا موافق، دوسرا الٹ" },
        { en: "Both parts oppose the counted noun", ur: "دونوں حصے الٹ ہوتے ہیں" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 5, how is '15 students (masculine)' written?",
      ur: "مشق 5 کے مطابق، '15 طالب علم (مذکر)' کیسے لکھا جائے گا؟",
      options: [
        { en: "Khamsata 'ashara taliban", ur: "خَمْسَةَ عَشَرَ طَالِبًا" },
        { en: "Khamsu 'ashara taliban", ur: "خَمْسَ عَشَرَ طَالِبًا" },
        { en: "Khamsatu 'ashara talibin", ur: "خَمْسَةُ عَشَرَ طَالِبٍ" },
        { en: "Khamsata 'asharata taliban", ur: "خَمْسَةَ عَشَرَةَ طَالِبًا" }
      ],
      correct: 0
    },
    {
      en: "What is the grammatical state of the two parts of numbers 13-19?",
      ur: "اعداد 13 سے 19 کے دونوں حصوں کا اعرابی حکم کیا ہوتا ہے؟",
      options: [
        { en: "They are Mabni (fixed) on Fatha (فتحة)", ur: "دونوں فتحہ پر مبنی (مبنی علی الفتح) ہوتے ہیں" },
        { en: "First part is declinable, second part is fixed", ur: "پہلا معرب اور دوسرا مبنی ہوتا ہے" },
        { en: "Both are Majrur", ur: "دونوں مجرور ہوتے ہیں" },
        { en: "They change based on case", ur: "عامل کے مطابق تبدیل ہوتے ہیں" }
      ],
      correct: 0
    },
    {
      en: "Translate: '19 books'",
      ur: "ترجمہ کریں: '19 کتابیں'",
      options: [
        { en: "Tis'ata 'ashara kutubin", ur: "تِسْعَةَ عَشَرَ كُتُبٍ" },
        { en: "Tis'ata 'ashara kitaaban", ur: "تِسْعَةَ عَشَرَ كِتَابًا" },
        { en: "Tis'u 'ashara kitaaban", ur: "تِسْعَ عَشَرَ كِتَابًا" },
        { en: "Tis'ata 'asharata kitaaban", ur: "تِسْعَةَ عَشَرَةَ كِتَابًا" }
      ],
      correct: 1
    },
    {
      en: "What does 'A-laysa kazalika?' (أَلَيْسَ كَذٰلِكَ؟) mean?",
      ur: "'أَلَيْسَ كَذٰلِكَ؟' کا کیا مطلب ہے؟",
      options: [
        { en: "Is this it?", ur: "کیا یہ وہی ہے؟" },
        { en: "Isn't it so?", ur: "کیا ایسا نہیں ہے؟" },
        { en: "Who is that?", ur: "وہ کون ہے؟" },
        { en: "Where is it?", ur: "وہ کہاں ہے؟" }
      ],
      correct: 1
    },
    {
      en: "What is the meaning and function of 'Ayyuhuma' (أَيُّهُمَا)?",
      ur: "'أَيُّهُمَا' کا کیا معنی اور استعمال ہے؟",
      options: [
        { en: "Which of the two", ur: "ان دونوں میں سے کون سا" },
        { en: "Who is this", ur: "یہ کون ہے" },
        { en: "Both of them", ur: "وہ دونوں" },
        { en: "None of them", ur: "ان میں سے کوئی نہیں" }
      ],
      correct: 0
    },
    {
      en: "How do you form the ordinal numbers (e.g. first, second, third) for masculine nouns?",
      ur: "مذکر اسم کے لیے ترتیبی عدد (پہلا، دوسرا، تیسرا) کس وزن پر آتا ہے؟",
      options: [
        { en: "Af'alu (أَفْعَلُ)", ur: "أَفْعَلُ" },
        { en: "Faa'ilun (فَاعِلٌ) - like Thaalin, Raabi'", ur: "فَاعِلٌ (جیسے ثَالِثٌ، رَابِعٌ)" },
        { en: "Fi'aalun (فِعَالٌ)", ur: "فِعَالٌ" },
        { en: "Fu'oolun (فُعُولٌ)", ur: "فُعُولٌ" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'The tenth lesson'",
      ur: "ترجمہ کریں: 'دسواں سبق'",
      options: [
        { en: "Al-darsu al-'aashiru", ur: "اَلدَّرْسُ الْعَاشِرُ" },
        { en: "Al-darsu al-'asharu", ur: "اَلدَّرْسُ الْعَشَرُ" },
        { en: "Al-darsu 'aashiran", ur: "اَلدَّرْسُ عَاشِرًا" },
        { en: "Al-darsu al-'aashiratu", ur: "اَلدَّرْسُ الْعَاشِرَةُ" }
      ],
      correct: 0
    }
  ],
  4: [ // Lesson 4: الفعل الماضي + الضمائر، لأن، نعم وبلى
    {
      en: "In 'li-annahu kharaja muta'akhkhiran' (لِأَنَّهُ خَرَجَ مُتَأَخِّرًا), what does 'li-anna' introduce?",
      ur: "'لِأَنَّهُ خَرَجَ مُتَأَخِّرًا' میں 'لِأَنَّ' کیا بیان کرتا ہے؟",
      options: [
        { en: "The reason or cause for the statement", ur: "جملے کی وجہ یا علت" },
        { en: "A command to do the action", ur: "کام کرنے کا حکم" },
        { en: "A question particle", ur: "حرفِ استفہام" },
        { en: "A marker for future tense only", ur: "صرف مستقبل کی علامت" }
      ],
      correct: 0
    },
    {
      en: "Which particle is normally used to answer an affirmative reply to a negative question like 'A-ma dhahabta?' (أَمَا ذَهَبْتَ؟)",
      ur: "'أَمَا ذَهَبْتَ؟' جیسے منفی سوال کے مثبت جواب کے لیے عموماً کون سا حرف استعمال ہوتا ہے؟",
      options: [
        { en: "Na'am, dhahabtu", ur: "نَعَمْ، ذَهَبْتُ" },
        { en: "Balaa, dhahabtu (Yes, indeed I went)", ur: "بَلَى، ذَهَبْتُ (کیوں نہیں، میں گیا)" },
        { en: "La, ma dhahabtu", ur: "لَا، مَا ذَهَبْتُ" },
        { en: "Balaa, ma dhahabtu", ur: "بَلَى، مَا ذَهَبْتُ" }
      ],
      correct: 1
    },
    {
      en: "Which suffix is attached to the past tense verb for the pronoun 'Hum' (They, masc.)?",
      ur: "ضمیر 'هُمْ' (وہ سب مذکر) کے لیے ماضی کے فعل پر کون سا لاحقہ لگتا ہے؟",
      options: [
        { en: "-ta (تَ)", ur: "تَ" },
        { en: "-tum (تُمْ)", ur: "تُمْ" },
        { en: "-oo (وا) with silent alif", ur: "وا (واؤ جمع)" },
        { en: "-na (نَ)", ur: "نَ" }
      ],
      correct: 2
    },
    {
      en: "Which suffix is attached for the pronoun 'Hunna' (They, fem.)?",
      ur: "ضمیر 'هُنَّ' (وہ سب مؤنث) کے لیے ماضی کے فعل پر کون سا لاحقہ لگتا ہے؟",
      options: [
        { en: "-na (نَ) - Noon of women", ur: "نَ (نونِ نسوہ)" },
        { en: "-oo (وا)", ur: "وا" },
        { en: "-tum (تُمْ)", ur: "تُمْ" },
        { en: "-tunna (تُنَّ)", ur: "تُنَّ" }
      ],
      correct: 0
    },
    {
      en: "What is 'Dhahaba' conjugated for 'Antum' (You, masc. pl)?",
      ur: "'أَنْتُمْ' کے لیے 'ذَهَبَ' کی ماضی کی گردان کیا ہے؟",
      options: [
        { en: "Dhahabna (ذَهَبْنَا)", ur: "ذَهَبْنَا" },
        { en: "Dhahabtum (ذَهَبْتُمْ)", ur: "ذَهَبْتُمْ" },
        { en: "Dhahabtoo (ذَهَبْتُو)", ur: "ذَهَبْتُو" },
        { en: "Dhahabtunna (ذَهَبْتُنَّ)", ur: "ذَهَبْتُنَّ" }
      ],
      correct: 1
    },
    {
      en: "What is 'Dhahaba' conjugated for 'Antunna' (You, fem. pl)?",
      ur: "'أَنْتُنَّ' کے لیے 'ذَهَبَ' کی ماضی کی گردان کیا ہے؟",
      options: [
        { en: "Dhahabtum (ذَهَبْتُمْ)", ur: "ذَهَبْتُمْ" },
        { en: "Dhahabtunna (ذَهَبْتُنَّ)", ur: "ذَهَبْتُنَّ" },
        { en: "Dhahabna (ذَهَبْنَا)", ur: "ذَهَبْنَا" },
        { en: "Dhahabti (ذَهَبْتِ)", ur: "ذَهَبْتِ" }
      ],
      correct: 1
    },
    {
      en: "What does 'Li-anna' (لِأَنَّ) mean?",
      ur: "'لِأَنَّ' کا کیا مطلب ہے؟",
      options: [
        { en: "But", ur: "لیکن" },
        { en: "Because / Since", ur: "کیونکہ / اس لیے کہ" },
        { en: "As if", ur: "جیسے کہ" },
        { en: "Perhaps", ur: "شاید" }
      ],
      correct: 1
    },
    {
      en: "Which sibling does 'Li-anna' follow in grammar rules?",
      ur: "'لِأَنَّ' کس کے نحوی قوانین پر عمل کرتا ہے؟",
      options: [
        { en: "Kana", ur: "کان" },
        { en: "Inna", ur: "اِنَّ" },
        { en: "Laysa", ur: "ليس" },
        { en: "None", ur: "کسی کے نہیں" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Because he is a teacher'",
      ur: "ترجمہ کریں: 'کیونکہ وہ استاد ہے'",
      options: [
        { en: "Li-anna huwa mudarrisun", ur: "لِأَنَّ هُوَ مُدَرِّسٌ" },
        { en: "Li-annahu mudarrisun", ur: "لِأَنَّهُ مُدَرِّسٌ" },
        { en: "Li-annaha mudarrisun", ur: "لِأَنَّهَا مُدَرِّسٌ" },
        { en: "Innahu mudarrisun", ur: "إِنَّهُ مُدَرِّسٌ" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Because they (feminine) are students'",
      ur: "ترجمہ کریں: 'کیونکہ وہ سب (مؤنث) طالبات ہیں'",
      options: [
        { en: "Li-annahum tullaabun", ur: "لِأَنَّهُمْ طُلَّابٌ" },
        { en: "Li-annahunna taalibaatun", ur: "لِأَنَّهُنَّ طَالِبَاتٌ" },
        { en: "Li-annaha taalibaatun", ur: "لِأَنَّهَا طَالِبَاتٌ" },
        { en: "Li-annat tullaabun", ur: "لِأَنَّتْ طُلَّابٌ" }
      ],
      correct: 1
    },
    {
      en: "When answering a positive question like 'Did you go?' in the affirmative, you use:",
      ur: "مثبت سوال جیسے 'کیا تم گئے؟' کا اقرار میں جواب دینے کے لیے استعمال کرتے ہیں:",
      options: [
        { en: "Na'am (نَعَمْ)", ur: "نَعَمْ" },
        { en: "Balaa (بَلَى)", ur: "بَلَى" },
        { en: "La (لَا)", ur: "لَا" },
        { en: "Bala (بَلَا)", ur: "بَلَا" }
      ],
      correct: 0
    },
    {
      en: "When answering a negative question like 'Didn't you go?' (أَلَمْ تَذْهَبْ؟) in the affirmative (meaning you DID go), you use:",
      ur: "منفی سوال جیسے 'کیا تم نہیں گئے؟' کا جواب اقرار میں دینے کے لیے (یعنی تم گئے ہو) کیا استعمال کرتے ہیں؟",
      options: [
        { en: "Na'am (نَعَمْ)", ur: "نَعَمْ" },
        { en: "Balaa (بَلَى) - meaning 'Yes, indeed!'", ur: "بَلَى (کیوں نہیں / ضرور)" },
        { en: "La (لَا)", ur: "لَا" },
        { en: "Ma (مَا)", ur: "مَا" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'They (men) left the class'",
      ur: "ترجمہ کریں: 'ان سب مردوں نے کلاس چھوڑی / وہ کلاس سے نکل گئے'",
      options: [
        { en: "Kharajuu min al-fasli", ur: "خَرَجُوا مِنَ الْفَصْلِ" },
        { en: "Kharajna min al-fasli", ur: "خَرَجْنَ مِنَ الْفَصْلِ" },
        { en: "Kharajtum min al-fasli", ur: "خَرَجْتُمْ مِنَ الْفَصْلِ" },
        { en: "Kharajtu min al-fasli", ur: "خَرَجْتُ مِنَ الْفَصْلِ" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'They (women) returned from the library'",
      ur: "ترجمہ کریں: 'وہ سب (مؤنث) لائبریری سے واپس آئیں'",
      options: [
        { en: "Raja'na min al-maktabati", ur: "رَجَعْنَ مِنَ الْمَكْتَبَةِ" },
        { en: "Raja'uu min al-maktabati", ur: "رَجَعُوا مِنَ الْمَكْتَبَةِ" },
        { en: "Raja'tum min al-maktabati", ur: "رَجَعْتُمْ مِنَ الْمَكْتَبَةِ" },
        { en: "Raja'at min al-maktabati", ur: "رَجَعَتْ مِنَ الْمَكْتَبَةِ" }
      ],
      correct: 0
    },
    {
      en: "What does 'Ghadan' (غَدًا) mean?",
      ur: "'غَدًا' کا کیا مطلب ہے؟",
      options: [
        { en: "Yesterday", ur: "کل (گزرا ہوا)" },
        { en: "Today", ur: "آج" },
        { en: "Tomorrow", ur: "کل (آنے والا)" },
        { en: "Day after tomorrow", ur: "پرسوں" }
      ],
      correct: 2
    }
  ],
  5: [ // Lesson 5: الفاعل والمفعول به
    {
      en: "In a verbal sentence (Jumlah Fi'liyyah), what is the doer of the action called?",
      ur: "جملہ فعلیہ میں کام کرنے والے کو کیا کہتے ہیں؟",
      options: [
        { en: "Mubtada (مبتدأ)", ur: "مبتدا" },
        { en: "Fa'il (فَاعِلٌ)", ur: "فاعل" },
        { en: "Maf'ul bihi (مَفْعُولٌ بِهِ)", ur: "مفعول بہ" },
        { en: "Khabar (خبر)", ur: "خبر" }
      ],
      correct: 1
    },
    {
      en: "What is the grammatical case/ending of the Fa'il (doer)?",
      ur: "فاعل کا اعرابی حالت کیا ہوتا ہے؟",
      options: [
        { en: "Marfu' (nominative with Dhamma)", ur: "مرفوع (حالتِ رفع)" },
        { en: "Mansub (accusative with Fatha)", ur: "منصوب (حالتِ نصب)" },
        { en: "Majrur (genitive with Kasra)", ur: "مجرور (حالتِ جر)" },
        { en: "Jazm", ur: "مجزوم" }
      ],
      correct: 0
    },
    {
      en: "What is the object of the verb (that upon which action happens) called?",
      ur: "جس پر کام واقع ہو (مفعول) اس کو عربی میں کیا کہتے ہیں؟",
      options: [
        { en: "Fa'il", ur: "فاعل" },
        { en: "Maf'ul bihi (مَفْعُولٌ بِهِ)", ur: "مفعول بہ" },
        { en: "Mudaaf", ur: "مضاف" },
        { en: "Majroor", ur: "مجرور" }
      ],
      correct: 1
    },
    {
      en: "What is the grammatical case/ending of the Maf'ul bihi?",
      ur: "مفعول بہ کی اعرابی حالت کیا ہوتی ہے؟",
      options: [
        { en: "Marfu'", ur: "مرفوع" },
        { en: "Mansub (accusative with Fatha)", ur: "منصوب (حالتِ نصب)" },
        { en: "Majrur", ur: "مجرور" },
        { en: "Mabni", ur: "مبنی" }
      ],
      correct: 1
    },
    {
      en: "In 'Qatala Haamidun al-hayyata' (قَتَلَ حَامِدٌ الْحَيَّةَ), which word is the Maf'ul bihi?",
      ur: "'قَتَلَ حَامِدٌ الْحَيَّةَ' میں مفعول بہ کون سا لفظ ہے؟",
      options: [
        { en: "Qatala", ur: "قَتَلَ" },
        { en: "Hamidun", ur: "حَامِدٌ" },
        { en: "Al-hayyata (the snake)", ur: "الْحَيَّةَ (سانپ)" },
        { en: "None", ur: "کوئی نہیں" }
      ],
      correct: 2
    },
    {
      en: "In 'Qatala Haamidun al-hayyata', who killed what?",
      ur: "'قَتَلَ حَامِدٌ الْحَيَّةَ' کا کیا مطلب ہے؟",
      options: [
        { en: "The snake killed Hamid", ur: "سانپ نے حامد کو مارا" },
        { en: "Hamid killed the snake", ur: "حامد نے سانپ کو مارا" },
        { en: "Hamid caught the snake", ur: "حامد نے سانپ پکڑا" },
        { en: "The snake fled from Hamid", ur: "سانپ حامد سے بھاگ گیا" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 1, how do you identify the Maf'ul bihi in: 'Qara'a al-waladu al-qur'ana'?",
      ur: "مشق 1 کی روشنی میں، 'قَرَأَ الْوَلَدُ الْقُرْآنَ' میں مفعول بہ کون سا ہے؟",
      options: [
        { en: "Qara'a", ur: "قَرَأَ" },
        { en: "Al-waladu", ur: "الْوَلَدُ" },
        { en: "Al-qur'ana", ur: "الْقُرْآنَ" },
        { en: "Al-walada", ur: "الْوَلَدَ" }
      ],
      correct: 2
    },
    {
      en: "In Exercise 2, how do you correctly vocalize (put harakat on) 'Al-walad' and 'Al-kitab' in: 'Qata'a al-walad al-kitab'?",
      ur: "مشق 2 کے مطابق، 'قطع الولد الكتاب' میں فاعل اور مفعول کے اعراب کیا ہوں گے؟",
      options: [
        { en: "Al-walada al-kitabu", ur: "الْوَلَدَ الْكِتَابُ" },
        { en: "Al-waladu al-kitaba", ur: "الْوَلَدُ الْكِتَابَ" },
        { en: "Al-waladi al-kitabi", ur: "الْوَلَدِ الْكِتَابِ" },
        { en: "Al-waladu al-kitabu", ur: "الْوَلَدُ الْكِتَابُ" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'The teacher wrote the lesson'",
      ur: "ترجمہ کریں: 'استاد نے سبق لکھا'",
      options: [
        { en: "Kataba al-mudarrisa al-darsu", ur: "كَتَبَ الْمُدَرِّسَ الدَّرْسُ" },
        { en: "Kataba al-mudarrisu al-darsa", ur: "كَتَبَ الْمُدَرِّسُ الدَّرْسَ" },
        { en: "Kataba al-mudarrisi al-darsi", ur: "كَتَبَ الْمُدَرِّسِ الدَّرْسِ" },
        { en: "Katabat al-mudarrisu al-darsa", ur: "كَتَبَتْ الْمُدَرِّسُ الدَّرْسَ" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Aminah drank the water'",
      ur: "ترجمہ کریں: 'آمنہ نے پانی پیا'",
      options: [
        { en: "Shariba Aminatu al-maa'a", ur: "شَرِبَ آمِنَةُ الْمَاءَ" },
        { en: "Sharibat Aminatu al-maa'a", ur: "شَرِبَتْ آمِنَةُ الْمَاءَ" },
        { en: "Sharibat Aminata al-maa'u", ur: "شَرِبَتْ آمِنَةَ الْمَاءُ" },
        { en: "Sharibat Aminatu al-maa'i", ur: "شَرِبَتْ آمِنَةُ الْمَاءِ" }
      ],
      correct: 1
    },
    {
      en: "What does 'Sami'a' (سَمِعَ) mean?",
      ur: "'سَمِعَ' کا کیا مطلب ہے؟",
      options: [
        { en: "He understood", ur: "وہ سمجھ گیا" },
        { en: "He heard", ur: "اس نے سنا" },
        { en: "He saw", ur: "اس نے دیکھا" },
        { en: "He said", ur: "اس نے کہا" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Bilal heard the Adhan'",
      ur: "ترجمہ کریں: 'بلال نے اذان سنی'",
      options: [
        { en: "Sami'a Bilalun al-adhana", ur: "سَمِعَ بِلَالٌ الْأَذَانَ" },
        { en: "Sami'a Bilalan al-adhanu", ur: "سَمِعَ بِلَالًا الْأَذَانُ" },
        { en: "Sami'at Bilalun al-adhana", ur: "سَمِعَتْ بِلَالٌ الْأَذَانَ" },
        { en: "Sami'a Bilalun al-adhani", ur: "سَمِعَ بِلَالٌ الْأَذَانِ" }
      ],
      correct: 0
    },
    {
      en: "What is the plural of 'Hayyah' (حَيَّةٌ - snake)?",
      ur: "'حَيَّةٌ' (سانپ) کی جمع کیا ہے؟",
      options: [
        { en: "Hayyaat (حَيَّاتٌ)", ur: "حَيَّاتٌ" },
        { en: "Hayaya (حَيَايَا)", ur: "حَيَايَا" },
        { en: "Ahyā' (أَحْيَاءٌ)", ur: "أَحْيَاءٌ" },
        { en: "Hayyuna (حَيُّونَ)", ur: "حَيُّونَ" }
      ],
      correct: 0
    },
    {
      en: "What is the plural of 'Babul fasl' (بَابُ الْفَصْلِ - class door)?",
      ur: "'بَابُ الْفَصْلِ' کی جمع کیا ہوگی؟",
      options: [
        { en: "Abwabu al-fasli", ur: "أَبْوَابُ الْفَصْلِ" },
        { en: "Abwabu al-faseeli", ur: "أَبْوَابُ الفَصیِلِ" },
        { en: "Bawwaabatu al-fasli", ur: "بَوَّابَاتُ الْفَصْلِ" },
        { en: "Baitaani al-fasli", ur: "بَيْتَانِ الْفَصْلِ" }
      ],
      correct: 0
    },
    {
      en: "If the Fa'il is a visible noun (like 'Bilal'), does the verb agree in plural number?",
      ur: "اگر فاعل ظاہر اسم ہو (جیسے بلال اور حامد)، تو کیا فعل جمع شکل میں آئے گا؟",
      options: [
        { en: "Yes, the verb becomes plural", ur: "جی ہاں، فعل جمع بن جائے گا" },
        { en: "No, the verb remains singular (e.g., dhahaba al-tullaabu)", ur: "جی نہیں، فعل واحد ہی رہے گا (جیسے ذَهَبَ الطُّلَّابُ)" },
        { en: "It becomes dual", ur: "تثنیہ بن جائے گا" },
        { en: "It depends on the dialect", ur: "لہجے پر منحصر ہے" }
      ],
      correct: 1
    }
  ],
  6: [ // Lesson 6: إسناد الماضي للمخاطبة، ضمائر النصب، عدد المركب مؤنث، أظن
    {
      en: "For the pronoun 'Antunna' (أَنْتُنَّ), what suffix is attached to a past tense verb?",
      ur: "ضمیر 'أَنْتُنَّ' کے لیے فعلِ ماضی کے آخر میں کون سا لاحقہ آتا ہے؟",
      options: [
        { en: "-tunna, as in katabtunna", ur: "-تُنَّ، جیسے كَتَبْتُنَّ" },
        { en: "-tum, as in katabtum", ur: "-تُمْ، جیسے كَتَبْتُمْ" },
        { en: "-na, as in katabna for 'we'", ur: "-نَا، جیسے كَتَبْنَا" },
        { en: "-uu, as in katabuu", ur: "-وا، جیسے كَتَبُوا" }
      ],
      correct: 0
    },
    {
      en: "Which past-tense form matches 'Hunna' (هُنَّ - they feminine)?",
      ur: "'هُنَّ' (وہ سب مؤنث) کے لیے فعلِ ماضی کی کون سی شکل درست ہے؟",
      options: [
        { en: "katabna (كَتَبْنَ)", ur: "كَتَبْنَ" },
        { en: "katabuu (كَتَبُوا)", ur: "كَتَبُوا" },
        { en: "katabta (كَتَبْتَ)", ur: "كَتَبْتَ" },
        { en: "katabtunna (كَتَبْتُنَّ)", ur: "كَتَبْتُنَّ" }
      ],
      correct: 0
    },
    {
      en: "What is the past tense verb suffix for the pronoun 'Anti' (You, feminine singular)?",
      ur: "ضمیر 'أَنْتِ' (واحد مؤنث مخاطب) کے لیے ماضی کے فعل پر کون سا لاحقہ لگتا ہے؟",
      options: [
        { en: "-ta (تَ)", ur: "تَ" },
        { en: "-ti (تِ)", ur: "تِ" },
        { en: "-tu (تُ)", ur: "تُ" },
        { en: "-ki (كِ)", ur: "كِ" }
      ],
      correct: 1
    },
    {
      en: "What is the past tense verb suffix for the pronoun 'Antunna' (You, feminine plural)?",
      ur: "ضمیر 'أَنْتُنَّ' (جمع مؤنث مخاطب) کے لیے ماضی کے فعل پر کون سا لاحقہ لگتا ہے؟",
      options: [
        { en: "-tunna (تُنَّ)", ur: "تُنَّ" },
        { en: "-tum (تُمْ)", ur: "تُمْ" },
        { en: "-na (نَ)", ur: "نَ" },
        { en: "-ti (تِ)" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'Did you (feminine plural) write the lesson?'",
      ur: "ترجمہ کریں: 'کیا تم سب (مؤنث) نے سبق لکھا؟'",
      options: [
        { en: "A-katabtum al-darsa?", ur: "أَكَتَبْتُمْ الدَّرْسَ؟" },
        { en: "A-katabtunna al-darsa?", ur: "أَكَتَبْتُنَّ الدَّرْسَ؟" },
        { en: "A-katabna al-darsa?", ur: "أَكَتَبْنَا الدَّرْسَ؟" },
        { en: "A-katabat al-darsa?", ur: "أَكَتَبَتِ الدَّرْسَ؟" }
      ],
      correct: 1
    },
    {
      en: "Which attached pronoun is used as the object (Nasp) for 'Huwa' (He/It)?",
      ur: "ضمیر منصوب متصل جو 'هُوَ' کے لیے مفعول بنتی ہے، کیا ہے؟",
      options: [
        { en: "-hu (هُ / ـهُ)", ur: "هُ" },
        { en: "-ha (هَا)", ur: "هَا" },
        { en: "-ka (كَ)", ur: "كَ" },
        { en: "-ya (ي)" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'I saw him'",
      ur: "ترجمہ کریں: 'میں نے اسے (مذکر) دیکھا'",
      options: [
        { en: "Ra'aituhu (رَأَيْتُهُ)", ur: "رَأَيْتُهُ" },
        { en: "Ra'aituha (رَأَيْتُهَا)", ur: "رَأَيْتُهَا" },
        { en: "Ra'aituka (رَأَيْتُكَ)", ur: "رَأَيْتُكَ" },
        { en: "Ra'aitumuhu (رَأَيْتُمُوهُ)" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'I saw her'",
      ur: "ترجمہ کریں: 'میں نے اسے (مؤنث) دیکھا'",
      options: [
        { en: "Ra'aituhu (رَأَيْتُهُ)", ur: "رَأَيْتُهُ" },
        { en: "Ra'aituha (رَأَيْتُهَا)", ur: "رَأَيْتُهَا" },
        { en: "Ra'aituka (رَأَيْتُكَ)", ur: "رَأَيْتُكَ" },
        { en: "Ra'aituni (رَأَيْتُنِي)" }
      ],
      correct: 1
    },
    {
      en: "What is the rule for compound numbers 13-19 with a feminine counted noun?",
      ur: "مؤنث معدود کے ساتھ مرکب اعداد 13 سے 19 کا کیا قاعدہ ہے؟",
      options: [
        { en: "First part is masculine (opposes), second part is feminine (matches) (e.g. khamsa 'ashrata)", ur: "پہلا حصہ مذکر (الٹ) اور دوسرا حصہ مؤنث (موافق) ہوتا ہے (جیسے خَمْسَ عَشَرَةَ)" },
        { en: "Both parts are feminine", ur: "دونوں حصے مؤنث ہوتے ہیں" },
        { en: "First part is feminine, second part is masculine", ur: "پہلا مؤنث اور دوسرا مذکر" },
        { en: "Both parts are masculine", ur: "دونوں حصے مذکر ہوتے ہیں" }
      ],
      correct: 0
    },
    {
      en: "Translate: '15 female students'",
      ur: "ترجمہ کریں: '15 طالبات'",
      options: [
        { en: "Khamsata 'ashara taalibatan", ur: "خَمْسَةَ عَشَرَ طَالِبَةً" },
        { en: "Khamsa 'ashrata taalibatan", ur: "خَمْسَ عَشَرَةَ طَالِبَةً" },
        { en: "Khamsata 'ashrata taalibatin", ur: "خَمْسَةَ عَشَرَةَ طَالِبَةٍ" },
        { en: "Khamsu 'ashara taalibatan", ur: "خَمْسَ عَشَرَ طَالِبَةً" }
      ],
      correct: 1
    },
    {
      en: "What does 'Azunnu' (أَظُنُّ) mean?",
      ur: "'أَظُنُّ' کا کیا مطلب ہے؟",
      options: [
        { en: "I know", ur: "میں جانتا ہوں" },
        { en: "I think / I suppose", ur: "میرا خیال ہے / میں گمان کرتا ہوں" },
        { en: "I forgot", ur: "میں بھول گیا" },
        { en: "I went", ur: "میں گیا" }
      ],
      correct: 1
    },
    {
      en: "What is the feminine form of 'Jaw'aanu' (جَوْعَانُ - hungry)?",
      ur: "'جَوْعَانُ' (بھوکا) کی مؤنث شکل کیا ہے؟",
      options: [
        { en: "Jaw'aanatun (جَوْعَانَةٌ)", ur: "جَوْعَانَةٌ" },
        { en: "Jaw'aa (جَوْعَى)", ur: "جَوْعَى" },
        { en: "Jiyaa'un (جِيَاعٌ)", ur: "جِيَاعٌ" },
        { en: "Jawi'atun (جَوِعَةٌ)" }
      ],
      correct: 1
    },
    {
      en: "What is the plural form of 'Jaw'aanu' (جَوْعَانُ)?",
      ur: "'جَوْعَانُ' کی جمع شکل کیا ہے؟",
      options: [
        { en: "Jaw'aanuna (جَوْعَانُونَ)", ur: "جَوْعَانُونَ" },
        { en: "Jiyaa'un (جِيَاعٌ)", ur: "جِيَاعٌ" },
        { en: "Jaw'aa (جَوْعَى)", ur: "جَوْعَى" },
        { en: "Jawaa'in (جَوَاعٍ)" }
      ],
      correct: 1
    },
    {
      en: "What is the question word 'Li-ma' (لِمَ) short for?",
      ur: "سوالیہ لفظ 'لِمَ' کس کا اختصار ہے؟",
      options: [
        { en: "Li-maza (لِمَاذَا - why?)", ur: "لِمَاذَا (کیوں؟)" },
        { en: "Li-man (لِمَنْ - whose?)", ur: "لِمَنْ" },
        { en: "Li-maa (لِمَا - why/for what?)", ur: "لِمَا" },
        { en: "Min-ma (مِمَّا)" }
      ],
      correct: 2
    },
    {
      en: "What is the imperative word 'Haati' (هَاتِ) used for?",
      ur: "فعل امر 'هَاتِ' کا کیا مطلب ہے؟",
      options: [
        { en: "Go away!", ur: "جاؤ!" },
        { en: "Bring! / Give me!", ur: "لاؤ! / دو مجھے!" },
        { en: "Listen!", ur: "سنو!" },
        { en: "Sit!", ur: "بیٹھو!" }
      ],
      correct: 1
    }
  ],
  7: [ // Lesson 7: إسناد الماضي للمخاطبين، كان، ضمائر النصب مع فعلتم
    {
      en: "For 'Antumaa' (أَنْتُمَا), what ending is attached to the past tense verb?",
      ur: "'أَنْتُمَا' کے لیے فعلِ ماضی کے آخر میں کون سا لاحقہ آتا ہے؟",
      options: [
        { en: "-tumaa, as in katabtumaa", ur: "-تُمَا، جیسے كَتَبْتُمَا" },
        { en: "-tum, as in katabtum", ur: "-تُمْ، جیسے كَتَبْتُمْ" },
        { en: "-taa, as in katabataa", ur: "-تَا، جیسے كَتَبَتَا" },
        { en: "-na, as in katabna", ur: "-نَا، جیسے كَتَبْنَا" }
      ],
      correct: 0
    },
    {
      en: "What suffix is attached to past tense verbs for the dual second person masculine/feminine 'Antuma' (You two)?",
      ur: "ضمیر تثنیہ مخاطب 'أَنْتُمَا' کے لیے ماضی کے فعل پر کیا لاحقہ لگتا ہے؟",
      options: [
        { en: "-tum (تُمْ)", ur: "تُمْ" },
        { en: "-tuma (تُمَا)", ur: "تُمَا" },
        { en: "-tunna (تُنَّ)", ur: "تُنَّ" },
        { en: "-aani (انِ)" }
      ],
      correct: 1
    },
    {
      en: "What is the past tense verb 'Dhahaba' conjugated for 'Antuma'?",
      ur: "'أَنْتُمَا' کے لیے 'ذَهَبَ' کی ماضی کی گردان کیا ہے؟",
      options: [
        { en: "Dhahabtum (ذَهَبْتُمْ)", ur: "ذَهَبْتُمْ" },
        { en: "Dhahabtuma (ذَهَبْتُمَا)", ur: "ذَهَبْتُمَا" },
        { en: "Dhahabna (ذَهَبْنَا)", ur: "ذَهَبْنَا" },
        { en: "Dhahabta (ذَهَبْتَ)" }
      ],
      correct: 1
    },
    {
      en: "What happens to the predicate (Khabar) of 'Kaana' (كَانَ) when it enters a nominal sentence?",
      ur: "جب 'كَانَ' جملہ اسمیہ پر داخل ہوتا ہے تو اس کی خبر پر کیا اعرابی تبدیلی آتی ہے؟",
      options: [
        { en: "It becomes Mansub (accusative case)", ur: "وہ منصوب (حالتِ نصب) ہو جاتی ہے" },
        { en: "It remains Marfu'", ur: "وہ مرفوع رہتی ہے" },
        { en: "It becomes Majrur", ur: "وہ مجرور ہو جاتی ہے" },
        { en: "It becomes silent", ur: "ساکن ہو جاتی ہے" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'The water was cold'",
      ur: "ترجمہ کریں: 'پانی ٹھنڈا تھا'",
      options: [
        { en: "Kaana al-maa'u baaridun", ur: "كَانَ الْمَاءُ بَارِدٌ" },
        { en: "Kaana al-maa'u baaridan", ur: "كَانَ الْمَاءُ بَارِدًا" },
        { en: "Kaana al-maa'a baaridan", ur: "كَانَ الْمَاءَ بَارِدًا" },
        { en: "Kaana al-maa'i baaridin", ur: "كَانَ الْمَاءِ بَارِدٍ" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 2, when you attach '-hu' (him/it) to the verb form 'Ra'aitum' (You saw), it becomes:",
      ur: "مشق 2 کے مطابق، جب '-هُ' ضمیر کو 'رَأَيْتُمْ' کے ساتھ ملاتے ہیں تو کیا بنتا ہے؟",
      options: [
        { en: "Ra'aitumuhu (رَأَيْتُمُوهُ) - adding a waw for pronunciation", ur: "رَأَيْتُمُوهُ (تلفظ کے لیے واؤ کا اضافہ کر کے)" },
        { en: "Ra'aitumhu (رَأَيْتُمْهُ)", ur: "رَأَيْتُمْهُ" },
        { en: "Ra'aituhum (رَأَيْتُهُمْ)", ur: "رَأَيْتُهُمْ" },
        { en: "Ra'aitumhuu (رَأَيْتُمْهُو)" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'Did you (plural) see it?'",
      ur: "ترجمہ کریں: 'کیا تم سب نے اسے دیکھا؟'",
      options: [
        { en: "A-ra'aitumhu?", ur: "أَرَأَيْتُمْهُ؟" },
        { en: "A-ra'aitumuhu?", ur: "أَرَأَيْتُمُوهُ؟" },
        { en: "A-ra'aitahu?", ur: "أَرَأَيْتَهُ؟" },
        { en: "A-ra'aitumuh?", ur: "أَرَأَيْتُمُهْ؟" }
      ],
      correct: 1
    },
    {
      en: "What is the pronunciation rule for combining the silent Meem of plural 'fala'tum' with 'Al-'?",
      ur: "جب جمع کی ساکن میم 'فعلتم' کے بعد 'الـ' آئے تو میم کو کیسے پڑھا جائے گا؟",
      options: [
        { en: "Meem gets a Kasra", ur: "میم کے نیچے کسرہ لگایا جائے گا" },
        { en: "Meem gets a Dhamma (e.g. dakhaltumu al-masjida)", ur: "میم پر ضمہ پیش دیا جائے گا (جیسے دَخَلْتُمُ الْمَسْجِدَ)" },
        { en: "Meem remains silent", ur: "میم ساکن رہے گی" },
        { en: "Meem gets a Fatha", ur: "میم پر فتحہ دیا جائے گا" }
      ],
      correct: 1
    },
    {
      en: "What is the pronunciation rule for combining a feminine past verb ending in silent Ta (e.g. 'qalat') with 'Al-'?",
      ur: "جب مؤنث ماضی کی ساکن تاء (جیسے 'قَالَتْ') کے بعد 'الـ' آئے تو تاء کو کیسے ملایا جائے گا؟",
      options: [
        { en: "Ta gets a Dhamma", ur: "تاء پر ضمہ دیا جائے گا" },
        { en: "Ta gets a Kasra (e.g. qaalati al-imra'atu)", ur: "تاء کے نیچے کسرہ (زیر) دیا جائے گا (جیسے قَالَتِ الْمَرْأَةُ)" },
        { en: "Ta gets a Fatha", ur: "تاء پر فتحہ دیا جائے گا" },
        { en: "The Ta is deleted", ur: "تاء حذف ہو جائے گی" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'The woman said'",
      ur: "ترجمہ کریں: 'عورت نے کہا'",
      options: [
        { en: "Qaalati al-imra'atu", ur: "قَالَتِ الْمَرْأَةُ" },
        { en: "Qaalat al-imra'atu", ur: "قَالَتْ الْمَرْأَةُ" },
        { en: "Qaala al-imra'atu", ur: "قَالَ الْمَرْأَةُ" },
        { en: "Qaalatu al-imra'atu", ur: "قَالَتُ الْمَرْأَةُ" }
      ],
      correct: 0
    },
    {
      en: "What is the feminine form of the relative pronoun 'Al-lazi' (الَّذِي - who/which)?",
      ur: "'الَّذِي' کی مؤنث شکل کیا ہے؟",
      options: [
        { en: "Al-lazeena (الَّذِينَ)", ur: "الَّذِينَ" },
        { en: "Al-lati (الَّتِي)", ur: "الَّتِي" },
        { en: "Al-laati (اللَّاتِي)", ur: "اللَّاتِي" },
        { en: "Al-lataani (اللَّتَانِ)" }
      ],
      correct: 1
    },
    {
      en: "What is the meaning and grammatical structure of 'Zuu' (ذُو) in accusative (Mansub) case?",
      ur: "منصوب حالت میں 'ذُو' کی شکل کیا ہو جاتی ہے؟",
      options: [
        { en: "Zii (ذِي)", ur: "ذِي" },
        { en: "Zaa (ذَا)", ur: "ذَا" },
        { en: "Zuu (ذُو)", ur: "ذُو" },
        { en: "Zawaa (ذَوَا)" }
      ],
      correct: 1
    },
    {
      en: "What does 'Al-thuluth' (الثُّلُثُ) mean?",
      ur: "'الثُّلُثُ' کا کیا مطلب ہے؟",
      options: [
        { en: "One fourth (1/4)", ur: "ایک چوتھائی" },
        { en: "One third (1/3)", ur: "ایک تہائی" },
        { en: "One half (1/2)", ur: "آدھا" },
        { en: "One tenth (1/10)" }
      ],
      correct: 1
    },
    {
      en: "What does 'Al-rubu'' (الرُّبُعُ) mean?",
      ur: "'الرُّبُعُ' کا کیا مطلب ہے؟",
      options: [
        { en: "One third (1/3)", ur: "ایک تہائی" },
        { en: "One fourth (1/4)", ur: "ایک چوتھائی" },
        { en: "One fifth (1/5)", ur: "پانچواں حصہ" },
        { en: "One eighth (1/8)" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'One half' in Arabic",
      ur: "ترجمہ کریں: 'آدھا' یا 'نصف'",
      options: [
        { en: "Al-thumunu (الثُّمُنُ)", ur: "الثُّمُنُ" },
        { en: "Al-nisfu (النِّصْفُ)", ur: "النِّصْفُ" },
        { en: "Al-sulusu (السُّلُسُ)", ur: "السُّلُسُ" },
        { en: "Al-khumusu (الْخُمُسُ)" }
      ],
      correct: 1
    }
  ],
  8: [ // Lesson 8: الفعل الماضي مسنداً إلى جميع الضمائر
    {
      en: "What is the conjugation of past verb 'Dhahaba' for the pronoun 'Hunna' (They, feminine)?",
      ur: "ضمیر 'هُنَّ' کے لیے 'ذَهَبَ' کی ماضی کی گردان کیا ہے؟",
      options: [
        { en: "Dhahabna (ذَهَبْنَ)", ur: "ذَهَبْنَ" },
        { en: "Dhahabtu (ذَهَبْتُ)", ur: "ذَهَبْتُ" },
        { en: "Dhahabnaa (ذَهَبْنَا)", ur: "ذَهَبْنَا" },
        { en: "Dhahabat (ذَهَبَتْ)" }
      ],
      correct: 0
    },
    {
      en: "What is the conjugation of past verb 'Dhahaba' for the pronoun 'Nahnu' (We)?",
      ur: "ضمیر 'نَحْنُ' کے لیے 'ذَهَبَ' کی ماضی کی گردان کیا ہے؟",
      options: [
        { en: "Dhahabna (ذَهَبْنَ)", ur: "ذَهَبْنَ" },
        { en: "Dhahabnaa (ذَهَبْنَا)", ur: "ذَهَبْنَا" },
        { en: "Dhahabtu (ذَهَبْتُ)", ur: "ذَهَبْتُ" },
        { en: "Dhahabtum (ذَهَبْتُمْ)" }
      ],
      correct: 1
    },
    {
      en: "What is a 'Damir Mustatir' (ضَمِيرٌ مُسْتَتِرٌ)?",
      ur: "'ضمیر مستتر' سے کیا مراد ہے؟",
      options: [
        { en: "An attached pronoun", ur: "متصل ضمیر" },
        { en: "A hidden/implied pronoun", ur: "پوشیدہ ضمیر" },
        { en: "A detached pronoun", ur: "منفصل ضمیر" },
        { en: "An accusative pronoun" }
      ],
      correct: 1
    },
    {
      en: "In the verb 'Dhahaba' (ذَهَبَ), where is the pronoun/subject?",
      ur: "فعل 'ذَهَبَ' میں فاعل/ضمیر کہاں ہے؟",
      options: [
        { en: "It is the Alif", ur: "وہ الف ہے" },
        { en: "It is a hidden pronoun 'Huwa'", ur: "وہ پوشیدہ ضمیر 'هُوَ' ہے" },
        { en: "It is the Ba", ur: "وہ با ہے" },
        { en: "There is no pronoun" }
      ],
      correct: 1
    },
    {
      en: "In the verb 'Dhahabat' (ذَهَبَتْ), what is the letter 'Ta' (تْ)?",
      ur: "فعل 'ذَهَبَتْ' میں حرفِ 'تْ' کیا ظاہر کرتا ہے؟",
      options: [
        { en: "It is the Fa'il (subject)", ur: "وہ فاعل ہے" },
        { en: "It is a sign of femininity (Taa al-ta'neeth), and the Fa'il is mustatir 'Hiya'", ur: "وہ مؤنث کی علامت ہے، اور فاعل مستتر 'هِيَ' ہے" },
        { en: "It is a preposition", ur: "وہ حرفِ جر ہے" },
        { en: "It is an object" }
      ],
      correct: 1
    },
    {
      en: "What is a 'Damir Baariz' (ضَمِيرٌ بَارِزٌ)?",
      ur: "'ضمیر بارز' سے کیا مراد ہے؟",
      options: [
        { en: "A hidden pronoun", ur: "پوشیدہ ضمیر" },
        { en: "A prominent / visible pronoun", ur: "ظاہر/نمایاں ضمیر" },
        { en: "A dual pronoun", ur: "تثنیہ ضمیر" },
        { en: "A relative pronoun" }
      ],
      correct: 1
    },
    {
      en: "In the verb 'Dhahabtu' (ذَهَبْتُ), what is the Fa'il (subject)?",
      ur: "فعل 'ذَهَبْتُ' میں فاعل کیا ہے؟",
      options: [
        { en: "It is a hidden pronoun", ur: "وہ پوشیدہ ضمیر ہے" },
        { en: "The visible pronoun 'Tu' (تُ)", ur: "ظاہر ضمیر 'تُ'" },
        { en: "The letter 'Dhal'", ur: "حرف ذ" },
        { en: "None" }
      ],
      correct: 1
    },
    {
      en: "In the verb 'Dhahabtum' (ذَهَبْتُمْ), what is the Fa'il?",
      ur: "فعل 'ذَهَبْتُمْ' میں فاعل کیا ہے؟",
      options: [
        { en: "The hidden pronoun", ur: "پوشیدہ ضمیر" },
        { en: "The pronoun 'Tum' (تُمْ)", ur: "ضمیر 'تُمْ'" },
        { en: "The letter 'Meem'", ur: "حرف م" },
        { en: "The letter 'Ta'" }
      ],
      correct: 1
    },
    {
      en: "In the verb 'Dhahabnaa' (ذَهَبْنَا), what is the Fa'il?",
      ur: "فعل 'ذَهَبْنَا' میں فاعل کیا ہے؟",
      options: [
        { en: "The pronoun 'Naa' (نَا)", ur: "ضمیر 'نَا'" },
        { en: "The hidden pronoun", ur: "پوشیدہ ضمیر" },
        { en: "The letter 'Noon'", ur: "حرف ن" },
        { en: "None" }
      ],
      correct: 0
    },
    {
      en: "In the verb 'Dhahabu' (ذَهَبُوا), what is the Fa'il?",
      ur: "فعل 'ذَهَبُوا' میں فاعل کیا ہے؟",
      options: [
        { en: "The hidden pronoun", ur: "پوشیدہ ضمیر" },
        { en: "The pronoun 'Waw' (و)", ur: "ضمیر 'و' (واؤ جمع)" },
        { en: "The Alif", ur: "الف" },
        { en: "The letter 'Ba'" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 1, how do you vocalize the middle letter of 'yaktub' (present of kataba)?",
      ur: "مشق 1 کے مطابق، 'كَتَبَ' کا مضارع 'يَكْتُب' میں درمیانی حرف پر کیا حرکت ہے؟",
      options: [
        { en: "Fatha (يَكْتَب)", ur: "فتحہ" },
        { en: "Dhamma (يَكْتُب)", ur: "ضمہ (پیش)" },
        { en: "Kasra (يَكْتِب)", ur: "کسرہ" },
        { en: "Sukun (يَكْتْب)" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 2, how do you vocalize the middle letter of 'yajlis' (present of jalasa)?",
      ur: "مشق 2 کے مطابق، 'جَلَسَ' کا مضارع 'يَجْلِس' میں درمیانی حرف پر کیا حرکت ہے؟",
      options: [
        { en: "Fatha (يَجْلَس)", ur: "فتحہ" },
        { en: "Kasra (يَجْلِس)", ur: "کسرہ (زیر)" },
        { en: "Dhamma (يَجْلُس)", ur: "ضمہ" },
        { en: "Sukun" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 3, how do you vocalize the middle letter of 'yaftah' (present of fataha)?",
      ur: "مشق 3 کے مطابق، 'فَتَحَ' کا مضارع 'يَفْتَح' میں درمیانی حرف پر کیا حرکت ہے؟",
      options: [
        { en: "Fatha (يَفْتَح)", ur: "فتحہ (زبر)" },
        { en: "Kasra (يَفْتِح)", ur: "کسرہ" },
        { en: "Dhamma (يَفْتُح)", ur: "ضمہ" },
        { en: "Sukun" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'We ate the breakfast'",
      ur: "ترجمہ کریں: 'ہم نے ناشتہ کھایا'",
      options: [
        { en: "Akalna al-fatoora", ur: "أَكَلْنَا الْفَطُورَ" },
        { en: "Akaltu al-fatoora", ur: "أَكَلْتُ الْفَطُورَ" },
        { en: "Akalu al-fatoora", ur: "أَكَلُوا الْفَطُورَ" },
        { en: "Akalat al-fatoora", ur: "أَكَلَتْ الْفَطُورَ" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'Did you (singular, masculine) understand the lesson?'",
      ur: "ترجمہ کریں: 'کیا تم نے سبق سمجھا؟'",
      options: [
        { en: "A-fahimta al-darsa?", ur: "أَفَهِمْتَ الدَّرْسَ؟" },
        { en: "A-fahimti al-darsa?", ur: "أَفَهِمْتِ الدَّرْسَ؟" },
        { en: "A-fahimtu al-darsa?", ur: "أَفَهِمْتُ الدَّرْسَ؟" },
        { en: "A-fahimtuma al-darsa?" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'Yes, I understood it (masculine)'",
      ur: "ترجمہ کریں: 'ہاں، میں اسے سمجھ گیا'",
      options: [
        { en: "Na'am, fahimtuhu", ur: "نَعَمْ، فَهِمْتُهُ" },
        { en: "Bala, fahimtuhu", ur: "بَلَى، فَهِمْتُهُ" },
        { en: "Na'am, fahimtaha", ur: "نَعَمْ، فَهِمْتَهَا" },
        { en: "Na'am, fahimtuka" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'They (women) entered the library'",
      ur: "ترجمہ کریں: 'وہ سب (مؤنث) لائبریری میں داخل ہوئیں'",
      options: [
        { en: "Dakhaltu al-maktabata", ur: "دَخَلْتُ الْمَكْتَبَةَ" },
        { en: "Dakhalna al-maktabata", ur: "دَخَلْنَ الْمَكْتَبَةَ" },
        { en: "Dakhaltun al-maktabata", ur: "دَخَلْتُنَّ الْمَكْتَبَةَ" },
        { en: "Dakhala al-maktabata" }
      ],
      correct: 1
    },
    {
      en: "Which past tense form is used for 'They two (masculine) went'?",
      ur: "'وہ دونوں (مذکر) گئے' کے لیے ماضی کا کون سا صیغہ ہے؟",
      options: [
        { en: "Dhahabaa (ذَهَبَا)", ur: "ذَهَبَا" },
        { en: "Dhahaba (ذَهَبَ)", ur: "ذَهَبَ" },
        { en: "Dhahabu (ذَهَبُوا)", ur: "ذَهَبُوا" },
        { en: "Dhahabata (ذَهَبَتَا)" }
      ],
      correct: 0
    }
  ],
  9: [ // Lesson 9: مراجعة الماضي والضمائر، علامة النصب للمؤنث السالم، التعجب، نداء المضاف
    {
      en: "What is the accusative marker for a sound feminine plural noun such as 'muslimaat'?",
      ur: "'مُسْلِمَات' جیسے جمع مؤنث سالم اسم کی حالتِ نصب کی علامت کیا ہے؟",
      options: [
        { en: "Kasrah, not Fathah", ur: "کسرہ، فتحہ نہیں" },
        { en: "Fathah, like most singular nouns", ur: "فتحہ، عام واحد اسم کی طرح" },
        { en: "Ya', like sound masculine plural", ur: "یاء، جمع مذکر سالم کی طرح" },
        { en: "It has no case marker", ur: "اس کی کوئی علامتِ اعراب نہیں ہوتی" }
      ],
      correct: 0
    },
    {
      en: "In 'ishtaraytu dafaatira jameelatan' (اِشْتَرَيْتُ دَفَاتِرَ جَمِيلَةً), what kind of plural is 'dafaatir'?",
      ur: "'اِشْتَرَيْتُ دَفَاتِرَ جَمِيلَةً' میں 'دَفَاتِرَ' کس قسم کی جمع ہے؟",
      options: [
        { en: "Broken plural, so its adjective is often feminine singular for non-human plurals", ur: "جمع مکسر؛ غیر عاقل جمع کی صفت عموماً واحد مؤنث آتی ہے" },
        { en: "Sound masculine plural", ur: "جمع مذکر سالم" },
        { en: "Dual noun", ur: "اسمِ تثنیہ" },
        { en: "Attached pronoun", ur: "ضمیر متصل" }
      ],
      correct: 0
    },
    {
      en: "What is the accusative case (Nasp) marker for a Sound Feminine Plural noun?",
      ur: "جمع مؤنث سالم کی حالتِ نصب کی علامت کیا ہوتی ہے؟",
      options: [
        { en: "Fatha (فتحة)", ur: "فتحہ" },
        { en: "Kasra (كسرة) instead of Fatha", ur: "کسرہ (زیر) فتحہ کی جگہ" },
        { en: "Dhamma (ضمة)", ur: "ضمہ" },
        { en: "Ya (ياء)" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 1, how do you vocalize 'Al-sayyaaraat' in: 'Ra'aitu al-sayyaaraat'?",
      ur: "مشق 1 کے مطابق، 'رَأَيْتُ السَّيَّارَاتِ' میں لفظِ سَّيَّارَاتِ پر کیا اعراب ہوگا؟",
      options: [
        { en: "Al-sayyaaraata (السَّيَّارَاتَ)", ur: "السَّيَّارَاتَ" },
        { en: "Al-sayyaaraati (السَّيَّارَاتِ)", ur: "السَّيَّارَاتِ" },
        { en: "Al-sayyaaraatu (السَّيَّارَاتُ)", ur: "السَّيَّارَاتُ" },
        { en: "Al-sayyaaraatan (السَّيَّارَاتًا)" }
      ],
      correct: 1
    },
    {
      en: "What is the pattern of the verb of wonder/exclamation (Fi'l al-Ta'ajjub)?",
      ur: "فعلِ تعجب (تعجب ظاہر کرنے والے جملے) کا وزن کیا ہے؟",
      options: [
        { en: "Maa af'alahu! (مَا أَفْعَلَهُ!)", ur: "مَا أَفْعَلَهُ!" },
        { en: "Af'ala bihi!", ur: "أَفْعِلْ بِهِ!" },
        { en: "Innahu kabeerun!", ur: "إِنَّهُ كَبِيرٌ!" },
        { en: "Ma kabeerun!" }
      ],
      correct: 0
    },
    {
      en: "In Exercise 2, how do you change 'Haza al-baytu kabeerun' into a sentence of wonder?",
      ur: "مشق 2 کے مطابق، 'هٰذَا الْبَيْتُ كَبِيرٌ' کو تعجب والے جملے میں کیسے بدلیں گے؟",
      options: [
        { en: "Maa akbara haza al-bayta! (مَا أَكْبَرَ هٰذَا الْبَيْتَ!)", ur: "مَا أَكْبَرَ هٰذَا الْبَيْتَ!" },
        { en: "Maa akbaru haza al-baytu!", ur: "مَا أَكْبَرُ هٰذَا الْبَيْتُ!" },
        { en: "Maa akbara haza al-bayti!", ur: "مَا أَكْبَرَ هٰذَا الْبَيْتِ!" },
        { en: "Ka-anna haza al-bayta kabeerun!" }
      ],
      correct: 0
    },
    {
      en: "What is the case of the noun being called (Munaada) when it is a Mudaaf?",
      ur: "جب پکارا جانے والا اسم (منادیٰ) مضاف ہو تو اس کا اعراب کیا ہوتا ہے؟",
      options: [
        { en: "Marfu'", ur: "مرفوع" },
        { en: "Mansub (e.g. yaa 'Abda Allahi)", ur: "منصوب (جیسے يَا عَبْدَ اللهِ)" },
        { en: "Majrur", ur: "مجرور" },
        { en: "Mabni" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 3, how do you say 'O son of my brother!'?",
      ur: "مشق 3 کے مطابق، 'اے میرے بھائی کے بیٹے!' کیسے کہیں گے؟",
      options: [
        { en: "Yaa ibna akhi! (يَا ابْنَ أَخِي!)", ur: "يَا ابْنَ أَخِي!" },
        { en: "Yaa ibnu akhi!", ur: "يَا ابْنُ أَخِي!" },
        { en: "Yaa ibni akhi!", ur: "يَا ابْنِ أَخِي!" },
        { en: "Yaa akhi ibna!" }
      ],
      correct: 0
    },
    {
      en: "What happens when the interrogative Hamza enters a word beginning with 'Al-'?",
      ur: "جب سوالیہ حمزہ 'اَلْ' سے شروع ہونے والے اسم پر داخل ہو تو کیا تبدیلی آتی ہے؟",
      options: [
        { en: "The Hamza is dropped", ur: "حمزہ حذف ہو جاتا ہے" },
        { en: "The Hamza and Alif merge into a long Alif (e.g. Aal-aana - آلْآنَ)", ur: "حمزہ اور الف مل کر ایک لمبا الف بن جاتے ہیں (جیسے آلْآنَ)" },
        { en: "They are written separately", ur: "دونوں الگ الگ لکھے جاتے ہیں" },
        { en: "The Alif is dropped" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Is it the class?'",
      ur: "ترجمہ کریں: 'کیا یہ کلاس ہے؟'",
      options: [
        { en: "A-al-faslu?", ur: "أَالْفَصْلُ؟" },
        { en: "Aal-faslu? (آلْفَصْلُ؟)", ur: "آلْفَصْلُ؟" },
        { en: "Hal al-faslu?", ur: "هَلْ الْفَصْلُ؟" },
        { en: "Both Aal-faslu and Hal al-faslu are correct", ur: "آلْفَصْلُ اور هَلِ الْفَصْلُ دونوں درست ہیں" }
      ],
      correct: 3
    },
    {
      en: "What happens to the Alif of 'Maa' (مَا) of question when preceded by a preposition?",
      ur: "حرفِ جر کے بعد آنے والے سوالیہ 'مَا' کے الف کا کیا ہوتا ہے؟",
      options: [
        { en: "It stays", ur: "وہ قائم رہتا ہے" },
        { en: "It is deleted (e.g. Li-ma, 'Am-ma, Bi-ma)", ur: "وہ حذف ہو جاتا ہے (جیسے لِمَ، عَمَّ، بِمَ)" },
        { en: "It becomes Ya", ur: "وہ یاء بن جاتا ہے" },
        { en: "It turns into Hamza" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'About what are you asking?' (Preposition 'An + Ma)",
      ur: "ترجمہ کریں: 'تم کس کے متعلق پوچھ رہے ہو؟' ('عن' + 'ما' کے ساتھ)",
      options: [
        { en: "'An maa tas'alu?", ur: "عَنْ مَا تَسْأَلُ؟" },
        { en: "'Am-ma tas'alu? (عَمَّ تَسْأَلُ؟)", ur: "عَمَّ تَسْأَلُ؟" },
        { en: "Li-ma tas'alu?", ur: "لِمَ تَسْأَلُ؟" },
        { en: "Bi-ma tas'alu?" }
      ],
      correct: 1
    },
    {
      en: "What is the plural of the relative pronoun 'Al-lazi' (الَّذِي - who/which, masc)?",
      ur: "مذکر کے لیے اسم موصول 'الَّذِي' کی جمع کیا ہے؟",
      options: [
        { en: "Al-lati (الَّتِي)", ur: "الَّتِي" },
        { en: "Al-lazeena (الَّذِينَ)", ur: "الَّذِينَ" },
        { en: "Al-laati (اللَّاتِي)", ur: "اللَّاتِي" },
        { en: "Al-la'i (اللَّائِي)" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'How beautiful is this car!'",
      ur: "ترجمہ کریں: 'یہ گاڑی کتنی خوبصورت ہے!'",
      options: [
        { en: "Maa ajmala hazihi al-sayyaarata! (مَا أَجْمَلَ هٰذِهِ السَّيَّارَةَ!)", ur: "مَا أَجْمَلَ هٰذِهِ السَّيَّارَةَ!" },
        { en: "Maa ajmalu hazihi al-sayyaaratu!", ur: "مَا أَجْمَلُ هٰذِهِ السَّيَّارَةُ!" },
        { en: "Maa ajmala hazihi al-sayyaarati!", ur: "مَا أَجْمَلَ هٰذِهِ السَّيَّارَةِ!" },
        { en: "Ka-anna hazihi al-sayyaarata jameelatun!" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'O grandfather!'",
      ur: "ترجمہ کریں: 'اے دادا جان!'",
      options: [
        { en: "Yaa jaddu! (يَا جَدُّ!)", ur: "يَا جَدُّ!" },
        { en: "Yaa jadda!", ur: "يَا جَدَّ!" },
        { en: "Yaa jaddi! (my grandfather)", ur: "يَا جَدِّي!" },
        { en: "Both Yaa jaddu and Yaa jaddi are correct depending on intent", ur: "يَا جَدُّ اور يَا جَدِّي دونوں درست ہیں" }
      ],
      correct: 0
    }
  ],
  10: [ // Lesson 10: المضارع مسنداً لبعض الضمائر، أبواب الثلاثي، أعداد 21-30
    {
      en: "Which present-tense prefix is used with 'Huwa' (هُوَ)?",
      ur: "'هُوَ' کے ساتھ فعلِ مضارع کے شروع میں کون سا سابقہ آتا ہے؟",
      options: [
        { en: "Ya- (يَـ), as in yadhhabu", ur: "يَـ، جیسے يَذْهَبُ" },
        { en: "Ta- (تَـ), as in tadhhabu", ur: "تَـ، جیسے تَذْهَبُ" },
        { en: "A- (أَـ), as in adhhabu", ur: "أَـ، جیسے أَذْهَبُ" },
        { en: "Na- (نَـ), as in nadhhabu", ur: "نَـ، جیسے نَذْهَبُ" }
      ],
      correct: 0
    },
    {
      en: "What prefix represents the present tense verb (Mudaari') for 'Huwa' (He)?",
      ur: "'هُوَ' کے لیے مضارع میں فعل کے شروع میں کون سا حرف لگتا ہے؟",
      options: [
        { en: "Ta- (تـ)", ur: "تـ" },
        { en: "Ya- (يـ)", ur: "يـ" },
        { en: "A- (أ)", ur: "أ" },
        { en: "Na- (نـ)" }
      ],
      correct: 1
    },
    {
      en: "What is the present tense verb 'Dhahaba' for 'Hiya' (She)?",
      ur: "'هِيَ' کے لیے 'ذَهَبَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Yadhabu (يَذْهَبُ)", ur: "يَذْهَبُ" },
        { en: "Tadhabu (تَذْهَبُ)", ur: "تَذْهَبُ" },
        { en: "Adhabu (أَذْهَبُ)", ur: "أَذْهَبُ" },
        { en: "Nadhabu (نَذْهَبُ)" }
      ],
      correct: 1
    },
    {
      en: "What is the present tense verb 'Dhahaba' for 'Ana' (I)?",
      ur: "'أَنَا' کے لیے 'ذَهَبَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Yadhabu (يَذْهَبُ)", ur: "يَذْهَبُ" },
        { en: "Tadhabu (تَذْهَبُ)", ur: "تَذْهَبُ" },
        { en: "Adhabu (أَذْهَبُ - I go)", ur: "أَذْهَبُ" },
        { en: "Nadhabu (نَذْهَبُ)" }
      ],
      correct: 2
    },
    {
      en: "What is the present tense verb 'Dhahaba' for 'Nahnu' (We)?",
      ur: "'نَحْنُ' کے لیے 'ذَهَبَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Yadhabu (يَذْهَبُ)", ur: "يَذْهَبُ" },
        { en: "Tadhabu (تَذْهَبُ)", ur: "تَذْهَبُ" },
        { en: "Adhabu (أَذْهَبُ)", ur: "أَذْهَبُ" },
        { en: "Nadhabu (نَذْهَبُ - We go)", ur: "نَذْهَبُ" }
      ],
      correct: 3
    },
    {
      en: "What is the present tense verb 'Dhahaba' for 'Anta' (You, masculine singular)?",
      ur: "'أَنْتَ' کے لیے 'ذَهَبَ' کا مضارع کیا ہے؟",
      options: [
        { en: "Yadhabu (يَذْهَبُ)", ur: "يَذْهَبُ" },
        { en: "Tadhabu (تَذْهَبُ - You go)", ur: "تَذْهَبُ" },
        { en: "Adhabu (أَذْهَبُ)", ur: "أَذْهَبُ" },
        { en: "Nadhabu (نَذْهَبُ)" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 1, how do you vocalize the middle letter of 'yaktub...' (present of kataba)?",
      ur: "مشق 1 کے مطابق، 'كَتَبَ' کا مضارع '\u064a\u064e\u0643\u0652\u062a\u0628\u064f' میں درمیانی حرف پر کیا حرکت ہے؟",
      options: [
        { en: "Fatha (\u064a\u064e\u0643\u0652\u062a\u064e\u0628\u064f)", ur: "فتحہ" },
        { en: "Dhamma (\u064a\u064e\u0643\u0652\u062a\u064f\u0628\u064f)", ur: "ضمہ (پیش)" },
        { en: "Kasra (\u064a\u064e\u0643\u0652\u062a\u0650\u062b\u064f)", ur: "کسرہ" },
        { en: "Sukun (\u064a\u064e\u0643\u0652\u062a\u0652\u0628\u064f)" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 2, how do you vocalize the middle letter of 'yajlis...' (present of jalasa)?",
      ur: "مشق 2 کے مطابق، 'جَلَسَ' کا مضارع '\u064a\u064e\u062c\u0652\u0644\u0633\u064f' میں درمیانی حرف پر کیا حرکت ہے؟",
      options: [
        { en: "Fatha (\u064a\u064e\u062c\u0652\u0644\u064e\u0633\u064f)", ur: "فتحہ" },
        { en: "Kasra (\u064a\u064e\u062c\u0652\u0644\u0650\u0633\u064f)", ur: "کسرہ (زیر)" },
        { en: "Dhamma (\u064a\u064e\u062c\u0652\u0644\u064f\u0633\u064f)", ur: "ضمہ" },
        { en: "Sukun" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 3, how do you vocalize the middle letter of 'yaftah...' (present of fataha)?",
      ur: "مشق 3 کے مطابق، 'فَتَحَ' کا مضارع '\u064a\u064e\u0641\u0652\u062a\u062d\u064f' میں درمیانی حرف پر کیا حرکت ہے؟",
      options: [
        { en: "Fatha (\u064a\u064e\u0641\u0652\u062a\u064e\u062d\u064f)", ur: "فتحہ (زبر)" },
        { en: "Kasra (\u064a\u064e\u0641\u0652\u062a\u0650\u062d\u064f)", ur: "کسرہ" },
        { en: "Dhamma (\u064a\u064e\u0641\u0652\u062a\u064f\u062d\u064f)", ur: "ضمہ" },
        { en: "Sukun" }
      ],
      correct: 0
    },

    {
      en: "What are the four common doors/categories (Abwab) of three-letter verbs mentioned here?",
      ur: "یہاں ذکر کردہ ثلاثی مجرد کے چار ابواب کون سے ہیں؟",
      options: [
        { en: "fa'ala-yaf'ulu, fa'ala-yaf'ilu, fa'ala-yaf'alu, fa'ila-yaf'alu", ur: "فَعَلَ-يَفْعُلُ، فَعَلَ-يَفْعِلُ، فَعَلَ-يَفْعَلُ، فَعِلَ-يَفْعَلُ" },
        { en: "fa'ula-yaf'ulu, fa'ila-yaf'ilu, fa'ala-yaf'ulu, fa'ila-yaf'alu", ur: "فَعُلَ-يَفْعُلُ، فَعِلَ-يَفْعِلُ، فَعَلَ-يَفْعُلُ، فَعِلَ-يَفْعَلُ" },
        { en: "All six Arabic doors", ur: "تمام چھ عربی ابواب" },
        { en: "Only one door" }
      ],
      correct: 0
    },
    {
      en: "Which category does 'Shariba / Yashrabu' (to drink) belong to?",
      ur: "'شَرِبَ / يَشْرَبُ' کس باب سے تعلق رکھتا ہے؟",
      options: [
        { en: "fa'ala-yaf'ulu", ur: "فَعَلَ-يَفْعُلُ" },
        { en: "fa'ila-yaf'alu (e.g. shari-ba / yash-rabu)", ur: "فَعِلَ-يَفْعَلُ" },
        { en: "fa'ala-yaf'ilu", ur: "فَعَلَ-يَفْعِلُ" },
        { en: "fa'ala-yaf'alu" }
      ],
      correct: 1
    },
    {
      en: "How are numbers 21-30 matched with a masculine counted noun?",
      ur: "مذکر معدود کے ساتھ اعداد 21 سے 30 کیسے جوڑے جاتے ہیں؟",
      options: [
        { en: "The unit part (1-9) opposes in gender (takes feminine ending for masculine counted noun)", ur: "اکائی والا حصہ (1-9) جنس میں الٹ ہوتا ہے (مذکر معدود کے لیے مؤنث گول تاء لیتا ہے)" },
        { en: "Both match the gender", ur: "دونوں جنس کے موافق ہوتے ہیں" },
        { en: "The unit part matches, tens part opposes", ur: "اکائی موافق اور دہائی الٹ ہوتی ہے" },
        { en: "No rules apply" }
      ],
      correct: 0
    },
    {
      en: "Translate: '25 students (masculine)'",
      ur: "ترجمہ کریں: '25 طلبہ'",
      options: [
        { en: "Khamsun wa 'ishroona taliban", ur: "خَمْسٌ وَعِشْرُونَ طَالِبًا" },
        { en: "Khamsatun wa 'ishroona taliban", ur: "خَمْسَةٌ وَعِشْرُونَ طَالِبًا" },
        { en: "Khamsatun wa 'ishroona talibin", ur: "خَمْسَةٌ وَعِشْرُونَ طَالِبٍ" },
        { en: "Khamsatu wa 'ishrina taliban", ur: "خَمْسَةُ وَعِشْرِينَ طَالِبًا" }
      ],
      correct: 1
    },
    {
      en: "What is the grammatical state of the counted noun after numbers 21-30?",
      ur: "اعداد 21 سے 30 کے بعد معدود کس حالت اور صیغے میں ہوتا ہے؟",
      options: [
        { en: "Singular and Majrur", ur: "واحد اور مجرور" },
        { en: "Singular and Mansub (e.g. taliban)", ur: "واحد اور منصوب (جیسے طَالِبًا)" },
        { en: "Plural and Majrur", ur: "جمع اور مجرور" },
        { en: "Plural and Mansub" }
      ],
      correct: 1
    },
    {
      en: "Translate: '21 men'",
      ur: "ترجمہ کریں: '21 مرد'",
      options: [
        { en: "Wahidun wa 'ishroona rajulan", ur: "وَاحِدٌ وَعِشْرُونَ رَجُلًا" },
        { en: "Ahada wa 'ishroona rajulan", ur: "أَحَدَ وَعِشْرُونَ رَجُلًا" },
        { en: "Ahadun wa 'ishroona rajulan (أَحَدٌ وَعِشْرُونَ رَجُلًا)", ur: "أَحَدٌ وَعِشْرُونَ رَجُلًا" },
        { en: "Ithnaani wa 'ishroona rajulan" }
      ],
      correct: 2
    }
  ]
};

async function seed() {
  console.log('🚀 Seeding Book 2 Questions: Part 1 (Lessons 1-10)...');
  try {
    for (const lecIdStr of Object.keys(questionsData)) {
      const lecId = parseInt(lecIdStr);
      const questions = questionsData[lecId];

      // Get quiz ID for this lecture ID (which has course_id = 2)
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

      // Clear existing questions for this quiz first to avoid duplicates
      await sql`DELETE FROM questions WHERE quiz_id = ${quizId}`;

      let count = 0;
      for (const q of questions) {
        // Shuffle options
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
    console.log('\n🎉 Finished Seeding Part 1!');
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

seed();
