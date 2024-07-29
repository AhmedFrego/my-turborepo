import { NumberField, ReferenceTypeField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestAllowanceList = () => {
	return (
		<BaseRequestList filters={filters}>
			<NumberField source="suggested_amount" />
			<ReferenceTypeField source="allowance_type_id" />
		</BaseRequestList>
	);
};
