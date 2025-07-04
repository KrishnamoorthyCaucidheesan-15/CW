
import React from 'react';
import { Search } from 'lucide-react';

interface ForumSearchFilterProps {
  searchTerm: string;
  selectedCategory: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

const ForumSearchFilter: React.FC<ForumSearchFilterProps> = ({
  searchTerm,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
  categories
}) => {
  return (
    <section className="py-6 bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for advice, tips, or experiences..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#917f4f] focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#917f4f] focus:border-transparent bg-gray-50 focus:bg-white transition-colors min-w-[160px]"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default ForumSearchFilter;
