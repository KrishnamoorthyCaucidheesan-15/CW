
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Calendar, Heart, Lightbulb, MessageSquare, Users, Palette, CheckSquare, DollarSign, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigationItems = [
  {
    title: "Your Journey",
    url: "/brides-corner",
    icon: Calendar,
    description: "Where your love story begins to bloom"
  },
  {
    title: "Planning Checklist",
    url: "/brides-corner/checklist",
    icon: CheckSquare,
    description: "Your personalized roadmap to 'I do'"
  },
  {
    title: "Budget Planner",
    url: "/brides-corner/budget",
    icon: DollarSign,
    description: "Smart planning for your dream celebration"
  },
  {
    title: "Dream Gallery",
    url: "/brides-corner/inspiration",
    icon: Lightbulb,
    description: "Collect moments that inspire your heart"
  },
  {
    title: "Vision Board",
    url: "/moodboard",
    icon: Palette,
    description: "Paint the picture of your perfect day"
  },
  {
    title: "Love Notes",
    url: "/brides-corner/notes",
    icon: MessageSquare,
    description: "Capture every beautiful thought and idea"
  },
  {
    title: "Our Community",
    url: "/brides-corner/community",
    icon: Users,
    description: "Share joy with couples on similar journeys"
  },
];

export function BridesCornerSidebar() {
  const location = useLocation();

  return (
    <Sidebar variant="inset" className="border-r border-pink-100 bg-gradient-to-b from-white to-rose-50/30">
      <SidebarContent className="bg-transparent">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#917f4f] font-serif font-bold text-lg px-4 py-4 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-[#917f4f] to-pink-500 rounded-full flex items-center justify-center mr-3">
              <Heart className="h-4 w-4 text-white fill-current" />
            </div>
            <div>
              <div>Your Wedding Haven</div>
              <div className="text-xs font-normal text-gray-500 mt-1">Where dreams take shape</div>
            </div>
          </SidebarGroupLabel>
          
          <SidebarGroupContent className="px-2">
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    className="data-[active=true]:bg-gradient-to-r data-[active=true]:from-[#917f4f]/15 data-[active=true]:to-pink-100/50 data-[active=true]:text-[#917f4f] data-[active=true]:border-l-4 data-[active=true]:border-[#917f4f] hover:bg-gradient-to-r hover:from-[#917f4f]/5 hover:to-pink-50 transition-all duration-200 rounded-xl group"
                  >
                    <Link to={item.url} className="flex items-center w-full p-3">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mr-3 group-hover:shadow-md transition-shadow">
                        <item.icon className="h-5 w-5 text-[#917f4f]" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{item.title}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Inspirational Quote Section */}
        <div className="mt-8 mx-4 p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-100">
          <div className="text-center">
            <Sparkles className="h-6 w-6 text-[#917f4f] mx-auto mb-3" />
            <p className="text-sm text-gray-700 italic leading-relaxed">
              "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope."
            </p>
            <p className="text-xs text-gray-500 mt-2">✨ Maya Angelou</p>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
