import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  MessageCircle, 
  PhoneCall, 
  ShieldCheck, 
  Sparkles, 
  Scale, 
  Calendar, 
  Share2, 
  Check, 
  ShoppingBag,
  Award,
  ChevronRight,
  Camera
} from 'lucide-react';
import { 
  GOLD_RATE_22KT, 
  GOLD_RATE_LOCATION, 
  CONTACT_PRIMARY, 
  CONTACT_SECONDARY, 
  getWhatsAppOrderLink 
} from '../data/products';

export default function ProductDetailModal({ 
  product, 
  onClose, 
  onToggleWishlist, 
  isWishlisted,
  onAddToEnquiryCart,
  isInCart,
  formatPrice,
  onOpenBooking
}) {
  if (!product) return null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const images = product.images && product.images.length > 0 ? product.images : [
    '/images/dhunna-40g-necklace.jpg'
  ];

  const getOrderMessage = () => {
    return `Hello DHUNNA JEWELLERS (Ludhiana),%0A%0AI want to place an order for this 22KT Gold Masterpiece:%0A• Product: ${encodeURIComponent(product.name)}%0A• Code: ${product.id.toUpperCase()}%0A• Gross Weight: ${product.grossWeight}g (22KT 916 Hallmark)%0A• Price: ${encodeURIComponent(formatPrice(product.price))}%0A• Today's Ludhiana Benchmark Rate Applied: ₹${GOLD_RATE_22KT}/g%0A%0APlease share order confirmation, bank/UPI details, and delivery/pickup schedule.`;
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl bg-[#121217] border border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-2xl text-white my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0E0E12]">
          <div className="flex items-center gap-2">
            <span className="font-gurmukhi text-[#F7E7B4] text-xs font-semibold">
              💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-[11px] text-[#D4AF37] font-mono tracking-wider uppercase">
              {product.id.toUpperCase()}
            </span>
            {product.isOriginalShowroomPiece && (
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold uppercase">
                <Camera className="w-3 h-3" />
                <span>{product.badgeText || "Original Showroom Photo"}</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              aria-label="Share product link"
              className="p-2 text-gray-400 hover:text-[#D4AF37] rounded-full hover:bg-white/5 transition-colors"
              title="Copy Link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => onToggleWishlist(product)}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              className={`p-2 rounded-full hover:bg-white/5 transition-colors ${
                isWishlisted ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-white'
              }`}
              title={isWishlisted ? "In Wishlist" : "Save to Wishlist"}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Scrollable */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Gallery Column */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Primary Large Image */}
              <div className="relative aspect-[4/4.5] rounded-xl overflow-hidden bg-[#18181E] border border-[#D4AF37]/40 group">
                <img
                  src={images[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Top Badges: Purity Left & Exact Weight Right */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                  <div className="bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/40 flex items-center gap-2 shadow-md">
                    <Award className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-[11px] font-bold text-[#F7E7B4] tracking-wider uppercase">
                      22KT GOLD (BIS 916)
                    </span>
                  </div>

                  <div className="bg-[#0E0E12]/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/50 text-xs font-mono font-bold text-[#F7E7B4] shadow-md">
                    {product.grossWeight}g
                  </div>
                </div>

                {/* Bottom Unified Brand Strip (No Overlap, Inside Frame) */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/95 via-black/75 to-transparent flex items-center justify-between gap-2 z-10">
                  <div className="flex items-center gap-2 min-w-0">
                    <svg 
                      viewBox="0 0 100 70" 
                      className="w-5 h-3.5 text-[#D4AF37] flex-shrink-0" 
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
                    <span className="font-serif italic text-xs text-[#F7E7B4] tracking-wide truncate">
                      Dhunna Jewellers & Sons
                    </span>
                    <span className="text-gray-400 font-sans text-[10px] hidden sm:inline">• Gill Village (LDH)</span>
                  </div>

                  <span className="px-2 py-0.5 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F7E7B4] text-[10px] font-mono font-bold uppercase whitespace-nowrap">
                    BIS 916
                  </span>
                </div>
              </div>

              {/* Thumbnail Selector */}
              {images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                        selectedImageIndex === idx 
                          ? 'border-[#D4AF37] shadow-gold-sm scale-105' 
                          : 'border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${product.name} thumb ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Mandatory Prominent Note */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#2A2315] to-[#1B1914] border border-[#D4AF37]/40 text-center">
                <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#F7E7B4] uppercase flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>All jewellery featured is crafted in 22KT gold.</span>
                </p>
                <p className="text-[11px] text-gray-300 mt-1">
                  BIS 916 Hallmarked in Ludhiana, Punjab. Certified 91.67% pure bullion gold.
                </p>
              </div>

              {/* Luxury Box Presentation Callout */}
              <div className="p-3.5 rounded-xl bg-[#14141A] border border-[#D4AF37]/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-white tracking-wider">
                    Presented Inside Luxury Velvet Showroom Box
                  </h4>
                  <p className="text-[11px] text-gray-300">
                    Each design is packaged in our signature Dhunna Jewellers & Sons velvet tray case with electronic weigh-scale certificate.
                  </p>
                </div>
              </div>

            </div>

            {/* Product Meta & Order Placement Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#C5A059] uppercase tracking-widest font-semibold">
                  <span>{product.subcategory}</span>
                  <span>•</span>
                  <span>Dhunna Jewellers Ludhiana</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-wide">
                  {product.name}
                </h2>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 pt-2">
                  <span className="text-2xl sm:text-3xl font-heading font-bold text-[#F7E7B4] gold-text-gradient">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-xs text-gray-400 font-light font-mono">
                    (@ ₹{GOLD_RATE_22KT.toLocaleString('en-IN')}/g in Ludhiana today)
                  </span>
                </div>
              </div>

              {/* Specifications Highlight Matrix */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#181820] border border-white/10 text-xs">
                <div>
                  <span className="text-gray-400 block text-[11px] uppercase tracking-wider">Gold Purity</span>
                  <span className="font-semibold text-white">22KT (91.6% Pure Gold)</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[11px] uppercase tracking-wider">Gross Weight</span>
                  <span className="font-semibold font-mono text-[#F7E7B4] text-sm">{product.grossWeight} grams</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[11px] uppercase tracking-wider">Certification</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> BIS 916 Hallmarked
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[11px] uppercase tracking-wider">Showroom City</span>
                  <span className="font-semibold text-white">Ludhiana, Punjab</span>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                  Masterpiece Description
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {product.description}
                </p>
              </div>

              {/* Cultural Significance */}
              {product.culturalSignificance && (
                <div className="p-3.5 rounded-lg bg-[#19191E] border-l-2 border-[#D4AF37] text-xs text-gray-300 leading-relaxed">
                  <strong className="text-[#F7E7B4] block mb-1">Heritage Value:</strong>
                  {product.culturalSignificance}
                </div>
              )}

              {/* Detailed Spec Sheet Table */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                  Detailed Specifications
                </h4>
                <div className="rounded-lg border border-white/10 overflow-hidden divide-y divide-white/5 text-xs">
                  {Object.entries(product.specifications || {}).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-2 px-3 bg-[#16161C]/50">
                      <span className="text-gray-400">{key}</span>
                      <span className="font-medium text-white text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Order Placement on WhatsApp to BOTH (7986013912 & 8054444423) */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                  Place Order Directly on WhatsApp:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  
                  {/* WhatsApp Line 1 */}
                  <a
                    href={`https://wa.me/91${CONTACT_PRIMARY}?text=${getOrderMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-xs tracking-wider uppercase text-center shadow-gold-sm hover:brightness-110 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>Order via {CONTACT_PRIMARY}</span>
                  </a>

                  {/* WhatsApp Line 2 */}
                  <a
                    href={`https://wa.me/91${CONTACT_SECONDARY}?text=${getOrderMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-4 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900 font-bold text-xs tracking-wider uppercase text-center shadow-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Order via {CONTACT_SECONDARY}</span>
                  </a>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  
                  {/* Call Showroom Directly */}
                  <a
                    href={`tel:+91${CONTACT_PRIMARY}`}
                    className="py-2.5 px-4 rounded-xl bg-[#1C1C24] hover:bg-[#262632] border border-white/10 text-white font-medium text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                    <span>Call Showroom</span>
                  </a>

                  {/* Add to Enquiry Bag */}
                  <button
                    onClick={() => onAddToEnquiryCart(product)}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2 ${
                      isInCart
                        ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
                        : 'bg-[#1C1C24] hover:bg-[#262632] border-white/10 text-gray-200 hover:text-white'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                    <span>{isInCart ? 'In Trousseau ✓' : 'Add to Trousseau'}</span>
                  </button>

                </div>

                {/* Book Private Video / Showroom Tour */}
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking(product);
                  }}
                  className="w-full py-2 text-xs text-[#C5A059] hover:text-[#F7E7B4] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Private Showroom Viewing in Ludhiana</span>
                  <ChevronRight className="w-3 h-3" />
                </button>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
