import React, { useState } from 'react';
import { promotions } from '../../data/promotions';
import SectionTitle from '../common/SectionTitle';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { Tag, Check, Copy, Gift, Sparkles, Clock, ArrowRight } from 'lucide-react';

export default function SpecialPromotions({ onSelectPromo }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleClaim = (promo) => {
    if (onSelectPromo) {
      onSelectPromo(promo);
    }
    const element = document.getElementById('contact-inquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="special-promotions" className="py-20 lg:py-28 bg-forest-950 text-cream-100 relative overflow-hidden border-b border-gold-500/20">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-forest-700/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          badge="Seasonal Privileges"
          badgeIcon={Gift}
          title="Exclusive Holiday &amp; Clinical Offers"
          subtitle="Designed to celebrate clarity, crafted for those who value distinction. Claim these limited-tier vouchers before December 31."
          centered={true}
          theme="dark"
        />

        {/* Promotion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                promo.highlight
                  ? 'bg-gradient-to-b from-forest-900 to-forest-950 border-2 border-gold-400 shadow-luxury-gold md:-translate-y-2'
                  : 'bg-forest-900/60 border border-gold-500/30 hover:border-gold-400/60'
              }`}
            >
              {/* Top Banner on Highlight Card */}
              {promo.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-400 to-gold-600 text-forest-950 text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 text-forest-950" />
                  Most Popular Festive Choice
                </div>
              )}

              <div className="p-6 sm:p-8">
                
                {/* Header Tag & Validity */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant={promo.highlight ? 'gold' : 'darkGold'}>
                    {promo.tag}
                  </Badge>
                  <span className="text-[11px] text-gold-300/80 flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3" /> {promo.validity}
                  </span>
                </div>

                {/* Title & Discount Highlight */}
                <h3 className="font-serif text-2xl text-white font-medium mb-1">
                  {promo.title}
                </h3>
                <p className="text-xs text-gold-400 font-medium uppercase tracking-wider mb-4">
                  {promo.headline}
                </p>

                <div className="p-3.5 rounded-lg bg-forest-950/80 border border-gold-500/20 mb-5">
                  <span className="text-[10px] text-cream-300/70 uppercase tracking-widest block">
                    Privilege Value
                  </span>
                  <span className="text-2xl font-serif font-bold text-gradient-gold">
                    {promo.discount}
                  </span>
                </div>

                <p className="text-xs text-cream-200/80 leading-relaxed mb-6 font-light">
                  {promo.description}
                </p>

                {/* Perks List */}
                <ul className="space-y-2.5 text-xs text-cream-100/90 mb-6 border-t border-forest-800/80 pt-5">
                  {promo.perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{perk}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Promo Code & Action Box */}
              <div className="p-6 pt-0 border-t border-forest-800/50">
                <div className="flex items-center justify-between gap-2 bg-forest-950 p-2 rounded-lg border border-gold-500/30 mb-4">
                  <div className="pl-2">
                    <span className="text-[9px] uppercase tracking-wider text-cream-300/60 block">Promo Code</span>
                    <span className="text-xs font-mono font-bold text-gold-300 tracking-wider">
                      {promo.code}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(promo.code)}
                    className="p-2 rounded bg-forest-900 hover:bg-forest-800 text-cream-100 hover:text-gold-300 transition-colors text-xs flex items-center gap-1"
                    title="Copy promo code"
                  >
                    {copiedCode === promo.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-gold-400" />
                        <span className="text-[10px] text-gold-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <Button
                  variant={promo.highlight ? 'primary' : 'outlineLight'}
                  size="md"
                  onClick={() => handleClaim(promo)}
                  className="w-full text-center"
                  icon={ArrowRight}
                >
                  Claim at Phnom Penh Clinic
                </Button>
              </div>

            </div>
          ))}
        </div>

        {/* Footnote on Terms */}
        <p className="text-center text-xs text-cream-300/60 mt-10 max-w-2xl mx-auto">
          * Offers redeemable at Vizen Optic Flagship (Preah Norodom Blvd, BKK1) and Exchange Square boutique. Can be paired with eligible private optical insurance cards.
        </p>

      </div>
    </section>
  );
}
