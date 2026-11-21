import React from 'react';

interface VaultRankTrophyProps {
  rank: 1 | 2 | 3 | 4 | 5;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const RANK_TROPHY_TITLES: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: "Overseer's Nuka-Gold Cup",
  2: 'T-60 Titanium Crest',
  3: 'Quantum Rocket Spire',
  4: 'Pip-Boy Tactician Seal',
  5: 'Vault 101 Vanguard Star'
};

export const VaultRankTrophy: React.FC<VaultRankTrophyProps> = ({
  rank,
  size = 'md',
  className = ''
}) => {
  const sizeClass =
    size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-14 h-14' : 'w-10 h-10';

  // #1: Gold Overseer Sovereign Vault-Gear Chalice
  if (rank === 1) {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className={`${sizeClass} shrink-0 drop-shadow-[0_3px_8px_rgba(251,192,45,0.45)] ${className}`}
        aria-label={RANK_TROPHY_TITLES[1]}
      >
        <defs>
          <linearGradient id="trophy1Gold" x1="12" y1="8" x2="52" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="50%" stopColor="#FBC02D" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
        </defs>
        {/* Starburst Halo */}
        <path d="M32 3l2.2 5.5L39.5 6l-1.8 5.2L43 13l-5 2.5" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <path d="M32 3l-2.2 5.5L24.5 6l1.8 5.2L21 13l5 2.5" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        {/* Handles */}
        <path d="M18 17c-6.5 0-9 4-8 9.5 1 4.5 4.8 7 9.5 7.5" stroke="#F59E0B" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M46 17c6.5 0 9 4 8 9.5-1 4.5-4.8 7-9.5 7.5" stroke="#F59E0B" strokeWidth="3.2" strokeLinecap="round" />
        {/* Chalice Cup */}
        <path
          d="M18 14h28l-2.2 15.5C42.8 36 38 40 32 40s-10.8-4-11.8-10.5L18 14z"
          fill="url(#trophy1Gold)"
          stroke="#78350F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Vault Gear Crest Center */}
        <circle cx="32" cy="25" r="6.2" fill="#080E1E" stroke="#FEF08A" strokeWidth="1.6" />
        <text
          x="32"
          y="28.3"
          textAnchor="middle"
          fontSize="9"
          fontWeight="900"
          fontFamily="monospace"
          fill="#FDE047"
        >
          1
        </text>
        {/* Stem & Bolted Pedestal */}
        <rect x="28.5" y="40" width="7" height="9" fill="#D97706" stroke="#78350F" strokeWidth="1.6" />
        <path d="M19 52c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4v6H19v-6z" fill="#1E293B" stroke="#FBC02D" strokeWidth="2" />
        <circle cx="23" cy="53.5" r="1.2" fill="#FBC02D" />
        <circle cx="41" cy="53.5" r="1.2" fill="#FBC02D" />
      </svg>
    );
  }

  // #2: T-60 Titanium Power Armor Shield Trophy (Silver / Platinum)
  if (rank === 2) {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className={`${sizeClass} shrink-0 drop-shadow-[0_3px_8px_rgba(148,163,184,0.4)] ${className}`}
        aria-label={RANK_TROPHY_TITLES[2]}
      >
        <defs>
          <linearGradient id="trophy2Silver" x1="14" y1="8" x2="50" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="50%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        {/* Armored Wings */}
        <path d="M17 18l-8 4 4 9 6-1" fill="#64748B" stroke="#1E293B" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M47 18l8 4-4 9-6-1" fill="#64748B" stroke="#1E293B" strokeWidth="1.8" strokeLinejoin="round" />
        {/* T-60 Shield Crest */}
        <path
          d="M18 12h28v17c0 9.5-6.2 16-14 19-7.8-3-14-9.5-14-19V12z"
          fill="url(#trophy2Silver)"
          stroke="#1E293B"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* Inner Visor Band */}
        <rect x="23" y="18" width="18" height="14" rx="4" fill="#0F172A" stroke="#94A3B8" strokeWidth="1.5" />
        <text
          x="32"
          y="28.5"
          textAnchor="middle"
          fontSize="10.5"
          fontWeight="900"
          fontFamily="monospace"
          fill="#E2E8F0"
        >
          2
        </text>
        {/* Steel Pedestal */}
        <path d="M21 51h22l2 7H19l2-7z" fill="#334155" stroke="#CBD5E1" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  // #3: Nuka-Quantum Bronze & Cyan Rocket Spire Trophy
  if (rank === 3) {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className={`${sizeClass} shrink-0 drop-shadow-[0_3px_8px_rgba(217,119,6,0.4)] ${className}`}
        aria-label={RANK_TROPHY_TITLES[3]}
      >
        <defs>
          <linearGradient id="trophy3Bronze" x1="20" y1="8" x2="44" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="55%" stopColor="#C2410C" />
            <stop offset="100%" stopColor="#7C2D12" />
          </linearGradient>
        </defs>
        {/* Rocket Fins */}
        <path d="M23 34l-8 8 4 5 7-4" fill="#9A3412" stroke="#431407" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M41 34l8 8-4 5-7-4" fill="#9A3412" stroke="#431407" strokeWidth="1.8" strokeLinejoin="round" />
        {/* Nuka Rocket Body */}
        <path
          d="M32 7c7 6 10 15 10 25 0 6-3 11-10 14-7-3-10-8-10-14 0-10 3-19 10-25z"
          fill="url(#trophy3Bronze)"
          stroke="#431407"
          strokeWidth="2"
        />
        {/* Quantum Cyan Porthole */}
        <circle cx="32" cy="26" r="7" fill="#083344" stroke="#22D3EE" strokeWidth="2" />
        <text
          x="32"
          y="29.5"
          textAnchor="middle"
          fontSize="10"
          fontWeight="900"
          fontFamily="monospace"
          fill="#67E8F9"
        >
          3
        </text>
        {/* Pedestal */}
        <rect x="20" y="50" width="24" height="8" rx="2.5" fill="#431407" stroke="#FB923C" strokeWidth="1.8" />
      </svg>
    );
  }

  // #4: Pip-Boy Tactician Phosphor Emerald Trophy
  if (rank === 4) {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className={`${sizeClass} shrink-0 drop-shadow-[0_3px_8px_rgba(34,197,94,0.35)] ${className}`}
        aria-label={RANK_TROPHY_TITLES[4]}
      >
        {/* Ribbon Loops */}
        <path d="M22 41l-4 15 9-4 5 5 5-5 9 4-4-15" fill="#14532D" stroke="#22C55E" strokeWidth="1.8" strokeLinejoin="round" />
        {/* Pip-Boy Casing Octagon */}
        <rect
          x="15"
          y="10"
          width="34"
          height="32"
          rx="8"
          fill="#1E293B"
          stroke="#22C55E"
          strokeWidth="2.4"
        />
        {/* Phosphor Screen */}
        <rect x="20" y="15" width="24" height="22" rx="4" fill="#052E16" stroke="#4ADE80" strokeWidth="1.4" />
        <text
          x="32"
          y="30"
          textAnchor="middle"
          fontSize="12"
          fontWeight="900"
          fontFamily="monospace"
          fill="#4ADE80"
        >
          4
        </text>
      </svg>
    );
  }

  // #5: Vault 101 Vanguard Cobalt & Amber Star Commendation
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={`${sizeClass} shrink-0 drop-shadow-[0_3px_8px_rgba(59,130,246,0.35)] ${className}`}
      aria-label={RANK_TROPHY_TITLES[5]}
    >
      {/* Outer Vault Star */}
      <path
        d="M32 6l7.2 14.5 16 2.3-11.6 11.3 2.7 16L32 42.5l-14.3 7.6 2.7-16L8.8 22.8l16-2.3L32 6z"
        fill="#1E3A8A"
        stroke="#60A5FA"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="31" r="10" fill="#080E1E" stroke="#FBC02D" strokeWidth="2" />
      <text
        x="32"
        y="35"
        textAnchor="middle"
        fontSize="11"
        fontWeight="900"
        fontFamily="monospace"
        fill="#FDE047"
      >
        5
      </text>
    </svg>
  );
};
