import React, { useState } from 'react';
import { articles } from '../../data/articles';
import SectionTitle from '../common/SectionTitle';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { BookOpen, Clock, ArrowRight, X, CheckCircle, Share2, Sparkles, User } from 'lucide-react';

export default function EyeCareArticles() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="eye-care-articles" className="py-20 lg:py-28 bg-cream-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          badge="Ocular Health & Style Journal"
          badgeIcon={BookOpen}
          title="The Vizen Eye Care Editorial"
          subtitle="Clinical wisdom and aesthetic insights curated by our chief optometrists and master frame stylists in Phnom Penh."
          centered={true}
        />

        {/* Two Featured Articles Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden border border-cream-300/80 hover:border-gold-400/60 shadow-sm hover:shadow-luxury transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                {/* Hero Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-forest-900">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="darkGold">
                      {article.category}
                    </Badge>
                  </div>

                  {/* Reading Time */}
                  <div className="absolute bottom-4 right-4 bg-forest-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-cream-200 flex items-center gap-1.5 border border-gold-500/20">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8">
                  {/* Author Information */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-gold-400/40"
                    />
                    <div>
                      <p className="text-xs font-semibold text-forest-950">
                        {article.author.name}
                      </p>
                      <p className="text-[11px] text-forest-600">
                        {article.author.role} • {article.publishedAt}
                      </p>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="font-serif text-2xl sm:text-2xl font-medium text-forest-950 mb-3 group-hover:text-gold-600 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-forest-800/80 font-light leading-relaxed mb-6">
                    {article.summary}
                  </p>

                  {/* Key Takeaways Box */}
                  <div className="bg-cream-50 rounded-xl p-4 border border-cream-200/80 mb-6">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-gold-700 mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Key Clinical Takeaways:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-forest-800">
                      {article.keyTakeaways.slice(0, 3).map((takeaway, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 flex items-center justify-between border-t border-cream-100 mt-2">
                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-forest-900 group-hover:text-gold-600 transition-colors"
                >
                  <span>Read Full Article &amp; Guidance</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveArticle(article)}
                  className="text-xs"
                >
                  Explore Insight
                </Button>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Full Article Modal Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gold-500/40 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="sticky top-4 right-4 float-right z-20 p-2 rounded-full bg-forest-900 text-gold-300 hover:bg-forest-950 transition-colors shadow-lg"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-10">
              
              {/* Category & Date */}
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="gold">{activeArticle.category}</Badge>
                <span className="text-xs text-forest-500">• {activeArticle.publishedAt}</span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal leading-tight mb-4">
                {activeArticle.title}
              </h2>

              {/* Author Bar */}
              <div className="flex items-center gap-3 py-4 border-y border-cream-200 mb-6">
                <img
                  src={activeArticle.author.avatar}
                  alt={activeArticle.author.name}
                  className="w-12 h-12 rounded-full object-cover border border-gold-400/40"
                />
                <div>
                  <p className="text-sm font-semibold text-forest-950">{activeArticle.author.name}</p>
                  <p className="text-xs text-forest-600">{activeArticle.author.role}</p>
                </div>
              </div>

              {/* Article Hero Banner */}
              <div className="rounded-xl overflow-hidden aspect-[16/9] mb-8">
                <img
                  src={activeArticle.heroImage}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Executive Summary */}
              <div className="bg-cream-100/80 p-5 rounded-xl border border-cream-300 mb-8">
                <h4 className="text-xs uppercase tracking-widest text-gold-700 font-bold mb-2">
                  Executive Summary
                </h4>
                <p className="text-sm text-forest-900 leading-relaxed italic">
                  "{activeArticle.summary}"
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="mb-8">
                <h3 className="font-serif text-lg text-forest-950 font-medium mb-3">
                  Essential Takeaways &amp; Guidance
                </h3>
                <div className="space-y-2">
                  {activeArticle.keyTakeaways.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-forest-800">
                      <CheckCircle className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Sections */}
              <div className="space-y-6 text-sm text-forest-800/90 leading-relaxed mb-10">
                {activeArticle.sections.map((section, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="font-serif text-xl text-forest-950 font-medium pt-2 border-t border-cream-200">
                      {section.heading}
                    </h3>
                    <p className="font-light leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="p-6 rounded-xl bg-forest-950 text-cream-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-lg text-gold-300">
                    Have questions about your visual health?
                  </h4>
                  <p className="text-xs text-cream-200/80 mt-0.5">
                    Consult directly with Dr. Sokha Vannak at our BKK1 flagship lounge.
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  href="#contact-inquiry"
                  onClick={() => setActiveArticle(null)}
                  className="shrink-0"
                >
                  Book Eye Diagnostic
                </Button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
