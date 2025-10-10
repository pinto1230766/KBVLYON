import { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { lessonsData, type Lesson as LessonData } from '../data/lessonsData';

interface LessonSummary {
  id: number;
  title: string;
  description: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  category: 'Morfologia' | 'Sintaxe' | 'Verbos' | 'Fonologia' | 'Vocabulário' | 'Prática';
  completed: boolean;
}

// Convert lessonsData to the format expected by the component
const lessons: LessonSummary[] = lessonsData.map(lesson => ({
  id: lesson.id,
  title: lesson.title.pt,
  description: lesson.description.pt,
  level: lesson.level as 'Iniciante' | 'Intermediário' | 'Avançado',
  category: lesson.category as 'Morfologia' | 'Sintaxe' | 'Verbos' | 'Fonologia' | 'Vocabulário' | 'Prática',
  completed: false, // TODO: Add completion tracking
}));

const LessonsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [selectedLevel, setSelectedLevel] = useState<string>('Todos os Níveis');
  const [selectedLesson, setSelectedLesson] = useState<LessonData | null>(null);

  const categories = ['Todas', 'Morfologia', 'Sintaxe', 'Verbos', 'Fonologia', 'Vocabulário', 'Prática'];
  const levels = ['Todos os Níveis', 'Iniciante', 'Intermediário', 'Avançado'];

  const filteredLessons = lessons.filter(lesson => {
    const categoryMatch = selectedCategory === 'Todas' || lesson.category === selectedCategory;
    const levelMatch = selectedLevel === 'Todos os Níveis' || lesson.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const completedCount = lessons.filter(l => l.completed).length;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Iniciante':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediário':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Avançado':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getLevelButtonColor = (level: string) => {
    switch (level) {
      case 'Iniciante':
        return 'bg-green-500 text-white hover:bg-green-600';
      case 'Intermediário':
        return 'bg-orange-500 text-white hover:bg-orange-600';
      case 'Avançado':
        return 'bg-red-500 text-white hover:bg-red-600';
      default:
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Lições de Crioulo para Pregação
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            Aprenda crioulo cabo-verdiano para pregar de porta em porta
          </p>
          
          {/* Statistiques */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <span className="text-4xl font-bold text-primary">{lessons.length}</span>
              <span className="text-muted-foreground ml-2">Lições</span>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold text-green-500">{completedCount}</span>
              <span className="text-muted-foreground ml-2">Completas</span>
            </div>
          </div>
        </div>

        {/* Filtres Categorias */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-foreground mb-3">Categorias</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category === 'Todas' ? '📚 Todas' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Filtres Nível */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-foreground mb-3">Nível</h3>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedLevel === level
                    ? level === 'Todos os Níveis'
                      ? 'bg-primary text-primary-foreground'
                      : getLevelButtonColor(level)
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des leçons */}
        <div className="space-y-3">
          {filteredLessons.map((lesson) => (
            <div
              key={lesson.id}
              onClick={() => setSelectedLesson(lessonsData.find(l => l.id === lesson.id) || null)}
              className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(lesson.level)}`}>
                      {lesson.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lesson.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
              </div>
            </div>
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nenhuma lição encontrada com os filtros selecionados.
            </p>
          </div>
        )}

        {/* Bannière Continue Aprendendo */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-3xl">🎯</span>
            <h2 className="text-2xl font-bold text-white">Continue Aprendendo!</h2>
          </div>
          <p className="text-white/90 text-lg">
            Cada lição o aproxima de pregar eficazmente em crioulo cabo-verdiano
          </p>
        </div>
      </div>

      {/* Modal de détail de leçon */}
      {selectedLesson && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {selectedLesson.title.pt}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-sm font-medium ${getLevelColor(selectedLesson.level)}`}>
                      {selectedLesson.level}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {selectedLesson.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLesson(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Contenu */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Conteúdo</h3>
                  <div className="prose prose-sm max-w-none text-foreground">
                    {selectedLesson.content.pt.split('\n').map((paragraph: string, index: number) => (
                      <p key={index} className="mb-3">{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Exemples */}
                {selectedLesson.examples && selectedLesson.examples.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Exemplos</h3>
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
                    <h3 className="text-lg font-semibold mb-3">💡 Dicas Práticas</h3>
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
