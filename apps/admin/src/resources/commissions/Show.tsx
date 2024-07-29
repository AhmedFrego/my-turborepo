import {
	NumberField,
	ReferenceField,
	ReferenceTypeField,
	Show,
	TextField,
} from 'src/components';

export const CommissionShow = () => {
	return (
		<Show>
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
		</Show>
	);
};
