import { RaThemeOptions } from 'react-admin';

/**
 * Soft: A gentle theme for apps with rich content (images, charts, maps, etc).
 *
 * Uses white app bar, rounder corners, light colors.
 */
export const softDarkTheme: RaThemeOptions = {
	components: {
		MuiAppBar: {
			defaultProps: {
				elevation: 1,
			},
			styleOverrides: {
				colorSecondary: {
					backgroundImage: 'linear-gradient(45deg, #616161, #424242)',
					color: '#ffffff',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					'&:hover': {
						backgroundColor: '#78909c',
					},
				},
			},
		},
		MuiInput: {
			styleOverrides: {
				underline: {
					'&:hover:not(.Mui-disabled):before': {
						borderBottom: '2px solid #90caf9',
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: '#424242',
					border: '1px solid #616161',
				},
			},
		},
		RaMenuItemLink: {
			styleOverrides: {
				root: {
					'&.RaMenuItemLink-active': {
						borderLeft: '3px solid #90caf9',
					},
					borderLeft: '3px solid #000',
				},
			},
		},
	},
	palette: {
		mode: 'dark' as const,
		primary: {
			main: '#90caf9',
		},
		secondary: {
			main: '#80cbc4',
		},
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			fontWeight: 500,
		},
	},
};

export const softLightTheme: RaThemeOptions = {
	components: {
		MuiAppBar: {
			defaultProps: {
				elevation: 1,
			},
			styleOverrides: {
				colorSecondary: {
					backgroundImage: 'linear-gradient(45deg, #eceff1, #fafafa)',
					color: '#616161',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					'&:hover': {
						backgroundColor: '#d1c4e9',
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: '#fff',
					boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
				},
			},
		},
		MuiTableRow: {
			styleOverrides: {
				root: {
					'&:hover': {
						backgroundColor: '#f5f5f5',
					},
					'&:last-child td': {
						border: 0,
					},
				},
			},
		},
		RaMenuItemLink: {
			styleOverrides: {
				root: {
					'&.RaMenuItemLink-active': {
						borderLeft: '3px solid #4f3cc9',
					},
					borderLeft: '3px solid #fff',
				},
			},
		},
	},
	palette: {
		background: {
			default: '#fcfcfe',
		},
		mode: 'light' as const,
		primary: {
			main: '#4f3cc9',
		},
		secondary: {
			contrastText: '#fff',
			dark: '#001064',
			light: '#5f5fc4',
			main: '#283593',
		},
	},
	shape: {
		borderRadius: 10,
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			fontWeight: 500,
		},
	},
};
