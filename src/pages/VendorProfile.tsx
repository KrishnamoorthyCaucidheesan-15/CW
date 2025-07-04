
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import VendorHeroSection from '@/components/vendor-profile/VendorHeroSection';
import VendorContactCard from '@/components/vendor-profile/VendorContactCard';
import VendorAlbumsGrid from '@/components/vendor-profile/VendorAlbumsGrid';
import VendorActionButtons from '@/components/vendor-profile/VendorActionButtons';
import SimilarVendors from '@/components/vendor-profile/SimilarVendors';

// Mock vendor data
const vendorData = {
  id: 1,
  name: 'Paradise Venues',
  category: 'Wedding Venues',
  location: 'Kandy, Sri Lanka',
  profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  coverImage: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=400&fit=crop',
  tagline: 'Creating magical moments in breathtaking garden settings surrounded by nature\'s beauty.',
  description: 'Award-winning venue specialists with over 10 years of experience in creating unforgettable wedding celebrations.',
  rating: 4.9,
  reviews: 156,
  priceRange: 'LKR 200,000 - 500,000',
  contact: {
    phone: '+94 77 123 4567',
    whatsapp: '+94 77 123 4567',
    email: 'hello@paradisevenues.lk',
    website: 'https://paradisevenues.lk',
    instagram: 'paradise_venues_lk',
    facebook: 'paradisevenues',
    tiktok: 'paradisevenues'
  },
  albums: [
    {
      id: 1,
      title: 'Elegant Garden Wedding',
      coverImage: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      tags: ['Garden', 'Luxury', 'Outdoor'],
      albumCount: 25
    },
    {
      id: 2,
      title: 'Lakeside Romance',
      coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
      tags: ['Lakeside', 'Romantic', 'Sunset'],
      albumCount: 18
    },
    {
      id: 3,
      title: 'Mountain View Ceremony',
      coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
      tags: ['Mountain', 'Scenic', 'Natural'],
      albumCount: 32
    },
    {
      id: 4,
      title: 'Traditional Heritage',
      coverImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      tags: ['Traditional', 'Heritage', 'Cultural'],
      albumCount: 20
    }
  ]
};

const VendorProfile = () => {
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(false);

  const breadcrumbItems = [
    { label: 'Services', href: '/categories' },
    { label: vendorData.category, href: '/categories' },
    { label: vendorData.name }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Breadcrumbs items={breadcrumbItems} />
      
      {/* Hero Section */}
      <VendorHeroSection vendor={vendorData} />
      
      {/* Main Content - Responsive Bento Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Left Column - Contact & Actions (Full width on mobile, sidebar on desktop) */}
          <div className="lg:col-span-1 space-y-4 md:space-y-6 order-2 lg:order-1">
            <VendorContactCard vendor={vendorData} />
            <VendorActionButtons 
              vendor={vendorData} 
              isSaved={isSaved} 
              onSaveToggle={() => setIsSaved(!isSaved)} 
            />
          </div>
          
          {/* Right Column - Albums Gallery */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <VendorAlbumsGrid albums={vendorData.albums} vendorName={vendorData.name} />
          </div>
        </div>
        
        {/* Similar Vendors Section */}
        <SimilarVendors category={vendorData.category} location={vendorData.location} currentVendorId={vendorData.id} />
      </div>

      <Footer />
    </div>
  );
};

export default VendorProfile;
