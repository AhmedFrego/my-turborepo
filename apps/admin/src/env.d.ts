/// <reference types="vite/client" />
/// <reference types="@welldone-software/why-did-you-render" />

interface ImportMetaEnv {
	VITE_APP_GIT_SHA: string;
	VITE_APP_NAME: string;
	VITE_GOOGLE_MAPS_API_KEY: string;
	VITE_NOVU_APP_ID: string;
	VITE_POSTHOG_HOST: string;
	VITE_POSTHOG_KEY: string;
	VITE_SUPABASE_ANON_KEY: string;
	VITE_SUPABASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
