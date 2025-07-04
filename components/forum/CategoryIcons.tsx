
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  Camera, 
  MapPin, 
  Shirt, 
  Flower, 
  DollarSign, 
  Crown 
} from 'lucide-react';

interface CategoryIconProps {
  category: string;
  icon: React.ReactNode;
  description: string;
  count: number;
  onClick: (category: string) => void;
  bgColor: string;
  hoverColor: string;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ 
  category, 
  icon, 
  description, 
  count, 
  onClick,
  bgColor,
  hoverColor
}) => (
  <Card 
    className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:scale-105"
    onClick={() => onClick(category)}
  >
    <CardContent className="p-4 md:p-6 text-center">
      <div className={`w-12 h-12 md:w-16 md:h-16 ${bgColor} ${hoverColor} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-all duration-300`}>
        <div className="text-white text-lg md:text-2xl">
          {icon}
        </div>
      </div>
      
      <h3 className="font-bold text-sm md:text-lg text-gray-900 mb-1 md:mb-2 group-hover:text-[#917f4f] transition-colors line-clamp-1">
        {category}
      </h3>
      
      <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3 line-clamp-2 hidden sm:block">
        {description}
      </p>
      
      <div className="bg-[#917f4f] text-white px-2 md:px-3 py-1 rounded-full text-xs font-medium">
        {count} discussions
      </div>
    </CardContent>
  </Card>
);

interface CategoryIconsProps {
  onCategorySelect: (category: string) => void;
}

const CategoryIcons: React.FC<CategoryIconsProps> = ({ onCategorySelect }) => {
  const categories = [
    {
      name: 'Planning',
      icon: <Calendar />,
      description: 'Timeline, checklists, and organizational tips for your big day',
      count: 89,
      bgColor: 'bg-gradient-to-br from-rose-400 to-rose-500',
      hoverColor: 'group-hover:from-rose-500 group-hover:to-rose-600'
    },
    {
      name: 'Photography',
      icon: <Camera />,
      description: 'Capture every precious moment with professional advice',
      count: 67,
      bgColor: 'bg-gradient-to-br from-blue-400 to-blue-500',
      hoverColor: 'group-hover:from-blue-500 group-hover:to-blue-600'
    },
    {
      name: 'Venues',
      icon: <MapPin />,
      description: 'Find the perfect location for your dream wedding',
      count: 54,
      bgColor: 'bg-gradient-to-br from-emerald-400 to-emerald-500',
      hoverColor: 'group-hover:from-emerald-500 group-hover:to-emerald-600'
    },
    {
      name: 'Fashion',
      icon: <Shirt />,
      description: 'Dresses, suits, and styling tips for the perfect look',
      count: 78,
      bgColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
      hoverColor: 'group-hover:from-purple-500 group-hover:to-purple-600'
    },
    {
      name: 'Decorations',
      icon: <Flower />,
      description: 'Creative ideas to make your venue absolutely stunning',
      count: 92,
      bgColor: 'bg-gradient-to-br from-pink-400 to-pink-500',
      hoverColor: 'group-hover:from-pink-500 group-hover:to-pink-600'
    },
    {
      name: 'Budget',
      icon: <DollarSign />,
      description: 'Smart tips to plan your dream wedding within budget',
      count: 43,
      bgColor: 'bg-gradient-to-br from-orange-400 to-orange-500',
      hoverColor: 'group-hover:from-orange-500 group-hover:to-orange-600'
    },
    {
      name: 'Traditions',
      icon: <Crown />,
      description: 'Honor your heritage with beautiful cultural ceremonies',
      count: 38,
      bgColor: 'bg-gradient-to-br from-indigo-400 to-indigo-500',
      hoverColor: 'group-hover:from-indigo-500 group-hover:to-indigo-600'
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Jump into conversations that matter most to you. Each category is filled with 
            real experiences and heartfelt advice from couples just like you.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 lg:gap-6">
          {categories.map((category) => (
            <CategoryIcon
              key={category.name}
              category={category.name}
              icon={category.icon}
              description={category.description}
              count={category.count}
              onClick={onCategorySelect}
              bgColor={category.bgColor}
              hoverColor={category.hoverColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryIcons;
