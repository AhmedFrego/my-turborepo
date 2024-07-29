import { DateField, ReferenceTypeField, TimeField } from 'src/components';

import { BaseRequestShow } from '../base_requests/Show';

export const RequestPermissionShow = () => {
	return (
		<BaseRequestShow>
			<TimeField source="from" />
			<TimeField source="to" />
			<DateField source="date_of_permission" />
			<ReferenceTypeField source="permission_type_id" />
		</BaseRequestShow>
	);
};
