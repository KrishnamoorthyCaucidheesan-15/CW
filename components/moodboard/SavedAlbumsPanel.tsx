
import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Album } from '../../types/moodboard';
import { X, Heart, Menu } from 'lucide-react';

interface SavedAlbumsPanelProps {
  albums: Album[];
  isOpen: boolean;
  onToggle: () => void;
}

const DraggableAlbum = ({ album }: { album: Album }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: album.id,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div className="relative">
        <img
          src={album.image}
          alt={album.title}
          className="w-full h-24 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 right-2">
          <Heart className="h-4 w-4 text-white fill-current drop-shadow-sm" />
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm text-gray-900 mb-1 line-clamp-1">
          {album.title}
        </h3>
        <p className="text-xs text-[#917f4f] mb-1">{album.category}</p>
        <p className="text-xs text-gray-600 line-clamp-1">{album.vendor}</p>
      </div>
    </div>
  );
};

const SavedAlbumsPanel = ({ albums, isOpen, onToggle }: SavedAlbumsPanelProps) => {
  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-20 left-4 z-50 bg-[#917f4f] text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-opacity"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Panel */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 w-80 bg-white shadow-xl lg:shadow-none
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Saved Albums</h2>
            <button
              onClick={onToggle}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Albums Grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-2 gap-4">
              {albums.map((album) => (
                <DraggableAlbum key={album.id} album={album} />
              ))}
            </div>

            {albums.length === 0 && (
              <div className="text-center py-12">
                <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No saved albums yet</p>
                <p className="text-sm text-gray-400 mt-2">
                  Save albums from vendors to add them here
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <p className="text-sm text-gray-600 text-center">
              Drag albums to your moodboard canvas
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default SavedAlbumsPanel;
