
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Plus, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MoodboardPreviewSection = () => {
  const moodboardItems = [
    {
      id: 1,
      category: 'Venue',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=200&h=200&fit=crop',
      title: 'Garden Paradise',
      vendor: 'Paradise Gardens'
    },
    {
      id: 2,
      category: 'Dress',
      image: 'https://images.unsplash.com/photo-1594736797933-d0a9ba054385?w=200&h=200&fit=crop',
      title: 'Elegant Gown',
      vendor: 'Bridal Boutique'
    },
    {
      id: 3,
      category: 'Florals',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=200&fit=crop',
      title: 'Rose Arrangements',
      vendor: 'Bloom & Blossom'
    },
    {
      id: 4,
      category: 'Cake',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=200&h=200&fit=crop',
      title: 'Three-Tier Elegance',
      vendor: 'Sweet Dreams Bakery'
    }
  ];

  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm h-full overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-serif font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Palette className="h-6 w-6 text-[#917f4f]" />
              Your Dream Vision Board
            </CardTitle>
            <p className="text-gray-600">Where inspiration meets reality - curate the aesthetic of your heart's desire</p>
          </div>
          <Link to="/moodboard">
            <Button className="bg-gradient-to-r from-[#917f4f] to-pink-600 text-white hover:opacity-90 shadow-lg">
              <Eye className="h-4 w-4 mr-2" />
              Explore Your Vision
            </Button>
          </Link>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Moodboard Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {moodboardItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-xs opacity-80">{item.vendor}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 right-2 bg-gradient-to-r from-[#917f4f] to-pink-600 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats & Progress */}
        <div className="bg-gradient-to-r from-gray-50 to-pink-50/50 rounded-xl p-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-[#917f4f]">{moodboardItems.length}</div>
              <div className="text-xs text-gray-600">Dreams Collected</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#917f4f]">6</div>
              <div className="text-xs text-gray-600">Style Categories</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#917f4f]">67%</div>
              <div className="text-xs text-gray-600">Vision Complete</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link to="/moodboard" className="group">
            <Button 
              variant="outline" 
              className="w-full border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white transition-all duration-200 group"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add More Magic
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link to="/moodboard" className="group">
            <Button 
              variant="outline" 
              className="w-full hover:bg-gray-50 transition-all duration-200 group"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Discover Ideas
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Inspiration Tip */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 mb-1">💡 Creative Tip</p>
              <p className="text-sm text-gray-600">
                Create multiple vision boards for different moods - romantic garden party, elegant ballroom, 
                intimate beach ceremony. Let your imagination run wild and discover what speaks to your soul!
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoodboardPreviewSection;
