import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { quizQuestions, matchingExercises, roleplays, QuizQuestion, MatchingExercise, Roleplay } from '../data/lessonsData';
import { CheckCircle, XCircle, RefreshCw, MessageCircle, HelpCircle, BookOpen } from 'lucide-react';

const LessonsExercisesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'quiz' | 'matching' | 'roleplay'>('quiz');
  
  // Quiz state
  const [currentQuiz, setCurrentQuiz] = useState<QuizQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [totalQuizQuestions, setTotalQuizQuestions] = useState(0);
  
  // Matching exercise state
  const [currentMatching, setCurrentMatching] = useState<MatchingExercise | null>(null);
  const [matchingPairs, setMatchingPairs] = useState<Record<number, number | null>>({});
  const [selectedPair, setSelectedPair] = useState<number | null>(null);
  const [completedPairs, setCompletedPairs] = useState<number[]>([]);
  const [isMatchingComplete, setIsMatchingComplete] = useState(false);
  
  // Roleplay state
  const [currentRoleplay, setCurrentRoleplay] = useState<Roleplay | null>(null);
  const [currentDialogIndex, setCurrentDialogIndex] = useState(0);
  
  // Start quiz
  const startQuiz = () => {
    setCurrentQuiz(quizQuestions[0]);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
    setTotalQuizQuestions(0);
  };
  
  // Submit quiz answer
  const submitAnswer = () => {
    if (!selectedOption || !currentQuiz) return;
    
    setIsAnswerSubmitted(true);
    setTotalQuizQuestions(totalQuizQuestions + 1);
    
    if (selectedOption === currentQuiz.correctAnswer) {
      setQuizScore(quizScore + 1);
    }
  };
  
  // Next quiz question
  const nextQuestion = () => {
    if (!currentQuiz) return;
    
    const nextIndex = quizQuestions.findIndex(q => q.id === currentQuiz.id) + 1;
    
    if (nextIndex < quizQuestions.length) {
      setCurrentQuiz(quizQuestions[nextIndex]);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Quiz completed
      setCurrentQuiz(null);
    }
  };
  
  // Start matching exercise
  const startMatching = (exercise: MatchingExercise) => {
    setCurrentMatching(exercise);
    setMatchingPairs({});
    setSelectedPair(null);
    setCompletedPairs([]);
    setIsMatchingComplete(false);
  };
  
  // Handle matching selection
  const handlePairSelection = (pairId: number, isLeftSide: boolean) => {
    if (completedPairs.includes(pairId)) return;
    
    if (selectedPair === null) {
      // First selection
      setSelectedPair(pairId);
    } else if (selectedPair !== pairId) {
      // Second selection - check if it's a match
      if (isLeftSide) {
        setMatchingPairs({ ...matchingPairs, [pairId]: selectedPair });
      } else {
        setMatchingPairs({ ...matchingPairs, [selectedPair]: pairId });
      }
      
      // Check if correct match
      if (selectedPair === pairId) {
        setCompletedPairs([...completedPairs, pairId]);
      }
      
      setSelectedPair(null);
    }
  };
  
  // Start roleplay
  const startRoleplay = (roleplay: Roleplay) => {
    setCurrentRoleplay(roleplay);
    setCurrentDialogIndex(0);
  };
  
  // Next dialog line
  const nextDialog = () => {
    if (!currentRoleplay) return;
    
    if (currentDialogIndex < currentRoleplay.conversation.length - 1) {
      setCurrentDialogIndex(currentDialogIndex + 1);
    } else {
      // Roleplay completed
      setCurrentRoleplay(null);
      setCurrentDialogIndex(0);
    }
  };
  
  return (
    <div className="page-transition py-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">{t('lessons.title')}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('lessons.subtitle')}
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'quiz'
                  ? 'bg-primary-light text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('quiz')}
            >
              <div className="flex items-center space-x-2">
                <HelpCircle size={20} />
                <span>{t('lessons.quizTitle')}</span>
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'matching'
                  ? 'bg-primary-light text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('matching')}
            >
              <div className="flex items-center space-x-2">
                <BookOpen size={20} />
                <span>{t('lessons.matchingTitle')}</span>
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'roleplay'
                  ? 'bg-primary-light text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('roleplay')}
            >
              <div className="flex items-center space-x-2">
                <MessageCircle size={20} />
                <span>{t('lessons.roleplayTitle')}</span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Quiz Tab Content */}
        {activeTab === 'quiz' && (
          <div className="max-w-3xl mx-auto">
            {!currentQuiz ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">{t('lessons.quizTitle')}</h2>
                <p className="text-gray-600 mb-6">
                  {language === 'pt' 
                    ? 'Teste seu conhecimento de cabo-verdiano com este quiz.' 
                    : 'Testa bu konhesimentu di kriolu ku es quiz.'}
                </p>
                
                {totalQuizQuestions > 0 && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-lg">
                      {t('lessons.score')}: {quizScore}/{totalQuizQuestions}
                    </p>
                  </div>
                )}
                
                <button 
                  className="btn btn-primary px-8 py-3"
                  onClick={startQuiz}
                >
                  {totalQuizQuestions > 0 
                    ? <><RefreshCw size={18} className="mr-2" /> {language === 'pt' ? 'Reiniciar Quiz' : 'Reinisia Quiz'}</>
                    : t('lessons.startExercise')}
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">
                      {t('lessons.quizTitle')}
                    </h2>
                    <p className="text-gray-500">
                      {language === 'pt' ? 'Pergunta' : 'Pergunta'} {currentQuiz.id}/{quizQuestions.length}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl mb-4">
                      {currentQuiz.question[language]}
                    </h3>
                    
                    <div className="space-y-3">
                      {currentQuiz.options.map((option) => (
                        <button
                          key={option.id}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${
                            selectedOption === option.id
                              ? isAnswerSubmitted
                                ? option.id === currentQuiz.correctAnswer
                                  ? 'bg-green-100 border-green-300'
                                  : 'bg-red-100 border-red-300'
                                : 'bg-primary-light/10 border-primary-light'
                              : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                          } ${isAnswerSubmitted ? 'pointer-events-none' : ''}`}
                          onClick={() => !isAnswerSubmitted && setSelectedOption(option.id)}
                          disabled={isAnswerSubmitted}
                        >
                          <div className="flex items-start">
                            <span className="mr-3 font-bold">{option.id.toUpperCase()}.</span>
                            <span>{option.text[language]}</span>
                            
                            {isAnswerSubmitted && option.id === currentQuiz.correctAnswer && (
                              <CheckCircle size={20} className="ml-auto text-green-500" />
                            )}
                            
                            {isAnswerSubmitted && selectedOption === option.id && option.id !== currentQuiz.correctAnswer && (
                              <XCircle size={20} className="ml-auto text-red-500" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {isAnswerSubmitted && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium text-gray-700 mb-2">
                        {selectedOption === currentQuiz.correctAnswer 
                          ? t('lessons.correct') 
                          : t('lessons.incorrect')}
                      </p>
                      <p className="text-gray-600">
                        {currentQuiz.explanation[language]}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    {!isAnswerSubmitted ? (
                      <button
                        className="btn btn-primary px-6 py-2 disabled:opacity-50"
                        onClick={submitAnswer}
                        disabled={!selectedOption}
                      >
                        {t('ui.submit')}
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary px-6 py-2"
                        onClick={nextQuestion}
                      >
                        {t('ui.next')}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Matching Exercise Tab Content */}
        {activeTab === 'matching' && (
          <div className="max-w-3xl mx-auto">
            {!currentMatching ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {matchingExercises.map((exercise) => (
                  <div 
                    key={exercise.id}
                    className="card cursor-pointer"
                    onClick={() => startMatching(exercise)}
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        {exercise.title[language]}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {language === 'pt' 
                          ? `Combine ${exercise.pairs.length} pares de palavras e frases.` 
                          : `Kombina ${exercise.pairs.length} par di palavras y frazi.`}
                      </p>
                      <button 
                        className="btn btn-primary"
                        onClick={() => startMatching(exercise)}
                      >
                        {t('lessons.startExercise')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    {currentMatching.title[language]}
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="space-y-3">
                      {currentMatching.pairs.map((pair) => (
                        <button
                          key={`left-${pair.id}`}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${
                            completedPairs.includes(pair.id)
                              ? 'bg-green-100 border-green-300'
                              : selectedPair === pair.id
                              ? 'bg-blue-100 border-blue-300'
                              : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                          } ${isMatchingComplete ? 'pointer-events-none' : ''}`}
                          onClick={() => !isMatchingComplete && handlePairSelection(pair.id, true)}
                          disabled={isMatchingComplete || completedPairs.includes(pair.id)}
                        >
                          {pair.leftSide.pt}
                        </button>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      {currentMatching.pairs
                        .slice()
                        .sort(() => Math.random() - 0.5)
                        .map((pair) => (
                          <button
                            key={`right-${pair.id}`}
                            className={`w-full text-left p-3 rounded-lg border transition-colors ${
                              completedPairs.includes(pair.id)
                                ? 'bg-green-100 border-green-300'
                                : matchingPairs[selectedPair || -1] === pair.id
                                ? 'bg-blue-100 border-blue-300'
                                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                            } ${isMatchingComplete ? 'pointer-events-none' : ''}`}
                            onClick={() => !isMatchingComplete && handlePairSelection(pair.id, false)}
                            disabled={isMatchingComplete || completedPairs.includes(pair.id)}
                          >
                            {pair.rightSide.cv}
                          </button>
                        ))}
                    </div>
                  </div>
                  
                  {completedPairs.length === currentMatching.pairs.length && (
                    <div className="mb-6 p-4 bg-green-50 rounded-lg text-center">
                      <p className="font-medium text-green-700 mb-2">
                        {language === 'pt' 
                          ? 'Parabéns! Você completou o exercício.' 
                          : 'Parabéns! Bu kompleta izersísiu.'}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <button
                      className="btn btn-outline px-6 py-2"
                      onClick={() => setCurrentMatching(null)}
                    >
                      {language === 'pt' ? 'Voltar' : 'Volta'}
                    </button>
                    
                    <button
                      className="btn btn-primary px-6 py-2"
                      onClick={() => {
                        setMatchingPairs({});
                        setSelectedPair(null);
                        setCompletedPairs([]);
                      }}
                    >
                      <RefreshCw size={18} className="mr-2" /> 
                      {language === 'pt' ? 'Reiniciar' : 'Reinisia'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Roleplay Tab Content */}
        {activeTab === 'roleplay' && (
          <div className="max-w-3xl mx-auto">
            {!currentRoleplay ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roleplays.map((roleplay) => (
                  <div 
                    key={roleplay.id}
                    className="card cursor-pointer"
                    onClick={() => startRoleplay(roleplay)}
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        {roleplay.title[language]}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {roleplay.scenario[language]}
                      </p>
                      <button 
                        className="btn btn-primary"
                        onClick={() => startRoleplay(roleplay)}
                      >
                        {t('lessons.startExercise')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {currentRoleplay.title[language]}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {currentRoleplay.scenario[language]}
                  </p>
                  
                  <div className="mb-6 space-y-4">
                    {currentRoleplay.conversation.slice(0, currentDialogIndex + 1).map((dialog, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg ${
                          dialog.speaker === 'publisher' 
                            ? 'bg-primary-light/10 ml-12' 
                            : 'bg-gray-100 mr-12'
                        }`}
                      >
                        <p className="text-sm font-medium mb-1 text-gray-500">
                          {dialog.speaker === 'publisher' 
                            ? (language === 'pt' ? 'Você (Publicador)' : 'Bo (Publikador)') 
                            : (language === 'pt' ? 'Morador' : 'Moradu')}
                        </p>
                        <p>{dialog.text[language]}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      className="btn btn-outline px-6 py-2"
                      onClick={() => setCurrentRoleplay(null)}
                    >
                      {language === 'pt' ? 'Voltar' : 'Volta'}
                    </button>
                    
                    {currentDialogIndex < currentRoleplay.conversation.length - 1 ? (
                      <button
                        className="btn btn-primary px-6 py-2"
                        onClick={nextDialog}
                      >
                        {t('ui.next')}
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary px-6 py-2"
                        onClick={() => setCurrentRoleplay(null)}
                      >
                        {language === 'pt' ? 'Concluir' : 'Konklui'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonsExercisesPage;