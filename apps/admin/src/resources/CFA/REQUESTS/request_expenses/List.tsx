import { NumberField, ReferenceTypeField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestExpenseList = () => {
	return (
		<BaseRequestList filter={filters}>
			<NumberField source="amount" />
			<ReferenceTypeField source="expense_type_id" />
		</BaseRequestList>
	);
};
