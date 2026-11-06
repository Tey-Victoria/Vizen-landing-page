import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles, MapPin } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Christmas Special", href: "#christmas-hero", highlight: true },
    { label: "Featured Frames", href: "#featured-products" },
    { label: "Promotions", href: "#special-promotions" },
    { label: "Why Vizen", href: "#why-choose-us" },
    { label: "Eye Care Journal", href: "#eye-care-articles" },
    { label: "Visit & Contact", href: "#contact-inquiry" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-forest-950 text-gold-300 text-xs py-2 px-4 border-b border-gold-500/20 text-center tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="inline-flex items-center gap-1 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
            <strong className="text-white">Christmas Privilege:</strong> 50% Off 2nd Pair + Free ZEISS Lens Coating
          </span>
          <span className="hidden md:inline text-gold-500/50">•</span>
          <span className="hidden md:inline-flex items-center gap-1 text-cream-200/80">
            <MapPin className="w-3.5 h-3.5 text-gold-400" /> BKK1 & Exchange Square, Phnom Penh
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-forest-950/95 backdrop-blur-md shadow-luxury py-3 border-b border-gold-500/20'
            : 'bg-forest-900/90 backdrop-blur-sm py-4 border-b border-forest-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex flex-col group">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-serif tracking-[0.25em] text-white font-medium group-hover:text-gold-300 transition-colors">
                  VIZEN
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold px-1.5 py-0.5 border border-gold-400/40 rounded-sm">
                  Optic
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.35em] text-cream-300/70 font-light mt-0.5">
                Phnom Penh • Haute Eyewear
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest transition-all duration-200 ${
                    link.highlight
                      ? 'text-gold-300 font-semibold hover:text-white flex items-center gap-1.5'
                      : 'text-cream-100/90 hover:text-gold-400 font-medium'
                  }`}
                >
                  {link.highlight && <Sparkles className="w-3 h-3 text-gold-400" />}
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+85523888919"
                className="hidden xl:inline-flex items-center gap-2 text-xs uppercase tracking-wider text-cream-200/90 hover:text-gold-300 transition-colors px-3 py-2"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>+855 23 888 919</span>
              </a>

              <Button
                variant="primary"
                size="sm"
                href="#contact-inquiry"
                icon={Calendar}
              >
                Book Exam
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="primary"
                size="sm"
                href="#contact-inquiry"
                className="text-[11px] px-3 py-1.5"
              >
                Book
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-cream-100 hover:text-gold-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-forest-950 border-b border-gold-500/20 px-6 py-6 transition-all duration-300">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-widest py-1 border-b border-forest-800/60 ${
                    link.highlight ? 'text-gold-400 font-semibold' : 'text-cream-100 hover:text-gold-300'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:+85523888919"
                  className="flex items-center gap-2 text-xs uppercase tracking-wider text-cream-200/90"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call Concierge: +855 23 888 919</span>
                </a>
                <Button
                  variant="primary"
                  size="md"
                  href="#contact-inquiry"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center"
                >
                  Book In-Store Eye Exam
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
