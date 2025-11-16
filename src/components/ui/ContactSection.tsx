'use client';

import { Box, Container, Typography, TextField, Button, Snackbar, Alert, MenuItem } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { packages } from '@/constants';
import { colors } from '@/constants/colors';

interface ContactSectionProps {
  selectedPackage?: string;
  onPackageChange?: (packageName: string) => void;
}

export default function ContactSection({ selectedPackage = '', onPackageChange = () => {} }: ContactSectionProps) {
  const { language, translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const subject = selectedPackage 
        ? `${translations('inquiryAbout')} ${selectedPackage} ${translations('package')}`
        : translations('generalInquiry');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: subject,
          message: formData.message,
          package: selectedPackage || 'N/A',
        }),
      });

      if (response.ok) {
        setSnackbar({ open: true, message: translations('messageSent'), severity: 'success' });
        setFormData({ name: '', email: '', message: '' });
        onPackageChange('');
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setSnackbar({ open: true, message: translations('messageError'), severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: colors.backgroundPaper,
      }}
    >
      <Container maxWidth="md">
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
          {translations('contactTitle')}
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
          {translations('contactDescription')}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            fullWidth
            id="name"
            label={translations('yourName')}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            id="email"
            label={translations('emailAddress')}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            select
            fullWidth
            id="package"
            label={translations('desiredPackage')}
            name="package"
            value={selectedPackage}
            onChange={(e) => onPackageChange(e.target.value)}
          >
            <MenuItem value="">{translations('selectPackage')}</MenuItem>
            {packages.map((pkg) => (
              <MenuItem key={pkg.name} value={pkg.name}>
                {translations(pkg.displayNameKey)}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            id="message"
            label={translations('message')}
            name="message"
            multiline
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
            disabled={loading}
            sx={{
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
            }}
          >
            {loading ? translations('sending') : translations('sendMessage')}
          </Button>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
