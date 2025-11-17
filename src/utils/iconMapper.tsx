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
} from '@mui/icons-material';

export function getIconComponent(iconName: string, props?: any) {
  const iconMap: { [key: string]: any } = {
    CodeIcon: CodeIcon,
    SpeedIcon: SpeedIcon,
    DesignServicesIcon: DesignServicesIcon,
    SupportAgentIcon: SupportAgentIcon,
    DevicesIcon: DevicesIcon,
    SearchIcon: SearchIcon,
    CloudIcon: CloudIcon,
    BusinessIcon: BusinessIcon,
    PsychologyIcon: PsychologyIcon,
    DashboardCustomizeIcon: DashboardCustomizeIcon,
    RocketLaunchIcon: RocketLaunchIcon,
    SettingsIcon: SettingsIcon,
    CampaignIcon: CampaignIcon,
    UpdateIcon: UpdateIcon,
  };

  const IconComponent = iconMap[iconName];
  if (!IconComponent) return null;

  return <IconComponent {...props} />;
}
