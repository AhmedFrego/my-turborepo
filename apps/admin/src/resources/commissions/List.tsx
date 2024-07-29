import {
	List,
	NumberField,
	ReferenceField,
	ReferenceTypeField,
	TextField,
} from 'src/components';

import { filters } from './Filters';

export const CommissionList = () => {
	return (
		<List filters={filters}>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<NumberField source="amount" />
			<ReferenceTypeField source="commission_type_id" />
			<TextField source="reason" />
			<ReferenceField
				reference="request_commissions"
				source="commission_request_id"
			/>
			<TextField source="note" />
		</List>
	);
};
