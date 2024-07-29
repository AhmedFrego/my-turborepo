import { NumberInput, ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestExpenseCreate = () => {
	return (
		<BaseRequestCreate>
			<NumberInput source="amount" />
			<ReferenceTypeInput
				category={Categories.Expenses}
				source="expense_type_id"
			/>
		</BaseRequestCreate>
	);
};
