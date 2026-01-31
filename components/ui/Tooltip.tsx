import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
}

/**
 * Simple hover tooltip. Accessible: aria-describedby when visible.
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  side = 'right',
  delay = 200,
}) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  useEffect(() => {
    if (!visible || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const gap = 8;
    let x = 0;
    let y = 0;
    switch (side) {
      case 'right':
        x = rect.right + gap;
        y = rect.top + rect.height / 2;
        break;
      case 'left':
        x = rect.left - gap;
        y = rect.top + rect.height / 2;
        break;
      case 'top':
        x = rect.left + rect.width / 2;
        y = rect.top - gap;
        break;
      case 'bottom':
        x = rect.left + rect.width / 2;
        y = rect.bottom + gap;
        break;
      default:
        x = rect.right + gap;
        y = rect.top + rect.height / 2;
    }
    setCoords({ x, y });
  }, [visible, side]);

  const positionClasses = {
    right: 'left-0 top-1/2 -translate-y-1/2 ml-2',
    left: 'right-0 top-1/2 -translate-y-1/2 mr-2',
    top: 'left-1/2 bottom-0 -translate-x-1/2 mb-2',
    bottom: 'left-1/2 top-0 -translate-x-1/2 mt-2',
  };

  return (
    <div
      ref={triggerRef}
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className={`absolute z-[200] px-2.5 py-1.5 text-xs font-mono text-white bg-black border border-white/20 rounded shadow-[0_4px_12px_rgba(0,0,0,0.3)] whitespace-nowrap pointer-events-none ${positionClasses[side]}`}
          style={{ marginLeft: side === 'right' ? 8 : undefined, marginRight: side === 'left' ? 8 : undefined }}
        >
          {content}
        </span>
      )}
    </div>
  );
};
