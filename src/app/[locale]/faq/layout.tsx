import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

// Enable ISR with revalidation every 24 hours
export const revalidate = 86400; // 24 hours in seconds

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseMetadata = generatePageMetadata('faq', locale as 'hr' | 'en');
  
  // Build FAQ schema
  const { translations } = await import('@/locales/translations');
  const getTranslation = (key: string) => translations[key as keyof typeof translations];
  
  const faqItems = [];
  for (let i = 1; i <= 14; i++) {
    const questionKey = `faqQ${i}` as keyof typeof translations;
    const answerKey = `faqA${i}` as keyof typeof translations;
    const question = getTranslation(questionKey);
    const answer = getTranslation(answerKey);
    
    if (question && answer) {
      faqItems.push({
        '@type': 'Question',
        'name': question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': answer,
        },
      });
    }
  }

  return {
    ...baseMetadata,
    other: {
      'json-ld': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqItems,
      }),
    },
  };
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
