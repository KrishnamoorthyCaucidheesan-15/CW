
import React from 'react';
import { MessageCircle, Users, Heart } from 'lucide-react';

const Community = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#f9f7f4] to-[#f5f2ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Wedding Family
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with couples sharing the same beautiful journey, celebrate milestones together, 
            and find wisdom from those who've walked this path before you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MessageCircle className="h-8 w-8 text-[#917f4f]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Ask & Share</h3>
            <p className="text-gray-600">
              Get heartfelt advice from couples and wedding professionals who understand your journey
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="h-8 w-8 text-[#917f4f]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Celebrate Together</h3>
            <p className="text-gray-600">
              Share your victories, milestones, and beautiful moments with couples who truly understand
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Heart className="h-8 w-8 text-[#917f4f]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Find Your Tribe</h3>
            <p className="text-gray-600">
              Connect with couples who share your style, values, and vision for their special day
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Family?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Become part of a loving community where every question is welcomed, every milestone is celebrated, 
            and every love story is honored. Together, we make wedding planning a journey of joy, not stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#917f4f] text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-colors">
              Join Our Community
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-gray-400 transition-colors">
              Explore Conversations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
