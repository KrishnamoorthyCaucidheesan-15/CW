
import React from 'react';
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ForumPost from './ForumPost';

interface ForumPostData {
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

interface ForumPostsListProps {
  posts: ForumPostData[];
  selectedCategory: string;
}

const ForumPostsList: React.FC<ForumPostsListProps> = ({ posts, selectedCategory }) => {
  return (
    <section id="forum-posts-section" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Recent Conversations
            {selectedCategory !== 'All' && (
              <span className="text-[#917f4f] ml-2">in {selectedCategory}</span>
            )}
          </h2>
          <Button className="bg-[#917f4f] text-white hover:opacity-90">
            <Plus className="h-4 w-4 mr-2" />
            Start Discussion
          </Button>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <ForumPost key={post.id} {...post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No discussions found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any conversations matching your search. 
              Why not start a new discussion?
            </p>
            <Button className="bg-[#917f4f] text-white hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Start New Discussion
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ForumPostsList;
