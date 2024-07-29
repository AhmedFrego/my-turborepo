/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable sonarjs/no-duplicate-string */
import ExitIcon from '@mui/icons-material/PowerSettingsNew';
import {
	Box,
	IconButton,
	ListItemButton,
	ListItemProps,
	ListItemText,
	Tooltip,
} from '@mui/material';
import clsx from 'clsx';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	useCreatePath,
	useGetIdentity,
	useLogout,
	useTranslate,
} from 'src/hooks';
import { Logger } from 'src/utils';

/**
 * This <SolarMenu> item displays the user name from the `authProvider.getIdentity` if available and a logout button.
 * Meant to be used in the secondary sidebar of the <SolarMenu> component.
 * Used by default in the <SolarMenu.UserItem> component.
 * It accepts the same props as MUI's <ListItem> component.
 * @see SolarMenu
 * @see SolarMenu.UserItem
 * @param props {SolarMenuUserProfileItemProps}
 * @param props.redirectTo {string} Optional. The location to redirect the user to when clicking on the logout button. Defaults to '/'. Set to false to disable redirection.
 */

export const SolarMenuUserProfileItem: React.FC<
	SolarMenuUserProfileItemProps
> = props => {
	const { className, redirectTo, ...rest } = props;

	const { identity, isLoading } = useGetIdentity();
	const translate = useTranslate();
	const logout = useLogout();
	const navigate = useNavigate();
	const createPath = useCreatePath();

	const handleClick = useCallback(
		() => logout(null, redirectTo, false),
		[redirectTo, logout],
	);

	if (isLoading) return null;

	return (
		<Box
			className={clsx(SolarMenuUserProfileItemClasses.root, className)}
			{...rest}
		>
			{identity?.fullName ? (
				<ListItemButton>
					<ListItemText
						onClick={() =>
							navigate(
								createPath({
									id: String(identity.id),
									resource: 'employees',
									type: 'show',
								}),
							)
						}
					>
						{identity?.fullName}
					</ListItemText>
					{identity?.fullName ? (
						<Tooltip title={translate('ra.auth.logout')}>
							<IconButton
								aria-label={translate('ra.auth.logout')}
								className={SolarMenuUserProfileItemClasses.logoutIconButton}
								edge="end"
								onClick={() => {
									handleClick().catch(Logger.error);
								}}
							>
								<ExitIcon />
							</IconButton>
						</Tooltip>
					) : null}
				</ListItemButton>
			) : (
				<ListItemButton
					onClick={() => {
						handleClick().catch(Logger.error);
					}}
				>
					<ListItemText>{translate('ra.auth.logout')}</ListItemText>
					<ExitIcon />
				</ListItemButton>
			)}
		</Box>
	);
};

export type SolarMenuUserProfileItemProps = {
	redirectTo?: string;
} & Partial<Omit<ListItemProps<'div'>, 'component'>>;

const PREFIX = 'RaSolarMenuUserItem';

const SolarMenuUserProfileItemClasses = {
	logoutIconButton: `${PREFIX}-logoutIconButton`,
	root: `${PREFIX}-root`,
	userFullName: `${PREFIX}-userFullName`,
};
