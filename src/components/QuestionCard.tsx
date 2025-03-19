import React, { useEffect } from 'react';
import { Question } from '../types';
import { Keyboard } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  onAnswer: (value: number) => void;
  currentAnswer: number | null;
  onSubmit?: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, currentAnswer, onSubmit }) => {
  const options = [
    { value: -2, label: 'Strongly Disagree', key: '1' },
    { value: -1, label: 'Disagree', key: '2' },
    { value: 0, label: 'Neutral', key: '3' },
    { value: 1, label: 'Agree', key: '4' },
    { value: 2, label: 'Strongly Agree', key: '5' }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Number keys 1-5 for selecting options
      if (['1', '2', '3', '4', '5'].includes(e.key)) {
        const index = parseInt(e.key) - 1;
        if (index >= 0 && index < options.length) {
          onAnswer(options[index].value);
        }
      }
      
      // Enter key to submit if an answer is selected
      if (e.key === 'Enter' && currentAnswer !== null && onSubmit) {
        onSubmit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentAnswer, onAnswer, onSubmit, options]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">{question.text}</h2>
      
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            className={`w-full text-left p-3 rounded-md transition-colors ${
              currentAnswer === option.value
                ? 'bg-indigo-100 border-2 border-indigo-500 text-indigo-800'
                : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
            }`}
          >
            <div className="flex items-center">
              <div className={`w-5 h-5 rounded-full mr-3 flex-shrink-0 ${
                currentAnswer === option.value
                  ? 'bg-indigo-500'
                  : 'border-2 border-gray-300'
              }`}>
                {currentAnswer === option.value && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
              <span>{option.label}</span>
              <span className="ml-auto bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded">
                {option.key}
              </span>
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-4 flex items-center text-sm text-gray-500 bg-gray-50 p-3 rounded-md">
        <Keyboard size={16} className="mr-2" />
        <span>Tip: Use keys <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs mx-1">1</kbd>-<kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs mx-1">5</kbd> to select an option, then press <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs mx-1">Enter</kbd> to continue.</span>
      </div>
    </div>
  );
};

export default QuestionCard;
