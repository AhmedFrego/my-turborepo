import { createTheme } from '@mui/material';
import { PaletteMode } from 'src/constants';
import { softDarkTheme } from 'src/themes/softTheme';
import { ITheme } from 'survey-core';

export const useSurveyTheme = (): ITheme => {
	const theme = createTheme(softDarkTheme);

	return {
		backgroundImageAttachment: 'scroll',
		backgroundImageFit: 'cover',
		backgroundOpacity: 1,
		colorPalette: PaletteMode.dark,
		cssVariables: {
			'--sjs-base-unit': theme.spacing(1),
			'--sjs-border-default': theme.palette.divider,
			'--sjs-border-inside': theme.palette.divider,
			'--sjs-border-light': theme.palette.grey[200],
			'--sjs-corner-radius': theme.shape.borderRadius + 'px',
			'--sjs-general-backcolor': theme.palette.background.default,
			'--sjs-general-backcolor-dark': theme.palette.grey[300],
			'--sjs-general-backcolor-dim': theme.palette.grey[200],
			'--sjs-general-backcolor-dim-dark': theme.palette.grey[200],
			'--sjs-general-backcolor-dim-light': theme.palette.grey[100],
			'--sjs-general-dim-forecolor': theme.palette.text.primary,
			'--sjs-general-dim-forecolor-light': theme.palette.text.secondary,
			'--sjs-general-forecolor': theme.palette.text.primary,
			'--sjs-general-forecolor-light': theme.palette.text.secondary,
			'--sjs-primary-backcolor': theme.palette.primary.main,
			'--sjs-primary-backcolor-dark': theme.palette.primary.dark,
			'--sjs-primary-backcolor-light': theme.palette.primary.light,
			'--sjs-primary-forecolor': theme.palette.primary.contrastText,
			'--sjs-primary-forecolor-light': theme.palette.primary.contrastText,
			'--sjs-secondary-backcolor': theme.palette.secondary.main,
			'--sjs-secondary-backcolor-light': theme.palette.secondary.light,
			'--sjs-secondary-backcolor-semi-light': theme.palette.secondary.dark,
			'--sjs-secondary-forecolor': theme.palette.secondary.contrastText,
			'--sjs-secondary-forecolor-light': theme.palette.secondary.contrastText,
			'--sjs-shadow-inner': theme.shadows[2],
			'--sjs-shadow-inner-reset': 'none',
			'--sjs-shadow-large': theme.shadows[8],
			'--sjs-shadow-medium': theme.shadows[4],
			'--sjs-shadow-small': theme.shadows[1],
			'--sjs-special-blue': theme.palette.info.main,
			'--sjs-special-blue-forecolor': theme.palette.info.contrastText,
			'--sjs-special-blue-light': theme.palette.info.light,
			'--sjs-special-green': theme.palette.success.main,
			'--sjs-special-green-forecolor': theme.palette.success.contrastText,
			'--sjs-special-green-light': theme.palette.success.light,
			'--sjs-special-red': theme.palette.error.main,
			'--sjs-special-red-forecolor': theme.palette.error.contrastText,
			'--sjs-special-red-light': theme.palette.error.light,
			'--sjs-special-yellow': theme.palette.warning.main,
			'--sjs-special-yellow-forecolor': theme.palette.warning.contrastText,
			'--sjs-special-yellow-light': theme.palette.warning.light,
			// Typography styles can also be integrated here if needed
		},
		isPanelless: false,
		themeName: 'mui',
	};
};
