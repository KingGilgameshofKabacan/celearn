import React, { useMemo } from 'react';

interface FloatingGlowOrb {
  id: number;
  gradient: string;
  size: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  animationType: 'float-up-down' | 'float-diagonal' | 'float-sway' | 'float-pulse';
  opacityClass: string;
}

interface LiveBackgroundProps {
  distractionFree?: boolean;
}

export const LiveBackground: React.FC<LiveBackgroundProps> = ({ distractionFree = false }) => {
  if (distractionFree) return null;
  // Precompute glowing architectural & engineering gradient nodes
  // Soft radial gradients avoid expensive CPU/GPU Gaussian blur filters during scrolling
  const orbs: FloatingGlowOrb[] = useMemo(() => [
    {
      id: 1,
      gradient: 'radial-gradient(circle, rgba(234,88,12,0.22) 0%, rgba(234,88,12,0) 70%)',
      size: 320,
      left: '6%',
      top: '10%',
      duration: 18,
      delay: 0,
      animationType: 'float-up-down',
      opacityClass: 'opacity-70 dark:opacity-60'
    },
    {
      id: 2,
      gradient: 'radial-gradient(circle, rgba(14,165,233,0.20) 0%, rgba(14,165,233,0) 70%)',
      size: 260,
      left: '80%',
      top: '16%',
      duration: 22,
      delay: 2,
      animationType: 'float-diagonal',
      opacityClass: 'opacity-70 dark:opacity-55'
    },
    {
      id: 3,
      gradient: 'radial-gradient(circle, rgba(245,158,11,0.20) 0%, rgba(245,158,11,0) 70%)',
      size: 280,
      left: '18%',
      top: '65%',
      duration: 20,
      delay: 4,
      animationType: 'float-sway',
      opacityClass: 'opacity-65 dark:opacity-50'
    },
    {
      id: 4,
      gradient: 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0) 70%)',
      size: 290,
      left: '74%',
      top: '66%',
      duration: 25,
      delay: 1,
      animationType: 'float-pulse',
      opacityClass: 'opacity-70 dark:opacity-55'
    },
    {
      id: 5,
      gradient: 'radial-gradient(circle, rgba(168,85,247,0.16) 0%, rgba(168,85,247,0) 70%)',
      size: 340,
      left: '46%',
      top: '32%',
      duration: 28,
      delay: 3,
      animationType: 'float-diagonal',
      opacityClass: 'opacity-60 dark:opacity-45'
    },
    {
      id: 6,
      gradient: 'radial-gradient(circle, rgba(244,63,94,0.15) 0%, rgba(244,63,94,0) 70%)',
      size: 240,
      left: '88%',
      top: '44%',
      duration: 21,
      delay: 5,
      animationType: 'float-up-down',
      opacityClass: 'opacity-65 dark:opacity-45'
    }
  ], []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      style={{
        contain: 'strict',
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform'
      }}
      aria-hidden="true"
    >
      {/* Subtle Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(234,88,12,0.06)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(249,115,22,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-75" />

      {/* Hardware-accelerated floating soft orbs */}
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`absolute live-hover-shape live-${orb.animationType}`}
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: orb.left,
            top: orb.top,
            background: orb.gradient,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)'
          }}
        />
      ))}
    </div>
  );
};
