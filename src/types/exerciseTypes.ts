export type Language = 'pt' | 'kea';

export interface LocalizedText {
  pt: string;
  kea: string;
}

export interface ExerciseBase {
  id: number;
  title: LocalizedText;
  description: LocalizedText;
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
  score?: number;
}

export interface DictationExercise extends ExerciseBase {
  type: 'dictation';
  text: LocalizedText;
  instructions: LocalizedText;
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
  score?: number;
}

export interface GrammarExercise extends ExerciseBase {
  type: 'grammar';
  questions: Array<{
    id: number;
    question: LocalizedText;
    options: {
      [key in Language]: string[];
    };
    correctAnswer: string;
    explanation: LocalizedText;
  }>;
}

export interface MatchingExercise extends ExerciseBase {
  type: 'matching';
  pairs: Array<{
    id: number;
    leftSide: LocalizedText;
    rightSide: LocalizedText;
    matched?: boolean;
  }>;
}

export interface RoleplayExercise extends ExerciseBase {
  type: 'roleplay';
  scenario: LocalizedText;
  roles: {
    user: string;
    bot: string;
  };
  conversation: Array<{
    role: 'user' | 'bot';
    text: LocalizedText;
  }>;
}

export type Exercise = DictationExercise | GrammarExercise | MatchingExercise | RoleplayExercise;

export interface ExerciseProgress {
  exerciseId: number;
  exerciseType: Exercise['type'];
  completed: boolean;
  score: number;
  totalQuestions: number;
  completedAt?: Date;
}

export interface QuizQuestion {
  id: number;
  question: LocalizedText;
  options: Array<{
    id: string;
    text: LocalizedText;
  }>;
  correctAnswer: string;
  explanation: LocalizedText;
}
