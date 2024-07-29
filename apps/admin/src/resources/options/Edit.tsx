import { Edit, SimpleFormConfigurable, TextInput } from 'src/components';

export const OptionEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<TextInput source="name" />
				<TextInput source="value" />
			</SimpleFormConfigurable>
		</Edit>
	);
};
