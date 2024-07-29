import {
	NumberField,
	ReferenceField,
	ReferenceTypeField,
	Show,
	TextField,
} from 'src/components';

export const ExpenseShow = () => {
	return (
		<Show>
			<TextField source="title" />
			<NumberField source="amount" />
			<ReferenceField
				reference="request_expenses"
				source="request_expense_id"
			/>
			<ReferenceTypeField source="expense_type_id" />
		</Show>
	);
};
