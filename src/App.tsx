import React, { useState } from 'react';
import { questions } from './data/questions';
import { Answer } from './types';
import IntroCard from './components/IntroCard';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import ResultCard from './components/ResultCard';
import { calculateResults, getPersonalityResult } from './utils/calculateResults';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {currentStep === 'intro' && (
          <IntroCard onStart={handleStartTest} />
        )}

        {currentStep === 'questions' && (
          <div className="w-full">
            <ProgressBar 
              currentQuestion={currentQuestionIndex + 1} 
              totalQuestions={questions.length} 
            />
            
            <QuestionCard 
              question={questions[currentQuestionIndex]} 
              onAnswer={handleAnswer}
              currentAnswer={getCurrentAnswer()}
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
                    ? 'bg-blue-400 text-white cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
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
    </div>
  );
}

export default App;
