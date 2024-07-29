import {
	ListItemIcon,
	ListItemText,
	MenuItem,
	SvgIconProps,
} from '@mui/material';
import isEqualWith from 'lodash/isEqualWith';
import { forwardRef } from 'react';
import { removeDoubleSlashes, useBasename } from 'react-admin';
import {
	Path,
	resolvePath,
	To,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import { useUserMenu } from 'src/hooks';

// It's important to pass the ref to allow Material UI to manage the keyboard navigation
// eslint-disable-next-line react/display-name
export const UserMenuItem = forwardRef<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	any,
	{
		active?: boolean;
		children?: React.ReactNode;
		icon?: React.ElementType<SvgIconProps>;
		label: string;
		path: To;
	}
>((props, ref) => {
	// We are not using MenuItemLink so we retrieve the onClose function from the UserContext
	const basename = useBasename();
	const navigate = useNavigate();
	const location = useLocation();
	const userMenu = useUserMenu();

	const { children, icon: Icon, label, path } = props;

	const active = isEqualWith(
		location,
		resolvePath(path),
		(a: Path, b: Path) => {
			return (
				a.hash === b.hash && a.pathname === b.pathname && a.search === b.search
			);
		},
	);

	return (
		<MenuItem
			ref={ref}
			onClick={() => {
				userMenu?.onClose();
				navigate(
					typeof path === 'string'
						? removeDoubleSlashes(`${basename}/${path}`)
						: path,
				);
			}}
			// It's important to pass the props to allow Material UI to manage the keyboard navigation
			{...props}
		>
			<ListItemIcon>
				{Icon ? (
					<Icon
						color={active ? 'primary' : undefined}
						fontSize="small"
					/>
				) : null}
				{children}
			</ListItemIcon>
			<ListItemText>{label}</ListItemText>
		</MenuItem>
	);
});
