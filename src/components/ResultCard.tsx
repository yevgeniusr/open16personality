import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Download, RefreshCw } from 'lucide-react';

interface ResultCardProps {
  personalityType: string;
  result: {
    title: string;
    description: string;
    strengths: string[];
    weaknesses: string[];
  };
  scores: {
    E: number;
    I: number;
    S: number;
    N: number;
    T: number;
    F: number;
    J: number;
    P: number;
  };
  onRestart: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ personalityType, result, scores, onRestart }) => {
  const resultRef = useRef<HTMLDivElement>(null);

  const calculatePercentage = (score1: number, score2: number) => {
    const total = Math.abs(score1) + Math.abs(score2);
    if (total === 0) return 50;
    return Math.round((Math.abs(score1) / total) * 100);
  };

  const downloadPDF = async () => {
    if (!resultRef.current) return;
    
    const canvas = await html2canvas(resultRef.current, {
      scale: 2,
      logging: false,
      useCORS: true,
      backgroundColor: '#ffffff'
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`Open16-${personalityType}-Personality.pdf`);
  };

  const getDimensionLabel = (dimension: string) => {
    switch(dimension) {
      case 'E': return 'Extraverted';
      case 'I': return 'Introverted';
      case 'S': return 'Sensing';
      case 'N': return 'Intuitive';
      case 'T': return 'Thinking';
      case 'F': return 'Feeling';
      case 'J': return 'Judging';
      case 'P': return 'Perceiving';
      default: return '';
    }
  };

  return (
    <div className="w-full">
      <div ref={resultRef} className="bg-white p-8 rounded-lg shadow-lg mb-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-800 mb-2">Open<span className="text-indigo-600">16</span> Results</h1>
          <div className="inline-block bg-indigo-100 px-4 py-2 rounded-full">
            <h2 className="text-2xl font-bold text-indigo-700">{personalityType} - {result.title}</h2>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Personality Profile</h3>
          <p className="text-gray-700 mb-6">{result.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2 flex items-center">
                <span className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-2 text-indigo-800">+</span>
                Strengths
              </h4>
              <ul className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2 flex items-center">
                <span className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-2 text-indigo-800">-</span>
                Potential Blind Spots
              </h4>
              <ul className="space-y-2">
                {result.weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-gray-700">{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Preference Breakdown</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="font-medium text-indigo-800">{getDimensionLabel('E')} ({calculatePercentage(scores.E, scores.I)}%)</span>
                <span className="font-medium text-indigo-800">{getDimensionLabel('I')} ({calculatePercentage(scores.I, scores.E)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${scores.E >= scores.I ? 'bg-indigo-500 rounded-r-none' : 'bg-indigo-500 rounded-l-none ml-auto'}`}
                  style={{ width: `${scores.E >= scores.I ? calculatePercentage(scores.E, scores.I) : calculatePercentage(scores.I, scores.E)}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="font-medium text-indigo-800">{getDimensionLabel('S')} ({calculatePercentage(scores.S, scores.N)}%)</span>
                <span className="font-medium text-indigo-800">{getDimensionLabel('N')} ({calculatePercentage(scores.N, scores.S)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${scores.S >= scores.N ? 'bg-indigo-500 rounded-r-none' : 'bg-indigo-500 rounded-l-none ml-auto'}`}
                  style={{ width: `${scores.S >= scores.N ? calculatePercentage(scores.S, scores.N) : calculatePercentage(scores.N, scores.S)}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="font-medium text-indigo-800">{getDimensionLabel('T')} ({calculatePercentage(scores.T, scores.F)}%)</span>
                <span className="font-medium text-indigo-800">{getDimensionLabel('F')} ({calculatePercentage(scores.F, scores.T)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${scores.T >= scores.F ? 'bg-indigo-500 rounded-r-none' : 'bg-indigo-500 rounded-l-none ml-auto'}`}
                  style={{ width: `${scores.T >= scores.F ? calculatePercentage(scores.T, scores.F) : calculatePercentage(scores.F, scores.T)}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="font-medium text-indigo-800">{getDimensionLabel('J')} ({calculatePercentage(scores.J, scores.P)}%)</span>
                <span className="font-medium text-indigo-800">{getDimensionLabel('P')} ({calculatePercentage(scores.P, scores.J)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${scores.J >= scores.P ? 'bg-indigo-500 rounded-r-none' : 'bg-indigo-500 rounded-l-none ml-auto'}`}
                  style={{ width: `${scores.J >= scores.P ? calculatePercentage(scores.J, scores.P) : calculatePercentage(scores.P, scores.J)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Open16 Personality Assessment</p>
          <p>Results generated on {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={downloadPDF}
          className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md font-medium transition-colors"
        >
          <Download size={18} />
          Download Results as PDF
        </button>
        
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md font-medium transition-colors"
        >
          <RefreshCw size={18} />
          Take Test Again
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
