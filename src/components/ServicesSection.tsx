'use client';

import { Box, Container, Typography, Paper, IconButton, Collapse, Button, Link } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { services, processSteps, pricingPackages, serviceIcons, timelineIcons } from '@/constants';
import { getIconComponent } from '@/utils/iconMapper';
import { colors } from '@/constants/colors';

interface ServicesSectionProps {
  onPackageSelect: (packageName: string) => void;
}

export default function ServicesSection({ onPackageSelect }: ServicesSectionProps) {
  const { language, translations } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const currentServices = services[language];
  const currentProcessSteps = processSteps[language];
  const currentPricingPackages = pricingPackages[language];

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
            mb: 8,
            textAlign: 'center',
            color: colors.textSecondary,
            maxWidth: 800,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          {translations('servicesDescription')}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {currentServices.map((service, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                bgcolor: colors.background,
                border: `1px solid ${colors.borderLight}`,
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: colors.borderPrimaryLight,
                  boxShadow: '0 4px 12px rgba(115, 1, 62, 0.2)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  p: { xs: 2, md: 3 },
                  cursor: 'pointer',
                }}
                onClick={() => handleToggle(index)}
              >
                <Box
                  sx={{
                    width: { xs: 80, md: 120 },
                    height: { xs: 80, md: 120 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: colors.hoverPrimary,
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                >
                  {getIconComponent(serviceIcons[translations(service.name)], { sx: { fontSize: 80, color: colors.primary } })}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                      color: colors.textPrimary,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                    }}
                  >
                    {translations(service.name)}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: colors.textSecondary,
                      lineHeight: 1.6,
                    }}
                  >
                    {translations(service.description)}
                  </Typography>
                </Box>
                <IconButton
                  sx={{
                    color: colors.primary,
                    bgcolor: colors.hoverPrimary,
                    '&:hover': {
                      bgcolor: colors.shadowPrimary,
                    },
                  }}
                >
                  {expandedIndex === index ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
              </Box>
              <Collapse in={expandedIndex === index}>
                <Box
                  sx={{
                    p: { xs: 2, md: 3 },
                    pt: 0,
                    borderTop: `1px solid ${colors.borderLight}`,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: colors.textSecondary,
                      lineHeight: 1.8,
                      mt: 2,
                    }}
                  >
                    {translations(service.expandedContent)}
                    {service.link && (
                      <Link
                        href={service.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: colors.primary,
                          textDecoration: 'none',
                          fontWeight: 600,
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        {service.link.text}
                      </Link>
                    )}
                  </Typography>
                </Box>
              </Collapse>
            </Paper>
          ))}
        </Box>

        {/* Website Design Process Timeline */}
        <Box sx={{ mt: 12 }}>
          <Typography
            variant="h3"
            sx={{
              mb: 6,
              textAlign: 'center',
              fontWeight: 700,
              color: colors.textPrimary,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
            }}
          >
            {translations('processTitle')}
          </Typography>

          <Timeline position="alternate">
            {currentProcessSteps.map((step, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ display: { xs: 'none', md: 'block' }, m: 'auto 0' }}
                  variant="body2"
                  color={colors.textSecondary}
                >
                  {/* Empty opposite content for cleaner look */}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: colors.borderPrimary }} />
                  <TimelineDot
                    sx={{
                      bgcolor: colors.hoverPrimary,
                      border: `2px solid ${colors.primary}`,
                      p: 1.5,
                    }}
                  >
                    <Box sx={{ color: colors.primary, display: 'flex', fontSize: 32 }}>
                      {getIconComponent(timelineIcons[index], { sx: { fontSize: 32 } })}
                    </Box>
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: colors.borderPrimary }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      bgcolor: colors.background,
                      border: `1px solid ${colors.borderLight}`,
                      borderRadius: 2,
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        color: colors.textPrimary,
                        fontWeight: 600,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                      }}
                    >
                      {translations(step)}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* Pricing Packages */}
      </Container>
      
      <Box sx={{ mt: 12, width: '100%' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              textAlign: 'center',
              fontWeight: 700,
              color: colors.textPrimary,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
            }}
          >
            {translations('packagesTitle')}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: colors.textSecondary,
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            {translations('packagesDescription')}
          </Typography>
        </Container>

        <Container maxWidth={false} sx={{ px: { xs: 2, md: 4, lg: 6 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
              gap: 3,
              maxWidth: '1800px',
              mx: 'auto',
            }}
          >
            {currentPricingPackages.map((pkg, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  bgcolor: pkg.highlight ? colors.backgroundPaper : colors.background,
                  border: pkg.highlight ? `2px solid ${colors.primary}` : `1px solid ${colors.borderLight}`,
                  borderRadius: 3,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: colors.primary,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    textAlign: 'center',
                    fontWeight: 700,
                    color: colors.textPrimary,
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                  }}
                >
                  {pkg.displayName || pkg.name}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    textAlign: 'center',
                    fontWeight: 700,
                    color: colors.primary,
                    fontSize: { xs: '1.75rem', md: '2rem' },
                  }}
                >
                  {pkg.priceRange}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: '0.875rem',
                      color: colors.textSecondary,
                      ml: 1,
                    }}
                  >
                    {translations('vat')}
                  </Typography>
                </Typography>

                <Box sx={{ flex: 1, mb: 3 }}>
                  {pkg.features.map((feature, fIndex) => (
                    <Box
                      key={fIndex}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1,
                        mb: 1.5,
                      }}
                    >
                      <CheckIcon
                        sx={{
                          color: colors.primary,
                          fontSize: 20,
                          mt: 0.25,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: colors.textSecondary,
                          fontSize: '0.85rem',
                          lineHeight: 1.5,
                        }}
                      >
                        {translations(feature)}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Button
                  variant={pkg.highlight ? 'contained' : 'outlined'}
                  fullWidth
                  onClick={() => onPackageSelect(pkg.name)}
                  sx={{
                    py: 1.5,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    ...(pkg.highlight
                      ? {
                          '&:hover': {
                            bgcolor: colors.primaryLight,
                            transform: 'scale(1.05)',
                            boxShadow: `0 8px 24px ${colors.shadowPrimary}`,
                          },
                        }
                      : {
                          borderColor: colors.primary,
                          color: colors.primary,
                          '&:hover': {
                            borderColor: colors.primaryLight,
                            bgcolor: colors.primary,
                            color: '#fff',
                            transform: 'scale(1.05)',
                            boxShadow: `0 4px 12px ${colors.shadowPrimary}`,
                          },
                        }),
                  }}
                >
                  {translations('requestOffer')}
                </Button>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
      </Container>
    </Box>
  );
}
