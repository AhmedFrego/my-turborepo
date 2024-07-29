import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import get from 'lodash/get';
import {
	arabicMessages,
	chineseMessages,
	englishMessages,
	frenchMessages,
	hindiMessages,
	persianMessages,
	spanishMessages,
} from 'src/locales';
import { Locale } from 'src/types';
import { LocalizationLanguages } from 'src/utils';
import { merge } from 'ts-deepmerge';
import zodAr from 'zod-i18n-map/locales/ar/zod.json';
import zodEn from 'zod-i18n-map/locales/en/zod.json';
import zodEs from 'zod-i18n-map/locales/es/zod.json';
import zodFa from 'zod-i18n-map/locales/fa/zod.json';
import zodFr from 'zod-i18n-map/locales/fr/zod.json';
import zodZhCn from 'zod-i18n-map/locales/zh-CN/zod.json';

import zodHi from './hi.json';

export const defaultLocale = 'en';

export const availableLocales: Locale[] = Object.entries(
	LocalizationLanguages,
).map(([key, { label }]) => ({ locale: key, name: label }));

const zodTranslations = {
	ar: zodAr,
	en: zodEn,
	es: zodEs,
	fa: zodFa,
	fr: zodFr,
	hi: zodHi,
	zh: zodZhCn,
};

const translations = {
	ar: arabicMessages,
	en: englishMessages,
	es: spanishMessages,
	fa: persianMessages,
	fr: frenchMessages,
	hi: hindiMessages,
	zh: chineseMessages,
};

export const i18nextInstance = i18next.use(
	resourcesToBackend((language: string) => {
		const appTranslations = get(translations, language, translations['en']);

		const zodTranslation = get(
			zodTranslations,
			language,
			zodTranslations[defaultLocale],
		);

		return merge(appTranslations, zodTranslation);
	}),
);
