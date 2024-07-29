import {
	List,
	NumberField,
	ReferenceField,
	ReferenceTypeField,
	TextField,
} from 'src/components';

import { filters } from './Filters';

export const DeductionList = () => {
	return (
		<List filters={filters}>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<NumberField source="amount" />
			<TextField source="reason" />
			<TextField source="note" />
			<ReferenceTypeField source="deduction_type_id" />
		</List>
	);
};
