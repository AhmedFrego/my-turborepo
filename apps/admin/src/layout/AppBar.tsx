import loadable from '@loadable/component';
import CloudOff from '@mui/icons-material/CloudOffTwoTone';
import CorporateFare from '@mui/icons-material/CorporateFareTwoTone';
import Search from '@mui/icons-material/SearchTwoTone';
import Settings from '@mui/icons-material/SettingsTwoTone';
import SwitchAccessShortcutAdd from '@mui/icons-material/SwitchAccessShortcutAddTwoTone';
import Wifi from '@mui/icons-material/WifiTwoTone';
import {
	Alert,
	Avatar,
	Box,
	Chip,
	CircularProgress,
	Divider,
	InputAdornment,
	ListItem,
	ListItemIcon,
	ListItemText,
	MenuItem,
	Snackbar,
	TextField,
	useTheme,
} from '@mui/material';
import { useKBar } from 'kbar';
import React from 'react';
import { useBasename } from 'react-admin';
import { useNavigate } from 'react-router-dom';
import { useNetworkState } from 'react-use';
import {
	InspectorButton,
	Logout,
	AppBar as RaAppBar,
	AppBarProps as RaAppBarProps,
	TitlePortal,
	UserMenu,
} from 'src/components';
import { AdminRoutes, isDevelopment } from 'src/constants';
import {
	useCreatePath,
	useGetIdentity,
	useHotKeyContext,
	useHotkeys,
	useTranslate,
	useUserPreferencesContext,
} from 'src/hooks';
import { LocalesMenuButton } from 'src/layout';
import { ThemeSwapper } from 'src/themes/ThemeSwapper';
import { Logger } from 'src/utils';

import { AppBarToolbar } from './AppBarToolbar';
import { UserEntities } from './UserEntities';
import { UserMenuItem } from './UserMenuItem';

export const Novu = loadable(() => import('./Novu').then(({ Novu }) => Novu), {
	fallback: <CircularProgress size={20} />,
});

export interface AppBarProps extends RaAppBarProps {}

export const AppBar: React.FC<AppBarProps> = props => {
	const identity = useGetIdentity();
	const translate = useTranslate();
	const { hotkeys } = useHotKeyContext();

	const {
		// @ts-ignore - pass
		data,
	} = identity;

	const { avatar, fullName, id } = data ?? {};

	const theme = useTheme();
	const state = useNetworkState();
	const { query } = useKBar();

	const basename = useBasename();
	const navigate = useNavigate();
	const createPath = useCreatePath();
	const userPreferences = useUserPreferencesContext();

	useHotkeys('global.PROFILE', () => {
		if (id) navigate(createPath({ id, resource: 'employees', type: 'show' }));
	});

	useHotkeys('global.GO_HOME', () => {
		navigate(basename);
	});

	useHotkeys('global.GO_BACK', () => {
		navigate(-1);
	});

	return (
		<RaAppBar
			alwaysOn
			toolbar={<AppBarToolbar />}
			userMenu={
				<>
					<Box>
						<TextField
							hiddenLabel
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Chip
											label={hotkeys.command.TOGGLE_COMMAND?.hotkey[0]}
											size="small"
											variant="outlined"
										/>
									</InputAdornment>
								),
								onClick: () => {
									query.toggle();
								},
								readOnly: true,
								startAdornment: (
									<InputAdornment position="start">
										<Search />
									</InputAdornment>
								),
								sx: {
									cursor: 'pointer',
									marginInlineEnd: 1,
									width: 200,
								},
							}}
							id="outlined-adornment-weight"
							placeholder="Search..."
							size="small"
							sx={{ marginBottom: 0, marginTop: 0 }}
							variant="outlined"
						/>
					</Box>

					<UserEntities />
					<UserMenu>
						{id ? (
							<UserMenuItem
								label={String(fullName)}
								path={{
									pathname: createPath({
										id,
										resource: 'employees',
										type: 'edit',
									}),
								}}
							>
								<Avatar
									src={String(avatar)}
									sx={{ marginInlineEnd: 2 }}
								/>
							</UserMenuItem>
						) : null}
						<Divider />
						<UserMenuItem
							icon={SwitchAccessShortcutAdd}
							label={translate(`custom.pages.${AdminRoutes.HotKeys}`)}
							path={`/${AdminRoutes.HotKeys}`}
						/>
						<UserMenuItem
							icon={CorporateFare}
							label={translate(
								`custom.pages.${AdminRoutes.OrganizationStructure}`,
							)}
							path={`/${AdminRoutes.OrganizationStructure}`}
						/>
						<UserMenuItem
							icon={CorporateFare}
							label={translate(`custom.pages.${AdminRoutes.MyRequestHistory}`)}
							path={`/${AdminRoutes.MyRequestHistory}`}
						/>
						<UserMenuItem
							icon={Settings}
							label={translate(`custom.pages.${AdminRoutes.Configuration}`)}
							path={`/${AdminRoutes.Configuration}`}
						/>
						<Divider />
						{isDevelopment
							? [
									<MenuItem
										key="Sync menu item"
										onClick={() => {
											Logger.log(userPreferences);
											userPreferences.syncPreferences();
										}}
									>
										<ListItemIcon>
											<Settings />
										</ListItemIcon>
										<ListItemText>Sync</ListItemText>
									</MenuItem>,
									<Divider key="Sync Divider" />,
								]
							: null}
						<ListItem
							dense
							sx={{ color: theme.palette.action.active }}
						>
							<LocalesMenuButton />
							<Box sx={{ flexGrow: 1 }} />
							<ThemeSwapper />
						</ListItem>
						<Divider />
						<Logout />
					</UserMenu>
				</>
			}
			{...props}
		>
			<TitlePortal />

			{isDevelopment ? (
				state.online ? (
					<Wifi />
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

			<InspectorButton />

			<Novu />
		</RaAppBar>
	);
};
