import { RaThemeOptions } from 'react-admin';

export const orangeThemeLight: RaThemeOptions = {
	palette: {
		background: {
			default: '#d3d9e7',
			paper: '#e9edf7',
		},
		mode: 'light',
		primary: {
			contrastText: '#FFFFFF',
			dark: '#1c212e',
			light: '#d3d9e7',
			main: '#4d5567',
		},
		secondary: {
			contrastText: '#1c212e',
			dark: '#1c212e',
			light: '#d3d9ef',
			main: '#aab2c5',
		},
	},
};

export const orangeThemeDark: RaThemeOptions = {
	palette: {
		background: {
			default: '#1c212e',
			paper: '#262c38',
		},
		mode: 'dark',
		primary: {
			contrastText: '#FFFFFF',
			dark: '#1c212e',
			light: '#d3d9e7',
			main: '#d3d9e7',
		},
		secondary: {
			contrastText: '#FFFFFF',
			dark: '#1c212e',
			light: '#d3d9e7',
			main: '#4d5567',
		},
	},
};
