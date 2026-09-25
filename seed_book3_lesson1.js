import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.VITE_DATABASE_URL);

const questionsData = [
  {
    en: "What is the pattern (wazn) of Form II verb in Arabic?",
    ur: "عربی میں فارم II فعل کا وزن کیا ہے؟",
    options: [
      { en: "فَعَلَ (fa'ala)", ur: "فَعَلَ" },
      { en: "فَعَّلَ (fa''ala)", ur: "فَعَّلَ" },
      { en: "فَاعَلَ (fa'ala)", ur: "فَاعَلَ" },
      { en: "أَفْعَلَ (af'ala)", ur: "أَفْعَلَ" }
    ],
    correct: 1
  },
  {
    en: "What is the pattern of Form IV (إفْعَال) verb?",
    ur: "فارم IV (إفْعَال) فعل کا وزن کیا ہے؟",
    options: [
      { en: "فَعَّلَ (fa''ala)", ur: "فَعَّلَ" },
      { en: "فَاعَلَ (fa'ala)", ur: "فَاعَلَ" },
      { en: "أَفْعَلَ (af'ala)", ur: "أَفْعَلَ" },
      { en: "تَفَعَّلَ (tafa''ala)", ur: "تَفَعَّلَ" }
    ],
    correct: 2
  },
  {
    en: "The verb 'كَتَبَ' (kataba) is in which form?",
    ur: "فعل 'كَتَبَ' کس فارم میں ہے؟",
    options: [
      { en: "Form I (فَعَلَ)", ur: "فارم I (فَعَلَ)" },
      { en: "Form II (فَعَّلَ)", ur: "فارم II (فَعَّلَ)" },
      { en: "Form III (فَاعَلَ)", ur: "فارم III (فَاعَلَ)" },
      { en: "Form IV (أَفْعَلَ)", ur: "فارم IV (أَفْعَلَ)" }
    ],
    correct: 0
  },
  {
    en: "What does Form II verb 'كَمَّلَ' (kammala) mean compared to Form I 'كَمُلَ' (kamula)?",
    ur: "فارم II فعل 'كَمَّلَ' کا فارم I 'كَمُلَ' کے مقابلے میں کیا مطلب ہے؟",
    options: [
      { en: "To become complete (intransitive)", ur: "مکمل ہونا (لغت)" },
      { en: "To make complete / to complete (causative)", ur: "مکمل کرانا / تکمیل کرنا (سببی)" },
      { en: "To try to complete", ur: "مکمل کرنے کی کوشش کرنا" },
      { en: "To be completed", ur: "مکمل ہو جانا" }
    ],
    correct: 1
  },
  {
    en: "What is the meaning of Form III verb 'كَاتَبَ' (kaataba) from the root ك-ت-ب?",
    ur: "جڑ ك-ت-ب سے فارم III فعل 'كَاتَبَ' کا کیا مطلب ہے؟",
    options: [
      { en: "To write", ur: "لکھنا" },
      { en: "To make someone write", ur: "کسی سے لکھوانا" },
      { en: "To correspond with / to write to each other", ur: "آپس میں مراسله کرنا" },
      { en: "To dictate", ur: " dikhaana" }
    ],
    correct: 2
  },
  {
    en: "What does the verb 'أَكْتَبَ' (aktaba) mean in Form IV?",
    ur: "فارم IV میں فعل 'أَكْتَبَ' کا کیا مطلب ہے؟",
    options: [
      { en: "To write", ur: "لکھنا" },
      { en: "To make someone write (causative)", ur: "کسی سے لکھوانا (سببی)" },
      { en: "To correspond", ur: "مراسله کرنا" },
      { en: "To learn writing", ur: "لکھنا سیکھنا" }
    ],
    correct: 1
  },
  {
    en: "What is the passive voice (المبني للمجهول) of the past tense verb 'كَتَبَ'?",
    ur: "ماضی فعل 'كَتَبَ' کی غیر فاعلی شکل (المبني للمجهول) کیا ہے؟",
    options: [
      { en: "كَتَبَ (kataba)", ur: "كَتَبَ" },
      { en: "كُتِبَ (kutiba)", ur: "كُتِبَ" },
      { en: "يُكْتَبُ (yuktabu)", ur: "يُكْتَبُ" },
      { en: "كَتَّبَ (kattaba)", ur: "كَتَّبَ" }
    ],
    correct: 1
  },
  {
    en: "In passive voice past tense, what happens to the first radical letter of a Form I verb?",
    ur: "غیر فاعلی شکل کے ماضی میں فارم I فعل کے پہلے حرف جذر کے ساتھ کیا ہوتا ہے؟",
    options: [
      { en: "It gets Damma (ضمة)", ur: "اس پر ضمہ آتا ہے" },
      { en: "It gets Fatha (فتحة)", ur: "اس پر فتحہ آتا ہے" },
      { en: "It gets Kasra (كسرة)", ur: "اس پر کسرہ آتا ہے" },
      { en: "It stays unchanged", ur: "اس میں کوئی تبدیلی نہیں آتی" }
    ],
    correct: 0
  },
  {
    en: "What is the passive form of the present tense verb 'يَكْتُبُ' (yaktubu)?",
    ur: " الحالیہ فعل 'يَكْتُبُ' کی غیر فاعلی شکل کیا ہے؟",
    options: [
      { en: "يَكْتُبُ (yaktubu)", ur: "يَكْتُبُ" },
      { en: "يُكْتَبُ (yuktabu)", ur: "يُكْتَبُ" },
      { en: "يَتَكَتَّبُ (yatakattabu)", ur: "يَتَكَتَّبُ" },
      { en: "يُكَاتِبُ (yukaatibu)", ur: "يُكَاتِبُ" }
    ],
    correct: 1
  },
  {
    en: "How is the doer (فاعل) expressed in a passive voice sentence?",
    ur: "غیر فاعلی جملے میں فاعل کیسے بیان کیا جاتا ہے؟",
    options: [
      { en: "It is omitted or comes after a preposition (مِنْ)", ur: "اسے چھوڑ دیا جاتا ہے یا حرفِ جر (مِنْ) کے بعد آتا ہے" },
      { en: "It comes before the verb", ur: "یہ فعل سے پہلے آتا ہے" },
      { en: "It becomes Mansub", ur: "یہ منصوب ہو جاتا ہے" },
      { en: "It takes Damma", ur: "اس پر ضمہ آتا ہے" }
    ],
    correct: 0
  },
  {
    en: "Translate to Arabic: 'The book was written' (passive)",
    ur: "عربی میں ترجمہ کریں: 'کتاب لکھی گئی' (غیر فاعلی)",
    options: [
      { en: "كَتَبَ الْكِتَابَ", ur: "كَتَبَ الْكِتَابَ" },
      { en: "كُتِبَ الْكِتَابُ", ur: "كُتِبَ الْكِتَابُ" },
      { en: "الْكِتَابُ يُكْتَبُ", ur: "الْكِتَابُ يُكْتَبُ" },
      { en: "كَتَّبَ الْكِتَابَ", ur: "كَتَّبَ الْكِتَابَ" }
    ],
    correct: 1
  },
  {
    en: "What is the masdar (verbal noun) of Form II verb فَعَّلَ?",
    ur: "فارم II فعل فَعَّلَ کا مصدر کیا ہے؟",
    options: [
      { en: "فِعْل (fi'l)", ur: "فِعْل" },
      { en: "فَعْل (fa'l)", ur: "فَعْل" },
      { en: "تَفْعِيل (taf'eeel)", ur: "تَفْعِيل" },
      { en: "إِفْعَال (if'aal)", ur: "إِفْعَال" }
    ],
    correct: 2
  },
  {
    en: "What is the ism maf'ool (active participle / noun of doer) pattern for Form I?",
    ur: "فارم I کے لیے اسم فاعل کا وزن کیا ہے؟",
    options: [
      { en: "مَفْعُول (maf'ool)", ur: "مَفْعُول" },
      { en: "فَاعِل (fa'il)", ur: "فَاعِل" },
      { en: "مُفْعِل (muf'il)", ur: "مُفْعِل" },
      { en: "فَعِيل (fa'eel)", ur: "فَعِيل" }
    ],
    correct: 1
  },
  {
    en: "What is the ism maf'ool (passive participle) pattern for Form I?",
    ur: "فارم I کے لیے اسم مفعول کا وزن کیا ہے؟",
    options: [
      { en: "فَاعِل (fa'il)", ur: "فَاعِل" },
      { en: "مُفْعِل (muf'il)", ur: "مُفْعِل" },
      { en: "مَفْعُول (maf'ool)", ur: "مَفْعُول" },
      { en: "فَعِيل (fa'eel)", ur: "فَعِيل" }
    ],
    correct: 2
  },
  {
    en: "What does the verb 'samma'a' (Form II) mean compared to 'sami'a' (Form I)?",
    ur: "فارم II فعل 'سَمَّعَ' کا فارم I 'سَمِعَ' کے مقابلے میں کیا مطلب ہے؟",
    options: [
      { en: "To hear", ur: "سننا" },
      { en: "To make someone hear / to broadcast", ur: "کسی سے سنوانا / نشر کرنا" },
      { en: "To listen", ur: "سننا" },
      { en: "To be heard", ur: "سنّا جانا" }
    ],
    correct: 1
  },
  {
    en: "Which verb form gives a causative meaning (to make someone do something)?",
    ur: "کون سا فارم سببی معنی دیتا ہے (کسی سے کروانا)؟",
    options: [
      { en: "Form I (فَعَلَ)", ur: "فارم I (فَعَلَ)" },
      { en: "Form II (فَعَّلَ)", ur: "فارm II (فَعَّلَ)" },
      { en: "Form VII (انْفَعَلَ)", ur: "فارm VII (انْفَعَلَ)" },
      { en: "Form VIII (افْتَعَلَ)", ur: "فارم VIII (افْتَعَلَ)" }
    ],
    correct: 1
  },
  {
    en: "What does Form VII verb pattern (انْفَعَلَ) usually indicate?",
    ur: "فارم VII فعل کا وزن (انْفَعَلَ) عام طور پر کیا ظاہر کرتا ہے؟",
    options: [
      { en: "Active voice", ur: "فاعلی شکل" },
      { en: "Reflexive / Passive meaning", ur: "رجوعی / غیر فاعلی معنی" },
      { en: "Causative meaning", ur: "سببی معنی" },
      { en: "Reciprocal action", ur: "آپسی عمل" }
    ],
    correct: 1
  },
  {
    en: "What is the passive of Form II verb 'فَعَّلَ' in past tense?",
    ur: "فارم II فعل 'فَعَّلَ' کی ماضی میں غیر فاعلی شکل کیا ہے؟",
    options: [
      { en: "فُعِّلَ (fu''ila)", ur: "فُعِّلَ" },
      { en: "فَعَّلَ (fa''ala)", ur: "فَعَّلَ" },
      { en: "تَفُعِّلَ (tafu''ila)", ur: "تَفُعِّلَ" },
      { en: "يُفَعَّلُ (yufa''alu)", ur: "يُفَعَّلُ" }
    ],
    correct: 0
  },
  {
    en: "Translate: 'The lesson was studied' (passive past tense)",
    ur: "ترجمہ کریں: 'سبق پڑھا گیا' (غیر فاعلی ماضی)",
    options: [
      { en: "دَرَسَ الدَّرْسُ", ur: "دَرَسَ الدَّرْسُ" },
      { en: "دُرِسَ الدَّرْسُ", ur: "دُرِسَ الدَّرْسُ" },
      { en: "يُدْرَسُ الدَّرْسُ", ur: "يُدْرَسُ الدَّرْسُ" },
      { en: "تَدَرَّسَ الدَّرْسُ", ur: "تَدَرَّسَ الدَّرْسُ" }
    ],
    correct: 1
  },
  {
    en: "What is the ism fa'il (active participle) of the verb 'كَتَبَ' (Form I)?",
    ur: "فعل 'كَتَبَ' (فارم I) کا اسم فاعل کیا ہے؟",
    options: [
      { en: "مَكْتُوب (maktoub)", ur: "مَكْتُوب" },
      { en: "كَاتِب (kaatib)", ur: "كَاتِب" },
      { en: "مُكْتِب (muk'tib)", ur: "مُكْتِب" },
      { en: "كُتَّاب (kuttaab)", ur: "كُتَّاب" }
    ],
    correct: 1
  },
  {
    en: "What does Form VIII (افْتَعَلَ) usually indicate?",
    ur: "فارم VIII (افْتَعَلَ) عام طور پر کیا ظاہر کرتا ہے؟",
    options: [
      { en: "Causative meaning", ur: "سببی معنی" },
      { en: "Reflexive action (doing something to oneself)", ur: "رجوعی عمل (اپنے آپ سے کچھ کرنا)" },
      { en: "Active voice", ur: "فاعلی شکل" },
      { en: "Reciprocal action", ur: "آپسی عمل" }
    ],
    correct: 1
  }
];

async function run() {
  console.log('Creating Book 3 section and first lecture quiz...');

  try {
    // 1. Get the Madina Books course ID (course_id = 3)
    const courses = await sql`SELECT id FROM courses WHERE name = 'Madina Books' LIMIT 1`;
    if (courses.length === 0) {
      throw new Error('Madina Books course not found. Run migrations first.');
    }
    const courseId = courses[0].id;
    console.log(`Using Course ID: ${courseId}`);

    // 2. Create Book 3 section
    let sectionId;
    const existingSection = await sql`
      SELECT id FROM sections WHERE title = 'Book 3' AND course_id = ${courseId} LIMIT 1
    `;
    if (existingSection.length > 0) {
      sectionId = existingSection[0].id;
      console.log(`Book 3 section already exists: ID ${sectionId}`);
    } else {
      const [newSection] = await sql`
        INSERT INTO sections (course_id, title, order_index, kind)
        VALUES (${courseId}, 'Book 3', 4, 'book')
        RETURNING id
      `;
      sectionId = newSection.id;
      console.log(`Created Book 3 section: ID ${sectionId}`);
    }

    // 3. Create Lecture 01 for Book 3
    let lectureId;
    const existingLec = await sql`
      SELECT id FROM lectures WHERE course_id = ${courseId} AND section_id = ${sectionId} AND order_index = 1 LIMIT 1
    `;
    if (existingLec.length > 0) {
      lectureId = existingLec[0].id;
      console.log(`Lecture 01 already exists: ID ${lectureId}`);
    } else {
      const [newLec] = await sql`
        INSERT INTO lectures (course_id, section_id, title, order_index)
        VALUES (${courseId}, ${sectionId}, 'Book 3 - Lecture 01', 1)
        RETURNING id
      `;
      lectureId = newLec.id;
      console.log(`Created Lecture 01: ID ${lectureId}`);
    }

    // 4. Create Quiz for Lecture 01
    let quizId;
    const existingQuiz = await sql`
      SELECT id FROM quizzes WHERE lecture_id = ${lectureId} AND version = 1 LIMIT 1
    `;
    if (existingQuiz.length > 0) {
      quizId = existingQuiz[0].id;
      console.log(`Quiz already exists: ID ${quizId}`);
    } else {
      const [newQuiz] = await sql`
        INSERT INTO quizzes (lecture_id, title, quiz_type, version)
        VALUES (${lectureId}, 'Book 3 - Lecture 01 Quiz', 'Daily', 1)
        RETURNING id
      `;
      quizId = newQuiz.id;
      console.log(`Created Quiz: ID ${quizId}`);
    }

    // 5. Check if questions already exist for this quiz
    const existingQuestions = await sql`SELECT COUNT(*)::integer as count FROM questions WHERE quiz_id = ${quizId}`;
    if (existingQuestions[0].count > 0) {
      console.log(`Quiz already has ${existingQuestions[0].count} questions. Skipping question insertion.`);
    } else {
      // 6. Insert questions
      for (let i = 0; i < questionsData.length; i++) {
        const q = questionsData[i];
        await sql`
          INSERT INTO questions (quiz_id, question_en, question_ur, options, correct_option_index)
          VALUES (
            ${quizId},
            ${q.en},
            ${q.ur},
            ${JSON.stringify(q.options)},
            ${q.correct}
          )
        `;
        console.log(`  Inserted question ${i + 1}/${questionsData.length}`);
      }
      console.log(`Successfully inserted ${questionsData.length} questions.`);
    }

    console.log('\nBook 3 Lecture 1 quiz created successfully!');
  } catch (err) {
    console.error('Failed:', err);
  }
}

run();
