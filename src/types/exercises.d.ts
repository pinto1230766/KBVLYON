export type Language = 'pt' | 'cv';

declare module '../data/lessonsData' {
  interface ExerciseBase {
    id: string;
    type: string;
    title: string;
    description: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    completed: boolean;
    score?: number;
  }

  interface DictationExercise extends ExerciseBase {
    type: 'dictation';
    audioUrl: string;
    text: Record<Language, string>; // lang => text
    language: string;
  }

  interface GrammarExercise extends ExerciseBase {
    type: 'grammar';
    question: Record<Language, string>;
    options: Record<Language, string[]>;
    correctAnswer: Record<Language, string>;
    explanation?: Record<Language, string>;
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
    scenario: Record<Language, string>;
    roles: {
      user: string;
      bot: string;
    };
    conversation: Array<{
      role: 'user' | 'bot';
      text: Record<Language, string>;
    }>;
  }

  type Exercise = DictationExercise | GrammarExercise | MatchingExercise | RoleplayExercise;
}
