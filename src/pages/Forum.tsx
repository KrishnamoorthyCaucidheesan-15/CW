
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryIcons from '../components/forum/CategoryIcons';
import ForumHeroSection from '../components/forum/ForumHeroSection';
import ForumSearchFilter from '../components/forum/ForumSearchFilter';
import PopularDiscussions from '../components/forum/PopularDiscussions';
import ForumPostsList from '../components/forum/ForumPostsList';

const forumPosts = [
  {
    id: 1,
    title: 'How much should I budget for wedding photography?',
    author: 'Sarah_Bride2024',
    category: 'Photography',
    replies: 23,
    likes: 15,
    lastActivity: '2 hours ago',
    excerpt: 'Im planning my wedding and trying to figure out a reasonable budget for photography. What did you spend?',
    isAnswered: true
  },
  {
    id: 2,
    title: 'Best venues in Kandy for outdoor ceremonies?',
    author: 'KandyCouple',
    category: 'Venues',
    replies: 18,
    likes: 12,
    lastActivity: '4 hours ago',
    excerpt: 'Looking for recommendations for outdoor wedding venues in the Kandy area. Any suggestions?',
    isAnswered: false
  },
  {
    id: 3,
    title: 'Traditional vs Modern: Wedding dress dilemma',
    author: 'ConfusedBride',
    category: 'Fashion',
    replies: 31,
    likes: 28,
    lastActivity: '6 hours ago',
    excerpt: 'Torn between wearing a traditional Kandyan saree or a modern white dress. How did you decide?',
    isAnswered: true
  },
  {
    id: 4,
    title: 'DIY wedding decorations - share your ideas!',
    author: 'CraftyCouple',
    category: 'Decorations',
    replies: 45,
    likes: 38,
    lastActivity: '1 day ago',
    excerpt: 'Starting a thread for DIY decoration ideas. Lets help each other save money and get creative!',
    isAnswered: false
  },
  {
    id: 5,
    title: 'Dealing with difficult family members during planning',
    author: 'StressedPlanner',
    category: 'Planning',
    replies: 67,
    likes: 52,
    lastActivity: '1 day ago',
    excerpt: 'How do you handle family members who want to control every aspect of your wedding?',
    isAnswered: true
  },
  {
    id: 6,
    title: 'Monsoon season wedding - tips and tricks',
    author: 'RainyDayBride',
    category: 'Planning',
    replies: 22,
    likes: 19,
    lastActivity: '2 days ago',
    excerpt: 'Planning a wedding during monsoon season. What are your backup plans and tips?',
    isAnswered: false
  }
];

const categories = ['All', 'Planning', 'Photography', 'Venues', 'Fashion', 'Decorations', 'Budget', 'Traditions'];

const ForumPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // Scroll to the forum posts section
    const postsSection = document.getElementById('forum-posts-section');
    if (postsSection) {
      postsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredPosts = forumPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get the most popular discussions based on engagement (likes + replies)
  const mostPopularDiscussions = [...forumPosts]
    .sort((a, b) => (b.likes + b.replies) - (a.likes + a.replies))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center text-[#917f4f] hover:text-[#7a6a42] transition-colors text-sm font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <ForumHeroSection />

      <CategoryIcons onCategorySelect={handleCategorySelect} />

      <ForumSearchFilter
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />

      <PopularDiscussions discussions={mostPopularDiscussions} />

      <ForumPostsList posts={filteredPosts} selectedCategory={selectedCategory} />

      <Footer />
    </div>
  );
};

export default ForumPage;
