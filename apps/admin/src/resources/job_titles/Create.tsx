import {
	Create,
	SimpleFormConfigurable,
	TextInput,
	TranslatableInputs,
} from 'src/components';

export const JobTitleCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<TranslatableInputs>
					<TextInput source="name" />
				</TranslatableInputs>
			</SimpleFormConfigurable>
		</Create>
	);
};
