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
        className="fixed left-0 top-0 h-screen flex flex-col z-50 bg-midnight/95 backdrop-blur-xl border-r border-white/5 transition-[width] duration-200 ease-out overflow-hidden"
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
            <div className="w-9 h-9 flex-shrink-0 border border-electric-blue/40 flex items-center justify-center rounded transition-colors hover:bg-electric-blue hover:border-electric-blue group">
              <span className="font-bold text-[10px] text-white tracking-tighter group-hover:text-midnight">
                FK
              </span>
            </div>
            {isHoverOrExpanded && (
              <span className="font-bold text-lg tracking-[0.2em] text-white font-display whitespace-nowrap overflow-hidden">
                FAKE
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="p-1.5 rounded-lg text-soft-slate hover:text-white hover:bg-white/5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-electric-blue flex-shrink-0"
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
                    focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-midnight
                    ${active ? 'sidebar-item-active bg-electric-blue/10 text-electric-blue' : 'text-soft-slate hover:bg-white/5 hover:text-white'}
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
              focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-midnight
              text-soft-slate hover:bg-white/5 hover:text-white
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
            <div className="px-3 pt-2 border-t border-white/5">
              <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest block">
                Parent
              </span>
              <a
                href="#"
                className="text-[9px] font-bold text-electric-blue hover:text-white transition-colors tracking-wider"
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
                  outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-midnight
                  ${active ? 'bg-electric-blue/10 text-electric-blue' : 'text-soft-slate hover:bg-white/5 hover:text-white'}
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
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-red-400/80 hover:bg-red-500/10 hover:text-red-400 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-red-500"
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
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left bg-electric-blue/10 text-electric-blue hover:bg-electric-blue hover:text-midnight transition-colors outline-none focus-visible:ring-2 focus-visible:ring-electric-blue"
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
