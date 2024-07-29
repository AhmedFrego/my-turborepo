import { RaThemeOptions } from 'react-admin';

export const purpleThemeLight: RaThemeOptions = {
	palette: {
		background: {
			default: '#F1EAFF',
			paper: '#f3ebff',
		},
		mode: 'light',
		primary: {
			contrastText: '#ffffff',
			dark: '#E5D4FF',
			light: '#F1EAFF',
			main: '#654f93',
		},
		secondary: {
			contrastText: '#000000',
			dark: '#DCBFFF',
			light: '#F3EEEA',
			main: '#E5D4FF',
		},
	},
};

export const purpleThemeDark: RaThemeOptions = {
	palette: {
		background: {
			default: '#1c1b1e',
			paper: '#19171c',
		},
		mode: 'dark',
		primary: {
			contrastText: '#ffffff',
			dark: '#DCBFFF',
			light: '#F3EEEA',
			main: '#E5D4FF',
		},
		secondary: {
			contrastText: '#ffffff',
			dark: '#E5D4FF',
			light: '#F3EEEA',
			main: '#D0A2F7',
		},
	},
};
