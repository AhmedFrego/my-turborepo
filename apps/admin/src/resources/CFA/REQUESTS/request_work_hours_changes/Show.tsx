import { ReferenceField } from 'src/components';

import { BaseRequestShow } from '../base_requests/Show';

export const RequestWorkHoursChangeShow = () => {
	return (
		<BaseRequestShow>
			<ReferenceField
				reference="work_hours"
				source="new_work_hours_id"
			/>
		</BaseRequestShow>
	);
};
