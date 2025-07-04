
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, MapPin, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityTab = () => {
  const classifieds = [
    {
      id: 1,
      title: 'Beautiful Wedding Dress - Size 8',
      price: 'LKR 45,000',
      location: 'Colombo',
      timeAgo: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1594736797933-d0a9ba054385?w=80&h=80&fit=crop',
      category: 'Wedding Dress'
    },
    {
      id: 2,
      title: 'Wedding Decoration Package',
      price: 'LKR 25,000',
      location: 'Kandy',
      timeAgo: '1 day ago',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=80&h=80&fit=crop',
      category: 'Decorations'
    },
    {
      id: 3,
      title: 'Professional Wedding Veil',
      price: 'LKR 8,000',
      location: 'Galle',
      timeAgo: '3 days ago',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=80&h=80&fit=crop',
      category: 'Accessories'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-serif font-bold text-gray-900">Bridal Marketplace</h3>
          <p className="text-sm text-gray-600">Find great deals from other brides</p>
        </div>
        <Link to="/classifieds">
          <Button className="bg-[#917f4f] text-white hover:opacity-90">
            <Plus className="h-4 w-4 mr-2" />
            Sell Item
          </Button>
        </Link>
      </div>

      {/* Featured Listings */}
      <div className="space-y-4">
        {classifieds.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 truncate">{item.title}</h4>
              <p className="text-lg font-bold text-[#917f4f] mb-1">{item.price}</p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {item.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {item.timeAgo}
                </div>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm">
                Contact
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="text-center">
        <Link to="/classifieds">
          <Button variant="outline" className="w-full">
            View All Listings
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CommunityTab;
