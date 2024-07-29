import {
	Edit,
	SimpleFormConfigurable,
	TextInput,
	TranslatableInputs,
} from 'src/components';

export const TypeEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<TranslatableInputs>
					<TextInput source="name" />
				</TranslatableInputs>
				<TextInput source="category" />
			</SimpleFormConfigurable>
		</Edit>
	);
};
