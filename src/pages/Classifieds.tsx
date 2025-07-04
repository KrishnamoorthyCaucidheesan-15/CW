import React, { useState } from 'react';
import { Search, Filter, Plus, MapPin, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostItemForm from '@/components/classifieds/PostItemForm';
import ClassifiedCard from '@/components/classifieds/ClassifiedCard';

// Mock data for classified listings
const mockListings = [
  {
    id: 1,
    title: 'Elegant White Wedding Dress - Size 8',
    price: 45000,
    location: 'Colombo',
    sellerType: 'Bride' as const,
    condition: 'Used' as const,
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba03fed?w=400&h=500&fit=crop',
    seller: {
      name: 'Sarah M.',
      rating: 4.8
    },
    postedDate: '2 days ago'
  },
  {
    id: 2,
    title: 'Gold Jewelry Set - Necklace & Earrings',
    price: 25000,
    location: 'Kandy',
    sellerType: 'Vendor' as const,
    condition: 'New' as const,
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
    sellerType: 'Bride' as const,
    condition: 'Used' as const,
    category: 'Bridal Accessories',
    image: 'https://images.unsplash.com/photo-1620734842556-9e25f21de4c6?w=400&h=500&fit=crop',
    seller: {
      name: 'Amara K.',
      rating: 4.7
    },
    postedDate: '3 days ago'
  },
  {
    id: 4,
    title: 'Crystal Centerpieces Set of 6',
    price: 15000,
    location: 'Negombo',
    sellerType: 'Vendor' as const,
    condition: 'New' as const,
    category: 'Decorations & Props',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=500&fit=crop',
    seller: {
      name: 'Event Decor Plus',
      rating: 4.6
    },
    postedDate: '1 week ago'
  },
  {
    id: 5,
    title: 'Designer Bridal Shoes - Size 6',
    price: 12000,
    location: 'Colombo',
    sellerType: 'Bride' as const,
    condition: 'Used' as const,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop',
    seller: {
      name: 'Priya S.',
      rating: 4.8
    },
    postedDate: '4 days ago'
  },
  {
    id: 6,
    title: 'Groom\'s Three-Piece Suit - Size L',
    price: 35000,
    location: 'Kandy',
    sellerType: 'Vendor' as const,
    condition: 'New' as const,
    category: 'Groomwear',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    seller: {
      name: 'Gentleman\'s Choice',
      rating: 4.9
    },
    postedDate: '5 days ago'
  }
];

const categories = [
  'All Categories',
  'Dresses',
  'Bridal Accessories',
  'Groomwear',
  'Jewelry',
  'Decorations & Props',
  'Shoes',
  'Makeup/Hair Equipment',
  'Other'
];

const Classifieds = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [location, setLocation] = useState('');
  const [condition, setCondition] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const filteredListings = mockListings.filter(listing => {
    const matchesCategory = selectedCategory === 'All Categories' || listing.category === selectedCategory;
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCondition = !condition || listing.condition === condition;
    const matchesLocation = !location || listing.location.toLowerCase().includes(location.toLowerCase());
    
    return matchesCategory && matchesSearch && matchesCondition && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Wedding Classifieds
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Buy and sell pre-loved wedding items from trusted vendors and brides across Sri Lanka.
            </p>
            <Dialog open={isPostModalOpen} onOpenChange={setIsPostModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#917f4f] hover:bg-[#7a6a42] text-white px-8 py-3 rounded-lg font-medium">
                  <Plus className="h-5 w-5 mr-2" />
                  Post an Item
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-serif">Post a New Item</DialogTitle>
                </DialogHeader>
                <PostItemForm onClose={() => setIsPostModalOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border border-gray-200 shadow-sm sticky top-8">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Filter className="h-5 w-5 text-gray-600 mr-2" />
                  <h3 className="text-lg font-serif font-semibold text-gray-900">Filters</h3>
                </div>

                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Search items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Condition */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                    <Select value={condition} onValueChange={setCondition}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any condition</SelectItem>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Used">Used</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <Input
                      type="text"
                      placeholder="Enter city..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <Select value={priceRange} onValueChange={setPriceRange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any price</SelectItem>
                        <SelectItem value="0-10000">Under Rs. 10,000</SelectItem>
                        <SelectItem value="10000-25000">Rs. 10,000 - 25,000</SelectItem>
                        <SelectItem value="25000-50000">Rs. 25,000 - 50,000</SelectItem>
                        <SelectItem value="50000+">Above Rs. 50,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Listings Grid */}
          <div className="lg:col-span-3">
            {/* Sort and Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {filteredListings.length} items found
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Recently Posted</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredListings.map((listing) => (
                <ClassifiedCard key={listing.id} listing={listing} />
              ))}
            </div>

            {filteredListings.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Classifieds;
