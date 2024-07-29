import { Create, SimpleFormConfigurable, TextInput } from 'src/components';

export const ImageCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<TextInput source="description" />
			</SimpleFormConfigurable>
		</Create>
	);
};
