import { motion } from 'framer-motion';

export const VillageRiskMap = () => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-6 flex flex-col h-full">
      <h3 className="text-lg font-bold mb-1">Regional Risk Map</h3>
      <p className="text-sm text-muted-foreground mb-4">Cash flow vulnerability by village</p>

      <div className="flex-1 bg-background/50 rounded-lg border border-white/5 relative p-4 flex flex-col justify-center gap-4">
        {/* Mock Map Representation */}
        <div className="flex items-center justify-between p-3 bg-card rounded-md border border-white/5 shadow-sm">
          <span className="text-sm font-medium">Village A (Nellore HQ)</span>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            <span className="text-xs text-muted-foreground">Stable</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-card rounded-md border border-white/5 shadow-sm">
          <span className="text-sm font-medium">Village B (East)</span>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
            <span className="text-xs text-muted-foreground">Moderate</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-md border border-red-500/20 shadow-sm">
          <span className="text-sm font-medium text-red-400">Village C (South)</span>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></span>
            <span className="text-xs text-red-400 font-bold">High Risk</span>
          </div>
        </div>
      </div>
      
      <p className="text-xs text-muted-foreground mt-4 text-center">Alert: Village C is facing acute supply chain delays affecting 14 enterprises.</p>
    </motion.div>
  );
};
