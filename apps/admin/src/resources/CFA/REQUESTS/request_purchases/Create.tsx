import { NumberInput, TextInput } from 'src/components';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestPurchaseCreate = () => {
	return (
		<BaseRequestCreate>
			<TextInput source="name" />
			<NumberInput
				grid={{ sm: 6 }}
				source="quantity"
			/>
			<NumberInput
				grid={{ sm: 6 }}
				source="amount"
			/>
		</BaseRequestCreate>
	);
};
