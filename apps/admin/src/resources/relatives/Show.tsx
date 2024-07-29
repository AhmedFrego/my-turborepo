import {
	DateField,
	ReferenceField,
	ReferenceTypeField,
	Show,
	TextField,
} from 'src/components';

export const RelativeShow = () => {
	return (
		<Show>
			<TextField source="name" />
			<DateField source="date_of_birth" />
			<ReferenceTypeField source="relation_types_id" />
			<TextField source="gender" />
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
		</Show>
	);
};
