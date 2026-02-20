'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/ui/HeroSection';
import AboutSectionSummary from '@/components/ui/AboutSectionSummary';
import ServicesSectionSummary from '@/components/ui/ServicesSectionSummary';
import PricingSection from '@/components/ui/PricingSection';
import Counter from '@/components/ui/Counter';
import ContactSection from '@/components/ui/ContactSection';
import Footer from '@/components/ui/Footer';

export default function Home() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const service = searchParams?.get('service');
    if (service) {
      setSelectedService(service);
    }
  }, [searchParams]);

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
      <Counter />
      <ContactSection selectedService={selectedService} onServiceChange={setSelectedService} />
      <Footer />
    </main>
  );
}
