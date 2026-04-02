'use client';

import { useEffect, useRef } from 'react';

export default function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const clamp = (value: number, min: number, max: number) => {
      return Math.min(Math.max(value, min), max);
    };

    const update = () => {
      const scrollY = window.scrollY;
      const progress = clamp(scrollY / 500, 0, 1);

      const translateY = -120 + 120 * progress;
      const scale = 0.8 + (1 - 0.8) * progress;
      const rotateX = 30 - 30 * progress;

      if (ref.current) {
        ref.current.style.transform = `
          perspective(1500px)
          translateY(${translateY}px)
          scale(${scale})
          rotateX(${rotateX}deg)
        `;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    update();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="mt-20 w-full max-w-[960px] transform-gpu will-change-transform"
    >
      <img
        src="/hero.jpg"
        alt="venila"
        className="w-full rounded-md shadow-sm ring-4 ring-input"
      />
    </div>
  );
}
