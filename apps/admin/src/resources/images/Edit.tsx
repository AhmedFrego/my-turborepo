import { Edit, SimpleFormConfigurable, TextInput } from 'src/components';

export const ImageEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<TextInput source="description" />
			</SimpleFormConfigurable>
		</Edit>
	);
};
