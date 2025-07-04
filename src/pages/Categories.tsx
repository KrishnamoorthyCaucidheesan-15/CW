
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import { ArrowLeft, Search, Star, MapPin, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const vendors = [
  {
    id: 1,
    name: 'Elegant Moments Photography',
    category: 'Photography',
    location: 'Colombo',
    rating: 4.9,
    reviews: 156,
    price: 'LKR 150,000 - 250,000',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop',
    featured: true
  },
  {
    id: 2,
    name: 'Paradise Garden Venue',
    category: 'Venues',
    location: 'Kandy',
    rating: 4.8,
    reviews: 89,
    price: 'LKR 300,000 - 500,000',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
    featured: true
  },
  {
    id: 3,
    name: 'Sweet Dreams Cakes',
    category: 'Cakes & Catering',
    location: 'Galle',
    rating: 4.7,
    reviews: 124,
    price: 'LKR 25,000 - 80,000',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    featured: false
  },
  {
    id: 4,
    name: 'Royal Bridal Boutique',
    category: 'Bridal Wear',
    location: 'Colombo',
    rating: 4.9,
    reviews: 203,
    price: 'LKR 75,000 - 200,000',
    image: 'https://images.unsplash.com/photo-1594736797933-d0a9ba054385?w=400&h=300&fit=crop',
    featured: false
  },
  {
    id: 5,
    name: 'Floral Dreams Decorations',
    category: 'Decorations',
    location: 'Kandy',
    rating: 4.6,
    reviews: 78,
    price: 'LKR 50,000 - 150,000',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
    featured: false
  },
  {
    id: 6,
    name: 'Melody Masters Entertainment',
    category: 'Entertainment',
    location: 'Galle',
    rating: 4.8,
    reviews: 92,
    price: 'LKR 75,000 - 200,000',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    featured: true
  }
];

const CategoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Photography', 'Venues', 'Cakes & Catering', 'Bridal Wear', 'Decorations', 'Entertainment', 'Transport', 'Planners'];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || vendor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center text-[#917f4f] hover:text-[#7a6a42] transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Wedding Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore wedding categories and discover top-rated vendors in Sri Lanka. 
            Find everything you need to make your special day perfect.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search vendors by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#917f4f] focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#917f4f] focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <Categories />

      {/* Vendors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Vendors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our curated selection of top-rated wedding service providers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVendors.map((vendor) => (
              <Link
                key={vendor.id}
                to={`/album/${vendor.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {vendor.featured && (
                    <div className="absolute top-4 left-4 bg-[#917f4f] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#917f4f] transition-colors">
                      {vendor.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-[#917f4f] fill-current" />
                      <span className="font-medium text-sm">{vendor.rating}</span>
                    </div>
                  </div>

                  <p className="text-[#917f4f] font-medium text-sm mb-2">{vendor.category}</p>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{vendor.location}</span>
                    <span className="mx-2">•</span>
                    <span>{vendor.reviews} reviews</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">{vendor.price}</span>
                    <button className="bg-[#917f4f] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredVendors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No vendors found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoriesPage;
