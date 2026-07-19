import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Settings, FileText, AlertTriangle, ShieldCheck, CloudSun, CalendarDays, Download, FileSpreadsheet, Share2 } from 'lucide-react';

export const ReportsModule = () => {
  const [activeTab, setActiveTab] = useState('My Reports');
  const tabs = ['My Reports', 'Analytics', 'Export'];

  const reportsList = [
    { title: 'Financial Report', desc: 'Monthly income, expense & cash flow report', icon: <FileText size={20} className="text-blue-400"/>, bg: 'bg-blue-500/10' },
    { title: 'Risk Analysis Report', desc: 'Detailed risk analysis and recommendations', icon: <AlertTriangle size={20} className="text-red-400"/>, bg: 'bg-red-500/10' },
    { title: 'Loan Eligibility Report', desc: 'Loan eligibility and credit report', icon: <ShieldCheck size={20} className="text-emerald-400"/>, bg: 'bg-emerald-500/10' },
    { title: 'Weather Impact Report', desc: 'Weather impact on business report', icon: <CloudSun size={20} className="text-blue-400"/>, bg: 'bg-blue-500/10' },
    { title: 'Annual Summary Report', desc: 'Yearly financial summary report', icon: <CalendarDays size={20} className="text-amber-400"/>, bg: 'bg-amber-500/10' },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto pb-10 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Reports</h2>
          <p className="text-sm text-gray-400">Generate, download and share detailed reports</p>
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
        {activeTab === 'My Reports' && (
          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full mt-4">
            
            {/* Reports List */}
            <div className="bg-[#13151A] rounded-xl border border-white/5 p-6">
              <div className="space-y-4">
                {reportsList.map((report, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-white/5 rounded-xl bg-[#0b0e14] hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${report.bg}`}>
                        {report.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{report.title}</h4>
                        <p className="text-[11px] text-gray-400 mt-0.5">{report.desc}</p>
                      </div>
                    </div>
                    <button className="text-xs bg-[#1a2332] text-blue-400 border border-[#2e4060] rounded-lg px-4 py-2 hover:bg-[#202b3d] transition-colors whitespace-nowrap">
                      Generate
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Options */}
            <div className="bg-[#13151A] rounded-xl border border-white/5 p-6">
              <h3 className="text-white font-bold mb-4">Export Options</h3>
              <div className="flex flex-wrap items-center gap-4">
                <button className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors">
                  <Download size={14} /> Download PDF
                </button>
                <button className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-lg hover:bg-emerald-500/20 transition-colors">
                  <FileSpreadsheet size={14} /> Download Excel
                </button>
                <button className="flex items-center gap-2 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-lg hover:bg-blue-500/20 transition-colors">
                  <Share2 size={14} /> Share Report
                </button>
              </div>
            </div>

          </div>
        )}
      </motion.div>
    </div>
  );
};
