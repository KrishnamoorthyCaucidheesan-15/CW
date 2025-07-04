
import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface SimilarVendorsProps {
  category: string;
  location: string;
  currentVendorId: number;
}

const similarVendors = [
  {
    id: 2,
    name: 'Elite Garden Events',
    category: 'Wedding Venues',
    location: 'Colombo, Sri Lanka',
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
    priceRange: 'LKR 150,000 - 400,000'
  },
  {
    id: 3,
    name: 'Royal Palace Venues',
    category: 'Wedding Venues',
    location: 'Galle, Sri Lanka',
    rating: 4.9,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
    priceRange: 'LKR 300,000 - 600,000'
  },
  {
    id: 4,
    name: 'Serenity Gardens',
    category: 'Wedding Venues',
    location: 'Kandy, Sri Lanka',
    rating: 4.7,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    priceRange: 'LKR 180,000 - 450,000'
  }
];

const SimilarVendors = ({ category, location, currentVendorId }: SimilarVendorsProps) => {
  const filteredVendors = similarVendors.filter(vendor => vendor.id !== currentVendorId);

  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-gray-900">Similar Vendors</h2>
        <Link 
          to={`/categories?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-[#917f4f] font-medium hover:opacity-80 transition-colors"
        >
          View All {category} →
        </Link>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {filteredVendors.map((vendor) => (
            <CarouselItem key={vendor.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Link to={`/vendor/${vendor.id}`}>
                <Card className="border border-gray-200 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={vendor.image}
                        alt={vendor.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-[#917f4f] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {vendor.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif font-bold text-gray-900 mb-2 group-hover:text-[#917f4f] transition-colors">
                        {vendor.name}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{vendor.location}</span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-[#917f4f] fill-current" />
                          <span className="font-medium text-gray-900">{vendor.rating}</span>
                          <span className="text-gray-500 text-sm">({vendor.reviews})</span>
                        </div>
                      </div>
                      <p className="text-[#917f4f] font-semibold text-sm">{vendor.priceRange}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default SimilarVendors;
