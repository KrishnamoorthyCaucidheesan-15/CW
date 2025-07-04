
import React from 'react';
import { MessageCircle, ThumbsUp, Clock, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ForumPostProps {
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

const ForumPost: React.FC<ForumPostProps> = ({
  title,
  author,
  category,
  replies,
  likes,
  lastActivity,
  excerpt,
  isAnswered
}) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-sm overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-[#917f4f] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
            {author.charAt(0).toUpperCase()}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="bg-[#917f4f] text-white px-3 py-1 rounded-full text-sm font-medium">
                {category}
              </span>
              {isAnswered && (
                <div className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  <Heart className="h-3 w-3 mr-1 fill-current" />
                  Answered
                </div>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#917f4f] transition-colors">
              {title}
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
            
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="font-medium">by {author}</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{lastActivity}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>{replies} replies</span>
                </div>
                <div className="flex items-center space-x-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{likes} likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ForumPost;
