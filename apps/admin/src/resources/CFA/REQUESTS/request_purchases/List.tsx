import { NumberField, TextField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestPurchaseList = () => {
	return (
		<BaseRequestList filter={filters}>
			<TextField source="name" />
			<NumberField source="amount" />
			<NumberField source="quantity" />
		</BaseRequestList>
	);
};
