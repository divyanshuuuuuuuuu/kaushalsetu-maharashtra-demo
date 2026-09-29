export type Language = 'en' | 'mr' | 'hi';

export type DistrictId = 
  | 'pune' 
  | 'mumbai' 
  | 'thane' 
  | 'nagpur' 
  | 'nashik' 
  | 'sambhajinagar' 
  | 'kolhapur' 
  | 'solapur' 
  | 'amravati' 
  | 'raigad';

export interface DistrictInfo {
  id: DistrictId;
  name: string;
  nameMr: string;
  nameHi: string;
  division: string;
  topIndustries: string[];
  skillDemand: string[];
  candidateCount: number;
  skillCentersCount: number;
  gapIndex: 'High' | 'Medium' | 'Low';
  description: string;
  descriptionMr: string;
  descriptionHi: string;
}

export interface DailyMission {
  id: string;
  title: string;
  titleMr: string;
  titleHi: string;
  description: string;
  descriptionMr: string;
  descriptionHi: string;
  skillCategory: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  xpReward: number;
  estimatedMinutes: number;
  questionText: string;
  questionTextMr: string;
  questionTextHi: string;
  chartData?: { label: string; value: number }[];
  options: { id: string; text: string; textMr: string; textHi: string }[];
  correctAnswer: string;
  explanation: string;
  explanationMr: string;
  explanationHi: string;
}

export interface CareerStage {
  id: string;
  title: string;
  titleMr: string;
  titleHi: string;
  status: 'completed' | 'in-progress' | 'locked';
  skills: string[];
  xpRequired: number;
  description: string;
}

export interface CareerPathway {
  id: string;
  title: string;
  titleMr: string;
  titleHi: string;
  icon: string;
  category: string;
  description: string;
  stages: CareerStage[];
}

export interface Opportunity {
  id: string;
  title: string;
  titleMr: string;
  company: string;
  district: string;
  districtId: DistrictId;
  salary: string;
  type: 'Job' | 'Apprenticeship' | 'Internship';
  skillsRequired: string[];
  matchPercentage: number;
  demandStatus: 'High Demand' | 'Emerging' | 'Critical Shortage';
  deadline: string;
}

export interface SkillGapResult {
  assessmentId: string;
  candidateName: string;
  date: string;
  district: string;
  targetRole: string;
  currentSkills: string[];
  requiredSkills: string[];
  missingSkills: string[];
  readinessScore: number;
  recommendedAction: string;
  gapLevel: 'High' | 'Medium' | 'Low';
}

export interface UserProfile {
  name: string;
  district: string;
  careerRole: string;
  level: number;
  levelTitle: string;
  currentXp: number;
  nextLevelXp: number;
  streakDays: number;
  completedMissions: string[];
  skills: { name: string; percentage: number; level: string }[];
}
