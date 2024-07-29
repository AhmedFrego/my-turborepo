import { DateField, NumberField, ReferenceTypeField } from 'src/components';

import { BaseRequestShow } from '../base_requests/Show';

export const RequestInstallmentShow = () => {
	return (
		<BaseRequestShow>
			<NumberField source="amount" />
			<DateField source="from" />
			<DateField source="to" />
			<NumberField source="installment" />
			<ReferenceTypeField source="installment_type_id" />
		</BaseRequestShow>
	);
};
