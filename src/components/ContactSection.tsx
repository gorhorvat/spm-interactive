'use client';

import { Box, Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add email service integration here
  };

  return (
    <Box
      id="contact"
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
          Get In Touch
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
          Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                sx={{
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: '#040404',
                border: '1px solid rgba(95, 95, 95, 0.2)',
                borderRadius: 3,
                mb: 4,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <EmailIcon sx={{ color: '#73013e', fontSize: 28, mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" sx={{ color: '#ffffff', mb: 0.5, fontWeight: 600 }}>
                    Email
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#b0b0b0' }}>
                    info@fractalbyte.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <PhoneIcon sx={{ color: '#73013e', fontSize: 28, mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" sx={{ color: '#ffffff', mb: 0.5, fontWeight: 600 }}>
                    Phone
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#b0b0b0' }}>
                    +385 12 345 6789
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ color: '#73013e', fontSize: 28, mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" sx={{ color: '#ffffff', mb: 0.5, fontWeight: 600 }}>
                    Address
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#b0b0b0' }}>
                    Zagreb, Croatia
                  </Typography>
                </Box>
              </Box>
            </Paper>

            <Box
              sx={{
                width: '100%',
                height: 300,
                borderRadius: 3,
                overflow: 'hidden',
                border: '1px solid rgba(95, 95, 95, 0.2)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89513.82768807214!2d15.87786!3d45.81444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d692c902cc39%3A0x3a45249628fbc28a!2sZagreb%2C%20Croatia!5e0!3m2!1sen!2s!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
