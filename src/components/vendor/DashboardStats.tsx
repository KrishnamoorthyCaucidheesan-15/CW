
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Heart, ImageIcon, TrendingUp } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    {
      title: 'Total Views',
      value: '12,847',
      change: '+12%',
      icon: Eye,
      trend: 'up'
    },
    {
      title: 'Saves',
      value: '3,264',
      change: '+8%',
      icon: Heart,
      trend: 'up'
    },
    {
      title: 'Albums Uploaded',
      value: '24',
      change: '+2',
      icon: ImageIcon,
      trend: 'up'
    },
    {
      title: 'Performance Score',
      value: '94%',
      change: '+5%',
      icon: TrendingUp,
      trend: 'up'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="bg-white shadow-sm rounded-2xl border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded-xl">
                    <Icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-green-600">
                    {stat.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardStats;
