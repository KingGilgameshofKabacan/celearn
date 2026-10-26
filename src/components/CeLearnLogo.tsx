import React from 'react';

interface CeLearnLogoProps {
  className?: string;
  size?: number;
}

export const CeLearnLogo: React.FC<CeLearnLogoProps> = ({ className = 'w-9 h-9', size = 36 }) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-xs flex items-center justify-center shrink-0 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 ${className}`}
      style={{ width: size, height: size }}
      aria-label="CELEARN Logo"
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-1.5"
      >
        {/* Subtle engineering grid backdrop */}
        <line x1="8" y1="24" x2="40" y2="24" stroke="white" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="24" y1="8" x2="24" y2="40" stroke="white" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 2" />

        {/* Structural Delta Truss Framework */}
        <polygon
          points="24,9 10,39 38,39"
          stroke="white"
          strokeWidth="3.2"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Horizontal Tie Beam */}
        <line
          x1="16.5"
          y1="25"
          x2="31.5"
          y2="25"
          stroke="white"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Vertical King Post Strut */}
        <line
          x1="24"
          y1="14"
          x2="24"
          y2="39"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Central Transit Target Core */}
        <circle cx="24" cy="25" r="3.2" fill="white" />
        <circle cx="24" cy="25" r="1.4" fill="#EA580C" />
      </svg>
    </div>
  );
};
