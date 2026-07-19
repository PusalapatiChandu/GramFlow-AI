export const CashFlowSummaryCard = () => {
  return (
    <div className="bg-[#13151A] rounded-xl border border-white/5 p-5">
      <h3 className="text-white font-bold mb-4">Cash Flow Summary <span className="text-gray-500 font-normal text-xs">(This Month)</span></h3>
      
      <div className="space-y-4 text-sm">
        <div className="flex justify-between items-center pb-2 border-b border-white/5">
          <span className="text-gray-300">Opening Balance</span>
          <span className="text-white">₹74,800</span>
        </div>
        
        <div className="flex justify-between items-center pb-2 border-b border-white/5">
          <span className="text-gray-300">Total Income</span>
          <span className="text-emerald-400 font-bold">+ ₹95,000</span>
        </div>
        
        <div className="flex justify-between items-center pb-4 border-b border-white/5">
          <span className="text-gray-300">Total Expense</span>
          <span className="text-red-400 font-bold">- ₹45,300</span>
        </div>
        
        <div className="flex justify-between items-center pb-2">
          <span className="text-gray-300">Net Cash Flow</span>
          <span className="text-blue-400 font-bold">₹49,700</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300 font-bold">Closing Balance</span>
          <span className="text-white font-bold text-lg">₹1,24,500</span>
        </div>
      </div>
    </div>
  );
};
