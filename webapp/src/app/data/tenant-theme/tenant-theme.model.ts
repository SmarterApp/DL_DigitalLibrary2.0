export interface FooterLink {
  index: number;
  name: string;
  uri: string;
  icon?: string;
}

export interface TenantTheme {
  displayName: string;
  logoUris: {
    full: string;
    footer: string;
  };
  footerLinks?: FooterLink[];
}

export interface TenantThemeConfig {
  [key: string]: TenantTheme;
}
