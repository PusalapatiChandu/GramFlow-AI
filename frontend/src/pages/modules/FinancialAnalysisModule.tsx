import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Settings } from 'lucide-react';
import { Calendar, Filter, Download } from 'lucide-react';
import { FinancialMetricsRow } from '../../components/financial/FinancialMetricsRow';
import { CashFlowTrendComboChart } from '../../components/financial/CashFlowTrendComboChart';
import { FinancialDonuts } from '../../components/financial/FinancialDonuts';
import { FinancialTransactionsList } from '../../components/financial/FinancialTransactionsList';

export const FinancialAnalysisModule = () => {
  const [activeTab, setActiveTab] = useState('Cash Flow');
  const tabs = ['Cash Flow', 'Predictions', 'Income', 'Expenses', 'Balance Sheet'];

  return (
    <div className="w-full max-w-[1400px] mx-auto pb-10 flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Financial Insights</h2>
          <p className="text-sm text-gray-400">Track your cash flow, income, expenses and more</p>
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

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-[#1F2937] mb-6 overflow-x-auto scrollbar-hide pb-1">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-[13px] font-medium transition-colors relative whitespace-nowrap ${
              activeTab === tab ? 'text-emerald-400' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-emerald-400"></span>
            )}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
        {activeTab === 'Cash Flow' && (
          <div className="space-y-6">
            <FinancialMetricsRow />

            <div className="min-h-[400px]">
              <CashFlowTrendComboChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="min-h-[350px]">
                <FinancialDonuts />
              </div>
              <div className="min-h-[350px]">
                <FinancialTransactionsList />
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'Cash Flow' && (
          <div className="bg-[#13151A] rounded-xl border border-white/5 p-12 text-center h-[500px] flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-2 text-white">{activeTab} Details</h3>
            <p className="text-gray-500">Advanced analytics and ledgers for {activeTab.toLowerCase()}. (Hackathon Placeholder)</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};
