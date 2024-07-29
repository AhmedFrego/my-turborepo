import { NumberField, TextField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestSalaryRaiseList = () => {
	return (
		<BaseRequestList filters={filters}>
			<TextField source="reasons" />
			<NumberField source="amount" />
		</BaseRequestList>
	);
};
