import CheckIcon from '@mui/icons-material/Check';
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemProps,
	ListItemText,
	useTheme,
} from '@mui/material';
import clsx from 'clsx';
import { FlagImage } from 'react-international-phone';
import { LanguageCode, LanguageCodeEnum } from 'shared-first-tire';
import { useChangeLanguage } from 'src/hooks';
import { LocalizationLanguages } from 'src/utils';

/**
 * Language selector. Changes the locale in the app and persists it in
 * preferences so that the app opens with the right locale in the future.
 *
 * Uses i18nProvider.getLocales() to get the list of available locales.
 *
 * @example
 * import { SolarMenu } from '@react-admin/navigation';
 *
 * const MyMenu = () => (
 *     <SolarMenu>
 *          <SolarMenu.LocalesItem />
 *     </SolarMenu>
 * );
 */

export const SolarMenuLocalesItem: React.FC<
	SolarMenuLocalesItemProps
> = props => {
	const { className, ...rest } = props;
	const theme = useTheme();
	const [language, changeLanguage] = useChangeLanguage();
	const changeLocale = (locale: LanguageCode) => (): void => {
		changeLanguage(locale as LanguageCodeEnum);
	};

	return (
		<Box
			className={clsx(SolarMenuLocalesItemClasses.root, className)}
			component="div"
			{...rest}
		>
			<List
				disablePadding
				className={SolarMenuLocalesItemClasses.list}
				component="div"
			>
				{Object.values(LocalizationLanguages).map(lang => (
					<ListItem
						key={lang.label}
						disablePadding
						secondaryAction={
							lang.code === language ? (
								<Box className={SolarMenuLocalesItemClasses.iconContainer}>
									<CheckIcon className={SolarMenuLocalesItemClasses.icon} />
								</Box>
							) : null
						}
					>
						<ListItemButton
							className={SolarMenuLocalesItemClasses.button}
							onClick={changeLocale(lang.code)}
						>
							<FlagImage
								iso2={lang.flag}
								style={{
									height: theme.spacing(3),
									marginInlineEnd: theme.spacing(1),
									width: theme.spacing(3),
								}}
							/>
							<ListItemText primary={lang.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export type SolarMenuLocalesItemProps = Partial<ListItemProps>;

const PREFIX = 'RaSolarMenuLocalesItem';

const SolarMenuLocalesItemClasses = {
	button: `${PREFIX}-button`,
	icon: `${PREFIX}-icon`,
	iconContainer: `${PREFIX}-iconContainer`,
	list: `${PREFIX}-list`,
	root: `${PREFIX}-root`,
};
