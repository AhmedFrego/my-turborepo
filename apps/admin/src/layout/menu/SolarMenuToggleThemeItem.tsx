import Brightness4Icon from '@mui/icons-material/Brightness4TwoTone';
import Brightness7Icon from '@mui/icons-material/Brightness7TwoTone';
import {
	Box,
	ListItemButton,
	ListItemProps,
	ListItemText,
} from '@mui/material';
import clsx from 'clsx';
import { useMode, useTranslate } from 'src/hooks';

/**
 * Button toggling the theme (light or dark).
 *
 * Enabled by default in the <AppBar> when the <Admin> component has a darkMode.
 *
 * @example
 * import { SolarMenu } from '@react-admin/navigation';
 *
 * const MyMenu = () => (
 *     <SolarMenu>
 *          <SolarMenu.ToggleThemeItem />
 *     </SolarMenu>
 * );
 */

export const SolarMenuToggleThemeItem: React.FC<
	SolarMenuToggleThemeItemProps
> = props => {
	const { className, ...rest } = props;

	const translate = useTranslate();
	const [mode, setMode] = useMode();

	const handleClick = (): void => {
		setMode(mode === 'dark' ? 'light' : 'dark');
	};
	const toggleThemeTitle = translate('ra.action.toggle_theme', {
		_: 'Toggle Theme',
	});

	return (
		<Box
			className={clsx(SolarMenuToggleThemeItemClasses.root, className)}
			{...rest}
		>
			<ListItemButton
				className={SolarMenuToggleThemeItemClasses.button}
				onClick={handleClick}
			>
				<ListItemText>{toggleThemeTitle}</ListItemText>
				<Box className={SolarMenuToggleThemeItemClasses.iconContainer}>
					{mode === 'dark' ? (
						<Brightness7Icon
							className={SolarMenuToggleThemeItemClasses.icon}
							sx={{ ml: 'auto' }}
						/>
					) : (
						<Brightness4Icon
							className={SolarMenuToggleThemeItemClasses.icon}
							sx={{ ml: 'auto' }}
						/>
					)}
				</Box>
			</ListItemButton>
		</Box>
	);
};

export type SolarMenuToggleThemeItemProps = Partial<ListItemProps<'div'>>;

const PREFIX = 'RaSolarMenuToggleThemeItem';

const SolarMenuToggleThemeItemClasses = {
	button: `${PREFIX}-button`,
	icon: `${PREFIX}-icon`,
	iconContainer: `${PREFIX}-iconContainer`,
	root: `${PREFIX}-root`,
};
