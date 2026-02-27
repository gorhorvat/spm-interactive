'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { useLanguage } from '@/contexts/LanguageContext';
import { values, valueIcons } from '@/constants';
import { getIconComponent } from '@/utils/iconMapper';
import { colors } from '@/constants/colors';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutSection() {
  const { translations } = useLanguage();

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: colors.background,
      }}
    >
      <Container maxWidth="lg">
        <ScrollReveal variant="fade-up">
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
          {translations('aboutTitle')}
        </Typography>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={150}>
        <Typography
          variant="body1"
          sx={{
            mb: 8,
            textAlign: 'center',
            color: colors.textSecondary,
            maxWidth: 800,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.7,
          }}
        >
          {translations('aboutDescription')}
        </Typography>
        </ScrollReveal>

        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <ScrollReveal variant="fade-up" delay={index * 100} threshold={0.1} sx={{ height: '100%' }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  bgcolor: colors.backgroundPaper,
                  border: '1px solid rgba(95, 95, 95, 0.2)',
                  borderRadius: 0,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: colors.borderPrimaryLight,
                    boxShadow: `0 8px 20px ${colors.shadowPrimary}`,
                  },
                }}
              >
                {getIconComponent(valueIcons[translations(value.title)], { sx: { fontSize: 48, color: colors.primary, mb: 2 } })}
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: colors.textPrimary,
                  }}
                >
                  {translations(value.title)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: colors.textSecondary,
                    lineHeight: 1.6,
                  }}
                >
                  {translations(value.description)}
                </Typography>
              </Paper>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
