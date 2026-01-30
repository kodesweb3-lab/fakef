import React, { useEffect, useRef, useState } from 'react';

// ─── Config: adjust timing and strings here ─────────────────────────────────
const WELCOME_CONFIG = {
  sessionStorageKey: 'fake_typing_welcome_seen',

  // Text sequence (exact as specified)
  line1: 'FAKE Tek',
  mistake: ' — the clout panel',
  correct: ' — the attention lab',

  // Timing (ms) — tuned for readable "live typing" feel
  initialDelay: 600,           // pause before first character (screen lands first)
  typeDelay: 130,             // ms per character when typing (readable pace)
  pauseAfterLine1: 400,        // brief beat after "FAKE Tek" before subtitle
  pauseAfterMistake: 550,       // time to read "the clout panel" before backspace
  backspaceDelay: 50,          // ms per char when deleting (quick but visible)
  pauseBeforeFade: 800,         // time to read final line before fade
  fadeOutDuration: 500,

  // Reduced motion: show final text then fade
  reducedMotionShowMs: 600,
  reducedMotionFadeMs: 400,
} as const;
// ─────────────────────────────────────────────────────────────────────────────

const SESSION_KEY = WELCOME_CONFIG.sessionStorageKey;

type Phase =
  | 'idle'
  | 'typing1'
  | 'typing_mistake'
  | 'pause_after_mistake'
  | 'backspacing'
  | 'typing_correct'
  | 'pause_before_fade'
  | 'fade_out'
  | 'done';

const WelcomeTypingOverlay: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<Phase>('idle');
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [fadeScale, setFadeScale] = useState(1);
  const [showCursor, setShowCursor] = useState(true);

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const cursorIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef = useRef<number | null>(null);
  const fadeStartRef = useRef<number>(0);

  const clearAllTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
    if (cursorIntervalRef.current) {
      clearInterval(cursorIntervalRef.current);
      cursorIntervalRef.current = null;
    }
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const schedule = (fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
  };

  useEffect(() => {
    if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') return;
    if (sessionStorage.getItem(SESSION_KEY) === 'true') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setVisible(true);
      setText(WELCOME_CONFIG.line1 + WELCOME_CONFIG.correct);
      setShowCursor(false);
      schedule(() => {
        setPhase('fade_out');
        fadeStartRef.current = Date.now();
        const duration = WELCOME_CONFIG.reducedMotionFadeMs;
        const tick = () => {
          const elapsed = Date.now() - fadeStartRef.current;
          const t = Math.min(elapsed / duration, 1);
          setFadeOpacity(1 - t);
          setFadeScale(1 - t * 0.15);
          if (t < 1) {
            rafRef.current = requestAnimationFrame(tick);
          } else {
            setPhase('done');
            sessionStorage.setItem(SESSION_KEY, 'true');
          }
        };
        rafRef.current = requestAnimationFrame(tick);
      }, WELCOME_CONFIG.reducedMotionShowMs);
      return () => {
        clearAllTimers();
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      };
    }

    setVisible(true);

    // Blinking cursor
    cursorIntervalRef.current = setInterval(() => {
      setShowCursor((c) => !c);
    }, 530);

    const {
      line1,
      mistake,
      correct,
      initialDelay,
      typeDelay,
      pauseAfterLine1,
      backspaceDelay,
      pauseAfterMistake,
      pauseBeforeFade,
      fadeOutDuration,
    } = WELCOME_CONFIG;

    // Phase 1: type "FAKE Tek" (starts after initialDelay)
    let idx = 0;
    const typeLine1 = () => {
      if (idx >= line1.length) {
        setPhase('typing_mistake');
        idx = 0;
        schedule(() => typeMistake(), pauseAfterLine1);
        return;
      }
      setText(line1.slice(0, idx + 1));
      idx += 1;
      schedule(typeLine1, typeDelay);
    };

    const typeMistake = () => {
      if (idx >= mistake.length) {
        setPhase('pause_after_mistake');
        schedule(() => {
          setPhase('backspacing');
          backspaceMistake();
        }, pauseAfterMistake);
        return;
      }
      setText(line1 + mistake.slice(0, idx + 1));
      idx += 1;
      schedule(typeMistake, typeDelay);
    };

    const backspaceMistake = () => {
      if (idx <= 0) {
        setPhase('typing_correct');
        idx = 0;
        typeCorrect();
        return;
      }
      idx -= 1;
      setText(line1 + mistake.slice(0, idx));
      schedule(backspaceMistake, backspaceDelay);
    };

    const typeCorrect = () => {
      if (idx >= correct.length) {
        setPhase('pause_before_fade');
        schedule(() => {
          setPhase('fade_out');
          if (cursorIntervalRef.current) {
            clearInterval(cursorIntervalRef.current);
            cursorIntervalRef.current = null;
          }
          setShowCursor(false);
          fadeStartRef.current = Date.now();
          const duration = fadeOutDuration;
          const tick = () => {
            const elapsed = Date.now() - fadeStartRef.current;
            const t = Math.min(elapsed / duration, 1);
            setFadeOpacity(1 - t);
            setFadeScale(1 - t * 0.15);
            if (t < 1) {
              rafRef.current = requestAnimationFrame(tick);
            } else {
              setPhase('done');
              sessionStorage.setItem(SESSION_KEY, 'true');
            }
          };
          rafRef.current = requestAnimationFrame(tick);
        }, pauseBeforeFade);
        return;
      }
      setText(line1 + correct.slice(0, idx + 1));
      idx += 1;
      schedule(typeCorrect, typeDelay);
    };

    setPhase('typing1');
    schedule(typeLine1, initialDelay);

    return () => {
      clearAllTimers();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (phase === 'done') {
      clearAllTimers();
    }
  }, [phase]);

  if (phase === 'done') {
    return null;
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
        background: 'linear-gradient(180deg, #0B0E1A 0%, #0f1420 40%, #0B0E1A 100%)',
        pointerEvents: phase === 'fade_out' ? 'none' : 'auto',
      }}
      aria-hidden="true"
    >
      {/* Optional: very subtle binary noise overlay (minimal) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="relative flex items-center justify-center transition-none"
        style={{
          opacity: fadeOpacity,
          transform: `scale(${fadeScale})`,
          transition: phase === 'fade_out' ? 'none' : undefined,
        }}
      >
        <div className="flex items-baseline font-mono text-2xl sm:text-3xl md:text-4xl tracking-wider text-muted-white">
          <span
            className="inline-block text-center select-none"
            style={{
              textShadow: '0 0 24px rgba(79, 140, 255, 0.25), 0 0 48px rgba(107, 92, 255, 0.12)',
            }}
          >
            {text}
          </span>
          {showCursor && (
            <span
              className="inline-block w-[2px] h-[1em] bg-electric-blue ml-0.5 align-baseline"
              style={{
                boxShadow: '0 0 8px rgba(79, 140, 255, 0.5)',
                animation: 'welcome-cursor-blink 1.05s step-end infinite',
              }}
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeTypingOverlay;
