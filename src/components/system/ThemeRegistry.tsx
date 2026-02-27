'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
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
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    h1: {
      fontFamily: "'Montserrat', 'Inter', sans-serif",
      fontSize: '3rem',
      fontWeight: 700,
      color: colors.textPrimary,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'Montserrat', 'Inter', sans-serif",
      fontSize: '2.4rem',
      fontWeight: 600,
      color: colors.textPrimary,
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "'Montserrat', 'Inter', sans-serif",
      fontSize: '2rem',
      fontWeight: 600,
      color: colors.textPrimary,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: "'Montserrat', 'Inter', sans-serif",
      fontSize: '1.65rem',
      fontWeight: 600,
      color: colors.textPrimary,
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: "'Montserrat', 'Inter', sans-serif",
      fontSize: '1.35rem',
      fontWeight: 500,
      color: colors.textPrimary,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: "'Montserrat', 'Inter', sans-serif",
      fontSize: '1.1rem',
      fontWeight: 500,
      color: colors.textPrimary,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.05rem',
      color: colors.textSecondary,
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.95rem',
      color: colors.textTertiary,
      lineHeight: 1.6,
    },
    button: {
      fontFamily: "'Inter', sans-serif",
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 500,
          textTransform: 'none',
        },
        contained: {
          backgroundColor: colors.primaryDark,
          color: colors.textPrimary,
          '&:hover': {
            backgroundColor: colors.primary,
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
          borderRadius: 0,
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
            borderRadius: 0,
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
          borderRadius: 0,
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
          borderRadius: 0,
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

// This implementation of the MUI Emotion cache is taken from
// https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts
export default function ThemeRegistry({ children }: ThemeRegistryProps) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'mui' });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
