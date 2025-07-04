
import React from 'react';
import { Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface Album {
  id: number;
  title: string;
  coverImage: string;
  tags: string[];
  albumCount: number;
}

interface VendorAlbumsGridProps {
  albums: Album[];
  vendorName: string;
}

const VendorAlbumsGrid = ({ albums, vendorName }: VendorAlbumsGridProps) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Photo Albums</h2>
        <span className="text-gray-600 text-sm md:text-base">{albums.length} albums</span>
      </div>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {albums.map((album) => (
          <Card 
            key={album.id} 
            className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Link 
                      to={`/album/${album.id}`}
                      className="bg-white/90 hover:bg-white p-2 md:p-3 rounded-full transition-colors"
                    >
                      <Eye className="h-4 w-4 md:h-5 md:w-5 text-gray-900" />
                    </Link>
                    <button className="bg-white/90 hover:bg-white p-2 md:p-3 rounded-full transition-colors">
                      <Heart className="h-4 w-4 md:h-5 md:w-5 text-gray-900" />
                    </button>
                  </div>
                </div>
                
                {/* Album Count Badge */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-black/60 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                  {album.albumCount} photos
                </div>
              </div>
              
              {/* Album Info */}
              <div className="p-4 md:p-6">
                <h3 className="font-serif font-bold text-gray-900 mb-1 md:mb-2 text-base md:text-lg group-hover:text-[#917f4f] transition-colors line-clamp-1">
                  {album.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3">by {vendorName}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                  {album.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {album.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium">
                      +{album.tags.length - 3}
                    </span>
                  )}
                </div>
                
                {/* View Album Button */}
                <Link 
                  to={`/album/${album.id}`}
                  className="inline-flex items-center text-[#917f4f] font-medium hover:text-[#7a6b43] transition-colors text-sm md:text-base"
                >
                  View Album →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VendorAlbumsGrid;
