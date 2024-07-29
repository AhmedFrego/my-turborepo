import { ReferenceField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestWorkHoursChangeList = () => {
	return (
		<BaseRequestList filter={filters}>
			<ReferenceField
				reference="work_hours"
				source="new_work_hours_id"
			/>
		</BaseRequestList>
	);
};
