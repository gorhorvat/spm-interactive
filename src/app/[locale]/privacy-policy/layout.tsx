import { Metadata } from 'next';

// Enable ISR with revalidation every 24 hours
export const revalidate = 86400; // 24 hours in seconds

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHr = locale === 'hr';

  return {
    title: isHr ? 'Politika privatnosti | SPM Interactive' : 'Privacy policy | SPM Interactive',
    description: isHr
      ? 'Politika privatnosti SPM Interactive-a. Saznajte kako prikupljamo, koristimo i štitimo vaše osobne podatke u skladu s GDPR-om.'
      : 'SPM Interactive Privacy policy. Learn how we collect, use, and protect your personal data in compliance with GDPR.',
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

