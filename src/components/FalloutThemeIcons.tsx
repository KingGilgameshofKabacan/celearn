import React from 'react';
import { ThemeId } from '../types/theme';

interface EmblemProps {
  className?: string;
}

export const VaultGearEmblem: React.FC<EmblemProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
    <path
      d="M15.5 3h5v3a12.5 12.5 0 0 1 2.4 1l2.1-2.1 3.5 3.5-2.1 2.1a12.5 12.5 0 0 1 1 2.4H30.5v5h-3a12.5 12.5 0 0 1-1 2.4l2.1 2.1-3.5 3.5-2.1-2.1a12.5 12.5 0 0 1-2.4 1v3h-5v-3a12.5 12.5 0 0 1-2.4-1l-2.1 2.1-3.5-3.5 2.1-2.1a12.5 12.5 0 0 1-1-2.4H5.5v-5h3a12.5 12.5 0 0 1 1-2.4L7.4 8.4l3.5-3.5 2.1 2.1a12.5 12.5 0 0 1 2.4-1V3z"
      fill="currentColor"
      fillOpacity="0.22"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="18" cy="18" r="6.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M18 13.5L13.8 21h8.4L18 13.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const NukaColaEmblem: React.FC<EmblemProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
    {/* Nuka Rocket Bottle silhouette */}
    <path
      d="M15.5 4h5l.8 4.2c1.8 1.5 3.2 4.3 3.2 7.5 0 2.7-.8 5.2-2.2 6.8l1.2 6.5-2.5-1.6-3 3.6-3-3.6-2.5 1.6 1.2-6.5c-1.4-1.6-2.2-4.1-2.2-6.8 0-3.2 1.4-6 3.2-7.5L15.5 4z"
      fill="currentColor"
      fillOpacity="0.22"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M13.5 13.5h9M14 18.5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="27.5" cy="9" r="3.5" fill="#22D3EE" fillOpacity="0.85" />
  </svg>
);

export const PowerArmorEmblem: React.FC<EmblemProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
    {/* T-60 Brotherhood Power Armor Helmet */}
    <path
      d="M9 14c0-5.2 4-9 9-9s9 3.8 9 9v9.5L23.5 30h-11L9 23.5V14z"
      fill="currentColor"
      fillOpacity="0.22"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    {/* T-Visor */}
    <path
      d="M11.5 15.5h13v2.5l-4.5 1.5v5.5h-4v-5.5L11.5 18v-2.5z"
      fill="currentColor"
      fillOpacity="0.7"
    />
    {/* Headlamp & Vent */}
    <circle cx="24.5" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13 27h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const MedbayLabEmblem: React.FC<EmblemProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
    {/* Stimpak Shield / Medical Cross */}
    <rect
      x="5"
      y="5"
      width="26"
      height="26"
      rx="7"
      fill="currentColor"
      fillOpacity="0.18"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M15.5 10h5v5.5H26v5h-5.5V26h-5v-5.5H10v-5h5.5V10z"
      fill="currentColor"
      fillOpacity="0.75"
    />
  </svg>
);

export const FalloutThemeIcon: React.FC<{ themeId: ThemeId; className?: string }> = ({
  themeId,
  className = 'w-5 h-5'
}) => {
  switch (themeId) {
    case 'nuka-cola':
      return <NukaColaEmblem className={className} />;
    case 'power-armor':
      return <PowerArmorEmblem className={className} />;
    case 'radaway-medbay':
      return <MedbayLabEmblem className={className} />;
    case 'vault-tec':
    default:
      return <VaultGearEmblem className={className} />;
  }
};

export const VaultApprovalSeal: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
    {/* Vault Gear Outer Ring */}
    <path
      d="M27.5 4h9v4.8a23 23 0 0 1 4.4 1.8l3.5-3.5 6.4 6.4-3.5 3.5a23 23 0 0 1 1.8 4.4H54v9h-4.9a23 23 0 0 1-1.8 4.4l3.5 3.5-6.4 6.4-3.5-3.5a23 23 0 0 1-4.4 1.8V56h-9v-4.8a23 23 0 0 1-4.4-1.8l-3.5 3.5-6.4-6.4 3.5-3.5a23 23 0 0 1-1.8-4.4H10v-9h4.9a23 23 0 0 1 1.8-4.4l-3.5-3.5 6.4-6.4 3.5 3.5a23 23 0 0 1 4.4-1.8V4z"
      fill="#FBC02D"
      stroke="#080E1E"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <circle cx="32" cy="30" r="15" fill="#0E1B38" stroke="#FBC02D" strokeWidth="2.4" />
    {/* Smiling Vault Boy / Check Star */}
    <circle cx="32" cy="27" r="7.5" fill="#FDE68A" stroke="#080E1E" strokeWidth="1.8" />
    <path d="M25.5 23c2-3.5 7-5 11.5-2.5 1.2.7 2.2 1.8 2.2 3.2-3.5-1-8.5-.8-13.7-.7z" fill="#F59E0B" />
    <circle cx="29.5" cy="26.5" r="1.1" fill="#080E1E" />
    <circle cx="34.5" cy="26.5" r="1.1" fill="#080E1E" />
    <path d="M29.2 29.8c1.6 1.6 4 1.6 5.6 0" stroke="#080E1E" strokeWidth="1.6" strokeLinecap="round" />
    {/* Vault 101 Collar + Thumbs Up */}
    <path d="M23 41c1.6-4.2 5-6 9-6s7.4 1.8 9 6" fill="#2563EB" stroke="#FBC02D" strokeWidth="1.6" />
    <path d="M40.5 31.5c1.5 0 2.5 1.1 2.5 2.5v3.5c0 1.4-1.1 2.5-2.5 2.5h-3v-5.5l1.3-3h1.7z" fill="#FDE68A" stroke="#080E1E" strokeWidth="1.4" />
  </svg>
);
