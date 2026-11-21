import React from 'react';

interface CeLearnLogoProps {
  className?: string;
  size?: number;
}

export const CeLearnLogo: React.FC<CeLearnLogoProps> = ({ className = 'w-9 h-9', size = 36 }) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-xs flex items-center justify-center shrink-0 bg-[#121F39] ${className}`}
      style={{ width: size, height: size }}
      aria-label="Vault-Tec CELEARN Logo"
    >
      <img
        src="/icons/celearn-logo-128.webp"
        alt="Vault-Tec CELEARN Logo"
        width={128}
        height={128}
        decoding="async"
        className="w-full h-full object-cover scale-[1.31] transition-transform duration-300 ease-out"
        draggable={false}
      />
    </div>
  );
};
