import { List, ReferenceField, TextField } from 'src/components';

import { filters } from './Filters';

export const DepartmentList = () => {
	return (
		<List filters={filters}>
			<TextField source="name" />
			<TextField source="description" />
			<ReferenceField
				reference="entities"
				source="entity_id"
			/>
		</List>
	);
};
