import { motion } from 'framer-motion';
import { CircularGauge } from '../ui/CircularGauge';
import { CheckCircle2 } from 'lucide-react';

export const LoanEligibilityCard = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 h-full border-emerald-500/20 bg-emerald-500/5 flex flex-col md:flex-row items-center gap-6">
      <div className="shrink-0">
        <CircularGauge value={92} label="Eligible" color="#10b981" size={120} />
      </div>
      
      <div className="flex-1 w-full space-y-4">
        <div>
          <h3 className="text-lg font-bold flex items-center gap-2">
            Loan Eligibility
            <CheckCircle2 size={16} className="text-emerald-400" />
          </h3>
          <p className="text-sm text-emerald-400 font-medium">Highly likely to be approved</p>
        </div>
        
        <div className="bg-background/40 p-3 rounded-lg border border-white/5">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Recommended Scheme</p>
          <p className="font-bold text-base text-white">Mudra Loan (Kishor)</p>
        </div>
        
        <div className="bg-background/40 p-3 rounded-lg border border-white/5">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Maximum Amount</p>
          <p className="font-bold text-base text-emerald-400">₹4.5 Lakhs</p>
        </div>
      </div>
    </motion.div>
  );
};
