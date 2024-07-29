import { List, TimeField } from 'src/components';

import { filters } from './Filters';

export const WorkHourList = () => {
	return (
		<List filters={filters}>
			<TimeField source="from" />
			<TimeField source="to" />
		</List>
	);
};
