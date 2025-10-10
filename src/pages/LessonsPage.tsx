import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  description: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  category: 'Morfologia' | 'Sintaxe' | 'Verbos' | 'Fonologia' | 'Vocabulário' | 'Prática';
  completed: boolean;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Formação de Palavras - Verbos',
    description: 'Aprenda como os verbos são formados em crioulo cabo-verdiano e suas terminações',
    level: 'Iniciante',
    category: 'Verbos',
    completed: false,
  },
  {
    id: 2,
    title: 'Derivação Lexical - Criando Novas Palavras',
    description: 'Como criar substantivos a partir de verbos e adjetivos',
    level: 'Intermediário',
    category: 'Morfologia',
    completed: false,
  },
  {
    id: 3,
    title: 'Pluralização - Singular e Plural',
    description: 'Como formar o plural em crioulo cabo-verdiano',
    level: 'Iniciante',
    category: 'Morfologia',
    completed: false,
  },
  {
    id: 4,
    title: 'Ordem das Palavras - Estrutura SVO',
    description: 'A ordem básica das frases em crioulo: Sujeito-Verbo-Objeto',
    level: 'Iniciante',
    category: 'Sintaxe',
    completed: false,
  },
  {
    id: 5,
    title: 'Negação - Como Negar em Crioulo',
    description: 'Uso da partícula "ka" para formar frases negativas',
    level: 'Iniciante',
    category: 'Sintaxe',
    completed: false,
  },
  {
    id: 6,
    title: 'Formação de Perguntas',
    description: 'Como fazer perguntas eficazes durante a pregação',
    level: 'Intermediário',
    category: 'Sintaxe',
    completed: false,
  },
  {
    id: 7,
    title: 'Sistema TAM - Tempo, Aspecto e Modo',
    description: 'Como expressar diferentes tempos verbais usando partículas',
    level: 'Iniciante',
    category: 'Verbos',
    completed: false,
  },
  {
    id: 8,
    title: 'Verbos Essenciais para Pregação',
    description: 'Os verbos mais importantes para usar no ministério de porta em porta',
    level: 'Intermediário',
    category: 'Verbos',
    completed: false,
  },
  {
    id: 9,
    title: 'Verbos Modais e Auxiliares',
    description: 'Verbos que expressam possibilidade, necessidade e desejo',
    level: 'Avançado',
    category: 'Verbos',
    completed: false,
  },
  {
    id: 10,
    title: 'Pronúncia Básica - Sons do Crioulo',
    description: 'Como pronunciar corretamente os sons característicos do crioulo',
    level: 'Iniciante',
    category: 'Fonologia',
    completed: false,
  },
  {
    id: 11,
    title: 'Acentuação e Ritmo',
    description: 'Onde colocar o acento tônico nas palavras',
    level: 'Intermediário',
    category: 'Fonologia',
    completed: false,
  },
  {
    id: 12,
    title: 'Vocabulário Religioso Essencial',
    description: 'Palavras-chave para falar sobre temas bíblicos',
    level: 'Iniciante',
    category: 'Vocabulário',
    completed: false,
  },
  {
    id: 13,
    title: 'Frases Prontas para Pregação',
    description: 'Expressões completas para usar na pregação de porta em porta',
    level: 'Intermediário',
    category: 'Prática',
    completed: false,
  },
  {
    id: 14,
    title: 'Vocabulário Temático - Sofrimento e Esperança',
    description: 'Palavras para falar sobre problemas atuais e a esperança bíblica',
    level: 'Avançado',
    category: 'Vocabulário',
    completed: false,
  },
  {
    id: 15,
    title: 'Diálogo 1 - Primeira Abordagem',
    description: 'Como iniciar uma conversa na porta',
    level: 'Iniciante',
    category: 'Prática',
    completed: false,
  },
  {
    id: 16,
    title: 'Diálogo 2 - Apresentando um Texto Bíblico',
    description: 'Como ler e explicar um versículo da Bíblia',
    level: 'Intermediário',
    category: 'Prática',
    completed: false,
  },
  {
    id: 17,
    title: 'Diálogo 3 - Oferecendo um Estudo Bíblico',
    description: 'Como propor um estudo bíblico regular',
    level: 'Avançado',
    category: 'Prática',
    completed: false,
  },
  {
    id: 18,
    title: 'Lidando com Objeções Comuns',
    description: 'Como responder a objeções frequentes',
    level: 'Intermediário',
    category: 'Prática',
    completed: false,
  },
];

const LessonsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [selectedLevel, setSelectedLevel] = useState<string>('Todos os Níveis');

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
    </div>
  );
};

export default LessonsPage;
