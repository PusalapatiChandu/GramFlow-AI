import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Sliders } from 'lucide-react';

export const Simulator = () => {
  const [incomeChange, setIncomeChange] = useState(0);
  const [expenseChange, setExpenseChange] = useState(0);
  const [rainfallChange, setRainfallChange] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  
  const [simulated, setSimulated] = useState(false);

  const runSimulation = () => {
    setSimulated(true);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-6 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Sliders className="text-blue-400" size={20} />
        <h3 className="font-semibold text-lg">Advanced Business Simulator</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-6">Test complex "What If" scenarios to see future outcomes</p>
      
      <div className="flex flex-col gap-8 flex-1">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <label>Income Change</label>
              <span className={incomeChange > 0 ? "text-green-400" : incomeChange < 0 ? "text-red-400" : ""}>{incomeChange > 0 ? '+' : ''}{incomeChange}%</span>
            </div>
            <input type="range" min="-50" max="50" value={incomeChange} onChange={(e) => setIncomeChange(parseInt(e.target.value))} className="w-full accent-blue-500" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <label>Expense Change</label>
              <span className={expenseChange > 0 ? "text-red-400" : expenseChange < 0 ? "text-green-400" : ""}>{expenseChange > 0 ? '+' : ''}{expenseChange}%</span>
            </div>
            <input type="range" min="-50" max="50" value={expenseChange} onChange={(e) => setExpenseChange(parseInt(e.target.value))} className="w-full accent-blue-500" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <label>Rainfall Deviation</label>
              <span className={rainfallChange < 0 ? "text-amber-400" : "text-blue-400"}>{rainfallChange > 0 ? '+' : ''}{rainfallChange}%</span>
            </div>
            <input type="range" min="-50" max="50" value={rainfallChange} onChange={(e) => setRainfallChange(parseInt(e.target.value))} className="w-full accent-blue-500" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <label>New Loan Amount</label>
              <span className="text-muted-foreground">₹{loanAmount.toLocaleString()}</span>
            </div>
            <input type="range" min="0" max="500000" step="10000" value={loanAmount} onChange={(e) => setLoanAmount(parseInt(e.target.value))} className="w-full accent-blue-500" />
          </div>
          
          <Button onClick={runSimulation} className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2">Run AI Simulation</Button>
        </div>

        <div className="bg-background/50 rounded-lg p-6 border border-white/5 flex flex-col justify-center mt-auto">
          <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Simulation Results</h4>
          
          {simulated ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-sm">Predicted Profit</span>
                <span className={`font-bold ${incomeChange > expenseChange ? 'text-green-400' : 'text-red-400'}`}>
                  ₹{(15000 * (1 + incomeChange/100) - 8000 * (1 + expenseChange/100)).toFixed(0)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-sm">Future Risk</span>
                <span className={`font-bold ${rainfallChange < -20 || loanAmount > 200000 ? 'text-red-400' : 'text-green-400'}`}>
                  {rainfallChange < -20 || loanAmount > 200000 ? 'High' : 'Low'}
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-sm">Cash Flow Impact</span>
                <span className="font-bold text-blue-400">
                  {loanAmount > 0 ? `+₹${loanAmount.toLocaleString()} (Debt)` : 'Stable'}
                </span>
              </div>
              <div className="pt-2">
                <span className="text-xs text-muted-foreground block mb-1">AI Recommendation</span>
                <p className="text-sm font-medium">
                  {loanAmount > 200000 ? "Warning: High loan amount coupled with weather risk. Consider reducing loan size." : "This scenario looks sustainable. Excess profit can be used to expand inventory."}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-4">
              Adjust sliders and run simulation to see AI projections here.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
