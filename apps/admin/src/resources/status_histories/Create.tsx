import { Create, SimpleFormConfigurable, TextInput } from 'src/components';

export const StatusHistoryCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<TextInput source="message" />
			</SimpleFormConfigurable>
		</Create>
	);
};
