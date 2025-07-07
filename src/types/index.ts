export interface DiveSkill {
  id: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  diveNumber: string; // e.g., "101A", "203B"
  category: 'forward' | 'backward' | 'reverse' | 'inward' | 'twisting' | 'armstand';
  prerequisites: string[]; // Array of skill IDs
  isUnlocked: boolean;
  isCompleted: boolean;
  videoUrl: string;
  thumbnailUrl: string;
  coachingTips: string[];
  judgingCriteria: JudgingCriteria;
  createdAt: Date;
  updatedAt: Date;
}

export interface JudgingCriteria {
  approach: string;
  takeoff: string;
  execution: string;
  entry: string;
  degreeOfDifficulty: number;
}

export interface UserDive {
  id: string;
  userId: string;
  skillId: string;
  videoUrl: string;
  thumbnailUrl: string;
  score?: number;
  feedback?: string;
  notes: string;
  recordedAt: Date;
  isPublic: boolean;
}

export interface TriviaQuestion {
  id: string;
  skillId?: string; // Optional - can be general diving trivia
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'technique' | 'judging' | 'history' | 'safety';
}

export interface User {
  id: string;
  name: string;
  email: string;
  dateOfBirth: Date;
  teamName?: string;
  coachEmail?: string;
  profileImageUrl?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  totalPoints: number;
  completedSkills: string[];
  achievements: Achievement[];
  createdAt: Date;
  lastActiveAt: Date;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  unlockedAt: Date;
  category: 'progress' | 'technique' | 'consistency' | 'special';
}

export interface VideoComparison {
  id: string;
  userDiveId: string;
  referenceSkillId: string;
  notes: ComparisonNote[];
  createdAt: Date;
}

export interface ComparisonNote {
  id: string;
  timestamp: number; // in seconds
  text: string;
  type: 'observation' | 'improvement' | 'positive';
}

export interface ProgressStats {
  totalSkillsCompleted: number;
  currentStreak: number;
  longestStreak: number;
  averageScore: number;
  favoriteCategory: string;
  totalPracticeTime: number; // in minutes
}

// Navigation types
export type RootStackParamList = {
  Welcome: undefined;
  Main: undefined;
};

export type SkillStackParamList = {
  SkillTree: undefined;
  SkillDetail: {skillId: string};
  VideoComparison: {skillId: string; userDiveId?: string};
};

export type MainTabParamList = {
  Skills: undefined;
  Trivia: undefined;
  Profile: undefined;
};