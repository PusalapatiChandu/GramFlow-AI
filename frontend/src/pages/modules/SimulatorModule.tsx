import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Settings, TrendingUp, AlertTriangle, CheckCircle2, Sparkles } from 'lucide-react';

export const SimulatorModule = () => {
  const [activeTab, setActiveTab] = useState('Scenario Simulator');
  const tabs = ['Scenario Simulator', 'Risk Heatmap', 'Projection'];

  const [sliders, setSliders] = useState({
    milk: 10,
    expense: -5,
    rainfall: -10,
    loan: 50000
  });

  return (
    <div className="w-full max-w-[1400px] mx-auto pb-10 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Future Simulator</h2>
          <p className="text-sm text-gray-400">Run what-if scenarios and predict future outcomes</p>
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
        {activeTab === 'Scenario Simulator' && (
          <div className="flex flex-col gap-6 max-w-4xl">
            
            {/* Set Your Scenario */}
            <div className="bg-[#13151A] rounded-xl border border-white/5 p-8">
              <h3 className="text-white font-bold mb-8">Set Your Scenario</h3>
              
              <div className="space-y-6 max-w-2xl">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-sm text-gray-300 w-40">Milk Price Change</span>
                  <input type="range" min="-50" max="50" value={sliders.milk} onChange={(e) => setSliders({...sliders, milk: parseInt(e.target.value)})} className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                  <span className="text-sm font-bold text-white w-16 text-right">{sliders.milk > 0 ? '+' : ''}{sliders.milk}%</span>
                </div>
                
                <div className="flex items-center justify-between gap-6">
                  <span className="text-sm text-gray-300 w-40">Expense Change</span>
                  <input type="range" min="-50" max="50" value={sliders.expense} onChange={(e) => setSliders({...sliders, expense: parseInt(e.target.value)})} className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                  <span className="text-sm font-bold text-white w-16 text-right">{sliders.expense > 0 ? '+' : ''}{sliders.expense}%</span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <span className="text-sm text-gray-300 w-40">Rainfall Change</span>
                  <input type="range" min="-50" max="50" value={sliders.rainfall} onChange={(e) => setSliders({...sliders, rainfall: parseInt(e.target.value)})} className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                  <span className="text-sm font-bold text-white w-16 text-right">{sliders.rainfall > 0 ? '+' : ''}{sliders.rainfall}%</span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <span className="text-sm text-gray-300 w-40">Loan Amount</span>
                  <input type="range" min="0" max="500000" step="10000" value={sliders.loan} onChange={(e) => setSliders({...sliders, loan: parseInt(e.target.value)})} className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                  <span className="text-sm font-bold text-white w-16 text-right">₹{sliders.loan.toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full max-w-2xl mt-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors">
                Run Simulation
              </button>
            </div>

            {/* Simulation Results */}
            <div className="bg-[#13151A] rounded-xl border border-white/5 p-8">
              <h3 className="text-white font-bold mb-6">Simulation Results <span className="text-xs font-normal text-gray-500">(Next 3 Months)</span></h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center p-4 border border-white/5 rounded-xl bg-[#0b0e14]">
                  <p className="text-[11px] text-gray-400 mb-2">Expected Profit</p>
                  <p className="text-xl font-bold text-white mb-2">₹82,000</p>
                  <p className="text-[10px] text-emerald-400 flex items-center gap-1"><TrendingUp size={12}/> 12%</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 border border-white/5 rounded-xl bg-[#0b0e14]">
                  <p className="text-[11px] text-gray-400 mb-2">Cash Flow</p>
                  <p className="text-xl font-bold text-white mb-2">₹25,300</p>
                  <p className="text-[10px] text-emerald-400">Positive</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 border border-white/5 rounded-xl bg-[#0b0e14]">
                  <p className="text-[11px] text-gray-400 mb-2">Risk Level</p>
                  <p className="text-xl font-bold text-amber-400 mb-2">Medium</p>
                  <p className="text-[10px] text-gray-500 flex items-center gap-1"><AlertTriangle size={12}/> Manageable</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 border border-white/5 rounded-xl bg-[#0b0e14]">
                  <p className="text-[11px] text-gray-400 mb-2">Loan Repayment</p>
                  <p className="text-xl font-bold text-emerald-400 mb-2">On Track</p>
                  <p className="text-[10px] text-gray-500 flex items-center gap-1"><CheckCircle2 size={12}/> Good</p>
                </div>
              </div>
            </div>

            {/* AI Suggestion */}
            <div className="bg-[#13151A] border border-emerald-500/20 rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                <Sparkles size={20} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1 flex items-center gap-2">AI Suggestion</p>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Under this scenario, your business will perform better.<br/>
                  Consider increasing milk production to maximize the 10% price hike.
                </p>
              </div>
            </div>

          </div>
        )}
      </motion.div>
    </div>
  );
};
