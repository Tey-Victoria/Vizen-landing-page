import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { storeInfo } from '../../data/storeInfo';
import { 
  Award, 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  Clock, 
  Wrench, 
  Users, 
  CheckCircle2 
} from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Eye,
      title: "16-Step Digital Japanese Optometry",
      tagline: "Clinical Precision Beyond Expectations",
      description: "We don't simply read eye charts. Our German ZEISS i.Profiler® and Japanese digital phoropters analyze 1,500 corneal data points to evaluate night glare, astigmatism, and digital eye fatigue.",
      highlights: ["Corneal wavefront aberrometry", "Pupillary height laser alignment", "Retinal digital health screening"]
    },
    {
      icon: Award,
      title: "Sabae Handcrafted & Independent Ateliers",
      tagline: "Exclusive Masterpieces in Cambodia",
      description: "Directly imported from Fukui Prefecture, Japan and artisan European workshops. Sourced with medical-grade pure beta-titanium, hypoallergenic ceramic pads, and 5-year cured cotton bio-acetate.",
      highlights: ["Fukui artisan-certified makers", "Weightless balance (< 10 grams)", "24K gold plated corewires"]
    },
    {
      icon: Users,
      title: "Senior Clinical Optometrists & Stylists",
      tagline: "Medical Rigor Meets Haute Aesthetics",
      description: "Our licensed optometrists collaborate directly with bespoke eyewear stylists to align your optical prescription with your bone geometry, skin tone, and daily professional demands.",
      highlights: ["Dual clinical & stylistic consultation", "Private VIP testing suites", "English, Khmer & French spoken"]
    },
    {
      icon: Wrench,
      title: "Complimentary Lifetime Atelier Care",
      tagline: "Enduring Relationship with Your Vision",
      description: "Every frame purchased from Vizen Optic carries lifetime complimentary ultrasonic spa sanitization, hinge re-tensioning, nose-pad renewal, and micro-contour adjustments at any of our branches.",
      highlights: ["Free lifetime ultrasonic spa", "Complimentary screw & pad renewals", "Annual checkup reminder service"]
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-cream-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          badge="The Vizen Distinction"
          badgeIcon={Award}
          title="Why Discerning Clients Choose Vizen Optic"
          subtitle="Combining advanced Japanese diagnostic optometry with the rarest independent eyewear ateliers in Phnom Penh, Cambodia."
          centered={true}
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-cream-200/90 hover:border-gold-400/60 transition-all duration-300 shadow-sm hover:shadow-luxury group flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Index Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-serif text-3xl font-light text-cream-300">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold block mb-1">
                    {pillar.tagline}
                  </span>
                  <h3 className="font-serif text-2xl text-forest-950 font-medium mb-3 group-hover:text-gold-600 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-forest-800/80 leading-relaxed font-light mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-cream-100 space-y-2">
                  {pillar.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-forest-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="bg-forest-900 rounded-2xl p-8 sm:p-12 text-cream-100 border border-gold-500/30 shadow-luxury">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              Trusted Across Cambodia
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
              Fourteen Years of Visual Clarity
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-forest-800">
            {storeInfo.stats.map((stat, i) => (
              <div key={i} className="pt-6 lg:pt-0 lg:px-4 first:pt-0">
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-gold">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-cream-200/80 uppercase tracking-wider mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-gold-400 shrink-0" />
              <p className="text-xs text-cream-200/90">
                Official authorized dealer for ZEISS, Hoya, and independent Japanese artisanal eyewear marques.
              </p>
            </div>
            <Button
              variant="outlineLight"
              size="sm"
              href="#contact-inquiry"
              className="shrink-0"
            >
              Meet Our Optometrists
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
