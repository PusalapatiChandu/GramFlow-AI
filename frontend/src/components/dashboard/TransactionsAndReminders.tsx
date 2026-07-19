import { ArrowDownRight, ArrowUpRight, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

export const TransactionsAndReminders = () => {
  const transactions = [
    { title: 'Milk Sales to ABC Dairy', date: '19 May 2026, 08:30 AM', amount: '₹12,500', type: 'Income', icon: <ArrowUpRight className="text-emerald-400" size={16} />, bg: 'bg-emerald-500/10' },
    { title: 'Cattle Feed Purchase', date: '18 May 2026, 05:20 PM', amount: '₹3,200', type: 'Expense', icon: <ArrowDownRight className="text-red-400" size={16} />, bg: 'bg-red-500/10' },
    { title: 'Loan EMI Payment', date: '17 May 2026, 11:15 AM', amount: '₹12,500', type: 'Loan', icon: <ArrowDownRight className="text-blue-400" size={16} />, bg: 'bg-blue-500/10' },
  ];

  const reminders = [
    { title: 'Loan Repayment', due: 'Due in 4 days', amount: '₹12,500', icon: <CheckCircle2 className="text-gray-400" size={14} /> },
    { title: 'Electricity Bill', due: 'Due in 6 days', amount: '₹1,850', icon: <AlertTriangle className="text-gray-400" size={14} /> },
    { title: 'Insurance Premium', due: 'Due in 12 days', amount: '₹2,400', icon: <FileText className="text-gray-400" size={14} /> },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Transactions (Takes up 2 cols) */}
      <div className="lg:col-span-2 bg-[#13151A] rounded-xl border border-white/5 p-5">
        <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
          <h3 className="text-white font-bold">Recent Transactions</h3>
          <button className="text-[11px] text-blue-400 hover:underline">View All</button>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {transactions.map((t, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${t.bg}`}>
                  {t.icon}
                </div>
                <div>
                  <p className="text-[11px] text-gray-200 line-clamp-1">{t.title}</p>
                  <p className="text-[9px] text-gray-500">{t.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] ${t.type === 'Income' ? 'text-emerald-400' : t.type === 'Expense' ? 'text-red-400' : 'text-blue-400'}`}>{t.type}</span>
                <span className="text-sm font-bold text-white">{t.type === 'Income' ? '+' : '-'} {t.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reminders (1 col) */}
      <div className="lg:col-span-1 bg-[#13151A] rounded-xl border border-white/5 p-5">
        <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
          <h3 className="text-white font-bold">Upcoming Reminders</h3>
          <button className="text-[11px] text-blue-400 hover:underline">View All</button>
        </div>
        
        <div className="space-y-3">
          {reminders.map((r, i) => (
            <div key={i} className="flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2">
                <div className="bg-[#0b0e14] p-1.5 rounded">{r.icon}</div>
                <span className="text-gray-300">{r.title}</span>
              </div>
              <span className="text-gray-500">{r.due}</span>
              <span className="text-white font-bold">{r.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
