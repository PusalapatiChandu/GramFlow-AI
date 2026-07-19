import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, TrendingUp, HelpCircle, CheckCircle } from 'lucide-react';

export const AiRiskCard = () => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-6 flex flex-col h-full border-red-500/20 bg-red-500/5">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <AlertTriangle className="text-red-500" size={20} />
            AI Risk Analysis
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Temporal Fusion Transformer</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-black text-red-500">85.5</p>
          <p className="text-xs text-red-400 font-medium uppercase tracking-widest mt-1">Critical</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-1">
          <HelpCircle size={14} /> Risk Contributors (SHAP)
        </h3>
        
        {/* SHAP Bars */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="flex items-center gap-1"><TrendingUp size={12} className="text-red-400"/> Expenses (+28%)</span>
              <span className="font-bold text-red-400">40%</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-red-500 h-full" style={{ width: '40%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="flex items-center gap-1"><TrendingDown size={12} className="text-amber-400"/> Rainfall (Dry spell)</span>
              <span className="font-bold text-amber-400">25%</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-amber-500 h-full" style={{ width: '25%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="flex items-center gap-1"><AlertTriangle size={12} className="text-red-400"/> Debt (Overdue)</span>
              <span className="font-bold text-red-400">18%</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-red-400 h-full" style={{ width: '18%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="flex items-center gap-1"><TrendingDown size={12} className="text-amber-400"/> Commodity (Milk Price)</span>
              <span className="font-bold text-amber-400">10%</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-amber-400 h-full" style={{ width: '10%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="flex items-center gap-1"><TrendingUp size={12} className="text-emerald-400"/> UPI Transactions</span>
              <span className="font-bold text-emerald-400">7%</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full" style={{ width: '7%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <div className="bg-background/50 rounded-lg p-4 border border-white/5">
          <h3 className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Prediction</h3>
          <p className="font-bold text-red-400 text-sm">Negative cash flow in 18 days</p>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Confidence Level</span>
            <span className="text-sm font-bold text-emerald-400">94%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const AiSuggestionsCard = () => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="glass-card p-6 flex flex-col h-full border-blue-500/20">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <CheckCircle className="text-blue-400" size={20} />
            AI Advisor
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Prescriptive Recommendations</p>
        </div>
      </div>

      <div className="space-y-4 mt-2">
        {/* Priority 1 */}
        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/20 px-2 py-0.5 rounded">Priority 1</span>
          </div>
          <p className="font-semibold mt-2">Delay tractor purchase</p>
          <div className="flex justify-between items-end mt-2">
            <span className="text-xs text-muted-foreground">Expected Savings</span>
            <span className="text-sm font-bold text-emerald-400">₹45,000</span>
          </div>
        </div>

        {/* Priority 2 */}
        <div className="p-3 bg-background/50 border border-white/5 rounded-lg">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded">Priority 2</span>
          </div>
          <p className="font-semibold mt-2">Increase digital payments</p>
          <div className="flex justify-between items-end mt-2">
            <span className="text-xs text-muted-foreground">Expected Income</span>
            <span className="text-sm font-bold text-emerald-400">+8%</span>
          </div>
        </div>

        {/* Priority 3 */}
        <div className="p-3 bg-background/50 border border-white/5 rounded-lg">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded">Priority 3</span>
          </div>
          <p className="font-semibold mt-2">Sell milk next week</p>
          <div className="flex justify-between items-end mt-2">
            <span className="text-xs text-muted-foreground">Expected Price</span>
            <span className="text-sm font-bold text-emerald-400">+6%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
