'use client';

import { Box, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from '@/constants/colors';
import { usePathname } from 'next/navigation';

interface RequestOfferButtonProps {
  serviceName: string;
  buttonText: string;
}

export default function RequestOfferButton({ serviceName, buttonText }: RequestOfferButtonProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const locale = pathname.startsWith('/en') ? 'en' : 'hr';
    const contactPath = locale === 'hr' ? '/kontakt' : '/en/contact';
    window.location.href = `${contactPath}?service=${encodeURIComponent(serviceName)}`;
  };

  return (
    <Link
      href="#"
      onClick={handleClick}
      style={{ textDecoration: 'none' }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          px: 4,
          py: 1.5,
          fontSize: '1.1rem',
          fontWeight: 600,
          borderRadius: 0,
          textTransform: 'none',
          bgcolor: colors.primary,
          color: colors.textPrimary,
          boxShadow: '0 4px 12px rgba(115, 1, 62, 0.3)',
          cursor: 'pointer',
          '&:hover': {
            bgcolor: colors.primaryLight,
            boxShadow: '0 6px 20px rgba(115, 1, 62, 0.4)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        {buttonText}
        <ArrowForwardIcon />
      </Box>
    </Link>
  );
}

