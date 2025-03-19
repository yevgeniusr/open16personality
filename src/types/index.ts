export interface Question {
  id: number;
  text: string;
  trait: TraitCategory;
  direction: 'positive' | 'negative';
}

export type TraitCategory = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface TraitScore {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

export interface PersonalityResult {
  type: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careerSuggestions: string[];
}

export interface Answer {
  questionId: number;
  value: number; // 1-5 scale
}
