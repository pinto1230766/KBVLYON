import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { DictationExercise } from '../types/exerciseTypes';
import { Language } from '../types/exerciseTypes';

interface DictationExerciseProps {
  exercise: DictationExercise;
  onComplete: (score: number) => void;
  language: Language;
  onNext?: () => void;
  onBack?: () => void;
  onError: (error: string) => void; // Rendu obligatoire
}

const DictationExercise: React.FC<DictationExerciseProps> = ({ 
  exercise, 
  onComplete, 
  onNext, 
  onBack,
  onError 
}) => {
  const { language } = useLanguage();
  const [userText, setUserText] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const displayLanguage = language === 'pt' || language === 'cv' ? language : 'pt';

  // Validation des props
  if (!exercise || !exercise.text) {
    const errorMessage = 'Exercise data is incomplete';
    onError?.(errorMessage);
    return <div className="text-red-500">{errorMessage}</div>;
  }

  const handleSubmit = () => {
    const trimmedText = userText.trim();
    
    if (!trimmedText) {
      onError('Please enter your answer');
      return;
    }

    if (trimmedText.length < 5) {
      onError('Answer is too short');
      return;
    }

    const correctText = exercise.text[displayLanguage]?.toLowerCase() || '';
    const userTextLower = trimmedText.toLowerCase();
    
    const similarity = calculateSimilarity(userTextLower, correctText);
    const calculatedScore = Math.round(similarity * 100);
    
    setScore(calculatedScore);
    setIsSubmitted(true);
    setIsCorrect(calculatedScore >= 80);
    onComplete(calculatedScore);
  };



  const calculateSimilarity = (str1: string, str2: string): number => {
    const set1 = new Set(str1.split(/\s+/));
    const set2 = new Set(str2.split(/\s+/));
    
    const intersection = new Set([...set1].filter(word => set2.has(word)));
    const union = new Set([...set1, ...set2]);
    
    return union.size > 0 ? intersection.size / union.size : 0;
  };

  const handleNext = () => {
    if (onNext) onNext();
  };

  const handleBack = () => {
    if (onBack) onBack();
  };

  return (
    <div className="dictation-container p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{exercise.title[displayLanguage]}</h2>
      <p className="text-gray-700 mb-6">{exercise.instructions[displayLanguage] || exercise.instructions.pt}</p>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <p className="text-lg font-medium mb-4">
          {exercise.text[displayLanguage]}
        </p>
        
        <div className="mb-4">
          <label htmlFor="dictation-input" className="block text-sm font-medium text-gray-700 mb-2">
            {displayLanguage === 'pt' ? 'Sua resposta:' : 'Seu resposta:'}
          </label>
        
          <div className="dictation-input-container">
            <label htmlFor="dictation-input" className="dictation-input-label">
              {language === 'pt' ? 'Sua resposta:' : 'Seu resposta:'}
            </label>
            <textarea
              id="dictation-input"
              className="dictation-input w-full p-2 border rounded"
              rows={5}
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
              disabled={isSubmitted}
              placeholder={language === 'pt' 
                ? 'Digite o que você ouviu...' 
                : 'Skrebe kuzê ki bu oi...'}
            />
          </div>
        </div>

        {isSubmitted && (
          <div className={`dictation-feedback p-4 mb-4 rounded ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
            <div className="flex items-center">
              {isCorrect ? (
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              ) : (
                <X className="h-5 w-5 text-red-500 mr-2" />
              )}
              <span className="font-medium">
                {isCorrect 
                  ? language === 'pt' 
                    ? 'Bom trabalho!'  
                    : 'Trabadja bon!'
                  : language === 'pt'
                    ? 'Tente novamente!'
                    : 'Tenta otru bes!'}
              </span>
            </div>
            <p className="mt-2">
              {language === 'pt' ? 'Sua pontuação:' : 'Puntuason di bo:'} {score}%
            </p>
            
            {!isCorrect && (
              <button
                onClick={() => setShowAnswer(!showAnswer)}
                className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {showAnswer 
                  ? language === 'pt' 
                    ? 'Ocultar resposta correta' 
                    : 'Fika resposta koretu'
                  : language === 'pt'
                    ? 'Mostrar resposta correta'
                    : 'Mostra resposta koretu'}
              </button>
            )}
            
            {showAnswer && (
              <div className="mt-2 p-3 bg-white rounded border border-gray-200">
                <p className="font-medium">
                  {language === 'pt' ? 'Resposta correta:' : 'Resposta koretu:'}
                </p>
                <p className="whitespace-pre-wrap">{exercise.text.cv}</p>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-gray-800"
          >
            {language === 'pt' ? 'Voltar' : 'Bai'}
          </button>
          
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={!userText.trim()}
              className={`px-4 py-2 rounded text-white ${
                !userText.trim() 
                  ? 'bg-blue-300 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {language === 'pt' ? 'Verificar' : 'Verifika'}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white"
            >
              {language === 'pt' ? 'Próximo' : 'Proksimu'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DictationExercise;
