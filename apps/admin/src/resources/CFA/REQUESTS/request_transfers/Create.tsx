import { DateInput, TextInput } from 'src/components';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestTransferCreate = () => {
	return (
		<BaseRequestCreate>
			<TextInput source="job_title" />
			<TextInput source="entity" />
			<DateInput source="date_of_transfer" />
		</BaseRequestCreate>
	);
};
