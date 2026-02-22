// SPM Interactive Color Palette
export const colors = {
  // Primary colors
  primary: '#39d5d3',          // Teal cyan
  primaryLight: '#5ce7e5',     // Lighter teal
  primaryDark: '#1fb3b1',      // Darker teal
  
  secondary: '#2db8b6',        // Secondary teal
  secondaryLight: '#55cac9',   // Lighter secondary
  secondaryDark: '#1a9492',    // Darker secondary
  
  accent: '#17928f',           // Accent teal
  accentLight: '#3fa9a7',      // Lighter accent
  accentDark: '#0d6b68',       // Darker accent
  
  // Backgrounds
  background: '#040404',       // Near black
  backgroundPaper: '#0d0d0d',  // Slightly lighter for paper elements
  backgroundElevated: '#1a1a1a', // Elevated surfaces
  
  // Text colors
  textPrimary: '#ffffff',      // White for high emphasis
  textSecondary: '#b0b0b0',    // Light gray for secondary text
  textTertiary: '#808080',     // Medium gray for tertiary text
  
  // Foreground
  foreground: '#5f5f5f',       // Medium gray
  
  // Status colors
  error: '#ef5350',
  errorLight: '#e57373',
  errorDark: '#c62828',
  
  warning: '#ff9800',
  warningLight: '#ffb74d',
  warningDark: '#f57c00',
  
  success: '#66bb6a',
  successLight: '#81c784',
  successDark: '#388e3c',

  gold: '#FFD700',
  
  // UI elements
  divider: 'rgba(57, 213, 211, 0.2)',
  borderLight: 'rgba(57, 213, 211, 0.15)',
  borderPrimary: 'rgba(57, 213, 211, 0.3)',
  borderPrimaryLight: 'rgba(92, 231, 229, 0.4)',
  
  // Overlays and effects
  hoverPrimary: 'rgba(57, 213, 211, 0.12)',
  selectedPrimary: 'rgba(57, 213, 211, 0.24)',
  shadowPrimary: 'rgba(57, 213, 211, 0.15)',
  shadowPrimaryHover: 'rgba(57, 213, 211, 0.35)',
} as const;

export type ColorKey = keyof typeof colors;
