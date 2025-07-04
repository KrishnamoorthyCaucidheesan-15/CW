
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Heart, User, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/categories' },
    { icon: Heart, label: 'Saved', path: '/brides-corner' },
    { icon: User, label: 'Account', path: '/login' },
    { icon: Menu, label: 'More', path: '/menu' }
  ];

  const isActive = (path: string) => {
    if (path === '/categories') {
      return location.pathname === '/categories' || location.pathname === '/vendors';
    }
    if (path === '/brides-corner') {
      return location.pathname.startsWith('/brides-corner');
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center py-1 px-2 min-w-0 flex-1",
                "transition-colors duration-200",
                active ? "text-[#917f4f]" : "text-gray-500"
              )}
            >
              <Icon className={cn("h-5 w-5 mb-1", active && "fill-current")} />
              <span className="text-xs font-medium truncate">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
