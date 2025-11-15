'use client';

import { AppBar, Toolbar, Container, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#040404', height: '100%' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item.id)}>
              <ListItemText primary={item.label} sx={{ color: '#ffffff' }} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component="a" href="mailto:info@fractalbyte.com">
            <EmailIcon sx={{ mr: 1, color: '#73013e' }} />
            <ListItemText primary="info@fractalbyte.com" sx={{ color: '#ffffff' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component="a" href="tel:+385123456789">
            <PhoneIcon sx={{ mr: 1, color: '#73013e' }} />
            <ListItemText primary="+385 12 345 6789" sx={{ color: '#ffffff' }} />
          </ListItemButton>
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
                    color: '#ffffff',
                    '&:hover': { color: '#73013e' },
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Box sx={{ ml: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
                <Button
                  startIcon={<EmailIcon />}
                  href="mailto:info@fractalbyte.com"
                  sx={{ 
                    color: '#ffffff',
                    '&:hover': { color: '#73013e' },
                    fontSize: '0.875rem',
                  }}
                >
                  info@fractalbyte.com
                </Button>
                <Button
                  startIcon={<PhoneIcon />}
                  href="tel:+385123456789"
                  sx={{ 
                    color: '#ffffff',
                    '&:hover': { color: '#73013e' },
                    fontSize: '0.875rem',
                  }}
                >
                  +385 12 345 6789
                </Button>
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
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor: '#040404' },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
