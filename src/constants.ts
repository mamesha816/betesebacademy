import { Student, Teacher } from './types';

export const EXAMPLE_STUDENTS: Student[] = [
  { id: '1', name: 'Alex Rivera', grade: '12th', score: 92, studyTime: 45 },
  { id: '2', name: 'Sarah Chen', grade: '11th', score: 88, studyTime: 38 },
  { id: '3', name: 'Jordan Smith', grade: '12th', score: 95, studyTime: 52 },
  { id: '4', name: 'Maya Patel', grade: '10th', score: 84, studyTime: 30 },
  { id: '5', name: 'Leo Dubois', grade: '11th', score: 91, studyTime: 42 },
  { id: '6', name: 'Elena Rossi', grade: '12th', score: 89, studyTime: 40 },
  { id: '7', name: 'David Kim', grade: '11th', score: 97, studyTime: 60 },
  { id: '8', name: 'Sofia Garcia', grade: '10th', score: 82, studyTime: 28 },
  { id: '9', name: 'Noah Wilson', grade: '12th', score: 90, studyTime: 44 },
  { id: '10', name: 'Chloe Brown', grade: '11th', score: 86, studyTime: 35 },
];

export const EXAMPLE_TEACHERS: Teacher[] = [
  { id: '1', name: 'Dr. Aris Thorne', subject: 'Quantum Physics', contact: '+1 (555) 012-3456' },
  { id: '2', name: 'Prof. Lyra Vance', subject: 'Advanced Mathematics', contact: '+1 (555) 012-7890' },
  { id: '3', name: 'Mr. Silas Kael', subject: 'Artificial Intelligence', contact: '+1 (555) 012-1122' },
];

export const PERFORMANCE_DATA = [
  { name: 'Week 1', score: 75, avg: 70 },
  { name: 'Week 2', score: 82, avg: 72 },
  { name: 'Week 3', score: 80, avg: 75 },
  { name: 'Week 4', score: 92, avg: 78 },
  { name: 'Week 5', score: 88, avg: 80 },
  { name: 'Week 6', score: 95, avg: 82 },
];

export const WEEKLY_SCHEDULE = [
  { id: '1', time: '08:00 - 09:30', subject: 'Advanced AI', teacher: 'Mr. Silas Kael', room: 'Lab 402' },
  { id: '2', time: '09:45 - 11:15', subject: 'Quantum Physics', teacher: 'Dr. Aris Thorne', room: 'Hall A' },
  { id: '3', time: '11:30 - 13:00', subject: 'Mathematics', teacher: 'Prof. Lyra Vance', room: 'Room 105' },
  { id: '4', time: '14:00 - 15:30', subject: 'Ethics in Tech', teacher: 'Dr. Elena Rossi', room: 'Seminar Room' },
];

export const UPCOMING_EVENTS = [
  { 
    id: '1', 
    title: 'AI Innovation Summit', 
    date: 'April 15, 2026', 
    time: '10:00 AM', 
    location: 'Main Auditorium', 
    description: 'A day-long event featuring guest speakers from top tech companies.',
    category: 'Academic'
  },
  { 
    id: '2', 
    title: 'Spring Sports Day', 
    date: 'May 5, 2026', 
    time: '09:00 AM', 
    location: 'Academy Stadium', 
    description: 'Annual inter-house sports competition.',
    category: 'Sports'
  },
  { 
    id: '3', 
    title: 'Graduation Ceremony', 
    date: 'June 20, 2026', 
    time: '02:00 PM', 
    location: 'Grand Hall', 
    description: 'Celebrating the achievements of our graduating class of 2026.',
    category: 'Academic'
  },
];
