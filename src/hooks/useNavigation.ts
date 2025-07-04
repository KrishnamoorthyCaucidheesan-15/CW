
import { useLocation } from 'react-router-dom';

export const useNavigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/categories') {
      return location.pathname === '/categories' || location.pathname === '/vendors';
    }
    return location.pathname === path;
  };

  const isInBridesCorner = () => {
    return location.pathname.startsWith('/brides-corner');
  };

  return {
    currentPath: location.pathname,
    isActive,
    isInBridesCorner
  };
};
