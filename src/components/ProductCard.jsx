import React from 'react';
import { Heart, Eye, MessageCircle, ShoppingBag, ShieldCheck, Sparkles } from 'lucide-react';
import { CONTACT_PRIMARY, CONTACT_SECONDARY, getWhatsAppOrderLink } from '../data/products';

export default function ProductCard({ 
  product, 
  onViewDetails, 
  onToggleWishlist, 
  isWishlisted, 
  onAddToEnquiryCart,
  isInCart,
  formatPrice
}) {
  const handleWhatsAppOrder = (e) => {
    e.stopPropagation();
    const message = `Hello DHUNNA JEWELLERS (Ludhiana), I want to place an order for the "${product.name}" (22KT Gold, Weight: ${product.grossWeight}g, Code: ${product.id.toUpperCase()}). Please share payment details and order confirmation.`;
    window.open(getWhatsAppOrderLink(CONTACT_PRIMARY, message), '_blank');
  };

  return (
    <div 
      onClick={() => onViewDetails(product)}
      className={`group relative bg-[#121217] rounded-xl overflow-hidden border transition-all duration-500 hover:shadow-gold-md flex flex-col justify-between cursor-pointer ${
        product.isOriginalShowroomPiece 
          ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]/50 shadow-gold-sm' 
          : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/60'
      }`}
    >
      {/* Top Media Area */}
      <div className="relative aspect-[4/4.5] overflow-hidden bg-[#18181E]">
        
        {/* Main Product Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
          loading="lazy"
        />

        {/* Ambient Dark-to-Transparent Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isOriginalShowroomPiece ? (
            <span className="px-2.5 py-1 bg-[#D4AF37] text-black font-extrabold text-[10px] tracking-wider rounded uppercase shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-black" />
              <span>{product.badgeText || "ORIGINAL SHOWROOM PHOTO"}</span>
            </span>
          ) : (
            <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md text-[#F7E7B4] border border-[#D4AF37]/40 text-[10px] font-bold tracking-wider rounded uppercase">
              22KT GOLD (BIS 916)
            </span>
          )}

          {product.isNew && !product.isOriginalShowroomPiece && (
            <span className="px-2 py-0.5 bg-[#C5A059] text-black text-[9px] font-bold tracking-widest rounded uppercase">
              NEW ARRIVAL
            </span>
          )}
        </div>

        {/* Wishlist Toggle Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-10 ${
            isWishlisted 
              ? 'bg-[#D4AF37] text-black shadow-gold-sm' 
              : 'bg-black/60 text-white/80 hover:text-[#D4AF37] hover:bg-black/90'
          }`}
          title={isWishlisted ? "In Wishlist" : "Save to Wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Exact Gold Weight Badge */}
        <div className="absolute bottom-3 left-3 bg-[#0E0E12]/90 backdrop-blur-md px-2.5 py-1 rounded border border-[#D4AF37]/40 text-white text-[11px] font-mono font-medium flex items-center gap-1.5 z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          <span>Weight: <strong className="text-[#F7E7B4]">{product.grossWeight}g</strong></span>
        </div>

        {/* Quick View Hover Pill */}
        <div className="absolute inset-x-3 bottom-3 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <span className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black text-xs font-semibold uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" />
            <span>View Full Details</span>
          </span>
        </div>

      </div>

      {/* Card Content & Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] text-[#C5A059] uppercase tracking-wider font-medium">
            <span>{product.subcategory}</span>
            <span className="text-emerald-400 font-mono text-[10px] flex items-center gap-1">
              <span>Velvet Box Case</span> • <span>916 LDH</span>
            </span>
          </div>

          <h3 className="font-heading font-bold text-white text-base sm:text-lg group-hover:text-[#F7E7B4] transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
            {product.shortDesc}
          </p>
        </div>

        {/* Price & Hallmark Trust */}
        <div className="pt-2 border-t border-white/5 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Estimated Price</span>
              <span className="text-lg sm:text-xl font-heading font-bold text-[#F7E7B4] tracking-wide">
                {formatPrice(product.price)}
              </span>
            </div>
            
            <span className="text-[10px] text-gray-400 font-mono">
              Ready in Showroom
            </span>
          </div>

          {/* Action Buttons: View Details & Direct WhatsApp Order */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            
            {/* View Details Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(product);
              }}
              className="py-2.5 px-3 rounded-lg bg-[#1D1D24] hover:bg-[#282832] text-gray-200 hover:text-white text-xs font-medium tracking-wider uppercase border border-white/10 transition-colors text-center"
            >
              Details
            </button>

            {/* Direct WhatsApp Order Placement Button */}
            <button
              onClick={handleWhatsAppOrder}
              className="py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:brightness-110 text-black text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-1.5"
              title="Place Order directly on WhatsApp (7986013912)"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>Order</span>
            </button>

          </div>

          {/* Add to Enquiry Bag / Trousseau */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToEnquiryCart(product);
            }}
            className={`w-full py-1.5 rounded text-[11px] font-medium tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors ${
              isInCart 
                ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40' 
                : 'text-gray-400 hover:text-[#F7E7B4] hover:bg-white/5'
            }`}
          >
            <ShoppingBag className="w-3 h-3" />
            <span>{isInCart ? 'In Trousseau Bag ✓' : '+ Add to Trousseau Bag'}</span>
          </button>

        </div>

      </div>

    </div>
  );
}
