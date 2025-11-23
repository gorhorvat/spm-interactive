'use client';

import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useLanguage } from '@/contexts/LanguageContext';
import { pricings } from '@/constants';
import { colors } from '@/constants/colors';

export default function PriceListSection() {
  const { translations } = useLanguage();

  return (
    <Box
      id="pricing"
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
          {translations('pricingTitle')}
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
          {translations('pricingDescription')}
        </Typography>

        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            bgcolor: colors.backgroundPaper,
            border: `1px solid ${colors.borderLight}`,
            borderRadius: 0,
          }}
        >
          <Table>
            <colgroup>
            <col style={{ width: '70%' }} />
            <col style={{ width: '30%' }} />
          </colgroup>
            <TableHead>
              <TableRow sx={{ bgcolor: colors.hoverPrimary }}>
                <TableCell
                  sx={{
                    color: colors.textPrimary,
                    fontWeight: 700,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    py: 2.5,
                    borderBottom: `2px solid ${colors.primary}`,
                  }}
                >
                  {translations('pricingItemColumn')}
                </TableCell>
                <TableCell
                  sx={{
                    color: colors.textPrimary,
                    fontWeight: 700,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    py: 2.5,
                    borderBottom: `2px solid ${colors.primary}`,
                  }}
                >
                  {translations('priceColumn')}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pricings.map((pricing, index) => (
                <TableRow
                  key={index}
                  sx={{
                    '&:hover': {
                      bgcolor: colors.backgroundElevated,
                    },
                    '&:last-child td': {
                      borderBottom: 0,
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      color: colors.textPrimary,
                      fontWeight: 500,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      py: 2,
                      borderBottom: `1px solid ${colors.borderLight}`,
                    }}
                  >
                    {translations(pricing.name)}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: colors.textSecondary,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      py: 2,
                      borderBottom: `1px solid ${colors.borderLight}`,
                    }}
                  >
                    {translations(pricing.price)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
