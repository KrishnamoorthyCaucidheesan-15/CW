
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  Users, 
  Gift, 
  MessageCircle, 
  BookOpen, 
  Settings,
  HelpCircle,
  Phone,
  Mail
} from 'lucide-react';

const MobileMenu = () => {
  const menuSections = [
    {
      title: 'Planning Tools',
      items: [
        { icon: Calendar, label: 'Wedding Checklist', path: '/brides-corner/checklist' },
        { icon: Gift, label: 'Budget Planner', path: '/brides-corner/budget' },
        { icon: BookOpen, label: 'Inspiration Board', path: '/brides-corner/inspiration' }
      ]
    },
    {
      title: 'Community',
      items: [
        { icon: MessageCircle, label: 'Forum', path: '/forum' },
        { icon: Users, label: 'Bride Community', path: '/brides-corner/community' },
        { icon: BookOpen, label: 'Blog', path: '/blog' }
      ]
    },
    {
      title: 'Business',
      items: [
        { icon: Settings, label: 'Vendor Dashboard', path: '/vendor-dashboard' },
        { icon: Gift, label: 'Special Offers', path: '/offers' },
        { icon: MessageCircle, label: 'Classifieds', path: '/classifieds' }
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', path: '/help' },
        { icon: Phone, label: 'Contact Us', path: '/contact' },
        { icon: Mail, label: 'Feedback', path: '/feedback' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Menu</h1>
          <p className="text-gray-600">Everything you need for your perfect wedding</p>
        </div>

        {menuSections.map((section) => (
          <Card key={section.title}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-[#917f4f] mr-3" />
                    <span className="font-medium text-gray-900">{item.label}</span>
                  </Link>
                );
              })}
            </CardContent>
          </Card>
        ))}

        <div className="mt-8 space-y-3">
          <Button asChild className="w-full bg-[#917f4f] hover:bg-[#7a6a42]">
            <Link to="/signup">Start Planning Your Wedding</Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white">
            <Link to="/vendor-signup">Join as a Vendor</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MobileMenu;
