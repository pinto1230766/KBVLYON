import { useEffect, useMemo, useState } from 'react';
import { ChevronRight, X, CheckCircle, BookOpen } from 'lucide-react';
import { lessonsEnriched, type LessonEnriched } from '../data/lessonsEnriched';
import { useLanguage } from '../hooks/useLanguage';
import { useOfflineStorage } from '../hooks/useOfflineStorage';

interface LessonSummary {
  id: number;
  title: string;
  description: string;
  levelKey: LevelKey;
  levelLabel: string;
  categoryKey: CategoryKey;
  categoryLabel: string;
  completed: boolean;
}

type LevelKey = 'beginner' | 'intermediate' | 'advanced';
type LevelFilter = 'all' | LevelKey;

type CategoryKey = 'basic' | 'conversation' | 'grammar' | 'ministry' | 'culture';
type CategoryFilter = 'all' | CategoryKey;

const levelMap: Record<string, LevelKey> = {
  iniciante: 'beginner',
  'iniciant': 'beginner',
  beginner: 'beginner',
  'débutant': 'beginner',
  debutant: 'beginner',
  'intermediário': 'intermediate',
  intermediario: 'intermediate',
  intermediate: 'intermediate',
  'intermédiaire': 'intermediate',
  avançado: 'advanced',
  avancado: 'advanced',
  advanced: 'advanced',
  'avancé': 'advanced'
};

const categoryMap: Record<string, CategoryKey> = {
  basic: 'basic',
  conversation: 'conversation',
  grammar: 'grammar',
  ministry: 'ministry',
  culture: 'culture'
};

const normalizeLevel = (level: string): LevelKey => {
  const key = level.trim().toLowerCase();
  return levelMap[key] ?? 'beginner';
};

const normalizeCategory = (category: string): CategoryKey => {
  const key = category.trim().toLowerCase();
  return categoryMap[key] ?? 'basic';
};

const LessonsPage = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [selectedLevel, setSelectedLevel] = useState<LevelFilter>('all');
  const [selectedLesson, setSelectedLesson] = useState<LessonEnriched | null>(null);
  const [revealedExercises, setRevealedExercises] = useState<string[]>([]);
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, { value: string; status: 'pending' | 'correct' | 'incorrect' }>>({});
  const { value: completedLessons, setValue: setCompletedLessons } = useOfflineStorage<number[]>('completedLessons', []);
  const { value: lessonScores, setValue: setLessonScores } = useOfflineStorage<Record<number, { correct: number; total: number }>>('lessonScores', {});

  const levelLabels = useMemo(() => ({
    beginner: t('lessons.iniciante'),
    intermediate: t('lessons.intermediario'),
    advanced: t('lessons.avancado')
  }), [t]);

  const categoryLabels = useMemo(() => ({
    basic: t('lessons.basic') || 'Básico',
    conversation: t('lessons.conversation') || 'Conversação',
    grammar: t('lessons.grammar') || 'Gramática',
    ministry: t('lessons.ministry') || 'Ministério',
    culture: t('lessons.culture') || 'Cultura'
  }), [t]);

  const lessons: LessonSummary[] = useMemo(() => (
    lessonsEnriched.map(lesson => {
      const levelKey = normalizeLevel(lesson.level);
      const categoryKey = normalizeCategory(lesson.category);

      return {
        id: lesson.id,
        title: language === 'kea' ? lesson.title.cv : lesson.title.pt,
        description: language === 'kea' ? lesson.description.cv : lesson.description.pt,
        levelKey,
        levelLabel: levelLabels[levelKey],
        categoryKey,
        categoryLabel: categoryLabels[categoryKey],
        completed: completedLessons.includes(lesson.id)
      } as LessonSummary;
    })
  ), [categoryLabels, levelLabels, language, completedLessons]);

  const categoryOrder: CategoryKey[] = useMemo(
    () => ['basic', 'conversation', 'grammar', 'ministry', 'culture'],
    []
  );

  const categoryOptions = useMemo(
    () => [
      { key: 'all' as CategoryFilter, label: t('lessons.todas') },
      ...categoryOrder.map(key => ({ key, label: categoryLabels[key] }))
    ],
    [categoryLabels, categoryOrder, t]
  );

  const levelOptions = useMemo(
    () => [
      { key: 'all' as LevelFilter, label: t('lessons.todosNiveis') },
      { key: 'beginner' as LevelFilter, label: levelLabels.beginner },
      { key: 'intermediate' as LevelFilter, label: levelLabels.intermediate },
      { key: 'advanced' as LevelFilter, label: levelLabels.advanced }
    ],
    [levelLabels, t]
  );

  const filteredLessons = lessons.filter(lesson => {
    const categoryMatch = selectedCategory === 'all' || lesson.categoryKey === selectedCategory;
    const levelMatch = selectedLevel === 'all' || lesson.levelKey === selectedLevel;
    return categoryMatch && levelMatch;
  });

  useEffect(() => {
    setRevealedExercises([]);
    setExerciseAnswers({});
  }, [selectedLesson?.id]);

  const handleExerciseAnswerChange = (exerciseKey: string, value: string) => {
    setExerciseAnswers(prev => {
      const previousStatus = prev[exerciseKey]?.status ?? 'pending';
      return {
        ...prev,
        [exerciseKey]: {
          value,
          status: previousStatus === 'correct' ? 'correct' : 'pending'
        }
      };
    });
  };

  const normalizeAnswer = (value: string) => value.trim().toLowerCase();

  const handleExerciseSubmit = (
    exerciseKey: string,
    exercise: LessonEnriched['exercises'][number],
    overrideValue?: string
  ) => {
    const entry = exerciseAnswers[exerciseKey];
    const valueToCheck = overrideValue ?? entry?.value;

    if (!valueToCheck || (entry && entry.status === 'correct')) {
      return;
    }

    const isCorrect = normalizeAnswer(valueToCheck) === normalizeAnswer(exercise.answer);

    setExerciseAnswers(prev => ({
      ...prev,
      [exerciseKey]: {
        value: valueToCheck,
        status: isCorrect ? 'correct' : 'incorrect'
      }
    }));

    if (isCorrect) {
      setRevealedExercises(prev => (prev.includes(exerciseKey) ? prev : [...prev, exerciseKey]));
    }
  };

  const totalExercises = selectedLesson?.exercises.length ?? 0;
  const correctExercises = selectedLesson
    ? selectedLesson.exercises.reduce((count, _, index) => {
        const key = `${selectedLesson.id}-${index}`;
        return count + (exerciseAnswers[key]?.status === 'correct' ? 1 : 0);
      }, 0)
    : 0;
  const savedScore = selectedLesson ? lessonScores[selectedLesson.id] : undefined;

  const lessonId = selectedLesson?.id;

  useEffect(() => {
    if (!lessonId) {
      return;
    }

    const total = totalExercises;

    setLessonScores(prev => {
      const previous = prev[lessonId];

      if (!previous || previous.total !== total || correctExercises > previous.correct) {
        return {
          ...prev,
          [lessonId]: {
            correct: correctExercises,
            total
          }
        };
      }

      return prev;
    });
  }, [lessonId, totalExercises, correctExercises, setLessonScores]);

  const completedCount = lessons.filter(l => l.completed).length;
  const progressPercentage = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;

  const toggleLessonCompletion = (lessonId: number) => {
    setCompletedLessons(prev => {
      const newCompleted = new Set(prev);
      if (newCompleted.has(lessonId)) {
        newCompleted.delete(lessonId);
      } else {
        newCompleted.add(lessonId);
      }
      return Array.from(newCompleted);
    });
  };


  const getLevelColor = (level: LevelKey) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'intermediate':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'advanced':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getLevelButtonColor = (level: LevelKey) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-500 text-white hover:bg-green-600';
      case 'intermediate':
        return 'bg-orange-500 text-white hover:bg-orange-600';
      case 'advanced':
        return 'bg-red-500 text-white hover:bg-red-600';
      default:
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
    }
  };

  return (
    <div className="min-h-screen bg-background page-container">
      <div className="container mx-auto px-3 py-2">
        {/* En-tête */}
        <div className="text-center mb-1 md:mb-2">
           <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">
             {t('lessons.titulo')}
           </h1>
           <p className="text-muted-foreground text-base md:text-lg mb-1 md:mb-2">
             {t('lessons.subtitulo')}
           </p>

           {/* Statistiques avec barre de progression */}
           <div className="bg-card border border-border rounded-xl p-4 md:p-6 mb-1 md:mb-2 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="text-center">
                <span className="text-3xl font-bold text-primary">{lessons.length}</span>
                <span className="text-muted-foreground text-sm block">{t('lessons.licoes')}</span>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-green-500">{completedCount}</span>
                <span className="text-muted-foreground text-sm block">{t('lessons.completas')}</span>
              </div>
            </div>

            {/* Barre de progression */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progression</span>
                <span className="font-medium text-foreground">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Filtres Categorias */}
        <div className="mb-1 md:mb-2">
          <h3 className="text-sm font-semibold text-foreground mb-2 md:mb-3">{t('lessons.categorias')}</h3>
          <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible scrollbar-thin">
            {categoryOptions.map(({ key, label }, index) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                aria-pressed={selectedCategory === key}
                className={`min-w-[150px] md:min-w-0 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {index === 0 ? `📚 ${label}` : label}
              </button>
            ))}
          </div>
        </div>

        {/* Filtres Nível */}
        <div className="mb-1 md:mb-2">
          <h3 className="text-sm font-semibold text-foreground mb-2 md:mb-3">{t('lessons.nivel')}</h3>
          <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible scrollbar-thin">
            {levelOptions.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSelectedLevel(key)}
                aria-pressed={selectedLevel === key}
                className={`min-w-[140px] md:min-w-0 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedLevel === key
                    ? key === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : getLevelButtonColor(key)
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des leçons améliorée */}
        <div className="lesson-grid">
          {filteredLessons.map((lesson) => {
            const isCompleted = lesson.completed;

            return (
              <div
                key={`${lesson.id}-${lesson.categoryKey}`}
                className={`bg-card border border-border rounded-xl p-3 md:p-5 hover:shadow-lg transition-all cursor-pointer group active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  isCompleted ? 'ring-2 ring-green-500/50' : ''
                }`}
                onClick={() => setSelectedLesson(lessonsEnriched.find(l => l.id === lesson.id) || null)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedLesson(lessonsEnriched.find(l => l.id === lesson.id) || null);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-labelledby={`lesson-card-${lesson.id}-title`}
              >
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(lesson.levelKey)}`}>
                      {lesson.levelLabel}
                    </span>
                    {isCompleted && (
                      <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                    )}
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded">
                      {t('lessons.licao')} {lesson.id}
                    </span>
                  </div>
                  <h3 id={`lesson-card-${lesson.id}-title`} className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lesson.description}
                  </p>
                  <div className="flex items-center justify-between pt-1 md:pt-2">
                    <span className="text-xs text-muted-foreground">
                      {lesson.categoryLabel}
                    </span>
                    {isCompleted && (
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">
                        Terminée ✓
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredLessons.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                {t('lessons.nenhumaLicao')}
              </p>
            </div>
         )}

        {/* Bannière Continue Aprendendo */}
        <div className="mt-6 md:mt-12 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 rounded-xl p-4 md:p-8 text-center">
           <div className="flex items-center justify-center gap-2 mb-3">
             <span className="text-3xl">🎯</span>
             <h2 className="text-2xl font-bold text-white">{t('lessons.continueAprendendo')}</h2>
           </div>
           <p className="text-white/90 text-lg">
             {t('lessons.cadaLicao')}
           </p>
         </div>
      </div>

      {/* Modal de détail de leçon amélioré */}
     {selectedLesson && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-xl max-w-4xl md:max-w-3xl w-full max-h-[90vh] overflow-y-auto" role="dialog" aria-labelledby="lesson-modal-title" aria-describedby="lesson-modal-description" aria-modal="true">
           <div className="p-6">
             <div className="flex items-start justify-between mb-2">
               <div className="flex-1">
                 <div className="flex items-center gap-2 mb-3">
                   <BookOpen className="w-8 h-8 text-primary" aria-hidden="true" />
                   <div>
                     <h2 id="lesson-modal-title" className="text-2xl font-bold text-foreground">
                       {language === 'kea' ? selectedLesson.title.cv : selectedLesson.title.pt}
                     </h2>
                     <p id="lesson-modal-description" className="text-sm text-muted-foreground">
                       {language === 'kea' ? selectedLesson.title.pt : selectedLesson.title.cv}
                     </p>
                   </div>
                 </div>
                 <div className="flex items-center gap-2 flex-wrap">
                   {(() => {
                     const levelKey = normalizeLevel(selectedLesson.level);
                     return (
                       <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(levelKey)}`}>
                         {levelLabels[levelKey]}
                       </span>
                     );
                   })()}
                   <span className="text-sm text-muted-foreground">
                     {categoryLabels[normalizeCategory(selectedLesson.category)]}
                   </span>
                 </div>
               </div>
               <div className="flex items-center gap-2">
                 <button
                   onClick={() => toggleLessonCompletion(selectedLesson.id)}
                   className={`p-2 rounded-lg transition-colors ${
                     completedLessons.includes(selectedLesson.id)
                       ? 'text-green-500 bg-green-50 dark:bg-green-950/20'
                       : 'text-muted-foreground hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-950/20'
                   }`}
                   aria-label={completedLessons.includes(selectedLesson.id) ? 'Marquer comme non terminée' : 'Marquer comme terminée'}
                 >
                   <CheckCircle className={`w-5 h-5 ${completedLessons.includes(selectedLesson.id) ? 'fill-current' : ''}`} aria-hidden="true" />
                 </button>
                 <button
                   onClick={() => setSelectedLesson(null)}
                   className="p-2 hover:bg-muted rounded-lg transition-colors"
                   aria-label={t('common.close')}
                 >
                   <X className="w-5 h-5" aria-hidden="true" />
                 </button>
               </div>
             </div>

              <div className="space-y-2">
                {/* Contenu */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">{t('lessons.conteudo')}</h3>
                  <div className="prose prose-sm max-w-none text-foreground">
                    <p className="mb-3">{language === 'kea' ? selectedLesson.content.cv : selectedLesson.content.pt}</p>
                  </div>
                </div>

                {/* Vocabulário */}
                {selectedLesson.vocabulary && selectedLesson.vocabulary.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="text-green-600">📚</span>
                      {t('lessons.vocabulario')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedLesson.vocabulary.map((word, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-4 rounded-xl border border-green-200 dark:border-green-800 shadow-sm"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="font-bold text-green-700 dark:text-green-400 text-lg mb-1">{word.cv}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{word.pt}</p>
                              {word.pronunciation && (
                                <div className="flex items-center gap-1">
                                  <span className="text-xs text-gray-500">🔊</span>
                                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-mono">
                                    {word.pronunciation}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Exercícios */}
                {selectedLesson.exercises && selectedLesson.exercises.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="text-blue-600">📝</span>
                      {t('lessons.exercicios')}
                    </h3>
                    {totalExercises > 0 && (
                      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-2 text-sm">
                        <span className="font-semibold text-blue-700 dark:text-blue-300">
                          {t('lessons.currentScore')}: {correctExercises}/{totalExercises}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {savedScore
                            ? `${t('lessons.bestScore')}: ${savedScore.correct}/${savedScore.total}`
                            : t('lessons.scoreHint')}
                        </span>
                      </div>
                    )}
                    <div className="space-y-4">
                      {selectedLesson.exercises.map((exercise, index) => {
                        const exerciseKey = `${selectedLesson.id}-${index}`;
                        const isRevealed = revealedExercises.includes(exerciseKey);
                        const answerEntry = exerciseAnswers[exerciseKey];
                        const isCorrect = answerEntry?.status === 'correct';
                        const isIncorrect = answerEntry?.status === 'incorrect';

                        const toggleReveal = () => {
                          setRevealedExercises(prev => (
                            prev.includes(exerciseKey)
                              ? prev.filter(key => key !== exerciseKey)
                              : [...prev, exerciseKey]
                          ));
                        };

                        return (
                          <div
                            key={index}
                            className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                {index + 1}
                              </span>
                              <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                                {exercise.type === 'translation'
                                  ? t('lessons.traduzir')
                                  : exercise.type === 'completion'
                                    ? t('lessons.completar')
                                    : t('lessons.escolherResposta')}
                              </span>
                              <button
                                type="button"
                                onClick={toggleReveal}
                                className="ml-auto text-xs font-semibold text-blue-600 dark:text-blue-300 hover:underline"
                              >
                                {isRevealed ? t('lessons.ocultarResposta') : t('lessons.mostrarResposta')}
                              </button>
                            </div>
                            <p className="font-medium mb-3 text-gray-800 dark:text-gray-200">
                              {language === 'kea' ? exercise.question.cv : exercise.question.pt}
                            </p>
                            {exercise.options && (
                              <div className="space-y-2 mb-4">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                  {t('lessons.opcoes')}
                                </p>
                                <div className="grid grid-cols-2 gap-2">
                                  {exercise.options.map((option, optIndex) => (
                                    <button
                                      key={optIndex}
                                      type="button"
                                      onClick={() => {
                                        handleExerciseAnswerChange(exerciseKey, option);
                                        handleExerciseSubmit(exerciseKey, exercise, option);
                                      }}
                                      className={`bg-white dark:bg-gray-800 p-2 rounded border text-sm text-left transition-colors ${
                                        answerEntry?.value === option
                                          ? isCorrect
                                            ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                                            : isIncorrect
                                              ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
                                              : 'border-blue-400'
                                          : 'border-border hover:border-blue-300'
                                      }`}
                                      disabled={isCorrect}
                                    >
                                      <span className="font-medium text-blue-600 dark:text-blue-400">
                                        {String.fromCharCode(65 + optIndex)})
                                      </span>{' '}
                                      {option}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                            {!exercise.options && (
                              <form
                                className="space-y-2 mb-3"
                                onSubmit={(event) => {
                                  event.preventDefault();
                                  handleExerciseSubmit(exerciseKey, exercise);
                                }}
                              >
                                <label className="sr-only" htmlFor={`exercise-input-${exerciseKey}`}>
                                  {t('lessons.enterAnswer')}
                                </label>
                                <input
                                  id={`exercise-input-${exerciseKey}`}
                                  type="text"
                                  value={answerEntry?.value ?? ''}
                                  onChange={(event) => handleExerciseAnswerChange(exerciseKey, event.target.value)}
                                  className={`w-full rounded-lg border px-3 py-2 text-sm bg-white dark:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    isCorrect ? 'border-green-500' : isIncorrect ? 'border-red-500' : 'border-border'
                                  }`}
                                  placeholder={t('lessons.enterAnswerPlaceholder')}
                                  disabled={isCorrect}
                                />
                                <div className="flex items-center gap-2">
                                  <button
                                    type="submit"
                                    className="btn btn-primary text-xs px-3 py-1.5"
                                    disabled={!answerEntry?.value || isCorrect}
                                  >
                                    {t('lessons.submitAnswer')}
                                  </button>
                                  {isIncorrect && (
                                    <span className="text-xs text-red-600 dark:text-red-400">
                                      {t('lessons.feedbackIncorrect')}
                                    </span>
                                  )}
                                  {isCorrect && (
                                    <span className="text-xs text-green-600 dark:text-green-400">
                                      {t('lessons.feedbackCorrect')}
                                    </span>
                                  )}
                                </div>
                              </form>
                            )}
                            {exercise.options && isIncorrect && (
                              <p className="text-xs text-red-600 dark:text-red-400 mb-2">
                                {t('lessons.feedbackIncorrect')}
                              </p>
                            )}
                            {exercise.options && isCorrect && (
                              <p className="text-xs text-green-600 dark:text-green-400 mb-2">
                                {t('lessons.feedbackCorrect')}
                              </p>
                            )}
                            {isRevealed && (
                              <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                                  <strong>{t('lessons.resposta')}:</strong>{' '}
                                  <span className="text-green-600 dark:text-green-400 font-bold">{exercise.answer}</span>
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonsPage;
