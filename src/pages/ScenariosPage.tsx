import { useState } from 'react';
import { MessageCircle, Users, BookOpen, Lightbulb, Play, Volume2, Sparkles, X, Loader2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { ministryScenarios } from '@/data/ministryScenarios';
import type { MinistryScenario, DialogueLine } from '@/types/dialogue';
import { GeminiService } from '../services/ai/gemini';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';

export default function ScenariosPage() {
  const { language } = useLanguage();
  const { speak } = useTextToSpeech();
  const [selectedScenario, setSelectedScenario] = useState<MinistryScenario | null>(null);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  
  // États pour l'explicateur de contexte
  const [explainingLine, setExplainingLine] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isExplaining, setIsExplaining] = useState(false);



  const types = [
    { value: 'all', label: language === 'pt' ? 'Todos' : 'Tudu' },
    { value: 'first_visit', label: language === 'pt' ? 'Primeira Visita' : 'Primeiru Vizita' },
    { value: 'return_visit', label: language === 'pt' ? 'Visita de Retorno' : 'Vizita di Retornu' },
    { value: 'bible_study', label: language === 'pt' ? 'Estudo Bíblico' : 'Studu Bíbliku' },
    { value: 'informal_witnessing', label: language === 'pt' ? 'Testemunho Informal' : 'Testemunhu Informal' }
  ];

  const difficulties = [
    { value: 'all', label: language === 'pt' ? 'Todos' : 'Tudu' },
    { value: 'easy', label: language === 'pt' ? 'Fácil' : 'Fasil' },
    { value: 'medium', label: language === 'pt' ? 'Médio' : 'Médiu' },
    { value: 'hard', label: language === 'pt' ? 'Difícil' : 'Difísil' }
  ];

  const filteredScenarios = ministryScenarios.filter(scenario => {
    const typeMatch = selectedType === 'all' || scenario.type === selectedType;
    const difficultyMatch = selectedDifficulty === 'all' || scenario.difficulty === selectedDifficulty;
    return typeMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    };
    return colors[difficulty as keyof typeof colors] || '';
  };

  const getSpeakerIcon = (speaker: DialogueLine['speaker']) => {
    switch (speaker) {
      case 'preacher': return '🚪';
      case 'householder': return '🏠';
      case 'teacher': return '👨‍🏫';
      case 'student': return '📚';
      default: return '💬';
    }
  };

  const getSpeakerLabel = (speaker: DialogueLine['speaker']) => {
    const labels = {
      preacher: language === 'pt' ? 'Pregador' : 'Pregador',
      householder: language === 'pt' ? 'Morador' : 'Morador',
      teacher: language === 'pt' ? 'Professor' : 'Profesor',
      student: language === 'pt' ? 'Estudante' : 'Studanti'
    };
    return labels[speaker] || speaker;
  };

  const handleExplain = async (text: string) => {
    setExplainingLine(text);
    setIsExplaining(true);
    setExplanation(null);
    
    const result = await GeminiService.explainText(text);
    setExplanation(result);
    setIsExplaining(false);
  };

  const closeExplanation = () => {
    setExplainingLine(null);
    setExplanation(null);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {language === 'pt' ? 'Cenários de Pregação' : 'Senáriu di Pregason'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'pt' 
              ? 'Pratique situações reais de pregação com diálogos interativos'
              : 'Pratika situasons real di pregason ku diálogu interativu'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          {/* Type Filter */}
          <div className="flex-1 min-w-[200px]">
            <label htmlFor="scenario-type-filter" className="block text-sm font-medium text-foreground mb-2">
              {language === 'pt' ? 'Tipo' : 'Tipu'}
            </label>
            <select
              id="scenario-type-filter"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {types.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div className="flex-1 min-w-[200px]">
            <label htmlFor="scenario-difficulty-filter" className="block text-sm font-medium text-foreground mb-2">
              {language === 'pt' ? 'Dificuldade' : 'Difikuldadi'}
            </label>
            <select
              id="scenario-difficulty-filter"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {difficulties.map(diff => (
                <option key={diff.value} value={diff.value}>{diff.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredScenarios.map((scenario) => (
            <div
              key={scenario.id}
              onClick={() => setSelectedScenario(scenario)}
              className={`bg-card border-2 rounded-lg p-6 cursor-pointer transition-all hover:shadow-lg ${
                selectedScenario?.id === scenario.id ? 'border-primary' : 'border-border'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-foreground flex-1">
                  {language === 'pt' ? scenario.title.pt : scenario.title.kea}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(scenario.difficulty)}`}>
                  {difficulties.find(d => d.value === scenario.difficulty)?.label}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {language === 'pt' ? scenario.description.pt : scenario.description.kea}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{scenario.dialogue.length}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{scenario.vocabulary.length}</span>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedScenario(scenario);
                }}
                className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Play className="w-4 h-4" />
                {language === 'pt' ? 'Praticar' : 'Pratika'}
              </button>
            </div>
          ))}
        </div>

        {/* Selected Scenario Details */}
        {selectedScenario && (
          <div className="bg-card border border-border rounded-lg p-6 space-y-6">
            {/* Title */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {language === 'pt' ? selectedScenario.title.pt : selectedScenario.title.kea}
              </h2>
              <p className="text-muted-foreground">
                {language === 'pt' ? selectedScenario.description.pt : selectedScenario.description.kea}
              </p>
            </div>

            {/* Dialogue */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                {language === 'pt' ? 'Diálogo' : 'Diálogu'}
              </h3>
              <div className="space-y-4">
                {selectedScenario.dialogue.map((line, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 p-4 rounded-lg ${
                      line.speaker === 'preacher' || line.speaker === 'teacher'
                        ? 'bg-blue-50 dark:bg-blue-950'
                        : 'bg-muted'
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-xl">
                        {getSpeakerIcon(line.speaker)}
                      </div>
                      <p className="text-xs text-center mt-1 text-muted-foreground">
                        {getSpeakerLabel(line.speaker)}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground mb-1">
                        {language === 'pt' ? line.text.pt : line.text.kea}
                      </p>
                      {line.notes && (
                        <p className="text-sm text-muted-foreground italic">
                          💡 {language === 'pt' ? line.notes.pt : line.notes.kea}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => speak(line.text.kea)}
                        className="flex-shrink-0 p-2 hover:bg-background rounded-lg transition-colors"
                        aria-label={language === 'pt' ? 'Ouvir áudio' : 'Obi áudiu'}
                        title={language === 'pt' ? 'Ouvir pronúncia' : 'Obi pronúnsia'}
                      >
                        <Volume2 className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" aria-hidden="true" />
                      </button>
                      <button
                        onClick={() => handleExplain(line.text.kea)}
                        className="flex-shrink-0 p-2 hover:bg-background rounded-lg transition-colors text-amber-500"
                        aria-label={language === 'pt' ? 'Explicar com IA' : 'Splika ku IA'}
                        title={language === 'pt' ? 'Explicar com IA' : 'Splika ku IA'}
                      >
                        <Sparkles className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vocabulary */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {language === 'pt' ? 'Vocabulário Chave' : 'Vokabuláriu Xavi'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedScenario.vocabulary.map((vocab, index) => (
                  <div key={index} className="bg-muted rounded-lg p-3">
                    <p className="font-semibold text-foreground">{vocab.word}</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'pt' ? vocab.translation.pt : vocab.translation.kea}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                {language === 'pt' ? 'Dicas Práticas' : 'Dika Prátiku'}
              </h3>
              <ul className="space-y-2">
                {selectedScenario.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground">
                      {language === 'pt' ? tip.pt : tip.kea}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Explanation Modal */}
      {explainingLine && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-background rounded-lg shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto flex flex-col">
            <div className="p-4 border-b border-border flex justify-between items-center sticky top-0 bg-background z-10">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                {language === 'pt' ? 'Análise IA' : 'Análizi IA'}
              </h3>
              <button onClick={closeExplanation} className="p-1 hover:bg-muted rounded-full" aria-label={language === 'pt' ? 'Fechar' : 'Fetxa'}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-4 p-3 bg-muted/50 rounded-lg border border-border">
                <p className="font-medium italic text-foreground">"{explainingLine}"</p>
              </div>

              {isExplaining ? (
                <div className="flex flex-col items-center justify-center py-8 gap-3">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                  <p className="text-sm text-muted-foreground">
                    {language === 'pt' ? 'Analisando gramática e contexto...' : 'Ta analiza gramátika i kontestu...'}
                  </p>
                </div>
              ) : (
                <div className="prose dark:prose-invert max-w-none text-sm">
                  {explanation ? (
                    <div className="whitespace-pre-wrap">{explanation}</div>
                  ) : (
                    <p className="text-destructive">Erro ao analisar o texto.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-border bg-muted/20">
              <button 
                onClick={closeExplanation}
                className="w-full py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                {language === 'pt' ? 'Fechar' : 'Fetxa'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
