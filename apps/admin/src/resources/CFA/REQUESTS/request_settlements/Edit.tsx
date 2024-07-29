import { DateInput, NumberInput, ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestSettlementEdit = () => {
	return (
		<BaseRequestEdit>
			<NumberInput source="amount" />
			<ReferenceTypeInput
				category={Categories.Settlements}
				source="settlement_type_id"
			/>
			<DateInput source="date_of_settlement" />
		</BaseRequestEdit>
	);
};
