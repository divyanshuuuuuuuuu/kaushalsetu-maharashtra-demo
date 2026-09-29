import React from 'react';
import type { Language } from '../types';
import { translations } from '../data/translations';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Briefcase, 
  BookOpen, 
  Target, 
  Zap, 
  Building, 
  Shield, 
  Compass,
  FileCheck2
} from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onStartAssessment: () => void;
  onExploreDemand: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onStartAssessment,
  onExploreDemand
}) => {
  const t = translations[currentLang];

  const workflowSteps = [
    { num: '01', title: t.step1, icon: Users, desc: 'Profile creation & district mapping' },
    { num: '02', title: t.step2, icon: Target, desc: 'AI skill gap diagnostic' },
    { num: '03', title: t.step3, icon: BookOpen, desc: 'Targeted industry curriculum' },
    { num: '04', title: t.step4, icon: Zap, desc: 'Daily micro-challenges & XP' },
    { num: '05', title: t.step5, icon: Building, desc: 'MIDC practical capstone project' },
    { num: '06', title: t.step6, icon: Briefcase, desc: 'Verified job & apprenticeship connect' },
  ];

  return (
    <div className="space-y-10 pb-8">
      {/* Main Government Hero Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white border-b-4 border-amber-500 rounded-b-xl shadow-xl overflow-hidden relative">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="gov-container px-6 py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 px-3 py-1 rounded-full text-amber-300 text-xs font-semibold">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Maharashtra State Skill Telemetry Portal</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                {t.heroHeading}
              </h1>

              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                {t.heroSubheading}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={onStartAssessment}
                  className="btn-gov-primary flex items-center justify-center gap-2 text-base shadow-lg"
                >
                  <FileCheck2 className="w-5 h-5 text-slate-950" />
                  <span>{t.btnStartAssessment}</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <button
                  onClick={onExploreDemand}
                  className="btn-gov-secondary flex items-center justify-center gap-2 text-base"
                >
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                  <span>{t.btnExploreDemand}</span>
                </button>
              </div>

              {/* Verified Metrics Counter Strip */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-slate-300 text-xs">
                <div>
                  <div className="text-xl font-bold text-amber-400">2,45,000+</div>
                  <div className="text-slate-400">Registered Candidates</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-emerald-400">1,280+</div>
                  <div className="text-slate-400">Industry Partners</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-sky-400">36 Districts</div>
                  <div className="text-slate-400">Skill Map Live</div>
                </div>
              </div>
            </div>

            {/* Right Graphic: Abstract Clean Maharashtra Map & Node Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-slate-950/80 border border-slate-800 rounded-xl p-6 shadow-2xl relative">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="font-bold text-amber-400 flex items-center gap-1.5">
                    <Compass className="w-4 h-4" />
                    Maharashtra Industrial Clusters
                  </span>
                  <span className="text-slate-400">Real-time Telemetry</span>
                </div>

                {/* SVG Visual Map Node Diagram */}
                <div className="py-6 flex flex-col items-center justify-center relative min-h-[220px]">
                  <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-md">
                    {/* Outline representation of MH shape */}
                    <path
                      d="M 60 40 Q 120 20 200 40 T 340 70 Q 380 120 340 180 T 220 220 Q 120 200 60 160 Z"
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth="2"
                    />

                    {/* Industrial Nodes */}
                    {/* Mumbai */}
                    <g transform="translate(90, 110)">
                      <circle r="8" fill="#eab308" className="animate-ping opacity-75" />
                      <circle r="6" fill="#eab308" />
                      <text x="10" y="4" fill="#ffffff" fontSize="11" fontWeight="bold">Mumbai (Fintech & IT)</text>
                    </g>
                    {/* Pune */}
                    <g transform="translate(150, 140)">
                      <circle r="7" fill="#f97316" />
                      <text x="12" y="4" fill="#ffffff" fontSize="11" fontWeight="bold">Pune (Auto & EV Hub)</text>
                    </g>
                    {/* Chhatrapati Sambhajinagar */}
                    <g transform="translate(180, 95)">
                      <circle r="6" fill="#38bdf8" />
                      <text x="10" y="4" fill="#cbd5e1" fontSize="10">Sambhajinagar (AURIC)</text>
                    </g>
                    {/* Nashik */}
                    <g transform="translate(130, 75)">
                      <circle r="6" fill="#4ade80" />
                      <text x="-40" y="-8" fill="#cbd5e1" fontSize="10">Nashik (Power & Agro)</text>
                    </g>
                    {/* Nagpur */}
                    <g transform="translate(300, 70)">
                      <circle r="7" fill="#f43f5e" />
                      <text x="-65" y="16" fill="#ffffff" fontSize="11" fontWeight="bold">Nagpur (MIHAN Logistics)</text>
                    </g>
                    {/* Kolhapur */}
                    <g transform="translate(130, 190)">
                      <circle r="5" fill="#a855f7" />
                      <text x="10" y="4" fill="#cbd5e1" fontSize="10">Kolhapur (Foundry & Bio)</text>
                    </g>

                    {/* Interconnecting Telemetry Lines */}
                    <line x1="90" y1="110" x2="150" y2="140" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="150" y1="140" x2="180" y2="95" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="180" y1="95" x2="300" y2="70" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>
                </div>

                <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-[11px] text-slate-300 flex justify-between items-center">
                  <span>Highest Hiring Surge: <strong>Pune EV Powertrain</strong></span>
                  <span className="text-emerald-400 font-bold">+180% Demand</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY KAUSHALSETU Process Flow Section */}
      <section className="gov-container px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-block bg-blue-100 text-blue-900 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Structured Career Journey
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            {t.whyHeading}
          </h2>
          <p className="text-sm text-slate-600">
            A transparent 6-step pathway bridging student potential with Maharashtra industry requirements.
          </p>
        </div>

        {/* 6 Step Interactive Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="gov-card p-5 relative group hover:border-blue-500 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-slate-200 group-hover:text-blue-900 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>

                {idx < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-400">
                    <ArrowRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
