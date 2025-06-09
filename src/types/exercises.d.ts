import { ExerciseType } from '../data/lessonsData';

declare module '../data/lessonsData' {
  interface ExerciseBase {
    id: string;
    type: ExerciseType;
    title: string;
    description: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    completed: boolean;
    score?: number;
  }

  interface DictationExercise extends ExerciseBase {
    type: 'dictation';
    audioUrl: string;
    text: Record<string, string>; // lang => text
    language: string;
  }

  interface GrammarExercise extends ExerciseBase {
    type: 'grammar';
    question: Record<string, string>;
    options: Record<string, string[]>;
    correctAnswer: Record<string, string>;
    explanation?: Record<string, string>;
  }

  interface MatchingExercise extends ExerciseBase {
    type: 'matching';
    pairs: Array<{
      id: number;
      leftSide: string;
      rightSide: string;
    }>;
  }

  interface RoleplayExercise extends ExerciseBase {
    type: 'roleplay';
    scenario: Record<string, string>;
    roles: {
      user: string;
      bot: string;
    };
    conversation: Array<{
      role: 'user' | 'bot';
      text: Record<string, string>;
    }>;
  }

  type Exercise = DictationExercise | GrammarExercise | MatchingExercise | RoleplayExercise;
}
