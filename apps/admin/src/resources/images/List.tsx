import { List, TextField } from 'src/components';

import { filters } from './Filters';

export const ImageList = () => {
	return (
		<List filters={filters}>
			<TextField source="description" />
		</List>
	);
};
