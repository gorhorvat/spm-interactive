'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const values = [
  {
    icon: <CodeIcon sx={{ fontSize: 48, color: '#73013e', mb: 2 }} />,
    title: 'Clean Code',
    description: 'We write maintainable, scalable code following industry best practices and modern standards.',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 48, color: '#73013e', mb: 2 }} />,
    title: 'Performance',
    description: 'Lightning-fast websites optimized for speed, SEO, and exceptional user experience.',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 48, color: '#73013e', mb: 2 }} />,
    title: 'Creative Design',
    description: 'Beautiful, responsive designs that capture your brand and engage your audience.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 48, color: '#73013e', mb: 2 }} />,
    title: 'Dedicated Support',
    description: 'Ongoing support and maintenance to keep your digital presence running smoothly.',
  },
];

export default function AboutSection() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#040404',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            mb: 3,
            textAlign: 'center',
            fontWeight: 700,
            color: '#ffffff',
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          About Us
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 8,
            textAlign: 'center',
            color: '#b0b0b0',
            maxWidth: 800,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.7,
          }}
        >
          FRACTALBYTE is a web development company passionate about creating exceptional digital experiences. 
          We combine technical expertise with creative vision to deliver websites and applications 
          that not only look great but perform flawlessly. Our team is dedicated to turning your ideas 
          into powerful digital solutions that drive results.
        </Typography>

        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  bgcolor: '#0d0d0d',
                  border: '1px solid rgba(95, 95, 95, 0.2)',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'rgba(115, 1, 62, 0.4)',
                    boxShadow: '0 8px 20px rgba(115, 1, 62, 0.2)',
                  },
                }}
              >
                {value.icon}
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: '#ffffff',
                  }}
                >
                  {value.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#b0b0b0',
                    lineHeight: 1.6,
                  }}
                >
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
