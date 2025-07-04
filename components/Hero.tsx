
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/categories?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/categories');
    }
  };

  const weddingImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
      alt: 'Beautiful wedding ceremony'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=800&fit=crop',
      alt: 'Wedding reception decoration'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop',
      alt: 'Wedding bouquet and rings'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=1200&h=800&fit=crop',
      alt: 'Wedding cake and celebration'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=800&fit=crop',
      alt: 'Wedding venue setup'
    }
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === weddingImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [weddingImages.length]);

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Images */}
      {weddingImages.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Your Dream Wedding <span className="text-[#917f4f]">Starts Here</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Find perfect vendors, plan every detail, and create memories that last forever in Sri Lanka.
            </p>

            {/* Search Bar - Hidden on mobile, shown in header */}
            <div className="hidden md:block">
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search for venues, photographers, decorators..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#917f4f] focus:ring-opacity-20 focus:border-[#917f4f] transition-colors text-gray-900"
                  />
                  <Button 
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 bg-[#917f4f] text-white px-6 rounded-lg font-medium hover:bg-[#7a6a42] transition-colors"
                  >
                    Search
                  </Button>
                </div>
              </form>
            </div>

            {/* Mobile CTAs */}
            <div className="md:hidden space-y-3 px-4">
              <Button 
                onClick={() => navigate('/categories')}
                className="w-full bg-[#917f4f] hover:bg-[#7a6a42] py-3 text-lg"
              >
                Find Vendors
              </Button>
              <Button 
                onClick={() => navigate('/brides-corner')}
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-gray-900 py-3 text-lg"
              >
                Start Planning
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {weddingImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
