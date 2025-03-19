import React, { useState, useEffect } from 'react';
import { questions } from './data/questions';
import { Answer } from './types';
import IntroCard from './components/IntroCard';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import ResultCard from './components/ResultCard';
import { calculateResults, getPersonalityResult } from './utils/calculateResults';
import { ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState<'intro' | 'questions' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [personalityType, setPersonalityType] = useState('');
  const [scores, setScores] = useState({
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  });
  const [showTip, setShowTip] = useState(false);

  // Show tip on first question
  useEffect(() => {
    if (currentStep === 'questions' && currentQuestionIndex === 0) {
      setShowTip(true);
      const timer = setTimeout(() => {
        setShowTip(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, currentQuestionIndex]);

  const handleStartTest = () => {
    setCurrentStep('questions');
  };

  const handleAnswer = (value: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Update or add answer
    const existingAnswerIndex = answers.findIndex(a => a.questionId === currentQuestion.id);
    
    if (existingAnswerIndex >= 0) {
      const updatedAnswers = [...answers];
      updatedAnswers[existingAnswerIndex] = { 
        ...updatedAnswers[existingAnswerIndex], 
        value 
      };
      setAnswers(updatedAnswers);
    } else {
      setAnswers([...answers, { questionId: currentQuestion.id, value }]);
    }
  };

  const getCurrentAnswer = (): number | null => {
    const currentQuestion = questions[currentQuestionIndex];
    const answer = answers.find(a => a.questionId === currentQuestion.id);
    return answer ? answer.value : null;
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate results
      const results = calculateResults(answers, questions);
      setPersonalityType(results.personalityType);
      setScores(results.scores);
      setCurrentStep('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep('intro');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setPersonalityType('');
  };

  const isNextDisabled = getCurrentAnswer() === null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {currentStep === 'intro' && (
          <IntroCard onStart={handleStartTest} />
        )}

        {currentStep === 'questions' && (
          <div className="w-full">
            <div className="flex justify-center mb-4">
              <h1 className="text-2xl font-bold text-indigo-800">Open<span className="text-indigo-600">16</span> Assessment</h1>
            </div>
            
            <ProgressBar 
              currentQuestion={currentQuestionIndex + 1} 
              totalQuestions={questions.length} 
            />
            
            {showTip && (
              <div className="mb-4 bg-indigo-50 border border-indigo-100 p-4 rounded-lg flex items-start">
                <HelpCircle size={20} className="text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-indigo-800 font-medium">Quick Tip</p>
                  <p className="text-indigo-700 text-sm">You can use keyboard shortcuts to answer questions faster. Press 1-5 to select an option, and Enter to move to the next question.</p>
                </div>
                <button 
                  onClick={() => setShowTip(false)}
                  className="ml-auto text-indigo-400 hover:text-indigo-600"
                >
                  ✕
                </button>
              </div>
            )}
            
            <QuestionCard 
              question={questions[currentQuestionIndex]} 
              onAnswer={handleAnswer}
              currentAnswer={getCurrentAnswer()}
              onSubmit={!isNextDisabled ? handleNext : undefined}
            />
            
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`flex items-center gap-1 py-2 px-4 rounded-md transition-colors ${
                  currentQuestionIndex === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                <ArrowLeft size={16} />
                Previous
              </button>
              
              <button
                onClick={handleNext}
                disabled={isNextDisabled}
                className={`flex items-center gap-1 py-2 px-4 rounded-md transition-colors ${
                  isNextDisabled
                    ? 'bg-indigo-400 text-white cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                {currentQuestionIndex < questions.length - 1 ? 'Next' : 'See Results'}
                {currentQuestionIndex < questions.length - 1 && <ArrowRight size={16} />}
              </button>
            </div>
            
            <div className="text-center mt-6 text-gray-500">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
          </div>
        )}

        {currentStep === 'results' && (
          <ResultCard 
            personalityType={personalityType}
            result={getPersonalityResult(personalityType)}
            scores={scores}
            onRestart={handleRestart}
          />
        )}
      </div>
      
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Open16 • Free and Open Personality Assessment</p>
      </footer>
    </div>
  );
}

export default App;
