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
      hr: 'O Nama - FRACTALBYTE | Profesionalni Web Razvoj Zagreb, Hrvatska',
      en: 'About Us - FRACTALBYTE | Professional Web Development Croatia',
    },
    description: {
      hr: 'Upoznajte FRACTALBYTE tim stručnjaka za web razvoj iz Zagreba. Specijalizirani za kreiranje inovativnih digitalnih rješenja, modernih web stranica i aplikacija koje pokreću vaš poslovni uspjeh.',
      en: 'Meet the FRACTALBYTE team of web development experts from Croatia. Specialized in creating innovative digital solutions, modern websites and applications that drive your business success.',
    },
    path: {
      hr: '/o-nama',
      en: '/en/about-us',
    },
  },
  services: {
    title: {
      hr: 'Naše Usluge - FRACTALBYTE | Web Razvoj, SEO, Hosting & Digitalne Usluge',
      en: 'Our Services - FRACTALBYTE | Web Development, SEO, Hosting & Digital Services',
    },
    description: {
      hr: 'Istražite našu paletu web razvoja usluga: izrada web stranica, web aplikacije, e-commerce, SEO optimizacija, cloud hosting, održavanje i podrška. Prilagođena rješenja za vaše potrebe.',
      en: 'Explore our range of web development services: website creation, web applications, e-commerce, SEO optimization, cloud hosting, maintenance and support. Custom solutions for your needs.',
    },
    path: {
      hr: '/usluge',
      en: '/en/services',
    },
  },
  faq: {
    title: {
      hr: 'Česta Pitanja - FRACTALBYTE | Web Razvoj FAQ Zagreb',
      en: 'FAQ - FRACTALBYTE | Web Development Frequently Asked Questions',
    },
    description: {
      hr: 'Odgovori na česta pitanja o web razvoju, dizajnu, cijeni, rokovima i procesu izrade web stranica. Saznajte više o našem načinu rada i uslugama web developmenta.',
      en: 'Answers to frequently asked questions about web development, design, pricing, timelines, and the website creation process. Learn more about our workflow and web development services.',
    },
    path: {
      hr: '/cesta-pitanja',
      en: '/en/faq',
    },
  },
  pricing: {
    title: {
      hr: 'Cjenik - FRACTALBYTE | Profesionalni Web Razvoj Zagreb, Hrvatska',
      en: 'Pricing - FRACTALBYTE | FRACTALBYTE | Professional Web Development Croatia',
    },
    description: {
      hr: 'Cjenik osnovnih i dodatnih usluga FRACTALBYTE-a.',
      en: 'Pricing of basic and additional services of FRACTALBYTE.',
    },
    path: {
      hr: '/cjenik',
      en: '/en/pricing',
    },
  },
  contact: {
    title: {
      hr: 'Kontakt - FRACTALBYTE | Zatražite Besplatnu Ponudu Zagreb',
      en: 'Contact - FRACTALBYTE | Request a Free Quote Croatia',
    },
    description: {
      hr: 'Kontaktirajte FRACTALBYTE za profesionalni web razvoj u Zagrebu i Hrvatskoj. Zatražite besplatnu ponudu i razgovarajmo o vašem projektu. Započnite svoju digitalnu transformaciju danas.',
      en: 'Contact FRACTALBYTE for professional web development in Croatia. Request a free quote and let\'s discuss your project. Start your digital transformation today.',
    },
    path: {
      hr: '/kontakt',
      en: '/en/contact',
    },
  },
  privacy: {
    title: {
      hr: 'Politika Privatnosti - FRACTALBYTE | Zaštita Podataka',
      en: 'Privacy Policy - FRACTALBYTE | Data Protection',
    },
    description: {
      hr: 'Pročitajte našu politiku privatnosti i saznajte kako FRACTALBYTE štiti vaše osobne podatke. GDPR usklađenost i transparentnost u obradi podataka.',
      en: 'Read our privacy policy and learn how FRACTALBYTE protects your personal data. GDPR compliance and transparency in data processing.',
    },
    path: {
      hr: '/politika-privatnosti',
      en: '/en/privacy-policy',
    },
  },
};

const pageKeywords: Record<string, { hr: string[]; en: string[] }> = {
  about: {
    hr: ['o nama', 'fractalbyte tim', 'web development team', 'stručnjaci za web', 'digitalna agencija', 'web razvoj zagreb', 'web developer hrvatska', 'react developer', 'next.js developer', 'frontend developer', 'full stack developer'],
    en: ['about us', 'fractalbyte team', 'web development team', 'web experts', 'digital agency', 'croatia web development', 'zagreb web developer', 'react developer', 'next.js developer', 'frontend developer', 'full stack developer'],
  },
  services: {
    hr: ['web usluge', 'izrada web stranica', 'web aplikacije', 'e-commerce', 'SEO optimizacija', 'web dizajn', 'hosting', 'UI/UX', 'responsive design', 'cijena web stranice', 'web shop', 'cloud hosting', 'održavanje web stranica', 'web sigurnost', 'AI integracija', '3D web', 'web audit'],
    en: ['web services', 'website creation', 'web applications', 'e-commerce', 'SEO optimization', 'web design', 'hosting', 'UI/UX', 'responsive design', 'website pricing', 'web shop', 'cloud hosting', 'website maintenance', 'web security', 'AI integration', '3D web', 'website audit'],
  },
  faq: {
    hr: ['česta pitanja', 'FAQ', 'web development pitanja', 'cijena web stranice', 'vrijeme izrade', 'kako funkcionira', 'koliko košta web stranica', 'web razvoj proces', 'održavanje web stranice'],
    en: ['FAQ', 'frequently asked questions', 'web development questions', 'website pricing', 'development time', 'how it works', 'website cost', 'web development process', 'website maintenance'],
  },
  pricing: {
    hr: ['Cijenik', 'koliko košta web stranica', 'cijena izrade web stranice', 'troškovi održavanja web stranice', 'trošak hostinga', 'trošak domene'],
    en: ['pricing', 'how much does a website cost', 'website creation pricing', 'maintenance costs', 'hosting cost', 'domain cost'],
  },
  contact: {
    hr: ['kontakt', 'zatražite ponudu', 'besplatna ponuda', 'kontaktirajte nas', 'web projekt', 'email', 'web razvoj zagreb', 'ponuda za web stranicu', 'kontakt fractalbyte'],
    en: ['contact', 'request quote', 'free quote', 'contact us', 'web project', 'email', 'web development croatia', 'website quote', 'contact fractalbyte'],
  },
  privacy: {
    hr: ['politika privatnosti', 'zaštita podataka', 'GDPR', 'privatnost', 'obrada podataka', 'kolačići', 'cookies', 'sigurnost podataka'],
    en: ['privacy policy', 'data protection', 'GDPR', 'privacy', 'data processing', 'cookies', 'data security'],
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
