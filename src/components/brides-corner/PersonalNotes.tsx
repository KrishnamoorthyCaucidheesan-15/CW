
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { PenTool, Download, Plus, Calendar } from 'lucide-react';

const PersonalNotes = () => {
  const [notes, setNotes] = useState('');
  const [savedNotes] = useState([
    {
      id: 1,
      title: 'Venue Meeting Notes',
      content: 'Garden Paradise venue visit - loved the outdoor ceremony space...',
      date: '2024-01-15',
      category: 'Venue'
    },
    {
      id: 2,
      title: 'Color Palette Ideas',
      content: 'Thinking about blush pink, sage green, and gold accents...',
      date: '2024-01-12',
      category: 'Decor'
    },
    {
      id: 3,
      title: 'Guest List Thoughts',
      content: 'Need to finalize the guest list - approximately 150 people...',
      date: '2024-01-10',
      category: 'Planning'
    }
  ]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">Personal Notes</h2>
          <p className="text-sm text-gray-600">Capture your thoughts and ideas</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Quick Note Input */}
      <div className="mb-6">
        <Textarea
          placeholder="Add a quick note or thought..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mb-3 resize-none"
          rows={3}
        />
        <div className="flex gap-2">
          <Button 
            size="sm" 
            className="bg-[#917f4f] text-white hover:opacity-90"
            disabled={!notes.trim()}
          >
            <Plus className="h-4 w-4 mr-2" />
            Save Note
          </Button>
          <Button variant="outline" size="sm">
            <PenTool className="h-4 w-4 mr-2" />
            Rich Editor
          </Button>
        </div>
      </div>

      {/* Recent Notes */}
      <div className="space-y-3 max-h-64 overflow-y-auto">
        <h3 className="font-medium text-gray-900 mb-3">Recent Notes</h3>
        {savedNotes.map((note) => (
          <div key={note.id} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-gray-900 text-sm">{note.title}</h4>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {note.category}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{note.content}</p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Calendar className="h-3 w-3" />
              {new Date(note.date).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalNotes;
