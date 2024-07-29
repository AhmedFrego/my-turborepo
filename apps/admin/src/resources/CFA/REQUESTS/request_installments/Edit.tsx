import { DateInput, NumberInput, ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestInstallmentEdit = () => {
	return (
		<BaseRequestEdit>
			<NumberInput source="amount" />
			<DateInput source="from" />
			<DateInput source="to" />
			<NumberInput source="installment" />
			<ReferenceTypeInput
				category={Categories.Installments}
				source="installment_type_id"
			/>
		</BaseRequestEdit>
	);
};
