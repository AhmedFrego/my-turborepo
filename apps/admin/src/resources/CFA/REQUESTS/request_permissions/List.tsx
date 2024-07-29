import { DateField, ReferenceTypeField, TimeField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestPermissionList = () => {
	return (
		<BaseRequestList filters={filters}>
			<TimeField source="from" />
			<TimeField source="to" />
			<DateField source="date_of_permission" />
			<ReferenceTypeField source="permission_type_id" />
		</BaseRequestList>
	);
};
