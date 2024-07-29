import { DateField, TextField } from 'src/components';

import { BaseRequestShow } from '../base_requests/Show';

export const RequestResignationShow = () => {
	return (
		<BaseRequestShow>
			<TextField source="reason" />
			<DateField source="date_of_effective_resignation" />
		</BaseRequestShow>
	);
};
