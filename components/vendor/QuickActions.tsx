
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Plus, Settings, BarChart3 } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      title: 'Upload New Album',
      description: 'Add your latest work',
      icon: Upload,
      primary: true
    },
    {
      title: 'Create Offer',
      description: 'Attract new clients',
      icon: Plus,
      primary: false
    },
    {
      title: 'View Analytics',
      description: 'Check performance',
      icon: BarChart3,
      primary: false
    },
    {
      title: 'Update Profile',
      description: 'Edit your information',
      icon: Settings,
      primary: false
    }
  ];

  return (
    <Card className="bg-white shadow-sm rounded-2xl border-0">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Button
                key={index}
                variant={action.primary ? "default" : "outline"}
                className={`h-auto p-4 justify-start rounded-2xl ${
                  action.primary 
                    ? 'bg-[#917f4f] hover:bg-[#7a6b42] text-white shadow-md' 
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">{action.title}</div>
                    <div className={`text-sm ${action.primary ? 'text-white/80' : 'text-gray-500'}`}>
                      {action.description}
                    </div>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
