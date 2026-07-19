import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, AlertTriangle, Lightbulb, CheckCircle2 } from 'lucide-react';

export const AiExecutiveSummary = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 border-blue-500/30 bg-blue-900/10 mb-8">
      <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShieldCheck className="text-blue-400" />
            AI Executive Summary
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Instant Enterprise Status Overview</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-emerald-400 font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
            Healthy
          </p>
          <p className="text-xs text-muted-foreground mt-2">Confidence: 94%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Overall Financial Health</p>
          <p className="text-2xl font-black text-white flex items-center gap-2">
            92% <CheckCircle2 size={18} className="text-emerald-400" />
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Expected Cash Flow</p>
          <p className="text-2xl font-black text-emerald-400 flex items-center gap-2">
            <TrendingUp size={20} /> +12%
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Loan Eligibility</p>
          <p className="text-2xl font-black text-white">
            91%
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider text-amber-400">Major Risk</p>
          <p className="text-sm font-medium flex items-start gap-2 mt-1">
            <AlertTriangle size={16} className="text-amber-400 shrink-0 mt-0.5" />
            Feed prices may rise by 8% next month.
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <p className="text-xs text-blue-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-1">
          <Lightbulb size={14} /> Top Recommendation
        </p>
        <p className="text-lg font-medium text-white">Delay machinery purchase until next month to preserve liquidity ratio.</p>
      </div>
    </motion.div>
  );
};
