'use client';

import { AppBar, Toolbar, Container, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Select, MenuItem, CircularProgress, Backdrop, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/constants/colors';
import { services, serviceSlugMap } from '@/constants';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { language, toggleLanguage, translations } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleServicesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchorEl(null);
  };

  const handleMobileServicesToggle = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const handleMobileServicesClose = () => {
    setMobileServicesOpen(false);
  };

  const isServicesActive = pathname.includes('/services') || pathname.includes('/usluge');

  const getServiceUrl = (serviceSlug: string) => {
    if (language === 'hr') {
      const hrSlug = serviceSlugMap[serviceSlug] || serviceSlug;
      return `/usluge/${hrSlug}`;
    }
    return `/en/services/${serviceSlug}`;
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    // Close mobile services menu when drawer closes
    if (mobileOpen) {
      handleMobileServicesClose();
    }
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
    { label: translations('pricing'), path: '/cjenik', id: 'pricing' },
    { label: translations('contact'), path: '/kontakt', id: 'contact' },
  ] : [
    { label: translations('home'), path: '/en', id: 'home' },
    { label: translations('about'), path: '/en/about-us', id: 'about' },
    { label: translations('services'), path: '/en/services', id: 'services' },
    { label: translations('faq'), path: '/en/faq', id: 'faq' },
    { label: translations('pricing'), path: '/en/pricing', id: 'pricing' },
    { label: translations('contact'), path: '/en/contact', id: 'contact' },
  ];

  const handleNavClick = (item: typeof navItems[0], e?: React.MouseEvent) => {
    if (isHomepage && item.path === (language === 'hr' ? '/' : '/en')) {
      scrollToSection(item.id);
    } else {
      e?.preventDefault();
      setIsNavigating(true);
      setMobileOpen(false);
      startTransition(() => {
        router.push(item.path);
      });
    }
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', bgcolor: colors.background, height: '100%' }}>
      <List>
        {navItems.map((item) => {
          // Special handling for services dropdown in mobile
          if (item.id === 'services') {
            return (
              <Box key={item.id}>
                <ListItem disablePadding>
                  <ListItemButton
                    component="div"
                    sx={{ textAlign: 'center' }}
                    onClick={handleMobileServicesToggle}
                  >
                    <ListItemText primary={item.label} sx={{ color: colors.textPrimary }} />
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: 18,
                        transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                {/* Mobile Services Submenu */}
                {mobileServicesOpen && (
                  <List sx={{
                    pl: 2,
                    bgcolor: colors.backgroundElevated,
                  }}>
                    {services.filter(s => s.slug).map((service) => (
                      <ListItem key={service.slug} disablePadding>
                        <ListItemButton
                          component={Link}
                          href={getServiceUrl(service.slug!)}
                          onClick={() => {
                            handleMobileServicesClose();
                            handleDrawerToggle();
                          }}
                          sx={{
                            textAlign: 'left',
                            color: colors.textSecondary,
                            '&:hover': { color: colors.primary }
                          }}
                        >
                          <ListItemText
                            primary={translations(service.name)}
                            primaryTypographyProps={{ fontSize: '0.9rem' }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Box>
            );
          }

          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                component="div"
                sx={{ textAlign: 'center' }}
                onClick={(e) => handleNavClick(item, e)}
              >
                <ListItemText primary={item.label} sx={{ color: colors.textPrimary }} />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component="a" href="mailto:info@spm-interactive.com">
            <EmailIcon sx={{ mr: 1, color: colors.primary }} />
            <ListItemText primary="info@spm-interactive.com" sx={{ color: colors.primary }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component="a" href="tel:+385998446978">
            <PhoneIcon sx={{ mr: 1, color: colors.primary }} />
            <ListItemText primary="+385 99 844 6978" sx={{ color: colors.primary }} />
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
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: 'transparent',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.borderLight}`,
                },
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
              <Box sx={{ display: 'flex', padding: 2, alignItems: 'center', cursor: 'pointer' }}>
                <Image
                  src="/spm-logo.png"
                  alt="SPM Interactive"
                  width={144}
                  height={62}
                  priority
                />
              </Box>
            </Link>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {navItems.map((item) => {
                // Special handling for services dropdown
                if (item.id === 'services') {
                  return (
                    <Box
                      key={item.id}
                      sx={{ position: 'relative' }}
                      onMouseEnter={handleServicesMenuOpen}
                      onMouseLeave={handleServicesMenuClose}
                    >
                      <Box
                        component="div"
                        className="services-link"
                        sx={{
                          color: isServicesActive || Boolean(servicesAnchorEl) ? colors.primary : colors.textPrimary,
                          fontWeight: isServicesActive ? 600 : 500,
                          fontSize: { md: '0.8rem', lg: '0.875rem' },
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          px: { md: 1, lg: 2 },
                          py: 1,
                          borderRadius: 0,
                          transition: 'all 0.2s ease',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          '&::after': isServicesActive ? {
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
                        <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
                      </Box>
                      <Menu
                        anchorEl={servicesAnchorEl}
                        open={Boolean(servicesAnchorEl)}
                        onClose={handleServicesMenuClose}
                        MenuListProps={{
                          onMouseLeave: handleServicesMenuClose,
                        }}
                        slotProps={{
                          paper: {
                            onMouseLeave: handleServicesMenuClose,
                          },
                        }}
                        disableEnforceFocus
                        sx={{
                          '& .MuiPaper-root': {
                            bgcolor: 'transparent',
                            backdropFilter: 'blur(10px)',
                            border: `1px solid ${colors.borderLight}`,
                            mt: 1,
                          },
                        }}
                      >
                        {services.filter(s => s.slug).map((service) => (
                          <MenuItem
                            key={service.slug}
                            component={Link}
                            href={getServiceUrl(service.slug!)}
                            onClick={handleServicesMenuClose}
                            sx={{
                              color: colors.textPrimary,
                              '&:hover': { bgcolor: colors.hoverPrimary, color: colors.primary },
                            }}
                          >
                            {translations(service.name)}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  );
                }

                // Regular nav items
                return (
                  <Box
                    key={item.id}
                    component="div"
                    onClick={(e) => handleNavClick(item, e)}
                    sx={{
                      color: pathname === item.path ? colors.primary : colors.textPrimary,
                      '&:hover': { color: colors.primary },
                      fontWeight: pathname === item.path ? 600 : 500,
                      fontSize: { md: '0.8rem', lg: '0.875rem' },
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      px: { md: 1, lg: 2 },
                      py: 1,
                      borderRadius: 0,
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
                );
              })}
              <Box sx={{ ml: { md: 1, lg: 2 }, display: 'flex', gap: { md: 1, lg: 2 }, alignItems: 'center' }}>
                <Link href="mailto:info@spm-interactive.com" style={{ textDecoration: 'none' }}>
                  <Box sx={{
                    display: { md: 'none', lg: 'flex' },
                    alignItems: 'center',
                    gap: 0.5,
                    color: colors.primary,
                    '&:hover': { color: colors.primaryLight },
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                  }}>
                    <EmailIcon sx={{ fontSize: 18 }} />
                    info@spm-interactive.com
                  </Box>
                </Link>
                <Link href="tel:+385998446978" style={{ textDecoration: 'none' }}>
                  <Box sx={{
                    display: { md: 'none', lg: 'flex' },
                    alignItems: 'center',
                    gap: 0.5,
                    color: colors.primary,
                    '&:hover': { color: colors.primaryLight },
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                  }}>
                    <PhoneIcon sx={{ fontSize: 18 }} />
                    +385 99 844 6978
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
              sx={{ display: { lg: 'none' } }}
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
        onClose={() => {
          handleDrawerToggle();
          handleMobileServicesClose();
        }}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            bgcolor: colors.background,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Loading Overlay */}
      <Backdrop
        open={isNavigating || isPending}
        sx={{
          color: colors.primary,
          zIndex: (theme) => theme.zIndex.modal + 1,
          bgcolor: 'rgba(4, 4, 4, 0.9)',
        }}
      >
        <CircularProgress
          size={60}
          thickness={4}
          sx={{
            color: colors.primary,
            '& .MuiCircularProgress-circle': {
              strokeLinecap: 'round',
            },
          }}
        />
      </Backdrop>
    </>
  );
}
