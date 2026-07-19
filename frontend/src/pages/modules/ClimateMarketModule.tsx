import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Settings, CloudRain, Droplets, Wind, TrendingUp, TrendingDown, BookOpen } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';

export const ClimateMarketModule = () => {
  const [activeTab, setActiveTab] = useState('Weather');
  const tabs = ['Weather', 'Commodities', 'Market Trends'];

  const commodities = [
    { name: 'Milk (per L)', price: '₹42', trend: '+ 8%', trendUp: true, sparkline: [40, 41, 41, 42, 43, 42, 44] },
    { name: 'Cattle Feed (kg)', price: '₹28', trend: '- 2%', trendUp: false, sparkline: [29, 29, 28, 27, 28, 28, 27] },
    { name: 'Fertilizer (kg)', price: '₹58', trend: '+ 5%', trendUp: true, sparkline: [55, 56, 56, 57, 58, 59, 58] },
    { name: 'Diesel (L)', price: '₹91', trend: '+ 1%', trendUp: true, sparkline: [90, 90, 90, 91, 91, 91, 92] },
  ];

  const Sparkline = ({ data, color }: { data: number[], color: string }) => {
    const chartData = data.map((val, i) => ({ val, index: i }));
    return (
      <div className="h-8 w-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <YAxis domain={['dataMin - 1', 'dataMax + 1']} hide />
            <Line type="monotone" dataKey="val" stroke={color} strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto pb-10 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Market Intelligence</h2>
          <p className="text-sm text-gray-400">Weather forecasts, commodity prices, and market trends</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 bg-[#13151A] border border-white/5 rounded-lg text-gray-400 hover:text-white transition-colors">
            <Bell size={18} />
          </button>
          <button className="p-2 bg-[#13151A] border border-white/5 rounded-lg text-gray-400 hover:text-white transition-colors">
            <Settings size={18} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6 border-b border-[#1F2937] mb-6 overflow-x-auto scrollbar-hide pb-1">
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-2 text-[13px] font-medium transition-colors relative whitespace-nowrap ${activeTab === tab ? 'text-emerald-400' : 'text-gray-400 hover:text-gray-200'}`}>
            {tab}
            {activeTab === tab && <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-emerald-400"></span>}
          </button>
        ))}
      </div>

      <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1">
        {activeTab === 'Weather' && (
          <div className="flex flex-col gap-6">
            
            {/* Weather Widget */}
            <div className="bg-[#13151A] rounded-xl border border-white/5 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-8">
                <CloudRain size={80} className="text-blue-400" />
                <div>
                  <h1 className="text-5xl font-bold text-white mb-2">28°C</h1>
                  <p className="text-lg text-gray-300">Light Rain</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 min-w-[200px]">
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-gray-400 flex items-center gap-2"><Droplets size={14}/> Humidity</span>
                  <span className="text-emerald-400 font-bold">78%</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-gray-400 flex items-center gap-2"><Wind size={14}/> Wind</span>
                  <span className="text-blue-400 font-bold">12 km/h</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 flex items-center gap-2"><CloudRain size={14}/> Rainfall</span>
                  <span className="text-white font-bold">6.2 mm</span>
                </div>
              </div>
            </div>
            
            {/* Location & Forecast Button (Matching the small row under Weather) */}
            <div className="flex justify-between items-center px-2">
              <p className="text-xs text-gray-400">Location: Nellore, Andhra Pradesh</p>
              <button className="text-xs bg-[#1a2332] text-blue-400 border border-[#2e4060] rounded-lg px-3 py-1.5 hover:bg-[#202b3d] transition-colors">
                7 Day Forecast
              </button>
            </div>

            {/* Commodity Prices */}
            <div className="bg-[#13151A] rounded-xl border border-white/5 p-6 mt-2">
              <h3 className="text-white font-bold mb-6">Commodity Prices</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-gray-500 border-b border-white/5">
                      <th className="pb-3 font-medium">Commodity</th>
                      <th className="pb-3 font-medium">Current Price</th>
                      <th className="pb-3 font-medium">Trend</th>
                      <th className="pb-3 font-medium text-right pr-4">Prediction (Next 7 Days)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commodities.map((item, index) => (
                      <tr key={index} className="border-b border-white/5 last:border-0">
                        <td className="py-4 text-gray-200">{item.name}</td>
                        <td className="py-4 text-white font-bold">{item.price}</td>
                        <td className="py-4">
                          <span className={`flex items-center gap-1 ${item.trendUp ? 'text-emerald-400' : 'text-red-400'}`}>
                            {item.trendUp ? <TrendingUp size={14}/> : <TrendingDown size={14}/>} {item.trend}
                          </span>
                        </td>
                        <td className="py-4 flex justify-end">
                          <Sparkline data={item.sparkline} color={item.trendUp ? '#34D399' : '#EF4444'} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mt-4">
                <button className="text-xs bg-[#1a2332] text-blue-400 border border-[#2e4060] rounded-lg px-3 py-1.5 hover:bg-[#202b3d] transition-colors">
                  View All Commodities
                </button>
              </div>
            </div>

            {/* Market Insight Banner */}
            <div className="bg-[#13151A] border border-emerald-500/20 rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <BookOpen size={20} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Market Insight</p>
                <p className="text-xs text-gray-300">Milk prices are expected to rise by 8% in next 7 days due to higher demand.</p>
              </div>
            </div>

          </div>
        )}
      </motion.div>
    </div>
  );
};
