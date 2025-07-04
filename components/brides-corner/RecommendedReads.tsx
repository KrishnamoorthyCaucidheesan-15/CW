
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecommendedReads = () => {
  const articles = [
    {
      id: 1,
      title: 'Ultimate Sri Lankan Wedding Planning Timeline',
      excerpt: 'A comprehensive guide to planning your perfect wedding in Sri Lanka, from 12 months before to the big day.',
      author: 'Wedding Expert Team',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=200&h=150&fit=crop',
      category: 'Planning Guide'
    },
    {
      id: 2,
      title: 'Traditional vs Modern: Finding Your Wedding Style',
      excerpt: 'Explore the beautiful blend of traditional Sri Lankan wedding customs with modern touches.',
      author: 'Cultural Affairs',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=200&h=150&fit=crop',
      category: 'Style Guide'
    },
    {
      id: 3,
      title: 'Budget-Friendly Wedding Ideas That Look Expensive',
      excerpt: 'Creative ways to achieve your dream wedding look without breaking the bank.',
      author: 'Budget Guru',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=150&fit=crop',
      category: 'Budget Tips'
    },
    {
      id: 4,
      title: 'Seasonal Wedding Planning in Sri Lanka',
      excerpt: 'Make the most of Sri Lanka\'s climate for your perfect wedding day.',
      author: 'Weather Wise',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=150&fit=crop',
      category: 'Seasonal Guide'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">Recommended Reads</h2>
          <p className="text-sm text-gray-600">Curated articles to inspire your planning</p>
        </div>
        <Link to="/blog">
          <Button variant="outline">
            View All Articles
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="group cursor-pointer">
            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-[#917f4f]/10 text-[#917f4f] px-2 py-1 rounded-full font-medium">
                  {article.category}
                </span>
              </div>
              
              <h3 className="font-serif font-bold text-gray-900 group-hover:text-[#917f4f] transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-sm text-gray-600 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {article.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </div>
              </div>
              
              <Button variant="ghost" className="p-0 h-auto text-[#917f4f] hover:text-[#7a6b43] font-medium">
                Read More
                <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedReads;
