import React from 'react';
import { Flame, Hammer, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ArtOfGoldSection({ onExploreClick }) {
  const craftSteps = [
    {
      num: '01',
      title: 'Bullion Ingot Purification',
      purity: '91.67% Pure Gold Standard',
      desc: 'Selected from certified 24KT fine bullion and precision-alloyed with pure copper and silver to create the sovereign 22KT (916) golden ratio — ductile, vibrant, and enduring.',
      icon: Flame
    },
    {
      num: '02',
      title: 'The Karigar’s Wire & Chisel',
      purity: 'Traditional Jaali & Filigree',
      desc: 'Our generational artisans draw solid gold wires thinner than hair strands, hand-twisting each knot to sculpt the iconic motifs of Punjab’s royal courts.',
      icon: Hammer
    },
    {
      num: '03',
      title: 'Micro-Granulation & Polish',
      purity: 'Matte & Mirror Contrast',
      desc: 'Hundreds of microscopic solid gold spherules are flame-bonded one by one, before undergoing multi-stage hand-buffing with natural diamond pastes.',
      icon: Sparkles
    },
    {
      num: '04',
      title: 'BIS Laser Hallmarking',
      purity: 'Indelible Seal of Purity',
      desc: 'Every completed jewel is laser-engraved with the official BIS triangular logo, 916 purity stamp, and Dhunna Jewellers unique HUID identification number.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="art-of-gold" className="py-24 sm:py-32 bg-[#09090B] relative overflow-hidden">
      
      {/* Background Subtle Radiance */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#997328]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with exact prompts: "THE ART OF 22KT GOLD" */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#181820] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
            Generational Goldsmithing
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-wide uppercase">
            THE ART OF <span className="gold-text-gradient">22KT GOLD</span>
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            <p className="font-gurmukhi text-xl sm:text-2xl text-[#F7E7B4] font-bold">
              💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
            </p>
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
          </div>

          {/* Luxury-focused statements as required */}
          <div className="pt-2 space-y-2">
            <p className="text-xl sm:text-2xl font-serif italic text-[#F7E7B4] tracking-wide">
              “Crafted to shine. Designed to last.”
            </p>
            <p className="text-sm sm:text-base text-gray-400 font-light max-w-xl mx-auto">
              “Jewellery that becomes part of your story.”
            </p>
          </div>
        </div>

        {/* Large Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          
          {/* Editorial Left Hero Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl aspect-[16/10] group">
              <img
                src="/images/dhunna-italian-bridal-set.jpg"
                alt="22KT Gold Artistry Dhunna Jewellers & Sons Original Box Set"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-black/30 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#121217]/90 backdrop-blur-md border border-[#D4AF37]/30">
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] font-semibold block mb-1">
                  Heritage Philosophy
                </span>
                <h4 className="text-lg sm:text-xl font-heading font-bold text-white mb-1">
                  22KT Gold: The Eternal Sovereign Standard
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  While lesser purities fade or wear down, authentic 22KT gold preserves its signature warm, buttery luster across centuries. At Dhunna Jewellers, ready-made pieces carry both poetic visual majesty and unyielding financial security.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Right Feature Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#131318] border border-[#D4AF37]/25 space-y-6 shadow-xl">
              
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Why 22KT Ready-Made Matters
                </span>
                <h3 className="text-2xl font-heading font-bold text-white leading-snug">
                  Zero Waiting. Pure Transparency.
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  Unlike made-to-order promises where final weights and finishes are uncertain, our curated collection is ready to wear today. Inspect every contour, weigh it on our calibrated scales, and walk out with your bridal trousseau in hand.
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Bullion Purity</span>
                  <span className="font-bold text-[#F7E7B4]">916 (22 Karat Standard)</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Laser Inscription</span>
                  <span className="font-bold text-emerald-400">BIS Hallmark + HUID</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Craft Pedigree</span>
                  <span className="font-bold text-white">Punjab Master Guild</span>
                </div>
              </div>

              <button
                onClick={onExploreClick}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-gold-sm"
              >
                <span>Explore 22KT Masterpieces</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

        {/* 4 Craft Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {craftSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-[#131319] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 hover:shadow-gold-sm group space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-bold text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">
                    {step.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#1C1C24] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-[#C5A059] uppercase tracking-wider font-semibold block">
                    {step.purity}
                  </span>
                  <h4 className="text-base font-heading font-bold text-white">
                    {step.title}
                  </h4>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

