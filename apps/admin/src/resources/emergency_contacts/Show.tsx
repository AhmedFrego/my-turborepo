import {
	ReferenceField,
	ReferenceTypeField,
	Show,
	TextField,
} from 'src/components';

export const EmergencyContactShow = () => {
	return (
		<Show>
			<TextField source="name" />
			<TextField source="phone" />
			<ReferenceTypeField source="relation_type_id" />
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
		</Show>
	);
};
