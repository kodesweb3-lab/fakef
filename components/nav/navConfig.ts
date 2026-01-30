/**
 * Shared nav config for CompactSidebar and MobileBottomNav.
 * Single source of truth for routes and labels.
 */

export interface NavItem {
  label: string;
  path: string;
  icon: string; // lucide icon name for reference; components use LucideIcon
  requiresAuth?: boolean;
}

/** Desktop primary sidebar links (always in bar) */
export const DESKTOP_PRIMARY: NavItem[] = [
  { label: 'Home', path: '/', icon: 'Home' },
  { label: 'Domains', path: '/domains', icon: 'LayoutGrid' },
  { label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard', requiresAuth: true },
];

/** Desktop "More" sheet: secondary links */
export const DESKTOP_MORE: NavItem[] = [
  { label: 'Mission', path: '/about', icon: 'Info' },
  { label: 'Responsible Use', path: '/responsible-use', icon: 'Shield' },
  { label: 'Ethics', path: '/research-ethics', icon: 'CheckCircle' },
  { label: 'Billing', path: '/dashboard/billing', icon: 'CreditCard', requiresAuth: true },
  { label: 'Rewards', path: '/dashboard/rewards', icon: 'Gift', requiresAuth: true },
  { label: 'Terms', path: '/terms', icon: 'FileText' },
];

/** Mobile bottom tabs (4 tabs) */
export const MOBILE_TABS: NavItem[] = [
  { label: 'Home', path: '/', icon: 'Home' },
  { label: 'Domains', path: '/domains', icon: 'LayoutGrid' },
  { label: 'Notes', path: '/notes', icon: 'StickyNote', requiresAuth: true },
  { label: 'Account', path: '/account', icon: 'User' },
];

/** Mobile center primary action */
export const MOBILE_CENTER_ACTION = {
  label: 'Scan',
  path: '/scan',
  pathAlt: '/dashboard',
  icon: 'Scan',
  requiresAuth: true,
};

/** Mobile Account sheet: Billing, Rewards, Responsible Use, Terms, Logout */
export const MOBILE_ACCOUNT_SHEET: NavItem[] = [
  { label: 'Billing', path: '/dashboard/billing', icon: 'CreditCard', requiresAuth: true },
  { label: 'Rewards', path: '/dashboard/rewards', icon: 'Gift', requiresAuth: true },
  { label: 'Responsible Use', path: '/responsible-use', icon: 'Shield' },
  { label: 'Terms', path: '/terms', icon: 'FileText' },
];

/** All routes for Command Palette (Ctrl/Cmd+K) */
export const COMMAND_PALETTE_ROUTES: NavItem[] = [
  { label: 'Home', path: '/', icon: 'Home' },
  { label: 'Domains', path: '/domains', icon: 'LayoutGrid' },
  { label: 'Mission', path: '/about', icon: 'Info' },
  { label: 'Responsible Use', path: '/responsible-use', icon: 'Shield' },
  { label: 'Ethics', path: '/research-ethics', icon: 'CheckCircle' },
  { label: 'Terms', path: '/terms', icon: 'FileText' },
  { label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard', requiresAuth: true },
  { label: 'Scan', path: '/scan', icon: 'Scan', requiresAuth: true },
  { label: 'Notes', path: '/notes', icon: 'StickyNote', requiresAuth: true },
  { label: 'Account', path: '/account', icon: 'User' },
  { label: 'Billing', path: '/dashboard/billing', icon: 'CreditCard', requiresAuth: true },
  { label: 'Rewards', path: '/dashboard/rewards', icon: 'Gift', requiresAuth: true },
];
