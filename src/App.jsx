import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CollectionGrid from './components/CollectionGrid';
import BridalShowcase from './components/BridalShowcase';
import ArtOfGoldSection from './components/ArtOfGoldSection';
import WhyDhunnaSection from './components/WhyDhunnaSection';
import CustomerExperience from './components/CustomerExperience';
import ShowroomContact from './components/ShowroomContact';
import Footer from './components/Footer';

import ProductDetailModal from './components/ProductDetailModal';
import LiveGoldRateBar from './components/LiveGoldRateBar';
import WishlistDrawer from './components/WishlistDrawer';
import EnquiryCartDrawer from './components/EnquiryCartDrawer';
import SearchModal from './components/SearchModal';

import { PRODUCTS } from './data/products';

const CURRENCIES = {
  INR: { symbol: '₹', multiplier: 1 },
  USD: { symbol: '$', multiplier: 0.012 },
  CAD: { symbol: 'C$', multiplier: 0.016 },
  GBP: { symbol: '£', multiplier: 0.0094 },
  AED: { symbol: 'AED ', multiplier: 0.044 }
};

export default function App() {
  const [activeCurrency, setActiveCurrency] = useState('INR');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [wishlistIds, setWishlistIds] = useState(() => {
    try {
      const saved = localStorage.getItem('dhunna_wishlist');
      return saved ? JSON.parse(saved) : ['dj-box-set-original', 'dj-40g-original'];
    } catch {
      return ['dj-box-set-original', 'dj-40g-original'];
    }
  });

  const [cartIds, setCartIds] = useState(() => {
    try {
      const saved = localStorage.getItem('dhunna_trousseau_bag');
      return saved ? JSON.parse(saved) : ['dj-box-set-original'];
    } catch {
      return ['dj-box-set-original'];
    }
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isRateCalculatorOpen, setIsRateCalculatorOpen] = useState(false);
  
  const [prefilledBookingProduct, setPrefilledBookingProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Persist wishlist
  useEffect(() => {
    try {
      localStorage.setItem('dhunna_wishlist', JSON.stringify(wishlistIds));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }
  }, [wishlistIds]);

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('dhunna_trousseau_bag', JSON.stringify(cartIds));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }
  }, [cartIds]);

  const toggleWishlist = (product) => {
    setWishlistIds((prev) => 
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const toggleEnquiryCart = (product) => {
    setCartIds((prev) => 
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const removeFromWishlist = (id) => {
    setWishlistIds((prev) => prev.filter((itemId) => itemId !== id));
  };

  const removeFromCart = (id) => {
    setCartIds((prev) => prev.filter((itemId) => itemId !== id));
  };

  const currentCurrencyConfig = CURRENCIES[activeCurrency] || CURRENCIES.INR;

  const formatPrice = (priceINR) => {
    const converted = priceINR * currentCurrencyConfig.multiplier;
    return `${currentCurrencyConfig.symbol}${Math.round(converted).toLocaleString('en-IN')}`;
  };

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));
  const cartProducts = PRODUCTS.filter((p) => cartIds.includes(p.id));

  const handleOpenBooking = (product) => {
    setPrefilledBookingProduct(product);
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const el = document.querySelector('#collections');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShowroomClick = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E8E2D6] selection:bg-[#D4AF37]/30 selection:text-[#F7E7B4]">
      
      {/* Luxury Sticky Navbar with Punjabi Tagline */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        wishlistCount={wishlistIds.length}
        onOpenEnquiryCart={() => setIsCartOpen(true)}
        cartCount={cartIds.length}
        onOpenRateCalculator={() => setIsRateCalculatorOpen(true)}
        activeCurrency={activeCurrency}
        onChangeCurrency={setActiveCurrency}
        currencies={CURRENCIES}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          onExploreClick={handleExploreClick}
          onShowroomClick={handleShowroomClick}
        />

        {/* About Dhunna Jewellers Section */}
        <AboutSection
          onExploreClick={handleExploreClick}
        />

        {/* Catalogue & Collections Grid */}
        <CollectionGrid
          products={PRODUCTS}
          onViewDetails={setSelectedProduct}
          onToggleWishlist={toggleWishlist}
          wishlistIds={wishlistIds}
          onAddToEnquiryCart={toggleEnquiryCart}
          cartIds={cartIds}
          formatPrice={formatPrice}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Timeless Bridal Elegance Showcase */}
        <BridalShowcase
          onSelectBridalItem={setSelectedProduct}
          onOpenBooking={handleOpenBooking}
          formatPrice={formatPrice}
        />

        {/* The Art of 22KT Gold Editorial */}
        <ArtOfGoldSection
          onExploreClick={handleExploreClick}
        />

        {/* Why Dhunna Jewellers (4 Pillars) */}
        <WhyDhunnaSection />

        {/* Customer Experience, Testimonials & Instagram Feed */}
        <CustomerExperience
          onSelectProductByName={(name) => {
            const match = PRODUCTS.find((p) => p.name.toLowerCase().includes(name.toLowerCase()));
            if (match) setSelectedProduct(match);
          }}
        />

        {/* Visit Dhunna Jewellers Showroom & Booking */}
        <ShowroomContact
          prefilledProduct={prefilledBookingProduct}
        />
      </main>

      {/* Luxury Sophisticated Footer */}
      <Footer />

      {/* Interactive Modals and Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onToggleWishlist={toggleWishlist}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onAddToEnquiryCart={toggleEnquiryCart}
        isInCart={selectedProduct ? cartIds.includes(selectedProduct.id) : false}
        formatPrice={formatPrice}
        onOpenBooking={handleOpenBooking}
      />

      <LiveGoldRateBar
        isOpen={isRateCalculatorOpen}
        onClose={() => setIsRateCalculatorOpen(false)}
        activeCurrency={activeCurrency}
        currencyMultiplier={currentCurrencyConfig.multiplier}
        currencySymbol={currentCurrencyConfig.symbol}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={removeFromWishlist}
        onViewDetails={setSelectedProduct}
        formatPrice={formatPrice}
      />

      <EnquiryCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartProducts={cartProducts}
        onRemoveFromCart={removeFromCart}
        onViewDetails={setSelectedProduct}
        formatPrice={formatPrice}
        onOpenBooking={handleOpenBooking}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={setSelectedProduct}
        formatPrice={formatPrice}
      />

    </div>
  );
}

