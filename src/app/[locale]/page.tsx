'use client';

import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/ui/HeroSection';
import AboutSectionSummary from '@/components/ui/AboutSectionSummary';
import ServicesSectionSummary from '@/components/ui/ServicesSectionSummary';
import PricingSection from '@/components/ui/PricingSection';
import ServiceComparison from '@/components/ui/ServiceComparison';
import Counter from '@/components/ui/Counter';
import ContactSection from '@/components/ui/ContactSection';
import Footer from '@/components/ui/Footer';

export default function Home() {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceSelect = (serviceName: string) => {
    setSelectedService(serviceName);
    // Navigate to contact page
    const locale = window.location.pathname.startsWith('/en') ? 'en' : 'hr';
    const contactPath = locale === 'hr' ? '/kontakt' : '/en/contact';
    window.location.href = contactPath + `?service=${serviceName}`;
  };

  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSectionSummary />
      <ServicesSectionSummary />
      <PricingSection onServiceSelect={handleServiceSelect} />
      <ServiceComparison />
      <Counter />
      <ContactSection selectedService={selectedService} onServiceChange={setSelectedService} />
      <Footer />
    </main>
  );
}
