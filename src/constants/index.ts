// Service slug mappings (English to Croatian)
export const serviceSlugMap: Record<string, string> = {
  'web-development': 'web-razvoj',
  'hosting': 'hosting',
  'b2b-consulting': 'b2b-savjetovanje',
  'performance-optimization': 'optimizacija-performansi',
  'seo-consulting': 'seo-savjetovanje',
  'migration-modernization': 'migracija-modernizacija',
  'security-compliance': 'sigurnost-uskladenost',
  'maintenance-support': 'odrzavanje-podrska',
  'ai-integration': 'ai-integracija',
  'website-audit': 'revizija-web-stranice',
  '3d-interactive': '3d-interaktivno',
};

export enum ServiceName {
  WEB_DEVELOPMENT = 'serviceWebDev',
  HOSTING = 'serviceHosting',
  B2B_CONSULTING = 'serviceB2B',
  PERFORMANCE_OPTIMIZATION = 'servicePerformance',
  SEO_CONSULTING = 'serviceSEOConsulting',
  MIGRATION_MODERNIZATION = 'serviceMigration',
  SECURITY_COMPLIANCE = 'serviceSecurity',
  MAINTENANCE_SUPPORT = 'serviceMaintenance',
  AI_INTEGRATION = 'serviceAI',
  WEBSITE_AUDIT = 'serviceAudit',
  INTERACTIVE_EXPERIENCES = 'service3D',
}

export enum ServiceSlug {
  WEB_DEVELOPMENT = 'web-development',
  HOSTING = 'hosting',
  B2B_CONSULTING = 'b2b-consulting',
  PERFORMANCE_OPTIMIZATION = 'performance-optimization',
  SEO_CONSULTING = 'seo-consulting',
  MIGRATION_MODERNIZATION = 'migration-modernization',
  SECURITY_COMPLIANCE = 'security-compliance',
  MAINTENANCE_SUPPORT = 'maintenance-support',
  AI_INTEGRATION = 'ai-integration',
  WEBSITE_AUDIT = 'website-audit',
  INTERACTIVE_EXPERIENCES = '3d-interactive',
}

// Reverse mapping (Croatian to English) for proxy
export const serviceSlugMapReverse: Record<string, string> = Object.fromEntries(
  Object.entries(serviceSlugMap).map(([en, hr]) => [hr, en])
);

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
  'Performance Audits & Optimization': 'SpeedIcon',
  'SEO Audit & Strategy Consulting': 'TrendingUpIcon',
  'Migration & Modernization Services': 'SyncIcon',
  'Web Security & Compliance Services': 'SecurityIcon',
  'Maintenance & Support Plans': 'SettingsIcon',
  'Analytics & Conversion Optimization': 'AnalyticsIcon',
  '3D & Interactive Web Experiences': 'ViewInArIcon',
  'AI Integration and Consultation': 'PsychologyIcon',
  'Interactive & Gamified Experiences': 'SportsEsportsIcon',
  'Comprehensive Website Audit & Consulting': 'AssessmentIcon',
  'B2B contracting & consulting': 'BusinessIcon',
  // Croatian services
  'Web razvoj': 'CodeIcon',
  'UI/UX dizajn': 'DesignServicesIcon',
  'Responzivni dizajn': 'DevicesIcon',
  'SEO i AI SEO optimizacija': 'SearchIcon',
  'Domena i Cloud hosting': 'CloudIcon',
  'Revizija i optimizacija performansi': 'SpeedIcon',
  'SEO revizija i strateško savjetovanje': 'TrendingUpIcon',
  'Usluge migracije i modernizacije': 'SyncIcon',
  'Usluge web sigurnosti i usklađenosti': 'SecurityIcon',
  'Planovi održavanja i podrške': 'SettingsIcon',
  'Analitika i optimizacija konverzije': 'AnalyticsIcon',
  '3D i interaktivna web iskustva': 'ViewInArIcon',
  'AI integracija i savjetovanje': 'PsychologyIcon',
  'Interaktivna i gamificirana iskustva': 'SportsEsportsIcon',
  'Sveobuhvatna revizija web stranice i savjetovanje': 'AssessmentIcon',
  'B2B suradnja i savjetovanje': 'BusinessIcon',
};

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
  { question: 'faqQ9', answer: 'faqA9' },
  { question: 'faqQ10', answer: 'faqA10' },
  { question: 'faqQ11', answer: 'faqA11' },
  { question: 'faqQ12', answer: 'faqA12' },
  { question: 'faqQ13', answer: 'faqA13' },
  { question: 'faqQ14', answer: 'faqA14' },
];

// Pricing packages
export const packages = [
  {
    name: 'Essential',
    displayNameKey: 'packageEssential',
    descriptionKey: 'essentialPackageDesc',
    priceRangeKey: 'essentialPackagePrice',
    icon: 'WebIcon',
    tier: 'Essential',
    features: [
      'essentialFeature1',
      'essentialFeature2',
      'essentialFeature3',
      'essentialFeature4',
      'essentialFeature5',
      'essentialFeature6',
      'essentialFeature7',
      'essentialFeature8',
      'essentialFeature9',
      'essentialFeature10',
      'essentialFeature11',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    displayNameKey: 'packageProfessional',
    descriptionKey: 'professionalPackageDesc',
    priceRangeKey: 'professionalPackagePrice',
    icon: 'BusinessCenterIcon',
    tier: 'Professional',
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
    name: 'Premium',
    displayNameKey: 'packagePremium',
    descriptionKey: 'premiumPackageDesc',
    priceRangeKey: 'premiumPackagePrice',
    icon: 'ApartmentIcon',
    tier: 'Premium',
    features: [
      'premiumFeature1',
      'premiumFeature2',
      'premiumFeature3',
      'premiumFeature4',
      'premiumFeature5',
      'premiumFeature6',
      'premiumFeature7',
      'premiumFeature8',
      'premiumFeature9',
      'premiumFeature10',
      'premiumFeature11',
      'premiumFeature12',
      'premiumFeature13',
      'premiumFeature14',
      'premiumFeature15',
      'premiumFeature16',
      'premiumFeature17',
    ],
    highlight: false,
  },
  {
    name: 'Custom',
    displayNameKey: 'packageCustom',
    descriptionKey: 'customPackageDesc',
    priceRangeKey: 'contactUs',
    icon: 'TuneIcon',
    tier: 'Custom',
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



// Values data for About section
export const values = [
  { title: 'valueCleanCode', description: 'valueCleanCodeDesc' },
  { title: 'valuePerformance', description: 'valuePerformanceDesc' },
  { title: 'valueCreativeDesign', description: 'valueCreativeDesignDesc' },
  { title: 'valueQuickDelivery', description: 'valueQuickDeliveryDesc' },
  { title: 'valueDedicatedSupport', description: 'valueDedicatedSupportDesc' },
];

// Timeline icons for process steps
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
];

// Services data - Prices adjusted for Croatian market (in EUR)
export const services = [
  {
    name: ServiceName.WEB_DEVELOPMENT,
    description: 'serviceWebDevDesc',
    expandedContent: 'serviceWebDevExpanded',
    slug: ServiceSlug.WEB_DEVELOPMENT,
    features: ['webDevFeature1', 'webDevFeature2', 'webDevFeature3', 'webDevFeature4', 'webDevFeature5', 'webDevFeature6'],
    deliverables: ['webDevDeliverable1', 'webDevDeliverable2', 'webDevDeliverable3', 'webDevDeliverable4'],
  },
  {
    name: ServiceName.HOSTING,
    description: 'serviceHostingDesc',
    expandedContent: 'serviceHostingExpanded',
    slug: ServiceSlug.HOSTING,
    features: ['hostingFeature1', 'hostingFeature2', 'hostingFeature3', 'hostingFeature4', 'hostingFeature5', 'hostingFeature6'],
    deliverables: ['hostingDeliverable1', 'hostingDeliverable2', 'hostingDeliverable3', 'hostingDeliverable4'],
  },
  {
    name: ServiceName.PERFORMANCE_OPTIMIZATION,
    description: 'servicePerformanceDesc',
    expandedContent: 'servicePerformanceExpanded',
    slug: ServiceSlug.PERFORMANCE_OPTIMIZATION,
    features: ['performanceFeature1', 'performanceFeature2', 'performanceFeature3', 'performanceFeature4', 'performanceFeature5', 'performanceFeature6'],
    deliverables: ['performanceDeliverable1', 'performanceDeliverable2', 'performanceDeliverable3', 'performanceDeliverable4'],
  },
  {
    name: ServiceName.SEO_CONSULTING,
    description: 'serviceSEOConsultingDesc',
    expandedContent: 'serviceSEOConsultingExpanded',
    slug: ServiceSlug.SEO_CONSULTING,
    features: ['seoFeature1', 'seoFeature2', 'seoFeature3', 'seoFeature4', 'seoFeature5', 'seoFeature6', 'seoFeature7'],
    deliverables: ['seoDeliverable1', 'seoDeliverable2', 'seoDeliverable3', 'seoDeliverable4', 'seoDeliverable5'],
  },
  {
    name: ServiceName.MIGRATION_MODERNIZATION,
    description: 'serviceMigrationDesc',
    expandedContent: 'serviceMigrationExpanded',
    slug: ServiceSlug.MIGRATION_MODERNIZATION,
    features: ['migrationFeature1', 'migrationFeature2', 'migrationFeature3', 'migrationFeature4', 'migrationFeature5', 'migrationFeature6'],
    deliverables: ['migrationDeliverable1', 'migrationDeliverable2', 'migrationDeliverable3', 'migrationDeliverable4'],
  },
  {
    name: ServiceName.SECURITY_COMPLIANCE,
    description: 'serviceSecurityDesc',
    expandedContent: 'serviceSecurityExpanded',
    slug: ServiceSlug.SECURITY_COMPLIANCE,
    features: ['securityFeature1', 'securityFeature2', 'securityFeature3', 'securityFeature4', 'securityFeature5', 'securityFeature6'],
    deliverables: ['securityDeliverable1', 'securityDeliverable2', 'securityDeliverable3', 'securityDeliverable4'],
  },
  {
    name: ServiceName.MAINTENANCE_SUPPORT,
    description: 'serviceMaintenanceDesc',
    expandedContent: 'serviceMaintenanceExpanded',
    slug: ServiceSlug.MAINTENANCE_SUPPORT,
    features: ['maintenanceFeatureItem1', 'maintenanceFeatureItem2', 'maintenanceFeatureItem3', 'maintenanceFeatureItem4', 'maintenanceFeatureItem5', 'maintenanceFeatureItem6'],
    deliverables: ['maintenanceDeliverable1', 'maintenanceDeliverable2', 'maintenanceDeliverable3', 'maintenanceDeliverable4'],
  },
  {
    name: ServiceName.AI_INTEGRATION,
    description: 'serviceAIDesc',
    expandedContent: 'serviceAIExpanded',
    slug: ServiceSlug.AI_INTEGRATION,
    features: ['aiFeature1', 'aiFeature2', 'aiFeature3', 'aiFeature4', 'aiFeature5', 'aiFeature6'],
    deliverables: ['aiDeliverable1', 'aiDeliverable2', 'aiDeliverable3', 'aiDeliverable4'],
  },
  {
    name: ServiceName.INTERACTIVE_EXPERIENCES,
    description: 'service3DDesc',
    expandedContent: 'service3DExpanded',
    slug: ServiceSlug.INTERACTIVE_EXPERIENCES,
    features: ['threeDFeature1', 'threeDFeature2', 'threeDFeature3', 'threeDFeature4', 'threeDFeature5'],
    deliverables: ['threeDDeliverable1', 'threeDDeliverable2', 'threeDDeliverable3', 'threeDDeliverable4'],
  },
  {
    name: ServiceName.WEBSITE_AUDIT,
    description: 'serviceAuditDesc',
    expandedContent: 'serviceAuditExpanded',
    slug: ServiceSlug.WEBSITE_AUDIT,
    features: ['auditFeature1', 'auditFeature2', 'auditFeature3', 'auditFeature4', 'auditFeature5', 'auditFeature6'],
    deliverables: ['auditDeliverable1', 'auditDeliverable2', 'auditDeliverable3', 'auditDeliverable4'],
  },
  {
    name: ServiceName.B2B_CONSULTING,
    description: 'serviceB2BDesc',
    expandedContent: 'serviceB2BExpanded',
    slug: ServiceSlug.B2B_CONSULTING,
    features: ['b2bFeature1', 'b2bFeature2', 'b2bFeature3', 'b2bFeature4', 'b2bFeature5', 'b2bFeature6'],
    deliverables: ['b2bDeliverable1', 'b2bDeliverable2', 'b2bDeliverable3'],
  }
];
