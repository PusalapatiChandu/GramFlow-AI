import React from 'react';
import { motion } from 'framer-motion';

interface TabsUIProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const TabsUI: React.FC<TabsUIProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-1 bg-white/5 p-1 rounded-xl border border-white/10 overflow-x-auto scrollbar-hide mb-6">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`relative flex-1 min-w-[120px] px-4 py-2.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
              isActive ? 'text-white' : 'text-muted-foreground hover:text-white hover:bg-white/5'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-blue-600 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        );
      })}
    </div>
  );
};
