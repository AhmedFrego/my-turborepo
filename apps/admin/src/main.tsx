/* eslint-disable i18next/no-literal-string */
import './wdyr';
import './sentry';
import './firebase';

import * as Sentry from '@sentry/react';
import { registerLicense } from '@syncfusion/ej2-base';
import posthog from 'posthog-js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

import { App } from './App';
import { isDevelopment } from './constants';
import { Logger } from './utils';

registerLicense(
	'Ngo9BigBOggjHTQxAR8/V1NAaF1cW2hIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjW35ZcHFVQWVZU0V0Xg==',
);

if (!isDevelopment) {
	posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
		api_host: import.meta.env.VITE_POSTHOG_HOST,
	});
}

const container = document.querySelector('#root')!;

if (container) {
	const root = createRoot(container);

	root.render(
		<StrictMode>
			<Sentry.ErrorBoundary fallback={<p>Something went wrong</p>}>
				<ErrorBoundary fallback={<p>Something went wrong</p>}>
					<App />
				</ErrorBoundary>
			</Sentry.ErrorBoundary>
		</StrictMode>,
	);
} else {
	Logger.error('Root container not found');
}
