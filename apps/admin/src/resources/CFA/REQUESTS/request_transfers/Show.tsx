import { DateField, TextField } from 'src/components';

import { BaseRequestShow } from '../base_requests/Show';

export const RequestTransferShow = () => {
	return (
		<BaseRequestShow>
			<TextField source="job_title" />
			<TextField source="entity" />
			<DateField source="date_of_transfer" />
		</BaseRequestShow>
	);
};
