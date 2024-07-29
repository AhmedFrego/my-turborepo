import { NumberField, ReferenceTypeField } from 'src/components';

import { BaseRequestShow } from '../base_requests/Show';

export const RequestExpenseShow = () => {
	return (
		<BaseRequestShow>
			<NumberField source="amount" />
			<ReferenceTypeField source="expense_type_id" />
		</BaseRequestShow>
	);
};
