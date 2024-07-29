import { DateInput, TextInput } from 'src/components';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestResignationCreate = () => {
	return (
		<BaseRequestCreate>
			<TextInput source="reason" />
			<DateInput source="date_of_effective_resignation" />
		</BaseRequestCreate>
	);
};
