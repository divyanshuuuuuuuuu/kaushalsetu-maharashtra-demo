import React, { useState } from 'react';
import type { Language, CareerPathway } from '../types';
import { translations } from '../data/translations';
import { 
  CheckCircle2, 
  Lock, 
  PlayCircle, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface CareerQuestViewProps {
  pathways: CareerPathway[];
  currentLang: Language;
}

export const CareerQuestView: React.FC<CareerQuestViewProps> = ({ pathways, currentLang }) => {
  const t = translations[currentLang];
  const [selectedPathwayId, setSelectedPathwayId] = useState(pathways[0].id);

  const activePathway = pathways.find(p => p.id === selectedPathwayId) || pathways[0];
  const [selectedStageId, setSelectedStageId] = useState(activePathway.stages[2].id); // default stage 3

  const currentStage = activePathway.stages.find(s => s.id === selectedStageId) || activePathway.stages[0];

  return (
    <div className="gov-container px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-block bg-blue-100 text-blue-900 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            Professional Skill Milestones
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            {t.careerQuestTitle}
          </h1>
          <p className="text-sm text-slate-600">
            Structured competency roadmaps aligned with Maharashtra industrial clusters.
          </p>
        </div>

        {/* Track Selector Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1">
          {pathways.map((path) => (
            <button
              key={path.id}
              onClick={() => {
                setSelectedPathwayId(path.id);
                setSelectedStageId(path.stages[0].id);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedPathwayId === path.id
                  ? 'bg-blue-900 text-amber-400 shadow-md'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {path.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Roadmap Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Interactive Horizontal/Vertical Milestone Pathway */}
        <div className="lg:col-span-7 gov-card p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Pathway Milestones & Progression
              </h2>
              <span className="text-xs text-slate-500">{activePathway.description}</span>
            </div>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
              {activePathway.category}
            </span>
          </div>

          {/* Connected Stage Nodes */}
          <div className="space-y-6 relative before:absolute before:left-5 before:top-4 before:bottom-4 before:w-1 before:bg-slate-200">
            {activePathway.stages.map((stage, idx) => {
              const isCompleted = stage.status === 'completed';
              const isInProgress = stage.status === 'in-progress';
              const isSelected = selectedStageId === stage.id;

              return (
                <div 
                  key={stage.id} 
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`relative flex items-start space-x-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    isSelected ? 'border-blue-900 bg-blue-50/50 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  {/* Stage Node Icon */}
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10 font-bold border-2 transition-transform ${
                    isSelected ? 'scale-110' : ''
                  } ${
                    isCompleted ? 'bg-emerald-600 text-white border-emerald-600' :
                    isInProgress ? 'bg-amber-500 text-slate-950 border-amber-600 animate-pulse' :
                    'bg-slate-200 text-slate-500 border-slate-300'
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> :
                     isInProgress ? <PlayCircle className="w-5 h-5 text-slate-950" /> :
                     <Lock className="w-4 h-4" />}
                  </div>

                  {/* Stage Summary */}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                        STAGE 0{idx + 1}
                      </span>
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                        isCompleted ? 'bg-emerald-100 text-emerald-900' :
                        isInProgress ? 'bg-amber-100 text-amber-900' :
                        'bg-slate-100 text-slate-500'
                      }`}>
                        {stage.status}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900">
                      {stage.title}
                    </h3>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {stage.skills.map((sk) => (
                        <span key={sk} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ChevronRight className="w-5 h-5 text-slate-400 shrink-0 self-center" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Selected Stage Details & Module Action */}
        <div className="lg:col-span-5 gov-card p-6 space-y-6 bg-white border-t-4 border-amber-500">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
              Stage Deep Dive
            </span>
            <h2 className="text-lg font-bold text-slate-900 mt-1">
              {currentStage.title}
            </h2>
            <div className="flex items-center space-x-2 mt-1 text-xs text-slate-500">
              <span>Status: <strong className="text-slate-800 uppercase">{currentStage.status}</strong></span>
              <span>•</span>
              <span>Reward: <strong className="text-emerald-700 font-bold">+{currentStage.xpRequired} XP</strong></span>
            </div>
          </div>

          <div className="space-y-4 text-xs text-slate-700">
            <div>
              <span className="font-bold text-slate-900 block mb-1">Module Overview:</span>
              <p className="leading-relaxed text-slate-600">{currentStage.description}</p>
            </div>

            <div>
              <span className="font-bold text-slate-900 block mb-2">Competencies Evaluated:</span>
              <div className="space-y-2">
                {currentStage.skills.map((sk) => (
                  <div key={sk} className="flex items-center justify-between bg-slate-50 p-2.5 rounded border border-slate-200 font-semibold">
                    <span>{sk}</span>
                    <span className="text-[10px] bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                      Verified Skill
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage CTA Button */}
            <div className="pt-4">
              {currentStage.status === 'completed' ? (
                <div className="bg-emerald-50 text-emerald-900 p-3 rounded-lg border border-emerald-200 text-center font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Stage Verified & Completed</span>
                </div>
              ) : currentStage.status === 'in-progress' ? (
                <button className="w-full btn-gov-primary py-3 text-xs justify-center flex items-center gap-2">
                  <span>Continue Stage Exercises</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              ) : (
                <button disabled className="w-full bg-slate-200 text-slate-500 py-3 rounded-lg text-xs font-bold cursor-not-allowed text-center">
                  🔒 Locked — Complete previous stage to unlock
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
