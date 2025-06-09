export interface ExerciseProgress {
  exerciseId: number;
  exerciseType: string;
  completed: boolean;
  score: number;
  totalQuestions: number;
  completedAt: Date;
}

export const saveProgress = (progress: ExerciseProgress): void => {
  const progresses = getProgresses();
  const existingIndex = progresses.findIndex(p => 
    p.exerciseId === progress.exerciseId && 
    p.exerciseType === progress.exerciseType
  );
  
  if (existingIndex >= 0) {
    progresses[existingIndex] = progress;
  } else {
    progresses.push(progress);
  }
  
  localStorage.setItem('exerciseProgress', JSON.stringify(progresses));
};

export const getProgress = (exerciseId: number, exerciseType: string): ExerciseProgress | undefined => {
  const progresses = getProgresses();
  return progresses.find(p => 
    p.exerciseId === exerciseId && 
    p.exerciseType === exerciseType
  );
};

const getProgresses = (): ExerciseProgress[] => {
  if (typeof window === 'undefined') return [];
  
  const saved = localStorage.getItem('exerciseProgress');
  if (!saved) return [];
  
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) 
      ? parsed.map((p: ExerciseProgress) => ({ // Changed 'any' to 'ExerciseProgress'
          ...p,
          completedAt: p.completedAt ? new Date(p.completedAt) : new Date()
        }))
      : [];
  } catch (e) {
    console.error('Error parsing progress from localStorage', e);
    return [];
  }
};
