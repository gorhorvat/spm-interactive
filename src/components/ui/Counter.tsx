'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/constants/colors';

interface CounterItemProps {
  end: number;
  label: string;
  suffix?: string;
}

function CounterItem({ end, label, suffix = '' }: CounterItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <Box ref={counterRef} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: colors.textPrimary,
          mb: 1,
          fontSize: { xs: '2.5rem', md: '3.5rem' },
        }}
      >
        {count}{suffix}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: colors.textPrimary,
          opacity: 0.95,
          fontWeight: 400,
          fontSize: { xs: '1rem', md: '1.1rem' },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function Counter() {
  const { translations } = useLanguage();
  
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: `linear-gradient(135deg, ${colors.primaryDark}, ${colors.secondaryDark})`,
        boxShadow: `0 8px 30px ${colors.shadowPrimary}`,
        my: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={6} md={3}>
            <CounterItem end={25} label={translations('projectsCompleted')} suffix="+" />
          </Grid>
          <Grid item xs={6} md={3}>
            <CounterItem end={5} label={translations('happyClients')} suffix="+" />
          </Grid>
          <Grid item xs={6} md={3}>
            <CounterItem end={8} label={translations('yearsExperience')} suffix="+" />
          </Grid>
          <Grid item xs={6} md={3}>
            <CounterItem end={100} label={translations('satisfactionRate')} suffix="%" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
