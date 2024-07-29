import { enUS, esES, faIR, frFR, zhCN } from '@mui/x-date-pickers/locales';
import { LanguageCodeEnum } from 'src/constants';

import { ar } from './ar_pickers_localization';

export const pickerTextLocale: Record<LanguageCodeEnum, typeof enUS> = {
	ar,
	en: enUS,
	es: esES,
	fa: faIR,
	fr: frFR,
	hi: enUS,
	zh: zhCN,
};
