import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchProvider, useSearch } from '../contexts/SearchContext';

/**
 * MobileAppLayout Component
 * 
 * Uses the same sidebar menu as desktop for consistency.
 * Sidebar is hidden by default on mobile, can be toggled.
 */

interface MobileAppLayoutProps {
  children: React.ReactNode;
  isAuthorized: boolean;
  onLogout: () => void;
  pageTitle?: string;
  showSearch?: boolean;
  onSearchClick?: () => void;
}

const Sidebar: React.FC<{ isAuthorized: boolean; onLogout: () => void; isOpen: boolean; onToggle: () => void }> = ({ isAuthorized, onLogout, isOpen, onToggle }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const publicLinks = [
    { label: 'Mission', path: '/about', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Domains', path: '/domains', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2' },
    { label: 'Responsible Use', path: '/responsible-use', icon: 'M12 11V7m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Ethics', path: '/research-ethics', icon: 'M9 12l2 2 4-4' },
  ];

  const protectedLinks = [
    { label: 'Dashboard', path: '/dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z' },
    { label: 'Projects', path: '/dashboard/projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2' },
    { label: 'Signals', path: '/dashboard/signals', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { label: 'Rewards', path: '/dashboard/rewards', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2' },
    { label: 'Billing', path: '/dashboard/billing', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V5' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-[60] p-3 bg-midnight/90 border border-white/10 text-white"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55]"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-screen w-64 glass-card border-r border-white/5 flex flex-col z-[60]
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 mb-4">
          <Link to="/" className="flex items-center gap-4 group" onClick={onToggle}>
            <div className="w-8 h-8 border border-electric-blue/40 flex items-center justify-center transition-all group-hover:bg-electric-blue group-hover:border-electric-blue">
              <span className="font-bold text-[10px] text-white tracking-tighter group-hover:text-black">FK</span>
            </div>
            <span className="font-bold text-xl tracking-[0.3em] text-white font-display">FAKE</span>
          </Link>
        </div>

        <nav className="flex-grow overflow-y-auto">
          <div className="px-6 mb-2 text-[9px] uppercase tracking-[0.4em] text-white/20 font-mono">Platform Access</div>
          {publicLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onToggle}
              className={`flex items-center gap-4 px-6 py-3 text-[10px] font-mono tracking-widest uppercase transition-all hover:bg-white/5 ${
                isActive(link.path) ? 'sidebar-item-active' : 'text-soft-slate'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {isAuthorized && (
            <div className="mt-10">
              <div className="px-6 mb-2 text-[9px] uppercase tracking-[0.4em] text-white/20 font-mono">Research Node</div>
              {protectedLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={onToggle}
                  className={`flex items-center gap-4 px-6 py-3 text-[10px] font-mono tracking-widest uppercase transition-all hover:bg-white/5 ${
                    isActive(link.path) ? 'sidebar-item-active' : 'text-soft-slate'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>

        <div className="p-6 border-t border-white/5 space-y-6">
          <div className="flex flex-col gap-2">
            <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">Parent Entity</span>
            <a href="#" className="text-[9px] font-bold text-electric-blue hover:text-white transition-colors tracking-widest uppercase">ALPHA TEK</a>
          </div>
          
          {isAuthorized ? (
            <button 
              onClick={onLogout}
              className="w-full text-center py-3 border border-red-500/20 text-[9px] font-mono text-red-500/60 uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
            >
              Disconnect
            </button>
          ) : (
            <Link 
              to="/auth/login"
              onClick={onToggle}
              className="block w-full text-center py-3 bg-electric-blue/10 border border-electric-blue/40 text-[9px] font-mono text-electric-blue uppercase tracking-widest hover:bg-electric-blue hover:text-midnight transition-all"
            >
              Authorize
            </Link>
          )}
        </div>
      </aside>
    </>
  );
};

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
      className="sticky top-0 z-40 bg-midnight/95 backdrop-blur-lg border-b border-white/10"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="flex items-center justify-between px-4 h-14">
        <h1 className="text-base font-bold text-white font-display uppercase tracking-wider">
          {title || 'FAKE Tek'}
        </h1>
        {showSearch && (
          <button
            onClick={handleSearchClick}
            className="p-2 text-soft-slate hover:text-white transition-colors"
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
      className="sticky top-0 z-40 bg-midnight/95 backdrop-blur-lg border-b border-white/10"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="flex items-center justify-between px-4 h-14">
        <h1 className="text-base font-bold text-white font-display uppercase tracking-wider">
          {title || 'FAKE Tek'}
        </h1>
        {showSearch && (
          <button
            onClick={onSearchClick}
            className="p-2 text-soft-slate hover:text-white transition-colors"
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    return 'FAKE Tek';
  };

  const content = (
    <div className="min-h-screen bg-midnight selection:bg-electric-blue selection:text-midnight flex flex-col">
      <Sidebar 
        isAuthorized={isAuthorized} 
        onLogout={onLogout} 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />
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
        style={{ paddingBottom: isAuthScreen ? '0' : 'env(safe-area-inset-bottom)' }}
      >
        <div className="p-4">
          {children}
        </div>
      </main>
    </div>
  );

  // Wrap with SearchProvider if search is enabled
  if (showSearch) {
    return <SearchProvider>{content}</SearchProvider>;
  }

  return content;
};
