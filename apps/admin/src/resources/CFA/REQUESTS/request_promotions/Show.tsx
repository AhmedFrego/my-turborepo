import { ReferenceField } from 'src/components';

import { BaseRequestShow } from '../base_requests/Show';

export const RequestPromotionShow = () => {
	return (
		<BaseRequestShow>
			<ReferenceField
				reference="job_titles"
				source="new_job_title_id"
			/>
		</BaseRequestShow>
	);
};
