'use client';

import { AppBar, Toolbar, Container, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Select, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/constants/colors';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, toggleLanguage, translations } = useLanguage();
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Determine if we're on homepage to enable section scrolling
  const isHomepage = pathname === '/' || pathname === '/en';

  const scrollToSection = (sectionId: string) => {
    if (isHomepage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
      }
    }
  };

  // Navigation items with routing paths
  const navItems = language === 'hr' ? [
    { label: translations('home'), path: '/', id: 'home' },
    { label: translations('about'), path: '/o-nama', id: 'about' },
    { label: translations('services'), path: '/usluge', id: 'services' },
    { label: translations('faq'), path: '/cesta-pitanja', id: 'faq' },
    { label: translations('contact'), path: '/kontakt', id: 'contact' },
  ] : [
    { label: translations('home'), path: '/en', id: 'home' },
    { label: translations('about'), path: '/en/about-us', id: 'about' },
    { label: translations('services'), path: '/en/services', id: 'services' },
    { label: translations('faq'), path: '/en/faq', id: 'faq' },
    { label: translations('contact'), path: '/en/contact', id: 'contact' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (isHomepage && item.path === (language === 'hr' ? '/' : '/en')) {
      scrollToSection(item.id);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: colors.background, height: '100%' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton 
              component={Link}
              href={item.path}
              sx={{ textAlign: 'center' }}
              onClick={() => handleNavClick(item)}
            >
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
          <Select
            value={language}
            onChange={(e) => {
              if (e.target.value !== language) {
                toggleLanguage();
              }
            }}
            size="small"
            renderValue={(value) => (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  src={value === 'hr' ? '/flag-hr.png' : '/flag-en.png'}
                  alt={value === 'hr' ? 'Croatian' : 'English'}
                  width={24}
                  height={24}
                />
              </Box>
            )}
            sx={{
              color: colors.textPrimary,
              minWidth: 56,
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .MuiSvgIcon-root': {
                color: colors.primary,
              },
            }}
          >
            <MenuItem value="hr" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                src="/flag-hr.png"
                alt="Croatian"
                width={24}
                height={24}
              />
            </MenuItem>
            <MenuItem value="en" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                src="/flag-en.png"
                alt="English"
                width={24}
                height={24}
              />
            </MenuItem>
          </Select>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Link href={language === 'hr' ? '/' : '/en'} style={{ textDecoration: 'none' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <Image
                  src="/fractalbyte-logo.png"
                  alt="FRACTALBYTE"
                  width={200}
                  height={50}
                  priority
                />
              </Box>
            </Link>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  onClick={() => handleNavClick(item)}
                  style={{ textDecoration: 'none' }}
                >
                  <Box
                    sx={{ 
                      color: pathname === item.path ? colors.primary : colors.textPrimary,
                      '&:hover': { color: colors.primary },
                      fontWeight: pathname === item.path ? 600 : 500,
                      fontSize: '0.875rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      '&::after': pathname === item.path ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '70%',
                        height: '2px',
                        bgcolor: colors.primary,
                      } : {},
                    }}
                  >
                    {item.label}
                  </Box>
                </Link>
              ))}
              <Box sx={{ ml: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
                <Link href="mailto:info@fractalbyte.studio" style={{ textDecoration: 'none' }}>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: colors.primary,
                    '&:hover': { color: colors.primaryLight },
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                  }}>
                    <EmailIcon sx={{ fontSize: 18 }} />
                    info@fractalbyte.studio
                  </Box>
                </Link>
                <Link href="tel:+385123456789" style={{ textDecoration: 'none' }}>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: colors.primary,
                    '&:hover': { color: colors.primaryLight },
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                  }}>
                    <PhoneIcon sx={{ fontSize: 18 }} />
                    +385 12 345 6789
                  </Box>
                </Link>
                <Select
                  value={language}
                  onChange={(e) => {
                    if (e.target.value !== language) {
                      toggleLanguage();
                    }
                  }}
                  size="small"
                  renderValue={(value) => (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Image
                        src={value === 'hr' ? '/flag-hr.png' : '/flag-en.png'}
                        alt={value === 'hr' ? 'Croatian' : 'English'}
                        width={24}
                        height={24}
                      />
                    </Box>
                  )}
                  sx={{
                    color: colors.textPrimary,
                    minWidth: 56,
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '& .MuiSvgIcon-root': {
                      color: colors.primary,
                    },
                  }}
                >
                  <MenuItem value="hr" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      src="/flag-hr.png"
                      alt="Croatian"
                      width={24}
                      height={24}
                    />
                  </MenuItem>
                  <MenuItem value="en" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      src="/flag-en.png"
                      alt="English"
                      width={24}
                      height={24}
                    />
                  </MenuItem>
                </Select>
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
