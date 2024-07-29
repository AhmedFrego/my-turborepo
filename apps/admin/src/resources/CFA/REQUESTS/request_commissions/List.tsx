import { NumberField, ReferenceTypeField, TextField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestCommissionList = () => {
	return (
		<BaseRequestList filter={filters}>
			<NumberField source="suggested_amount" />
			<TextField source="reason" />
			<ReferenceTypeField source="commission_type_id" />
		</BaseRequestList>
	);
};
