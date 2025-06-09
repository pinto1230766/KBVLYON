export interface ExerciseBase {
  id: number;
  title: string;
  description: string;
  difficulty: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

export interface QuizQuestion extends ExerciseBase {
  type: 'quiz';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface MatchingPair {
  id: number;
  left: string;
  right: string;
}

export interface MatchingExercise extends ExerciseBase {
  type: 'matching';
  pairs: MatchingPair[];
}

export interface DialogLine {
  speaker: string;
  text: string;
  audioUrl?: string;
}

export interface Roleplay extends ExerciseBase {
  type: 'roleplay';
  scenario: string;
  dialog: DialogLine[];
}

export interface GrammarExercise extends ExerciseBase {
  type: 'grammar';
  instructions: string;
  questions: Array<{
    id: number;
    question: string;
    answer: string;
    explanation: string;
  }>;
}

export interface DictationExercise extends ExerciseBase {
  type: 'dictation';
  text: string;
  audioUrl: string;
  hints?: string[];
}

export type Exercise = 
  | QuizQuestion 
  | MatchingExercise 
  | Roleplay 
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

export interface GrammarLesson {
  id: number;
  title: {
    pt: string;
    cv: string;
  };
  content: {
    pt: string;
    cv: string;
  };
  examples: Array<{
    pt: string;
    cv: string;
  }>;
}
