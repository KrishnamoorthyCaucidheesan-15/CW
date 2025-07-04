
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Calendar, User, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: '10 Essential Tips for Planning Your Dream Wedding',
    excerpt: 'Planning a wedding can be overwhelming, but with these essential tips, you can create the perfect day without the stress...',
    author: 'Sarah Johnson',
    date: '2024-05-28',
    category: 'Planning',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=250&fit=crop',
    readTime: '5 min read',
    featured: true
  },
  {
    id: 2,
    title: 'Sri Lankan Wedding Traditions: A Complete Guide',
    excerpt: 'Discover the beautiful traditions and customs that make Sri Lankan weddings unique and meaningful...',
    author: 'Priya Fernando',
    date: '2024-05-25',
    category: 'Traditions',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=250&fit=crop',
    readTime: '8 min read',
    featured: true
  },
  {
    id: 3,
    title: 'Budget-Friendly Wedding Ideas That Still Look Luxurious',
    excerpt: 'You dont need to break the bank to have a beautiful wedding. Here are creative ways to save money while maintaining elegance...',
    author: 'Michael Chen',
    date: '2024-05-22',
    category: 'Budget',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=250&fit=crop',
    readTime: '6 min read',
    featured: false
  },
  {
    id: 4,
    title: 'Choosing the Perfect Wedding Venue: Location Guide',
    excerpt: 'From beachfront ceremonies to mountain retreats, find the perfect venue that matches your vision and budget...',
    author: 'Amanda Silva',
    date: '2024-05-20',
    category: 'Venues',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=250&fit=crop',
    readTime: '7 min read',
    featured: false
  },
  {
    id: 5,
    title: 'Wedding Photography Trends for 2024',
    excerpt: 'Stay ahead of the curve with the latest photography trends that will make your wedding photos truly unforgettable...',
    author: 'David Park',
    date: '2024-05-18',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=250&fit=crop',
    readTime: '4 min read',
    featured: false
  },
  {
    id: 6,
    title: 'Seasonal Wedding Planning: Making the Most of Each Season',
    excerpt: 'Each season offers unique opportunities for your wedding. Learn how to plan the perfect celebration year-round...',
    author: 'Lisa Thompson',
    date: '2024-05-15',
    category: 'Planning',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=250&fit=crop',
    readTime: '6 min read',
    featured: false
  }
];

const categories = ['All', 'Planning', 'Traditions', 'Budget', 'Venues', 'Photography', 'Fashion', 'Decor'];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
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
      <section className="py-16 bg-gradient-to-br from-[#f9f7f4] to-[#f5f2ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Wedding Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert advice, inspiration, and tips to help you plan the perfect wedding. 
              From budget-friendly ideas to luxury inspirations.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#917f4f] focus:border-transparent bg-white"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#917f4f] focus:border-transparent bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {searchTerm === '' && selectedCategory === 'All' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-[#917f4f] text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="bg-gray-100 px-2 py-1 rounded">{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-[#917f4f] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'Latest Articles'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="bg-gray-100 px-2 py-1 rounded">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-[#917f4f] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No blog posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
