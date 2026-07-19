import { Wallet, BarChart3, TrendingDown, ArrowUpDown, LineChart as LineChartIcon, Landmark } from 'lucide-react';
import { useState, useEffect } from 'react';
import { apiClient } from '../../services/api';

export const FinancialMetricsRow = () => {
  const [enterprise, setEnterprise] = useState<any>(null);

  useEffect(() => {
    // Assuming enterprise ID 1
    apiClient.get('/enterprises')
      .then(res => {
        if (res.data && res.data.length > 0) {
          setEnterprise(res.data[0]);
        }
      })
      .catch(err => console.error("Error fetching enterprise for metrics", err));
  }, []);

  // Mocking Income/Expense split for the hackathon UI based on the balance
  const balance = enterprise?.currentBalance || 124500;
  const income = balance * 0.76; 
  const expense = balance * 0.36; 
  const net = income - expense;

  const metrics = [
    {
      title: 'Total Income',
      value: `₹${income.toLocaleString(undefined, {maximumFractionDigits:0})}`,
      trend: '▲ 8% vs last month',
      trendUp: true,
      icon: <Wallet size={20} className="text-emerald-400" />,
      bg: 'bg-[#13151A]',
      iconBg: 'bg-emerald-500/10'
    },
    {
      title: 'Total Expense',
      value: `₹${expense.toLocaleString(undefined, {maximumFractionDigits:0})}`,
      trend: '▲ 5% vs last month',
      trendUp: false,
      icon: <TrendingDown size={20} className="text-red-400" />,
      bg: 'bg-[#13151A]',
      iconBg: 'bg-red-500/10'
    },
    {
      title: 'Net Cash Flow',
      value: `₹${net.toLocaleString(undefined, {maximumFractionDigits:0})}`,
      trend: '▲ 15% vs last month',
      trendUp: true,
      icon: <ArrowUpDown size={20} className="text-blue-400" />,
      bg: 'bg-[#13151A]',
      iconBg: 'bg-blue-500/10'
    },
    {
      title: 'Closing Balance',
      value: `₹${balance.toLocaleString(undefined, {maximumFractionDigits:0})}`,
      trend: '▲ 12% vs last month',
      trendUp: true,
      icon: <Landmark size={20} className="text-amber-400" />,
      bg: 'bg-[#13151A]',
      iconBg: 'bg-amber-500/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((m, i) => (
        <div key={i} className={`${m.bg} p-4 rounded-xl border border-white/5 flex items-center gap-4`}>
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${m.iconBg}`}>
            {m.icon}
          </div>
          <div>
            <p className="text-[11px] text-gray-400 mb-0.5">{m.title}</p>
            <p className="text-lg font-bold text-white leading-tight">{m.value}</p>
            <p className={`text-[10px] mt-1 ${m.trendUp ? 'text-emerald-400' : 'text-red-400'}`}>
              {m.trend}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
