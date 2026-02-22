'use client';

import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import Navigation from '@/components/ui/Navigation';
import ContactSection from '@/components/ui/ContactSection';
import Footer from '@/components/ui/Footer';
import { packages } from '@/constants';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      // Check if it's a package name (Essential, Professional, Premium, Custom)
      const isPackage = packages.some(pkg => pkg.name === serviceParam);
      if (isPackage) {
        // Format as "Web Design [PackageName]"
        setSelectedService(`Web Design [${serviceParam}]`);
      } else {
        setSelectedService(serviceParam);
      }
    }
  }, [searchParams]);

  return (
    <main>
      <Navigation />
      <Box sx={{ pt: { xs: 12, md: 14 } }}>
        <ContactSection selectedService={selectedService} onServiceChange={setSelectedService} />
        <Footer />
      </Box>
    </main>
  );
}
