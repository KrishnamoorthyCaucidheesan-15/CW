
import React from 'react';
import { Heart, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const Header = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/categories?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="flex items-center justify-between h-14 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">
              Wedding<span className="text-[#917f4f]">Dreams</span>
            </h1>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="h-9 w-9"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Link to="/brides-corner">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="px-4 pb-3 border-t border-gray-100">
            <form onSubmit={handleSearch} className="flex space-x-2 mt-3">
              <Input
                type="text"
                placeholder="Search vendors, venues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
                autoFocus
              />
              <Button type="submit" size="sm" className="bg-[#917f4f] hover:bg-[#7a6a42]">
                Search
              </Button>
            </form>
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900 hover:text-[#917f4f] transition-colors">
                  Wedding<span className="text-[#917f4f]">Dreams</span>
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="flex space-x-8">
              <Link
                to="/categories"
                className={cn(
                  "font-medium transition-colors hover:text-[#917f4f]",
                  (location.pathname === '/categories' || location.pathname === '/vendors') ? 'text-[#917f4f]' : 'text-gray-700'
                )}
              >
                Find Vendors
              </Link>
              <Link
                to="/brides-corner"
                className={cn(
                  "font-medium transition-colors hover:text-[#917f4f]",
                  location.pathname.startsWith('/brides-corner') ? 'text-[#917f4f]' : 'text-gray-700'
                )}
              >
                Plan Your Wedding
              </Link>
              <Link
                to="/offers"
                className={cn(
                  "font-medium transition-colors hover:text-[#917f4f]",
                  location.pathname === '/offers' ? 'text-[#917f4f]' : 'text-gray-700'
                )}
              >
                Offers
              </Link>
              <Link
                to="/blog"
                className={cn(
                  "font-medium transition-colors hover:text-[#917f4f]",
                  location.pathname === '/blog' ? 'text-[#917f4f]' : 'text-gray-700'
                )}
              >
                Inspiration
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Link 
                to="/brides-corner" 
                className="p-2 text-gray-600 hover:text-[#917f4f] transition-colors"
                title="Your Wedding Corner"
              >
                <Heart className="h-5 w-5" />
              </Link>
              
              <div className="flex space-x-3">
                <Link 
                  to="/login"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Button asChild size="sm" className="bg-[#917f4f] hover:bg-[#7a6a42]">
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
