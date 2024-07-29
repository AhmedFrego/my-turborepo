import { DateField, NumberField, ReferenceTypeField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestAdvanceList = () => {
	return (
		<BaseRequestList filters={filters}>
			<NumberField source="amount" />
			<ReferenceTypeField source="advance_type_id" />
			<NumberField source="installments" />
			<NumberField source="number_of_installments" />
			<DateField source="date_of_payment" />
			<DateField source="date_of_receipt" />
		</BaseRequestList>
	);
};
