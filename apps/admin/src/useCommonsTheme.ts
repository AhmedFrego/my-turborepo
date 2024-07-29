import { ThemeOptions } from '@mui/material';
import { defaultDarkTheme, defaultLightTheme } from 'react-admin';

import { PaletteMode } from './constants';
import { useChangeMode, useLocale } from './hooks';

export const useCommonsTheme = (): ThemeOptions => {
	const { direction } = useLocale();
	const [mode] = useChangeMode();

	const defaultTheme =
		mode === PaletteMode.dark ? defaultDarkTheme : defaultLightTheme;

	return {
		...defaultTheme,
		components: {
			...defaultTheme.components,
			MuiFormControl: {
				defaultProps: {
					variant: 'standard',
				},
			},
			MuiTextField: {
				defaultProps: {
					variant: 'standard',
				},
			},
		},
		direction,
		palette: {},
		typography: {
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Arial',
				'sans-serif',
			].join(','),
		},
	};
};
