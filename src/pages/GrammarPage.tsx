import { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import LessonModal from '../components/LessonModal';
import { grammarLessonContent } from '../data/grammarLessonContent';
import { useLanguage } from '../hooks/useLanguage';

interface GrammarLesson {
  id: number;
  title: string;
  description: string;
  category: 'Fonologia' | 'Morfologia' | 'Sintaxe' | 'Verbos' | 'Pronomes' | 'Geral';
  icon: string;
}

const grammarLessons: GrammarLesson[] = [
  {
    id: 1,
    title: 'Introdução ao Crioulo Cabo-verdiano',
    description: 'O crioulo cabo-verdiano (Kabuverdianu) é uma língua crioula de base portuguesa falada nas ilhas de Cabo Verde. É a língua materna da maioria dos cabo-verdianos e tem várias variantes regionais, sendo as principais: Sotavento (Santiago, Fogo, Brava, Maio) e Barlavento (São...',
    category: 'Geral',
    icon: '🎨',
  },
  {
    id: 2,
    title: 'Sistema de Pronomes Pessoais',
    description: 'O sistema pronominal do crioulo cabo-verdiano é mais simples que o português: Pronomes Sujeito: - N / Mi (eu) - forma curta e longa - Bu / Bo (tu/você) - El / E (ele/ela) - sem distinção de gênero - Nos / Nu (nós) - Nhos / Nhôs (vocês/vós) - Es / Ês (eles/elas) Pronomes Objeto: - M /...',
    category: 'Pronomes',
    icon: '👤',
  },
  {
    id: 3,
    title: 'Marcadores de Tempo, Modo e Aspecto (TMA)',
    description: 'O crioulo cabo-verdiano não conjuga verbos. Em vez disso, usa marcadores TMA antes do verbo: 1. TA - Presente habitual/progressivo - Ações habituais: N ta trabadja (Eu trabalho) - Ações em progresso: N ta trabadja (Estou trabalhando) 2. DJA/JA - Perfectivo (ação completad...',
    category: 'Verbos',
    icon: '⚡',
  },
  {
    id: 4,
    title: 'Verbos Copulativos: É e STA',
    description: 'O crioulo tem dois verbos copulativos principais: 1. É - Ser (estados permanentes, identidade) - Não varia com pessoa ou tempo - Usado para: identidade, profissão, características permanentes, origem - Exemplos: * N é kabuverdianu (Sou cabo-verdiano) * Bu é profesor (És...',
    category: 'Verbos',
    icon: '⚡',
  },
  {
    id: 5,
    title: 'Ordem das Palavras e Estrutura da Frase',
    description: 'A ordem básica das palavras em crioulo é SVO (Sujeito-Verbo-Objeto), similar ao português: 1. Frases Declarativas: - Sujeito + (TMA) + Verbo + Objeto - N ta kume pan (Eu como pão) - Maria dja konpra livru (Maria comprou livro) 2. Frases Interrogativas: - Mantém ordem SVO, mud...',
    category: 'Sintaxe',
    icon: '🔧',
  },
  {
    id: 6,
    title: 'Possessivos e Demonstrativos',
    description: 'Possessivos: Em crioulo, os possessivos vêm DEPOIS do substantivo: - Kaza nha (minha casa) - Livru bu (teu livro) - Fidju se (filho dele/dela) - Karu nos (nosso carro) - Ami nhos (amigo de vocês) - Kaza es (casa deles) Demonstrativos: - Es/Kel (este/esse/aquele) - não varia - Es kaza...',
    category: 'Pronomes',
    icon: '👤',
  },
  {
    id: 7,
    title: 'Formação do Plural',
    description: 'O crioulo geralmente NÃO marca plural no substantivo: 1. Plural indicado por contexto: - Un mudjer (uma mulher) / Dus mudjer (duas mulheres) - Un omi (um homem) / Muitu omi (muitos homens) 2. Marcadores de plural: - Números: un, dos, tres, muitu - Quantificadores:...',
    category: 'Morfologia',
    icon: '📐',
  },
];

const GrammarPage = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(t('gramatica.todas'));
  const [selectedLesson, setSelectedLesson] = useState<GrammarLesson | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLesson = (lesson: GrammarLesson) => {
    setSelectedLesson(lesson);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLesson(null);
  };

  const categories = [
    { key: 'Todas', label: t('gramatica.todas') },
    { key: 'Fonologia', label: t('gramatica.fonologia') },
    { key: 'Morfologia', label: t('gramatica.morfologia') },
    { key: 'Sintaxe', label: t('gramatica.sintaxe') },
    { key: 'Verbos', label: t('gramatica.verbos') },
    { key: 'Pronomes', label: t('gramatica.pronomes') },
    { key: 'Geral', label: t('gramatica.geral') }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Fonologia':
        return '🔊';
      case 'Morfologia':
        return '📐';
      case 'Sintaxe':
        return '🔧';
      case 'Verbos':
        return '⚡';
      case 'Pronomes':
        return '👤';
      case 'Geral':
        return '🎨';
      default:
        return '📚';
    }
  };

  const getCategoryCount = (category: string) => {
    if (category === 'Todas') return grammarLessons.length;
    return grammarLessons.filter(lesson => lesson.category === category).length;
  };

  const filteredLessons = grammarLessons.filter(lesson => {
    const categoryMatch = selectedCategory === 'Todas' || lesson.category === selectedCategory;
    const searchMatch = searchTerm === '' || 
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Titre */}
        <h1 className="text-4xl font-bold text-center text-foreground mb-8">{t('gramatica.titulo')}</h1>

        {/* Barre de recherche */}
        <div className="mb-6">
          <input
            type="text"
            placeholder={t('gramatica.pesquisarLicoes')}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Onglets avec compteurs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => {
            const count = getCategoryCount(category.key);
            const isActive = selectedCategory === category.key;

            return (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <span>{getCategoryIcon(category.key)}</span>
                <span>{category.label}</span>
                <span className={`ml-1 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Liste des leçons */}
        <div className="space-y-3">
          {filteredLessons.map((lesson) => (
            <div
              key={lesson.id}
              onClick={() => openLesson(lesson)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLesson(lesson);
                }
              }}
              tabIndex={0}
              role="button"
              aria-labelledby={`grammar-lesson-${lesson.id}-title`}
              className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary text-sm font-medium">{t('gramatica.licacao')} {lesson.id}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span>{lesson.icon}</span>
                      <span>{lesson.category}</span>
                    </span>
                  </div>
                  <h3 id={`grammar-lesson-${lesson.id}-title`} className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {lesson.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                  <button
                    className="p-1 text-muted-foreground hover:text-yellow-400 transition-colors"
                    aria-label={t('gramatica.adicionarAosFavoritos')}
                  >
                    <Star className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {t('gramatica.nenhumaLicaoEncontrada')}
            </p>
          </div>
        )}
      </div>

      {/* Modal de leçon */}
      {selectedLesson && (
        <LessonModal
          isOpen={isModalOpen}
          onClose={closeModal}
          lessonNumber={selectedLesson.id}
          totalLessons={grammarLessons.length}
          category={selectedLesson.category}
          categoryIcon={selectedLesson.icon}
          pages={grammarLessonContent[selectedLesson.id] || []}
        />
      )}
    </div>
  );
};

export default GrammarPage;
