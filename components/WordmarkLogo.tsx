import React from 'react';

type WordmarkSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type WordmarkTone = 'dark' | 'light';

interface WordmarkLogoProps {
  className?: string;
  size?: WordmarkSize;
  tone?: WordmarkTone;
  stacked?: boolean;
  compact?: boolean;
}

const SIZE_MAP: Record<
  WordmarkSize,
  {
    fake: string;
    tek: string;
    compact: string;
    gap: string;
    badgePad: string;
  }
> = {
  xs: {
    fake: 'text-sm tracking-[0.18em]',
    tek: 'text-[9px] tracking-[0.22em]',
    compact: 'text-xs tracking-[0.18em]',
    gap: 'gap-1.5',
    badgePad: 'px-1.5 py-[1px]',
  },
  sm: {
    fake: 'text-base tracking-[0.2em]',
    tek: 'text-[10px] tracking-[0.24em]',
    compact: 'text-sm tracking-[0.2em]',
    gap: 'gap-2',
    badgePad: 'px-2 py-[1px]',
  },
  md: {
    fake: 'text-xl tracking-[0.22em]',
    tek: 'text-xs tracking-[0.26em]',
    compact: 'text-lg tracking-[0.22em]',
    gap: 'gap-2.5',
    badgePad: 'px-2.5 py-[2px]',
  },
  lg: {
    fake: 'text-3xl tracking-[0.24em]',
    tek: 'text-sm tracking-[0.3em]',
    compact: 'text-2xl tracking-[0.24em]',
    gap: 'gap-3',
    badgePad: 'px-3 py-[2px]',
  },
  xl: {
    fake: 'text-[clamp(2.6rem,10vmin,8rem)] tracking-[0.2em]',
    tek: 'text-[clamp(0.8rem,1.8vmin,1.05rem)] tracking-[0.4em]',
    compact: 'text-[clamp(2rem,8vmin,4rem)] tracking-[0.2em]',
    gap: 'gap-3',
    badgePad: 'px-3 py-[3px]',
  },
};

export const WordmarkLogo: React.FC<WordmarkLogoProps> = ({
  className = '',
  size = 'md',
  tone = 'dark',
  stacked = false,
  compact = false,
}) => {
  const palette = tone === 'light'
    ? {
        main: 'text-white',
        muted: 'text-white/70',
        border: 'border-white/50',
        bg: 'bg-white/5',
      }
    : {
        main: 'text-black',
        muted: 'text-soft-slate',
        border: 'border-black/35',
        bg: 'bg-black/[0.04]',
      };

  const styles = SIZE_MAP[size];

  if (compact) {
    return (
      <span
        className={`inline-flex items-center justify-center font-display font-black uppercase leading-none ${styles.compact} ${palette.main} ${className}`}
      >
        FK
      </span>
    );
  }

  if (stacked) {
    return (
      <div className={`inline-flex flex-col items-center ${styles.gap} ${className}`}>
        <span className={`font-display font-black uppercase leading-none ${styles.fake} ${palette.main}`}>
          FAKE
        </span>
        <span
          className={`font-mono font-semibold uppercase leading-none rounded-md border ${palette.border} ${palette.bg} ${palette.muted} ${styles.tek} ${styles.badgePad}`}
        >
          TEK
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${styles.gap} ${className}`}>
      <span className={`font-display font-black uppercase leading-none ${styles.fake} ${palette.main}`}>
        FAKE
      </span>
      <span
        className={`font-mono font-semibold uppercase leading-none rounded-md border ${palette.border} ${palette.bg} ${palette.muted} ${styles.tek} ${styles.badgePad}`}
      >
        TEK
      </span>
    </div>
  );
};

export default WordmarkLogo;
