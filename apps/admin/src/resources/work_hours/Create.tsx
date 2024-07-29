import { Create, SimpleFormConfigurable, TimeInput } from 'src/components';

export const WorkHourCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<TimeInput source="from" />
				<TimeInput source="to" />
			</SimpleFormConfigurable>
		</Create>
	);
};
