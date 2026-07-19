import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowRight, Bot } from 'lucide-react';

const incomeData = [
  { name: 'Milk Sales', value: 60000, color: '#34D399', percentage: '63.2%' },
  { name: 'Cattle Sales', value: 15000, color: '#F87171', percentage: '15.8%' },
  { name: 'Subsidy / Grants', value: 10000, color: '#FBBF24', percentage: '10.5%' },
  { name: 'Other Income', value: 10000, color: '#60A5FA', percentage: '10.5%' },
];

const expenseData = [
  { name: 'Cattle Feed', value: 18000, color: '#F87171', percentage: '39.7%' },
  { name: 'Labour Cost', value: 9000, color: '#34D399', percentage: '19.9%' },
  { name: 'Medicine', value: 6500, color: '#FBBF24', percentage: '14.3%' },
  { name: 'Utilities', value: 4800, color: '#60A5FA', percentage: '10.6%' },
  { name: 'Other Expenses', value: 7000, color: '#A78BFA', percentage: '15.5%' },
];

const DonutCard = ({ title, data, total, isIncome }: { title: string, data: any[], total: string, isIncome: boolean }) => (
  <div className="bg-[#13151A] rounded-xl border border-white/5 p-5 h-full flex flex-col">
    <h3 className="text-white font-bold mb-4">{title} <span className="text-gray-500 font-normal text-xs">(This Month)</span></h3>
    
    <div className="flex-1 flex items-center justify-between">
      <div className="relative w-32 h-32 flex-shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={45} outerRadius={60} stroke="none" paddingAngle={2} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#0b0e14', borderColor: '#2D3748', fontSize: '11px' }} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-sm font-bold text-white">{total}</span>
          <span className="text-[9px] text-gray-400">Total</span>
        </div>
      </div>

      <div className="flex-1 pl-4">
        <ul className="space-y-2">
          {data.map((item, i) => (
            <li key={i} className="flex justify-between items-center text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                <span className="text-gray-300">{item.name}</span>
              </div>
              <div className="text-right">
                <span className="text-white font-bold mr-1">₹{item.value.toLocaleString()}</span>
                <span className="text-gray-500">({item.percentage})</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    <button className="w-full mt-4 py-2 border border-white/5 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-white/5 flex items-center justify-center gap-2 transition-colors">
      View All {isIncome ? 'Income' : 'Expenses'} <ArrowRight size={14} />
    </button>
  </div>
);

export const FinancialDonuts = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        <DonutCard title="Income by Category" data={incomeData} total="₹95,000" isIncome={true} />
        <DonutCard title="Expense by Category" data={expenseData} total="₹45,300" isIncome={false} />
      </div>
      
      {/* Smart Insight spanning across */}
      <div className="bg-[#13151A] border border-emerald-500/20 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
          <Bot size={20} className="text-emerald-400" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm font-bold text-white">Smart Insight</p>
          <p className="text-[11px] text-gray-300 mt-0.5">Your income is steadily increasing. Consider investing in cattle health to further improve milk production.</p>
        </div>
        <button className="text-[11px] text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-lg hover:bg-emerald-500/10 whitespace-nowrap flex items-center gap-1 transition-colors">
          View Recommendations <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};
