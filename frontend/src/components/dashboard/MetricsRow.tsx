import { Wallet, BarChart3, TrendingDown, ArrowUpDown, ShieldCheck, AlertTriangle } from 'lucide-react';

export const MetricsRow = () => {
  const metrics = [
    {
      title: 'Total Balance',
      value: '₹1,24,500',
      trend: '+12% from last month',
      trendUp: true,
      icon: <Wallet size={20} className="text-emerald-400" />,
      bg: 'bg-[#13151A]',
      iconBg: 'bg-emerald-500/10'
    },
    {
      title: 'Monthly Income',
      value: '₹95,000',
      trend: '+8% from last month',
      trendUp: true,
      icon: <BarChart3 size={20} className="text-emerald-400" />,
      bg: 'bg-[#13151A]',
      iconBg: 'bg-emerald-500/10'
    },
    {
      title: 'Monthly Expense',
      value: '₹45,300',
      trend: '▲ 5% from last month',
      trendUp: false,
      icon: <TrendingDown size={20} className="text-red-400" />,
      bg: 'bg-[#13151A]',
      iconBg: 'bg-red-500/10'
    },
    {
      title: 'Net Cash Flow',
      value: '₹49,700',
      trend: '+15% from last month',
      trendUp: true,
      icon: <ArrowUpDown size={20} className="text-blue-400" />,
      bg: 'bg-[#13151A]',
      iconBg: 'bg-blue-500/10'
    },
    {
      title: 'Financial Health',
      value: '92/100',
      trend: 'Excellent',
      trendUp: true,
      icon: <ShieldCheck size={20} className="text-emerald-400" />,
      bg: 'bg-[#13151A]',
      iconBg: 'bg-emerald-500/10'
    },
    {
      title: 'AI Risk Score',
      value: '85.5/100',
      trend: 'High Risk',
      trendUp: false,
      icon: <AlertTriangle size={20} className="text-red-400" />,
      bg: 'bg-[#13151A]',
      iconBg: 'bg-red-500/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      {metrics.map((m, i) => (
        <div key={i} className={`${m.bg} p-4 rounded-xl border border-white/5 flex items-center gap-4`}>
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${m.iconBg}`}>
            {m.icon}
          </div>
          <div>
            <p className="text-[11px] text-gray-400 mb-0.5">{m.title}</p>
            <p className="text-lg font-bold text-white leading-tight">{m.value}</p>
            <p className={`text-[10px] mt-1 ${m.trendUp ? 'text-emerald-400' : 'text-red-400'}`}>
              {m.trendUp && m.trend.includes('%') ? '▲ ' : ''}{m.trend}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
