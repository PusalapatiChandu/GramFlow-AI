import { motion } from 'framer-motion';
import { CircularGauge } from '../ui/CircularGauge';

export const FinancialHealthCard = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 h-full flex flex-col md:flex-row items-center gap-6">
      <div className="shrink-0">
        <CircularGauge value={92} label="Excellent" color="#10b981" size={120} />
      </div>
      
      <div className="flex-1 w-full space-y-3">
        <h3 className="text-lg font-bold">Financial Health</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Income Stability</span>
            <span className="font-medium">95%</span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full" style={{ width: '95%' }}></div>
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Expense Control</span>
            <span className="font-medium">88%</span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full" style={{ width: '88%' }}></div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Debt Ratio</span>
            <span className="font-medium">76%</span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
            <div className="bg-amber-400 h-full" style={{ width: '76%' }}></div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Savings</span>
            <span className="font-medium">90%</span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
