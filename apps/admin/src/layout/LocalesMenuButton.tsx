import ExpandMoreIcon from '@mui/icons-material/ExpandMoreTwoTone';
import LanguageIcon from '@mui/icons-material/TranslateTwoTone';
import { Box, Button, Menu, MenuItem, styled } from '@mui/material';
import { MouseEvent, ReactNode, useState } from 'react';
import { LanguageCodeEnum } from 'src/constants';
import { Locale, useChangeLanguage, useLocale, useLocales } from 'src/hooks';

/**
 * Language selector. Changes the locale in the app and persists it in
 * preferences so that the app opens with the right locale in the future.
 *
 * Uses i18nProvider.getLocales() to get the list of available locales.
 *
 * @example
 * import { AppBar, TitlePortal, LocalesMenuButton } from 'react-admin';
 *
 * const MyAppBar = () => (
 *     <AppBar>
 *         <TitlePortal />
 *         <LocalesMenuButton />
 *     </AppBar>
 * );
 */
export const LocalesMenuButton = (props: LocalesMenuButtonProps) => {
	const { icon = DefaultIcon, languages: languagesProp } = props;
	const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
	const languages = useLocales({ locales: languagesProp });
	const { locale } = useLocale();
	const [, changeLanguage] = useChangeLanguage();

	const getNameForLocale = (locale: LanguageCodeEnum): string => {
		const language = languages.find(language => language.locale === locale);

		return language ? language.name : '';
	};

	const handleLanguageClick = (event: MouseEvent<HTMLElement>): void => {
		setAnchorElement(event.currentTarget);
	};

	const handleClose = (): void => {
		setAnchorElement(null);
	};

	return (
		<Root component="span">
			<Button
				aria-controls="simple-menu"
				aria-haspopup="true"
				aria-label=""
				color="inherit"
				endIcon={<ExpandMoreIcon fontSize="small" />}
				startIcon={icon}
				variant="text"
				onClick={handleLanguageClick}
			>
				{getNameForLocale(locale)}
			</Button>
			<Menu
				keepMounted
				anchorEl={anchorElement}
				id="simple-menu"
				open={Boolean(anchorElement)}
				onClose={handleClose}
			>
				{languages.map(language => (
					<MenuItem
						key={language.locale}
						selected={language.locale === locale}
						onClick={() => changeLanguage(language.locale)}
					>
						{language.name}
					</MenuItem>
				))}
			</Menu>
		</Root>
	);
};

const DefaultIcon = <LanguageIcon />;
const PREFIX = 'RaLocalesMenuButton';

const Root = styled(Box, {
	name: PREFIX,
	overridesResolver: (_, styles) => styles.root,
})({});

export interface LocalesMenuButtonProps {
	icon?: ReactNode;
	languages?: Locale[];
}
