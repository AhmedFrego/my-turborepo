import { ReferenceField, Show, TextField } from 'src/components';

export const JsonschemaValidatorShow = () => {
	return (
		<Show>
			<TextField source="schema_name" />
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<ReferenceField
				reference="images"
				source="image_id"
			/>
		</Show>
	);
};
