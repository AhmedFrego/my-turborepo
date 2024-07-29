import {
	List,
	NumberField,
	ReferenceField,
	ReferenceTypeField,
	TextField,
} from 'src/components';

import { filters } from './Filters';

export const BonusList = () => {
	return (
		<List filters={filters}>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<NumberField source="amount" />
			<TextField source="reason" />
			<TextField source="note" />
			<ReferenceTypeField source="bonus_type_id" />
			<ReferenceField
				reference="request_bonuses"
				source="bonus_request_id"
			/>
		</List>
	);
};
