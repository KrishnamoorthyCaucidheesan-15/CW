
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Heart, ExternalLink, Save, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackButton from '@/components/shared/BackButton';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

// Mock data for the album
const albumData = {
  id: 1,
  title: 'Elegant Garden Wedding',
  coverImage: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
  vendor: {
    id: 1,
    name: 'Paradise Venues',
    category: 'Wedding Venues',
    location: 'Kandy, Sri Lanka',
    rating: 4.9,
    reviews: 156
  },
  description: 'A breathtaking garden wedding venue surrounded by lush greenery and blooming flowers. Perfect for couples seeking a romantic outdoor celebration.',
  tags: ['Garden Wedding', 'Outdoor Venue', 'Romantic', 'Luxury', 'Nature'],
  images: [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop'
  ],
  website: 'https://paradisevenues.lk',
  phone: '+94 77 123 4567'
};

const relatedAlbums = [
  {
    id: 2,
    title: 'Lakeside Romance',
    vendor: {
      id: 3,
      name: 'Capture Moments'
    },
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
    category: 'Photography'
  },
  {
    id: 3,
    title: 'Mountain View Ceremony',
    vendor: {
      id: 4,
      name: 'Elite Events'
    },
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
    category: 'Planning'
  },
  {
    id: 4,
    title: 'Beach Wedding Dreams',
    vendor: {
      id: 5,
      name: 'Coastal Celebrations'
    },
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop',
    category: 'Venues'
  }
];

const AlbumDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const breadcrumbItems = [
    { label: 'Services', href: '/categories' },
    { label: albumData.vendor.category, href: '/categories' },
    { label: albumData.vendor.name, href: `/vendor/${albumData.vendor.id}` },
    { label: albumData.title }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section with Cover Image - Reduced height */}
      <section className="relative h-[40vh] bg-black">
        <img
          src={albumData.coverImage}
          alt={albumData.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl font-serif font-bold mb-2">{albumData.title}</h1>
          <p className="text-lg opacity-90">{albumData.description}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Photo Gallery - Moved up */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Photo Gallery</h2>
          
          {/* Main Selected Image */}
          <div className="mb-6">
            <img
              src={albumData.images[selectedImage]}
              alt={`Gallery image ${selectedImage + 1}`}
              className="w-full h-96 object-cover rounded-lg border border-gray-200 shadow-lg"
            />
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {albumData.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative overflow-hidden rounded-lg border-2 transition-all hover:scale-105 ${
                  selectedImage === index ? 'border-[#917f4f]' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </section>

        {/* Album Details - Moved below photo gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Vendor Info Card */}
          <Card className="lg:col-span-1 border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                  <a 
                    href={`/vendor/${albumData.vendor.id}`}
                    className="hover:text-[#917f4f] transition-colors"
                  >
                    {albumData.vendor.name}
                  </a>
                </h3>
                <p className="text-[#917f4f] font-medium mb-1">{albumData.vendor.category}</p>
                <div className="flex items-center justify-center text-gray-600 text-sm mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{albumData.vendor.location}</span>
                </div>
                <div className="flex items-center justify-center space-x-1 mb-6">
                  <Star className="h-4 w-4 text-[#917f4f] fill-current" />
                  <span className="font-medium">{albumData.vendor.rating}</span>
                  <span className="text-gray-500">({albumData.vendor.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button 
                  onClick={() => setIsSaved(!isSaved)}
                  className={`w-full ${isSaved ? 'bg-[#917f4f]' : 'bg-gray-900'} hover:opacity-90 transition-all`}
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isSaved ? 'Album Saved' : 'Save Album'}
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white"
                  onClick={() => window.location.href = `/vendor/${albumData.vendor.id}`}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Vendor Profile
                </Button>
                
                <Button variant="outline" className="w-full border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tags Card */}
          <Card className="lg:col-span-2 border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <h4 className="text-lg font-serif font-semibold text-gray-900 mb-4">Album Tags</h4>
              <div className="flex flex-wrap gap-2">
                {albumData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-[#917f4f] hover:text-white transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Albums */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Related Albums</h2>
            <a href="/categories" className="text-[#917f4f] font-medium hover:opacity-80 transition-colors">
              View All →
            </a>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {relatedAlbums.map((album) => (
                <CarouselItem key={album.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border border-gray-200 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardContent className="p-0">
                      <a href={`/album/${album.id}`} className="block">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img
                            src={album.image}
                            alt={album.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </a>
                      <div className="p-4">
                        <a href={`/album/${album.id}`}>
                          <h3 className="font-serif font-semibold text-gray-900 mb-1 hover:text-[#917f4f] transition-colors">{album.title}</h3>
                        </a>
                        <a 
                          href={`/vendor/${album.vendor.id}`}
                          className="text-gray-600 hover:text-[#917f4f] transition-colors mb-2 block"
                        >
                          by {album.vendor.name}
                        </a>
                        <span className="text-[#917f4f] text-xs font-medium">{album.category}</span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AlbumDetail;
