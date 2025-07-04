
import React from 'react';
import { TrendingUp, MessageCircle, ThumbsUp, Clock, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Discussion {
  id: number;
  title: string;
  author: string;
  category: string;
  replies: number;
  likes: number;
  lastActivity: string;
  excerpt: string;
  isAnswered: boolean;
}

interface PopularDiscussionsProps {
  discussions: Discussion[];
}

const PopularDiscussions: React.FC<PopularDiscussionsProps> = ({ discussions }) => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-[#917f4f] to-[#a68b5b] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            Trending Now
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Most Loved Conversations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join the discussions that couples are finding most helpful right now
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {discussions.map((discussion) => (
            <Card key={discussion.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-[#917f4f] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {discussion.category}
                  </span>
                  {discussion.isAnswered && (
                    <div className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      <Heart className="h-3 w-3 mr-1 fill-current" />
                      Solved
                    </div>
                  )}
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-[#917f4f] transition-colors line-clamp-2">
                  {discussion.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                  {discussion.excerpt}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-[#917f4f] rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {discussion.author.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-medium">{discussion.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{discussion.lastActivity}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{discussion.replies}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{discussion.likes}</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#917f4f] to-[#a68b5b] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {discussion.replies + discussion.likes} reactions
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDiscussions;
