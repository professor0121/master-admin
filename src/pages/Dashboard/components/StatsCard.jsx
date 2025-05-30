import React, { useState } from 'react';
import { Bell, DollarSign, TrendingUp,TrendingDown, Eye, Users, Settings } from 'lucide-react';

const StatsCard = ({ title, value, icon: Icon, trend, trendValue, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
    red: 'bg-red-50 text-red-600 border-red-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{value.toLocaleString()}</p>
          {trend && (
            <div className={`flex items-center mt-3 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span className="text-sm font-medium ml-1">{trendValue}%</span>
            </div>
          )}
        </div>
        <div className={`p-4 rounded-lg border ${colorClasses[color]}`}>
          <Icon size={28} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;