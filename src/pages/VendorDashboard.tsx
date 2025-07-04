
import React from 'react';
import VendorSidebar from '@/components/vendor/VendorSidebar';
import DashboardStats from '@/components/vendor/DashboardStats';
import QuickActions from '@/components/vendor/QuickActions';
import AlbumsGrid from '@/components/vendor/AlbumsGrid';
import InsightsChart from '@/components/vendor/InsightsChart';
import NotificationBar from '@/components/vendor/NotificationBar';

const VendorDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <VendorSidebar />
      <div className="flex-1 flex flex-col">
        <NotificationBar />
        <main className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className="text-sm text-gray-500">
              Welcome back, Vendor Name
            </div>
          </div>
          
          <DashboardStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <QuickActions />
              <AlbumsGrid />
            </div>
            <div className="space-y-6">
              <InsightsChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VendorDashboard;
