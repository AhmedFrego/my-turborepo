import { DateInput, NumberInput, ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestAdvanceCreate = () => {
	return (
		<BaseRequestCreate>
			<NumberInput
				grid={{ md: 6 }}
				source="installments"
			/>
			<NumberInput
				grid={{ md: 6 }}
				source="amount"
			/>
			<DateInput
				grid={{ md: 6 }}
				source="date_of_payment"
			/>
			<DateInput
				grid={{ md: 6 }}
				source="date_of_receipt"
			/>
			<ReferenceTypeInput
				category={Categories.Advances}
				grid={{ md: 6 }}
				source="advance_type_id"
			/>
		</BaseRequestCreate>
	);
};
