import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (value: number) => void;
  currentAnswer: number | null;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, currentAnswer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">{question.text}</h2>
      
      <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2 justify-between">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => onAnswer(value)}
            className={`py-2 px-4 rounded-md transition-all duration-200 ${
              currentAnswer === value
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            {value === 1 && 'Strongly Disagree'}
            {value === 2 && 'Disagree'}
            {value === 3 && 'Neutral'}
            {value === 4 && 'Agree'}
            {value === 5 && 'Strongly Agree'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
