/**
 * Types pour le système de quiz et exercices
 */

export type QuizType = 'multiple-choice' | 'fill-in-blank' | 'translation' | 'conjugation' | 'matching';

export interface QuizQuestion {
  id: string;
  type: QuizType;
  question: {
    pt: string;
    kea?: string;
  };
  // Pour multiple-choice
  options?: string[];
  correctAnswer: string | string[];
  // Pour fill-in-blank
  blanks?: number;
  // Pour matching
  pairs?: Array<{ left: string; right: string }>;
  explanation: {
    pt: string;
    kea?: string;
  };
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  points: number;
}

export interface Quiz {
  id: string;
  title: {
    pt: string;
    kea: string;
  };
  description: {
    pt: string;
    kea: string;
  };
  lessonId?: number;
  questions: QuizQuestion[];
  passingScore: number; // Pourcentage minimum pour réussir
  timeLimit?: number; // En secondes, optionnel
  category: string;
}

export interface QuizAttempt {
  quizId: string;
  userId: string;
  startedAt: Date;
  completedAt?: Date;
  answers: Record<string, string | string[]>;
  score: number;
  passed: boolean;
  timeSpent: number; // En secondes
}

export interface UserQuizProgress {
  userId: string;
  quizId: string;
  attempts: QuizAttempt[];
  bestScore: number;
  lastAttemptDate: Date;
  completed: boolean;
}
