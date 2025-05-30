import React, { useState } from 'react';
import { Bell, DollarSign, TrendingUp, Eye, Users, Settings } from 'lucide-react';
import ChartCard from './ChartCard';
import StatsCard from './StatsCard';

 const Onwin = ({statsData,chartData}) => {
    const [platform] = useState('onwin');
    return (
    <div className="space-y-8">
      {/* Platform Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 capitalize">{platform} Platform</h2>
        <p className="text-gray-600">Detailed analytics and user management for {platform}</p>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <ChartCard 
          title={`${platform.charAt(0).toUpperCase() + platform.slice(1)} User Distribution`} 
          data={chartData[platform]} 
          height={350} 
        />
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatsCard
              title="Active Users"
              value={Math.round(statsData.activeUsers * (chartData[platform][0].value / 100))}
              icon={Users}
              color="green"
            />
            <StatsCard
              title="Inactive Users"
              value={Math.round(statsData.activeUsers * (chartData[platform][1].value / 100))}
              icon={Users}
              color="yellow"
            />
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-4 text-lg">Platform Statistics</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Total Registered:</span>
                <span className="font-bold text-lg">{Math.round(statsData.totalUsers * 0.3).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Monthly Active:</span>
                <span className="font-bold text-lg">{Math.round(statsData.activeUsers * 0.25).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Conversion Rate:</span>
                <span className="font-bold text-lg text-green-600">{chartData[platform][0].value}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Platform Revenue:</span>
                <span className="font-bold text-lg text-blue-600">${Math.round(Math.random() * 1000000).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onwin;