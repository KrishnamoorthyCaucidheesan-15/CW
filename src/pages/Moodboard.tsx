
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { BridesCornerSidebar } from '../components/brides-corner/BridesCornerSidebar';
import MoodboardCanvas from '../components/moodboard/MoodboardCanvas';
import MoodboardGenerator from '../components/moodboard/MoodboardGenerator';
import SavedAlbumsPanel from '../components/moodboard/SavedAlbumsPanel';
import MoodboardActions from '../components/moodboard/MoodboardActions';
import ProgressTracker from '../components/moodboard/ProgressTracker';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { MoodboardItem, DropZone, Album } from '../types/moodboard';
import { toast } from 'sonner';

const Moodboard = () => {
  const breadcrumbItems = [
    { label: "Bride's Corner", href: "/brides-corner" },
    { label: "Moodboard" }
  ];

  // Sample data
  const [savedAlbums] = useState<Album[]>([
    {
      id: '1',
      title: 'Elegant Garden Wedding',
      category: 'Venue',
      vendor: 'Paradise Gardens',
      image: '/placeholder.svg'
    },
    {
      id: '2',
      title: 'Romantic Florals',
      category: 'Florals',
      vendor: 'Bloom & Blossom',
      image: '/placeholder.svg'
    },
    {
      id: '3',
      title: 'Classic White Dress',
      category: 'Dress',
      vendor: 'Bridal Boutique',
      image: '/placeholder.svg'
    }
  ]);

  const [moodboardItems, setMoodboardItems] = useState<MoodboardItem[]>([]);
  const [isAlbumsPanelOpen, setIsAlbumsPanelOpen] = useState(false);

  const dropZones: DropZone[] = [
    { id: 'venue', label: 'Venue', category: 'Venue' },
    { id: 'dress', label: 'Dress', category: 'Dress' },
    { id: 'florals', label: 'Florals', category: 'Florals' },
    { id: 'cake', label: 'Cake', category: 'Cake' },
    { id: 'decor', label: 'Decor', category: 'Decor' },
    { id: 'photography', label: 'Photography', category: 'Photography' }
  ];

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over) return;

    const albumId = active.id as string;
    const zoneId = over.id as string;
    
    const album = savedAlbums.find(a => a.id === albumId);
    if (!album) return;

    // Check if zone is already filled
    const existingItem = moodboardItems.find(item => item.zoneId === zoneId);
    if (existingItem) {
      toast.error('This zone is already filled. Remove the existing item first.');
      return;
    }

    const newItem: MoodboardItem = {
      id: `${albumId}-${zoneId}`,
      album,
      zoneId
    };

    setMoodboardItems(prev => [...prev, newItem]);
    toast.success(`Added ${album.title} to ${dropZones.find(z => z.id === zoneId)?.label}`);
  };

  const handleRemoveItem = (itemId: string) => {
    setMoodboardItems(prev => prev.filter(item => item.id !== itemId));
    toast.success('Item removed from moodboard');
  };

  const handleSave = () => {
    if (moodboardItems.length === 0) {
      toast.error('Add items to your moodboard before saving');
      return;
    }
    toast.success('Moodboard saved successfully!');
  };

  const handleDownloadShare = () => {
    if (moodboardItems.length === 0) {
      toast.error('Add items to your moodboard before downloading/sharing');
      return;
    }
    toast.success('Download/Share feature coming soon!');
  };

  // Calculate progress
  const completedZones = [...new Set(moodboardItems.map(item => {
    const zone = dropZones.find(z => z.id === item.zoneId);
    return zone?.category.toLowerCase();
  }))];
  
  const progress = (completedZones.length / dropZones.length) * 100;
  const hasItems = moodboardItems.length > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <SidebarProvider defaultOpen={true}>
        <div className="flex w-full min-h-[calc(100vh-200px)]">
          <BridesCornerSidebar />
          <SidebarInset className="flex-1">
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-6">
                <SidebarTrigger className="lg:hidden" />
                <h1 className="text-2xl font-serif font-bold text-gray-900">Moodboard Creator</h1>
              </div>
              <div className="max-w-7xl mx-auto">
                <DndContext onDragEnd={handleDragEnd}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Generator and Progress */}
                    <div className="space-y-6">
                      <MoodboardGenerator 
                        moodboardItems={moodboardItems}
                        hasItems={hasItems}
                      />
                      <ProgressTracker 
                        progress={progress}
                        completedZones={completedZones}
                        totalZones={dropZones.length}
                      />
                    </div>
                    
                    {/* Center Column - Canvas */}
                    <div className="lg:col-span-2">
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-xl font-serif font-bold text-gray-900">Your Moodboard</h2>
                          <MoodboardActions 
                            onSave={handleSave}
                            onDownloadShare={handleDownloadShare}
                            hasItems={hasItems}
                          />
                        </div>
                        <MoodboardCanvas 
                          dropZones={dropZones}
                          moodboardItems={moodboardItems}
                          onRemoveItem={handleRemoveItem}
                        />
                      </div>
                      
                      {/* Saved Albums Panel */}
                      <div className="mt-6">
                        <SavedAlbumsPanel 
                          albums={savedAlbums}
                          isOpen={isAlbumsPanelOpen}
                          onToggle={() => setIsAlbumsPanelOpen(!isAlbumsPanelOpen)}
                        />
                      </div>
                    </div>
                  </div>
                </DndContext>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
      
      <Footer />
    </div>
  );
};

export default Moodboard;
