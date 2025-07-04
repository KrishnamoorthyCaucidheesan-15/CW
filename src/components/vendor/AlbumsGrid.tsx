
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Eye, Heart, Edit } from 'lucide-react';

const AlbumsGrid = () => {
  const albums = [
    {
      id: 1,
      title: 'Romantic Garden Wedding',
      views: 1247,
      saves: 89,
      status: 'Published',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Modern City Ceremony',
      views: 856,
      saves: 67,
      status: 'Published',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Rustic Barn Reception',
      views: 2103,
      saves: 145,
      status: 'Published',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'Beachside Celebration',
      views: 743,
      saves: 52,
      status: 'Pending',
      thumbnail: '/placeholder.svg'
    }
  ];

  return (
    <Card className="bg-white shadow-sm rounded-2xl border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900">Recent Albums</CardTitle>
        <Button variant="outline" className="rounded-xl">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {albums.map((album) => (
            <div key={album.id} className="bg-gray-50 rounded-2xl p-4 space-y-3">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <img 
                  src={album.thumbnail} 
                  alt={album.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate">{album.title}</h3>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{album.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>{album.saves}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    album.status === 'Published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {album.status}
                  </span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full rounded-xl"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Album
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlbumsGrid;
