import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '../constants';

const HEADER_SIZE = 96;  // px – logo size when docked in header (matches footer h-24)
const SCROLL_DISTANCE = 300; // px of scroll over which the transition happens

function getHeroSize() {
  return typeof window !== 'undefined' && window.innerWidth < 768 ? 180 : 320;
}

const ScrollLogo: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [headerPos, setHeaderPos] = useState({ x: 24, y: 12 });
  const [heroSize, setHeroSize] = useState(getHeroSize);
  const placeholderRef = useRef<HTMLDivElement | null>(null);

  const updateHeaderPos = useCallback(() => {
    if (placeholderRef.current) {
      const rect = placeholderRef.current.getBoundingClientRect();
      setHeaderPos({ x: rect.left, y: rect.top });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / SCROLL_DISTANCE));
      setProgress(p);
      updateHeaderPos();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    const handleResize = () => {
      setHeroSize(getHeroSize());
      updateHeaderPos();
    };
    window.addEventListener('resize', handleResize);
    handleScroll();
    // Measure after initial render
    requestAnimationFrame(updateHeaderPos);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [updateHeaderPos]);

  const ep = easeInOutCubic(progress);

  // Interpolate size
  const size = heroSize - (heroSize - HEADER_SIZE) * ep;

  // Hero center: middle of viewport horizontally, 18% from top
  const heroCx = typeof window !== 'undefined' ? window.innerWidth / 2 : 500;
  const heroCy = typeof window !== 'undefined' ? window.innerHeight * 0.18 : 140;

  // Header center: center of the placeholder element
  const headerCx = headerPos.x + HEADER_SIZE / 2;
  const headerCy = headerPos.y + HEADER_SIZE / 2;

  // Interpolate center position, then offset to top-left
  const cx = heroCx + (headerCx - heroCx) * ep;
  const cy = heroCy + (headerCy - heroCy) * ep;
  const x = cx - size / 2;
  const y = cy - size / 2;

  return (
    <>
      {/* Invisible placeholder in header to mark the target landing spot */}
      <div ref={placeholderRef} style={{ width: HEADER_SIZE, height: HEADER_SIZE, visibility: 'hidden' }} />

      {/* Floating logo */}
      <Link
        to="/"
        className="fixed z-[60] pointer-events-auto"
        style={{
          left: x,
          top: y,
          width: size,
          height: size,
          willChange: 'left, top, width, height',
        }}
      >
        <img
          src={LOGO}
          alt="Bonjour Bébé"
          className="w-full h-full"
          style={{
            filter: `drop-shadow(0 ${4 * (1 - progress)}px ${8 * (1 - progress)}px rgba(0,0,0,0.12))`,
          }}
        />
      </Link>
    </>
  );
};

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default ScrollLogo;
