import {
	Create,
	SimpleFormConfigurable,
	TextInput,
	TranslatableInputs,
} from 'src/components';

export const TypeCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<TranslatableInputs>
					<TextInput source="name" />
				</TranslatableInputs>
				<TextInput source="category" />
			</SimpleFormConfigurable>
		</Create>
	);
};
