
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Eye, Filter, Bookmark } from 'lucide-react';

const InspirationTab = () => {
  const savedItems = [
    {
      id: 1,
      title: 'Romantic Garden Setup',
      vendor: 'Dream Decorators',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=80&h=80&fit=crop',
      category: 'Decor',
      saves: 45
    },
    {
      id: 2,
      title: 'Bridal Gown Collection',
      vendor: 'Elegant Bridal',
      image: 'https://images.unsplash.com/photo-1594736797933-d0a9ba054385?w=80&h=80&fit=crop',
      category: 'Dress',
      saves: 67
    },
    {
      id: 3,
      title: 'Floral Arrangements',
      vendor: 'Bloom & Blossom',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=80&h=80&fit=crop',
      category: 'Florals',
      saves: 32
    },
    {
      id: 4,
      title: 'Vintage Wedding Cake',
      vendor: 'Sweet Moments',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=80&h=80&fit=crop',
      category: 'Cake',
      saves: 58
    }
  ];

  const inspirationCategories = [
    { name: 'Venues', count: 12, color: 'bg-pink-100 text-pink-700' },
    { name: 'Dresses', count: 8, color: 'bg-purple-100 text-purple-700' },
    { name: 'Florals', count: 15, color: 'bg-green-100 text-green-700' },
    { name: 'Decor', count: 20, color: 'bg-blue-100 text-blue-700' },
    { name: 'Cakes', count: 6, color: 'bg-yellow-100 text-yellow-700' }
  ];

  return (
    <div className="space-y-6">
      {/* Categories Overview */}
      <div className="space-y-4">
        <h3 className="text-lg font-serif font-bold text-gray-900">Inspiration Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {inspirationCategories.map((category) => (
            <div key={category.name} className="text-center p-3 bg-white rounded-lg border border-gray-200 hover:border-[#917f4f] transition-colors cursor-pointer">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${category.color}`}>
                {category.count}
              </div>
              <div className="text-sm font-medium text-gray-900">{category.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Saved Content */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-serif font-bold text-gray-900">Saved Inspiration</h3>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {savedItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 object-cover rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">{item.title}</div>
                <div className="text-xs text-gray-600">{item.vendor}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Heart className="h-3 w-3" />
                    {item.saves}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" className="border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white">
            <Bookmark className="h-4 w-4 mr-2" />
            View All Saved Items
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-[#917f4f]/10 to-pink-50 rounded-xl p-6">
        <h4 className="font-semibold text-gray-900 mb-3">Find More Inspiration</h4>
        <div className="flex flex-wrap gap-3">
          <Button size="sm" variant="outline">Browse Venues</Button>
          <Button size="sm" variant="outline">Explore Dresses</Button>
          <Button size="sm" variant="outline">View Decor Ideas</Button>
          <Button size="sm" variant="outline">See Floral Designs</Button>
        </div>
      </div>
    </div>
  );
};

export default InspirationTab;
