import {
	DateInput,
	NumberField,
	ReferenceField,
	ReferenceTypeField,
	Show,
	TextField,
} from 'src/components';

export const AllowanceShow = () => {
	return (
		<Show>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<NumberField source="suggested_amount" />
			<ReferenceTypeField source="allowance_type_id" />
			<TextField source="notes" />
			<DateInput source="date_of_received" />
			<ReferenceField
				reference="request_allowances"
				source="request_allowances_id"
			/>
		</Show>
	);
};
