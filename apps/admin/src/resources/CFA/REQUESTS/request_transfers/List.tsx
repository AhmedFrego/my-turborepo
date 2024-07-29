import { DateField, TextField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestTransferList = () => {
	return (
		<BaseRequestList filter={filters}>
			<TextField source="job_title" />
			<TextField source="entity" />
			<DateField source="date_of_transfer" />
		</BaseRequestList>
	);
};
