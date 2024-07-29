import { List, TextField, TranslatableField } from 'src/components';
import { useLocale } from 'src/hooks';

import { filters } from './Filters';

export const TypeList = () => {
	const { locale } = useLocale();

	return (
		<List filters={filters(locale)}>
			<TranslatableField source="name" />
			<TextField source="category" />
		</List>
	);
};
