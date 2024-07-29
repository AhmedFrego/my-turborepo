import { DateInput, TextInput } from 'src/components';

import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestTransferEdit = () => {
	return (
		<BaseRequestEdit>
			<TextInput source="job_title" />
			<TextInput source="entity" />
			<DateInput source="date_of_transfer" />
		</BaseRequestEdit>
	);
};
