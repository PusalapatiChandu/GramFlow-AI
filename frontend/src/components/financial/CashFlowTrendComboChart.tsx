import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Info } from 'lucide-react';
import { useState, useEffect } from 'react';
import { apiClient } from '../../services/api';

export const CashFlowTrendComboChart = () => {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch transactions and aggregate by date for the chart
    apiClient.get('/enterprises/1/transactions')
      .then(res => {
        if (res.data && res.data.length > 0) {
          // Group by date
          const grouped: any = {};
          res.data.forEach((t: any) => {
            const dateStr = t.date; // e.g. 2026-07-19
            if (!grouped[dateStr]) {
              grouped[dateStr] = { date: dateStr.substring(5), income: 0, expense: 0, net: 0 };
            }
            if (t.type === 'income') grouped[dateStr].income += (t.amount / 1000);
            else if (t.type === 'expense') grouped[dateStr].expense += (t.amount / 1000);
          });
          
          let data = Object.values(grouped).reverse();
          // Calculate net
          data.forEach((d: any) => {
            d.net = d.income - d.expense;
          });
          
          setChartData(data);
        } else {
          // Fallback if no transactions
          setChartData([
            { date: '01-05', income: 45, expense: 30, net: 15 },
            { date: '08-05', income: 55, expense: 32, net: 23 },
            { date: '15-05', income: 50, expense: 35, net: 15 },
            { date: '22-05', income: 75, expense: 42, net: 33 },
          ]);
        }
      })
      .catch(err => {
        console.error("Error fetching chart data", err);
        setChartData([
          { date: '01-05', income: 45, expense: 30, net: 15 },
          { date: '08-05', income: 55, expense: 32, net: 23 },
        ]);
      });
  }, []);

  return (
    <div className="bg-[#13151A] rounded-xl border border-white/5 flex flex-col h-full p-5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-bold flex items-center gap-2">
          Cash Flow Trend <Info size={14} className="text-gray-500" />
        </h3>
        <select className="bg-[#0b0e14] border border-white/10 text-xs text-gray-300 rounded px-3 py-1.5 outline-none">
          <option>This Month</option>
        </select>
      </div>

      <div className="flex items-center justify-center gap-6 text-[11px] mb-4">
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#34D399] rounded-sm"></span> <span className="text-gray-300">Income</span></div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#F87171] rounded-sm"></span> <span className="text-gray-300">Expense</span></div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-1 bg-[#60A5FA] rounded-full"></span> <span className="text-gray-300">Net Cash Flow</span></div>
      </div>

      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" vertical={false} />
            <XAxis dataKey="date" stroke="#718096" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis stroke="#718096" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}K`} />
            <Tooltip contentStyle={{ backgroundColor: '#0b0e14', borderColor: '#2D3748', fontSize: '12px' }} />
            
            <Bar dataKey="income" fill="#34D399" barSize={12} radius={[2, 2, 0, 0]} />
            <Bar dataKey="expense" fill="#F87171" barSize={12} radius={[2, 2, 0, 0]} />
            <Line type="monotone" dataKey="net" stroke="#60A5FA" strokeWidth={2} dot={{ r: 4, fill: '#60A5FA' }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
