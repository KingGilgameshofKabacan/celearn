import React from 'react';

interface BottleCapIconProps {
  className?: string;
  size?: number | string;
  fillColor?: string;
}

/**
 * Authentic Fallout Bottle Cap SVG icon with 16-point crimped flutes,
 * concentric sealing ring, radial fluting scores, and center embossed star.
 */
export const BottleCapIcon: React.FC<BottleCapIconProps> = ({
  className = 'w-5 h-5 text-amber-500',
  size,
  fillColor = 'currentColor',
}) => {
  const dimensionProps = size ? { width: size, height: size } : {};

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...dimensionProps}
      aria-hidden="true"
    >
      {/* Outer 16-point crimped bottle cap crown rim */}
      <path
        d="M12 2 
           C12.7 2 13.1 2.7 13.8 2.9 
           C14.5 3.1 15.2 2.7 15.8 3.1 
           C16.5 3.5 16.7 4.3 17.3 4.8 
           C17.9 5.3 18.7 5.4 19.1 6.1 
           C19.5 6.8 19.2 7.5 19.5 8.3 
           C19.8 9.1 20.5 9.5 20.6 10.4 
           C20.7 11.3 20 11.7 19.9 12.5 
           C19.8 13.3 20.2 14 19.8 14.7 
           C19.4 15.4 18.6 15.6 18.1 16.2 
           C17.6 16.8 17.5 17.6 16.8 18 
           C16.1 18.4 15.4 18.2 14.6 18.5 
           C13.8 18.8 13.5 19.5 12.6 19.5 
           C11.7 19.5 11.4 18.8 10.6 18.5 
           C9.8 18.2 9.1 18.4 8.4 18 
           C7.7 17.6 7.6 16.8 7.1 16.2 
           C6.6 15.6 5.8 15.4 5.4 14.7 
           C5 14 5.4 13.3 5.3 12.5 
           C5.2 11.7 4.5 11.3 4.6 10.4 
           C4.7 9.5 5.4 9.1 5.7 8.3 
           C6 7.5 5.7 6.8 6.1 6.1 
           C6.5 5.4 7.3 5.3 7.9 4.8 
           C8.5 4.3 8.7 3.5 9.4 3.1 
           C10 2.7 10.7 3.1 11.4 2.9 
           C12.1 2.7 12.5 2 12 2 Z"
        fill={fillColor}
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Inner circular ridge of the cap */}
      <circle
        cx="12"
        cy="11.2"
        r="6.2"
        stroke="currentColor"
        strokeWidth="1.2"
        fill={fillColor}
        fillOpacity="0.35"
      />

      {/* Concentric inner seal */}
      <circle
        cx="12"
        cy="11.2"
        r="4.2"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="1.2 1.2"
        fill="none"
        opacity="0.8"
      />

      {/* Embossed Sunset Sarsaparilla / Vault star emblem */}
      <path
        d="M12 8.4 
           L12.9 10.2 
           L14.9 10.4 
           L13.4 11.8 
           L13.8 13.8 
           L12 12.8 
           L10.2 13.8 
           L10.6 11.8 
           L9.1 10.4 
           L11.1 10.2 Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BottleCapIcon;
