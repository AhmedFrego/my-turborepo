import { DateField, NumberField, ReferenceTypeField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestSettlementList = () => {
	return (
		<BaseRequestList filter={filters}>
			<NumberField source="amount" />
			<ReferenceTypeField source="settlement_type_id" />
			<DateField source="date_of_settlement" />
		</BaseRequestList>
	);
};
