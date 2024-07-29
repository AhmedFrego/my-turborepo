import { DateInput, TextInput } from 'src/components';

import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestResignationEdit = () => {
	return (
		<BaseRequestEdit>
			<TextInput source="reason" />
			<DateInput source="date_of_effective_resignation" />
		</BaseRequestEdit>
	);
};
