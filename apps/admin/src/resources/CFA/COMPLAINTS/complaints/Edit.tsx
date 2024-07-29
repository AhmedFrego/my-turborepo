import { TextInput } from 'src/components';

import { BaseRequestEditProps } from '../../REQUESTS/base_requests/Edit';
import { BaseComplaintEdit } from '../base_complaints/Edit';

export const ComplaintEdit = (props: BaseRequestEditProps) => {
	return (
		<BaseComplaintEdit {...props}>
			<TextInput source="description" />
		</BaseComplaintEdit>
	);
};
