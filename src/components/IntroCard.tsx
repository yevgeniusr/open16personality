import React from 'react';
import { Brain, Download, Clock, Award, Sparkles, Keyboard } from 'lucide-react';

interface IntroCardProps {
  onStart: () => void;
}

const IntroCard: React.FC<IntroCardProps> = ({ onStart }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="bg-indigo-100 p-4 rounded-full">
            <Brain size={48} className="text-indigo-600" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Open<span className="text-indigo-600">16</span></h1>
        <p className="text-lg text-gray-600">Discover your authentic personality type</p>
      </div>
      
      <div className="mb-8">
        <p className="text-gray-700 mb-4 text-center">
          Open16 is a free, open-source personality assessment based on the 16 personalities framework.
          Gain valuable insights about your preferences, strengths, and potential growth areas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-indigo-50 p-4 rounded-md flex items-start">
            <Clock className="text-indigo-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-semibold text-indigo-800">10 Minutes</h3>
              <p className="text-sm text-indigo-700">Quick assessment with 32 carefully crafted questions</p>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-md flex items-start">
            <Award className="text-indigo-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-semibold text-indigo-800">Scientifically Based</h3>
              <p className="text-sm text-indigo-700">Grounded in established personality theory</p>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-md flex items-start">
            <Download className="text-indigo-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-semibold text-indigo-800">Free PDF Report</h3>
              <p className="text-sm text-indigo-700">Download and save your detailed results</p>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-md flex items-start">
            <Keyboard className="text-indigo-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-semibold text-indigo-800">Keyboard Shortcuts</h3>
              <p className="text-sm text-indigo-700">Answer quickly using number keys and enter</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg mb-8">
        <h2 className="font-bold text-xl text-indigo-800 mb-3">How it works</h2>
        <ol className="space-y-2 text-indigo-700">
          <li className="flex items-start">
            <span className="bg-indigo-200 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">1</span>
            <span>Answer 32 questions honestly based on your natural preferences</span>
          </li>
          <li className="flex items-start">
            <span className="bg-indigo-200 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">2</span>
            <span>Receive your four-letter personality type (like INTJ or ESFP)</span>
          </li>
          <li className="flex items-start">
            <span className="bg-indigo-200 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">3</span>
            <span>Explore detailed insights about your personality traits</span>
          </li>
          <li className="flex items-start">
            <span className="bg-indigo-200 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">4</span>
            <span>Download your results as a PDF to reference anytime</span>
          </li>
        </ol>
      </div>
      
      <div className="text-center">
        <button
          onClick={onStart}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-10 rounded-md text-lg font-medium transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Start Your Free Assessment
        </button>
        <p className="mt-4 text-sm text-gray-500">No registration required. Your data stays private.</p>
      </div>
    </div>
  );
};

export default IntroCard;
