import { DateField, NumberField, ReferenceTypeField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestInstallmentList = () => {
	return (
		<BaseRequestList filter={filters}>
			<NumberField source="amount" />
			<DateField source="from" />
			<DateField source="to" />
			<NumberField source="installment" />
			<ReferenceTypeField source="installment_type_id" />
		</BaseRequestList>
	);
};
