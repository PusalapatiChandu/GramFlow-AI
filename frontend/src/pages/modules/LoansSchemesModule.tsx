import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bell, Settings, Landmark, FileText, CheckCircle2, ChevronRight, Briefcase, Building, Coins } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { apiClient } from '../../services/api';

export const LoansSchemesModule = () => {
  const [activeTab, setActiveTab] = useState('Loan Eligibility');
  const tabs = ['Loan Eligibility', 'Schemes', 'Repayment'];

  const [schemesData, setSchemesData] = useState<any[]>([]);

  useEffect(() => {
    apiClient.get('/schemes')
      .then(res => setSchemesData(res.data))
      .catch(err => console.error("Error fetching schemes", err));
  }, []);

  const getIcon = (name: string) => {
    if (name.includes('MUDRA')) return <Briefcase size={20} className="text-blue-400"/>;
    if (name.includes('Dairy')) return <Building size={20} className="text-emerald-400"/>;
    return <Landmark size={20} className="text-amber-400"/>;
  };
  
  const getBg = (name: string) => {
    if (name.includes('MUDRA')) return 'bg-blue-500/10';
    if (name.includes('Dairy')) return 'bg-emerald-500/10';
    return 'bg-amber-500/10';
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto pb-10 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Loans & Schemes</h2>
          <p className="text-sm text-gray-400">Eligibility checks, credit scores, and recommended schemes</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 bg-[#13151A] border border-white/5 rounded-lg text-gray-400 hover:text-white transition-colors">
            <Bell size={18} />
          </button>
          <button className="p-2 bg-[#13151A] border border-white/5 rounded-lg text-gray-400 hover:text-white transition-colors">
            <Settings size={18} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6 border-b border-[#1F2937] mb-6 overflow-x-auto scrollbar-hide pb-1">
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-2 text-[13px] font-medium transition-colors relative whitespace-nowrap ${activeTab === tab ? 'text-emerald-400' : 'text-gray-400 hover:text-gray-200'}`}>
            {tab}
            {activeTab === tab && <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-emerald-400"></span>}
          </button>
        ))}
      </div>

      <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1">
        {activeTab === 'Loan Eligibility' && (
          <div className="flex flex-col gap-6">
            
            {/* Top Row: Eligibility & Credit Score */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Loan Eligibility */}
              <div className="bg-[#13151A] rounded-xl border border-white/5 p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-44 h-44 shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={[{ value: 91 }, { value: 9 }]} cx="50%" cy="50%" innerRadius={70} outerRadius={85} startAngle={225} endAngle={-45} dataKey="value" stroke="none">
                        <Cell fill="#34D399" />
                        <Cell fill="#1F2937" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center mt-2 pointer-events-none">
                    <span className="text-4xl font-bold text-white leading-none">91<span className="text-xl text-gray-500">%</span></span>
                    <span className="text-[11px] text-emerald-400 mt-2 font-bold text-center leading-tight">High Chance<br/>of Approval</span>
                  </div>
                </div>
                
                <div className="flex-1 w-full space-y-6">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-sm text-gray-400">Eligible Loan Amount</span>
                    <span className="text-xl font-bold text-white">₹4,50,000</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-sm text-gray-400">Recommended Scheme</span>
                    <span className="text-sm font-bold text-blue-400">Mudra Loan</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-sm text-gray-400">Interest Rate</span>
                    <span className="text-sm font-bold text-white">8.5%</span>
                  </div>
                  <button className="text-xs text-blue-400 hover:underline w-full text-right flex justify-end items-center gap-1">
                    Check Detailed Report <ChevronRight size={14} />
                  </button>
                </div>
              </div>

              {/* Credit Score */}
              <div className="bg-[#13151A] rounded-xl border border-white/5 p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-44 h-44 shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={[{ value: 782 }, { value: 118 }]} cx="50%" cy="50%" innerRadius={70} outerRadius={85} startAngle={180} endAngle={0} dataKey="value" stroke="none">
                        <Cell fill="#FBBF24" />
                        <Cell fill="#1F2937" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center -mt-8 pointer-events-none">
                    <span className="text-[10px] text-gray-500 mb-1">Your Credit Score</span>
                    <span className="text-4xl font-bold text-white leading-none">782<span className="text-xl text-gray-500">/900</span></span>
                    <span className="text-[12px] text-amber-400 mt-2 font-bold">Good</span>
                  </div>
                </div>
                
                <div className="flex-1 w-full space-y-6">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-sm text-gray-400">Repayment History</span>
                    <span className="text-sm font-bold text-emerald-400">Good</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-sm text-gray-400">Credit Utilization</span>
                    <span className="text-sm font-bold text-emerald-400">Low</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-sm text-gray-400">Financial Stability</span>
                    <span className="text-sm font-bold text-emerald-400">Good</span>
                  </div>
                  <button className="text-xs text-blue-400 hover:underline w-full text-right flex justify-end items-center gap-1">
                    View Full Report <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Top Schemes for You */}
            <div className="bg-[#13151A] rounded-xl border border-white/5 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-bold">Top Schemes for You</h3>
                <button className="text-[11px] text-blue-400 hover:underline">View All</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {schemesData.map((scheme, i) => (
                  <div key={i} className="bg-[#0b0e14] border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-3 hover:bg-white/5 transition-colors cursor-pointer">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getBg(scheme.name)}`}>
                      {getIcon(scheme.name)}
                    </div>
                    <span className="text-xs font-bold text-gray-300">{scheme.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </motion.div>
    </div>
  );
};
