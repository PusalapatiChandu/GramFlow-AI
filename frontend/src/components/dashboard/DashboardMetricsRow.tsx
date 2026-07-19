import { Wallet, ArrowUpDown, AlertTriangle } from 'lucide-react';

interface DashboardMetricsRowProps {
  totalBalance?: number;
  netCashFlow?: number;
  aiRiskScore?: number;
}

export const DashboardMetricsRow = ({ totalBalance = 124500, netCashFlow = 49700, aiRiskScore = 85.5 }: DashboardMetricsRowProps) => {
  const metrics = [
    {
      title: 'Total Balance',
      value: `₹${totalBalance.toLocaleString()}`,
      trend: '▲ 12% vs last month',
      trendUp: true,
      icon: <Wallet size={20} className="text-emerald-400" />,
      bg: 'bg-[#13151A]',
      iconBg: 'bg-emerald-500/10'
    },
    {
      title: 'Net Cash Flow',
      value: `₹${netCashFlow.toLocaleString()}`,
      trend: '▲ 15% vs last month',
      trendUp: true,
      icon: <ArrowUpDown size={20} className="text-blue-400" />,
      bg: 'bg-[#13151A]',
      iconBg: 'bg-blue-500/10'
    },
    {
      title: 'AI Risk Score',
      value: `${aiRiskScore}/100`,
      trend: 'High Risk',
      trendUp: false,
      icon: <AlertTriangle size={20} className="text-red-400" />,
      bg: 'bg-[#13151A]',
      iconBg: 'bg-red-500/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {metrics.map((m, i) => (
        <div key={i} className={`${m.bg} p-5 rounded-xl border border-white/5 flex items-center justify-between`}>
          <div>
            <p className="text-[12px] text-gray-400 mb-1">{m.title}</p>
            <p className="text-2xl font-bold text-white leading-tight mb-2">{m.value}</p>
            <p className={`text-[11px] font-medium ${m.trendUp ? 'text-emerald-400' : 'text-red-400'}`}>
              {m.trend}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${m.iconBg}`}>
              {m.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
