'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { services, serviceSlugMap } from '@/constants';
import { colors } from '@/constants/colors';

// Service background images mapped by service slug
const serviceBackgroundImages: { [key: string]: string } = {
  'web-development': '/background-web-development.jpg',
  'hosting': '/background-hosting.jpg',
  'performance-optimization': '/background-performance-optimization.jpg',
  'seo-consulting': '/background-seo-consulting.jpg',
  'migration-modernization': '/background-migration-modernization.jpg',
  'security-compliance': '/background-security-compliance.jpeg',
  'ai-integration': '/background-ai-integration.jpeg',
  'b2b-consulting': '/background-b2b-consulting.jpeg',
};

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

  const getBackgroundImage = (slug?: string) => {
    if (!slug) return serviceBackgroundImages['web-development'];
    return serviceBackgroundImages[slug] || serviceBackgroundImages['web-development'];
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

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {services.map((service, index) => (
            <Box
              key={index}
              className="service-card"
              sx={{
                position: 'relative',
                width: '100%',
                marginBottom: 4,
                minHeight: { xs: '300px', md: '400px' },
                backgroundImage: `url(${getBackgroundImage(service.slug)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 0,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(4, 4, 4, 0.7) 0%, rgba(4, 4, 4, 0.5) 100%)',
                  zIndex: 1,
                  transition: 'all 0.3s ease',
                },
                '&:hover::before': {
                  background: 'linear-gradient(135deg, rgba(4, 4, 4, 0.85) 0%, rgba(4, 4, 4, 0.7) 100%)',
                },

              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  p: { xs: 3, md: 4 },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: { xs: 2, md: 3 },
                    fontWeight: 700,
                    color: colors.textPrimary,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  {translations(service.name)}
                </Typography>
                <Box
                  className="service-description"
                  sx={{
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.textSecondary,
                      lineHeight: 1.6,
                      fontSize: { xs: '0.875rem', md: '0.95rem' },
                      mb: 2,
                    }}
                  >
                    {translations(service.description)}
                  </Typography>
                </Box>

                {/* Learn More button for each service */}
                {service.slug && (
                  <Link href={getServiceUrl(service.slug)} passHref style={{ textDecoration: 'none' }}>
                    <Button
                      variant="outlined"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        alignSelf: 'flex-start',
                        borderColor: colors.primary,
                        color: colors.primary,
                        fontWeight: 600,
                        py: 1,
                        px: 3,
                        borderRadius: 0,
                        textTransform: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
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
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

