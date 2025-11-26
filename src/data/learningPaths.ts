import type { LearningPath } from '@/types/learningPath';

/**
 * 4 Parcours d'apprentissage structurés pour apprendre le capverdien
 */

export const learningPaths: LearningPath[] = [
  // 1. DÉBUTANT COMPLET (0-3 mois)
  {
    id: 'path-beginner',
    title: {
      pt: '🌱 Iniciante Completo',
      kea: '🌱 Inisianti Kompletu'
    },
    description: {
      pt: 'Comece do zero! Aprenda o alfabeto, pronúncia, saudações básicas e frases essenciais para o dia a dia.',
      kea: 'Kumesa di zero! Prende alfabetu, pronúnsia, saudasons báziku i frazi esensiál pa dia-a-dia.'
    },
    level: 'beginner',
    duration: 12, // 3 mois
    estimatedHours: 40,
    forMinistry: false,
    icon: '🌱',
    color: '#10b981',
    lessons: [1, 2, 3, 4, 5, 6],
    quizzes: ['quiz-present-tense-1', 'quiz-pronouns-1'],
    milestones: [
      {
        id: 'milestone-alphabet',
        title: {
          pt: 'Alfabeto Dominado',
          kea: 'Alfabetu Dominadu'
        },
        description: {
          pt: 'Você conhece todas as letras e sons do cabo-verdiano!',
          kea: 'Bu konhese tudu letra i son di kriolu!'
        },
        requiredLessons: [1],
        requiredQuizzes: [],
        badge: '🔤',
        points: 50
      },
      {
        id: 'milestone-greetings',
        title: {
          pt: 'Mestre das Saudações',
          kea: 'Mestri di Saudasons'
        },
        description: {
          pt: 'Você pode cumprimentar e se apresentar em cabo-verdiano!',
          kea: 'Bu pode kumprimentá i aprezentá-bu na kriolu!'
        },
        requiredLessons: [1, 2],
        requiredQuizzes: ['quiz-pronouns-1'],
        badge: '👋',
        points: 100
      },
      {
        id: 'milestone-basic-conversation',
        title: {
          pt: 'Primeira Conversa',
          kea: 'Primeiru Konversa'
        },
        description: {
          pt: 'Você completou sua primeira conversa básica!',
          kea: 'Bu konpleta bu primeiru konversa báziku!'
        },
        requiredLessons: [1, 2, 3, 4],
        requiredQuizzes: ['quiz-present-tense-1', 'quiz-pronouns-1'],
        badge: '💬',
        points: 200
      }
    ]
  },

  // 2. CONVERSATION DE BASE (3-6 mois)
  {
    id: 'path-conversation',
    title: {
      pt: '🗣️ Conversação Básica',
      kea: '🗣️ Konversason Báziku'
    },
    description: {
      pt: 'Desenvolva habilidades de conversação. Aprenda a fazer perguntas, descrever coisas e expressar opiniões.',
      kea: 'Dizenvolve abilidadi di konversason. Prende faze pergunta, diskribe kusa i spresa opinion.'
    },
    level: 'intermediate',
    duration: 12, // 3 mois
    estimatedHours: 60,
    forMinistry: false,
    icon: '🗣️',
    color: '#3b82f6',
    lessons: [7, 8, 9, 10, 11, 12],
    quizzes: ['quiz-present-tense-1', 'quiz-pronouns-1'],
    milestones: [
      {
        id: 'milestone-questions',
        title: {
          pt: 'Mestre das Perguntas',
          kea: 'Mestri di Pergunta'
        },
        description: {
          pt: 'Você sabe fazer perguntas em cabo-verdiano!',
          kea: 'Bu sabe faze pergunta na kriolu!'
        },
        requiredLessons: [7, 8],
        requiredQuizzes: [],
        badge: '❓',
        points: 150
      },
      {
        id: 'milestone-descriptions',
        title: {
          pt: 'Descritor Expert',
          kea: 'Diskritor Expert'
        },
        description: {
          pt: 'Você pode descrever pessoas, lugares e coisas!',
          kea: 'Bu pode diskribe pésoa, lugar i kusa!'
        },
        requiredLessons: [7, 8, 9, 10],
        requiredQuizzes: ['quiz-present-tense-1'],
        badge: '📝',
        points: 250
      },
      {
        id: 'milestone-daily-conversation',
        title: {
          pt: 'Conversador do Dia a Dia',
          kea: 'Konversador di Dia-a-Dia'
        },
        description: {
          pt: 'Você pode ter conversas do cotidiano!',
          kea: 'Bu pode ten konversa di kotidianu!'
        },
        requiredLessons: [7, 8, 9, 10, 11, 12],
        requiredQuizzes: ['quiz-present-tense-1', 'quiz-pronouns-1'],
        badge: '🌟',
        points: 400
      }
    ]
  },

  // 3. PRÉDICATION NIVEAU 1 (6-9 mois)
  {
    id: 'path-ministry-1',
    title: {
      pt: '📖 Pregação Nível 1',
      kea: '📖 Pregason Nível 1'
    },
    description: {
      pt: 'Prepare-se para a pregação! Aprenda vocabulário bíblico, frases de introdução e como oferecer publicações.',
      kea: 'Prepara-bu pa pregason! Prende vokabuláriu bíbliku, frazi di introduson i modi ofrese publikasons.'
    },
    level: 'intermediate',
    duration: 12, // 3 mois
    estimatedHours: 80,
    forMinistry: true,
    icon: '📖',
    color: '#8b5cf6',
    lessons: [13, 14, 15, 16, 17, 18],
    quizzes: ['quiz-ministry-vocab-1'],
    milestones: [
      {
        id: 'milestone-bible-vocab',
        title: {
          pt: 'Vocabulário Bíblico',
          kea: 'Vokabuláriu Bíbliku'
        },
        description: {
          pt: 'Você conhece os termos bíblicos essenciais!',
          kea: 'Bu konhese termu bíbliku esensiál!'
        },
        requiredLessons: [13, 14],
        requiredQuizzes: ['quiz-ministry-vocab-1'],
        badge: '📚',
        points: 200
      },
      {
        id: 'milestone-first-presentation',
        title: {
          pt: 'Primeira Apresentação',
          kea: 'Primeiru Aprezentason'
        },
        description: {
          pt: 'Você pode fazer uma apresentação básica na pregação!',
          kea: 'Bu pode faze un aprezentason báziku na pregason!'
        },
        requiredLessons: [13, 14, 15, 16],
        requiredQuizzes: ['quiz-ministry-vocab-1'],
        badge: '🚪',
        points: 350
      },
      {
        id: 'milestone-ministry-ready',
        title: {
          pt: 'Pronto para o Ministério',
          kea: 'Prontu pa Ministériu'
        },
        description: {
          pt: 'Você está pronto para pregar em cabo-verdiano!',
          kea: 'Bu sta prontu pa prega na kriolu!'
        },
        requiredLessons: [13, 14, 15, 16, 17, 18],
        requiredQuizzes: ['quiz-ministry-vocab-1'],
        badge: '⭐',
        points: 500
      }
    ]
  },

  // 4. PRÉDICATION AVANCÉE (9-12 mois)
  {
    id: 'path-ministry-advanced',
    title: {
      pt: '🎯 Pregação Avançada',
      kea: '🎯 Pregason Avansadu'
    },
    description: {
      pt: 'Torne-se um pregador experiente! Aprenda a conduzir estudos bíblicos, responder objeções e adaptar-se culturalmente.',
      kea: 'Torna-bu un pregador speriensiadu! Prende konduz studu bíbliku, responde objesons i adapta-bu kulturalmente.'
    },
    level: 'advanced',
    duration: 12, // 3 mois
    estimatedHours: 100,
    forMinistry: true,
    icon: '🎯',
    color: '#ef4444',
    lessons: [13, 14, 15, 16, 17, 18], // Leçons avancées à créer
    quizzes: ['quiz-ministry-vocab-1'],
    milestones: [
      {
        id: 'milestone-bible-study',
        title: {
          pt: 'Condutor de Estudos',
          kea: 'Kondutor di Studu'
        },
        description: {
          pt: 'Você pode conduzir estudos bíblicos completos!',
          kea: 'Bu pode konduz studu bíbliku kompletu!'
        },
        requiredLessons: [13, 14, 15],
        requiredQuizzes: ['quiz-ministry-vocab-1'],
        badge: '📖',
        points: 300
      },
      {
        id: 'milestone-objections',
        title: {
          pt: 'Mestre das Respostas',
          kea: 'Mestri di Resposta'
        },
        description: {
          pt: 'Você sabe responder objeções comuns!',
          kea: 'Bu sabe responde objesons komun!'
        },
        requiredLessons: [13, 14, 15, 16, 17],
        requiredQuizzes: ['quiz-ministry-vocab-1'],
        badge: '💡',
        points: 400
      },
      {
        id: 'milestone-expert-preacher',
        title: {
          pt: 'Pregador Expert',
          kea: 'Pregador Expert'
        },
        description: {
          pt: 'Você é um pregador experiente em cabo-verdiano!',
          kea: 'Bu é un pregador speriensiadu na kriolu!'
        },
        requiredLessons: [13, 14, 15, 16, 17, 18],
        requiredQuizzes: ['quiz-ministry-vocab-1'],
        badge: '🏆',
        points: 1000
      }
    ]
  }
];

export function getPathById(pathId: string): LearningPath | undefined {
  return learningPaths.find(path => path.id === pathId);
}

export function getPathsByLevel(level: string): LearningPath[] {
  return learningPaths.filter(path => path.level === level);
}

export function getMinistryPaths(): LearningPath[] {
  return learningPaths.filter(path => path.forMinistry);
}
