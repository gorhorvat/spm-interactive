import { MetadataRoute } from 'next';
import { services, serviceSlugMap } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fractalbyte.studio';
  const lastModified = new Date();

  // Generate service detail pages
  const servicePages: MetadataRoute.Sitemap = [];

  services.forEach(service => {
    if (service.slug) {
      // Croatian service page
      const hrSlug = serviceSlugMap[service.slug] || service.slug;
      servicePages.push({
        url: `${baseUrl}/usluge/${hrSlug}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.85,
      });

      // English service page
      servicePages.push({
        url: `${baseUrl}/en/services/${service.slug}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.85,
      });
    }
  });

  return [
    // Croatian routes (no locale prefix) - Primary market
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/o-nama`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cesta-pitanja`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/cjenik`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/politika-privatnosti`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // English routes (with /en prefix) - Secondary market
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/about-us`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/en/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.55,
    },
    {
      url: `${baseUrl}/en/pricing`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.55,
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/en/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Service detail pages
    ...servicePages,
  ];
}
