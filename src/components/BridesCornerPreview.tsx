
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Image, MessageSquare, Pencil } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BridesCornerPreview = () => {
  const features = [
    {
      icon: Heart,
      title: 'Your Wedding Journey',
      description: 'Track your personal milestones and celebrate every special moment leading to your big day.',
      href: '/brides-corner',
      color: 'text-pink-600'
    },
    {
      icon: Image,
      title: 'Inspiration Collection',
      description: 'Save and organize beautiful wedding ideas that speak to your heart and style.',
      href: '/brides-corner/inspiration',
      color: 'text-purple-600'
    },
    {
      icon: Pencil,
      title: 'Personal Diary',
      description: 'Document your thoughts, dreams, and memories throughout this incredible journey.',
      href: '/brides-corner/notes',
      color: 'text-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'Bride Community',
      description: 'Connect with other brides for emotional support, friendship, and shared experiences.',
      href: '/brides-corner/community',
      color: 'text-rose-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Personal <span className="text-[#917f4f]">Bride's Corner</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A beautiful space designed just for you - to inspire, support, and celebrate 
            every moment of your unique wedding journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto p-3 rounded-full bg-gray-50 w-fit mb-4`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription className="text-gray-600 mb-4">
                  {feature.description}
                </CardDescription>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white"
                >
                  <Link to={feature.href}>
                    Explore
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg"
            className="bg-[#917f4f] hover:bg-[#7a6a42] text-white px-8 py-3"
          >
            <Link to="/brides-corner">
              Start Your Personal Wedding Journey
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BridesCornerPreview;
