import React, { useState, useRef, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Users, DollarSign, TrendingUp, TrendingDown, Eye, Settings, Bell, Search, ChevronDown } from 'lucide-react';

// Sample data based on your images
const chartData = {
  casibon: [
    { name: 'Active Users', value: 65, color: '#3B82F6' },
    { name: 'Inactive Users', value: 35, color: '#FCD34D' }
  ],
  onwin: [
    { name: 'Active Users', value: 70, color: '#3B82F6' },
    { name: 'Inactive Users', value: 30, color: '#FCD34D' }
  ],
  jojobet: [
    { name: 'Active Users', value: 60, color: '#3B82F6' },
    { name: 'Inactive Users', value: 40, color: '#FCD34D' }
  ]
};

const statsData = {
  totalUsers: 640058,
  activeUsers: 425000,
  statusContracts: 580000,
  pendingUsers: 45058,
  rejectedUsers: 25000,
  waitingUsers: 15000,
  waitingForReturns: 500058,
  returnRejected: 12000,
  returnCompleted: 575665
};

// Header Component with Profile Dropdown
const Header = ({ activeTab, setActiveTab }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const menuItems = [
    { id: 'overview', label: 'All Data', icon: Eye },
    { id: 'casibon', label: 'Casibon', icon: Users },
    { id: 'onwin', label: 'Onwin', icon: TrendingUp },
    { id: 'jojobet', label: 'JojoBet', icon: DollarSign },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = (itemId) => {
    setActiveTab(itemId);
    setDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-800 hidden md:block">Master Admin Panel</h1>
          <div className="hidden md:block">
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-64 w-48"
            />
          </div>
          
          <button className="hidden p-2 rounded-lg hover:bg-gray-100 relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </button>
          
          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
              <span className="text-gray-700 font-medium">Admin</span>
              <ChevronDown 
                size={16} 
                className={`text-gray-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-800">Navigation</p>
                  <p className="text-xs text-gray-500">Switch between sections</p>
                </div>
                
                <div className="py-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleMenuClick(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                          activeTab === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        <Icon size={18} />
                        <span className="font-medium">{item.label}</span>
                        {activeTab === item.id && (
                          <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
                
                <div className="border-t border-gray-100 pt-2">
                  <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 text-gray-700">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">A</span>
                    </div>
                    <span className="font-medium">Account Settings</span>
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// Stats Card Component
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

// Chart Component
const ChartCard = ({ title, data, height = 280 }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">{title}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value, name) => [`${value}%`, name]}
            contentStyle={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

// Main Dashboard Content
const DashboardContent = ({ activeTab }) => {
  const renderOverview = () => (
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

  const renderSpecificPlatform = (platform) => (
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

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Account Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Email Notifications</span>
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">SMS Alerts</span>
                <input type="checkbox" className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Dark Mode</span>
                <input type="checkbox" className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Platform Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Auto-refresh Data</span>
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Export Reports</span>
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Advanced Analytics</span>
                <input type="checkbox" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  switch (activeTab) {
    case 'overview':
      return renderOverview();
    case 'casibon':
      return renderSpecificPlatform('casibon');
    case 'onwin':
      return renderSpecificPlatform('onwin');
    case 'jojobet':
      return renderSpecificPlatform('jojobet');
    case 'settings':
      return renderSettings();
    default:
      return renderOverview();
  }
};



// SubNavBar.jsx


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




// Main Dashboard Component
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <SubNavBar/>
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <DashboardContent activeTab={activeTab} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;