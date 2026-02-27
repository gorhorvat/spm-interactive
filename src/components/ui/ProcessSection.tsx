'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import { useLanguage } from '@/contexts/LanguageContext';
import { processSteps, timelineIcons } from '@/constants';
import { getIconComponent } from '@/utils/iconMapper';
import { colors } from '@/constants/colors';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ProcessSection() {
  const { translations } = useLanguage();

  return (
    <Box
      sx={{
        mt: 8,
        mb: 8,
        bgcolor: colors.background,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <ScrollReveal variant="fade-up">
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
        </ScrollReveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {processSteps.map((step, index) => (
            <ScrollReveal key={index} variant="fade-up" delay={index * 100} threshold={0.1}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: colors.backgroundPaper,
                border: `1px solid ${colors.borderLight}`,
                borderRadius: 0,
                p: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                minHeight: 120,
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: colors.primary,
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 24px ${colors.shadowPrimary}`,
                },
              }}
            >
              {/* Step Number with vertical border */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 80,
                  height: '100%',
                  borderRight: `3px solid ${colors.primary}`,
                  pl: 2,
                  pr: 2,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    color: colors.primary,
                    fontSize: { xs: '3rem', md: '3.5rem' },
                    lineHeight: 1,
                  }}
                >
                  {index + 1}
                </Typography>
              </Box>

              {/* Content area */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                  py: 3,
                  pr: 2,
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    border: `2px solid ${colors.primary}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getIconComponent(timelineIcons[index], { sx: { fontSize: 32, color: colors.primary } })}
                </Box>

                {/* Step Title */}
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.textPrimary,
                    fontWeight: 600,
                    textAlign: 'center',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  {translations(step)}
                </Typography>
              </Box>
            </Paper>
            </ScrollReveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

