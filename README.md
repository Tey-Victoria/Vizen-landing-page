# Vizen Optic — Landing Page

A modern luxury landing page for **Vizen Optic**, a premier haute eyewear boutique and clinical optometry clinic located in Phnom Penh, Cambodia.

Built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🎨 Color Palette & Design System

The design is tailored for modern luxury eyewear aesthetics with a rich, refined palette:

- **Forest Green** (`#0B1C13`, `#142E1F`, `#1A3926`, `#234C32`): Conveys clinical prestige, heritage, and timeless luxury.
- **Warm Cream** (`#FDFCF9`, `#FAF6EE`, `#F4ECE0`): Soft, high-fashion background warmth replacing harsh sterile whites.
- **Gold & Champagne** (`#DEB55C`, `#C59A3F`, `#A67D2B`): Elegant metallic accents, festive borders, and luminous highlights.
- **Crisp White** (`#FFFFFF`): Clean product card backgrounds and typography contrast.

---

## 🏛️ Website Sections

1. **Christmas Campaign Hero (`HeroChristmas.jsx`)**
   - High-impact festive luxury banner with holiday greetings.
   - Highlights the Christmas 50% discount on 2nd pairs and complimentary ZEISS lens coatings.
   - Dual CTAs for exploring holiday frames and booking eye examinations.
2. **Featured Eyewear Products (`FeaturedProducts.jsx`)**
   - Interactive category filter (`All`, `Optical Frames`, `Sunglasses`, `Titanium Luxury`, `Limited Edition`).
   - Detailed product cards featuring materials (Japanese Beta-Titanium, Takiron acetate, 18K gold rims), badges, pricing, and favorites.
   - Quick-inspection modal with full craftsmanship specs and warranty details.
3. **Special Promotions (`SpecialPromotions.jsx`)**
   - Three luxury promotions: Christmas Duo Pair Privilege, German ZEISS Lens Upgrade, and 16-Step Japanese Clinical Exam.
   - Interactive one-click promo code copying with animated confirmation.
4. **Why Choose Vizen Optic (`WhyChooseUs.jsx`)**
   - Four core pillars: 16-Step Digital Japanese Optometry, Sabae Handcrafted & Independent Ateliers, Senior Clinical Optometrists & Stylists, and Lifetime Complimentary Atelier Care.
   - Phnom Penh clinic track-record statistics (12,500+ frames, 99.8% precision, 45+ artisan brands, 14 years).
5. **Two Eye-Care Articles (`EyeCareArticles.jsx`)**
   - **Article 1**: *"Preserving Visual Clarity in the Digital Era: The Clinical Guide to High-Energy Blue Light & Asthenopia"* by Dr. Sokha Vannak, OD.
   - **Article 2**: *"The Architecture of Facial Harmony: How to Select Bespoke Frames for Your Bone Structure"* by Chantrea Meng.
   - Includes reading time, author credentials, key clinical takeaways, and an interactive full-article modal reader.
6. **Contact and Customer Inquiry (`ContactInquiry.jsx`)**
   - Store details for Phnom Penh locations: **BKK1 Flagship (Preah Norodom Blvd)** and **Exchange Square Boutique**.
   - Direct hotline, WhatsApp, Telegram (`@vizenoptic`), and email concierge links.
   - Fully interactive appointment booking and customer inquiry form.

---

## 📁 Clean Folder Structure

```
vizen-optic-landing-page/
├── index.html                   # HTML entry point with luxury Google Fonts
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration (port 3000)
├── tailwind.config.js           # Forest, cream & gold theme extensions
├── postcss.config.js            # PostCSS plugins (Tailwind & Autoprefixer)
├── README.md                    # Documentation & setup instructions
├── src/
│   ├── main.jsx                 # React root renderer
│   ├── App.jsx                  # Main page assembler
│   ├── index.css                # Tailwind directives & luxury gradients
│   ├── data/
│   │   ├── storeInfo.js         # Phnom Penh store locations, hours, stats
│   │   ├── products.js          # Eyewear catalog, pricing, materials
│   │   ├── promotions.js        # Festive & clinical promotions, codes
│   │   └── articles.js          # Two clinical and styling eye-care articles
│   └── components/
│       ├── common/
│       │   ├── Navbar.jsx       # Sticky luxury header with mobile drawer
│       │   ├── Footer.jsx       # Detailed footer with branch info & links
│       │   ├── Button.jsx       # Reusable button with gold/forest variants
│       │   ├── Badge.jsx        # Reusable status/highlight pill
│       │   └── SectionTitle.jsx # Consistent luxury section title component
│       └── sections/
│           ├── HeroChristmas.jsx       # 1. Christmas campaign hero
│           ├── FeaturedProducts.jsx    # 2. Featured eyewear products
│           ├── SpecialPromotions.jsx   # 3. Special promotions
│           ├── WhyChooseUs.jsx         # 4. Why Choose Vizen Optic
│           ├── EyeCareArticles.jsx     # 5. Two eye-care articles
│           └── ContactInquiry.jsx      # 6. Contact and customer inquiry
```

---

## 🚀 How to Run the Website Locally

1. Open your terminal in the project directory:
   ```bash
   cd "c:\Users\Asus Vivobook\OneDrive\Vizen Optic Frame\vizen-optic-landing-page"
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
   *(Or the local address displayed in your terminal)*

---

## 📦 Production Build

To generate the optimized production files:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```
