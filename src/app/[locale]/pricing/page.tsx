'use client';

import { Box } from '@mui/material';
import Navigation from '@/components/ui/Navigation';
import PriceListSection from '@/components/ui/PriceListSection';
import Footer from '@/components/ui/Footer';

export default function PricingPage() {
  return (
    <main>
      <Navigation />
      <Box sx={{ pt: { xs: 12, md: 14 } }}>
        <PriceListSection />
        <Footer />
      </Box>
    </main>
  );
}
