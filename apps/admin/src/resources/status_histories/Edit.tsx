import { Edit, SimpleFormConfigurable, TextInput } from 'src/components';

export const StatusHistoryEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<TextInput source="message" />
			</SimpleFormConfigurable>
		</Edit>
	);
};
