export interface FooterLink {
  index: number;
  name: string;
  uri: string;
  icon?: string;
}

export interface TenantTheme {
  contactUri: string;
  displayName: string;
  logoUris: {
    full: string;
    footer: string;
  };
  footerResourceLinks?: FooterLink[];
  footerSocialLinks?: FooterLink[];
}

export interface TenantThemeConfig {
  [key: string]: TenantTheme;
}

