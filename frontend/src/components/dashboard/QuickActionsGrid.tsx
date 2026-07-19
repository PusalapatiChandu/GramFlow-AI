import { Plus, Minus, ScanFace, MessageSquare, FileText, Landmark } from 'lucide-react';

export const QuickActionsGrid = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  const actions = [
    { label: 'Add Income', icon: <Plus size={20} className="text-emerald-400" />, action: () => {} },
    { label: 'Add Expense', icon: <Minus size={20} className="text-red-400" />, action: () => {} },
    { label: 'Scan Bill (OCR)', icon: <ScanFace size={20} className="text-blue-400" />, action: () => onNavigate?.('ocr') },
    { label: 'AI Chat', icon: <MessageSquare size={20} className="text-purple-400" />, action: () => onNavigate?.('chat') },
    { label: 'Generate Report', icon: <FileText size={20} className="text-amber-400" />, action: () => onNavigate?.('reports') },
    { label: 'View Loans', icon: <Landmark size={20} className="text-emerald-400" />, action: () => onNavigate?.('loans') },
  ];

  return (
    <div className="bg-[#13151A] rounded-xl border border-white/5 p-5 h-full flex flex-col">
      <h3 className="text-white font-bold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-3 gap-3 flex-1">
        {actions.map((act, i) => (
          <button 
            key={i} 
            onClick={act.action}
            className="flex flex-col items-center justify-center gap-2 p-2 rounded-xl border border-white/5 bg-[#0b0e14] hover:bg-white/5 transition-colors group"
          >
            <div className="p-2 bg-[#13151A] rounded-lg group-hover:scale-110 transition-transform">
              {act.icon}
            </div>
            <span className="text-[10px] text-gray-300 text-center leading-tight">{act.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
