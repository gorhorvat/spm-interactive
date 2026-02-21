import {
  Code as CodeIcon,
  Speed as SpeedIcon,
  DesignServices as DesignServicesIcon,
  SupportAgent as SupportAgentIcon,
  Devices as DevicesIcon,
  Search as SearchIcon,
  Cloud as CloudIcon,
  Business as BusinessIcon,
  Psychology as PsychologyIcon,
  DashboardCustomize as DashboardCustomizeIcon,
  RocketLaunch as RocketLaunchIcon,
  Settings as SettingsIcon,
  Campaign as CampaignIcon,
  Update as UpdateIcon,
  TrendingUp as TrendingUpIcon,
  Sync as SyncIcon,
  Security as SecurityIcon,
  Analytics as AnalyticsIcon,
  SportsEsports as SportsEsportsIcon,
} from '@mui/icons-material';

export function getIconComponent(iconName: string, props?: any) {
  const iconMap: { [key: string]: any } = {
    Code: CodeIcon,
    CodeIcon: CodeIcon,
    Speed: SpeedIcon,
    SpeedIcon: SpeedIcon,
    DesignServices: DesignServicesIcon,
    DesignServicesIcon: DesignServicesIcon,
    SupportAgent: SupportAgentIcon,
    SupportAgentIcon: SupportAgentIcon,
    Devices: DevicesIcon,
    DevicesIcon: DevicesIcon,
    Search: SearchIcon,
    SearchIcon: SearchIcon,
    Cloud: CloudIcon,
    CloudIcon: CloudIcon,
    Business: BusinessIcon,
    BusinessIcon: BusinessIcon,
    Psychology: PsychologyIcon,
    PsychologyIcon: PsychologyIcon,
    DashboardCustomize: DashboardCustomizeIcon,
    DashboardCustomizeIcon: DashboardCustomizeIcon,
    RocketLaunch: RocketLaunchIcon,
    RocketLaunchIcon: RocketLaunchIcon,
    Settings: SettingsIcon,
    SettingsIcon: SettingsIcon,
    Campaign: CampaignIcon,
    CampaignIcon: CampaignIcon,
    Update: UpdateIcon,
    UpdateIcon: UpdateIcon,
    TrendingUp: TrendingUpIcon,
    TrendingUpIcon: TrendingUpIcon,
    Sync: SyncIcon,
    SyncIcon: SyncIcon,
    Security: SecurityIcon,
    SecurityIcon: SecurityIcon,
    Analytics: AnalyticsIcon,
    AnalyticsIcon: AnalyticsIcon,
    SportsEsports: SportsEsportsIcon,
    SportsEsportsIcon: SportsEsportsIcon,
  };

  const IconComponent = iconMap[iconName];
  if (!IconComponent) return null;

  return <IconComponent {...props} />;
}

// Service name to icon mapping (translation keys)
export const serviceIcons: { [key: string]: string } = {
  serviceWebDev: 'CodeIcon',
  serviceHosting: 'CloudIcon',
  serviceB2B: 'BusinessIcon',
  servicePerformance: 'SpeedIcon',
  serviceSecurity: 'SecurityIcon',
  serviceAI: 'PsychologyIcon',
};
