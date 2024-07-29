import {
	DateField,
	List,
	NumberField,
	ReferenceField,
	ReferenceTypeField,
	TextField,
} from 'src/components';

import { filters } from './Filters';

export const AllowanceList = () => {
	return (
		<List filters={filters}>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<NumberField source="suggested_amount" />
			<ReferenceTypeField source="allowance_type_id" />
			<TextField source="notes" />
			<DateField source="date_of_received" />
			<ReferenceField
				reference="request_allowances"
				source="request_allowances_id"
			/>
		</List>
	);
};
