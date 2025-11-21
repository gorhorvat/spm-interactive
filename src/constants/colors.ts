// FRACTALBYTE Color Palette
export const colors = {
  // Primary colors
  primary: '#73013e',          // Deep magenta
  primaryLight: '#8a2050',     // Lighter magenta
  primaryDark: '#5a012f',      // Darker magenta
  
  secondary: '#6c2049',        // Rich burgundy
  secondaryLight: '#853860',   // Lighter burgundy
  secondaryDark: '#531539',    // Darker burgundy
  
  accent: '#664054',           // Muted mauve
  accentLight: '#7d5868',      // Lighter mauve
  accentDark: '#4d2f40',       // Darker mauve
  
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
  divider: 'rgba(95, 95, 95, 0.3)',
  borderLight: 'rgba(95, 95, 95, 0.2)',
  borderPrimary: 'rgba(115, 1, 62, 0.3)',
  borderPrimaryLight: 'rgba(115, 1, 62, 0.4)',
  
  // Overlays and effects
  hoverPrimary: 'rgba(115, 1, 62, 0.08)',
  selectedPrimary: 'rgba(115, 1, 62, 0.16)',
  shadowPrimary: 'rgba(115, 1, 62, 0.2)',
  shadowPrimaryHover: 'rgba(115, 1, 62, 0.4)',
} as const;

export type ColorKey = keyof typeof colors;
