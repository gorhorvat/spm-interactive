'use client';

import { Box, Container, Typography, Link as MuiLink, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/constants/colors';

export default function AboutSectionSummary() {
  const { language, translations } = useLanguage();

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: colors.background,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            mb: 3,
            textAlign: 'center',
            fontWeight: 700,
            color: colors.textPrimary,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          {translations('aboutTitle')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            textAlign: 'center',
            color: colors.textSecondary,
            maxWidth: 800,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.7,
          }}
        >
          {translations('aboutSummary')}
        </Typography>

        <Box sx={{ textAlign: 'center' }}>
          <Link
            href={language === 'hr' ? '/o-nama' : '/en/about-us'}
            style={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 0,
                border: `2px solid ${colors.primary}`,
                color: colors.primary,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: colors.primary,
                  color: colors.textPrimary,
                  transform: 'translateX(4px)',
                },
              }}
            >
              {translations('learnMore')}
              <ArrowForwardIcon sx={{ fontSize: 20 }} />
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
