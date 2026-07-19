import { CheckCircle2, TrendingUp, Clock, FileText } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export const FinancialHealthGauge = () => {
  return (
    <div className="bg-[#13151A] rounded-xl border border-white/5 p-5 h-full flex flex-col items-center justify-center relative">
      <h3 className="text-white font-bold mb-4 absolute top-5 left-5">Financial Health</h3>
      
      <div className="relative w-36 h-36 mt-8">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={[{ value: 92 }, { value: 8 }]}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={65}
              startAngle={225}
              endAngle={-45}
              dataKey="value"
              stroke="none"
            >
              <Cell fill="#34D399" />
              <Cell fill="#1F2937" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-2">
          <span className="text-3xl font-bold text-white leading-none">92<span className="text-lg text-gray-500">/100</span></span>
          <span className="text-[11px] text-emerald-400 mt-1">Excellent</span>
        </div>
      </div>
    </div>
  );
};

export const TopRecommendationCard = () => (
  <div className="bg-[#13151A] rounded-xl border border-white/5 p-5 h-full flex flex-col">
    <h3 className="text-white font-bold mb-4">Top Recommendation</h3>
    <p className="text-sm text-gray-300 leading-relaxed flex-1">
      Delay tractor equipment purchase to maintain healthy liquidity ratio.
    </p>
    <div className="mt-4 pt-4 border-t border-white/5">
      <p className="text-[11px] text-gray-500 mb-1">Potential Savings</p>
      <p className="text-lg font-bold text-emerald-400">₹45,000</p>
    </div>
    <button className="w-full mt-4 bg-[#1a2332] text-blue-400 border border-[#2e4060] rounded-lg py-2 text-xs hover:bg-[#202b3d] transition-colors">
      View Details
    </button>
  </div>
);
