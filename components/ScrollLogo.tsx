import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '../constants';

const HEADER_SIZE = 96;  // px – logo size when docked in header (matches footer h-24)
const SCROLL_DISTANCE = 300; // px of scroll over which the transition happens

const MAX_HERO_SIZE = 320;
const MIN_HERO_SIZE = 80;
const LOGO_TOP_MARGIN = 16; // px margin above the logo
const LOGO_HEADING_GAP = 12; // px gap between logo bottom and heading top

const ScrollLogo: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [headerPos, setHeaderPos] = useState({ x: 24, y: 12 });
  const [heroSize, setHeroSize] = useState(MAX_HERO_SIZE);
  const [headingTop, setHeadingTop] = useState(300);
  const placeholderRef = useRef<HTMLDivElement | null>(null);

  const measure = useCallback(() => {
    if (placeholderRef.current) {
      const rect = placeholderRef.current.getBoundingClientRect();
      setHeaderPos({ x: rect.left, y: rect.top });
    }
    const h1 = document.querySelector('h1');
    if (h1) {
      const h1Top = h1.getBoundingClientRect().top + window.scrollY;
      setHeadingTop(h1Top);
      // Logo must fit between top margin and heading, clamped to [MIN, MAX]
      const available = h1Top - LOGO_TOP_MARGIN - LOGO_HEADING_GAP;
      setHeroSize(Math.round(Math.min(MAX_HERO_SIZE, Math.max(MIN_HERO_SIZE, available))));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / SCROLL_DISTANCE));
      setProgress(p);
      measure();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', measure);
    handleScroll();
    requestAnimationFrame(measure);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const ep = easeInOutCubic(progress);

  // Width-based progress: at narrow widths (768–1024px), shift logo toward header position
  // Below 768px the mobile menu kicks in so no overlap issue
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1280;
  const wp = vw >= 1440 ? 0 : vw < 768 ? 0 : Math.min(1, (1440 - vw) / (1440 - 768));

  // Combine scroll and width progress (take the max effect)
  const combined = Math.max(ep, wp);

  // Interpolate size
  const size = heroSize - (heroSize - HEADER_SIZE) * combined;

  // Hero center: middle of viewport horizontally, bottom edge sits above the heading
  const heroCx = typeof window !== 'undefined' ? vw / 2 : 500;
  const heroCy = headingTop - LOGO_HEADING_GAP - heroSize / 2;

  // Header center: center of the placeholder element
  const headerCx = headerPos.x + HEADER_SIZE / 2;
  const headerCy = headerPos.y + HEADER_SIZE / 2;

  // Interpolate center position, then offset to top-left
  const cx = heroCx + (headerCx - heroCx) * combined;
  const cy = heroCy + (headerCy - heroCy) * combined;
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
