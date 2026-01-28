
export interface NavItem {
  label: string;
  path: string;
}

export interface InventoryItem {
  name: string;
  description?: string;
}

export interface InventoryCategory {
  title: string;
  items: string[];
}

export interface ResearchDomain {
  id: string;
  title: string;
  subtitle: string;
  whatWeStudy: string[];
  whatToolsDo: string[];
  whatToolsDoNotDo: string[];
  icon: string;
  inventory?: InventoryCategory[];
}

// New comprehensive service structure
export interface ServiceVariant {
  name: string;
  description?: string;
  regions?: string[];
  tags?: string[];
}

export interface ServiceCapability {
  category: string;
  variants: ServiceVariant[];
}

export interface PlatformService {
  id: string;
  name: string;
  description: string;
  category: 'social' | 'streaming' | 'content' | 'crypto' | 'messaging' | 'traffic';
  launchStatus: 'day1' | 'coming-soon';
  capabilities: ServiceCapability[];
  regions?: string[];
}

export enum AppState {
  ONBOARDING = 'ONBOARDING',
  AUTHORIZED = 'AUTHORIZED'
}
