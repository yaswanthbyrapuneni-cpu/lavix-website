import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface LavixLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
}

export const LavixLogo: React.FC<LavixLogoProps> = ({
  className = '',
  showTagline = true,
  size = 'md',
  variant = 'dark',
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      {/* Red Clothes Hanger Icon */}
      <div className="flex items-center gap-2 -mb-0.5">
        <svg
          viewBox="0 0 100 50"
          className="w-10 h-5 text-[#C80000] stroke-current"
          fill="none"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Hook */}
          <path d="M50 18 C50 8, 58 8, 58 14 C58 20, 50 20, 50 26" />
          {/* Hanger Body */}
          <path d="M50 26 L10 44 C8 45, 8 48, 12 48 L88 48 C92 48, 92 45, 90 44 Z" />
        </svg>
      </div>

      {/* Main LAVIX AI Brand Name */}
      <div className="flex items-center gap-1.5">
        <span
          className={`font-heading font-black tracking-tight leading-none ${
            size === 'sm'
              ? 'text-base sm:text-lg'
              : size === 'lg'
              ? 'text-2xl sm:text-3xl'
              : 'text-lg sm:text-2xl'
          } ${isLight ? 'text-white' : 'text-[#1C120F]'}`}
        >
          LAVIX
        </span>
        <span className="px-1.5 py-0.5 rounded-md bg-[#C80000] text-white text-[9px] sm:text-[11px] font-black tracking-wider uppercase shadow-xs leading-none">
          AI
        </span>
      </div>

      {/* Tagline */}
      {showTagline && (
        <span
          className={`italic font-serif text-[9px] sm:text-[11px] tracking-wide mt-0.5 sm:mt-1 ${
            isLight ? 'text-amber-100/90' : 'text-[#5E4A43]'
          }`}
        >
          {SITE_CONFIG.tagline}
        </span>
      )}
    </div>
  );
};
