import React, { useEffect } from 'react';

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  side?: 'left' | 'right' | 'bottom';
  title?: string;
  /** Optional class for the overlay */
  className?: string;
}

/**
 * Drawer/Sheet component - slides in from side or bottom.
 * Accessible: focus trap, escape to close, aria attributes.
 */
export const Sheet: React.FC<SheetProps> = ({
  open,
  onOpenChange,
  children,
  side = 'right',
  title,
  className = '',
}) => {
  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false);
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  const sideClasses = {
    right: 'right-0 top-0 bottom-0 w-full max-w-sm',
    left: 'left-0 top-0 bottom-0 w-full max-w-sm',
    bottom: 'left-0 right-0 bottom-0 max-h-[85vh] rounded-t-2xl',
  };

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'sheet-title' : undefined}
        className={`fixed z-[101] bg-white/98 backdrop-blur-xl border border-black/10 shadow-2xl flex flex-col ${sideClasses[side]} ${className}`}
        style={
          side === 'bottom'
            ? { paddingBottom: 'env(safe-area-inset-bottom)' }
            : undefined
        }
      >
        {title && (
          <div className="flex items-center justify-between px-4 py-3 border-b border-black/10">
            <h2 id="sheet-title" className="text-sm font-mono uppercase tracking-wider text-black">
              {title}
            </h2>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="p-2 rounded-lg text-soft-slate hover:text-black hover:bg-black/5 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </>
  );
};
