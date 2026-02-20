import { Metadata } from 'next';
import { services } from '@/constants';
import { getTranslation } from '@/utils/serverTranslations';

// Enable ISR with revalidation every 24 hours
export const revalidate = 86400; // 24 hours in seconds

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
  const baseUrl = 'https://fractalbyte.studio';
  
  // Get the Croatian slug for alternate language link
  const { serviceSlugMap } = await import('@/constants');
  const hrSlug = serviceSlugMap[slug] || slug;
  
  const currentUrl = locale === 'hr' 
    ? `${baseUrl}/usluge/${hrSlug}`
    : `${baseUrl}/en/services/${slug}`;
  
  const alternateUrl = locale === 'hr'
    ? `${baseUrl}/en/services/${slug}`
    : `${baseUrl}/usluge/${hrSlug}`;

  return {
    title: `${serviceName} | ${siteName}`,
    description: serviceDesc,
    alternates: {
      canonical: currentUrl,
      languages: {
        'hr': `${baseUrl}/usluge/${hrSlug}`,
        'en': `${baseUrl}/en/services/${slug}`,
      },
    },
    openGraph: {
      title: `${serviceName} | ${siteName}`,
      description: serviceDesc,
      type: 'website',
      locale: locale === 'hr' ? 'hr_HR' : 'en_US',
      alternateLocale: locale === 'hr' ? ['en_US'] : ['hr_HR'],
      url: currentUrl,
      siteName,
      images: [
        {
          url: 'https://fractalbyte.studio/fractalbyte-avatar.jpg',
          width: 1200,
          height: 630,
          alt: `${serviceName} - FRACTALBYTE`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${serviceName} | ${siteName}`,
      description: serviceDesc,
      images: ['https://fractalbyte.studio/fractalbyte-avatar.jpg'],
    },
    other: {
      'json-ld': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': locale === 'hr' ? 'Početna' : 'Home',
            'item': locale === 'hr' ? `${baseUrl}` : `${baseUrl}/en`,
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': serviceName,
            'item': currentUrl,
          },
        ],
      }),
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

