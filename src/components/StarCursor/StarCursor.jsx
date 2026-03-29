import { useEffect, useRef } from 'react';
import './StarCursor.css';

const STARS = ['✦', '✧', '⋆', '★', '✩', '✶'];
const MAX_STARS = 25;

let uid = 0;

/**
 * StarCursor — attaches to the window and spawns star particles
 * wherever the mouse moves.
 */
export function StarCursor() {
  const containerRef = useRef(null);
  const starsRef = useRef([]);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      lastPos.current = { x: e.clientX, y: e.clientY };

      // Only spawn when moving fast enough
      if (speed < 4) return;

      // Throttle max stars on screen
      if (starsRef.current.length >= MAX_STARS) return;

      const id = uid++;
      const el = document.createElement('span');
      el.className = 'star-particle';
      el.textContent = STARS[Math.floor(Math.random() * STARS.length)];

      const size = 10 + Math.random() * 14;
      const angle = (Math.random() - 0.5) * 60;
      const drift = (Math.random() - 0.5) * 40;

      el.style.cssText = `
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        font-size: ${size}px;
        --drift: ${drift}px;
        --angle: ${angle}deg;
        color: hsl(${200 + Math.random() * 160}, 90%, 70%);
      `;

      container.appendChild(el);
      starsRef.current.push(id);

      // Remove after animation
      setTimeout(() => {
        el.remove();
        starsRef.current = starsRef.current.filter(i => i !== id);
      }, 700);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return <div ref={containerRef} className="star-cursor-root" aria-hidden="true" />;
}
