import { NumberField, TextField } from 'src/components';

import { BaseRequestShow } from '../base_requests/Show';

export const RequestSalaryRaiseShow = () => {
	return (
		<BaseRequestShow>
			<TextField source="reasons" />
			<NumberField source="amount" />
		</BaseRequestShow>
	);
};
