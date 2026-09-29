import React, { useState } from 'react';
import type { Language } from '../types';
import { translations } from '../data/translations';
import { MAHARASHTRA_DISTRICTS } from '../data/maharashtraData';
import { 
  MapPin, 
  Building2, 
  AlertTriangle, 
  Briefcase, 
  Compass
} from 'lucide-react';

interface IndustryConnectViewProps {
  currentLang: Language;
  onSelectDistrictFilter: (districtName: string) => void;
}

export const IndustryConnectView: React.FC<IndustryConnectViewProps> = ({
  currentLang,
  onSelectDistrictFilter
}) => {
  const t = translations[currentLang];
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>('pune');

  const activeDistrict = MAHARASHTRA_DISTRICTS.find(d => d.id === selectedDistrictId) || MAHARASHTRA_DISTRICTS[0];

  const districtName = currentLang === 'mr' ? activeDistrict.nameMr : currentLang === 'hi' ? activeDistrict.nameHi : activeDistrict.name;
  const description = currentLang === 'mr' ? activeDistrict.descriptionMr : currentLang === 'hi' ? activeDistrict.descriptionHi : activeDistrict.description;

  return (
    <div className="gov-container px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="inline-block bg-blue-100 text-blue-900 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          Statewide Skill Demand Telemetry
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          {t.districtMapTitle}
        </h1>
        <p className="text-sm text-slate-600">
          Explore district-level industry requirements, skill shortages, and accredited training infrastructure across Maharashtra.
        </p>
      </div>

      {/* Main Grid: Desktop Map & Info Panel Side-by-Side; Mobile Map top, details below */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Maharashtra Interactive Visual Vector Map */}
        <div className="lg:col-span-7 gov-card p-6 space-y-4 bg-slate-950 text-white border-t-4 border-amber-500 shadow-2xl">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <h2 className="text-base font-bold text-white">Interactive Maharashtra Map</h2>
            </div>

            {/* Mobile / Tablet Quick District Selector Dropdown */}
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-slate-400 hidden sm:inline">{t.selectDistrict}</span>
              <select
                value={selectedDistrictId}
                onChange={(e) => setSelectedDistrictId(e.target.value)}
                className="bg-slate-800 text-white border border-slate-700 rounded px-2.5 py-1 text-xs font-semibold focus:outline-none focus:border-amber-400"
              >
                {MAHARASHTRA_DISTRICTS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {currentLang === 'mr' ? d.nameMr : currentLang === 'hi' ? d.nameHi : d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Map Vector Display */}
          <div className="relative min-h-[320px] flex items-center justify-center p-4">
            <svg viewBox="0 0 500 320" className="w-full h-auto drop-shadow-2xl">
              {/* Maharashtra State Outline */}
              <path
                d="M 70 60 Q 150 30 280 50 T 460 90 Q 480 180 430 250 T 260 290 Q 150 270 70 200 Z"
                fill="#0f172a"
                stroke="#334155"
                strokeWidth="2.5"
              />

              {/* Clickable District Markers */}
              {/* Pune */}
              <g 
                onClick={() => setSelectedDistrictId('pune')}
                className="cursor-pointer group"
                transform="translate(190, 180)"
              >
                <circle r={selectedDistrictId === 'pune' ? "11" : "8"} fill="#e65100" className={selectedDistrictId === 'pune' ? "animate-pulse" : ""} />
                <circle r="4" fill="#ffffff" />
                <text x="14" y="4" fill="#ffffff" fontSize="12" fontWeight="bold" className="group-hover:fill-amber-400">
                  Pune
                </text>
              </g>

              {/* Mumbai */}
              <g 
                onClick={() => setSelectedDistrictId('mumbai')}
                className="cursor-pointer group"
                transform="translate(110, 140)"
              >
                <circle r={selectedDistrictId === 'mumbai' ? "11" : "8"} fill="#1e3a8a" />
                <circle r="4" fill="#ffffff" />
                <text x="-65" y="4" fill="#ffffff" fontSize="12" fontWeight="bold" className="group-hover:fill-amber-400">
                  Mumbai
                </text>
              </g>

              {/* Thane */}
              <g 
                onClick={() => setSelectedDistrictId('thane')}
                className="cursor-pointer group"
                transform="translate(140, 115)"
              >
                <circle r={selectedDistrictId === 'thane' ? "11" : "7"} fill="#0284c7" />
                <text x="10" y="-6" fill="#cbd5e1" fontSize="10">Thane/Raigad</text>
              </g>

              {/* Nashik */}
              <g 
                onClick={() => setSelectedDistrictId('nashik')}
                className="cursor-pointer group"
                transform="translate(170, 90)"
              >
                <circle r={selectedDistrictId === 'nashik' ? "11" : "7"} fill="#16a34a" />
                <text x="10" y="4" fill="#cbd5e1" fontSize="10">Nashik</text>
              </g>

              {/* Sambhajinagar */}
              <g 
                onClick={() => setSelectedDistrictId('sambhajinagar')}
                className="cursor-pointer group"
                transform="translate(240, 120)"
              >
                <circle r={selectedDistrictId === 'sambhajinagar' ? "11" : "8"} fill="#d97706" />
                <text x="12" y="4" fill="#ffffff" fontSize="11" fontWeight="bold">Sambhajinagar</text>
              </g>

              {/* Nagpur */}
              <g 
                onClick={() => setSelectedDistrictId('nagpur')}
                className="cursor-pointer group"
                transform="translate(390, 85)"
              >
                <circle r={selectedDistrictId === 'nagpur' ? "11" : "8"} fill="#dc2626" />
                <text x="-50" y="18" fill="#ffffff" fontSize="12" fontWeight="bold">Nagpur</text>
              </g>

              {/* Kolhapur */}
              <g 
                onClick={() => setSelectedDistrictId('kolhapur')}
                className="cursor-pointer group"
                transform="translate(170, 245)"
              >
                <circle r={selectedDistrictId === 'kolhapur' ? "11" : "7"} fill="#9333ea" />
                <text x="12" y="4" fill="#cbd5e1" fontSize="10">Kolhapur</text>
              </g>

              {/* Solapur */}
              <g 
                onClick={() => setSelectedDistrictId('solapur')}
                className="cursor-pointer group"
                transform="translate(250, 220)"
              >
                <circle r={selectedDistrictId === 'solapur' ? "11" : "7"} fill="#ea580c" />
                <text x="10" y="4" fill="#cbd5e1" fontSize="10">Solapur</text>
              </g>

            </svg>
          </div>

          <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 bg-slate-900 p-3 rounded-lg border border-slate-800">
            <span>Click any district node on map to view industrial telemetry</span>
            <span className="text-amber-400 font-bold">Selected: {districtName}</span>
          </div>
        </div>

        {/* Right Side: District Information Card */}
        <div className="lg:col-span-5 gov-card p-6 space-y-6 bg-white border-t-4 border-amber-500">
          <div className="flex items-start justify-between border-b border-slate-200 pb-3">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>{activeDistrict.division}</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 mt-1">
                {districtName}
              </h2>
            </div>
            
            <span className={`px-3 py-1 rounded text-xs font-bold uppercase ${
              activeDistrict.gapIndex === 'High' ? 'bg-red-100 text-red-900 border border-red-300' :
              activeDistrict.gapIndex === 'Medium' ? 'bg-amber-100 text-amber-900 border border-amber-300' :
              'bg-emerald-100 text-emerald-900 border border-emerald-300'
            }`}>
              {activeDistrict.gapIndex} Skill Gap
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            {description}
          </p>

          {/* District Metrics Cards */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="text-slate-500 font-semibold block">{t.registeredCandidates}</span>
              <strong className="text-slate-900 text-base font-extrabold">{activeDistrict.candidateCount.toLocaleString()}</strong>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="text-slate-500 font-semibold block">{t.skillCenters}</span>
              <strong className="text-blue-900 text-base font-extrabold">{activeDistrict.skillCentersCount} Centers</strong>
            </div>
          </div>

          {/* Top Industries */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-blue-900" />
              <span>{t.topIndustries}</span>
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {activeDistrict.topIndustries.map((ind) => (
                <span key={ind} className="bg-blue-50 text-blue-950 font-bold text-xs px-2.5 py-1 rounded border border-blue-200">
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Key Skill Shortages */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>{t.keySkillShortages}</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-800">
              {activeDistrict.skillDemand.map((sd) => (
                <li key={sd} className="flex items-center space-x-2 bg-amber-50 p-2 rounded border border-amber-200 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0"></span>
                  <span>{sd}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <button
              onClick={() => onSelectDistrictFilter(activeDistrict.name)}
              className="w-full btn-gov-primary py-3 text-xs justify-center flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4 text-slate-950" />
              <span>View Jobs & Opportunities in {activeDistrict.name}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
