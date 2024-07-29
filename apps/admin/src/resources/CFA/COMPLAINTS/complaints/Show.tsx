import { TextField } from 'src/components';

import { BaseComplaintShow } from '../base_complaints/Show';

export const ComplaintShow = () => {
	return (
		<BaseComplaintShow>
			<TextField source="description" />
		</BaseComplaintShow>
	);
};
