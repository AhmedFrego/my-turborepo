import {
	DateField,
	List,
	NumberField,
	ReferenceField,
	ReferenceTypeField,
	TextField,
} from 'src/components';

import { filters } from './Filters';

export const AdvanceList = () => {
	return (
		<List filters={filters}>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<NumberField source="amount" />
			<TextField source="notes" />
			<ReferenceField
				reference="request_advances"
				source="advance_request_id"
			/>
			<NumberField source="installments" />
			<DateField source="date_of_payment" />
			<DateField source="date_of_receipt" />
			<ReferenceTypeField source="advance_type_id" />
		</List>
	);
};
