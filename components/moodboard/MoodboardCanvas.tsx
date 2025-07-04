
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { MoodboardItem, DropZone } from '../../types/moodboard';
import { X, Plus } from 'lucide-react';

interface MoodboardCanvasProps {
  dropZones: DropZone[];
  moodboardItems: MoodboardItem[];
  onRemoveItem: (itemId: string) => void;
}

const DroppableZone = ({ 
  zone, 
  item, 
  onRemoveItem 
}: { 
  zone: DropZone; 
  item?: MoodboardItem; 
  onRemoveItem: (itemId: string) => void;
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: zone.id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        relative aspect-square rounded-2xl border-2 border-dashed transition-all duration-300
        ${isOver 
          ? 'border-[#917f4f] bg-[#917f4f]/10 scale-105' 
          : item 
            ? 'border-gray-200 bg-white shadow-sm' 
            : 'border-gray-300 bg-gray-50/50 hover:border-gray-400'
        }
      `}
    >
      {item ? (
        // Filled slot
        <div className="relative h-full group">
          <img
            src={item.album.image}
            alt={item.album.title}
            className="w-full h-full object-cover rounded-2xl"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl flex items-center justify-center">
            <button
              onClick={() => onRemoveItem(item.id)}
              className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl">
            <h3 className="text-white font-medium text-sm mb-1">{item.album.title}</h3>
            <p className="text-white/80 text-xs">{item.album.vendor}</p>
          </div>
        </div>
      ) : (
        // Empty slot
        <div className="h-full flex flex-col items-center justify-center p-6 text-center">
          <div className={`
            w-12 h-12 rounded-full border-2 border-dashed mb-3 flex items-center justify-center transition-colors
            ${isOver ? 'border-[#917f4f] text-[#917f4f]' : 'border-gray-300 text-gray-400'}
          `}>
            <Plus className="h-6 w-6" />
          </div>
          <h3 className={`font-medium mb-1 transition-colors ${isOver ? 'text-[#917f4f]' : 'text-gray-700'}`}>
            {zone.label}
          </h3>
          <p className="text-xs text-gray-500">
            Drop {zone.category.toLowerCase()} here
          </p>
        </div>
      )}

      {/* Zone label for filled slots */}
      {item && (
        <div className="absolute -top-3 left-3 bg-[#917f4f] text-white px-3 py-1 rounded-full text-xs font-medium">
          {zone.label}
        </div>
      )}
    </div>
  );
};

const MoodboardCanvas = ({ dropZones, moodboardItems, onRemoveItem }: MoodboardCanvasProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 mb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {dropZones.map((zone) => {
          const item = moodboardItems.find(item => item.zoneId === zone.id);
          return (
            <DroppableZone
              key={zone.id}
              zone={zone}
              item={item}
              onRemoveItem={onRemoveItem}
            />
          );
        })}
      </div>

      {moodboardItems.length === 0 && (
        <div className="text-center py-12 border-t border-gray-100 mt-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Start Building Your Moodboard</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Drag albums from your saved collection into the zones above to visualize your perfect wedding
          </p>
        </div>
      )}
    </div>
  );
};

export default MoodboardCanvas;
