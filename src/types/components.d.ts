import { DictationExercise, GrammarExercise, Language } from './exerciseTypes';

export interface ExerciseBaseProps {
  exercise: DictationExercise | GrammarExercise;
  onComplete: (score: number) => void;
  language: Language;
  onNext?: () => void;
  onBack?: () => void;
}

export interface DictationExerciseProps extends ExerciseBaseProps {
  exercise: DictationExercise;
}

export interface GrammarExerciseProps extends ExerciseBaseProps {
  exercise: GrammarExercise;
}

// Les composants sont maintenant correctement typés via leurs fichiers source
// Les déclarations de module ont été supprimées car elles causaient des conflits
