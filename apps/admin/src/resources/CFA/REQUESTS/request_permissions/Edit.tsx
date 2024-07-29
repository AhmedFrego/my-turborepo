import { DateInput, ReferenceTypeInput, TimeInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestPermissionEdit = () => {
	return (
		<BaseRequestEdit>
			<TimeInput source="from" />
			<TimeInput source="to" />
			<DateInput source="date_of_permission" />
			<ReferenceTypeInput
				category={Categories.Permissions}
				source="permission_type_id"
			/>
		</BaseRequestEdit>
	);
};
