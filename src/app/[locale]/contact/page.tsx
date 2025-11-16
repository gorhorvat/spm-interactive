'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navigation from '@/components/ui/Navigation';
import ContactSection from '@/components/ui/ContactSection';
import Footer from '@/components/ui/Footer';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [selectedPackage, setSelectedPackage] = useState('');

  useEffect(() => {
    const packageParam = searchParams.get('package');
    if (packageParam) {
      setSelectedPackage(packageParam);
    }
  }, [searchParams]);

  return (
    <main>
      <Navigation />
      <ContactSection selectedPackage={selectedPackage} onPackageChange={setSelectedPackage} />
      <Footer />
    </main>
  );
}
