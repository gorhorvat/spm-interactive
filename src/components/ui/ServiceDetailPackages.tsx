'use client';

import { useState } from 'react';
import PricingSection from '@/components/ui/PricingSection';

interface ServiceDetailProps {
  slug: string;
}

export default function ServiceDetailPackages({ slug }: ServiceDetailProps) {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceSelect = (serviceName: string) => {
    setSelectedService(serviceName);
    // Navigate to contact page
    const locale = window.location.pathname.startsWith('/en') ? 'en' : 'hr';
    const contactPath = locale === 'hr' ? '/kontakt' : '/en/contact';
    window.location.href = contactPath + `?service=${serviceName}`;
  };

  // Show PricingSection for web-development
  if (slug === 'web-development') {
    return <PricingSection onServiceSelect={handleServiceSelect} />;
  }

  // Don't show anything for other services
  return null;
}

