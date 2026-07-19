import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, ReferenceLine } from 'recharts';
import { Info } from 'lucide-react';

const data = [
  { date: '1 May', income: 50, expense: 28, net: 10 },
  { date: '5 May', income: 58, expense: 30, net: 15 },
  { date: '10 May', income: 72, expense: 38, net: 20 },
  { date: '15 May', income: 68, expense: 42, net: 28 },
  { date: '20 May', income: 55, expense: 35, net: 25, predicted: 45 },
  { date: '25 May', income: null, expense: null, net: null, predicted: 50 },
  { date: '30 May', income: null, expense: null, net: null, predicted: 60 },
];

export const CashFlowOverviewChart = () => {
  return (
    <div className="bg-[#13151A] rounded-xl border border-white/5 p-5 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-bold flex items-center gap-2">
          Cash Flow Overview <Info size={14} className="text-gray-500" />
        </h3>
        <select className="bg-[#0b0e14] border border-white/10 text-xs text-gray-300 rounded px-3 py-1.5 outline-none">
          <option>This Month</option>
        </select>
      </div>

      <div className="flex items-center gap-6 text-[11px] mb-4 pl-8">
        <div className="flex items-center gap-1.5"><span className="w-3 h-1 bg-emerald-400 rounded"></span> <span className="text-gray-300">Income</span></div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-1 bg-red-400 rounded"></span> <span className="text-gray-300">Expense</span></div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-1 bg-blue-400 rounded"></span> <span className="text-gray-300">Net Cash Flow</span></div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-1 border-t-2 border-dashed border-purple-400"></span> <span className="text-gray-300">Predicted (Net Cash Flow)</span></div>
      </div>

      <div className="flex-1 min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" vertical={false} />
            <XAxis dataKey="date" stroke="#718096" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="#718096" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}K`} />
            <Tooltip contentStyle={{ backgroundColor: '#0b0e14', borderColor: '#2D3748', fontSize: '12px' }} />
            
            <Line type="monotone" dataKey="income" stroke="#34D399" strokeWidth={2} dot={{ r: 3, fill: '#34D399' }} />
            <Line type="monotone" dataKey="expense" stroke="#F87171" strokeWidth={2} dot={{ r: 3, fill: '#F87171' }} />
            <Line type="monotone" dataKey="net" stroke="#60A5FA" strokeWidth={2} dot={{ r: 3, fill: '#60A5FA' }} />
            <Line type="monotone" dataKey="predicted" stroke="#A78BFA" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 3, fill: '#A78BFA' }} />
            
            {/* Split vertical line for "Today" */}
            <ReferenceLine x="20 May" stroke="#4B5563" strokeDasharray="3 3" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6 border-t border-white/5 pt-4">
        <div className="text-center border-r border-white/5">
          <p className="text-[11px] text-gray-400 mb-1">Total Income</p>
          <p className="text-sm font-bold text-emerald-400">₹95,000</p>
        </div>
        <div className="text-center border-r border-white/5">
          <p className="text-[11px] text-gray-400 mb-1">Total Expense</p>
          <p className="text-sm font-bold text-red-400">₹45,300</p>
        </div>
        <div className="text-center border-r border-white/5">
          <p className="text-[11px] text-gray-400 mb-1">Net Cash Flow</p>
          <p className="text-sm font-bold text-blue-400">₹49,700</p>
        </div>
        <div className="text-center">
          <p className="text-[11px] text-gray-400 mb-1">Predicted (End of Month)</p>
          <p className="text-sm font-bold text-purple-400">₹68,200</p>
        </div>
      </div>
    </div>
  );
};
