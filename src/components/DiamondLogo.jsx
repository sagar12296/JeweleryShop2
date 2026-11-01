import React from 'react';

export default function DiamondLogo({ className = "w-8 h-8", textColor = "text-white", subtitle = "22KT GOLD • TIMELESS ELEGANCE", showSubtitle = true, size = "default" }) {
  return (
    <div className="flex flex-col items-center text-center select-none group cursor-pointer">
      {/* Exact Faceted Diamond Line-Art Icon matching the showroom photo watermark */}
      <svg 
        viewBox="0 0 100 70" 
        className={`${className} text-[#D4AF37] transition-transform duration-300 group-hover:scale-105`} 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* Table (Top Flat Edge) */}
        <line x1="28" y1="12" x2="72" y2="12" />
        {/* Upper Facets (Crown) */}
        <line x1="10" y1="30" x2="28" y2="12" />
        <line x1="72" y1="12" x2="90" y2="30" />
        <line x1="28" y1="12" x2="50" y2="30" />
        <line x1="72" y1="12" x2="50" y2="30" />
        {/* Girdle (Horizontal Middle Line) */}
        <line x1="10" y1="30" x2="90" y2="30" />
        {/* Lower Facets (Pavilion) */}
        <line x1="10" y1="30" x2="50" y2="65" />
        <line x1="90" y1="30" x2="50" y2="65" />
        <line x1="38" y1="30" x2="50" y2="65" />
        <line x1="62" y1="30" x2="50" y2="65" />
      </svg>

      {/* Brand Name in exact luxury format */}
      <div className="mt-1">
        <h2 className={`font-serif tracking-[0.08em] ${textColor} ${
          size === 'lg' 
            ? 'text-2xl sm:text-3xl font-bold italic' 
            : size === 'sm' 
              ? 'text-sm font-semibold italic' 
              : 'text-lg sm:text-xl font-bold italic'
        } transition-colors group-hover:text-[#F7E7B4]`}>
          Dhunna Jewellers & Sons
        </h2>
        
        {showSubtitle && (
          <p className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#C5A059] font-sans uppercase font-medium mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

