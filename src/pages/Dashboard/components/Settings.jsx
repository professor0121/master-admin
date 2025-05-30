import React from 'react'

const Settings = () => {
  return (
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
  

  )
}

export default Settings