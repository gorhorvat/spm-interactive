'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import Counter from '@/components/Counter';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState('');

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection onPackageSelect={handlePackageSelect} />
      <Counter />
      <FAQSection />
      <ContactSection selectedPackage={selectedPackage} onPackageChange={setSelectedPackage} />
      <Footer />
    </main>
  );
}
