import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Settings, Globe, Palette, IndianRupee, Calendar, WifiOff } from 'lucide-react';

export const SettingsModule = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const tabs = ['Profile', 'Preferences', 'Notifications', 'Security'];

  return (
    <div className="w-full max-w-[1400px] mx-auto pb-10 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Settings</h2>
          <p className="text-sm text-gray-400">Manage your profile, preferences, and security</p>
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
        {activeTab === 'Profile' && (
          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full mt-4">
            
            {/* Profile Info */}
            <div className="bg-[#13151A] rounded-xl border border-white/5 p-6 relative">
              <h3 className="text-white font-bold mb-6">Profile Information</h3>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                <img src="https://ui-avatars.com/api/?name=Akhil&background=0D8ABC&color=fff" alt="Profile" className="w-24 h-24 rounded-full border border-white/10" />
                
                <div className="flex-1 w-full space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-sm text-gray-400">Name</span>
                    <span className="text-sm font-bold text-white">Akhil</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-sm text-gray-400">Business</span>
                    <span className="text-sm text-white">Dairy Farm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-sm text-gray-400">Location</span>
                    <span className="text-sm text-white">Nellore, Andhra Pradesh</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-sm text-gray-400">Phone</span>
                    <span className="text-sm text-white">+91 98765 43210</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="text-xs bg-[#1a2332] text-blue-400 border border-[#2e4060] rounded-lg px-6 py-2 hover:bg-[#202b3d] transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-[#13151A] rounded-xl border border-white/5 p-6">
              <h3 className="text-white font-bold mb-6">Preferences</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <Globe size={18} className="text-gray-400" />
                    <span className="text-sm text-white">Language</span>
                  </div>
                  <span className="text-sm text-gray-400 cursor-pointer hover:text-white flex items-center gap-1">English <span className="text-[10px]">▼</span></span>
                </div>
                
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <Palette size={18} className="text-gray-400" />
                    <span className="text-sm text-white">Theme</span>
                  </div>
                  <span className="text-sm text-gray-400 cursor-pointer hover:text-white flex items-center gap-1">Dark <span className="text-[10px]">▼</span></span>
                </div>

                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <IndianRupee size={18} className="text-gray-400" />
                    <span className="text-sm text-white">Currency</span>
                  </div>
                  <span className="text-sm text-gray-400 cursor-pointer hover:text-white flex items-center gap-1">INR (₹) <span className="text-[10px]">▼</span></span>
                </div>

                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-gray-400" />
                    <span className="text-sm text-white">Date Format</span>
                  </div>
                  <span className="text-sm text-gray-400 cursor-pointer hover:text-white flex items-center gap-1">DD MMM YYYY <span className="text-[10px]">▼</span></span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-3">
                    <WifiOff size={18} className="text-gray-400" />
                    <span className="text-sm text-white">Offline Sync</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">Enabled</span>
                    {/* Toggle Switch */}
                    <div className="w-10 h-5 bg-emerald-500 rounded-full relative cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <button className="text-xs bg-[#1a2332] text-blue-400 border border-[#2e4060] rounded-lg px-8 py-2.5 hover:bg-[#202b3d] transition-colors">
                  Save Preferences
                </button>
              </div>
            </div>

          </div>
        )}
      </motion.div>
    </div>
  );
};
