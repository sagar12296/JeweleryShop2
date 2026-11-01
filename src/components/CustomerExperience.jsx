import React, { useState } from 'react';
import { Star, Instagram, Quote, Sparkles, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import { TESTIMONIALS, INSTAGRAM_POSTS } from '../data/testimonials';
import { CONTACT_PRIMARY, CONTACT_SECONDARY, getWhatsAppOrderLink } from '../data/products';

export default function CustomerExperience({ onSelectProductByName }) {
  const [selectedInstaPost, setSelectedInstaPost] = useState(null);

  return (
    <section className="py-24 sm:py-32 bg-[#09090C] relative overflow-hidden">
      
      {/* Decorative Gold Radial Highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Part 1: Customer Testimonials & Bridal Stories */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#181820] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
              Treasured Stories • Ludhiana
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-wide uppercase">
              VOICES OF <span className="gold-text-gradient">VIRASAT</span>
            </h2>

            <div className="flex items-center justify-center gap-3">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              <p className="font-gurmukhi text-xl sm:text-2xl text-[#F7E7B4] font-bold">
                💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
              </p>
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>

            <p className="text-sm sm:text-base text-gray-400 font-light max-w-xl mx-auto">
              Real families from Ludhiana, Punjab and overseas NRI brides who purchased authentic 22KT gold from Dhunna Jewellers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#121217] rounded-2xl p-7 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl"
              >
                <div className="space-y-4">
                  
                  {/* Stars and Quote Mark */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 text-[#D4AF37]/30" />
                  </div>

                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light italic">
                    {t.quote}
                  </p>

                  <div className="p-2.5 rounded-lg bg-[#181820] border border-white/5 text-[11px] text-gray-300">
                    <span className="text-[#D4AF37] font-semibold block text-[10px] uppercase tracking-wider">
                      Selected Masterpiece:
                    </span>
                    {t.jewelleryPurchased}
                  </div>
                </div>

                {/* Author Avatar and Bio */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#D4AF37]/40"
                  />
                  <div>
                    <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-[#C5A059]">{t.location}</p>
                    <p className="text-[10px] text-gray-500">{t.weddingOccasion}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Instagram-Style Luxury Gallery (with Original 40g piece as lead post) */}
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10 text-center sm:text-left">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-1">
                <Instagram className="w-4 h-4" />
                <span>@dhunna_jewellers__ on Instagram</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white uppercase">
                THE GILL VILLAGE (LDH) SHOWROOM FEED
              </h3>
            </div>

            <a
              href="https://instagram.com/dhunna_jewellers__"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#1A1A22] border border-[#D4AF37]/30 text-[#F7E7B4] hover:bg-[#D4AF37] hover:text-black text-xs font-semibold tracking-wider uppercase transition-all duration-300"
            >
              Follow @dhunna_jewellers__
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedInstaPost(post)}
                className="group relative aspect-square rounded-xl overflow-hidden bg-[#181820] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.productTag}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-white">
                  <div className="flex justify-end">
                    <Instagram className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-300 line-clamp-2">
                      {post.caption}
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-[#F7E7B4] font-semibold">
                      <Heart className="w-3 h-3 fill-current text-rose-400" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Part 3: VIP Order Placement CTA Box */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#171612] via-[#242016] to-[#171612] border border-[#D4AF37]/50 p-8 sm:p-12 shadow-2xl text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Ludhiana Showroom Hotline
            </span>
            <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-wide uppercase">
              READY TO PLACE AN ORDER OR INQUIRE ABOUT 40g PIECE?
            </h3>
            
            <p className="font-gurmukhi text-lg sm:text-xl text-[#F7E7B4] font-bold">
              💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
            </p>

            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              Order directly via WhatsApp on our two dedicated lines in Ludhiana, Punjab. Receive high-definition photos, custom weight options, and real-time quotation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsAppOrderLink(CONTACT_PRIMARY, 'Hello Dhunna Jewellers, I want to place an order for 22KT Gold Jewellery.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5C2] to-[#B38B3F] text-black font-bold text-xs sm:text-sm tracking-wider uppercase hover:brightness-110 transition-all shadow-gold-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>WhatsApp Order ({CONTACT_PRIMARY})</span>
            </a>

            <a
              href={getWhatsAppOrderLink(CONTACT_SECONDARY, 'Hello Dhunna Jewellers, I want to place an order for 22KT Gold Jewellery.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900 text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Order ({CONTACT_SECONDARY})</span>
            </a>
          </div>
        </div>

      </div>

      {/* Instagram Post Detail Modal */}
      {selectedInstaPost && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedInstaPost(null)}
        >
          <div 
            className="bg-[#141419] border border-[#D4AF37]/40 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedInstaPost.image} alt={selectedInstaPost.productTag} className="w-full aspect-square object-cover" />
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#D4AF37]">
                <span className="font-semibold">{selectedInstaPost.productTag}</span>
                <span>{selectedInstaPost.likes} likes</span>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed font-light">
                {selectedInstaPost.caption}
              </p>
              <div className="pt-2 flex justify-between items-center">
                <a
                  href={getWhatsAppOrderLink(CONTACT_PRIMARY, `Hello Dhunna Jewellers, I saw this post on your Instagram: ${selectedInstaPost.productTag}. I want to place an order.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-black" />
                  <span>Order Piece</span>
                </a>
                <button
                  onClick={() => setSelectedInstaPost(null)}
                  className="px-3 py-1.5 text-gray-400 hover:text-white text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
