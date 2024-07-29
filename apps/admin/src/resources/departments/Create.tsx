import {
	Create,
	ReferenceInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';

export const DepartmentCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<TextInput
					grid={{ sm: 6 }}
					source="name"
				/>
				<TextInput
					grid={{ sm: 6 }}
					source="description"
				/>
				<ReferenceInput
					grid={{ sm: 6 }}
					optionText="name"
					reference="entities"
					source="entity_id"
				/>
			</SimpleFormConfigurable>
		</Create>
	);
};
