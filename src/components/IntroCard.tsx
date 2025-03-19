import React from 'react';
import { Brain } from 'lucide-react';

interface IntroCardProps {
  onStart: () => void;
}

const IntroCard: React.FC<IntroCardProps> = ({ onStart }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-blue-100 p-4 rounded-full">
          <Brain size={48} className="text-blue-600" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Personality Type Test</h1>
      
      <p className="text-gray-600 mb-6">
        Discover your personality type with our comprehensive assessment based on the 16 personality types framework. 
        This test consists of 32 questions and takes about 10 minutes to complete.
      </p>
      
      <div className="bg-blue-50 p-4 rounded-md mb-6">
        <h2 className="font-semibold text-blue-800 mb-2">How it works:</h2>
        <ul className="text-left text-blue-700 space-y-2">
          <li>• Answer each question honestly based on how you typically think, feel, and behave</li>
          <li>• There are no right or wrong answers</li>
          <li>• At the end, you'll receive your personality type and detailed insights</li>
          <li>• You can download your results as a PDF</li>
        </ul>
      </div>
      
      <button
        onClick={onStart}
        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors"
      >
        Start the Test
      </button>
    </div>
  );
};

export default IntroCard;
