import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Info, Sparkles } from 'lucide-react';

const data = [
  { date: 'Dec 2025', income: 60, expense: 30, net: 15 },
  { date: 'Jan 2026', income: 75, expense: 40, net: 25 },
  { date: 'Feb 2026', income: 85, expense: 45, net: 30 },
  { date: 'Mar 2026', income: 80, expense: 42, net: 28 },
  { date: 'Apr 2026', income: 90, expense: 48, net: 35 },
  { date: 'May 2026', income: 85, expense: 45, net: 30, predicted: 30 },
  { date: 'Jun 2026', predicted: 40 },
  { date: 'Jul 2026', predicted: 45 },
  { date: 'Aug 2026', predicted: 42 },
  { date: 'Sep 2026', predicted: 48 },
  { date: 'Oct 2026', predicted: 50 },
];

export const AdvancedCashFlowChart = () => {
  return (
    <div className="bg-[#13151A] rounded-xl border border-white/5 flex flex-col h-full overflow-hidden">
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white font-bold flex items-center gap-2">
            Cash Flow Overview <Info size={14} className="text-gray-500" />
          </h3>
          <select className="bg-[#0b0e14] border border-white/10 text-xs text-gray-300 rounded px-3 py-1.5 outline-none">
            <option>Monthly</option>
          </select>
        </div>

        <div className="flex items-center gap-6 text-[11px] mb-4 pl-8">
          <div className="flex items-center gap-1.5"><span className="w-3 h-1 bg-emerald-400 rounded"></span> <span className="text-gray-300">Income</span></div>
          <div className="flex items-center gap-1.5"><span className="w-3 h-1 bg-red-400 rounded"></span> <span className="text-gray-300">Expense</span></div>
          <div className="flex items-center gap-1.5"><span className="w-3 h-1 bg-blue-400 rounded"></span> <span className="text-gray-300">Net Cash Flow</span></div>
          <div className="flex items-center gap-1.5"><span className="w-3 h-1 border-t-2 border-dashed border-purple-400"></span> <span className="text-gray-300">Predicted Net Cash Flow</span></div>
        </div>

        <div className="flex-1 min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" vertical={false} />
              <XAxis dataKey="date" stroke="#718096" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#718096" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}K`} />
              <Tooltip contentStyle={{ backgroundColor: '#0b0e14', borderColor: '#2D3748', fontSize: '12px' }} />
              
              <Line type="monotone" dataKey="income" stroke="#34D399" strokeWidth={2} dot={{ r: 3, fill: '#34D399' }} connectNulls />
              <Line type="monotone" dataKey="expense" stroke="#F87171" strokeWidth={2} dot={{ r: 3, fill: '#F87171' }} connectNulls />
              <Line type="monotone" dataKey="net" stroke="#60A5FA" strokeWidth={2} dot={{ r: 3, fill: '#60A5FA' }} connectNulls />
              <Line type="monotone" dataKey="predicted" stroke="#A78BFA" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 3, fill: '#A78BFA' }} connectNulls />
              
              <ReferenceLine x="May 2026" stroke="#4B5563" strokeDasharray="3 3" label={{ position: 'top', value: 'Actual     Predicted', fill: '#718096', fontSize: 10 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Embedded AI Insight */}
      <div className="border-t border-white/5 bg-[#0b0e14]/50 p-3 flex items-start gap-2">
        <Sparkles size={16} className="text-amber-400 mt-0.5 shrink-0" />
        <p className="text-[11px] text-gray-300">
          <span className="text-amber-400 font-bold">AI Insight:</span> Cash flow is expected to remain positive for next 6 months with an average monthly surplus of <span className="text-emerald-400 font-bold">₹18,500</span>.
        </p>
      </div>
    </div>
  );
};
