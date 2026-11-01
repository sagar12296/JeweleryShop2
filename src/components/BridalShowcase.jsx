import React, { useState } from 'react';
import { Sparkles, ArrowRight, Heart, Crown, MessageCircle, Calendar, ShieldCheck, Check } from 'lucide-react';
import { CONTACT_PRIMARY, CONTACT_SECONDARY, getWhatsAppOrderLink } from '../data/products';

export default function BridalShowcase({ onSelectBridalItem, onOpenBooking, formatPrice }) {
  const bridalCategories = [
    {
      id: 'box-set-original',
      name: 'Original 4-Piece Box Suite',
      subtitle: 'Original Showroom Box Presentation (28.60g)',
      weight: '28.60g Complete 4-Piece Suite',
      image: '/images/dhunna-italian-bridal-set.jpg',
      description: 'Authentic 4-piece trousseau set photographed directly in our Dhunna Jewellers & Sons velvet presentation box: V-choker necklace, matching solitaire ring, teardrop earrings, and articulated bracelet.',
      highlights: ['Original Dhunna Jewellers Velvet Box', 'Complete 4-Piece Matching Set', 'Ready in Gill Village Showroom']
    },
    {
      id: 'chand-haar-40g',
      name: 'Original 22KT Royal Chand Haar',
      subtitle: 'Original Showroom Photograph (40.00g)',
      weight: '40.00g Exact Solid Gold',
      image: '/images/dhunna-40g-necklace.jpg',
      description: 'The iconic 40g original masterpiece photographed directly in our showroom. Triple-strand gold bead mala anchored by a crescent Chand-Chakkar medallion with multi-tier granulation beads.',
      highlights: ['Authentic Showroom Piece', '100% Solid 22KT Gold (40g)', 'Ready in Ludhiana Showroom']
    },
    {
      id: 'rani-haar',
      name: 'Imperial Navratan Rani Haar & Tikka Suite',
      subtitle: 'Cascading Punjabi Royalty (78.50g)',
      weight: '78.50g Pure Gold in Box',
      image: '/images/dhunna-real-rani-haar-emerald.jpg',
      description: 'Cascading multi-strand gold bead garlands anchored by emerald cabochons, massive royal medallion, matching Maang Tikka and jhumkas in black velvet box.',
      highlights: ['Presented in Velvet Bridal Box', 'Includes Matching Tikka & Jhumkas', 'Hallmark 916 with HUID']
    },
    {
      id: 'gulbandh',
      name: 'Royal Meenakari & Emerald Antique Choker',
      subtitle: 'Showroom Spotlight Masterpiece (54.20g)',
      weight: '54.20g Antique Gold in Box',
      image: '/images/dhunna-real-teal-choker.jpg',
      description: 'Antique 22KT gold choker with central ruby medallion, delicate emerald green bead drops, and matching jhumka earrings in illuminated teal showroom box.',
      highlights: ['Illuminated Luxury Presentation Box', 'Antique 22KT Gold Finish', 'Includes Matching Earring Pair']
    },
    {
      id: 'pippal-patti',
      name: 'Traditional Punjabi Pippal Patti Folk Suite',
      subtitle: 'Heirloom Trousseau Adornment (38.50g)',
      weight: '38.50g Solid Gold on Velvet',
      image: '/images/dhunna-real-pippal-patti-set.jpg',
      description: 'Authentic Punjabi folk Pippal Patti gold necklace with circular filigree medallions and dangling heart-shaped sacred fig leaf drops with matching earrings.',
      highlights: ['Traditional Folk Artistry', 'Fluttering Sacred Leaf Drops', 'Fits Bridal Chooda Accents']
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const currentItem = bridalCategories[activeTab];

  return (
    <section id="bridal" className="py-24 sm:py-32 bg-[#0E0E14] relative overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(212,175,55,0.12),rgba(14,14,20,0))] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#201D16] border border-[#D4AF37]/40 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
            <Crown className="w-3.5 h-3.5" />
            <span>The Dhunna Royal Trousseau • Ludhiana</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-wide uppercase">
            TIMELESS BRIDAL <span className="gold-text-gradient">ELEGANCE</span>
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            <p className="font-gurmukhi text-xl sm:text-2xl text-[#F7E7B4] font-bold">
              💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
            </p>
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
          </div>

          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Crafted for the iconic Anand Karaj and opulent Punjabi celebrations. Each bridal suite is sculpted in pure 22KT gold to embody sovereign dignity and ancestral blessings.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-12">
          {bridalCategories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-xl text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black shadow-gold-sm font-bold scale-105'
                  : 'bg-[#181820] text-gray-300 hover:text-white hover:bg-[#22222D] border border-white/5'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Spotlight Showcase of Selected Bridal Category */}
        <div className="bg-[#14141A] rounded-2xl border border-[#D4AF37]/30 overflow-hidden shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Large Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/4.5] rounded-xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl group">
                <img
                  src={currentItem.image}
                  alt={currentItem.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/40 text-xs font-bold text-[#F7E7B4] uppercase tracking-wider">
                  22KT Royal Bridal Gold
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#0E0E12]/90 backdrop-blur-md p-3 rounded-lg border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-300">Trousseau Weight:</span>
                  <span className="text-xs font-mono font-bold text-[#F7E7B4]">{currentItem.weight}</span>
                </div>
              </div>
            </div>

            {/* Right Information & Bridal Experience Booking */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-1">
                  {currentItem.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white uppercase">
                  {currentItem.name}
                </h3>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed font-light">
                {currentItem.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-gray-300">
                  Bridal Masterpiece Highlights:
                </h4>
                <div className="space-y-2">
                  {currentItem.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <span className="w-4 h-4 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Punjabi Heritage Trousseau Note */}
              <div className="p-4 rounded-xl bg-[#1A1813] border border-[#D4AF37]/30 text-xs space-y-1">
                <p className="font-gurmukhi text-[#FFF0C8] font-bold text-sm">
                  💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
                </p>
                <p className="text-gray-400">
                  Every bridal piece at Dhunna Jewellers is forged in 100% BIS 916 hallmarked 22KT gold in Ludhiana, Punjab.
                </p>
              </div>

              {/* Direct Order on WhatsApp Buttons */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider block">
                  Direct Order Placement on WhatsApp:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={getWhatsAppOrderLink(CONTACT_PRIMARY, `Hello Dhunna Jewellers (Ludhiana), I want to place an order for the ${currentItem.name} (${currentItem.weight}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-xs tracking-wider uppercase text-center shadow-gold-sm hover:brightness-110 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>Order: {CONTACT_PRIMARY}</span>
                  </a>

                  <a
                    href={getWhatsAppOrderLink(CONTACT_SECONDARY, `Hello Dhunna Jewellers (Ludhiana), I want to place an order for the ${currentItem.name} (${currentItem.weight}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900 font-bold text-xs tracking-wider uppercase text-center shadow-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Order: {CONTACT_SECONDARY}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
