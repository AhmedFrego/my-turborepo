import * as Sentry from '@sentry/react';
import { Integration } from '@sentry/types';
import { useEffect } from 'react';
import {
	createRoutesFromChildren,
	matchRoutes,
	useLocation,
	useNavigationType,
} from 'react-router-dom';

import { isDevelopment } from './constants';

const SentryEnvHostnameMap: { [key: string]: string } = {
	'bmglobal.net': 'production',
	'vercel.app': 'staging',
};

const SENTRY_DISABLED = import.meta.env.VITE_APP_DISABLE_SENTRY === 'true';

// Disable Sentry locally or inside the Docker to avoid noise/respect privacy
const onlineEnv =
	!SENTRY_DISABLED &&
	Object.keys(SentryEnvHostnameMap).find(item =>
		window.location.hostname.includes(item),
	);

const integrations:
	| ((integrations: Integration[]) => Integration[])
	| Integration[] = [
	Sentry.replayIntegration(),
	Sentry.browserTracingIntegration(),
	Sentry.reactRouterV6BrowserTracingIntegration({
		createRoutesFromChildren,
		matchRoutes,
		useEffect,
		useLocation,
		useNavigationType,
	}),
];

if (isDevelopment)
	integrations.push(
		Sentry.feedbackIntegration({
			colorScheme: 'system',
			showBranding: false,
			showEmail: false,
			showName: false,
		}),
	);

if (onlineEnv)
	Sentry.init({
		debug: isDevelopment,
		dsn: 'https://2cb264b7db5299bf09752f59515db12c@o4506846515494912.ingest.us.sentry.io/4507459582885888',
		enabled: !isDevelopment,
		environment: SentryEnvHostnameMap[onlineEnv],
		integrations,
		release: import.meta.env.VITE_APP_GIT_SHA,
		// If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
		replaysOnErrorSampleRate: 1,
		// Session Replay
		// This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
		replaysSessionSampleRate: 0.1,
		// Performance Monitoring
		// Capture 100% of the transactions, reduce in production!
		tracesSampleRate: 1,
	});
