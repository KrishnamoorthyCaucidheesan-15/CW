
import React from 'react';
import { Mail, Instagram, Youtube, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Wedding<span className="text-[#917f4f]">Dreams</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Your trusted platform for finding the perfect wedding vendors in Sri Lanka. 
              Making dream weddings come true since 2024.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Youtube className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">Venues</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">Photography</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">Bridal Wear</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">Catering</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Get the latest wedding trends and exclusive offers delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-gray-600"
              />
              <button className="bg-[#917f4f] px-4 py-2 rounded-r-lg hover:opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 WeddingDreams. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-gray-300 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-gray-300 transition-colors">Cookie Policy</Link>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm flex items-center justify-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for couples in Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
