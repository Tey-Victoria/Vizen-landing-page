import React, { useState } from 'react';
import { ArrowUpRight, Facebook, Instagram, MapPin, Menu, MessageCircle, Music2, Phone, Sparkles, X } from 'lucide-react';
import { landingContent as content } from './data/landingContent';
import { analyticsEnabled, trackConversion } from './analytics';

function ContactLink({ className, location, children, ...props }) {
  return <a className={className} href={content.links.contact} onClick={() => trackConversion(location)} {...props}>{children}</a>;
}

function EyewearCard({ item, index }) {
  return (
    <article className="frame-card">
      <div className="frame-image-wrap">
        <img src={item.image} alt={item.imageAlt} className="frame-image" loading="lazy" />
        <span className="frame-promo">{item.category}</span>
      </div>
      <div className="frame-details">
        <div className="frame-copy"><h3>{item.name}</h3><p>{item.description}</p></div>
        <div className="frame-actions"><span className="frame-fit">{item.fit}</span><ContactLink className="frame-link" location={`frame_${index + 1}`}>Ask about this frame <ArrowUpRight size={16} /></ContactLink></div>
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vizen Optic home"><span>VIZEN OPTIC</span><small>PHNOM PENH · CAMBODIA</small></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#collection">The collection</a><a href="#fit-guide">Find your fit</a><a href="#visit">Find us</a></nav>
        <ContactLink className="header-cta" location="header">Message us <ArrowUpRight size={16} /></ContactLink>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
        {menuOpen && <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation"><a href="#collection" onClick={closeMenu}>The collection</a><a href="#fit-guide" onClick={closeMenu}>Find your fit</a><a href="#visit" onClick={closeMenu}>Find us</a><ContactLink className="mobile-nav-cta" location="mobile_menu">Message us on Telegram <ArrowUpRight size={16} /></ContactLink></nav>}
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow hero-kicker"><Sparkles size={14} /> {content.hero.kicker}</span>
            <h1>{content.hero.title}<em>{content.hero.accent}</em></h1>
            <p>{content.hero.description}</p>
            <div className="hero-actions"><ContactLink className="button button-light" location="hero_primary">Get a personal recommendation <ArrowUpRight size={17} /></ContactLink><a className="text-link" href="#collection">Explore frames</a></div>
            <div className="hero-note"><span className="note-line" />{content.hero.note}</div>
          </div>
          <div className="hero-visual"><img src={content.hero.image} alt={content.hero.imageAlt} /><div className="hero-image-caption"><span>VIZEN OPTIC</span><span>Find your style here.</span></div><span className="hero-index">01 / 06</span></div>
        </section>

        <section className="collection section-wrap" id="collection">
          <div className="section-heading"><div><span className="eyebrow">A little something for every face</span><h2>Find your <em>everyday pair.</em></h2></div><p>{content.collection.intro}</p></div>
          <div className="frame-grid">{content.frames.map((frame, index) => <EyewearCard key={frame.name} item={frame} index={index} />)}</div>
          <div className="collection-foot"><span>Need a hand choosing?</span><ContactLink className="frame-link" location="collection_help">Message us for a recommendation <ArrowUpRight size={16} /></ContactLink></div>
        </section>

        <section className="fit-guide section-wrap" id="fit-guide">
          <div className="section-heading"><div><span className="eyebrow">A simple place to start</span><h2>Find a frame that <em>feels like you.</em></h2></div><p>Share what matters to you and our team can help narrow down your options.</p></div>
          <div className="fit-grid">
            <article className="fit-card"><span>01</span><h3>Your everyday</h3><p>Think about when you’ll wear your frames most: work, weekends, reading, or a little of everything.</p></article>
            <article className="fit-card"><span>02</span><h3>Your comfort</h3><p>Consider the fit you prefer around your nose and temples, and whether you like a lighter or more noticeable frame.</p></article>
            <article className="fit-card"><span>03</span><h3>Your style</h3><p>Tell us the shapes and colors you’re drawn to. A photo of a style you like can help start the conversation.</p></article>
          </div>
          <ContactLink className="fit-cta" location="fit_guide">Ask for a personal recommendation <ArrowUpRight size={16} /></ContactLink>
        </section>

        <section className="season-note">
          <div className="season-header">
            <div className="season-copy">
              <span className="eyebrow">Free gift with a qualifying purchase</span>
              <h2>{content.promo.title}</h2>
              <p>{content.promo.description}</p>
            </div>
            <ContactLink className="button button-dark" location="seasonal_offer">Ask us on Telegram <ArrowUpRight size={17} /></ContactLink>
          </div>
          <div className="season-gallery">
            {content.promo.images.map((image) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />)}
          </div>
        </section>

        <section className="feedback-section section-wrap" id="feedback">
          <div className="section-heading">
            <div><span className="eyebrow">Customer feedback</span><h2>Kind words from <em>our customers.</em></h2></div>
            <p>{content.feedback.description}</p>
          </div>
          <div className="feedback-grid">
            {content.feedback.images.map((image) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />)}
          </div>
        </section>

        <section className="social-section" id="about">
          <div className="social-copy">
            <span className="eyebrow">Out in the world</span>
            <h2>Snap, share,<br /><em>see you there.</em></h2>
            <p>{content.social.description}</p>
            <div className="social-links">
              <a className="social-link" href={content.links.tiktok} target="_blank" rel="noreferrer"><Music2 size={18} /> TikTok · {content.social.handle} <ArrowUpRight size={16} /></a>
              <a className="social-link" href={content.links.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram · {content.social.instagramHandle} <ArrowUpRight size={16} /></a>
              <a className="social-link" href={content.links.facebook} target="_blank" rel="noreferrer"><Facebook size={18} /> Facebook · {content.social.facebookHandle} <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <a className="social-image" href={content.links.facebook} target="_blank" rel="noreferrer">
            <img src={content.social.image} alt={content.social.imageAlt} loading="lazy" />
            <span>Follow Vizen Optic <ArrowUpRight size={16} /></span>
          </a>
        </section>

        <section className="visit-section" id="visit"><div className="visit-copy"><span className="eyebrow">Your neighborhood eyewear stop</span><h2>Good frames.<br /><em>Good people.</em></h2><p>{content.visit.description}</p><div className="address"><MapPin size={18} /><div><strong>{content.visit.storeName}</strong><span>{content.visit.address}</span></div></div><div className="visit-actions"><a className="call-link" href={`tel:${content.visit.phone}`} onClick={() => trackConversion('visit_phone', 'Phone')}><Phone size={16} /> {content.visit.phone}</a><div className="location-links">{content.links.locations.map((location) => <a key={location.name} className="button button-dark" href={location.url} target="_blank" rel="noreferrer">Directions · {location.name} <ArrowUpRight size={17} /></a>)}</div></div></div></section>
      </main>

      <footer className="site-footer"><a className="brand footer-brand" href="#top"><span>VIZEN OPTIC</span><small>PHNOM PENH · CAMBODIA</small></a><div className="footer-links"><a href={content.links.tiktok} aria-label="TikTok" target="_blank" rel="noreferrer"><Music2 size={18} /></a><a href={content.links.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={18} /></a><a href={content.links.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={18} /></a><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}
