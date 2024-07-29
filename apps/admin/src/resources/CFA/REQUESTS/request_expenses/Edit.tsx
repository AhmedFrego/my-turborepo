import { NumberInput, ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestExpenseEdit = () => {
	return (
		<BaseRequestEdit>
			<NumberInput source="amount" />
			<ReferenceTypeInput
				category={Categories.Expenses}
				source="expense_type_id"
			/>
		</BaseRequestEdit>
	);
};
