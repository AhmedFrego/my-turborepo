import { RaThemeOptions } from 'react-admin';

const beigeThemeColors = {
	primary: {
		contrastText: '#ffffff',
		dark: '#776B5D',
		light: '#F3EEEA',
		main: '#baab90',
	},
	secondary: {
		contrastText: '#000000',
		dark: '#b8a189',
		light: '#F3EEEA',
		main: '#EBE3D5',
	},
};

export const beigeThemeLight: RaThemeOptions = {
	palette: {
		background: {
			default: beigeThemeColors.primary.light,
			paper: '#f9f6f3',
		},
		mode: 'light',
		primary: beigeThemeColors.primary,
		secondary: beigeThemeColors.secondary,
	},
};

export const beigeThemeDark: RaThemeOptions = {
	palette: {
		background: {
			default: '#1e1d1b',
			paper: '#473C33',
		},
		mode: 'dark',
		primary: {
			contrastText: '#FFFFFF',
			dark: '#473C33',
			light: '#8C7D70',
			main: '#baab9e',
		},
		secondary: {
			contrastText: '#000000',
			dark: '#776B5D',
			light: '#F3EEEA',
			main: '#EBE3D5',
		},
	},
};
