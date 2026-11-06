import React from 'react';
import { Sparkles, Gift, ArrowRight, ShieldCheck, Eye, Star } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

export default function HeroChristmas() {
  return (
    <section id="christmas-hero" className="relative overflow-hidden bg-forest-950 text-cream-100 py-16 sm:py-24 lg:py-28 border-b border-gold-500/20">
      {/* Decorative Festive Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Gold & Forest Radial Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-forest-700/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl" />
        
        {/* Subtle Luxury Pattern Lines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C59A3F_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Festive Editorial Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Seasonal Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/90 border border-gold-400/40 shadow-inner">
              <Gift className="w-4 h-4 text-gold-400 animate-bounce" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-300">
                Christmas & New Year Haute Atelier
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              <span className="text-xs text-cream-200/80 hidden sm:inline">Phnom Penh</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-white leading-[1.12]">
              The Gift of <br />
              <span className="font-italic italic text-gradient-gold font-normal">Timeless Clarity</span> &amp; Refinement.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Step into Vizen Optic this holiday season. Discover bespoke Japanese titanium frames, 
              handcrafted European silhouettes, and state-of-the-art optometric precision in Boeung Keng Kang, Phnom Penh.
            </p>

            {/* Holiday Promo Strip Highlight */}
            <div className="p-4 sm:p-5 rounded-lg bg-forest-900/80 border border-gold-500/30 backdrop-blur-md max-w-xl mx-auto lg:mx-0 shadow-luxury">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gold-500/20 text-gold-400 rounded-md shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-medium text-gold-300 tracking-wide">
                    Exclusive Christmas 2026 Privilege
                  </h4>
                  <p className="text-xs text-cream-200/80 mt-1 leading-normal">
                    Receive <strong className="text-white">50% off a second pair</strong> for someone dear, plus a complimentary German ZEISS DuraVision® lens upgrade with any frame selection.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="#featured-products"
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Explore Holiday Frames
              </Button>
              <Button
                variant="outlineLight"
                size="lg"
                href="#contact-inquiry"
                icon={Eye}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Book 16-Step Eye Exam
              </Button>
            </div>

            {/* Social Trust Metrics */}
            <div className="pt-6 border-t border-forest-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center sm:text-left">
              <div>
                <p className="text-xl sm:text-2xl font-serif text-gold-300 font-medium">100%</p>
                <p className="text-[11px] uppercase tracking-wider text-cream-300/70 mt-0.5">Authentic Artisan</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif text-gold-300 font-medium">BKK1</p>
                <p className="text-[11px] uppercase tracking-wider text-cream-300/70 mt-0.5">Flagship Lounge</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif text-gold-300 font-medium">14 Yrs</p>
                <p className="text-[11px] uppercase tracking-wider text-cream-300/70 mt-0.5">Clinical Trust</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Border Glow Box */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-gold-400/40 via-forest-800/60 to-gold-600/30 shadow-2xl backdrop-blur-sm">
                
                {/* Main Hero Image */}
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-forest-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1000&q=85"
                    alt="Vizen Optic Christmas Luxury Eyewear Collection"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-forest-950/30" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-950/85 backdrop-blur-md text-xs font-semibold text-gold-300 border border-gold-400/30 shadow-lg">
                      <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                      Holiday Edition • Sabae, Japan
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-forest-950/90 backdrop-blur-md border border-gold-500/30 shadow-luxury">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase tracking-widest text-gold-400 font-medium">
                        Atelier Highlight
                      </span>
                      <span className="text-xs font-semibold text-white">
                        $380 USD
                      </span>
                    </div>
                    <h3 className="font-serif text-base text-cream-50 font-medium">
                      Aura Royale Chrono in Forest &amp; Gold
                    </h3>
                    <p className="text-xs text-cream-300/80 mt-1 line-clamp-1">
                      Ultra-pure Beta-Titanium with 18k gold filigree rim
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Gift Box Badge Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-forest-900/95 backdrop-blur-md border border-gold-400/50 p-4 rounded-xl shadow-2xl flex items-center gap-3.5 max-w-xs">
                <div className="w-12 h-12 rounded-lg bg-gold-400/20 border border-gold-400/40 flex items-center justify-center shrink-0">
                  <Gift className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    Complimentary Festive Box
                  </p>
                  <p className="text-[11px] text-cream-200/80 mt-0.5">
                    Velvet hard-case, silk microfiber &amp; personalized greeting
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
