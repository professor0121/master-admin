import React, { useState ,useRef,useEffect} from 'react';
import { Bell, DollarSign, TrendingUp, Eye, Users, Settings ,Search,ChevronDown} from 'lucide-react';

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

export default Header;