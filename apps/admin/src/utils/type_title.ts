import { match } from '@formatjs/intl-localematcher';
import { getUserLocales } from 'get-user-locale';
import { LanguageCodeEnum } from 'src/constants';
import { Json } from 'src/types';

export const getTypeOptionLocale = <T extends { name: Json } = { name: Json }>(
	choice: T,
	locale: LanguageCodeEnum,
) => {
	if (typeof choice.name !== 'object' || choice.name === null) return false;

	const availableLocales = Object.keys(choice.name);

	return match(
		locale ? [locale] : getUserLocales(),
		availableLocales,
		availableLocales[0],
	) as LanguageCodeEnum;
};

export const getTypeOptionText = <T extends { name: Json } = { name: Json }>(
	choice: T,
	locale: LanguageCodeEnum,
) => {
	if (typeof choice.name !== 'object' || choice.name === null)
		return choice.name as string;

	const userLocale = getTypeOptionLocale(choice, locale);

	if (userLocale === false) return JSON.stringify(choice.name);

	// Use a type assertion to let TypeScript know that the value is a string
	// @ts-ignore - pass
	return userLocale in choice.name ? String(choice.name[userLocale]) : '';
};
