import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

const questionsData = {
  27: [ // Lesson 27: Ajwaf verbs (middle weak letter)
    { en: "What is an Ajwaf verb?", ur: "فعلِ اجوف کسے کہتے ہیں؟", options: [{ en: "A verb whose middle root letter is weak", ur: "جس کا درمیانی حرفِ علت ہو" }, { en: "A verb whose first root letter is weak", ur: "جس کا پہلا حرفِ علت ہو" }, { en: "A verb whose last root letter is weak", ur: "جس کا آخری حرفِ علت ہو" }, { en: "A doubled verb", ur: "فعلِ مضاعف" }], correct: 0 },
    { en: "Which verb is Ajwaf?", ur: "کون سا فعل اجوف ہے؟", options: [{ en: "Qaala (قَالَ)", ur: "قَالَ" }, { en: "Wa'ada (وَعَدَ)", ur: "وَعَدَ" }, { en: "Ramaa (رَمَى)", ur: "رَمَى" }, { en: "Madda (مَدَّ)", ur: "مَدَّ" }], correct: 0 },
    { en: "What is the original pattern behind 'qaala' (قَالَ)?", ur: "'قَالَ' کی اصل شکل کس طرح سمجھی جاتی ہے؟", options: [{ en: "Qawala (قَوَلَ)", ur: "قَوَلَ" }, { en: "Qawwala (قَوَّلَ)", ur: "قَوَّلَ" }, { en: "Qaliya (قَلِيَ)", ur: "قَلِيَ" }, { en: "Qa'ilun (قَائِلٌ)", ur: "قَائِلٌ" }], correct: 0 },
    { en: "In Ajwaf past tense with a moving subject suffix, what often happens to the weak middle letter?", ur: "فعلِ اجوف ماضی میں متحرک ضمیر آنے پر درمیانی حرفِ علت کا کیا ہوتا ہے؟", options: [{ en: "It is dropped, as in qultu", ur: "حذف ہو جاتا ہے، جیسے قُلْتُ" }, { en: "It becomes doubled", ur: "مشدد ہو جاتا ہے" }, { en: "It becomes hamzah", ur: "ہمزہ بن جاتا ہے" }, { en: "It always remains alif", ur: "ہمیشہ الف رہتا ہے" }], correct: 0 },
    { en: "Which is the correct 'I said' form from qaala?", ur: "'قَالَ' سے 'میں نے کہا' کی درست شکل کون سی ہے؟", options: [{ en: "Qultu (قُلْتُ)", ur: "قُلْتُ" }, { en: "Qaalatu (قَالَتُ)", ur: "قَالَتُ" }, { en: "Qawaltu (قَوَلْتُ)", ur: "قَوَلْتُ" }, { en: "Qiltu (قِلْتُ)", ur: "قِلْتُ" }], correct: 0 },
    { en: "What is the Mudari' of 'qaala' for 'huwa'?", ur: "'قَالَ' کا 'هُوَ' کے لیے مضارع کیا ہے؟", options: [{ en: "Yaquulu (يَقُولُ)", ur: "يَقُولُ" }, { en: "Yaqaalu (يَقَالُ)", ur: "يَقَالُ" }, { en: "Yaqulu (يَقُلُ)", ur: "يَقُلُ" }, { en: "Yaqwalu (يَقْوَلُ)", ur: "يَقْوَلُ" }], correct: 0 },
    { en: "After 'lam', what is the jussive form of 'yaquulu'?", ur: "'لَمْ' کے بعد 'يَقُولُ' کی مجزوم شکل کیا ہے؟", options: [{ en: "Lam yaqul (لَمْ يَقُلْ)", ur: "لَمْ يَقُلْ" }, { en: "Lam yaquulu (لَمْ يَقُولُ)", ur: "لَمْ يَقُولُ" }, { en: "Lam yaqoola (لَمْ يَقُولَ)", ur: "لَمْ يَقُولَ" }, { en: "Lam qaal (لَمْ قَالَ)", ur: "لَمْ قَالَ" }], correct: 0 },
    { en: "What is the masculine singular imperative from 'qaala / yaquulu'?", ur: "'قَالَ / يَقُولُ' سے واحد مذکر امر کیا ہے؟", options: [{ en: "Qul (قُلْ)", ur: "قُلْ" }, { en: "Qaal (قَالْ)", ur: "قَالْ" }, { en: "Uqool (أُقُولْ)", ur: "أُقُولْ" }, { en: "Qawil (قَوِلْ)", ur: "قَوِلْ" }], correct: 0 },
    { en: "Which is the correct 'they said' masculine form?", ur: "'انہوں نے کہا' مذکر جمع کی درست شکل کون سی ہے؟", options: [{ en: "Qaaluu (قَالُوا)", ur: "قَالُوا" }, { en: "Qulnaa (قُلْنَا)", ur: "قُلْنَا" }, { en: "Qulna (قُلْنَ)", ur: "قُلْنَ" }, { en: "Qaalataa (قَالَتَا)", ur: "قَالَتَا" }], correct: 0 },
    { en: "Which form means 'we said'?", ur: "'ہم نے کہا' کی درست شکل کون سی ہے؟", options: [{ en: "Qulnaa (قُلْنَا)", ur: "قُلْنَا" }, { en: "Qaaluu (قَالُوا)", ur: "قَالُوا" }, { en: "Qulta (قُلْتَ)", ur: "قُلْتَ" }, { en: "Qulna (قُلْنَ)", ur: "قُلْنَ" }], correct: 0 },
    { en: "Which sign marks the jussive of an Ajwaf Mudari' like 'yaqul'?", ur: "'يَقُلْ' جیسے اجوف مضارع کی حالتِ جزم کی علامت کیا ہے؟", options: [{ en: "Dropping the weak middle letter and sukoon on the end", ur: "حرفِ علت کا حذف اور آخر پر سکون" }, { en: "Adding noon", ur: "نون کا اضافہ" }, { en: "Adding tanween", ur: "تنوین کا اضافہ" }, { en: "Changing it to dual", ur: "اسے تثنیہ بنانا" }], correct: 0 },
    { en: "Which pair shows past and present of the same Ajwaf verb?", ur: "کون سا جوڑا ایک ہی فعلِ اجوف کا ماضی اور مضارع ہے؟", options: [{ en: "Qaala / yaquulu", ur: "قَالَ / يَقُولُ" }, { en: "Kataba / yaktubu", ur: "كَتَبَ / يَكْتُبُ" }, { en: "Ramaa / yarmii", ur: "رَمَى / يَرْمِي" }, { en: "Madda / yamuddu", ur: "مَدَّ / يَمُدُّ" }], correct: 0 },
    { en: "In 'qulnaa' (قُلْنَا), what is 'naa'?", ur: "'قُلْنَا' میں 'نَا' کیا ہے؟", options: [{ en: "Attached subject pronoun meaning 'we'", ur: "متصل فاعلی ضمیر، معنی 'ہم'" }, { en: "A particle of jarr", ur: "حرفِ جر" }, { en: "A sign of dual", ur: "تثنیہ کی علامت" }, { en: "A feminine plural ending", ur: "جمع مؤنث کی علامت" }], correct: 0 },
    { en: "Which is correct for 'you all say' masculine?", ur: "'تم سب کہتے ہو' مذکر جمع کی درست شکل کیا ہے؟", options: [{ en: "Taquuluuna (تَقُولُونَ)", ur: "تَقُولُونَ" }, { en: "Yaquuluuna (يَقُولُونَ)", ur: "يَقُولُونَ" }, { en: "Aquulu (أَقُولُ)", ur: "أَقُولُ" }, { en: "Naquulu (نَقُولُ)", ur: "نَقُولُ" }], correct: 0 },
    { en: "What happens to the noon in 'taquuluuna' after a jazm particle?", ur: "'تَقُولُونَ' پر جزم کا حرف آئے تو نون کا کیا ہوتا ہے؟", options: [{ en: "It is dropped: lam taquuluu", ur: "حذف ہو جاتا ہے: لَمْ تَقُولُوا" }, { en: "It changes to alif", ur: "الف بن جاتا ہے" }, { en: "It takes tanween", ur: "تنوین لیتا ہے" }, { en: "It becomes kasrah", ur: "کسرہ بن جاتا ہے" }], correct: 0 }
  ],
  28: [ // Lesson 28: Naqis verbs (final weak letter)
    { en: "What is a Naqis verb?", ur: "فعلِ ناقص کسے کہتے ہیں؟", options: [{ en: "A verb whose last root letter is weak", ur: "جس کا آخری حرفِ علت ہو" }, { en: "A verb whose first root letter is weak", ur: "جس کا پہلا حرفِ علت ہو" }, { en: "A verb whose middle root letter is weak", ur: "جس کا درمیانی حرفِ علت ہو" }, { en: "A verb with no weak letters", ur: "جس میں کوئی حرفِ علت نہ ہو" }], correct: 0 },
    { en: "Which verb is Naqis?", ur: "کون سا فعل ناقص ہے؟", options: [{ en: "Ramaa (رَمَى)", ur: "رَمَى" }, { en: "Qaala (قَالَ)", ur: "قَالَ" }, { en: "Wa'ada (وَعَدَ)", ur: "وَعَدَ" }, { en: "Madda (مَدَّ)", ur: "مَدَّ" }], correct: 0 },
    { en: "What is the Mudari' of 'ramaa' for 'huwa'?", ur: "'رَمَى' کا 'هُوَ' کے لیے مضارع کیا ہے؟", options: [{ en: "Yarmii (يَرْمِي)", ur: "يَرْمِي" }, { en: "Yarmu (يَرْمُ)", ur: "يَرْمُ" }, { en: "Yarmaa (يَرْمَى)", ur: "يَرْمَى" }, { en: "Yaramaa (يَرَمَى)", ur: "يَرَمَى" }], correct: 0 },
    { en: "After 'lam', what happens to the final weak letter of a Naqis Mudari'?", ur: "'لَمْ' کے بعد ناقص مضارع کے آخری حرفِ علت کا کیا ہوتا ہے؟", options: [{ en: "It is dropped", ur: "حذف ہو جاتا ہے" }, { en: "It becomes doubled", ur: "مشدد ہو جاتا ہے" }, { en: "It takes tanween", ur: "تنوین لیتا ہے" }, { en: "It becomes a noun", ur: "اسم بن جاتا ہے" }], correct: 0 },
    { en: "Which is correct after 'lam'?", ur: "'لَمْ' کے بعد درست شکل کون سی ہے؟", options: [{ en: "Lam yarmi (لَمْ يَرْمِ)", ur: "لَمْ يَرْمِ" }, { en: "Lam yarmii (لَمْ يَرْمِي)", ur: "لَمْ يَرْمِي" }, { en: "Lam yarmiya (لَمْ يَرْمِيَ)", ur: "لَمْ يَرْمِيَ" }, { en: "Lam ramaa (لَمْ رَمَى)", ur: "لَمْ رَمَى" }], correct: 0 },
    { en: "What is the imperative from 'ramaa / yarmii'?", ur: "'رَمَى / يَرْمِي' سے امر کیا ہے؟", options: [{ en: "Irmi (اِرْمِ)", ur: "اِرْمِ" }, { en: "Rami (رَمِ)", ur: "رَمِ" }, { en: "Yarmi (يَرْمِ)", ur: "يَرْمِ" }, { en: "Urmaa (اُرْمَى)", ur: "اُرْمَى" }], correct: 0 },
    { en: "Which is correct for 'they threw' masculine?", ur: "'انہوں نے پھینکا' مذکر جمع کی درست شکل کون سی ہے؟", options: [{ en: "Ramaw (رَمَوْا)", ur: "رَمَوْا" }, { en: "Ramaa (رَمَى)", ur: "رَمَى" }, { en: "Ramyuu (رَمْيُوا)", ur: "رَمْيُوا" }, { en: "Ramina (رَمِنَ)", ur: "رَمِنَ" }], correct: 0 },
    { en: "Which form means 'she threw'?", ur: "'اس نے پھینکا' مؤنث واحد کی شکل کون سی ہے؟", options: [{ en: "Ramat (رَمَتْ)", ur: "رَمَتْ" }, { en: "Ramaa (رَمَى)", ur: "رَمَى" }, { en: "Ramaw (رَمَوْا)", ur: "رَمَوْا" }, { en: "Ramiitu (رَمِيتُ)", ur: "رَمِيتُ" }], correct: 0 },
    { en: "Which form means 'I threw'?", ur: "'میں نے پھینکا' کی درست شکل کون سی ہے؟", options: [{ en: "Ramaytu (رَمَيْتُ)", ur: "رَمَيْتُ" }, { en: "Ramaa (رَمَى)", ur: "رَمَى" }, { en: "Ramat (رَمَتْ)", ur: "رَمَتْ" }, { en: "Yarmii (يَرْمِي)", ur: "يَرْمِي" }], correct: 0 },
    { en: "In the mansub Mudari' of 'yarmii', which ending appears?", ur: "'يَرْمِي' کی منصوب مضارع شکل میں آخر پر کیا آتا ہے؟", options: [{ en: "Fathah: an yarmiya", ur: "فتحہ: أَنْ يَرْمِيَ" }, { en: "Dammah: yarmiiu", ur: "ضمہ: يَرْمِيُ" }, { en: "Tanween: yarmiin", ur: "تنوین: يَرْمٍ" }, { en: "Shaddah: yarmiyyu", ur: "شدہ: يَرْمِيُّ" }], correct: 0 },
    { en: "Which pair is past and present of the same Naqis verb?", ur: "کون سا جوڑا ایک ہی فعلِ ناقص کا ماضی اور مضارع ہے؟", options: [{ en: "Ramaa / yarmii", ur: "رَمَى / يَرْمِي" }, { en: "Qaala / yaquulu", ur: "قَالَ / يَقُولُ" }, { en: "Kataba / yaktubu", ur: "كَتَبَ / يَكْتُبُ" }, { en: "Madda / yamuddu", ur: "مَدَّ / يَمُدُّ" }], correct: 0 },
    { en: "Which is the correct 'you two throw'?", ur: "'تم دونوں پھینکتے ہو' کی درست شکل کون سی ہے؟", options: [{ en: "Tarmiyaani (تَرْمِيَانِ)", ur: "تَرْمِيَانِ" }, { en: "Tarmuuna (تَرْمُونَ)", ur: "تَرْمُونَ" }, { en: "Tarmiina (تَرْمِينَ)", ur: "تَرْمِينَ" }, { en: "Yarmiyaani (يَرْمِيَانِ)", ur: "يَرْمِيَانِ" }], correct: 0 },
    { en: "What happens to 'tarmiyaani' after 'lam'?", ur: "'لَمْ' کے بعد 'تَرْمِيَانِ' کا کیا ہوتا ہے؟", options: [{ en: "The noon drops: lam tarmiyaa", ur: "نون حذف ہوتا ہے: لَمْ تَرْمِيَا" }, { en: "The ya drops only", ur: "صرف یاء حذف ہوتی ہے" }, { en: "It becomes past tense", ur: "ماضی بن جاتا ہے" }, { en: "Nothing changes", ur: "کوئی تبدیلی نہیں آتی" }], correct: 0 },
    { en: "For 'hunna' with a Naqis past verb, which form is correct?", ur: "'هُنَّ' کے ساتھ ناقص ماضی کی درست شکل کون سی ہے؟", options: [{ en: "Ramayna (رَمَيْنَ)", ur: "رَمَيْنَ" }, { en: "Ramaw (رَمَوْا)", ur: "رَمَوْا" }, { en: "Ramaa (رَمَى)", ur: "رَمَى" }, { en: "Ramaytu (رَمَيْتُ)", ur: "رَمَيْتُ" }], correct: 0 },
    { en: "Why is the Naqis verb called 'naqis'?", ur: "فعلِ ناقص کو ناقص کیوں کہا جاتا ہے؟", options: [{ en: "Because its final weak letter is often changed or dropped", ur: "کیونکہ آخری حرفِ علت اکثر بدلتا یا حذف ہوتا ہے" }, { en: "Because it has no subject", ur: "کیونکہ اس کا فاعل نہیں ہوتا" }, { en: "Because it is always passive", ur: "کیونکہ یہ ہمیشہ مجہول ہوتا ہے" }, { en: "Because it is only a noun", ur: "کیونکہ یہ صرف اسم ہوتا ہے" }], correct: 0 }
  ],
  29: [ // Lesson 29: Doubled verbs
    { en: "What is a Mud'af verb?", ur: "فعلِ مضاعف کسے کہتے ہیں؟", options: [{ en: "A verb whose second and third root letters are the same", ur: "جس کے دوسرے اور تیسرے حروفِ اصلی ایک جیسے ہوں" }, { en: "A verb whose first letter is weak", ur: "جس کا پہلا حرف علت ہو" }, { en: "A verb with four root letters", ur: "جس کے چار حروف اصلی ہوں" }, { en: "A passive verb only", ur: "صرف فعل مجہول" }], correct: 0 },
    { en: "Which verb is Mud'af?", ur: "کون سا فعل مضاعف ہے؟", options: [{ en: "Madda (مَدَّ)", ur: "مَدَّ" }, { en: "Qaala (قَالَ)", ur: "قَالَ" }, { en: "Ramaa (رَمَى)", ur: "رَمَى" }, { en: "Wa'ada (وَعَدَ)", ur: "وَعَدَ" }], correct: 0 },
    { en: "What is the Mudari' of 'madda' for 'huwa'?", ur: "'مَدَّ' کا 'هُوَ' کے لیے مضارع کیا ہے؟", options: [{ en: "Yamuddu (يَمُدُّ)", ur: "يَمُدُّ" }, { en: "Yamadda (يَمَدَّ)", ur: "يَمَدَّ" }, { en: "Yamdudu (يَمْدُدُ)", ur: "يَمْدُدُ" }, { en: "Yumaddu (يُمَدُّ)", ur: "يُمَدُّ" }], correct: 0 },
    { en: "When a suffix beginning with a vowel is attached to a doubled past verb, what often happens?", ur: "مضاعف ماضی پر متحرک لاحقہ آئے تو عموماً کیا ہوتا ہے؟", options: [{ en: "The idghaam is opened: madadtu", ur: "ادغام کھل جاتا ہے: مَدَدْتُ" }, { en: "The verb becomes Ajwaf", ur: "فعل اجوف بن جاتا ہے" }, { en: "The subject disappears", ur: "فاعل غائب ہو جاتا ہے" }, { en: "It takes alif of dual", ur: "الف تثنیہ لیتا ہے" }], correct: 0 },
    { en: "Which means 'I stretched/extended' from madda?", ur: "'مَدَّ' سے 'میں نے پھیلایا/بڑھایا' کی درست شکل کیا ہے؟", options: [{ en: "Madadtu (مَدَدْتُ)", ur: "مَدَدْتُ" }, { en: "Maddtu (مَدَّتُ)", ur: "مَدَّتُ" }, { en: "Yamuddu (يَمُدُّ)", ur: "يَمُدُّ" }, { en: "Mudda (مُدَّ)", ur: "مُدَّ" }], correct: 0 },
    { en: "What is the imperative from 'madda / yamuddu'?", ur: "'مَدَّ / يَمُدُّ' سے امر کیا ہے؟", options: [{ en: "Mudd(a) / mudda (مُدَّ)", ur: "مُدَّ" }, { en: "Imdad (اِمْدَدْ)", ur: "اِمْدَدْ" }, { en: "Yamuddu (يَمُدُّ)", ur: "يَمُدُّ" }, { en: "Madadta (مَدَدْتَ)", ur: "مَدَدْتَ" }], correct: 0 },
    { en: "Which is the jussive form after 'lam'?", ur: "'لَمْ' کے بعد مجزوم شکل کون سی ہے؟", options: [{ en: "Lam yamudd / lam yamdud (لَمْ يَمُدَّ / لَمْ يَمْدُدْ)", ur: "لَمْ يَمُدَّ / لَمْ يَمْدُدْ" }, { en: "Lam yamuddu (لَمْ يَمُدُّ)", ur: "لَمْ يَمُدُّ" }, { en: "Lam madda (لَمْ مَدَّ)", ur: "لَمْ مَدَّ" }, { en: "Lam yamuddaana", ur: "لَمْ يَمُدَّانِ" }], correct: 0 },
    { en: "What is idghaam in a doubled verb?", ur: "فعلِ مضاعف میں ادغام کیا ہے؟", options: [{ en: "Merging two identical root letters with shaddah", ur: "دو ایک جیسے حروف کو شدہ کے ساتھ ملانا" }, { en: "Dropping every weak letter", ur: "ہر حرف علت کو حذف کرنا" }, { en: "Adding a preposition", ur: "حرف جر بڑھانا" }, { en: "Making a noun dual", ur: "اسم کو تثنیہ بنانا" }], correct: 0 },
    { en: "Which form keeps the idghaam?", ur: "کون سی شکل ادغام برقرار رکھتی ہے؟", options: [{ en: "Madda (مَدَّ)", ur: "مَدَّ" }, { en: "Madadtu (مَدَدْتُ)", ur: "مَدَدْتُ" }, { en: "Madadna (مَدَدْنَا)", ur: "مَدَدْنَا" }, { en: "Madadta (مَدَدْتَ)", ur: "مَدَدْتَ" }], correct: 0 },
    { en: "Which is correct for 'they extended' masculine?", ur: "'انہوں نے بڑھایا' مذکر جمع کی درست شکل کیا ہے؟", options: [{ en: "Madduu (مَدُّوا)", ur: "مَدُّوا" }, { en: "Madadna (مَدَدْنَ)", ur: "مَدَدْنَ" }, { en: "Madda (مَدَّ)", ur: "مَدَّ" }, { en: "Yamudduuna (يَمُدُّونَ)", ur: "يَمُدُّونَ" }], correct: 0 },
    { en: "Which is correct for 'you all extend' masculine?", ur: "'تم سب بڑھاتے ہو' مذکر جمع کی درست شکل کیا ہے؟", options: [{ en: "Tamudduuna (تَمُدُّونَ)", ur: "تَمُدُّونَ" }, { en: "Yamudduuna (يَمُدُّونَ)", ur: "يَمُدُّونَ" }, { en: "Amuddu (أَمُدُّ)", ur: "أَمُدُّ" }, { en: "Namuddu (نَمُدُّ)", ur: "نَمُدُّ" }], correct: 0 },
    { en: "After 'lan', what case/state does 'yamuddu' take?", ur: "'لَنْ' کے بعد 'يَمُدُّ' کس حالت میں آتا ہے؟", options: [{ en: "Mansub: lan yamudda", ur: "منصوب: لَنْ يَمُدَّ" }, { en: "Majzum: lan yamdud", ur: "مجزوم: لَنْ يَمْدُدْ" }, { en: "Marfu': lan yamuddu", ur: "مرفوع: لَنْ يَمُدُّ" }, { en: "Majrur", ur: "مجرور" }], correct: 0 },
    { en: "Which ending appears on 'tamudduuna' after 'lan'?", ur: "'لَنْ' کے بعد 'تَمُدُّونَ' میں کیا تبدیلی آتی ہے؟", options: [{ en: "Noon is dropped: lan tamudduu", ur: "نون حذف: لَنْ تَمُدُّوا" }, { en: "Waw is dropped only", ur: "صرف واو حذف ہوتا ہے" }, { en: "It becomes past tense", ur: "ماضی بن جاتا ہے" }, { en: "Nothing changes", ur: "کوئی تبدیلی نہیں" }], correct: 0 },
    { en: "Which term names opening the merged letters of a doubled verb?", ur: "مضاعف فعل کے ملے ہوئے حروف کو الگ کرنے کا نام کیا ہے؟", options: [{ en: "Fakk al-idghaam", ur: "فكّ الإدغام" }, { en: "Jarr", ur: "جر" }, { en: "Nasb of Inna", ur: "نصبِ اِنَّ" }, { en: "Tasgheer", ur: "تصغیر" }], correct: 0 },
    { en: "Which pair is Mud'af past and present?", ur: "کون سا جوڑا مضاعف ماضی اور مضارع ہے؟", options: [{ en: "Madda / yamuddu", ur: "مَدَّ / يَمُدُّ" }, { en: "Qaala / yaquulu", ur: "قَالَ / يَقُولُ" }, { en: "Ramaa / yarmii", ur: "رَمَى / يَرْمِي" }, { en: "Kataba / yaktubu", ur: "كَتَبَ / يَكْتُبُ" }], correct: 0 }
  ],
  30: [ // Lesson 30: Verb/pronoun review
    { en: "Which pronoun uses the Mudari' prefix 'a-'?", ur: "مضارع کا سابقہ 'أَ' کس ضمیر کے لیے آتا ہے؟", options: [{ en: "Ana (أَنَا)", ur: "أَنَا" }, { en: "Huwa (هُوَ)", ur: "هُوَ" }, { en: "Nahnu (نَحْنُ)", ur: "نَحْنُ" }, { en: "Antum (أَنْتُمْ)", ur: "أَنْتُمْ" }], correct: 0 },
    { en: "Which pronoun uses the Mudari' prefix 'na-'?", ur: "مضارع کا سابقہ 'نَ' کس ضمیر کے لیے آتا ہے؟", options: [{ en: "Nahnu (نَحْنُ)", ur: "نَحْنُ" }, { en: "Ana (أَنَا)", ur: "أَنَا" }, { en: "Huwa (هُوَ)", ur: "هُوَ" }, { en: "Hiya (هِيَ)" }], correct: 0 },
    { en: "Which form matches 'huwa' for kataba in Mudari'?", ur: "'كَتَبَ' کا 'هُوَ' کے لیے مضارع کیا ہے؟", options: [{ en: "Yaktubu (يَكْتُبُ)", ur: "يَكْتُبُ" }, { en: "Taktubu (تَكْتُبُ)", ur: "تَكْتُبُ" }, { en: "Aktubu (أَكْتُبُ)", ur: "أَكْتُبُ" }, { en: "Naktubu (نَكْتُبُ)", ur: "نَكْتُبُ" }], correct: 0 },
    { en: "Which form matches 'hiya' for kataba in Mudari'?", ur: "'كَتَبَ' کا 'هِيَ' کے لیے مضارع کیا ہے؟", options: [{ en: "Taktubu (تَكْتُبُ)", ur: "تَكْتُبُ" }, { en: "Yaktubu (يَكْتُبُ)", ur: "يَكْتُبُ" }, { en: "Aktubu (أَكْتُبُ)", ur: "أَكْتُبُ" }, { en: "Taktubiina (تَكْتُبِينَ)", ur: "تَكْتُبِينَ" }], correct: 0 },
    { en: "Which ending marks 'antum' in Mudari'?", ur: "مضارع میں 'أَنْتُمْ' کی علامت کیا ہے؟", options: [{ en: "Ta-...-uuna", ur: "تَـ ... ـونَ" }, { en: "Ya-...-uuna", ur: "يَـ ... ـونَ" }, { en: "A- only", ur: "صرف أَـ" }, { en: "Na- only", ur: "صرف نَـ" }], correct: 0 },
    { en: "Which form means 'you write' feminine singular?", ur: "'تم لکھتی ہو' واحد مؤنث کی درست شکل کیا ہے؟", options: [{ en: "Taktubiina (تَكْتُبِينَ)", ur: "تَكْتُبِينَ" }, { en: "Taktubu (تَكْتُبُ)", ur: "تَكْتُبُ" }, { en: "Yaktubu (يَكْتُبُ)", ur: "يَكْتُبُ" }, { en: "Naktubu (نَكْتُبُ)", ur: "نَكْتُبُ" }], correct: 0 },
    { en: "Which forms are called the Five Verbs?", ur: "افعالِ خمسہ کون سی شکلیں ہیں؟", options: [{ en: "Forms ending in -aani, -uuna, -iina", ur: "وہ شکلیں جو ـانِ، ـونَ، ـينَ پر ختم ہوں" }, { en: "Only past tense forms", ur: "صرف ماضی کی شکلیں" }, { en: "Only command forms", ur: "صرف امر کی شکلیں" }, { en: "Every verb with three roots", ur: "ہر ثلاثی فعل" }], correct: 0 },
    { en: "What is the Raf' sign of the Five Verbs?", ur: "افعالِ خمسہ کی حالتِ رفع کی علامت کیا ہے؟", options: [{ en: "Presence of noon", ur: "نون کا باقی رہنا" }, { en: "Kasrah", ur: "کسرہ" }, { en: "Tanween", ur: "تنوین" }, { en: "Ya'", ur: "یاء" }], correct: 0 },
    { en: "What is the Nasb/Jazm sign of the Five Verbs?", ur: "افعالِ خمسہ کی نصب/جزم کی علامت کیا ہے؟", options: [{ en: "Dropping the noon", ur: "نون کا حذف" }, { en: "Adding tanween", ur: "تنوین کا اضافہ" }, { en: "Adding alif", ur: "الف کا اضافہ" }, { en: "Making it majrur", ur: "اسے مجرور کرنا" }], correct: 0 },
    { en: "Which is correct after 'lan'?", ur: "'لَنْ' کے بعد درست شکل کون سی ہے؟", options: [{ en: "Lan taktubuu (لَنْ تَكْتُبُوا)", ur: "لَنْ تَكْتُبُوا" }, { en: "Lan taktubuuna (لَنْ تَكْتُبُونَ)", ur: "لَنْ تَكْتُبُونَ" }, { en: "Lan katabtum (لَنْ كَتَبْتُمْ)", ur: "لَنْ كَتَبْتُمْ" }, { en: "Lan taktubuun", ur: "لَنْ تَكْتُبُونْ" }], correct: 0 },
    { en: "Which is correct after 'lam'?", ur: "'لَمْ' کے بعد درست شکل کون سی ہے؟", options: [{ en: "Lam taktubuu (لَمْ تَكْتُبُوا)", ur: "لَمْ تَكْتُبُوا" }, { en: "Lam taktubuuna (لَمْ تَكْتُبُونَ)", ur: "لَمْ تَكْتُبُونَ" }, { en: "Lam taktubu (لَمْ تَكْتُبُ)", ur: "لَمْ تَكْتُبُ" }, { en: "Lam katabtum", ur: "لَمْ كَتَبْتُمْ" }], correct: 0 },
    { en: "Which past tense suffix matches 'antunna'?", ur: "'أَنْتُنَّ' کے لیے ماضی کا لاحقہ کیا ہے؟", options: [{ en: "-tunna", ur: "ـتُنَّ" }, { en: "-tum", ur: "ـتُمْ" }, { en: "-naa", ur: "ـنَا" }, { en: "-uu", ur: "ـوا" }], correct: 0 },
    { en: "Which past tense suffix matches 'nahnu'?", ur: "'نَحْنُ' کے لیے ماضی کا لاحقہ کیا ہے؟", options: [{ en: "-naa", ur: "ـنَا" }, { en: "-tu", ur: "ـتُ" }, { en: "-tum", ur: "ـتُمْ" }, { en: "-na", ur: "ـنَ" }], correct: 0 },
    { en: "Which imperative is for 'antum' from kataba?", ur: "'كَتَبَ' سے 'أَنْتُمْ' کے لیے امر کیا ہے؟", options: [{ en: "Uktubuu (اُكْتُبُوا)", ur: "اُكْتُبُوا" }, { en: "Uktub (اُكْتُبْ)", ur: "اُكْتُبْ" }, { en: "Taktubuuna (تَكْتُبُونَ)", ur: "تَكْتُبُونَ" }, { en: "Katabtum (كَتَبْتُمْ)", ur: "كَتَبْتُمْ" }], correct: 0 },
    { en: "Which negative imperative is for 'antum'?", ur: "'أَنْتُمْ' کے لیے نہی کی درست شکل کیا ہے؟", options: [{ en: "Laa taktubuu (لَا تَكْتُبُوا)", ur: "لَا تَكْتُبُوا" }, { en: "Laa taktubuuna (لَا تَكْتُبُونَ)", ur: "لَا تَكْتُبُونَ" }, { en: "Lan taktubuu", ur: "لَنْ تَكْتُبُوا" }, { en: "Lam taktubuu", ur: "لَمْ تَكْتُبُوا" }], correct: 0 }
  ],
  31: [ // Lesson 31: Na't and man'ut
    { en: "What is Na't in Arabic grammar?", ur: "عربی نحو میں نعت کیا ہے؟", options: [{ en: "An adjective describing a noun", ur: "اسم کی صفت/وصف" }, { en: "A verb's subject", ur: "فعل کا فاعل" }, { en: "A particle of jarr", ur: "حرفِ جر" }, { en: "A past tense verb", ur: "فعلِ ماضی" }], correct: 0 },
    { en: "What is Man'ut?", ur: "منعوت کسے کہتے ہیں؟", options: [{ en: "The noun being described", ur: "وہ اسم جس کی صفت بیان ہو" }, { en: "The adjective itself", ur: "خود صفت" }, { en: "A hidden pronoun", ur: "ضمیر مستتر" }, { en: "A number", ur: "عدد" }], correct: 0 },
    { en: "In what does the Na't normally follow the Man'ut?", ur: "نعت عموماً منعوت کی کن چیزوں میں پیروی کرتی ہے؟", options: [{ en: "Case, gender, number, and definiteness", ur: "اعراب، جنس، عدد اور معرفہ/نکرہ" }, { en: "Only tense", ur: "صرف زمانہ" }, { en: "Only root letters", ur: "صرف حروفِ اصلی" }, { en: "Only person", ur: "صرف صیغہ" }], correct: 0 },
    { en: "Choose the correct phrase: 'a new book'.", ur: "'ایک نئی کتاب' کے لیے درست ترکیب چنیں۔", options: [{ en: "Kitaabun jadiidun (كِتَابٌ جَدِيدٌ)", ur: "كِتَابٌ جَدِيدٌ" }, { en: "Kitaabun jadiidan", ur: "كِتَابٌ جَدِيدًا" }, { en: "Kitaaban jadiidun", ur: "كِتَابًا جَدِيدٌ" }, { en: "Al-kitaabu jadiidun", ur: "الْكِتَابُ جَدِيدٌ" }], correct: 0 },
    { en: "Choose the correct phrase: 'the new book'.", ur: "'نئی کتاب' معرفہ کے لیے درست ترکیب چنیں۔", options: [{ en: "Al-kitaabu al-jadiidu (الْكِتَابُ الْجَدِيدُ)", ur: "الْكِتَابُ الْجَدِيدُ" }, { en: "Al-kitaabu jadiidun", ur: "الْكِتَابُ جَدِيدٌ" }, { en: "Kitaabun al-jadiidu", ur: "كِتَابٌ الْجَدِيدُ" }, { en: "Al-kitaaba al-jadiidu", ur: "الْكِتَابَ الْجَدِيدُ" }], correct: 0 },
    { en: "Why is 'al-kitaabu jadiidun' not a Na't phrase?", ur: "'الْكِتَابُ جَدِيدٌ' نعتی ترکیب کیوں نہیں؟", options: [{ en: "Because the first noun is definite and the adjective is indefinite, so it is a sentence", ur: "کیونکہ پہلا اسم معرفہ اور صفت نکرہ ہے؛ یہ جملہ ہے" }, { en: "Because both are masculine", ur: "کیونکہ دونوں مذکر ہیں" }, { en: "Because both are marfu'", ur: "کیونکہ دونوں مرفوع ہیں" }, { en: "Because it has no verb", ur: "کیونکہ اس میں فعل نہیں" }], correct: 0 },
    { en: "Choose the correct phrase: 'a good female student'.", ur: "'ایک اچھی طالبہ' کی درست ترکیب کون سی ہے؟", options: [{ en: "Taalibatun jayyidatun (طَالِبَةٌ جَيِّدَةٌ)", ur: "طَالِبَةٌ جَيِّدَةٌ" }, { en: "Taalibatun jayyidun", ur: "طَالِبَةٌ جَيِّدٌ" }, { en: "Taalibun jayyidatun", ur: "طَالِبٌ جَيِّدَةٌ" }, { en: "Taalibatan jayyidatun", ur: "طَالِبَةً جَيِّدَةٌ" }], correct: 0 },
    { en: "Choose the correct phrase in Nasb: 'I saw a new book'.", ur: "حالتِ نصب میں درست ترکیب چنیں: 'میں نے ایک نئی کتاب دیکھی'۔", options: [{ en: "Ra'aytu kitaaban jadiidan (رَأَيْتُ كِتَابًا جَدِيدًا)", ur: "رَأَيْتُ كِتَابًا جَدِيدًا" }, { en: "Ra'aytu kitaabun jadiidun", ur: "رَأَيْتُ كِتَابٌ جَدِيدٌ" }, { en: "Ra'aytu kitaabin jadiidin", ur: "رَأَيْتُ كِتَابٍ جَدِيدٍ" }, { en: "Ra'aytu al-kitaabu al-jadiidu", ur: "رَأَيْتُ الْكِتَابُ الْجَدِيدُ" }], correct: 0 },
    { en: "Choose the correct phrase after a Harf Jarr.", ur: "حرفِ جر کے بعد درست نعتی ترکیب چنیں۔", options: [{ en: "Fi baytin kabiirin (فِي بَيْتٍ كَبِيرٍ)", ur: "فِي بَيْتٍ كَبِيرٍ" }, { en: "Fi baytun kabiirun", ur: "فِي بَيْتٌ كَبِيرٌ" }, { en: "Fi baytan kabiiran", ur: "فِي بَيْتًا كَبِيرًا" }, { en: "Fi baytin kabiirun", ur: "فِي بَيْتٍ كَبِيرٌ" }], correct: 0 },
    { en: "For non-human broken plurals, what form is often used for the adjective?", ur: "غیر عاقل جمع مکسر کے لیے صفت عموماً کس شکل میں آتی ہے؟", options: [{ en: "Feminine singular", ur: "واحد مؤنث" }, { en: "Masculine dual", ur: "مذکر تثنیہ" }, { en: "Sound masculine plural", ur: "جمع مذکر سالم" }, { en: "Always masculine singular", ur: "ہمیشہ واحد مذکر" }], correct: 0 },
    { en: "Choose the correct phrase: 'new books' for non-human plural.", ur: "غیر عاقل جمع کے لیے 'نئی کتابیں' کی درست ترکیب چنیں۔", options: [{ en: "Kutubun jadiidatun (كُتُبٌ جَدِيدَةٌ)", ur: "كُتُبٌ جَدِيدَةٌ" }, { en: "Kutubun jadiiduun", ur: "كُتُبٌ جَدِيدُونَ" }, { en: "Kutubun jadiidaat", ur: "كُتُبٌ جَدِيدَاتٌ" }, { en: "Kutubun jadiidun", ur: "كُتُبٌ جَدِيدٌ" }], correct: 0 },
    { en: "Choose the correct phrase: 'the hardworking Muslim men'.", ur: "'محنتی مسلمان مرد' معرفہ جمع مذکر کے لیے درست ترکیب چنیں۔", options: [{ en: "Al-muslimuuna al-mujtahiduuna (الْمُسْلِمُونَ الْمُجْتَهِدُونَ)", ur: "الْمُسْلِمُونَ الْمُجْتَهِدُونَ" }, { en: "Al-muslimuuna al-mujtahidati", ur: "الْمُسْلِمُونَ الْمُجْتَهِدَاتُ" }, { en: "Al-muslimiina al-mujtahiduuna", ur: "الْمُسْلِمِينَ الْمُجْتَهِدُونَ" }, { en: "Muslimuuna al-mujtahiduuna", ur: "مُسْلِمُونَ الْمُجْتَهِدُونَ" }], correct: 0 },
    { en: "In 'al-baytu al-kabiiru', which word is the Na't?", ur: "'الْبَيْتُ الْكَبِيرُ' میں نعت کون سا لفظ ہے؟", options: [{ en: "Al-kabiiru (الْكَبِيرُ)", ur: "الْكَبِيرُ" }, { en: "Al-baytu (الْبَيْتُ)", ur: "الْبَيْتُ" }, { en: "Alif-laam only", ur: "صرف ال" }, { en: "There is no Na't", ur: "کوئی نعت نہیں" }], correct: 0 },
    { en: "In 'al-baytu al-kabiiru', which word is the Man'ut?", ur: "'الْبَيْتُ الْكَبِيرُ' میں منعوت کون سا لفظ ہے؟", options: [{ en: "Al-baytu (الْبَيْتُ)", ur: "الْبَيْتُ" }, { en: "Al-kabiiru (الْكَبِيرُ)", ur: "الْكَبِيرُ" }, { en: "Kabiir only", ur: "صرف كبير" }, { en: "There is no Man'ut", ur: "کوئی منعوت نہیں" }], correct: 0 },
    { en: "Which phrase has a Na't-Man'ut mismatch?", ur: "کس ترکیب میں نعت اور منعوت میں مطابقت نہیں؟", options: [{ en: "Al-bintu al-jamiilu (الْبِنْتُ الْجَمِيلُ)", ur: "الْبِنْتُ الْجَمِيلُ" }, { en: "Al-waladu al-jamiilu", ur: "الْوَلَدُ الْجَمِيلُ" }, { en: "Bintun jamiilatun", ur: "بِنْتٌ جَمِيلَةٌ" }, { en: "Baytun kabiirun", ur: "بَيْتٌ كَبِيرٌ" }], correct: 0 }
  ]
};

async function seed() {
  console.log('🚀 Seeding Book 2 Questions: Part 5 (Lessons 27-31)...');
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
    console.log('\n🎉 Finished Seeding Part 5!');
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
}

seed();
