
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Eye, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const MoodboardTab = () => {
  const moodboardItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=150&h=150&fit=crop',
      category: 'Venue',
      title: 'Garden Paradise'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1594736797933-d0a9ba054385?w=150&h=150&fit=crop',
      category: 'Dress',
      title: 'Elegant Gown'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=150&h=150&fit=crop',
      category: 'Florals',
      title: 'Rose Arrangements'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Your Wedding Vision Board</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Create beautiful moodboards to visualize your perfect wedding. Drag and drop your favorite albums 
          to bring your dream wedding to life.
        </p>
      </div>

      {/* Current Moodboard Preview */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-serif font-bold text-gray-900">Current Moodboard</h4>
          <Link to="/moodboard">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View Full Board
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {moodboardItems.map((item) => (
            <div key={item.id} className="relative group cursor-pointer">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-[#917f4f] text-white px-2 py-1 rounded-full text-xs font-medium">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/moodboard">
          <Button className="bg-[#917f4f] text-white hover:opacity-90">
            <Palette className="h-4 w-4 mr-2" />
            Create New Moodboard
          </Button>
        </Link>
        
        <Link to="/moodboard">
          <Button variant="outline" className="border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add to Current Board
          </Button>
        </Link>
      </div>

      {/* Features */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Moodboard Features</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#917f4f] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">1</span>
            </div>
            <div>
              <h5 className="font-medium text-gray-900">Drag & Drop</h5>
              <p className="text-sm text-gray-600">Easily organize your saved albums into themed boards</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#917f4f] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <div>
              <h5 className="font-medium text-gray-900">Share & Download</h5>
              <p className="text-sm text-gray-600">Share with vendors or download for offline viewing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodboardTab;
