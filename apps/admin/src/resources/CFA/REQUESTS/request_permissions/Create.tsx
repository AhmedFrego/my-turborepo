import { DateInput, ReferenceTypeInput, TimeInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestPermissionCreate = () => {
	return (
		<BaseRequestCreate>
			<TimeInput source="from" />
			<TimeInput source="to" />
			<DateInput source="date_of_permission" />
			<ReferenceTypeInput
				category={Categories.Permissions}
				source="permission_type_id"
			/>
		</BaseRequestCreate>
	);
};
