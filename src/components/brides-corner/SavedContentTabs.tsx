
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Heart, Eye, MessageSquare, Plus, Filter } from 'lucide-react';

const SavedContentTabs = () => {
  const savedAlbums = [
    {
      id: 1,
      title: 'Romantic Garden Setup',
      vendor: 'Dream Decorators',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=150&h=150&fit=crop',
      category: 'Decor',
      saves: 45
    },
    {
      id: 2,
      title: 'Bridal Gown Collection',
      vendor: 'Elegant Bridal',
      image: 'https://images.unsplash.com/photo-1594736797933-d0a9ba054385?w=150&h=150&fit=crop',
      category: 'Dress',
      saves: 67
    },
    {
      id: 3,
      title: 'Wedding Photography',
      vendor: 'Perfect Moments',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=150&h=150&fit=crop',
      category: 'Photography',
      saves: 32
    }
  ];

  const savedVendors = [
    {
      id: 1,
      name: 'Dream Decorators',
      category: 'Decoration',
      location: 'Colombo',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=60&h=60&fit=crop'
    },
    {
      id: 2,
      name: 'Perfect Moments Studio',
      category: 'Photography',
      location: 'Kandy',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=60&h=60&fit=crop'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-serif font-bold text-gray-900">Saved Inspiration</h2>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="albums" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="vendors">Vendors</TabsTrigger>
        </TabsList>

        <TabsContent value="albums" className="mt-6">
          <div className="space-y-4">
            {savedAlbums.map((album) => (
              <div key={album.id} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 truncate">{album.title}</h3>
                  <p className="text-sm text-gray-600">{album.vendor}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {album.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Heart className="h-3 w-3" />
                      {album.saves}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="vendors" className="mt-6">
          <div className="space-y-4">
            {savedVendors.map((vendor) => (
              <div key={vendor.id} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 truncate">{vendor.name}</h3>
                  <p className="text-sm text-gray-600">{vendor.category} • {vendor.location}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex text-[#917f4f]">
                      {'★'.repeat(5)}
                    </div>
                    <span className="text-xs text-gray-500">{vendor.rating}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Contact
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SavedContentTabs;
