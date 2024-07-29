import { DateField, ReferenceField, ReferenceTypeField } from 'src/components';

import { VacationsActions } from './VacationsActions';
import { BaseRequestShow } from '../base_requests/Show';

export const RequestVacationShow = () => {
	return (
		<BaseRequestShow actionsComponent={<VacationsActions />}>
			<DateField source="from" />
			<DateField source="to" />
			<ReferenceField
				reference="employees"
				source="created_by"
			/>
			<ReferenceTypeField source="vacation_type_id" />
		</BaseRequestShow>
	);
};
