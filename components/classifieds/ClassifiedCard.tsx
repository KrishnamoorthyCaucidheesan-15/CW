
import React, { useState } from 'react';
import { MapPin, Heart, Eye, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Listing {
  id: number;
  title: string;
  price: number;
  location: string;
  sellerType: 'Vendor' | 'Bride';
  condition: 'New' | 'Used';
  category: string;
  image: string;
  seller: {
    name: string;
    rating: number;
  };
  postedDate: string;
}

interface ClassifiedCardProps {
  listing: Listing;
}

const ClassifiedCard = ({ listing }: ClassifiedCardProps) => {
  const [isSaved, setIsSaved] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleViewDetails = () => {
    window.location.href = `/classified/${listing.id}`;
  };

  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
      <CardContent className="p-0">
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsSaved(!isSaved);
            }}
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            <Heart
              className={`h-4 w-4 ${
                isSaved ? 'text-red-500 fill-red-500' : 'text-gray-600'
              }`}
            />
          </button>
          <div className="absolute top-3 left-3">
            <Badge
              variant={listing.condition === 'New' ? 'default' : 'secondary'}
              className="bg-white/90 text-gray-900 hover:bg-white/90"
            >
              {listing.condition}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-serif font-semibold text-gray-900 text-lg line-clamp-2 flex-1">
              {listing.title}
            </h3>
          </div>

          <div className="flex items-center justify-between mb-3">
            <p className="text-2xl font-bold text-[#917f4f]">
              {formatPrice(listing.price)}
            </p>
            <Badge variant="outline" className="text-xs">
              {listing.sellerType}
            </Badge>
          </div>

          <div className="flex items-center text-gray-600 text-sm mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{listing.location}</span>
            <span className="mx-2">•</span>
            <span>{listing.postedDate}</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="flex items-center text-sm text-gray-600">
                <Star className="h-4 w-4 text-[#917f4f] fill-current mr-1" />
                <span>{listing.seller.rating}</span>
                <span className="ml-2">{listing.seller.name}</span>
              </div>
            </div>
          </div>

          <Button
            onClick={handleViewDetails}
            className="w-full bg-[#917f4f] hover:bg-[#7a6a42] text-white transition-colors"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClassifiedCard;
