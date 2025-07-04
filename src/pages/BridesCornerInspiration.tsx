
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { BridesCornerSidebar } from '../components/brides-corner/BridesCornerSidebar';
import InspirationTab from '../components/brides-corner/tabs/InspirationTab';

const BridesCornerInspiration = () => {
  const breadcrumbItems = [
    { label: "Bride's Corner", href: "/brides-corner" },
    { label: "Inspiration" }
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
                <h1 className="text-2xl font-serif font-bold text-gray-900">Wedding Inspiration</h1>
              </div>
              <div className="max-w-7xl mx-auto">
                <InspirationTab />
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
      
      <Footer />
    </div>
  );
};

export default BridesCornerInspiration;
