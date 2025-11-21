import { notFound } from 'next/navigation';
import { Box, Container, Typography, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { services } from '@/constants';
import { colors } from '@/constants/colors';
import { getIconComponent, serviceIcons } from '@/utils/iconMapper';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import ProcessSection from '@/components/ui/ProcessSection';
import ServiceDetailPackages from '@/components/ui/ServiceDetailPackages';
import { getTranslation } from '@/utils/serverTranslations';

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
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Box
            sx={{
              width: 120,
              height: 120,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: colors.hoverPrimary,
              borderRadius: 0,
              mx: 'auto',
              mb: 3,
            }}
          >
            {getIconComponent(serviceIcon, { sx: { fontSize: 80, color: colors.primary } })}
          </Box>
          


          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: colors.textPrimary,
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            {serviceName}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: colors.textSecondary,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            {getTranslation(service.description, locale)}
          </Typography>
        </Box>

        {/* Pricing Section */}
        <Paper
          elevation={0}
          sx={{
            bgcolor: colors.background,
            border: `1px solid ${colors.borderLight}`,
            borderRadius: 0,
            p: { xs: 3, md: 4 },
            mb: 4,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: colors.textPrimary,
              mb: 3,
            }}
          >
            {getTranslation('startingFrom', locale)}
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
            {service.contactForPricing ? (
              <Typography
                variant="h4"
                sx={{
                  color: colors.primary,
                  fontWeight: 700,
                }}
              >
                {getTranslation('contactForPricing', locale)}
              </Typography>
            ) : (
              <>
                {service.startingPrice && (
                  <Box>
                    <Typography variant="caption" sx={{ color: colors.textSecondary, display: 'block', mb: 1 }}>
                      {getTranslation('oneTimePrice', locale)}
                    </Typography>
                    <Typography variant="h3" sx={{ color: colors.primary, fontWeight: 700 }}>
                      €{service.startingPrice}
                    </Typography>
                  </Box>
                )}
                {service.recurringPrice && (
                  <Box>
                    <Typography variant="caption" sx={{ color: colors.textSecondary, display: 'block', mb: 1 }}>
                      {getTranslation('recurringPrice', locale)}
                    </Typography>
                    <Typography variant="h3" sx={{ color: colors.primary, fontWeight: 700 }}>
                      €{service.recurringPrice}{getTranslation('perMonth', locale)}
                    </Typography>
                  </Box>
                )}
              </>
            )}
          </Box>
        </Paper>

        {/* Description Section */}
        <Paper
          elevation={0}
          sx={{
            bgcolor: colors.background,
            border: `1px solid ${colors.borderLight}`,
            borderRadius: 0,
            p: { xs: 3, md: 4 },
            mb: 4,
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
            {getTranslation(service.expandedContent, locale)}
          </Typography>
        </Paper>

        {/* Features & Deliverables Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mb: 4 }}>
          {/* Features */}
          {service.features && service.features.length > 0 && (
            <Paper
              elevation={0}
              sx={{
                bgcolor: colors.background,
                border: `1px solid ${colors.borderLight}`,
                borderRadius: 0,
                p: { xs: 3, md: 4 },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: colors.textPrimary,
                  mb: 3,
                }}
              >
                {getTranslation('features', locale)}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {service.features.map((feature, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: colors.primary, fontSize: 24, mt: 0.2 }} />
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
            </Paper>
          )}

          {/* Deliverables */}
          {service.deliverables && service.deliverables.length > 0 && (
            <Paper
              elevation={0}
              sx={{
                bgcolor: colors.background,
                border: `1px solid ${colors.borderLight}`,
                borderRadius: 0,
                p: { xs: 3, md: 4 },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: colors.textPrimary,
                  mb: 3,
                }}
              >
                {getTranslation('deliverables', locale)}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {service.deliverables.map((deliverable, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: colors.primary, fontSize: 24, mt: 0.2 }} />
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
            </Paper>
          )}
        </Box>

        {/* Process Section - Only for Web Development */}
        {service.slug === 'web-development' && <ProcessSection />}
      </Container>

      {/* Packages Section - For Web Development and Maintenance Support */}
      <ServiceDetailPackages slug={service.slug || ''} />
    </Box>
    <Footer />
    </>
  );
}

