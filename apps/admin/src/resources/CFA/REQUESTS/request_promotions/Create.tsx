import { ReferenceInput } from 'src/components';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestPromotionCreate = () => {
	return (
		<BaseRequestCreate>
			<ReferenceInput
				reference="job_titles"
				source="new_job_title_id"
			/>
		</BaseRequestCreate>
	);
};
