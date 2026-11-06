import React from 'react';
import { ArrowUpRight, Heart, Instagram, MapPin, Menu, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { landingContent as content } from './data/landingContent';

function EyewearCard({ item }) {
  return (
    <article className="frame-card">
      <div className="frame-image-wrap">
        <img src={item.image} alt={item.imageAlt} className="frame-image" loading="lazy" />
        <button className="save-frame" aria-label={`Save ${item.name}`}><Heart size={19} /></button>
        {item.promo && <span className="frame-promo">{item.promo}</span>}
      </div>
      <div className="frame-details">
        <div className="frame-copy"><span className="eyebrow">{item.category}</span><h3>{item.name}</h3><p>{item.description}</p></div>
        <div className="frame-actions"><span className="frame-fit">{item.fit}</span><a href={content.links.contact} className="frame-link">Ask us <ArrowUpRight size={16} /></a></div>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vizen Optic home"><span>VIZEN OPTIC</span><small>PHNOM PENH · CAMBODIA</small></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#collection">The collection</a><a href="#about">Our approach</a><a href="#visit">Find us</a></nav>
        <a className="header-cta" href={content.links.contact}>Get in touch <ArrowUpRight size={16} /></a>
        <button className="mobile-menu" aria-label="Open menu"><Menu size={23} /></button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow hero-kicker"><Sparkles size={14} /> {content.hero.kicker}</span>
            <h1>{content.hero.title}<em>{content.hero.accent}</em></h1>
            <p>{content.hero.description}</p>
            <div className="hero-actions"><a className="button button-light" href="#collection">Explore frames <ArrowUpRight size={17} /></a><a className="text-link" href={content.links.contact}>Talk to our team</a></div>
            <div className="hero-note"><span className="note-line" />{content.hero.note}</div>
          </div>
          <div className="hero-visual"><img src={content.hero.image} alt={content.hero.imageAlt} /><div className="hero-image-caption"><span>VIZEN OPTIC</span><span>Find your style here.</span></div><span className="hero-index">01 / 03</span></div>
        </section>

        <section className="collection section-wrap" id="collection">
          <div className="section-heading"><div><span className="eyebrow">A little something for every face</span><h2>Find your <em>everyday pair.</em></h2></div><p>{content.collection.intro}</p></div>
          <div className="frame-grid">{content.frames.map(frame => <EyewearCard key={frame.name} item={frame} />)}</div>
          <div className="collection-foot"><span>Need a hand choosing?</span><a href={content.links.contact}>Ask us for a recommendation <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="season-note"><div><span className="eyebrow">A little seasonal treat</span><h2>{content.promo.title}</h2><p>{content.promo.description}</p></div><a className="button button-dark" href={content.links.contact}>{content.promo.cta} <ArrowUpRight size={17} /></a></section>

        <section className="social-section" id="about"><div className="social-copy"><span className="eyebrow">Out in the world</span><h2>Snap, share,<br /><em>see you there.</em></h2><p>{content.social.description}</p><a className="social-link" href={content.links.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /> {content.social.handle} <ArrowUpRight size={16} /></a></div><a className="social-image" href={content.links.instagram} target="_blank" rel="noreferrer"><img src={content.social.image} alt={content.social.imageAlt} loading="lazy" /><span>Follow along <ArrowUpRight size={16} /></span></a></section>

        <section className="visit-section" id="visit"><div className="visit-image"><img src={content.visit.image} alt={content.visit.imageAlt} loading="lazy" /><span className="eyebrow">Come say hello</span></div><div className="visit-copy"><span className="eyebrow">Your neighborhood eyewear stop</span><h2>Good frames.<br /><em>Good people.</em></h2><p>{content.visit.description}</p><div className="address"><MapPin size={18} /><div><strong>{content.visit.storeName}</strong><span>{content.visit.address}</span></div></div><div className="visit-actions"><a className="button button-dark" href={content.links.map} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17} /></a><a className="call-link" href={`tel:${content.visit.phone}`}><Phone size={16} /> {content.visit.phone}</a></div></div></section>
      </main>

      <footer className="site-footer"><a className="brand footer-brand" href="#top"><span>VIZEN OPTIC</span><small>PHNOM PENH · CAMBODIA</small></a><p>{content.footer}</p><div className="footer-links"><a href={content.links.instagram} aria-label="Instagram"><Instagram size={18} /></a><a href={content.links.contact} aria-label="Message us"><MessageCircle size={18} /></a><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}
