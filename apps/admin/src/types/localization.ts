import { Localization } from '@mui/material/locale';
import { Locale } from 'date-fns';
import { DirectionEnum, Flag, LanguageCodeEnum } from 'src/constants';

export interface Language {
	code: LanguageCodeEnum;
	direction: DirectionEnum;
	flag: Flag;
	fns: Locale;
	fonts: string[];
	isoCode: string;
	label: string;
	localization: Localization;
}

export type Languages = Record<LanguageCodeEnum, Language>;
