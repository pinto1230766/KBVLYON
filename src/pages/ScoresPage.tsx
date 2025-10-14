import { useMemo } from 'react';
import { BarChart2, RotateCcw, Trophy } from 'lucide-react';
import { lessonsEnriched } from '../data/lessonsEnriched';
import { useLanguage } from '../hooks/useLanguage';
import { useOfflineStorage } from '../hooks/useOfflineStorage';

interface LessonScore {
  correct: number;
  total: number;
}

const ScoresPage = () => {
  const { t, language } = useLanguage();
  const { value: lessonScores, clearData } = useOfflineStorage<Record<number, LessonScore>>('lessonScores', {});

  const progress = useMemo(() => {
    return lessonsEnriched.map((lesson) => {
      const score = lessonScores[lesson.id];
      const progressPercent = score && score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

      return {
        id: lesson.id,
        title: language === 'kea' ? lesson.title.cv : lesson.title.pt,
        category: lesson.category,
        level: lesson.level,
        totalExercises: score?.total ?? 0,
        correctAnswers: score?.correct ?? 0,
        progressPercent,
      };
    });
  }, [language, lessonScores]);

  const stats = useMemo(() => {
    const totals = progress.reduce(
      (acc, lesson) => {
        acc.totalLessons += 1;
        acc.totalExercises += lesson.totalExercises;
        acc.totalCorrect += lesson.correctAnswers;
        acc.completedLessons += lesson.totalExercises > 0 && lesson.progressPercent === 100 ? 1 : 0;
        return acc;
      },
      { totalLessons: 0, totalExercises: 0, totalCorrect: 0, completedLessons: 0 }
    );

    const completionRate = totals.totalExercises > 0 ? Math.round((totals.totalCorrect / totals.totalExercises) * 100) : 0;

    return {
      ...totals,
      completionRate,
    };
  }, [progress]);

  const hasAnyScore = stats.totalExercises > 0;

  const levelLabels: Record<string, string> = {
    beginner: t('lessons.iniciante'),
    intermediate: t('lessons.intermediario'),
    advanced: t('lessons.avancado'),
  };

  const categoryLabels: Record<string, string> = {
    basic: t('lessons.basic') || 'Básico',
    conversation: t('lessons.conversation') || 'Conversação',
    grammar: t('lessons.grammar') || 'Gramática',
    ministry: t('lessons.ministry') || 'Ministério',
    culture: t('lessons.culture') || 'Cultura',
  };

  return (
    <div className="page-transition py-6 bg-muted min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-1 text-foreground">{t('scores.title')}</h1>
              <p className="text-sm text-muted-foreground max-w-2xl">{t('scores.subtitle')}</p>
            </div>
            {hasAnyScore && (
              <button
                onClick={clearData}
                className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                <RotateCcw className="w-4 h-4" /> {t('scores.resetButton')}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{t('scores.completionRate')}</p>
                  <p className="text-xl font-bold text-foreground">{stats.completionRate}%</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-300">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{t('scores.completedLessons')}</p>
                  <p className="text-xl font-bold text-foreground">
                    {stats.completedLessons}/{stats.totalLessons}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{t('scores.totalExercises')}</p>
                  <p className="text-xl font-bold text-foreground">
                    {stats.totalCorrect}/{stats.totalExercises}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!hasAnyScore ? (
          <div className="bg-card border border-dashed border-border rounded-2xl p-6 text-center shadow-sm">
            <p className="text-lg font-semibold text-foreground mb-2">{t('scores.noScoresTitle')}</p>
            <p className="text-sm text-muted-foreground">{t('scores.noScoresDescription')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {progress.map((lesson) => (
              <div
                key={lesson.id}
                className="bg-card border border-border rounded-2xl p-4 shadow-sm flex flex-col gap-3 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium text-primary-dark uppercase tracking-wide">
                      {categoryLabels[lesson.category]}
                    </p>
                    <h2 className="text-lg font-semibold text-foreground">{lesson.title}</h2>
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {levelLabels[lesson.level] ?? lesson.level}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{t('scores.progress')}</span>
                  <span className="font-semibold text-foreground">{lesson.progressPercent}%</span>
                </div>

                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    style={{ width: `${lesson.progressPercent}%` }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex flex-col bg-muted/50 dark:bg-muted/20 rounded-lg px-3 py-2">
                    <span className="uppercase tracking-wide text-[11px]">{t('scores.correctAnswers')}</span>
                    <span className="text-sm font-semibold text-foreground">
                      {lesson.correctAnswers}/{lesson.totalExercises}
                    </span>
                  </div>
                  <div className="flex flex-col bg-muted/50 dark:bg-muted/20 rounded-lg px-3 py-2">
                    <span className="uppercase tracking-wide text-[11px]">{t('scores.bestScoreBadge')}</span>
                    <span className="text-sm font-semibold text-foreground">
                      {lesson.progressPercent === 100 ? '🎉' : '—'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScoresPage;
