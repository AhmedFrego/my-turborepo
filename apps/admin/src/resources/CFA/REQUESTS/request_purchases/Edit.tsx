import { NumberInput, TextInput } from 'src/components';

import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestPurchaseEdit = () => {
	return (
		<BaseRequestEdit>
			<TextInput source="name" />
			<NumberInput
				grid={{ sm: 6 }}
				source="quantity"
			/>
			<NumberInput
				grid={{ sm: 6 }}
				source="amount"
			/>
		</BaseRequestEdit>
	);
};
