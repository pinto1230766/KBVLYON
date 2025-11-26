/**
 * Types pour les parcours d'apprentissage structurés
 */

export interface LearningPath {
  id: string;
  title: {
    pt: string;
    kea: string;
  };
  description: {
    pt: string;
    kea: string;
  };
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  duration: number; // En semaines
  lessons: number[]; // IDs des leçons
  quizzes: string[]; // IDs des quiz
  milestones: Milestone[];
  forMinistry: boolean;
  estimatedHours: number;
  icon: string;
  color: string;
}

export interface Milestone {
  id: string;
  title: {
    pt: string;
    kea: string;
  };
  description: {
    pt: string;
    kea: string;
  };
  requiredLessons: number[];
  requiredQuizzes: string[];
  badge: string;
  points: number;
}

export interface UserPathProgress {
  userId: string;
  pathId: string;
  startedAt: Date;
  completedLessons: number[];
  completedQuizzes: string[];
  completedMilestones: string[];
  currentLesson: number;
  progress: number; // 0-100
  totalTimeSpent: number; // En minutes
  lastAccessedAt: Date;
}
