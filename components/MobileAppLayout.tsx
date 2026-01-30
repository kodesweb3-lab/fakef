import React from 'react';
import { useLocation } from 'react-router-dom';
import { SearchProvider, useSearch } from '../contexts/SearchContext';
import { MobileBottomNav } from './nav/MobileBottomNav';

/**
 * MobileAppLayout Component
 *
 * Native-app style: header + main content + fixed bottom nav (4 tabs + center Scan).
 * Account tab opens sheet: Billing, Rewards, Responsible Use, Terms, Logout.
 * Respects safe-area insets.
 */

interface MobileAppLayoutProps {
  children: React.ReactNode;
  isAuthorized: boolean;
  onLogout: () => void;
  pageTitle?: string;
  showSearch?: boolean;
  onSearchClick?: () => void;
}

const MobileHeaderWithContext: React.FC<{
  title?: string;
  showSearch?: boolean;
  onSearchClick?: () => void;
}> = ({ title, showSearch, onSearchClick }) => {
  const searchContext = useSearch();

  const handleSearchClick = () => {
    if (onSearchClick) {
      onSearchClick();
    } else {
      searchContext.toggleSearch();
    }
  };

  return (
    <header
      className="sticky top-0 z-40 bg-midnight/98 backdrop-blur-xl border-b border-white/10 shadow-lg"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="flex items-center justify-between px-4 h-16">
        <h1 className="text-lg font-bold text-white font-display uppercase tracking-wider">
          {title || 'FAKE Tek'}
        </h1>
        {showSearch && (
          <button
            onClick={handleSearchClick}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-soft-slate hover:text-white transition-all active:scale-95"
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

const MobileHeader: React.FC<{
  title?: string;
  showSearch?: boolean;
  onSearchClick?: () => void;
}> = ({ title, showSearch, onSearchClick }) => {
  return (
    <header
      className="sticky top-0 z-40 bg-midnight/98 backdrop-blur-xl border-b border-white/10 shadow-lg"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="flex items-center justify-between px-4 h-16">
        <h1 className="text-lg font-bold text-white font-display uppercase tracking-wider">
          {title || 'FAKE Tek'}
        </h1>
        {showSearch && (
          <button
            onClick={onSearchClick}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-soft-slate hover:text-white transition-all active:scale-95"
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export const MobileAppLayout: React.FC<MobileAppLayoutProps> = ({ 
  children, 
  isAuthorized, 
  onLogout,
  pageTitle,
  showSearch = false,
  onSearchClick
}) => {
  const location = useLocation();
  const isAuthScreen = location.pathname.startsWith('/auth') || location.pathname === '/before-you-begin';
  
  // Get page title from location if not provided
  const getPageTitle = () => {
    if (pageTitle) return pageTitle;
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path === '/domains' || path === '/tools') return 'Domains';
    if (path === '/scan') return 'Scan';
    if (path === '/notes') return 'Notes';
    if (path === '/account') return 'Account';
    if (path === '/dashboard') return 'Dashboard';
    if (path === '/about') return 'Mission';
    if (path === '/research-ethics') return 'Ethics';
    if (path === '/responsible-use') return 'Responsible Use';
    return 'FAKE Tek';
  };

  const content = (
    <div className="min-h-screen bg-midnight selection:bg-electric-blue selection:text-midnight flex flex-col">
      {showSearch ? (
        <MobileHeaderWithContext 
          title={getPageTitle()} 
          showSearch={showSearch}
          onSearchClick={onSearchClick}
        />
      ) : (
        <MobileHeader 
          title={getPageTitle()} 
          showSearch={showSearch}
          onSearchClick={onSearchClick}
        />
      )}
      <main 
        className="flex-1 overflow-y-auto"
        style={{ 
          paddingBottom: isAuthScreen ? '0' : 'calc(5rem + env(safe-area-inset-bottom))',
          paddingTop: 'env(safe-area-inset-top)'
        }}
      >
        <div className="px-4 py-6">
          {children}
        </div>
      </main>
      {!isAuthScreen && <MobileBottomNav isAuthorized={isAuthorized} onLogout={onLogout} />}
    </div>
  );

  // Wrap with SearchProvider if search is enabled
  if (showSearch) {
    return <SearchProvider>{content}</SearchProvider>;
  }

  return content;
};
