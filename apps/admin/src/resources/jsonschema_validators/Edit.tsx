import {
	Edit,
	ImageInput,
	ReferenceInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';

export const JsonschemaValidatorEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<TextInput source="schema_name" />
				<ReferenceInput
					optionText="full_name"
					reference="employees"
					source="employee_id"
				/>
				<ImageInput source="image_id" />
			</SimpleFormConfigurable>
		</Edit>
	);
};
