import React, { useState } from 'react';
import { products, productCategories } from '../../data/products';
import SectionTitle from '../common/SectionTitle';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { Eye, Sparkles, X, CheckCircle2, Shield, Heart } from 'lucide-react';

export default function FeaturedProducts({ onSelectProductForInquiry }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState({});

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  const toggleLike = (productId) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleInquire = (product) => {
    if (onSelectProductForInquiry) {
      onSelectProductForInquiry(product);
    }
    setSelectedProduct(null);
    const element = document.getElementById('contact-inquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="featured-products" className="py-20 lg:py-28 bg-cream-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Curated Eyewear Atelier"
          badgeIcon={Sparkles}
          title="Mastercrafted Frames of Phnom Penh"
          subtitle="Precision Japanese beta-titanium and Italian Takiron bio-acetate, engineered for weightless balance and refined presence."
          centered={true}
        />

        {/* Category Filters (Mobile Horizontal Scrollable, Centered on Tablet/Desktop) */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start sm:justify-center">
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap rounded-full transition-all duration-300 font-medium ${
                activeCategory === cat
                  ? 'bg-forest-900 text-gold-300 shadow-luxury border border-gold-400/50'
                  : 'bg-white text-forest-800 hover:bg-cream-200 border border-cream-300/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden border border-cream-300/80 hover:border-gold-400/60 transition-all duration-500 shadow-sm hover:shadow-luxury flex flex-col"
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-[4/3] bg-cream-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {product.badge && (
                    <Badge variant={product.isChristmasPick ? 'festive' : 'gold'}>
                      {product.badge}
                    </Badge>
                  )}
                  {product.isChristmasPick && (
                    <Badge variant="darkGold">
                      Holiday Pick
                    </Badge>
                  )}
                </div>

                {/* Quick Favorite Button */}
                <button
                  type="button"
                  onClick={() => toggleLike(product.id)}
                  aria-label="Save frame to favorites"
                  className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                    likedProducts[product.id]
                      ? 'bg-red-500/90 text-white'
                      : 'bg-white/80 text-forest-900 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${likedProducts[product.id] ? 'fill-white' : ''}`} />
                </button>

                {/* Hover Quick View Button */}
                <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-2.5 px-4 rounded-md bg-forest-900/90 hover:bg-forest-950 text-gold-300 text-xs uppercase tracking-wider font-semibold backdrop-blur-md border border-gold-400/40 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4 text-gold-400" />
                    Quick Inspection &amp; Specs
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-forest-600 mb-1">
                    <span className="uppercase tracking-widest font-semibold">{product.series}</span>
                    <span className="text-forest-500">{product.category}</span>
                  </div>
                  <h3 className="font-serif text-xl text-forest-950 font-medium group-hover:text-gold-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-forest-700/80 line-clamp-2 mt-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Material Specification Pill */}
                <div className="text-[11px] bg-cream-50 border border-cream-200/80 rounded-md p-2 text-forest-800">
                  <span className="font-semibold text-gold-600">Material:</span> {product.material}
                </div>

                {/* Price & Action */}
                <div className="pt-3 border-t border-cream-200 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-forest-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-forest-500 uppercase tracking-wider block">
                      Includes Luxury Case &amp; Exam
                    </span>
                  </div>

                  <Button
                    variant="forest"
                    size="sm"
                    onClick={() => handleInquire(product)}
                  >
                    Inquire
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-forest-900 border border-gold-500/30 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-luxury">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-1">
              Custom Prescription &amp; Fitment
            </span>
            <h4 className="font-serif text-2xl text-cream-50 font-normal">
              Need a personalized frame fitting in Phnom Penh?
            </h4>
            <p className="text-sm text-cream-200/80 mt-1 max-w-xl">
              Our master opticians provide private consultations at our BKK1 flagship lounge to measure pupillary height and face ergonomics.
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            href="#contact-inquiry"
            className="shrink-0"
          >
            Schedule VIP Fitting
          </Button>
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gold-500/40 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-cream-100 text-forest-900 hover:bg-forest-900 hover:text-gold-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="aspect-[16/10] bg-cream-50 rounded-xl overflow-hidden mb-6 relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="gold">{selectedProduct.badge || "Signature Frame"}</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                    {selectedProduct.series} • {selectedProduct.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-medium mt-1">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xl font-serif text-gold-600 font-bold mt-1">
                    ${selectedProduct.price} USD
                  </p>
                </div>

                <p className="text-sm text-forest-800 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-cream-200 text-xs">
                  <div>
                    <span className="text-forest-500 block uppercase font-medium">Material Composition</span>
                    <span className="text-forest-900 font-semibold">{selectedProduct.material}</span>
                  </div>
                  <div>
                    <span className="text-forest-500 block uppercase font-medium">Colorway</span>
                    <span className="text-forest-900 font-semibold">{selectedProduct.color}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-forest-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0" />
                    <span>Includes 1-Year Comprehensive Lens Scratch &amp; Frame Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0" />
                    <span>Complimentary Japanese 16-Step Clinical Eye Examination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0" />
                    <span>Free Ultrasonic Cleaning &amp; Ergonomic Lifetime Re-fitting</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => handleInquire(selectedProduct)}
                    className="flex-1"
                  >
                    Reserve This Frame at BKK1
                  </Button>
                  <Button
                    variant="outlineForest"
                    size="md"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Continue Browsing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
