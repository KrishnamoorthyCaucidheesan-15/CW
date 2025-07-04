
import React, { useState, useEffect } from 'react';
import { Calendar, Heart, Edit, Camera, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BridesCornerHeader = () => {
  const [weddingDate, setWeddingDate] = useState<Date | null>(new Date('2024-12-15'));
  const [countdown, setCountdown] = useState('');
  const [detailedCountdown, setDetailedCountdown] = useState('');
  const brideName = 'Sarah';
  const partnerName = 'Michael';

  useEffect(() => {
    if (!weddingDate) return;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const weddingTime = weddingDate.getTime();
      const difference = weddingTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        
        if (days > 0) {
          setCountdown(`${days} days to go`);
          setDetailedCountdown(`${days} days, ${hours} hours, ${minutes} minutes`);
        } else if (hours > 0) {
          setCountdown(`${hours} hours to go`);
          setDetailedCountdown(`${hours} hours, ${minutes} minutes`);
        } else {
          setCountdown('Today is the day!');
          setDetailedCountdown('Your special moment is here!');
        }
      } else {
        setCountdown('Congratulations!');
        setDetailedCountdown('Your beautiful journey has begun ✨');
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const getMotivationalMessage = () => {
    if (!weddingDate) return "Let's start planning your perfect day!";
    
    const now = new Date().getTime();
    const weddingTime = weddingDate.getTime();
    const difference = weddingTime - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    
    if (days > 180) return "Take your time - every detail will be perfect! 💕";
    if (days > 90) return "You're making amazing progress! Keep going! ✨";
    if (days > 30) return "The final stretch - you've got this! 🎉";
    if (days > 7) return "Almost there! The magic is about to happen! 💖";
    if (days > 0) return "This week will be unforgettable! So excited for you! 🥂";
    return "Congratulations on your beautiful wedding! 👰💒";
  };

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#917f4f]/5 to-pink-200/20" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-tr-full" />
          
          <div className="relative p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Left Section - Greeting & Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#917f4f] to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900">
                      {getGreeting()}, {brideName}!
                    </h1>
                    <p className="text-gray-600 text-sm lg:text-base">{getMotivationalMessage()}</p>
                  </div>
                </div>

                {/* Wedding Details */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="h-4 w-4 text-[#917f4f] fill-current" />
                    <span className="text-sm font-medium text-gray-700">Your Special Day</span>
                  </div>
                  {weddingDate ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Wedding Date</p>
                        <p className="font-serif font-bold text-gray-900">
                          {weddingDate.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Couple</p>
                        <p className="font-serif font-bold text-gray-900">
                          {brideName} & {partnerName}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600">Set your wedding date to see countdown</p>
                  )}
                </div>
              </div>

              {/* Right Section - Countdown */}
              <div className="lg:min-w-[280px]">
                {weddingDate ? (
                  <div className="bg-gradient-to-br from-[#917f4f] to-pink-600 text-white rounded-2xl p-6 shadow-xl">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Heart className="h-5 w-5 fill-current animate-pulse" />
                        <span className="text-sm font-medium opacity-90">Wedding Countdown</span>
                        <Heart className="h-5 w-5 fill-current animate-pulse" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-bold mb-2">{countdown}</div>
                      <div className="text-sm opacity-75 mb-4">{detailedCountdown}</div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="secondary" 
                          size="sm"
                          className="flex-1 bg-white/20 hover:bg-white/30 text-white border-white/30"
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          Update
                        </Button>
                        <Button 
                          variant="secondary" 
                          size="sm"
                          className="flex-1 bg-white/20 hover:bg-white/30 text-white border-white/30"
                        >
                          <Camera className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-100 text-gray-600 rounded-2xl p-6 text-center">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                    <div className="text-lg font-medium mb-2">Set Your Wedding Date</div>
                    <p className="text-sm text-gray-500 mb-4">Start your countdown to the perfect day</p>
                    <Button className="bg-[#917f4f] text-white hover:opacity-90">
                      <Edit className="h-4 w-4 mr-2" />
                      Choose Date
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BridesCornerHeader;
