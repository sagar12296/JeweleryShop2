import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES, GOLD_RATE_22KT, GOLD_RATE_LOCATION } from '../data/products';
import { Filter, SlidersHorizontal, Sparkles, Search, RotateCcw, Camera } from 'lucide-react';

export default function CollectionGrid({ 
  products, 
  onViewDetails, 
  onToggleWishlist, 
  wishlistIds, 
  onAddToEnquiryCart,
  cartIds,
  formatPrice,
  searchQuery,
  onSearchChange
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWeightRange, setSelectedWeightRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [onlyOriginalPhotos, setOnlyOriginalPhotos] = useState(false);

  // Weight filters for 22KT gold shoppers in Ludhiana
  const weightRanges = [
    { id: 'all', label: 'All Weights' },
    { id: 'light', label: 'Lightweight (<15g)', min: 0, max: 15 },
    { id: 'medium', label: 'Daily Wear (15g–35g)', min: 15, max: 35 },
    { id: 'forty', label: 'Signature (35g–45g) [40g Haar]', min: 35, max: 45 },
    { id: 'bridal', label: 'Royal Bridal (45g+)', min: 45, max: 999 }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Only original photos filter
      if (onlyOriginalPhotos && !item.isOriginalShowroomPiece) {
        return false;
      }

      // Category filter
      if (selectedCategory === 'new-arrivals') {
        if (!item.isNew) return false;
      } else if (selectedCategory !== 'all') {
        if (item.category !== selectedCategory) return false;
      }

      // Weight range filter
      if (selectedWeightRange !== 'all') {
        const range = weightRanges.find((r) => r.id === selectedWeightRange);
        if (range) {
          if (item.grossWeight < range.min || item.grossWeight >= range.max) {
            return false;
          }
        }
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesCategory = item.subcategory.toLowerCase().includes(q);
        const matchesDesc = item.shortDesc.toLowerCase().includes(q);
        if (!matchesName && !matchesCategory && !matchesDesc) return false;
      }

      return true;
    }).sort((a, b) => {
      // Keep original piece on top if featured
      if (sortBy === 'featured') {
        if (a.isOriginalShowroomPiece) return -1;
        if (b.isOriginalShowroomPiece) return 1;
      }
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'weight-low') return a.grossWeight - b.grossWeight;
      if (sortBy === 'weight-high') return b.grossWeight - a.grossWeight;
      return 0;
    });
  }, [products, selectedCategory, selectedWeightRange, sortBy, searchQuery, onlyOriginalPhotos]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedWeightRange('all');
    setSortBy('featured');
    setOnlyOriginalPhotos(false);
    onSearchChange('');
  };

  const activeFiltersCount = (selectedCategory !== 'all' ? 1 : 0) + 
                             (selectedWeightRange !== 'all' ? 1 : 0) + 
                             (onlyOriginalPhotos ? 1 : 0) +
                             (searchQuery ? 1 : 0) + 
                             (sortBy !== 'featured' ? 1 : 0);

  return (
    <section id="collections" className="py-24 sm:py-28 bg-[#0A0A0C] relative">
      
      {/* Decorative Gold Ambient Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1A1A22] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
            Ludhiana (Punjab) • 22KT Ready-Made Vault
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-wide uppercase">
            THE 22KT <span className="gold-text-gradient">COLLECTION</span>
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-[1px] bg-[#D4AF37]"></span>
            <p className="font-gurmukhi text-lg sm:text-xl text-[#F7E7B4] font-semibold">
              💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
            </p>
            <span className="w-10 h-[1px] bg-[#D4AF37]"></span>
          </div>

          <p className="text-sm sm:text-base text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
            Real showroom pieces priced on today's accurate Ludhiana gold rate (<strong>₹{GOLD_RATE_22KT.toLocaleString('en-IN')}/g</strong>). Includes our original 40g Royal Chand Haar ready for immediate order.
          </p>
        </div>

        {/* Category Horizontal Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 border-b border-white/5">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black shadow-gold-sm font-bold'
                    : 'bg-[#141419] text-gray-300 hover:text-white hover:bg-[#1E1E26] border border-white/5'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Filter Bar Controls: Weight, Original Photo Toggle, Sort, Reset */}
        <div className="bg-[#121217] p-4 rounded-xl border border-[#D4AF37]/20 mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Weight Range Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5 whitespace-nowrap">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Weight:</span>
            </span>
            <div className="flex items-center gap-1.5">
              {weightRanges.map((wr) => (
                <button
                  key={wr.id}
                  onClick={() => setSelectedWeightRange(wr.id)}
                  className={`px-3 py-1 rounded text-[11px] font-medium whitespace-nowrap transition-colors ${
                    selectedWeightRange === wr.id
                      ? 'bg-[#D4AF37]/20 text-[#F7E7B4] border border-[#D4AF37]/40'
                      : 'bg-black/40 text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {wr.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Controls: Original Photo Filter Toggle & Sort Selector */}
          <div className="flex items-center justify-between md:justify-end gap-3 flex-wrap">
            
            {/* Filter by Original Showroom Photos Only */}
            <button
              onClick={() => setOnlyOriginalPhotos(!onlyOriginalPhotos)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                onlyOriginalPhotos 
                  ? 'bg-[#D4AF37] text-black shadow-gold-sm' 
                  : 'bg-[#1C1C24] text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Original Photos Only</span>
            </button>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <span className="text-[11px] text-gray-400 uppercase tracking-wider">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products"
                className="bg-[#1C1C24] text-white text-xs px-3 py-1.5 rounded-lg border border-white/10 outline-none cursor-pointer focus:border-[#D4AF37]"
              >
                <option value="featured">Featured (40g Haar First)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="weight-low">Weight: Light to Heavy</option>
                <option value="weight-high">Weight: Heavy to Light</option>
              </select>
            </div>

            {/* Reset Filter if active */}
            {activeFiltersCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="p-1.5 text-gray-400 hover:text-[#D4AF37] rounded transition-colors flex items-center gap-1 text-[11px]"
                title="Reset all filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}

          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-6 px-1">
          <span>
            Showing <strong className="text-[#F7E7B4]">{filteredProducts.length}</strong> authenticated 22KT gold pieces
            {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
          </span>
          <span className="font-mono text-[11px] text-[#C5A059]">
            Ludhiana Bullion Rate: ₹{GOLD_RATE_22KT.toLocaleString('en-IN')}/g
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.includes(product.id)}
                onAddToEnquiryCart={onAddToEnquiryCart}
                isInCart={cartIds.includes(product.id)}
                formatPrice={formatPrice}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#121217] rounded-2xl border border-white/5 space-y-4">
            <Sparkles className="w-10 h-10 text-[#D4AF37] mx-auto opacity-70" />
            <h3 className="text-xl font-heading font-bold text-white">
              No Pieces Found Matching This Filter
            </h3>
            <p className="text-xs text-gray-400 max-w-md mx-auto">
              Our 22KT gold ready-made vault holds hundreds of additional heirlooms in our physical showroom in Ludhiana.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-full bg-[#D4AF37] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#F7E7B4] transition-colors"
            >
              Reset Filters & View All
            </button>
          </div>
        )}

      </div>

    </section>
  );
}
