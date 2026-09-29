import { useState } from 'react';
import type { Language, UserProfile } from './types';
import { 
  INITIAL_DAILY_MISSION, 
  CAREER_PATHWAYS, 
  INITIAL_USER_PROFILE, 
  SAMPLE_OPPORTUNITIES 
} from './data/maharashtraData';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { StudentDashboard } from './components/StudentDashboard';
import { DailyMissionModal } from './components/DailyMissionModal';
import { SkillExplorerView } from './components/SkillExplorerView';
import { CareerQuestView } from './components/CareerQuestView';
import { IndustryConnectView } from './components/IndustryConnectView';
import { OpportunitiesView } from './components/OpportunitiesView';

import { 
  Building2, 
  Compass, 
  Trophy, 
  Briefcase
} from 'lucide-react';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [userProfile, setUserProfile] = useState<UserProfile>(INITIAL_USER_PROFILE);
  const [dailyMissionModalOpen, setDailyMissionModalOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [districtFilter, setDistrictFilter] = useState('');

  const handleCycleFontSize = () => {
    if (fontSizeLevel === 'normal') setFontSizeLevel('large');
    else if (fontSizeLevel === 'large') setFontSizeLevel('xlarge');
    else setFontSizeLevel('normal');
  };

  const handleCompleteMission = (xpGained: number) => {
    setUserProfile((prev) => {
      const newXp = prev.currentXp + xpGained;
      let newLevel = prev.level;
      let newNextXp = prev.nextLevelXp;
      let newLevelTitle = prev.levelTitle;

      if (newXp >= prev.nextLevelXp) {
        newLevel += 1;
        newNextXp += 500;
        newLevelTitle = newLevel >= 5 ? 'EXPERT' : 'BUILDER';
      }

      return {
        ...prev,
        currentXp: newXp,
        level: newLevel,
        nextLevelXp: newNextXp,
        levelTitle: newLevelTitle,
        streakDays: prev.streakDays + 1
      };
    });
  };

  const handleNavigateToOpportunitiesWithDistrict = (districtName: string) => {
    setDistrictFilter(districtName);
    setActiveTab('opportunities');
  };

  return (
    <div className={`min-h-screen flex flex-col ${highContrast ? 'high-contrast-mode' : ''} ${
      fontSizeLevel === 'large' ? 'font-level-large' : fontSizeLevel === 'xlarge' ? 'font-level-xlarge' : ''
    }`}>
      
      {/* Top Header & Government Navigation */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        userProfile={userProfile}
        highContrast={highContrast}
        onToggleContrast={() => setHighContrast(!highContrast)}
        fontSizeLevel={fontSizeLevel}
        onCycleFontSize={handleCycleFontSize}
      />

      {/* Main Content Body */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <HeroSection
              currentLang={currentLang}
              onStartAssessment={() => setActiveTab('explorer')}
              onExploreDemand={() => setActiveTab('industry')}
            />
            {/* Embedded Quick Dashboard Snippet on Home */}
            <StudentDashboard
              userProfile={userProfile}
              dailyMission={INITIAL_DAILY_MISSION}
              pathways={CAREER_PATHWAYS}
              opportunities={SAMPLE_OPPORTUNITIES}
              currentLang={currentLang}
              onOpenMission={() => setDailyMissionModalOpen(true)}
              onNavigateTab={setActiveTab}
            />
          </>
        )}

        {activeTab === 'dashboard' && (
          <StudentDashboard
            userProfile={userProfile}
            dailyMission={INITIAL_DAILY_MISSION}
            pathways={CAREER_PATHWAYS}
            opportunities={SAMPLE_OPPORTUNITIES}
            currentLang={currentLang}
            onOpenMission={() => setDailyMissionModalOpen(true)}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'explorer' && (
          <SkillExplorerView currentLang={currentLang} />
        )}

        {activeTab === 'quest' && (
          <CareerQuestView
            pathways={CAREER_PATHWAYS}
            currentLang={currentLang}
          />
        )}

        {activeTab === 'industry' && (
          <IndustryConnectView
            currentLang={currentLang}
            onSelectDistrictFilter={handleNavigateToOpportunitiesWithDistrict}
          />
        )}

        {activeTab === 'opportunities' && (
          <OpportunitiesView
            currentLang={currentLang}
            initialDistrictFilter={districtFilter}
          />
        )}
      </main>

      {/* Daily Challenge Interactive Modal */}
      {dailyMissionModalOpen && (
        <DailyMissionModal
          mission={INITIAL_DAILY_MISSION}
          currentLang={currentLang}
          onClose={() => setDailyMissionModalOpen(false)}
          onComplete={handleCompleteMission}
        />
      )}

      {/* Footer */}
      <Footer currentLang={currentLang} onTabChange={setActiveTab} />

      {/* Mobile Bottom Fixed Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950 border-t border-slate-800 text-white lg:hidden flex justify-around items-center py-2 px-1 shadow-2xl">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-2 rounded ${
            activeTab === 'home' ? 'text-amber-400 font-bold' : 'text-slate-400'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Home</span>
        </button>

        <button
          onClick={() => setActiveTab('dashboard')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-2 rounded ${
            activeTab === 'dashboard' ? 'text-amber-400 font-bold' : 'text-slate-400'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Learn</span>
        </button>

        <button
          onClick={() => setActiveTab('quest')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-2 rounded ${
            activeTab === 'quest' ? 'text-amber-400 font-bold' : 'text-slate-400'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Quest</span>
        </button>

        <button
          onClick={() => setActiveTab('opportunities')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold py-1 px-2 rounded ${
            activeTab === 'opportunities' ? 'text-amber-400 font-bold' : 'text-slate-400'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>Jobs</span>
        </button>

        <button
          onClick={() => setDailyMissionModalOpen(true)}
          className="flex flex-col items-center gap-1 text-[10px] font-bold text-slate-950 bg-amber-500 px-3 py-1 rounded shadow-md"
        >
          <Trophy className="w-4 h-4" />
          <span>Mission</span>
        </button>
      </div>

    </div>
  );
}

export default App;
