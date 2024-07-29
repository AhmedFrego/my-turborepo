import { DateField, NumberField, ReferenceTypeField } from 'src/components';

import { BaseRequestShow } from '../base_requests/Show';

export const RequestSettlementShow = () => {
	return (
		<BaseRequestShow>
			<NumberField source="amount" />
			<ReferenceTypeField source="settlement_type_id" />
			<DateField source="date_of_settlement" />
		</BaseRequestShow>
	);
};
