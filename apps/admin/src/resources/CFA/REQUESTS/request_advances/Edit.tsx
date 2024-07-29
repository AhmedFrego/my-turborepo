import { DateInput, NumberInput, ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';

import { AdvancesActions } from './AdvancesActions';
import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestAdvanceEdit = () => {
	return (
		<BaseRequestEdit actionsComponent={<AdvancesActions />}>
			<NumberInput
				grid={{ md: 6 }}
				source="amount"
			/>
			<ReferenceTypeInput
				category={Categories.Advances}
				grid={{ md: 6 }}
				source="advance_type_id"
			/>
			<NumberInput
				grid={{ md: 6 }}
				source="installments"
			/>
			<NumberInput
				grid={{ md: 6 }}
				source="number_of_installments"
			/>
			<DateInput
				grid={{ md: 6 }}
				source="date_of_payment"
			/>
			<DateInput
				grid={{ md: 6 }}
				source="date_of_receipt"
			/>
		</BaseRequestEdit>
	);
};
