'use client';

import { Box, Container, Typography, Paper, Link as MuiLink, Chip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import WebIcon from '@mui/icons-material/Web';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TuneIcon from '@mui/icons-material/Tune';
import { useLanguage } from '@/contexts/LanguageContext';
import { packages } from '@/constants';
import { colors } from '@/constants/colors';

const iconMap: { [key: string]: React.ElementType } = {
  WebIcon,
  BusinessCenterIcon,
  ApartmentIcon,
  TuneIcon,
};

interface PricingSectionProps {
  onServiceSelect: (serviceName: string) => void;
}

export default function PricingSection({ onServiceSelect: onServiceSelect }: PricingSectionProps) {
  const { language, translations } = useLanguage();

  const getTierColor = (tier?: string) => {
    switch (tier) {
      case 'Essential':
        return colors.textSecondary;
      case 'Professional':
        return colors.primary;
      case 'Premium':
        return '#FFD700'; // Gold color
      case 'Custom':
        return '#9C27B0'; // Purple color
      default:
        return colors.textSecondary;
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: colors.background,
        width: '100%',
      }}
    >
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
          {translations('tierTitle')}
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
          {translations('tierDescription')}
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
          {packages.map((pkg, index) => {
            const PackageIcon = pkg.icon ? iconMap[pkg.icon] : null;

            return (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  bgcolor: pkg.highlight ? colors.backgroundPaper : colors.background,
                  border: pkg.highlight ? `2px solid ${colors.primary}` : `1px solid ${colors.borderLight}`,
                  borderRadius: 0,
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
                {PackageIcon && (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <PackageIcon
                      sx={{
                        fontSize: 48,
                        color: colors.primary,
                      }}
                    />
                  </Box>
                )}

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 1,
                    minHeight: { xs: '44px', md: '48px' },
                    alignItems: 'center',
                  }}
                >
                  <Chip
                    label={translations(pkg.displayNameKey)}
                    sx={{
                      bgcolor: 'transparent',
                      border: `2px solid ${getTierColor(pkg.tier)}`,
                      borderRadius: 0,
                      color: getTierColor(pkg.tier),
                      fontWeight: 700,
                      fontSize: { xs: '0.95rem', md: '1.1rem' },
                      height: 'auto',
                      py: 1,
                      px: 2,
                      '& .MuiChip-label': {
                        px: 1,
                        whiteSpace: 'nowrap',
                      },
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    minHeight: { xs: '48px', md: '52px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  {pkg.descriptionKey && (
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: 'center',
                        color: colors.textSecondary,
                        fontStyle: 'italic',
                        fontSize: { xs: '0.875rem', md: '0.95rem' },
                      }}
                    >
                      {translations(pkg.descriptionKey)}
                    </Typography>
                  )}
                </Box>

                <Box
                  sx={{
                    minHeight: { xs: '60px', md: '70px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: 'center',
                      fontWeight: 700,
                      color: colors.primary,
                      fontSize: { xs: '1.75rem', md: '2rem' },
                    }}
                  >
                    {translations(pkg.priceRangeKey)}
                  </Typography>
                </Box>

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
                </Box>              <MuiLink
                  href={language === 'hr' ? '/kontakt' : '/en/contact'}
                  onClick={(e) => {
                    e.preventDefault();
                    onServiceSelect(pkg.name);
                  }}
                  sx={{
                    display: 'block',
                    width: '100%',
                    py: 1.5,
                    px: 2,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    textAlign: 'center',
                    borderRadius: 0,
                    transition: 'all 0.3s ease',
                    ...(pkg.highlight
                      ? {
                        bgcolor: colors.primary,
                        color: colors.textPrimary,
                        '&:hover': {
                          bgcolor: colors.primaryLight,
                          transform: 'scale(1.05)',
                          boxShadow: `0 8px 24px ${colors.shadowPrimary}`,
                        },
                      }
                      : {
                        border: `1px solid ${colors.primary}`,
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
                </MuiLink>
              </Paper>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
