import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bell, Settings, AlertTriangle, ShieldAlert, Sparkles, MessageSquare, TrendingDown, ArrowRight } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { apiClient } from '../../services/api';

export const AiIntelligenceModule = () => {
  const [activeTab, setActiveTab] = useState('Risk Analysis');
  const tabs = ['Risk Analysis', 'AI Chat', 'Recommendations', 'Explainable AI'];

  const [riskData, setRiskData] = useState<any>(null);

  useEffect(() => {
    apiClient.get('/enterprises/1/risk')
      .then(res => setRiskData(res.data))
      .catch(err => console.error(err));
  }, []);

  const shapData = riskData?.shap_explanations?.map((s: any) => ({
    name: s.feature.replace('_', ' ').toUpperCase(),
    value: parseFloat(s.impact)
  })) || [
    { name: 'Expenses Increase', value: 0.28 },
    { name: 'Loan Repayment Delay', value: 0.19 },
    { name: 'Milk Price Drop', value: 0.15 },
  ];

  const score = riskData?.risk_score || 85.5;
  const level = riskData?.risk_level || "High";
  const recommendation = riskData?.recommendation || "Delay tractor equipment purchase to maintain healthy liquidity ratio.";


  return (
    <div className="w-full max-w-[1400px] mx-auto pb-10 flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">AI Advisor</h2>
          <p className="text-sm text-gray-400">Deep AI analysis, risk predictions, and explainable models</p>
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

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1F2937] mb-6 overflow-x-auto scrollbar-hide pb-1">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-[13px] font-medium transition-colors relative whitespace-nowrap ${
              activeTab === tab ? 'text-emerald-400' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-emerald-400"></span>
            )}
          </button>
        ))}
      </div>

      <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1">
        {activeTab === 'Risk Analysis' && (
          <div className="flex flex-col gap-6">
            
            {/* Top Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Overall Risk Score */}
              <div className="bg-[#13151A] rounded-xl border border-white/5 p-6 h-full flex flex-col items-center justify-center relative">
                <div className="w-full flex justify-between items-center mb-4 absolute top-6 left-6 right-6 px-6">
                  <h3 className="text-white font-bold flex items-center gap-2"><ShieldAlert size={16} className="text-emerald-400"/> Overall Risk Score</h3>
                </div>
                <div className="relative w-48 h-48 mt-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={[{ value: score }, { value: 100 - score }]} cx="50%" cy="50%" innerRadius={70} outerRadius={85} startAngle={225} endAngle={-45} dataKey="value" stroke="none">
                        <Cell fill={score > 50 ? "#EF4444" : "#34D399"} />
                        <Cell fill="#1F2937" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-2">
                    <span className="text-4xl font-bold text-white leading-none">{score}<span className="text-xl text-gray-500">/100</span></span>
                    <span className={`text-xs mt-2 font-bold ${score > 50 ? 'text-red-400' : 'text-emerald-400'}`}>{level} Risk</span>
                  </div>
                </div>
              </div>

              {/* Risk Factors */}
              <div className="bg-[#13151A] rounded-xl border border-white/5 p-6 h-full flex flex-col">
                <h3 className="text-white font-bold mb-6">Risk Factors</h3>
                <ul className="space-y-5 flex-1">
                  {riskData?.shap_explanations?.map((s: any, i: number) => (
                    <li key={i} className="flex gap-3 items-center">
                      {parseFloat(s.impact) > 0 ? (
                        <TrendingDown className="text-red-400 shrink-0 bg-red-500/10 p-1.5 rounded-lg" size={24} />
                      ) : (
                        <Sparkles className="text-emerald-400 shrink-0 bg-emerald-500/10 p-1.5 rounded-lg" size={24} />
                      )}
                      <p className="text-sm text-gray-200">{s.description}</p>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-4 bg-[#1a2332] text-blue-400 border border-[#2e4060] rounded-lg py-2 text-xs hover:bg-[#202b3d] transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Middle Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* AI Recommendation */}
              <div className="bg-[#13151A] border border-emerald-500/20 rounded-xl p-6 flex items-center justify-between relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                <div className="flex-1 pr-6">
                  <h3 className="text-white font-bold flex items-center gap-2 mb-3"><Sparkles size={16} className="text-emerald-400"/> AI Recommendation</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {recommendation}
                  </p>
                </div>
                <div className="flex flex-col items-end pl-6 border-l border-white/5">
                  <p className="text-[10px] text-gray-500 mb-1 uppercase tracking-wider">Potential Savings</p>
                  <p className="text-2xl font-bold text-emerald-400 mb-2">₹45,000</p>
                  <button className="text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-1 rounded">High Priority</button>
                </div>
              </div>

              {/* Prediction & AI Chat block */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#13151A] rounded-xl border border-white/5 p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[12px] text-gray-400 mb-3">Prediction (Next 30 Days)</h4>
                    <p className="text-[10px] text-gray-500 mb-1">Expected Cash Flow</p>
                    <div className="flex items-center gap-2">
                      <TrendingDown size={14} className="text-red-400" />
                      <span className="text-xl font-bold text-white">- ₹18,500</span>
                      <span className="text-[9px] bg-red-500/10 text-red-400 border border-red-500/20 px-1.5 py-0.5 rounded ml-auto">Negative</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                    <span className="text-[10px] text-gray-500">Confidence Level</span>
                    <span className="text-sm font-bold text-emerald-400">94%</span>
                  </div>
                </div>

                <div className="bg-[#13151A] rounded-xl border border-white/5 p-5 flex flex-col justify-between items-center text-center">
                  <div>
                    <h4 className="text-[12px] text-white font-bold mb-2">AI Chat Assistant</h4>
                    <p className="text-[11px] text-gray-400 leading-tight">Ask me anything about your business...</p>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2.5 text-xs flex items-center justify-center gap-2 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                    <MessageSquare size={14} /> Start Chat
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row (Explainable AI Chart) */}
            <div className="bg-[#13151A] rounded-xl border border-white/5 p-6 h-72 flex flex-col">
              <h3 className="text-white font-bold flex items-center gap-2 mb-6">
                Explainable AI <span className="text-gray-500 font-normal text-xs">(Top Risk Contributors)</span>
              </h3>
              <div className="flex-1 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={shapData} layout="vertical" margin={{ top: 0, right: 30, left: 100, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" horizontal={false} />
                    <XAxis type="number" stroke="#718096" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis dataKey="name" type="category" stroke="#E2E8F0" fontSize={11} tickLine={false} axisLine={false} width={150} />
                    <Tooltip contentStyle={{ backgroundColor: '#0b0e14', borderColor: '#2D3748', fontSize: '12px' }} />
                    <Bar dataKey="value" barSize={10} radius={[0, 4, 4, 0]}>
                      {shapData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.value > 0 ? '#EF4444' : '#34D399'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        )}
      </motion.div>
    </div>
  );
};
