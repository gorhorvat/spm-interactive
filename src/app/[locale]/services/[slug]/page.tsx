import { notFound } from 'next/navigation';
import { Box, Container, Typography, Paper, Link } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ServiceName, ServiceSlug, services } from '@/constants';
import { colors } from '@/constants/colors';
import { getIconComponent, serviceIcons } from '@/utils/iconMapper';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import ProcessSection from '@/components/ui/ProcessSection';
import ServiceDetailPackages from '@/components/ui/ServiceDetailPackages';
import RequestOfferButton from '@/components/ui/RequestOfferButton';
import { getTranslation } from '@/utils/serverTranslations';

// Enable ISR with revalidation every 24 hours
export const revalidate = 86400; // 24 hours in seconds

interface ServiceDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { locale, slug } = await params;

  // Find the service by slug
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceName = getTranslation(service.name, locale);
  // Use translation key to get icon instead of translated name
  const serviceIcon = serviceIcons[service.name];

  return (
    <>
      <Navigation />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: colors.background,
          pt: { xs: 12, md: 16 },
          pb: 8,
        }}
      >
        <Container maxWidth="lg">
          {/* Header Section */}
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            {/* Icon and Title Row */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 2, md: 3 },
                mb: 3,
                flexWrap: 'wrap',
              }}
            >
              <Box
                sx={{
                  width: { xs: 80, md: 100 },
                  height: { xs: 80, md: 100 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: colors.hoverPrimary,
                  borderRadius: 0,
                  flexShrink: 0,
                }}
              >
                {getIconComponent(serviceIcon, { sx: { fontSize: { xs: 60, md: 80 }, color: colors.primary } })}
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: colors.textPrimary,
                  fontSize: { xs: '2rem', md: '3rem' },
                }}
              >
                {serviceName}
              </Typography>
            </Box>

            <Typography
              variant="h6"
              sx={{
                color: colors.textSecondary,
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              {getTranslation(service.description, locale)}
            </Typography>
          </Box>

          {/* Description Section */}
          <Paper
            elevation={0}
            sx={{
              bgcolor: colors.background,
              borderRadius: 0,
              mb: 8,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: colors.textSecondary,
                lineHeight: 1.8,
                fontSize: '1.1rem',
              }}
            >
              {
                service.name === 'serviceB2B' ? <>
                  {getTranslation(service.expandedContent, locale) + ' '}
                  <Link
                    href="https://goranhorvat.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: colors.primary,
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    goranhorvat.dev
                  </Link>
                </> :
                  getTranslation(service.expandedContent, locale)}
            </Typography>
          </Paper>

          {/* Features & Deliverables Grid */}
          {(service.features?.length > 0 || service.deliverables?.length > 0) && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 6,
                px: { xs: 2, md: 0 },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 4,
                  maxWidth: '900px',
                  width: '100%',
                }}
              >
                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: colors.textPrimary,
                        mb: 3,
                        textAlign: 'center',
                      }}
                    >
                      {getTranslation('features', locale)}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                      {service.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 2,
                            p: 1.5,
                            bgcolor: colors.background,
                            border: `1px solid ${colors.borderLight}`,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              borderColor: colors.primary,
                              transform: 'translateX(4px)',
                            },
                          }}
                        >
                          <CheckCircleIcon sx={{ color: colors.primary, fontSize: 24, flexShrink: 0 }} />
                          <Typography
                            variant="body1"
                            sx={{
                              color: colors.textSecondary,
                              lineHeight: 1.6,
                            }}
                          >
                            {getTranslation(feature, locale)}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}

                {/* Deliverables */}
                {service.deliverables && service.deliverables.length > 0 && (
                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: colors.textPrimary,
                        mb: 3,
                        textAlign: 'center',
                      }}
                    >
                      {getTranslation('deliverables', locale)}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                      {service.deliverables.map((deliverable, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 2,
                            p: 1.5,
                            bgcolor: colors.background,
                            border: `1px solid ${colors.borderLight}`,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              borderColor: colors.primary,
                              transform: 'translateX(4px)',
                            },
                          }}
                        >
                          <CheckCircleIcon sx={{ color: colors.primary, fontSize: 24, flexShrink: 0 }} aria-label="deliverable included" />
                          <Typography
                            variant="body1"
                            sx={{
                              color: colors.textSecondary,
                              lineHeight: 1.6,
                            }}
                          >
                            {getTranslation(deliverable, locale)}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          )}

          {/* Process Section - Only for Web Development */}
          {service.slug === ServiceSlug.WEB_DEVELOPMENT && <ProcessSection />}
        </Container>

        {/* Packages Section - For Web Development */}
        <ServiceDetailPackages slug={service.slug || ''} />

        {/* Request Offer Button */}
          {service.name !== ServiceName.WEB_DEVELOPMENT && (
            <Box textAlign='center' sx={{ mt: 8, py: 8 }}>
              <RequestOfferButton
                serviceName={getTranslation(service.name, locale)}
                buttonText={getTranslation('requestOffer', locale)}
              />
            </Box>
          )}
      </Box>
      <Footer />
    </>
  );
}

