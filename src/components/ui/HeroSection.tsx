'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/constants/colors';

export default function HeroSection() {
  const { language, translations } = useLanguage();

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${colors.background} 0%, ${colors.backgroundPaper} 50%, ${colors.background} 100%)`,
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
              color: colors.textSecondary,
              fontWeight: 300,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            {translations('heroTagline')}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 5,
              color: colors.textSecondary,
              maxWidth: 800,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.7,
            }}
          >
            {translations('heroDescription')}
          </Typography>

          <Link
            href={language === 'hr' ? '/kontakt' : '/en/contact'}
            style={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 0,
                textTransform: 'none',
                bgcolor: colors.primaryDark,
                color: colors.textPrimary,
                boxShadow: `0 4px 12px ${colors.shadowPrimary}`,
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: colors.primary,
                  boxShadow: `0 6px 20px ${colors.shadowPrimaryHover}`,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {translations('getStarted')}
              <ArrowDownwardIcon />
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
