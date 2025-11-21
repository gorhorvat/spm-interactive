import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHr = locale === 'hr';

  return {
    title: isHr ? 'Politika privatnosti | FRACTALBYTE' : 'Privacy policy | FRACTALBYTE',
    description: isHr
      ? 'Politika privatnosti FRACTALBYTE-a. Saznajte kako prikupljamo, koristimo i štitimo vaše osobne podatke u skladu s GDPR-om.'
      : 'FRACTALBYTE Privacy policy. Learn how we collect, use, and protect your personal data in compliance with GDPR.',
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

