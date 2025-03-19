import { Answer, Question, TraitScore } from '../types';
import { personalityTypes } from '../data/personalityTypes';

export const calculateResults = (answers: Answer[], questions: Question[]): { personalityType: string, scores: TraitScore } => {
  // Initialize scores
  const scores: TraitScore = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };
  
  // Calculate raw scores
  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) return;
    
    const { trait, direction } = question;
    const value = direction === 'positive' ? answer.value : (6 - answer.value); // Reverse score for negative questions
    
    scores[trait] += value;
  });
  
  // Determine personality type
  const personalityType = [
    scores.E > scores.I ? 'E' : 'I',
    scores.S > scores.N ? 'S' : 'N',
    scores.T > scores.F ? 'T' : 'F',
    scores.J > scores.P ? 'J' : 'P'
  ].join('');
  
  return {
    personalityType,
    scores
  };
};

export const getPersonalityResult = (personalityType: string) => {
  return personalityTypes[personalityType] || {
    type: "Unknown Type",
    description: "We couldn't determine your personality type accurately. Please try taking the test again.",
    strengths: [],
    weaknesses: [],
    careerSuggestions: []
  };
};
