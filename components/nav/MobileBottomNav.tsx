import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  LayoutGrid,
  StickyNote,
  User,
  Scan,
  CreditCard,
  Gift,
  Shield,
  FileText,
  LogOut,
} from 'lucide-react';
import { Sheet } from '../ui/Sheet';
import { MOBILE_TABS, MOBILE_CENTER_ACTION, MOBILE_ACCOUNT_SHEET } from './navConfig';

const TAB_ICONS: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Home,
  LayoutGrid,
  StickyNote,
  User,
};

interface MobileBottomNavProps {
  isAuthorized: boolean;
  onLogout: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ isAuthorized, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [accountSheetOpen, setAccountSheetOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/account') return location.pathname === '/account' || location.pathname.startsWith('/dashboard');
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const handleTabClick = (path: string, requiresAuth?: boolean) => {
    if (requiresAuth && !isAuthorized) {
      navigate('/auth/login');
      return;
    }
    if (path === '/account') {
      setAccountSheetOpen(true);
      return;
    }
    navigate(path);
  };

  const handleCenterClick = () => {
    if (!isAuthorized) {
      navigate('/auth/login');
      return;
    }
    navigate(location.pathname === '/scan' ? '/dashboard' : '/scan');
  };

  const handleAccountSheetNav = (path: string) => {
    setAccountSheetOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    setAccountSheetOpen(false);
    onLogout();
  };

  const accountSheetItems = MOBILE_ACCOUNT_SHEET.filter(
    (item) => !item.requiresAuth || (item.requiresAuth && isAuthorized)
  );

  return (
    <>
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 bg-midnight/98 backdrop-blur-xl border-t border-black/15 shadow-2xl"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        aria-label="Bottom navigation"
      >
        <div className="flex items-end justify-around h-16 px-1 pb-1 pt-2">
          {MOBILE_TABS.slice(0, 2).map((item) => {
            const Icon = TAB_ICONS[item.icon];
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => handleTabClick(item.path, item.requiresAuth)}
                className={`
                  flex flex-col items-center justify-center flex-1 h-full min-w-0 rounded-lg transition-colors
                  outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset
                  ${active ? 'text-black' : 'text-soft-slate'}
                  active:scale-95
                `}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
              >
                {Icon && <Icon className="w-5 h-5 flex-shrink-0 mb-0.5" size={20} />}
                <span className="text-[10px] font-mono uppercase tracking-wider truncate max-w-full">
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Center primary: Scan */}
          <div className="flex flex-col items-center justify-end flex-shrink-0 px-2">
            <button
              type="button"
              onClick={handleCenterClick}
              className="
                w-14 h-14 -mt-6 rounded-2xl bg-black text-white flex items-center justify-center
                shadow-[0_4px_24px_rgba(0,0,0,0.25)] border-2 border-black
                hover:bg-soft-slate hover:border-soft-slate transition-all active:scale-95
                outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white
              "
              aria-label={MOBILE_CENTER_ACTION.label}
            >
              <Scan className="w-6 h-6" size={24} />
            </button>
            <span className="text-[10px] font-mono uppercase tracking-wider text-soft-slate mt-1">
              {MOBILE_CENTER_ACTION.label}
            </span>
          </div>

          {MOBILE_TABS.slice(2, 4).map((item) => {
            const Icon = TAB_ICONS[item.icon];
            const active = isActive(item.path);
            const isAccount = item.path === '/account';
            return (
              <button
                key={item.path}
                type="button"
                onClick={() =>
                  isAccount ? setAccountSheetOpen(true) : handleTabClick(item.path, item.requiresAuth)
                }
                className={`
                  flex flex-col items-center justify-center flex-1 h-full min-w-0 rounded-lg transition-colors
                  outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset
                  ${active ? 'text-black' : 'text-soft-slate'}
                  active:scale-95
                `}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
                aria-expanded={isAccount ? accountSheetOpen : undefined}
                aria-haspopup={isAccount ? 'dialog' : undefined}
              >
                {Icon && <Icon className="w-5 h-5 flex-shrink-0 mb-0.5" size={20} />}
                <span className="text-[10px] font-mono uppercase tracking-wider truncate max-w-full">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Account sheet: Billing, Rewards, Responsible Use, Terms, Logout */}
      <Sheet
        open={accountSheetOpen}
        onOpenChange={setAccountSheetOpen}
        side="bottom"
        title="Account"
      >
        <div className="p-4 space-y-1">
          {accountSheetItems.map((item) => {
            const Icon =
              item.icon === 'CreditCard'
                ? CreditCard
                : item.icon === 'Gift'
                ? Gift
                : item.icon === 'Shield'
                ? Shield
                : FileText;
            const active =
              location.pathname === item.path || location.pathname.startsWith(item.path + '/');
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => handleAccountSheetNav(item.path)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors
                  outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white
                  ${active ? 'bg-black/10 text-black' : 'text-soft-slate hover:bg-black/5 hover:text-black'}
                `}
                aria-current={active ? 'page' : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
          <div className="pt-3 mt-3 border-t border-black/15">
            <button
              type="button"
              onClick={() => handleAccountSheetNav('/account')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-soft-slate hover:bg-black/5 hover:text-black transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <User className="w-5 h-5 flex-shrink-0" size={20} />
              <span className="text-sm font-medium">Account settings</span>
            </button>
            {isAuthorized && (
              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-soft-slate hover:bg-black/10 hover:text-black transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"
                aria-label="Log out"
              >
                <LogOut className="w-5 h-5 flex-shrink-0" size={20} />
                <span className="text-sm font-medium">Log out</span>
              </button>
            )}
          </div>
        </div>
      </Sheet>
    </>
  );
};
