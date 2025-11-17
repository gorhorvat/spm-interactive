'use client';

import { Box, Container, Typography, IconButton, Grid, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/constants/colors';

export default function Footer() {
  const { translations } = useLanguage();
  
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
              justifyContent: 'center', 
              alignItems: 'center',
              mb: 3,
              gap: 3,
            }}>
              <Box sx={{ 
                height: 60, 
                width: 60, 
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Image
                  src="/fractalbyte-avatar-grey.png"
                  alt="FRACTALBYTE"
                  width={60}
                  height={60}
                />
              </Box>
              
              <Divider 
                orientation="vertical" 
                flexItem 
                sx={{ 
                  borderColor: colors.primary,
                  height: 80,
                  alignSelf: 'center',
                  mx: 2,
                }} 
              />
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, pl: 1 }}>              
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon sx={{ color: colors.primary, fontSize: 20 }} />
                  <Typography
                    component="a"
                    href="mailto:info@fractalbyte.studio"
                    sx={{
                      color: colors.textSecondary,
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      '&:hover': { color: colors.primaryLight },
                    }}
                  >
                    info@fractalbyte.studio
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
                      fontSize: '0.95rem',
                      '&:hover': { color: colors.primaryLight },
                    }}
                  >
                    +385 99 844 6978
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
              <IconButton
                href="mailto:info@fractalbyte.studio"
                sx={{
                  color: colors.primary,
                  '&:hover': { color: colors.primaryLight },
                }}
              >
                <EmailIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/company/fractalbyte-studio/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: colors.primary,
                  '&:hover': { color: colors.primaryLight },
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/fractalbyte.studio/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: colors.primary,
                  '&:hover': { color: colors.primaryLight },
                }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/profile.php?id=61583592732443"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: colors.primary,
                  '&:hover': { color: colors.primaryLight },
                }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: colors.textTertiary,
                fontSize: '0.9rem',
                textAlign: 'center',
              }}
            >
              © {new Date().getFullYear()} FRACTALBYTE. {translations('allRightsReserved')}.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
