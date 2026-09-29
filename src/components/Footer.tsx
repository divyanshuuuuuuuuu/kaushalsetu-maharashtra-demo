import React from 'react';
import type { Language } from '../types';
import { translations } from '../data/translations';
import { ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onTabChange: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onTabChange }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t-4 border-amber-500 pt-10 pb-20 lg:pb-10">
      <div className="gov-container px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          
          {/* Col 1: Platform identity & disclaimer */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-slate-950 font-black text-xs">
                MH
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {t.portalTitle}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footerDesc}
            </p>
            <div className="pt-2 text-[11px] text-amber-400/90 bg-amber-950/40 p-2.5 rounded border border-amber-800/40">
              <span className="font-semibold block mb-0.5">Official Hackathon Prototype</span>
              {t.footerDisclaimer}
            </div>
          </div>

          {/* Col 2: Platform Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 border-b border-slate-800 pb-1.5">
              {t.footerPlatform}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onTabChange('home')} className="hover:text-amber-400 transition-colors">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('dashboard')} className="hover:text-amber-400 transition-colors">
                  {t.navDashboard}
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('explorer')} className="hover:text-amber-400 transition-colors">
                  {t.navExplorer}
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('quest')} className="hover:text-amber-400 transition-colors">
                  {t.navQuest}
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('industry')} className="hover:text-amber-400 transition-colors">
                  {t.navIndustry}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: State Schemes & Governance */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 border-b border-slate-800 pb-1.5">
              {t.footerResources}
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center space-x-1.5">
                <ExternalLink className="w-3 h-3 text-amber-400" />
                <span>Maharashtra Skill Development Society (MSSDS)</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <ExternalLink className="w-3 h-3 text-amber-400" />
                <span>Pramod Mahajan Skill Mission</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <ExternalLink className="w-3 h-3 text-amber-400" />
                <span>MIDC Industrial Parks Skill Telemetry</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <ExternalLink className="w-3 h-3 text-amber-400" />
                <span>National Skill Development Corporation (NSDC)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Secretariat info */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 border-b border-slate-800 pb-1.5">
              {t.footerSupport}
            </h3>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Skill Development, Employment & Entrepreneurship Dept, Mantralaya, Mumbai - 400032</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Toll-Free Helpline: 1800-233-0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>kaushalsetu@maharashtra.gov.in (Demo)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Accessibility Strip */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-400 gap-2">
          <div className="flex items-center space-x-3">
            <span>© 2026 Government of Maharashtra Skill Portal Prototype.</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>|</span>
            <span className="hover:text-slate-300 cursor-pointer">Accessibility Statement</span>
            <span>|</span>
            <span className="hover:text-slate-300 cursor-pointer">Feedback</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
