import { Metadata } from 'next';

type Locale = 'hr' | 'en';

interface PageMetadata {
  title: {
    hr: string;
    en: string;
  };
  description: {
    hr: string;
    en: string;
  };
  path: {
    hr: string;
    en: string;
  };
}

const pagesMetadata: Record<string, PageMetadata> = {
  about: {
    title: {
      hr: 'O Nama - FRACTALBYTE | Profesionalni Web Razvoj',
      en: 'About Us - FRACTALBYTE | Professional Web Development',
    },
    description: {
      hr: 'Upoznajte FRACTALBYTE tim stručnjaka za web razvoj. Specijalizirani za kreiranje inovativnih digitalnih rješenja koja pokreću vaš poslovni uspjeh.',
      en: 'Meet the FRACTALBYTE team of web development experts. Specialized in creating innovative digital solutions that drive your business success.',
    },
    path: {
      hr: '/o-nama',
      en: '/en/about-us',
    },
  },
  services: {
    title: {
      hr: 'Naše Usluge - FRACTALBYTE | Web Razvoj & Digitalne Usluge',
      en: 'Our Services - FRACTALBYTE | Web Development & Digital Services',
    },
    description: {
      hr: 'Istražite našu paletu web razvoja usluga: web stranice, web aplikacije, e-commerce, SEO optimizacija i održavanje. Prilagođena rješenja za vaše potrebe.',
      en: 'Explore our range of web development services: websites, web applications, e-commerce, SEO optimization, and maintenance. Custom solutions for your needs.',
    },
    path: {
      hr: '/usluge',
      en: '/en/services',
    },
  },
  faq: {
    title: {
      hr: 'Česta Pitanja - FRACTALBYTE | Web Razvoj FAQ',
      en: 'FAQ - FRACTALBYTE | Web Development Frequently Asked Questions',
    },
    description: {
      hr: 'Odgovori na česta pitanja o web razvoju, dizajnu, cijeni, rokovima i procesu izrade web stranica. Saznajte više o našem načinu rada.',
      en: 'Answers to frequently asked questions about web development, design, pricing, timelines, and the website creation process. Learn more about our workflow.',
    },
    path: {
      hr: '/cesta-pitanja',
      en: '/en/faq',
    },
  },
  contact: {
    title: {
      hr: 'Kontakt - FRACTALBYTE | Zatražite Ponudu',
      en: 'Contact - FRACTALBYTE | Request a Quote',
    },
    description: {
      hr: 'Kontaktirajte FRACTALBYTE za profesionalni web razvoj. Zatražite besplatnu ponudu i razgovarajmo o vašem projektu. Započnite svoju digitalnu transformaciju danas.',
      en: 'Contact FRACTALBYTE for professional web development. Request a free quote and let\'s discuss your project. Start your digital transformation today.',
    },
    path: {
      hr: '/kontakt',
      en: '/en/contact',
    },
  },
};

const pageKeywords: Record<string, { hr: string[]; en: string[] }> = {
  about: {
    hr: ['o nama', 'fractalbyte tim', 'web development team', 'stručnjaci za web', 'digitalna agencija', 'croatia web development'],
    en: ['about us', 'fractalbyte team', 'web development team', 'web experts', 'digital agency', 'croatia web development'],
  },
  services: {
    hr: ['web usluge', 'izrada web stranica', 'web aplikacije', 'e-commerce', 'SEO optimizacija', 'web dizajn', 'hosting', 'UI/UX', 'responsive design', 'cijena web stranice'],
    en: ['web services', 'website creation', 'web applications', 'e-commerce', 'SEO optimization', 'web design', 'hosting', 'UI/UX', 'responsive design', 'website pricing'],
  },
  faq: {
    hr: ['česta pitanja', 'FAQ', 'web development pitanja', 'cijena web stranice', 'vrijeme izrade', 'kako funkcionira'],
    en: ['FAQ', 'frequently asked questions', 'web development questions', 'website pricing', 'development time', 'how it works'],
  },
  contact: {
    hr: ['kontakt', 'zatražite ponudu', 'besplatna ponuda', 'kontaktirajte nas', 'web projekt', 'email'],
    en: ['contact', 'request quote', 'free quote', 'contact us', 'web project', 'email'],
  },
};

export function generatePageMetadata(page: keyof typeof pagesMetadata, locale: Locale): Metadata {
  const metadata = pagesMetadata[page];
  const keywords = pageKeywords[page];
  const baseUrl = 'https://fractalbyte.studio';
  
  return {
    title: metadata.title[locale],
    description: metadata.description[locale],
    keywords: keywords[locale],
    alternates: {
      canonical: `${baseUrl}${metadata.path[locale]}`,
      languages: {
        'hr': `${baseUrl}${metadata.path.hr}`,
        'en': `${baseUrl}${metadata.path.en}`,
      },
    },
    openGraph: {
      title: metadata.title[locale],
      description: metadata.description[locale],
      type: 'website',
      locale: locale === 'hr' ? 'hr_HR' : 'en_US',
      alternateLocale: locale === 'hr' ? ['en_US'] : ['hr_HR'],
      url: `${baseUrl}${metadata.path[locale]}`,
      siteName: 'FRACTALBYTE',
      images: [
        {
          url: 'https://fractalbyte.studio/fractalbyte-avatar.jpg',
          width: 1200,
          height: 630,
          alt: 'FRACTALBYTE Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title[locale],
      description: metadata.description[locale],
      images: ['https://fractalbyte.studio/fractalbyte-avatar.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
