
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import BottomNavigation from "./components/BottomNavigation";

// Lazy load components
const Index = lazy(() => import("./pages/Index"));
const Categories = lazy(() => import("./pages/Categories"));
const Offers = lazy(() => import("./pages/Offers"));
const Blog = lazy(() => import("./pages/Blog"));
const Forum = lazy(() => import("./pages/Forum"));
const Moodboard = lazy(() => import("./pages/Moodboard"));
const VendorDashboard = lazy(() => import("./pages/VendorDashboard"));
const AlbumDetail = lazy(() => import("./pages/AlbumDetail"));
const VendorProfile = lazy(() => import("./pages/VendorProfile"));
const Classifieds = lazy(() => import("./pages/Classifieds"));
const ClassifiedDetail = lazy(() => import("./pages/ClassifiedDetail"));
const BridesCorner = lazy(() => import("./pages/BridesCorner"));
const BridesCornerChecklist = lazy(() => import("./pages/BridesCornerChecklist"));
const BridesCornerBudget = lazy(() => import("./pages/BridesCornerBudget"));
const BridesCornerInspiration = lazy(() => import("./pages/BridesCornerInspiration"));
const BridesCornerNotes = lazy(() => import("./pages/BridesCornerNotes"));
const BridesCornerCommunity = lazy(() => import("./pages/BridesCornerCommunity"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const VendorSignUp = lazy(() => import("./pages/VendorSignUp"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MobileMenu = lazy(() => import("./components/MobileMenu"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#917f4f]"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col w-full">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/vendors" element={<Navigate to="/categories" replace />} />
              <Route path="/vendor/:id" element={<VendorProfile />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/moodboard" element={<Moodboard />} />
              <Route path="/brides-corner" element={<BridesCorner />} />
              <Route path="/brides-corner/checklist" element={<BridesCornerChecklist />} />
              <Route path="/brides-corner/budget" element={<BridesCornerBudget />} />
              <Route path="/brides-corner/inspiration" element={<BridesCornerInspiration />} />
              <Route path="/brides-corner/notes" element={<BridesCornerNotes />} />
              <Route path="/brides-corner/community" element={<BridesCornerCommunity />} />
              <Route path="/vendor-dashboard" element={<VendorDashboard />} />
              <Route path="/album/:id" element={<AlbumDetail />} />
              <Route path="/classifieds" element={<Classifieds />} />
              <Route path="/classified/:id" element={<ClassifiedDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/vendor-signup" element={<VendorSignUp />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/menu" element={<MobileMenu />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <BottomNavigation />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
