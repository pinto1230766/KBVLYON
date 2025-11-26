// Types pour les exercices de l'application

export interface ExerciseBase {
  id: number;
  title: string | { [key: string]: string }; // Pour le multilangue
  description?: string | { [key: string]: string };
}

export interface QuizQuestion extends ExerciseBase {
  type: 'quiz';
  question: string | { [key: string]: string };
  options: Array<string | { [key: string]: string }>;
  correctAnswer: number;
  explanation?: string | { [key: string]: string };
}

export interface MatchingExercise extends ExerciseBase {
  type: 'matching';
  pairs: Array<{
    id: number;
    left: string | { [key: string]: string };
    right: string | { [key: string]: string };
  }>;
}

export interface RoleplayExercise extends ExerciseBase {
  type: 'roleplay';
  scenario: string | { [key: string]: string };
  conversation: Array<{
    speaker: string;
    text: string | { [key: string]: string };

  }>;
}

export interface GrammarExercise extends ExerciseBase {
  type: 'grammar';
  explanation: string | { [key: string]: string };
  examples: Array<{
    cv: string;
    pt: string;
    en: string;
  }>;
  exercises: Array<{
    question: string | { [key: string]: string };
    answer: string | { [key: string]: string };
  }>;
}

export interface DictationExercise extends ExerciseBase {
  type: 'dictation';
  text: { [key: string]: string }; // Pour différentes langues
  audioUrl: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export type Exercise = 
  | QuizQuestion 
  | MatchingExercise 
  | RoleplayExercise 
  | GrammarExercise 
  | DictationExercise;

export interface ExerciseProgress {
  exerciseId: number;
  exerciseType: string;
  completed: boolean;
  score: number;
  totalQuestions: number;
  completedAt: Date;
}
