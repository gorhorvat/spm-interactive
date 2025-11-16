# FRACTALBYTE Website

A modern, high-performance multilingual website built with Next.js, React, and Material-UI.

## Features

- 🎨 Modern dark theme with custom color palette
- 📱 Fully responsive design (mobile-first approach)
- ⚡ Optimized for performance with Next.js SSG
- 🌍 Bilingual support (English/Croatian)
- 🎯 SEO-friendly with comprehensive meta tags
- 💼 Professional services showcase with expandable details
- 📦 Pricing packages with feature comparison
- 🗺️ Interactive timeline for development process
- 📧 Contact form with email integration
- ❓ FAQ section with accordions
- 📊 Animated statistics counter
- 🔍 Structured data for search engines

## Tech Stack

- **Framework**: Next.js 14.1.0
- **UI Library**: Material-UI (MUI) v5
- **Language**: TypeScript
- **Styling**: Emotion CSS-in-JS
- **Icons**: Material Icons
- **Email**: Nodemailer
- **Internationalization**: Custom translation system

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
│   ├── api/
│   │   └── contact/         # Contact form API endpoint
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── ThemeRegistry.tsx    # Material-UI theme configuration
│   ├── Navigation.tsx       # Navigation bar with language switcher
│   ├── HeroSection.tsx      # Hero section with CTA
│   ├── AboutSection.tsx     # About section with values
│   ├── ServicesSection.tsx  # Services, process timeline, and pricing
│   ├── Counter.tsx          # Animated statistics counter
│   ├── FAQSection.tsx       # FAQ accordion section
│   ├── ContactSection.tsx   # Contact form and info
│   └── Footer.tsx           # Footer with social links
├── constants/
│   ├── index.ts             # Data constants (services, packages, FAQs, etc.)
│   └── colors.ts            # Color palette configuration
├── contexts/
│   └── LanguageContext.tsx  # Language switching context
├── locales/
│   └── translations.ts      # Translation strings (EN/HR)
└── utils/
    └── iconMapper.tsx       # Icon component mapper utility
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

Create a `.env.local` file in the root directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=info@fractalbyte.studio
```

## SEO & Performance

- Server-side generation for optimal performance
- Comprehensive meta tags and Open Graph data
- Sitemap.xml for search engine indexing
- robots.txt configuration
- Optimized images with Next.js Image component
- Semantic HTML structure
- Mobile-first responsive design

## License

Copyright © 2025 FRACTALBYTE. All rights reserved.
