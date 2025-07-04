import React from 'react';
import { Plus, Palette } from 'lucide-react';

const MoodboardPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Create Your Perfect
              <span className="block text-[#917f4f]">Wedding Moodboard</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Save your favorite albums and create personalized moodboards to visualize your dream wedding. 
              Share with vendors and get accurate quotes.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#917f4f] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <span className="text-gray-700">Browse and save albums you love</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#917f4f] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <span className="text-gray-700">Drag and drop to create your board</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#917f4f] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <span className="text-gray-700">Share with vendors for quotes</span>
              </div>
            </div>

            <button className="bg-[#917f4f] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-colors flex items-center space-x-2">
              <Palette className="h-5 w-5" />
              <span>Start Building Yours</span>
            </button>
          </div>

          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-dashed border-gray-300">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-gray-200 h-20 rounded-lg mb-2"></div>
                  <div className="text-xs text-gray-600">Venue Ideas</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-gray-200 h-20 rounded-lg mb-2"></div>
                  <div className="text-xs text-gray-600">Color Palette</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-gray-200 h-20 rounded-lg mb-2"></div>
                  <div className="text-xs text-gray-600">Dress Styles</div>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center">
                  <Plus className="h-8 w-8 text-gray-400" />
                </div>
              </div>
              <div className="text-center text-gray-500 text-sm">
                Drag and drop albums here
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodboardPreview;
