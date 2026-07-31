import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

const questionsData = {
  21: [ // Lesson 21: جزم المضارع بـ لم ولما، حذف النون، الجملتان، أقسام الكلمة، اللاتي
    {
      en: "In 'lammaa yadkhul' (لَمَّا يَدْخُلْ), what is the grammatical effect of 'lammaa' on the verb?",
      ur: "'لَمَّا يَدْخُلْ' میں 'لَمَّا' فعل پر کیا نحوی اثر ڈالتا ہے؟",
      options: [
        { en: "It negates 'not yet' and makes the Mudari' Majzum", ur: "یہ 'ابھی تک نہیں' کا معنی دیتا ہے اور مضارع کو مجزوم کرتا ہے" },
        { en: "It makes the Mudari' Mansub", ur: "یہ مضارع کو منصوب کرتا ہے" },
        { en: "It confirms that the action already happened", ur: "یہ عمل کے ہو چکنے کی تاکید کرتا ہے" },
        { en: "It is a Harf Jarr for nouns only" }
      ],
      correct: 0
    },
    {
      en: "What does the particle 'Lammaa' (لَمَّا) mean and do?",
      ur: "حرفِ 'لَمَّا' کا کیا مطلب ہے اور یہ مضارع پر کیا اثر ڈالتا ہے؟",
      options: [
        { en: "It negates the past up to the present (not yet) and makes the verb Majzoom", ur: "یہ زمانہ ماضی سے لے کر حال تک کی نفی کرتا ہے (ابھی تک نہیں) اور فعل کو مجزوم کرتا ہے" },
        { en: "It means 'Because' and makes the verb Mansub", ur: "اس کا مطلب 'کیونکہ' ہے اور منصوب کرتا ہے" },
        { en: "It means 'Indeed'", ur: "اس کا مطلب 'بے شک' ہے" },
        { en: "It has no grammatical effect" }
      ],
      correct: 0
    },
    {
      en: "What happens to the noon in 'The Five Verbs' (Al-Af'aal al-Khamsah) in the jussive (Majzoom) case?",
      ur: "حالتِ جزم میں 'افعالِ خمسہ' کے اعراب میں کیا تبدیلی آتی ہے؟",
      options: [
        { en: "The noon is dropped (e.g. lam yadhaboo)", ur: "نون حذف ہو جاتا ہے (جیسے لَمْ يَذْهَبُوا)" },
        { en: "The noon remains", ur: "نون باقی رہتا ہے" },
        { en: "The noon changes to Waw", ur: "نون واؤ میں بدل جاتا ہے" },
        { en: "They get a Kasra" }
      ],
      correct: 0
    },
    {
      en: "What is the jussive form of 'Tadhabeena' (تَذْهَبِينَ) after 'Lam'?",
      ur: "'لَمْ' کے بعد 'تَذْهَبِينَ' کی مجزوم شکل کیا ہوگی؟",
      options: [
        { en: "Lam tadhabeena", ur: "لَمْ تَذْهَبِينَ" },
        { en: "Lam tadhabee (لَمْ تَذْهَبِي - dropping Noon)", ur: "لَمْ تَذْهَبِي" },
        { en: "Lam tadhabna", ur: "لَمْ تَذْهَبْنِ" },
        { en: "Lam tadhabu" }
      ],
      correct: 1
    },
    {
      en: "What are the three parts of speech in Arabic (Aqsam al-Kalimah)?",
      ur: "عربی زبان میں کلمہ کی تین اقسام (اقسامِ کلمہ) کون سی ہیں؟",
      options: [
        { en: "Ism (Noun), Fi'l (Verb), Harf (Particle)", ur: "اسم، فعل اور حرف" },
        { en: "Mubtada, Khabar, Fa'il", ur: "مبتدا، خبر اور فاعل" },
        { en: "Mudaaf, Mudaaf Ilayhi, Sifat", ur: "مضاف، مضاف الیہ اور صفت" },
        { en: "None of the above" }
      ],
      correct: 0
    },
    {
      en: "What are the relative pronouns used for plural feminine?",
      ur: "جمع مؤنث کے لیے کون سے اسمائے موصولہ استعمال ہوتے ہیں؟",
      options: [
        { en: "Al-lati (الَّتِي)", ur: "الَّتِي" },
        { en: "Al-laati (اللَّاتِي) and Al-lawati (اللَّوَاتِي)", ur: "اللَّاتِي اور اللَّوَاتِي" },
        { en: "Al-lazeena (الَّذِينَ)", ur: "الَّذِينَ" },
        { en: "Al-lataani" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'The female teachers who (plural) left'",
      ur: "ترجمہ کریں: 'وہ استانیاں جو چلی گئیں'",
      options: [
        { en: "Al-mudarrisaatu al-lati kharajna", ur: "الْمُدَرِّسَاتُ الَّتِي خَرَجْنَ" },
        { en: "Al-mudarrisaatu al-laati kharajna (الْمُدَرِّسَاتُ اللَّاتِي خَرَجْنَ)", ur: "الْمُدَرِّسَاتُ اللَّاتِي خَرَجْنَ" },
        { en: "Al-mudarrisaatu al-lazeena kharajna", ur: "الْمُدَرِّسَاتُ الَّذِينَ خَرَجْنَ" },
        { en: "Al-mudarrisaatu al-laati kharajuu" }
      ],
      correct: 1
    },
    {
      en: "What is a nominal sentence (Jumlah Ismiyyah)?",
      ur: "جملہ اسمیہ کسے کہتے ہیں؟",
      options: [
        { en: "A sentence that starts with a verb", ur: "وہ جملہ جو فعل سے شروع ہو" },
        { en: "A sentence that starts with a noun (and consists of Mubtada and Khabar)", ur: "وہ جملہ جو اسم سے شروع ہو (اور مبتدا اور خبر پر مشتمل ہو)" },
        { en: "A sentence that starts with a preposition", ur: "وہ جملہ جو حرفِ جر سے شروع ہو" },
        { en: "A question sentence" }
      ],
      correct: 1
    },
    {
      en: "What is a verbal sentence (Jumlah Fi'liyyah)?",
      ur: "جملہ فعلیہ کسے کہتے ہیں؟",
      options: [
        { en: "A sentence that starts with a verb (and consists of verb and subject)", ur: "وہ جملہ جو فعل سے شروع ہو (اور فعل اور فاعل پر مشتمل ہو)" },
        { en: "A sentence that starts with a noun", ur: "وہ جملہ جو اسم سے شروع ہو" },
        { en: "A sentence that has no object", ur: "وہ جملہ جس میں مفعول نہ ہو" },
        { en: "None" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'They (men) have not written the lesson yet'",
      ur: "ترجمہ کریں: 'ان سب نے ابھی تک سبق نہیں لکھا ہے'",
      options: [
        { en: "Lam yaktuboo al-darsa lammaa", ur: "لَمْ يَكْتُبُوا الدَّرْسَ لَمَّا" },
        { en: "Lammaa yaktuboo al-darsa (لَمَّا يَكْتُبُوا الدَّرْسَ)", ur: "لَمَّا يَكْتُبُوا الدَّرْسَ" },
        { en: "Lammaa yaktubna al-darsa", ur: "لَمَّا يَكْتُبْنَ الدَّرْسَ" },
        { en: "Lam yaktubu al-darsa" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'The girls have not returned yet'",
      ur: "ترجمہ کریں: 'لڑکیاں ابھی تک واپس نہیں آئی ہیں'",
      options: [
        { en: "Lammaa tarji' al-banaatu (لَمَّا تَرْجِعِ الْبَنَاتُ)", ur: "لَمَّا تَرْجِعِ الْبَنَاتُ" },
        { en: "Lammaa yarji'na al-banaatu", ur: "لَمَّا يَرْجِعْنَ الْبَنَاتُ" },
        { en: "Lam yarji' al-banaatu", ur: "لَمْ يَرْجِعِ الْبَنَاتُ" },
        { en: "Lammaa tarji'u al-banaatu" }
      ],
      correct: 0
    },
    {
      en: "What is the jussive form of 'Tadhabna' (You all, feminine) after 'Lam'?",
      ur: "'لَمْ' کے بعد 'تَذْهَبْنَ' کی مجزوم شکل کیا ہوگی؟",
      options: [
        { en: "Lam tadhabna (unchanged as it is Mabni)", ur: "لَمْ تَذْهَبْنَ (مبنی ہونے کی وجہ سے کوئی تبدیلی نہیں)" },
        { en: "Lam tadhabee", ur: "لَمْ تَذْهَبِي" },
        { en: "Lam tadhaboo", ur: "لَمْ تَذْهَبُوا" },
        { en: "Lam tadhaban" }
      ],
      correct: 0
    },
    {
      en: "In Exercise 2, what is the jussive of 'tashrabeena' (you drink, feminine singular)?",
      ur: "مشق 2 کے مطابق، 'تَشْرَبِينَ' کا مجزوم کیا ہے؟",
      options: [
        { en: "tashrabee (تَشْرَبِي)", ur: "تَشْرَبِي" },
        { en: "tashrabi", ur: "تَشْرَبِ" },
        { en: "tashrabna", ur: "تَشْرَبْنَ" },
        { en: "yashrabee" }
      ],
      correct: 0
    },
    {
      en: "What does 'Saddaqa' (صَدَّقَ) mean?",
      ur: "'صَدَّقَ' کا کیا مطلب ہے؟",
      options: [
        { en: "He believed / spoke the truth", ur: "اس نے تصدیق کی / سچ کہا" },
        { en: "He lied", ur: "اس نے جھوٹ بولا" },
        { en: "He asked", ur: "اس نے پوچھا" },
        { en: "He gave charity" }
      ],
      correct: 0
    },
    {
      en: "What does 'Kazzaba' (كَذَّبَ) mean?",
      ur: "'كَذَّبَ' کا کیا مطلب ہے؟",
      options: [
        { en: "He believed", ur: "اس نے مانا" },
        { en: "He denied / lied / accused of lying", ur: "اس نے جھٹلایا / جھوٹ بولا" },
        { en: "He helped", ur: "اس نے مدد کی" },
        { en: "He spoke" }
      ],
      correct: 1
    }
  ],
  22: [ // Lesson 22: حالات المضارع (مراجعة)
    {
      en: "What are the three grammatical states of the present tense verb (Mudaari')?",
      ur: "مضارع فعل کی تین اعرابی حالتیں کون سی ہیں؟",
      options: [
        { en: "Marfu' (nominative), Mansub (subjunctive), Majrur (genitive)", ur: "مرفوع، منصوب اور مجرور" },
        { en: "Marfu' (nominative), Mansub (subjunctive), Majzoom (jussive)", ur: "مرفوع، منصوب اور مجزوم (مضارع مجرور نہیں ہوتا)" },
        { en: "Mabni, Mu'rab, Majrur", ur: "مبنی، معرب اور مجرور" },
        { en: "None of the above" }
      ],
      correct: 1
    },
    {
      en: "Which state is a present verb in by default (e.g. yadhabu)?",
      ur: "مضارع فعل بنیادی طور پر کس حالت میں ہوتا ہے؟",
      options: [
        { en: "Marfu' (nominative with Dhamma or Noon)", ur: "مرفوع (حالتِ رفع)" },
        { en: "Mansub", ur: "منصوب" },
        { en: "Majzoom", ur: "مجزوم" },
        { en: "Mabni" }
      ],
      correct: 0
    },
    {
      en: "What particles cause the present verb to become Mansub?",
      ur: "کون سے حروف مضارع کو منصوب (حالتِ نصب میں) کرتے ہیں؟",
      options: [
        { en: "Lam, Lamma, La of prohibition", ur: "لَمْ، لَمَّا اور لَا ناہیہ" },
        { en: "An, Lan, Li- (Lam of purpose) (أَنْ، لَنْ، لِـ)", ur: "أَنْ، لَنْ اور لِـ" },
        { en: "Inna and its sisters", ur: "اِنَّ اور اس کی بہنیں" },
        { en: "Prepositions" }
      ],
      correct: 1
    },
    {
      en: "What particles cause the present verb to become Majzoom?",
      ur: "کون سے حروف مضارع کو مجزوم کرتے ہیں؟",
      options: [
        { en: "An, Lan, Li-", ur: "أَنْ، لَنْ، لِـ" },
        { en: "Lam, Lamma, La of prohibition (لَمْ، لَمَّا، لَا النَّاهِيَةُ)", ur: "لَمْ، لَمَّا اور لَا ناہیہ" },
        { en: "Inna and Kana", ur: "اِنَّ اور کان" },
        { en: "Huroof al-Jarr" }
      ],
      correct: 1
    },
    {
      en: "In 'Lam yadkhul' (لَمْ يَدْخُلْ), what case is the verb?",
      ur: "'لَمْ' کے بعد 'يَدْخُلْ' کس حالت میں ہے؟",
      options: [
        { en: "Mansub", ur: "منصوب" },
        { en: "Majzoom (due to lam)", ur: "مجزوم (لَمْ کی وجہ سے)" },
        { en: "Marfu'", ur: "مرفوع" },
        { en: "Majrur" }
      ],
      correct: 1
    },
    {
      en: "In 'Lan yadkhula' (لَنْ يَدْخُلَ), what case is the verb?",
      ur: "'لَنْ' کے بعد 'يَدْخُلَ' کس حالت میں ہے؟",
      options: [
        { en: "Majzoom", ur: "مجزوم" },
        { en: "Mansub (due to lan)", ur: "منصوب (لَنْ کی وجہ سے)" },
        { en: "Marfu'", ur: "مرفوع" },
        { en: "Majrur" }
      ],
      correct: 1
    },
    {
      en: "In 'Yadkhulu' (يَدْخُلُ), what case is the verb?",
      ur: "'يَدْخُلُ' کس حالت میں ہے؟",
      options: [
        { en: "Mansub", ur: "منصوب" },
        { en: "Marfu' (unchanged present verb)", ur: "مرفوع" },
        { en: "Majzoom", ur: "مجزوم" },
        { en: "Majrur" }
      ],
      correct: 1
    },
    {
      en: "In Exercise 1, what is the Marfu', Mansub, and Majzoom forms of 'Tadhaboona'?",
      ur: "مشق 1 کے مطابق، 'تَذْهَبُونَ' کی بالترتیب مرفوع، منصوب اور مجزوم شکلیں کیا ہیں؟",
      options: [
        { en: "Tadhaboona / Tadhaboo / Tadhaboo (تَذْهَبُونَ / تَذْهَبُوا / تَذْهَبُوا)", ur: "تَذْهَبُونَ / تَذْهَبُوا / تَذْهَبُوا" },
        { en: "Tadhaboona / Tadhaboona / Tadhaboo", ur: "تَذْهَبُونَ / تَذْهَبُونَ / تَذْهَبُوا" },
        { en: "Tadhaboo / Tadhaboo / Tadhaboona", ur: "تَذْهَبُوا / تَذْهَبُوا / تَذْهَبُونَ" },
        { en: "Tadhabna / Tadhabna / Tadhabna" }
      ],
      correct: 0
    },
    {
      en: "In Exercise 2, what is the Marfu', Mansub, and Majzoom forms of 'Tadhabna' (plural feminine)?",
      ur: "مشق 2 کے مطابق، جمع مؤنث 'تَذْهَبْنَ' کی مرفوع، منصوب اور مجزوم شکلیں کیا ہیں؟",
      options: [
        { en: "Tadhabna / Tadhabna / Tadhabna (fixed/Mabni)", ur: "تَذْهَبْنَ / تَذْهَبْنَ / تَذْهَبْنَ (مبنی ہونے کی وجہ سے)" },
        { en: "Tadhabna / Tadhaboo / Tadhaboo", ur: "تَذْهَبْنَ / تَذْهَبُوا / تَذْهَبُوا" },
        { en: "Tadhabna / Tadhabee / Tadhabee", ur: "تَذْهَبْنَ / تَذْهَبِي / تَذْهَبِي" },
        { en: "Tadhabna / Tadhaban / Tadhaban" }
      ],
      correct: 0
    },
    {
      en: "What is the Marfu', Mansub, and Majzoom of 'Tadhabeena'?",
      ur: "'تَذْهَبِينَ' کی مرفوع، منصوب اور مجزوم شکلیں کیا ہیں؟",
      options: [
        { en: "Tadhabeena / Tadhabee / Tadhabee (dropping Noon for both)", ur: "تَذْهَبِينَ / تَذْهَبِي / تَذْهَبِي" },
        { en: "Tadhabeena / Tadhabeena / Tadhabee", ur: "تَذْهَبِينَ / تَذْهَبِينَ / تَذْهَبِي" },
        { en: "Tadhabee / Tadhabee / Tadhabeena", ur: "تَذْهَبِي / تَذْهَبِي / تَذْهَبِينَ" },
        { en: "Tadhabna / Tadhabna / Tadhabna" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'Do not eat and do not drink' (prohibition, singular masculine)",
      ur: "ترجمہ کریں: 'تم نہ کھاؤ اور نہ پیو' (مخاطب واحد مذکر)",
      options: [
        { en: "La ta'kul wa la tashrab (لَا تَأْكُلْ وَلَا تَشْرَبْ)", ur: "لَا تَأْكُلْ وَلَا تَشْرَبْ" },
        { en: "La ta'kulu wa la tashrabu", ur: "لَا تَأْكُلُ وَلَا تَشْرَبُ" },
        { en: "Lan ta'kula wa lan tashraba", ur: "لَنْ تَأْكُلَ وَلَنْ تَشْرَبَ" },
        { en: "Lam ta'kul wa lam tashrab" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'You will never enter the garden'",
      ur: "ترجمہ کریں: 'تم سب باغ میں ہرگز داخل نہیں ہو گے'",
      options: [
        { en: "La tadkhuloona al-hadiqata", ur: "لَا تَدْخُلُونَ الْحَدِيقَةَ" },
        { en: "Lan tadkhuloo al-hadiqata (لَنْ تَدْخُلُوا الْحَدِيقَةَ - dropping Noon)", ur: "لَنْ تَدْخُلُوا الْحَدِيقَةَ" },
        { en: "Lam tadkhuloo al-hadiqata", ur: "لَمْ تَدْخُلُوا الْحَدِيقَةَ" },
        { en: "Lan tadkhuloona al-hadiqa" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'We did not study today'",
      ur: "ترجمہ کریں: 'ہم نے آج پڑھائی نہیں کی'",
      options: [
        { en: "La nadrusu al-yawma", ur: "لَا نَدْرُسُ الْيَوْمَ" },
        { en: "Lam nadrus al-yawma (لَمْ نَدْرُسِ الْيَوْمَ - jussive with lam)", ur: "لَمْ نَدْرُسِ الْيَوْمَ" },
        { en: "Lan nadrusa al-yawma", ur: "لَنْ نَدْرُسَ الْيَوْمَ" },
        { en: "Ma nadrusu al-yawma" }
      ],
      correct: 1
    },
    {
      en: "In 'Lam nadrus al-yawma', why is the Seen (س) of nadrus pronounced with a Kasra (si) instead of Sukun?",
      ur: "'لَمْ نَدْرُسِ الْيَوْمَ' میں س پر کسرہ (زیر) کیوں پڑھا جا رہا ہے جبکہ یہ مجزوم ہے؟",
      options: [
        { en: "To avoid meeting of two silent letters (il-tiqa' al-sakinaat)", ur: "دو ساکن حرفوں کے اکٹھے ہونے (التائے ساکنین) سے بچنے کے لیے" },
        { en: "It is an exception in grammar", ur: "نحو میں ایک استثناء ہے" },
        { en: "Due to the word al-yawma", ur: "لفظ الیوم کی وجہ سے" },
        { en: "None" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'He wants to play'",
      ur: "ترجمہ کریں: 'وہ کھیلنا چاہتا ہے'",
      options: [
        { en: "Yureedu an yal'aba (يُرِيدُ أَنْ يَلْعَبَ)", ur: "يُرِيدُ أَنْ يَلْعَبَ" },
        { en: "Yureedu an yal'abu", ur: "يُرِيدُ أَنْ يَلْعَبُ" },
        { en: "Yureedu li-yal'aba", ur: "يُرِيدُ لِيَلْعَبَ" },
        { en: "Yureedu yal'ab" }
      ],
      correct: 0
    }
  ],
  23: [ // Lesson 23: إعراب جمع المذكر السالم، العقود، نفي الماضي بـ لا
    {
      en: "What represents the sound masculine plural (Jam' Mudhakkar Salim) in the nominative (Marfu') case?",
      ur: "حالتِ رفع میں جمع مذکر سالم کی علامت کیا ہوتی ہے؟",
      options: [
        { en: "-oona (ـونَ) - e.g. mudarrisoona", ur: "ـونَ (جیسے مُدَرِّسُونَ)" },
        { en: "-eena (ـيْنَ)", ur: "ـيْنَ" },
        { en: "-aat", ur: "ـات" },
        { en: "-aani" }
      ],
      correct: 0
    },
    {
      en: "What represents the sound masculine plural in the accusative (Mansub) and genitive (Majrur) cases?",
      ur: "حالتِ نصب اور حالتِ جر میں جمع مذکر سالم کی علامت کیا ہوتی ہے؟",
      options: [
        { en: "-oona (ـونَ)", ur: "ـونَ" },
        { en: "-eena (ـيْنَ) - e.g. mudarriseena", ur: "ـيْنَ (جیسے مُدَرِّسِينَ)" },
        { en: "-aat", ur: "ـات" },
        { en: "-ayni" }
      ],
      correct: 1
    },
    {
      en: "What are the decade numbers (20, 30, 40... 90) called in Arabic?",
      ur: "دہائی والے اعداد (20، 30، 40 سے 90) کو عربی میں کیا کہتے ہیں؟",
      options: [
        { en: "Al-'Uqood (الْعُقُودُ)", ur: "الْعُقُودُ" },
        { en: "Al-A'daad", ur: "الأعداد" },
        { en: "Al-Mu'rabaat", ur: "المعربات" },
        { en: "Al-Diptotes" }
      ],
      correct: 0
    },
    {
      en: "How do decade numbers (Al-'Uqood) behave grammatically in different cases?",
      ur: "دہائی والے اعداد (عقود) مختلف اعرابی حالات میں کیسے برتاؤ کرتے ہیں؟",
      options: [
        { en: "They behave like Sound Masculine Plural (e.g. 'ishroona in nominative, 'ishreena in accusative/genitive)", ur: "وہ جمع مذکر سالم کی طرح برتاؤ کرتے ہیں (حالتِ رفع میں عِشْرُونَ اور نصب/جر میں عِشْرِينَ)" },
        { en: "They remain Mabni (fixed)", ur: "وہ ہمیشہ مبنی رہتے ہیں" },
        { en: "They take a Dhamma or Fatha on the last letter", ur: "ان کے آخری حرف پر زبر یا پیش آتا ہے" },
        { en: "They are diptotes" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'I bought thirty books'",
      ur: "ترجمہ کریں: 'میں نے تیس کتابیں خریدیں'",
      options: [
        { en: "Ishtaraitu thalaathoona kitaaban", ur: "اشْتَرَيْتُ ثَلَاثُونَ كِتَابًا" },
        { en: "Ishtaraitu thalaatheena kitaaban (اشْتَرَيْتُ ثَلَاثِينَ كِتَابًا - decade number in accusative object)", ur: "اشْتَرَيْتُ ثَلَاثِينَ كِتَابًا" },
        { en: "Ishtaraitu thalaatheena kitaabin", ur: "اشْتَرَيْتُ ثَلَاثِينَ كِتَابٍ" },
        { en: "Thalaathoona kitaaban ishtaraitu" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I asked fifty teachers (masculine)'",
      ur: "ترجمہ کریں: 'میں نے پچاس اساتذہ سے پوچھا'",
      options: [
        { en: "Sa'altu khamsoona mudarrisan", ur: "سَأَلْتُ خَمْسُونَ مُدَرِّسًا" },
        { en: "Sa'altu khamseena mudarriseena (خَمْسِينَ مُدَرِّسِينَ - decade + plural in accusative)", ur: "سَأَلْتُ خَمْسِينَ مُدَرِّسِينَ" },
        { en: "Sa'altu khamseena mudarrisan", ur: "سَأَلْتُ خَمْسِينَ مُدَرِّسًا" },
        { en: "Sa'altu khamsoona mudarriseena" }
      ],
      correct: 1
    },
    {
      en: "When can you negate a past tense verb using 'La' (لَا) instead of 'Ma' (مَا)?",
      ur: "ماضی فعل کی نفی 'مَا' کے بجائے 'لَا' سے کب کی جا سکتی ہے؟",
      options: [
        { en: "Only when repeated in the sentence (e.g. laa ra'aa wa laa sami'a - neither saw nor heard)", ur: "صرف اس وقت جب جملے میں تکرار ہو (جیسے لَا رَأَى وَلَا سَمِعَ - نہ دیکھا اور نہ سنا)" },
        { en: "Anytime", ur: "کبھی بھی" },
        { en: "Only in questions", ur: "صرف سوالات میں" },
        { en: "Never" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'He neither ate nor drank'",
      ur: "ترجمہ کریں: 'اس نے نہ کھایا اور نہ پیا'",
      options: [
        { en: "Ma akala wa ma shariba", ur: "مَا أَكَلَ وَمَا شَرِبَ" },
        { en: "La akala wa la shariba (لَا أَكَلَ وَلَا شَرِبَ - repeated la for past negation)", ur: "لَا أَكَلَ وَلَا شَرِبَ" },
        { en: "Lam ya'kul wa lam yashrab", ur: "لَمْ يَأْكُلْ وَلَمْ يَشْرَبْ" },
        { en: "Both Ma akala wa ma shariba and La akala wa la shariba are correct", ur: "پہلا اور دوسرا دونوں درست ہیں" }
      ],
      correct: 3
    },
    {
      en: "Translate: 'The engineers (masculine plural) are in the factory'",
      ur: "ترجمہ کریں: 'انجینئر فیکٹری میں ہیں'",
      options: [
        { en: "Al-muhandisoona fil masna'i (الْمُهَنْدِسُونَ فِي الْمَصْنَعِ)", ur: "الْمُهَنْدِسُونَ فِي الْمَصْنَعِ" },
        { en: "Al-muhandiseena fil masna'i", ur: "الْمُهَنْدِسِينَ فِي الْمَصْنَعِ" },
        { en: "Al-muhandisoona fil masna'u", ur: "الْمُهَنْدِسُونَ فِي الْمَصْنَعُ" },
        { en: "Al-muhandisoon fil masna'i" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'I spoke with the engineers'",
      ur: "ترجمہ کریں: 'میں نے انجینئروں سے بات کی'",
      options: [
        { en: "Takallamtu ma'a al-muhandisoona", ur: "تَكَلَّمْتُ مَعَ الْمُهَنْدِسُونَ" },
        { en: "Takallamtu ma'a al-muhandiseena (تَكَلَّمْتُ مَعَ الْمُهَنْدِسِينَ - plural in genitive after ma'a)", ur: "تَكَلَّمْتُ مَعَ الْمُهَنْدِسِينَ" },
        { en: "Takallamtu bi-muhandiseena", ur: "تَكَلَّمْتُ بِمُهَنْدِسِينَ" },
        { en: "Takallamtu ma'a al-muhandisoon" }
      ],
      correct: 1
    },
    {
      en: "What happens to the final Noon of Sound Masculine Plural when it acts as a Mudaaf (possessor)?",
      ur: "جب جمع مذکر سالم مضاف بنتا ہے تو اس کے آخر کا نون کیا ہو جاتا ہے؟",
      options: [
        { en: "It stays", ur: "وہ قائم رہتا ہے" },
        { en: "It is dropped (e.g. mudarrisoo al-madrasati)", ur: "وہ گر جاتا ہے (جیسے مُدَرِّسُو الْمَدْرَسَةِ)" },
        { en: "It turns into Fatha", ur: "وہ فتحہ بن جاتا ہے" },
        { en: "It turns into Alif" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'The teachers of the school came'",
      ur: "ترجمہ کریں: 'اسکول کے اساتذہ آئے'",
      options: [
        { en: "Jaa'a mudarrisoon al-madrasati", ur: "جَاءَ مُدَرِّسُونَ الْمَدْرَسَةِ" },
        { en: "Jaa'a mudarrisoo al-madrasati (جَاءَ مُدَرِّسُو الْمَدْرَسَةِ - dropping Noon)", ur: "جَاءَ مُدَرِّسُو الْمَدْرَسَةِ" },
        { en: "Jaa'a mudarrisee al-madrasati", ur: "جَاءَ مُدَرِّسِي الْمَدْرَسَةِ" },
        { en: "Mudarrisoo al-madrasati jaa'a" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I saw the teachers of the school'",
      ur: "ترجمہ کریں: 'میں نے اسکول کے اساتذہ کو دیکھا'",
      options: [
        { en: "Ra'aitu mudarrisoo al-madrasati", ur: "رَأَيْتُ مُدَرِّسُو الْمَدْرَسَةِ" },
        { en: "Ra'aitu mudarrisee al-madrasati (رَأَيْتُ مُدَرِّسِي الْمَدْرَسَةِ - plural in accusative acting as Mudaaf)", ur: "رَأَيْتُ مُدَرِّسِي الْمَدْرَسَةِ" },
        { en: "Ra'aitu mudarriseena al-madrasati", ur: "رَأَيْتُ مُدَرِّسِينَ الْمَدْرَسَةِ" },
        { en: "Ra'aitu mudarriseen" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'He has eighty riyals'",
      ur: "ترجمہ کریں: 'اس کے پاس اسی (80) ریال ہیں'",
      options: [
        { en: "'Indahu thamanoona riyalan ('عِنْدَهُ ثَمَانُونَ رِيَالًا')", ur: "عِنْدَهُ ثَمَانُونَ رِيَالًا" },
        { en: "'Indahu thamaneena riyalan", ur: "عِنْدَهُ ثَمَانِينَ رِيَالًا" },
        { en: "'Indahu thamanoona riyalin", ur: "عِنْدَهُ ثَمَانُونَ رِيَالٍ" },
        { en: "Lahu thamanoona riyal" }
      ],
      correct: 0
    },
    {
      en: "What does 'Sana' (سَنَةٌ - year) mean and what is its plural?",
      ur: "'سَنَةٌ' (سال) کا کیا مطلب ہے اور اس کی جمع کیا ہے؟",
      options: [
        { en: "Year / Sanoona (سَنُونَ) or Sanawaat (سَنَوَاتٌ)", ur: "سال / سَنُونَ یا سَنَوَاتٌ" },
        { en: "Month / Ashhur", ur: "مہینہ / اَشْهُرٌ" },
        { en: "Day / Ayyaam", ur: "دن / اَيَّامٌ" },
        { en: "Week / Asabee'" }
      ],
      correct: 0
    }
  ],
  24: [ // Lesson 24: مراجعة العدد
    {
      en: "What is the rule of gender agreement for numbers 3-10 in Arabic?",
      ur: "عربی میں اعداد 3 سے 10 کی جنس کا کیا قاعدہ ہے؟",
      options: [
        { en: "The number opposes the counted noun in gender (masculine noun takes feminine number)", ur: "عدد اپنے معدود کی جنس کے الٹ ہوتا ہے (مذکر معدود مؤنث عدد لیتا ہے)" },
        { en: "The number matches the counted noun in gender", ur: "عدد معدود کی جنس کے موافق ہوتا ہے" },
        { en: "Numbers 3-10 are always feminine", ur: "3 سے 10 ہمیشہ مؤنث ہوتے ہیں" },
        { en: "Numbers 3-10 are always masculine" }
      ],
      correct: 0
    },
    {
      en: "What is the rule of form and case for the counted noun (Ma'dood) after numbers 3-10?",
      ur: "اعداد 3 سے 10 کے بعد معدود کس صیغے اور اعراب میں ہوتا ہے؟",
      options: [
        { en: "Singular and Mansub", ur: "واحد اور منصوب" },
        { en: "Plural and Majrur (acting as Mudaaf Ilayhi) (e.g. thalaathatu kutubin)", ur: "جمع اور مجرور (بطور مضاف الیہ) (جیسے ثَلَاثَةُ كُتُبٍ)" },
        { en: "Plural and Mansub", ur: "جمع اور منصوب" },
        { en: "Singular and Majrur" }
      ],
      correct: 1
    },
    {
      en: "What is the rule of form and case for the counted noun after numbers 11-99?",
      ur: "اعداد 11 سے 99 کے بعد معدود کس صیغے اور اعراب میں ہوتا ہے؟",
      options: [
        { en: "Plural and Majrur", ur: "جمع اور مجرور" },
        { en: "Singular and Mansub (e.g. khamsata 'ashara taliban) (واحد منصوب)", ur: "واحد اور منصوب (جیسے خَمْسَةَ عَشَرَ طَالِبًا)" },
        { en: "Singular and Majrur", ur: "واحد اور مجرور" },
        { en: "Plural and Mansub" }
      ],
      correct: 1
    },
    {
      en: "What is the rule of form and case for the counted noun after 100 (Miah) and 1000 (Alf)?",
      ur: "اعداد 100 اور 1000 کے بعد معدود کس صیغے اور اعراب میں ہوتا ہے؟",
      options: [
        { en: "Plural and Majrur", ur: "جمع اور مجرور" },
        { en: "Singular and Majrur (e.g. miatu kitaabin) (واحد مجرور)", ur: "واحد اور مجرور (جیسے مِائَةُ كِتَابٍ)" },
        { en: "Singular and Mansub", ur: "واحد اور منصوب" },
        { en: "Plural and Mansub" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Three boys'",
      ur: "ترجمہ کریں: 'تین لڑکے'",
      options: [
        { en: "Thalaathatu awlaadin (ثَلَاثَةُ أَوْلَادٍ - opposes masc. walad)", ur: "ثَلَاثَةُ أَوْلَادٍ" },
        { en: "Thalaathu awlaadin", ur: "ثَلَاثُ أَوْلَادٍ" },
        { en: "Thalaathatu waladin", ur: "ثَلَاثَةُ وَلَدٍ" },
        { en: "Thalaathatu awlaadan" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'Three girls'",
      ur: "ترجمہ کریں: 'تین لڑکیاں'",
      options: [
        { en: "Thalaathatu banaatin", ur: "ثَلَاثَةُ بَنَاتٍ" },
        { en: "Thalaathu banaatin (ثَلَاثُ بَنَاتٍ - opposes fem. bint)", ur: "ثَلَاثُ بَنَاتٍ" },
        { en: "Thalaathu bintin", ur: "ثَلَاثُ بِنْتٍ" },
        { en: "Thalaathu banaatan" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Eleven students (masculine)'",
      ur: "ترجمہ کریں: 'گیارہ طالب علم'",
      options: [
        { en: "Ahada 'ashara taliban (أَحَدَ عَشَرَ طَالِبًا)", ur: "أَحَدَ عَشَرَ طَالِبًا" },
        { en: "Ihna 'ashrata taliban", ur: "إِحْدَى عَشَرَةَ طَالِبًا" },
        { en: "Ahada 'ashara talibin", ur: "أَحَدَ عَشَرَ طَالِبٍ" },
        { en: "Ahadu 'ashara taliban" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'Twelve students (feminine)'",
      ur: "ترجمہ کریں: 'بارہ طالبات'",
      options: [
        { en: "Ithna 'ashara taalibatan", ur: "اِثْنَا عَشَرَ طَالِبَةً" },
        { en: "Ithnata 'ashrata taalibatan (اِثْنَتَا عَشَرَةَ طَالِبَةً)", ur: "اِثْنَتَا عَشَرَةَ طَالِبَةً" },
        { en: "Ithnata 'ashrata taalibatin", ur: "اِثْنَتَا عَشَرَةَ طَالِبَةٍ" },
        { en: "Ithna 'ashrata taalibatan" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Twenty houses'",
      ur: "ترجمہ کریں: 'بیس گھر'",
      options: [
        { en: "'Ishroona buyutan", ur: "عِشْرُونَ بُيُوتًا" },
        { en: "'Ishroona baitan (عِشْرُونَ بَيْتًا - decade + singular mansub)", ur: "عِشْرُونَ بَيْتًا" },
        { en: "'Ishroona baitin", ur: "عِشْرُونَ بَيْتٍ" },
        { en: "'Ishreena baitan" }
      ],
      correct: 1
    },
    {
      en: "Translate: '100 riyals'",
      ur: "ترجمہ کریں: '100 ریال'",
      options: [
        { en: "Miatu riyalan", ur: "مِائَةُ رِيَالًا" },
        { en: "Miatu riyalin (مِائَةُ رِيَالٍ - singular majrur)", ur: "مِائَةُ رِيَالٍ" },
        { en: "Miatu riyalaatin", ur: "مِائَةُ رِيَالَاتٍ" },
        { en: "Miatun riyalin" }
      ],
      correct: 1
    },
    {
      en: "Translate: '1000 pages (safhah)'",
      ur: "ترجمہ کریں: '1000 صفحات (صفحہ)'",
      options: [
        { en: "Alfu safhah (أَلْفُ صَفْحَةٍ)", ur: "أَلْفُ صَفْحَةٍ" },
        { en: "Alfu safhataan", ur: "أَلْفُ صَفْحَةً" },
        { en: "Alfu safahaatin", ur: "أَلْفُ صَفَحَاتٍ" },
        { en: "Alfun safhatin" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'Fourteen pens'",
      ur: "ترجمہ کریں: 'چودہ قلم'",
      options: [
        { en: "Arba'ata 'ashara qalamun", ur: "أَرْبَعَةَ عَشَرَ قَلَمٌ" },
        { en: "Arba'ata 'ashara qalaman (أَرْبَعَةَ عَشَرَ قَلَمًا)", ur: "أَرْبَعَةَ عَشَرَ قَلَمًا" },
        { en: "Arba'a 'ashrata qalaman", ur: "أَرْبَعَ عَشَرَةَ قَلَمًا" },
        { en: "Arba'ata 'ashara aqlamin" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Fourteen cars'",
      ur: "ترجمہ کریں: 'چودہ گاڑیاں'",
      options: [
        { en: "Arba'ata 'ashara sayyaaratan", ur: "أَرْبَعَةَ عَشَرَ سَيَّارَةً" },
        { en: "Arba'a 'ashrata sayyaaratan (أَرْبَعَ عَشَرَةَ سَيَّارَةً)", ur: "أَرْبَعَ عَشَرَةَ سَيَّارَةً" },
        { en: "Arba'ata 'ashrata sayyaaratin", ur: "أَرْبَعَةَ عَشَرَةَ سَيَّارَةٍ" },
        { en: "Arba'a 'ashara sayyaaratan" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Seventy students (masculine)'",
      ur: "ترجمہ کریں: 'ستر طالب علم'",
      options: [
        { en: "Sab'oona taliban (سَبْعُونَ طَالِبًا)", ur: "سَبْعُونَ طَالِبًا" },
        { en: "Sab'eena taliban", ur: "سَبْعِينَ طَالِبًا" },
        { en: "Sab'oona talibin", ur: "سَبْعُونَ طَالِبٍ" },
        { en: "Sab'oona tullaabin" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'The third book'",
      ur: "ترجمہ کریں: 'تیسری کتاب'",
      options: [
        { en: "Al-kitabu al-thaalithu (الْكِتَابُ الثَّالِثُ)", ur: "الْكِتَابُ الثَّالِثُ" },
        { en: "Al-kitabu al-thalaathatu", ur: "الْكِتَابُ الثَّلَاثَةُ" },
        { en: "Al-kitabu al-thaalithata", ur: "الْكِتَابُ الثَّالِثَةَ" },
        { en: "Al-kitabu al-sali-su" }
      ],
      correct: 0
    }
  ],
  25: [ // Lesson 25: كان وما زال، إعراب الأسماء الخمسة
    {
      en: "What does the verb 'Ma zaala' (مَا زَالَ) mean and do?",
      ur: "'مَا زَالَ' کا کیا مطلب ہے اور یہ کیا کام کرتا ہے؟",
      options: [
        { en: "It means 'He did not cease / Still' and behaves like Kana (makes Khabar Mansub)", ur: "اس کا مطلب 'وہ ابھی تک ہے / بدستور ہے' ہے اور یہ کان جیسا عمل کرتا ہے (خبر کو منصوب کرتا ہے)" },
        { en: "It means 'He disappeared' and makes Khabar Marfu'", ur: "اس کا مطلب 'وہ زائل ہو گیا' ہے" },
        { en: "It means 'Perhaps'", ur: "اس کا مطلب 'شاید' ہے" },
        { en: "It has no grammatical effect" }
      ],
      correct: 0
    },
    {
      en: "What are 'The Five Nouns' (Al-Asma' al-Khamsah) in Arabic?",
      ur: "عربی زبان میں 'اسمائے خمسہ' (پانچ خاص اسماء) کون سے ہیں؟",
      options: [
        { en: "Ab, Akh, Ham, Fū, Zū (أَبٌ، أَخٌ، حَمٌ، فُو، ذُو)", ur: "أَبٌ، أَخٌ، حَمٌ، فَمٌ، ذُو" },
        { en: "Kitaab, Qalam, Bait, Bab, Fasl", ur: "كتاب، قلم، بيت، باب، فصل" },
        { en: "Huwa, Huma, Hum, Hiya, Hunna", ur: "ضمائر" },
        { en: "None of the above" }
      ],
      correct: 0
    },
    {
      en: "What represents the nominative (Marfu') case for the Five Nouns when they act as Mudaaf?",
      ur: "اسمائے خمسہ جب مضاف ہوں تو ان کی حالتِ رفع کی علامت کیا ہوتی ہے؟",
      options: [
        { en: "Dhamma (ضمة)", ur: "ضمہ" },
        { en: "Waw (واو) - e.g. abooka (أَبُوكَ)", ur: "واؤ (جیسے أَبُوكَ)" },
        { en: "Alif (ألف)", ur: "الف" },
        { en: "Ya (ياء)" }
      ],
      correct: 1
    },
    {
      en: "What represents the accusative (Mansub) case for the Five Nouns when they act as Mudaaf?",
      ur: "اسمائے خمسہ جب مضاف ہوں تو ان کی حالتِ نصب کی علامت کیا ہوتی ہے؟",
      options: [
        { en: "Fatha (فتحة)", ur: "فتحہ" },
        { en: "Alif (ألف) - e.g. abaaka (أَبَاكَ)", ur: "الف (جیسے أَبَاكَ)" },
        { en: "Waw", ur: "واؤ" },
        { en: "Ya" }
      ],
      correct: 1
    },
    {
      en: "What represents the genitive (Majrur) case for the Five Nouns when they act as Mudaaf?",
      ur: "اسمائے خمسہ جب مضاف ہوں تو ان کی حالتِ جر کی علامت کیا ہوتی ہے؟",
      options: [
        { en: "Kasra (كسرة)", ur: "کسرہ" },
        { en: "Ya (ياء) - e.g. abeeka (أَبِيكَ)", ur: "یاء (جیسے أَبِيكَ)" },
        { en: "Alif", ur: "الف" },
        { en: "Waw" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Your father is a famous doctor'",
      ur: "ترجمہ کریں: 'تمہارے والد ایک مشہور ڈاکٹر ہیں'",
      options: [
        { en: "Abooka tabibun mashhoorun (أَبُوكَ طَبِيبٌ مَشْهُورٌ)", ur: "أَبُوكَ طَبِيبٌ مَشْهُورٌ" },
        { en: "Abaaka tabibun mashhoorun", ur: "أَبَاكَ طَبِيبٌ مَشْهُورٌ" },
        { en: "Abeeka tabibun mashhoorun", ur: "أَبِيكَ طَبِيبٌ مَشْهُورٌ" },
        { en: "Abun-ka tabibun mashhoorun" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'I saw your brother'",
      ur: "ترجمہ کریں: 'میں نے تمہارے بھائی کو دیکھا'",
      options: [
        { en: "Ra'aitu akhooka", ur: "رَأَيْتُ أَخُوكَ" },
        { en: "Ra'aitu akhaaka (رَأَيْتُ أَخَاكَ - object in accusative)", ur: "رَأَيْتُ أَخَاكَ" },
        { en: "Ra'aitu akheeka", ur: "رَأَيْتُ أَخِيكَ" },
        { en: "Ra'aitu akhun-ka" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'I went with your father'",
      ur: "ترجمہ کریں: 'میں تمہارے والد کے ساتھ گیا'",
      options: [
        { en: "Dhahabtu ma'a abooka", ur: "ذَهَبْتُ مَعَ أَبُوكَ" },
        { en: "Dhahabtu ma'a abaaka", ur: "ذَهَبْتُ مَعَ أَبَاكَ" },
        { en: "Dhahabtu ma'a abeeka (ذَهَبْتُ مَعَ أَبِيكَ - majrur after ma'a)", ur: "ذَهَبْتُ مَعَ أَبِيكَ" },
        { en: "Dhahabtu ma'a abee-ka" }
      ],
      correct: 2
    },
    {
      en: "Do these unique rules (Waw, Alif, Ya) apply if the Five Nouns are NOT Mudaaf (e.g. just 'abun')?",
      ur: "اگر اسمائے خمسہ مضاف نہ ہوں (جیسے محض 'أَبٌ')، تو کیا یہ قواعد (واؤ، الف، یاء) لاگو ہوں گے؟",
      options: [
        { en: "Yes, they still apply", ur: "جی ہاں، پھر بھی لاگو ہوں گے" },
        { en: "No, they take normal endings (Dhamma, Fatha, Kasra) (e.g. haza abun, ra'aitu aban)", ur: "جی نہیں، پھر ان پر عام اعراب (پیش، زبر، زیر) آئیں گے (جیسے هٰذَا أَبٌ)" },
        { en: "Only in the nominative case", ur: "صرف حالتِ رفع میں" },
        { en: "They become Mabni" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Bilal is still sick'",
      ur: "ترجمہ کریں: 'بلال ابھی تک بیمار ہے'",
      options: [
        { en: "Maa zaala Bilalun mareedun", ur: "مَا زَالَ بِلَالٌ مَرِيضٌ" },
        { en: "Maa zaala Bilalun mareedan (مَا زَالَ بِلَالٌ مَرِيضًا - mareedan is Khabar Ma Zaala)", ur: "مَا زَالَ بِلَالٌ مَرِيضًا" },
        { en: "Maa zaala Bilalan mareedan", ur: "مَا زَالَ بِلَالًا مَرِيضًا" },
        { en: "Kaana Bilalun mareedan" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'The teacher is still standing'",
      ur: "ترجمہ کریں: 'استاد ابھی تک کھڑے ہیں'",
      options: [
        { en: "Maa zaala al-mudarrisu waaqifan (مَا زَالَ الْمُدَرِّسُ وَاقِفًا)", ur: "مَا زَالَ الْمُدَرِّسُ وَاقِفًا" },
        { en: "Maa zaala al-mudarrisu waaqifun", ur: "مَا زَالَ الْمُدَرِّسُ وَاقِفٌ" },
        { en: "Maa zaala al-mudarrisa waaqifan", ur: "مَا زَالَ الْمُدَرِّسَ وَاقِفًا" },
        { en: "Kaana al-mudarrisu waaqifan" }
      ],
      correct: 0
    },
    {
      en: "What is the declension of the Five Nouns when they are attached to the first person singular pronoun 'Ya' (ي - my) (e.g. 'abii')?",
      ur: "جب اسمائے خمسہ متکلم کی یاء 'ي' (میرے) کے ساتھ جڑے ہوں (جیسے 'أَبِي') تو ان کا اعراب کیا ہوتا ہے؟",
      options: [
        { en: "They take estimated vowels (Muqaddarah) and do not show Waw/Alif", ur: "ان پر تقدیری اعراب آتے ہیں اور واؤ/الف ظاہر نہیں ہوتا" },
        { en: "They still take Waw, Alif, Ya", ur: "ان پر واؤ، الف، یاء ہی رہتا ہے" },
        { en: "They become indeclinable", ur: "وہ مبنی ہو جاتے ہیں" },
        { en: "None" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'My father wrote to my brother'",
      ur: "ترجمہ کریں: 'میرے والد نے میرے بھائی کو لکھا'",
      options: [
        { en: "Kataba abii ila akhii (كَتَبَ أَبِي إِلَى أَخِي)", ur: "كَتَبَ أَبِي إِلَى أَخِي" },
        { en: "Kataba abooy ila akheey", ur: "كَتَبَ أَبُويَ إِلَى أَخِيوَ" },
        { en: "Kataba abaay ila akhaay", ur: "كَتَبَ أَبَايَ إِلَى أَخَايَ" },
        { en: "Kataba abee ila akhi" }
      ],
      correct: 0
    },
    {
      en: "What does 'Fuu' (فُو) mean?",
      ur: "'فُو' का کیا مطلب ہے؟",
      options: [
        { en: "Your nose", ur: "تمہارا ناک" },
        { en: "Your mouth (possessor of mouth)", ur: "تمہارا منہ" },
        { en: "Your hand", ur: "تمہارا ہاتھ" },
        { en: "Your face" }
      ],
      correct: 1
    },
    {
      en: "Translate: 'Wash your mouth!'",
      ur: "ترجمہ کریں: 'اپنا منہ دھوؤ!'",
      options: [
        { en: "Ighsil faka (اِغْسِلْ فَاكَ - object in accusative with Alif)", ur: "اِغْسِلْ فَاكَ" },
        { en: "Ighsil fooka", ur: "اِغْسِلْ فُوكَ" },
        { en: "Ighsil feeka", ur: "اِغْسِلْ فِيكَ" },
        { en: "Ighsil famuka" }
      ],
      correct: 0
    }
  ],
  26: [ // Lesson 26: المعتل الفاء (المثال الواوي)، التصغير، اسم التفضيل من المضعف، ها هو ذا
    {
      en: "What is a 'Mithal' (الفِعْلُ الْمِثَالُ) verb in Arabic grammar?",
      ur: "عربی قواعد میں 'فعلِ مثال' کسے کہتے ہیں؟",
      options: [
        { en: "A verb whose first root letter is a weak letter (like Waw or Ya)", ur: "وہ فعل جس کا پہلا حرفِ اصلی حرفِ علت ہو (جیسے واؤ یا یاء)" },
        { en: "A verb whose middle letter is weak", ur: "وہ فعل جس کا درمیانی حرفِ اصلی حرفِ علت ہو" },
        { en: "A verb whose last letter is weak", ur: "وہ فعل جس کا آخری حرفِ اصلی حرفِ علت ہو" },
        { en: "A verb with doubled letters" }
      ],
      correct: 0
    },
    {
      en: "What happens to the first letter 'Waw' (و) in the present tense (Mudaari') of a Mithal Wawi verb (like Wa-qa-fa)?",
      ur: "مثالِ واوی فعل (جیسے وَقَفَ) کے مضارع میں شروع کی واؤ کا کیا ہوتا ہے؟",
      options: [
        { en: "The Waw is dropped (e.g. waqafa -> yaqifu)", ur: "واؤ حذف ہو جاتی ہے (جیسے وَقَفَ -> يَقِفُ)" },
        { en: "The Waw changes to Ya", ur: "واؤ یاء میں بدل جاتی ہے" },
        { en: "The Waw remains unchanged (e.g. yawqifu)", ur: "واؤ قائم رہتی ہے" },
        { en: "The Waw turns into Alif" }
      ],
      correct: 0
    },
    {
      en: "What is the present tense of 'Wajada' (to find)?",
      ur: "'وَجَدَ' (پانا) کا مضارع کیا ہوگا؟",
      options: [
        { en: "Yawjidu (يَوْجِدُ)", ur: "يَوْجِدُ" },
        { en: "Yajidu (يَجِدُ - dropping Waw)", ur: "يَجِدُ" },
        { en: "Yajadu (يَجَدُ)", ur: "يَجَدُ" },
        { en: "Wajada" }
      ],
      correct: 1
    },
    {
      en: "What is the present tense of 'Wada'a' (to put/place)?",
      ur: "'وَضَعَ' (رکھنا) کا مضارع کیا ہوگا؟",
      options: [
        { en: "Yawda'u (يَوْضَعُ)", ur: "يَوْضَعُ" },
        { en: "Yada'u (يَضَعُ - dropping Waw, third letter has Fatha)", ur: "يَضَعُ" },
        { en: "Yadi'u (يَضِعُ)", ur: "يَضِعُ" },
        { en: "Wada'a" }
      ],
      correct: 1
    },
    {
      en: "What is the imperative (Amr) of the Mithal Wawi verb 'Waqafa' (to stand)?",
      ur: "'وَقَفَ' (کھڑے ہونا) کا فعلِ امر کیا ہوگا؟",
      options: [
        { en: "Iwqif (اِوْقِفْ)", ur: "اِوْقِفْ" },
        { en: "Qif (قِفْ - dropping Waw and present prefix)", ur: "قِفْ" },
        { en: "Uqif (اُقِفْ)", ur: "اُقِفْ" },
        { en: "Waqif" }
      ],
      correct: 1
    },
    {
      en: "What is the imperative (Amr) of 'Wada'a' (to put)?",
      ur: "'وَضَعَ' کا فعلِ امر کیا ہوگا؟",
      options: [
        { en: "Da' (ضَعْ)", ur: "ضَعْ" },
        { en: "Ida' (اِضَعْ)", ur: "اِضَعْ" },
        { en: "Wada' (وَدَعْ)", ur: "وَدَعْ" },
        { en: "Da'u" }
      ],
      correct: 0
    },
    {
      en: "What is the diminutive form (Tasgheer - التصغير) of a noun used for?",
      ur: "اسم کی تصغیر (چھوٹا ظاہر کرنے والا اسم) کس لیے استعمال ہوتی ہے؟",
      options: [
        { en: "To express smallness, affection, or closeness", ur: "چھوٹا پن، پیار یا قربت ظاہر کرنے کے لیے" },
        { en: "To make it plural", ur: "جمع بنانے کے لیے" },
        { en: "To negate it", ur: "نفی کرنے کے لیے" },
        { en: "To make it feminine" }
      ],
      correct: 0
    },
    {
      en: "What is the pattern of the diminutive for a three-letter noun (like kalb)?",
      ur: "ثلاثی اسم (جیسے كَلْبٌ) کی تصغیر کا وزن کیا ہے؟",
      options: [
        { en: "Fu'aylun (فُعَيْلٌ) - e.g. kulaybun (كُلَيْبٌ - small dog)", ur: "فُعَيْلٌ (جیسے كُلَيْبٌ)" },
        { en: "Fa'eelun (فَعِيلٌ)", ur: "فَعِيلٌ" },
        { en: "Fu'aalun (فُعَالٌ)", ur: "فُعَالٌ" },
        { en: "Maf'ool" }
      ],
      correct: 0
    },
    {
      en: "What is the diminutive of 'Ibnu' (ابْنٌ - son)?",
      ur: "'ابْنٌ' (بیٹا) کی تصغیر کیا ہے؟",
      options: [
        { en: "Bunayyu (بُنَيَّ - my dear little son)", ur: "بُنَيَّ" },
        { en: "Ibnayun (ابْنَيٌّ)", ur: "ابْنَيٌّ" },
        { en: "Buneel (بُنِيلٌ)", ur: "بُنِيلٌ" },
        { en: "Ibnoon" }
      ],
      correct: 0
    },
    {
      en: "How is the comparative/superlative (Ism al-Tafdeel) formed from a doubled verb (like habba - to love)?",
      ur: "مضاعف فعل (جیسے حَبَّ) سے اسم التفضیل کیسے بنتا ہے؟",
      options: [
        { en: "Ahabbu (أَحَبُّ) - combining the double letters", ur: "أَحَبُّ" },
        { en: "Ahbabu (أَحْبَبُ)", ur: "أَحْبَبُ" },
        { en: "Habee-bun (حَبِيبٌ)", ur: "حَبِيبٌ" },
        { en: "Mahboob" }
      ],
      correct: 0
    },
    {
      en: "What is the meaning and structure of 'Ha huwa za' (هَا هُوَ ذَا)?",
      ur: "'هَا هُوَ ذَا' کا کیا مطلب ہے؟",
      options: [
        { en: "Here he is / Here it is (masculine)", ur: "یہ رہا وہ (مذکر)" },
        { en: "Here she is / Here it is (feminine)", ur: "یہ رہی وہ (مؤنث)" },
        { en: "Who is that", ur: "وہ کون ہے" },
        { en: "There he is" }
      ],
      correct: 0
    },
    {
      en: "What is the feminine form of 'Ha huwa za' (هَا هُوَ ذَا)?",
      ur: "'هَا هُوَ ذَا' کی مؤنث شکل کیا ہے؟",
      options: [
        { en: "Ha hiya zi (هَا هِيَ ذِي)", ur: "هَا هِيَ ذِي" },
        { en: "Ha huwa zi (هَا هُوَ ذِي)", ur: "هَا هُوَ ذِي" },
        { en: "Ha hiya za (هَا هِيَ ذَا)", ur: "هَا هِيَ ذَا" },
        { en: "None" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'Here is the book' (masculine)",
      ur: "ترجمہ کریں: 'یہ رہی کتاب'",
      options: [
        { en: "Ha huwa za al-kitabu (هَا هُوَ ذَا الْكِتَابُ)", ur: "هَا هُوَ ذَا الْكِتَابُ" },
        { en: "Ha hiya zi al-kitabu", ur: "هَا هِيَ ذِي الْكِتَابُ" },
        { en: "Ha huwa al-kitabu", ur: "هَا هُوَ الْكِتَابُ" },
        { en: "Ha huwa zi al-kitabu" }
      ],
      correct: 0
    },
    {
      en: "Translate: 'Here is the car' (feminine)",
      ur: "ترجمہ کریں: 'یہ رہی گاڑی'",
      options: [
        { en: "Ha huwa za al-sayyaaratu", ur: "هَا هُوَ ذَا السَّيَّارَةُ" },
        { en: "Ha hiya zi al-sayyaaratu (هَا هِيَ ذِي السَّيَّارَةُ)", ur: "هَا هِيَ ذِي السَّيَّارَةُ" },
        { en: "Ha hiya za al-sayyaaratu", ur: "هَا هِيَ ذَا السَّيَّارَةُ" },
        { en: "Ha hiya al-sayyaaratu" }
      ],
      correct: 1
    },
    {
      en: "What is the verbal noun (Masdar) of 'Dhahaba' (to go)?",
      ur: "'ذَهَبَ' کا مصدر کیا ہے؟",
      options: [
        { en: "Dhahaabun (ذَهَابٌ)", ur: "ذَهَابٌ" },
        { en: "Zhahaabun (ذِهَابٌ)", ur: "ذِهَابٌ" },
        { en: "Zaahibun (ذَاهِبٌ)", ur: "ذَاهِبٌ" },
        { en: "Mazhab" }
      ],
      correct: 0
    }
  ]
};

async function seed() {
  console.log('🚀 Seeding Book 2 Questions: Part 4 (Lessons 21-26)...');
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
    console.log('\n🎉 Finished Seeding Part 4!');
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

seed();
