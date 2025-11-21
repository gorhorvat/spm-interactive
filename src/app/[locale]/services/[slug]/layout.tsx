import { Metadata } from 'next';
import { services } from '@/constants';
import { getTranslation } from '@/utils/serverTranslations';

interface ServiceLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServiceLayoutProps): Promise<Metadata> {
  const { locale, slug } = await params;

  // Find the service by slug
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const serviceName = getTranslation(service.name, locale);
  const serviceDesc = getTranslation(service.description, locale);
  const siteName = 'FRACTALBYTE';

  return {
    title: `${serviceName} | ${siteName}`,
    description: serviceDesc,
    openGraph: {
      title: `${serviceName} | ${siteName}`,
      description: serviceDesc,
      type: 'website',
      locale: locale === 'hr' ? 'hr_HR' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${serviceName} | ${siteName}`,
      description: serviceDesc,
    },
  };
}

export async function generateStaticParams() {
  const locales = ['hr', 'en'];
  const params: { locale: string; slug: string }[] = [];

  // Add service slugs only
  for (const locale of locales) {
    for (const service of services) {
      if (service.slug) {
        params.push({
          locale,
          slug: service.slug,
        });
      }
    }
  }

  return params;
}

export default function ServiceLayout({ children }: ServiceLayoutProps) {
  return <>{children}</>;
}

