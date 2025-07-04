
import React from 'react';
import { Phone, MessageCircle, Mail, Globe, Instagram, Facebook } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface VendorContactCardProps {
  vendor: {
    contact: {
      phone: string;
      whatsapp: string;
      email: string;
      website: string;
      instagram: string;
      facebook: string;
      tiktok: string;
    };
  };
}

const VendorContactCard = ({ vendor }: VendorContactCardProps) => {
  const handlePhoneCall = () => {
    window.open(`tel:${vendor.contact.phone}`);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${vendor.contact.whatsapp.replace(/[^0-9]/g, '')}`);
  };

  const handleEmail = () => {
    window.open(`mailto:${vendor.contact.email}`);
  };

  const handleWebsite = () => {
    window.open(vendor.contact.website, '_blank');
  };

  const handleSocialMedia = (platform: string, handle: string) => {
    const urls = {
      instagram: `https://instagram.com/${handle}`,
      facebook: `https://facebook.com/${handle}`,
      tiktok: `https://tiktok.com/@${handle}`
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-4 md:mb-6">Get in Touch</h3>
        
        {/* Primary Contact Buttons */}
        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
          <Button 
            onClick={handlePhoneCall}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white justify-start text-sm md:text-base py-2 md:py-3"
          >
            <Phone className="h-4 w-4 mr-2 md:mr-3" />
            Call Now
          </Button>
          
          <Button 
            onClick={handleWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white justify-start text-sm md:text-base py-2 md:py-3"
          >
            <MessageCircle className="h-4 w-4 mr-2 md:mr-3" />
            WhatsApp Chat
          </Button>
          
          <Button 
            onClick={handleEmail}
            variant="outline" 
            className="w-full border-gray-300 justify-start hover:bg-gray-50 text-sm md:text-base py-2 md:py-3"
          >
            <Mail className="h-4 w-4 mr-2 md:mr-3" />
            Send Email
          </Button>
        </div>
        
        {/* Website */}
        <div className="mb-4 md:mb-6">
          <Button 
            onClick={handleWebsite}
            variant="outline" 
            className="w-full border-[#917f4f] text-[#917f4f] hover:bg-[#917f4f] hover:text-white justify-start text-sm md:text-base py-2 md:py-3"
          >
            <Globe className="h-4 w-4 mr-2 md:mr-3" />
            Visit Website
          </Button>
        </div>
        
        {/* Social Media */}
        <div className="border-t pt-4 md:pt-6">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Follow Us</h4>
          <div className="flex space-x-3">
            <button 
              onClick={() => handleSocialMedia('instagram', vendor.contact.instagram)}
              className="p-2 bg-gray-100 hover:bg-pink-100 rounded-lg transition-colors"
            >
              <Instagram className="h-4 w-4 md:h-5 md:w-5 text-gray-600 hover:text-pink-600" />
            </button>
            <button 
              onClick={() => handleSocialMedia('facebook', vendor.contact.facebook)}
              className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <Facebook className="h-4 w-4 md:h-5 md:w-5 text-gray-600 hover:text-blue-600" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VendorContactCard;
