
import React from 'react';
import { MapPin, Star, Award } from 'lucide-react';

interface VendorHeroSectionProps {
  vendor: {
    name: string;
    category: string;
    location: string;
    profileImage: string;
    coverImage: string;
    tagline: string;
    description: string;
    rating: number;
    reviews: number;
    priceRange: string;
  };
}

const VendorHeroSection = ({ vendor }: VendorHeroSectionProps) => {
  return (
    <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] bg-black overflow-hidden">
      {/* Cover Image */}
      <img
        src={vendor.coverImage}
        alt={vendor.name}
        className="w-full h-full object-cover opacity-80"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 md:pb-12 w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-6">
            
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={vendor.profileImage}
                alt={vendor.name}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl border-2 md:border-4 border-white shadow-lg object-cover"
              />
            </div>
            
            {/* Vendor Info */}
            <div className="flex-1 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold">{vendor.name}</h1>
                <Award className="h-5 w-5 md:h-6 md:w-6 text-[#917f4f] hidden sm:block" />
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-3">
                <span className="bg-[#917f4f] text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium w-fit">
                  {vendor.category}
                </span>
                <div className="flex items-center text-gray-200 text-sm">
                  <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  <span>{vendor.location}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  <Star className="h-3 w-3 md:h-4 md:w-4 text-[#917f4f] fill-current" />
                  <span className="font-medium">{vendor.rating}</span>
                  <span className="text-gray-300">({vendor.reviews} reviews)</span>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-gray-200 mb-2 max-w-2xl line-clamp-2">{vendor.tagline}</p>
              <p className="text-xs md:text-sm text-gray-300 max-w-2xl mb-2 md:mb-0 line-clamp-2 sm:line-clamp-1">{vendor.description}</p>
              
              <div className="mt-2 md:mt-4">
                <span className="text-[#917f4f] font-semibold text-sm md:text-base">Starting from {vendor.priceRange}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorHeroSection;
