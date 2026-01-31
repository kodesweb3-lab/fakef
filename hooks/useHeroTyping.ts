import { useState, useEffect, useRef } from 'react';

const LINE_1 = 'Field Analysis of Kinetic Engagement';
const LINE_2 = 'An Alpha Tek Research Initiative';

const DELAY_LOGO_MS = 400;
const DELAY_FAKE_TEK_MS = 900;
const DELAY_AFTER_FAKE_TEK_MS = 500;
const CHAR_MS_LINE_1 = 55;
const CHAR_MS_LINE_2 = 45;
const CURSOR_BLINK_MS = 530;

export type HeroPhase = 0 | 1 | 2 | 3 | 4;

export function useHeroTyping() {
  const [phase, setPhase] = useState<HeroPhase>(0);
  const [typedLine1, setTypedLine1] = useState('');
  const [typedLine2, setTypedLine2] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cursorRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const t0 = setTimeout(() => setPhase(1), DELAY_LOGO_MS);
    return () => clearTimeout(t0);
  }, []);

  useEffect(() => {
    if (phase !== 1) return;
    const t1 = setTimeout(() => setPhase(2), DELAY_FAKE_TEK_MS + DELAY_AFTER_FAKE_TEK_MS);
    return () => clearTimeout(t1);
  }, [phase]);

  useEffect(() => {
    if (phase !== 2) return;
    let i = 0;
    intervalRef.current = setInterval(() => {
      i += 1;
      setTypedLine1(LINE_1.slice(0, i));
      if (i >= LINE_1.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setPhase(3);
      }
    }, CHAR_MS_LINE_1);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== 3) return;
    let i = 0;
    intervalRef.current = setInterval(() => {
      i += 1;
      setTypedLine2(LINE_2.slice(0, i));
      if (i >= LINE_2.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setPhase(4);
      }
    }, CHAR_MS_LINE_2);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [phase]);

  useEffect(() => {
    if (phase < 2) return;
    cursorRef.current = setInterval(() => {
      setCursorVisible((v) => !v);
    }, CURSOR_BLINK_MS);
    return () => {
      if (cursorRef.current) clearInterval(cursorRef.current);
    };
  }, [phase]);

  const introComplete = phase >= 4;
  const showCursor = phase === 2 || phase === 3;

  return {
    phase,
    typedLine1,
    typedLine2,
    cursorVisible: showCursor && cursorVisible,
    introComplete,
    fullLine1: LINE_1,
    fullLine2: LINE_2,
  };
}
