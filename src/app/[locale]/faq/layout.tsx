import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata('faq', locale as 'hr' | 'en');
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
