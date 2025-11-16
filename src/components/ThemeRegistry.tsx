'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactNode } from 'react';
import { colors } from '@/constants/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
      contrastText: colors.textPrimary,
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
      dark: colors.secondaryDark,
      contrastText: colors.textPrimary,
    },
    error: {
      main: colors.error,
      light: colors.errorLight,
      dark: colors.errorDark,
    },
    warning: {
      main: colors.warning,
      light: colors.warningLight,
      dark: colors.warningDark,
    },
    info: {
      main: colors.accent,
      light: colors.accentLight,
      dark: colors.accentDark,
    },
    success: {
      main: colors.success,
      light: colors.successLight,
      dark: colors.successDark,
    },
    background: {
      default: colors.background,
      paper: colors.backgroundPaper,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
      disabled: colors.textTertiary,
    },
    divider: colors.divider,
    action: {
      hover: colors.hoverPrimary,
      selected: colors.selectedPrimary,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
  typography: {
    fontFamily: "'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: colors.textPrimary,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: colors.textPrimary,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: colors.textPrimary,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: colors.textPrimary,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: colors.textPrimary,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: colors.textPrimary,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      color: colors.textSecondary,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      color: colors.textTertiary,
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
          backgroundColor: colors.primary,
          color: colors.textPrimary,
          '&:hover': {
            backgroundColor: colors.primaryLight,
            boxShadow: `0 4px 12px ${colors.shadowPrimaryHover}`,
          },
        },
        outlined: {
          borderColor: colors.primary,
          color: colors.primary,
          '&:hover': {
            backgroundColor: colors.hoverPrimary,
            borderColor: colors.primaryLight,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(4, 4, 4, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${colors.borderPrimary}`,
          color: colors.textPrimary,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.backgroundPaper,
          borderRadius: 12,
          border: `1px solid ${colors.borderLight}`,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            boxShadow: `0 8px 20px ${colors.shadowPrimary}`,
            borderColor: colors.borderPrimaryLight,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: colors.backgroundPaper,
            '& fieldset': {
              borderColor: colors.divider,
            },
            '&:hover fieldset': {
              borderColor: colors.primary,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.primary,
            },
          },
          '& .MuiInputLabel-root': {
            color: colors.textSecondary,
            '&.Mui-focused': {
              color: colors.primary,
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: colors.backgroundPaper,
          border: `1px solid ${colors.borderLight}`,
          borderRadius: 8,
          marginBottom: 16,
          '&:before': {
            display: 'none',
          },
          '&:hover': {
            borderColor: colors.borderPrimaryLight,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          '& .MuiAccordionSummary-content': {
            color: colors.textPrimary,
            fontWeight: 600,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          color: colors.textSecondary,
          lineHeight: 1.6,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.backgroundPaper,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: colors.backgroundElevated,
          color: colors.textPrimary,
          border: `1px solid ${colors.borderLight}`,
          '&.MuiChip-colorPrimary': {
            backgroundColor: colors.primary,
            color: colors.textPrimary,
            borderColor: colors.primary,
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
