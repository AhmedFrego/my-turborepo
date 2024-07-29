import { createTheme, useMediaQuery, useTheme } from '@mui/material';
import deepmerge from '@mui/utils/deepmerge';
import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	AccessDenied,
	CustomRoutes,
	LoadingPage,
	Admin as NativeAdmin,
	Notification,
	ScreenSizeWarning,
} from 'src/components';
import {
	appName,
	AuthenticationRoutes,
	isDevelopment,
	PaletteMode,
	pickerTextLocale,
	StoreKeys,
} from 'src/constants';
import {
	useAuthProvider,
	useChangeMode,
	useDataProvider,
	useEmployeeContext,
	useI18nProvider,
	useLocale,
	usePreferColorScheme,
	useStore,
	useStoreContext,
} from 'src/hooks';
import { Layout } from 'src/layout';
import { Dashboard } from 'src/pages';
import { ThemeName } from 'src/themes';

import { renderRoutes } from './AdminRouter';
import { LoginPage } from './LoginPage';
import {
	createThemes,
	renderResources,
	setupDocumentLocale,
} from './adminConfig';
import { useCommonsTheme } from '../useCommonsTheme';
import { alwaysArray, useCanAccessFunction } from '../utils';

const Notifications = () => <Notification autoHideDuration={5000} />;

export interface AdminProps {}

export const Admin: React.FC<AdminProps> = () => {
	const i18n = useI18nProvider();
	const store = useStoreContext();
	const authProvider = useAuthProvider();
	const dataProvider = useDataProvider();
	const queryClient = useQueryClient();
	const { current } = useEmployeeContext();
	const navigate = useNavigate();
	const [mode] = useChangeMode();
	const theme = useTheme();

	const { canAccess, isLoading } = useCanAccessFunction();

	const { code, config } = useLocale();

	const preferredColorMode = usePreferColorScheme(PaletteMode.light);
	const [themeName] = useStore<ThemeName>(StoreKeys.ThemeName, 'soft');

	const { darkTheme, lightTheme } = useMemo(
		() => createThemes(themeName),
		[themeName],
	);

	useEffect(() => {
		setupDocumentLocale(config);
	}, [config]);

	const commonTheme = createTheme(
		mode === PaletteMode.dark ? darkTheme : lightTheme,
		deepmerge(useCommonsTheme(), pickerTextLocale[config.code]),
		...alwaysArray(config.localization),
	);

	const isScreenSizeTooSmall = useMediaQuery(theme.breakpoints.down('md'));

	if (isScreenSizeTooSmall) {
		return <ScreenSizeWarning />;
	}

	if (isLoading) {
		return <LoadingPage />;
	}

	if (!canAccess({ action: 'access', resource: 'dashboard' })) {
		return <AccessDenied />;
	}

	if (!current) {
		navigate(`/${AuthenticationRoutes.Login}`);

		return null;
	}

	return (
		<NativeAdmin
			requireAuth
			authProvider={authProvider}
			dashboard={Dashboard}
			dataProvider={dataProvider}
			defaultTheme={preferredColorMode}
			disableTelemetry={!isDevelopment}
			i18nProvider={i18n}
			layout={Layout}
			loginPage={LoginPage}
			notification={Notifications}
			queryClient={queryClient}
			store={store}
			theme={commonTheme}
			title={appName}
		>
			<CustomRoutes>{renderRoutes()}</CustomRoutes>
			{renderResources({ locale: code })}
		</NativeAdmin>
	);
};
