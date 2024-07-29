import { Show, TimeField } from 'src/components';

export const WorkHourShow = () => {
	return (
		<Show>
			<TimeField source="from" />
			<TimeField source="to" />
		</Show>
	);
};
