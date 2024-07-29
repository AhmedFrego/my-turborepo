import { Create, SimpleFormConfigurable, TextInput } from 'src/components';

export const OptionCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<TextInput source="name" />
				<TextInput source="value" />
			</SimpleFormConfigurable>
		</Create>
	);
};
