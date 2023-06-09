interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_SUPABASE_API_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
