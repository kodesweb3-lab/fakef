import React, { useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  LayoutGrid,
  LayoutDashboard,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Info,
  Shield,
  CheckCircle,
  CreditCard,
  Gift,
  FileText,
  LogOut,
} from 'lucide-react';
import { Tooltip } from '../ui/Tooltip';
import { Sheet } from '../ui/Sheet';
import { Separator } from '../ui/Separator';
import { DESKTOP_PRIMARY, DESKTOP_MORE } from './navConfig';
import { WordmarkLogo } from '../WordmarkLogo';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Home,
  LayoutGrid,
  LayoutDashboard,
  Info,
  Shield,
  CheckCircle,
  CreditCard,
  Gift,
  FileText,
};

const SIDEBAR_COLLAPSED = 72;
const SIDEBAR_EXPANDED = 240;

interface CompactSidebarProps {
  isAuthorized: boolean;
  onLogout: () => void;
}

export const CompactSidebar: React.FC<CompactSidebarProps> = ({ isAuthorized, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isHoverOrExpanded = expanded || hovered;
  const width = isHoverOrExpanded ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED;

  const isActive = useCallback(
    (path: string) => {
      if (path === '/') return location.pathname === '/';
      return location.pathname === path || location.pathname.startsWith(path + '/');
    },
    [location.pathname]
  );

  const primaryItems = DESKTOP_PRIMARY.filter(
    (item) => !item.requiresAuth || (item.requiresAuth && isAuthorized)
  );

  const moreItems = DESKTOP_MORE.filter(
    (item) => !item.requiresAuth || (item.requiresAuth && isAuthorized)
  );

  const handleMoreNav = (path: string) => {
    setMoreOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    setMoreOpen(false);
    onLogout();
  };

  return (
    <>
      <aside
        className="fixed left-0 top-0 h-screen flex flex-col z-50 bg-midnight/95 backdrop-blur-xl border-r border-black/10 transition-[width] duration-200 ease-out overflow-hidden"
        style={{ width }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Main navigation"
      >
        {/* Logo + expand/collapse toggle */}
        <div className="flex-shrink-0 p-4 flex items-center gap-3 min-h-[72px]">
          <Link
            to="/"
            className="flex items-center gap-3 min-w-0 flex-1"
            aria-label="FAKE Tek Home"
          >
            <WordmarkLogo size={isHoverOrExpanded ? 'sm' : 'xs'} compact={!isHoverOrExpanded} />
          </Link>
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="p-1.5 rounded-lg text-soft-slate hover:text-black hover:bg-black/5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black flex-shrink-0"
            aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {expanded || isHoverOrExpanded ? (
              <ChevronLeft className="w-4 h-4" size={16} />
            ) : (
              <ChevronRight className="w-4 h-4" size={16} />
            )}
          </button>
        </div>

        <Separator className="mx-3" />

        {/* Primary nav */}
        <nav className="flex-1 overflow-y-auto py-3" aria-label="Primary navigation">
          <ul className="space-y-0.5 px-3">
            {primaryItems.map((item) => {
              const Icon = ICON_MAP[item.icon];
              const active = isActive(item.path);
              const link = (
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-3 h-11 px-3 rounded-lg transition-colors outline-none
                    focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white
                    ${active ? 'sidebar-item-active bg-black/10 text-black' : 'text-soft-slate hover:bg-black/5 hover:text-black'}
                  `}
                  aria-current={active ? 'page' : undefined}
                  aria-label={item.label}
                >
                  {Icon && <Icon className="w-5 h-5 flex-shrink-0" size={20} />}
                  {isHoverOrExpanded && (
                    <span className="text-[11px] font-mono uppercase tracking-wider truncate">
                      {item.label}
                    </span>
                  )}
                </Link>
              );
              return (
                <li key={item.path}>
                  {!isHoverOrExpanded ? (
                    <Tooltip content={item.label} side="right">
                      {link}
                    </Tooltip>
                  ) : (
                    link
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <Separator className="mx-3" />

        {/* More button + optional parent entity */}
        <div className="flex-shrink-0 p-3 space-y-2">
          <button
            type="button"
            onClick={() => setMoreOpen(true)}
            className={`
              w-full flex items-center gap-3 h-11 px-3 rounded-lg transition-colors outline-none
              focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white
              text-soft-slate hover:bg-black/5 hover:text-black
            `}
            aria-label="More links"
            aria-expanded={moreOpen}
            aria-haspopup="dialog"
          >
            <MoreHorizontal className="w-5 h-5 flex-shrink-0" size={20} />
            {isHoverOrExpanded && (
              <span className="text-[11px] font-mono uppercase tracking-wider">More</span>
            )}
          </button>
          {isHoverOrExpanded && (
            <div className="px-3 pt-2 border-t border-black/10">
              <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest block">
                Parent
              </span>
              <a
                href="#"
                className="text-[9px] font-bold text-soft-slate hover:text-black transition-colors tracking-wider"
              >
                ALPHA TEK
              </a>
            </div>
          )}
        </div>
      </aside>

      {/* More sheet */}
      <Sheet
        open={moreOpen}
        onOpenChange={setMoreOpen}
        side="right"
        title="More"
        className="!max-w-[280px]"
      >
        <div className="p-4 space-y-1">
          {moreItems.map((item) => {
            const Icon = ICON_MAP[item.icon];
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => handleMoreNav(item.path)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors
                  outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white
                  ${active ? 'bg-black/10 text-black' : 'text-soft-slate hover:bg-black/5 hover:text-black'}
                `}
                aria-current={active ? 'page' : undefined}
              >
                {Icon && <Icon className="w-4 h-4 flex-shrink-0" size={16} />}
                <span className="text-xs font-mono uppercase tracking-wider">{item.label}</span>
              </button>
            );
          })}
          <Separator className="my-3" />
          {isAuthorized ? (
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-soft-slate hover:bg-black/10 hover:text-black transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="Disconnect"
            >
              <LogOut className="w-4 h-4 flex-shrink-0" size={16} />
              <span className="text-xs font-mono uppercase tracking-wider">Disconnect</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setMoreOpen(false);
                navigate('/auth/login');
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left bg-black/10 text-black hover:bg-black hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="Authorize"
            >
              <span className="text-xs font-mono uppercase tracking-wider">Authorize</span>
            </button>
          )}
        </div>
      </Sheet>
    </>
  );
};
