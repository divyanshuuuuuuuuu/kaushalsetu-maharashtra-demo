import React from 'react';
import type { Language, UserProfile } from '../types';
import { translations } from '../data/translations';
import { 
  Building2, 
  Menu, 
  X, 
  Globe, 
  Eye, 
  Flame, 
  UserCircle2, 
  ChevronRight,
  ShieldCheck,
  Search,
  Trophy,
  MapPin,
  Briefcase,
  Compass
} from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  userProfile: UserProfile;
  highContrast: boolean;
  onToggleContrast: () => void;
  fontSizeLevel: 'normal' | 'large' | 'xlarge';
  onCycleFontSize: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onTabChange,
  userProfile,
  highContrast,
  onToggleContrast,
  fontSizeLevel,
  onCycleFontSize
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const t = translations[currentLang];

  const navItems = [
    { id: 'home', label: t.navHome, icon: Building2 },
    { id: 'dashboard', label: t.navDashboard, icon: Compass },
    { id: 'explorer', label: t.navExplorer, icon: Search },
    { id: 'quest', label: t.navQuest, icon: Trophy },
    { id: 'industry', label: t.navIndustry, icon: MapPin },
    { id: 'opportunities', label: t.navOpportunities, icon: Briefcase },
  ];

  return (
    <header className="gov-header-wrapper">
      {/* Top Utility Accessibility & Language Bar */}
      <div className="gov-top-bar">
        <div className="gov-container flex justify-between items-center text-xs py-1.5 px-4">
          <div className="flex items-center space-x-3 text-slate-300">
            <span className="flex items-center font-medium gap-1 text-amber-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              Government of Maharashtra Digital Initiative
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">{t.prototypeNotice}</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Accessibility Controls */}
            <div className="flex items-center space-x-1 bg-slate-800/80 rounded px-2 py-0.5 border border-slate-700">
              <button 
                onClick={onCycleFontSize}
                className="hover:text-amber-400 px-1 text-slate-300 font-bold"
                title="Adjust Text Size (A-, A, A+)"
                aria-label="Adjust font size"
              >
                A{fontSizeLevel === 'large' ? '+' : fontSizeLevel === 'xlarge' ? '++' : ''}
              </button>
              <span className="text-slate-600">|</span>
              <button 
                onClick={onToggleContrast}
                className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-xs transition-colors ${
                  highContrast ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
                }`}
                title="Toggle High Contrast Mode"
                aria-label="Toggle high contrast"
              >
                <Eye className="w-3 h-3" />
                <span className="hidden sm:inline">{highContrast ? 'Standard' : 'Contrast'}</span>
              </button>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 text-slate-200 bg-slate-800/80 rounded px-2 py-0.5 border border-slate-700">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-1.5 py-0.5 rounded text-xs ${currentLang === 'en' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:text-amber-300'}`}
              >
                English
              </button>
              <button
                onClick={() => onLanguageChange('mr')}
                className={`px-1.5 py-0.5 rounded text-xs ${currentLang === 'mr' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:text-amber-300'}`}
              >
                मराठी
              </button>
              <button
                onClick={() => onLanguageChange('hi')}
                className={`px-1.5 py-0.5 rounded text-xs ${currentLang === 'hi' ? 'bg-amber-500 text-slate-950 font-bold' : 'hover:text-amber-300'}`}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Official Header Branding */}
      <div className="bg-slate-900 text-white border-b border-slate-800 shadow-md">
        <div className="gov-container px-4 py-3 flex items-center justify-between">
          {/* Logo & Title */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onTabChange('home')}
          >
            {/* Abstract Maharashtra State Emblem Badge */}
            <div className="w-11 h-11 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg p-0.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform border border-amber-300/40">
              <div className="w-full h-full bg-slate-950 rounded-md flex flex-col items-center justify-center text-center p-1">
                <span className="text-[9px] font-black tracking-widest text-amber-400 uppercase leading-none">MH</span>
                <span className="text-[11px] font-black text-white leading-none">SETU</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  {t.portalTitle}
                </h1>
                <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/30 uppercase tracking-wide">
                  State Digital Portal
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {t.portalSubtitle}
              </p>
            </div>
          </div>

          {/* Desktop User Status & Quick Level Badge */}
          <div className="hidden lg:flex items-center space-x-4 bg-slate-800/90 border border-slate-700/80 px-3.5 py-1.5 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2 border-r border-slate-700 pr-3">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-amber-400 font-bold text-xs">
                L{userProfile.level}
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white leading-none">
                  LEVEL {userProfile.level} — {userProfile.levelTitle}
                </div>
                <div className="text-[10px] text-amber-400 font-semibold mt-0.5">
                  {userProfile.currentXp} XP
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 text-xs font-medium text-orange-400 bg-orange-950/40 px-2 py-1 rounded border border-orange-800/40">
              <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500 animate-pulse" />
              <span>{userProfile.streakDays} Day Streak</span>
            </div>

            <button 
              onClick={() => onTabChange('dashboard')}
              className="flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-3 py-1.5 rounded transition-colors"
            >
              <UserCircle2 className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links Bar */}
      <nav className="hidden lg:block bg-slate-950 border-b border-slate-800">
        <div className="gov-container px-4">
          <ul className="flex items-center space-x-1 py-1 text-sm font-medium">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onTabChange(item.id)}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-md transition-all ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Government Portal Narrow Information Bar */}
      <div className="bg-slate-100 border-b border-slate-200 py-1.5 px-4 text-xs text-slate-700">
        <div className="gov-container flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block"></span>
            <span className="text-slate-900 font-semibold">{t.govtTagline}</span>
          </div>
          <div className="flex items-center space-x-4 text-slate-500">
            <span>{t.lastUpdated} <strong className="text-slate-800">29 SEP 2026</strong></span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">District Hubs Active: <strong className="text-slate-800">36 Districts</strong></span>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 text-white px-4 py-3 space-y-2">
          <div className="p-3 bg-slate-800/90 rounded-lg flex items-center justify-between border border-slate-700 mb-3">
            <div>
              <div className="text-xs font-bold text-amber-400">LEVEL {userProfile.level} — {userProfile.levelTitle}</div>
              <div className="text-xs text-slate-300">{userProfile.currentXp} XP • 🔥 {userProfile.streakDays} Day Streak</div>
            </div>
            <button 
              onClick={() => { onTabChange('dashboard'); setMobileMenuOpen(false); }}
              className="bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1 rounded"
            >
              My Dashboard
            </button>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium ${
                    isActive ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
