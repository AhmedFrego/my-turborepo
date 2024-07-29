import {
	List,
	NumberField,
	ReferenceField,
	ReferenceTypeField,
	TextField,
} from 'src/components';

import { filters } from './Filters';

export const ExpenseList = () => {
	return (
		<List filters={filters}>
			<TextField source="title" />
			<NumberField source="amount" />
			<ReferenceField
				reference="request_expenses"
				source="request_expense_id"
			/>
			<ReferenceTypeField source="expense_type_id" />
		</List>
	);
};
