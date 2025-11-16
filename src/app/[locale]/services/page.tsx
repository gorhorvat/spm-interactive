'use client';

import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import ServicesSection from '@/components/ui/ServicesSection';
import PricingSection from '@/components/ui/PricingSection';
import Footer from '@/components/ui/Footer';

export default function ServicesPage() {
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
      <ServicesSection />
      <PricingSection onPackageSelect={handlePackageSelect} />
      <Footer />
    </main>
  );
}
