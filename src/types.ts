export interface Student {
  id: string;
  name: string;
  grade: string;
  score: number;
  studyTime: number; // in hours
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  contact: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface AIResponse {
  summary: string;
  keyPoints: string[];
  quiz: QuizQuestion[];
}

export interface ScheduleItem {
  id: string;
  time: string;
  subject: string;
  teacher: string;
  room: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'Academic' | 'Social' | 'Sports' | 'Holiday';
}
