import { TrendingUp, AlertTriangle, CloudRain, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export const AiInsightsPanel = () => {
  const insights = [
    {
      id: 1,
      icon: <TrendingUp className="text-emerald-400" size={16} />,
      message: 'Revenue increasing steadily due to higher milk sales.',
    },
    {
      id: 2,
      icon: <AlertTriangle className="text-amber-400" size={16} />,
      message: 'Loan repayment of ₹12,500 due in 4 days.',
    },
    {
      id: 3,
      icon: <CloudRain className="text-blue-400" size={16} />,
      message: 'Rainfall expected next week. Plan fodder storage.',
    },
    {
      id: 4,
      icon: <TrendingUp className="text-emerald-400" size={16} />,
      message: 'Milk prices projected to increase by 8% in local markets.',
    }
  ];

  return (
    <div className="bg-[#13151A] rounded-xl border border-white/5 p-5 h-full flex flex-col">
      <h3 className="text-white font-bold mb-4 flex items-center gap-2">
        <Lightbulb size={16} className="text-blue-400" /> Today's AI Insights
      </h3>
      
      <div className="space-y-4 flex-1">
        {insights.map((insight, i) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3 border-b border-white/5 pb-3 last:border-0"
          >
            <div className="mt-0.5 shrink-0 bg-[#0b0e14] p-1.5 rounded">{insight.icon}</div>
            <p className="text-[12px] text-gray-200">{insight.message}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 bg-[#0a192f] border border-[#1e3a8a] rounded-lg p-4">
        <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider mb-2">Top Recommendation</p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-white max-w-[85%]">
            Delay tractor equipment purchase to maintain healthy liquidity ratio.
          </p>
          <span className="text-blue-400 text-lg">→</span>
        </div>
      </div>
    </div>
  );
};
