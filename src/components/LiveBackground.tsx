import React, { useMemo } from 'react';
import { ThemeId } from '../types/theme';

interface FloatingGlowOrb {
  id: number;
  gradient: string;
  size: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  animationType: 'float-up-down' | 'float-diagonal' | 'float-sway' | 'float-pulse';
}

interface LiveBackgroundProps {
  distractionFree?: boolean;
  themeId?: ThemeId;
}

const THEME_GLOW_COLORS: Record<ThemeId, [string, string, string, string]> = {
  'vault-tec': [
    'rgba(251,192,45,0.20)',
    'rgba(56,189,248,0.18)',
    'rgba(34,197,94,0.16)',
    'rgba(245,158,11,0.16)'
  ],
  'nuka-cola': [
    'rgba(251,113,133,0.22)',
    'rgba(34,211,238,0.18)',
    'rgba(244,63,94,0.16)',
    'rgba(251,191,36,0.15)'
  ],
  'power-armor': [
    'rgba(251,146,60,0.22)',
    'rgba(251,191,36,0.16)',
    'rgba(148,163,184,0.16)',
    'rgba(234,88,12,0.18)'
  ],
  'radaway-medbay': [
    'rgba(52,211,153,0.22)',
    'rgba(251,191,36,0.15)',
    'rgba(20,184,166,0.18)',
    'rgba(16,185,129,0.16)'
  ]
};

export const LiveBackground: React.FC<LiveBackgroundProps> = ({
  distractionFree = false,
  themeId = 'vault-tec'
}) => {
  const palette = THEME_GLOW_COLORS[themeId] || THEME_GLOW_COLORS['vault-tec'];

  const orbs: FloatingGlowOrb[] = useMemo(
    () => [
      {
        id: 1,
        gradient: `radial-gradient(circle, ${palette[0]} 0%, rgba(0,0,0,0) 70%)`,
        size: 320,
        left: '6%',
        top: '10%',
        duration: 18,
        delay: 0,
        animationType: 'float-up-down'
      },
      {
        id: 2,
        gradient: `radial-gradient(circle, ${palette[1]} 0%, rgba(0,0,0,0) 70%)`,
        size: 260,
        left: '80%',
        top: '16%',
        duration: 22,
        delay: 2,
        animationType: 'float-diagonal'
      },
      {
        id: 3,
        gradient: `radial-gradient(circle, ${palette[2]} 0%, rgba(0,0,0,0) 70%)`,
        size: 290,
        left: '18%',
        top: '65%',
        duration: 20,
        delay: 4,
        animationType: 'float-sway'
      },
      {
        id: 4,
        gradient: `radial-gradient(circle, ${palette[3]} 0%, rgba(0,0,0,0) 70%)`,
        size: 280,
        left: '74%',
        top: '66%',
        duration: 25,
        delay: 1,
        animationType: 'float-pulse'
      }
    ],
    [palette]
  );

  if (distractionFree) return null;

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
      {/* Subtle Fallout Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(251,192,45,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-75" />

      {/* Hardware-accelerated floating soft orbs */}
      {orbs.map(orb => (
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
