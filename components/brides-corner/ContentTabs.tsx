
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InspirationTab from './tabs/InspirationTab';
import MoodboardTab from './tabs/MoodboardTab';
import NotesTab from './tabs/NotesTab';
import CommunityTab from './tabs/CommunityTab';

const ContentTabs = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <Tabs defaultValue="inspiration" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="inspiration">Inspiration</TabsTrigger>
          <TabsTrigger value="moodboard">Moodboard</TabsTrigger>
          <TabsTrigger value="notes">Notes & Ideas</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="inspiration">
          <InspirationTab />
        </TabsContent>

        <TabsContent value="moodboard">
          <MoodboardTab />
        </TabsContent>

        <TabsContent value="notes">
          <NotesTab />
        </TabsContent>

        <TabsContent value="community">
          <CommunityTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentTabs;
