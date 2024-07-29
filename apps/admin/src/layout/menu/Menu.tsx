import CloudOff from '@mui/icons-material/CloudOffTwoTone';
import KeyboardCommandKey from '@mui/icons-material/KeyboardCommandKeyTwoTone';
import Search from '@mui/icons-material/SearchTwoTone';
import Wifi from '@mui/icons-material/WifiTwoTone';
import { Alert, Box, IconButton, Snackbar, Tooltip } from '@mui/material';
import {
	SolarMenu,
	SolarMenuList,
	SolarMenuLoadingIndicatorItem,
	SolarMenuUserItem,
	useSolarSidebarActiveMenu,
} from '@react-admin/ra-navigation';
import { SearchWithResult } from '@react-admin/ra-search';
import { useKBar } from 'kbar';
import React from 'react';
import { useNetworkState } from 'react-use';
import { isDevelopment } from 'src/constants';
import {
	useHotKeyContext,
	useHotkeys,
	useSidebarState,
	useTranslate,
} from 'src/hooks';
import { useCanAccessFunction } from 'src/utils';

import { SolarMenuLocalesItem } from './SolarMenuLocalesItem';
import { SolarMenuToggleThemeItem } from './SolarMenuToggleThemeItem';
import { SolarMenuUserProfileItem } from './SolarMenuUserProfileItem';
import { SubMenu } from './SubMenu';
import { MenuConfig, MenuItemConfig, parsedConfig } from './menuConfig';
import { Novu } from '../Novu';
import { UserEntities } from '../UserEntities';

export interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useSidebarState();
	const { canAccess } = useCanAccessFunction();
	const { hotkeys } = useHotKeyContext();
	const { query } = useKBar();
	const state = useNetworkState();

	const authorizeMenu = (menu?: MenuConfig): MenuConfig => {
		return (
			(menu
				?.map(item => processMenuItem(item))
				.filter(Boolean) as MenuConfig) ?? []
		);
	};

	const processMenuItem = (
		item: MenuItemConfig,
	): MenuItemConfig | undefined => {
		// If item has a reference, check for access
		if (item.reference) {
			if (
				canAccess({
					action: 'list',
					resource: item.reference,
				})
			) {
				return {
					...item,
					subItems: item.subItems ? authorizeMenu(item.subItems) : undefined,
				};
			}

			// If there are no subItems or they don't pass authorization, return undefined
			return item.subItems ? processSubItems(item) : undefined;
		}

		// Process subItems if they exist
		return item.subItems ? processSubItems(item) : item;
	};

	const processSubItems = (
		item: MenuItemConfig,
	): MenuItemConfig | undefined => {
		const subMenu = authorizeMenu(item.subItems);

		return subMenu.length > 0 ? { ...item, subItems: subMenu } : undefined;
	};

	useHotkeys('global.TOGGLE_MENU', () => {
		setIsSidebarOpen(!isSidebarOpen);
	});

	return (
		<SolarMenu
			bottomToolbar={
				<SolarMenuList dense>
					<SolarMenuLoadingIndicatorItem />
					{isDevelopment ? (
						state.online ? (
							<IconButton>
								<Wifi />
							</IconButton>
						) : (
							<>
								<CloudOff color="error" />
								<Snackbar
									open
									anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
								>
									<Alert
										severity="error"
										sx={{ width: '100%' }}
									>
										{state.online ? 'online' : 'offline'}{' '}
										{state.since?.toISOString()}
									</Alert>
								</Snackbar>
							</>
						)
					) : null}
					<Tooltip
						placement="right"
						title={hotkeys.command.TOGGLE_COMMAND?.hotkey[0]}
					>
						<IconButton
							onClick={() => {
								query.toggle();
							}}
						>
							<KeyboardCommandKey />
						</IconButton>
					</Tooltip>
					<SearchMenuItem />
					<Novu />
					<UserEntities />
					<SolarMenuUserItem
						subMenu={
							<SolarMenuList
								sx={{
									display: 'flex',
									flexDirection: 'column',
									marginTop: 'auto',
								}}
							>
								<SolarMenuLocalesItem />
								<SolarMenuToggleThemeItem />
								<SolarMenuUserProfileItem />
							</SolarMenuList>
						}
					/>
				</SolarMenuList>
			}
		>
			<SubMenu items={authorizeMenu(parsedConfig)} />
		</SolarMenu>
	);
};

const SearchMenuItem = () => {
	const translate = useTranslate();
	const [, setActiveMenu] = useSolarSidebarActiveMenu();

	const handleClose = () => {
		setActiveMenu('');
	};

	return (
		<SolarMenu.Item
			icon={<Search />}
			label={translate('custom.search')}
			name="search"
			subMenu={
				<Box sx={{ maxWidth: 298 }}>
					<SearchWithResult onNavigate={handleClose} />
				</Box>
			}
		/>
	);
};
