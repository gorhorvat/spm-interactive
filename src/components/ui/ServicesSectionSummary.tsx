'use client';

import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { services, serviceSlugMap } from '@/constants';
import { getIconComponent, serviceIcons } from '@/utils/iconMapper';
import { colors } from '@/constants/colors';

export default function ServicesSectionSummary() {
  const { language, translations } = useLanguage();

  const getServiceUrl = (serviceSlug?: string) => {
    if (!serviceSlug) return '#';

    if (language === 'hr') {
      const hrSlug = serviceSlugMap[serviceSlug] || serviceSlug;
      return `/usluge/${hrSlug}`;
    }

    return `/en/services/${serviceSlug}`;
  };

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
          {services.map((service, index) => {
            const icon = serviceIcons[service.name] || 'CodeIcon';
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    bgcolor: colors.background,
                    border: `1px solid ${colors.borderLight}`,
                    borderRadius: 0,
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '&:hover': {
                      borderColor: colors.primary,
                      boxShadow: `0 4px 12px ${colors.shadowPrimary}`,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    {getIconComponent(icon, {
                      sx: { fontSize: 48, color: colors.primary }
                    })}
                  </Box>
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
                      mb: 2,
                      flexGrow: 1,
                    }}
                  >
                    {translations(service.description)}
                  </Typography>

                  {/* Learn More button for each service */}
                  {service.slug && (
                    <Link href={getServiceUrl(service.slug)} passHref style={{ textDecoration: 'none' }}>
                      <Button
                        variant="outlined"
                        endIcon={<ArrowForwardIcon />}
                        fullWidth
                        sx={{
                          borderColor: colors.primary,
                          color: colors.primary,
                          fontWeight: 600,
                          py: 1,
                          borderRadius: 0,
                          textTransform: 'none',
                          fontSize: '0.9rem',
                          '&:hover': {
                            borderColor: colors.primary,
                            bgcolor: colors.primary,
                            color: '#fff',
                          },
                        }}
                      >
                        {translations('learnMore')}
                      </Button>
                    </Link>
                  )}
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
