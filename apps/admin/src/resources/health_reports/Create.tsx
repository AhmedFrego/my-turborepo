import { Create, SimpleFormConfigurable, TextInput } from 'src/components';

export const HealthReportCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<TextInput source="year" />
			</SimpleFormConfigurable>
		</Create>
	);
};
