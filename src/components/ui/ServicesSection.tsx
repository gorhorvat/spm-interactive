'use client';

import { Box, Container, Typography, Paper, IconButton, Collapse, Link as MuiLink, Card, CardMedia, CardContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { services, processSteps, serviceIcons, timelineIcons } from '@/constants';
import { getIconComponent } from '@/utils/iconMapper';
import { colors } from '@/constants/colors';

export default function ServicesSection() {
  const { translations } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
          {services.map((service, index) => (
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
                      <MuiLink
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
                      </MuiLink>
                    )}
                  </Typography>
                </Box>
              </Collapse>
            </Paper>
          ))}
        </Box>

        {/* Website Design Process */}
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

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: 1.5,
              maxWidth: 1400,
              mx: 'auto',
            }}
          >
            {processSteps.map((step, index) => (
              <Card
                key={index}
                elevation={0}
                sx={{
                  bgcolor: colors.background,
                  border: `1px solid ${colors.borderLight}`,
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  overflow: 'visible',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: colors.primary,
                    boxShadow: `0 4px 12px ${colors.shadowPrimary}`,
                  },
                }}
              >
                <CardMedia
                  sx={{
                    width: { xs: 60, md: 70 },
                    minWidth: { xs: 60, md: 70 },
                    bgcolor: colors.hoverPrimary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRight: `2px solid ${colors.primary}`,
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      color: colors.primary,
                      fontWeight: 700,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                    }}
                  >
                    {index + 1}
                  </Typography>
                </CardMedia>
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    py: 2,
                    px: 2,
                    '&:last-child': {
                      pb: 2,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 36, md: 40 },
                      height: { xs: 36, md: 40 },
                      minWidth: { xs: 36, md: 40 },
                      borderRadius: '50%',
                      bgcolor: colors.hoverPrimary,
                      border: `2px solid ${colors.primary}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIconComponent(timelineIcons[index], { sx: { fontSize: { xs: 20, md: 24 }, color: colors.primary } })}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: colors.textPrimary,
                      fontWeight: 600,
                      fontSize: { xs: '0.85rem', md: '0.95rem' },
                      lineHeight: 1.3,
                      textAlign: 'center',
                    }}
                  >
                    {translations(step)}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
