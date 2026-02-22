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
      hr: 'O Nama - SPM Interactive | Profesionalni Web Razvoj Zagreb, Hrvatska',
      en: 'About Us - SPM Interactive | Professional Web Development Croatia',
    },
    description: {
      hr: 'Upoznajte SPM Interactive tim stručnjaka za web razvoj iz Zagreba. Specijalizirani za kreiranje inovativnih digitalnih rješenja, modernih web stranica i aplikacija koje pokreću vaš poslovni uspjeh.',
      en: 'Meet the SPM Interactive team of web development experts from Croatia. Specialized in creating innovative digital solutions, modern websites and applications that drive your business success.',
    },
    path: {
      hr: '/o-nama',
      en: '/en/about-us',
    },
  },

  faq: {
    title: {
      hr: 'Česta Pitanja - SPM Interactive | Web Razvoj FAQ Zagreb',
      en: 'FAQ - SPM Interactive | Web Development Frequently Asked Questions',
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
      hr: 'Cjenik - SPM Interactive | Profesionalni Web Razvoj Zagreb, Hrvatska',
      en: 'Pricing - SPM Interactive | SPM Interactive | Professional Web Development Croatia',
    },
    description: {
      hr: 'Cjenik osnovnih i dodatnih usluga SPM Interactive-a.',
      en: 'Pricing of basic and additional services of SPM Interactive.',
    },
    path: {
      hr: '/cjenik',
      en: '/en/pricing',
    },
  },
  contact: {
    title: {
      hr: 'Kontakt - SPM Interactive | Zatražite Besplatnu Ponudu Zagreb',
      en: 'Contact - SPM Interactive | Request a Free Quote Croatia',
    },
    description: {
      hr: 'Kontaktirajte SPM Interactive za profesionalni web razvoj u Zagrebu i Hrvatskoj. Zatražite besplatnu ponudu i razgovarajmo o vašem projektu. Započnite svoju digitalnu transformaciju danas.',
      en: 'Contact SPM Interactive for professional web development in Croatia. Request a free quote and let\'s discuss your project. Start your digital transformation today.',
    },
    path: {
      hr: '/kontakt',
      en: '/en/contact',
    },
  },
  privacy: {
    title: {
      hr: 'Politika Privatnosti - SPM Interactive | Zaštita Podataka',
      en: 'Privacy Policy - SPM Interactive | Data Protection',
    },
    description: {
      hr: 'Pročitajte našu politiku privatnosti i saznajte kako SPM Interactive štiti vaše osobne podatke. GDPR usklađenost i transparentnost u obradi podataka.',
      en: 'Read our privacy policy and learn how SPM Interactive protects your personal data. GDPR compliance and transparency in data processing.',
    },
    path: {
      hr: '/politika-privatnosti',
      en: '/en/privacy-policy',
    },
  },
};

const pageKeywords: Record<string, { hr: string[]; en: string[] }> = {
  about: {
    hr: ['o nama', 'SPM Interactive tim', 'web development team', 'stručnjaci za web', 'digitalna agencija', 'web razvoj zagreb', 'web developer hrvatska', 'react developer', 'next.js developer', 'frontend developer', 'full stack developer'],
    en: ['about us', 'SPM Interactive team', 'web development team', 'web experts', 'digital agency', 'croatia web development', 'zagreb web developer', 'react developer', 'next.js developer', 'frontend developer', 'full stack developer'],
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
    hr: ['kontakt', 'zatražite ponudu', 'besplatna ponuda', 'kontaktirajte nas', 'web projekt', 'email', 'web razvoj zagreb', 'ponuda za web stranicu', 'kontakt SPM Interactive'],
    en: ['contact', 'request quote', 'free quote', 'contact us', 'web project', 'email', 'web development croatia', 'website quote', 'contact SPM Interactive'],
  },
  privacy: {
    hr: ['politika privatnosti', 'zaštita podataka', 'GDPR', 'privatnost', 'obrada podataka', 'kolačići', 'cookies', 'sigurnost podataka'],
    en: ['privacy policy', 'data protection', 'GDPR', 'privacy', 'data processing', 'cookies', 'data security'],
  },
};

export function generatePageMetadata(page: keyof typeof pagesMetadata, locale: Locale): Metadata {
  const metadata = pagesMetadata[page];
  const keywords = pageKeywords[page];
  const baseUrl = 'https://spm-interactive.com';
  
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
      siteName: 'SPM Interactive',
      images: [
        {
          url: 'https://spm-interactive.com/spm-avatar.png',
          width: 1200,
          height: 630,
          alt: 'SPM Interactive Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title[locale],
      description: metadata.description[locale],
      images: ['https://spm-interactive.com/spm-avatar.png'],
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
