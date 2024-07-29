import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { APIProvider } from '@vis.gl/react-google-maps';
import { useI18nextProvider } from 'ra-i18n-i18next';
import React, { useEffect } from 'react';
import { AuthContext, DataProviderContext } from 'react-admin';
import { AbilityProvider } from 'src/casl';
import { appName } from 'src/constants';
import { FullScreenProvider, ShortCutProvider } from 'src/contexts';
import { useLocale } from 'src/hooks';
import {
	availableLocales,
	I18nContextProvider,
	i18nextInstance,
	supabase,
	useAuthProviderInstance,
	useDataProviderInstance,
} from 'src/providers';
import { createCacheInstance, Logger } from 'src/utils';

import { NovuProvider } from './providers';

export interface GlobalLayoutProps {}

export const GlobalLayout: React.FC<
	React.PropsWithChildren<GlobalLayoutProps>
> = props => {
	const { children } = props;

	useEffect(() => {
		const query = new URLSearchParams(window.location.search);

		const access_token = query.get('access_token');
		const refresh_token = query.get('refresh_token');

		if (access_token && refresh_token)
			supabase.auth
				.setSession({ access_token, refresh_token })
				.then(() => {
					query.set('access_token', '');
					query.set('refresh_token', '');
				})
				.catch(error => Logger.error('setSession', error));
	}, []);

	const { direction, fns, locale } = useLocale();
	const dataProvider = useDataProviderInstance();
	const authProvider = useAuthProviderInstance();

	const i18nProvider = useI18nextProvider({
		availableLocales,
		i18nextInstance,
	});

	if (!i18nProvider) return null;

	return (
		<APIProvider
			apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
			language={locale}
			onLoad={Logger.log}
		>
			<ShortCutProvider>
				<FullScreenProvider>
					<LocalizationProvider
						adapterLocale={fns}
						dateAdapter={AdapterDateFns}
					>
						<AuthContext.Provider value={authProvider}>
							<DataProviderContext.Provider value={dataProvider}>
								<I18nContextProvider value={i18nProvider}>
									<CacheProvider
										value={createCacheInstance(appName, direction)}
									>
										<AbilityProvider>
											<NovuProvider>{children}</NovuProvider>
										</AbilityProvider>
									</CacheProvider>
								</I18nContextProvider>
							</DataProviderContext.Provider>
						</AuthContext.Provider>
					</LocalizationProvider>
				</FullScreenProvider>
			</ShortCutProvider>
		</APIProvider>
	);
};
