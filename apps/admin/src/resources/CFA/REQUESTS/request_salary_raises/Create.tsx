import { NumberInput, TextInput } from 'src/components';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestSalaryRaiseCreate = () => {
	return (
		<BaseRequestCreate>
			<TextInput
				grid={{ xs: 6 }}
				source="reasons"
			/>
			<NumberInput
				grid={{ xs: 6 }}
				source="amount"
			/>
		</BaseRequestCreate>
	);
};
