import { Edit, SimpleFormConfigurable, TextInput } from 'src/components';

export const AnnouncementEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<TextInput source="title" />
				<TextInput source="message" />
				<TextInput source="level" />
			</SimpleFormConfigurable>
		</Edit>
	);
};
