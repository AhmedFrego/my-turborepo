import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageCodeEnum } from 'src/constants';
import { LocalizationLanguages } from 'src/utils';

import { useLocale } from './useLocale';

/**
 * Hook for changing the application language and handling language-specific navigation.
 * This hook updates the application locale and performs navigation if necessary based on the language change.
 * @returns A function to change the language.
 */
export const useChangeLanguage = (defaultLocale?: LanguageCodeEnum) => {
	const { locale, setLocale } = useLocale(defaultLocale);
	const navigate = useNavigate();

	const changeLocale = useCallback(
		/**
		 * Function to change the application language.
		 * @param lang The language code to change to.
		 * @param callback Optional callback function to execute after changing the language.
		 */
		(lang: LanguageCodeEnum, callback?: () => void) => {
			setLocale(lang);
			callback?.();

			if (
				lang in LocalizationLanguages &&
				LocalizationLanguages[lang].direction !==
					LocalizationLanguages[locale].direction
			)
				navigate(0);
		},
		[locale, navigate, setLocale],
	);

	return [locale, changeLocale] as const;
};
