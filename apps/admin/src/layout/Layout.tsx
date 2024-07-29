import { Box } from '@mui/material';
import { AppLocationContext } from '@react-admin/ra-navigation';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { GlobalStyles } from 'src/GlobalStyles';
import { Layout as AdminLayout, IdleOverlay } from 'src/components';
import { HotkeysProvider } from 'src/contexts';
import { useHotkeys, useMode } from 'src/hooks';
import { ShortCut } from 'src/layout';
import { KBarProvider } from 'src/layout/command/KBarProvider';
import { LayoutProps as EnterpriseLayoutProps } from 'src/types';

import { Command } from './command/Command';
import { Menu } from './menu/Menu';

export interface LayoutProps extends EnterpriseLayoutProps {}

export const Layout: React.FC<LayoutProps> = props => {
	const { children, ...rest } = props;

	const [mode, setMode] = useMode();

	useHotkeys('global.TOGGLE_MODE', () => {
		setMode(mode === 'dark' ? 'light' : 'dark');
	});

	return (
		<HotkeysProvider>
			<KBarProvider>
				<GlobalStyles />
				<AppLocationContext>
					<Command />
					<AdminLayout
						{...rest}
						menu={Menu}
					>
						<Box sx={{ display: 'flex', height: '100%' }}>
							<Box sx={{ width: '100%' }}>{children}</Box>
							<ShortCut />
						</Box>
					</AdminLayout>
					<IdleOverlay />
				</AppLocationContext>
				<ReactQueryDevtools initialIsOpen={false} />
			</KBarProvider>
		</HotkeysProvider>
	);
};
