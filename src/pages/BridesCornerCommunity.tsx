
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { BridesCornerSidebar } from '../components/brides-corner/BridesCornerSidebar';
import CommunityTab from '../components/brides-corner/tabs/CommunityTab';

const BridesCornerCommunity = () => {
  const breadcrumbItems = [
    { label: "Bride's Corner", href: "/brides-corner" },
    { label: "Community" }
  ];

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
                <h1 className="text-2xl font-serif font-bold text-gray-900">Bridal Community</h1>
              </div>
              <div className="max-w-7xl mx-auto">
                <CommunityTab />
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
      
      <Footer />
    </div>
  );
};

export default BridesCornerCommunity;
