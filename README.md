# FRACTALBYTE Website

A modern, high-performant multilingual website built with Next.js, React, and Material-UI.

## Features

- 🎨 Modern dark theme with custom color palette
- 📱 Fully responsive design (mobile-first approach)
- ⚡ Optimized for performance with Next.js App Router
- 🌍 Bilingual support (English/Croatian) with next-intl
- 🔗 SEO-friendly URLs (Croatian: /, /o-nama, /usluge, /cesta-pitanja, /kontakt)
- 🌐 English routes with /en prefix (/en, /en/about-us, /en/services, /en/faq, /en/contact)
- 🎯 Comprehensive SEO with meta tags, OpenGraph, and Twitter cards
- 💼 Professional services showcase with expandable details
- 📦 Pricing packages with feature comparison
- 🗺️ Interactive grid for development process steps
- 📧 Contact form with email integration
- ❓ FAQ section with accordions
- 📊 Animated statistics counter
- 🔍 Structured data for search engines
- 🏠 Home page with content summaries and "Learn More" links
- 🚩 Language selector with country flag icons

## Tech Stack

- **Framework**: Next.js 14.1.0 (App Router)
- **UI Library**: Material-UI (MUI) v5
- **Language**: TypeScript
- **Styling**: Emotion CSS-in-JS
- **Icons**: Material Icons
- **Email**: Nodemailer
- **Internationalization**: next-intl v4.5.3

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/                # Dynamic locale routing (hr/en)
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Home page with summaries
│   │   ├── about-us/           # About page with full content
│   │   ├── services/           # Services page with pricing
│   │   ├── faq/                # FAQ page
│   │   ├── contact/            # Contact page with form
│   │   ├── not-found.tsx       # 404 page
│   │   └── [...catchAll]/      # Catch-all for invalid routes
│   └── api/
│       └── contact/            # Contact form API endpoint
├── components/
│   ├── system/
│   │   └── ThemeRegistry.tsx   # Material-UI theme configuration
│   └── ui/
│       ├── Navigation.tsx      # Navigation with language dropdown
│       ├── HeroSection.tsx     # Hero section with CTA link
│       ├── AboutSection.tsx    # Full about section
│       ├── AboutSectionSummary.tsx  # About summary for home
│       ├── ServicesSection.tsx # Services with process steps
│       ├── ServicesSectionSummary.tsx  # Services summary for home
│       ├── PricingSection.tsx  # Pricing packages (reusable)
│       ├── Counter.tsx         # Animated statistics counter
│       ├── FAQSection.tsx      # FAQ accordion section
│       ├── ContactSection.tsx  # Contact form and info
│       └── Footer.tsx          # Footer with social links
├── lib/
│   └── metadata.ts             # SEO metadata helper functions
├── contexts/
│   └── LanguageContext.tsx     # Language switching context
├── locales/
│   └── translations.ts         # Translation strings (EN/HR)
├── utils/
│   └── iconMapper.tsx          # Icon component mapper utility
├── i18n.ts                     # next-intl configuration
└── middleware.ts               # URL rewriting for Croatian routes
```

## Color Palette

### Primary Colors
- **Primary**: #73013e (Deep magenta)
- **Primary Light**: #8a2050
- **Primary Dark**: #5a012f

### Secondary Colors
- **Secondary**: #6c2049 (Rich burgundy)
- **Accent**: #664054 (Muted mauve)

### Backgrounds
- **Background**: #040404 (Near black)
- **Background Paper**: #0d0d0d
- **Background Elevated**: #1a1a1a

### Text
- **Text Primary**: #ffffff (White)
- **Text Secondary**: #b0b0b0 (Light gray)
- **Text Tertiary**: #808080 (Medium gray)
- **Foreground**: #5f5f5f

## Environment Variables

Create a `.env` file in the root directory:

```env
# SMTP Configuration
SMTP_HOST=mail.privateemail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@yourdomain.com
SMTP_PASSWORD=your-email-password

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Note**: The `.env` file is excluded from version control. Never commit sensitive credentials.

## SEO & Performance

- Next.js App Router with optimized routing
- Dynamic locale-based routing with middleware
- Comprehensive meta tags with keywords for each page
- Open Graph images (1200x630) for social media sharing
- Twitter Card metadata for enhanced social previews
- Sitemap.xml with all 10 routes (5 Croatian + 5 English)
- robots.txt configuration for search engine crawlers
- Optimized images with Next.js Image component
- Semantic HTML structure with proper heading hierarchy
- Mobile-first responsive design
- hreflang tags for multilingual SEO

## License

Copyright © 2025 FRACTALBYTE. All rights reserved.
