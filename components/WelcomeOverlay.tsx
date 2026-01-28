import React, { useEffect, useRef, useState } from 'react';
import { generateBinaryGrid, updateBinaryGrid, calculateOpacity, easing, DEFAULT_BINARY_CONFIG } from '../lib/binary';

const SESSION_STORAGE_KEY = 'fake_welcome_seen';
const ANIMATION_DURATION = 3000;
const LOGO_FADE_IN_START = 900;
const LOGO_FADE_IN_END = 1700;
const LOGO_FADE_OUT_START = 1700;
const LOGO_FADE_OUT_END = 2400;
const OVERLAY_FADE_OUT_START = 2400;
const OVERLAY_FADE_OUT_END = 3000;

const WelcomeOverlay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number>(0);
  const binaryGridRef = useRef<Array<{ x: number; y: number; value: string }>>([]);
  const originalOverflowRef = useRef<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') {
      setIsComplete(true);
      return;
    }

    const alreadySeen = sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true';
    if (alreadySeen) {
      setIsComplete(true);
      return;
    }

    const startAnimation = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        originalOverflowRef.current = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
          setIsComplete(true);
          sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
          document.body.style.overflow = originalOverflowRef.current || '';
        }, 1000);
        return;
      }

      startTimeRef.current = Date.now();
      originalOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const canvas = canvasRef.current;
      if (!canvas) {
        setIsComplete(true);
        document.body.style.overflow = originalOverflowRef.current || '';
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setIsComplete(true);
        document.body.style.overflow = originalOverflowRef.current || '';
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      
      const updateCanvasSize = () => {
        if (!canvas || !ctx) return;
        const rect = canvas.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        ctx.font = `${DEFAULT_BINARY_CONFIG.fontSize}px 'IBM Plex Mono', monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        binaryGridRef.current = generateBinaryGrid(
          rect.width,
          rect.height,
          DEFAULT_BINARY_CONFIG.fontSize * 1.5,
          DEFAULT_BINARY_CONFIG.density
        );
      };

      updateCanvasSize();
      window.addEventListener('resize', updateCanvasSize);

      let lastUpdateTime = 0;
      const animate = () => {
        const elapsed = Date.now() - startTimeRef.current;
        const progress = Math.min(elapsed / ANIMATION_DURATION, 1);

        if (progress >= 1) {
          setIsComplete(true);
          sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
          document.body.style.overflow = originalOverflowRef.current || '';
          window.removeEventListener('resize', updateCanvasSize);
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
          return;
        }

        if (canvas && ctx) {
          ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

          const now = Date.now();
          if (now - lastUpdateTime >= DEFAULT_BINARY_CONFIG.updateRate) {
            updateBinaryGrid(binaryGridRef.current, 0.3);
            lastUpdateTime = now;
          }

          const bgOpacity = calculateOpacity(progress, OVERLAY_FADE_OUT_START / ANIMATION_DURATION, 1);
          const logoOpacity = calculateOpacity(
            progress,
            LOGO_FADE_IN_START / ANIMATION_DURATION,
            LOGO_FADE_OUT_END / ANIMATION_DURATION
          );
          
          let logoScale = 1;
          if (progress < LOGO_FADE_IN_START / ANIMATION_DURATION) {
            logoScale = 0;
          } else if (progress < LOGO_FADE_OUT_START / ANIMATION_DURATION) {
            const fadeInProgress = (progress - LOGO_FADE_IN_START / ANIMATION_DURATION) / ((LOGO_FADE_IN_END - LOGO_FADE_IN_START) / ANIMATION_DURATION);
            logoScale = easing.easeOut(fadeInProgress);
          } else {
            const fadeOutProgress = (progress - LOGO_FADE_OUT_START / ANIMATION_DURATION) / ((LOGO_FADE_OUT_END - LOGO_FADE_OUT_START) / ANIMATION_DURATION);
            logoScale = 1 - easing.easeIn(fadeOutProgress);
          }

          ctx.globalAlpha = bgOpacity * 0.4;
          binaryGridRef.current.forEach((cell) => {
            const color = Math.random() > 0.7
              ? DEFAULT_BINARY_CONFIG.colors.primary
              : Math.random() > 0.5
              ? DEFAULT_BINARY_CONFIG.colors.secondary
              : DEFAULT_BINARY_CONFIG.colors.glow;
            ctx.fillStyle = color;
            ctx.fillText(cell.value, cell.x, cell.y);
          });

          if (progress >= LOGO_FADE_IN_START / ANIMATION_DURATION && logoScale > 0.1) {
            const centerX = canvas.width / dpr / 2;
            const centerY = canvas.height / dpr / 2;
            const scale = Math.max(0.1, logoScale);
            const fontSize = Math.min(window.innerWidth / 8, 72);
            const tekFontSize = fontSize * 0.67;

            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.scale(scale, scale);
            ctx.translate(-centerX, -centerY);

            ctx.globalAlpha = logoOpacity;
            ctx.font = `bold ${fontSize}px "Space Grotesk", sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            const fakeText = 'FAKE';
            const tekText = 'Tek';
            const fakeY = centerY - 20;
            const tekY = centerY + 35;

            ctx.fillStyle = DEFAULT_BINARY_CONFIG.colors.primary;
            ctx.fillText(fakeText, centerX, fakeY);

            ctx.globalAlpha = logoOpacity * 0.3;
            ctx.font = '12px "IBM Plex Mono", monospace';
            for (let i = 0; i < fakeText.length; i++) {
              const charX = centerX - (fakeText.length * 20) / 2 + i * 20;
              const binaryChar = Math.random() > 0.5 ? '1' : '0';
              ctx.fillText(binaryChar, charX + Math.random() * 10 - 5, fakeY + Math.random() * 10 - 5);
            }

            ctx.globalAlpha = logoOpacity;
            ctx.font = `bold ${tekFontSize}px "Space Grotesk", sans-serif`;
            ctx.fillStyle = DEFAULT_BINARY_CONFIG.colors.secondary;
            ctx.fillText(tekText, centerX, tekY);

            ctx.restore();
          }
        }

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);

      cleanupRef.current = () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener('resize', updateCanvasSize);
        document.body.style.overflow = originalOverflowRef.current || '';
      };
    };

    setIsVisible(true);
    const timeoutId = setTimeout(() => {
      startAnimation();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, []);

  if (isComplete) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-midnight"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.1s ease-in',
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default WelcomeOverlay;
