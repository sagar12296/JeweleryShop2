import React from 'react';
import { Award, ShieldCheck, Clock, Sparkles, Gem, Scale, CheckCircle2 } from 'lucide-react';

export default function WhyDhunnaSection() {
  const pillars = [
    {
      title: "22KT GOLD",
      subtitle: "Absolute Sovereign Purity",
      description: "Premium ready-made jewellery crafted in 22KT gold.",
      detail: "100% 916 purity standard with BIS laser hallmarking. Every piece holds sovereign bullion value and liquidity.",
      icon: Award
    },
    {
      title: "TRUST & AUTHENTICITY",
      subtitle: "Uncompromised Integrity",
      description: "Jewellery you can purchase with confidence.",
      detail: "Complete transparency with computerized electronic weigh scales, detailed weight certificates, and clear making charges.",
      icon: ShieldCheck
    },
    {
      title: "TIMELESS DESIGNS",
      subtitle: "Generational Aesthetics",
      description: "Traditional craftsmanship blended with modern elegance.",
      detail: "From historic Punjabi Rani Haars and Hanslis to sleek modern bridal chokers, designed to be cherished across generations.",
      icon: Clock
    },
    {
      title: "PREMIUM CRAFTSMANSHIP",
      subtitle: "Flawless Karigari",
      description: "Attention to detail in every piece.",
      detail: "Sculpted by master karigars specializing in wire filigree, relief embossing, jaali work, and silk-smooth comfort fit.",
      icon: Sparkles
    }
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#0C0C0F] relative border-t border-b border-[#D4AF37]/20">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1A1A22] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
            The Dhunna Benchmark
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-wide uppercase">
            WHY <span className="gold-text-gradient">DHUNNA JEWELLERS</span>
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            <p className="font-gurmukhi text-xl sm:text-2xl text-[#F7E7B4] font-bold">
              💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
            </p>
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
          </div>

          <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Built upon decades of customer devotion, we do not simply sell gold ornaments. We safeguard your heritage and forge timeless heirlooms.
          </p>
        </div>

        {/* 4 Core Pillars Grid (Matches Prompt Exactly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#14141A] rounded-2xl p-7 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 hover:shadow-gold-md group flex flex-col justify-between"
              >
                {/* Subtle Glow upon hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#201D16] to-[#121217] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:text-black group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#C5A059] transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-1">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-white tracking-wider uppercase">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Primary exact description */}
                  <p className="text-sm text-[#F7E7B4] font-medium leading-snug">
                    {pillar.description}
                  </p>

                  {/* Detailed trust support */}
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {pillar.detail}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400 font-mono relative z-10">
                  <span>Dhunna Promise</span>
                  <span className="text-[#D4AF37]">0{idx + 1} / 04</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Generational Trust Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#171612] via-[#242118] to-[#171612] border border-[#D4AF37]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Authentic Punjabi Gold Legacy
            </span>
            <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Every Piece Carries Our Sovereign Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 font-light">
              Weighing down to three decimals, hallmark testing on-site, and lifetime buyback exchange policy.
            </p>
          </div>

          <div className="flex-shrink-0">
            <div className="inline-block p-3 rounded-xl bg-black/60 border border-[#D4AF37]/40">
              <p className="font-gurmukhi text-base sm:text-lg font-bold text-[#FFF0C8]">
                💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

