'use client';

import { AppBar, Toolbar, Container, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, ToggleButton, ToggleButtonGroup } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/constants/colors';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, toggleLanguage, translations } = useLanguage();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const navItems = [
    { label: translations('home'), id: 'home' },
    { label: translations('about'), id: 'about' },
    { label: translations('services'), id: 'services' },
    { label: translations('faq'), id: 'faq' },
    { label: translations('contact'), id: 'contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: colors.background, height: '100%' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item.id)}>
              <ListItemText primary={item.label} sx={{ color: colors.textPrimary }} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component="a" href="mailto:info@fractalbyte.studio">
            <EmailIcon sx={{ mr: 1, color: colors.primary }} />
            <ListItemText primary="info@fractalbyte.studio" sx={{ color: colors.primary }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component="a" href="tel:+385123456789">
            <PhoneIcon sx={{ mr: 1, color: colors.primary }} />
            <ListItemText primary="+385 12 345 6789" sx={{ color: colors.primary }} />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ justifyContent: 'center', mt: 2 }}>
          <ToggleButtonGroup
            value={language}
            exclusive
            onChange={toggleLanguage}
            size="small"
            sx={{
              '& .MuiToggleButton-root': {
                color: colors.textPrimary,
                borderColor: colors.primary,
                '&.Mui-selected': {
                  bgcolor: colors.primary,
                  color: colors.textPrimary,
                  '&:hover': {
                    bgcolor: colors.primaryLight,
                  },
                },
              },
            }}
          >
            <ToggleButton value="hr">HR</ToggleButton>
            <ToggleButton value="en">EN</ToggleButton>
          </ToggleButtonGroup>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => scrollToSection('home')}>
              <Box sx={{ height: 40, position: 'relative', width: 200 }}>
                <Image
                  src="/fractalbyte-logo.png"
                  alt="FRACTALBYTE"
                  fill
                  sizes="200px"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Box>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{ 
                    color: colors.textPrimary,
                    '&:hover': { color: colors.primary },
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Box sx={{ ml: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
                <Button
                  startIcon={<EmailIcon />}
                  href="mailto:info@fractalbyte.studio"
                  sx={{ 
                    color: colors.primary,
                    '&:hover': { color: colors.primaryLight },
                    fontSize: '0.875rem',
                  }}
                >
                  info@fractalbyte.studio
                </Button>
                <Button
                  startIcon={<PhoneIcon />}
                  href="tel:+385123456789"
                  sx={{ 
                    color: colors.primary,
                    '&:hover': { color: colors.primaryLight },
                    fontSize: '0.875rem',
                  }}
                >
                  +385 12 345 6789
                </Button>
                <ToggleButtonGroup
                  value={language}
                  exclusive
                  onChange={toggleLanguage}
                  size="small"
                  sx={{
                    '& .MuiToggleButton-root': {
                      color: colors.textPrimary,
                      borderColor: colors.primary,
                      px: 2,
                      '&.Mui-selected': {
                        bgcolor: colors.primary,
                        color: colors.textPrimary,
                        '&:hover': {
                          bgcolor: colors.primaryLight,
                        },
                      },
                    },
                  }}
                >
                  <ToggleButton value="hr">HR</ToggleButton>
                  <ToggleButton value="en">EN</ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Box>

            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor: colors.background },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
