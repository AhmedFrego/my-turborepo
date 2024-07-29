import { useEffect, useState } from 'react';
import { PaletteMode } from 'src/constants';

// 1. define MediaQueryList observables
const isDark = window.matchMedia('(prefers-color-scheme: dark)');
const isLight = window.matchMedia('(prefers-color-scheme: light)');

/**
 * React hook for determining the preferred color scheme (aka 'prefers-color-scheme').
 * When server side rendered returns `no-preference`.
 *
 * @see [Usage] https://github.com/rfoel/use-prefers-color-scheme#usage
 * @returns {string} String, one of `dark`, `light`, `no-preference`
 */
export const usePreferColorScheme = (
	defaultColorMode: PaletteMode,
): PaletteMode => {
	const [preferredColorSchema, setPreferredColorSchema] = useState<PaletteMode>(
		() => {
			// if window is undefined (SSR), return 'no-preference'
			if (typeof window === 'undefined') return defaultColorMode;

			if (isDark.matches) return PaletteMode.dark;

			return isLight.matches ? PaletteMode.light : defaultColorMode;
		},
	);

	// On first render:
	//   - Ensure window.matchMedia is supported
	//   - Initialize MediaQueryList objects
	//   - Check initial state
	//   - Subscribe on changes
	useEffect(() => {
		if (typeof window.matchMedia !== 'function') return;

		// 2. subscribe on changes
		//
		// Is modern "matchMedia" implementation ???
		if (typeof isLight.addEventListener === 'function') {
			// In modern browsers MediaQueryList should subclass EventTarget
			// https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
			const darkListener = ({ matches }: MediaQueryListEvent) => {
				matches && setPreferredColorSchema(PaletteMode.dark);
			};

			const lightListener = ({ matches }: MediaQueryListEvent) => {
				matches && setPreferredColorSchema(PaletteMode.light);
			};

			isDark.addEventListener('change', darkListener);
			isLight.addEventListener('change', lightListener);

			return () => {
				isDark.removeEventListener('change', darkListener);
				isLight.removeEventListener('change', lightListener);
			};
		}
	}, []);

	return preferredColorSchema;
};
