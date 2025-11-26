export interface AIResponse {
  text: string;
  error?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface GeneratedQuiz {
  topic: string;
  questions: QuizQuestion[];
}
