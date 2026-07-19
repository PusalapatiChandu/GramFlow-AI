import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Info } from 'lucide-react';

const data = [
  { month: 'May (Act)', value: 49.7, isActual: true },
  { month: 'Jun', value: 55.2, isActual: false },
  { month: 'Jul', value: 60.1, isActual: false },
  { month: 'Aug', value: 62.8, isActual: false },
  { month: 'Sep', value: 66.3, isActual: false },
  { month: 'Oct', value: 68.2, isActual: false },
];

export const CashFlowPredictionChart = () => {
  return (
    <div className="bg-[#13151A] rounded-xl border border-white/5 p-5 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-bold flex items-center gap-2">
          Cash Flow Prediction (Net) <Info size={14} className="text-gray-500" />
        </h3>
        <select className="bg-[#0b0e14] border border-white/10 text-xs text-gray-300 rounded px-3 py-1.5 outline-none">
          <option>6 Months</option>
        </select>
      </div>

      <div className="flex-1 min-h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }} barSize={24}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" vertical={false} />
            <XAxis dataKey="month" stroke="#718096" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis stroke="#718096" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}K`} />
            <Tooltip cursor={{fill: '#2D3748', opacity: 0.4}} contentStyle={{ backgroundColor: '#0b0e14', borderColor: '#2D3748', fontSize: '12px' }} />
            
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.isActual ? '#34D399' : `url(#colorGradient)`} />
              ))}
            </Bar>
            
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity={1}/>
                <stop offset="100%" stopColor="#60A5FA" stopOpacity={0.8}/>
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5 text-[10px]">
        <span className="text-gray-400">Model: Temporal Fusion Transformer</span>
        <span className="text-gray-400">Confidence: <span className="text-emerald-400 font-bold">93%</span></span>
      </div>
    </div>
  );
};
