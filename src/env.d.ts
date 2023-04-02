interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_SUPABASE_API_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
