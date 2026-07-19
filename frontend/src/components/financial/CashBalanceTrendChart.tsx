import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Info } from 'lucide-react';

const data = [
  { month: 'Dec', balance: 80 },
  { month: 'Jan', balance: 100 },
  { month: 'Feb', balance: 110 },
  { month: 'Mar', balance: 95 },
  { month: 'Apr', balance: 105 },
  { month: 'May', balance: 124.5 },
];

export const CashBalanceTrendChart = () => {
  return (
    <div className="bg-[#13151A] rounded-xl border border-white/5 p-5 flex flex-col h-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-bold flex items-center gap-2">
          Cash Balance Trend <Info size={14} className="text-gray-500" />
        </h3>
        <select className="bg-[#0b0e14] border border-white/10 text-[10px] text-gray-300 rounded px-2 py-1 outline-none">
          <option>6 Months</option>
        </select>
      </div>

      <div className="flex-1 min-h-[100px] mt-2 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34D399" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#34D399" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="#718096" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis stroke="#718096" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}K`} />
            <Tooltip contentStyle={{ backgroundColor: '#0b0e14', borderColor: '#2D3748', fontSize: '11px' }} />
            <Area type="monotone" dataKey="balance" stroke="#34D399" strokeWidth={2} fillOpacity={1} fill="url(#colorBalance)" />
          </AreaChart>
        </ResponsiveContainer>
        
        {/* Floating current value label mimicking the image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right">
          <p className="text-[9px] text-gray-400">May 2026</p>
          <p className="text-sm font-bold text-white">₹1,24,500</p>
        </div>
      </div>
    </div>
  );
};
