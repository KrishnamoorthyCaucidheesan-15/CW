
import React from 'react';
import { Save, Share2, Download } from 'lucide-react';

interface MoodboardActionsProps {
  onSave: () => void;
  onDownloadShare: () => void;
  hasItems: boolean;
}

const MoodboardActions = ({ onSave, onDownloadShare, hasItems }: MoodboardActionsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button
        onClick={onSave}
        disabled={!hasItems}
        className={`
          flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200
          ${hasItems 
            ? 'bg-[#917f4f] text-white hover:opacity-90 shadow-md hover:shadow-lg' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }
        `}
      >
        <Save className="h-5 w-5" />
        Save Moodboard
      </button>

      <div className="flex gap-3">
        <button
          onClick={onDownloadShare}
          disabled={!hasItems}
          className={`
            flex items-center gap-2 px-4 py-3 rounded-xl font-medium border-2 transition-all duration-200
            ${hasItems 
              ? 'border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white' 
              : 'border-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          <Download className="h-4 w-4" />
          Download
        </button>

        <button
          onClick={onDownloadShare}
          disabled={!hasItems}
          className={`
            flex items-center gap-2 px-4 py-3 rounded-xl font-medium border-2 transition-all duration-200
            ${hasItems 
              ? 'border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white' 
              : 'border-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          <Share2 className="h-4 w-4" />
          Share
        </button>
      </div>

      {!hasItems && (
        <p className="text-sm text-gray-500 text-center mt-2">
          Add items to your moodboard to enable saving and sharing
        </p>
      )}
    </div>
  );
};

export default MoodboardActions;
