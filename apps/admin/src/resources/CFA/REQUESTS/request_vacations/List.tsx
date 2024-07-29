import { DateField, ReferenceField, ReferenceTypeField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestVacationList = () => {
	return (
		<BaseRequestList filters={filters}>
			<DateField source="from" />
			<DateField source="to" />
			<ReferenceField
				reference="employees"
				source="created_by"
			/>
			<ReferenceTypeField source="vacation_type_id" />
		</BaseRequestList>
	);
};
