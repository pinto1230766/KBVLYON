/**
 * Types pour les dialogues et scénarios de prédication
 */

export interface DialogueLine {
  speaker: 'preacher' | 'householder' | 'student' | 'teacher';
  text: {
    pt: string;
    kea: string;
  };

  notes?: {
    pt: string;
    kea: string;
  };
}

export interface MinistryScenario {
  id: string;
  title: {
    pt: string;
    kea: string;
  };
  description: {
    pt: string;
    kea: string;
  };
  type: 'first_visit' | 'return_visit' | 'bible_study' | 'informal_witnessing';
  difficulty: 'easy' | 'medium' | 'hard';
  dialogue: DialogueLine[];
  vocabulary: Array<{
    word: string;
    translation: {
      pt: string;
      kea: string;
    };
  }>;
  tips: Array<{
    pt: string;
    kea: string;
  }>;
  category: string;
}

export interface UserScenarioProgress {
  userId: string;
  scenarioId: string;
  completed: boolean;
  practiceCount: number;
  lastPracticedAt: Date;
  rating?: number; // 1-5
}
