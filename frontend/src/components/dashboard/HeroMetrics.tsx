import { CircularGauge } from '../ui/CircularGauge';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, CloudRain, Droplets, ShieldCheck } from 'lucide-react';

export const HeroMetrics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {/* Financial Health */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-4 flex flex-col items-center justify-center text-center">
        <CircularGauge value={92} label="Excellent" color="#10b981" size={90} />
        <h3 className="text-xs font-medium text-muted-foreground mt-3 uppercase tracking-wider">Financial Health</h3>
      </motion.div>

      {/* Cash Flow */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Cash Flow</h3>
          <p className="text-2xl font-bold">₹1,24,500</p>
        </div>
        <div className="flex items-center text-emerald-500 text-xs font-medium mt-4 bg-emerald-500/10 w-fit px-2 py-1 rounded-full">
          <ArrowUpRight size={14} className="mr-1" /> +12% vs last month
        </div>
      </motion.div>

      {/* AI Risk Score */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-4 flex flex-col justify-between border-amber-500/30 bg-amber-500/5">
        <div>
          <h3 className="text-xs font-medium text-amber-500 uppercase tracking-wider mb-2 flex items-center">
            <ShieldCheck size={14} className="mr-1" /> AI Risk Score
          </h3>
          <p className="text-2xl font-bold text-amber-500">Medium</p>
        </div>
        <p className="text-xs text-muted-foreground mt-4 leading-relaxed">Score: 65.5 <br/> Action required</p>
      </motion.div>

      {/* Loan Eligibility */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-4 flex flex-col items-center justify-center text-center">
        <CircularGauge value={91} label="Eligible" color="#3b82f6" size={90} />
        <h3 className="text-xs font-medium text-muted-foreground mt-3 uppercase tracking-wider">Loan Eligibility</h3>
      </motion.div>

      {/* Weather Risk */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Weather Risk</h3>
          <div className="flex items-center gap-2">
            <CloudRain size={24} className="text-blue-400" />
            <p className="text-2xl font-bold text-blue-400">Safe</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">Normal monsoon expected next 14 days.</p>
      </motion.div>

      {/* Commodity Trend */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="glass-card p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Commodity Trend</h3>
          <div className="flex items-center gap-2">
            <Droplets size={24} className="text-white" />
            <p className="text-xl font-bold">Milk</p>
          </div>
        </div>
        <div className="flex items-center text-emerald-500 text-sm font-bold mt-4">
          <ArrowUpRight size={16} className="mr-1" /> 12% (₹42/L)
        </div>
      </motion.div>
    </div>
  );
};
