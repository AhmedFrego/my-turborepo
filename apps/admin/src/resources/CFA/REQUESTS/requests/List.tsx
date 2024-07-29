import { TextField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestList = () => {
	return (
		<BaseRequestList filters={filters}>
			<TextField source="description" />
		</BaseRequestList>
	);
};
