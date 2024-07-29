import {
	NumberField,
	ReferenceField,
	ReferenceTypeField,
	Show,
	TextField,
} from 'src/components';

export const DeductionShow = () => {
	return (
		<Show>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<NumberField source="amount" />
			<TextField source="reason" />
			<TextField source="note" />
			<ReferenceTypeField source="deduction_type_id" />
		</Show>
	);
};
