import React, { useRef, useCallback, useState, useEffect } from 'react';

/**
 * Wrapper that adds animated black corner lines on hover (desktop) and on tap (mobile).
 * Use on cards and buttons for a consistent theme effect.
 */

const cornerBase =
  'absolute border-black pointer-events-none transition-all duration-300 ease-out';

const corners = [
  { position: 'top-0 left-0', borders: 'border-t-2 border-l-2', origin: 'origin-top-left', delay: 'delay-0' },
  { position: 'top-0 right-0', borders: 'border-t-2 border-r-2', origin: 'origin-top-right', delay: 'delay-75' },
  { position: 'bottom-0 left-0', borders: 'border-b-2 border-l-2', origin: 'origin-bottom-left', delay: 'delay-150' },
  { position: 'bottom-0 right-0', borders: 'border-b-2 border-r-2', origin: 'origin-bottom-right', delay: 'delay-[225ms]' },
];

const TOUCH_REVEAL_MS = 1600;

interface CornerHoverProps {
  children: React.ReactNode;
  className?: string;
  /** Corner size - sm for buttons, md/lg for cards */
  cornerSize?: 'sm' | 'md' | 'lg';
}

export const CornerHover: React.FC<CornerHoverProps> = ({
  children,
  className = '',
  cornerSize = 'md',
}) => {
  const sizeClass = cornerSize === 'sm' ? 'w-[10px] h-[10px]' : cornerSize === 'lg' ? 'w-[18px] h-[18px]' : 'w-[14px] h-[14px]';
  const [touched, setTouched] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTapReveal = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setTouched(true);
    timeoutRef.current = setTimeout(() => {
      setTouched(false);
      timeoutRef.current = null;
    }, TOUCH_REVEAL_MS);
  }, []);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div
      className={`group relative ${className} ${touched ? 'corner-touched' : ''}`}
      onTouchEnd={handleTapReveal}
    >
      {corners.map((c, i) => (
        <div
          key={i}
          className={`
            ${cornerBase} ${sizeClass} ${c.position} ${c.borders} ${c.origin} ${c.delay}
            scale-0 opacity-0
            group-hover:scale-100 group-hover:opacity-100
            group-focus-within:scale-100 group-focus-within:opacity-100
            group-active:scale-100 group-active:opacity-100
            group-[.corner-touched]:scale-100 group-[.corner-touched]:opacity-100
          `}
          aria-hidden
        />
      ))}
      {children}
    </div>
  );
};

export default CornerHover;
