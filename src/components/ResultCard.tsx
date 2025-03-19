import React, { useRef } from 'react';
import { PersonalityResult, TraitScore } from '../types';
import { ArrowDownToLine } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ResultCardProps {
  personalityType: string;
  result: PersonalityResult;
  scores: TraitScore;
  onRestart: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ personalityType, result, scores, onRestart }) => {
  const resultRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!resultRef.current) return;
    
    try {
      const canvas = await html2canvas(resultRef.current, {
        scale: 2,
        logging: false,
        useCORS: true
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${personalityType}-personality-result.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const renderTraitBar = (trait1: keyof TraitScore, trait2: keyof TraitScore, label1: string, label2: string) => {
    const total = scores[trait1] + scores[trait2];
    const percentage = total > 0 ? (scores[trait1] / total) * 100 : 50;
    
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1 text-sm font-medium">
          <span>{label1}</span>
          <span>{label2}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-l-full" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-500">
          <span>{Math.round(percentage)}%</span>
          <span>{Math.round(100 - percentage)}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div 
        ref={resultRef}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">{result.type}</h1>
          <p className="text-gray-600">{result.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Personality Traits</h2>
            {renderTraitBar('E', 'I', 'Extraverted (E)', 'Introverted (I)')}
            {renderTraitBar('S', 'N', 'Sensing (S)', 'Intuitive (N)')}
            {renderTraitBar('T', 'F', 'Thinking (T)', 'Feeling (F)')}
            {renderTraitBar('J', 'P', 'Judging (J)', 'Perceiving (P)')}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Strengths</h2>
            <ul className="list-disc pl-5 mb-6">
              {result.strengths.map((strength, index) => (
                <li key={index} className="mb-1 text-gray-700">{strength}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-4 text-gray-800">Weaknesses</h2>
            <ul className="list-disc pl-5">
              {result.weaknesses.map((weakness, index) => (
                <li key={index} className="mb-1 text-gray-700">{weakness}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Career Suggestions</h2>
          <div className="flex flex-wrap gap-2">
            {result.careerSuggestions.map((career, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {career}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={downloadPDF}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors"
        >
          <ArrowDownToLine size={20} />
          Download PDF
        </button>
        <button
          onClick={onRestart}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md transition-colors"
        >
          Take Test Again
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
