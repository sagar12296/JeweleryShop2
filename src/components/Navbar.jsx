import React, { useState, useEffect } from 'react';
import DiamondLogo from './DiamondLogo';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  Phone, 
  Menu, 
  X, 
  Sparkles, 
  MapPin, 
  ShieldCheck,
  MessageCircle,
  ChevronDown
} from 'lucide-react';
import { GOLD_RATE_22KT, GOLD_RATE_LOCATION, CONTACT_PRIMARY, CONTACT_SECONDARY, getWhatsAppOrderLink } from '../data/products';

export default function Navbar({ 
  onOpenSearch, 
  onOpenWishlist, 
  wishlistCount, 
  onOpenEnquiryCart, 
  cartCount,
  onOpenRateCalculator,
  activeCurrency,
  onChangeCurrency,
  currencies
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Collections', href: '#collections' },
    { name: '40g Masterpiece', href: '#featured-40g', badge: 'Original' },
    { name: 'Bridal Heritage', href: '#bridal', badge: 'Royal' },
    { name: 'The Art of 22KT', href: '#art-of-gold' },
    { name: 'Why Dhunna', href: '#why-us' },
    { name: 'Showroom (LDH)', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Luxury Announcement & Punjabi Tagline Bar */}
      <div className="bg-gradient-to-r from-[#0E0E12] via-[#1B1914] to-[#0E0E12] text-[#D8B85C] border-b border-[#D4AF37]/20 text-xs py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          
          {/* Exact Punjabi Tagline & Ludhiana Origin */}
          <div className="flex items-center gap-2 justify-center">
            <span className="text-sm">💎</span>
            <span className="font-semibold tracking-wide font-gurmukhi text-sm text-[#F7E7B4]">
              ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
            </span>
            <span className="hidden sm:inline-block text-[#D4AF37]/40">•</span>
            <span className="hidden sm:inline-block text-gray-300 font-light tracking-wider uppercase text-[11px]">
              Gill Village, Ludhiana (141116)
            </span>
          </div>

          {/* Live Gold Rate in Ludhiana, Punjab & Direct WhatsApp Order Line */}
          <div className="flex items-center gap-4 text-[11px]">
            <button 
              onClick={onOpenRateCalculator}
              className="flex items-center gap-1.5 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/25 text-[#F7E7B4] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30 transition-all cursor-pointer group"
              title="Click to view accurate today's rate in Ludhiana, Punjab"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium text-gray-300">Today in LDH (Punjab) 22KT:</span>
              <span className="font-bold text-white font-mono">₹{GOLD_RATE_22KT.toLocaleString('en-IN')}/g</span>
              <span className="text-[10px] text-[#D4AF37] group-hover:translate-x-0.5 transition-transform">↗</span>
            </button>

            {/* Direct Order WhatsApp Links */}
            <div className="hidden md:flex items-center gap-2 text-gray-300 font-mono text-[11px]">
              <span className="text-[#C5A059] uppercase text-[10px] font-sans font-bold">WhatsApp Orders:</span>
              <a 
                href={getWhatsAppOrderLink(CONTACT_PRIMARY, 'Hello Dhunna Jewellers, I want to place an order for 22KT gold jewellery.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F7E7B4] hover:text-white hover:underline flex items-center gap-1"
                title="Direct WhatsApp Order Line 1"
              >
                <MessageCircle className="w-3 h-3 text-emerald-400" />
                <span>{CONTACT_PRIMARY}</span>
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href={getWhatsAppOrderLink(CONTACT_SECONDARY, 'Hello Dhunna Jewellers, I want to place an order for 22KT gold jewellery.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F7E7B4] hover:text-white hover:underline flex items-center gap-1"
                title="Direct WhatsApp Order Line 2"
              >
                <span>{CONTACT_SECONDARY}</span>
              </a>
            </div>

            {/* Currency Selector */}
            <div className="hidden lg:flex items-center gap-1 bg-[#141418] px-2 py-0.5 rounded border border-[#D4AF37]/20 text-gray-300">
              <span className="text-[10px] text-gray-400">Currency:</span>
              <select 
                value={activeCurrency}
                onChange={(e) => onChangeCurrency(e.target.value)}
                aria-label="Select currency"
                className="bg-transparent text-[#F7E7B4] text-[11px] font-medium outline-none cursor-pointer"
              >
                {Object.keys(currencies).map((curr) => (
                  <option key={curr} value={curr} className="bg-[#18181D] text-white">
                    {curr} ({currencies[curr].symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Luxury Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0A0C]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-gold-sm py-3' 
          : 'bg-[#0A0A0C]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-[#D4AF37] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Brand Logo & Heritage Title matching exact format from showroom photo */}
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="group cursor-pointer"
            >
              <DiamondLogo 
                className="w-7 h-5 sm:w-8 sm:h-6" 
                size="default" 
                subtitle="22KT GOLD • GILL VILLAGE, LDH" 
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="relative text-xs uppercase tracking-[0.18em] font-medium text-gray-300 hover:text-[#F7E7B4] transition-colors py-1 group"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="ml-1 text-[8px] bg-[#D4AF37]/20 text-[#D4AF37] px-1.5 py-0.5 rounded uppercase tracking-wider font-semibold border border-[#D4AF37]/30">
                      {link.badge}
                    </span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-[#F7E7B4] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Header Right Action Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              
              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                aria-label="Search jewellery"
                className="p-2 text-gray-300 hover:text-[#D4AF37] hover:bg-white/5 rounded-full transition-all"
                title="Search 22KT Jewellery"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <button
                onClick={onOpenWishlist}
                aria-label="Saved Wishlist"
                className="relative p-2 text-gray-300 hover:text-[#D4AF37] hover:bg-white/5 rounded-full transition-all"
                title="View Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-[#D4AF37] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-gold-sm">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Enquiry / Trousseau Bag Button */}
              <button
                onClick={onOpenEnquiryCart}
                aria-label="Enquiry Bag"
                className="relative p-2 text-gray-300 hover:text-[#D4AF37] hover:bg-white/5 rounded-full transition-all"
                title="Enquiry Trousseau Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-gradient-to-br from-[#F7E7B4] to-[#C5A059] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-gold-sm">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* WhatsApp Direct Order Placement Dropdown / Button */}
              <div className="relative">
                <a
                  href={getWhatsAppOrderLink(CONTACT_PRIMARY, 'Hello Dhunna Jewellers, I would like to place an order for 22KT Gold Jewellery.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#18281E] text-emerald-400 border border-emerald-500/30 hover:bg-[#1E3727] hover:border-emerald-400 hover:text-emerald-300 transition-all shadow-sm"
                  title={`Order directly on WhatsApp: ${CONTACT_PRIMARY} or ${CONTACT_SECONDARY}`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                  <span>WhatsApp Order</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0E0E12] border-b border-[#D4AF37]/30 px-6 py-5 mt-2 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              
              {/* Punjabi Tagline Card in Mobile */}
              <div className="p-3 bg-[#18181D] rounded border border-[#D4AF37]/20 text-center">
                <p className="font-gurmukhi text-[#F7E7B4] text-sm font-semibold">
                  💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
                </p>
                <p className="text-[10px] text-gray-400 tracking-wider uppercase mt-0.5">
                  Near Jutti Market, Gill Village, Ludhiana (141116)
                </p>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-sm font-medium tracking-wider text-gray-200 hover:text-[#D4AF37] flex items-center justify-between py-1 border-b border-white/5"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-0.5 rounded">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}

              {/* Mobile Rate & Direct WhatsApp Order Redirection */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRateCalculator();
                  }}
                  className="w-full text-center py-2 bg-[#D4AF37]/10 text-[#F7E7B4] rounded border border-[#D4AF37]/30 text-xs font-medium"
                >
                  Today in Ludhiana: 22KT ₹{GOLD_RATE_22KT.toLocaleString('en-IN')}/g (Open Calculator)
                </button>

                {/* Direct Order WhatsApp Buttons */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block text-center">
                    Direct Order Placement on WhatsApp:
                  </span>
                  <a
                    href={getWhatsAppOrderLink(CONTACT_PRIMARY, 'Hello Dhunna Jewellers, I want to place an order for 22KT gold jewellery.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Order: {CONTACT_PRIMARY}</span>
                  </a>
                  <a
                    href={getWhatsAppOrderLink(CONTACT_SECONDARY, 'Hello Dhunna Jewellers, I want to place an order for 22KT gold jewellery.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-lg bg-emerald-950/70 text-emerald-300 border border-emerald-500/30 text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Order: {CONTACT_SECONDARY}</span>
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-300 px-1 py-1 mt-1">
                  <span>Display Currency:</span>
                  <select 
                    value={activeCurrency}
                    onChange={(e) => onChangeCurrency(e.target.value)}
                    aria-label="Select display currency"
                    className="bg-[#18181D] text-[#F7E7B4] text-xs px-2 py-1 rounded border border-[#D4AF37]/30"
                  >
                    {Object.keys(currencies).map((curr) => (
                      <option key={curr} value={curr}>
                        {curr} ({currencies[curr].symbol})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
