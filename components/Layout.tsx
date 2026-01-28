
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC<{ isAuthorized: boolean; onLogout: () => void }> = ({ isAuthorized, onLogout }) => {
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
    <aside className="fixed left-0 top-0 h-screen w-64 glass-card border-r border-white/5 flex flex-col z-50">
      <div className="p-10 mb-4">
        <Link to="/" className="flex items-center gap-4 group">
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
            className={`flex items-center gap-4 px-10 py-3 text-[10px] font-mono tracking-widest uppercase transition-all hover:bg-white/5 ${
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
                className={`flex items-center gap-4 px-10 py-3 text-[10px] font-mono tracking-widest uppercase transition-all hover:bg-white/5 ${
                  isActive(link.path) ? 'sidebar-item-active' : 'text-soft-slate'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <div className="p-10 border-t border-white/5 space-y-6">
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
          <div className="flex flex-col gap-3">
            <Link 
                to="/auth/login"
                className="block w-full text-center py-3 bg-electric-blue/10 border border-electric-blue/40 text-[9px] font-mono text-electric-blue uppercase tracking-widest hover:bg-electric-blue hover:text-midnight transition-all"
            >
                Authorize
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
};

export const Layout: React.FC<{ children: React.ReactNode; isAuthorized: boolean; onLogout: () => void }> = ({ children, isAuthorized, onLogout }) => {
  return (
    <div className="min-h-screen flex bg-midnight selection:bg-electric-blue selection:text-midnight">
      <Sidebar isAuthorized={isAuthorized} onLogout={onLogout} />
      <main className="flex-grow ml-64 min-h-screen relative">
        <div className="p-12">
          {children}
        </div>
      </main>
    </div>
  );
};
