import {DiveSkill, TriviaQuestion, Achievement} from '../types';

export const mockSkills: DiveSkill[] = [
  {
    id: '1',
    name: 'Straight Jump',
    description: 'Basic straight jump entry into the water. Focus on body alignment and clean entry.',
    difficulty: 'beginner',
    diveNumber: '100',
    category: 'forward',
    prerequisites: [],
    isUnlocked: true,
    isCompleted: true,
    videoUrl: 'https://example.com/videos/straight-jump.mp4',
    thumbnailUrl: 'https://example.com/thumbnails/straight-jump.jpg',
    coachingTips: [
      'Keep arms at your sides',
      'Point your toes',
      'Look straight ahead',
      'Maintain straight body line'
    ],
    judgingCriteria: {
      approach: 'Confident and controlled',
      takeoff: 'Strong vertical lift',
      execution: 'Straight body position maintained',
      entry: 'Clean vertical entry with minimal splash',
      degreeOfDifficulty: 1.0
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'Forward Dive Pike',
    description: 'Forward dive with pike position - bend at the hips while keeping legs straight.',
    difficulty: 'beginner',
    diveNumber: '101A',
    category: 'forward',
    prerequisites: ['1'],
    isUnlocked: true,
    isCompleted: false,
    videoUrl: 'https://example.com/videos/forward-dive-pike.mp4',
    thumbnailUrl: 'https://example.com/thumbnails/forward-dive-pike.jpg',
    coachingTips: [
      'Strong forward takeoff',
      'Sharp pike at the hips',
      'Keep legs straight',
      'Open to straight position for entry'
    ],
    judgingCriteria: {
      approach: 'Smooth and controlled',
      takeoff: 'Forward and upward trajectory',
      execution: 'Clean pike position with straight legs',
      entry: 'Vertical entry with minimal splash',
      degreeOfDifficulty: 1.4
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'Forward Dive Tuck',
    description: 'Forward dive with tuck position - knees pulled to chest.',
    difficulty: 'beginner',
    diveNumber: '101B',
    category: 'forward',
    prerequisites: ['1'],
    isUnlocked: true,
    isCompleted: false,
    videoUrl: 'https://example.com/videos/forward-dive-tuck.mp4',
    thumbnailUrl: 'https://example.com/thumbnails/forward-dive-tuck.jpg',
    coachingTips: [
      'Quick takeoff',
      'Pull knees to chest',
      'Grab shins',
      'Open early for entry'
    ],
    judgingCriteria: {
      approach: 'Confident approach',
      takeoff: 'Strong forward rotation',
      execution: 'Tight tuck position',
      entry: 'Clean vertical entry',
      degreeOfDifficulty: 1.3
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    name: 'Back Dive Pike',
    description: 'Backward takeoff with pike position.',
    difficulty: 'intermediate',
    diveNumber: '201A',
    category: 'backward',
    prerequisites: ['2'],
    isUnlocked: false,
    isCompleted: false,
    videoUrl: 'https://example.com/videos/back-dive-pike.mp4',
    thumbnailUrl: 'https://example.com/thumbnails/back-dive-pike.jpg',
    coachingTips: [
      'Arms up for takeoff',
      'Look up initially',
      'Pike at hips',
      'Spot the water'
    ],
    judgingCriteria: {
      approach: 'Balanced setup',
      takeoff: 'Backward and upward',
      execution: 'Clear pike position',
      entry: 'Controlled entry',
      degreeOfDifficulty: 1.5
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '5',
    name: 'Reverse Dive Pike',
    description: 'Forward approach with backward rotation in pike position.',
    difficulty: 'intermediate',
    diveNumber: '301A',
    category: 'reverse',
    prerequisites: ['2', '4'],
    isUnlocked: false,
    isCompleted: false,
    videoUrl: 'https://example.com/videos/reverse-dive-pike.mp4',
    thumbnailUrl: 'https://example.com/thumbnails/reverse-dive-pike.jpg',
    coachingTips: [
      'Strong hurdle',
      'Jump up and back',
      'Quick pike',
      'Watch for board'
    ],
    judgingCriteria: {
      approach: 'Controlled hurdle',
      takeoff: 'Up and back trajectory',
      execution: 'Sharp pike position',
      entry: 'Safe distance from board',
      degreeOfDifficulty: 1.6
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '6',
    name: 'Forward 1½ Somersault Pike',
    description: 'One and a half forward somersaults in pike position.',
    difficulty: 'advanced',
    diveNumber: '103A',
    category: 'forward',
    prerequisites: ['2', '3'],
    isUnlocked: false,
    isCompleted: false,
    videoUrl: 'https://example.com/videos/forward-1.5-som-pike.mp4',
    thumbnailUrl: 'https://example.com/thumbnails/forward-1.5-som-pike.jpg',
    coachingTips: [
      'Strong forward takeoff',
      'Aggressive pike',
      'Fast rotation',
      'Open at vertical'
    ],
    judgingCriteria: {
      approach: 'Confident and controlled',
      takeoff: 'High and forward',
      execution: 'Tight pike, fast rotation',
      entry: 'Vertical with minimal splash',
      degreeOfDifficulty: 1.8
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export const mockTriviaQuestions: TriviaQuestion[] = [
  {
    id: '1',
    skillId: '2',
    question: 'In a pike position, what part of the body should be bent?',
    options: ['Knees', 'Hips', 'Ankles', 'Elbows'],
    correctAnswer: 1,
    explanation: 'In a pike position, the diver bends at the hips while keeping the legs straight.',
    difficulty: 'easy',
    category: 'technique'
  },
  {
    id: '2',
    question: 'What is the maximum score a single judge can award for a dive?',
    options: ['8', '9', '10', '11'],
    correctAnswer: 2,
    explanation: 'Judges award scores from 0-10, with 10 being a perfect dive.',
    difficulty: 'medium',
    category: 'judging'
  },
  {
    id: '3',
    skillId: '1',
    question: 'What should you focus on for a clean entry?',
    options: ['Big splash', 'Minimal splash', 'Loud entry', 'Fast entry'],
    correctAnswer: 1,
    explanation: 'A clean entry with minimal splash indicates good technique and body control.',
    difficulty: 'easy',
    category: 'technique'
  },
  {
    id: '4',
    question: 'How many judges typically score a dive in competition?',
    options: ['3', '5', '7', '9'],
    correctAnswer: 2,
    explanation: 'Most diving competitions use 7 judges, with the highest and lowest scores dropped.',
    difficulty: 'medium',
    category: 'judging'
  }
];

export const mockAchievements: Achievement[] = [
  {
    id: '1',
    name: 'First Splash',
    description: 'Complete your first dive',
    iconUrl: 'https://example.com/icons/first-splash.png',
    unlockedAt: new Date(),
    category: 'progress'
  },
  {
    id: '2',
    name: 'Pike Master',
    description: 'Master 5 pike dives',
    iconUrl: 'https://example.com/icons/pike-master.png',
    unlockedAt: new Date(),
    category: 'technique'
  },
  {
    id: '3',
    name: 'Streak Starter',
    description: 'Practice for 3 days in a row',
    iconUrl: 'https://example.com/icons/streak-starter.png',
    unlockedAt: new Date(),
    category: 'consistency'
  }
];