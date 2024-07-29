import { format } from 'date-fns';

import { useLocale } from './useLocale';

export const useLocalizedDate = () => {
	const { fns } = useLocale();

	return <T extends Date | number | string>(date: T) =>
		format(new Date(date), 'mm/dd/yyyy', { locale: fns });
};
