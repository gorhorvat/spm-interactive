'use client';

import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'What technologies do you use?',
    answer: 'We use modern web technologies including React, Next.js, TypeScript, Node.js, and various other frameworks and tools depending on project requirements. We always choose the best technology stack for your specific needs.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Project timelines vary depending on complexity and requirements. A simple website can take 2-4 weeks, while more complex web applications may take 2-3 months or longer. We provide detailed timelines during the initial consultation.',
  },
  {
    question: 'Do you provide website maintenance?',
    answer: 'Yes! We offer ongoing maintenance and support packages to keep your website secure, updated, and running smoothly. This includes regular updates, security monitoring, backups, and technical support.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Absolutely! All our websites are built with a mobile-first approach, ensuring they look great and function perfectly on all devices - smartphones, tablets, and desktops.',
  },
  {
    question: 'Can you help with SEO?',
    answer: 'Yes, we implement SEO best practices in all our projects, including optimized code, fast loading times, proper meta tags, and structured data. We can also provide ongoing SEO services to improve your search rankings.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our pricing depends on project scope, complexity, and specific requirements. We offer both fixed-price projects and hourly rates. Contact us for a free consultation and personalized quote.',
  },
  {
    question: 'Do you offer hosting services?',
    answer: 'Yes, we can provide hosting solutions or help you deploy to your preferred hosting provider. We work with various cloud platforms including Vercel, AWS, and others to ensure optimal performance.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Definitely! We can redesign and modernize your existing website, improve its performance, or build a completely new site from scratch while preserving your existing content and SEO rankings.',
  },
];

export default function FAQSection() {
  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#040404',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            mb: 3,
            textAlign: 'center',
            fontWeight: 700,
            color: '#ffffff',
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: '#b0b0b0',
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
        </Typography>

        <Box sx={{ mt: 4 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                bgcolor: '#0d0d0d',
                border: '1px solid rgba(95, 95, 95, 0.2)',
                borderRadius: '8px !important',
                mb: 2,
                '&:before': { display: 'none' },
                '&:hover': {
                  borderColor: 'rgba(115, 1, 62, 0.4)',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#73013e' }} />}
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
                    color: '#ffffff',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#b0b0b0',
                    lineHeight: 1.7,
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
