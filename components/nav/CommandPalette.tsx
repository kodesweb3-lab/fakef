import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { COMMAND_PALETTE_ROUTES } from './navConfig';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isAuthorized: boolean;
}

/**
 * Command Palette: Ctrl/Cmd+K to open, search routes, select to navigate.
 * Accessible: keyboard nav (arrow keys, Enter, Escape).
 */
export const CommandPalette: React.FC<CommandPaletteProps> = ({
  open,
  onOpenChange,
  isAuthorized,
}) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const items = useMemo(() => {
    const filtered = COMMAND_PALETTE_ROUTES.filter((item) => {
      if (item.requiresAuth && !isAuthorized) return false;
      const q = query.toLowerCase().trim();
      if (!q) return true;
      return item.label.toLowerCase().includes(q) || item.path.toLowerCase().includes(q);
    });
    return filtered;
  }, [query, isAuthorized]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (selectedIndex >= items.length) setSelectedIndex(Math.max(0, items.length - 1));
  }, [items.length, selectedIndex]);

  useEffect(() => {
    const el = listRef.current;
    if (!el || selectedIndex < 0) return;
    const child = el.children[selectedIndex] as HTMLElement;
    child?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [selectedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onOpenChange(false);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => (i + 1) % items.length);
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((i) => (i - 1 + items.length) % items.length);
      return;
    }
    if (e.key === 'Enter' && items[selectedIndex]) {
      e.preventDefault();
      onOpenChange(false);
      navigate(items[selectedIndex].path);
    }
  };

  const handleSelect = (path: string) => {
    onOpenChange(false);
    navigate(path);
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="fixed left-1/2 top-[20%] -translate-x-1/2 z-[111] w-full max-w-md bg-midnight/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
          <Search className="w-4 h-4 text-soft-slate flex-shrink-0" size={16} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search routes..."
            className="flex-1 bg-transparent text-white placeholder-soft-slate/50 text-sm font-mono outline-none py-2"
            aria-label="Search"
          />
          <kbd className="text-[10px] font-mono text-soft-slate/60 px-1.5 py-0.5 rounded border border-white/10">
            ESC
          </kbd>
        </div>
        <div
          ref={listRef}
          className="max-h-72 overflow-y-auto py-2"
          role="listbox"
          aria-activedescendant={items[selectedIndex] ? `cmd-${selectedIndex}` : undefined}
        >
          {items.length === 0 ? (
            <div className="px-4 py-6 text-center text-soft-slate/60 text-sm font-mono">
              No routes match
            </div>
          ) : (
            items.map((item, i) => (
              <button
                key={item.path + item.label}
                id={`cmd-${i}`}
                type="button"
                role="option"
                aria-selected={i === selectedIndex}
                onClick={() => handleSelect(item.path)}
                onMouseEnter={() => setSelectedIndex(i)}
                className={`
                  w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors outline-none
                  focus-visible:bg-white/5
                  ${i === selectedIndex ? 'bg-electric-blue/10 text-electric-blue' : 'text-soft-slate hover:bg-white/5 hover:text-white'}
                `}
              >
                <span className="text-xs font-mono uppercase tracking-wider truncate">
                  {item.label}
                </span>
                <span className="text-[10px] font-mono text-soft-slate/60 truncate ml-auto">
                  {item.path}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </>
  );
};
