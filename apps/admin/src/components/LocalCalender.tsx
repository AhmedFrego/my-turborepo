import { LocaleInput } from '@fullcalendar/core';
import localeAr from '@fullcalendar/core/locales/ar';
import localeEnGb from '@fullcalendar/core/locales/en-gb';
import localeEs from '@fullcalendar/core/locales/es';
import localeFa from '@fullcalendar/core/locales/fa';
import localeFr from '@fullcalendar/core/locales/fr';
import localeHi from '@fullcalendar/core/locales/hi';
import localeZh from '@fullcalendar/core/locales/zh-cn';
import { Calendar, CalendarProps } from '@react-admin/ra-calendar';
import { LanguageCodeEnum } from 'src/constants';
import { useLocale } from 'src/hooks';

const locales: Partial<Record<LanguageCodeEnum, LocaleInput>> = {
	ar: localeAr,
	en: localeEnGb,
	es: localeEs,
	fa: localeFa,
	fr: localeFr,
	hi: localeHi,
	zh: localeZh,
};

export interface LocalCalenderProps extends CalendarProps {}

export const LocalCalender = (props: LocalCalenderProps) => {
	const { ...rest } = props;

	const { code, direction } = useLocale();

	return (
		<Calendar
			direction={direction}
			locale={locales[code] ?? localeEnGb}
			{...rest}
		/>
	);
};
