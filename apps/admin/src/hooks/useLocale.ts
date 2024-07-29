import { match } from '@formatjs/intl-localematcher';
import { getUserLocales } from 'get-user-locale';
import merge from 'lodash/merge';
import { LanguageCodeEnum, StoreKeys } from 'src/constants';
import { LocalizationLanguages } from 'src/utils';

import { useStore } from './useStore';

export const userLocale = match(
	getUserLocales(),
	Object.keys(LocalizationLanguages),
	LanguageCodeEnum.en,
) as LanguageCodeEnum;

export const useLocale = (defaultLocale = userLocale) => {
	const [locale, setLocale] = useStore<LanguageCodeEnum>(
		StoreKeys.Locale,
		defaultLocale,
	);

	const config = LocalizationLanguages[locale];

	return merge([locale, setLocale, config] as const, {
		config,
		locale,
		setLocale,
		...config,
	});
};
