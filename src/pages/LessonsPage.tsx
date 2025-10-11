import { useMemo, useState } from 'react';
import { ChevronRight, X, Star, CheckCircle, BookOpen } from 'lucide-react';
import { lessonsData, type Lesson as LessonData } from '../data/lessonsData_fixed';
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

type CategoryKey =
  | 'general'
  | 'pronouns'
  | 'verbs'
  | 'syntax'
  | 'morphology'
  | 'vocabulary'
  | 'phrases'
  | 'numbers'
  | 'culture';
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
  general: 'general',
  pronouns: 'pronouns',
  verbs: 'verbs',
  syntax: 'syntax',
  morphology: 'morphology',
  vocabulary: 'vocabulary',
  phrases: 'phrases',
  numbers: 'numbers',
  culture: 'culture'
};

const normalizeLevel = (level: string): LevelKey => {
  const key = level.trim().toLowerCase();
  return levelMap[key] ?? 'beginner';
};

const normalizeCategory = (category: string): CategoryKey => {
  const key = category.trim().toLowerCase();
  return categoryMap[key] ?? 'general';
};

const LessonsPage = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [selectedLevel, setSelectedLevel] = useState<LevelFilter>('all');
  const [selectedLesson, setSelectedLesson] = useState<LessonData | null>(null);
  const { value: completedLessons, setValue: setCompletedLessons } = useOfflineStorage<number[]>('completedLessons', []);
  const { value: favoriteLessons, setValue: setFavoriteLessons } = useOfflineStorage<number[]>('favoriteLessons', []);

  const levelLabels = useMemo(() => ({
    beginner: t('licoes.iniciante'),
    intermediate: t('licoes.intermediario'),
    advanced: t('licoes.avancado')
  }), [t]);

  const categoryLabels = useMemo(() => ({
    general: t('licoes.general'),
    pronouns: t('licoes.pronouns'),
    verbs: t('licoes.verbos'),
    syntax: t('licoes.sintaxe'),
    morphology: t('licoes.morfologia'),
    vocabulary: t('licoes.vocabulario'),
    phrases: t('licoes.phrases'),
    numbers: t('licoes.numbers'),
    culture: t('licoes.culture')
  }), [t]);

  const lessons: LessonSummary[] = useMemo(() => (
    lessonsData.map(lesson => {
      const levelKey = normalizeLevel(lesson.level);
      const categoryKey = normalizeCategory(lesson.category);

      return {
        id: lesson.id,
        title: lesson.title[language] || lesson.title.pt,
        description: lesson.description[language] || lesson.description.pt,
        levelKey,
        levelLabel: levelLabels[levelKey],
        categoryKey,
        categoryLabel: categoryLabels[categoryKey],
        completed: completedLessons.includes(lesson.id)
      } as LessonSummary;
    })
  ), [categoryLabels, levelLabels, language, completedLessons]);

  const categoryOrder: CategoryKey[] = useMemo(
    () => ['general', 'pronouns', 'verbs', 'syntax', 'morphology', 'vocabulary', 'phrases', 'numbers', 'culture'],
    []
  );

  const categoryOptions = useMemo(
    () => [
      { key: 'all' as CategoryFilter, label: t('licoes.todas') },
      ...categoryOrder.map(key => ({ key, label: categoryLabels[key] }))
    ],
    [categoryLabels, categoryOrder, t]
  );

  const levelOptions = useMemo(
    () => [
      { key: 'all' as LevelFilter, label: t('licoes.todosNiveis') },
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

  const toggleLessonFavorite = (lessonId: number) => {
    setFavoriteLessons(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(lessonId)) {
        newFavorites.delete(lessonId);
      } else {
        newFavorites.add(lessonId);
      }
      return Array.from(newFavorites);
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
      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center mb-8">
           <h1 className="text-4xl font-bold text-foreground mb-3">
             {t('licoes.titulo')}
           </h1>
           <p className="text-muted-foreground text-lg mb-6">
             {t('licoes.subtitulo')}
           </p>
          
          {/* Statistiques avec barre de progression */}
          <div className="bg-card border border-border rounded-xl p-6 mb-8 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="text-center">
                <span className="text-3xl font-bold text-primary">{lessons.length}</span>
                <span className="text-muted-foreground text-sm block">{t('licoes.licoes')}</span>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-green-500">{completedCount}</span>
                <span className="text-muted-foreground text-sm block">{t('licoes.completas')}</span>
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
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-foreground mb-3">{t('licoes.categorias')}</h3>
          <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible scrollbar-thin">
            {categoryOptions.map(({ key, label }, index) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                aria-pressed={selectedCategory === key}
                className={`min-w-[150px] md:min-w-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-foreground mb-3">{t('licoes.nivel')}</h3>
          <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible scrollbar-thin">
            {levelOptions.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSelectedLevel(key)}
                aria-pressed={selectedLevel === key}
                className={`min-w-[140px] md:min-w-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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
            const isFavorite = favoriteLessons.includes(lesson.id);
            const isCompleted = lesson.completed;

            return (
              <div
                key={lesson.id}
                className={`bg-card border border-border rounded-xl p-5 hover:shadow-lg transition-all cursor-pointer group active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  isCompleted ? 'ring-2 ring-green-500/50' : ''
                }`}
                onClick={() => setSelectedLesson(lessonsData.find(l => l.id === lesson.id) || null)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedLesson(lessonsData.find(l => l.id === lesson.id) || null);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-labelledby={`lesson-card-${lesson.id}-title`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(lesson.levelKey)}`}>
                      {lesson.levelLabel}
                    </span>
                    {isCompleted && (
                      <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLessonFavorite(lesson.id);
                      }}
                      className={`p-2 rounded-lg transition-colors ${
                        isFavorite
                          ? 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950/20'
                          : 'text-muted-foreground hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-950/20'
                      }`}
                      aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                    >
                      <Star className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} aria-hidden="true" />
                    </button>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 id={`lesson-card-${lesson.id}-title`} className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lesson.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
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
                {t('licoes.nenhumaLicao')}
              </p>
            </div>
         )}

        {/* Bannière Continue Aprendendo */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 rounded-xl p-4 md:p-8 text-center">
           <div className="flex items-center justify-center gap-2 mb-3">
             <span className="text-3xl">🎯</span>
             <h2 className="text-2xl font-bold text-white">{t('licoes.continueAprendendo')}</h2>
           </div>
           <p className="text-white/90 text-lg">
             {t('licoes.cadaLicao')}
           </p>
         </div>
      </div>

      {/* Modal de détail de leçon amélioré */}
     {selectedLesson && (
       <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
         <div className="bg-background rounded-xl max-w-4xl md:max-w-3xl w-full max-h-[90vh] overflow-y-auto" role="dialog" aria-labelledby="lesson-modal-title" aria-modal="true">
           <div className="p-6">
             <div className="flex items-start justify-between mb-6">
               <div className="flex-1">
                 <div className="flex items-center gap-3 mb-3">
                   <BookOpen className="w-8 h-8 text-primary" aria-hidden="true" />
                   <div>
                     <h2 id="lesson-modal-title" className="text-2xl font-bold text-foreground">
                       {selectedLesson.title[language] || selectedLesson.title.pt}
                     </h2>
                     <p className="text-sm text-muted-foreground">
                       {selectedLesson.title.pt !== (selectedLesson.title[language] || selectedLesson.title.pt) &&
                         `[translate:] ${selectedLesson.title.pt}`
                       }
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
                   aria-label={t('iu.fechar')}
                 >
                   <X className="w-5 h-5" aria-hidden="true" />
                 </button>
               </div>
             </div>

              <div className="space-y-6">
                {/* Contenu */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">{t('licoes.conteudo')}</h3>
                  <div className="prose prose-sm max-w-none text-foreground">
                    {selectedLesson.content.pt.split('\n').map((paragraph: string, index: number) => (
                      <p key={index} className="mb-3">{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Exemples côte à côte */}
                {selectedLesson.examples && selectedLesson.examples.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">{t('licoes.exemplos')}</h3>
                    <div className="space-y-3">
                      {selectedLesson.examples.map((example: {pt: string, cv: string}, index: number) => (
                        <div key={index} className="bg-muted/30 p-4 rounded-xl border border-border">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                                  🇵🇹 Português
                                </span>
                              </div>
                              <p className="text-foreground font-medium leading-relaxed">{example.pt}</p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">
                                  🇨🇻 Kriolu
                                </span>
                              </div>
                              <p className="text-foreground font-medium leading-relaxed">{example.cv}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Conseils pratiques */}
                {selectedLesson.practicalTips && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">{t('licoes.dicasPraticas')}</h3>
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-foreground">{selectedLesson.practicalTips.pt}</p>
                      <p className="text-muted-foreground mt-2">{selectedLesson.practicalTips.cv}</p>
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
