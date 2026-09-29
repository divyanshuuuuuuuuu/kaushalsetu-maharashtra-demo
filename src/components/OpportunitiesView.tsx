import React, { useState } from 'react';
import type { Opportunity, Language } from '../types';
import { translations } from '../data/translations';
import { SAMPLE_OPPORTUNITIES, MAHARASHTRA_DISTRICTS } from '../data/maharashtraData';
import { Search, MapPin, CheckCircle2, ShieldCheck, Filter } from 'lucide-react';

interface OpportunitiesViewProps {
  currentLang: Language;
  initialDistrictFilter?: string;
}

export const OpportunitiesView: React.FC<OpportunitiesViewProps> = ({
  currentLang,
  initialDistrictFilter = ''
}) => {
  const t = translations[currentLang];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState(initialDistrictFilter);
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);
  const [applyModalOpp, setApplyModalOpp] = useState<Opportunity | null>(null);

  const filteredOpportunities = SAMPLE_OPPORTUNITIES.filter((opp) => {
    const matchesSearch = 
      opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.skillsRequired.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDistrict = !selectedDistrict || opp.district.toLowerCase().includes(selectedDistrict.toLowerCase());

    return matchesSearch && matchesDistrict;
  });

  const handleApply = (opp: Opportunity) => {
    setApplyModalOpp(opp);
  };

  const confirmApply = () => {
    if (applyModalOpp) {
      setAppliedJobs([...appliedJobs, applyModalOpp.id]);
      setApplyModalOpp(null);
    }
  };

  return (
    <div className="gov-container px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="inline-block bg-blue-100 text-blue-900 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          Verified Industry Opportunity Portal
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          {t.oppTitle}
        </h1>
        <p className="text-sm text-slate-600">
          Connecting verified candidates directly with Tata AutoComp, Mahindra Mobility, State Bank Digital, and MIDC manufacturing partners.
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="gov-card p-4 flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-50">
        
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:outline-none bg-white font-medium text-slate-900"
          />
        </div>

        {/* District Selector & Reset */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center space-x-2 text-xs">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <span className="font-semibold text-slate-700">District:</span>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="p-2 text-xs rounded-lg border border-slate-300 bg-white font-semibold text-slate-900 focus:outline-none"
            >
              <option value="">All Maharashtra Districts</option>
              {MAHARASHTRA_DISTRICTS.map((d) => (
                <option key={d.id} value={d.name}>{d.name}</option>
              ))}
            </select>
          </div>

          {(searchTerm || selectedDistrict) && (
            <button
              onClick={() => { setSearchTerm(''); setSelectedDistrict(''); }}
              className="text-xs text-blue-900 font-bold hover:underline"
            >
              {t.btnResetFilters}
            </button>
          )}
        </div>
      </div>

      {/* Desktop View: Full-width Professional Government Table */}
      <div className="hidden lg:block gov-card overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-900 text-white font-bold uppercase tracking-wider">
              <th className="p-3.5 border-b border-slate-800">{t.colJobRole}</th>
              <th className="p-3.5 border-b border-slate-800">{t.colCompany}</th>
              <th className="p-3.5 border-b border-slate-800">{t.colDistrict}</th>
              <th className="p-3.5 border-b border-slate-800">{t.colSkills}</th>
              <th className="p-3.5 border-b border-slate-800">{t.colMatch}</th>
              <th className="p-3.5 border-b border-slate-800">{t.colStatus}</th>
              <th className="p-3.5 border-b border-slate-800 text-right">{t.colAction}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-800 font-medium">
            {filteredOpportunities.length > 0 ? (
              filteredOpportunities.map((opp) => {
                const isApplied = appliedJobs.includes(opp.id);
                return (
                  <tr key={opp.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5">
                      <div className="font-bold text-slate-900 text-sm">{opp.title}</div>
                      <div className="text-[10px] text-slate-500 font-semibold">{opp.salary} • {opp.type}</div>
                    </td>
                    <td className="p-3.5 font-bold text-slate-900">{opp.company}</td>
                    <td className="p-3.5">
                      <span className="flex items-center gap-1 text-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {opp.district}
                      </span>
                    </td>
                    <td className="p-3.5">
                      <div className="flex flex-wrap gap-1">
                        {opp.skillsRequired.map((sk) => (
                          <span key={sk} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] border border-slate-200">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-3.5">
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                        {opp.matchPercentage}% Match
                      </span>
                    </td>
                    <td className="p-3.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                        opp.demandStatus === 'Critical Shortage' ? 'bg-red-100 text-red-900' :
                        opp.demandStatus === 'High Demand' ? 'bg-amber-100 text-amber-900' :
                        'bg-blue-100 text-blue-900'
                      }`}>
                        {opp.demandStatus}
                      </span>
                    </td>
                    <td className="p-3.5 text-right">
                      {isApplied ? (
                        <span className="text-emerald-700 font-bold text-xs flex items-center justify-end gap-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          Applied
                        </span>
                      ) : (
                        <button
                          onClick={() => handleApply(opp)}
                          className="btn-gov-primary text-xs py-1.5 px-3"
                        >
                          {t.btnApplyNow}
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="p-8 text-center text-slate-500 font-medium">
                  No opportunities match your filter criteria. Try expanding search or resetting filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile / Tablet View: Stacked Cards */}
      <div className="block lg:hidden space-y-4">
        {filteredOpportunities.length > 0 ? (
          filteredOpportunities.map((opp) => {
            const isApplied = appliedJobs.includes(opp.id);
            return (
              <div key={opp.id} className="gov-card p-5 space-y-3 bg-white border border-slate-300">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                      {opp.type}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-1">{opp.title}</h3>
                    <p className="text-xs text-slate-600 font-semibold">{opp.company}</p>
                  </div>
                  <span className="font-bold text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                    {opp.matchPercentage}% Match
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-2.5 rounded border border-slate-200 text-slate-700">
                  <div>
                    <span className="text-slate-500 block text-[10px]">DISTRICT</span>
                    <strong className="text-slate-900">{opp.district}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">REMUNERATION</span>
                    <strong className="text-slate-900">{opp.salary}</strong>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">REQUIRED SKILLS</span>
                  <div className="flex flex-wrap gap-1">
                    {opp.skillsRequired.map((sk) => (
                      <span key={sk} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] border border-slate-200">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                    opp.demandStatus === 'Critical Shortage' ? 'bg-red-100 text-red-900' :
                    opp.demandStatus === 'High Demand' ? 'bg-amber-100 text-amber-900' :
                    'bg-blue-100 text-blue-900'
                  }`}>
                    {opp.demandStatus}
                  </span>

                  {isApplied ? (
                    <span className="text-emerald-700 font-bold text-xs flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Applied
                    </span>
                  ) : (
                    <button
                      onClick={() => handleApply(opp)}
                      className="btn-gov-primary text-xs py-1.5 px-4"
                    >
                      {t.btnApplyNow}
                    </button>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="gov-card p-8 text-center text-slate-500 text-xs">
            No opportunities match your filter criteria.
          </div>
        )}
      </div>

      {/* Application Confirmation Modal */}
      {applyModalOpp && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-300 w-full max-w-md overflow-hidden p-6 space-y-4">
            <div className="flex items-center space-x-2 text-blue-900 border-b border-slate-200 pb-3">
              <ShieldCheck className="w-6 h-6 text-amber-600" />
              <h3 className="text-lg font-bold text-slate-900">Confirm Application</h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              You are submitting your verified KaushalSetu Maharashtra skill telemetry profile to:
            </p>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs space-y-1">
              <div className="font-bold text-slate-900 text-sm">{applyModalOpp.title}</div>
              <div>Company: <strong className="text-slate-800">{applyModalOpp.company}</strong></div>
              <div>District: <strong className="text-slate-800">{applyModalOpp.district}</strong></div>
              <div>Candidate Readiness: <strong className="text-emerald-700">{applyModalOpp.matchPercentage}% Verified Match</strong></div>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                onClick={() => setApplyModalOpp(null)}
                className="btn-gov-secondary text-xs"
              >
                Cancel
              </button>
              <button
                onClick={confirmApply}
                className="btn-gov-primary text-xs"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
