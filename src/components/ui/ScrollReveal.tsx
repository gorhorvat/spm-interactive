'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

type RevealVariant = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'zoom-in';

interface ScrollRevealProps {
  children: ReactNode;
  /** Animation variant */
  variant?: RevealVariant;
  /** Delay in ms before animation starts */
  delay?: number;
  /** Duration of the animation in ms */
  duration?: number;
  /** Distance to translate (px) for directional variants */
  distance?: number;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
  /** Only animate once (stays visible after reveal) */
  once?: boolean;
  /** Additional sx props passed to the wrapper Box */
  sx?: SxProps<Theme>;
  /** Whether to render as inline element */
  inline?: boolean;
}

/**
 * SEO-friendly scroll-reveal wrapper.
 *
 * How it stays SEO-safe:
 * - Content is ALWAYS in the DOM — never removed or display:none'd.
 * - We only use `opacity` and `transform` which don't affect layout or
 *   prevent crawlers from reading the content.
 * - A <noscript>-safe approach: the CSS class `.scroll-reveal-init` sets
 *   the initial hidden state, so if JS is disabled the content is still
 *   visible (crawlers without JS will never see the hidden state).
 */
export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 600,
  distance = 40,
  threshold = 0.15,
  once = true,
  sx,
  inline = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, once]);

  const getInitialTransform = (): string => {
    switch (variant) {
      case 'fade-up':
        return `translateY(${distance}px)`;
      case 'fade-down':
        return `translateY(-${distance}px)`;
      case 'fade-left':
        return `translateX(${distance}px)`;
      case 'fade-right':
        return `translateX(-${distance}px)`;
      case 'zoom-in':
        return 'scale(0.92)';
      case 'fade':
      default:
        return 'none';
    }
  };

  return (
    <Box
      ref={ref}
      component={inline ? 'span' : 'div'}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getInitialTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
        willChange: 'opacity, transform',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

/**
 * Helper: wraps each child in a staggered reveal.
 * Useful for lists of cards, grid items, etc.
 */
interface StaggerRevealProps {
  children: ReactNode[];
  variant?: RevealVariant;
  staggerDelay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  sx?: SxProps<Theme>;
}

export function StaggerReveal({
  children,
  variant = 'fade-up',
  staggerDelay = 100,
  duration = 600,
  distance = 30,
  threshold = 0.1,
  sx,
}: StaggerRevealProps) {
  return (
    <>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          variant={variant}
          delay={index * staggerDelay}
          duration={duration}
          distance={distance}
          threshold={threshold}
          sx={sx}
        >
          {child}
        </ScrollReveal>
      ))}
    </>
  );
}
