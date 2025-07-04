
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  CheckSquare, 
  DollarSign, 
  Calendar, 
  Users, 
  MessageSquare, 
  Lightbulb,
  Palette,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import MoodboardPreviewSection from './MoodboardPreviewSection';

const BridesCornerDashboard = () => {
  const quickActions = [
    {
      title: 'Wedding Checklist',
      description: 'Track your planning progress',
      icon: CheckSquare,
      href: '/brides-corner/checklist',
      color: 'bg-emerald-500',
      progress: 65,
      urgentTasks: 3
    },
    {
      title: 'Budget Tracker',
      description: 'Manage your wedding expenses',
      icon: DollarSign,
      href: '/brides-corner/budget',
      color: 'bg-blue-500',
      spent: 45000,
      budget: 80000
    },
    {
      title: 'Inspiration Board',
      description: 'Collect ideas for your big day',
      icon: Lightbulb,
      href: '/brides-corner/inspiration',
      color: 'bg-purple-500',
      savedItems: 24
    },
    {
      title: 'Community',
      description: 'Connect with other brides',
      icon: Users,
      href: '/brides-corner/community',
      color: 'bg-pink-500',
      newMessages: 5
    }
  ];

  const recentActivity = [
    {
      action: 'Saved venue inspiration',
      item: 'Garden Paradise Wedding',
      time: '2 hours ago',
      icon: Heart
    },
    {
      action: 'Completed task',
      item: 'Book wedding photographer',
      time: '1 day ago',
      icon: CheckSquare
    },
    {
      action: 'Updated budget',
      item: 'Catering expenses',
      time: '2 days ago',
      icon: DollarSign
    },
    {
      action: 'Joined discussion',
      item: 'Outdoor ceremony tips',
      time: '3 days ago',
      icon: MessageSquare
    }
  ];

  const upcomingMilestones = [
    {
      title: 'Final venue walkthrough',
      date: 'Next Monday',
      priority: 'high'
    },
    {
      title: 'Cake tasting appointment',
      date: 'Wednesday',
      priority: 'medium'
    },
    {
      title: 'Send invitations',
      date: 'This weekend',
      priority: 'high'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickActions.map((action, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className={`${action.color} p-3 rounded-xl text-white shadow-lg`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#917f4f] transition-colors" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardTitle className="text-lg font-serif font-bold text-gray-900 mb-2 group-hover:text-[#917f4f] transition-colors">
                {action.title}
              </CardTitle>
              <p className="text-gray-600 text-sm mb-4">{action.description}</p>
              
              {/* Dynamic status indicators */}
              {action.progress && (
                <div className="mb-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">{action.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${action.progress}%` }}
                    />
                  </div>
                  {action.urgentTasks && (
                    <p className="text-xs text-orange-600 mt-1 font-medium">
                      {action.urgentTasks} urgent tasks
                    </p>
                  )}
                </div>
              )}
              
              {action.spent && action.budget && (
                <div className="mb-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Spent</span>
                    <span className="font-medium text-gray-900">
                      ${action.spent.toLocaleString()} / ${action.budget.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(action.spent / action.budget) * 100}%` }}
                    />
                  </div>
                </div>
              )}
              
              {action.savedItems && (
                <div className="mb-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-purple-600">{action.savedItems}</span> saved items
                  </p>
                </div>
              )}
              
              {action.newMessages && (
                <div className="mb-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-pink-600">{action.newMessages}</span> new messages
                  </p>
                </div>
              )}
              
              <Button 
                asChild 
                variant="outline" 
                className="w-full border-gray-200 hover:border-[#917f4f] hover:text-[#917f4f] transition-colors"
              >
                <Link to={action.href}>
                  Open
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Moodboard Preview */}
        <div className="lg:col-span-2">
          <MoodboardPreviewSection />
        </div>

        {/* Right Column - Activity & Milestones */}
        <div className="space-y-6">
          {/* Upcoming Milestones */}
          <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-serif font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#917f4f]" />
                Upcoming Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMilestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      milestone.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                    }`} />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{milestone.title}</p>
                      <p className="text-xs text-gray-600 flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        {milestone.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white">
                View All Tasks
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-serif font-bold text-gray-900 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[#917f4f]" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#917f4f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <activity.icon className="h-4 w-4 text-[#917f4f]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.action}</span>
                      </p>
                      <p className="text-xs text-gray-600 truncate">{activity.item}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Inspiration Widget */}
          <Card className="border-0 shadow-md bg-gradient-to-br from-[#917f4f]/5 to-purple-100/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-serif font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#917f4f]" />
                Daily Inspiration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-sm text-gray-700 italic mb-4">
                  "The best thing to hold onto in life is each other."
                </p>
                <p className="text-xs text-gray-500 mb-4">- Audrey Hepburn</p>
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm"
                  className="border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white"
                >
                  <Link to="/brides-corner/inspiration">
                    <Palette className="h-4 w-4 mr-2" />
                    Find More Inspiration
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BridesCornerDashboard;
