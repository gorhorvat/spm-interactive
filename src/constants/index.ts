// Icon name mappings - maps translation keys to icon components
export const valueIcons: { [key: string]: string } = {
  // English values
  'Clean code': 'CodeIcon',
  'Performance': 'SpeedIcon',
  'Creative design': 'DesignServicesIcon',
  'Quick delivery': 'SpeedIcon',
  'Dedicated support': 'SupportAgentIcon',
  // Croatian values
  'Čist kod': 'CodeIcon',
  'Performanse': 'SpeedIcon',
  'Kreativan dizajn': 'DesignServicesIcon',
  'Brza isporuka': 'SpeedIcon',
  'Posvećena podrška': 'SupportAgentIcon',
};

export const serviceIcons: { [key: string]: string } = {
  // English services
  'Web development': 'CodeIcon',
  'UI/UX design': 'DesignServicesIcon',
  'Responsive design': 'DevicesIcon',
  'SEO and AI SEO optimization': 'SearchIcon',
  'Domain & Cloud hosting': 'CloudIcon',
  'B2B contracting & consulting': 'BusinessIcon',
  // Croatian services
  'Web razvoj': 'CodeIcon',
  'UI/UX dizajn': 'DesignServicesIcon',
  'Responzivni dizajn': 'DevicesIcon',
  'SEO i AI SEO optimizacija': 'SearchIcon',
  'Domena i Cloud hosting': 'CloudIcon',
  'B2B suradnja i savjetovanje': 'BusinessIcon',
};

export const timelineIcons: { [key: number]: string } = {
  0: 'PsychologyIcon',
  1: 'DashboardCustomizeIcon',
  2: 'CodeIcon',
  3: 'SearchIcon',
  4: 'CloudIcon',
  5: 'RocketLaunchIcon',
  6: 'SettingsIcon',
  7: 'CampaignIcon',
  8: 'UpdateIcon',
};

// Process steps - translation keys only
export const processSteps = [
  'processStep1',
  'processStep2',
  'processStep3',
  'processStep4',
  'processStep5',
  'processStep6',
  'processStep7',
  'processStep8',
  'processStep9'
];

// FAQs - translation keys only
export const faqs = [
  { question: 'faqQ1', answer: 'faqA1' },
  { question: 'faqQ2', answer: 'faqA2' },
  { question: 'faqQ3', answer: 'faqA3' },
  { question: 'faqQ4', answer: 'faqA4' },
  { question: 'faqQ5', answer: 'faqA5' },
  { question: 'faqQ6', answer: 'faqA6' },
  { question: 'faqQ7', answer: 'faqA7' },
  { question: 'faqQ8', answer: 'faqA8' },
];

// Pricing packages
export const packages = [
  {
    name: 'Basic',
    displayNameKey: 'packageBasic',
    priceRange: '150€ - 200€',
    icon: 'WebIcon',
    features: [
      'basicFeature1',
      'basicFeature2',
      'basicFeature3',
      'basicFeature4',
      'basicFeature5',
      'basicFeature6',
      'basicFeature7',
      'basicFeature8',
      'basicFeature9',
      'basicFeature10',
      'basicFeature11',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    displayNameKey: 'packageProfessional',
    priceRange: '350€ - 500€',
    icon: 'BusinessCenterIcon',
    features: [
      'professionalFeature1',
      'professionalFeature2',
      'professionalFeature3',
      'professionalFeature4',
      'professionalFeature5',
      'professionalFeature6',
      'professionalFeature7',
      'professionalFeature8',
      'professionalFeature9',
      'professionalFeature10',
      'professionalFeature11',
      'professionalFeature12',
      'professionalFeature13',
      'professionalFeature14',
      'professionalFeature15',
    ],
    highlight: false,
  },
  {
    name: 'Enterprise',
    displayNameKey: 'packageEnterprise',
    priceRange: '700€ - 1000€',
    icon: 'ApartmentIcon',
    features: [
      'enterpriseFeature1',
      'enterpriseFeature2',
      'enterpriseFeature3',
      'enterpriseFeature4',
      'enterpriseFeature5',
      'enterpriseFeature6',
      'enterpriseFeature7',
      'enterpriseFeature8',
      'enterpriseFeature9',
      'enterpriseFeature10',
      'enterpriseFeature11',
      'enterpriseFeature12',
      'enterpriseFeature13',
      'enterpriseFeature14',
      'enterpriseFeature15',
      'enterpriseFeature16',
      'enterpriseFeature17',
    ],
    highlight: false,
  },
  {
    name: 'Custom',
    displayNameKey: 'packageCustom',
    priceRangeKey: 'contactUs',
    icon: 'TuneIcon',
    features: [
      'customFeature1',
      'customFeature2',
      'customFeature3',
      'customFeature4',
      'customFeature5',
    ],
    highlight: false,
  },
];

// Alias for compatibility
export const pricingPackages = packages;

// Values data for About section
export const values = [
  { title: 'valueCleanCode', description: 'valueCleanCodeDesc' },
  { title: 'valuePerformance', description: 'valuePerformanceDesc' },
  { title: 'valueCreativeDesign', description: 'valueCreativeDesignDesc' },
  { title: 'valueQuickDelivery', description: 'valueQuickDeliveryDesc' },
  { title: 'valueDedicatedSupport', description: 'valueDedicatedSupportDesc' },
];

// Services data
export const services = [
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
];

