'use client';

import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/ui/HeroSection';
import AboutSectionSummary from '@/components/ui/AboutSectionSummary';
import ServicesSectionSummary from '@/components/ui/ServicesSectionSummary';
import PricingSection from '@/components/ui/PricingSection';
import Counter from '@/components/ui/Counter';
import ContactSection from '@/components/ui/ContactSection';
import Footer from '@/components/ui/Footer';

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState('');

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
    // Navigate to contact page
    const locale = window.location.pathname.startsWith('/en') ? 'en' : 'hr';
    const contactPath = locale === 'hr' ? '/kontakt' : '/en/contact';
    window.location.href = contactPath + `?package=${packageName}`;
  };

  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSectionSummary />
      <ServicesSectionSummary />
      <PricingSection onPackageSelect={handlePackageSelect} />
      <Counter />
      <ContactSection />
      <Footer />
    </main>
  );
}
