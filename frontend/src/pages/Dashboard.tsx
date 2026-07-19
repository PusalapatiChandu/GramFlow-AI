import React, { useState, useEffect } from 'react';
import { apiClient } from '../services/api';
import { DashboardMetricsRow } from '../components/dashboard/DashboardMetricsRow';
import { CashFlowOverviewChart } from '../components/dashboard/CashFlowOverviewChart';
import { AiInsightsPanel } from '../components/dashboard/AiInsightsPanel';
import { FinancialHealthGauge, TopRecommendationCard } from '../components/dashboard/DashboardBottomCards';
import { TransactionsAndReminders } from '../components/dashboard/TransactionsAndReminders';
import { FinancialTransactionsList } from '../components/financial/FinancialTransactionsList';
import { CloudSun, Calendar, Bell, HelpCircle } from 'lucide-react';

export const Dashboard = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  const [enterprise, setEnterprise] = useState<any>(null);
  const [riskData, setRiskData] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const entRes = await apiClient.get('/enterprises');
        if (entRes.data && entRes.data.length > 0) {
          const firstEnt = entRes.data[0];
          setEnterprise(firstEnt);
          
          const riskRes = await apiClient.get(`/enterprises/${firstEnt.id}/risk`);
          setRiskData(riskRes.data);
        }
      } catch (e) {
        console.error("Failed to load dashboard data", e);
      }
    };
    loadData();
  }, []);

  return (
    <div className="w-full max-w-[1400px] mx-auto pb-10">
      
      {/* Dashboard Specific Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Good Morning, Akhil 👋</h1>
          <p className="text-sm text-gray-400 mt-1">Dairy Farm • Nellore, Andhra Pradesh</p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Weather Widget */}
          <div className="flex items-center gap-3 px-4 py-2 bg-[#13151A] border border-white/5 rounded-lg">
            <CloudSun size={24} className="text-yellow-500" />
            <div>
              <p className="text-sm font-bold text-white leading-none">28°C</p>
              <p className="text-xs text-gray-400 mt-1">Mostly Cloudy</p>
            </div>
          </div>
          
          {/* Date Widget */}
          <div className="flex items-center gap-3 px-4 py-2 bg-[#13151A] border border-white/5 rounded-lg hidden sm:flex">
            <Calendar size={20} className="text-gray-400" />
            <div>
              <p className="text-sm font-bold text-white leading-none">19 May 2026</p>
              <p className="text-xs text-gray-400 mt-1">Monday</p>
            </div>
          </div>

          {/* Notification & Help */}
          <button className="relative p-2.5 rounded-full bg-[#13151A] border border-white/5 text-gray-400 hover:text-white transition-colors ml-2">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#13151A]"></span>
          </button>
          <button className="p-2.5 rounded-full bg-[#13151A] border border-white/5 text-gray-400 hover:text-white transition-colors">
            <HelpCircle size={20} />
          </button>
        </div>
      </div>

      {/* Top Metrics Row */}
      <DashboardMetricsRow 
        totalBalance={enterprise?.currentBalance} 
        aiRiskScore={riskData?.risk_score} 
      />

      {/* Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 min-h-[350px]">
          <CashFlowOverviewChart />
        </div>
        <div className="lg:col-span-1 min-h-[350px]">
          <AiInsightsPanel />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="min-h-[250px]">
          <FinancialHealthGauge />
        </div>
        <div className="min-h-[250px]">
          <TopRecommendationCard />
        </div>
        <div className="lg:col-span-2 min-h-[250px]">
          <FinancialTransactionsList />
        </div>
      </div>
    </div>
  );
};
