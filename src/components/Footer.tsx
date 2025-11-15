'use client';

import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#040404',
        borderTop: '1px solid rgba(115, 1, 62, 0.3)',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} textAlign="center">
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box sx={{ height: 40, position: 'relative', width: 200 }}>
                <Image
                  src="/fractalbyte-logo.png"
                  alt="FRACTALBYTE"
                  fill
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              </Box>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: '#b0b0b0',
                mb: 3,
                fontSize: '1rem',
              }}
            >
              Crafting Digital Excellence Through Code
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#73013e',
                  '&:hover': { color: '#8a2050' },
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#73013e',
                  '&:hover': { color: '#8a2050' },
                }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#73013e',
                  '&:hover': { color: '#8a2050' },
                }}
              >
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#73013e',
                  '&:hover': { color: '#8a2050' },
                }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: '#808080',
                fontSize: '0.9rem',
              }}
            >
              © {new Date().getFullYear()} FRACTALBYTE. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
