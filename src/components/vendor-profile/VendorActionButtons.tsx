
import React, { useState } from 'react';
import { Heart, Share2, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface VendorActionButtonsProps {
  vendor: {
    name: string;
    category: string;
    location: string;
  };
  isSaved: boolean;
  onSaveToggle: () => void;
}

const VendorActionButtons = ({ vendor, isSaved, onSaveToggle }: VendorActionButtonsProps) => {
  const { toast } = useToast();
  const [isSharing, setIsSharing] = useState(false);

  const handleSave = () => {
    onSaveToggle();
    toast({
      title: isSaved ? "Vendor Removed" : "Vendor Saved",
      description: isSaved 
        ? `${vendor.name} has been removed from your saved vendors.`
        : `${vendor.name} has been saved to your favorites.`,
    });
  };

  const handleShare = async () => {
    setIsSharing(true);
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: vendor.name,
          text: `Check out ${vendor.name} - ${vendor.category} in ${vendor.location}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Vendor profile link has been copied to clipboard.",
      });
    }
    
    setIsSharing(false);
  };

  const handleViewSimilar = () => {
    // Navigate to categories with filters applied
    const categorySlug = vendor.category.toLowerCase().replace(/\s+/g, '-');
    window.location.href = `/categories?category=${categorySlug}&location=${vendor.location}`;
  };

  const handleViewLocation = () => {
    // Navigate to location-based vendors
    window.location.href = `/categories?location=${vendor.location}`;
  };

  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-4 md:mb-6">Quick Actions</h3>
        
        <div className="space-y-2 md:space-y-3">
          {/* Save Vendor */}
          <Button 
            onClick={handleSave}
            className={`w-full justify-start text-sm md:text-base py-2 md:py-3 ${
              isSaved 
                ? 'bg-[#917f4f] hover:bg-[#7a6b43] text-white' 
                : 'bg-gray-100 hover:bg-[#917f4f] hover:text-white text-gray-900'
            }`}
          >
            <Heart className={`h-4 w-4 mr-2 md:mr-3 ${isSaved ? 'fill-current' : ''}`} />
            {isSaved ? 'Saved to Favorites' : 'Save Vendor'}
          </Button>
          
          {/* Share Profile */}
          <Button 
            onClick={handleShare}
            disabled={isSharing}
            variant="outline" 
            className="w-full border-gray-300 justify-start hover:bg-gray-50 text-sm md:text-base py-2 md:py-3"
          >
            <Share2 className="h-4 w-4 mr-2 md:mr-3" />
            {isSharing ? 'Sharing...' : 'Share Profile'}
          </Button>
          
          {/* View Similar Vendors */}
          <Button 
            onClick={handleViewSimilar}
            variant="outline" 
            className="w-full border-gray-300 justify-start hover:bg-gray-50 text-sm md:text-base py-2 md:py-3"
          >
            <Users className="h-4 w-4 mr-2 md:mr-3" />
            <span className="truncate">More {vendor.category}</span>
          </Button>
          
          {/* View Location Vendors */}
          <Button 
            onClick={handleViewLocation}
            variant="outline" 
            className="w-full border-gray-300 justify-start hover:bg-gray-50 text-sm md:text-base py-2 md:py-3"
          >
            <MapPin className="h-4 w-4 mr-2 md:mr-3" />
            <span className="truncate">Vendors in {vendor.location}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VendorActionButtons;
