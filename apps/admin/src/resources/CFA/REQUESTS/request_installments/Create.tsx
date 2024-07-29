import { DateInput, NumberInput, ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestInstallmentCreate = () => {
	return (
		<BaseRequestCreate>
			<NumberInput source="amount" />
			<DateInput source="from" />
			<DateInput source="to" />
			<NumberInput source="installment" />
			<ReferenceTypeInput
				category={Categories.Installments}
				source="installment_type_id"
			/>
		</BaseRequestCreate>
	);
};
