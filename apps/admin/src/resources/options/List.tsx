import { List, TextField } from 'src/components';

import { filters } from './Filters';

export const OptionList = () => {
	return (
		<List filters={filters}>
			<TextField source="name" />
			<TextField source="value" />
		</List>
	);
};
