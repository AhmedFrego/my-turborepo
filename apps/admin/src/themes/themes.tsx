import {
	defaultDarkTheme,
	defaultLightTheme,
	houseDarkTheme,
	houseLightTheme,
	nanoDarkTheme,
	nanoLightTheme,
	radiantDarkTheme,
	radiantLightTheme,
	RaThemeOptions,
} from 'react-admin';
import { PaletteMode } from 'src/constants';

import { beigeThemeDark, beigeThemeLight } from './beigeTheme';
import { chiptuneDarkTheme, chiptuneLightTheme } from './chiptuneTheme';
import { orangeThemeDark, orangeThemeLight } from './orangeTheme';
import { purpleThemeDark, purpleThemeLight } from './purpleTheme';
import { softDarkTheme, softLightTheme } from './softTheme';

export type ThemeName =
	| 'baby_blue'
	| 'beige'
	| 'chiptune'
	| 'default'
	| 'house'
	| 'nano'
	| 'orange'
	| 'purple'
	| 'radiant'
	| 'retro'
	| 'soft';

export interface Theme {
	[PaletteMode.dark]?: RaThemeOptions;
	[PaletteMode.light]: RaThemeOptions;
	name: ThemeName;
}

export const themes: Theme[] = [
	{ dark: beigeThemeDark, light: beigeThemeLight, name: 'beige' },
	{ dark: chiptuneDarkTheme, light: chiptuneLightTheme, name: 'chiptune' },
	{ dark: defaultDarkTheme, light: defaultLightTheme, name: 'baby_blue' },
	{ dark: defaultDarkTheme, light: defaultLightTheme, name: 'default' },
	{ dark: houseDarkTheme, light: houseLightTheme, name: 'house' },
	{ dark: nanoDarkTheme, light: nanoLightTheme, name: 'nano' },
	{ dark: orangeThemeDark, light: orangeThemeLight, name: 'orange' },
	{ dark: purpleThemeDark, light: purpleThemeLight, name: 'purple' },
	{ dark: radiantDarkTheme, light: radiantLightTheme, name: 'radiant' },
	{ dark: softDarkTheme, light: softLightTheme, name: 'soft' },
];
