import React from 'react';
import type { UserProfile, DailyMission, Language, CareerPathway, Opportunity } from '../types';
import { translations } from '../data/translations';
import { 
  Trophy, 
  Flame, 
  BookOpen, 
  Target, 
  Award, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Briefcase, 
  BarChart2, 
  Clock, 
  ShieldCheck,
  TrendingUp,
  MapPin
} from 'lucide-react';

interface StudentDashboardProps {
  userProfile: UserProfile;
  dailyMission: DailyMission;
  pathways: CareerPathway[];
  opportunities: Opportunity[];
  currentLang: Language;
  onOpenMission: () => void;
  onNavigateTab: (tab: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  userProfile,
  dailyMission,
  pathways,
  opportunities,
  currentLang,
  onOpenMission,
  onNavigateTab
}) => {
  const t = translations[currentLang];
  const activePathway = pathways[0]; // Data Analyst Pathway

  const xpProgressPercent = Math.min(
    100,
    Math.round((userProfile.currentXp / userProfile.nextLevelXp) * 100)
  );
  const xpNeeded = userProfile.nextLevelXp - userProfile.currentXp;

  return (
    <div className="space-y-8 pb-12">
      {/* Breadcrumb & Title */}
      <div className="gov-container px-4 pt-4">
        <nav className="text-xs text-slate-500 mb-2 flex items-center space-x-1 font-medium">
          <span className="cursor-pointer hover:text-slate-800" onClick={() => onNavigateTab('home')}>Home</span>
          <span>&gt;</span>
          <span className="text-slate-900 font-semibold">{t.navDashboard}</span>
        </nav>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Candidate Telemetry & Dashboard
            </h1>
            <p className="text-xs md:text-sm text-slate-600 font-medium">
              Candidate Name: <strong className="text-slate-900">{userProfile.name}</strong> • District: <strong className="text-slate-900">{userProfile.district}</strong>
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Skill Profile Verified</span>
            </span>
          </div>
        </div>
      </div>

      <div className="gov-container px-4 space-y-8">
        
        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Career Level */}
          <div className="gov-card p-5 relative overflow-hidden">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  {t.cardCareerLevel}
                </span>
                <div className="text-lg font-black text-slate-900 mt-0.5">
                  LEVEL {userProfile.level} — {userProfile.levelTitle}
                </div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center font-bold">
                <Trophy className="w-5 h-5" />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>{userProfile.currentXp.toLocaleString()} / {userProfile.nextLevelXp.toLocaleString()} XP</span>
                <span className="text-blue-900">{xpProgressPercent}%</span>
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-amber-500 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${xpProgressPercent}%` }}
                ></div>
              </div>
              <div className="text-[11px] text-slate-500 font-medium pt-0.5">
                {xpNeeded} XP required for next level
              </div>
            </div>
          </div>

          {/* Card 2: Current XP */}
          <div className="gov-card p-5">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  {t.cardCurrentXp}
                </span>
                <div className="text-2xl font-black text-slate-900 mt-1">
                  {userProfile.currentXp.toLocaleString()} XP
                </div>
                <div className="text-xs text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+120 XP earned this week</span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Card 3: Skills Completed */}
          <div className="gov-card p-5">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  {t.cardSkillsCompleted}
                </span>
                <div className="text-2xl font-black text-slate-900 mt-1">
                  8 Modules
                </div>
                <div className="text-xs text-slate-600 font-medium mt-1">
                  Target Role: <span className="font-bold text-slate-800">{userProfile.careerRole}</span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Card 4: Learning Streak */}
          <div className="gov-card p-5">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  {t.cardLearningStreak}
                </span>
                <div className="text-2xl font-black text-orange-600 mt-1 flex items-center gap-1.5">
                  <Flame className="w-6 h-6 fill-orange-500 text-orange-500" />
                  <span>{userProfile.streakDays} Days</span>
                </div>
                <div className="text-xs text-slate-600 font-medium mt-1">
                  Active learning streak maintained!
                </div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>

        {/* TODAY'S MISSION Section */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-850 text-white rounded-xl p-6 shadow-xl border-l-8 border-amber-500">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center space-x-3">
                <span className="bg-amber-500 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded tracking-wide uppercase">
                  {t.todaysMissionTitle}
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Est. 5 mins
                </span>
                <span className="text-xs text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  +{dailyMission.xpReward} XP Reward
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white">
                {currentLang === 'mr' ? dailyMission.titleMr : currentLang === 'hi' ? dailyMission.titleHi : dailyMission.title}
              </h2>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                {currentLang === 'mr' ? dailyMission.descriptionMr : currentLang === 'hi' ? dailyMission.descriptionHi : dailyMission.description}
              </p>
            </div>

            <button
              onClick={onOpenMission}
              className="btn-gov-primary flex items-center gap-2 text-sm shrink-0 whitespace-nowrap shadow-md hover:scale-105 transition-transform"
            >
              <span>{t.btnStartChallenge}</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </section>

        {/* Grid: Skill Progress & Career Quest Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Skill Progress Bar Breakdown */}
          <div className="lg:col-span-6 gov-card p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-blue-900" />
                  <span>{t.skillProgressTitle}</span>
                </h3>
                <p className="text-xs text-slate-500">Current candidate proficiencies in Data Analytics</p>
              </div>
              <button 
                onClick={() => onNavigateTab('explorer')}
                className="text-xs font-bold text-blue-900 hover:text-amber-600 flex items-center gap-1"
              >
                Diagnostic Tool &rarr;
              </button>
            </div>

            {/* Skill Bar Lists */}
            <div className="space-y-4">
              {userProfile.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-800">
                    <span>{skill.name}</span>
                    <span className="text-blue-900">{skill.percentage}% ({skill.level})</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        skill.percentage >= 80 ? 'bg-emerald-600' :
                        skill.percentage >= 60 ? 'bg-blue-900' :
                        skill.percentage >= 40 ? 'bg-amber-500' : 'bg-slate-400'
                      }`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommended Next Skill Box */}
            <div className="bg-amber-50 border border-amber-300 rounded-lg p-3.5 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2.5">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <span className="font-bold text-amber-900 block">{t.recommendedNextSkill} Power BI & Visual Dashboards</span>
                  <span className="text-amber-800">Closing this 30% gap unlocks 92+ matching jobs in Pune & Mumbai MIDC.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Career Quest Roadmap Overview */}
          <div className="lg:col-span-6 gov-card p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-600" />
                  <span>{t.careerQuestTitle}</span>
                </h3>
                <p className="text-xs text-slate-500">Track: {activePathway.title}</p>
              </div>
              <button 
                onClick={() => onNavigateTab('quest')}
                className="text-xs font-bold text-blue-900 hover:text-amber-600 flex items-center gap-1"
              >
                Full Quest View &rarr;
              </button>
            </div>

            {/* Stages Vertical Connected Line Timeline */}
            <div className="space-y-4 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
              {activePathway.stages.map((stage, idx) => {
                const isCompleted = stage.status === 'completed';
                const isInProgress = stage.status === 'in-progress';

                return (
                  <div key={stage.id} className="relative flex items-start space-x-4 text-xs">
                    {/* Circle Node */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 font-bold border-2 ${
                      isCompleted ? 'bg-emerald-600 text-white border-emerald-600' :
                      isInProgress ? 'bg-amber-500 text-slate-950 border-amber-600 animate-pulse' :
                      'bg-white text-slate-400 border-slate-300'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                    </div>

                    <div className="flex-1 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-900 text-xs">
                          {stage.title}
                        </span>
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                          isCompleted ? 'bg-emerald-100 text-emerald-800' :
                          isInProgress ? 'bg-amber-100 text-amber-900' :
                          'bg-slate-200 text-slate-600'
                        }`}>
                          {stage.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Recommended Opportunities Strip */}
        <section className="gov-card p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-900" />
                <span>Recommended Industry Opportunities</span>
              </h3>
              <p className="text-xs text-slate-500">Based on your candidate readiness score in Pune & Mumbai districts</p>
            </div>
            <button 
              onClick={() => onNavigateTab('opportunities')}
              className="text-xs font-bold text-blue-900 hover:text-amber-600 flex items-center gap-1"
            >
              {t.btnViewOpportunities} &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {opportunities.slice(0, 3).map((opp) => (
              <div key={opp.id} className="border border-slate-200 rounded-lg p-4 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold uppercase bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                    {opp.type}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    {opp.matchPercentage}% Skill Match
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{opp.title}</h4>
                <div className="text-xs text-slate-600 space-y-1 mb-3">
                  <div>Company: <strong className="text-slate-800">{opp.company}</strong></div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{opp.district}</span>
                  </div>
                </div>
                <button 
                  onClick={() => onNavigateTab('opportunities')}
                  className="w-full btn-gov-secondary text-xs py-1.5 justify-center"
                >
                  {t.btnApplyNow}
                </button>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
