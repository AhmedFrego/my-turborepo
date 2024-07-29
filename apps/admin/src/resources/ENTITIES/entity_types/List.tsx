import { List, TextField, TranslatableField } from 'src/components';

import { filters } from './Filters';

export const EntityTypeList = () => {
	return (
		<List filters={filters}>
			<TextField source="level" />
			<TranslatableField source="name" />
			<TextField source="slug" />
			<TextField source="description" />
		</List>
	);
};
