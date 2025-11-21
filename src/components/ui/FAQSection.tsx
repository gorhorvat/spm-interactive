'use client';

import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLanguage } from '@/contexts/LanguageContext';
import { faqs } from '@/constants';
import { colors } from '@/constants/colors';

export default function FAQSection() {
  const { translations } = useLanguage();

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: colors.background,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            mb: 3,
            textAlign: 'center',
            fontWeight: 700,
            color: colors.textPrimary,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          {translations('faqTitle')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: colors.textSecondary,
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          {translations('faqDescription')}
        </Typography>

        <Box sx={{ mt: 4 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                bgcolor: colors.backgroundPaper,
                border: '1px solid rgba(95, 95, 95, 0.2)',
                borderRadius: '0 !important',
                mb: 2,
                '&:before': { display: 'none' },
                '&:hover': {
                  borderColor: 'rgba(115, 1, 62, 0.4)',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: colors.primary }} />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    my: 2,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: colors.textPrimary,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}
                >
                  {translations(faq.question)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.textSecondary,
                    lineHeight: 1.7,
                  }}
                >
                  {translations(faq.answer)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
