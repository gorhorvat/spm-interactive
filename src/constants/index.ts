// Icon name mappings - components will map these strings to actual icon components
export const valueIcons: { [key: string]: string } = {
  'Clean Code': 'CodeIcon',
  'Performance': 'SpeedIcon',
  'Creative Design': 'DesignServicesIcon',
  'Quick Delivery': 'SpeedIcon',
  'Dedicated Support': 'SupportAgentIcon',
  'Čist Kod': 'CodeIcon',
  'Performanse': 'SpeedIcon',
  'Kreativan Dizajn': 'DesignServicesIcon',
  'Brza Isporuka': 'SpeedIcon',
  'Posvećena Podrška': 'SupportAgentIcon',
};

export const serviceIcons: { [key: string]: string } = {
  'Web Development': 'CodeIcon',
  'UI/UX Design': 'DesignServicesIcon',
  'Responsive Design': 'DevicesIcon',
  'SEO and AI SEO Optimization': 'SearchIcon',
  'Domain & Cloud Hosting': 'CloudIcon',
  'B2B Contacting & Consulting': 'BusinessIcon',
  'Web Razvoj': 'CodeIcon',
  'UI/UX Dizajn': 'DesignServicesIcon',
  'Responzivni Dizajn': 'DevicesIcon',
  'SEO i AI SEO Optimizacija': 'SearchIcon',
  'Domena i Cloud Hosting': 'CloudIcon',
  'B2B Kontaktiranje i Savjetovanje': 'BusinessIcon',
};

export const timelineIcons: { [key: number]: string } = {
  0: 'PsychologyIcon',
  1: 'DashboardCustomizeIcon',
  2: 'IntegrationInstructionsIcon',
  3: 'DesignServicesIcon',
  4: 'CodeIcon',
  5: 'SearchIcon',
  6: 'CloudIcon',
  7: 'RocketLaunchIcon',
  8: 'SettingsIcon',
  9: 'CampaignIcon',
  10: 'UpdateIcon',
};

export const processSteps = {
  en: [
    'processStep1',
    'processStep2',
    'processStep3',
    'processStep4',
    'processStep5',
    'processStep6',
    'processStep7',
    'processStep8',
    'processStep9',
    'processStep10',
    'processStep11',
  ],
  hr: [
    'processStep1',
    'processStep2',
    'processStep3',
    'processStep4',
    'processStep5',
    'processStep6',
    'processStep7',
    'processStep8',
    'processStep9',
    'processStep10',
    'processStep11',
  ],
};

export const faqs = {
  en: [
    { question: 'faqQ1', answer: 'faqA1' },
    { question: 'faqQ2', answer: 'faqA2' },
    { question: 'faqQ3', answer: 'faqA3' },
    { question: 'faqQ4', answer: 'faqA4' },
    { question: 'faqQ5', answer: 'faqA5' },
    { question: 'faqQ6', answer: 'faqA6' },
    { question: 'faqQ7', answer: 'faqA7' },
    { question: 'faqQ8', answer: 'faqA8' },
  ],
  hr: [
    { question: 'faqQ1', answer: 'faqA1' },
    { question: 'faqQ2', answer: 'faqA2' },
    { question: 'faqQ3', answer: 'faqA3' },
    { question: 'faqQ4', answer: 'faqA4' },
    { question: 'faqQ5', answer: 'faqA5' },
    { question: 'faqQ6', answer: 'faqA6' },
    { question: 'faqQ7', answer: 'faqA7' },
    { question: 'faqQ8', answer: 'faqA8' },
  ],
};

export const packages = {
  en: [
    {
      name: 'Basic',
      displayName: 'Basic',
      priceRange: '€800 - €1,200',
      features: [
        'basicFeature1',
        'basicFeature2',
        'basicFeature3',
        'basicFeature4',
        'basicFeature5',
      ],
      highlight: false,
    },
    {
      name: 'Professional',
      displayName: 'Professional',
      priceRange: '€1,200 - €2,000',
      features: [
        'professionalFeature1',
        'professionalFeature2',
        'professionalFeature3',
        'professionalFeature4',
        'professionalFeature5',
        'professionalFeature6',
      ],
      highlight: true,
    },
    {
      name: 'Enterprise',
      displayName: 'Enterprise',
      priceRange: '€2,000+',
      features: [
        'enterpriseFeature1',
        'enterpriseFeature2',
        'enterpriseFeature3',
        'enterpriseFeature4',
        'enterpriseFeature5',
        'enterpriseFeature6',
        'enterpriseFeature7',
      ],
      highlight: false,
    },
    {
      name: 'Custom',
      displayName: 'Custom',
      priceRange: 'Contact us',
      features: [
        'customFeature1',
        'customFeature2',
        'customFeature3',
        'customFeature4',
        'customFeature5',
        'customFeature6',
        'customFeature7',
      ],
      highlight: false,
    },
  ],
  hr: [
    {
      name: 'Basic',
      displayName: 'Osnovno',
      priceRange: '€800 - €1,200',
      features: [
        'basicFeature1',
        'basicFeature2',
        'basicFeature3',
        'basicFeature4',
        'basicFeature5',
      ],
      highlight: false,
    },
    {
      name: 'Professional',
      displayName: 'Profesionalno',
      priceRange: '€1,200 - €2,000',
      features: [
        'professionalFeature1',
        'professionalFeature2',
        'professionalFeature3',
        'professionalFeature4',
        'professionalFeature5',
        'professionalFeature6',
      ],
      highlight: true,
    },
    {
      name: 'Enterprise',
      displayName: 'Enterprise',
      priceRange: '€2,000+',
      features: [
        'enterpriseFeature1',
        'enterpriseFeature2',
        'enterpriseFeature3',
        'enterpriseFeature4',
        'enterpriseFeature5',
        'enterpriseFeature6',
        'enterpriseFeature7',
      ],
      highlight: false,
    },
    {
      name: 'Custom',
      displayName: 'Prilagođeno',
      priceRange: 'Kontaktirajte nas',
      features: [
        'customFeature1',
        'customFeature2',
        'customFeature3',
        'customFeature4',
        'customFeature5',
        'customFeature6',
        'customFeature7',
      ],
      highlight: false,
    },
  ],
};

// Alias for compatibility
export const pricingPackages = packages;

// Values data for About section
export const values = {
  en: [
    { title: 'valueCleanCode', description: 'valueCleanCodeDesc' },
    { title: 'valuePerformance', description: 'valuePerformanceDesc' },
    { title: 'valueCreativeDesign', description: 'valueCreativeDesignDesc' },
    { title: 'valueQuickDelivery', description: 'valueQuickDeliveryDesc' },
    { title: 'valueDedicatedSupport', description: 'valueDedicatedSupportDesc' },
  ],
  hr: [
    { title: 'valueCleanCode', description: 'valueCleanCodeDesc' },
    { title: 'valuePerformance', description: 'valuePerformanceDesc' },
    { title: 'valueCreativeDesign', description: 'valueCreativeDesignDesc' },
    { title: 'valueQuickDelivery', description: 'valueQuickDeliveryDesc' },
    { title: 'valueDedicatedSupport', description: 'valueDedicatedSupportDesc' },
  ],
};

// Services data
export const services = {
  en: [
    {
      name: 'serviceWebDev',
      description: 'serviceWebDevDesc',
      expandedContent: 'serviceWebDevExpanded',
    },
    {
      name: 'serviceUIUX',
      description: 'serviceUIUXDesc',
      expandedContent: 'serviceUIUXExpanded',
    },
    {
      name: 'serviceResponsive',
      description: 'serviceResponsiveDesc',
      expandedContent: 'serviceResponsiveExpanded',
    },
    {
      name: 'serviceSEO',
      description: 'serviceSEODesc',
      expandedContent: 'serviceSEOExpanded',
    },
    {
      name: 'serviceHosting',
      description: 'serviceHostingDesc',
      expandedContent: 'serviceHostingExpanded',
    },
    {
      name: 'serviceB2B',
      description: 'serviceB2BDesc',
      expandedContent: 'serviceB2BExpanded',
      link: { text: 'goranhorvat.dev', url: 'https://goranhorvat.dev/' },
    },
  ],
  hr: [
    {
      name: 'serviceWebDev',
      description: 'serviceWebDevDesc',
      expandedContent: 'serviceWebDevExpanded',
    },
    {
      name: 'serviceUIUX',
      description: 'serviceUIUXDesc',
      expandedContent: 'serviceUIUXExpanded',
    },
    {
      name: 'serviceResponsive',
      description: 'serviceResponsiveDesc',
      expandedContent: 'serviceResponsiveExpanded',
    },
    {
      name: 'serviceSEO',
      description: 'serviceSEODesc',
      expandedContent: 'serviceSEOExpanded',
    },
    {
      name: 'serviceHosting',
      description: 'serviceHostingDesc',
      expandedContent: 'serviceHostingExpanded',
    },
    {
      name: 'serviceB2B',
      description: 'serviceB2BDesc',
      expandedContent: 'serviceB2BExpanded',
      link: { text: 'goranhorvat.dev', url: 'https://goranhorvat.dev/' },
    },
  ],
};
