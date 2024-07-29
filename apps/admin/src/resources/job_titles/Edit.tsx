import {
	Edit,
	SimpleFormConfigurable,
	TextInput,
	TranslatableInputs,
} from 'src/components';

export const JobTitleEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<TranslatableInputs>
					<TextInput source="name" />
				</TranslatableInputs>
			</SimpleFormConfigurable>
		</Edit>
	);
};
