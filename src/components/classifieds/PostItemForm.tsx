
import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

interface PostItemFormProps {
  onClose: () => void;
}

const categories = [
  'Dresses',
  'Bridal Accessories',
  'Groomwear',
  'Jewelry',
  'Decorations & Props',
  'Shoes',
  'Makeup/Hair Equipment',
  'Other'
];

const PostItemForm = ({ onClose }: PostItemFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    condition: '',
    sellerType: '',
    contactInfo: '',
    location: ''
  });
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      const newImages = [...images, ...files].slice(0, 5); // Limit to 5 images
      setImages(newImages);
      
      // Create preview URLs
      const newPreviewUrls = newImages.map(file => URL.createObjectURL(file));
      setImagePreviewUrls(newPreviewUrls);
    }
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviewUrls = imagePreviewUrls.filter((_, i) => i !== index);
    setImages(newImages);
    setImagePreviewUrls(newPreviewUrls);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { formData, images });
    // Here you would typically send the data to your backend
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Image Upload */}
      <div>
        <Label className="block text-sm font-medium text-gray-700 mb-2">
          Photos (up to 5)
        </Label>
        
        {/* Upload Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#917f4f] transition-colors">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label htmlFor="image-upload" className="cursor-pointer">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Click to upload photos</p>
            <p className="text-sm text-gray-400 mt-2">PNG, JPG up to 10MB each</p>
          </label>
        </div>

        {/* Image Previews */}
        {imagePreviewUrls.length > 0 && (
          <div className="grid grid-cols-5 gap-4 mt-4">
            {imagePreviewUrls.map((url, index) => (
              <div key={index} className="relative">
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-20 object-cover rounded-lg border border-gray-200"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Item Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="title">Item Title *</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            placeholder="e.g., Elegant White Wedding Dress"
            required
          />
        </div>

        <div>
          <Label htmlFor="price">Price (LKR) *</Label>
          <Input
            id="price"
            type="number"
            value={formData.price}
            onChange={(e) => handleInputChange('price', e.target.value)}
            placeholder="25000"
            required
          />
        </div>

        <div>
          <Label htmlFor="category">Category *</Label>
          <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="condition">Condition *</Label>
          <Select value={formData.condition} onValueChange={(value) => handleInputChange('condition', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Used">Used - Like New</SelectItem>
              <SelectItem value="Used">Used - Good</SelectItem>
              <SelectItem value="Used">Used - Fair</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="sellerType">Seller Type *</Label>
          <Select value={formData.sellerType} onValueChange={(value) => handleInputChange('sellerType', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select seller type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Bride">Bride</SelectItem>
              <SelectItem value="Vendor">Vendor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="location">Location *</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            placeholder="e.g., Colombo"
            required
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <Label htmlFor="description">Description *</Label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          placeholder="Describe your item in detail..."
          rows={4}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#917f4f] focus:border-transparent"
        />
      </div>

      {/* Contact Info */}
      <div>
        <Label htmlFor="contactInfo">Contact Information *</Label>
        <Input
          id="contactInfo"
          value={formData.contactInfo}
          onChange={(e) => handleInputChange('contactInfo', e.target.value)}
          placeholder="Phone number or email"
          required
        />
      </div>

      {/* Submit Buttons */}
      <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-[#917f4f] hover:bg-[#7a6a42] text-white"
        >
          Post Item
        </Button>
      </div>
    </form>
  );
};

export default PostItemForm;
