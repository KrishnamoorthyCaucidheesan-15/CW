
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Heart, Phone, Mail, ExternalLink, Save, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClassifiedCard from '@/components/classifieds/ClassifiedCard';

// Type definitions
type SellerType = 'Bride' | 'Vendor';
type Condition = 'New' | 'Used';

// Mock data for the classified item
const classifiedData = {
  id: 1,
  title: 'Elegant White Wedding Dress - Size 8',
  price: 45000,
  location: 'Colombo',
  sellerType: 'Bride' as SellerType,
  condition: 'Used' as Condition,
  category: 'Dresses',
  description: 'Beautiful white wedding dress worn once. Features intricate lace detailing, long train, and fitted bodice. Originally purchased for Rs. 85,000. Perfect for a romantic garden or church wedding. Professionally dry cleaned and stored carefully.',
  images: [
    'https://images.unsplash.com/photo-1594736797933-d0401ba03fed?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=600&h=800&fit=crop'
  ],
  seller: {
    id: 1,
    name: 'Sarah M.',
    rating: 4.8,
    reviews: 12,
    joinedDate: 'June 2023',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
    contact: {
      phone: '+94 77 123 4567',
      email: 'sarah.m@email.com'
    }
  },
  postedDate: '2 days ago',
  views: 48,
  originalPrice: 85000
};

const relatedItems = [
  {
    id: 2,
    title: 'Gold Jewelry Set - Necklace & Earrings',
    price: 25000,
    location: 'Kandy',
    sellerType: 'Vendor' as SellerType,
    condition: 'New' as Condition,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop',
    seller: {
      name: 'Golden Treasures',
      rating: 4.9
    },
    postedDate: '1 day ago'
  },
  {
    id: 3,
    title: 'Vintage Bridal Tiara with Pearls',
    price: 8500,
    location: 'Galle',
    sellerType: 'Bride' as SellerType,
    condition: 'Used' as Condition,
    category: 'Bridal Accessories',
    image: 'https://images.unsplash.com/photo-1620734842556-9e25f21de4c6?w=400&h=500&fit=crop',
    seller: {
      name: 'Amara K.',
      rating: 4.7
    },
    postedDate: '3 days ago'
  }
];

const ClassifiedDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const discountPercentage = Math.round(((classifiedData.originalPrice - classifiedData.price) / classifiedData.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Button variant="ghost" onClick={() => window.history.back()} className="text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Classifieds
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <Card className="border border-gray-200 shadow-sm mb-8">
              <CardContent className="p-0">
                {/* Main Image */}
                <div className="relative">
                  <img
                    src={classifiedData.images[selectedImage]}
                    alt={classifiedData.title}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Badge variant={classifiedData.condition === 'New' ? 'default' : 'secondary'}>
                      {classifiedData.condition}
                    </Badge>
                    <Button
                      onClick={() => setIsSaved(!isSaved)}
                      size="sm"
                      variant="outline"
                      className="bg-white/80 backdrop-blur-sm hover:bg-white"
                    >
                      <Heart className={`h-4 w-4 ${isSaved ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
                    </Button>
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-2">
                    {classifiedData.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                          selectedImage === index ? 'border-[#917f4f]' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`View ${index + 1}`}
                          className="w-full h-20 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Item Details */}
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                      {classifiedData.title}
                    </h1>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{classifiedData.location}</span>
                      </div>
                      <span>•</span>
                      <span>Posted {classifiedData.postedDate}</span>
                      <span>•</span>
                      <span>{classifiedData.views} views</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-[#917f4f] border-[#917f4f]">
                    {classifiedData.category}
                  </Badge>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-3xl font-bold text-[#917f4f]">
                    {formatPrice(classifiedData.price)}
                  </div>
                  {classifiedData.originalPrice && (
                    <div className="flex items-center space-x-2">
                      <span className="text-lg text-gray-500 line-through">
                        {formatPrice(classifiedData.originalPrice)}
                      </span>
                      <Badge variant="destructive" className="bg-green-100 text-green-800 hover:bg-green-100">
                        {discountPercentage}% OFF
                      </Badge>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{classifiedData.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Seller Info */}
            <Card className="border border-gray-200 shadow-sm mb-6 sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">Seller Information</h3>
                
                <div className="flex items-center mb-4">
                  <img
                    src={classifiedData.seller.avatar}
                    alt={classifiedData.seller.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{classifiedData.seller.name}</h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-[#917f4f] fill-current mr-1" />
                      <span>{classifiedData.seller.rating} ({classifiedData.seller.reviews} reviews)</span>
                    </div>
                    <p className="text-xs text-gray-500">Member since {classifiedData.seller.joinedDate}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-[#917f4f] hover:bg-[#7a6a42] text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    {classifiedData.seller.contact.phone}
                  </Button>
                  
                  <Button variant="outline" className="w-full border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>

                  {classifiedData.sellerType === 'Vendor' && (
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Vendor Profile
                    </Button>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <Badge variant="outline" className="text-[#917f4f] border-[#917f4f]">
                    {classifiedData.sellerType}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Items */}
        <section className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Related Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedItems.map((item) => (
              <ClassifiedCard key={item.id} listing={item} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ClassifiedDetail;
