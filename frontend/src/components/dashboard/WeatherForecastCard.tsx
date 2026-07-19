import { motion } from 'framer-motion';
import { Sun, CloudRain, CloudSun } from 'lucide-react';

export const WeatherForecastCard = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 h-full border-blue-500/20">
      <h3 className="text-lg font-bold mb-4">Weather Intelligence</h3>
      
      <div className="grid grid-cols-5 gap-2 text-center mt-6">
        <div className="flex flex-col items-center bg-background/50 rounded-lg p-2 border border-white/5">
          <span className="text-xs text-muted-foreground mb-2">Mon</span>
          <Sun size={20} className="text-amber-400 mb-2" />
          <span className="text-sm font-bold">32°</span>
        </div>
        <div className="flex flex-col items-center bg-background/50 rounded-lg p-2 border border-white/5">
          <span className="text-xs text-muted-foreground mb-2">Tue</span>
          <CloudSun size={20} className="text-amber-200 mb-2" />
          <span className="text-sm font-bold">30°</span>
        </div>
        <div className="flex flex-col items-center bg-blue-500/20 rounded-lg p-2 border border-blue-500/30">
          <span className="text-xs text-blue-300 font-bold mb-2">Wed</span>
          <CloudRain size={20} className="text-blue-400 mb-2" />
          <span className="text-sm font-bold text-blue-200">26°</span>
        </div>
        <div className="flex flex-col items-center bg-blue-500/20 rounded-lg p-2 border border-blue-500/30">
          <span className="text-xs text-blue-300 font-bold mb-2">Thu</span>
          <CloudRain size={20} className="text-blue-400 mb-2" />
          <span className="text-sm font-bold text-blue-200">24°</span>
        </div>
        <div className="flex flex-col items-center bg-background/50 rounded-lg p-2 border border-white/5">
          <span className="text-xs text-muted-foreground mb-2">Fri</span>
          <Sun size={20} className="text-amber-400 mb-2" />
          <span className="text-sm font-bold">29°</span>
        </div>
      </div>
      
      <p className="text-xs text-muted-foreground mt-4 text-center">Business Impact: <span className="text-emerald-400 font-medium">Positive (Reduced irrigation cost)</span></p>
    </motion.div>
  );
};
