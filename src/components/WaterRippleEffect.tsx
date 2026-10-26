import React, { useEffect, useState, useCallback } from 'react';

interface WavePoint {
  id: number;
  x: number;
  y: number;
  createdAt: number;
}

export const WaterRippleEffect: React.FC = () => {
  const [waves, setWaves] = useState<WavePoint[]>([]);

  // Listen to 'click' instead of 'pointerdown' so scrolling/swiping gestures do not trigger ripple re-renders
  const handleClick = useCallback((e: MouseEvent) => {
    // Only spawn wave for valid client coordinates
    if (e.clientX === undefined || e.clientY === undefined) return;

    const newWave: WavePoint = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      createdAt: performance.now()
    };

    setWaves(prev => [...prev.slice(-6), newWave]); // keep up to 6 concurrent waves for max 60fps performance
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClick, { passive: true });
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  // Clean up completed waves after 950ms
  useEffect(() => {
    if (waves.length === 0) return;

    const timer = setTimeout(() => {
      const now = performance.now();
      setWaves(prev => prev.filter(w => now - w.createdAt < 950));
    }, 950);

    return () => clearTimeout(timer);
  }, [waves]);

  if (waves.length === 0) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none"
      style={{ contain: 'strict' }}
      aria-hidden="true"
    >
      {waves.map((wave) => (
        <React.Fragment key={wave.id}>
          {/* Primary Outer Wave Ring */}
          <div
            className="water-wave-primary"
            style={{
              left: `${wave.x}px`,
              top: `${wave.y}px`
            }}
          />

          {/* Secondary Lagging Wave Ring */}
          <div
            className="water-wave-secondary"
            style={{
              left: `${wave.x}px`,
              top: `${wave.y}px`
            }}
          />

          {/* Core Water Droplet Center Flash */}
          <div
            className="water-wave-core"
            style={{
              left: `${wave.x}px`,
              top: `${wave.y}px`
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
