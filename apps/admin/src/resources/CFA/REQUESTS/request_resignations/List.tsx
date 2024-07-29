import { DateField, TextField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestResignationList = () => {
	return (
		<BaseRequestList filter={filters}>
			<TextField source="reason" />
			<DateField source="date_of_effective_resignation" />
		</BaseRequestList>
	);
};
