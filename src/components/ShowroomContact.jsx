import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Instagram, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  Navigation, 
  ShieldCheck,
  Sparkles,
  Camera,
  Eye,
  X
} from 'lucide-react';
import { CONTACT_PRIMARY, CONTACT_SECONDARY, SHOWROOM_GALLERY, getWhatsAppOrderLink } from '../data/products';

export default function ShowroomContact({ prefilledProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: prefilledProduct ? `Order Placement: ${prefilledProduct.name}` : 'Bridal Trousseau Consultation (40g/Heirloom)',
    preferredDate: '',
    preferredTime: 'Afternoon (1:00 PM - 4:00 PM)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedShowroomPhoto, setSelectedShowroomPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0B0B0E] relative border-t border-[#D4AF37]/20">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#181820] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
            Ludhiana (Punjab) Showroom
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-wide uppercase">
            VISIT <span className="gold-text-gradient">DHUNNA JEWELLERS</span>
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            <p className="font-gurmukhi text-xl sm:text-2xl text-[#F7E7B4] font-bold">
              💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
            </p>
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
          </div>

          <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Visit our physical showroom in Gill Village, Ludhiana, Punjab. Inspect our 100% 22KT gold ready-made jewellery, examine our authentic 40g Chand Haar & box sets in person, and place orders directly with our master jewellers.
          </p>
        </div>

        {/* Real Showroom Interior Photography Gallery */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-[#D4AF37]" />
              <div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white uppercase tracking-wider">
                  OUR PHYSICAL SHOWROOM IN GILL VILLAGE (LDH)
                </h3>
                <span className="text-[11px] text-[#C5A059] font-sans">
                  Authentic Showroom Photographs • Near Jutti Market, Gill Village, Ludhiana
                </span>
              </div>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold uppercase">
              Walk-in Showroom Verified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SHOWROOM_GALLERY.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedShowroomPhoto(item)}
                className="group relative rounded-2xl overflow-hidden bg-[#16161D] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 shadow-xl cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/40 text-[10px] font-bold text-[#F7E7B4] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <Camera className="w-3 h-3 text-[#D4AF37]" />
                    <span>{item.tag}</span>
                  </div>

                  {/* Quick Expand Button */}
                  <div className="absolute top-3 right-3 p-2 bg-black/70 backdrop-blur-md rounded-full text-white/80 group-hover:text-white transition-colors">
                    <Eye className="w-4 h-4" />
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 space-y-1">
                    <h4 className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-[#F7E7B4] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-300 line-clamp-2 font-light">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Grid: Contact Information & Appointment Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Showroom Details & Google Maps Placeholder */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Showroom Information Card */}
            <div className="bg-[#131318] rounded-2xl p-7 sm:p-8 border border-[#D4AF37]/25 space-y-6 shadow-xl">
              
              <div className="border-b border-white/10 pb-5">
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] font-semibold block mb-1">
                  Flagship Showroom • Ludhiana, Punjab
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase">
                  DHUNNA JEWELLERS
                </h3>
                <p className="text-xs text-[#C5A059] mt-0.5">
                  22KT Gold Bullion & Ready-Made Jewellery • BIS 916
                </p>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-xs">
                
                {/* Address in Gill Village, Ludhiana, Punjab */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#1C1C24] text-[#D4AF37] flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">Showroom Address</h4>
                    <p className="text-gray-300 mt-0.5 leading-relaxed">
                      Near Jutti Market, Gill Village,<br />
                      Ludhiana, Punjab 141116, India
                    </p>
                  </div>
                </div>

                {/* Updated Phone Numbers: 7986013912 & 8054444423 */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#1C1C24] text-[#D4AF37] flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">Direct Order Placement Numbers</h4>
                    <div className="flex flex-wrap items-center gap-3 mt-1 font-mono text-sm">
                      <a href={`tel:+91${CONTACT_PRIMARY}`} className="text-[#F7E7B4] hover:underline font-bold">
                        +91 {CONTACT_PRIMARY}
                      </a>
                      <span className="text-gray-500">•</span>
                      <a href={`tel:+91${CONTACT_SECONDARY}`} className="text-[#F7E7B4] hover:underline font-bold">
                        +91 {CONTACT_SECONDARY}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp & Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 flex-shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">WhatsApp Concierge & Orders</h4>
                    <p className="text-gray-300 mt-0.5">
                      Direct chat on <strong>{CONTACT_PRIMARY}</strong> or <strong>{CONTACT_SECONDARY}</strong>
                    </p>
                    <p className="text-xs text-[#D4AF37] mt-1 flex items-center gap-1.5">
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Instagram: </span>
                      <a 
                        href="https://instagram.com/dhunna_jewellers____" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-white font-medium"
                      >
                        @dhunna_jewellers____
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#1C1C24] text-[#D4AF37] flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">Showroom Hours (Ludhiana)</h4>
                    <p className="text-gray-300 mt-0.5 leading-relaxed">
                      Monday to Saturday: 10:30 AM – 8:30 PM<br />
                      Sunday: 11:30 AM – 6:30 PM
                    </p>
                  </div>
                </div>

              </div>

              {/* CTAs Directly Redirecting to WhatsApp for Order Placement */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                
                {/* GET DIRECTIONS */}
                <a
                  href="https://maps.google.com/?q=Gill+Village+Near+Jutti+Market+Ludhiana+141116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-[#1C1C24] hover:bg-[#282834] text-[#F7E7B4] border border-[#D4AF37]/30 text-[11px] font-semibold tracking-wider uppercase text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>DIRECTIONS</span>
                </a>

                {/* CALL NOW */}
                <a
                  href={`tel:+91${CONTACT_PRIMARY}`}
                  className="py-3 px-3 rounded-xl bg-[#1C1C24] hover:bg-[#282834] text-white border border-white/10 text-[11px] font-semibold tracking-wider uppercase text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>CALL NOW</span>
                </a>

                {/* WHATSAPP US */}
                <a
                  href={getWhatsAppOrderLink(CONTACT_PRIMARY, 'Hello Dhunna Jewellers, I would like to place an order for 22KT gold jewellery.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black text-[11px] font-bold tracking-wider uppercase text-center transition-all shadow-sm flex items-center justify-center gap-1.5 hover:brightness-110"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-black" />
                  <span>WHATSAPP US</span>
                </a>

              </div>

            </div>

            {/* Google Maps Integration for Ludhiana, Punjab */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#141419] h-56 sm:h-64 shadow-xl">
              <div className="absolute inset-0 bg-[#16161D] opacity-90">
                <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                  <path d="M 0 50 Q 150 90 300 40 T 600 120" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.4" />
                </svg>
              </div>

              {/* Centered Map Pin */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10 bg-gradient-to-t from-black/80 via-transparent to-black/40">
                <div className="p-3 bg-[#D4AF37] text-black rounded-full shadow-gold-glow animate-bounce">
                  <MapPin className="w-6 h-6 fill-current" />
                </div>
                <h4 className="font-heading font-bold text-white text-base mt-2 uppercase tracking-wide">
                  DHUNNA JEWELLERS GILL VILLAGE
                </h4>
                <p className="text-[11px] text-gray-300">
                  Near Jutti Market, Gill Village, Ludhiana, Punjab 141116
                </p>
                <div className="mt-3 flex gap-2">
                  <a
                    href="https://maps.google.com/?q=Gill+Village+Near+Jutti+Market+Ludhiana+141116"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-[#1F1F28] hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/40 text-xs font-semibold text-[#F7E7B4] tracking-wider uppercase transition-colors"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: VIP Consultation / Order Placement Booking Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#141419] rounded-2xl p-7 sm:p-9 border border-[#D4AF37]/35 shadow-2xl relative">
              
              <div className="space-y-1 mb-6 border-b border-white/10 pb-5">
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] font-semibold">
                  Direct Concierge • Ludhiana, Punjab
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase">
                  ORDER PLACEMENT & SHOWROOM BOOKING
                </h3>
                <p className="text-xs text-gray-400 font-light">
                  Direct connection with Dhunna Jewellers on <strong>{CONTACT_PRIMARY}</strong> & <strong>{CONTACT_SECONDARY}</strong>.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 mx-auto flex items-center justify-center shadow-gold-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white">
                    Order Request Received
                  </h4>
                  <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#F7E7B4]">{formData.name}</strong>. Our Ludhiana showroom manager is connecting with you on WhatsApp at <strong>{formData.phone}</strong>.
                  </p>

                  <div className="pt-3 flex justify-center gap-2">
                    <a
                      href={getWhatsAppOrderLink(CONTACT_PRIMARY, `Hello Dhunna Jewellers, I have submitted an order request for ${formData.serviceType} (Name: ${formData.name}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-xs font-bold uppercase flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on {CONTACT_PRIMARY}</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <p className="font-gurmukhi text-sm text-[#F7E7B4] font-bold">
                      💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-1 uppercase tracking-wider text-[11px]">
                      Your Name / Family Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sardar Gurpreet Singh / Ms. Simran"
                      className="w-full bg-[#1C1C24] border border-white/10 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white outline-none transition-colors"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-medium mb-1 uppercase tracking-wider text-[11px]">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 79860 13912"
                        className="w-full bg-[#1C1C24] border border-white/10 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium mb-1 uppercase tracking-wider text-[11px]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full bg-[#1C1C24] border border-white/10 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service / Occasion Type */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-1 uppercase tracking-wider text-[11px]">
                      Jewellery Item / Order Requirement
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-[#1C1C24] border border-white/10 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white outline-none cursor-pointer"
                    >
                      <option value="Original 40g Royal Chand Haar">Original 40g Royal Punjabi Chand Haar (Exact Showroom Piece)</option>
                      <option value="Bridal Trousseau Consultation">Complete Bridal Trousseau (Anand Karaj)</option>
                      <option value="22KT Rani Haar & Necklaces">22KT Rani Haar & Necklaces</option>
                      <option value="Sher-Mukhi Punjabi Kadas">Solid Sher-Mukhi Punjabi Kadas (45g)</option>
                      <option value="Gold Chains & Pendants">Solid 22KT Gold Chains & Khanda Pendants</option>
                      <option value="Ludhiana Showroom Visit">Showroom Private Appointment in Ludhiana</option>
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-medium mb-1 uppercase tracking-wider text-[11px]">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-[#1C1C24] border border-white/10 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium mb-1 uppercase tracking-wider text-[11px]">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full bg-[#1C1C24] border border-white/10 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white outline-none cursor-pointer"
                      >
                        <option value="Morning (11:00 AM - 1:00 PM)">Morning (11:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                        <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-1 uppercase tracking-wider text-[11px]">
                      Specific Requirements / Custom Weight
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Inquire about the 40g Chand Haar, bridal set delivery date, or custom sizing in Ludhiana..."
                      className="w-full bg-[#1C1C24] border border-white/10 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5C2] to-[#B38B3F] text-black font-bold text-xs sm:text-sm tracking-[0.2em] uppercase hover:brightness-110 transition-all shadow-gold-md cursor-pointer mt-2"
                  >
                    CONFIRM ORDER RESERVATION
                  </button>

                  <p className="text-[10px] text-gray-500 text-center">
                    Direct showroom hotline: +91 {CONTACT_PRIMARY} &nbsp;|&nbsp; +91 {CONTACT_SECONDARY}
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Showroom Photo Full-Screen Lightbox */}
      {selectedShowroomPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedShowroomPhoto(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-[#141419] rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/11]">
              <img 
                src={selectedShowroomPhoto.image} 
                alt={selectedShowroomPhoto.title} 
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedShowroomPhoto(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 text-white hover:text-[#D4AF37] border border-white/20 transition-colors"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 bg-[#0E0E12] space-y-2">
              <span className="text-[10px] text-[#C5A059] uppercase font-bold tracking-widest block">
                {selectedShowroomPhoto.tag}
              </span>
              <h3 className="text-xl font-heading font-bold text-white">
                {selectedShowroomPhoto.title}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {selectedShowroomPhoto.caption}
              </p>
              <div className="pt-2 flex justify-between items-center text-xs text-gray-400">
                <span>Near Jutti Market, Gill Village, Ludhiana, Punjab 141116</span>
                <a
                  href="https://maps.google.com/?q=Gill+Village+Near+Jutti+Market+Ludhiana+141116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-[#D4AF37] text-black font-semibold uppercase text-[11px] tracking-wider"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
