
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

export enum AppState {
  ONBOARDING = 'ONBOARDING',
  AUTHORIZED = 'AUTHORIZED'
}
