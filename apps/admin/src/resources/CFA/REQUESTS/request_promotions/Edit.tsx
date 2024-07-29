import { ReferenceInput } from 'src/components';

import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestPromotionEdit = () => {
	return (
		<BaseRequestEdit>
			<ReferenceInput
				reference="job_titles"
				source="new_job_title_id"
			/>
		</BaseRequestEdit>
	);
};
