export interface UserLookupOptions {
  query: string;
  waterfallId?: string;
  directlySignIn?: boolean;
  countryCodes?: Array<{ country_code: string; source: Array<string | 'default'> }>;
}
