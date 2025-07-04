
import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const albums = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
    title: 'Elegant Garden Wedding',
    vendor: 'Paradise Venues',
    vendorId: 1,
    category: 'Venues',
    rating: 4.9,
    likes: 234
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
    title: 'Bohemian Bridal Collection',
    vendor: 'Silk & Satin Boutique',
    vendorId: 2,
    category: 'Bridal Wear',
    rating: 4.8,
    likes: 189
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
    title: 'Lakeside Romance',
    vendor: 'Capture Moments',
    vendorId: 3,
    category: 'Photography',
    rating: 5.0,
    likes: 312
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
    title: 'Mountain View Ceremony',
    vendor: 'Elite Events',
    vendorId: 4,
    category: 'Planning',
    rating: 4.7,
    likes: 156
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop',
    title: 'Beach Wedding Dreams',
    vendor: 'Coastal Celebrations',
    vendorId: 5,
    category: 'Venues',
    rating: 4.9,
    likes: 278
  }
];

const FeaturedAlbums = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Albums
            </h2>
            <p className="text-xl text-gray-600">
              Discover inspiration from our top-rated vendors
            </p>
          </div>
          <Link 
            to="/categories" 
            className="text-[#917f4f] font-medium hover:text-[#7a6a42] transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {albums.map((album) => (
            <div
              key={album.id}
              className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
            >
              <Link to={`/album/${album.id}`} className="block">
                <div className="relative">
                  <img
                    src={album.image}
                    alt={album.title}
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#917f4f] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {album.category}
                    </span>
                  </div>
                </div>
              </Link>
              
              <div className="p-6">
                <Link to={`/album/${album.id}`}>
                  <h3 className="font-bold text-gray-900 mb-2 hover:text-[#917f4f] transition-colors">
                    {album.title}
                  </h3>
                </Link>
                <Link 
                  to={`/vendor/${album.vendorId}`}
                  className="text-gray-600 hover:text-[#917f4f] transition-colors mb-3 block"
                >
                  {album.vendor}
                </Link>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-gray-700 font-medium">{album.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600 text-sm">{album.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAlbums;
