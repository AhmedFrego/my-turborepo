import { Create, SimpleFormConfigurable, TextInput } from 'src/components';

export const AnnouncementCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<TextInput source="title" />
				<TextInput source="message" />
				<TextInput source="level" />
			</SimpleFormConfigurable>
		</Create>
	);
};
