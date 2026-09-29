import React, { useState } from 'react';
import type { Language, SkillGapResult } from '../types';
import { translations } from '../data/translations';
import { MAHARASHTRA_DISTRICTS } from '../data/maharashtraData';
import { 
  FileCheck2, 
  CheckCircle2, 
  AlertTriangle, 
  Printer, 
  ShieldCheck
} from 'lucide-react';

interface SkillExplorerViewProps {
  currentLang: Language;
}

export const SkillExplorerView: React.FC<SkillExplorerViewProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const targetRoles = [
    {
      id: 'role-data',
      title: 'Data Analyst & Industrial Operations',
      requiredSkills: ['Excel Fundamentals', 'SQL & Databases', 'Power BI Visuals', 'Statistical Interpretation', 'Python Basics']
    },
    {
      id: 'role-ev',
      title: 'Electric Vehicle Powertrain Technician',
      requiredSkills: ['High Voltage Electrical Safety', 'Li-Ion Battery Management', 'BMS Diagnostics', 'CAN Bus Telemetry', 'OBD Calibration']
    },
    {
      id: 'role-cnc',
      title: 'Industrial Robotics & CNC Specialist',
      requiredSkills: ['CNC G-Code Programming', 'PLC Automation', 'Precision Metallurgy', 'Robot Arm Kinematics', 'Quality Audit']
    },
    {
      id: 'role-solar',
      title: 'Renewable Solar & Smart Grid Technician',
      requiredSkills: ['Solar Rooftop Installation', 'Smart Grid Metering', 'Inverter Maintenance', 'Electrical Safety', 'Quality Audit']
    }
  ];

  const [selectedRoleTitle, setSelectedRoleTitle] = useState(targetRoles[0].title);
  const [selectedDistrict, setSelectedDistrict] = useState('Pune');
  const [candidateSkills, setCandidateSkills] = useState<string[]>([
    'Excel Fundamentals',
    'SQL & Databases'
  ]);

  const [assessmentResult, setAssessmentResult] = useState<SkillGapResult | null>(null);

  const currentRole = targetRoles.find(r => r.title === selectedRoleTitle) || targetRoles[0];

  const toggleSkill = (skill: string) => {
    if (candidateSkills.includes(skill)) {
      setCandidateSkills(candidateSkills.filter(s => s !== skill));
    } else {
      setCandidateSkills([...candidateSkills, skill]);
    }
  };

  const handleRunDiagnostic = () => {
    const required = currentRole.requiredSkills;
    const matched = candidateSkills.filter(s => required.includes(s));
    const missing = required.filter(s => !candidateSkills.includes(s));
    const score = Math.round((matched.length / required.length) * 100);

    const gapLevel = score >= 80 ? 'Low' : score >= 50 ? 'Medium' : 'High';

    const result: SkillGapResult = {
      assessmentId: `MH-SKILL-${Math.floor(100000 + Math.random() * 900000)}`,
      candidateName: 'Rajesh Kumar Patil',
      date: '29 SEP 2026',
      district: selectedDistrict,
      targetRole: currentRole.title,
      currentSkills: matched,
      requiredSkills: required,
      missingSkills: missing,
      readinessScore: score,
      recommendedAction: missing.length > 0
        ? `Complete recommended module: '${missing[0]}' to increase readiness score above 85% for ${selectedDistrict} hiring hubs.`
        : 'Candidate meets all benchmark requirements for direct industry interview matching!',
      gapLevel
    };

    setAssessmentResult(result);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="gov-container px-4 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-4">
        <div className="inline-block bg-blue-100 text-blue-900 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          State Skill Telemetry & Gap Analysis
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          {t.assessmentTitle}
        </h1>
        <p className="text-sm text-slate-600">
          Benchmark your candidate readiness against real-time MIDC industry requirements across 36 Maharashtra districts.
        </p>
      </div>

      {/* Main Diagnostic Form & Output Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form Panel */}
        <div className="lg:col-span-6 gov-card p-6 space-y-6">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
            <FileCheck2 className="w-5 h-5 text-blue-900" />
            <span>1. Enter Candidate Assessment Parameters</span>
          </h2>

          {/* Role Selection */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              {t.targetRoleLabel}
            </label>
            <select
              value={selectedRoleTitle}
              onChange={(e) => {
                setSelectedRoleTitle(e.target.value);
                setAssessmentResult(null);
              }}
              className="w-full p-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-900 bg-white focus:ring-2 focus:ring-blue-900 focus:outline-none"
            >
              {targetRoles.map((r) => (
                <option key={r.id} value={r.title}>{r.title}</option>
              ))}
            </select>
          </div>

          {/* District Selection */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              {t.districtLabel}
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-900 bg-white focus:ring-2 focus:ring-blue-900 focus:outline-none"
            >
              {MAHARASHTRA_DISTRICTS.map((d) => (
                <option key={d.id} value={d.name}>{d.name} ({d.division})</option>
              ))}
            </select>
          </div>

          {/* Current Skills Checkboxes */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              {t.currentSkillsLabel}
            </label>
            <div className="space-y-2 border border-slate-200 rounded-lg p-3 bg-slate-50 max-h-56 overflow-y-auto">
              {currentRole.requiredSkills.map((skill) => {
                const checked = candidateSkills.includes(skill);
                return (
                  <label 
                    key={skill}
                    className="flex items-center space-x-3 text-xs font-semibold text-slate-800 p-2 rounded hover:bg-white cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleSkill(skill)}
                      className="w-4 h-4 text-blue-900 rounded border-slate-300 focus:ring-blue-900"
                    />
                    <span>{skill}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleRunDiagnostic}
            className="w-full btn-gov-primary py-3 text-sm justify-center flex items-center gap-2 shadow-md"
          >
            <FileCheck2 className="w-5 h-5 text-slate-950" />
            <span>{t.btnRunDiagnostic}</span>
          </button>
        </div>

        {/* Right Official Assessment Output Report */}
        <div className="lg:col-span-6">
          {assessmentResult ? (
            <div className="gov-card p-6 bg-white border-2 border-slate-800 space-y-6 shadow-xl relative print:border-none print:shadow-none">
              
              {/* Certificate Header Banner */}
              <div className="border-b-2 border-slate-900 pb-4 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Government Diagnostic Record</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                    Skill Gap Assessment Report
                  </h3>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {t.officialAssessmentId} <strong className="text-slate-900 font-mono">{assessmentResult.assessmentId}</strong>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded text-xs font-black uppercase ${
                    assessmentResult.gapLevel === 'Low' ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' :
                    assessmentResult.gapLevel === 'Medium' ? 'bg-amber-100 text-amber-900 border border-amber-300' :
                    'bg-red-100 text-red-900 border border-red-300'
                  }`}>
                    {assessmentResult.gapLevel} Skill Gap Severity
                  </span>
                  <div className="text-[10px] text-slate-500 mt-1">Date: {assessmentResult.date}</div>
                </div>
              </div>

              {/* Assessment Telemetry Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div>
                  <span className="text-slate-500 font-medium block">Candidate Name</span>
                  <strong className="text-slate-900 text-sm">{assessmentResult.candidateName}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-medium block">District / Hub</span>
                  <strong className="text-slate-900 text-sm">{assessmentResult.district}</strong>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-200">
                  <span className="text-slate-500 font-medium block">Target Job Role</span>
                  <strong className="text-blue-950 text-sm">{assessmentResult.targetRole}</strong>
                </div>
              </div>

              {/* Readiness Score Gauge */}
              <div className="space-y-2 text-center p-4 bg-slate-900 text-white rounded-lg border border-slate-800">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {t.readinessScore}
                </div>
                <div className="text-4xl font-black text-amber-400">
                  {assessmentResult.readinessScore}%
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden border border-slate-700">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${assessmentResult.readinessScore}%` }}
                  ></div>
                </div>
              </div>

              {/* Identified Skill Gaps */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>{t.missingSkills}</span>
                </h4>
                {assessmentResult.missingSkills.length > 0 ? (
                  <ul className="space-y-1.5 text-xs">
                    {assessmentResult.missingSkills.map((sk) => (
                      <li key={sk} className="flex items-center space-x-2 text-red-900 bg-red-50 p-2 rounded border border-red-200 font-medium">
                        <span className="w-2 h-2 rounded-full bg-red-600 shrink-0"></span>
                        <span>{sk}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-xs text-emerald-800 bg-emerald-50 p-3 rounded border border-emerald-200 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>No critical skill gaps found! Candidate is ready for deployment.</span>
                  </div>
                )}
              </div>

              {/* Action Plan */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3.5 text-xs text-blue-950 space-y-1">
                <span className="font-bold text-blue-900 block">{t.recommendedAction}</span>
                <p className="text-blue-900/90 leading-relaxed">{assessmentResult.recommendedAction}</p>
              </div>

              {/* Export / Print Certificate CTA */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handlePrint}
                  className="btn-gov-secondary text-xs flex items-center gap-2"
                >
                  <Printer className="w-4 h-4 text-slate-700" />
                  <span>{t.btnDownloadReport}</span>
                </button>
              </div>

            </div>
          ) : (
            <div className="gov-card p-12 text-center text-slate-500 space-y-3">
              <FileCheck2 className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-700">No Assessment Generated Yet</h3>
              <p className="text-xs max-w-sm mx-auto">
                Select your target job role and district parameters on the left to calculate your candidate readiness index.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
