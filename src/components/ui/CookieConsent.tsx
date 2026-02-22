'use client';

import { useState, useEffect } from 'react';
import { Box, Button, Typography, Snackbar, Link } from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';
import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/constants/colors';

const COOKIE_CONSENT_KEY = 'spm-cookie-consent';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const { translations, language } = useLanguage();

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setOpen(false);
    
    // Enable Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setOpen(false);
    
    // Disable Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{
        bottom: { xs: 16, sm: 24 },
        '& .MuiSnackbarContent-root': {
          padding: 0,
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: colors.backgroundPaper,
          border: `1px solid ${colors.borderPrimaryLight}`,
          borderRadius: 0,
          boxShadow: `0 8px 32px ${colors.shadowPrimary}`,
          maxWidth: { xs: '90vw', sm: 600, md: 700 },
          p: { xs: 2, sm: 3 },
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <CookieIcon
            sx={{
              color: colors.primary,
              fontSize: { xs: 28, sm: 32 },
              flexShrink: 0,
              mt: 0.5,
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              sx={{
                color: colors.textPrimary,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                lineHeight: 1.6,
                mb: 1,
              }}
            >
              {translations('cookieConsentMessage')}
            </Typography>
            <Link
              href={language === 'hr' ? '/politika-privatnosti' : '/en/privacy-policy'}
              sx={{
                color: colors.primary,
                fontSize: { xs: '0.85rem', sm: '0.9rem' },
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                  color: colors.primaryLight,
                },
              }}
            >
              {translations('cookieLearnMore')}
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant="outlined"
            onClick={handleDecline}
            sx={{
              borderColor: colors.divider,
              color: colors.textSecondary,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              padding: { xs: '8px 16px', sm: '10px 20px' },
              '&:hover': {
                borderColor: colors.textSecondary,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            {translations('cookieDecline')}
          </Button>
          <Button
            variant="contained"
            onClick={handleAccept}
            sx={{
              backgroundColor: colors.primary,
              color: colors.textPrimary,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              padding: { xs: '8px 16px', sm: '10px 20px' },
              '&:hover': {
                backgroundColor: colors.primaryLight,
                boxShadow: `0 4px 12px ${colors.shadowPrimaryHover}`,
              },
            }}
          >
            {translations('cookieAccept')}
          </Button>
        </Box>
      </Box>
    </Snackbar>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

