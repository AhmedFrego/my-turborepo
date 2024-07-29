import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	useTheme,
} from '@mui/material';
import React from 'react';
import { FlagImage } from 'react-international-phone';
import { PaletteMode } from 'src/constants';
import {
	useChangeLanguage,
	useChangeMode,
	useChangeThemeName,
	useTranslate,
} from 'src/hooks';
import { ThemeName, themes } from 'src/themes';
import { LocalizationLanguages } from 'src/utils';

interface PreferencesFormProps {}

export const PreferencesForm: React.FC<PreferencesFormProps> = () => {
	const theme = useTheme();
	const translate = useTranslate();

	const [locale, changeLanguage] = useChangeLanguage(
		LocalizationLanguages.en.code,
	);
	const [themeName, changeThemeName] = useChangeThemeName('soft');
	const [mode, setMode] = useChangeMode(PaletteMode.light);

	return (
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexFlow: 'nowrap',
				justifyContent: 'center',
				mt: 2,
				width: '100%',
			}}
		>
			<FormControl sx={{ marginInlineEnd: 1, width: '100%' }}>
				<InputLabel id="language-select-label">
					{translate('custom.common.change_language')}
				</InputLabel>
				<Select
					label={translate('custom.common.change_language')}
					labelId="language-select-label"
					value={locale}
					onChange={event => changeLanguage(event.target.value)}
				>
					{Object.values(LocalizationLanguages).map(language => {
						const { code, flag, label } = language;

						return (
							<MenuItem
								key={code}
								value={code}
							>
								<FlagImage
									iso2={flag}
									style={{
										height: theme.spacing(3),
										marginInlineEnd: theme.spacing(1),
										width: theme.spacing(3),
									}}
								/>
								{label}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>

			<FormControl sx={{ marginInlineEnd: 1, width: '100%' }}>
				<InputLabel id="theme-select-label">
					{translate('custom.theme.name')}
				</InputLabel>
				<Select
					label="Select Theme"
					labelId="theme-select-label"
					value={themeName}
					onChange={event => {
						changeThemeName(event.target.value as ThemeName);
					}}
				>
					{themes.map(theme => {
						const { name } = theme;

						return (
							<MenuItem
								key={name}
								value={name}
							>
								{name}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>

			<FormControl sx={{ width: '100%' }}>
				<InputLabel id="mode-select-label">
					{translate('command.sections.modes')}
				</InputLabel>
				<Select
					label="Select Mode"
					value={mode}
					onChange={event => {
						setMode(event.target.value as PaletteMode);
					}}
				>
					{Object.values(PaletteMode).map(mode => {
						return (
							<MenuItem
								key={mode}
								value={mode}
							>
								{mode}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</Box>
	);
};
