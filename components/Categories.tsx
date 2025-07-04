
import React, { useState } from 'react';
import { Camera, MapPin, Cake, Palette, Users, Crown, Music, Car, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { 
    name: 'Photography', 
    icon: Camera, 
    color: 'bg-pink-50', 
    hover: 'hover:bg-pink-100',
    subcategories: ['Wedding Photography', 'Pre-wedding Shoots', 'Engagement Photos', 'Reception Coverage', 'Drone Photography']
  },
  { 
    name: 'Venues', 
    icon: MapPin, 
    color: 'bg-blue-50', 
    hover: 'hover:bg-blue-100',
    subcategories: ['Beach Venues', 'Garden Venues', 'Hotel Ballrooms', 'Historic Buildings', 'Mountain Venues']
  },
  { 
    name: 'Cakes & Catering', 
    icon: Cake, 
    color: 'bg-[#f9f7f4]', 
    hover: 'hover:bg-[#f5f2ec]',
    subcategories: ['Wedding Cakes', 'Dessert Tables', 'Full Catering', 'Buffet Services', 'Cultural Cuisine']
  },
  { 
    name: 'Decorations', 
    icon: Palette, 
    color: 'bg-purple-50', 
    hover: 'hover:bg-purple-100',
    subcategories: ['Floral Arrangements', 'Stage Decorations', 'Table Settings', 'Lighting Design', 'Backdrop Design']
  },
  { 
    name: 'Bridal Wear', 
    icon: Crown, 
    color: 'bg-rose-50', 
    hover: 'hover:bg-rose-100',
    subcategories: ['Wedding Dresses', 'Bridal Accessories', 'Groom Suits', 'Traditional Wear', 'Bridal Shoes']
  },
  { 
    name: 'Entertainment', 
    icon: Music, 
    color: 'bg-green-50', 
    hover: 'hover:bg-green-100',
    subcategories: ['Live Bands', 'DJs', 'Traditional Dancers', 'String Quartets', 'Sound Systems']
  },
  { 
    name: 'Transport', 
    icon: Car, 
    color: 'bg-gray-50', 
    hover: 'hover:bg-gray-100',
    subcategories: ['Luxury Cars', 'Vintage Cars', 'Wedding Buses', 'Horse Carriages', 'Motorcycles']
  },
  { 
    name: 'Planners', 
    icon: Users, 
    color: 'bg-indigo-50', 
    hover: 'hover:bg-indigo-100',
    subcategories: ['Full Planning', 'Day-of Coordination', 'Partial Planning', 'Destination Weddings', 'Cultural Ceremonies']
  },
];

const Categories = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Discover the perfect vendors for every aspect of your special day
          </p>
          <Link 
            to="/categories" 
            className="inline-flex items-center text-[#917f4f] hover:text-[#7a6a42] font-medium transition-colors"
          >
            View All Categories →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isExpanded = expandedCategory === category.name;
            
            return (
              <div key={category.name} className="relative">
                <Link to="/categories" className="block">
                  <div
                    className={`${category.color} ${category.hover} p-6 rounded-2xl border border-gray-100 cursor-pointer transition-all duration-300 group hover:scale-105 hover:shadow-lg`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleCategory(category.name);
                    }}
                  >
                    <div className="text-center">
                      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                        <IconComponent 
                          className="h-8 w-8 text-gray-700 transition-colors" 
                          style={{ color: isExpanded ? '#917f4f' : undefined }}
                        />
                      </div>
                      <h3 
                        className="font-semibold text-gray-900 transition-colors flex items-center justify-center gap-2"
                        style={{ color: isExpanded ? '#917f4f' : undefined }}
                      >
                        {category.name}
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          style={{ color: '#917f4f' }}
                        />
                      </h3>
                    </div>
                  </div>
                </Link>
                
                {/* Subcategories Dropdown */}
                {isExpanded && (
                  <div className="absolute top-full left-0 right-0 z-10 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 p-4 animate-fade-in">
                    <div className="space-y-2">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <Link
                          key={subIndex}
                          to="/categories"
                          className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#917f4f] rounded-lg transition-colors"
                        >
                          {subcategory}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
