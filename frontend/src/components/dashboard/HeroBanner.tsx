import { motion } from 'framer-motion';
import { Download, FileText, BotMessageSquare } from 'lucide-react';
import { Button } from '../ui/button';

export const HeroBanner = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden border-blue-500/20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="relative z-10 space-y-4 max-w-2xl">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Good Morning, Akhil 👋</h1>
          <p className="text-muted-foreground font-medium flex items-center gap-2">
            Dairy Farm <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span> Nellore
          </p>
        </div>
        
        <div className="bg-background/40 backdrop-blur-sm rounded-xl p-4 border border-white/5 space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">AI Summary</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">•</span> Cash flow expected to improve by <span className="font-bold text-white">12%</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">•</span> Loan eligibility <span className="font-bold text-white">91%</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">•</span> Weather conditions favorable
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400 font-bold">•</span> <span className="text-amber-200">2 recommendations require attention</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] border-0 h-10 w-full md:w-48 justify-start">
          <FileText size={16} className="mr-2" /> Generate Report
        </Button>
        <Button variant="outline" className="border-white/10 hover:bg-white/5 h-10 w-full md:w-48 justify-start">
          <Download size={16} className="mr-2" /> Export PDF
        </Button>
        <Button variant="outline" className="border-white/10 hover:bg-white/5 text-emerald-400 hover:text-emerald-300 h-10 w-full md:w-48 justify-start">
          <BotMessageSquare size={16} className="mr-2" /> Ask AI
        </Button>
      </div>
    </motion.div>
  );
};
