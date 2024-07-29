import { NumberField, TextField } from 'src/components';

import { BaseRequestShow } from '../base_requests/Show';

export const RequestPurchaseShow = () => {
	return (
		<BaseRequestShow>
			<TextField source="name" />
			<NumberField source="amount" />
			<NumberField source="quantity" />
		</BaseRequestShow>
	);
};
