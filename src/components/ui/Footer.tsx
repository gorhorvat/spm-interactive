'use client';

import { Box, Container, Typography, IconButton, Grid, Divider, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/constants/colors';

export default function Footer() {
  const { translations, language } = useLanguage();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: colors.background,
        borderTop: `1px solid ${colors.borderPrimary}`,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              mb: 3,
              gap: { xs: 2, md: 3 },
            }}>
              <Box sx={{
                height: 80,
                width: 80,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Image
                  src="/spm-avatar-grey.png"
                  alt="SPM Interactive Consultants"
                  width={80}
                  height={80}
                />
              </Box>

              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  display: { xs: 'none', md: 'block' },
                  borderColor: colors.primary,
                  height: 100,
                  alignSelf: 'center',
                  mx: 2,
                }}
              />

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, pl: { xs: 0, md: 1 }, alignItems: { xs: 'center', md: 'flex-start' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon sx={{ color: colors.primary, fontSize: 20 }} />
                  <Typography
                    component="a"
                    href="mailto:info@spm-interactive.com"
                    sx={{
                      color: colors.textSecondary,
                      textDecoration: 'none',
                      fontSize: { xs: '0.85rem', md: '0.95rem' },
                      '&:hover': { color: colors.primaryLight },
                    }}
                  >
                    info@spm-interactive.com
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon sx={{ color: colors.primary, fontSize: 20 }} />
                  <Typography
                    component="a"
                    href="tel:+385998446978"
                    sx={{
                      color: colors.textSecondary,
                      textDecoration: 'none',
                      fontSize: { xs: '0.85rem', md: '0.95rem' },
                      '&:hover': { color: colors.primaryLight },
                    }}
                  >
                    +385 99 844 6978
                  </Typography>
                </Box>
              </Box>

              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  display: { xs: 'none', md: 'block' },
                  borderColor: colors.primary,
                  height: 100,
                  alignSelf: 'center',
                  mx: 2,
                }}
              />

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, pl: { xs: 0, md: 1 }, alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  sx={{
                    color: colors.textSecondary,
                    fontSize: { xs: '0.85rem', md: '0.9rem' },
                    fontWeight: 500,
                  }}
                >
                  {translations('companyName')}
                </Typography>
                <Typography
                  sx={{
                    color: colors.textSecondary,
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                  }}
                >
                  {translations('companyAddress')}
                </Typography>
                <Typography
                  sx={{
                    color: colors.textSecondary,
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                  }}
                >
                  {translations('companyCity')}
                </Typography>
                {/* <Typography
                  sx={{
                    color: colors.textSecondary,
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                  }}
                >
                  {translations('companyOIB')}
                </Typography> */}
              </Box>
            </Box>

            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
              <IconButton
                href="mailto:info@spm-interactive.com"
                aria-label="Email SPM Interactive"
                sx={{
                  color: colors.primary,
                  '&:hover': { color: colors.primaryLight, borderRadius: 0 },
                }}
              >
                <EmailIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/spm.interactive/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SPM Interactive Instagram"
                sx={{
                  color: colors.primary,
                  '&:hover': { color: colors.primaryLight, borderRadius: 0 },
                }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/profile.php?id=61583592732443"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SPM Interactive Facebook"
                sx={{
                  color: colors.primary,
                  '&:hover': { color: colors.primaryLight, borderRadius: 0 },
                }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <Link
                href={language === 'hr' ? '/politika-privatnosti' : '/en/privacy-policy'}
                sx={{
                  color: colors.textSecondary,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  '&:hover': {
                    color: colors.primary,
                    textDecoration: 'underline',
                  },
                }}
              >
                {translations('privacyPolicy')}
              </Link>

              <Typography
                variant="body2"
                sx={{
                  color: colors.textTertiary,
                  fontSize: '0.9rem',
                  textAlign: 'center',
                }}
              >
                © {new Date().getFullYear()} SPM Interactive. {translations('allRightsReserved')}.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
