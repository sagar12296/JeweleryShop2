import React from 'react';
import DiamondLogo from './DiamondLogo';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube, 
  MessageCircle, 
  ShieldCheck, 
  ArrowUp 
} from 'lucide-react';
import { CONTACT_PRIMARY, CONTACT_SECONDARY, getWhatsAppOrderLink } from '../data/products';

export default function Footer({ onCategoryClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] text-gray-400 text-xs border-t border-[#D4AF37]/30 relative overflow-hidden">
      
      {/* Subtle Gold Shimmer Top Border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent w-full" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Brand Banner Section with Diamond Line-Art Logo */}
        <div className="text-center space-y-4 pb-14 border-b border-white/10 flex flex-col items-center">
          
          <DiamondLogo 
            className="w-10 h-7" 
            size="lg" 
            subtitle="22KT GOLD • GILL VILLAGE, LUDHIANA (141116)" 
          />

          {/* Exact Required Punjabi Tagline */}
          <div className="pt-2">
            <div className="inline-block px-6 py-2.5 rounded-full bg-[#14141A] border border-[#D4AF37]/40 shadow-gold-sm">
              <p className="font-gurmukhi text-lg sm:text-2xl text-[#FFF0C8] font-bold">
                💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
              </p>
            </div>
          </div>

          <p className="max-w-xl mx-auto text-xs text-gray-400 font-light leading-relaxed pt-2">
            Punjab’s trusted landmark showroom in Ludhiana for 100% BIS 916 Hallmarked 22KT ready-made gold jewellery, royal bridal trousseaus, and generational heirlooms.
          </p>

        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-white/10">
          
          {/* Col 1: Showroom & Flagship */}
          <div className="space-y-4">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-[0.2em] border-l-2 border-[#D4AF37] pl-2.5">
              Gill Village Showroom
            </h4>
            <div className="space-y-2.5 text-xs text-gray-400 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Near Jutti Market, Gill Village, Ludhiana, Punjab 141116, India</span>
              </p>
              <div className="space-y-1">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <a href={`tel:+91${CONTACT_PRIMARY}`} className="text-white hover:underline">
                    +91 {CONTACT_PRIMARY}
                  </a>
                </p>
                <p className="flex items-center gap-2 pl-6">
                  <a href={`tel:+91${CONTACT_SECONDARY}`} className="text-white hover:underline">
                    +91 {CONTACT_SECONDARY}
                  </a>
                </p>
              </div>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Mon – Sat: 10:30 AM – 8:30 PM<br />Sun: 11:30 AM – 6:30 PM</span>
              </p>
            </div>
          </div>

          {/* Col 2: 22KT Collections */}
          <div className="space-y-4">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-[0.2em] border-l-2 border-[#D4AF37] pl-2.5">
              22KT Jewellery
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Original 40g Chand Haar',
                'Bridal Sets & Rani Haar',
                'Necklaces & Chokers',
                'Sher-Mukhi Kadas & Bangles',
                'Chandbalis & Jhumkas',
                'Solid 22KT Gold Chains',
                'Sacred Pendants & Rings'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#collections" 
                    className="hover:text-[#F7E7B4] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37] text-[10px]">›</span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-[0.2em] border-l-2 border-[#D4AF37] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: '40g Original Masterpiece', href: '#collections' },
                { name: 'Today Gold Rate (Ludhiana)', href: '#hero' },
                { name: 'About Dhunna Jewellers', href: '#about' },
                { name: 'Timeless Bridal Elegance', href: '#bridal' },
                { name: 'The Art of 22KT Gold', href: '#art-of-gold' },
                { name: 'Showroom Visit & Map', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-[#F7E7B4] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37] text-[10px]">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct WhatsApp Order Placement */}
          <div className="space-y-4">
            <h4 className="text-xs font-heading font-bold text-white uppercase tracking-[0.2em] border-l-2 border-[#D4AF37] pl-2.5">
              Order on WhatsApp
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Send reference pictures or enquire about ready-made 22KT jewellery directly on our two order placement lines:
            </p>

            <div className="space-y-2">
              <a
                href={getWhatsAppOrderLink(CONTACT_PRIMARY, 'Hello Dhunna Jewellers, I would like to place an order for 22KT Gold Jewellery.')}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-xs tracking-wider uppercase block text-center shadow-gold-sm hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>WhatsApp: {CONTACT_PRIMARY}</span>
              </a>

              <a
                href={getWhatsAppOrderLink(CONTACT_SECONDARY, 'Hello Dhunna Jewellers, I would like to place an order for 22KT Gold Jewellery.')}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-bold text-xs tracking-wider uppercase block text-center hover:bg-emerald-900 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {CONTACT_SECONDARY}</span>
              </a>
            </div>

            {/* Social Icons & Official Instagram ID */}
            <div className="pt-2 flex flex-col gap-2">
              <a 
                href="https://instagram.com/dhunna_jewellers__" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs text-[#F7E7B4] hover:text-white"
              >
                <div className="p-2 rounded-lg bg-[#14141A] hover:bg-[#D4AF37] text-gray-300 hover:text-black border border-white/10 transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <span className="font-medium">@dhunna_jewellers__</span>
              </a>

              <div className="flex items-center gap-3 pt-1">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook page" 
                  className="p-2 rounded-lg bg-[#14141A] hover:bg-[#D4AF37] text-gray-300 hover:text-black border border-white/10 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="YouTube channel" 
                  className="p-2 rounded-lg bg-[#14141A] hover:bg-[#D4AF37] text-gray-300 hover:text-black border border-white/10 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Hallmark Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>BIS Hallmark Registration #BIS-916-DHUNNA-LDH | Ludhiana, Punjab</span>
          </div>

          <div className="text-center">
            &copy; {new Date().getFullYear()} DHUNNA JEWELLERS. All Rights Reserved.
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#D4AF37] hover:text-[#F7E7B4] transition-colors uppercase tracking-wider font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>

    </footer>
  );
}
