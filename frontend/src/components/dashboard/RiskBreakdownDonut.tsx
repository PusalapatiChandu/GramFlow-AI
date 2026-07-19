import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Info } from 'lucide-react';

const data = [
  { name: 'Cash Flow Risk', value: 30, color: '#F87171' },
  { name: 'Credit Risk', value: 25, color: '#FBBF24' },
  { name: 'Market Risk', value: 20, color: '#60A5FA' },
  { name: 'Climate Risk', value: 15, color: '#34D399' },
  { name: 'Liquidity Risk', value: 10, color: '#A78BFA' },
];

export const RiskBreakdownDonut = () => {
  return (
    <div className="bg-[#13151A] rounded-xl border border-white/5 p-5 h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-bold flex items-center gap-2">
          Risk Breakdown <Info size={14} className="text-gray-500" />
        </h3>
      </div>

      <div className="flex-1 flex items-center justify-between">
        <div className="relative w-32 h-32 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={60}
                stroke="none"
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#0b0e14', borderColor: '#2D3748', fontSize: '12px' }} itemStyle={{ color: '#fff' }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xl font-bold text-white">85.5</span>
            <span className="text-[9px] text-red-400">High Risk</span>
          </div>
        </div>

        <div className="flex-1 pl-4">
          <ul className="space-y-2">
            {data.map((item, i) => (
              <li key={i} className="flex justify-between items-center text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="text-gray-300">{item.name}</span>
                </div>
                <span className="text-gray-400">{item.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
