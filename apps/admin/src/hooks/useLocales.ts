import { useLocales as useBaseLocales, UseLocalesOptions } from 'react-admin';
import { LanguageCodeEnum } from 'src/constants';

export type Locale = {
	locale: LanguageCodeEnum;
	name: string;
};

export const useLocales = (options?: UseLocalesOptions) => {
	return useBaseLocales(options) as Locale[];
};
