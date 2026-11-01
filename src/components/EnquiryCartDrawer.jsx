import React from 'react';
import { X, ShoppingBag, Trash2, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';
import { CONTACT_PRIMARY, CONTACT_SECONDARY, getWhatsAppOrderLink } from '../data/products';

export default function EnquiryCartDrawer({ 
  isOpen, 
  onClose, 
  cartProducts, 
  onRemoveFromCart, 
  onViewDetails,
  formatPrice,
  onOpenBooking 
}) {
  if (!isOpen) return null;

  const totalWeight = cartProducts.reduce((sum, item) => sum + item.grossWeight, 0).toFixed(2);
  const totalPrice = cartProducts.reduce((sum, item) => sum + item.price, 0);

  const getWhatsAppOrderText = () => {
    const list = cartProducts.map((p, idx) => `  ${idx + 1}. ${p.name} (${p.grossWeight}g, 22KT)`).join('%0A');
    return `Hello DHUNNA JEWELLERS (Ludhiana),%0A%0AI want to place an order for this 22KT Gold Trousseau Suite:%0A${list}%0A%0A• Total 22KT Weight: ${totalWeight} grams%0A• Total Price: ${encodeURIComponent(formatPrice(totalPrice))}%0A• Purity: 100% 22KT BIS 916 Hallmarked%0A%0APlease confirm invoice, payment instructions, and delivery/pickup schedule.`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div 
        className="w-full max-w-md bg-[#121217] border-l border-[#D4AF37]/35 h-full flex flex-col justify-between shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0E0E12]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wider">
                Trousseau Bag ({cartProducts.length})
              </h3>
              <span className="text-[10px] text-[#C5A059] font-mono">
                Ludhiana Showroom • 22KT Hallmarked
              </span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10"
            aria-label="Close trousseau bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <div 
                key={product.id}
                className="flex gap-4 p-3 bg-[#181820] rounded-xl border border-white/5 hover:border-[#D4AF37]/40 transition-colors"
              >
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onViewDetails(product);
                  }}
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 
                      onClick={() => {
                        onClose();
                        onViewDetails(product);
                      }}
                      className="font-heading font-semibold text-xs text-white hover:text-[#F7E7B4] cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h4>
                    <span className="text-[10px] text-[#C5A059] block mt-0.5 font-mono">
                      Weight: <strong>{product.grossWeight}g</strong> • 22KT
                    </span>
                    <span className="text-xs font-mono font-bold text-[#F7E7B4] block mt-1">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => {
                        onClose();
                        onViewDetails(product);
                      }}
                      className="text-[11px] text-gray-400 hover:text-white"
                    >
                      View Specs
                    </button>

                    <button
                      onClick={() => onRemoveFromCart(product.id)}
                      className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center space-y-3 text-gray-400">
              <ShoppingBag className="w-10 h-10 mx-auto text-[#D4AF37]/40" />
              <p className="text-sm font-medium text-white">Your Trousseau Bag is Empty</p>
              <p className="text-xs max-w-xs mx-auto">
                Assemble your Punjabi bridal suite or personal 22KT jewellery collection here to place direct WhatsApp orders.
              </p>
            </div>
          )}
        </div>

        {/* Footer Summary & WhatsApp Order Placement to Both Numbers */}
        {cartProducts.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#0E0E12] space-y-3">
            
            <div className="space-y-1.5 p-3 rounded-lg bg-[#16161D] border border-white/5 text-xs">
              <div className="flex items-center justify-between text-gray-300">
                <span>Total 22KT Gold Weight:</span>
                <span className="font-mono font-bold text-[#F7E7B4] text-sm">{totalWeight} grams</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>Estimated Combined Price:</span>
                <span className="font-mono font-bold text-white text-base">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% BIS 916 Hallmark Guaranteed • Ludhiana</span>
              </div>
            </div>

            <span className="text-[10px] uppercase tracking-wider text-gray-400 block text-center font-semibold">
              Place Trousseau Order via WhatsApp:
            </span>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={getWhatsAppOrderLink(CONTACT_PRIMARY, getWhatsAppOrderText())}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-[11px] tracking-wider uppercase flex items-center justify-center gap-1.5 hover:brightness-110 shadow-gold-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-black" />
                <span>{CONTACT_PRIMARY}</span>
              </a>

              <a
                href={getWhatsAppOrderLink(CONTACT_SECONDARY, getWhatsAppOrderText())}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-2 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-bold text-[11px] tracking-wider uppercase flex items-center justify-center gap-1.5 hover:bg-emerald-900 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>{CONTACT_SECONDARY}</span>
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBooking({ name: `Trousseau Suite (${cartProducts.length} items)`, grossWeight: `${totalWeight}g` });
              }}
              className="w-full py-2.5 rounded-full bg-[#181820] hover:bg-[#22222C] text-[#F7E7B4] border border-white/10 text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Ludhiana Showroom Viewing</span>
            </button>

          </div>
        )}
      </div>
    </div>
  );
}
