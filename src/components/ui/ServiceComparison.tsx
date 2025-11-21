'use client';

import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/constants/colors';

interface MaintenancePlan {
  tier: string;
  tierKey: string;
  descriptionKey: string;
  price: number;
  features: {
    name: string;
    essential: boolean | string;
    professional: boolean | string;
    premium: boolean | string;
  }[];
}

interface ServiceComparisonProps {
  showDescriptions?: boolean;
}

export default function ServiceComparison({ showDescriptions = false }: ServiceComparisonProps) {
  const { translations } = useLanguage();

  const maintenancePlans: MaintenancePlan = {
    tier: 'Maintenance & support plans',
    tierKey: 'serviceMaintenance',
    descriptionKey: 'serviceMaintenanceDesc',
    price: 200,
    features: [
      {
        name: translations('maintenanceFeature1'),
        essential: translations('maintenanceFeature1Essential'),
        professional: translations('maintenanceFeature1Professional'),
        premium: translations('maintenanceFeature1Premium'),
      },
      {
        name: translations('maintenanceFeature2'),
        essential: false,
        professional: translations('maintenanceFeature2Professional'),
        premium: translations('maintenanceFeature2Premium'),
      },
      {
        name: translations('maintenanceFeature3'),
        essential: translations('maintenanceFeature3Essential'),
        professional: translations('maintenanceFeature3Professional'),
        premium: translations('maintenanceFeature3Premium'),
      },
      {
        name: translations('maintenanceFeature4'),
        essential: translations('maintenanceFeature4Essential'),
        professional: translations('maintenanceFeature4Professional'),
        premium: translations('maintenanceFeature4Premium'),
      },
      {
        name: translations('maintenanceFeature5'),
        essential: true,
        professional: true,
        premium: true,
      },
      {
        name: translations('maintenanceFeature6'),
        essential: translations('maintenanceFeature6Essential'),
        professional: translations('maintenanceFeature6Professional'),
        premium: translations('maintenanceFeature6Premium'),
      },
      {
        name: translations('maintenanceFeature7'),
        essential: false,
        professional: translations('maintenanceFeature7Professional'),
        premium: translations('maintenanceFeature7Premium'),
      },
      {
        name: translations('maintenanceFeature8'),
        essential: translations('maintenanceFeature8Essential'),
        professional: translations('maintenanceFeature8Professional'),
        premium: translations('maintenanceFeature8Premium'),
      },
      {
        name: translations('maintenanceFeature9'),
        essential: false,
        professional: false,
        premium: true,
      },
      {
        name: translations('maintenanceFeature10'),
        essential: false,
        professional: false,
        premium: true,
      },
    ],
  };

  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckCircleIcon sx={{ color: colors.primary, fontSize: 24 }} />
      ) : (
        <RemoveIcon sx={{ color: colors.textSecondary, fontSize: 24 }} />
      );
    }
    return (
      <Typography variant="body2" sx={{ color: colors.textSecondary, fontWeight: 500 }}>
        {value}
      </Typography>
    );
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Essential':
        return colors.textSecondary;
      case 'Professional':
        return colors.primary;
      case 'Premium':
        return colors.gold;
      default:
        return colors.textSecondary;
    }
  };

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: colors.textPrimary,
            mb: 2,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          {translations(maintenancePlans.tierKey)}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: colors.textSecondary,
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          {translations(maintenancePlans.descriptionKey)}
        </Typography>
      </Box>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          bgcolor: colors.background,
          border: `1px solid ${colors.borderLight}`,
          borderRadius: 0,
          overflow: 'auto',
          width: '100%',
          maxWidth: '100%',
          overflowX: { xs: 'auto', md: 'hidden' },
        }}
      >
        <Table sx={{ minWidth: { xs: 650, md: 'auto', tableLayout: 'fixed' } }}>
          <colgroup>
            <col style={{ width: '20%' }} />
            <col style={{ width: '20%' }} />
            <col style={{ width: '20%' }} />
            <col style={{ width: '20%' }} />
          </colgroup>
          <TableHead>
            <TableRow sx={{ bgcolor: colors.hoverPrimary }}>
              <TableCell />
              <TableCell align="center" sx={{ py: 2, verticalAlign: 'top' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: { xs: '40px', md: '36px' } }}>
                  <Chip
                    label="Essential"
                    sx={{
                      bgcolor: 'transparent',
                      border: `2px solid ${getTierColor('Essential')}`,
                      borderRadius: 0,
                      color: getTierColor('Essential'),
                      fontWeight: 700,
                      fontSize: { xs: '0.8rem', md: '0.9rem' },
                      height: 'auto',
                      py: 0.5,
                      '& .MuiChip-label': {
                        px: 1,
                        whiteSpace: 'nowrap',
                      },
                    }}
                  />
                  {showDescriptions && (
                    <Typography variant="body2" sx={{ color: colors.textSecondary, mt: 1, fontSize: '0.75rem' }}>
                      {translations('maintenanceEssentialDesc')}
                    </Typography>
                  )}
                </Box>
              </TableCell>
              <TableCell align="center" sx={{ py: 2, verticalAlign: 'top' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: { xs: '40px', md: '36px' } }}>
                  <Chip
                    label="Professional"
                    sx={{
                      bgcolor: 'transparent',
                      border: `2px solid ${getTierColor('Professional')}`,
                      borderRadius: 0,
                      color: getTierColor('Professional'),
                      fontWeight: 700,
                      fontSize: { xs: '0.8rem', md: '0.9rem' },
                      height: 'auto',
                      py: 0.5,
                      '& .MuiChip-label': {
                        px: 1,
                        whiteSpace: 'nowrap',
                      },
                    }}
                  />
                  {showDescriptions && (
                    <Typography variant="body2" sx={{ color: colors.textSecondary, mt: 1, fontSize: '0.75rem' }}>
                      {translations('maintenanceProfessionalDesc')}
                    </Typography>
                  )}
                </Box>
              </TableCell>
              <TableCell align="center" sx={{ py: 2, verticalAlign: 'top' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: { xs: '40px', md: '36px' } }}>
                  <Chip
                    label="Premium"
                    sx={{
                      bgcolor: 'transparent',
                      border: `2px solid ${getTierColor('Premium')}`,
                      borderRadius: 0,
                      color: getTierColor('Premium'),
                      fontWeight: 700,
                      fontSize: { xs: '0.8rem', md: '0.9rem' },
                      height: 'auto',
                      py: 0.5,
                      '& .MuiChip-label': {
                        px: 1,
                        whiteSpace: 'nowrap',
                      },
                    }}
                  />
                  {showDescriptions && (
                    <Typography variant="body2" sx={{ color: colors.textSecondary, mt: 1, fontSize: '0.75rem' }}>
                      {translations('maintenancePremiumDesc')}
                    </Typography>
                  )}
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {maintenancePlans.features.map((feature, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:nth-of-type(odd)': {
                    bgcolor: colors.backgroundPaper,
                  },
                  '&:hover': {
                    bgcolor: colors.hoverPrimary,
                  },
                }}
              >
                <TableCell sx={{ color: colors.textSecondary, fontWeight: 500, py: 2 }}>
                  {feature.name}
                </TableCell>
                <TableCell align="center" sx={{ py: 2 }}>
                  {renderCell(feature.essential)}
                </TableCell>
                <TableCell align="center" sx={{ py: 2 }}>
                  {renderCell(feature.professional)}
                </TableCell>
                <TableCell align="center" sx={{ py: 2 }}>
                  {renderCell(feature.premium)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

