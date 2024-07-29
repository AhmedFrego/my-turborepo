import { List, NumberField } from 'src/components';

import { filters } from './Filters';

export const InsuranceReportList = () => {
	return (
		<List filters={filters}>
			<NumberField source="year" />
		</List>
	);
};
