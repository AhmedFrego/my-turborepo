import { NumberInput, TextInput } from 'src/components';

import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestSalaryRaiseEdit = () => {
	return (
		<BaseRequestEdit>
			<TextInput
				grid={{ xs: 6 }}
				source="reasons"
			/>
			<NumberInput
				grid={{ xs: 6 }}
				source="amount"
			/>
		</BaseRequestEdit>
	);
};
