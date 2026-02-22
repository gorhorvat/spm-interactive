'use client';

import { Box } from '@mui/material';
import Navigation from '@/components/ui/Navigation';
import FAQSection from '@/components/ui/FAQSection';
import Footer from '@/components/ui/Footer';

export default function FAQPage() {
  return (
    <main>
      <Navigation />
      <Box sx={{ pt: { xs: 12, md: 14 } }}>
        <FAQSection />
        <Footer />
      </Box>
    </main>
  );
}
