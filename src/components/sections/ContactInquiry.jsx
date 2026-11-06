import React, { useState, useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { storeInfo } from '../../data/storeInfo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Calendar,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function ContactInquiry({ prefilledItem }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneOrTelegram: '',
    email: '',
    service: 'Clinical 16-Step Eye Examination',
    location: 'BKK1 Flagship (Preah Norodom Blvd)',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 01:00 PM)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Update form if user clicked an inquiry from products or promotions
  useEffect(() => {
    if (prefilledItem) {
      if (prefilledItem.name) {
        setFormData(prev => ({
          ...prev,
          service: 'Bespoke Frame Consultation & Fitting',
          message: `Inquiring regarding frame: ${prefilledItem.name} (${prefilledItem.series}) - $${prefilledItem.price} USD. Looking for in-store fitting.`,
        }));
      } else if (prefilledItem.title) {
        setFormData(prev => ({
          ...prev,
          service: 'Christmas Special Promotion Claim',
          message: `Claiming promotional offer: ${prefilledItem.title} [Code: ${prefilledItem.code}].`,
        }));
      }
    }
  }, [prefilledItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate luxury appointment concierge dispatch
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phoneOrTelegram: '',
      email: '',
      service: 'Clinical 16-Step Eye Examination',
      location: 'BKK1 Flagship (Preah Norodom Blvd)',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM - 01:00 PM)',
      message: '',
    });
  };

  return (
    <section id="contact-inquiry" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Concierge &amp; Appointments"
          badgeIcon={Calendar}
          title="Visit Our Phnom Penh Lounges"
          subtitle="Reserve a private styling consultation or clinical optometric assessment. Our concierge team responds within two hours."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Store Details & Lounges in Phnom Penh */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Flagship Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-forest-950 text-cream-100 border border-gold-500/30 shadow-luxury">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="gold">Flagship Atelier &amp; Clinic</Badge>
                <span className="text-[11px] text-gold-300 font-mono">BKK1 District</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-medium mb-2">
                Boeung Keng Kang I Flagship
              </h3>
              <p className="text-xs text-cream-200/80 leading-relaxed mb-4 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{storeInfo.flagshipAddress}</span>
              </p>

              {/* Quick Hours */}
              <div className="pt-4 border-t border-forest-800 text-xs space-y-1.5 text-cream-200/90 font-light">
                <div className="flex items-center justify-between">
                  <span>Mon – Sat:</span>
                  <span className="text-gold-300 font-medium">09:00 AM – 08:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Sunday &amp; Holidays:</span>
                  <span className="text-gold-300 font-medium">10:00 AM – 06:30 PM</span>
                </div>
              </div>
            </div>

            {/* Second Boutique Card */}
            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-300/80 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="forest">Mall Boutique</Badge>
                <span className="text-xs text-forest-600 font-medium">Central CBD</span>
              </div>
              <h4 className="font-serif text-xl text-forest-950 font-medium mb-1">
                Exchange Square Boutique
              </h4>
              <p className="text-xs text-forest-800/80 flex items-start gap-2 mb-3">
                <MapPin className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                <span>{storeInfo.secondAddress}</span>
              </p>
              <p className="text-[11px] text-forest-600">
                Daily: 09:30 AM – 09:00 PM
              </p>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-3.5 pt-2">
              <h4 className="text-xs uppercase tracking-widest text-gold-700 font-bold">
                Direct Concierge Desk
              </h4>

              <a
                href="tel:+85523888919"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-cream-200 hover:border-gold-400 text-forest-900 hover:text-gold-600 transition-all shadow-sm group"
              >
                <div className="w-10 h-10 rounded-lg bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-forest-500 uppercase block font-semibold">Hotline &amp; Telephone</span>
                  <span className="text-sm font-semibold">{storeInfo.phone} / {storeInfo.phoneMobile}</span>
                </div>
              </a>

              <a
                href="https://t.me/vizenoptic"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-cream-200 hover:border-gold-400 text-forest-900 hover:text-gold-600 transition-all shadow-sm group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#229ED9]/15 text-[#229ED9] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] text-forest-500 uppercase block font-semibold">Instant Telegram Support</span>
                  <span className="text-sm font-semibold">{storeInfo.telegram}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-forest-400" />
              </a>

              <a
                href={`mailto:${storeInfo.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-cream-200 hover:border-gold-400 text-forest-900 hover:text-gold-600 transition-all shadow-sm group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-500/15 text-gold-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-forest-500 uppercase block font-semibold">Private Client Email</span>
                  <span className="text-sm font-semibold">{storeInfo.email}</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Customer Inquiry & Appointment Form */}
          <div className="lg:col-span-7">
            <div className="bg-cream-50 rounded-2xl p-6 sm:p-10 border border-cream-300 shadow-luxury">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-forest-900 text-gold-400 rounded-full flex items-center justify-center mx-auto shadow-luxury">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal">
                    Inquiry Received with Pleasure
                  </h3>
                  <p className="text-sm text-forest-800 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-forest-950">{formData.fullName || "valued client"}</strong>. Our concierge at Vizen Optic Phnom Penh will contact you shortly via phone/Telegram to confirm your reservation.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="forest"
                      size="md"
                      onClick={resetForm}
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <h3 className="font-serif text-2xl text-forest-950 font-normal mb-1">
                      Reserve a Consultation or Inquire
                    </h3>
                    <p className="text-xs text-forest-700 font-light">
                      Please enter your contact details below. Walk-ins are always welcomed, though appointments ensure dedicated lounge attention.
                    </p>
                  </div>

                  {prefilledItem && (
                    <div className="p-3 bg-gold-500/10 border border-gold-400/40 rounded-lg text-xs text-forest-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
                      <span>
                        Inquiring regarding: <strong>{prefilledItem.name || prefilledItem.title}</strong>
                      </span>
                    </div>
                  )}

                  {/* Name & Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Sothea Chan"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-cream-300 text-forest-950 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
                        Phone / Telegram *
                      </label>
                      <input
                        type="text"
                        name="phoneOrTelegram"
                        required
                        value={formData.phoneOrTelegram}
                        onChange={handleChange}
                        placeholder="e.g. 012 888 999 or @username"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-cream-300 text-forest-950 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service & Location Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-cream-300 text-forest-950 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                      >
                        <option value="Clinical 16-Step Eye Examination">Clinical 16-Step Eye Examination</option>
                        <option value="Bespoke Frame Consultation & Fitting">Bespoke Frame Consultation &amp; Fitting</option>
                        <option value="Christmas Special Promotion Claim">Christmas Special Promotion Claim</option>
                        <option value="ZEISS Prescription Lens Fitting">ZEISS Prescription Lens Fitting</option>
                        <option value="Ultrasonic Spa & Frame Servicing">Ultrasonic Spa &amp; Frame Servicing</option>
                        <option value="Corporate / Family VIP Vision Care">Corporate / Family VIP Vision Care</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
                        Preferred Location
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-cream-300 text-forest-950 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                      >
                        <option value="BKK1 Flagship (Preah Norodom Blvd)">BKK1 Flagship (Preah Norodom Blvd)</option>
                        <option value="Exchange Square Boutique">Exchange Square Boutique</option>
                      </select>
                    </div>
                  </div>

                  {/* Date & Time Preferences */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-cream-300 text-forest-950 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
                        Preferred Time of Day
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-cream-300 text-forest-950 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                      >
                        <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                        <option value="Afternoon (01:00 PM - 05:00 PM)">Afternoon (01:00 PM - 05:00 PM)</option>
                        <option value="Evening (05:00 PM - 08:00 PM)">Evening (05:00 PM - 08:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-forest-900 mb-1.5">
                      Personal Notes / Optical History (Optional)
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Let us know any specific frame styles, current prescription details, or requirements..."
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-cream-300 text-forest-950 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={submitting}
                    className="w-full"
                    icon={Send}
                  >
                    {submitting ? "Transmitting Reservation..." : "Confirm Concierge Booking"}
                  </Button>

                  <p className="text-[11px] text-center text-forest-600">
                    🔒 Your personal information is kept strictly confidential in accordance with medical optometry standards.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
