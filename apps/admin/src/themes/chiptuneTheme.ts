import { RaThemeOptions } from 'react-admin';

export const chiptuneTheme: RaThemeOptions = {
	palette: {
		background: {
			default: '#111111',
			paper: '#342828',
		},
		mode: 'dark' as const,
		primary: {
			contrastText: '#fff',
			dark: '#557C55',
			light: '#3f3f3f',
			main: '#A6CF98',
		},
		secondary: {
			main: '#FA7070',
		},
	},
	typography: {
		fontFamily: `'Pixelify Sans', cursive`,
	},
};

export const chiptuneLightTheme: RaThemeOptions = {
	...chiptuneTheme,
	palette: {
		...chiptuneTheme.palette,
		background: {
			default: '#f7f8f9',
			paper: '#ffffff',
		},
		mode: 'light',
	},
};

export const chiptuneDarkTheme: RaThemeOptions = {
	...chiptuneTheme,
	palette: {
		...chiptuneTheme.palette,
		mode: 'dark',
	},
};
