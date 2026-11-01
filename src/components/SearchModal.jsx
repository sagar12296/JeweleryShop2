import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function SearchModal({ 
  isOpen, 
  onClose, 
  products, 
  onSelectProduct,
  formatPrice 
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut: close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim() === '' ? [] : products.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.culturalSignificance?.toLowerCase().includes(q)
    );
  });

  const popularSearches = [
    '4-Piece Box Set',
    '40g Chand Haar',
    'Rani Haar', 
    'Bridal Sets', 
    'Punjabi Kada', 
    'Chandbali'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#121217] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center gap-3 bg-[#0E0E12]">
          <Search className="w-5 h-5 text-[#D4AF37]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 22KT gold necklaces, bridal sets, kadas, rings..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-gray-500 outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 text-xs font-mono"
          >
            ESC
          </button>
        </div>

        {/* Quick Search Chips */}
        <div className="px-6 py-3 bg-[#15151B] border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-gray-400 text-[11px] whitespace-nowrap">Suggested:</span>
          {popularSearches.map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2.5 py-1 rounded-full bg-[#1C1C24] text-gray-300 hover:text-[#F7E7B4] hover:bg-[#252530] border border-white/5 whitespace-nowrap text-[11px] transition-colors"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3">
          {query.trim() === '' ? (
            <div className="py-12 text-center space-y-2 text-gray-400">
              <Sparkles className="w-8 h-8 mx-auto text-[#D4AF37]/50" />
              <p className="text-xs">Type a jewellery name, weight, or Punjabi ornament style.</p>
              <p className="text-[11px] font-gurmukhi text-[#F7E7B4]">💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ</p>
            </div>
          ) : results.length > 0 ? (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onClose();
                  onSelectProduct(product);
                }}
                className="flex items-center gap-4 p-3 rounded-xl bg-[#181820] border border-white/5 hover:border-[#D4AF37]/50 hover:bg-[#1E1E28] transition-all cursor-pointer group"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[10px] text-[#C5A059] uppercase">
                    <span>{product.subcategory}</span>
                    <span>•</span>
                    <span className="font-mono">{product.grossWeight}g 22KT</span>
                  </div>
                  <h4 className="font-heading font-semibold text-sm text-white group-hover:text-[#F7E7B4] truncate">
                    {product.name}
                  </h4>
                  <p className="text-xs font-mono font-bold text-[#F7E7B4]">
                    {formatPrice(product.price)}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            ))
          ) : (
            <div className="py-12 text-center space-y-2 text-gray-400">
              <p className="text-sm text-white">No 22KT pieces found for "{query}"</p>
              <p className="text-xs">Try searching for "Rani Haar", "Kada", "Bridal", "Chain", or "Ring".</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

