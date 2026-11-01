import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Sparkles, Scale, Camera } from 'lucide-react';
import { GOLD_RATE_22KT, CONTACT_PRIMARY, CONTACT_SECONDARY, getWhatsAppOrderLink } from '../data/products';

export default function AboutSection({ onExploreClick }) {
  const heritagePillars = [
    {
      title: "Exclusively 22KT Gold",
      description: "Every piece in our Ludhiana showroom is crafted in genuine 22KT (916) pure gold with permanent bullion asset value.",
      icon: Award
    },
    {
      title: "Generational Punjabi Heritage",
      description: "Rooted in Ludhiana, Punjab, our master karigars forge royal Punjabi ornaments — from 40g Chand Haars to traditional Dholnas.",
      icon: Sparkles
    },
    {
      title: "Unwavering Customer Trust",
      description: "Computerized electronic weigh scales, BIS 916 laser hallmarking, transparent live Ludhiana bullion rates, and lifetime buyback.",
      icon: ShieldCheck
    },
    {
      title: "Real Showroom Photography",
      description: "100% genuine showroom inventory photos taken directly in Ludhiana — zero artificial or misleading renders.",
      icon: Camera
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0E0E12] relative overflow-hidden border-t border-b border-[#D4AF37]/20">
      
      {/* Background Decorative Gold Ambient Highlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1A1A22] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
            Brand Heritage • Ludhiana, Punjab
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-wide uppercase">
            ABOUT <span className="gold-text-gradient">DHUNNA JEWELLERS</span>
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-[1px] bg-[#D4AF37]"></span>
            <p className="font-gurmukhi text-lg sm:text-2xl text-[#F7E7B4] font-semibold tracking-wide">
              💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
            </p>
            <span className="w-10 h-[1px] bg-[#D4AF37]"></span>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light pt-2">
            At <strong>DHUNNA JEWELLERS (Ludhiana)</strong>, gold is never merely an ornament. It is an emotional legacy, an unwritten testament of ancestral love, and an immortal blessing passed down across generations.
          </p>
        </div>

        {/* Two-Column Story Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Image Collage Featuring Original 40g Piece */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              
              {/* Backing Gold Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent rounded-2xl blur-md"></div>

              {/* Main Masterpiece Image: Original 40g Necklace */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl aspect-[4/5] group bg-[#181820]">
                <img
                  src="/images/dhunna-40g-necklace.jpg"
                  alt="Dhunna Jewellers 40g Royal Chand Haar Original Photo"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent"></div>
                
                {/* Floating Certificate Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#141419]/90 backdrop-blur-md border border-[#D4AF37]/30 shadow-gold-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37]">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-white">
                        Original Showroom Photograph (40g)
                      </h4>
                      <p className="text-[11px] text-gray-300">
                        Photographed on showroom velvet. 100% genuine 22KT gold hallmarked in Ludhiana, Punjab.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Showroom Physical Store Pill Strip */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#141419] border border-[#D4AF37]/25 shadow-sm">
                  <img src="/images/dhunna-showroom-interior-1.jpg" alt="Showroom entrance Gill Village" className="w-12 h-10 object-cover rounded-lg border border-[#D4AF37]/30" />
                  <div>
                    <span className="text-[10px] text-[#F7E7B4] font-bold block uppercase">Gill Village Entrance</span>
                    <span className="text-[9px] text-gray-400">Near Jutti Market</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#141419] border border-[#D4AF37]/25 shadow-sm">
                  <img src="/images/dhunna-showroom-interior-2.jpg" alt="Main counter" className="w-12 h-10 object-cover rounded-lg border border-[#D4AF37]/30" />
                  <div>
                    <span className="text-[10px] text-[#F7E7B4] font-bold block uppercase">Main Showcase</span>
                    <span className="text-[9px] text-gray-400">Electronic Scale Desks</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Text Story & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                Ludhiana's Sanctum of 22KT Ready-Made Gold
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-snug">
                Authentic Craftsmanship. Real Hallmarks. Zero AI Fiction.
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Specializing exclusively in <strong>22KT ready-made gold jewellery</strong> in Ludhiana, Punjab, Dhunna Jewellers has earned generational trust. We display real, physical pieces crafted by master goldsmiths.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                From our authentic <strong>40-gram Royal Punjabi Chand Haar</strong> to royal <em>Rani Haars</em>, sculpted <em>Gulbandh Chokers</em>, heavy <em>Sher-Mukhi Kadas</em>, and everyday gold chains, every item is ready to be inspected on calibrated scales and taken home today.
              </p>
            </div>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {heritagePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-[#141419] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 rounded bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Order Hotline Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#211E15] to-[#141419] border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block font-semibold">
                  Direct WhatsApp Hotline (Ludhiana)
                </span>
                <span className="font-mono text-sm text-[#FFF0C8] font-bold">
                  {CONTACT_PRIMARY} &nbsp;|&nbsp; {CONTACT_SECONDARY}
                </span>
              </div>
              <a
                href={getWhatsAppOrderLink(CONTACT_PRIMARY, 'Hello Dhunna Jewellers, I would like to place an order for 22KT gold jewellery.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#F7E7B4] transition-colors whitespace-nowrap"
              >
                Place Order on WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
