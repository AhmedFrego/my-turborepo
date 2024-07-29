import isArray from 'lodash/isArray';
import { TranslationsPaths } from 'src/locales';
import { alwaysArray } from 'src/utils';

import { useTranslate } from './useTranslate';

export type UseTranslateProps = Parameters<ReturnType<typeof useTranslate>>;

export type TranslationsConfig =
	| TranslationsPaths
	| TranslationsPaths[]
	| UseTranslateProps
	| UseTranslateProps[];

/**
 * Custom hook for translating keys or configurations.
 * This hook simplifies the translation process, supporting single keys,
 * arrays of keys, or configurations with translation parameters.
 * @returns A function to translate keys or configurations.
 */

export const useTranslations = () => {
	const translate = useTranslate();

	/**
	 * Function to translate keys or configurations.
	 * @param keys An array of translation keys, a single translation key,
	 * an array of translation configurations, or a single translation configuration.
	 * @returns A string containing the concatenated translations.
	 */

	return (keys: TranslationsConfig) =>
		alwaysArray(keys)
			.map(key => {
				if (isArray(key)) return translate(...key);

				return translate(key);
			})
			.join(' ');
};
