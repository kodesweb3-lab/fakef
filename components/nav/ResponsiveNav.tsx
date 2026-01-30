import React from 'react';
import { CompactSidebar } from './CompactSidebar';
import { MobileBottomNav } from './MobileBottomNav';

interface ResponsiveNavProps {
  isAuthorized: boolean;
  onLogout: () => void;
  /** When true, render mobile nav (bottom bar). When false, render desktop sidebar. */
  useMobileNav: boolean;
}

/**
 * Switches between CompactSidebar (desktop) and MobileBottomNav (mobile/tablet)
 * based on breakpoint. Prevents layout shift by using mounted guard from useResponsiveLayout.
 */
export const ResponsiveNav: React.FC<ResponsiveNavProps> = ({
  isAuthorized,
  onLogout,
  useMobileNav,
}) => {
  if (useMobileNav) {
    return <MobileBottomNav isAuthorized={isAuthorized} onLogout={onLogout} />;
  }
  return <CompactSidebar isAuthorized={isAuthorized} onLogout={onLogout} />;
};
