
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { BridesCornerSidebar } from '../components/brides-corner/BridesCornerSidebar';
import BridesCornerHeader from '../components/brides-corner/BridesCornerHeader';
import BridesCornerDashboard from '../components/brides-corner/BridesCornerDashboard';

const BridesCorner = () => {
  const breadcrumbItems = [
    { label: "Your Wedding Journey" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <SidebarProvider defaultOpen={true}>
        <div className="flex w-full min-h-[calc(100vh-200px)]">
          <BridesCornerSidebar />
          <SidebarInset className="flex-1">
            <div className="p-4 md:p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-8">
                <SidebarTrigger className="lg:hidden" />
                <div>
                  <h1 className="text-3xl font-serif font-bold text-gray-900">Your Love Story Unfolds Here</h1>
                  <p className="text-gray-600 mt-1">Every detail, every dream, every precious moment planned with love ✨</p>
                </div>
              </div>
              
              <div className="max-w-7xl mx-auto space-y-8">
                <BridesCornerHeader />
                <BridesCornerDashboard />
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
      
      <Footer />
    </div>
  );
};

export default BridesCorner;
