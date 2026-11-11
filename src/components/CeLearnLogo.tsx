import React from 'react';

interface CeLearnLogoProps {
  className?: string;
  size?: number;
}

export const CeLearnLogo: React.FC<CeLearnLogoProps> = ({ className = 'w-9 h-9', size = 36 }) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-xs flex items-center justify-center shrink-0 bg-gradient-to-br from-blue-900 via-blue-950 to-amber-600 border border-amber-400/30 ${className}`}
      style={{ width: size, height: size }}
      aria-label="Vault-Tec CELEARN Logo"
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-1 group-hover:rotate-45 transition-transform duration-500 ease-out"
      >
        {/* Vault Gear Cog Outline (8 Gear Teeth) */}
        <path
          d="M21 2h6v4.2a18.9 18.9 0 0 1 3.5 1.5l3-3 4.2 4.2-3 3c.6 1.1 1.1 2.3 1.5 3.5H42v6h-4.2a18.9 18.9 0 0 1-1.5 3.5l3 3-4.2 4.2-3-3a18.9 18.9 0 0 1-3.5 1.5V46h-6v-4.2a18.9 18.9 0 0 1-3.5-1.5l-3 3-4.2-4.2 3-3a18.9 18.9 0 0 1-1.5-3.5H2v-6h4.2a18.9 18.9 0 0 1 1.5-3.5l-3-3 4.2-4.2 3 3a18.9 18.9 0 0 1 3.5-1.5V2z"
          fill="#FBC02D"
          stroke="#D97706"
          strokeWidth="1.2"
        />

        {/* Vault Door Inner Hatch (Cobalt Blue Core) */}
        <circle cx="24" cy="24" r="13" fill="#0A1931" stroke="#FBC02D" strokeWidth="2" />

        {/* Civil Engineering Delta Truss inside Vault Hub */}
        <polygon
          points="24,14 15,31 33,31"
          stroke="#FBC02D"
          strokeWidth="2.2"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Horizontal Tie Beam */}
        <line x1="18.5" y1="24.5" x2="29.5" y2="24.5" stroke="#FBC02D" strokeWidth="1.8" />

        {/* Central King Post Strut */}
        <line x1="24" y1="17" x2="24" y2="31" stroke="#FBC02D" strokeWidth="1.5" />

        {/* Vault 101 Center Hub */}
        <circle cx="24" cy="24.5" r="2.2" fill="#FBC02D" />
        <circle cx="24" cy="24.5" r="1" fill="#0A1931" />
      </svg>
    </div>
  );
};
