 import React from 'react';
import { Users, TrendingUp, DollarSign, TrendingDown } from 'lucide-react';
import StatsCard from './StatsCard';
import ChartCard from './ChartCard';

 
 const Overview = ({ chartData, statsData }) => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome to Admin Dashboard</h2>
        <p className="text-blue-100">Monitor and manage all your platforms from one central location</p>
      </div>

      {/* Primary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value={statsData.totalUsers}
          icon={Users}
          trend="up"
          trendValue="12.5"
          color="blue"
        />
        <StatsCard
          title="Active Users"
          value={statsData.activeUsers}
          icon={TrendingUp}
          trend="up"
          trendValue="8.2"
          color="green"
        />
        <StatsCard
          title="Status Contracts"
          value={statsData.statusContracts}
          icon={DollarSign}
          trend="up"
          trendValue="15.3"
          color="purple"
        />
        <StatsCard
          title="Pending Users"
          value={statsData.pendingUsers}
          icon={TrendingDown}
          trend="down"
          trendValue="3.1"
          color="yellow"
        />
      </div>

      {/* Secondary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Rejected Users"
          value={statsData.rejectedUsers}
          icon={Users}
          color="red"
        />
        <StatsCard
          title="Waiting Users"
          value={statsData.waitingUsers}
          icon={Users}
          color="yellow"
        />
        <StatsCard
          title="Waiting for Returns"
          value={statsData.waitingForReturns}
          icon={DollarSign}
          color="blue"
        />
        <StatsCard
          title="Return Completed"
          value={statsData.returnCompleted}
          icon={TrendingUp}
          color="green"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard title="Casibon Analytics" data={chartData.casibon} />
        <ChartCard title="Onwin Analytics" data={chartData.onwin} />
        <ChartCard title="JojoBet Analytics" data={chartData.jojobet} />
      </div>
    </div>
  );

export default Overview;