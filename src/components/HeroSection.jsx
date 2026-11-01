import React, { useState, useEffect } from 'react';
import DiamondLogo from './DiamondLogo';
import { Sparkles, ArrowRight, ShieldCheck, MapPin, Award, Gem, PhoneCall, MessageCircle } from 'lucide-react';
import { 
  GOLD_RATE_22KT, 
  GOLD_RATE_LOCATION, 
  CONTACT_PRIMARY, 
  CONTACT_SECONDARY, 
  getWhatsAppOrderLink 
} from '../data/products';

export default function HeroSection({ onExploreClick, onShowroomClick, onSelect40gPiece }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroShowcase = [
    {
      title: "Dhunna Original 4-Piece Box Set",
      type: "Authentic Showroom Photograph",
      weight: "28.60g Complete Suite",
      description: "Real showroom photograph of our complete 4-piece 22KT gold set in original Dhunna Jewellers & Sons velvet box: V-necklace, solitaire ring, teardrop earrings & matching bracelet.",
      image: "/images/dhunna-italian-bridal-set.jpg",
      badge: "ORIGINAL SHOWROOM BOX SET",
      isOriginal: true
    },
    {
      title: "Original 22KT Royal Chand Haar",
      type: "Authentic Showroom Photograph",
      weight: "40.00g Exact Solid Gold",
      description: "Real showroom photograph of our authentic 40-gram 22KT Punjabi Chand Haar featuring 3-strand bead mala and grand crescent medallion with micro-granulation spheres.",
      image: "/images/dhunna-40g-necklace.jpg",
      badge: "ORIGINAL SHOWROOM PIECE (40g)",
      isOriginal: true
    },
    {
      title: "Imperial Amritsari 22KT Rani Haar",
      type: "Authentic Bridal Box Suite",
      weight: "65.50g Pure Gold in Box",
      description: "Grand Punjabi Rani Haar with matching jhumkas presented inside our signature Dhunna Jewellers & Sons red velvet trousseau box.",
      image: "/images/dhunna-rani-haar-box.jpg",
      badge: "ROYAL BRIDAL BOX SUITE",
      isOriginal: true
    },
    {
      title: "Gill Village Physical Showroom",
      type: "Authentic Showroom Interior",
      weight: "Walk-in Showroom (LDH 141116)",
      description: "Air-conditioned physical showroom in Gill Village, Ludhiana near Jutti Market. Inspect ready-made 22KT gold collections in person on calibrated scales with live bullion rates.",
      image: "/images/dhunna-showroom-interior-2.jpg",
      badge: "VISIT GILL VILLAGE SHOWROOM",
      isOriginal: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroShowcase.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroShowcase.length]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A0A0C]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.18),rgba(10,10,12,0))] pointer-events-none" />
      <div className="absolute -top-40 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 left-10 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Filigree Grid Pattern */}
      <div className="absolute inset-0 bg-filigree opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Legacy & Taglines */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Heritage Badge with Accurate Ludhiana Rate */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 px-4 py-1.5 rounded-full bg-[#18181D]/90 border border-[#D4AF37]/30 shadow-gold-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#F7E7B4] uppercase">
                Ludhiana (Punjab) Rate Today: 22KT ₹{GOLD_RATE_22KT.toLocaleString('en-IN')}/g
              </span>
              <span className="text-[#D4AF37]/60 hidden sm:inline">•</span>
              <span className="text-[11px] text-gray-300 hidden sm:inline uppercase">
                BIS 916 HALLMARKED
              </span>
            </div>

            {/* Main Brand Title & Exact Emblem Format */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <svg 
                  viewBox="0 0 100 70" 
                  className="w-10 h-7 sm:w-12 sm:h-9 text-[#D4AF37]" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="28" y1="12" x2="72" y2="12" />
                  <line x1="10" y1="30" x2="28" y2="12" />
                  <line x1="72" y1="12" x2="90" y2="30" />
                  <line x1="28" y1="12" x2="50" y2="30" />
                  <line x1="72" y1="12" x2="50" y2="30" />
                  <line x1="10" y1="30" x2="90" y2="30" />
                  <line x1="10" y1="30" x2="50" y2="65" />
                  <line x1="90" y1="30" x2="50" y2="65" />
                  <line x1="38" y1="30" x2="50" y2="65" />
                  <line x1="62" y1="30" x2="50" y2="65" />
                </svg>
                <span className="font-serif italic text-lg sm:text-2xl text-[#F7E7B4] tracking-wide">
                  Dhunna Jewellers & Sons
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-[0.08em] uppercase text-white leading-[1.08]">
                DHUNNA <span className="gold-text-gradient">JEWELLERS</span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
                <span className="w-12 h-[1.5px] bg-[#D4AF37]"></span>
                <p className="text-sm sm:text-lg lg:text-xl font-heading tracking-[0.28em] text-[#C5A059] font-semibold uppercase">
                  22KT GOLD • TIMELESS ELEGANCE
                </p>
                <span className="w-12 h-[1.5px] bg-[#D4AF37] hidden sm:inline-block"></span>
              </div>
            </div>

            {/* Prominent Punjabi Tagline Box (Exact requirement) */}
            <div className="relative inline-block max-w-2xl mx-auto lg:mx-0 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-[#171612] via-[#211F18] to-[#171612] border border-[#D4AF37]/40 shadow-gold-md">
              <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#0A0A0C] border border-[#D4AF37]/40 rounded text-[10px] tracking-widest text-[#D4AF37] uppercase font-semibold">
                Our Generational Philosophy
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <span className="text-2xl sm:text-3xl text-[#D4AF37] animate-bounce">💎</span>
                <p className="font-gurmukhi text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-[#FFF0C8] leading-tight text-center lg:text-left drop-shadow-md">
                  ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
                </p>
              </div>
              <p className="text-xs text-gray-300 mt-2 tracking-wider text-center lg:text-left font-light pl-0 sm:pl-11">
                Real showroom jewellery photographed directly in Ludhiana, Punjab. We forge generational heirlooms in authentic 22KT gold.
              </p>
            </div>

            {/* Supporting Brand Description */}
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Welcome to <strong>DHUNNA JEWELLERS</strong>, Ludhiana’s trusted showroom for authentic <span className="text-[#F7E7B4] font-medium">22KT ready-made gold jewellery</span>. Explore our real, non-AI photographed pieces, including our signature <strong>40g Royal Punjabi Chand Haar</strong>, bridal Rani Haars, heavy kadas, and daily wear gold.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5C2] to-[#B38B3F] text-black font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase hover:brightness-110 transition-all duration-300 shadow-gold-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>EXPLORE 22KT COLLECTION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onShowroomClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#18181D]/80 hover:bg-[#222228] text-[#F7E7B4] border border-[#D4AF37]/50 font-medium text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:border-[#D4AF37] flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>VISIT LUDHIANA SHOWROOM</span>
              </button>
            </div>

            {/* Direct WhatsApp Order Placement Action Bar */}
            <div className="p-3.5 rounded-xl bg-[#121217] border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct WhatsApp Order Placement:</span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                <a
                  href={getWhatsAppOrderLink(CONTACT_PRIMARY, 'Hello Dhunna Jewellers, I want to place an order for 22KT gold jewellery.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold tracking-wider hover:bg-emerald-900 transition-colors"
                >
                  {CONTACT_PRIMARY}
                </a>
                <span className="text-gray-500">or</span>
                <a
                  href={getWhatsAppOrderLink(CONTACT_SECONDARY, 'Hello Dhunna Jewellers, I want to place an order for 22KT gold jewellery.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold tracking-wider hover:bg-emerald-900 transition-colors"
                >
                  {CONTACT_SECONDARY}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Luxury Showcase Slider (Featuring Original 40g piece!) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative golden ring glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D4AF37]/30 via-[#F7E7B4]/10 to-[#997328]/30 rounded-2xl blur-lg opacity-70 animate-pulse-subtle"></div>
              
              <div className="relative bg-[#141419] rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl">
                
                {/* Hero Showcase Image */}
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <img
                    src={heroShowcase[activeSlide].image}
                    alt={heroShowcase[activeSlide].title}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-[#0B0B0E]/20 to-transparent"></div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    <span className="px-3 py-1 bg-black/85 backdrop-blur-md rounded-full border border-[#D4AF37]/50 text-[11px] font-bold tracking-wider text-[#F7E7B4] uppercase shadow-md">
                      {heroShowcase[activeSlide].badge}
                    </span>
                    {heroShowcase[activeSlide].isOriginal && (
                      <span className="px-2.5 py-0.5 bg-emerald-900/90 text-emerald-200 border border-emerald-500/30 text-[9px] font-bold uppercase rounded-full">
                        Original Showroom Photo • 40g
                      </span>
                    )}
                  </div>

                  {/* Weight Stamp */}
                  <div className="absolute top-4 right-4 bg-[#18181D]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/40 text-xs font-mono font-bold text-[#F7E7B4]">
                    {heroShowcase[activeSlide].weight}
                  </div>

                  {/* Bottom Information Card */}
                  <div className="absolute bottom-0 inset-x-0 p-6 space-y-2.5 bg-gradient-to-t from-[#0E0E12] via-[#0E0E12]/95 to-transparent">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                      {heroShowcase[activeSlide].type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                      {heroShowcase[activeSlide].title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                      {heroShowcase[activeSlide].description}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <button 
                        onClick={onExploreClick}
                        className="text-xs uppercase tracking-wider font-semibold text-[#F7E7B4] hover:text-white flex items-center gap-1 group/btn cursor-pointer"
                      >
                        <span>View In Catalogue</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-[#D4AF37]" />
                      </button>

                      <a
                        href={getWhatsAppOrderLink(CONTACT_PRIMARY, `Hello Dhunna Jewellers, I would like to place an order for the ${heroShowcase[activeSlide].title} (${heroShowcase[activeSlide].weight}).`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black text-[11px] font-bold rounded uppercase tracking-wider hover:brightness-110 flex items-center gap-1"
                      >
                        <MessageCircle className="w-3 h-3 fill-black" />
                        <span>Order on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Slider Controls / Indicators */}
                <div className="p-3 bg-[#111115] border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {heroShowcase.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-1.5 transition-all rounded-full ${
                          activeSlide === idx 
                            ? 'w-8 bg-[#D4AF37]' 
                            : 'w-2 bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[11px] text-gray-400 font-mono">
                    0{activeSlide + 1} / 0{heroShowcase.length}
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
