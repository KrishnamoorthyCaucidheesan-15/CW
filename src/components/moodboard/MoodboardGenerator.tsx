
import React, { useState } from 'react';
import { Sparkles, Loader2, Eye, X } from 'lucide-react';
import { MoodboardItem } from '../../types/moodboard';
import { MoodboardGeneratorService, GeneratedMoodboardContent } from '../../services/moodboardGenerator';
import { toast } from 'sonner';

interface MoodboardGeneratorProps {
  moodboardItems: MoodboardItem[];
  hasItems: boolean;
}

const MoodboardGenerator = ({ moodboardItems, hasItems }: MoodboardGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedMoodboardContent[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);

  const handleGenerate = async () => {
    if (!apiKey) {
      setShowApiKeyInput(true);
      return;
    }

    if (!hasItems) {
      toast.error('Please add some items to your moodboard first');
      return;
    }

    setIsGenerating(true);
    
    try {
      const service = new MoodboardGeneratorService(apiKey);
      
      // Build parameters from moodboard items
      const params = moodboardItems.reduce((acc, item) => {
        acc[item.zoneId as keyof typeof acc] = item.album.title;
        return acc;
      }, {} as any);

      const content = await service.generateMoodboard(params);
      setGeneratedContent(content);
      setShowResults(true);
      toast.success('Moodboard inspiration generated successfully!');
    } catch (error) {
      console.error('Generation failed:', error);
      toast.error('Failed to generate moodboard. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleApiKeySubmit = () => {
    if (!apiKey.trim()) {
      toast.error('Please enter your Perplexity API key');
      return;
    }
    setShowApiKeyInput(false);
    handleGenerate();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#917f4f]" />
            AI Moodboard Generator
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Generate complementary wedding inspiration based on your selections
          </p>
        </div>

        <button
          onClick={handleGenerate}
          disabled={isGenerating || !hasItems}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200
            ${hasItems 
              ? 'bg-gradient-to-r from-[#917f4f] to-[#b8a76a] text-white hover:opacity-90 shadow-md hover:shadow-lg' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          {isGenerating ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          {isGenerating ? 'Generating...' : 'Generate Ideas'}
        </button>
      </div>

      {!hasItems && (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <Sparkles className="h-8 w-8 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 font-medium">Add items to your moodboard</p>
          <p className="text-sm text-gray-400 mt-1">
            Drag albums into the zones above to generate AI-powered inspiration
          </p>
        </div>
      )}

      {/* API Key Input Modal */}
      {showApiKeyInput && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Enter Perplexity API Key</h4>
              <button
                onClick={() => setShowApiKeyInput(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Get your API key from{' '}
              <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" className="text-[#917f4f] underline">
                perplexity.ai
              </a>
            </p>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Perplexity API key"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowApiKeyInput(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleApiKeySubmit}
                className="flex-1 px-4 py-2 bg-[#917f4f] text-white rounded-lg hover:opacity-90"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Generated Content Results */}
      {showResults && generatedContent.length > 0 && (
        <div className="mt-6 border-t border-gray-100 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Generated Inspiration
            </h4>
            <button
              onClick={() => setShowResults(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {generatedContent.map((content, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-3">{content.category}</h5>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                      Suggestions
                    </p>
                    <ul className="space-y-1">
                      {content.suggestions.map((suggestion, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#917f4f] rounded-full" />
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                      Color Palette
                    </p>
                    <div className="flex gap-2">
                      {content.colorPalette.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                      Style Description
                    </p>
                    <p className="text-sm text-gray-600">{content.styleDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodboardGenerator;
