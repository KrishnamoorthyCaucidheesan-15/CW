
import React from 'react';
import { Users, MessageCircle, Plus, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ForumHeroSection = () => {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-br from-[#faf9f7] via-[#f8f6f2] to-[#f5f2ec] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-[#917f4f] opacity-20">
        <Heart className="h-16 w-16" />
      </div>
      <div className="absolute bottom-10 left-10 text-[#917f4f] opacity-20">
        <Sparkles className="h-12 w-12" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center bg-[#917f4f] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4 mr-2" />
            Join 10,000+ couples sharing their journey
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Wedding
            <span className="block text-[#917f4f]">Community Awaits</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Connect with other couples, share your experiences, and get heartfelt advice 
            from those who've walked this beautiful journey before you. 
            <span className="block mt-2 font-medium text-[#917f4f]">
              Because every love story deserves to be celebrated! 💕
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-[#917f4f] text-white hover:opacity-90 text-base px-8 py-4">
              <Plus className="h-5 w-5 mr-2" />
              Share Your Story
            </Button>
            <Button variant="outline" size="lg" className="border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white text-base px-8 py-4">
              <MessageCircle className="h-5 w-5 mr-2" />
              Browse Conversations
            </Button>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#917f4f]">10K+</div>
              <div className="text-sm text-gray-600">Happy Couples</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#917f4f]">2.5K+</div>
              <div className="text-sm text-gray-600">Discussions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#917f4f]">50K+</div>
              <div className="text-sm text-gray-600">Helpful Tips</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumHeroSection;
