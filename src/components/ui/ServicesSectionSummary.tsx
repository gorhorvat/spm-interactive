'use client';

import { Box, Container, Typography, Grid, Paper, Link as MuiLink } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { services, serviceIcons } from '@/constants';
import { getIconComponent } from '@/utils/iconMapper';
import { colors } from '@/constants/colors';

export default function ServicesSectionSummary() {
  const { language, translations } = useLanguage();

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: colors.backgroundPaper,
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
          {translations('servicesTitle')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: colors.textSecondary,
            maxWidth: 800,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          {translations('servicesSummary')}
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {services.slice(0, 6).map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  bgcolor: colors.background,
                  border: `1px solid ${colors.borderLight}`,
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: colors.primary,
                    boxShadow: `0 4px 12px ${colors.shadowPrimary}`,
                  },
                }}
              >
                {getIconComponent(serviceIcons[translations(service.name)], { 
                  sx: { fontSize: 48, color: colors.primary, mb: 2 } 
                })}
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1.5,
                    fontWeight: 600,
                    color: colors.textPrimary,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}
                >
                  {translations(service.name)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: colors.textSecondary,
                    lineHeight: 1.6,
                    fontSize: { xs: '0.875rem', md: '0.95rem' },
                  }}
                >
                  {translations(service.description)}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Link
            href={language === 'hr' ? '/usluge' : '/en/services'}
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
                borderRadius: 2,
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
