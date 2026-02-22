'use client';

import { Box, Container, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';
import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/constants/colors';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { useState, useEffect } from 'react';

export default function PrivacyPolicyPage() {
  const { translations } = useLanguage();
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // Set date on client side only to avoid hydration mismatch
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  const sections = [
    {
      title: translations('privacySection1Title'),
      content: translations('privacySection1Content'),
      items: [],
    },
    {
      title: translations('privacySection2Title'),
      content: translations('privacySection2Content'),
      items: [
        translations('privacySection2Item1'),
        translations('privacySection2Item2'),
        translations('privacySection2Item3'),
      ],
    },
    {
      title: translations('privacySection3Title'),
      content: translations('privacySection3Content'),
      items: [
        translations('privacySection3Item1'),
        translations('privacySection3Item2'),
        translations('privacySection3Item3'),
      ],
    },
    {
      title: translations('privacySection4Title'),
      content: translations('privacySection4Content'),
      items: [
        translations('privacySection4Item1'),
        translations('privacySection4Item2'),
        translations('privacySection4Item3'),
        translations('privacySection4Item4'),
      ],
    },
    {
      title: translations('privacySection5Title'),
      content: translations('privacySection5Content'),
      items: [
        translations('privacySection5Item1'),
        translations('privacySection5Item2'),
        translations('privacySection5Item3'),
      ],
    },
    {
      title: translations('privacySection6Title'),
      content: translations('privacySection6Content'),
      items: [
        translations('privacySection6Item1'),
        translations('privacySection6Item2'),
        translations('privacySection6Item3'),
      ],
    },
    {
      title: translations('privacySection7Title'),
      content: translations('privacySection7Content'),
      items: [
        translations('privacySection7Item1'),
        translations('privacySection7Item2'),
        translations('privacySection7Item3'),
        translations('privacySection7Item4'),
        translations('privacySection7Item5'),
        translations('privacySection7Item6'),
        translations('privacySection7Item7'),
        translations('privacySection7Item8'),
      ],
    },
    {
      title: translations('privacySection8Title'),
      content: translations('privacySection8Content'),
      items: [
        translations('privacySection8Item1'),
        translations('privacySection8Item2'),
        translations('privacySection8Item3'),
      ],
    },
    {
      title: translations('privacySection9Title'),
      content: translations('privacySection9Content'),
      items: [
        translations('privacySection9Item1'),
        translations('privacySection9Item2'),
        translations('privacySection9Item3'),
        translations('privacySection9Item4'),
      ],
    },
    {
      title: translations('privacySection10Title'),
      content: translations('privacySection10Content'),
      items: [],
    },
    {
      title: translations('privacySection11Title'),
      content: translations('privacySection11Content'),
      items: [],
    },
    {
      title: translations('privacySection12Title'),
      content: translations('privacySection12Content'),
      items: [],
    },
    {
      title: translations('privacySection13Title'),
      content: translations('privacySection13Content'),
      items: [
        translations('privacyContactEmail'),
        translations('privacyContactPhone'),
        translations('privacyContactAddress'),
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: colors.background,
          pt: { xs: 16, md: 18 },
          pb: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              textAlign: 'center',
              fontWeight: 700,
              color: colors.textPrimary,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            {translations('privacyPolicyTitle')}
          </Typography>

          {lastUpdated && (
            <Typography
              variant="body2"
              sx={{
                mb: 6,
                textAlign: 'center',
                color: colors.textSecondary,
                fontSize: '0.9rem',
              }}
            >
              {translations('privacyLastUpdated')}: {lastUpdated}
            </Typography>
          )}

          <Typography
            variant="body1"
            sx={{
              mb: 6,
              color: colors.textSecondary,
              lineHeight: 1.8,
              fontSize: '1.05rem',
            }}
          >
            {translations('privacyIntro')}
          </Typography>

          <Divider sx={{ mb: 6, borderColor: colors.borderPrimary }} />

          {sections.map((section, index) => (
            <Box key={index} sx={{ mb: 5 }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  color: colors.primary,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                }}
              >
                {section.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: section.items.length > 0 ? 2 : 0,
                  color: colors.textSecondary,
                  lineHeight: 1.8,
                }}
              >
                {section.content}
              </Typography>
              {section.items.length > 0 && (
                <List sx={{ pl: 2 }}>
                  {section.items.map((item, itemIndex) => (
                    <ListItem key={itemIndex} sx={{ py: 0.5, px: 0 }}>
                      <ListItemText
                        primary={`• ${item}`}
                        sx={{
                          '& .MuiListItemText-primary': {
                            color: colors.textSecondary,
                            lineHeight: 1.8,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          ))}
        </Container>
      </Box>
      <Footer />
    </>
  );
}

