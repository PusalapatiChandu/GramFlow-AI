import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { name: 'Jan', actual: 12000 },
  { name: 'Feb', actual: 15000 },
  { name: 'Mar', actual: 14000 },
  { name: 'Apr (Pred)', predicted: 16000, lower: 14000, upper: 18000 },
  { name: 'May (Pred)', predicted: 16500, lower: 14500, upper: 18500 },
  { name: 'Jun (Pred)', predicted: 18000, lower: 15500, upper: 20500 },
];

export const EnhancedCashFlowChart = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-6 w-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-bold">Cash Flow Projection</h3>
          <p className="text-sm text-muted-foreground mt-1">Actual vs Predicted with Confidence Intervals (95%)</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Model</p>
          <p className="text-sm font-semibold text-blue-400">Temporal Fusion Transformer</p>
        </div>
      </div>
      
      <div className="h-[350px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.3} vertical={false} />
            <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} dy={10} />
            <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value/1000}k`} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}
              itemStyle={{ color: '#fff' }}
            />
            {/* Confidence Interval Area */}
            <Area type="monotone" dataKey="upper" stroke="none" fill="url(#colorPredicted)" />
            <Area type="monotone" dataKey="lower" stroke="none" fill="#0f172a" />
            
            <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} name="Actual Cash Flow" />
            <Line type="monotone" dataKey="predicted" stroke="#8b5cf6" strokeWidth={3} strokeDasharray="5 5" dot={{ r: 4, strokeWidth: 2 }} name="Predicted Cash Flow" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-3 h-3 rounded-full bg-[#10b981]"></div> Actual
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-3 h-3 rounded-full bg-[#8b5cf6]"></div> Predicted
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-3 h-3 rounded bg-[#8b5cf6] opacity-30"></div> 95% Confidence
          </div>
        </div>
      </div>
    </motion.div>
  );
};
