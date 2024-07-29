import {
	NumberField,
	ReferenceField,
	ReferenceTypeField,
	Show,
	TextField,
} from 'src/components';

export const BonusShow = () => {
	return (
		<Show>
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
		</Show>
	);
};
