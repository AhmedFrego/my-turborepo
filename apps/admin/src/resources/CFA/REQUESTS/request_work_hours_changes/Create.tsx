import { ReferenceInput } from 'src/components';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestWorkHoursChangeCreate = () => {
	return (
		<BaseRequestCreate>
			<ReferenceInput
				optionText="to"
				reference="work_hours"
				source="new_work_hours_id"
			/>
		</BaseRequestCreate>
	);
};
