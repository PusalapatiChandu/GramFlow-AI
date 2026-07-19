import React, { useState } from 'react';
import { 
  LayoutDashboard, LineChart, ShieldAlert, Cloud, Landmark, 
  Sliders, FileText, Settings, Leaf, Bell, HelpCircle, Calendar, CloudSun
} from 'lucide-react';

interface AppLayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const NavItem = ({ icon, label, pageId }: { icon: React.ReactNode, label: string, pageId: string }) => {
    const isActive = activePage === pageId;
    return (
      <button
        onClick={() => onNavigate(pageId)}
        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all ${
          isActive 
            ? 'text-white bg-[#13151A] border-l-2 border-emerald-500' 
            : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
        }`}
      >
        <span className={isActive ? 'text-emerald-500' : ''}>{icon}</span>
        {isSidebarOpen && label}
      </button>
    );
  };

  return (
    <div className="flex h-screen bg-[#0b0e14] text-gray-200 overflow-hidden font-sans">
      
      {/* Sidebar */}
      <aside className={`flex flex-col bg-[#0b0e14] border-r border-[#1F2937] transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} shrink-0 z-20`}>
        {/* Logo */}
        <div className="h-20 flex items-center px-6 border-b border-[#1F2937] shrink-0">
          <Leaf className="text-emerald-500 shrink-0" size={24} />
          {isSidebarOpen && (
            <div className="ml-3 overflow-hidden">
              <h1 className="text-lg font-bold text-white leading-tight whitespace-nowrap">GramFlow AI</h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider whitespace-nowrap">Rural Finance Intelligence</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 space-y-1 scrollbar-hide">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" pageId="dashboard" />
          <NavItem icon={<LineChart size={18} />} label="Financial Insights" pageId="financial" />
          <NavItem icon={<ShieldAlert size={18} />} label="AI Advisor" pageId="intelligence" />
          <NavItem icon={<Cloud size={18} />} label="Market Intelligence" pageId="climate" />
          <NavItem icon={<Landmark size={18} />} label="Loans & Schemes" pageId="loans" />
          <NavItem icon={<Sliders size={18} />} label="Future Simulator" pageId="simulator" />
          <NavItem icon={<FileText size={18} />} label="Reports" pageId="reports" />
        </nav>

        {/* Settings & Profile */}
        <div className="shrink-0 p-4 space-y-4">
          <NavItem icon={<Settings size={18} />} label="Settings" pageId="settings" />
          
          {isSidebarOpen && (
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#13151A] border border-white/5 mt-4">
              <img src="https://ui-avatars.com/api/?name=Akhil&background=0D8ABC&color=fff" alt="Profile" className="w-10 h-10 rounded-full shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-bold text-white truncate">Akhil</p>
                <p className="text-xs text-gray-400 truncate">Dairy Farm</p>
                <p className="text-xs text-gray-500 truncate">Nellore, AP</p>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        


        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 relative scrollbar-hide">
          {children}
        </div>
      </main>
    </div>
  );
};
