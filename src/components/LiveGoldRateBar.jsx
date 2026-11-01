import React, { useState } from 'react';
import { Calculator, X, ShieldCheck, TrendingUp, Info, CheckCircle2, MessageCircle, MapPin } from 'lucide-react';
import { 
  GOLD_RATE_22KT, 
  GOLD_RATE_24KT, 
  GOLD_RATE_18KT, 
  GOLD_RATE_LOCATION, 
  GOLD_RATE_DATE,
  CONTACT_PRIMARY, 
  CONTACT_SECONDARY, 
  getWhatsAppOrderLink 
} from '../data/products';

export default function LiveGoldRateBar({ isOpen, onClose, activeCurrency, currencyMultiplier, currencySymbol }) {
  const [calcWeight, setCalcWeight] = useState(40.0); // Default to 40g (matches user original reference piece!)
  const [selectedPurity, setSelectedPurity] = useState('22KT'); // 22KT or 24KT
  const [makingRatePercent, setMakingRatePercent] = useState(10);

  if (!isOpen) return null;

  const currentRate = selectedPurity === '22KT' ? GOLD_RATE_22KT : (selectedPurity === '24KT' ? GOLD_RATE_24KT : GOLD_RATE_18KT);
  const rawGoldValueINR = calcWeight * currentRate;
  const makingChargesINR = (rawGoldValueINR * makingRatePercent) / 100;
  const gstChargesINR = ((rawGoldValueINR + makingChargesINR) * 0.03); // 3% standard GST on gold
  const totalEstimatedINR = rawGoldValueINR + makingChargesINR + gstChargesINR;

  const formatCurrency = (valINR) => {
    const converted = valINR * currencyMultiplier;
    return `${currencySymbol}${Math.round(converted).toLocaleString('en-IN')}`;
  };

  const orderMessage = `Hello DHUNNA JEWELLERS (Ludhiana), I would like to place an order based on today's Ludhiana gold rate:%0A• Gold Purity: ${selectedPurity} (916 BIS Hallmark)%0A• Weight: ${calcWeight}g%0A• Estimated Total: ${encodeURIComponent(formatCurrency(totalEstimatedINR))}%0A• Location: Ludhiana, Punjab%0A%0APlease confirm availability and booking.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#141419] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-gold-lg text-white max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close rate calculator"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-[#D4AF37]/15 rounded-xl border border-[#D4AF37]/30 text-[#D4AF37]">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase tracking-wider">
                TODAY'S GOLD RATE IN LUDHIANA (PUNJAB)
              </h3>
            </div>
            <p className="text-xs text-[#C5A059] flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-white">{GOLD_RATE_LOCATION}</span>
              <span className="text-gray-400">• {GOLD_RATE_DATE}</span>
            </p>
          </div>
        </div>

        {/* Real Ludhiana Gold Rates Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div 
            onClick={() => setSelectedPurity('22KT')}
            className={`p-3 rounded-xl border cursor-pointer transition-all ${
              selectedPurity === '22KT' 
                ? 'bg-[#2A2315] border-[#D4AF37] shadow-gold-sm' 
                : 'bg-[#181820] border-white/10 hover:border-[#D4AF37]/40'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
              <span>22KT (Hallmark)</span>
              {selectedPurity === '22KT' && <span className="text-[#D4AF37]">Selected</span>}
            </div>
            <p className="text-base sm:text-lg font-mono font-bold text-[#F7E7B4] mt-1">
              {formatCurrency(GOLD_RATE_22KT)}<span className="text-[11px] font-normal text-gray-400">/g</span>
            </p>
            <span className="text-[10px] text-emerald-400 font-mono">₹1,24,800 / 10g</span>
          </div>

          <div 
            onClick={() => setSelectedPurity('24KT')}
            className={`p-3 rounded-xl border cursor-pointer transition-all ${
              selectedPurity === '24KT' 
                ? 'bg-[#2A2315] border-[#D4AF37] shadow-gold-sm' 
                : 'bg-[#181820] border-white/10 hover:border-[#D4AF37]/40'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
              <span>24KT (Bullion)</span>
              {selectedPurity === '24KT' && <span className="text-[#D4AF37]">Selected</span>}
            </div>
            <p className="text-base sm:text-lg font-mono font-bold text-white mt-1">
              {formatCurrency(GOLD_RATE_24KT)}<span className="text-[11px] font-normal text-gray-400">/g</span>
            </p>
            <span className="text-[10px] text-gray-400 font-mono">₹1,36,150 / 10g</span>
          </div>

          <div 
            onClick={() => setSelectedPurity('18KT')}
            className={`p-3 rounded-xl border cursor-pointer transition-all ${
              selectedPurity === '18KT' 
                ? 'bg-[#2A2315] border-[#D4AF37] shadow-gold-sm' 
                : 'bg-[#181820] border-white/10 hover:border-[#D4AF37]/40'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
              <span>18KT (Gold)</span>
              {selectedPurity === '18KT' && <span className="text-[#D4AF37]">Selected</span>}
            </div>
            <p className="text-base sm:text-lg font-mono font-bold text-gray-300 mt-1">
              {formatCurrency(GOLD_RATE_18KT)}<span className="text-[11px] font-normal text-gray-400">/g</span>
            </p>
            <span className="text-[10px] text-gray-500 font-mono">₹1,02,100 / 10g</span>
          </div>
        </div>

        {/* Tagline Banner */}
        <div className="mb-6 p-3 rounded-lg bg-[#1D1B15] border border-[#D4AF37]/25 flex items-center justify-between text-xs">
          <span className="font-gurmukhi font-semibold text-[#F7E7B4]">
            💎 ਗਹਿਣੇ ਨਹੀਂ, ਵਿਰਾਸਤ ਬਣਾਉਂਦੇ ਹਾਂ
          </span>
          <span className="text-[#C5A059] text-[11px] uppercase tracking-wider font-mono">
            Direct Ludhiana Market Pricing
          </span>
        </div>

        {/* Weight Selector with 40g Quick Reference Button */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs text-gray-300 mb-1.5">
              <label htmlFor="modal-gold-weight" className="font-medium">Gold Weight (Grams):</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCalcWeight(40.0)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-colors ${
                    calcWeight === 40.0 
                      ? 'bg-[#D4AF37] text-black' 
                      : 'bg-white/10 text-[#F7E7B4] hover:bg-white/20'
                  }`}
                  title="Reference 40g original piece"
                >
                  Set 40g (Original Piece)
                </button>
                <span className="font-mono font-bold text-[#F7E7B4] text-sm">{calcWeight} g</span>
              </div>
            </div>
            <input
              id="modal-gold-weight"
              type="range"
              min="2"
              max="100"
              step="0.5"
              value={calcWeight}
              onChange={(e) => setCalcWeight(parseFloat(e.target.value))}
              aria-label="Gold Weight in grams"
              className="w-full h-2 bg-[#252530] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
            />
            <div className="flex justify-between text-[10px] text-gray-500 mt-1">
              <span>Light (2g)</span>
              <span className="text-[#D4AF37] font-semibold">40g (Chand Haar)</span>
              <span>Heavy (100g)</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs text-gray-300 mb-1.5">
              <label htmlFor="modal-making-rate" className="font-medium">Artisan Karigari / Making Charges (%):</label>
              <span className="font-mono font-bold text-[#F7E7B4] text-sm">{makingRatePercent}%</span>
            </div>
            <input
              id="modal-making-rate"
              type="range"
              min="8"
              max="16"
              step="1"
              value={makingRatePercent}
              onChange={(e) => setMakingRatePercent(parseInt(e.target.value))}
              aria-label="Making charges percentage"
              className="w-full h-2 bg-[#252530] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
            />
          </div>

          {/* Breakdown Box */}
          <div className="p-4 rounded-xl bg-[#0B0B0E] border border-white/10 space-y-2 text-xs text-gray-300">
            <div className="flex justify-between">
              <span>Raw 22KT Gold ({calcWeight}g @ {formatCurrency(currentRate)}/g in Ludhiana):</span>
              <span className="font-mono text-white font-medium">{formatCurrency(rawGoldValueINR)}</span>
            </div>
            <div className="flex justify-between">
              <span>Handcrafted Making Charges ({makingRatePercent}%):</span>
              <span className="font-mono text-white font-medium">{formatCurrency(makingChargesINR)}</span>
            </div>
            <div className="flex justify-between">
              <span>Government GST (3%):</span>
              <span className="font-mono text-white font-medium">{formatCurrency(gstChargesINR)}</span>
            </div>
            
            <div className="pt-2 border-t border-[#D4AF37]/30 flex justify-between items-center text-sm font-semibold">
              <span className="text-white">Estimated Ready Value in Ludhiana:</span>
              <span className="text-xl font-mono text-[#F7E7B4] gold-text-gradient font-bold">
                {formatCurrency(totalEstimatedINR)}
              </span>
            </div>
          </div>

          {/* Direct WhatsApp Order Placement to BOTH 7986013912 & 8054444423 */}
          <div className="space-y-2 pt-2">
            <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-semibold text-center">
              Direct Order Placement via WhatsApp (Ludhiana Showroom):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={`https://wa.me/91${CONTACT_PRIMARY}?text=${orderMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-xs tracking-wider uppercase text-center shadow-gold-sm hover:brightness-110 flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Order on {CONTACT_PRIMARY}</span>
              </a>

              <a
                href={`https://wa.me/91${CONTACT_SECONDARY}?text=${orderMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900 font-bold text-xs tracking-wider uppercase text-center shadow-sm flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Order on {CONTACT_SECONDARY}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
