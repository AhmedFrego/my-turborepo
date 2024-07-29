import { DateField, NumberField, ReferenceTypeField } from 'src/components';

import { AdvancesActions } from './AdvancesActions';
import { BaseRequestShow } from '../base_requests/Show';

export const RequestAdvanceShow = () => {
	return (
		<BaseRequestShow actionsComponent={<AdvancesActions />}>
			<NumberField source="amount" />
			<ReferenceTypeField source="advance_type_id" />
			<NumberField source="installments" />
			<NumberField source="number_of_installments" />
			<DateField source="date_of_payment" />
			<DateField source="date_of_receipt" />
		</BaseRequestShow>
	);
};
