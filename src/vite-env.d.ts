/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_GITHUB_URL: string;
  readonly VITE_LINKEDIN_URL: string;
  readonly VITE_TWITTER_URL: string;
  readonly VITE_ENABLE_ANALYTICS: string;
  readonly VITE_ENVIRONMENT: "development" | "production";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
