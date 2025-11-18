'use client';

import { Box, CircularProgress } from '@mui/material';
import { colors } from '@/constants/colors';

export default function LoadingSpinner() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        bgcolor: colors.background,
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
    </Box>
  );
}
