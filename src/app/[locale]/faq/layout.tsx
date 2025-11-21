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
  return generatePageMetadata('faq', locale as 'hr' | 'en');
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
