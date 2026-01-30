import React from 'react';
import { CompactSidebar } from './nav/CompactSidebar';

/**
 * DesktopLayout Component
 *
 * Compact DeFi-style sidebar (CompactSidebar) + main content.
 * Sidebar is collapsed by default (~72px), expands on hover/click (~240px).
 * Main content has fixed left margin to avoid layout shift.
 */

export const DesktopLayout: React.FC<{
  children: React.ReactNode;
  isAuthorized: boolean;
  onLogout: () => void;
}> = ({ children, isAuthorized, onLogout }) => {
  return (
    <div className="min-h-screen flex bg-midnight selection:bg-electric-blue selection:text-midnight">
      <CompactSidebar isAuthorized={isAuthorized} onLogout={onLogout} />
      <main
        className="flex-1 min-h-screen relative w-full overflow-x-hidden transition-[margin] duration-200 ease-out"
        style={{ marginLeft: 72 }}
        id="main-content"
        role="main"
      >
        <div className="p-3 sm:p-4 md:p-6 lg:p-12">{children}</div>
      </main>
    </div>
  );
};
