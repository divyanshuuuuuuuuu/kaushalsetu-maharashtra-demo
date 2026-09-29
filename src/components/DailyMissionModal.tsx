import React, { useState } from 'react';
import type { DailyMission, Language } from '../types';
import { translations } from '../data/translations';
import { X, Trophy, Clock, CheckCircle, AlertCircle, Award, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DailyMissionModalProps {
  mission: DailyMission;
  currentLang: Language;
  onClose: () => void;
  onComplete: (xpGained: number) => void;
}

export const DailyMissionModal: React.FC<DailyMissionModalProps> = ({
  mission,
  currentLang,
  onClose,
  onComplete
}) => {
  const t = translations[currentLang];
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const questionText = currentLang === 'mr' ? mission.questionTextMr : currentLang === 'hi' ? mission.questionTextHi : mission.questionText;
  const explanation = currentLang === 'mr' ? mission.explanationMr : currentLang === 'hi' ? mission.explanationHi : mission.explanation;
  const missionTitle = currentLang === 'mr' ? mission.titleMr : currentLang === 'hi' ? mission.titleHi : mission.title;

  const handleSubmit = () => {
    if (!selectedOption) return;

    const correct = selectedOption === mission.correctAnswer;
    setIsCorrect(correct);
    setSubmitted(true);

    if (correct) {
      // Trigger canvas-confetti reward effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback silently if canvas unavailable
      }
      onComplete(mission.xpReward);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-300 w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b-4 border-amber-500">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                {t.todaysMissionTitle}
              </div>
              <h2 className="text-lg font-bold text-white">
                {missionTitle}
              </h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close challenge modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Task Context Strip */}
        <div className="bg-slate-100 px-6 py-2.5 border-b border-slate-200 flex flex-wrap justify-between items-center text-xs text-slate-700 font-medium">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1 text-slate-600">
              <Clock className="w-3.5 h-3.5 text-blue-900" />
              {t.estimatedTime} {mission.estimatedMinutes} mins
            </span>
            <span>•</span>
            <span className="text-blue-900 font-semibold">Skill: {mission.skillCategory}</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>{t.reward} +{mission.xpReward} XP</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* Question Box */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium text-sm leading-relaxed">
            {questionText}
          </div>

          {/* Simple Chart Data Visualizer if available */}
          {mission.chartData && (
            <div className="bg-slate-900 text-white p-4 rounded-lg border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Maharashtra Skill Telemetry Data Snippet
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {mission.chartData.map((d) => (
                  <div key={d.label} className="bg-slate-800 p-2.5 rounded text-center border border-slate-700">
                    <div className="text-[11px] text-slate-400">{d.label}</div>
                    <div className="text-base font-extrabold text-amber-400">{d.value.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Multiple Choice Options */}
          <div className="space-y-2.5">
            <label className="block text-xs font-bold uppercase text-slate-600 tracking-wider">
              Select correct answer option:
            </label>

            {mission.options.map((opt) => {
              const optionText = currentLang === 'mr' ? opt.textMr : currentLang === 'hi' ? opt.textHi : opt.text;
              const isSelected = selectedOption === opt.id;
              
              let optionStyle = 'border-slate-200 hover:border-blue-900 hover:bg-slate-50 text-slate-800';
              if (isSelected) {
                optionStyle = 'border-blue-900 bg-blue-50/80 text-blue-950 font-semibold shadow-sm';
              }

              if (submitted) {
                if (opt.id === mission.correctAnswer) {
                  optionStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold';
                } else if (isSelected && !isCorrect) {
                  optionStyle = 'border-red-500 bg-red-50 text-red-900';
                }
              }

              return (
                <button
                  key={opt.id}
                  disabled={submitted}
                  onClick={() => setSelectedOption(opt.id)}
                  className={`w-full text-left p-3.5 rounded-lg border-2 text-sm flex items-center justify-between transition-all ${optionStyle}`}
                >
                  <span>{optionText}</span>
                  {submitted && opt.id === mission.correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {submitted && isSelected && !isCorrect && (
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Submission Feedback Banner */}
          {submitted && (
            <div className={`p-4 rounded-lg border text-xs leading-relaxed ${
              isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-red-50 border-red-300 text-red-950'
            }`}>
              <div className="flex items-center gap-2 font-bold mb-1 text-sm">
                {isCorrect ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>{t.challengeCompleted}</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span>Incorrect Option Selected</span>
                  </>
                )}
              </div>
              <p className="mt-1">{explanation}</p>
              {isCorrect && (
                <div className="mt-2 text-emerald-800 font-bold flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>{t.xpUpdatedSuccess}</span>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex justify-between items-center">
          <button
            onClick={onClose}
            className="btn-gov-secondary text-xs"
          >
            Close
          </button>

          {!submitted ? (
            <button
              disabled={!selectedOption}
              onClick={handleSubmit}
              className={`btn-gov-primary text-xs flex items-center gap-1.5 ${
                !selectedOption ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <span>Submit Answer</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="btn-gov-primary text-xs flex items-center gap-1.5"
            >
              <span>Continue to Dashboard</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
