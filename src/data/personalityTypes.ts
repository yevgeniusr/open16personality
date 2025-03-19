import { PersonalityResult } from '../types';

export const personalityTypes: Record<string, PersonalityResult> = {
  "ISTJ": {
    type: "ISTJ - The Inspector",
    description: "Practical and fact-minded individuals, whose reliability cannot be doubted. They are detail-oriented, responsible, and organized, valuing traditions and loyalty.",
    strengths: ["Honest and direct", "Strong-willed and dutiful", "Very responsible", "Calm and practical", "Create and enforce order", "Jacks-of-all-trades"],
    weaknesses: ["Stubborn", "Insensitive", "Always by the book", "Judgmental", "Often unreasonably blame themselves"],
    careerSuggestions: ["Accountant", "Auditor", "Financial Analyst", "Military Officer", "Judge", "Dentist", "System Administrator"]
  },
  "ISFJ": {
    type: "ISFJ - The Protector",
    description: "Very dedicated and warm protectors, always ready to defend their loved ones. They are caring, social, and organized, with a strong sense of responsibility.",
    strengths: ["Supportive", "Reliable and patient", "Observant", "Enthusiastic", "Loyal and hard-working", "Good practical skills"],
    weaknesses: ["Shy and withdrawn", "Take things too personally", "Repress their feelings", "Overload themselves", "Reluctant to change"],
    careerSuggestions: ["Nurse", "Elementary School Teacher", "Social Worker", "HR Manager", "Interior Designer", "Librarian", "Customer Service Representative"]
  },
  "INFJ": {
    type: "INFJ - The Counselor",
    description: "Quiet mystics with a strong sense of personal values. They are creative, insightful, and principled, focusing on the greater good.",
    strengths: ["Creative", "Insightful", "Principled", "Passionate", "Altruistic", "Deep"],
    weaknesses: ["Sensitive to criticism", "Perfectionist", "Avoid confrontation", "Can burn out easily", "Private and complex"],
    careerSuggestions: ["Counselor", "Psychologist", "Writer", "Professor", "HR Developer", "Social Worker", "Organizational Consultant"]
  },
  "INTJ": {
    type: "INTJ - The Mastermind",
    description: "Imaginative and strategic thinkers, with a plan for everything. They are independent, analytical, and determined in pursuing their vision.",
    strengths: ["Quick and strategic mind", "High self-confidence", "Independent", "Hard-working", "Open-minded", "Jack-of-all-trades"],
    weaknesses: ["Arrogant", "Dismissive of emotions", "Overly critical", "Combative", "Socially clueless"],
    careerSuggestions: ["Scientist", "Engineer", "Professor", "Investment Banker", "Software Developer", "Corporate Strategist", "Judge"]
  },
  "ISTP": {
    type: "ISTP - The Craftsman",
    description: "Bold and practical experimenters, masters of all kinds of tools. They are logical, adaptable, and observant, enjoying hands-on problem-solving.",
    strengths: ["Optimistic and energetic", "Creative and practical", "Spontaneous and rational", "Know how to prioritize", "Great in a crisis", "Relaxed"],
    weaknesses: ["Stubborn", "Insensitive", "Private and reserved", "Easily bored", "Dislike commitment", "Risk-prone"],
    careerSuggestions: ["Mechanic", "Engineer", "Pilot", "Economist", "Computer Programmer", "Forensic Scientist", "Carpenter"]
  },
  "ISFP": {
    type: "ISFP - The Composer",
    description: "Flexible and charming artists, always ready to explore and experience something new. They are sensitive, creative, and caring, living in the present moment.",
    strengths: ["Charming", "Sensitive to others", "Imaginative", "Passionate", "Curious", "Artistic"],
    weaknesses: ["Fiercely independent", "Unpredictable", "Easily stressed", "Overly competitive", "Fluctuating self-esteem"],
    careerSuggestions: ["Artist", "Designer", "Musician", "Veterinarian", "Chef", "Fashion Designer", "Physical Therapist"]
  },
  "INFP": {
    type: "INFP - The Healer",
    description: "Poetic, kind and altruistic people, always eager to help a good cause. They are idealistic, empathetic, and authentic, driven by their personal values.",
    strengths: ["Idealistic", "Seek and value harmony", "Open-minded and flexible", "Very creative", "Passionate and energetic", "Dedicated and hard-working"],
    weaknesses: ["Too idealistic", "Too altruistic", "Impractical", "Dislike dealing with data", "Take things personally", "Difficult to get to know"],
    careerSuggestions: ["Writer", "Counselor", "Social Worker", "Professor", "Librarian", "Psychologist", "HR Manager"]
  },
  "INTP": {
    type: "INTP - The Architect",
    description: "Innovative inventors with an unquenchable thirst for knowledge. They are logical, original, and curious, always seeking to understand complex systems.",
    strengths: ["Great analysts and abstract thinkers", "Imaginative and original", "Open-minded", "Enthusiastic", "Objective", "Honest and straightforward"],
    weaknesses: ["Very private and withdrawn", "Insensitive", "Absent-minded", "Condescending", "Loathe rules and guidelines", "Second-guess themselves"],
    careerSuggestions: ["Computer Programmer", "Mathematician", "University Professor", "Economist", "Architect", "Research Scientist", "Systems Analyst"]
  },
  "ESTP": {
    type: "ESTP - The Dynamo",
    description: "Smart, energetic and very perceptive people, who truly enjoy living on the edge. They are action-oriented, adaptable, and resourceful, thriving in dynamic environments.",
    strengths: ["Bold", "Rational and practical", "Original", "Perceptive", "Direct", "Sociable"],
    weaknesses: ["Insensitive", "Impatient", "Risk-prone", "Unstructured", "May miss the bigger picture", "Defiant"],
    careerSuggestions: ["Entrepreneur", "Sales Representative", "Marketing Executive", "Detective", "Paramedic", "Firefighter", "Sports Coach"]
  },
  "ESFP": {
    type: "ESFP - The Performer",
    description: "Spontaneous, energetic and enthusiastic people – life is never boring around them. They are outgoing, fun-loving, and social, living in the moment and enjoying sensory experiences.",
    strengths: ["Bold", "Original", "Aesthetics and showmanship", "Practical", "Observant", "Excellent people skills"],
    weaknesses: ["Sensitive", "Conflict-averse", "Easily bored", "Poor long-term planners", "Unfocused", "Dislike theoretical discussions"],
    careerSuggestions: ["Event Planner", "Public Relations Specialist", "Actor", "Flight Attendant", "Tour Guide", "Recreation Director", "Retail Sales"]
  },
  "ENFP": {
    type: "ENFP - The Champion",
    description: "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile. They are warm, imaginative, and perceptive, valuing authentic connections with others.",
    strengths: ["Curious", "Observant", "Energetic and enthusiastic", "Excellent communicators", "Know how to relax", "Very popular and friendly"],
    weaknesses: ["Poor practical skills", "Find it difficult to focus", "Overthink things", "Get stressed easily", "Highly emotional", "Independent to a fault"],
    careerSuggestions: ["Journalist", "Marketing Consultant", "Actor", "Counselor", "Public Relations Specialist", "Art Director", "Human Resources Manager"]
  },
  "ENTP": {
    type: "ENTP - The Visionary",
    description: "Smart and curious thinkers who cannot resist an intellectual challenge. They are innovative, strategic, and resourceful, enjoying complex problem-solving and debates.",
    strengths: ["Knowledgeable", "Quick thinkers", "Original", "Excellent brainstormers", "Charismatic", "Energetic"],
    weaknesses: ["Very argumentative", "Insensitive", "Intolerant", "Can be condescending", "Dislike practical matters", "Struggle with routine"],
    careerSuggestions: ["Entrepreneur", "Lawyer", "Engineer", "Creative Director", "Psychologist", "Systems Analyst", "Management Consultant"]
  },
  "ESTJ": {
    type: "ESTJ - The Supervisor",
    description: "Excellent administrators, unsurpassed at managing things – or people. They are organized, practical, and logical, valuing tradition and security.",
    strengths: ["Dedicated", "Strong-willed", "Direct and honest", "Loyal, patient and reliable", "Excellent organizers", "Good at creating order"],
    weaknesses: ["Inflexible and stubborn", "Uncomfortable with unconventional situations", "Judgmental", "Too focused on social status", "Difficult to relax", "Difficulty expressing emotion"],
    careerSuggestions: ["Business Administrator", "School Principal", "Judge", "Financial Officer", "Military Officer", "Pharmacist", "Project Manager"]
  },
  "ESFJ": {
    type: "ESFJ - The Provider",
    description: "Extraordinarily caring, social and popular people, always eager to help. They are warm, organized, and dependable, focusing on harmony and cooperation.",
    strengths: ["Strong practical skills", "Strong sense of duty", "Very loyal", "Sensitive and warm", "Good at connecting with others", "Organized"],
    weaknesses: ["Worried about their social status", "Inflexible", "Reluctant to innovate or improvise", "Vulnerable to criticism", "Often too needy", "Too selfless"],
    careerSuggestions: ["Nurse", "Teacher", "Social Worker", "Healthcare Administrator", "Sales Representative", "Public Relations Specialist", "Office Manager"]
  },
  "ENFJ": {
    type: "ENFJ - The Teacher",
    description: "Charismatic and inspiring leaders, able to mesmerize their listeners. They are empathetic, organized, and persuasive, focusing on helping others develop and grow.",
    strengths: ["Tolerant", "Reliable", "Charismatic", "Altruistic", "Natural leaders", "Empathetic"],
    weaknesses: ["Overly idealistic", "Too selfless", "Too sensitive", "Fluctuating self-esteem", "Struggle with making tough decisions", "Indecisive"],
    careerSuggestions: ["Teacher", "Corporate Coach", "HR Director", "Marketing Director", "Psychologist", "Sales Manager", "Public Relations Specialist"]
  },
  "ENTJ": {
    type: "ENTJ - The Commander",
    description: "Bold, imaginative and strong-willed leaders, always finding a way – or making one. They are strategic, logical, and efficient, excelling at long-term planning and organization.",
    strengths: ["Efficient", "Energetic", "Self-confident", "Strong-willed", "Strategic thinkers", "Charismatic and inspiring"],
    weaknesses: ["Stubborn and dominant", "Intolerant", "Impatient", "Arrogant", "Cold and ruthless", "Poor handling of emotions"],
    careerSuggestions: ["Executive", "Lawyer", "Entrepreneur", "Management Consultant", "University Professor", "Software Developer", "Business Administrator"]
  }
};
