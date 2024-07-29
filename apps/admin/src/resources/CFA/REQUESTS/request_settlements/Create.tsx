import { DateInput, NumberInput, ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestSettlementCreate = () => {
	return (
		<BaseRequestCreate>
			<NumberInput source="amount" />
			<ReferenceTypeInput
				category={Categories.Settlements}
				source="settlement_type_id"
			/>
			<DateInput source="date_of_settlement" />
		</BaseRequestCreate>
	);
};
