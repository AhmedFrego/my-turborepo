import { ReferenceField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestPromotionList = () => {
	return (
		<BaseRequestList filter={filters}>
			<ReferenceField
				reference="job_titles"
				source="new_job_title_id"
			/>
		</BaseRequestList>
	);
};
