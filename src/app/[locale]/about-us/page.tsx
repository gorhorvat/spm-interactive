'use client';

import { Box } from '@mui/material';
import Navigation from '@/components/ui/Navigation';
import AboutSection from '@/components/ui/AboutSection';
import Footer from '@/components/ui/Footer';

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <Box sx={{ pt: { xs: 12, md: 14 } }}>
        <AboutSection />
        <Footer />
      </Box>
    </main>
  );
}
