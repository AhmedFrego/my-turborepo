import { List, TextField } from 'src/components';

import { filters } from './Filters';

export const HealthReportList = () => {
	return (
		<List filters={filters}>
			<TextField source="year" />
		</List>
	);
};
