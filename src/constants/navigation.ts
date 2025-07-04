
export const NAVIGATION_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/categories' },
  { name: 'Marketplace', path: '/classifieds' },
  { name: "Wedding Haven", path: '/brides-corner' },
  { name: 'Special Offers', path: '/offers' },
  { name: 'Inspiration', path: '/blog' },
  { name: 'Community', path: '/forum' },
] as const;

export const BRIDES_CORNER_MENU_ITEMS = [
  {
    title: 'Your Journey',
    href: '/brides-corner',
    description: 'Where your beautiful wedding story begins'
  },
  {
    title: 'Planning Tools',
    href: '/brides-corner/planning',
    description: 'Checklists, timelines, and budget magic'
  },
  {
    title: 'Dream Gallery',
    href: '/brides-corner/inspiration',
    description: 'Save and organize your wedding inspiration'
  },
  {
    title: 'Love Notes',
    href: '/brides-corner/notes',
    description: 'Your personal wedding diary and ideas'
  },
  {
    title: 'Our Community',
    href: '/brides-corner/community',
    description: 'Connect with couples on similar journeys'
  }
] as const;
