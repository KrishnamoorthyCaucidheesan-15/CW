
import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface ProgressTrackerProps {
  progress: number;
  completedZones: string[];
  totalZones: number;
}

const ProgressTracker = ({ progress, completedZones, totalZones }: ProgressTrackerProps) => {
  const categories = [
    { id: 'dress', label: 'Dress' },
    { id: 'venue', label: 'Venue' },
    { id: 'cake', label: 'Cake' },
    { id: 'decor', label: 'Decor' },
    { id: 'florals', label: 'Florals' },
    { id: 'photography', label: 'Photography' }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Planning Progress</h3>
        <span className="text-sm text-gray-600">
          {completedZones.length} of {totalZones} categories completed
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-[#917f4f] to-[#b8a76a] h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Category Checklist */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {categories.map((category) => {
          const isCompleted = completedZones.includes(category.id);
          return (
            <div
              key={category.id}
              className={`
                flex items-center gap-2 p-3 rounded-lg transition-all duration-200
                ${isCompleted 
                  ? 'bg-[#917f4f]/10 text-[#917f4f]' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              {isCompleted ? (
                <CheckCircle className="h-4 w-4 text-[#917f4f]" />
              ) : (
                <Circle className="h-4 w-4 text-gray-400" />
              )}
              <span className="text-sm font-medium">{category.label}</span>
            </div>
          );
        })}
      </div>

      {progress === 100 && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 text-green-800">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Moodboard Complete!</span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            You've filled all categories. Your wedding vision is taking shape!
          </p>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;
