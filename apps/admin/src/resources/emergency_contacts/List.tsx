import {
	List,
	ReferenceField,
	ReferenceTypeField,
	TextField,
} from 'src/components';

import { filters } from './Filters';

export const EmergencyContactList = () => {
	return (
		<List filters={filters}>
			<TextField source="name" />
			<TextField source="phone" />
			<ReferenceTypeField source="relation_type_id" />
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
		</List>
	);
};
