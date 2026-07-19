import { CalendarDays, ShoppingCart, Landmark, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { apiClient } from '../../services/api';

export const FinancialTransactionsList = () => {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    // Assuming enterprise ID 1 for now
    apiClient.get('/enterprises/1/transactions')
      .then(res => setTransactions(res.data))
      .catch(err => console.error("Error fetching transactions", err));
  }, []);

  // Helper to map backend type to icon
  const getIcon = (type: string, category: string) => {
    if (category === 'Sales' || category === 'Subsidy') return <CalendarDays size={16} className="text-emerald-400" />;
    if (category === 'Inventory') return <ShoppingCart size={16} className="text-red-400" />;
    if (category === 'Services') return <Zap size={16} className="text-red-400" />;
    return <Landmark size={16} className="text-blue-400" />;
  };

  const getIconBg = (type: string) => {
    if (type === 'income') return 'bg-emerald-500/10';
    if (type === 'expense') return 'bg-red-500/10';
    return 'bg-blue-500/10';
  };

  return (
    <div className="bg-[#13151A] rounded-xl border border-white/5 p-5 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-bold">Recent Transactions</h3>
        <button className="text-[11px] text-blue-400 hover:underline">View All</button>
      </div>
      
      <div className="flex-1 space-y-4">
        {transactions.length === 0 ? (
          <p className="text-gray-500 text-xs text-center py-4">No transactions found</p>
        ) : (
          transactions.map((t, i) => (
            <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${getIconBg(t.type)}`}>
                  {getIcon(t.type, t.category)}
                </div>
                <div>
                  <p className="text-[12px] font-medium text-white">{t.title}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{t.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className={`text-[9px] px-2 py-0.5 rounded-full border capitalize ${
                  t.type === 'income' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                  t.type === 'expense' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                  'bg-blue-500/10 border-blue-500/20 text-blue-400'
                }`}>
                  {t.type}
                </span>
                <span className="text-[13px] font-bold text-white min-w-[70px] text-right">
                  {t.type === 'income' ? '+' : '-'} ₹{t.amount?.toLocaleString()}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
