import React from 'react';
import {
  VaultAvatarConfig,
  SUIT_COLOR_PRESETS,
  HAIR_COLOR_PRESETS,
  SKIN_TONE_PRESETS
} from '../types/avatar';

interface VaultAvatarSpriteProps {
  config: VaultAvatarConfig;
  isWinking?: boolean;
  className?: string;
}

export const VaultAvatarSprite: React.FC<VaultAvatarSpriteProps> = ({
  config,
  isWinking = false,
  className = 'w-16 h-20 sm:w-20 sm:h-24'
}) => {
  const { companion, dweller } = config;

  // 1. DOGMEAT (German Shepherd with crimson bandana & Vault dog tag)
  if (companion === 'dogmeat') {
    return (
      <svg
        viewBox="0 0 110 120"
        className={`${className} drop-shadow-[0_10px_10px_rgba(0,0,0,0.55)]`}
        aria-label="Dogmeat Companion Avatar"
      >
        <ellipse cx="55" cy="112" rx="30" ry="6" fill="#000000" fillOpacity="0.45" className="pet-shadow" />
        {/* Wagging Tail */}
        <g className="pet-tail">
          <path
            d="M 76 74 Q 95 62 92 48"
            stroke="#78350F"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 76 74 Q 95 62 92 48"
            stroke="#0F172A"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.35"
          />
        </g>
        {/* Back legs */}
        <rect x="62" y="84" width="11" height="24" rx="5" fill="#92400E" stroke="#0F172A" strokeWidth="2.2" />
        <ellipse cx="66" cy="109" rx="7" ry="4" fill="#D97706" stroke="#0F172A" strokeWidth="2" />
        {/* Body */}
        <ellipse cx="56" cy="78" rx="24" ry="18" fill="#B45309" stroke="#0F172A" strokeWidth="2.5" />
        {/* Dark saddle coat */}
        <path d="M 42 63 Q 58 58 76 69 Q 68 78 48 75 Z" fill="#451A03" />
        {/* Front chest & legs */}
        <ellipse cx="44" cy="76" rx="13" ry="14" fill="#D97706" />
        <rect x="34" y="84" width="11" height="26" rx="5" fill="#D97706" stroke="#0F172A" strokeWidth="2.2" />
        <rect x="48" y="86" width="11" height="24" rx="5" fill="#B45309" stroke="#0F172A" strokeWidth="2.2" />
        <ellipse cx="38" cy="110" rx="7" ry="4" fill="#FDE68A" stroke="#0F172A" strokeWidth="2" />
        <ellipse cx="52" cy="110" rx="7" ry="4" fill="#FDE68A" stroke="#0F172A" strokeWidth="2" />
        {/* Iconic Red Bandana */}
        <path
          d="M 32 58 Q 46 66 60 58 L 54 74 L 46 77 L 36 72 Z"
          fill="#DC2626"
          stroke="#0F172A"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* Bandana Vault Star/Polka accent */}
        <circle cx="46" cy="67" r="2.2" fill="#FEF08A" />
        {/* Head Group (Look Around + Blink) */}
        <g className="pet-head-group">
          {/* Pointed Shepherd Ears */}
          <path d="M 30 34 L 24 12 L 42 26 Z" fill="#78350F" stroke="#0F172A" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M 29 30 L 27 17 L 37 26 Z" fill="#FCA5A5" opacity="0.7" />
          <path d="M 50 32 L 60 11 L 64 34 Z" fill="#78350F" stroke="#0F172A" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M 53 29 L 58 17 L 60 30 Z" fill="#FCA5A5" opacity="0.7" />
          {/* Head */}
          <circle cx="44" cy="43" r="17" fill="#D97706" stroke="#0F172A" strokeWidth="2.5" />
          {/* Dark muzzle mask */}
          <ellipse cx="35" cy="47" rx="11" ry="8" fill="#451A03" stroke="#0F172A" strokeWidth="2" />
          {/* Nose */}
          <ellipse cx="27" cy="44" ry="3.5" rx="4.5" fill="#0F172A" />
          <circle cx="26" cy="43" r="1.2" fill="#FFFFFF" opacity="0.7" />
          {/* Happy Tongue */}
          <path d="M 32 53 Q 30 61 36 60 Q 39 58 37 52 Z" fill="#FB7185" stroke="#0F172A" strokeWidth="1.5" />
          {/* Eyes */}
          <g className="pet-eyes-group">
            {isWinking ? (
              <>
                <path d="M 35 38 Q 38 35 41 38" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                <circle cx="50" cy="37" r="3" fill="#0F172A" />
                <circle cx="49" cy="36" r="1" fill="#FFFFFF" />
              </>
            ) : (
              <>
                <circle cx="38" cy="38" r="3" fill="#0F172A" />
                <circle cx="37" cy="37" r="1" fill="#FFFFFF" />
                <circle cx="50" cy="37" r="3" fill="#0F172A" />
                <circle cx="49" cy="36" r="1" fill="#FFFFFF" />
              </>
            )}
          </g>
          {/* Eyebrows */}
          <circle cx="38" cy="32" r="2" fill="#FDE68A" />
          <circle cx="50" cy="31" r="2" fill="#FDE68A" />
        </g>
      </svg>
    );
  }

  // 2. CODSWORTH (Mr. Handy Floating Chrome Butler Robot)
  if (companion === 'codsworth') {
    return (
      <svg
        viewBox="0 0 110 130"
        className={`${className} drop-shadow-[0_10px_10px_rgba(0,0,0,0.55)]`}
        aria-label="Codsworth Mr. Handy Avatar"
      >
        <ellipse cx="55" cy="122" rx="24" ry="5" fill="#000000" fillOpacity="0.4" className="pet-shadow" />
        {/* Hover thruster jet flame */}
        <path
          d="M 46 92 L 55 117 L 64 92 Z"
          fill="#38BDF8"
          opacity="0.85"
        />
        <path d="M 50 92 L 55 109 L 60 92 Z" fill="#FEF08A" />
        {/* Left & Right Mechanical Servo Arms */}
        <g className="pet-arm-gesture">
          <path d="M 32 62 Q 16 68 18 82" stroke="#64748B" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <path d="M 14 82 L 18 89 M 22 82 L 18 89" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <path d="M 78 62 Q 94 68 92 82" stroke="#64748B" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        {/* Buzzsaw / Laser Attachment */}
        <circle cx="92" cy="84" r="6" fill="#94A3B8" stroke="#0F172A" strokeWidth="2" />
        <circle cx="92" cy="84" r="2" fill="#FACC15" />

        {/* 3 Eye Stalks (Look Around Group) */}
        <g className="pet-head-group">
          <line x1="38" y1="38" x2="29" y2="24" stroke="#94A3B8" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="27" cy="22" r="6.5" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2" />
          <circle cx="27" cy="22" r="3" fill={isWinking ? '#FACC15' : '#38BDF8'} />

          <line x1="55" y1="34" x2="55" y2="17" stroke="#94A3B8" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="55" cy="15" r="7" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2" />
          <circle cx="55" cy="15" r="3.2" fill="#38BDF8" />

          <line x1="72" y1="38" x2="81" y2="24" stroke="#94A3B8" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="83" cy="22" r="6.5" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2" />
          <circle cx="83" cy="22" r="3" fill="#38BDF8" />
        </g>

        {/* Polished Chrome Sphere Chassis */}
        <circle cx="55" cy="60" r="26" fill="#CBD5E1" stroke="#0F172A" strokeWidth="2.5" />
        <path d="M 31 58 Q 55 68 79 58" stroke="#475569" strokeWidth="2" fill="none" />
        {/* Specular highlight */}
        <ellipse cx="44" cy="48" rx="9" ry="5" fill="#FFFFFF" opacity="0.65" transform="rotate(-20 44 48)" />
        {/* Dapper Red Bowtie */}
        <polygon points="45,73 55,78 45,83" fill="#DC2626" stroke="#0F172A" strokeWidth="1.5" />
        <polygon points="65,73 55,78 65,83" fill="#DC2626" stroke="#0F172A" strokeWidth="1.5" />
        <circle cx="55" cy="78" r="3" fill="#991B1B" stroke="#0F172A" strokeWidth="1.2" />
        {/* Thruster Nozzle Skirt */}
        <path d="M 43 84 L 67 84 L 63 94 L 47 94 Z" fill="#334155" stroke="#0F172A" strokeWidth="2" />
        {/* Dapper Topper Hat */}
        <rect x="44" y="29" width="22" height="4" rx="2" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
        <rect x="47" y="21" width="16" height="9" rx="3" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
      </svg>
    );
  }

  // 3. ED-E EYEBOT (Floating Chrome Enclave Recon Sphere with Antennas)
  if (companion === 'eyebot') {
    return (
      <svg
        viewBox="0 0 110 125"
        className={`${className} drop-shadow-[0_10px_10px_rgba(0,0,0,0.55)]`}
        aria-label="ED-E Eyebot Avatar"
      >
        <ellipse cx="55" cy="116" rx="24" ry="5" fill="#000000" fillOpacity="0.4" className="pet-shadow" />
        {/* Antennas */}
        <g className="pet-head-group">
          <line x1="40" y1="36" x2="26" y2="10" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="26" cy="10" r="3" fill="#22C55E" />
          <line x1="70" y1="36" x2="84" y2="10" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="84" cy="10" r="3" fill="#FACC15" />
        </g>
        {/* Rear Booster */}
        <rect x="47" y="84" width="16" height="8" rx="2" fill="#334155" stroke="#0F172A" strokeWidth="2" />
        <path d="M 50 92 L 55 104 L 60 92 Z" fill="#22C55E" opacity="0.85" />
        {/* License Plate Bumper */}
        <rect x="33" y="79" width="44" height="10" rx="2" fill="#FACC15" stroke="#0F172A" strokeWidth="2" />
        <text x="55" y="86.5" fill="#0F172A" fontSize="6.5" fontWeight="900" fontFamily="monospace" textAnchor="middle">
          CELE-EDE
        </text>
        {/* Main Chrome Sphere */}
        <circle cx="55" cy="58" r="26" fill="#64748B" stroke="#0F172A" strokeWidth="2.5" />
        <path d="M 30 50 Q 55 40 80 50" stroke="#1E293B" strokeWidth="2" fill="none" />
        {/* Top Vault-Blue Band */}
        <path d="M 34 42 Q 55 24 76 42 Q 55 38 34 42 Z" fill="#1D4ED8" stroke="#0F172A" strokeWidth="1.5" />
        {/* Glowing Cyclops Visor */}
        <rect x="35" y="52" width="40" height="14" rx="7" fill="#042F2E" stroke="#0F172A" strokeWidth="2" />
        <g className="pet-eyes-group">
          <circle
            cx="55"
            cy="59"
            r={isWinking ? 2.5 : 5}
            fill="#22C55E"
            className="animate-pulse"
          />
        </g>
        {/* Speaker Grille */}
        <line x1="40" y1="71" x2="70" y2="71" stroke="#0F172A" strokeWidth="2" strokeDasharray="3 2" />
      </svg>
    );
  }

  // 4. MINI DEATHCLAW (Tamed Bunker Mascot with CE Safety Hardhat!)
  if (companion === 'deathclaw') {
    return (
      <svg
        viewBox="0 0 110 130"
        className={`${className} drop-shadow-[0_10px_10px_rgba(0,0,0,0.55)]`}
        aria-label="Mini Deathclaw Avatar"
      >
        <ellipse cx="55" cy="122" rx="28" ry="6" fill="#000000" fillOpacity="0.45" className="pet-shadow" />
        {/* Muscular Tail */}
        <g className="pet-tail">
          <path d="M 70 92 Q 98 95 95 72" stroke="#78350F" strokeWidth="9" strokeLinecap="round" fill="none" />
        </g>
        {/* Back Spikes */}
        <polygon points="62,48 73,44 68,55" fill="#FDE68A" stroke="#0F172A" strokeWidth="1.5" />
        <polygon points="68,62 79,59 73,70" fill="#FDE68A" stroke="#0F172A" strokeWidth="1.5" />
        {/* Legs & Claws */}
        <rect x="36" y="88" width="13" height="24" rx="5" fill="#78350F" stroke="#0F172A" strokeWidth="2.2" />
        <rect x="58" y="88" width="13" height="24" rx="5" fill="#78350F" stroke="#0F172A" strokeWidth="2.2" />
        <path d="M 33 114 L 36 108 L 41 114 L 45 108 L 49 114 Z" fill="#FEF3C7" stroke="#0F172A" strokeWidth="1.5" />
        <path d="M 55 114 L 58 108 L 63 114 L 67 108 L 71 114 Z" fill="#FEF3C7" stroke="#0F172A" strokeWidth="1.5" />
        {/* Torso */}
        <ellipse cx="54" cy="74" rx="20" ry="22" fill="#92400E" stroke="#0F172A" strokeWidth="2.5" />
        {/* Belly armor plates */}
        <ellipse cx="51" cy="76" rx="12" ry="16" fill="#D97706" opacity="0.85" />
        <line x1="41" y1="70" x2="61" y2="70" stroke="#451A03" strokeWidth="1.5" />
        <line x1="40" y1="78" x2="62" y2="78" stroke="#451A03" strokeWidth="1.5" />
        <line x1="42" y1="86" x2="60" y2="86" stroke="#451A03" strokeWidth="1.5" />
        {/* Fierce/Cute Claws */}
        <g className="pet-arm-gesture">
          <path d="M 35 64 Q 20 68 23 78" stroke="#92400E" strokeWidth="7" strokeLinecap="round" fill="none" />
          <path d="M 19 80 L 23 75 L 27 81" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <path d="M 72 64 Q 86 68 83 78" stroke="#92400E" strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M 79 81 L 83 75 L 87 80" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" />
        {/* Head & Hardhat Group */}
        <g className="pet-head-group">
          {/* Curved Horns */}
          <path d="M 38 28 Q 22 14 28 6 Q 34 15 44 24 Z" fill="#FDE68A" stroke="#0F172A" strokeWidth="2" />
          <path d="M 66 28 Q 82 14 76 6 Q 70 15 60 24 Z" fill="#FDE68A" stroke="#0F172A" strokeWidth="2" />
          {/* Head */}
          <ellipse cx="52" cy="39" rx="17" ry="15" fill="#92400E" stroke="#0F172A" strokeWidth="2.5" />
          {/* Snout */}
          <ellipse cx="46" cy="45" rx="11" ry="7" fill="#B45309" stroke="#0F172A" strokeWidth="2" />
          {/* Tiny Cute Fangs */}
          <polygon points="39,49 41,54 43,49" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
          <polygon points="49,49 51,54 53,49" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
          {/* Glowing Amber Eyes */}
          <g className="pet-eyes-group">
            {isWinking ? (
              <>
                <path d="M 38 35 Q 41 32 44 35" stroke="#FEF08A" strokeWidth="2.4" strokeLinecap="round" fill="none" />
                <circle cx="57" cy="35" r="3.2" fill="#FEF08A" />
                <circle cx="57" cy="35" r="1.4" fill="#0F172A" />
              </>
            ) : (
              <>
                <circle cx="41" cy="35" r="3.2" fill="#FEF08A" />
                <circle cx="41" cy="35" r="1.4" fill="#0F172A" />
                <circle cx="57" cy="35" r="3.2" fill="#FEF08A" />
                <circle cx="57" cy="35" r="1.4" fill="#0F172A" />
              </>
            )}
          </g>
          {/* Cute Safety Hardhat between horns */}
          <path d="M 39 27 Q 52 14 65 27 Z" fill="#FACC15" stroke="#0F172A" strokeWidth="2" />
          <rect x="37" y="25" width="30" height="3.5" rx="1.5" fill="#EAB308" stroke="#0F172A" strokeWidth="1.5" />
        </g>
      </svg>
    );
  }

  // 5. MINI LIBERTY PRIME (Armored Giant Defender Chibi)
  if (companion === 'liberty-prime') {
    return (
      <svg
        viewBox="0 0 110 130"
        className={`${className} drop-shadow-[0_10px_10px_rgba(0,0,0,0.55)]`}
        aria-label="Mini Liberty Prime Avatar"
      >
        <ellipse cx="55" cy="122" rx="30" ry="6" fill="#000000" fillOpacity="0.45" className="pet-shadow" />
        {/* Back Nuke Pack */}
        <rect x="25" y="45" width="60" height="24" rx="4" fill="#334155" stroke="#0F172A" strokeWidth="2" />
        <circle cx="32" cy="52" r="4" fill="#22C55E" stroke="#0F172A" strokeWidth="1.5" />
        <circle cx="78" cy="52" r="4" fill="#22C55E" stroke="#0F172A" strokeWidth="1.5" />
        {/* Legs */}
        <rect x="35" y="86" width="15" height="26" rx="4" fill="#475569" stroke="#0F172A" strokeWidth="2.4" />
        <rect x="60" y="86" width="15" height="26" rx="4" fill="#475569" stroke="#0F172A" strokeWidth="2.4" />
        <rect x="31" y="109" width="21" height="8" rx="3" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
        <rect x="58" y="109" width="21" height="8" rx="3" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
        {/* Heavy Armored Chassis */}
        <path d="M 28 46 L 82 46 L 76 88 L 34 88 Z" fill="#64748B" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Chest Star Emblem */}
        <polygon
          points="55,55 57.5,62 65,62 59,66.5 61,74 55,69.5 49,74 51,66.5 45,62 52.5,62"
          fill="#FACC15"
          stroke="#0F172A"
          strokeWidth="1.5"
        />
        {/* Massive Shoulder Pauldrons & Arms */}
        <g className="pet-arm-gesture">
          <rect x="16" y="48" width="16" height="32" rx="6" fill="#475569" stroke="#0F172A" strokeWidth="2.4" />
          {/* Mini Fat Man Nuke in Left Hand */}
          <ellipse cx="22" cy="83" rx="7" ry="9" fill="#15803D" stroke="#0F172A" strokeWidth="2" />
          <line x1="17" y1="81" x2="27" y2="81" stroke="#FACC15" strokeWidth="2" />
        </g>
        <rect x="78" y="48" width="16" height="32" rx="6" fill="#475569" stroke="#0F172A" strokeWidth="2.4" />
        {/* Helmet Dome (Scanning Head) */}
        <g className="pet-head-group">
          <path d="M 38 22 Q 55 12 72 22 L 74 44 L 36 44 Z" fill="#94A3B8" stroke="#0F172A" strokeWidth="2.5" />
          {/* Crest Fin */}
          <rect x="52" y="10" width="6" height="14" rx="2" fill="#DC2626" stroke="#0F172A" strokeWidth="1.5" />
          {/* Glowing Optical Visor */}
          <rect x="40" y="28" width="30" height="8" rx="4" fill="#0F172A" />
          <rect
            x="43"
            y="30"
            width="24"
            height="4"
            rx="2"
            fill={isWinking ? '#FACC15' : '#38BDF8'}
            className="animate-pulse"
          />
        </g>
      </svg>
    );
  }

  // 6. CUSTOMIZABLE VAULT DWELLER (Default)
  const suit = SUIT_COLOR_PRESETS[dweller.suitColor] || SUIT_COLOR_PRESETS['vault-cobalt'];
  const hair = HAIR_COLOR_PRESETS[dweller.hairColor] || HAIR_COLOR_PRESETS.blonde;
  const skin = SKIN_TONE_PRESETS[dweller.skinTone] || SKIN_TONE_PRESETS.fair;

  return (
    <svg
      viewBox="0 0 100 130"
      className={`${className} drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)]`}
      aria-label="Customizable Vault Dweller Avatar"
    >
      {/* Shadow under feet */}
      <ellipse cx="50" cy="122" rx="26" ry="6" fill="#000000" fillOpacity="0.45" className="pet-shadow" />

      {/* Jumpsuit Boots */}
      <path d="M 33 110 L 33 120 L 25 120 L 25 116 Z" fill="#2b2b2b" stroke="#000" strokeWidth="2" />
      <path d="M 53 110 L 53 120 L 61 120 L 61 116 Z" fill="#2b2b2b" stroke="#000" strokeWidth="2" />

      {/* Jumpsuit Legs */}
      <path d="M 34 82 L 32 112 L 44 112 L 46 86 Z" fill={suit.dark} stroke="#0f172a" strokeWidth="2.5" />
      <path d="M 52 82 L 50 112 L 62 112 L 60 86 Z" fill={suit.dark} stroke="#0f172a" strokeWidth="2.5" />

      {/* Jumpsuit Torso */}
      <path
        d="M 30 52 L 24 84 L 70 84 L 64 52 Z"
        fill={suit.main}
        stroke="#0f172a"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Vault Piping / Collar / Zipper */}
      <path d="M 47 52 L 47 84" stroke={suit.trim} strokeWidth="3" strokeLinecap="round" />
      <path d="M 34 52 Q 47 57 60 52" stroke={suit.trim} strokeWidth="3.5" fill="none" />
      <rect x="34" y="80" width="26" height="5" fill={suit.trim} rx="1.5" stroke="#0f172a" strokeWidth="1" />
      <rect x="44" y="79" width="6" height="7" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1" />

      {/* Vault Designation Number printed on chest */}
      <text
        x="47"
        y="73"
        fill={suit.text}
        fontSize="6.5"
        fontWeight="900"
        fontFamily="monospace"
        textAnchor="middle"
      >
        {dweller.vaultNumber}
      </text>

      {/* Left Arm (Relaxed) */}
      <path d="M 64 54 Q 74 68 70 80" stroke={suit.main} strokeWidth="7" strokeLinecap="round" fill="none" />
      <circle cx="70" cy="81" r="4.5" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.5" />

      {/* Right Arm (Classic Thumbs Up Pose with Subtle Pip-Boy Check) */}
      <g className="pet-arm-gesture">
        <path d="M 30 54 Q 16 60 20 46" stroke={suit.main} strokeWidth="7" strokeLinecap="round" fill="none" />
        {/* Pip-Boy 3000 on Right Forearm */}
        <rect x="17" y="50" width="8" height="6" rx="1.5" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />

        {/* Thumbs-Up Hand Glove */}
        <g transform="translate(18, 38)">
          <circle cx="3" cy="7" r="4.5" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
          <path
            d="M 2 6 L 2 1 Q 4 0 6 2 L 5 7 Z"
            fill="#f8fafc"
            stroke="#0f172a"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
      </g>

      {/* Neck */}
      <rect x="43" y="44" width="8" height="10" fill={skin.fill} stroke="#0f172a" strokeWidth="1.5" />

      {/* Head, Hair, Blinking Eyes & Gear Group (Subtle Look-Around) */}
      <g className="pet-head-group">
        {/* Head / Face */}
        <circle cx="47" cy="34" r="16" fill={skin.fill} stroke="#0f172a" strokeWidth="2.5" />

        {/* Hair Back for Bob style */}
        {dweller.hairStyle === 'bob' && (
          <path
            d="M 30 30 Q 28 46 35 48 L 35 34 Z M 64 30 Q 66 46 59 48 L 59 34 Z"
            fill={hair.fill}
            stroke="#0f172a"
            strokeWidth="2"
          />
        )}

        {/* Cheeks */}
        <circle cx="37" cy="38" r="3" fill={skin.cheek} fillOpacity="0.55" />
        <circle cx="57" cy="38" r="3" fill={skin.cheek} fillOpacity="0.55" />

        {/* Cheerful Smile */}
        <path d="M 40 38 Q 47 46 54 38" stroke="#0f172a" strokeWidth="2" fill="#ffffff" strokeLinecap="round" />

        {/* Eyes */}
        <g className="pet-eyes-group">
          {isWinking ? (
            <>
              <path d="M 37 31 Q 40 28 43 31" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <ellipse cx="53" cy="30" rx="2.5" ry="3.5" fill="#0f172a" />
              <circle cx="52" cy="29" r="1" fill="#ffffff" />
            </>
          ) : (
            <>
              <ellipse cx="40" cy="30" rx="2.5" ry="3.5" fill="#0f172a" />
              <circle cx="39" cy="29" r="1" fill="#ffffff" />
              <ellipse cx="54" cy="30" rx="2.5" ry="3.5" fill="#0f172a" />
              <circle cx="53" cy="29" r="1" fill="#ffffff" />
            </>
          )}
        </g>

        {/* Eyebrows */}
        <path d="M 37 25 Q 40 23 43 25" stroke={hair.brow} strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M 51 25 Q 54 23 57 25" stroke={hair.brow} strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Hair Styles */}
        {dweller.hairStyle === 'quiff' && (
          <>
            <path
              d="M 31 30 C 29 18 36 12 47 12 C 58 12 65 18 63 30 C 64 26 62 22 58 20 C 54 18 48 20 44 24 C 40 21 34 22 31 30 Z"
              fill={hair.fill}
              stroke="#0f172a"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path
              d="M 44 21 Q 48 14 55 16 Q 59 18 56 22"
              fill={hair.fill}
              stroke="#0f172a"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </>
        )}

        {dweller.hairStyle === 'spiky' && (
          <path
            d="M 31 28 L 28 17 L 37 20 L 40 9 L 47 17 L 53 8 L 57 18 L 65 15 L 63 28 Q 47 21 31 28 Z"
            fill={hair.fill}
            stroke="#0f172a"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        )}

        {dweller.hairStyle === 'bob' && (
          <path
            d="M 31 31 C 30 16 37 12 47 12 C 57 12 64 16 63 31 Q 53 22 47 25 Q 41 22 31 31 Z"
            fill={hair.fill}
            stroke="#0f172a"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        )}

        {dweller.hairStyle === 'buzz' && (
          <path
            d="M 31 28 C 32 16 39 14 47 14 C 55 14 62 16 63 28 Q 47 23 31 28 Z"
            fill={hair.fill}
            stroke="#0f172a"
            strokeWidth="2"
          />
        )}

        {/* Headgear / Accessories */}
        {dweller.accessory === 'hardhat' && (
          <g>
            <path d="M 30 24 Q 47 7 64 24 Z" fill="#FACC15" stroke="#0F172A" strokeWidth="2.2" />
            <rect x="27" y="22" width="40" height="4" rx="2" fill="#EAB308" stroke="#0F172A" strokeWidth="1.8" />
            <polygon points="44,17 47,11 50,17" fill="#0F172A" />
          </g>
        )}

        {dweller.accessory === 'party-hat' && (
          <g>
            <polygon points="36,22 47,2 58,22" fill="#3B82F6" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />
            <line x1="40" y1="15" x2="54" y2="15" stroke="#FACC15" strokeWidth="2.5" />
            <circle cx="47" cy="2" r="3" fill="#FACC15" stroke="#0F172A" strokeWidth="1.5" />
          </g>
        )}

        {dweller.accessory === 'goggles' && (
          <g>
            <line x1="31" y1="22" x2="63" y2="22" stroke="#1E293B" strokeWidth="3" />
            <circle cx="40" cy="22" r="5" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
            <circle cx="54" cy="22" r="5" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
            <circle cx="38.5" cy="20.5" r="1.5" fill="#FFFFFF" opacity="0.8" />
            <circle cx="52.5" cy="20.5" r="1.5" fill="#FFFFFF" opacity="0.8" />
          </g>
        )}

        {dweller.accessory === 'glasses' && (
          <g>
            <rect x="34" y="26" width="11" height="8" rx="2" fill="#0F172A" fillOpacity="0.15" stroke="#0F172A" strokeWidth="2" />
            <rect x="49" y="26" width="11" height="8" rx="2" fill="#0F172A" fillOpacity="0.15" stroke="#0F172A" strokeWidth="2" />
            <line x1="45" y1="29" x2="49" y2="29" stroke="#0F172A" strokeWidth="2" />
          </g>
        )}
      </g>

      {/* Civil Engineer Delta Emblem Badge on chest */}
      <g transform="translate(52, 60)">
        <polygon points="0,8 5,0 10,8" fill="#f59e0b" stroke="#78350f" strokeWidth="0.8" />
        <line x1="2" y1="5" x2="8" y2="5" stroke="#78350f" strokeWidth="0.6" />
      </g>
    </svg>
  );
};
