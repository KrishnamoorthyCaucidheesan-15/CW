
import React from 'react';
import { X, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotificationBar = () => {
  const notifications = [
    {
      id: 1,
      type: 'success',
      message: 'Your album "Romantic Garden Wedding" has been approved and is now live!',
      icon: CheckCircle
    },
    {
      id: 2,
      type: 'warning',
      message: 'Album "Beachside Celebration" is pending review. Approval typically takes 24-48 hours.',
      icon: Clock
    }
  ];

  const getNotificationStyles = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  if (notifications.length === 0) return null;

  return (
    <div className="bg-white border-b border-gray-200 p-4 space-y-2">
      {notifications.map((notification) => {
        const Icon = notification.icon;
        return (
          <div
            key={notification.id}
            className={`flex items-center justify-between p-3 rounded-2xl border ${getNotificationStyles(notification.type)}`}
          >
            <div className="flex items-center space-x-3">
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{notification.message}</span>
            </div>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default NotificationBar;
