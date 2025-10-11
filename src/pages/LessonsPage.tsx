import { useMemo, useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { lessonsData, type Lesson as LessonData } from '../data/lessonsData_fixed';
import { useLanguage } from '../hooks/useLanguage';

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
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [selectedLevel, setSelectedLevel] = useState<LevelFilter>('all');
  const [selectedLesson, setSelectedLesson] = useState<LessonData | null>(null);

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
        title: lesson.title.pt,
        description: lesson.description.pt,
        levelKey,
        levelLabel: levelLabels[levelKey],
        categoryKey,
        categoryLabel: categoryLabels[categoryKey],
        completed: false
      } as LessonSummary;
    })
  ), [categoryLabels, levelLabels]);

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
          
          {/* Statistiques */}
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-6 sm:gap-10 mb-8">
            <div className="text-center">
              <span className="text-4xl font-bold text-primary">{lessons.length}</span>
              <span className="text-muted-foreground ml-2">{t('licoes.licoes')}</span>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold text-green-500">{completedCount}</span>
              <span className="text-muted-foreground ml-2">{t('licoes.completas')}</span>
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

        {/* Liste des leçons */}
        <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 xl:gap-6">
          {filteredLessons.map((lesson) => (
            <div
              key={lesson.id}
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
              className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all cursor-pointer group active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(lesson.levelKey)}`}>
                      {lesson.levelLabel}
                    </span>
                  </div>
                  <h3 id={`lesson-card-${lesson.id}-title`} className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lesson.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" aria-hidden="true" />
              </div>
            </div>
          ))}
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

      {/* Modal de détail de leçon */}
      {selectedLesson && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg max-w-4xl md:max-w-3xl w-full max-h-[90vh] overflow-y-auto" role="dialog" aria-labelledby="lesson-modal-title" aria-modal="true">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 id="lesson-modal-title" className="text-2xl font-bold text-foreground mb-2">
                    {selectedLesson.title.pt}
                  </h2>
                  <div className="flex items-center gap-2">
                    {(() => {
                      const levelKey = normalizeLevel(selectedLesson.level);
                      return (
                        <span className={`px-2 py-1 rounded text-sm font-medium ${getLevelColor(levelKey)}`}>
                          {levelLabels[levelKey]}
                        </span>
                      );
                    })()}
                    <span className="text-sm text-muted-foreground">
                      {categoryLabels[normalizeCategory(selectedLesson.category)]}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLesson(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label={t('iu.fechar')}
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
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

                {/* Exemples */}
                {selectedLesson.examples && selectedLesson.examples.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">{t('licoes.exemplos')}</h3>
                    <div className="space-y-2">
                      {selectedLesson.examples.map((example: {pt: string, cv: string}, index: number) => (
                        <div key={index} className="bg-muted/50 p-3 rounded-lg">
                          <p className="font-medium text-foreground">{example.pt}</p>
                          <p className="text-muted-foreground">{example.cv}</p>
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
