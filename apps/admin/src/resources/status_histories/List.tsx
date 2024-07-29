import { List, TextField } from 'src/components';

import { filters } from './Filters';

export const StatusHistoryList = () => {
	return (
		<List filters={filters}>
			<TextField source="message" />
		</List>
	);
};
