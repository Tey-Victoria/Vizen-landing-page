import React from 'react';
import { storeInfo } from '../../data/storeInfo';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Send,
  Heart
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-cream-100 border-t border-gold-500/25 relative overflow-hidden">
      {/* Top Gold Border Glow Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Column (2 cols wide) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-serif tracking-[0.25em] text-white font-medium">
                VIZEN
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold px-1.5 py-0.5 border border-gold-400/40 rounded-sm">
                Optic
              </span>
            </div>
            
            <p className="text-xs uppercase tracking-[0.25em] text-gold-400 font-medium">
              Phnom Penh • Haute Eyewear Atelier
            </p>

            <p className="text-xs text-cream-200/80 leading-relaxed font-light max-w-sm pt-1">
              Phnom Penh's destination for connoisseurs of handcrafted Japanese beta-titanium frames, independent European design maisons, and 16-step precision optometry.
            </p>

            {/* Social & Messaging links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://t.me/vizenoptic"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-forest-900 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-forest-950 transition-colors"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-forest-900 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-forest-950 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-forest-900 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-forest-950 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-serif uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-200/80">
              <li>
                <a href="#christmas-hero" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-gold-400" />
                  Christmas 2026 Release
                </a>
              </li>
              <li>
                <a href="#featured-products" className="hover:text-gold-300 transition-colors">
                  Optical Titanium Frames
                </a>
              </li>
              <li>
                <a href="#featured-products" className="hover:text-gold-300 transition-colors">
                  Artisanal Sunglasses
                </a>
              </li>
              <li>
                <a href="#featured-products" className="hover:text-gold-300 transition-colors">
                  Sabae Limited Editions
                </a>
              </li>
              <li>
                <a href="#special-promotions" className="hover:text-gold-300 transition-colors">
                  ZEISS Lens Upgrades
                </a>
              </li>
            </ul>
          </div>

          {/* Clinical & Care Links */}
          <div>
            <h4 className="text-xs font-serif uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">
              Clinical &amp; Journal
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-200/80">
              <li>
                <a href="#why-choose-us" className="hover:text-gold-300 transition-colors">
                  16-Step Optometry Exam
                </a>
              </li>
              <li>
                <a href="#eye-care-articles" className="hover:text-gold-300 transition-colors">
                  Digital Eye Strain Guide
                </a>
              </li>
              <li>
                <a href="#eye-care-articles" className="hover:text-gold-300 transition-colors">
                  Facial Geometry Guide
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-gold-300 transition-colors">
                  Lifetime Ultrasonic Spa
                </a>
              </li>
              <li>
                <a href="#contact-inquiry" className="hover:text-gold-300 transition-colors">
                  Corporate Vision Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Flagship Locations */}
          <div>
            <h4 className="text-xs font-serif uppercase tracking-[0.2em] text-gold-400 font-semibold mb-4">
              Phnom Penh Lounges
            </h4>
            <div className="space-y-3 text-xs text-cream-200/80">
              <div>
                <strong className="text-white block font-medium">BKK1 Flagship:</strong>
                <p className="text-[11px] text-cream-300/70 font-light mt-0.5">
                  128 Preah Norodom Blvd, Phnom Penh
                </p>
                <p className="text-[10px] text-gold-400 font-mono mt-0.5">
                  Tel: +855 23 888 919
                </p>
              </div>

              <div className="pt-2 border-t border-forest-800">
                <strong className="text-white block font-medium">Exchange Square:</strong>
                <p className="text-[11px] text-cream-300/70 font-light mt-0.5">
                  Ground Floor G-08, Phnom Penh
                </p>
                <p className="text-[10px] text-gold-400 font-mono mt-0.5">
                  Daily: 09:30 AM – 09:00 PM
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 pt-8 border-t border-forest-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/60 font-light text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Vizen Optic Cambodia. All rights reserved. Registered Optical Dispensary, Phnom Penh.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-gold-400 transition-colors cursor-pointer">Privacy Charter</span>
            <span>•</span>
            <span className="hover:text-gold-400 transition-colors cursor-pointer">Terms of Consultation</span>
            <span>•</span>
            <span className="text-gold-400 font-medium">Phnom Penh, KH</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
