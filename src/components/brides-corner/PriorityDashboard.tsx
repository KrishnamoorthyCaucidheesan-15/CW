
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, CheckCircle, Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PriorityDashboard = () => {
  const todaysFocus = [
    { id: 1, text: 'Finalize venue contract', priority: 'high' },
    { id: 2, text: 'Book photographer consultation', priority: 'medium' },
    { id: 3, text: 'Create guest list draft', priority: 'medium' }
  ];

  const quickInspiration = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=120&h=120&fit=crop',
      category: 'Venue'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1594736797933-d0a9ba054385?w=120&h=120&fit=crop',
      category: 'Dress'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=120&h=120&fit=crop',
      category: 'Florals'
    }
  ];

  const recentActivity = [
    { id: 1, action: 'Saved', item: 'Garden Paradise Venue', time: '2 hours ago' },
    { id: 2, action: 'Completed', item: 'Set wedding date', time: '1 day ago' }
  ];

  return (
    <div className="space-y-6">
      {/* Today's Focus */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-serif font-bold text-gray-900">Today's Focus</h2>
          <Button variant="ghost" size="sm" className="text-[#917f4f]">
            View All
          </Button>
        </div>
        <div className="space-y-3">
          {todaysFocus.map((task) => (
            <div key={task.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0" />
              <span className="text-gray-700 flex-1">{task.text}</span>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                task.priority === 'high' 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {task.priority}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Inspiration & Recent Activity Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Inspiration */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-serif font-bold text-gray-900">Quick Inspiration</h3>
            <Link to="/moodboard">
              <Button variant="ghost" size="sm" className="text-[#917f4f]">
                <Plus className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex gap-3">
            {quickInspiration.map((item) => (
              <div key={item.id} className="relative group cursor-pointer">
                <div className="w-20 h-20 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -top-1 -right-1 bg-[#917f4f] text-white px-2 py-0.5 rounded-full text-xs">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
          <Link to="/moodboard">
            <Button variant="outline" className="w-full mt-4 border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white">
              View Full Board
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.action === 'Completed' ? 'bg-green-500' : 'bg-[#917f4f]'
                }`} />
                <div className="flex-1">
                  <div className="text-sm text-gray-900">
                    <span className="font-medium">{activity.action}</span> {activity.item}
                  </div>
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriorityDashboard;
