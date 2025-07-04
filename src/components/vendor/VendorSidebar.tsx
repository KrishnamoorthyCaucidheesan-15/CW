
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  User, 
  Upload, 
  FolderOpen, 
  BarChart3, 
  CreditCard, 
  Gift,
  LogOut
} from 'lucide-react';

const VendorSidebar = () => {
  const location = useLocation();
  
  const navigationItems = [
    { icon: User, label: 'Profile Overview', path: '/vendor/profile' },
    { icon: Upload, label: 'Upload Albums', path: '/vendor/upload' },
    { icon: FolderOpen, label: 'Manage Albums', path: '/vendor/albums' },
    { icon: BarChart3, label: 'View Insights', path: '/vendor/insights' },
    { icon: CreditCard, label: 'Subscription & Billing', path: '/vendor/billing' },
    { icon: Gift, label: 'Add Offers', path: '/vendor/offers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <Link to="/">
          <h2 className="text-xl font-bold text-gray-900">
            Wedding<span className="text-[#917f4f]">Dreams</span>
          </h2>
        </Link>
        <p className="text-sm text-gray-500 mt-1">Vendor Portal</p>
      </div>
      
      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2 rounded-2xl text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? 'bg-[#917f4f] text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-2xl hover:bg-gray-100 transition-colors">
          <LogOut className="h-5 w-5 mr-3" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default VendorSidebar;
