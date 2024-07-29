import { NumberField, ReferenceTypeField, TextField } from 'src/components';

import { BaseRequestShow } from '../base_requests/Show';

export const RequestCommissionShow = () => {
	return (
		<BaseRequestShow>
			<NumberField source="suggested_amount" />
			<TextField source="reason" />
			<ReferenceTypeField source="commission_type_id" />
		</BaseRequestShow>
	);
};
