'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Box, CircularProgress } from '@mui/material';

/**
 * Shared component for redirecting to homepage
 * Used by not-found and catch-all pages
 */
export default function RedirectToHome() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Redirect to appropriate homepage based on current path
    const redirectPath = pathname.startsWith('/en') ? '/en' : '/';
    router.replace(redirectPath);
  }, [router, pathname]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <CircularProgress />
    </Box>
  );
}

