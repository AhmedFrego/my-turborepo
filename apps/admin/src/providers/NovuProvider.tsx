import { Theme, useTheme } from '@mui/material';
import { NovuProvider as BaseNovuProvider } from '@novu/notification-center';
import React from 'react';
import { useLocale, useUser } from 'src/hooks';
import { Logger } from 'src/utils';

const createNovuStyles = (theme: Theme) => ({
	bellButton: {
		root: {
			svg: {
				color: theme.palette.text.primary,
				minHeight: theme.spacing(1.2),
				minWidth: theme.spacing(1.2),
			},
		},
	},
});

export interface NovuProviderProps {}

export const NovuProvider: React.FC<
	React.PropsWithChildren<NovuProviderProps>
> = props => {
	const { children } = props;

	const theme = useTheme();
	const user = useUser();
	const styles = createNovuStyles(theme);
	const { locale } = useLocale();

	return (
		<BaseNovuProvider
			applicationIdentifier={import.meta.env.VITE_NOVU_APP_ID}
			i18n={locale}
			initialFetchingStrategy={{
				fetchNotifications: true,
				fetchOrganization: true,
				fetchUnreadCount: true,
				fetchUnseenCount: true,
				fetchUserPreferences: true,
			}}
			styles={styles}
			subscriberId={user?.id}
			onLoad={Logger.log}
		>
			{children}
		</BaseNovuProvider>
	);
};
