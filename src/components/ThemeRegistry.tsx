'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactNode } from 'react';

// FRACTALBYTE Dark Color Palette
const themePalette = {
  primary: '#73013e',          // Accent 1 - Deep magenta
  secondary: '#6c2049',        // Accent 2 - Rich burgundy
  accent: '#664054',           // Accent 3 - Muted mauve
  
  // Backgrounds
  background: '#040404',       // Background - Near black
  backgroundPaper: '#0d0d0d',  // Slightly lighter for paper elements
  backgroundElevated: '#1a1a1a', // Elevated surfaces
  
  // Text colors
  foreground: '#5f5f5f',       // Foreground - Medium gray
  textPrimary: '#ffffff',      // White for high emphasis
  textSecondary: '#b0b0b0',    // Light gray for secondary text
  textTertiary: '#808080',     // Medium gray for tertiary text
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: themePalette.primary,
      light: '#8a2050',
      dark: '#5a012f',
      contrastText: themePalette.textPrimary,
    },
    secondary: {
      main: themePalette.secondary,
      light: '#853860',
      dark: '#531539',
      contrastText: themePalette.textPrimary,
    },
    error: {
      main: '#ef5350',
      light: '#e57373',
      dark: '#c62828',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
    },
    info: {
      main: themePalette.accent,
      light: '#7d5868',
      dark: '#4d2f40',
    },
    success: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c',
    },
    background: {
      default: themePalette.background,
      paper: themePalette.backgroundPaper,
    },
    text: {
      primary: themePalette.textPrimary,
      secondary: themePalette.textSecondary,
      disabled: themePalette.textTertiary,
    },
    divider: 'rgba(95, 95, 95, 0.3)',
    action: {
      hover: 'rgba(115, 1, 62, 0.08)',
      selected: 'rgba(115, 1, 62, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
  typography: {
    fontFamily: "'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: themePalette.textPrimary,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: themePalette.textPrimary,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: themePalette.textPrimary,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: themePalette.textPrimary,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: themePalette.textPrimary,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: themePalette.textPrimary,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      color: themePalette.textSecondary,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      color: themePalette.textTertiary,
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 500,
          textTransform: 'none',
        },
        contained: {
          backgroundColor: themePalette.primary,
          color: themePalette.textPrimary,
          '&:hover': {
            backgroundColor: '#8a2050',
            boxShadow: '0 4px 12px rgba(115, 1, 62, 0.4)',
          },
        },
        outlined: {
          borderColor: themePalette.primary,
          color: themePalette.primary,
          '&:hover': {
            backgroundColor: 'rgba(115, 1, 62, 0.08)',
            borderColor: '#8a2050',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(4, 4, 4, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(115, 1, 62, 0.3)',
          color: themePalette.textPrimary,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: themePalette.backgroundPaper,
          borderRadius: 12,
          border: '1px solid rgba(95, 95, 95, 0.2)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            boxShadow: '0 8px 20px rgba(115, 1, 62, 0.2)',
            borderColor: 'rgba(115, 1, 62, 0.4)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: themePalette.backgroundPaper,
            '& fieldset': {
              borderColor: 'rgba(95, 95, 95, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: themePalette.primary,
            },
            '&.Mui-focused fieldset': {
              borderColor: themePalette.primary,
            },
          },
          '& .MuiInputLabel-root': {
            color: themePalette.textSecondary,
            '&.Mui-focused': {
              color: themePalette.primary,
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: themePalette.backgroundPaper,
          border: '1px solid rgba(95, 95, 95, 0.2)',
          borderRadius: 8,
          marginBottom: 16,
          '&:before': {
            display: 'none',
          },
          '&:hover': {
            borderColor: 'rgba(115, 1, 62, 0.4)',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          '& .MuiAccordionSummary-content': {
            color: themePalette.textPrimary,
            fontWeight: 600,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          color: themePalette.textSecondary,
          lineHeight: 1.6,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: themePalette.backgroundPaper,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: themePalette.backgroundElevated,
          color: themePalette.textPrimary,
          border: '1px solid rgba(95, 95, 95, 0.2)',
          '&.MuiChip-colorPrimary': {
            backgroundColor: themePalette.primary,
            color: themePalette.textPrimary,
            borderColor: themePalette.primary,
          },
        },
      },
    },
  },
});

interface ThemeRegistryProps {
  children: ReactNode;
}

export default function ThemeRegistry({ children }: ThemeRegistryProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
