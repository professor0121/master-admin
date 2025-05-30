import React, { useState } from 'react';
import { Bell, DollarSign, TrendingUp, Eye, Users, Settings } from 'lucide-react';

const SubNavBar = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const subMenuItems = [
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'transactions', label: 'Transactions', icon: DollarSign },
    { id: 'reports', label: 'Reports', icon: TrendingUp },
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'casibon', label: 'Casibon', icon: Users },
    { id: 'onwin', label: 'Onwin', icon: TrendingUp },
    { id: 'jojobet', label: 'JojoBet', icon: DollarSign },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleMenuClick = (tabId) => {
    setActiveTab(tabId);
    // Add navigation logic or event handler here if needed
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 overflow-x-auto">
          {subMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-100 text-blue-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SubNavBar;