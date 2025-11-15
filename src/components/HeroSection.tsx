'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Image from 'next/image';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #040404 0%, #0d0d0d 50%, #040404 100%)',
        position: 'relative',
        pt: { xs: 12, md: 15 },
        pb: { xs: 8, md: 10 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(115, 1, 62, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            <Image
              src="/fractalbyte-logo.png"
              alt="FRACTALBYTE"
              width={600}
              height={150}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>

          <Typography
            variant="h4"
            sx={{
              mb: 3,
              color: '#b0b0b0',
              fontWeight: 300,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Crafting Digital Excellence Through Code
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 5,
              color: '#b0b0b0',
              maxWidth: 800,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.7,
            }}
          >
            We specialize in creating stunning, high-performance websites and web applications 
            that transform your digital presence. From concept to deployment, we bring your vision to life 
            with cutting-edge technology and creative excellence.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={scrollToContact}
            endIcon={<ArrowDownwardIcon />}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              bgcolor: '#73013e',
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(115, 1, 62, 0.3)',
              '&:hover': {
                bgcolor: '#8a2050',
                boxShadow: '0 6px 20px rgba(115, 1, 62, 0.4)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
