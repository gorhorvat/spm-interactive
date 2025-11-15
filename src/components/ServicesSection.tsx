'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CloudIcon from '@mui/icons-material/Cloud';
import SearchIcon from '@mui/icons-material/Search';
import BrushIcon from '@mui/icons-material/Brush';

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 56, color: '#73013e', mb: 2 }} />,
    name: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
  },
  {
    icon: <BrushIcon sx={{ fontSize: 56, color: '#73013e', mb: 2 }} />,
    name: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that provide exceptional user experiences across all devices.',
  },
  {
    icon: <ShoppingCartIcon sx={{ fontSize: 56, color: '#73013e', mb: 2 }} />,
    name: 'E-Commerce Solutions',
    description: 'Complete online store solutions with secure payment integration and inventory management.',
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 56, color: '#73013e', mb: 2 }} />,
    name: 'Responsive Design',
    description: 'Mobile-first approach ensuring your website looks perfect on any device or screen size.',
  },
  {
    icon: <SearchIcon sx={{ fontSize: 56, color: '#73013e', mb: 2 }} />,
    name: 'SEO Optimization',
    description: 'Search engine optimization to improve your visibility and drive organic traffic to your site.',
  },
  {
    icon: <CloudIcon sx={{ fontSize: 56, color: '#73013e', mb: 2 }} />,
    name: 'Cloud Hosting',
    description: 'Reliable, scalable hosting solutions with ongoing maintenance and technical support.',
  },
];

export default function ServicesSection() {
  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#0d0d0d',
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
          Our Services
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
          }}
        >
          We offer a comprehensive range of web development and design services 
          tailored to meet your business needs.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  bgcolor: '#040404',
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
                {service.icon}
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: '#ffffff',
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                  }}
                >
                  {service.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#b0b0b0',
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
