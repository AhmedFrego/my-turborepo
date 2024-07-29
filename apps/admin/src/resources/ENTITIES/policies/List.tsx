import { List, NumberField, ReferenceField, TextField } from 'src/components';

import { filters } from './Filters';

export const PolicyList = () => {
	return (
		<List filters={filters}>
			<NumberField source="sick_vacation" />
			<NumberField source="annual_vacation" />
			<NumberField source="parental_vacation" />
			<NumberField source="death_vacation" />
			<NumberField source="maternal_vacation" />
			<NumberField source="marriage_vacation" />
			<TextField source="work_days" />
			<TextField source="transportation" />
			<TextField source="nda" />
			<TextField source="benefits" />
			<ReferenceField
				reference="work_hours"
				source="work_hours_id"
			/>
		</List>
	);
};
