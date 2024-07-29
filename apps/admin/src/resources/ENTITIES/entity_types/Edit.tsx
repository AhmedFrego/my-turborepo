import {
	Edit,
	EnumInput,
	SimpleFormConfigurable,
	TextInput,
	TranslatableInputs,
} from 'src/components';

export const EntityTypeEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<TranslatableInputs>
					<TextInput source="name" />
				</TranslatableInputs>
				<TextInput source="category" />
				<EnumInput
					enumName="entity_levels"
					source="level"
				/>
				<TextInput source="slug" />
				<TextInput source="description" />
			</SimpleFormConfigurable>
		</Edit>
	);
};
