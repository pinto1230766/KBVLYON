import React, { useState, useEffect } from 'react';
import { GrammarExercise as GrammarExerciseType } from '../data/lessonsData';

interface GrammarExerciseProps {
  exercise: GrammarExerciseType;
  onComplete: (score: number) => void;
  language: 'pt' | 'cv' | 'fr' | 'en';
  onNext: () => void;
  onBack: () => void;
}

const GrammarExercise: React.FC<GrammarExerciseProps> = ({ 
  exercise, 
  onComplete,
  language = 'pt',
  onNext,
  onBack
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [scores, setScores] = useState<boolean[]>([]);

  const currentQuestion = exercise.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === exercise.questions.length - 1;
  const displayLanguage = language === 'fr' || language === 'en' ? 'pt' : language as 'pt' | 'cv';

  const handleSubmit = () => {
    if (!userAnswer.trim()) return;
    
    const correctAnswer = currentQuestion.answer[displayLanguage];
    const isAnswerCorrect = userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
    
    setIsSubmitted(true);
    setIsCorrect(isAnswerCorrect);
    
    // Mettre à jour les scores
    const newScores = [...scores, isAnswerCorrect];
    setScores(newScores);
    
    // Calculer le score global (pourcentage de bonnes réponses)
    const newScore = Math.round((newScores.filter(Boolean).length / newScores.length) * 100);
    setScore(newScore);
  };
  
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Si c'est la dernière question, on termine l'exercice
      onComplete(score);
      setShowScore(true);
    } else {
      // Sinon, on passe à la question suivante
      setCurrentQuestionIndex(prev => prev + 1);
      setUserAnswer('');
      setIsSubmitted(false);
      setIsCorrect(null);
    }
  };
  
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setIsSubmitted(false);
    setIsCorrect(null);
    setScore(0);
    setScores([]);
    setShowScore(false);
  };
  
  // Réinitialiser l'état quand l'exercice change
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setIsSubmitted(false);
    setIsCorrect(null);
    setScore(0);
    setScores([]);
    setShowScore(false);
  }, [exercise.id]);
  
  if (showScore) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          {exercise.title[displayLanguage] || exercise.title.pt}
        </h2>
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded">
          <p className="text-lg font-semibold">Exercice terminé !</p>
          <p>Votre score: {score}%</p>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleRestart}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Recommencer
          </button>
          <button
            onClick={onNext}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Exercice suivant
          </button>
        </div>
      </div>
    );
  }
  
  if (!currentQuestion) {
    return <div>Chargement de la question...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        {exercise.title[displayLanguage] || exercise.title.pt}
      </h2>
      
      <div className="mb-6">
        <p className="text-gray-700 mb-2">
          {currentQuestion.question[displayLanguage] || currentQuestion.question.pt}
        </p>
        
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={isSubmitted}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          placeholder="Votre réponse..."
        />
        
        {isSubmitted && (
          <div className={`mt-2 p-2 rounded ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {isCorrect 
              ? 'Correct !' 
              : `Incorrect. La bonne réponse est : ${currentQuestion.answer[displayLanguage]}`
            }
          </div>
        )}
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          disabled={currentQuestionIndex === 0}
        >
          Précédent
        </button>
        
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={!userAnswer.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            Valider
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            {isLastQuestion ? 'Terminer' : 'Question suivante'}
          </button>
        )}
      </div>
    </div>
  );
};

export default GrammarExercise;
