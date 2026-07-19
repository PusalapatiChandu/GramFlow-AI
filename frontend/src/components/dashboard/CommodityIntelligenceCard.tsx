import { motion } from 'framer-motion';

export const CommodityIntelligenceCard = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 h-full">
      <h3 className="text-lg font-bold mb-4">Commodity Intelligence</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/5 text-muted-foreground uppercase text-xs tracking-wider">
              <th className="pb-3 font-medium">Commodity</th>
              <th className="pb-3 font-medium">Current</th>
              <th className="pb-3 font-medium text-right">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <tr>
              <td className="py-3 font-medium">Milk</td>
              <td className="py-3">₹42/L</td>
              <td className="py-3 text-right text-emerald-400 font-bold flex justify-end items-center gap-1">
                ▲ +12%
              </td>
            </tr>
            <tr>
              <td className="py-3 font-medium">Feed</td>
              <td className="py-3">₹980</td>
              <td className="py-3 text-right text-red-400 font-bold flex justify-end items-center gap-1">
                ▼ -2%
              </td>
            </tr>
            <tr>
              <td className="py-3 font-medium">Fertilizer</td>
              <td className="py-3">₹1,350</td>
              <td className="py-3 text-right text-emerald-400 font-bold flex justify-end items-center gap-1">
                ▲ +5%
              </td>
            </tr>
            <tr>
              <td className="py-3 font-medium">Diesel</td>
              <td className="py-3">₹91</td>
              <td className="py-3 text-right text-emerald-400 font-bold flex justify-end items-center gap-1">
                ▲ +1%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
