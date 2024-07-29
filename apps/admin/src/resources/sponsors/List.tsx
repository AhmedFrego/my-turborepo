import { List, ReferenceField } from 'src/components';

import { filters } from './Filters';

export const SponsorList = () => {
	return (
		<List filters={filters}>
			<ReferenceField
				reference="entities"
				source="entity_id"
			/>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
		</List>
	);
};
