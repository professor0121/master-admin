import React, { useState} from 'react';
import SubNavBar from './components/SubNavBar'; 
import DashboardContent from './components/DashboardContent';
import Header from './components/Header'; 

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