import type { Quiz } from '@/types/quiz';

/**
 * Quiz pour les leçons de grammaire capverdienne
 * Organisés par catégorie et difficulté
 */

export const grammarQuizzes: Quiz[] = [
  {
    id: 'quiz-present-tense-1',
    title: {
      pt: 'Presente do Indicativo - Básico',
      kea: 'Prezenti di Indikativu - Báziku'
    },
    description: {
      pt: 'Teste seus conhecimentos sobre o presente do indicativo em cabo-verdiano',
      kea: 'Testa bu konhesimentu sobri prezenti di indikativu na kriolu'
    },
    lessonId: 1,
    category: 'verbos',
    passingScore: 70,
    timeLimit: 300, // 5 minutes
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: {
          pt: 'Como se diz "Eu falo" em cabo-verdiano?',
          kea: 'Modi ki ta fla "Eu falo" na kriolu?'
        },
        options: ['N fala', 'N ta fala', 'N sta fala', 'N ka fala'],
        correctAnswer: 'N ta fala',
        explanation: {
          pt: 'Em cabo-verdiano, usa-se "ta" antes do verbo para indicar ações habituais no presente. "N ta fala" significa "Eu falo" (habitualmente).',
          kea: 'Na kriolu, ta uza "ta" antis di verbu pa indika asons abitual na prezenti. "N ta fala" ta sinifika "Eu falo" (abitualmente).'
        },
        difficulty: 'easy',
        category: 'verbos',
        points: 10
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: {
          pt: 'Qual é a forma correta para "Ele está falando agora"?',
          kea: 'Kal é forma koretu pa "Ele está falando agora"?'
        },
        options: ['El ta fala', 'El sta ta fala', 'El fala', 'El ka ta fala'],
        correctAnswer: 'El sta ta fala',
        explanation: {
          pt: 'Para ações que estão acontecendo no momento, usa-se "sta ta" ou "sata". "El sta ta fala" significa "Ele está falando agora".',
          kea: 'Pa asons ki sta kontise na momentu, ta uza "sta ta" ou "sata". "El sta ta fala" ta sinifika "Ele está falando agora".'
        },
        difficulty: 'medium',
        category: 'verbos',
        points: 15
      },
      {
        id: 'q3',
        type: 'fill-in-blank',
        question: {
          pt: 'Complete: "Nós _____ trabalhar todos os dias" (trabalhamos)',
          kea: 'Konpleta: "Nós _____ trabalhar todos os dias" (trabalhamos)'
        },
        correctAnswer: 'ta trabadja',
        explanation: {
          pt: '"Nu ta trabadja" é a forma correta. "Nu" = nós, "ta" = marcador de presente habitual, "trabadja" = trabalhar.',
          kea: '"Nu ta trabadja" é forma koretu. "Nu" = nós, "ta" = markador di prezenti abitual, "trabadja" = trabalhar.'
        },
        difficulty: 'easy',
        category: 'verbos',
        points: 10
      },
      {
        id: 'q4',
        type: 'translation',
        question: {
          pt: 'Traduza para cabo-verdiano: "Vocês comem peixe"',
          kea: 'Traduz pa kriolu: "Vocês comem peixe"'
        },
        correctAnswer: 'Nhos ta kume pexi',
        explanation: {
          pt: '"Nhos ta kume pexi" - Nhos (vocês) + ta (presente habitual) + kume (comer) + pexi (peixe).',
          kea: '"Nhos ta kume pexi" - Nhos (vocês) + ta (prezenti abitual) + kume (kume) + pexi (pexi).'
        },
        difficulty: 'medium',
        category: 'verbos',
        points: 15
      },
      {
        id: 'q5',
        type: 'multiple-choice',
        question: {
          pt: 'Qual é a negação de "N ta fala" (Eu falo)?',
          kea: 'Kal é negason di "N ta fala" (Eu falo)?'
        },
        options: ['N ka fala', 'N ka ta fala', 'N na ta fala', 'N no ta fala'],
        correctAnswer: 'N ka ta fala',
        explanation: {
          pt: 'A negação em cabo-verdiano é feita com "ka" antes do verbo. "N ka ta fala" significa "Eu não falo".',
          kea: 'Negason na kriolu é feitu ku "ka" antis di verbu. "N ka ta fala" ta sinifika "Eu não falo".'
        },
        difficulty: 'medium',
        category: 'verbos',
        points: 15
      }
    ]
  },
  {
    id: 'quiz-pronouns-1',
    title: {
      pt: 'Pronomes Pessoais',
      kea: 'Pronomi Pesoal'
    },
    description: {
      pt: 'Teste seus conhecimentos sobre pronomes pessoais em cabo-verdiano',
      kea: 'Testa bu konhesimentu sobri pronomi pesoal na kriolu'
    },
    lessonId: 2,
    category: 'pronomes',
    passingScore: 70,
    questions: [
      {
        id: 'p1',
        type: 'multiple-choice',
        question: {
          pt: 'Qual é o pronome pessoal para "Eu" em cabo-verdiano?',
          kea: 'Kal é pronomi pesoal pa "Eu" na kriolu?'
        },
        options: ['N', 'Bu', 'El', 'Nu'],
        correctAnswer: 'N',
        explanation: {
          pt: '"N" é o pronome pessoal para "Eu" em cabo-verdiano. Exemplo: "N ta fala" (Eu falo).',
          kea: '"N" é pronomi pesoal pa "Eu" na kriolu. Exenplu: "N ta fala" (Eu falo).'
        },
        difficulty: 'easy',
        category: 'pronomes',
        points: 10
      },
      {
        id: 'p2',
        type: 'multiple-choice',
        question: {
          pt: 'Como se diz "Eles" em cabo-verdiano?',
          kea: 'Modi ki ta fla "Eles" na kriolu?'
        },
        options: ['El', 'Es', 'Nhos', 'Nu'],
        correctAnswer: 'Es',
        explanation: {
          pt: '"Es" é o pronome para "Eles/Elas" em cabo-verdiano. Exemplo: "Es ta bai" (Eles vão).',
          kea: '"Es" é pronomi pa "Eles/Elas" na kriolu. Exenplu: "Es ta bai" (Eles vão).'
        },
        difficulty: 'easy',
        category: 'pronomes',
        points: 10
      },
      {
        id: 'p3',
        type: 'fill-in-blank',
        question: {
          pt: 'Complete: "_____ ta kume pan" (Tu comes pão)',
          kea: 'Konpleta: "_____ ta kume pan" (Tu comes pão)'
        },
        correctAnswer: 'Bu',
        explanation: {
          pt: '"Bu" é o pronome para "Tu/Você". "Bu ta kume pan" significa "Tu comes pão".',
          kea: '"Bu" é pronomi pa "Tu/Você". "Bu ta kume pan" ta sinifika "Tu comes pão".'
        },
        difficulty: 'easy',
        category: 'pronomes',
        points: 10
      },
      {
        id: 'p4',
        type: 'translation',
        question: {
          pt: 'Traduza: "Nós vamos à igreja"',
          kea: 'Traduz: "Nós vamos à igreja"'
        },
        correctAnswer: 'Nu ta bai na igreja',
        explanation: {
          pt: '"Nu ta bai na igreja" - Nu (nós) + ta (presente) + bai (ir) + na (à) + igreja (igreja).',
          kea: '"Nu ta bai na igreja" - Nu (nós) + ta (prezenti) + bai (bai) + na (na) + igreja (igreja).'
        },
        difficulty: 'medium',
        category: 'pronomes',
        points: 15
      }
    ]
  },
  {
    id: 'quiz-ministry-vocab-1',
    title: {
      pt: 'Vocabulário de Pregação',
      kea: 'Vokabuláriu di Pregason'
    },
    description: {
      pt: 'Teste seu vocabulário relacionado à pregação e ministério',
      kea: 'Testa bu vokabuláriu relasionadu ku pregason i ministériu'
    },
    category: 'ministry',
    passingScore: 75,
    questions: [
      {
        id: 'm1',
        type: 'translation',
        question: {
          pt: 'Como se diz "Bíblia" em cabo-verdiano?',
          kea: 'Modi ki ta fla "Bíblia" na kriolu?'
        },
        correctAnswer: 'Bíblia',
        explanation: {
          pt: 'A palavra "Bíblia" é a mesma em cabo-verdiano e português.',
          kea: 'Palavra "Bíblia" é mesmu na kriolu i purtuges.'
        },
        difficulty: 'easy',
        category: 'ministry',
        points: 10
      },
      {
        id: 'm2',
        type: 'multiple-choice',
        question: {
          pt: 'Qual é a tradução de "Jeová" em cabo-verdiano?',
          kea: 'Kal é traduson di "Jeová" na kriolu?'
        },
        options: ['Jeová', 'Deus', 'Kriador', 'Senhor'],
        correctAnswer: 'Jeová',
        explanation: {
          pt: 'O nome "Jeová" permanece o mesmo em cabo-verdiano.',
          kea: 'Nomi "Jeová" fikamesmu na kriolu.'
        },
        difficulty: 'easy',
        category: 'ministry',
        points: 10
      },
      {
        id: 'm3',
        type: 'translation',
        question: {
          pt: 'Traduza: "Gostaria de estudar a Bíblia?"',
          kea: 'Traduz: "Gostaria de estudar a Bíblia?"'
        },
        correctAnswer: 'Bu ta gosta di studa Bíblia?',
        explanation: {
          pt: '"Bu ta gosta di studa Bíblia?" é uma forma comum de oferecer um estudo bíblico.',
          kea: '"Bu ta gosta di studa Bíblia?" é un forma komun di ofrese un studu bíbliku.'
        },
        difficulty: 'medium',
        category: 'ministry',
        points: 15
      },
      {
        id: 'm4',
        type: 'fill-in-blank',
        question: {
          pt: 'Complete: "N ta _____ Bíblia" (Eu leio a Bíblia)',
          kea: 'Konpleta: "N ta _____ Bíblia" (Eu leio a Bíblia)'
        },
        correctAnswer: 'le',
        explanation: {
          pt: '"Le" significa "ler" em cabo-verdiano. "N ta le Bíblia" = "Eu leio a Bíblia".',
          kea: '"Le" ta sinifika "ler" na kriolu. "N ta le Bíblia" = "Eu leio a Bíblia".'
        },
        difficulty: 'easy',
        category: 'ministry',
        points: 10
      }
    ]
  }
];

/**
 * Obtenir un quiz par ID
 */
export function getQuizById(quizId: string): Quiz | undefined {
  return grammarQuizzes.find(quiz => quiz.id === quizId);
}

/**
 * Obtenir tous les quiz d'une leçon
 */
export function getQuizzesByLesson(lessonId: number): Quiz[] {
  return grammarQuizzes.filter(quiz => quiz.lessonId === lessonId);
}

/**
 * Obtenir tous les quiz d'une catégorie
 */
export function getQuizzesByCategory(category: string): Quiz[] {
  return grammarQuizzes.filter(quiz => quiz.category === category);
}
