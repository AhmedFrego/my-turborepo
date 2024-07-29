import { TextInput } from 'src/components';

import { BaseComplaintCreate } from '../base_complaints/Create';

export const ComplaintCreate = () => {
	return (
		<BaseComplaintCreate>
			<TextInput source="description" />
		</BaseComplaintCreate>
	);
};
