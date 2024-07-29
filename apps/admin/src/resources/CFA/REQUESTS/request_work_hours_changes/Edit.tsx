import { ReferenceInput } from 'src/components';

import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestWorkHoursChangeEdit = () => {
	return (
		<BaseRequestEdit>
			<ReferenceInput
				optionText="to"
				reference="work_hours"
				source="new_work_hours_id"
			/>
		</BaseRequestEdit>
	);
};
