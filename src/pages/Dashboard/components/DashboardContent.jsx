import Overview from './Overview';
import Onwin from './Onwin';
import Casibon from './Casibon';
import Jojobet from './Jojobet';
import Settings from './Settings';

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

const DashboardContent = ({ activeTab }) => {
    switch (activeTab) {
        case 'overview':
            return <Overview chartData={chartData} statsData={statsData} />;
        case 'casibon':
            return <Casibon chartData={chartData} statsData={statsData} />;
        case 'onwin':
            return <Onwin chartData={chartData} statsData={statsData} />;
        case 'jojobet':
            return <Jojobet chartData={chartData} statsData={statsData} />;
        case 'settings':
            return <Settings />;
        default:
            return <Overview chartData={chartData} statsData={statsData} />;
    }
};
export default DashboardContent;