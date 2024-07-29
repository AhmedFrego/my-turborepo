import { Edit, SimpleFormConfigurable, TimeInput } from 'src/components';

export const WorkHourEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<TimeInput source="from" />
				<TimeInput source="to" />
			</SimpleFormConfigurable>
		</Edit>
	);
};
