
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { PenTool, Clock, User, ArrowRight, Plus } from 'lucide-react';

const NotesTab = () => {
  const [notes, setNotes] = useState('');
  
  const recentNotes = [
    {
      id: 1,
      title: 'Venue Meeting Notes',
      content: 'Garden Paradise venue visit - loved the outdoor ceremony space...',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Color Palette Ideas',
      content: 'Thinking about blush pink, sage green, and gold accents...',
      date: '2024-01-12'
    }
  ];

  const recommendedReads = [
    {
      id: 1,
      title: 'Ultimate Sri Lankan Wedding Planning Timeline',
      excerpt: 'A comprehensive guide to planning your perfect wedding...',
      author: 'Wedding Expert Team',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=80&h=80&fit=crop'
    },
    {
      id: 2,
      title: 'Traditional vs Modern Wedding Styles',
      excerpt: 'Explore the beautiful blend of traditional customs...',
      author: 'Cultural Affairs',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=80&h=80&fit=crop'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Personal Notes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-serif font-bold text-gray-900">Personal Notes</h3>
          <Button variant="outline" size="sm">
            <PenTool className="h-4 w-4 mr-2" />
            Rich Editor
          </Button>
        </div>

        {/* Quick Note Input */}
        <div className="space-y-3">
          <Textarea
            placeholder="Add a quick note or thought..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="resize-none"
            rows={3}
          />
          <Button 
            size="sm" 
            className="bg-[#917f4f] text-white hover:opacity-90"
            disabled={!notes.trim()}
          >
            <Plus className="h-4 w-4 mr-2" />
            Save Note
          </Button>
        </div>

        {/* Recent Notes */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Recent Notes</h4>
          {recentNotes.map((note) => (
            <div key={note.id} className="p-3 bg-gray-50 rounded-xl">
              <div className="font-medium text-gray-900 text-sm mb-1">{note.title}</div>
              <div className="text-sm text-gray-600 mb-2 line-clamp-2">{note.content}</div>
              <div className="text-xs text-gray-500">
                {new Date(note.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full">
          View All Notes
        </Button>
      </div>

      {/* Recommended Reads */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-serif font-bold text-gray-900">Recommended Reads</h3>
          <Button variant="outline" size="sm">
            View All
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="space-y-3">
          {recommendedReads.map((article) => (
            <div key={article.id} className="flex gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
              <img
                src={article.image}
                alt={article.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                  {article.title}
                </h4>
                <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full">
          Browse All Articles
        </Button>
      </div>
    </div>
  );
};

export default NotesTab;
