import { List, ReferenceField, TextField } from 'src/components';

import { filters } from './Filters';

export const JsonschemaValidatorList = () => {
	return (
		<List filters={filters}>
			<TextField source="schema_name" />
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<ReferenceField
				reference="images"
				source="image_id"
			/>
		</List>
	);
};
