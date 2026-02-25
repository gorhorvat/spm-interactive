# SPM Interactive Website

A modern, high-performant multilingual website built with Next.js, React, and Material-UI. It offers a range of services and features for web development, SEO, hosting, and maintenance.

## Features

### Core Features
- 🎨 Modern dark theme with custom color palette
- 📱 Fully responsive design (mobile-first approach)
- ⚡ Optimized for performance with Next.js App Router & Turbopack
- 🌍 Bilingual support (English/Croatian) with next-intl
- 🔗 SEO-friendly URLs with Croatian slugs (/, /o-nama, /usluge, /cesta-pitanja, /kontakt)
- 🌐 English routes with /en prefix (/en, /en/about-us, /en/services, /en/faq, /en/contact)
- 🎯 Comprehensive SEO with meta tags, OpenGraph, and Twitter cards
- 🏠 Home page with content summaries and "Learn More" links
- 🚩 Language selector with country flag icons
- ⏳ Loading spinners with instant navigation feedback
- 🔗 Social media integration (Instagram, Facebook)
- 🤖 AI chatbot overlay with site-aware answers (Groq + Vercel AI SDK)

### Service Pages
- 📄 Individual service detail pages with dynamic routing (/services/[slug])
- 🔄 Bilingual service slugs (e.g., /web-development & /web-razvoj)
- 📋 Service features and deliverables with icons
- 💰 Pricing display (one-time and recurring)
- 📦 Package comparison tables
- 🛠️ Development process visualization
- 🔍 Breadcrumb navigation for better UX

### Services Offered
1. **Web Development** - Custom responsive websites with modern frameworks
2. **Hosting & Deployment** - Cloud hosting with 99.9% uptime
3. **Performance Optimization** - Core Web Vitals and speed improvements
4. **Security & Compliance** - OWASP, WCAG, GDPR/CCPA compliance
5. **AI Integration** - Chatbots, NLP, and AI-powered features
6. **B2B Consulting** - Frontend development, Scrum Master, Product Owner services

### Additional Features
- 📧 Contact form with email integration and notifications
- ❓ FAQ section with accordions
- 📊 Animated statistics counter
- 🔍 Structured data for search engines
- 🍪 Cookie consent banner with GDPR compliance
- 🔒 Privacy policy page with comprehensive data protection information
- 💬 Markdown-formatted chatbot responses (tables, lists, links)

## Tech Stack

- **Framework**: Next.js 16.0.10 (App Router with Turbopack)
- **UI Library**: Material-UI (MUI) v5
- **Language**: TypeScript
- **Styling**: Emotion CSS-in-JS
- **Icons**: Material Icons
- **Email**: Resend
- **Internationalization**: next-intl v4.5.3
- **AI**: Vercel AI SDK + Groq
- **Markdown**: react-markdown + remark-gfm

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
│   ├── [locale]/                      # Dynamic locale routing (hr/en)
│   └── chat/                      # AI chatbot API endpoint
│   │   ├── layout.tsx                # Root layout with SEO metadata
│   │   ├── page.tsx                  # Home page with summaries
│   │   ├── about-us/                 # About page with full content
│   │   ├── services/                 # Services overview page
│   │   │   ├── [slug]/              # Individual service detail pages
│   │   │   │   ├── layout.tsx       # Service layout with breadcrumbs
│   │   │   │   └── page.tsx         # Service detail page
│   │   │   └── page.tsx             # Services listing page
│   │   ├── faq/                      # FAQ page
│   │   ├── pricing/                  # Pricing page
│   │   ├── contact/                  # Contact page with form
│   │   ├── privacy-policy/           # Privacy policy page
│   │   ├── not-found.tsx             # 404 page
│   │   └── [...catchAll]/            # Catch-all for invalid routes
│   ├── api/
│   │   └── contact/                  # Contact form API endpoint
│   ├── opengraph-image.tsx           # Dynamic OG image generation
│   ├── sitemap.ts                    # Dynamic sitemap generation
│   └── globals.css                   # Global styles (minimal)
├── components/
│   ├── system/
│   │   └── ThemeRegistry.tsx         # Material-UI theme configuration
│   └── ui/
│       ├── Navigation.tsx            # Navigation with language dropdown
│       ├── HeroSection.tsx           # Hero section with CTA link
│       ├── AboutSection.tsx          # Full about section
│       ├── ServicesSectionSummary.tsx # Services summary for home

│       ├── ServiceDetailPackages.tsx # Package pricing for service pages
│       ├── ProcessSection.tsx        # Development process display
│       ├── PricingSection.tsx        # Pricing packages (reusable)
│       ├── Counter.tsx               # Animated statistics counter
│       ├── FAQSection.tsx            # FAQ accordion section
│       ├── PriceListSection.tsx      # Pricing section
│       ├── ContactSection.tsx        # Contact form and info
│       ├── CookieConsent.tsx         # Cookie consent banner
│       ├── ChatBot.tsx               # AI chatbot overlay
│       ├── LoadingSpinner.tsx        # Loading spinner component
│       ├── RedirectToHome.tsx        # Shared redirect component
│       └── Footer.tsx                # Footer with social links
├── constants/
│   ├── index.ts                      # Services, packages, FAQs, slug mappings
│   └── colors.ts                     # Color palette constants
├── lib/
│   ├── chatbotKnowledge.ts           # Chatbot knowledge builder
│   └── metadata.ts                   # SEO metadata helper functions
├── locales/
│   └── translations.ts               # Translation strings (EN/HR) - 950+ keys
├── utils/
│   ├── iconMapper.tsx                # Icon component mapper utility
│   └── serverTranslations.ts        # Server-side translation utility
├── i18n.ts                           # next-intl configuration
└── proxy.ts                          # URL rewriting for Croatian routes
```

## Color Palette

### Primary Colors
- **Primary**: #39d5d3 (Teal)
- **Primary Light**: #5ce7e5
- **Primary Dark**: #1fb3b1

### Secondary Colors
- **Secondary**: #004d4b (Dark teal)
- **Accent**: #2a9b99 (Medium teal)

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
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Groq (AI Chatbot)
GROQ_API_KEY=your-groq-api-key

# Mailtrap (API mailer)
MAILTRAP_TOKEN=your-resenmailtrap-token
```

**Note**: The `.env` file is excluded from version control. Never commit sensitive credentials.

## SEO & Performance

### SEO Features
- Next.js App Router with optimized routing and Turbopack
- Dynamic locale-based routing with middleware
- Comprehensive meta tags with location-specific keywords (Croatia, Istria, Pula)
- Dynamic Open Graph images (1200x630) for social media sharing
- Twitter Card metadata for enhanced social previews
- Sitemap.xml with 38 static pages (19 Croatian + 19 English)
- Optimized sitemap priorities and change frequencies
- robots.txt configuration for search engine crawlers
- Semantic HTML structure with proper heading hierarchy
- hreflang tags for multilingual SEO
- Breadcrumb navigation for better UX and SEO
- Structured data for search engines

### Performance Optimizations
- **Incremental Static Regeneration (ISR)** with 24-hour revalidation
  - All layouts configured with `export const revalidate = 86400` (24 hours)
  - Reduces server CPU usage by serving cached static pages
  - Automatically regenerates pages every 24 hours
  - Provides near-instant page loads for users
  - Significantly reduces server load compared to pure SSR
  - **Note**: Pages show as dynamic (ƒ) in build output because they use client components (`'use client'`), but ISR still applies at the layout level
- **On-Demand Revalidation API** at `/api/revalidate`
  - Allows manual cache invalidation when content changes
  - Supports revalidating specific paths, tags, or all pages
  - Secured with `REVALIDATE_SECRET` environment variable
  - Usage: `POST /api/revalidate` with `{ secret, path?, tag? }`
- Static page generation for optimal performance
- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal CSS (96% reduction in unused styles)
- Mobile-first responsive design
- Fast page transitions with instant feedback
- Turbopack for faster builds and hot reload

### Translation System
- 950+ translation keys covering all content
- Centralized translation management
- Server-side and client-side translation utilities
- Bilingual service slugs for SEO-friendly URLs
- All service features and deliverables translated
- Maintenance table fully translated (11 features x 3 tiers)

## Code Quality

### DRY Principles Applied
- Centralized `serviceSlugMap` in constants/index.ts (eliminated 4 duplicates)
- Shared `serverTranslations` utility for server-side translations
- Shared `RedirectToHome` component for consistent redirects
- Reusable components for pricing, services, and comparisons
- Single source of truth for all service data and translations

### Type Safety
- Full TypeScript coverage
- Strict type checking enabled
- Type-safe translation keys
- Type-safe routing with Next.js

### Build Statistics
- **Total Pages**: 38 (19 Croatian + 19 English)
- **Translation Keys**: 950+
- **Services**: 11 with individual detail pages
- **Components**: 25+ reusable UI components
- **CSS Reduction**: 96% (removed 425 lines of unused CSS)
- **Build Time**: ~3-4 seconds with Turbopack
- **Bundle Size**: Optimized with code splitting

## API Routes

### On-Demand Revalidation API

The website includes an API endpoint for manually revalidating cached pages when content changes.

**Endpoint**: `POST /api/revalidate`

**Authentication**: Requires `REVALIDATE_SECRET` environment variable

**Request Body**:
```json
{
  "secret": "your-secret-token",
  "path": "/specific/path",  // Optional: revalidate specific path
  "tag": "tag-name"          // Optional: revalidate by tag
}
```

**Examples**:

1. **Revalidate all pages**:
```bash
curl -X POST https://spm-interactive.com/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{"secret":"your-secret-token"}'
```

2. **Revalidate specific path**:
```bash
curl -X POST https://spm-interactive.com/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{"secret":"your-secret-token","path":"/en/services/web-development"}'
```

3. **Revalidate by tag**:
```bash
curl -X POST https://spm-interactive.com/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{"secret":"your-secret-token","tag":"services"}'
```

**Response**:
```json
{
  "revalidated": true,
  "type": "all",
  "count": 38,
  "now": 1234567890
}
```

**Use Cases**:
- After updating service information in the database
- After changing pricing or package details
- After modifying translations
- When you need immediate cache refresh instead of waiting for the 24-hour revalidation

## License

Copyright © 2025 SPM Interactive. All rights reserved.
