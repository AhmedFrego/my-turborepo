import { Edit, SimpleFormConfigurable, TextInput } from 'src/components';

export const HealthReportEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<TextInput source="year" />
			</SimpleFormConfigurable>
		</Edit>
	);
};
