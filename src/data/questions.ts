import { Question } from '../types';

export const questions: Question[] = [
  // E vs I questions
  { id: 1, text: "I enjoy being the center of attention at social gatherings.", trait: "E", direction: "positive" },
  { id: 2, text: "I prefer one-on-one conversations to group activities.", trait: "I", direction: "positive" },
  { id: 3, text: "I often take initiative in social situations.", trait: "E", direction: "positive" },
  { id: 4, text: "I need time alone to recharge after socializing.", trait: "I", direction: "positive" },
  { id: 5, text: "I tend to think out loud rather than reflect internally first.", trait: "E", direction: "positive" },
  { id: 6, text: "I prefer to think deeply before sharing my thoughts.", trait: "I", direction: "positive" },
  { id: 7, text: "Large social gatherings drain my energy.", trait: "I", direction: "positive" },
  { id: 8, text: "I get energized by being around other people.", trait: "E", direction: "positive" },
  
  // S vs N questions
  { id: 9, text: "I focus more on details than the big picture.", trait: "S", direction: "positive" },
  { id: 10, text: "I enjoy thinking about abstract concepts and theories.", trait: "N", direction: "positive" },
  { id: 11, text: "I trust facts and concrete information more than intuition.", trait: "S", direction: "positive" },
  { id: 12, text: "I often think about future possibilities rather than present realities.", trait: "N", direction: "positive" },
  { id: 13, text: "I prefer practical solutions over theoretical approaches.", trait: "S", direction: "positive" },
  { id: 14, text: "I enjoy exploring new ideas and concepts even if they seem impractical.", trait: "N", direction: "positive" },
  { id: 15, text: "I value tradition and established methods.", trait: "S", direction: "positive" },
  { id: 16, text: "I'm often described as imaginative or innovative.", trait: "N", direction: "positive" },
  
  // T vs F questions
  { id: 17, text: "I make decisions based on logical analysis rather than personal values.", trait: "T", direction: "positive" },
  { id: 18, text: "I consider how decisions will affect others' feelings.", trait: "F", direction: "positive" },
  { id: 19, text: "I value honesty over tactfulness in communication.", trait: "T", direction: "positive" },
  { id: 20, text: "I'm good at understanding others' emotions.", trait: "F", direction: "positive" },
  { id: 21, text: "I prefer to analyze problems objectively without personal bias.", trait: "T", direction: "positive" },
  { id: 22, text: "I often make decisions based on what feels right rather than what makes logical sense.", trait: "F", direction: "positive" },
  { id: 23, text: "I value justice and fairness over mercy and compassion.", trait: "T", direction: "positive" },
  { id: 24, text: "I'm sensitive to others' needs and feelings.", trait: "F", direction: "positive" },
  
  // J vs P questions
  { id: 25, text: "I prefer to have a detailed plan rather than be spontaneous.", trait: "J", direction: "positive" },
  { id: 26, text: "I enjoy keeping my options open and delaying final decisions.", trait: "P", direction: "positive" },
  { id: 27, text: "I like to have things decided and settled.", trait: "J", direction: "positive" },
  { id: 28, text: "I adapt easily to changing situations.", trait: "P", direction: "positive" },
  { id: 29, text: "I prefer structured environments with clear rules.", trait: "J", direction: "positive" },
  { id: 30, text: "I enjoy spontaneity and flexibility in my schedule.", trait: "P", direction: "positive" },
  { id: 31, text: "I like to complete one project before starting another.", trait: "J", direction: "positive" },
  { id: 32, text: "I often work in bursts of energy, with periods of slack in between.", trait: "P", direction: "positive" },
];
